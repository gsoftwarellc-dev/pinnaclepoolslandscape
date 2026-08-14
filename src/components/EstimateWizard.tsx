"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Droplets,
  Flame,
  GlassWater,
  Layers,
  Lightbulb,
  Lock,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  Thermometer,
  TreePalm,
  Wallet,
  Waves,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { business } from "@/data/business";
import { serviceAreas } from "@/data/serviceAreas";
import {
  budgetRanges,
  calculateEstimate,
  deckingOptions,
  emptyAnswers,
  financingOptions,
  formatRange,
  formatUsd,
  landscapeOptions,
  poolFeatures,
  poolProjectTypes,
  poolSizes,
  projectTypes,
  timelines,
  type EstimateAnswers,
  type Option,
} from "@/data/estimator";

const GOLD = "#dac026";

const icons: Record<string, LucideIcon> = {
  Sun,
  Waves,
  Flame,
  Lightbulb,
  Thermometer,
  Droplets,
  GlassWater,
  Layers,
  Waypoints,
  ShieldCheck,
};

type StepId =
  | "zip"
  | "projectType"
  | "poolSize"
  | "features"
  | "outdoor"
  | "budget"
  | "timeline"
  | "financing"
  | "contact";

type Step = { id: StepId; title: string; subtitle: string; short: string; icon: LucideIcon };

const allSteps: Step[] = [
  {
    id: "zip",
    short: "Location",
    icon: MapPin,
    title: "Where is your project?",
    subtitle: "Your ZIP tells us which crew and permitting office covers your build.",
  },
  {
    id: "projectType",
    short: "Project",
    icon: Waves,
    title: "What are you building?",
    subtitle: "Pick the closest match — nothing here is locked in.",
  },
  {
    id: "poolSize",
    short: "Size",
    icon: Ruler,
    title: "How big are you thinking?",
    subtitle: "Most Sacramento-area backyards land in the medium range.",
  },
  {
    id: "features",
    short: "Features",
    icon: Sparkles,
    title: "Which features interest you?",
    subtitle: "Choose as many as you'd like priced. You can skip this entirely.",
  },
  {
    id: "outdoor",
    short: "Outdoor",
    icon: TreePalm,
    title: "Decking and landscaping",
    subtitle: "The space around the pool is what makes a backyard feel finished.",
  },
  {
    id: "budget",
    short: "Budget",
    icon: Wallet,
    title: "What budget range are you working with?",
    subtitle: "This helps us design something you'll actually want to build.",
  },
  {
    id: "timeline",
    short: "Timing",
    icon: Clock,
    title: "When would you like to start?",
    subtitle: "Design and permitting run ahead of construction, so planning early pays off.",
  },
  {
    id: "financing",
    short: "Financing",
    icon: CreditCard,
    title: "Would you like financing information?",
    subtitle: "Many of our clients finance the build and keep their savings intact.",
  },
  {
    id: "contact",
    short: "Your info",
    icon: CheckCircle2,
    title: "Your estimate is ready",
    subtitle: "Tell us where to send it and we'll include a free 3D design of your yard.",
  },
];

/* --------------------------------------------------------------------- UI pieces */

