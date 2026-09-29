import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Static export for Apache/PHP hosting, which cannot run a Node server.
   *
   * Two consequences handled elsewhere:
   *   - /api/lead does not exist in an export, so the forms post to /api/lead.php
   *     (see public/api/lead.php) and NEXT_PUBLIC_LEAD_ENDPOINT points at it.
   *   - redirects() is not supported, so the /quote -> /estimate redirect moves
   *     into .htaccess.
   */
  output: "export",
  // The export has no server to resize images, so originals are served as-is.
  images: { unoptimized: true },
  // Emits each route as a directory with index.html, which is what Apache serves by default.
  trailingSlash: true,
};

export default nextConfig;
