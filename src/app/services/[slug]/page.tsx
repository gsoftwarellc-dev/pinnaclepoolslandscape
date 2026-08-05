import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { business } from "@/data/business";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { pickServiceImages } from "@/lib/images";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const [heroImage, ...gridImages] = pickServiceImages(service.slug, "hero", 5);

  const jsonLd = [
    serviceJsonLd({
      name: service.name,
      description: service.metaDescription,
      path: `/services/${service.slug}`,
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.name, path: `/services/${service.slug}` },
    ]),
    faqJsonLd(service.faqs),
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
      <section className="bg-[#faf6e0]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/services" className="hover:underline">
                Services
              </Link>{" "}
              / {service.shortName}
            </nav>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 text-lg text-neutral-700">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="btn-glow rounded-sm px-6 py-3.5 text-sm font-semibold text-white"
                style={{ ["--btn-glow-bg" as string]: "#000000" }}
              >
                Get a Free Estimate
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
                alt={heroImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </section>

      {/* Long-form intro */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          Professional {service.shortName} in the Greater Sacramento Area
        </h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-700">
          {service.longIntro.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">
            Why Homeowners Choose Us for {service.shortName}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-black">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-bold text-black sm:text-3xl">
          Our {service.shortName} Process
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <div key={step.title} className="relative rounded-xl border border-neutral-200 p-6">
              <span className="text-3xl font-bold text-[#dac026]">{i + 1}</span>
              <h3 className="mt-2 font-semibold text-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/quote"
            className="btn-tactile inline-block rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#dac026] hover:text-black"
          >
            Start With a Free Estimate
          </Link>
        </div>
      </section>

      {/* What's included + gallery placeholders */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-black sm:text-3xl">What&apos;s Included</h2>
            <ul className="mt-5 grid gap-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-neutral-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dac026]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gridImages.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas — internal links */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          {service.shortName} Near You
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-600">
          We provide {service.shortName.toLowerCase()} services throughout the greater Sacramento
          region. Choose your city for local details, or{" "}
          <Link href="/service-areas" className="font-semibold text-[#8a7315] hover:underline">
            view all areas we serve
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}/${service.slug}`}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-[#dac026] hover:text-[#8a7315]"
            >
              {service.shortName} in {area.city}, {area.state}
            </Link>
          ))}
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-neutral-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-black sm:text-3xl">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-[#dac026] hover:shadow-md"
                >
                  <h3 className="font-semibold text-black">{r.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{r.summary}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#8a7315]">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FaqSection
        heading={`${service.shortName} — Frequently Asked Questions`}
        faqs={service.faqs}
      />

      <CtaBanner
        heading={`Ready to start your ${service.shortName.toLowerCase()} project?`}
      />
    </>
  );
}
