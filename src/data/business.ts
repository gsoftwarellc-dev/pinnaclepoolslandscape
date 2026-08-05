export const business = {
  name: "Pinnacle Pools and Landscape",
  tagline: "Enjoy your stay",
  description:
    "Family-owned pool construction and landscaping contractor serving the greater Sacramento region. Licensed and insured, with 20+ years of concrete and construction experience.",
  phone: "(916) 604-1700",
  phoneSecondary: "(615) 754-2937",
  phoneHref: "tel:+19166041700",
  email: "info@pinnaclepoolslandscape.com",
  address: {
    street: "9400 Foxford Ct",
    city: "Elk Grove",
    state: "CA",
    zip: "95758",
  },
  url: "https://pinnaclepoolslandscape.com",
  founder: "Terry Neeley",
  license: "892669",
  social: {
    facebook: "https://www.facebook.com/pinnacleyard/",
    instagram: "https://www.instagram.com/pinnaclelandscape/",
    googleBusiness: "https://g.co/kgs/jxronQo",
  },
  awards: [
    'Best of 2020 Winner — Angi (Angie\'s List)',
    "Best of 2020 Winner — HomeAdvisor",
    "Best of 2020 Winner — HomeGuide.com",
  ],
  awardBadges: [
    { file: "awards1.webp", alt: "Best of 2020 Winner — HomeAdvisor" },
    { file: "awards2.webp", alt: "Elite Service — HomeAdvisor" },
    { file: "awards3.webp", alt: "Screened & Approved — HomeAdvisor" },
    { file: "awards4.webp", alt: "Top Rated — HomeAdvisor" },
  ],
  sellingPoints: [
    "Family-owned and operated",
    "Licensed and insured",
    "20+ years of concrete & construction experience",
    "Professional 3D pool design models",
    "Financing options available",
    "On-time, on-budget project delivery",
  ],
} as const;

export const testimonials = [
  {
    name: "Judy T.",
    city: "Sacramento",
    quote:
      "My backyard looks amazing. One of the most important things to me was that he and his crew were on time.",
  },
  {
    name: "Jane S.",
    city: "Folsom",
    quote:
      "This is one of my favorite companies to work with — very pleasant through the whole process.",
  },
  {
    name: "Mike M.",
    city: "Sacramento",
    quote: "Very punctual. Executed on time and within budget.",
  },
] as const;
