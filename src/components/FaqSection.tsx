export type FaqItem = { q: string; a: string };

export default function FaqSection({
  heading,
  faqs,
}: {
  heading: string;
  faqs: FaqItem[];
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <h2 className="text-2xl font-bold text-black sm:text-3xl">{heading}</h2>
      <div className="mt-6 divide-y divide-neutral-200 rounded-xl border border-neutral-200">
        {faqs.map((faq) => (
          <details key={faq.q} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-black [&::-webkit-details-marker]:hidden">
              <h3 className="text-base font-semibold">{faq.q}</h3>
              <span
                aria-hidden
                className="shrink-0 text-xl text-[#0f4c92] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-neutral-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
