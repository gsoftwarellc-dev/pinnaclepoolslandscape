import type { Metadata } from "next";
import { business } from "@/data/business";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description: `Request a free estimate from ${business.name} for pool construction, landscaping, or hardscape work.`,
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Get a Free Estimate</h1>
      <p className="mt-4 text-lg text-slate-700">
        We offer free estimates. Tell us about your project and we&apos;ll follow up with next
        steps — no obligation.
      </p>
      <div className="mt-8">
        <QuoteForm />
      </div>
    </section>
  );
}
