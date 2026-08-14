export type ResourceTable = { headers: string[]; rows: string[][] };

export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: ResourceTable;
};

export type Resource = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Cost & Budget" | "Planning" | "Design" | "Equipment & Materials";
  readTime: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: ResourceSection[];
  faqs: { q: string; a: string }[];
  /** Slugs of other resources worth reading next. */
  related: string[];
  /** Service slug this guide naturally leads into. */
  serviceSlug: string;
};

export const resources: Resource[] = [
  {
    slug: "pool-cost",
    title: "How Much Does a Pool Cost in the Sacramento Area?",
    shortTitle: "Pool Cost Guide",
    category: "Cost & Budget",
    readTime: "8 min read",
    excerpt:
      "Real budget ranges for custom in-ground pools in the Sacramento region — what drives the number up, what you can trim, and what nobody tells you until the proposal arrives.",
    metaTitle: "Pool Cost Guide — What a Custom Pool Costs in Sacramento",
    metaDescription:
      "What does an in-ground pool cost in Sacramento, Elk Grove, Folsom and Roseville? Honest budget ranges, the factors that move the price, and the costs most builders leave out.",
    intro: [
      "Almost every conversation we have starts with the same question, and most websites dodge it. So here is a direct answer: most of the custom in-ground pools we build in the greater Sacramento region land between $60,000 and $150,000, and complete backyard projects that include decking, landscape, and outdoor living run higher.",
      "That is a wide range, and the width is the honest part. A compact plunge pool on a flat, accessible lot and a 600-square-foot freeform pool with a raised spa, vanishing edge, and travertine deck are both 'a pool,' and they are not remotely the same project. This guide breaks down what actually moves the number so you can place yourself in the range before anyone visits your home.",
    ],
    sections: [
      {
        heading: "Typical budget ranges by project scope",
        paragraphs: [
          "These are planning ranges for the Sacramento region, including permits, engineering, standard equipment, and a basic deck. They assume reasonable equipment access to the backyard and no unusual site conditions.",
        ],
        table: {
          headers: ["Project scope", "Typical range", "What that usually includes"],
          rows: [
            [
              "Compact / plunge pool",
              "$55,000 – $75,000",
              "Up to ~300 sq ft, simple geometry, basic deck, standard equipment",
            ],
            [
              "Medium custom pool",
              "$70,000 – $98,000",
              "~300–450 sq ft, custom shape, tanning ledge, LED lighting",
            ],
            [
              "Large custom pool",
              "$92,000 – $132,000",
              "~450–650 sq ft, spa-ready plumbing, larger deck, upgraded finish",
            ],
            [
              "Estate pool",
              "$125,000 – $185,000+",
              "650+ sq ft, complex shapes, multiple features, premium finishes",
            ],
            [
              "Complete backyard",
              "$150,000 – $300,000+",
              "Pool, spa, full decking, landscape, lighting, outdoor living",
            ],
          ],
        },
      },
      {
        heading: "The five things that move the price most",
        paragraphs: [
          "In our experience, cost differences between two similar-sounding proposals almost always come back to these five variables. Understanding them lets you compare bids honestly instead of just comparing bottom lines.",
        ],
        bullets: [
          "Size and depth — Every additional square foot adds excavation, steel, gunite, plaster, water, and chemicals. Depth adds disproportionately because it increases wall height and structural load.",
          "Site access and soil — A backyard reachable by a full-size excavator costs far less to build in than one where equipment has to be craned over the house or replaced with hand digging. Expansive clay and rock both add engineering and excavation cost.",
          "Decking scope — Decking is often the single most underestimated line item. Broom-finish concrete might be $8,000–$15,000 while the same square footage in travertine can exceed $50,000.",
          "Features — A tanning ledge is a few thousand dollars. A vanishing edge can add $15,000–$38,000 because it requires a catch basin, a second pump system, and much tighter structural tolerances.",
          "Equipment and automation — Variable-speed pumps, heaters, salt systems, and smart controls raise the up-front number and usually lower the monthly one.",
        ],
      },
      {
        heading: "Costs that get left out of cheap bids",
        paragraphs: [
          "If one proposal is dramatically cheaper than the others, the difference is rarely efficiency. It is usually scope that has been moved off the page and back onto you. Before you compare bottom lines, confirm in writing that each proposal includes the following.",
        ],
        bullets: [
          "Engineering and permit fees for your specific city or county",
          "Utility locating, and relocation if a line runs through the pool footprint",
          "Spoils haul-off — the dirt from excavation has to physically leave your property",
          "Code-required safety fencing, alarms, or barrier upgrades",
          "Electrical panel work if your existing service can't carry pool equipment",
          "Deck drainage and expansion joints, not just the concrete itself",
          "Startup chemicals and the first month of water chemistry management",
          "Restoration of the access route the equipment drove through",
        ],
      },
      {
        heading: "Where you can genuinely save money",
        paragraphs: [
          "There are smart places to trim and painful places to trim. These are the ones we recommend to homeowners who need to bring a project into budget without regretting it in three years.",
        ],
        bullets: [
          "Phase the landscape. Build the pool and a functional deck now, add planting, turf, and lighting next season. The pool is the part that's disruptive to add later.",
          "Choose a simpler shape. Geometric and gentle freeform shapes cost meaningfully less to form, tile, and finish than highly articulated designs.",
          "Right-size the deck. A generous deck on the entertaining side and a narrower walkway elsewhere reads as luxurious and costs far less than wrapping premium material all the way around.",
          "Skip the features you won't use. Diving boards, slides, and swim-up bars are wonderful when they match your family and expensive when they don't.",
        ],
      },
      {
        heading: "Where saving money usually backfires",
        paragraphs: [
          "Some savings show up as problems later. We would rather you spend the money with someone else than under-build with us.",
        ],
        bullets: [
          "Undersized or single-speed pumps — the up-front savings are erased by energy costs within a couple of seasons, and California efficiency rules restrict them anyway.",
          "Cutting the deck drainage — water that has nowhere to go finds your foundation, and retrofitting drainage under a finished deck means removing the deck.",
          "Cheapest-available interior finish — standard plaster is the shortest-lived option, and refinishing a pool means draining it, chipping it out, and starting over.",
          "Skipping the 3D design step — changes are free on a screen and expensive in concrete. This is the highest-return part of the whole process.",
        ],
      },
      {
        heading: "How financing changes the conversation",
        paragraphs: [
          "A large share of the pools built in this region are financed rather than paid for in cash, and it changes how people think about scope. Instead of asking what $80,000 buys, the useful question becomes what monthly payment fits comfortably alongside everything else.",
          "Pool loans through our financing partner go up to $100,000 with terms up to 20 years, no prepayment penalties, and no equity or appraisal required for signature loans. Approvals often come back within a business day, which means you can plan with a real number instead of a guess.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the cheapest in-ground pool you can build?",
        a: "Our smallest projects — compact plunge or cocktail pools on flat, accessible lots with a modest broom-finish deck — generally start around $55,000. Below that number, something meaningful is usually being excluded, so read the scope carefully before comparing.",
      },
      {
        q: "Does a pool add value to a home in Sacramento?",
        a: "In this climate a well-built pool is a genuine lifestyle asset and can help a home stand out, but it is best treated as something you build for your own enjoyment rather than as an investment you expect to fully recoup at resale. Quality of construction and how well the pool integrates with the rest of the yard matter far more to value than size alone.",
      },
      {
        q: "How much does it cost to run a pool each month?",
        a: "Budget roughly $80–$250 per month depending on size, equipment efficiency, how much you heat, and whether you maintain it yourself. Variable-speed pumps, LED lighting, and a cover make a substantial difference to the low end of that range.",
      },
      {
        q: "Are your estimates fixed or do they change during construction?",
        a: "Our proposals are fixed and itemized against an approved design. The number changes only if you request a change or if we uncover a genuine unknown underground — and in that case you see the cost and approve it before we proceed.",
      },
    ],
    related: ["construction-timeline", "pool-finishes", "buying-guide"],
    serviceSlug: "pool-construction",
  },
  {
    slug: "construction-timeline",
    title: "How Long Does It Take to Build a Pool?",
    shortTitle: "Construction Timeline",
    category: "Planning",
    readTime: "6 min read",
    excerpt:
      "A realistic week-by-week timeline for a custom pool build — including the permitting stretch most homeowners don't plan for.",
    metaTitle: "Pool Construction Timeline — How Long Does Building a Pool Take?",
    metaDescription:
      "How long does it take to build an in-ground pool in the Sacramento area? A phase-by-phase timeline covering design, permits, excavation, gunite, decking and startup.",
    intro: [
      "The short answer: about four to seven months from your first conversation to your first swim. The construction itself is only eight to twelve weeks of that. The rest is design, proposal, engineering, and permitting — and permitting is the phase that surprises people.",
      "Below is how that time actually distributes, and which parts of it you can influence.",
    ],
    sections: [
      {
        heading: "The timeline at a glance",
        paragraphs: [
          "Ranges reflect real variation across the cities we serve. Elk Grove, Sacramento County, Folsom, Roseville, and El Dorado County all run their plan checks differently.",
        ],
        table: {
          headers: ["Phase", "Typical duration", "Can you speed it up?"],
          rows: [
            ["Consultation & 3D design", "1–2 weeks", "Yes — decisiveness helps enormously"],
            ["Proposal & agreement", "3–7 days", "Yes"],
            ["Engineering & permitting", "3–8 weeks", "Rarely — this is jurisdiction-dependent"],
            ["Layout & excavation", "2–4 days", "No"],
            ["Steel, plumbing, electrical", "1–2 weeks", "No — inspections gate this"],
            ["Gunite + cure", "1 day + 7–10 days", "No"],
            ["Tile, coping & decking", "2–3 weeks", "Partly — pick materials early"],
            ["Plaster, fill & startup", "3–5 days", "No"],
            ["Landscape & handoff", "1–3 weeks", "Yes — or defer to a later phase"],
          ],
        },
      },
      {
        heading: "Why permitting takes as long as it does",
        paragraphs: [
          "A swimming pool is a permitted structure. Plans have to be engineered for your soil and grade, submitted to your city or county, reviewed by a plan checker, corrected if the reviewer has comments, and then approved before a shovel touches the ground.",
          "Plan-check queues fluctuate with building activity. In a busy season a first review can take four to six weeks, and any correction cycle adds to that. We submit complete, engineered packages specifically to minimize correction rounds, but we cannot control the queue itself. Anyone who promises you a guaranteed permit date is guessing.",
        ],
      },
      {
        heading: "What actually delays projects",
        paragraphs: [
          "In our experience, the schedule slips for a small number of recurring reasons — and most of them are avoidable.",
        ],
        bullets: [
          "Late material selections. Tile, coping, and deck finishes need to be locked before the decking phase. Undecided selections stall a crew that's ready to work.",
          "Design changes after permitting. Changing the shape after plans are approved means re-engineering and re-submitting.",
          "Weather. Gunite and concrete can't be placed in heavy rain, and saturated soil stops excavation. Winter builds carry more weather risk.",
          "Inspection scheduling. Departments schedule inspections on their own calendars, and a missed window can cost several days.",
          "Access problems. Discovering on dig day that the gate is too narrow for the excavator is a schedule event, which is why we check access at the very first visit.",
        ],
      },
      {
        heading: "The best time of year to start",
        paragraphs: [
          "If you want to swim next summer, start the conversation in the fall or early winter. Design and permitting happen during the months you wouldn't be swimming anyway, construction runs through spring, and the pool is ready when the weather turns.",
          "Homeowners who call in May hoping to swim in July are almost always disappointed, not because of construction speed but because permitting doesn't compress. Starting early is the single most effective thing you can do to control your timeline.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a pool be built in a month?",
        a: "Not a permitted in-ground pool. Even if construction went perfectly with no weather or inspection delays, the engineering and permitting phase alone typically takes three to eight weeks before construction can legally begin.",
      },
      {
        q: "Can you build in the winter?",
        a: "Yes, and winter is often a smart time to be in the design and permitting phase. Construction continues through winter in the Sacramento region, though heavy rain can pause excavation and concrete work for a few days at a time.",
      },
      {
        q: "How long is my yard unusable?",
        a: "The disruptive window is roughly from excavation through decking — typically six to nine weeks. Before that, the work is on paper. After plaster, the yard is largely back to normal while landscape finishes out.",
      },
      {
        q: "Do you work on multiple projects at once?",
        a: "Yes, but crews are scheduled so that each phase moves as soon as the previous inspection clears. You'll have a project manager who tells you what's happening next and when, rather than leaving you to guess.",
      },
    ],
    related: ["pool-cost", "buying-guide", "pool-equipment"],
    serviceSlug: "pool-construction",
  },
  {
    slug: "pool-features",
    title: "Pool Features: What's Worth It and What Isn't",
    shortTitle: "Pool Features Guide",
    category: "Design",
    readTime: "7 min read",
    excerpt:
      "Tanning ledges, waterfalls, fire bowls, vanishing edges and swim-up bars — what each one costs, what it does for daily use, and who should skip it.",
    metaTitle: "Pool Features Guide — Tanning Ledges, Water Features & More",
    metaDescription:
      "A candid look at custom pool features: tanning ledges, waterfalls, fire bowls, vanishing edges, automation and more. What each costs and whether it earns its place.",
    intro: [
      "Features are where a pool budget expands fastest, and where regret concentrates. Some features get used every single day. Others photograph beautifully and then sit unused for a decade.",
      "Here is our honest read on the most-requested features, based on what our clients actually use after the novelty wears off.",
    ],
    sections: [
      {
        heading: "Features that almost always earn their place",
        paragraphs: [
          "These are the ones we rarely see regretted, because they change how the pool is used day to day rather than how it looks in a photo.",
        ],
        bullets: [
          "Tanning ledge / Baja shelf ($4,000–$9,000) — A shallow shelf for loungers and small children. This is the single most-used feature we install and the one homeowners most often wish they'd made larger.",
          "LED lighting and automation ($3,500–$8,000) — Turns an unusable dark pool into an evening space and lets you run everything from your phone. It also protects equipment by automating schedules correctly.",
          "Attached spa ($12,000–$22,000) — Extends the season by months. In the Sacramento climate a heated spa gets used from October through April when the pool doesn't.",
          "Heater ($4,000–$8,000) — The difference between a three-month pool and a seven-month pool. Pair it with a cover to keep the running cost sane.",
          "Variable-speed pump — Now effectively standard in California, and it pays for itself in energy savings.",
        ],
      },
      {
        heading: "Features that depend entirely on your household",
        paragraphs: [
          "These are genuinely great for the right family and dead weight for the wrong one. Be honest with yourself about how you'll actually use the yard.",
        ],
        bullets: [
          "Waterfall or water feature ($5,000–$13,000) — Wonderful ambient sound and visual focus. Consider whether you want the sound running constantly, and whether the noise suits your yard's proximity to neighbors.",
          "Fire bowls or fire feature ($4,000–$10,000) — Beautiful at night and a real gathering point in shoulder season. Underused in households that entertain rarely.",
          "Swim-up bar / in-pool seating ($5,000–$12,000) — Fantastic for people who host regularly. Nearly untouched otherwise.",
          "Slide or diving board ($5,000–$14,000) — Depends on the ages in your house and on depth requirements that may enlarge the whole pool. Kids grow out of them faster than you expect.",
          "Automatic safety cover ($8,000–$16,000) — Expensive, but it cuts heating and chemical costs substantially and is a serious safety layer with small children. Often the right call despite the price.",
        ],
      },
      {
        heading: "Features to think hard about",
        paragraphs: [
          "Not bad features — but ones where the cost and the complexity are frequently underestimated.",
        ],
        bullets: [
          "Vanishing / infinity edge ($15,000–$38,000) — Spectacular, but it requires a catch basin, a second pump system, precise structural tolerances, and a lot to actually view over. On a flat suburban lot with a fence line at the edge, it delivers very little.",
          "Extremely deep pools — Depth adds structural cost, heating volume, and chemical load. Unless you're diving regularly, a maximum depth of five to six feet serves most families better.",
          "Elaborate rockwork — Beautiful when done well, dated when done poorly, and expensive to remove. Look at ten-year-old examples before committing.",
        ],
      },
      {
        heading: "The features nobody asks for and everybody appreciates",
        paragraphs: [
          "These aren't glamorous, and they never appear on a wish list. They are the things our clients thank us for two years later.",
        ],
        bullets: [
          "Generous deck drainage and correctly detailed expansion joints",
          "An oversized equipment pad with room to add or service equipment later",
          "Conduit stubbed out for future landscape lighting and speakers",
          "A hose bib and a dedicated outlet near the pool, not thirty feet away",
          "Shade — a pergola, sail, or tree placement planned with the pool rather than after it",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the most popular pool feature you install?",
        a: "The tanning ledge, by a wide margin. It works for small children, for lounging in shallow water, and as a visual widening of the pool. Very few clients who install one wish they hadn't.",
      },
      {
        q: "Can I add features later?",
        a: "Some, yes — lighting upgrades, heaters, automation, and fire features are often retrofittable. Structural features like tanning ledges, vanishing edges, benches, and attached spas are far cheaper to build in from the start and disruptive to add afterward.",
      },
      {
        q: "Do water features make the pool harder to maintain?",
        a: "Slightly. Moving water increases evaporation and can accelerate scale at the waterline in hard water. It's a modest trade-off, not a reason to avoid them, but it's worth knowing before you run one continuously.",
      },
      {
        q: "Is a salt system better than chlorine?",
        a: "A salt system is a chlorine system — it just generates chlorine on site instead of you adding it. Most owners find the water feels gentler and the routine is easier. The trade-offs are the up-front cost of the generator and periodic cell replacement.",
      },
    ],
    related: ["pool-cost", "pool-equipment", "pool-finishes"],
    serviceSlug: "3d-pool-design",
  },
  {
    slug: "pool-equipment",
    title: "Pool Equipment Explained: Pumps, Filters, Heaters & Automation",
    shortTitle: "Equipment Guide",
    category: "Equipment & Materials",
    readTime: "7 min read",
    excerpt:
      "What each piece of equipment does, what it costs to run, and where upgrading actually pays you back.",
    metaTitle: "Pool Equipment Guide — Pumps, Filters, Heaters & Automation",
    metaDescription:
      "Understand pool equipment before you buy: variable-speed pumps, cartridge vs. sand filters, gas vs. heat pump heaters, salt systems, and smart automation.",
    intro: [
      "Equipment is the least glamorous part of a pool and the part that most determines what it costs to own. A well-specified equipment pad quietly saves you money every month for fifteen years. A poorly specified one is a recurring annoyance.",
      "This guide explains each component in plain language so you can read a proposal and know what you're looking at.",
    ],
    sections: [
      {
        heading: "The pump",
        paragraphs: [
          "The pump circulates water through the filter and back to the pool. It is the largest single energy consumer in most pool systems, which is why California efficiency regulations have effectively made variable-speed pumps the standard for new installations.",
          "A variable-speed pump runs slowly for most of the day rather than at full speed for a shorter period. Because energy consumption rises sharply with speed, running longer and slower filters the same volume of water for a fraction of the electricity. The savings compared to an old single-speed pump are typically substantial enough to pay back the price difference within a couple of seasons.",
        ],
      },
      {
        heading: "The filter",
        paragraphs: [
          "The filter removes debris and particulate from circulating water. Three types are common, and the right one depends on how you want to spend your maintenance time.",
        ],
        bullets: [
          "Cartridge — Excellent filtration, no backwashing, so no water wasted. You rinse or replace cartridges periodically. This is what we specify most often, and water conservation is a real consideration in this region.",
          "Sand — Simplest and cheapest to maintain, but filters to a coarser level and requires backwashing, which discharges water.",
          "Diatomaceous earth (DE) — The finest filtration available, producing very clear water, at the cost of more involved maintenance and periodic media recharging.",
        ],
      },
      {
        heading: "Heaters",
        paragraphs: [
          "A heater is what turns a summer pool into a three-season pool. There are two practical options in this climate, and they suit different patterns of use.",
        ],
        bullets: [
          "Natural gas heater — Heats fast, which makes it ideal for spas and for occasional weekend use. Higher operating cost per hour, lower up-front cost. If you want the spa hot in thirty minutes, this is the answer.",
          "Heat pump — Much cheaper to run, but heats slowly and loses effectiveness as the air gets cold. Ideal for maintaining a pool at a steady temperature over a long season rather than heating it on demand.",
          "Solar — Lowest running cost of all and a good supplement, but it needs suitable roof area and orientation, and it can't deliver on-demand heat.",
        ],
      },
      {
        heading: "Sanitation",
        paragraphs: [
          "Every pool needs a sanitizer. The practical choice for most homeowners is between traditional chlorine dosing and a salt chlorine generator.",
          "A salt system dissolves salt in the water and converts it to chlorine electrically, on a continuous basis. The water is the same chemistry, but the concentration is steadier and most owners describe it as gentler on skin and eyes. You trade the up-front cost of the generator and eventual cell replacement for a much lighter weekly routine and no chlorine storage.",
        ],
      },
      {
        heading: "Automation",
        paragraphs: [
          "Automation ties pumps, heaters, lights, valves, and water features into a single controller you can run from your phone. It is one of the highest-satisfaction upgrades we install.",
          "Beyond convenience, automation protects the equipment. Correct scheduling, freeze protection, and proper pump-speed staging extend equipment life and prevent the kind of misuse that shortens it. If you're deciding between one more design feature and automation, we usually recommend automation.",
        ],
      },
      {
        heading: "What it costs to run",
        paragraphs: [
          "Monthly operating cost depends heavily on choices made at build time. Roughly, in this region:",
        ],
        table: {
          headers: ["Cost driver", "Typical monthly impact", "How to reduce it"],
          rows: [
            ["Pump electricity", "$20 – $60", "Variable-speed pump, longer/slower run cycles"],
            ["Heating (gas)", "$0 – $200+", "Cover, heat only when used, target lower temps"],
            ["Chemicals", "$25 – $70", "Salt system, cover, balanced water"],
            ["Cleaning service", "$100 – $200", "Self-maintain, or automate with a robot cleaner"],
            ["Water (evaporation)", "$10 – $30", "Cover — evaporation is the biggest single loss"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "How long does pool equipment last?",
        a: "Plan on roughly eight to twelve years for pumps and heaters, ten or more for filters, and three to seven years for a salt cell depending on use. Correct sizing, automation, and freeze protection all extend those numbers meaningfully.",
      },
      {
        q: "Do I need a pool cover?",
        a: "You don't need one, but it is the highest-return accessory available. A cover reduces evaporation, heat loss, and chemical consumption simultaneously, and with small children an automatic safety cover is also a serious safety layer.",
      },
      {
        q: "Is automation worth the money?",
        a: "For most owners, yes. It saves you from managing schedules manually, prevents the equipment misuse that shortens component life, and it's substantially cheaper to install during construction than to retrofit.",
      },
      {
        q: "Can I upgrade equipment later?",
        a: "Yes — equipment is the most upgradeable part of a pool. What's hard to change later is the plumbing and conduit buried under your deck, which is why we size the equipment pad and stub out spare runs during construction.",
      },
    ],
    related: ["pool-cost", "pool-features", "construction-timeline"],
    serviceSlug: "pool-construction",
  },
  {
    slug: "pool-finishes",
    title: "Pool Finishes: Plaster vs. Quartz vs. Pebble",
    shortTitle: "Finishes Guide",
    category: "Equipment & Materials",
    readTime: "6 min read",
    excerpt:
      "The interior finish sets your water color, how the pool feels underfoot, and how many years you get before refinishing. Here's how the options compare.",
    metaTitle: "Pool Finishes Compared — Plaster, Quartz and Pebble",
    metaDescription:
      "Compare pool interior finishes: standard plaster, quartz and pebble. Lifespan, cost, water color, texture and which finish suits your budget and use.",
    intro: [
      "The interior finish is the surface you touch, the thing that gives your water its color, and the component with the shortest replacement cycle in the whole pool. Choosing it well is one of the higher-leverage decisions in the project.",
      "There are three mainstream families of finish. They differ in lifespan, texture, water color, and cost — and the cheapest one is the one you'll replace soonest.",
    ],
    sections: [
      {
        heading: "How the three compare",
        paragraphs: [
          "Costs below are the typical premium over standard white plaster for a medium-sized pool. Lifespans assume properly balanced water — chemistry has more effect on finish life than almost anything else.",
        ],
        table: {
          headers: ["Finish", "Typical lifespan", "Texture", "Relative cost"],
          rows: [
            ["Standard plaster", "7 – 12 years", "Smooth, softest underfoot", "Baseline"],
            ["Quartz aggregate", "12 – 18 years", "Lightly textured, non-slip", "Moderate premium"],
            ["Pebble", "15 – 25 years", "Noticeably textured", "Highest premium"],
          ],
        },
      },
      {
        heading: "Standard plaster",
        paragraphs: [
          "White marble plaster is the traditional finish and the least expensive. It gives you the classic bright blue water most people picture, and it's the smoothest option underfoot.",
          "Its weakness is durability. Plaster is more susceptible to staining, etching, and mottling than the aggregate finishes, and it has the shortest replacement cycle. It's a reasonable choice on a tighter budget, but understand that you're likely trading up-front savings for an earlier refinish.",
        ],
      },
      {
        heading: "Quartz aggregate",
        paragraphs: [
          "Quartz finishes blend crushed quartz into the plaster base. The quartz is harder and less porous than marble, which meaningfully improves stain resistance and lifespan for a moderate cost increase.",
          "Quartz also opens up the color palette — from bright whites through blues, greys and greens — and gives a light texture that's more slip-resistant than plaster without being rough. For most of our clients this is the sweet spot between cost and longevity.",
        ],
      },
      {
        heading: "Pebble",
        paragraphs: [
          "Pebble finishes use small natural stones in the mix, either exposed or polished. They are the most durable option available, routinely lasting fifteen to twenty-five years, and they produce the deepest, most natural-looking water.",
          "The trade-off is texture. Standard exposed pebble is noticeably rougher underfoot, which some families love and others find uncomfortable for children or for sitting on a tanning ledge. Polished pebble finishes soften this considerably at additional cost. If you're leaning pebble, ask to touch a real sample rather than judging from a photo.",
        ],
      },
      {
        heading: "How finish affects water color",
        paragraphs: [
          "Water color comes from the finish, not from the water. A white finish reads bright light blue, a mid-grey finish reads deep blue, and a dark finish reads near-black or deep green. Darker finishes also absorb slightly more solar heat.",
          "Two cautions. First, always look at a sample under sunlight in your own yard rather than under showroom lighting — the difference is dramatic. Second, darker finishes show scale and calcium deposits more readily in hard water, so factor in your maintenance appetite.",
        ],
      },
      {
        heading: "Waterline tile and coping",
        paragraphs: [
          "The finish doesn't stand alone. Waterline tile takes the hardest chemical and UV exposure of any surface in the pool, so this is not the place to economize — a failing waterline tile means draining the pool to fix it.",
          "Coping, the cap around the pool edge, is both structural and tactile. It's what people sit on and grab. Match it to your deck material in tone but consider a contrasting texture, and confirm it stays comfortable in direct summer sun — this matters more in the Sacramento valley than in milder climates.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which pool finish lasts the longest?",
        a: "Pebble, comfortably. Fifteen to twenty-five years is typical with well-balanced water, compared with seven to twelve for standard plaster. Quartz sits in between at twelve to eighteen.",
      },
      {
        q: "Is pebble too rough for kids?",
        a: "Standard exposed pebble is noticeably textured and some families find it uncomfortable, particularly on steps and tanning ledges where children sit. Polished pebble finishes address this at additional cost. Touch a physical sample before you decide.",
      },
      {
        q: "Can I change the finish later?",
        a: "Yes. Refinishing means draining the pool, removing the old surface, and applying the new one. It's a routine renovation we perform regularly — but it's a real project, which is why choosing a longer-lasting finish up front often costs less over the life of the pool.",
      },
      {
        q: "What makes a finish fail early?",
        a: "Water chemistry, overwhelmingly. Aggressive or unbalanced water etches and stains any finish. The startup period immediately after plastering is especially critical, which is why we manage the chemistry ourselves through the first weeks.",
      },
    ],
    related: ["pool-cost", "pool-features", "pool-equipment"],
    serviceSlug: "pool-remodeling",
  },
  {
    slug: "buying-guide",
    title: "The Complete Pool Buying Guide",
    shortTitle: "Pool Buying Guide",
    category: "Planning",
    readTime: "9 min read",
    excerpt:
      "How to choose a pool builder, read a proposal properly, and avoid the mistakes that turn a great idea into a bad experience.",
    metaTitle: "Pool Buying Guide — How to Choose a Pool Builder",
    metaDescription:
      "A homeowner's guide to buying a pool: choosing a licensed builder, comparing proposals fairly, understanding contracts and payment schedules, and avoiding common mistakes.",
    intro: [
      "Building a pool is, for most families, one of the largest discretionary purchases they'll ever make — and unlike a car or a kitchen, you can't test one before you buy it. You're buying a promise about work that hasn't happened yet, from a company you met recently.",
      "This guide is written to make you a harder customer to fool. Some of it is not flattering to our industry. Use it on us as readily as on anyone else.",
    ],
    sections: [
      {
        heading: "Step one: verify the license before anything else",
        paragraphs: [
          "In California, pool construction requires a contractor's license. You can verify any license in about a minute on the Contractors State License Board website — check that it's active, check the classification, and check the bond and workers' compensation status.",
          "Our license number is 892669. Any builder who is reluctant to give you their number, or whose number doesn't check out, has answered the most important question you'll ask.",
        ],
        bullets: [
          "Confirm the license is active and in the right classification",
          "Confirm general liability insurance and workers' compensation are current",
          "Ask whether the crews are employees or subcontractors, and whether the subs are licensed too",
          "Check that the business name on the license matches the name on your contract",
        ],
      },
      {
        heading: "Step two: look at completed work, not just renderings",
        paragraphs: [
          "Renderings show intent. Completed projects show capability. Ask to see finished work that's at least a few years old — anyone can make a freshly plastered pool look good in a photograph, and the interesting question is how the deck, coping, and finish are holding up after several seasons.",
          "Ask for references from clients whose projects had a problem. Every builder has some. What you're testing is not whether problems occurred but how they were handled.",
        ],
      },
      {
        heading: "Step three: compare proposals on scope, not price",
        paragraphs: [
          "A cheaper proposal is very often a smaller proposal. Before you compare two numbers, confirm they describe the same project. Put each one side by side and check every item below appears explicitly.",
        ],
        bullets: [
          "Engineering, permit fees, and inspection coordination",
          "Excavation, spoils haul-off, and access restoration",
          "Exact equipment makes and models — not 'pump and filter'",
          "Deck square footage, material, and finish, stated numerically",
          "Interior finish type and specific product, not just 'plaster'",
          "Waterline tile allowance and coping material",
          "Electrical work, including panel upgrades if required",
          "Code-required safety barriers, fencing, or alarms",
          "Startup chemicals and initial water chemistry service",
          "Warranty terms in writing, on both structure and equipment",
        ],
      },
      {
        heading: "Step four: understand the payment schedule",
        paragraphs: [
          "Payments should be tied to completed construction milestones, not to calendar dates and not to a large up-front lump. California law limits the down payment a contractor may collect on a home improvement contract, and a builder asking for a very large payment before work begins is a warning sign worth taking seriously.",
          "A healthy schedule looks like a modest deposit followed by payments at excavation, gunite, decking, and completion — each released after that phase is actually finished. You should never be substantially ahead of the work.",
        ],
      },
      {
        heading: "Step five: insist on the 3D design",
        paragraphs: [
          "A flat overhead drawing is not enough to judge a backyard. You need to see the pool in three dimensions on your actual lot, from the angles you'll really look at it: standing at the patio door, sitting at the table, looking back at the house from the water.",
          "Every change is free at this stage. Widen the tanning ledge, move the spa, rotate the whole pool eight degrees — none of it costs anything until concrete is involved. This is why we build a 3D model for every project before a proposal is finalized, and why we'd encourage you to walk away from anyone who wants a signature without showing you one.",
        ],
      },
      {
        heading: "The most common mistakes we see",
        paragraphs: [
          "These come up again and again, usually from homeowners who were working with someone else before they called us.",
        ],
        bullets: [
          "Undersizing the deck. The pool is the star, but the deck is where people actually spend their time. A beautiful pool ringed by a four-foot walkway feels cramped forever.",
          "Ignoring shade. Sacramento summers are hot. A backyard with no shade plan gets used far less than one with a pergola, sail, or well-placed tree.",
          "Forgetting the equipment location. Equipment makes noise and needs service access. Putting it under a bedroom window is a decision you live with daily.",
          "Not planning for landscape. A finished pool surrounded by bare dirt is a half-finished backyard. Even if you phase the planting, plan it now so the irrigation and conduit go in at the right time.",
          "Choosing on price alone. The cheapest bid is cheapest for a reason. Find out what the reason is before you sign, not after.",
        ],
      },
      {
        heading: "Questions worth asking every builder",
        paragraphs: [
          "Bring this list to every consultation, including ours. The answers tell you more than any brochure.",
        ],
        bullets: [
          "What is your license number, and how long have you held it?",
          "Who actually performs the work — employees or subcontractors?",
          "Who will be my single point of contact, and how often will I hear from them?",
          "What is your realistic timeline, including permitting, for my city?",
          "What happens if you hit rock or groundwater during excavation?",
          "What exactly does your warranty cover, and for how long?",
          "Can I see a project you completed five years ago?",
          "What is the most common change order on your projects, and why?",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I check a pool builder's license in California?",
        a: "Search the contractor's license number on the Contractors State License Board (CSLB) website. It will show whether the license is active, the classifications held, the bond status, and any disciplinary history. It takes about a minute and it is the single most valuable minute of your research.",
      },
      {
        q: "How many bids should I get?",
        a: "Two or three is plenty, provided you compare them on scope rather than price. Beyond three, you tend to add confusion rather than information — and the most useful comparison is between detailed proposals, not between ballpark numbers.",
      },
      {
        q: "Should I be worried about change orders?",
        a: "Not inherently — some are legitimate, particularly for genuine underground unknowns. What matters is that changes are documented, priced, and approved by you before the work happens. A builder who does extra work first and bills for it afterward is the problem, not the concept of a change order.",
      },
      {
        q: "What warranty should a pool come with?",
        a: "Expect a structural warranty on the shell, a separate warranty on the interior finish, and manufacturer warranties on equipment that the builder registers on your behalf. Get all of it in writing, with the durations stated, before you sign.",
      },
    ],
    related: ["pool-cost", "construction-timeline", "pool-features"],
    serviceSlug: "pool-construction",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
