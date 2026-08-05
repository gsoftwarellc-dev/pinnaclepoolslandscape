import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/logo_pinnacle.webp"
            alt={business.name}
            width={300}
            height={90}
            className="h-10 w-auto"
          />
          <p className="mt-3 text-sm">{business.description}</p>
          <p className="mt-4 text-sm">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </p>
          <a href={business.phoneHref} className="mt-2 block text-sm font-semibold text-white">
            {business.phone}
          </a>
          <p className="mt-2 text-sm">License #{business.license}</p>
          <div className="mt-4 flex justify-center gap-3 sm:justify-start">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#dac026] hover:text-black"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
              </svg>
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#dac026] hover:text-black"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.03.67-.32.32-.51.61-.67 1.03-.12.31-.26.78-.3 1.65C4.26 8.55 4.25 8.87 4.25 12s.01 3.45.06 4.5c.04.87.18 1.34.3 1.65.16.42.35.71.67 1.03.32.32.61.51 1.03.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.03-.67.32-.32.51-.61.67-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.5s-.01-3.45-.06-4.5c-.04-.87-.18-1.34-.3-1.65a2.75 2.75 0 0 0-.67-1.03 2.75 2.75 0 0 0-1.03-.67c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm5.35-1.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
              </svg>
            </a>
            <a
              href={business.social.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Business Profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#dac026] hover:text-black"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M21.35 11.1h-9.17v2.92h5.27c-.23 1.4-1.62 4.1-5.27 4.1-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.9 3.7 14.86 2.7 12.18 2.7c-5.1 0-9.24 4.13-9.24 9.23s4.14 9.23 9.24 9.23c5.33 0 8.87-3.75 8.87-9.02 0-.6-.07-1.06-.15-1.53Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-[#dac026]">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Areas We Serve</p>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="hover:text-[#dac026]">
                  {a.city}, {a.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/gallery" className="hover:text-[#dac026]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#dac026]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-[#dac026]">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {business.name}. All rights reserved. Licensed & insured. CA Lic. #{business.license}
      </div>
    </footer>
  );
}
