import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceAreas, getServiceAreaBySlug, getNearbyAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import { business, testimonials } from "@/data/business";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { pickServiceImages } from "@/lib/images";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getServiceAreaBySlug(areaSlug);
  if (!area) return {};
  return {
    title: `Pool Builder & Landscaping in ${area.city}, ${area.state}`,
    description: `${business.name} builds custom pools, landscapes, concrete, and outdoor living spaces in ${area.city}, ${area.state}. Licensed & insured, free estimates & 3D designs.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaSlug } = await params;
  const area = getServiceAreaBySlug(areaSlug);
  if (!area) notFound();

  const areaTestimonials = testimonials.filter((t) => t.city === area.city);
  const nearby = getNearbyAreas(area);
  const [heroImage] = pickServiceImages("pool-construction", area.slug, 1);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Areas We Serve", path: "/service-areas" },
      { name: area.city, path: `/service-areas/${area.slug}` },
    ]),
    faqJsonLd(area.faqs),
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
              / {area.city}
            </nav>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Pool Builder &amp; Landscaping in {area.city}, {area.state}
            </h1>
            <p className="mt-4 text-lg text-neutral-700">{area.blurb}</p>
            <p className="mt-2 text-sm text-neutral-500">{area.county}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
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
                alt={`${area.city} project — ${heroImage.alt}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </section>

      {/* Local intro */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          Your Local Outdoor Construction Team in {area.city}
        </h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-700">
          {area.localIntro.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">
            Services We Offer in {area.city}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/service-areas/${area.slug}/${service.slug}`}
                className="rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-[#dac026] hover:shadow-md"
              >
                <h3 className="font-semibold text-black">
                  {service.shortName} in {area.city}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{service.summary}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-[#8a7315]">
                  Local details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local considerations */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          Building in {area.city}: What to Know
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {area.considerations.map((c) => (
            <div key={c.title} className="rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-black">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            {area.city} Neighborhoods We Serve
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Our crews work throughout {area.city} and the surrounding {area.county} communities,
            including:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {area.neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from this city, if any */}
      {areaTestimonials.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            What {area.city} Homeowners Say
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {areaTestimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-neutral-200 p-6 text-neutral-700"
              >
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-black">
                  {t.name}, {t.city}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Local FAQ */}
      <FaqSection heading={`${area.city} — Frequently Asked Questions`} faqs={area.faqs} />

      {/* Nearby areas */}
      {nearby.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">Nearby Areas We Serve</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/service-areas/${n.slug}`}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-[#dac026] hover:text-[#8a7315]"
              >
                {n.city}, {n.state}
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBanner heading={`Ready to start your ${area.city} project?`} />
    </>
  );
}
