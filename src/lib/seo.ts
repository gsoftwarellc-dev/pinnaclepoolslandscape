import { business } from "@/data/business";

export function absoluteUrl(path: string) {
  return new URL(path, business.url).toString();
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    description: business.description,
    telephone: business.phone,
    email: business.email,
    url: business.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    areaServed: [
      "Elk Grove, CA",
      "El Dorado Hills, CA",
      "Sacramento, CA",
      "Folsom, CA",
      "Roseville, CA",
      "Rancho Cordova, CA",
      "Citrus Heights, CA",
      "Wilton, CA",
    ],
    sameAs: [business.social.facebook, business.social.instagram, business.social.googleBusiness],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.areaName ? `${opts.name} in ${opts.areaName}` : opts.name,
    description: opts.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
      telephone: business.phone,
      url: business.url,
    },
    areaServed: opts.areaName ?? "Greater Sacramento Region",
    url: absoluteUrl(opts.path),
  };
}
