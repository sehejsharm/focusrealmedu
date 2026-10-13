"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { EASE, ScrollProgress } from "./motion";
import { Container, Wordmark } from "./ui";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-line bg-white/80 backdrop-blur-xl" : "border-b border-transparent bg-white/0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label="Focus Realm Education, back to top">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[14px]">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    className={`relative z-10 block rounded-full px-3.5 py-1.5 transition-colors ${
                      isActive ? "text-brand-700" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-50"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-[14px] font-medium text-white shadow-[0_6px_20px_-8px_rgba(45,108,223,0.7)] transition-colors hover:bg-brand-700 sm:inline-flex"
          >
            Request a Demo
          </motion.a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
              <motion.path
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                d="M3 7h14"
                initial={false}
                animate={{ d: open ? "M5 5l10 10" : "M3 7h14" }}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                d="M3 13h14"
                initial={false}
                animate={{ d: open ? "M15 5 5 15" : "M3 13h14" }}
                transition={{ duration: 0.25 }}
              />
            </svg>
          </button>
        </div>
      </Container>
      <ScrollProgress />

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="overflow-hidden border-t border-line bg-white lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <Container className="py-4">
              <ul className="divide-y divide-line">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: EASE }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 text-[17px] text-ink"
                    >
                      {l.label}
                      <span className="tabular text-[12px] text-muted">0{i + 1}</span>
                    </a>
                  </motion.li>
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
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
