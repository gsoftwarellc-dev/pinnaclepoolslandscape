"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

const sortedAreas = [...serviceAreas].sort((a, b) =>
  a.city === "Sacramento" ? -1 : b.city === "Sacramento" ? 1 : 0
);

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_pinnacle.webp"
            alt={business.name}
            width={300}
            height={90}
            priority
            className="h-10 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-5 whitespace-nowrap text-[0.95rem] font-semibold text-black xl:flex 2xl:gap-7 2xl:text-base">
          <Link href="/" className="py-2 hover:text-[#0f4c92]">
            Home
          </Link>
          <div className="group relative">
            <Link href="/services" className="flex items-center gap-1 py-2 hover:text-[#0f4c92]">
              Services
            </Link>
            <div className="invisible absolute left-0 top-full w-64 rounded-lg border border-black/10 bg-white p-2 text-sm font-medium opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block rounded-md px-3 py-2 text-black hover:bg-slate-50"
                >
                  {s.shortName}
                </Link>
              ))}
            </div>
          </div>
          <div className="group relative">
            <Link
              href="/service-areas"
              className="flex items-center gap-1 py-2 hover:text-[#0f4c92]"
            >
              Areas
            </Link>
            <div className="invisible absolute left-0 top-full w-64 rounded-lg border border-black/10 bg-white p-2 text-sm font-medium opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {sortedAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="block rounded-md px-3 py-2 text-black hover:bg-slate-50"
                >
                  {area.city}, {area.state}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/gallery" className="py-2 hover:text-[#0f4c92]">
            Gallery
          </Link>
          <Link href="/process" className="py-2 hover:text-[#0f4c92]">
            Process
          </Link>
          <Link href="/resources" className="py-2 hover:text-[#0f4c92]">
            Guides
          </Link>
          <Link href="/financing" className="py-2 hover:text-[#0f4c92]">
            Financing
          </Link>
          <Link href="/contact" className="py-2 hover:text-[#0f4c92]">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={business.phoneHref}
            className="hidden whitespace-nowrap text-[0.95rem] font-bold text-black xl:block 2xl:text-base"
          >
            {business.phone}
          </a>
          <Link
            href="/estimate"
            className="hidden whitespace-nowrap rounded-md bg-[#1668c4] px-4 py-2.5 text-[0.95rem] font-semibold text-white transition hover:bg-[#0f4c92] sm:block xl:px-5 2xl:text-base"
          >
            Free 3D Design
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-md text-black hover:bg-slate-100 xl:hidden"
          >
            {open ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-black/10 bg-white xl:hidden"
        >
          <nav
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) setOpen(false);
            }}
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-base font-semibold text-black"
          >
            <Link href="/" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Home
            </Link>

            <Link href="/services" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Services
            </Link>
            <div className="flex flex-col border-l border-black/10 pl-3 text-sm font-medium">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-md px-2 py-2.5 text-black/80 hover:bg-slate-50"
                >
                  {s.shortName}
                </Link>
              ))}
            </div>

            <Link href="/service-areas" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Areas We Serve
            </Link>
            <div className="flex flex-col border-l border-black/10 pl-3 text-sm font-medium">
              {sortedAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="rounded-md px-2 py-2.5 text-black/80 hover:bg-slate-50"
                >
                  {area.city}, {area.state}
                </Link>
              ))}
            </div>

            <Link href="/gallery" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Gallery
            </Link>
            <Link href="/process" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Process
            </Link>
            <Link href="/resources" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Pool Buying Guides
            </Link>
            <Link href="/financing" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Financing
            </Link>
            <Link href="/contact" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Contact
            </Link>
            <Link href="/schedule" className="rounded-md px-2 py-3 hover:bg-slate-50">
              Schedule a Consultation
            </Link>

            <div className="mt-3 flex flex-col gap-3 border-t border-black/10 pt-4">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={business.phoneHref}
                  className="rounded-md border border-black/15 px-4 py-3 text-center font-bold text-black"
                >
                  Call
                </a>
                <a
                  href={business.smsHref}
                  className="rounded-md border border-black/15 px-4 py-3 text-center font-bold text-black"
                >
                  Text
                </a>
              </div>
              <Link
                href="/estimate"
                className="rounded-md bg-[#1668c4] px-4 py-3 text-center font-bold text-white"
              >
                Start Your Free 3D Design
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
