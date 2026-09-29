import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { serviceAreas } from "@/data/serviceAreas";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Pinnacle Pools and Landscape serves Elk Grove, Sacramento, Folsom, Roseville, El Dorado Hills, Rancho Cordova, Citrus Heights, and Wilton, CA.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-black">
        <Image
          src="/gallery/pinnacle-pools-geometric-pool-spa-pebble-finish-1200.webp"
          alt="Geometric pool and spa with pebble finish by Pinnacle Pools and Landscape, Sacramento CA"
          fill
          priority
          // The source photo is only 640px wide, so asking for anything larger just
          // upscales. Capping the request keeps the transform honest on wide screens.
          sizes="640px"
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white">Areas We Serve</h1>
          <p className="mt-4 text-lg text-neutral-100">
            We build pools and landscapes for homeowners throughout the greater Sacramento
            region.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-xl border border-black/10 p-6 hover:border-[#1668c4] hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {area.city}, {area.state}
              </h2>
              <p className="mt-1 text-xs text-slate-500">{area.county}</p>
              <p className="mt-3 text-sm text-slate-600">{area.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
