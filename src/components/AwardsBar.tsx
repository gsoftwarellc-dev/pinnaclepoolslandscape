import Image from "next/image";
import { business } from "@/data/business";

export default function AwardsBar() {
  return (
    <section className="border-y border-black/10 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4">
        {business.awardBadges.map((badge) => (
          <Image
            key={badge.file}
            src={`/awards/${badge.file}`}
            alt={badge.alt}
            width={80}
            height={80}
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
        ))}
      </div>
    </section>
  );
}
