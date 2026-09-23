import { galleryImages, type GalleryImage } from "@/data/gallery";

export type PickedImage = { src: string; width: number; height: number; alt: string };

/** Premium photos not sourced from the WordPress gallery scrape, kept in public/new/. */
const bonusImages: Record<string, PickedImage[]> = {
  "pool-construction": [
    {
      src: "/new/modern-pool-sun-shelf-cabana.webp",
      width: 2560,
      height: 1922,
      alt: "Modern pool with sun shelf and covered cabana",
    },
    {
      src: "/new/pool-raised-spa-tile-waterfall.jpg",
      width: 1024,
      height: 682,
      alt: "Pool with raised tile spa and waterfall feature",
    },
    {
      src: "/new/pool-sun-shelf-lakefront.jpg",
      width: 1024,
      height: 768,
      alt: "Pool with tanning ledge and lakefront view",
    },
  ],
  "pool-remodeling": [
    {
      src: "/new/pool-raised-spa-tile-waterfall.jpg",
      width: 1024,
      height: 682,
      alt: "Remodeled pool with raised tile spa and waterfall feature",
    },
  ],
  "3d-pool-design": [
    {
      src: "/new/pool-sun-shelf-lakefront.jpg",
      width: 1024,
      height: 768,
      alt: "Custom-designed pool with tanning ledge",
    },
  ],
  "artificial-turf": [
    {
      src: "/new/pool-spa-turf-firepit-basketball.avif",
      width: 640,
      height: 480,
      alt: "Backyard with artificial turf, spa, and fire pit",
    },
    {
      src: "/new/pool-water-feature-turf-deck.jpeg",
      width: 1920,
      height: 1440,
      alt: "Pool deck bordered with artificial turf",
    },
  ],
  landscaping: [
    {
      src: "/new/pool-water-feature-turf-deck.jpeg",
      width: 1920,
      height: 1440,
      alt: "Landscaped backyard with turf border and water feature",
    },
  ],
  "fire-pits": [
    {
      src: "/new/pool-spa-turf-firepit-basketball.avif",
      width: 640,
      height: 480,
      alt: "Backyard fire pit and entertaining area",
    },
  ],
  "pool-decks": [
    {
      src: "/new/modern-pool-sun-shelf-cabana.webp",
      width: 2560,
      height: 1922,
      alt: "Pool deck with sun shelf and covered seating",
    },
  ],
};

/** Maps each service slug to the gallery categories most relevant to it, in priority order. */
const serviceCategoryMap: Record<string, GalleryImage["category"][]> = {
  "pool-construction": ["pool-construction", "water-features"],
  "pool-remodeling": ["pool-construction", "water-features"],
  "3d-pool-design": ["pool-construction"],
  "pool-decks": ["pool-construction", "concrete-driveways", "outdoor-living"],
  landscaping: ["outdoor-living", "artificial-turf", "concrete-driveways"],
  "driveway-walkway": ["concrete-driveways"],
  "fire-pits": ["fire-pits", "outdoor-living"],
  "artificial-turf": ["artificial-turf", "outdoor-living"],
  "concrete-services": ["concrete-driveways", "outdoor-living"],
};

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function galleryToPicked(img: GalleryImage): PickedImage {
  return {
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt,
  };
}

/**
 * Deterministically picks `count` images relevant to a service, seeded by a string
 * (e.g. the area slug) so the same page always renders the same photos, while
 * different pages for the same service show different photos from the pool.
 */
export function pickServiceImages(serviceSlug: string, seed: string, count: number): PickedImage[] {
  const categories = serviceCategoryMap[serviceSlug] ?? ["pool-construction"];
  const candidates: PickedImage[] = [
    ...(bonusImages[serviceSlug] ?? []),
    ...galleryImages.filter((img) => categories.includes(img.category)).map(galleryToPicked),
  ];

  if (candidates.length === 0) return [];

  const start = hashString(`${serviceSlug}:${seed}`) % candidates.length;
  const picked: PickedImage[] = [];
  for (let i = 0; i < count && i < candidates.length; i++) {
    picked.push(candidates[(start + i) % candidates.length]);
  }
  return picked;
}

/** Picks one hero-style image for a service (prefers bonus/premium photos first). */
export function pickServiceHeroImage(serviceSlug: string, seed: string): PickedImage | null {
  const [first] = pickServiceImages(serviceSlug, seed, 1);
  return first ?? null;
}
