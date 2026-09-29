import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bundles only the files needed to run into .next/standalone, so the app can be
  // deployed as a self-contained zip without shipping node_modules.
  output: "standalone",
  async redirects() {
    return [
      // The old flat quote form was replaced by the multi-step estimate tool. Kept as a
      // permanent redirect so existing links, ads, and indexed URLs land on the new flow.
      { source: "/quote", destination: "/estimate", permanent: true },
    ];
  },
};

export default nextConfig;
