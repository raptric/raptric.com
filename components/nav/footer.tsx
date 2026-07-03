import Logo from "./logo";
import { NAV_LINKS, FOOTER_LINKS } from "./nav-links";

export default function Footer() {
  return (
    <footer className="border-t border-mist-50/10 bg-ink-950 text-mist-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-mist-50/55">
            AI automation and systems built for real business execution.
          </p>
        </div>

        <nav aria-label="Service areas" className="flex flex-col gap-2.5">
          <p className="label mb-1 text-mist-50/40">Services</p>
          {NAV_LINKS.map((link) => (
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
