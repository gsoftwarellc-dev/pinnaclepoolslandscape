import Link from "next/link";
import { business } from "@/data/business";

export default function CtaBanner({
  heading = "Ready to start your project?",
  subheading = "We offer free estimates — no obligation, from a licensed local contractor.",
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
            href="/quote"
            className="btn-glow rounded-sm px-6 py-3 text-sm font-semibold text-black"
            style={{ ["--btn-glow-bg" as string]: "#dac026" }}
          >
            Get a Free Estimate
          </Link>
          <a
            href={business.phoneHref}
            className="btn-tactile rounded-md border border-white bg-black px-6 py-3 text-sm font-semibold text-white hover:border-[#dac026] hover:text-[#dac026]"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
