"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { NAV_LINKS } from "./nav-links";

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 4.5 L6 7.5 L9 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-mist-50/10 bg-ink-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo variant="light" />

        <nav className="hidden lg:flex items-center gap-5" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={link.children ? "true" : undefined}
                  className={`relative flex items-center gap-1 py-5 text-sm font-medium transition-colors ${
                    active ? "text-mist-50" : "text-mist-50/65 hover:text-mist-50"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronIcon className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  <span
                    className={`absolute bottom-4 left-0 h-px w-full origin-left bg-signal-400 transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden
                  />
                </Link>

                {link.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="mt-1 rounded-[var(--radius-md)] border border-mist-50/10 bg-ink-900 p-2 shadow-2xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-[var(--radius-sm)] px-3 py-2.5 text-sm text-mist-50/75 transition-colors hover:bg-mist-50/5 hover:text-mist-50"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center bg-signal-500 px-5 py-2.5 text-sm font-medium text-white rounded-[var(--radius-sm)] transition-colors hover:bg-signal-600"
          >
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            className="lg:hidden flex h-9 w-9 items-center justify-center text-mist-50"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-mist-50/10 bg-ink-950 px-6 py-4"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname.startsWith(link.href);
              const expanded = openMobileGroup === link.href;
              return (
                <li key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block flex-1 py-2.5 text-base font-medium ${
                        active ? "text-mist-50" : "text-mist-50/65"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${link.label} menu`}
                        onClick={() => setOpenMobileGroup(expanded ? null : link.href)}
                        className="flex h-9 w-9 items-center justify-center text-mist-50/60"
                      >
                        <ChevronIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {link.children && expanded && (
                    <ul className="mb-2 ml-3 flex flex-col gap-0.5 border-l border-mist-50/10 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-mist-50/60 hover:text-mist-50"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center bg-signal-500 px-5 py-2.5 text-sm font-medium text-white rounded-[var(--radius-sm)]"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
