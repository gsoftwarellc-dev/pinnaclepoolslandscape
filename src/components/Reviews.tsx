"use client";

import { testimonials } from "@/data/business";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#dac026">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof testimonials)[number] }) {
  return (
    <div className="group flex h-full w-[22rem] shrink-0 flex-col rounded-[10px] border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-black/30 hover:shadow-md sm:w-[26rem]">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-bold leading-tight text-black">{review.name}</div>
          <div className="mt-0.5 text-xs leading-tight text-neutral-500">{review.city}, CA</div>
        </div>
      </div>
      <Stars />
      <p className="flex-1 text-sm leading-relaxed text-neutral-700">&ldquo;{review.quote}&rdquo;</p>
    </div>
  );
}

export default function Reviews() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24"
        style={{ background: "linear-gradient(to right, #fafafa, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24"
        style={{ background: "linear-gradient(to left, #fafafa, transparent)" }}
      />

      <div className="relative z-10 mx-auto mb-14 max-w-6xl px-4">
        <div ref={titleRef} data-reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
            Client Reviews
          </span>
          <h2
            className="mt-3 font-bold tracking-tight text-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What Homeowners Say
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-600">
            Real feedback from real projects across Elk Grove and greater Sacramento.
          </p>
        </div>
      </div>

      <div className="marquee-row overflow-hidden">
        <div
          className="marquee-left flex w-max items-stretch gap-5"
          // --gap must match the `gap-5` above (1.25rem) for the loop to be seamless.
          style={{ ["--speed" as string]: "28s", ["--gap" as string]: "1.25rem" }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
