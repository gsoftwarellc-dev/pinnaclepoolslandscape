"use client";

import { useMemo, useState } from "react";
import { business } from "@/data/business";

const TIME_SLOTS = [
  { value: "8-10", label: "8:00 – 10:00 AM" },
  { value: "10-12", label: "10:00 AM – 12:00 PM" },
  { value: "12-2", label: "12:00 – 2:00 PM" },
  { value: "2-4", label: "2:00 – 4:00 PM" },
  { value: "4-6", label: "4:00 – 6:00 PM" },
];

const PROJECT_TYPES = [
  "New custom pool",
  "Pool + spa",
  "Complete backyard",
  "Pool remodel",
  "Landscape / hardscape only",
  "Not sure yet",
];

type Day = { iso: string; weekday: string; day: string; month: string };

/**
 * Builds the next `count` bookable days, skipping Sundays and starting two days out so
 * there is time to confirm the appointment before it arrives.
 */
function buildDays(count: number): Day[] {
  const days: Day[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 2);

  while (days.length < count) {
    if (cursor.getDay() !== 0) {
      days.push({
        iso: cursor.toISOString().slice(0, 10),
        weekday: cursor.toLocaleDateString("en-US", { weekday: "short" }),
        day: String(cursor.getDate()),
        month: cursor.toLocaleDateString("en-US", { month: "short" }),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export default function ConsultationScheduler() {
  // Generated once on mount so the visible dates don't shift mid-interaction.
  const days = useMemo(() => buildDays(12), []);

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [projectType, setProjectType] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const selectedDay = days.find((d) => d.iso === date);
  const selectedSlot = TIME_SLOTS.find((s) => s.value === slot);

  const ready =
    date !== "" &&
    slot !== "" &&
    name.trim().length > 1 &&
    phone.replace(/\D/g, "").length >= 10 &&
    /\S+@\S+\.\S+/.test(email);

  const inputClass =
    "w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-black outline-none transition focus:border-[#1668c4] focus:ring-2 focus:ring-[#1668c4]/30";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "consultation-request",
          name,
          phone,
          email,
          address,
          projectType,
          requestedDate: date,
          requestedWindow: selectedSlot?.label,
          notes,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-[#1668c4]/50 bg-[#f2f7fd] p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1668c4]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
            <path d="M4 12l6 6L20 6" />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-black">Request received</h2>
        <p className="mx-auto mt-3 max-w-md text-neutral-700">
          Thanks, {name.split(" ")[0]}. We&apos;ll confirm your{" "}
          <strong className="font-semibold">
            {selectedDay?.weekday}, {selectedDay?.month} {selectedDay?.day}
          </strong>{" "}
          visit between <strong className="font-semibold">{selectedSlot?.label}</strong> by phone.
          If you need to reach us sooner, call{" "}
          <a href={business.phoneHref} className="font-semibold underline">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
    >
      <div className="space-y-8 p-6 sm:p-8">
        <fieldset>
          <legend className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
            1 · Pick a day
          </legend>
          <div className="mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
            {days.map((d) => {
              const active = date === d.iso;
              return (
                <button
                  key={d.iso}
                  type="button"
                  onClick={() => setDate(d.iso)}
                  aria-pressed={active}
                  className={`rounded-xl border py-3 text-center transition ${
                    active
                      ? "border-transparent bg-black text-white"
                      : "border-neutral-200 bg-white text-black hover:border-neutral-400"
                  }`}
                >
                  <span
                    className={`block text-[0.7rem] font-semibold uppercase tracking-wider ${
                      active ? "text-[#1668c4]" : "text-neutral-500"
                    }`}
                  >
                    {d.weekday}
                  </span>
                  <span className="mt-0.5 block text-lg font-bold leading-tight">{d.day}</span>
                  <span
                    className={`block text-[0.7rem] ${active ? "text-neutral-400" : "text-neutral-500"}`}
                  >
                    {d.month}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
            2 · Pick a time window
          </legend>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
            {TIME_SLOTS.map((s) => {
              const active = slot === s.value;
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setSlot(s.value)}
                  aria-pressed={active}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "border-transparent bg-black text-white"
                      : "border-neutral-200 bg-white text-black hover:border-neutral-400"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
            3 · Your details
          </legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input
              aria-label="Full name"
              placeholder="Full name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
            <input
              aria-label="Phone number"
              placeholder="Phone number"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
            />
            <input
              aria-label="Email address"
              placeholder="Email address"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
            <input
              aria-label="Project address or city"
              placeholder="Project address or city"
              autoComplete="street-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={inputClass}
            />
            <select
              aria-label="Project type"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className={`${inputClass} sm:col-span-2`}
            >
              <option value="">What are you planning?</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <textarea
              aria-label="Anything we should know"
              placeholder="Anything we should know before we visit? (optional)"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`${inputClass} sm:col-span-2`}
            />
          </div>
        </fieldset>

        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong submitting your request. Please call {business.phone} and
            we&apos;ll book you directly.
          </p>
        )}
      </div>

      <div className="border-t border-black/10 bg-neutral-50 px-6 py-5 sm:px-8">
        <button
          type="submit"
          disabled={!ready || status === "sending"}
          className="btn-tactile w-full rounded-md bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1668c4] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-black disabled:hover:text-white"
        >
          {status === "sending" ? "Sending…" : "Request This Appointment"}
        </button>
        <p className="mt-3 text-center text-xs text-neutral-500">
          We&apos;ll call to confirm your window. Consultations are free and carry no obligation.
        </p>
      </div>
    </form>
  );
}
