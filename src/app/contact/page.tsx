import type { Metadata } from "next";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${business.name} in ${business.address.city}, ${business.address.state}. Call ${business.phone} or send us a message.`,
  alternates: { canonical: "/contact" },
};

const mapQuery = encodeURIComponent(
  `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
);

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-4 text-lg text-slate-700">
        Have a question or want to talk through your project? Reach out any time.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-semibold text-slate-900">Phone</h2>
              <a href={business.phoneHref} className="mt-1 block text-[#8a7315]">
                {business.phone}
              </a>
              <p className="text-slate-600">{business.phoneSecondary}</p>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Email</h2>
              <a href={`mailto:${business.email}`} className="mt-1 block text-[#8a7315]">
                {business.email}
              </a>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Address</h2>
              <p className="mt-1 text-slate-600">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Hours</h2>
              <p className="mt-1 text-slate-600">Monday – Saturday, by appointment</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-slate-900">Follow Us</h2>
            <div className="mt-3 flex gap-3">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#dac026] hover:bg-[#dac026] hover:text-black"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#dac026] hover:bg-[#dac026] hover:text-black"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.03.67-.32.32-.51.61-.67 1.03-.12.31-.26.78-.3 1.65C4.26 8.55 4.25 8.87 4.25 12s.01 3.45.06 4.5c.04.87.18 1.34.3 1.65.16.42.35.71.67 1.03.32.32.61.51 1.03.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.03-.67.32-.32.51-.61.67-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.5s-.01-3.45-.06-4.5c-.04-.87-.18-1.34-.3-1.65a2.75 2.75 0 0 0-.67-1.03 2.75 2.75 0 0 0-1.03-.67c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm5.35-1.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
                </svg>
              </a>
              <a
                href={business.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#dac026] hover:bg-[#dac026] hover:text-black"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M21.35 11.1h-9.17v2.92h5.27c-.23 1.4-1.62 4.1-5.27 4.1-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.9 3.7 14.86 2.7 12.18 2.7c-5.1 0-9.24 4.13-9.24 9.23s4.14 9.23 9.24 9.23c5.33 0 8.87-3.75 8.87-9.02 0-.6-.07-1.06-.15-1.53Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="h-80 w-full overflow-hidden rounded-xl border border-black/10 lg:h-full lg:min-h-[380px]">
          <iframe
            title={`${business.name} location map`}
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
