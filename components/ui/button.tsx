"use client";

import Link from "next/link";
import { CALENDLY_URL } from "@/lib/seo";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function isCalendlyHref(href: string) {
  return href === "/contact" || href === CALENDLY_URL;
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

function openCalendlyPopup() {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`,
    });
    return;
  }

  if (typeof window !== "undefined") {
    window.open(
      `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`,
      "_blank",
      "noopener,noreferrer",
    );
  }
}

export function CtaLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (isCalendlyHref(href)) {
    return (
      <button
        type="button"
        onClick={openCalendlyPopup}
        className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] bg-signal-500 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-signal-600"
      >
        {children}
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          &rarr;
        </span>
      </button>
    );
  }

  const external = isExternalHref(href);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] bg-signal-500 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-signal-600"
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
        &rarr;
      </span>
    </Link>
  );
}

export function SecondaryCtaLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (isCalendlyHref(href)) {
    return (
      <button
        type="button"
        onClick={openCalendlyPopup}
        className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-ink-900/15 px-6 py-3.5 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900/30 hover:bg-ink-900/[0.03]"
      >
        {children}
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          &rarr;
        </span>
      </button>
    );
  }

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-ink-900/15 px-6 py-3.5 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900/30 hover:bg-ink-900/[0.03]"
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
        &rarr;
      </span>
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-800 underline decoration-ink-800/20 decoration-1 underline-offset-4 transition-colors hover:text-signal-600 hover:decoration-signal-600"
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
        &rarr;
      </span>
    </Link>
  );
}
