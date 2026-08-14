import Link from "next/link";
import { business } from "@/data/business";

const iconClass = "h-5 w-5 fill-current";

/**
 * Replaces the single floating call button: on phones this is a fixed three-up action bar
 * (call / text / free design), and on desktop it collapses to one floating design CTA.
 * The body reserves bottom padding on small screens so the bar never covers the footer.
 */
export default function MobileActionBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur sm:hidden">
        <div className="grid grid-cols-3">
          <a
            href={business.phoneHref}
            className="flex flex-col items-center justify-center gap-1 border-r border-black/10 py-3 text-xs font-bold text-black"
            aria-label={`Call ${business.name} at ${business.phone}`}
          >
            <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.3 11.3 0 0 0 3.53.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.3 11.3 0 0 0 .56 3.53 1 1 0 0 1-.25 1.01l-2.19 2.25Z" />
            </svg>
            Call
          </a>
          <a
            href={business.smsHref}
            className="flex flex-col items-center justify-center gap-1 border-r border-black/10 py-3 text-xs font-bold text-black"
            aria-label={`Text ${business.name} at ${business.phone}`}
          >
            <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
              <path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4V5a2 2 0 0 1 2-2Zm3 5v2h10V8H7Zm0 4v2h7v-2H7Z" />
            </svg>
            Text
          </a>
          <Link
            href="/estimate"
            className="flex flex-col items-center justify-center gap-1 bg-[#dac026] py-3 text-xs font-bold text-black"
          >
            <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.6 3.7L12 11.7 5.4 8 12 4.3ZM5 9.7l6 3.4v6.6l-6-3.3V9.7Zm8 10V13.1l6-3.4v6.7l-6 3.3Z" />
            </svg>
            Free 3D Design
          </Link>
        </div>
      </div>

      <Link
        href="/estimate"
        className="glow-border fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-[#dac026] px-6 py-3.5 text-sm font-bold text-black shadow-lg transition hover:bg-black hover:text-white sm:flex"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.6 3.7L12 11.7 5.4 8 12 4.3ZM5 9.7l6 3.4v6.6l-6-3.3V9.7Zm8 10V13.1l6-3.4v6.7l-6 3.3Z" />
        </svg>
        Start Your Free 3D Design
      </Link>
    </>
  );
}
