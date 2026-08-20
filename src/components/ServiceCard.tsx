import Link from "next/link";
import type { Service } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* Landscape-side services carry the green accent; everything else stays blue.
   Class strings are written out in full so Tailwind's static scanner sees them. */
const GREEN_SLUGS = new Set(["landscaping", "artificial-turf"]);

const ACCENTS = {
  blue: {
    ring: "hover:ring-[#1668c4]",
    title: "group-hover:text-[#0f4c92]",
    link: "text-[#0f4c92]",
  },
  green: {
    ring: "hover:ring-[#dac026]",
    title: "group-hover:text-[#8a7315]",
    link: "text-[#8a7315]",
  },
} as const;

export default function ServiceCard({ service }: { service: Service }) {
  const a = ACCENTS[GREEN_SLUGS.has(service.slug) ? "green" : "blue"];

  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <Card className={`h-full gap-3 transition hover:shadow-lg ${a.ring}`}>
        <CardHeader>
          <CardTitle className={`text-lg font-semibold text-black ${a.title}`}>
            {service.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p className="text-sm text-neutral-600">{service.summary}</p>
          <span className={`mt-4 text-sm font-semibold ${a.link}`}>Learn more →</span>
        </CardContent>
      </Card>
    </Link>
  );
}
