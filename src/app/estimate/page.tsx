import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Sparkles } from "lucide-react";
import { business, testimonials } from "@/data/business";
import EstimateWizard from "@/components/EstimateWizard";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Instant Pool Estimate — Build Your Pool Online",
  description:
    "Answer nine quick questions and get an instant budget range for your custom pool, spa, decking, and landscape project in the Sacramento region. Free, no obligation.",
  alternates: { canonical: "/estimate" },
};

const included = [
  "A realistic budget range for your project, on screen immediately",
  "A free 3D design of your actual backyard",
  "An itemised written proposal — no vague allowances",
  "Financing options if you want them",
];

export default function EstimatePage() {
  const review = testimonials[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Instant Estimate", path: "/estimate" },
            ]),
          ),
        }}
      />

      {/* Compact hero — the tool itself has to be reachable without a long scroll. */}
      <section className="relative overflow-hidden bg-black">
        <Image
          src="/new/modern-pool-sun-shelf-cabana.webp"
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 60%, rgba(23,23,23,1) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-5 text-center sm:py-12">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]"
            style={{ borderColor: "rgba(218,192,38,0.45)", color: "#1668c4" }}
          >
            <Sparkles size={13} aria-hidden />
            Build Your Pool
          </span>
          <h1
            className="mx-auto mt-3 max-w-3xl font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(1.5rem, 4.6vw, 3.1rem)", lineHeight: 1.06 }}
          >
            Get an Instant Project Estimate
          </h1>
        </div>
      </section>

      <section className="bg-neutral-100 pb-16 pt-6 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-7xl px-4">
          {/* Row one: the form gets the width, with only the contact card beside it. */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
            <div className="min-w-0">
              <EstimateWizard />

              <p className="mt-6 text-center text-sm text-neutral-600">
                Prefer to just talk it through?{" "}
                <a href={business.phoneHref} className="font-bold text-black underline">
                  Call {business.phone}
                </a>{" "}
                or{" "}
                <a href={business.smsHref} className="font-bold text-black underline">
                  send a text
                </a>
                .
              </p>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-neutral-200 bg-black p-6 text-center">
                <p className="text-sm text-neutral-400">Rather speak to someone?</p>
                <a
                  href={business.phoneHref}
                  className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#1668c4] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0f4c92]"
                >
                  <Phone size={16} aria-hidden />
                  {business.phone}
                </a>
                <a
                  href={business.smsHref}
                  className="mt-2.5 block rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-[#1668c4] hover:text-[#1668c4]"
                >
                  Text Us
                </a>
                <Link
                  href="/schedule"
                  className="mt-2.5 block rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-[#1668c4] hover:text-[#1668c4]"
                >
                  Book a Consultation
                </Link>
              </div>
            </aside>
          </div>

          {/* Row two: supporting reassurance, once the form has had first claim on attention. */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-base font-bold text-black">What you&apos;ll get</h2>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700">
                    <span aria-hidden className="mt-0.5 shrink-0 font-bold text-[#0f4c92]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#1668c4" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-neutral-700">
                &ldquo;{review.quote.slice(0, 180)}…&rdquo;
              </p>
              <p className="mt-3 text-sm font-bold text-black">
                {review.name} — {review.city}, CA
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} className="shrink-0 text-[#0f4c92]" aria-hidden />
                <h2 className="text-base font-bold text-black">Licensed &amp; insured</h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                CA License #{business.license}. Family owned, 20+ years of construction
                experience, and{" "}
                <Link href="/financing" className="font-semibold text-black underline">
                  financing available
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
