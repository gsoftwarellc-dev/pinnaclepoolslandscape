import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

export default function Header() {
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
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-base font-semibold text-black lg:flex">
          <Link href="/" className="py-2 hover:text-[#8a7315]">
            Home
          </Link>
          <div className="group relative">
            <Link href="/services" className="flex items-center gap-1 py-2 hover:text-[#8a7315]">
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
              className="flex items-center gap-1 py-2 hover:text-[#8a7315]"
            >
              Areas We Serve
            </Link>
            <div className="invisible absolute left-0 top-full w-64 rounded-lg border border-black/10 bg-white p-2 text-sm font-medium opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {[...serviceAreas]
                .sort((a, b) => (a.city === "Sacramento" ? -1 : b.city === "Sacramento" ? 1 : 0))
                .map((area) => (
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
          <Link href="/gallery" className="py-2 hover:text-[#8a7315]">
            Gallery
          </Link>
          <Link href="/contact" className="py-2 hover:text-[#8a7315]">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="hidden text-base font-bold text-black sm:block"
          >
            {business.phone}
          </a>
          <Link
            href="/quote"
            className="rounded-md bg-black px-5 py-2.5 text-base font-semibold text-white hover:bg-[#dac026] hover:text-black"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
