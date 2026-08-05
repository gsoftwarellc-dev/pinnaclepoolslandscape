import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/service-areas", "/gallery", "/contact", "/quote"].map((path) => ({
    url: new URL(path, business.url).toString(),
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

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...areaServiceRoutes];
}
