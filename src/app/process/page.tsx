import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { processPhases } from "@/data/process";
import CtaBanner from "@/components/CtaBanner";
import FaqSection, { type FaqItem } from "@/components/FaqSection";
import QuickLeadForm from "@/components/QuickLeadForm";
import Reveal from "@/components/Reveal";
import TrustBar from "@/components/TrustBar";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Pool Design & Construction Process",
  description:
    "See exactly how we build a custom pool — from free consultation and 3D design through permits, excavation, gunite, decking, plaster, and final walkthrough.",
  alternates: { canonical: "/process" },
};

const faqs: FaqItem[] = [
  {
    q: "How long does the whole pool building process take?",
    a: "Plan on roughly four to seven months end to end. Design and proposal take two to three weeks, engineering and permitting run three to eight weeks depending on your city, and construction itself is typically eight to twelve weeks. Landscape and finishing work can add another one to three weeks.",
  },
  {
    q: "When do I have to make my final material selections?",
    a: "Tile, coping, decking, and interior finish selections are locked in before the tile and decking phase begins — usually around the time excavation starts. Your designer walks you through samples so you're choosing from real materials, not a screen.",
  },
  {
    q: "How are payments scheduled?",
    a: "Payments are tied to construction milestones rather than calendar dates, so you pay for work that has actually been completed. The full schedule is spelled out in your proposal before you sign anything.",
  },
  {
    q: "Will my yard be destroyed during construction?",
    a: "There will be heavy equipment and an access route through part of your yard — that's unavoidable. We protect what we can, keep the site cleaned down between phases, and restore the access route as part of the landscape phase.",
  },
  {
    q: "Who handles the permits and inspections?",
    a: "We do. We prepare the engineered plans, submit the permit application, respond to plan-check corrections, and schedule every inspection. You never have to visit the building department.",
  },
  {
    q: "Can I make changes once construction has started?",
    a: "Small changes are often possible, but they get more expensive at every phase. That's exactly why we build the 3D model first — changing the design on screen is free, and changing a poured shell is not.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Our Process", path: "/process" },
            ]),
            faqJsonLd(faqs),
          ]),
        }}
      />

      <section className="relative overflow-hidden bg-black">
        <Image
          src="/gallery/Pinnacle-Pool-Construction.jpg"
          alt="Pool under construction by Pinnacle Pools and Landscape"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dac026]">
            How We Build
          </span>
          <h1
            className="mt-4 font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}
          >
            Your Pool, Phase by Phase
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200">
            Most homeowners have never built a pool before, and the not-knowing is the stressful
            part. Here is every stage of a Pinnacle project — what happens, roughly how long it
            takes, and what we need from you along the way.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/estimate"
              className="btn-glow rounded-sm px-7 py-4 text-sm font-semibold text-black"
              style={{ ["--btn-glow-bg" as string]: "#dac026" }}
            >
              Start Your Free 3D Design
            </Link>
            <a
              href={business.phoneHref}
              className="btn-tactile rounded-md border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-[#dac026]"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[1.35rem] top-3 hidden w-px bg-gradient-to-b from-[#dac026] via-neutral-300 to-transparent sm:block"
            style={{ height: "calc(100% - 3rem)" }}
          />

          <ol className="space-y-10 sm:space-y-14">
            {processPhases.map((phase, i) => (
              <Reveal key={phase.number} delay={i * 40}>
                <li className="relative sm:pl-16">
                  <div className="absolute left-0 top-0 hidden h-11 w-11 items-center justify-center rounded-full border-2 border-[#dac026] bg-white text-sm font-bold text-black sm:flex">
                    {phase.number}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white sm:hidden">
                      {phase.number}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-black">{phase.title}</h2>
                    <span className="rounded-full bg-[#fbf8e8] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8a7315]">
                      {phase.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-lg leading-relaxed text-neutral-700">{phase.summary}</p>

                  <ul className="mt-5 space-y-2.5">
                    {phase.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-neutral-600">
                        <span aria-hidden className="mt-0.5 shrink-0 font-bold text-[#8a7315]">
                          ✓
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 rounded-lg border-l-[3px] border-[#dac026] bg-neutral-50 px-4 py-3 text-sm leading-relaxed text-neutral-700">
                    <strong className="font-bold text-black">Your part:</strong> {phase.yourPart}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
              Ready When You Are
            </span>
            <h2
              className="mt-3 font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Phase one starts with a conversation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              There is no cost and no obligation to get a 3D design. Tell us about your yard and
              we&apos;ll show you what it could become.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/estimate"
                className="btn-tactile rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#dac026] hover:text-black"
              >
                Get an Instant Estimate
              </Link>
              <Link
                href="/schedule"
                className="btn-tactile rounded-md border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:border-[#dac026]"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <QuickLeadForm source="process-page" />
          </div>
        </div>
      </section>

      <FaqSection heading="Process Questions, Answered" faqs={faqs} />

      <CtaBanner
        heading="Still have questions about the build?"
        subheading="Talk to the person who would actually run your project — not a call center."
      />
    </>
  );
}
