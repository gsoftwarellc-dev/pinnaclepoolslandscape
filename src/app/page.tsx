import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { processSummary } from "@/data/process";
import { resources } from "@/data/resources";
import { transformations } from "@/data/transformations";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import AwardsBar from "@/components/AwardsBar";
import BeforeAfter from "@/components/BeforeAfter";
import FaqSection, { type FaqItem } from "@/components/FaqSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import QuickLeadForm from "@/components/QuickLeadForm";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import TrustBar from "@/components/TrustBar";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sacramento Pool Builder | Custom Pools & Backyards",
  description:
    "Award-winning custom pool builder serving Sacramento, Elk Grove, Folsom, Roseville, El Dorado Hills & Granite Bay. Free 3D pool design, instant estimates, financing available. Licensed & insured.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "20+", label: "Years Experience", sub: "Concrete & construction" },
  { value: "9", label: "Cities Served", sub: "Greater Sacramento region" },
  { value: "3D", label: "Design Included", sub: "Free with every project" },
  { value: "100%", label: "Licensed & Insured", sub: "Family-owned & operated" },
];

const homeFaqs: FaqItem[] = [
  {
    q: "How much does a custom pool cost in the Sacramento area?",
    a: "Most of our custom in-ground pools land between $60,000 and $150,000 depending on size, features, decking, and site conditions. Complete backyard projects that include landscape and outdoor living run higher. Our instant estimate tool gives you a realistic range in about 90 seconds, and our written proposals are fixed and itemized.",
  },
  {
    q: "How long does it take to build a pool?",
    a: "Plan on roughly four to seven months end to end. Design and proposal take two to three weeks, engineering and permitting run three to eight weeks depending on your city, and construction itself is typically eight to twelve weeks. Starting in the fall is the best way to be swimming by summer.",
  },
  {
    q: "Do you really include a free 3D design?",
    a: "Yes. Every custom pool project includes a photorealistic 3D model rendered on your actual lot, at no cost and with no obligation. You can move the spa, widen the tanning ledge, or change the finish while revisions are still free — which is exactly the point.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. Through our financing partner, pool loans go up to $100,000 with terms up to 20 years, no prepayment penalties, and no equity or appraisal required for signature loans. Approvals often come back within one business day.",
  },
  {
    q: "Which cities do you serve?",
    a: "We build across the greater Sacramento region, including Elk Grove, Sacramento, Folsom, El Dorado Hills, Roseville, Granite Bay, Rancho Cordova, Citrus Heights, and Wilton. Elk Grove is our home base.",
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes — California license #${business.license}, fully insured, and family owned and operated. You can verify our license on the Contractors State License Board website, and we'd encourage you to check every builder you talk to.`,
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaqs)) }}
      />

      {/* ---------------------------------------------------- 1. Beautiful project */}
      <section className="relative flex min-h-[82svh] w-full flex-col items-center justify-center overflow-hidden bg-black">
        <Image
          src="/background_hero.png"
          alt="Custom pool and outdoor living space built by Pinnacle Pools and Landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-12 pt-16 text-center sm:pb-20">
          <span className="mb-6 rounded-full border border-[#dac026]/40 bg-[#dac026]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#dac026] backdrop-blur">
            Licensed &amp; Insured · CA Lic. #{business.license}
          </span>

          <h1
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", lineHeight: 1.03 }}
          >
            Custom Pools
            <br />
            <span className="italic text-[#dac026]">&amp; Complete Backyards</span>
            <br />
            Sacramento, CA
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-100 sm:text-xl">
            See your new backyard in photorealistic 3D before we ever break ground — free, with
            no obligation. Family-owned, licensed, and building across the region for 20+ years.
          </p>

          <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link
              href="/estimate"
              className="btn-glow group w-full justify-center rounded-sm px-8 py-4 text-sm font-bold text-black sm:w-auto"
              style={{ ["--btn-glow-bg" as string]: "#dac026" }}
            >
              Start Your Free 3D Pool Design
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/estimate"
              className="btn-tactile w-full rounded-sm border border-white/40 bg-white/10 px-8 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:border-[#dac026] sm:w-auto"
            >
              Get an Instant Estimate
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-neutral-300">
            <a href={business.phoneHref} className="font-semibold text-white hover:text-[#dac026]">
              Call {business.phone}
            </a>
            <span aria-hidden className="hidden text-neutral-600 sm:inline">
              ·
            </span>
            <a href={business.smsHref} className="font-semibold text-white hover:text-[#dac026]">
              Text Us
            </a>
            <span aria-hidden className="hidden text-neutral-600 sm:inline">
              ·
            </span>
            <Link href="/schedule" className="font-semibold text-white hover:text-[#dac026]">
              Book a Consultation
            </Link>
          </div>

          <div className="mt-14 grid w-full grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:mt-16 sm:grid-cols-4 sm:gap-8 sm:pt-10">
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

      {/* ------------------------------------------------------- 2. Establish trust */}
      <TrustBar />
      <AwardsBar />

      {/* -------------------------------------------- 3. Show what we can build */}
      <FeaturedProjects />

      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
              What We Do
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              One Contractor, the Entire Backyard
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Pools, spas, decking, concrete, landscaping, turf and fire features — designed
              together and built by one licensed team, not five subcontractors.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- 3D design experience */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:min-h-[36rem] lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
              Custom 3D Pool Design
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              See Your Backyard in 3D
              <br />
              Before We Break Ground
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Every custom pool we build comes with a professional 3D model, so you don&apos;t
              just see your new backyard — you experience it. Walk through the design, adjust the
              details, and know exactly what you&apos;re getting before construction ever starts.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Free 3D design preview with every custom pool",
                "Unlimited revisions while changes are still free",
                "Submission-ready renderings for HOA design review",
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
                href="/estimate"
                className="btn-tactile rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#dac026] hover:text-black"
              >
                Start Your Free 3D Design
              </Link>
              <Link
                href="/schedule"
                className="btn-tactile rounded-md border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:border-[#dac026]"
              >
                Schedule a Consultation
              </Link>
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

      {/* --------------------------------------------------- 4. Explain our process */}
      <section className="bg-black py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dac026]">
              How It Works
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              From First Sketch to First Swim
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              You&apos;ll always know what&apos;s happening next, who&apos;s doing it, and when.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSummary.map((phase, i) => (
              <Reveal key={phase.number} delay={i * 70}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="text-3xl font-bold text-[#dac026]">{phase.number}</span>
                  <h3 className="mt-3 text-xl font-bold text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/process"
              className="btn-tactile inline-block rounded-md border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#dac026] hover:text-[#dac026]"
            >
              See the Full 10-Phase Process →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ Before & after proof */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
            Before &amp; After
          </span>
          <h2
            className="mt-3 font-bold tracking-tight text-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Real Transformations
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Drag the slider on any project to see what the yard looked like before we started.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <BeforeAfter pairs={transformations} />
        </Reveal>
      </section>

      {/* --------------------------------------------------------- Social proof */}
      <Reviews />

      {/* ------------------------------------------------- 5. Answer questions */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
              Learn Before You Build
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Pool Buying Guides
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Straight answers on cost, timelines, features and finishes — including the parts
              our industry usually leaves out.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {resources.slice(0, 3).map((resource, i) => (
              <Reveal key={resource.slug} delay={i * 70}>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-[#dac026] hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {resource.readTime}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-black group-hover:text-[#8a7315]">
                    {resource.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                    {resource.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-black">
                    Read the guide{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/resources"
              className="btn-tactile inline-block rounded-md border border-black/15 px-7 py-3.5 text-sm font-semibold text-black transition hover:border-[#dac026]"
            >
              Browse All Guides →
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection heading="Frequently Asked Questions" faqs={homeFaqs} />

      {/* ------------------------------------------------ 6. Capture & qualify lead */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24">
        <Image
          src="/new/pool-water-feature-turf-deck.jpeg"
          alt=""
          aria-hidden
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dac026]">
              Let&apos;s Get Started
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Two Ways to Begin
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-300">
              Want a number first? Use the instant estimate tool — nine questions, about 90
              seconds, no phone call required. Ready to talk? Leave your details and we&apos;ll
              call you back, usually the same day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/estimate"
                className="btn-glow rounded-sm px-6 py-3.5 text-sm font-bold text-black"
                style={{ ["--btn-glow-bg" as string]: "#dac026" }}
              >
                Get an Instant Estimate
              </Link>
              <Link
                href="/schedule"
                className="btn-tactile rounded-md border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:border-[#dac026] hover:text-[#dac026]"
              >
                Book a Consultation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/15 bg-black/70 p-6 backdrop-blur sm:p-8">
              <QuickLeadForm source="homepage" dark />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ Service areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
              Where We Work
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Areas We Serve
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Proudly building for homeowners across the greater Sacramento region.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-lg border border-black/10 bg-neutral-50 px-4 py-3.5 text-center text-sm font-semibold text-black transition hover:border-[#dac026] hover:bg-[#fbf8e8]"
              >
                {area.city}, {area.state}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Ready to see what your backyard could be?"
        subheading="Free consultation, free 3D design, and an honest conversation about budget — no obligation."
      />
    </>
  );
}
