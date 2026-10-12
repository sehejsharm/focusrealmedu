import type { ReactNode } from "react";
import { Container, Monogram, SectionHeader } from "./ui";

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const PILLARS = [
  {
    title: "Seamless Integration",
    body: "Runs natively on the interactive boards already in your classrooms. No new hardware, no parallel systems.",
    icon: icon(
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
      </>,
    ),
  },
  {
    title: "AI-Powered Personalization",
    body: "Learning paths that adapt to each student's pace and readiness, in real time.",
    icon: icon(
      <>
        <path d="M4 18c3 0 4-4 8-4s5-8 8-8" />
        <circle cx="4" cy="18" r="1.5" />
        <circle cx="20" cy="6" r="1.5" />
      </>,
    ),
  },
  {
    title: "Gamified Learning",
    body: "Points, badges, quests and school-wide narratives that make effort visible and worth it.",
    icon: icon(
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 13.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" />
      </>,
    ),
  },
  {
    title: "Real-Time Analytics",
    body: "Live insight into engagement and performance for educators, leadership and parents.",
    icon: icon(
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>,
    ),
  },
  {
    title: "Effortless Adoption",
    body: "Designed for minimal teacher training. If you can use the board, you can run Focus Realm.",
    icon: icon(
      <>
        <path d="M5 12.5 10 17 19 7" />
      </>,
    ),
  },
];

export function Solution() {
  return (
    <section id="solution" className="scroll-mt-16 bg-paper">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="02"
          label="Our Solution"
          title="The bridge between the classroom as it is and the classroom it could be."
          intro="Focus Realm sits on top of the hardware schools already own and turns it into a responsive, game-like learning environment, without asking teachers to start over."
        />

        {/* reality → potential bridge */}
        <div className="mt-14 rounded-2xl border border-line bg-white p-6 sm:p-8">
          <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Boring reality</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Static slides, one pace for all, report cards once a term, boards used as projectors.
              </p>
            </div>
            <div className="flex items-center gap-3 sm:px-4" aria-hidden="true">
              <span className="h-px flex-1 bg-gradient-to-r from-line to-brand-300 sm:w-16 sm:flex-none" />
              <Monogram className="h-10 w-10" />
              <span className="h-px flex-1 bg-brand-600 sm:w-16 sm:flex-none" />
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-600">Fun potential</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">
                Live quests, adaptive paths, visible progress, and boards that make every student a participant.
              </p>
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p, i) => (
            <li key={p.title} className="flex flex-col bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="text-brand-600">{p.icon}</span>
                <span className="tabular text-[13px] text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-8 text-[18px] font-semibold leading-snug tracking-[-0.015em]">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
