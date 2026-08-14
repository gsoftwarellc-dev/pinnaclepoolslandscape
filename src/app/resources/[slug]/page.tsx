import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resources, getResourceBySlug } from "@/data/resources";
import { getServiceBySlug } from "@/data/services";
import { business } from "@/data/business";
import FaqSection from "@/components/FaqSection";
import QuickLeadForm from "@/components/QuickLeadForm";
import CtaBanner from "@/components/CtaBanner";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: resource.metaTitle,
    description: resource.metaDescription,
    alternates: { canonical: `/resources/${resource.slug}` },
    openGraph: {
      type: "article",
      title: resource.metaTitle,
      description: resource.metaDescription,
      url: absoluteUrl(`/resources/${resource.slug}`),
    },
  };
}

function articleJsonLd(slug: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: business.name },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.url,
    },
    mainEntityOfPage: absoluteUrl(`/resources/${slug}`),
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const related = resource.related
    .map((s) => getResourceBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  const service = getServiceBySlug(resource.serviceSlug);

  const jsonLd = [
    articleJsonLd(resource.slug, resource.title, resource.metaDescription),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: resource.shortTitle, path: `/resources/${resource.slug}` },
    ]),
    faqJsonLd(resource.faqs),
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

      <article>
        <header className="border-b border-black/10 bg-[#faf6e0]">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-neutral-600">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>{" "}
              / {resource.shortTitle}
            </nav>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7315]">
              {resource.category} · {resource.readTime}
            </span>
            <h1
              className="mt-3 font-bold tracking-tight text-black"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", lineHeight: 1.1 }}
            >
              {resource.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">{resource.excerpt}</p>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 lg:grid-cols-[1fr_19rem] lg:py-16">
          <div className="min-w-0">
            {resource.intro.map((paragraph) => (
              <p key={paragraph} className="mb-5 text-lg leading-relaxed text-neutral-700">
                {paragraph}
              </p>
            ))}

            {resource.sections.map((section) => (
              <section key={section.heading} className="mt-11">
                <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed text-neutral-700">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed text-neutral-700">
                        <span aria-hidden className="mt-1 shrink-0 font-bold text-[#8a7315]">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200">
                    <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-neutral-50">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="border-b border-neutral-200 px-4 py-3 font-bold text-black"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("|")} className="even:bg-neutral-50/60">
                            {row.map((cell, i) => (
                              <td
                                key={cell}
                                className={`border-b border-neutral-200 px-4 py-3 align-top text-neutral-700 ${
                                  i === 0 ? "font-semibold text-black" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
              <QuickLeadForm
                source={`resource-${resource.slug}`}
                heading="Want this priced for your yard?"
                subheading="We'll put real numbers against your actual lot — free, and with no obligation."
              />
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-black">Keep reading</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/resources/${item.slug}`}
                      className="group rounded-xl border border-neutral-200 p-4 transition hover:border-[#dac026]"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        {item.readTime}
                      </span>
                      <span className="mt-1.5 block text-sm font-bold leading-snug text-black group-hover:text-[#8a7315]">
                        {item.shortTitle}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-neutral-200 bg-black p-6 text-center">
              <h2 className="text-lg font-bold text-white">Get an Instant Estimate</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Nine questions, about 90 seconds, and a real budget range for your project.
              </p>
              <Link
                href="/estimate"
                className="mt-4 block rounded-md bg-[#dac026] px-5 py-3 text-sm font-bold text-black transition hover:bg-white"
              >
                Build Your Pool →
              </Link>
              <a
                href={business.phoneHref}
                className="mt-2.5 block rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-[#dac026] hover:text-[#dac026]"
              >
                Call {business.phone}
              </a>
            </div>

            {service && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
                  Related service
                </h2>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-3 block text-lg font-bold text-black hover:text-[#8a7315]"
                >
                  {service.name} →
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{service.summary}</p>
              </div>
            )}

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
                Why homeowners trust us
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>CA License #{business.license}</li>
                <li>Family owned &amp; operated</li>
                <li>20+ years of construction experience</li>
                <li>Free 3D design on every project</li>
                <li>
                  <Link href="/financing" className="font-semibold text-black underline">
                    Financing available
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <FaqSection heading="Frequently Asked Questions" faqs={resource.faqs} />

      <CtaBanner
        heading="Ready to turn research into a real design?"
        subheading="Free consultation, free 3D model, and an honest conversation about budget."
      />
    </>
  );
}
