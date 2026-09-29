/**
 * Where the lead forms POST.
 *
 * On Vercel this is the Next.js route at /api/lead. The static export for
 * Apache/PHP hosting has no server routes, so that build sets
 * NEXT_PUBLIC_LEAD_ENDPOINT to /api/lead.php instead.
 */
export const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "/api/lead";
