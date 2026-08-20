import Link from "next/link";
import { business } from "@/data/business";

export default function CtaBanner({
  heading = "Ready to start your project?",
  subheading = "Free 3D design and a free estimate — no obligation, from a licensed local contractor.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        <p className="max-w-xl text-neutral-300">{subheading}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/estimate"
            className="btn-glow rounded-sm px-6 py-3.5 text-sm font-bold text-white"
            style={{ ["--btn-glow-bg" as string]: "#1668c4" }}
          >
            Start Your Free 3D Design
          </Link>
          <Link
            href="/schedule"
            className="btn-tactile rounded-md border border-white bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:border-[#1668c4] hover:text-[#1668c4]"
          >
            Book a Consultation
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-neutral-400">
          <a href={business.phoneHref} className="font-semibold text-white hover:text-[#1668c4]">
            Call {business.phone}
          </a>
          <span aria-hidden>·</span>
          <a href={business.smsHref} className="font-semibold text-white hover:text-[#1668c4]">
            Text Us
          </a>
          <span aria-hidden>·</span>
          <span>CA Lic. #{business.license}</span>
        </div>
      </div>
    </section>
  );
}
