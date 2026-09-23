/**
 * Pricing model behind the "Build Your Pool" instant estimate tool.
 *
 * Every number here is a *planning range*, not a quote. The ranges are deliberately wide
 * because real pricing depends on access, soil, grade, and utility runs that can only be
 * confirmed on site. The tool's job is to qualify the lead and set budget expectations
 * before a salesperson spends a drive on it — not to replace the proposal.
 *
 * Ranges are consistent with the $60k–$150k+ custom pool figure published on the
 * pool construction service page.
 */

export type Range = { low: number; high: number };

export type Option = {
  value: string;
  label: string;
  /** Short clarifier shown under the label on the option card. */
  hint?: string;
  /** Added to the running estimate when selected. Omitted for non-priced answers. */
  price?: Range;
  /** lucide-react icon name rendered on the option card. */
  icon?: string;
  /** Photo used by the image-card layout (project type only). */
  image?: string;
  /** Relative footprint 0-1, drives the size step's scale diagram. */
  scale?: number;
};

const r = (low: number, high: number): Range => ({ low, high });

/* ---------------------------------------------------------------- project type */

export const projectTypes: Option[] = [
  {
    value: "pool",
    label: "Pool Only",
    hint: "A custom in-ground pool",
    price: r(0, 0),
    image: "/new/pool-sun-shelf-lakefront.jpg",
  },
  {
    value: "pool-spa",
    label: "Pool + Spa",
    hint: "Pool with an attached or raised spa",
    price: r(12000, 22000),
    image: "/new/pool-raised-spa-tile-waterfall.jpg",
  },
  {
    value: "full-backyard",
    label: "Complete Backyard",
    hint: "Pool, spa, decking and landscape as one build",
    price: r(12000, 22000),
    image: "/new/pool-spa-turf-firepit-basketball.avif",
  },
  {
    value: "landscape-only",
    label: "Landscape / Hardscape Only",
    hint: "No pool — decking, turf, concrete or outdoor living",
    price: r(0, 0),
    image: "/gallery/pinnacle-pools-artificial-turf-lawn-side-yard-1200.webp",
  },
];

/** Project types that include a pool, and therefore get the pool sizing + features steps. */
export const poolProjectTypes = ["pool", "pool-spa", "full-backyard"];

/* ------------------------------------------------------------------ pool sizing */

export const poolSizes: Option[] = [
  {
    value: "compact",
    scale: 0.42,
    label: "Compact / Plunge",
    hint: "Up to ~300 sq ft — small lots, cocktail pools",
    price: r(55000, 75000),
  },
  {
    value: "medium",
    scale: 0.62,
    label: "Medium",
    hint: "~300–450 sq ft — the most common size we build",
    price: r(70000, 98000),
  },
  {
    value: "large",
    scale: 0.82,
    label: "Large",
    hint: "~450–650 sq ft — room to swim laps and entertain",
    price: r(92000, 132000),
  },
  {
    value: "estate",
    scale: 1,
    label: "Estate",
    hint: "650+ sq ft — resort-scale freeform designs",
    price: r(125000, 185000),
  },
  {
    value: "unsure",
    scale: 0,
    label: "Not Sure Yet",
    hint: "Help me figure out what fits my yard",
    price: r(70000, 132000),
  },
];

/* ---------------------------------------------------------------- pool features */

export const poolFeatures: Option[] = [
  { value: "tanning-ledge", icon: "Sun", label: "Tanning Ledge / Baja Shelf", price: r(4000, 9000) },
  { value: "waterfall", icon: "Waves", label: "Waterfall or Water Feature", price: r(5000, 13000) },
  { value: "fire-feature", icon: "Flame", label: "Fire Bowls / Fire Feature", price: r(4000, 10000) },
  { value: "lighting-automation", icon: "Lightbulb", label: "LED Lighting & Smart Automation", price: r(3500, 8000) },
  { value: "heater", icon: "Thermometer", label: "Pool & Spa Heater", price: r(4000, 8000) },
  { value: "saltwater", icon: "Droplets", label: "Saltwater System", price: r(2000, 4500) },
  { value: "swim-up", icon: "GlassWater", label: "Swim-Up Bar / In-Pool Seating", price: r(5000, 12000) },
  { value: "vanishing-edge", icon: "Layers", label: "Vanishing / Infinity Edge", price: r(15000, 38000) },
  { value: "slide-diving", icon: "Waypoints", label: "Slide or Diving Board", price: r(5000, 14000) },
  { value: "auto-cover", icon: "ShieldCheck", label: "Automatic Safety Cover", price: r(8000, 16000) },
];

/* ------------------------------------------------------------ decking & landscape */

export const deckingOptions: Option[] = [
  { value: "none", label: "None / Already Have It", price: r(0, 0) },
  {
    value: "broom-concrete",
    label: "Broom-Finish Concrete",
    hint: "Clean, durable, budget-friendly",
    price: r(8000, 15000),
  },
  {
    value: "stamped",
    label: "Stamped / Decorative Concrete",
    hint: "Stone, slate and wood-plank patterns",
    price: r(15000, 30000),
  },
  {
    value: "pavers",
    label: "Pavers or Travertine",
    hint: "Premium modular deck, coolest underfoot",
    price: r(25000, 55000),
  },
  { value: "unsure", label: "Not Sure Yet", price: r(10000, 30000) },
];

