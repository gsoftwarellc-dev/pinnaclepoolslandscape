import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import ConsultationScheduler from "@/components/ConsultationScheduler";
import TrustBar from "@/components/TrustBar";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Schedule a Free Consultation",
  description:
    "Book a free on-site pool and backyard design consultation with Pinnacle Pools and Landscape. Pick a day and time that works — no obligation.",
  alternates: { canonical: "/schedule" },
};

const expectations = [
  {
    title: "We walk your yard",
    text: "Measurements, access, grade, setbacks, and utilities — the things that decide what's actually buildable.",
  },
  {
    title: "We talk budget honestly",
    text: "You'll hear what your number realistically buys before anyone draws anything.",
  },
  {
    title: "You get a free 3D design",
    text: "A photorealistic model of your backyard, on your lot, with no cost and no obligation.",
  },
];

export default function SchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Schedule a Consultation", path: "/schedule" },
            ]),
          ),
        }}
      />

      <section className="bg-black">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1668c4]">
            Free On-Site Consultation
          </span>
          <h1
            className="mt-4 font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Book Your Design Visit
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">
            Pick a day and a two-hour window. We&apos;ll confirm by phone, come out to see the
            yard, and start your free 3D design.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-neutral-100 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_20rem]">
          <ConsultationScheduler />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-bold text-black">What happens at the visit</h2>
              <ul className="mt-4 space-y-4">
                {expectations.map((item) => (
                  <li key={item.title}>
                    <div className="flex gap-2.5 text-sm font-semibold text-black">
                      <span aria-hidden className="text-[#0f4c92]">
                        ✓
                      </span>
                      {item.title}
                    </div>
                    <p className="mt-1 pl-6 text-sm leading-relaxed text-neutral-600">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-black p-6 text-center">
              <p className="text-sm text-neutral-400">Would you rather talk right now?</p>
              <a
                href={business.phoneHref}
                className="mt-3 block rounded-md bg-[#1668c4] px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#0f4c92]"
              >
                Call {business.phone}
              </a>
              <a
                href={business.smsHref}
                className="mt-2.5 block rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-[#1668c4] hover:text-[#1668c4]"
              >
                Text Us
              </a>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-bold text-black">Not ready for a visit?</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Get a budget range in about 90 seconds without talking to anyone.
              </p>
              <Link
                href="/estimate"
                className="mt-4 block rounded-md border border-black/15 px-5 py-3 text-center text-sm font-bold text-black transition hover:border-[#1668c4]"
              >
                Get an Instant Estimate
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
