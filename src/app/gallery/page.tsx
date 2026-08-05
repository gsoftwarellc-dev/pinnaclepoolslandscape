import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse completed pool construction, landscaping, concrete, driveway, and fire pit projects by Pinnacle Pools and Landscape.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Project Gallery</h1>
      <p className="mt-4 text-lg text-slate-700">
        Photos from our completed pool, landscaping, concrete, and hardscape projects.
      </p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </section>
  );
}
