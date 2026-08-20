export type ProcessPhase = {
  number: string;
  title: string;
  summary: string;
  details: string[];
  /** What the homeowner is responsible for during this phase. */
  yourPart: string;
};

/**
 * The full design-and-build sequence, written so a homeowner who has never built a pool
 * can follow it.
 */
export const processPhases: ProcessPhase[] = [
  {
    number: "01",
    title: "Free Consultation",
    summary:
      "We come to your home, walk the yard, and talk through how you actually want to use the space.",
    details: [
      "On-site visit to measure the yard and check access, grade, setbacks, and utilities",
      "Conversation about how you entertain, who swims, and what the backyard needs to do",
      "Honest budget conversation — including what your number realistically buys",
      "Review of financing options if you'd like to spread the investment out",
    ],
    yourPart:
      "Share your wish list, your must-haves, and your budget range. The more direct you are, the better the first design lands.",
  },
  {
    number: "02",
    title: "Custom 3D Design",
    summary:
      "Your designer builds a photorealistic 3D model of the pool and backyard on your actual lot.",
    details: [
      "Full 3D rendering showing shape, depth, decking, features, and landscape together",
      "Walk-through views so you can see the yard from the patio door and from the water",
      "Unlimited revisions at this stage — moving a spa costs nothing on screen",
      "Renderings double as HOA design-review exhibits where your community requires them",
    ],
    yourPart:
      "Review the model and tell us what to change. This is the cheapest and easiest moment in the entire project to change your mind.",
  },
  {
    number: "03",
    title: "Proposal & Agreement",
    summary:
      "You receive a fixed, itemized proposal tied to the design you approved — no vague allowances.",
    details: [
      "Line-item pricing for excavation, structure, equipment, finishes, decking, and landscape",
      "Clear scope of what is and isn't included, so there are no mid-build surprises",
      "Payment schedule tied to construction milestones, not calendar dates",
      "Financing paperwork completed here if you're using it",
    ],
    yourPart:
      "Read the proposal carefully and ask every question you have. We'd rather spend an extra hour now than have a misunderstanding later.",
  },
  {
    number: "04",
    title: "Engineering & Permits",
    summary:
      "We produce engineered plans for your soil and grade, then take them through your city or county.",
    details: [
      "Structural engineering sized for your actual lot conditions, not a generic template",
      "Permit application, plan check corrections, and fee handling on your behalf",
      "Utility locating and coordination before anything is dug",
      "HOA submission support where applicable",
    ],
    yourPart:
      "Mostly waiting. Permit timelines vary by jurisdiction — we'll tell you where your application stands each week.",
  },
  {
    number: "05",
    title: "Layout & Excavation",
    summary: "The pool is chalked out on the ground, you approve the position, then we dig.",
    details: [
      "Layout painted on the dirt so you can stand in the shape before a shovel moves",
      "Access route protected and staging area established",
      "Excavation to the engineered depths and shaping of steps, benches, and ledges",
      "Spoils hauled off and the site cleaned down",
    ],
    yourPart:
      "Walk the layout with your project manager and confirm the placement. Keep pets and vehicles clear of the access route.",
  },
  {
    number: "06",
    title: "Steel, Plumbing & Electrical",
    summary:
      "The structural skeleton and every line that has to be buried before concrete goes in.",
    details: [
      "Reinforcing steel tied to the engineered spec throughout the shell",
      "Plumbing rough-in for returns, skimmers, main drains, spa jets, and water features",
      "Electrical rough-in and bonding grid for lighting, pumps, and automation",
      "Pre-gunite inspection by the building department",
    ],
    yourPart:
      "Nothing required — but this is a great week to walk the site and see how the plumbing maps to your design.",
  },
  {
    number: "07",
    title: "Gunite Shell",
    summary:
      "Concrete is pneumatically applied over the steel, forming the monolithic shell of your pool.",
    details: [
      "Gunite shot, carved, and hand-finished for shape, steps, and benches",
      "Curing period during which the shell is watered daily to reach full strength",
      "Equipment pad set and equipment plumbed",
      "Shell inspected before finish work begins",
    ],
    yourPart:
      "Water the shell daily during the cure if we ask — it materially improves the long-term strength of the concrete.",
  },
  {
    number: "08",
    title: "Tile, Coping & Decking",
    summary: "The pool starts looking like the rendering — waterline tile, coping, and deck.",
    details: [
      "Waterline tile and any raised-wall or spa tile set",
      "Coping installed around the entire perimeter",
      "Deck formed and poured — broom, stamped, pavers, or travertine per your selection",
      "Drainage and deck expansion joints detailed to prevent future cracking",
    ],
    yourPart:
      "Final material selections are confirmed before this phase starts, so bring any last questions to your designer early.",
  },
  {
    number: "09",
    title: "Plaster, Fill & Startup",
    summary: "Interior finish goes on, the pool is filled, and the water chemistry is dialed in.",
    details: [
      "Interior finish applied — plaster, quartz, or pebble depending on your selection",
      "Immediate fill to protect the fresh finish from staining",
      "Chemical startup over the following days to cure the surface correctly",
      "Equipment commissioned, automation configured, and lighting tested",
    ],
    yourPart:
      "Leave the fill hose running without interruption until the water reaches the tile line. Stay off the finish until we clear it.",
  },
  {
    number: "10",
    title: "Landscape & Handoff",
    summary:
      "Turf, planting, lighting, and fencing complete the yard — then we hand you the keys.",
    details: [
      "Landscape, turf, irrigation, and low-voltage lighting installed",
      "Fencing and safety requirements completed to code",
      "Full owner orientation on equipment, automation, and week-to-week care",
      "Final walkthrough, punch list, and warranty documentation",
    ],
    yourPart:
      "Walk the whole project with us and flag anything that isn't right. Nothing closes until you're satisfied.",
  },
];

/** Condensed four-stage view used for the homepage preview. */
export const processSummary = [
  {
    number: "01",
    title: "Design",
    text: "Free on-site consultation and a photorealistic 3D model of your backyard.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Fixed itemized proposal, engineering, and every permit handled for you.",
  },
  {
    number: "03",
    title: "Build",
    text: "Excavation through gunite, tile, decking, and plaster by one licensed crew.",
  },
  {
    number: "04",
    title: "Enjoy",
    text: "Landscape, lighting, equipment orientation, and a final walkthrough together.",
  },
];
