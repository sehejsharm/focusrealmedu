import { Container, SectionHeader } from "./ui";

const SEGMENTS = ["Universities", "Colleges", "Schools"];
const ROLES = ["Deans", "Directors", "Boards of Management", "Principals"];

export function Audience() {
  return (
    <section id="audience" className="scroll-mt-16 bg-paper">
      <Container className="py-20 lg:py-24">
        <SectionHeader
          index="06"
          label="Who we serve"
          title="Built for the people who shape campus learning."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          <div className="bg-white p-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Institutions</p>
            <ul className="mt-4 space-y-1">
              {SEGMENTS.map((s) => (
                <li key={s} className="text-[24px] font-semibold tracking-[-0.025em]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Decision-makers</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <li key={r} className="rounded-full border border-line px-3 py-1.5 text-[14px] text-ink-2">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-2">
              Affordable, per-student pricing, designed to scale from a single school to a multi-campus university.
            </p>
          </div>
          <div className="bg-brand-50 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-700">Currently</p>
            <p className="mt-4 text-[20px] font-medium leading-snug tracking-[-0.015em] text-ink">
              In discussion with <span className="font-semibold text-brand-700">JECRC University</span> on bringing
              Focus Realm to campus.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
