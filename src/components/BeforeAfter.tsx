"use client";

import Image from "next/image";
import { useState } from "react";

export type BeforeAfterPair = {
  title: string;
  location: string;
  beforeSrc: string;
  beforeLabel: string;
  afterSrc: string;
  afterLabel: string;
  caption: string;
};

/**
 * Drag-to-compare slider. The handle is a native range input layered over the images so it
 * works with touch, mouse, and keyboard without extra event wiring.
 */
function Comparison({ pair }: { pair: BeforeAfterPair }) {
  const [position, setPosition] = useState(50);

  return (
    <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden">
        <Image
          src={pair.afterSrc}
          alt={`${pair.title} — ${pair.afterLabel}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={pair.beforeSrc}
            alt={`${pair.title} — ${pair.beforeLabel}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
          {pair.beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#1668c4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {pair.afterLabel}
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5 3 12l5 7v-5h8v5l5-7-5-7v5H8V5Z" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Reveal before and after for ${pair.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <figcaption className="p-5">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0f4c92]">
          {pair.location}
        </div>
        <h3 className="mt-1.5 text-lg font-bold text-black">{pair.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{pair.caption}</p>
      </figcaption>
    </figure>
  );
}

export default function BeforeAfter({ pairs }: { pairs: BeforeAfterPair[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pairs.map((pair) => (
        <Comparison key={pair.title} pair={pair} />
      ))}
    </div>
  );
}
