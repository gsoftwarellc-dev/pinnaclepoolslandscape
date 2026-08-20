import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/data/resources";
import { business } from "@/data/business";
import CtaBanner from "@/components/CtaBanner";
import QuickLeadForm from "@/components/QuickLeadForm";
import Reveal from "@/components/Reveal";
import TrustBar from "@/components/TrustBar";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pool Buying Guides & Resources",
  description:
    "Straight answers about pool cost, construction timelines, features, equipment and finishes — written by a licensed Sacramento-area pool builder.",
  alternates: { canonical: "/resources" },
};

const categoryOrder = ["Cost & Budget", "Planning", "Design", "Equipment & Materials"] as const;

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
            ]),
          ),
        }}
      />

      <section className="bg-black">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1668c4]">
            Learn Before You Build
          </span>
          <h1
            className="mt-4 font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Pool Buying Guides
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">
            No sales pitch and no gated PDFs — just the answers we give homeowners at the kitchen
            table, including the parts that aren&apos;t flattering to our industry.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {categoryOrder.map((category) => {
          const items = resources.filter((r) => r.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-14 last:mb-0">
              <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-[#0f4c92]">
                {category}
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {items.map((resource, i) => (
                  <Reveal key={resource.slug} delay={i * 60}>
                    <Link
                      href={`/resources/${resource.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-[#1668c4] hover:shadow-md"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        {resource.readTime}
                      </span>
                      <h3 className="mt-2 text-xl font-bold leading-snug text-black group-hover:text-[#0f4c92]">
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
            </div>
          );
        })}
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2
              className="font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Still have a question we didn&apos;t answer?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Ask us directly. You&apos;ll talk to someone who builds pools, not a call center —
              and there&apos;s no obligation attached to a conversation.
            </p>
            <p className="mt-4 text-neutral-600">
              Call{" "}
              <a href={business.phoneHref} className="font-semibold text-black underline">
                {business.phone}
              </a>{" "}
              or{" "}
              <a href={business.smsHref} className="font-semibold text-black underline">
                text us
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <QuickLeadForm
              source="resources-hub"
              heading="Ask a Pool Builder"
              subheading="Leave your details and we'll answer your question — no pressure, no sales script."
            />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Done researching? Let's see your yard."
        subheading="Free on-site consultation and a 3D design of your backyard, at no cost."
      />
    </>
  );
}
