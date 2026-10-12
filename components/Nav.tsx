"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { Container, Wordmark } from "./ui";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-[border-color] ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label="Focus Realm Education, back to top">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[14px] text-ink-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-brand-600">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-brand-700 sm:inline-flex"
          >
            Request a Demo
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <Container className="py-4">
            <ul className="divide-y divide-line">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[16px] text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex justify-center rounded-full bg-brand-600 px-4 py-3 text-[15px] font-medium text-white"
            >
              Request a Demo
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
