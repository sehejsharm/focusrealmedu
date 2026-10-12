import type { ReactNode } from "react";
import { Container, SectionHeader } from "./ui";

const ROWS: { area: string; before: string; after: ReactNode }[] = [
  {
    area: "Teacher time",
    before: "Hours lost every week to attendance, grading and paperwork.",
    after: "15–20 hours a month handed back to every teacher through admin automation.",
  },
  {
    area: "Motivation",
    before: "Effort recognised only through test scores.",
    after: "An integrated gamification engine built on School-Wide Narratives and XP.",
  },
  {
    area: "Pacing",
    before: "One pace for the whole room. Some are lost, others bored.",
    after: "Adaptive learning paths that adjust difficulty to real-time performance.",
  },
  {
    area: "Reporting",
    before: "A static report card, once a term.",
    after: (
      <>
        A <strong className="font-semibold">Live Progress Bar</strong> students, teachers and parents can follow every day.
        <span className="mt-3 block h-1.5 max-w-[14rem] rounded-full bg-brand-100" aria-hidden="true">
          <span className="block h-1.5 w-[64%] rounded-full bg-brand-600" />
        </span>
      </>
    ),
  },
  {
    area: "Holistic growth",
    before: "Soft skills mentioned, never measured.",
    after: "NEP 2020-aligned holistic development, with data-backed proof of soft skills.",
  },
];

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-16 bg-paper">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="04"
          label="How Focus Realm makes it work"
          title={
            <>
              From static to <span className="text-brand-600">live.</span>
            </>
          }
          intro="What changes on campus when engagement, pacing and progress stop being guesswork."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* headline outcome */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-brand-600 p-7 text-white lg:sticky lg:top-24">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-100">Per teacher, per month</p>
              <p className="tabular mt-4 whitespace-nowrap text-[clamp(3.5rem,5.6vw,4.75rem)] font-semibold leading-none tracking-[-0.05em]">
                15–20
                <span className="ml-2 text-[0.35em] font-medium tracking-[-0.01em]">hrs</span>
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-brand-50">
                reclaimed through admin automation, and returned to teaching.
              </p>
            </div>
          </div>

          {/* old reality vs focus realm */}
          <div className="lg:col-span-8">
            <div className="hidden grid-cols-[9rem_1fr_1fr] gap-6 border-b border-line pb-3 text-xs font-medium uppercase tracking-[0.14em] md:grid">
              <span className="text-muted">Area</span>
              <span className="text-muted">The old reality</span>
              <span className="text-brand-600">With Focus Realm</span>
            </div>
            <ul>
              {ROWS.map((r) => (
                <li
                  key={r.area}
                  className="grid gap-3 border-b border-line py-6 md:grid-cols-[9rem_1fr_1fr] md:gap-6"
                >
                  <p className="text-[15px] font-semibold tracking-[-0.01em]">{r.area}</p>
                  <div className="flex gap-3">
                    <span className="mt-[3px] text-[11px] font-medium uppercase tracking-[0.12em] text-muted md:hidden">
                      Before
                    </span>
                    <p className="text-[15px] leading-relaxed text-muted line-through decoration-line decoration-1">
                      {r.before}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-brand-600" fill="none" aria-hidden="true">
                      <path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="text-[15px] leading-relaxed text-ink">{r.after}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
