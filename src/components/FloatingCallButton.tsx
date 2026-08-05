import { business } from "@/data/business";

export default function FloatingCallButton() {
  return (
    <a
      href={business.phoneHref}
      className="glow-border fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#dac026] px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-black hover:text-white sm:px-6"
      aria-label={`Call ${business.name} at ${business.phone}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.3 11.3 0 0 0 3.53.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.3 11.3 0 0 0 .56 3.53 1 1 0 0 1-.25 1.01l-2.19 2.25Z" />
      </svg>
      <span className="hidden sm:inline">Call Now</span>
      <span className="sm:hidden">Call</span>
    </a>
  );
}
