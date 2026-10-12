import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** FR monogram — stand-in drawn from the brand mark; swap for the official SVG when available. */
export function Monogram({
  className = "h-8 w-8",
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "white" | "outline";
}) {
  const bg = tone === "brand" ? "#2d6cdf" : tone === "white" ? "#ffffff" : "none";
  const fg = tone === "brand" ? "#ffffff" : tone === "white" ? "#2d6cdf" : "currentColor";
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {tone === "outline" ? (
        <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      ) : (
        <rect width="32" height="32" rx="7" fill={bg} />
      )}
      <path fill={fg} d="M7 8h7v3h-4v3h3.5v3H10v7H7z" />
      <path
        fill={fg}
        fillRule="evenodd"
        d="M16 8h5a4.5 4.5 0 0 1 1.7 8.66L26 24h-3.4l-3-7H19v7h-3zm3 3v3.4h2a1.7 1.7 0 0 0 0-3.4z"
      />
    </svg>
  );
}

export function Wordmark({ invert = false }: { invert?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Monogram className="h-8 w-8" tone={invert ? "white" : "brand"} />
      <span className={`text-[17px] font-semibold tracking-[-0.02em] ${invert ? "text-white" : "text-ink"}`}>
        Focus Realm
        <span className={`ml-1.5 font-normal ${invert ? "text-brand-100" : "text-muted"}`}>Education</span>
      </span>
    </span>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="border-t border-line pt-6">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        <span className="tabular text-brand-600">{index}</span>
        <span className="h-px w-6 bg-line" aria-hidden="true" />
        {label}
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:gap-12">
        <h2 className="text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.032em] text-ink lg:col-span-7">
          {title}
        </h2>
        {intro && (
          <p className="text-[17px] leading-relaxed text-ink-2 lg:col-span-5 lg:self-end lg:pb-1.5">{intro}</p>
        )}
      </div>
    </header>
  );
}

export function NoteRef({ n, invert = false }: { n: number; invert?: boolean }) {
  return (
    <sup className="relative top-[0.15em] ml-1 align-top text-[13px] font-medium leading-none tracking-normal">
      <a
        href={`#note-${n}`}
        className={`tabular no-underline hover:underline ${invert ? "text-brand-100" : "text-brand-600"}`}
        aria-label={`Note ${n}`}
      >
        {n}
      </a>
    </sup>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "white" | "ghost-white";
  className?: string;
}) {
  const styles = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary: "border border-line bg-white text-ink hover:border-brand-300 hover:text-brand-700",
    white: "bg-white text-brand-700 hover:bg-brand-50",
    "ghost-white": "border border-white/35 text-white hover:bg-white/10",
  }[variant];
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium transition-colors ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
