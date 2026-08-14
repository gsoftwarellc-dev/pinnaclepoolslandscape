import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type Project = {
  src: string;
  title: string;
  tag: string;
  alt: string;
  /** Tailwind span classes controlling this tile's footprint in the mosaic. */
  span: string;
};

/**
 * Curated mosaic of completed work. Photos are hand-picked rather than pulled from the
 * gallery feed so the homepage always leads with our strongest imagery.
 */
const projects: Project[] = [
  {
    src: "/new/modern-pool-sun-shelf-cabana.webp",
    title: "Modern Pool & Cabana",
    tag: "Pool + Outdoor Living",
    alt: "Modern rectangular pool with sun shelf and covered cabana",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/new/pool-raised-spa-tile-waterfall.jpg",
    title: "Raised Spa & Waterfall",
    tag: "Pool + Spa",
    alt: "Custom pool with raised tile spa and waterfall spillover",
    span: "",
  },
  {
    src: "/new/pool-spa-turf-firepit-basketball.avif",
    title: "Complete Backyard Build",
    tag: "Pool, Turf & Fire",
    alt: "Backyard with pool, spa, artificial turf and fire pit",
    span: "",
  },
  {
    src: "/new/pool-water-feature-turf-deck.jpeg",
    title: "Water Feature & Deck",
    tag: "Pool + Landscape",
    alt: "Pool with water feature bordered by turf and finished decking",
    span: "",
  },
  {
    src: "/new/pool-sun-shelf-lakefront.jpg",
    title: "Tanning Ledge Design",
    tag: "Custom Pool",
    alt: "Pool with wide tanning ledge and open view",
    span: "",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7315]">
            Recent Work
          </span>
          <h2
            className="mt-3 font-bold tracking-tight text-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Backyards We&apos;ve Built
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Every photo below is our own completed work — no stock imagery, no borrowed
            portfolios.
          </p>
        </div>
        <Link
          href="/gallery"
          className="btn-tactile shrink-0 rounded-md border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:border-[#dac026]"
        >
          View Full Gallery →
        </Link>
      </Reveal>

      <div className="grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[11rem]">
        {projects.map((project, i) => (
          <Reveal key={project.src} delay={i * 70} className={project.span}>
            <Link
              href="/gallery"
              className="group relative block h-full min-h-[13rem] overflow-hidden rounded-2xl"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#dac026]">
                  {project.tag}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-tight text-white">{project.title}</h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
