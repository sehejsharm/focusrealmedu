import { Arrow, Container, SectionHeader } from "./ui";
import { Stagger, StaggerItem } from "./motion";

const SEGMENTS = ["Universities", "Colleges", "Schools"];
const ROLES = ["Deans", "Directors", "Boards of Management", "Principals"];

export function Audience() {
  return (
    <section id="audience" className="scroll-mt-16 bg-paper">
      <Container className="py-20 lg:py-24">
        <SectionHeader index="06" label="Who we serve" title="Built for the people who shape campus learning." />

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" stagger={0.12}>
          <StaggerItem className="rounded-2xl border border-line bg-white p-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Institutions</p>
            <ul className="mt-4 space-y-1">
              {SEGMENTS.map((s) => (
                <li
                  key={s}
                  className="group flex items-center gap-3 text-[24px] font-semibold tracking-[-0.025em] transition-colors hover:text-brand-600"
                >
                  <span className="h-px w-0 bg-brand-600 transition-all duration-300 group-hover:w-6" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="rounded-2xl border border-line bg-white p-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Decision-makers</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-line px-3 py-1.5 text-[14px] text-ink-2 transition-colors duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-2">
              Affordable, per-student pricing, designed to scale from a single school to a multi-campus university.
            </p>
          </StaggerItem>

          <StaggerItem>
            <a
              href="#contact"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-brand-600 p-7 text-white"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-400/50 blur-3xl transition-transform duration-700 group-hover:scale-150"
              />
              <p className="relative text-xs font-medium uppercase tracking-[0.14em] text-brand-100">For your campus</p>
              <p className="relative mt-4 text-[22px] font-semibold leading-snug tracking-[-0.02em]">
                See Focus Realm running on the boards you already have.
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-[15px] font-medium">
                Book a walkthrough
                <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </a>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