export const landscapeOptions: Option[] = [
  { value: "none", label: "None Right Now", price: r(0, 0) },
  {
    value: "refresh",
    label: "Planting & Irrigation Refresh",
    hint: "Beds, plants, drip irrigation, cleanup",
    price: r(8000, 20000),
  },
  {
    value: "full",
    label: "Full Landscape",
    hint: "Turf, planting, lighting, irrigation, borders",
    price: r(20000, 48000),
  },
  {
    value: "outdoor-living",
    label: "Complete Outdoor Living",
    hint: "Kitchen, pergola, fire pit, seating walls",
    price: r(40000, 95000),
  },
  { value: "unsure", label: "Not Sure Yet", price: r(10000, 40000) },
];

/* --------------------------------------------------- qualifying (non-priced) steps */

export const budgetRanges: Option[] = [
  { value: "under-75k", label: "Under $75,000" },
  { value: "75-100k", label: "$75,000 – $100,000" },
  { value: "100-150k", label: "$100,000 – $150,000" },
  { value: "150-250k", label: "$150,000 – $250,000" },
  { value: "250k-plus", label: "$250,000+" },
  { value: "undecided", label: "Still Deciding", hint: "Show me what's realistic" },
];

export const timelines: Option[] = [
  { value: "asap", label: "As Soon As Possible", hint: "Ready to start now" },
  { value: "3-months", label: "Within 3 Months" },
  { value: "6-months", label: "3 – 6 Months" },
  { value: "this-year", label: "6 – 12 Months" },
  { value: "researching", label: "Just Researching", hint: "Gathering ideas and pricing" },
];

export const financingOptions: Option[] = [
  { value: "yes", label: "Yes — Send Me Financing Info", hint: "Terms up to 20 years available" },
  { value: "maybe", label: "Maybe — Tell Me More" },
  { value: "no", label: "No — Paying Cash" },
];

/* ------------------------------------------------------------------- calculation */

export type EstimateAnswers = {
  zip: string;
  projectType: string;
  poolSize: string;
  features: string[];
  decking: string;
  landscape: string;
  budget: string;
  timeline: string;
  financing: string;
  name: string;
  phone: string;
  email: string;
};

export const emptyAnswers: EstimateAnswers = {
  zip: "",
  projectType: "",
  poolSize: "",
  features: [],
  decking: "",
  landscape: "",
  budget: "",
  timeline: "",
  financing: "",
  name: "",
  phone: "",
  email: "",
};

function find(options: Option[], value: string): Option | undefined {
  return options.find((o) => o.value === value);
}

function add(total: Range, price?: Range): Range {
  if (!price) return total;
  return { low: total.low + price.low, high: total.high + price.high };
}

/** Rounds to the nearest $1,000 so the output reads as a planning range, not a bid. */
function roundToThousand(n: number): number {
  return Math.round(n / 1000) * 1000;
}

export type EstimateLineItem = { label: string; price: Range };

export type Estimate = {
  total: Range;
  lineItems: EstimateLineItem[];
  includesPool: boolean;
};

/**
 * Adding every line item's low to every other low (and high to high) assumes the whole
 * project lands at one extreme, which is not how real projects price out — some items come
 * in high while others come in low. Summed naively, a five-item project produces a range so
 * wide it stops being useful ("$238k–$443k" reads as a shrug).
 *
 * So we keep the midpoint of the summed range and shrink its half-width toward how
 * independent variation actually accumulates — roughly with the square root of the item
 * count rather than linearly. A single line item is left exactly as authored.
 */
function narrowRange(total: Range, itemCount: number): Range {
  if (itemCount <= 1) {
    return { low: roundToThousand(total.low), high: roundToThousand(total.high) };
  }

  const mid = (total.low + total.high) / 2;
  const halfWidth = (total.high - total.low) / 2;
  const narrowed = halfWidth * (Math.sqrt(itemCount) / itemCount);

  return {
    low: roundToThousand(mid - narrowed),
    high: roundToThousand(mid + narrowed),
  };
}

export function calculateEstimate(answers: EstimateAnswers): Estimate {
  const includesPool = poolProjectTypes.includes(answers.projectType);
  const lineItems: EstimateLineItem[] = [];
  let total: Range = r(0, 0);

  if (includesPool) {
    const size = find(poolSizes, answers.poolSize);
    if (size?.price) {
      lineItems.push({ label: `${size.label} pool shell & equipment`, price: size.price });
      total = add(total, size.price);
    }

    const type = find(projectTypes, answers.projectType);
    if (type?.price && (type.price.low > 0 || type.price.high > 0)) {
      lineItems.push({ label: "Attached spa", price: type.price });
      total = add(total, type.price);
    }

    const featurePrice = answers.features.reduce<Range>((acc, value) => {
      const feature = find(poolFeatures, value);
      return add(acc, feature?.price);
    }, r(0, 0));

    if (featurePrice.high > 0) {
      lineItems.push({
        label: `Selected features (${answers.features.length})`,
        price: featurePrice,
      });
      total = add(total, featurePrice);
    }
  }

  const decking = find(deckingOptions, answers.decking);
  if (decking?.price && decking.price.high > 0) {
    lineItems.push({ label: `Decking — ${decking.label}`, price: decking.price });
    total = add(total, decking.price);
  }

  const landscape = find(landscapeOptions, answers.landscape);
  if (landscape?.price && landscape.price.high > 0) {
    lineItems.push({ label: `Landscape — ${landscape.label}`, price: landscape.price });
    total = add(total, landscape.price);
  }

  return {
    total: narrowRange(total, lineItems.length),
    lineItems,
    includesPool,
  };
}

export function formatUsd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

export function formatRange(range: Range): string {
  if (range.low === 0 && range.high === 0) return "To be determined on site";
  return `${formatUsd(range.low)} – ${formatUsd(range.high)}`;
}
