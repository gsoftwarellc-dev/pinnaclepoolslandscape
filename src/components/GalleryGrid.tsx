"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActive(cat.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === cat.slug
                ? "border-black bg-black text-white"
                : "border-slate-300 text-slate-700 hover:border-[#dac026] hover:text-[#8a7315]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((img) => (
          <div key={img.file} className="mb-4 break-inside-avoid overflow-hidden rounded-lg">
            <Image
              src={`/gallery/${img.file}`}
              alt={img.title}
              width={img.width}
              height={img.height}
              className="w-full rounded-lg object-cover transition hover:opacity-90"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
