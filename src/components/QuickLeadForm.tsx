"use client";

import { useState } from "react";
import { business } from "@/data/business";

/**
 * Three-field lead capture dropped inline on service, area and resource pages so a visitor
 * never has to hunt for the contact page. Deliberately short — the estimate wizard is where
 * we qualify; this just opens the conversation.
 */
export default function QuickLeadForm({
  source,
  heading = "Request Your Free Consultation",
  subheading = "Tell us where you are and what you're planning. We'll call you back — usually the same day.",
  dark = false,
}: {
  source: string;
  heading?: string;
  subheading?: string;
  dark?: boolean;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const inputClass = dark
    ? "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-neutral-400 outline-none transition focus:border-[#1668c4]"
    : "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-[#1668c4] focus:ring-2 focus:ring-[#1668c4]/30";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, name, phone, zip, project }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className={`rounded-xl p-6 ${
          dark ? "border border-[#1668c4]/40 bg-white/5 text-white" : "border border-[#1668c4]/50 bg-[#f2f7fd] text-black"
        }`}
      >
        <p className="text-lg font-bold">Thanks, {name.split(" ")[0] || "there"} — we&apos;ve got it.</p>
        <p className={`mt-2 text-sm ${dark ? "text-neutral-300" : "text-neutral-600"}`}>
          A member of our design team will reach out shortly. If you&apos;d rather not wait, call
          us at{" "}
          <a href={business.phoneHref} className="font-semibold underline">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>{heading}</h3>
        <p className={`mt-1.5 text-sm ${dark ? "text-neutral-400" : "text-neutral-600"}`}>
          {subheading}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
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
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label="ZIP code"
          placeholder="ZIP code"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
          className={inputClass}
        />
        <select
          aria-label="Project type"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className={inputClass}
        >
          <option value="">Project type…</option>
          <option value="pool">New pool</option>
          <option value="pool-spa">Pool + spa</option>
          <option value="full-backyard">Complete backyard</option>
          <option value="remodel">Pool remodel</option>
          <option value="landscape">Landscape / hardscape</option>
          <option value="other">Something else</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please call {business.phone} and we&apos;ll take care of you.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-tactile w-full rounded-md bg-[#1668c4] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-black hover:text-white disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Request My Free Consultation"}
      </button>
      <p className={`text-center text-xs ${dark ? "text-neutral-500" : "text-neutral-500"}`}>
        No obligation. Licensed &amp; insured · CA Lic. #{business.license}
      </p>
    </form>
  );
}
