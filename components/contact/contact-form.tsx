"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  interest: "AI Automation",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Something went wrong.");
      }

      setStatus("success");
      setFeedback("Thanks. We received your message and will get back to you shortly.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-lg)] border border-ink-900/10 bg-white p-6 shadow-[0_18px_44px_rgba(17,24,39,0.08)] sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            className="rounded-[var(--radius-sm)] border border-ink-900/14 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-signal-500"
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink-900">
            Work email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
            className="rounded-[var(--radius-sm)] border border-ink-900/14 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-signal-500"
            placeholder="name@company.com"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm font-medium text-ink-900">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="rounded-[var(--radius-sm)] border border-ink-900/14 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-signal-500"
            placeholder="Company name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="interest" className="text-sm font-medium text-ink-900">
            What do you want to discuss?
          </label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={(event) => updateField("interest", event.target.value)}
            className="rounded-[var(--radius-sm)] border border-ink-900/14 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-signal-500"
          >
            <option>AI Automation</option>
            <option>Support Operations</option>
            <option>Engineering Team</option>
            <option>Solutions</option>
            <option>General Inquiry</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-ink-900">
            Project context
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            required
            rows={6}
            className="rounded-[var(--radius-sm)] border border-ink-900/14 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-signal-500"
            placeholder="What are you trying to automate, support, ship, or fix?"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-signal-500 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-signal-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send inquiry"}
        </button>
        <p className="text-sm text-ink-900/58">
          We will reply with the clearest next step, not a generic sales sequence.
        </p>
      </div>

      {feedback ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-700"
          }`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
