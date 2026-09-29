import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { resources } from "@/data/resources";

// Emitted as a file at build time so the static export can include it.
export const dynamic = "force-static";

/*
 * The static export sets trailingSlash, so it serves /services/ and 301s
 * /services. Listing the un-slashed form would point every sitemap entry at a
 * redirect, so the URLs are built to match whatever the current target serves.
 */
const useTrailingSlash = process.env.STATIC_EXPORT === "1";

function url(path: string): string {
  const absolute = new URL(path, business.url).toString();
  if (!useTrailingSlash || absolute.endsWith("/")) return absolute;
  return `${absolute}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/estimate",
    "/schedule",
    "/process",
    "/services",
    "/service-areas",
    "/gallery",
    "/resources",
    "/financing",
    "/contact",
  ].map((path) => ({
    url: url(path),
    lastModified: new Date(),
  }));

  const resourceRoutes = resources.map((r) => ({
    url: url(`/resources/${r.slug}`),
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: url(`/services/${s.slug}`),
    lastModified: new Date(),
  }));

  const areaRoutes = serviceAreas.map((a) => ({
    url: url(`/service-areas/${a.slug}`),
    lastModified: new Date(),
  }));

  const areaServiceRoutes = serviceAreas.flatMap((a) =>
    services.map((s) => ({
      url: url(`/service-areas/${a.slug}/${s.slug}`),
      lastModified: new Date(),
    })),
  );

  return [
    ...staticRoutes,
    ...resourceRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...areaServiceRoutes,
  ];
}
