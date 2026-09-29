<?php
/**
 * Lead intake endpoint for the static-export build, mirroring src/app/api/lead/route.ts.
 *
 * The Next.js API route cannot run on Apache/PHP hosting, so the estimate wizard, the
 * consultation scheduler, and the quick lead forms post here instead. The request and
 * response contract is identical: JSON in, {"ok":true} out, so the front end is unchanged
 * apart from the endpoint URL.
 *
 * Configuration lives in api/config.php, which is kept out of the repo because it holds
 * the Resend key. See api/config.example.php.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const MAX_BODY_BYTES = 16000;

function respond(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$config = is_file(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
$resendKey = $config['RESEND_API_KEY'] ?? getenv('RESEND_API_KEY') ?: '';
$fromEmail = $config['LEAD_FROM_EMAIL'] ?? getenv('LEAD_FROM_EMAIL') ?: '';
$toEmail = $config['LEAD_TO_EMAIL'] ?? getenv('LEAD_TO_EMAIL') ?: 'terry@pinnacleyard.com';
$webhookUrl = $config['LEAD_WEBHOOK_URL'] ?? getenv('LEAD_WEBHOOK_URL') ?: '';

$raw = file_get_contents('php://input') ?: '';
if (strlen($raw) > MAX_BODY_BYTES) {
    respond(413, ['ok' => false, 'error' => 'Payload too large']);
}

$lead = json_decode($raw, true);
if (!is_array($lead)) {
    respond(400, ['ok' => false, 'error' => 'Invalid JSON body']);
}

$isNonEmpty = static fn($v): bool => is_string($v) && trim($v) !== '';
if (!$isNonEmpty($lead['name'] ?? null) || !$isNonEmpty($lead['phone'] ?? null)) {
    respond(422, ['ok' => false, 'error' => 'Name and phone are required']);
}

$lead['receivedAt'] = gmdate('c');

/** Flattens the payload into the same readable key: value list the Node route sends. */
function formatLead(array $lead): string {
    $lines = [];
    foreach ($lead as $key => $value) {
        if ($value === '' || $value === null) {
            continue;
        }
        $lines[] = $key . ': ' . (is_array($value) ? implode(', ', $value) : (string) $value);
    }
    return implode("\n", $lines);
}

// Always log first: delivery is best effort, and a lead must never be lost because an
// outbound call failed.
error_log('[lead] ' . json_encode($lead));

function postJson(string $url, array $payload, array $headers = []): array {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => array_merge(['Content-Type: application/json'], $headers),
        CURLOPT_POSTFIELDS => json_encode($payload),
    ]);
    $body = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    return ['status' => $status, 'body' => (string) $body, 'error' => $error];
}

if ($webhookUrl !== '') {
    $result = postJson($webhookUrl, $lead);
    if ($result['status'] < 200 || $result['status'] >= 300) {
        error_log('[lead] webhook failed: ' . $result['status'] . ' ' . $result['error']);
    }
}

if ($resendKey !== '' && $fromEmail !== '') {
    $email = [
        'from' => $fromEmail,
        'to' => $toEmail,
        'subject' => 'New ' . ($lead['source'] ?? 'website') . ' lead — ' . ($lead['name'] ?? 'unknown'),
        'text' => formatLead($lead),
    ];
    if ($isNonEmpty($lead['email'] ?? null)) {
        $email['reply_to'] = $lead['email'];
    }

    $result = postJson('https://api.resend.com/emails', $email, ['Authorization: Bearer ' . $resendKey]);
    if ($result['status'] < 200 || $result['status'] >= 300) {
        error_log('[lead] resend rejected the send (' . $result['status'] . '): ' . $result['body']);
    }
} else {
    // Loud on purpose: an unset key here is the difference between a lead reaching the
    // business and sitting unnoticed in a log file.
    error_log('[lead] email skipped — RESEND_API_KEY or LEAD_FROM_EMAIL not configured');
}

respond(200, ['ok' => true]);
