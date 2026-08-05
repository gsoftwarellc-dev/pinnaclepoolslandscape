import { business } from "@/data/business";

export default function TopBar() {
  return (
    <div className="bg-red-600 text-sm text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-hidden px-4 py-2.5">
        <a
          href={business.phoneHref}
          className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap hover:opacity-80 sm:flex"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.3 11.3 0 0 0 3.53.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.3 11.3 0 0 0 .56 3.53 1 1 0 0 1-.25 1.01l-2.19 2.25Z" />
          </svg>
          {business.phone}
        </a>

        <div className="min-w-0 flex-1 truncate whitespace-nowrap text-center text-xs font-semibold sm:text-sm">
          🇺🇸 #1 Sacramento, CA Pool Contractor
        </div>

        <span className="hidden shrink-0 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-red-600 md:inline-block">
          We Offer Free Estimates
        </span>
      </div>
    </div>
  );
}