function StepRail({ steps, current }: { steps: Step[]; current: number }) {
  const pct = Math.round(((current + 1) / steps.length) * 100);

  return (
    <div className="border-b border-black/10 bg-white px-5 pt-4 sm:px-8 sm:pt-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
          Step {current + 1} of {steps.length}
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7315]">
          {pct}% complete
        </span>
      </div>

      {/* Segmented bar: one block per step, so remaining effort is visible at a glance. */}
      <div className="mt-3 flex gap-1.5">
        {steps.map((s, i) => (
          <div
            key={s.id}
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200"
            aria-hidden
          >
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: i <= current ? "100%" : "0%",
                background:
                  i === current ? `linear-gradient(90deg, #8a7315, ${GOLD})` : "#8a7315",
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 hidden items-center gap-1.5 overflow-x-auto pb-3 sm:flex">
        {steps.map((s, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <span
              key={s.id}
              className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[0.7rem] font-bold transition ${
                active
                  ? "bg-black text-white"
                  : done
                    ? "text-[#8a7315]"
                    : "text-neutral-400"
              }`}
            >
              {done && <span aria-hidden>✓ </span>}
              {s.short}
            </span>
          );
        })}
      </div>
      <div className="pb-3 sm:hidden" />
    </div>
  );
}

function Check({ selected, round = false }: { selected: boolean; round?: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-6 w-6 shrink-0 items-center justify-center border-2 transition ${
        round ? "rounded-full" : "rounded-md"
      } ${selected ? "border-transparent text-black" : "border-neutral-300 text-transparent"}`}
      style={selected ? { background: GOLD } : undefined}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M4 12l6 6L20 6" />
      </svg>
    </span>
  );
}

const selectedRing = "border-transparent bg-[#fdfbef] shadow-[0_0_0_2.5px_#dac026]";
const idleRing = "border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-md";

/** Large photo card — used where seeing the thing matters more than reading about it. */
function PhotoCard({
  option,
  selected,
  onSelect,
}: {
  option: Option;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
        selected ? selectedRing : idleRing
      }`}
    >
      <span className="relative block aspect-[16/10] w-full overflow-hidden">
        {option.image && (
          <Image
            src={option.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 320px"
          />
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        {selected && (
          <span
            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full"
            style={{ background: GOLD }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4">
              <path d="M4 12l6 6L20 6" />
            </svg>
          </span>
        )}
      </span>
      <span className="block p-4">
        <span className="block text-base font-bold leading-snug text-black">{option.label}</span>
        {option.hint && (
          <span className="mt-1 block text-sm leading-snug text-neutral-500">{option.hint}</span>
        )}
      </span>
    </button>
  );
}

/** Size card with a proportional bar, so relative footprint is legible without photos. */
function SizeCard({
  option,
  selected,
  onSelect,
}: {
  option: Option;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
        selected ? selectedRing : idleRing
      }`}
    >
      <Check selected={selected} />
      <span className="min-w-0 flex-1">
        <span className="block text-[0.95rem] font-bold leading-snug text-black">
          {option.label}
        </span>
        {option.hint && (
          <span className="mt-0.5 block text-sm leading-snug text-neutral-500">{option.hint}</span>
        )}
        <span aria-hidden className="mt-2.5 block h-2 w-full rounded-full bg-neutral-100">
          {option.scale ? (
            <span
              className="block h-full rounded-full transition-all duration-300"
              style={{
                width: `${option.scale * 100}%`,
                background: `linear-gradient(90deg, #8a7315, ${GOLD})`,
              }}
            />
          ) : (
            <span className="block h-full rounded-full border border-dashed border-neutral-300" />
          )}
        </span>
      </span>
    </button>
  );
}

/** Compact icon tile for the multi-select feature step. */
function FeatureCard({
  option,
  selected,
  onToggle,
}: {
  option: Option;
  selected: boolean;
  onToggle: () => void;
}) {
  const Icon = option.icon ? icons[option.icon] : undefined;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
        selected ? selectedRing : idleRing
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition ${
          selected ? "text-black" : "bg-neutral-100 text-neutral-500"
        }`}
        style={selected ? { background: GOLD } : undefined}
      >
        {Icon && <Icon size={19} strokeWidth={2} aria-hidden />}
      </span>
      <span className="min-w-0 flex-1 text-[0.95rem] font-semibold leading-snug text-black">
        {option.label}
      </span>
      <Check selected={selected} />
    </button>
  );
}

function OptionCard({
  option,
  selected,
  onSelect,
}: {
  option: Option;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
        selected ? selectedRing : idleRing
      }`}
    >
      <Check selected={selected} round />
      <span className="min-w-0">
        <span className="block text-[0.95rem] font-bold leading-snug text-black">
          {option.label}
        </span>
        {option.hint && (
          <span className="mt-1 block text-sm leading-snug text-neutral-500">{option.hint}</span>
        )}
      </span>
    </button>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {options.map((option) => (
        <OptionCard
          key={option.value}
          option={option}
          selected={value === option.value}
          onSelect={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}

function Field({
  id,
  label,
  ...props
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-bold text-black">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="rounded-lg border border-neutral-300 px-4 py-3.5 text-base text-black outline-none transition focus:border-[#dac026] focus:ring-2 focus:ring-[#dac026]/30"
        {...props}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ result screen */

/** Counts up to the final figures so the reveal feels earned rather than abrupt. */
function useCountUp(target: number, duration = 900) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const span = reduce || target === 0 ? 0 : duration;
    const start = performance.now();
    const tick = (now: number) => {
      const t = span === 0 ? 1 : Math.min((now - start) / span, 1);
      // Ease-out cubic: fast at first, settling gently on the final number.
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}

function ResultScreen({ answers }: { answers: EstimateAnswers }) {
  const estimate = useMemo(() => calculateEstimate(answers), [answers]);
  const low = useCountUp(estimate.total.low);
  const high = useCountUp(estimate.total.high);
  const wantsFinancing = answers.financing === "yes" || answers.financing === "maybe";
  const firstName = answers.name.trim().split(" ")[0] || "there";

  return (
    <div>
      <div className="relative overflow-hidden bg-black px-5 py-12 text-center sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(218,192,38,0.22), transparent 65%)",
          }}
        />
        <div className="relative">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"
            style={{ borderColor: "rgba(218,192,38,0.4)", color: GOLD }}
          >
            <CheckCircle2 size={14} aria-hidden />
            Your Preliminary Estimate
          </span>

          <div
            className="mt-6 font-bold leading-none tracking-tight text-white tabular-nums"
            style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
          >
            {formatUsd(low)} <span className="text-neutral-500">–</span> {formatUsd(high)}
          </div>

          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-neutral-300">
            Thanks, {firstName}. That range is based on what you selected. Your designer will
            confirm the exact number after a free on-site visit — and bring a 3D model of your
            yard with them.
          </p>
        </div>
      </div>

      <div className="px-5 py-9 sm:px-10 sm:py-11">
        {estimate.lineItems.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-neutral-200">
            <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-3 text-sm font-bold text-black">
              What&apos;s driving that range
            </div>
            <ul className="divide-y divide-neutral-200">
              {estimate.lineItems.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-3.5"
                >
                  <span className="text-sm text-neutral-700">{item.label}</span>
                  <span className="text-sm font-bold tabular-nums text-black">
                    {formatRange(item.price)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="border-t border-neutral-200 bg-neutral-50 px-5 py-3 text-xs leading-relaxed text-neutral-600">
              These individual ranges won&apos;t add up exactly to the total above. Real projects
              don&apos;t land at the top or bottom of every line at once, so the combined range is
              tightened to reflect the outcomes we actually see.
            </p>
          </div>
        )}

        <p className="mt-5 rounded-lg bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-600">
          <strong className="font-bold text-black">This is a planning range, not a bid.</strong>{" "}
          Final pricing depends on site access, soil and grade, utility runs, and the finishes you
          choose. Permits, engineering, and equipment are included in our written proposals.
        </p>

        <div className="mt-8 rounded-2xl border border-black/10 bg-black p-6 text-center sm:p-8">
          <h3 className="text-xl font-bold text-white sm:text-2xl">What happens next</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-neutral-300">
            A member of our design team will call {answers.phone || "you"} to schedule your free
            consultation and 3D design. Want to lock in a time right now?
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/schedule"
              className="btn-glow rounded-sm px-7 py-3.5 text-sm font-bold text-black"
              style={{ ["--btn-glow-bg" as string]: GOLD }}
            >
              <Calendar size={16} className="mr-2" aria-hidden />
              Schedule My Consultation
            </Link>
            <a
              href={business.phoneHref}
              className="btn-tactile rounded-md border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#dac026] hover:text-[#dac026]"
            >
              <Phone size={16} className="mr-2" aria-hidden />
              {business.phone}
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {wantsFinancing && (
            <Link
              href="/financing"
              className="rounded-xl border border-neutral-200 p-4 transition hover:border-[#dac026]"
            >
              <span className="block text-sm font-bold text-black">
                Explore financing options →
              </span>
              <span className="mt-1 block text-sm text-neutral-500">
                Loans up to $100,000, terms up to 20 years.
              </span>
            </Link>
          )}
          <Link
            href="/process"
            className="rounded-xl border border-neutral-200 p-4 transition hover:border-[#dac026]"
          >
            <span className="block text-sm font-bold text-black">See our build process →</span>
            <span className="mt-1 block text-sm text-neutral-500">
              Every phase from first sketch to first swim.
            </span>
          </Link>
          <Link
            href="/gallery"
            className="rounded-xl border border-neutral-200 p-4 transition hover:border-[#dac026]"
          >
            <span className="block text-sm font-bold text-black">Browse completed projects →</span>
            <span className="mt-1 block text-sm text-neutral-500">
              Real backyards we built across the region.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- wizard */

export default function EstimateWizard() {
  const [answers, setAnswers] = useState<EstimateAnswers>(emptyAnswers);
  const [index, setIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const lastKey = useRef<string | null>(null);

  // Landscape-only projects skip the pool sizing and pool feature steps entirely.
  const steps = useMemo(() => {
    const skipsPool =
      answers.projectType !== "" && !poolProjectTypes.includes(answers.projectType);
    return allSteps.filter(
      (step) => !skipsPool || (step.id !== "poolSize" && step.id !== "features"),
    );
  }, [answers.projectType]);

  const step = steps[Math.min(index, steps.length - 1)];

  // Keep the question in view when advancing, allowing for the sticky header so the step
  // rail isn't tucked underneath it. Skipped on first render so landing on the page
  // doesn't yank the viewport past the hero.
  useEffect(() => {
    const key = submitted ? "done" : `step-${index}`;
    if (lastKey.current === null) {
      lastKey.current = key;
      return;
    }
    if (lastKey.current === key) return;
    lastKey.current = key;

    const el = topRef.current;
    if (!el) return;

    const header = document.querySelector("header");
    const offset = (header?.getBoundingClientRect().height ?? 0) + 16;
    const top = el.getBoundingClientRect().top;

    if (top < offset || top > window.innerHeight * 0.4) {
      window.scrollTo({ top: window.scrollY + top - offset, behavior: "smooth" });
    }

    // Move focus to the step's first text input without letting the browser scroll to it.
    const input = el.querySelector<HTMLInputElement>("input[type='text'], input:not([type])");
    if (input) input.focus({ preventScroll: true });
  }, [index, submitted]);

  function set<K extends keyof EstimateAnswers>(key: K, value: EstimateAnswers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function toggleFeature(value: string) {
    setAnswers((prev) => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter((f) => f !== value)
        : [...prev.features, value],
    }));
  }

  /** Single-select answers advance on their own — one tap per screen keeps drop-off low. */
  function selectAndAdvance<K extends keyof EstimateAnswers>(key: K, value: EstimateAnswers[K]) {
    set(key, value);
    window.setTimeout(() => setIndex((i) => Math.min(i + 1, steps.length - 1)), 240);
  }

  const canContinue = (() => {
    switch (step.id) {
      case "zip":
        return /^\d{5}$/.test(answers.zip);
      case "projectType":
        return answers.projectType !== "";
      case "poolSize":
        return answers.poolSize !== "";
      case "features":
        return true; // features are optional
      case "outdoor":
        return answers.decking !== "" && answers.landscape !== "";
      case "budget":
        return answers.budget !== "";
      case "timeline":
        return answers.timeline !== "";
      case "financing":
        return answers.financing !== "";
      case "contact":
        return (
          answers.name.trim().length > 1 &&
          answers.phone.replace(/\D/g, "").length >= 10 &&
          /\S+@\S+\.\S+/.test(answers.email)
        );
    }
  })();

  async function handleSubmit() {
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "instant-estimate", ...answers }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      // The estimate is computed client-side, so we still show it — but flag the delivery
      // failure so the visitor knows to call rather than silently waiting for a callback.
      setError(
        "We couldn't submit your request automatically. Your estimate is below — please call us so we don't miss you.",
      );
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div ref={topRef} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
        {error && (
          <p className="border-b border-amber-200 bg-amber-50 px-5 py-3 text-sm text-amber-900">
            {error}
          </p>
        )}
        <ResultScreen answers={answers} />
      </div>
    );
  }

  const StepIcon = step.icon;

  return (
    <div
      ref={topRef}
      className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl"
    >
      <StepRail steps={steps} current={index} />

      <div className="px-5 py-6 sm:px-8 sm:py-9">
        <div className="flex items-start gap-3.5">
          <span
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-black sm:flex"
            style={{ background: GOLD }}
          >
            <StepIcon size={21} strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight text-black sm:text-[1.75rem]">
              {step.title}
            </h2>
            <p className="mt-1.5 text-sm text-neutral-600 sm:text-base">{step.subtitle}</p>
          </div>
        </div>

        <div className="mt-6">
          {step.id === "zip" && (
            <div>
              <div className="max-w-xs">
                <Field
                  id="zip"
                  label="ZIP Code"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={5}
                  placeholder="95758"
                  value={answers.zip}
                  onChange={(e) => set("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area.slug}
                    className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-600"
                  >
                    {area.city}
                  </span>
                ))}
              </div>
            </div>
          )}

          {step.id === "projectType" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {projectTypes.map((option) => (
                <PhotoCard
                  key={option.value}
                  option={option}
                  selected={answers.projectType === option.value}
                  onSelect={() => selectAndAdvance("projectType", option.value)}
                />
              ))}
            </div>
          )}

          {step.id === "poolSize" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {poolSizes.map((option) => (
                <SizeCard
                  key={option.value}
                  option={option}
                  selected={answers.poolSize === option.value}
                  onSelect={() => selectAndAdvance("poolSize", option.value)}
                />
              ))}
            </div>
          )}

          {step.id === "features" && (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                {poolFeatures.map((option) => (
                  <FeatureCard
                    key={option.value}
                    option={option}
                    selected={answers.features.includes(option.value)}
                    onToggle={() => toggleFeature(option.value)}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                {answers.features.length === 0
                  ? "Nothing selected — that's fine, you can add features later."
                  : `${answers.features.length} selected.`}
              </p>
            </>
          )}

          {step.id === "outdoor" && (
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
                  <Layers size={15} aria-hidden /> Decking around the pool
                </h3>
                <OptionGrid
                  options={deckingOptions}
                  value={answers.decking}
                  onChange={(v) => set("decking", v)}
                />
              </div>
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
                  <TreePalm size={15} aria-hidden /> Landscaping
                </h3>
                <OptionGrid
                  options={landscapeOptions}
                  value={answers.landscape}
                  onChange={(v) => set("landscape", v)}
                />
              </div>
            </div>
          )}

          {step.id === "budget" && (
            <OptionGrid
              options={budgetRanges}
              value={answers.budget}
              onChange={(v) => selectAndAdvance("budget", v)}
            />
          )}

          {step.id === "timeline" && (
            <OptionGrid
              options={timelines}
              value={answers.timeline}
              onChange={(v) => selectAndAdvance("timeline", v)}
            />
          )}

          {step.id === "financing" && (
            <OptionGrid
              options={financingOptions}
              value={answers.financing}
              onChange={(v) => selectAndAdvance("financing", v)}
              columns={1}
            />
          )}

          {step.id === "contact" && (
            <div className="grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field
                  id="name"
                  label="Full Name"
                  autoComplete="name"
                  placeholder="Jordan Reyes"
                  value={answers.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <Field
                id="phone"
                label="Phone"
                type="tel"
                autoComplete="tel"
                placeholder="(916) 555-0142"
                value={answers.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
              <Field
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={answers.email}
                onChange={(e) => set("email", e.target.value)}
              />
              <div className="sm:col-span-2">
                <div className="flex gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <Lock size={17} className="mt-0.5 shrink-0 text-[#8a7315]" aria-hidden />
                  <p className="text-sm leading-relaxed text-neutral-600">
                    We never sell or share your details. They&apos;re used only to prepare your
                    estimate and schedule a consultation — no spam, no obligation.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-black/10 bg-neutral-50 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-bold text-neutral-600 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-0"
        >
          <ArrowLeft size={16} aria-hidden />
          Back
        </button>

        {step.id === "contact" ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canContinue || sending}
            className="btn-tactile inline-flex items-center gap-2 rounded-md bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#dac026] hover:text-black disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-black disabled:hover:text-white"
          >
            {sending ? "Sending…" : "Reveal My Estimate"}
            {!sending && <ArrowRight size={16} aria-hidden />}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(i + 1, steps.length - 1))}
            disabled={!canContinue}
            className="btn-tactile inline-flex items-center gap-2 rounded-md bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#dac026] hover:text-black disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-black disabled:hover:text-white"
          >
            Continue
            <ArrowRight size={16} aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}
