"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "raptric-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        setVisible(!saved);
      } catch {
        setVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function saveConsent(value: "accepted" | "essential") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4">
      <div className="mx-auto max-w-5xl rounded-[var(--radius-lg)] border border-ink-900/12 bg-white p-5 shadow-[0_20px_60px_rgba(8,12,24,0.16)]">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold text-ink-900">Cookie consent</p>
            <p className="mt-2 text-sm leading-6 text-ink-600">
              We use essential cookies to run the site and may use analytics or scheduling-related tools to improve the experience. You can accept all cookies or continue with essential-only cookies. See our{" "}
              <Link href="/privacy" className="font-medium text-signal-600 hover:text-signal-700">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <button
              type="button"
              onClick={() => saveConsent("essential")}
              className="inline-flex items-center rounded-[var(--radius-sm)] border border-ink-900/15 px-4 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900/30 hover:bg-ink-900/[0.03]"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="inline-flex items-center rounded-[var(--radius-sm)] bg-signal-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-signal-600"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
