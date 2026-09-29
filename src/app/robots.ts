import type { MetadataRoute } from "next";
import { business } from "@/data/business";

// Emitted as a file at build time so the static export can include it.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", business.url).toString(),
  };
}
