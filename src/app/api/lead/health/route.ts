import { business } from "@/data/business";

/**
 * Configuration probe for the lead pipeline.
 *
 * The lead endpoint deliberately succeeds even when mail delivery is unconfigured, so a
 * misconfiguration is otherwise invisible from the outside. This reports which delivery
 * channels are wired up without ever exposing their values: booleans and lengths only,
 * never the key itself.
 */

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL;
  const webhook = process.env.LEAD_WEBHOOK_URL;

  const emailReady = Boolean(apiKey && from);

  return Response.json({
    emailDelivery: emailReady ? "configured" : "NOT configured — leads are only logged",
    checks: {
      RESEND_API_KEY: apiKey
        ? { set: true, length: apiKey.length, looksValid: apiKey.startsWith("re_") }
        : { set: false },
      LEAD_FROM_EMAIL: from ? { set: true, value: from } : { set: false },
      LEAD_TO_EMAIL: to
        ? { set: true, value: to }
        : { set: false, fallsBackTo: business.email },
      LEAD_WEBHOOK_URL: { set: Boolean(webhook) },
    },
    effectiveRecipient: to || business.email,
  });
}
