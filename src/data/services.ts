export type ServiceFaq = { q: string; a: string };
export type ServiceBenefit = { title: string; text: string };
export type ServiceStep = { title: string; text: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  bullets: string[];
  metaTitle: string;
  metaDescription: string;
  /** Multi-paragraph SEO intro used on the service detail page */
  longIntro: string[];
  /** Why-choose-us benefits specific to this service */
  benefits: ServiceBenefit[];
  /** How-it-works process steps */
  process: ServiceStep[];
  /** FAQ entries rendered on-page and as FAQPage JSON-LD */
  faqs: ServiceFaq[];
  /** Slugs of closely related services for internal linking */
  related: string[];
};

export const services: Service[] = [
  {
    slug: "pool-construction",
    name: "Custom Pool Construction",
    shortName: "Pool Construction",
    summary:
      "Custom-designed gunite pools built from the ground up, tailored to your yard and lifestyle.",
    description:
      "We design and build custom in-ground pools from concept to completion, including professional 3D models so you can see your pool before we break ground. Every build is engineered for your yard's grade, soil, and drainage.",
    bullets: [
      "Free 3D pool design modeling",
      "Gunite & custom shape pools",
      "Spas and water features",
      "Pool lighting & automation",
      "Licensed, insured, permitted builds",
    ],
    metaTitle: "Custom Pool Builder | In-Ground Pool Construction",
    metaDescription:
      "Custom in-ground pool construction with free 3D design models. Licensed, insured, family-owned pool builder serving the greater Sacramento region.",
    longIntro: [
      "Building a custom swimming pool is one of the biggest upgrades you can make to your home — and one of the most rewarding. As an experienced in-ground pool builder, we take responsibility for your project from first design through startup — one contract, one schedule, one company accountable for the result. Because one licensed contractor owns the whole process, nothing gets lost between stages and your timeline stays predictable.",
      "Every pool we build starts with a free 3D design model. You'll see the exact shape, depth, decking, and features of your new swimming pool rendered on your actual lot before we ever break ground — so you can move the spa, widen the baja shelf, or change the water feature while changes are still free. Once you approve the design, we engineer the structure for your soil, grade, and drainage, pull the permits, and build to code.",
      "From compact plunge pools for smaller suburban lots to large freeform pools with spas, tanning ledges, waterfalls, and automation, our team builds swimming pools designed around how your family will actually use the backyard.",
    ],
    benefits: [
      {
        title: "Free 3D Design Before You Commit",
        text: "See a photorealistic model of your pool on your own lot and revise it until it's right — before construction begins and while changes cost nothing.",
      },
      {
        title: "One Contractor, Start to Finish",
        text: "Excavation, steel, plumbing, gunite, tile, decking, and equipment are all coordinated by one licensed builder, so your project stays on schedule and on budget.",
      },
      {
        title: "Engineered for Your Soil",
        text: "Sacramento-area soils range from river loam to expansive clay. We engineer each pool shell for the actual conditions on your lot, not a generic spec.",
      },
      {
        title: "Energy-Smart Equipment",
        text: "Variable-speed pumps, LED lighting, and smart automation cut monthly operating costs and let you run the pool from your phone.",
      },
    ],
    process: [
      {
        title: "Design Consultation & 3D Model",
        text: "We visit your property, talk through budget and wish list, and deliver a free 3D pool design rendered on your actual yard.",
      },
      {
        title: "Engineering & Permits",
        text: "We produce engineered plans for your soil and grade, then handle all city and county permitting on your behalf.",
      },
      {
        title: "Excavation & Structure",
        text: "Dig, steel reinforcement, plumbing rough-in, and gunite shell — the structural heart of your pool, inspected at every stage.",
      },
      {
        title: "Finishes & Startup",
        text: "Tile, coping, decking, plaster, and equipment installation, followed by fill, chemical startup, and a full owner orientation.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to build an in-ground pool?",
        a: "Most of our custom in-ground pool projects fall between $60,000 and $150,000+ depending on size, finishes, and features like spas, water features, and decking. After a free design consultation and 3D model, you'll get a fixed, itemized proposal — and financing options are available.",
      },
      {
        q: "How long does pool construction take?",
        a: "A typical custom pool takes 8–12 weeks from excavation to swim-ready, plus permitting time before we break ground. Weather, inspections, and design complexity can affect the schedule; we give you a realistic timeline before work starts and keep you updated at every phase.",
      },
      {
        q: "Do I need a permit to build a pool?",
        a: "Yes — in-ground pools require building permits and inspections in every city we serve. We prepare the engineered plans, submit the permit application, and schedule all inspections as part of every pool construction contract, so you never have to deal with the counter at the building department.",
      },
      {
        q: "What is a gunite pool and why do you build with it?",
        a: "Gunite is concrete pneumatically applied over a steel-reinforced frame. It produces a monolithic, highly durable pool shell that can be formed into any shape — which is why it's the standard for custom pools. Unlike prefab fiberglass shells, a gunite pool is designed specifically for your yard and can include tanning ledges, custom steps, and attached spas.",
      },
      {
        q: "Can you build a pool on a sloped or small lot?",
        a: "Yes. Sloped lots often need engineered retaining walls or raised bond beams, and small lots suit plunge pools and geometric designs. Because we take on concrete, retaining walls, and landscaping as part of the same contract, grading challenges get solved within your project instead of becoming a second job you have to arrange yourself.",
      },
    ],
    related: ["3d-pool-design", "pool-decks", "pool-remodeling"],
  },
  {
    slug: "pool-remodeling",
    name: "Pool Remodeling & Redesign",
    shortName: "Pool Remodeling",
    summary: "Give your dated pool a modern redesign — resurfacing, reshaping, and new features.",
    description:
      "We remodel and redesign existing pools — replastering, retiling, reshaping steps and benches, upgrading equipment, and adding features like water bowls, lighting, and spas — so an outdated pool looks and functions like new.",
    bullets: [
      "Replastering & retiling",
      "Pool reshaping & renovation",
      "Equipment & energy upgrades",
      "Added features: spas, water bowls, lighting",
      "Free 3D redesign preview",
    ],
    metaTitle: "Pool Remodeling & Renovation",
    metaDescription:
      "Pool remodeling and redesign — resurfacing, retiling, reshaping, and equipment upgrades with a free 3D preview. Serving greater Sacramento.",
    longIntro: [
      "If your pool's plaster is rough, the tile looks dated, or the equipment costs a fortune to run, a pool remodel can transform it for a fraction of the cost of a new build. Our pool renovation service covers everything from simple resurfacing to full structural redesigns — new shapes, added spas, tanning ledges, water features, and modern energy-efficient equipment.",
      "Pool resurfacing is the most common starting point: over 10–15 years, plaster etches, stains, and delaminates. We strip the old surface and apply new plaster, quartz, or pebble finishes that look brand-new and last for decades. While the pool is drained, it's also the perfect time to replace waterline tile, modernize coping, and upgrade to LED lighting and a variable-speed pump.",
      "For bigger transformations, our free 3D redesign preview shows you exactly how your remodeled pool will look — new geometry, raised walls, fire and water features — before any demolition starts.",
    ],
    benefits: [
      {
        title: "New-Pool Look Without the New-Pool Price",
        text: "Resurfacing, new tile, and modern coping typically deliver a dramatic transformation at a fraction of the cost of new construction.",
      },
      {
        title: "Lower Monthly Operating Costs",
        text: "Swapping aging single-speed pumps and old lighting for variable-speed equipment and LEDs can cut energy use significantly.",
      },
      {
        title: "Fix Problems at the Source",
        text: "Cracks, leaks, and failing plumbing are corrected during the remodel — not painted over — so the results last.",
      },
      {
        title: "3D Preview of the Finished Remodel",
        text: "See the redesigned pool on screen before demolition begins, and adjust finishes and features while changes are still free.",
      },
    ],
    process: [
      {
        title: "Assessment & 3D Redesign",
        text: "We inspect the pool's structure, surface, plumbing, and equipment, then model the proposed remodel in 3D with an itemized quote.",
      },
      {
        title: "Drain & Demolition",
        text: "The pool is drained under controlled conditions and old plaster, tile, or structures are removed.",
      },
      {
        title: "Structural & Feature Work",
        text: "Reshaping, new benches or ledges, added spas, plumbing and electrical upgrades — everything that changes how the pool works.",
      },
      {
        title: "Finishes & Startup",
        text: "New tile, coping, and interior finish are installed, then we refill, balance the water, and walk you through the upgraded equipment.",
      },
    ],
    faqs: [
      {
        q: "How much does pool remodeling cost?",
        a: "Basic resurfacing projects often start around $10,000–$20,000, while full remodels with new tile, coping, equipment, and added features typically range from $25,000 to $75,000+. Every remodel gets an itemized fixed quote after an on-site assessment.",
      },
      {
        q: "How often does a pool need to be resurfaced?",
        a: "Standard plaster generally lasts 10–15 years; quartz and pebble finishes last 15–25. If you're seeing rough patches, staining, or exposed gunite, it's time for pool resurfacing — waiting too long can allow water into the shell and turn a surface job into a structural repair.",
      },
      {
        q: "Can you change the shape of an existing pool?",
        a: "Yes. As part of a pool redesign we can raise or lower floors, add tanning ledges and benches, square off or soften corners, and even reduce oversized deep ends to make the pool more usable for families. Structural changes are engineered and permitted just like new construction.",
      },
      {
        q: "How long does a pool remodel take?",
        a: "A resurface with new tile usually takes 2–3 weeks. Remodels involving structural changes, new spas, or decking typically run 4–8 weeks. We schedule work to minimize the time your pool is out of commission.",
      },
      {
        q: "Should I remodel my pool or fill it in and start over?",
        a: "In most cases the existing shell is structurally sound and remodeling is far more cost-effective. During our free assessment we'll tell you honestly whether your pool is a good remodel candidate — and if it isn't, we build new pools too, so you'll get a straight comparison of both options.",
      },
    ],
    related: ["pool-construction", "pool-decks", "3d-pool-design"],
  },
  {
    slug: "3d-pool-design",
    name: "3D Pool Design",
    shortName: "3D Pool Design",
    summary: "See your future pool before we break ground with a free custom 3D design model.",
    description:
      "Every pool project starts with a free, custom 3D design model, so you can see exactly how your pool, decking, and landscaping will look and make changes before construction begins.",
    bullets: [
      "Free custom 3D renderings",
      "Walk through design options before you commit",
      "Accurate sizing, shape, and layout previews",
      "Used for both new builds and remodels",
    ],
    metaTitle: "Free 3D Pool Design & Rendering",
    metaDescription:
      "Free 3D pool design service — preview your custom pool, decking, and landscaping in a photorealistic model before construction begins.",
    longIntro: [
      "The most expensive words in pool construction are \"I wish we had...\" — said after the concrete is poured. Our 3D pool design service eliminates that risk. Before any contract is signed, we build a photorealistic 3D model of your backyard with the proposed pool, spa, decking, and landscaping in place, so every decision is made on screen where changes are free.",
      "The model is built from your lot's real dimensions, so proportions are honest: you'll see exactly how much deck space remains, how close the pool sits to the patio, and how the design looks from your kitchen window. We iterate with you — moving the spa, stretching the tanning ledge, comparing tile and finish options — until the design is exactly right.",
      "3D design isn't just for new pools. For remodels, we model your existing pool and show the proposed changes side-by-side, which makes it dramatically easier to commit to a renovation with confidence.",
    ],
    benefits: [
      {
        title: "Completely Free, No Obligation",
        text: "The 3D design consultation costs nothing and doesn't commit you to building with us — though most homeowners who see their design do.",
      },
      {
        title: "True-to-Scale Accuracy",
        text: "Models are built from your actual lot measurements, so what you approve on screen is what gets built in your yard.",
      },
      {
        title: "Compare Options Instantly",
        text: "Rectangle vs. freeform, raised spa vs. inline, pavers vs. stamped concrete — see each option rendered before choosing.",
      },
      {
        title: "Fewer Change Orders",
        text: "Projects that start with a 3D design run smoother, because the decisions that usually cause mid-build changes were already made.",
      },
    ],
    process: [
      {
        title: "Site Visit & Measurements",
        text: "We measure your yard, note grades and setbacks, and discuss your wish list, style preferences, and budget.",
      },
      {
        title: "Model Build",
        text: "Our designer builds your yard in 3D and places the proposed pool, spa, decking, and landscape elements to scale.",
      },
      {
        title: "Design Review",
        text: "We walk through the model together — on screen — and revise shapes, features, and finishes in real time.",
      },
      {
        title: "Final Design & Proposal",
        text: "You receive the final renderings alongside a fixed, itemized construction proposal based on exactly what's in the model.",
      },
    ],
    faqs: [
      {
        q: "Is the 3D pool design really free?",
        a: "Yes. The site visit, measurements, 3D model, and design revisions are free with no obligation to build. We invest in the design up front because homeowners who can see their finished project make confident decisions.",
      },
      {
        q: "How accurate is the 3D model?",
        a: "The model is built from real measurements of your lot, including fences, structures, and elevation changes, so scale and proportions are accurate. The pool you approve in the model is the pool our crews build from the engineered plans.",
      },
      {
        q: "Can I see different finish options in the model?",
        a: "Yes — we can render different interior finishes, waterline tiles, coping materials, and decking styles so you can compare complete looks, not swatches. It's the easiest way to choose between, say, a pebble finish with travertine versus plaster with stamped concrete.",
      },
      {
        q: "Do you do 3D designs for pool remodels too?",
        a: "Absolutely. We model your existing pool and overlay the proposed remodel — new finishes, added spa, reshaped steps — so you can judge exactly what the renovation buys you before committing.",
      },
    ],
    related: ["pool-construction", "pool-remodeling", "landscaping"],
  },
  {
    slug: "pool-decks",
    name: "Pool Decks",
    shortName: "Pool Decks",
    summary: "Durable, slip-resistant pool decking built to complement your pool and backyard.",
    description:
      "From stamped concrete to travertine and pavers, we build pool decks that hold up to Northern California sun and pool chemicals while staying cool underfoot.",
    bullets: [
      "Stamped & broom-finish concrete",
      "Travertine and paver decking",
      "Cool-deck and slip-resistant coatings",
      "Deck repair & resurfacing",
    ],
    metaTitle: "Pool Deck Construction & Resurfacing",
    metaDescription:
      "Custom pool deck installation, repair, and resurfacing — stamped concrete, pavers, travertine, and cool-deck coatings built for California sun.",
    longIntro: [
      "Your pool deck takes more abuse than any other surface on your property: blazing summer sun, chlorinated splash-out, and constant barefoot traffic. We design and install pool decking engineered for exactly those conditions — slip-resistant, heat-reflective, and built on properly compacted base so it won't crack and settle after two seasons.",
      "With over 20 years of concrete experience behind every pour, we install stamped concrete pool decks, broom-finish concrete, travertine, and interlocking pavers. Each material has real trade-offs in surface temperature, slip resistance, and cost, and we'll walk you through them honestly — including cool-deck coatings that keep concrete comfortable underfoot in 100° valley summers.",
      "Already have a deck that's cracked, spalling, or just dated? Pool deck resurfacing and overlay systems can renew the surface without full demolition, often in less than a week.",
    ],
    benefits: [
      {
        title: "Built on 20+ Years of Concrete Experience",
        text: "Pool decks fail at the base, not the surface. Ours are poured over engineered, compacted sub-base with proper expansion joints and drainage slope.",
      },
      {
        title: "Cool and Slip-Resistant Underfoot",
        text: "Texture selection and cool-deck coatings keep the surface walkable in July and grippy when wet.",
      },
      {
        title: "Materials Matched to Your Pool",
        text: "Stamped concrete, travertine, and pavers each suit different budgets and styles — we install all three, so our advice isn't a sales pitch.",
      },
      {
        title: "Drainage Done Right",
        text: "Every deck is sloped and drained so splash-out and rain move away from the pool shell and your foundation.",
      },
    ],
    process: [
      {
        title: "Design & Material Selection",
        text: "We measure the space, review material samples, and design a deck layout that fits your pool, furniture, and traffic flow.",
      },
      {
        title: "Demo & Base Preparation",
        text: "Old surfaces are removed where needed, and the sub-base is graded and compacted — the step that determines whether a deck lasts.",
      },
      {
        title: "Installation",
        text: "Concrete is formed and poured, or pavers and travertine are set, with expansion joints and drainage built in.",
      },
      {
        title: "Finish & Seal",
        text: "Stamping, texturing, or joint sanding is completed, and the surface is sealed for stain and UV resistance.",
      },
    ],
    faqs: [
      {
        q: "What's the best material for a pool deck?",
        a: "It depends on budget and style. Stamped concrete offers the widest design range at a moderate price. Travertine stays naturally cool and looks high-end. Pavers resist cracking and are easy to repair. We install all three and will recommend what genuinely fits your project.",
      },
      {
        q: "How much does a pool deck cost?",
        a: "Broom-finish concrete decking is the most economical; stamped concrete runs more per square foot; travertine and premium pavers are the top tier. Most full pool deck projects land between $10,000 and $40,000 depending on square footage and material. We provide fixed quotes after measuring.",
      },
      {
        q: "Can you resurface my existing cracked pool deck?",
        a: "Often, yes. If the slab is structurally sound, overlay and resurfacing systems can renew the look for much less than replacement. If the slab has settled or is badly cracked, we'll tell you honestly — resurfacing over a failed base just moves the problem a year down the road.",
      },
      {
        q: "How do you keep a pool deck from getting too hot?",
        a: "Material choice matters most: travertine and lighter-colored finishes stay coolest. For concrete, cool-deck acrylic coatings reflect heat and can lower surface temperature dramatically compared to bare gray concrete.",
      },
    ],
    related: ["pool-construction", "concrete-services", "pool-remodeling"],
  },
  {
    slug: "landscaping",
    name: "Landscaping Services",
    shortName: "Landscaping",
    summary: "Full-service landscape design and installation for front and back yards.",
    description:
      "We design and install complete landscapes — planting, irrigation, hardscape, and lighting — that work together with your pool and outdoor living space.",
    bullets: [
      "Landscape design & installation",
      "Irrigation systems",
      "Outdoor lighting",
      "Planting & sod",
      "Yard drainage solutions",
    ],
    metaTitle: "Landscape Design & Installation",
    metaDescription:
      "Full-service landscaping company — design, installation, irrigation, lighting, and drainage for front and back yards in the Sacramento area.",
    longIntro: [
      "Great landscaping is a system, not a shopping list of plants. Our landscape design and installation service plans your entire yard as one project — planting, irrigation, lighting, drainage, lawn, and hardscape — so everything works together and thrives in the Sacramento Valley climate.",
      "We design for how you'll actually live in the space: entertaining areas that flow from the back door, low-water planting beds that look good year-round, lawn where kids and pets need it, and drip irrigation zoned so every plant gets what it needs without wasting water. Because we also build pools, patios, and concrete, your landscape and hardscape are designed together instead of colliding later.",
      "Northern California's hot, dry summers demand water-wise choices. We favor proven Mediterranean and California-native plantings, high-efficiency irrigation, and smart controllers that adjust to the weather — landscapes that stay beautiful in August without a shocking water bill.",
    ],
    benefits: [
      {
        title: "Design-Build Under One Roof",
        text: "Landscape, hardscape, drainage, and lighting are planned and built by one team — no finger-pointing between a designer and an installer.",
      },
      {
        title: "Water-Wise by Default",
        text: "Drip irrigation, smart controllers, and climate-appropriate planting keep the yard green through valley summers without runaway water bills.",
      },
      {
        title: "Drainage Solved, Not Ignored",
        text: "We grade, pipe, and drain before we plant — protecting your foundation, hardscape, and plantings from winter standing water.",
      },
      {
        title: "Built Around Your Pool & Patio",
        text: "As pool and concrete builders, we design planting and lighting that frames the outdoor living space instead of fighting it.",
      },
    ],
    process: [
      {
        title: "Design Consultation",
        text: "We walk the property, discuss how you use the yard, and develop a landscape plan with plant palette, irrigation zones, and lighting.",
      },
      {
        title: "Site Prep & Grading",
        text: "Demo, soil preparation, grading, and drainage installation set the foundation for everything visible later.",
      },
      {
        title: "Hardscape & Irrigation",
        text: "Edging, pathways, and the irrigation mainline and valves go in before a single plant, so nothing gets dug up twice.",
      },
      {
        title: "Planting, Lawn & Lighting",
        text: "Trees, shrubs, sod or turf, mulch, and low-voltage lighting complete the landscape, followed by a controller walkthrough.",
      },
    ],
    faqs: [
      {
        q: "How much does professional landscaping cost?",
        a: "Front yard refreshes often start around $10,000–$20,000, while complete backyard landscape installations with irrigation, lighting, and hardscape typically range from $25,000 to $80,000+. After a design consultation you'll receive a fixed, itemized proposal.",
      },
      {
        q: "What plants work best in the Sacramento area?",
        a: "The Sacramento Valley's hot-summer Mediterranean climate favors lavender, salvia, rosemary, ornamental grasses, crape myrtle, olive, and California natives like ceanothus and manzanita. We design plant palettes that handle 100° summers and occasional winter frost while staying attractive year-round.",
      },
      {
        q: "Do you install irrigation and sprinkler systems?",
        a: "Yes — high-efficiency drip irrigation for beds, rotary or spray zones for lawn, and smart weather-based controllers are part of nearly every landscape we build. We also retrofit and repair existing systems as part of larger projects.",
      },
      {
        q: "Can you fix drainage problems in my yard?",
        a: "Yes. Standing water and soggy lawns usually trace to grading or compacted soil. We solve drainage with proper grading, french drains, catch basins, and dry wells — and we address it before installing any landscape on top.",
      },
      {
        q: "Do you offer low-maintenance landscaping options?",
        a: "Absolutely. Artificial turf, decomposed granite, mulched native beds, and drip-only planting plans can reduce yard maintenance to nearly zero while keeping the space attractive. Tell us your tolerance for upkeep and we'll design to it.",
      },
    ],
    related: ["artificial-turf", "concrete-services", "fire-pits"],
  },
  {
    slug: "driveway-walkway",
    name: "Driveway & Walkway Installation",
    shortName: "Driveways & Walkways",
    summary: "Concrete and paver driveways and walkways built to last.",
    description:
      "We pour and install driveways and walkways in concrete, stamped concrete, and pavers, engineered for durability and curb appeal.",
    bullets: [
      "Concrete driveways",
      "Paver walkways & paths",
      "Stamped & decorative concrete",
      "Repair and replacement",
    ],
    metaTitle: "Driveway & Walkway Installation",
    metaDescription:
      "Concrete and paver driveway and walkway installation and replacement — durable, decorative finishes with proper base engineering.",
    longIntro: [
      "Your driveway is the first thing visitors see and the hardest-working slab on your property. We install concrete driveways, paver driveways, and walkways engineered to carry vehicle loads for decades — which means proper excavation, compacted base, correct thickness, steel reinforcement, and control joints placed where they belong.",
      "Beyond standard gray concrete, we offer stamped and colored finishes that mimic stone, slate, and brick at a fraction of the material cost, plus true interlocking pavers for a premium look that's easy to repair section by section. Walkways, garden paths, and entry approaches are designed to match, tying the front yard together.",
      "Replacing a cracked, settled driveway? We demo and haul the old slab, correct the base problems that caused the failure, and pour a new driveway that won't repeat history.",
    ],
    benefits: [
      {
        title: "Engineered to Carry Vehicles",
        text: "Driveways fail from thin slabs and poor base. Ours are poured at proper thickness over compacted base with reinforcement suited to the load.",
      },
      {
        title: "Curb Appeal Options",
        text: "Broom finish, exposed aggregate, stamped patterns, color hardeners, and pavers — matched to your home's style and budget.",
      },
      {
        title: "Full Replacement Service",
        text: "Demo, haul-off, base correction, and new installation handled by one crew with one warranty.",
      },
      {
        title: "Drainage Built In",
        text: "Slope and drainage planning keeps water off the garage slab and away from your foundation.",
      },
    ],
    process: [
      {
        title: "Layout & Quote",
        text: "We measure, discuss finishes, check drainage, and deliver a fixed quote with a clear scope.",
      },
      {
        title: "Demo & Base Work",
        text: "Existing surfaces are removed and the sub-base is graded and compacted to prevent future settling.",
      },
      {
        title: "Forming & Pouring",
        text: "Forms, reinforcement, and concrete placement — or bedding sand and paver setting — done to spec.",
      },
      {
        title: "Finishing & Curing",
        text: "Joints are cut, finishes applied, and we walk you through curing times before the first car rolls on.",
      },
    ],
    faqs: [
      {
        q: "How much does a new concrete driveway cost?",
        a: "Standard broom-finish concrete driveways typically run in the mid teens per square foot installed, with stamped finishes and pavers higher. A typical two-car driveway replacement lands between $8,000 and $20,000 depending on size and finish. We quote fixed prices after measuring.",
      },
      {
        q: "How long before I can drive on a new driveway?",
        a: "Foot traffic is fine after 24–48 hours, but keep vehicles off for at least 7 days while the concrete gains strength. Full design strength takes about 28 days. Pavers can be driven on as soon as the joints are sanded and compacted.",
      },
      {
        q: "Why did my old driveway crack, and how do you prevent it?",
        a: "Most driveway cracking comes from thin concrete, weak sub-base, or missing control joints. We prevent it with compacted base, adequate slab thickness, reinforcement, and properly spaced joints that direct inevitable shrinkage into straight, controlled lines.",
      },
      {
        q: "Concrete or pavers — which is better for a driveway?",
        a: "Concrete costs less and offers stamped decorative options; pavers cost more up front but resist cracking and can be spot-repaired invisibly. Both last decades when installed on a proper base. We install both and will give you a straight comparison for your project.",
      },
    ],
    related: ["concrete-services", "landscaping", "pool-decks"],
  },
  {
    slug: "fire-pits",
    name: "Fire Pits",
    shortName: "Fire Pits",
    summary: "Custom fire pits and fire features to extend your outdoor living season.",
    description:
      "Gas and wood-burning fire pits built into your patio or backyard design, matched to your hardscape materials.",
    bullets: [
      "Custom gas & wood-burning fire pits",
      "Built-in seating integration",
      "Matched to existing hardscape",
    ],
    metaTitle: "Custom Fire Pit Installation",
    metaDescription:
      "Custom gas and wood-burning fire pit installation — built-in seating, matched masonry, and safe gas plumbing for your backyard.",
    longIntro: [
      "A well-built fire pit turns a backyard into a destination and stretches outdoor season deep into fall and winter evenings. We design and build custom fire pits and fire features — natural gas, propane, and wood-burning — as permanent masonry structures matched to your patio, pool deck, and landscape materials.",
      "Gas fire pits are the most popular build: push-button ignition, no smoke chasing guests around the circle, and no ash cleanup. We run the gas line, size the burner correctly for real warmth, and finish the structure in stone, stucco, or block-and-veneer that ties into your hardscape. Wood-burning pits deliver the classic crackle and are built with proper fire brick and smoke-smart placement.",
      "Fire pits are best planned alongside seating walls, patios, and lighting — and because we build all of those, your fire feature lands in a designed gathering space, not the middle of a lawn.",
    ],
    benefits: [
      {
        title: "Real Masonry, Not a Kit",
        text: "Our fire pits are permanent structures built from block, brick, and stone veneer — engineered footings included — not a metal bowl from a box store.",
      },
      {
        title: "Safe, Permitted Gas Work",
        text: "Gas lines are properly sized, trenched, tested, and inspected, with shutoffs and key valves where codes require.",
      },
      {
        title: "Designed as a Gathering Space",
        text: "We plan the seating circle, wall heights, and clearances so the fire pit is comfortable for a crowd, not just a photo.",
      },
      {
        title: "Matched to Your Hardscape",
        text: "Veneer, cap stone, and finish are selected to match your patio, pool coping, and walls for a built-with-the-house look.",
      },
    ],
    process: [
      {
        title: "Design & Placement",
        text: "We choose the location for wind, clearances, view lines, and gas routing, and design the pit and seating to scale.",
      },
      {
        title: "Footing & Utilities",
        text: "Concrete footing is poured and gas and electrical lines are trenched and stubbed before the structure goes up.",
      },
      {
        title: "Masonry Construction",
        text: "Block core, fire-rated interior, veneer, and cap are built, with the burner system installed and leak-tested.",
      },
      {
        title: "Finish & First Fire",
        text: "Media (fire glass or lava rock), ignition, and controls are completed — then we light it together and walk through operation.",
      },
    ],
    faqs: [
      {
        q: "How much does a custom fire pit cost?",
        a: "Custom masonry fire pits typically range from $4,000 to $12,000+ depending on size, materials, and whether we're running a new gas line. Fire pit and seating wall packages built with a patio project are quoted together and are often the best value.",
      },
      {
        q: "Gas or wood-burning — which fire pit is better?",
        a: "Gas wins for convenience: instant on/off, no smoke, no embers, and fewer restrictions on burn days. Wood delivers the traditional campfire experience but is subject to local air-quality burn bans. Many clients choose gas for everyday use.",
      },
      {
        q: "Do I need a permit for a fire pit?",
        a: "Gas-plumbed fire pits generally require a permit for the gas line, and some cities have setback rules from structures and property lines. We handle permitting and build to your city's requirements as part of the project.",
      },
      {
        q: "Can you add a fire pit to my existing patio?",
        a: "Usually, yes. We saw-cut the existing concrete, pour a footing, trench the gas line, and build the pit to match your current hardscape. It's one of the highest-impact upgrades you can make to an existing backyard.",
      },
    ],
    related: ["concrete-services", "landscaping", "pool-decks"],
  },
  {
    slug: "artificial-turf",
    name: "Artificial Turf",
    shortName: "Artificial Turf",
    summary: "Low-maintenance, drought-tolerant artificial turf installation.",
    description:
      "Water-wise artificial turf for lawns, pet areas, and putting greens — always green, no mowing, no watering restrictions.",
    bullets: [
      "Residential lawn turf",
      "Pet-friendly turf systems",
      "Putting greens",
      "Drainage-engineered installation",
    ],
    metaTitle: "Artificial Turf Installation",
    metaDescription:
      "Professional artificial turf installation for lawns, pet areas, and putting greens — drought-proof, drainage-engineered, always green.",
    longIntro: [
      "In a region of hot summers and recurring drought restrictions, artificial turf has become the practical answer for homeowners tired of brown lawns and rising water bills. We install premium synthetic turf that looks convincingly real, drains fast, and stays green through August heat waves and winter rains alike — with zero mowing, watering, or fertilizing.",
      "The difference between turf that looks great for 15 years and turf that wrinkles and smells in two is the installation. We excavate the existing lawn, build a compacted aggregate base, install proper drainage, and seam and infill the turf to manufacturer spec. For pet owners, we add antimicrobial infill and extra drainage; for golfers, we build true-rolling putting greens with fringe cuts.",
      "Turf pairs beautifully with paver borders, planting beds, and decomposed granite paths — and as full-service landscapers, we design the whole picture rather than just rolling out green carpet.",
    ],
    benefits: [
      {
        title: "Zero Watering, Mowing, or Edging",
        text: "Reclaim your weekends and cut the water bill — turf stays uniform green with no maintenance beyond an occasional rinse.",
      },
      {
        title: "Engineered Base & Drainage",
        text: "Compacted base and drainage design prevent the wrinkles, low spots, and odor problems that plague cheap installs.",
      },
      {
        title: "Pet & Kid Friendly Systems",
        text: "Antimicrobial infill, extra percolation, and soft, lead-free fibers make turf the cleanest lawn a dog ever had.",
      },
      {
        title: "Realistic, Premium Products",
        text: "Multi-tone fibers with natural thatch layers — guests will have to kneel down to tell it isn't real grass.",
      },
    ],
    process: [
      {
        title: "Measure & Product Selection",
        text: "We measure the area and help you choose turf face weight, blade style, and infill for how the space will be used.",
      },
      {
        title: "Excavation & Base",
        text: "Old lawn and soil are removed, and a compacted class-2 aggregate base is built with drainage fall.",
      },
      {
        title: "Turf Installation",
        text: "Turf is rolled, seamed, trimmed, and secured, with fibers oriented consistently for a natural look.",
      },
      {
        title: "Infill & Grooming",
        text: "Infill is broadcast and power-brushed so the blades stand upright, and edges are finished clean against borders.",
      },
    ],
    faqs: [
      {
        q: "How much does artificial turf installation cost?",
        a: "Professionally installed artificial turf typically runs $12–$20 per square foot depending on product grade and site prep. A typical suburban front lawn lands between $6,000 and $15,000 — and eliminates watering and mowing costs permanently.",
      },
      {
        q: "How long does artificial turf last?",
        a: "Quality turf installed on a proper base lasts 15–20 years in residential use, backed by manufacturer warranties. UV-stabilized fibers keep their color through valley summers.",
      },
      {
        q: "Is artificial turf good for dogs?",
        a: "Yes — with the right system. We install pet turf packages with high-percolation backing, extra base drainage, and antimicrobial infill so urine drains through and rinses clean. No more mud, brown spots, or dug-up lawn.",
      },
      {
        q: "Does artificial turf get hot in summer?",
        a: "Turf does warm in direct sun. Lighter thatch colors, certain fiber technologies, and a quick rinse before barefoot time all mitigate it, and shaded placement helps. We'll discuss realistic expectations and product options for hot-weather performance.",
      },
      {
        q: "Can you install a backyard putting green?",
        a: "Yes — putting greens are a specialty install with dense, short-pile turf over a precision-graded base, plus fringe turf surrounds. We can build greens with breaks and multiple cup positions sized to your yard.",
      },
    ],
    related: ["landscaping", "concrete-services", "driveway-walkway"],
  },
  {
    slug: "concrete-services",
    name: "Concrete Services",
    shortName: "Concrete",
    summary: "General concrete contracting for patios, slabs, retaining walls, and more.",
    description:
      "Over 20 years of concrete experience — patios, slabs, retaining walls, and structural flatwork for residential properties.",
    bullets: [
      "Patios & slabs",
      "Retaining walls",
      "Stamped & decorative concrete",
      "Structural flatwork",
    ],
    metaTitle: "Concrete Contractor | Patios, Slabs & Retaining Walls",
    metaDescription:
      "Residential concrete contractor — patios, slabs, retaining walls, stamped and decorative concrete, backed by 20+ years of experience.",
    longIntro: [
      "Concrete is where this company started: our founder built his first two decades in the trade as a concrete contractor before expanding into pools and landscapes, and that experience shows in every pour. We handle residential concrete work of every kind — backyard patios, shed and equipment slabs, retaining walls, steps, and decorative stamped finishes.",
      "Good concrete work is invisible until it isn't: the compacted base, correct slab thickness, steel placement, and control joints determine whether your patio still looks new in 15 years or cracks in two. We do the unglamorous prep right, then finish with the look you want — broom, trowel, exposed aggregate, or stamped and colored patterns that mimic stone and slate.",
      "Retaining walls get the same engineering-first treatment: proper footings, drainage gravel and weep systems behind the wall, and reinforcement matched to the soil load, so the wall holds its grade for decades.",
    ],
    benefits: [
      {
        title: "20+ Years in the Trade",
        text: "Founded by a career concrete contractor — the crew pouring your patio has poured thousands of yards before it.",
      },
      {
        title: "Prep-First Quality",
        text: "Compacted base, proper thickness, reinforcement, and joint layout come standard, because that's what makes concrete last.",
      },
      {
        title: "Decorative Range",
        text: "Stamped, colored, exposed aggregate, and smooth modern finishes — concrete that elevates the design, not just fills space.",
      },
      {
        title: "Structural Know-How",
        text: "Retaining walls, footings, and equipment slabs engineered for their loads, with drainage handled behind and beneath.",
      },
    ],
    process: [
      {
        title: "Scope & Fixed Quote",
        text: "We measure, discuss finishes and use, evaluate access and drainage, and give you a fixed itemized price.",
      },
      {
        title: "Excavation & Forming",
        text: "Grading, base compaction, forms, and steel — inspected before any concrete arrives.",
      },
      {
        title: "Pour & Finish",
        text: "Concrete is placed, screeded, and finished in your chosen texture, with joints cut at engineered spacing.",
      },
      {
        title: "Cure & Seal",
        text: "Proper curing procedures and optional sealing protect the surface, with clear guidance on when it's ready to use.",
      },
    ],
    faqs: [
      {
        q: "How much does a concrete patio cost?",
        a: "Broom-finish patios are the most economical, with stamped and decorative finishes running higher per square foot. Typical backyard patio projects range from $5,000 to $25,000 depending on size and finish. Every quote is fixed and itemized.",
      },
      {
        q: "Do you build retaining walls?",
        a: "Yes — block, poured, and veneer-finished retaining walls with engineered footings and proper back-of-wall drainage. Walls over certain heights require engineering and permits, which we handle as part of the project.",
      },
      {
        q: "What's the difference between stamped concrete and pavers?",
        a: "Stamped concrete is a monolithic slab textured to mimic stone or brick — seamless, weed-free, and cost-effective. Pavers are individual units that flex with soil movement and can be spot-repaired. We install both and will recommend based on your soil, budget, and style.",
      },
      {
        q: "How soon can I use my new concrete patio?",
        a: "Foot traffic after 24–48 hours; furniture after about a week; full cure strength at 28 days. We'll give you specific guidance based on the finish and weather during your pour.",
      },
    ],
    related: ["driveway-walkway", "pool-decks", "fire-pits"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
