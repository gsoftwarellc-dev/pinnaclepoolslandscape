import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  serviceAreas,
  getServiceAreaBySlug,
  getNearbyAreas,
  type ServiceArea,
} from "@/data/serviceAreas";
import { services, getServiceBySlug, type Service } from "@/data/services";
import { business } from "@/data/business";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { pickServiceImages } from "@/lib/images";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";

export function generateStaticParams() {
  return serviceAreas.flatMap((area) =>
    services.map((service) => ({ area: area.slug, service: service.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string; service: string }>;
}): Promise<Metadata> {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getServiceAreaBySlug(areaSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!area || !service) return {};
  return {
    title: `${service.shortName} in ${area.city}, ${area.state}`,
    description: `Looking for ${service.shortName.toLowerCase()} in ${area.city}, ${area.state}? ${business.name} is a licensed, family-owned local contractor serving ${area.city} and ${area.county}. Free estimates.`,
    alternates: { canonical: `/service-areas/${area.slug}/${service.slug}` },
  };
}

/** Compose a unique localized intro for this service+city combination. */
function localizedIntro(service: Service, area: ServiceArea): string[] {
  const hoods = area.neighborhoods.slice(0, 3).join(", ");
  const first = `If you're searching for ${service.shortName.toLowerCase()} in ${area.city}, ${area.state}, you want a contractor who actually knows the area — not a crew driving in blind from across the region. ${business.name} is a family-owned, licensed contractor (CA Lic. #${business.license}) working throughout ${area.city} and ${area.county}, from ${hoods} and beyond. ${area.blurb}`;
  const second = service.longIntro[0];
  const third = `Every ${area.city} project starts the same way: a free on-site consultation and a fixed, itemized estimate. ${area.considerations[0].text}`;
  return [first, second, third];
}

/** Compose city-localized FAQs by combining service FAQs with area context. */
function localizedFaqs(service: Service, area: ServiceArea) {
  const cityFaq = {
    q: `Do you offer ${service.shortName.toLowerCase()} in ${area.city}, ${area.state}?`,
    a: `Yes — ${area.city} is one of our core service areas in ${area.county}. We provide free on-site consultations for ${service.shortName.toLowerCase()} projects throughout ${area.city}, including ${area.neighborhoods.slice(0, 4).join(", ")}. Call ${business.phone} or request a free estimate online.`,
  };
  return [cityFaq, ...service.faqs.slice(0, 4), ...area.faqs.slice(0, 1)];
}

export default async function ServiceInAreaPage({
  params,
}: {
  params: Promise<{ area: string; service: string }>;
}) {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getServiceAreaBySlug(areaSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!area || !service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const nearby = getNearbyAreas(area);
  const intro = localizedIntro(service, area);
  const faqs = localizedFaqs(service, area);
  const [heroImage, detailImage] = pickServiceImages(service.slug, area.slug, 2);

  const jsonLd = [
    serviceJsonLd({
      name: service.name,
      description: service.metaDescription,
      path: `/service-areas/${area.slug}/${service.slug}`,
      areaName: `${area.city}, ${area.state}`,
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Areas We Serve", path: "/service-areas" },
      { name: area.city, path: `/service-areas/${area.slug}` },
      { name: service.shortName, path: `/service-areas/${area.slug}/${service.slug}` },
    ]),
    faqJsonLd(faqs),
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* Hero */}
      <section className="flex min-h-[70svh] items-center bg-[#faf6e0]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/service-areas" className="hover:underline">
                Areas We Serve
              </Link>{" "}
              /{" "}
              <Link href={`/service-areas/${area.slug}`} className="hover:underline">
                {area.city}
              </Link>{" "}
              / {service.shortName}
            </nav>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              {service.name} in {area.city}, {area.state}
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              {service.summary} Proudly serving {area.city} and the surrounding {area.county}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/estimate"
                className="btn-glow rounded-sm px-6 py-3.5 text-sm font-semibold text-white"
                style={{ ["--btn-glow-bg" as string]: "#000000" }}
              >
                Get a Free {area.city} Estimate
              </Link>
              <a
                href={business.phoneHref}
                className="btn-tactile rounded-md border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-black hover:border-[#dac026]"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
          {heroImage && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={heroImage.src}
                alt={`${service.shortName} project in ${area.city} — ${heroImage.alt}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </section>

      {/* Localized intro */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          {service.shortName} Contractor Serving {area.city} &amp; {area.county}
        </h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-700">
          {intro.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-black sm:text-3xl">
              What&apos;s Included in Our {service.shortName} Service
            </h2>
            <ul className="mt-5 grid gap-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-neutral-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dac026]" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-neutral-600">
              Want the full details?{" "}
              <Link
                href={`/services/${service.slug}`}
                className="font-semibold text-[#8a7315] hover:underline"
              >
                Read our complete {service.shortName.toLowerCase()} guide
              </Link>
              .
            </p>
          </div>
          {detailImage && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={detailImage.src}
                alt={`${service.shortName} detail — ${detailImage.alt}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </section>

      {/* How it works locally */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">
          How Your {area.city} Project Works
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-neutral-200 p-6">
              <span className="text-3xl font-bold text-[#dac026]">{i + 1}</span>
              <h3 className="mt-2 font-semibold text-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local building context */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            Working in {area.city}: Local Knowledge That Matters
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {area.considerations.map((c) => (
              <div key={c.title} className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-black">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/estimate"
              className="btn-tactile inline-block rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#dac026] hover:text-black"
            >
              Request Your Free {area.city} Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Localized FAQ */}
      <FaqSection
        heading={`${service.shortName} in ${area.city} — Frequently Asked Questions`}
        faqs={faqs}
      />

      {/* Internal links: other services here + this service nearby */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              Other Services in {area.city}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/service-areas/${area.slug}/${s.slug}`}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-[#dac026] hover:text-[#8a7315]"
                >
                  {s.shortName} in {area.city}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              {service.shortName} in Nearby Cities
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/service-areas/${n.slug}/${service.slug}`}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-[#dac026] hover:text-[#8a7315]"
                >
                  {service.shortName} in {n.city}, {n.state}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading={`Get your ${area.city} ${service.shortName.toLowerCase()} estimate today`}
        subheading={`Free on-site consultation anywhere in ${area.city} and ${area.county} — no obligation, fixed itemized pricing.`}
      />
    </>
  );
}
