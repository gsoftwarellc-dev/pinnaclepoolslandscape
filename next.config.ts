import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old flat quote form was replaced by the multi-step estimate tool. Kept as a
      // permanent redirect so existing links, ads, and indexed URLs land on the new flow.
      { source: "/quote", destination: "/estimate", permanent: true },
    ];
  },
};

export default nextConfig;
