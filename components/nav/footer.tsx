import Link from "next/link";
import {
  CITY_STATE_POSTAL,
  COMPANY_LINKEDIN,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  STREET_ADDRESS,
} from "@/lib/seo";
import Logo from "./logo";
import { FOOTER_LINKS, SERVICE_LINKS } from "./nav-links";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1h.02C3.87 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V23h-4v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.12V23h-4V8Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-mist-50/10 bg-ink-950 text-mist-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-mist-50/55">
            AI automation and systems built for real business execution.
          </p>
          <div className="mt-2 space-y-2 text-sm text-mist-50/70">
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-signal-400">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              <a href={`tel:${CONTACT_PHONE}`} className="hover:text-signal-400">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>
            <div>
              <p>{STREET_ADDRESS}</p>
              <p>{CITY_STATE_POSTAL}</p>
            </div>
            <Link
              href={COMPANY_LINKEDIN}
              className="inline-flex items-center gap-2 text-mist-50/70 transition-colors hover:text-signal-400"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        <nav aria-label="Service areas" className="flex flex-col gap-2.5">
          <p className="label mb-1 text-mist-50/40">Services</p>
          {SERVICE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist-50/70 transition-colors hover:text-signal-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          <p className="label mb-1 text-mist-50/40">Company</p>
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist-50/70 transition-colors hover:text-signal-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8">
        <p className="label text-mist-50/40">
          © {new Date().getFullYear()} Raptric
        </p>
      </div>
    </footer>
  );
}
