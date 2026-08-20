import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all of Pinnacle Pools and Landscape's services: custom pool construction, pool decks, landscaping, driveways & walkways, fire pits, artificial turf, and concrete.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="flex min-h-[70svh] items-center bg-black">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <Badge className="bg-[#1668c4] text-white hover:bg-[#1668c4]">
              {services.length} Services
            </Badge>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
            <p className="mt-4 max-w-lg text-lg text-neutral-300">
              From custom pool construction to full landscape design, we handle every part of
              your backyard project — licensed, insured, and family-owned.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/estimate"
                className="btn-tactile rounded-md bg-[#1668c4] px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#0f4c92]"
              >
                Get a Free Estimate
              </Link>
              <Link
                href="/gallery"
                className="btn-tactile rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:border-[#1668c4] hover:text-[#1668c4]"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/gallery/Pinnacle-Pool-Construction.jpg"
              alt="A completed pool and hardscape project by Pinnacle Pools and Landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
