import { business } from "@/data/business";

/**
 * Lead intake endpoint used by the instant estimate wizard, the short inline lead forms,
 * and the consultation scheduler.
 *
 * Delivery is intentionally dependency-free: leads are always written to the server log
 * (visible in Vercel's runtime logs), and are additionally forwarded to whichever of these
 * environment variables are configured:
 *
 *   LEAD_WEBHOOK_URL  — any HTTPS endpoint (Zapier, Make, a CRM, Slack incoming webhook).
 *   RESEND_API_KEY    — sends the lead as an email via Resend.
 *   LEAD_TO_EMAIL     — recipient for the Resend email (defaults to the business email).
 *   LEAD_FROM_EMAIL   — verified Resend sender address.
 *
 * With none of them set the endpoint still succeeds, so the front end never breaks —
 * but leads will only exist in the logs. Configure at least one before going live.
 */

export const dynamic = "force-dynamic";

type LeadPayload = Record<string, unknown> & {
  source?: string;
  name?: string;
  phone?: string;
  email?: string;
};

const MAX_BODY_BYTES = 16_000;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function formatLead(lead: LeadPayload): string {
  return Object.entries(lead)
    .filter(([, value]) => value !== "" && value !== null && value !== undefined)
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : String(value)}`)
    .join("\n");
}

async function forwardToWebhook(lead: LeadPayload) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
}

async function sendEmail(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !from) return;

  const to = process.env.LEAD_TO_EMAIL || business.email;
  const subject = `New ${lead.source ?? "website"} lead — ${lead.name ?? "unknown"}`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text: formatLead(lead),
      reply_to: isNonEmptyString(lead.email) ? lead.email : undefined,
    }),
  });
}

export async function POST(request: Request) {
  let lead: LeadPayload;

  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json({ ok: false, error: "Payload too large" }, { status: 413 });
    }
    lead = JSON.parse(raw) as LeadPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isNonEmptyString(lead.name) || !isNonEmptyString(lead.phone)) {
    return Response.json(
      { ok: false, error: "Name and phone are required" },
      { status: 422 },
    );
  }

  const enriched: LeadPayload = {
    ...lead,
    receivedAt: new Date().toISOString(),
  };

  console.log("[lead]", JSON.stringify(enriched));

  // Delivery is best-effort: a failing webhook or mail provider must not lose the visitor's
  // submission, since the lead is already captured in the log line above.
  const results = await Promise.allSettled([forwardToWebhook(enriched), sendEmail(enriched)]);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[lead] delivery failed:", result.reason);
    }
  }

  return Response.json({ ok: true });
}
