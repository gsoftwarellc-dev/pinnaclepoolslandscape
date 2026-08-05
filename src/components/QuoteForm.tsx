"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border border-[#dac026]/40 bg-[#faf6e0] p-6 text-black">
        Thanks — we received your request and will be in touch shortly.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="service" className="text-sm font-medium text-slate-700">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="rounded-md border border-slate-300 px-3 py-2"
        >
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.shortName}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="area" className="text-sm font-medium text-slate-700">
          City
        </label>
        <select id="area" name="area" className="rounded-md border border-slate-300 px-3 py-2">
          {serviceAreas.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.city}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="btn-tactile rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#dac026] hover:text-black sm:col-span-2"
      >
        Request My Free Quote
      </button>
    </form>
  );
}
