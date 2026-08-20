export type AreaFaq = { q: string; a: string };
export type AreaConsideration = { title: string; text: string };

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  county: string;
  blurb: string;
  /** Multi-paragraph unique local intro for the city hub page */
  localIntro: string[];
  /** Neighborhoods / communities we commonly work in — used for local relevance */
  neighborhoods: string[];
  /** City-specific building conditions that shape outdoor construction */
  considerations: AreaConsideration[];
  /** City-specific FAQ entries */
  faqs: AreaFaq[];
  /** Nearby area slugs for internal linking */
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "elk-grove",
    city: "Elk Grove",
    state: "CA",
    county: "Sacramento County",
    blurb:
      "Our home base — Elk Grove homeowners get fast scheduling and local project oversight from our team.",
    localIntro: [
      "Elk Grove is home base for Pinnacle Pools and Landscape — our office sits right here in the 95758, which means Elk Grove projects get the fastest scheduling, the most site visits, and a crew that knows the city's permitting counter on a first-name basis. From established neighborhoods off Elk Grove Boulevard to newer communities in Madeira and Whitelock Ranch, we've built pools, landscapes, and concrete projects across every corner of the city.",
      "Elk Grove's newer housing stock means many backyards are still blank slates: bare dirt, builder-grade fence, and a single hose bib. We specialize in complete backyard build-outs here — pool, decking, landscape, turf, and lighting designed as one project — turning a new-construction lot into a finished outdoor living space in a single mobilization.",
    ],
    neighborhoods: [
      "Laguna Ridge",
      "Madeira",
      "Whitelock Ranch",
      "Sheldon",
      "East Franklin",
      "Laguna West",
      "Stonelake",
    ],
    considerations: [
      {
        title: "New-Construction Lots",
        text: "Builder-graded lots often hide compacted subsoil and drainage that dumps at the fence line. We re-grade and solve drainage before building anything on top.",
      },
      {
        title: "City of Elk Grove Permitting",
        text: "Pools, gas lines, and taller retaining walls run through the City of Elk Grove building department — a process we handle start to finish on every permitted project.",
      },
      {
        title: "HOA Design Review",
        text: "Many Elk Grove communities require HOA approval for visible improvements. Our 3D renderings double as submission-ready exhibits that speed up approval.",
      },
    ],
    faqs: [
      {
        q: "Do you charge a travel fee for Elk Grove projects?",
        a: "No — Elk Grove is our home city. You get the fastest response times, free on-site consultations, and daily supervision from a local crew.",
      },
      {
        q: "Can you handle my Elk Grove HOA's approval process?",
        a: "Yes. We prepare the site plans and 3D renderings most Elk Grove HOAs require for design review, and we build to the approved plans so there are no surprises at final inspection.",
      },
    ],
    nearby: ["sacramento", "wilton", "rancho-cordova"],
  },
  {
    slug: "el-dorado-hills",
    city: "El Dorado Hills",
    state: "CA",
    county: "El Dorado County",
    blurb:
      "We build custom pools and landscapes suited to El Dorado Hills' larger lots and hillside grading.",
    localIntro: [
      "El Dorado Hills is where our engineering depth earns its keep. The rolling terrain that gives Serrano, Blackstone, and the older Governor's Village areas their views also means sloped lots, cut-and-fill pads, and rocky ground — conditions that punish cookie-cutter contractors. We design pools and landscapes for the hillside first, with engineered retaining walls, raised bond beams, and drainage that respects the grade.",
      "Larger El Dorado Hills lots open design possibilities that tight suburban parcels can't match: infinity-edge pools oriented to the view, sweeping paver driveways, outdoor kitchens, and full resort-style backyards. Our 3D design process is especially valuable here, letting you see how a multi-level backyard flows before committing to earthwork.",
    ],
    neighborhoods: [
      "Serrano",
      "Blackstone",
      "Promontory",
      "Governor's Village",
      "Highland View",
      "Marina Village",
    ],
    considerations: [
      {
        title: "Hillside & Sloped Lots",
        text: "Slopes call for engineered retaining walls, terracing, and careful pool placement. We design with the grade rather than fighting it — often turning the slope into the yard's best feature.",
      },
      {
        title: "Rocky Ground & Excavation",
        text: "Parts of El Dorado Hills sit on rock that slows excavation. We assess dig conditions up front so your quote and schedule reflect reality, not surprises.",
      },
      {
        title: "El Dorado County Permits & Fire Standards",
        text: "Projects here run through El Dorado County (or the EDH Fire Department for some features). We manage the process, including defensible-space-conscious planting design.",
      },
    ],
    faqs: [
      {
        q: "Can you build a pool on my sloped El Dorado Hills lot?",
        a: "Almost certainly — sloped lots are our specialty here. Solutions range from engineered retaining walls and raised pool walls to stunning infinity-edge designs that use the drop-off as a feature. The 3D design will show exactly how it works on your grade.",
      },
      {
        q: "Do you work in Serrano and other gated El Dorado Hills communities?",
        a: "Yes. We regularly work in Serrano, Blackstone, and Promontory, and we're familiar with their design review boards' submission requirements and contractor rules.",
      },
    ],
    nearby: ["folsom", "roseville", "rancho-cordova", "granite-bay"],
  },
  {
    slug: "sacramento",
    city: "Sacramento",
    state: "CA",
    county: "Sacramento County",
    blurb:
      "From midtown patios to suburban backyard pool builds, we serve homeowners across greater Sacramento.",
    localIntro: [
      "Sacramento's housing spans a century of styles — and we've worked across most of it. In East Sacramento, Land Park, and Curtis Park, that means renovating around mature trees, vintage hardscape, and pools built in the 1960s that are overdue for a remodel. In Natomas and North Sacramento's newer subdivisions, it means first-time backyard build-outs on blank lots. Both are home turf for our crews.",
      "As California's sunniest major metro, Sacramento is pool country: long swim seasons from May through October make a backyard pool genuinely usable here, not a novelty. Pair that with the valley's push toward water-wise landscaping and you get our most requested Sacramento combination — a modern pool and deck surrounded by low-water planting and artificial turf that stays green through triple-digit summers.",
    ],
    neighborhoods: [
      "East Sacramento",
      "Land Park",
      "Curtis Park",
      "Pocket-Greenhaven",
      "Natomas",
      "Tahoe Park",
      "College Greens",
    ],
    considerations: [
      {
        title: "Mature Trees & Established Yards",
        text: "Sacramento's tree canopy is a treasure — and a design constraint. We plan pools and hardscape around root zones and shade patterns, and coordinate city rules on protected trees.",
      },
      {
        title: "Older Pools & Infrastructure",
        text: "Many Sacramento pools date to the 60s–80s and hide galvanized plumbing and dated shells. Our remodel assessments tell you honestly what's worth saving.",
      },
      {
        title: "City of Sacramento Permitting",
        text: "City permits and inspections apply to pools, gas, and structural work. We run the process — including older-neighborhood quirks like alley access and detached garages.",
      },
    ],
    faqs: [
      {
        q: "Do you remodel older pools in East Sacramento and Land Park?",
        a: "Yes — mid-century pool remodels are some of our favorite Sacramento projects. We resurface, retile, replumb, and modernize equipment while keeping the character that suits these neighborhoods, and we'll tell you honestly if a shell isn't worth saving.",
      },
      {
        q: "Can you work on narrow-access Sacramento lots?",
        a: "Yes. Established neighborhoods often mean tight side yards or alley access. We plan equipment sizing and excavation methods around the access that exists — it affects approach, not feasibility.",
      },
    ],
    nearby: ["elk-grove", "citrus-heights", "rancho-cordova"],
  },
  {
    slug: "folsom",
    city: "Folsom",
    state: "CA",
    county: "Sacramento County",
    blurb:
      "Custom pools, decks, and landscaping for Folsom's established and newer neighborhoods alike.",
    localIntro: [
      "Folsom homeowners invest in their backyards — it's one of the region's most active markets for pools and complete outdoor living projects, and we've been building here for years. From established neighborhoods like American River Canyon and Briggs Ranch to the fast-growing Folsom Ranch area south of Highway 50, we build pools, decks, landscapes, and outdoor features across the city.",
      "Folsom's terrain rises toward the foothills, so many lots carry gentle to moderate slopes and the occasional granite surprise below grade. Our concrete and retaining wall background makes us well suited to these sites: we terrace, retain, and grade as part of the design instead of treating slope as an extra. And with Folsom's hot, dry summers, our water-wise landscape and turf packages are in constant demand.",
    ],
    neighborhoods: [
      "American River Canyon",
      "Briggs Ranch",
      "Empire Ranch",
      "Willow Creek",
      "Broadstone",
      "Folsom Ranch",
      "Natoma Station",
    ],
    considerations: [
      {
        title: "Foothill Grades & Granite",
        text: "Folsom lots often slope and occasionally hit decomposed granite during excavation. We evaluate dig conditions during design so schedules and quotes stay accurate.",
      },
      {
        title: "Folsom Ranch New Builds",
        text: "New homes in Folsom Ranch come with blank yards and builder drainage. We design complete backyard packages that fix grading and deliver a finished outdoor space in one project.",
      },
      {
        title: "City of Folsom Permits & HOAs",
        text: "The City of Folsom permits pools and structural work, and many communities add HOA design review. We handle both, with 3D renderings that satisfy review boards.",
      },
    ],
    faqs: [
      {
        q: "Do you build complete backyards for new Folsom Ranch homes?",
        a: "Yes — new-construction backyard build-outs are one of our specialties. Pool, decking, landscape, turf, lighting, and drainage are designed and built as one coordinated project, which costs less and finishes faster than phasing trades separately.",
      },
      {
        q: "How do Folsom's slopes affect pool cost?",
        a: "Gentle slopes often add little; steeper grades may need retaining walls or a raised pool wall, which we engineer and price transparently in the fixed quote. The 3D design shows exactly how the pool sits in your grade before you commit.",
      },
    ],
    nearby: ["el-dorado-hills", "rancho-cordova", "roseville", "granite-bay"],
  },
  {
    slug: "roseville",
    city: "Roseville",
    state: "CA",
    county: "Placer County",
    blurb:
      "Pool construction and full landscape design for Roseville homeowners, including HOA-compliant builds.",
    localIntro: [
      "Roseville is one of the fastest-growing cities in Northern California, and its west-side communities — WestPark, Fiddyment Farm, Sun City and the neighborhoods around Blue Oaks — generate constant demand for complete backyard construction. We build pools, landscapes, patios, and turf systems across Roseville, from brand-new lots to established East Roseville yards ready for a refresh.",
      "Roseville projects run through the City of Roseville's own building department and utility district, and many of its master-planned communities have active HOA design review. We've navigated both many times: our submission-ready site plans and 3D renderings move smoothly through approval, and our builds pass Roseville's inspections without drama. For Sun City's active-adult homeowners, we design low-maintenance yards — turf, drip-only planting, and easy-care hardscape — that keep weekends free.",
    ],
    neighborhoods: [
      "WestPark",
      "Fiddyment Farm",
      "Blue Oaks",
      "Sun City Roseville",
      "Diamond Oaks",
      "East Roseville",
      "Highland Reserve",
    ],
    considerations: [
      {
        title: "Master-Planned HOA Communities",
        text: "WestPark, Fiddyment Farm, and similar communities require design review for visible improvements. Our renderings and plans are formatted for HOA submission from day one.",
      },
      {
        title: "City of Roseville Requirements",
        text: "Roseville runs its own building department and electric utility, with specific requirements for pool permits and equipment. We manage the full process locally.",
      },
      {
        title: "Low-Maintenance Demand",
        text: "From Sun City retirees to busy commuter families, Roseville clients want yards that look great with minimal upkeep — a design brief our turf and drip-irrigation packages are built for.",
      },
    ],
    faqs: [
      {
        q: "Can you get my project through WestPark or Fiddyment Farm HOA review?",
        a: "Yes — we prepare the site plan, elevations, and 3D renderings these HOAs expect, submit on your behalf where allowed, and build exactly to the approved package so final sign-off is smooth.",
      },
      {
        q: "Do you design low-maintenance yards for Sun City Roseville?",
        a: "Absolutely. Artificial turf, drip-irrigated planting, and quality hardscape can reduce yard work to nearly nothing while keeping the space beautiful — a combination we've built for many active-adult homeowners.",
      },
    ],
    nearby: ["citrus-heights", "folsom", "el-dorado-hills", "granite-bay"],
  },
  {
    slug: "rancho-cordova",
    city: "Rancho Cordova",
    state: "CA",
    county: "Sacramento County",
    blurb: "Reliable pool, hardscape, and landscaping work for Rancho Cordova properties.",
    localIntro: [
      "Rancho Cordova mixes established 1960s–80s neighborhoods around Coloma and Zinfandel with newer master-planned growth in Anatolia, Sunridge, and The Ranch — and the two call for different work. In the established areas, we remodel aging pools, replace cracked driveways and patios, and refresh landscapes that have run their course. In the newer communities, we build complete backyards on blank builder lots.",
      "The city's flat terrain and workable soils make construction efficient here, which shows up in your quote: excavation and grading rarely carry the premiums that foothill cities do. Combined with Rancho Cordova's practical, value-focused homeowners, our most common projects here are smart, durable packages — pool plus deck, turf plus patio, driveway plus walkway — built to last rather than to show off.",
    ],
    neighborhoods: [
      "Anatolia",
      "Sunridge",
      "The Ranch",
      "Stone Creek",
      "Coloma Village",
      "Zinfandel",
      "Riverview",
    ],
    considerations: [
      {
        title: "Two Generations of Housing",
        text: "Established Rancho Cordova homes often need remodel and replacement work — old pools, tired concrete — while Anatolia and Sunridge lots need ground-up backyard construction. We do both daily.",
      },
      {
        title: "Favorable Building Conditions",
        text: "Flat lots and cooperative soils keep excavation and grading costs down, making Rancho Cordova one of the most cost-efficient cities we serve for pools and concrete.",
      },
      {
        title: "City Permitting",
        text: "The City of Rancho Cordova permits pools, gas lines, and structural work; we handle submission and inspections as part of every applicable project.",
      },
    ],
    faqs: [
      {
        q: "Is it worth remodeling an older Rancho Cordova pool?",
        a: "Usually yes — most older shells here are structurally sound, and a resurface, retile, and equipment upgrade delivers a like-new pool for a fraction of replacement cost. Our free assessment gives you an honest answer for your specific pool.",
      },
      {
        q: "Do you build full backyards in Anatolia and Sunridge?",
        a: "Yes — new-lot backyard packages combining pool, decking, turf, planting, and lighting are among our most common Rancho Cordova projects, designed as one build with one schedule.",
      },
    ],
    nearby: ["sacramento", "folsom", "elk-grove"],
  },
  {
    slug: "citrus-heights",
    city: "Citrus Heights",
    state: "CA",
    county: "Sacramento County",
    blurb: "Backyard transformations — pools, turf, and concrete work — for Citrus Heights homes.",
    localIntro: [
      "Citrus Heights is an established city of mature neighborhoods — most homes date from the 1960s through the 1980s, with generous lots, big trees, and backyards that have seen a few decades of use. That makes it prime territory for what we do best here: transformations. Aging kidney-shaped pools get modern remodels, cracked patios and driveways get replaced with stamped concrete, and thirsty lawns give way to artificial turf and water-wise planting.",
      "Because lots in Citrus Heights are often larger than in newer subdivisions, there's usually room to add what the original yard never had — a fire pit gathering area, a bigger entertaining patio, RV parking on a proper slab. We help homeowners rework the whole yard in phases or in one project, with a design that makes decades-old properties feel current again.",
    ],
    neighborhoods: [
      "Sunrise Ranch",
      "Arcade Creek",
      "Rusch Park",
      "Birdcage Heights",
      "Sylvan Old Auburn Road",
      "Seventh Avenue",
    ],
    considerations: [
      {
        title: "Mature Yards & Trees",
        text: "Decades-old trees shade Citrus Heights yards beautifully but constrain digging and planting. We design around root zones and prune-friendly placement.",
      },
      {
        title: "Aging Concrete & Pools",
        text: "Original driveways, patios, and pools from the 60s–80s are reaching end of life across the city. Replacement and remodel work is our bread and butter here.",
      },
      {
        title: "Value-Focused Upgrades",
        text: "We help Citrus Heights homeowners prioritize: which improvements add the most daily enjoyment and resale value for the budget, phased if needed.",
      },
    ],
    faqs: [
      {
        q: "Can you replace my old Citrus Heights driveway and patio together?",
        a: "Yes — combining flatwork into one project saves mobilization costs and gets you matching finishes across the property. Demo, haul-off, base correction, and new concrete are all handled by one crew.",
      },
      {
        q: "My Citrus Heights pool is from the 1970s. Remodel or remove?",
        a: "We'll give you an honest assessment. Many older shells are sound and remodel beautifully; occasionally removal and re-landscaping is the smarter spend. We do both, so our recommendation follows the facts, not a sales agenda.",
      },
    ],
    nearby: ["roseville", "sacramento", "rancho-cordova"],
  },
  {
    slug: "wilton",
    city: "Wilton",
    state: "CA",
    county: "Sacramento County",
    blurb:
      "We handle larger rural and semi-rural properties around Wilton, including extended driveways and drainage work.",
    localIntro: [
      "Wilton is horse country — large rural and semi-rural parcels, long private driveways, wells and septic instead of city utilities, and homeowners who think in acres rather than square feet. Building here is different from subdivision work, and we're set up for it: long concrete and gravel driveway runs, large equipment slabs and barn aprons, perimeter drainage across open ground, and resort-scale backyard projects with room to spread out.",
      "The freedom of unincorporated land comes with its own logistics — county permitting, septic setbacks that constrain pool placement, and utility runs measured in hundreds of feet. We plan around all of it in design, so quotes are realistic and builds run smoothly. For Wilton homeowners, that often means a single master plan: pool and spa, entertaining hardscape, turf near the house, and practical concrete where the property works.",
    ],
    neighborhoods: [
      "Wilton proper",
      "Rancho Murieta border",
      "Dillard Road corridor",
      "Grant Line acreage",
      "Sloughhouse area",
    ],
    considerations: [
      {
        title: "Acreage Logistics",
        text: "Long utility trenches, extended driveways, and equipment staging across big parcels are planned into the design and the quote — no mid-project surprises.",
      },
      {
        title: "Well, Septic & Setbacks",
        text: "Pool and structure placement must respect septic fields and well setbacks. We locate systems first and design around them.",
      },
      {
        title: "Sacramento County Permitting",
        text: "Unincorporated Wilton permits through Sacramento County. We manage county submissions, engineering, and inspections for pools, gas, and structural work.",
      },
    ],
    faqs: [
      {
        q: "Do you pour long rural driveways in Wilton?",
        a: "Yes — extended concrete driveway runs, gravel base drives, and combination approaches are regular Wilton projects for us, engineered for trucks, trailers, and daily use.",
      },
      {
        q: "Can you build a pool on my Wilton acreage with septic and a well?",
        a: "Yes. We locate the septic field and well first, design the pool and hardscape within legal setbacks, and plan utility runs efficiently. Acreage actually gives us more design freedom once the constraints are mapped.",
      },
    ],
    nearby: ["elk-grove", "rancho-cordova", "sacramento"],
  },
  {
    slug: "granite-bay",
    city: "Granite Bay",
    state: "CA",
    county: "Placer County",
    blurb:
      "Estate-scale pools and resort backyards for Granite Bay's large lots, mature oaks, and rolling grades.",
    localIntro: [
      "Granite Bay is where our clients tend to build the most ambitious backyards we do. Lots here are large, mature valley oaks are protected and beautiful, and the ground lives up to the name — decomposed granite and rock outcroppings are common, and they change how a pool has to be engineered and excavated. We plan for that from the first site visit rather than discovering it on dig day.",
      "The design brief in Granite Bay is usually resort rather than suburban: a large freeform or geometric pool with a raised spa, generous travertine or paver decking, an outdoor kitchen, fire features, and lighting that makes the whole yard usable after dark. Because we self-perform pools, concrete, and landscape, we can design that entire yard as one project and build it in a single mobilization instead of coordinating three separate contractors around your oaks and your driveway.",
    ],
    neighborhoods: [
      "Los Lagos",
      "Granite Bay Hills",
      "Treelake",
      "Wexford",
      "Clos du Lac",
      "Douglas Ranch",
      "Folsom Lake Estates",
    ],
    considerations: [
      {
        title: "Rock & Decomposed Granite",
        text: "Excavation here regularly meets rock. We evaluate the likelihood during the site visit and price accordingly, so a hard dig doesn't become a surprise change order halfway through.",
      },
      {
        title: "Protected Oak Trees",
        text: "Placer County protects native oaks, and their root zones extend well past the canopy. We design pool and deck placement around drip lines and coordinate any required arborist review.",
      },
      {
        title: "Large-Lot Drainage",
        text: "Big lots on rolling grade move a lot of water in a storm. We engineer deck drainage, swales, and outfalls so the new hardscape improves the way the property sheds water rather than concentrating it.",
      },
      {
        title: "Estate-Scale Scheduling",
        text: "Projects at this scale often combine pool, decking, outdoor kitchen and landscape. Running them as one build under one contractor keeps the phases sequenced and the site manageable.",
      },
    ],
    faqs: [
      {
        q: "Do you handle rock excavation in Granite Bay?",
        a: "Yes. Rock is common in this area and we plan for it — assessing conditions during the site visit, bringing the right equipment, and pricing the dig realistically rather than lowballing it and issuing a change order once the excavator is in your yard.",
      },
      {
        q: "Can you build around my protected oak trees?",
        a: "Yes, and we design for it deliberately. Oak root zones extend well beyond the canopy, so we position the pool, decking, and equipment to respect drip lines, and we coordinate arborist review where Placer County requires it.",
      },
      {
        q: "Do you build outdoor kitchens and full outdoor living areas?",
        a: "We do — outdoor kitchens, pergolas, fire features, seating walls, and lighting are among the most requested additions on Granite Bay projects, and we build them as part of the same project rather than as a separate job.",
      },
    ],
    nearby: ["roseville", "folsom", "el-dorado-hills"],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getNearbyAreas(area: ServiceArea) {
  return area.nearby
    .map((slug) => getServiceAreaBySlug(slug))
    .filter((a): a is ServiceArea => Boolean(a));
}
