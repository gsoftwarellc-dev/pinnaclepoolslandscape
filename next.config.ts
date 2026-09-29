import type { NextConfig } from "next";

/*
 * Two deployment targets share this config.
 *
 * Vercel (the live site) runs the app normally, with the /api/lead route and
 * next/image optimization.
 *
 * Apache/PHP hosting cannot run a Node server, so scripts/build-static.sh sets
 * STATIC_EXPORT=1 to emit a plain HTML site into out/. That target loses server
 * routes and image optimization, which is why the lead forms fall back to the
 * PHP endpoint in public/api/lead.php. Export mode is opt-in so a stray build
 * can never strip the API route out of production.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      // No server to resize images, so originals are served as-is.
      images: { unoptimized: true },
      // Each route becomes a directory with index.html, which Apache serves by default.
      trailingSlash: true,
    }
  : {
      async redirects() {
        return [
          // The old flat quote form was replaced by the multi-step estimate tool. Kept as a
          // permanent redirect so existing links, ads, and indexed URLs land on the new flow.
          { source: "/quote", destination: "/estimate", permanent: true },
        ];
      },
    };

export default nextConfig;
