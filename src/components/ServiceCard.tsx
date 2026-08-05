import Link from "next/link";
import type { Service } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <Card className="h-full gap-3 transition hover:shadow-lg hover:ring-[#dac026]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-black group-hover:text-[#8a7315]">
            {service.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p className="text-sm text-neutral-600">{service.summary}</p>
          <span className="mt-4 text-sm font-semibold text-[#8a7315]">Learn more →</span>
        </CardContent>
      </Card>
    </Link>
  );
}
