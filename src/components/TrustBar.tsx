import { trustSignals } from "@/data/business";

const paths: Record<string, string> = {
  shield: "M12 2l8 3.5v6c0 5-3.4 9.2-8 10.5-4.6-1.3-8-5.5-8-10.5v-6L12 2Zm-1.2 13.4 5.3-5.3-1.4-1.4-3.9 3.9-1.9-1.9-1.4 1.4 3.3 3.3Z",
  hammer:
    "M14.1 2 12 4.1l1.4 1.4-2.8 2.8L9.2 6.9 7.1 9l1.4 1.4L3 15.9V21h5.1l5.5-5.5L15 16.9l2.1-2.1-1.4-1.4 2.8-2.8L19.9 12 22 9.9 14.1 2Z",
  home: "M12 3 2 11h3v10h6v-6h2v6h6V11h3L12 3Z",
  cube: "M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.6 3.7L12 11.7 5.4 8 12 4.3ZM5 9.7l6 3.4v6.6l-6-3.3V9.7Zm8 10V13.1l6-3.4v6.7l-6 3.3Z",
  card: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1H2V6Zm0 4h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8Zm3 5v2h5v-2H5Z",
};

/**
 * Credibility strip shown immediately under the hero — license, experience, ownership,
 * design offer and financing — so a first-time visitor sees proof before scrolling.
 */
export default function TrustBar({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={
        dark ? "border-y border-white/10 bg-black" : "border-y border-black/10 bg-neutral-50"
      }
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-7 px-4 py-8 sm:grid-cols-3 lg:grid-cols-5">
        {trustSignals.map((signal) => (
          <div key={signal.label} className="flex items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="mt-0.5 h-6 w-6 shrink-0 fill-[#8a7315]"
              style={dark ? { fill: "#dac026" } : undefined}
            >
              <path d={paths[signal.icon]} />
            </svg>
            <div className="min-w-0">
              <div
                className={`text-sm font-bold leading-tight ${dark ? "text-white" : "text-black"}`}
              >
                {signal.label}
              </div>
              <div
                className={`mt-0.5 text-sm leading-tight ${
                  dark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {signal.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
