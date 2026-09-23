"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    active === "all" ? galleryImages : galleryImages.filter((img) => img.category === active);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + filtered.length) % filtered.length)),
    [filtered.length],
  );

  // Arrow keys and Escape drive the lightbox once it's open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const open = openIndex === null ? null : filtered[openIndex];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((cat) => {
          const count =
            cat.slug === "all"
              ? galleryImages.length
              : galleryImages.filter((img) => img.category === cat.slug).length;
          return (
            <button
              key={cat.slug}
              onClick={() => {
                setActive(cat.slug);
                setOpenIndex(null);
              }}
              aria-pressed={active === cat.slug}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === cat.slug
                  ? "border-black bg-black text-white"
                  : "border-slate-300 text-slate-700 hover:border-[#1668c4] hover:text-[#0f4c92]"
              }`}
            >
              {cat.label}
              <span className={active === cat.slug ? "ml-1.5 text-white/60" : "ml-1.5 text-slate-400"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/*
        A real grid rather than CSS columns: masonry fills top-to-bottom down
        each column, which scrambles the curated order. Uniform 4:3 tiles keep
        photos reading left-to-right across each row.
      */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img, i) => (
          <button
            key={img.slug}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1668c4]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading={i < 6 ? "eager" : "lazy"}
              priority={i < 3}
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-2xl leading-none text-white hover:bg-white/20"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 rounded-full bg-white/10 px-4 py-3 text-2xl leading-none text-white hover:bg-white/20 sm:left-6"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 rounded-full bg-white/10 px-4 py-3 text-2xl leading-none text-white hover:bg-white/20 sm:right-6"
          >
            &#8250;
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <Image
              src={open.wideSrc ?? open.src}
              alt={open.alt}
              width={open.wideWidth ?? open.width}
              height={
                open.wideWidth
                  ? Math.round((open.height * open.wideWidth) / open.width)
                  : open.height
              }
              className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
              sizes="100vw"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {open.title}
              <span className="ml-2 text-white/50">
                {openIndex! + 1} / {filtered.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
