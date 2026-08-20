import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import CtaBanner from "@/components/CtaBanner";
import FaqSection, { type FaqItem } from "@/components/FaqSection";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pool Financing",
  description:
    "Swimming pool financing and pool loans with quick, easy approval. Loans up to $100,000, terms up to 20 years, no prepayment penalties, and no consulting fees.",
  alternates: { canonical: "/financing" },
};

const lyon = {
  name: "Lyon Financial",
  phone: "(877) 754-5966",
  phoneHref: "tel:+18777545966",
  applyUrl: "https://www.lyonfinancial.net/dealer/pinnacle-pools-and-landscape-ca/",
};

const benefits = [
  {
    title: "Affordable Financing",
    body: "With loans up to $100,000, our providers offer very competitive rates for your unique situation with no prepayment penalties and multiple programs with terms up to 20 years.",
  },
  {
    title: "Swift Processing",
    body: "We understand how valuable your time is. Receive a decision on your application within days, with electronic documents for fast approval.",
  },
  {
    title: "Save Money",
    body: "Enjoy the savings of pre-approved financing and very competitive rates, with no prepayment penalties or fees.",
  },
  {
    title: "Convenience",
    body: "Enjoy electronic documents and easy approvals so you can start your pool project as quickly as possible.",
  },
  {
    title: "Hassle-Free Loan Process",
    body: "Our online application is fast and easy, with loan approval possible in as little as one business day.",
  },
  {
    title: "Customizable Terms",
    body: "Our pool loans come with multiple programs and terms up to 20 years, so you can customize a plan that fits your budget and lifestyle.",
  },
];

const programHighlights = [
  "Low, fixed rates",
  "Loans up to $100,000",
  "Multiple programs with terms up to 20 years",
  "No consulting fees",
  "No prepayment penalties",
  "No equity or appraisals for signature loans",
  "Electronic documents for fast approvals",
  "Programs available for those with credit scores of 680 and above",
  "Partner with customer and contractor until pool is complete",
];

const faqs: FaqItem[] = [
  {
    q: "How much can I borrow for a pool?",
    a: "Our lending partners offer pool loans up to $100,000, with multiple programs and terms up to 20 years so you can build a payment that fits your budget.",
  },
  {
    q: "How fast can I get approved?",
    a: "Approval is possible in as little as one business day. Applications are handled with electronic documents, and most applicants receive a decision within days.",
  },
  {
    q: "What credit score do I need?",
    a: "Programs are available for those with credit scores of 680 and above. All programs are subject to qualification and subject to change.",
  },
  {
    q: "Do I need equity in my home?",
    a: "No. Our providers offer pool loans with little or no equity, and no equity or appraisals are required for signature loans.",
  },
  {
    q: "Are there prepayment penalties or consulting fees?",
    a: "No. There are no prepayment penalties and no consulting fees, so you can pay your loan off early without being charged extra.",
  },
  {
    q: "Another builder said they could not finance my project. Can you help?",
    a: "Very likely. Many pool builders are struggling to get financing right now, but we have a team of lenders with money available for pool loans. We have helped hundreds of people that other builders told “no.” Give us a call at " + business.phone + ".",
  },
];

