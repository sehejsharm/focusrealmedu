import { NAV_LINKS, NOTES } from "@/lib/content";
import { Container, Wordmark } from "./ui";

// TODO: replace "#" with the real profile URLs.
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.85-7.78a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0zM12 3.6c2.73 0 3.06.01 4.13.06 2.78.13 4.08 1.45 4.21 4.21.05 1.08.06 1.4.06 4.13s-.01 3.06-.06 4.13c-.13 2.76-1.43 4.08-4.21 4.21-1.07.05-1.4.06-4.13.06s-3.06-.01-4.13-.06c-2.79-.13-4.08-1.45-4.21-4.21C3.61 15.06 3.6 14.73 3.6 12s.01-3.05.06-4.13C3.79 5.1 5.09 3.79 7.87 3.66 8.94 3.61 9.27 3.6 12 3.6z",
  },
  {
    label: "X",
    href: "#",
    path: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.18h1.7L7.4 4.73H5.57z",
  },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
              The AI-powered, gamified LMS built for Indian classrooms.
            </p>
            <ul className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-brand-300 hover:text-brand-600"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Explore</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-2 hover:text-brand-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Notes &amp; sources</p>
            <ol className="mt-4 space-y-2 text-[12px] leading-relaxed text-muted">
              {NOTES.map((n) => (
                <li key={n.id} id={`note-${n.id}`} className="scroll-mt-24 grid grid-cols-[1.25rem_1fr]">
                  <span className="tabular text-brand-600">{n.id}</span>
                  <span>
                    {n.text} {n.source}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[13px] text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Focus Realm. All rights reserved.</p>
          <p>focusrealm.org</p>
        </div>
      </Container>
    </footer>
  );
}
