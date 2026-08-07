import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AwardsBar from "@/components/AwardsBar";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Pool Builder & Landscaping Company in Elk Grove, CA",
  description:
    "Family-owned pool construction and landscaping company serving Elk Grove, Sacramento, Folsom, Roseville & more. Free 3D pool designs, licensed & insured.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "20+", label: "Years Experience", sub: "Concrete & construction" },
  { value: "8", label: "Cities Served", sub: "Greater Sacramento region" },
  { value: "9", label: "Core Services", sub: "Pools to full landscapes" },
  { value: "100%", label: "Licensed & Insured", sub: "Family-owned & operated" },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[70svh] w-full flex-col items-center justify-center overflow-hidden bg-black">
        <Image
          src="/background_hero.png"
          alt="Custom pool and outdoor living space built by Pinnacle Pools and Landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-12 pt-16 text-center sm:pb-20">
          <h1
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", lineHeight: 1.02 }}
          >
            Custom Pools
            <br />
            <span className="italic text-[#dac026]">&amp; Landscapes</span>
            <br />
            Sacramento, CA
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-100 sm:text-xl">
            {business.name} designs and builds pools, decks, and landscapes across Elk Grove and
            greater Sacramento — with a free 3D preview before we ever break ground.
          </p>

          <div className="mb-14 mt-9 flex flex-wrap items-center justify-center gap-3 sm:mb-20 sm:gap-4">
            <Link
              href="/quote"
              className="btn-glow group rounded-sm px-7 py-4 text-sm font-semibold text-black"
              style={{ ["--btn-glow-bg" as string]: "#dac026" }}
            >
              Get a Free Estimate
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={business.phoneHref}
              className="btn-tactile rounded-sm border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:border-[#dac026]"
            >
              Call {business.phone}
            </a>
          </div>

          <div className="grid w-full grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4 sm:gap-8 sm:pt-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div
                  className="mb-2 font-bold leading-none text-white"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  {s.value}
                </div>
                <div className="mb-0.5 text-sm font-semibold text-white">{s.label}</div>
                <div className="text-sm text-neutral-300">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AwardsBar />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
            What We Do
          </span>
          <h2
            className="mt-3 font-bold tracking-tight text-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Our Services
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            From pool construction to full landscape design, we handle every part of your
            backyard project.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-28 sm:py-36 lg:py-44">
        <div className="grid items-center gap-12 lg:min-h-[36rem] lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
              Custom 3D Pool Design
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              See Your Custom Pool in 3D
              <br />
              Before We Break Ground
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Every custom pool we build comes with a professional 3D model, so you don&apos;t
              just see your new backyard — you experience it. Walk through the design, adjust
              the details, and know exactly what you&apos;re getting before construction ever
              starts.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Free 3D design preview with every custom pool",
                "Adjust shape, finishes, and features before we start",
                "Licensed, insured, and family-owned since day one",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-neutral-700">
                  <span aria-hidden className="mt-0.5 shrink-0 font-bold text-[#8a7315]">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="btn-tactile rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#dac026] hover:text-black"
              >
                Get Your Free 3D Design
              </Link>
              <a
                href={business.phoneHref}
                className="btn-tactile rounded-md border border-black/15 px-6 py-3 text-sm font-semibold text-black hover:border-[#dac026]"
              >
                Call {business.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="relative h-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[34rem]">
                <Image
                  src="/new/pool-raised-spa-tile-waterfall.jpg"
                  alt="Custom pool with a raised tile spa and waterfall feature built by Pinnacle Pools and Landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reviews />

      <section className="bg-black py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dac026]">
              Where We Work
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Areas We Serve
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Proudly serving homeowners across the greater Sacramento region.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white transition hover:border-[#dac026] hover:text-[#dac026]"
              >
                {area.city}, {area.state}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
