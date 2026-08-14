import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { resources } from "@/data/resources";

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
    url: new URL(path, business.url).toString(),
    lastModified: new Date(),
  }));

  const resourceRoutes = resources.map((r) => ({
    url: new URL(`/resources/${r.slug}`, business.url).toString(),
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: new URL(`/services/${s.slug}`, business.url).toString(),
    lastModified: new Date(),
  }));

  const areaRoutes = serviceAreas.map((a) => ({
    url: new URL(`/service-areas/${a.slug}`, business.url).toString(),
    lastModified: new Date(),
  }));

  const areaServiceRoutes = serviceAreas.flatMap((a) =>
    services.map((s) => ({
      url: new URL(`/service-areas/${a.slug}/${s.slug}`, business.url).toString(),
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
