export const business = {
  name: "Pinnacle Pools and Landscape",
  tagline: "Enjoy your stay",
  description:
    "Family-owned pool construction and landscaping contractor serving the greater Sacramento region. Licensed and insured, with 20+ years of concrete and construction experience.",
  phone: "(916) 336-5711",
  phoneSecondary: "(615) 754-2937",
  phoneHref: "tel:+19163365711",
  /** Tap-to-text target used by the mobile action bar and call/text CTA pairs. */
  smsHref: "sms:+19163365711",
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

/**
 * Credibility markers shown in the trust bar directly under the hero. Kept here so the
 * same claims stay consistent everywhere they appear on the site.
 */
export const trustSignals = [
  {
    label: `CA License #${business.license}`,
    detail: "Licensed & fully insured",
    icon: "shield",
  },
  {
    label: "20+ Years Experience",
    detail: "Concrete & construction",
    icon: "hammer",
  },
  {
    label: "Family Owned",
    detail: "Local, not a franchise",
    icon: "home",
  },
  {
    label: "Free 3D Design",
    detail: "See it before we build it",
    icon: "cube",
  },
  {
    label: "Financing Available",
    detail: "Terms up to 20 years",
    icon: "card",
  },
] as const;

export const testimonials = [
  {
    name: "Judy T.",
    city: "Sacramento",
    quote:
      "My backyard looks amazing even better than I imagined it would look. Terry proved to be the best contractor I have worked with. He explained his ideas and listened to mine. It turned out just like I wanted. Terry kept in touch with me before and during the job. One of the most important thing to me is he and his crew were on time. I would recommend Pinnacle Landscape Development for you jobs. Terry is great and I'm one happy lady.",
  },
  {
    name: "Jane S.",
    city: "Folsom",
    quote:
      "Terry at Pinnacle was great to work with. He promptly returned phone calls, showed up when he said he would, did what he said he would do and then some to make the driveway look great, and was very pleasant through the whole process. This is one of my favorite companies that has done work on my home. I would highly recommend them.",
  },
  {
    name: "Mike M.",
    city: "Sacramento",
    quote:
      "Working with Terry was great from the bid process through the implementation!! Very punctual, explained everything he was going to do, and executed on time within the original budget!! Would definitely use Pinnacle Landscape Development again!",
  },
] as const;