export default function FinancingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Financing", path: "/financing" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <section className="flex min-h-[70svh] items-center bg-black">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <Badge className="bg-[#1668c4] text-white hover:bg-[#1668c4]">
              Quick &amp; Easy Approval
            </Badge>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Swimming Pool Financing and Pool Loans
            </h1>
            <p className="mt-4 max-w-lg text-lg text-neutral-300">
              Don&apos;t stress about finding a loan for your pool project. We have a team of
              lenders who can help you finance your pool and make your backyard dreams come
              true. Our pool loan providers can help even if other builders or loan companies
              have said &ldquo;no&rdquo; to your project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={lyon.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile rounded-md bg-[#1668c4] px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#0f4c92]"
              >
                Click to Apply Online
              </a>
              <Link
                href="/estimate"
                className="btn-tactile rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:border-[#1668c4] hover:text-[#1668c4]"
              >
                Get a Quote Now
              </Link>
            </div>
            <p className="mt-6 text-sm text-neutral-400">
              Find competitive rates and flexible financing options — fast.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/new/modern-pool-sun-shelf-cabana.webp"
              alt="A finished custom pool built by Pinnacle Pools and Landscape"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-black">
            Pre-Approved Pool Financing — Give Life to Your Backyard Dreams
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Our expert advisors are here to make sure you are comfortable with all the financial
            decisions related to your loan. We&apos;ll take care of all the paperwork so you can
            just focus on enjoying your pool.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-black">{benefit.title}</h3>
                <p className="mt-2 text-neutral-600">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-bold text-black">Contact Us for Pool Financing</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Don&apos;t waste time going to multiple lenders — get pre-approved for your pool loan
            now. No consulting fees, no prepayment penalties, and no equity or appraisals needed.
            We offer fair terms even if you don&apos;t have much equity or require appraisals for
            signature loans.
          </p>
          <p className="mt-4 text-lg text-neutral-600">
            We are constantly searching for the lowest rates on pool loans so that you can have
            the best financing possible for your project. Our network of pool financing lenders is
            the largest and most experienced in the business. You can trust our team to find you
            the best loan terms available.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={lyon.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#1668c4] hover:text-white"
            >
              Click to Apply Online
            </a>
            <a
              href={business.phoneHref}
              className="btn-tactile rounded-md border border-black/15 px-6 py-3 text-sm font-semibold text-black hover:border-[#1668c4]"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-black">
            Get a Head-Start on Your Project With Pre-Approved Financing
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Many pool builders are struggling to get financing right now. But we have a team of
            lenders with money available right now for pool loans. If another builder or loan
            company has told you they can&apos;t help you, please give us a call — we&apos;ve
            helped hundreds of people that other builders told &ldquo;no.&rdquo;
          </p>
          <p className="mt-4 text-lg text-neutral-600">
            Our providers offer pool loans with little or no equity, and very competitive rates
            for your unique situation. Feel free to contact our loan company directly, or call us
            at{" "}
            <a href={business.phoneHref} className="font-semibold text-[#0f4c92]">
              {business.phone}
            </a>{" "}
            if you have questions or need advice.
          </p>
        </div>

        <div className="mt-10 grid gap-8 rounded-2xl border border-neutral-200 p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0f4c92]">
              Our Lending Partner
            </p>
            <h3 className="mt-2 text-2xl font-bold text-black">{lyon.name}</h3>
            <p className="mt-1 text-lg font-semibold text-neutral-700">
              Simple Interest Pool Loans
            </p>
            <p className="mt-4 text-neutral-600">
              Since 1979, {lyon.name} has worked as a specialist in pool financing solutions. They
              offer terms up to 20 years, no consulting fees, no prepayment penalties, and low,
              fixed rates. Unlike many banks and credit unions, their experience is unique to
              swimming pools — not just any type of loan. Your call will always be answered by a
              live, knowledgeable loan representative, eager to offer solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={lyon.phoneHref}
                className="btn-tactile rounded-md border border-black/15 px-5 py-3 text-sm font-semibold text-black hover:border-[#1668c4]"
              >
                Call {lyon.name} at {lyon.phone}
              </a>
              <a
                href={lyon.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-[#1668c4] hover:text-white"
              >
                Click to Apply Online
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-6">
            <h4 className="font-semibold text-black">Program Highlights</h4>
            <ul className="mt-4 space-y-3">
              {programHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-neutral-700">
                  <span aria-hidden className="mt-0.5 shrink-0 font-bold text-[#0f4c92]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          *All programs subject to qualification and subject to change.
        </p>
      </section>

      <FaqSection heading="Pool Financing FAQs" faqs={faqs} />

      <CtaBanner
        heading="Ready to finance your backyard project?"
        subheading="Get pre-approved, then let's design the pool you've been picturing — free estimates, no obligation."
      />
    </>
  );
}
