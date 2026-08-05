import Link from "next/link";
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
      <section className="bg-[#faf6e0]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Areas We Serve</h1>
          <p className="mt-4 text-lg text-slate-700">
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
              className="rounded-xl border border-black/10 p-6 hover:border-[#dac026] hover:shadow-md"
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
