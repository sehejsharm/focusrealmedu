import { CountUp, Reveal, Stagger, StaggerItem } from "./motion";
import { Container, NoteRef, SectionHeader } from "./ui";

const GAPS = [
  { title: "Engagement", body: "Built to store content, not to hold attention. Students scroll past it." },
  { title: "Adaptability", body: "One pace for every learner, regardless of readiness or performance." },
  { title: "Integration", body: "Disconnected from the interactive boards already installed on campus." },
];

const STATS = [
  {
    to: 55,
    decimals: 0,
    note: 1,
    body: (
      <>
        of Indian teachers report high burnout, with up to <strong className="font-semibold text-white">40%</strong> of
        their day spent on non-teaching admin work.
      </>
    ),
  },
  { to: 87.9, decimals: 1, note: 2, body: <>of students describe their curriculum as outdated or rote.</> },
  { to: 73, decimals: 0, note: 3, body: <>of Indian teens report high academic stress.</> },
  {
    to: 67,
    decimals: 0,
    note: 4,
    body: <>of students feel disengaged when instruction pace doesn&rsquo;t match their readiness.</>,
  },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-16">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="01"
          label="The Problem"
          title={
            <>
              Classrooms went digital.
              <br className="hidden sm:block" /> <span className="text-muted">Learning platforms didn&rsquo;t.</span>
            </>
          }
          intro="Traditional LMS platforms lack the engagement, adaptability and integration that modern classrooms, and the interactive technology already inside them, demand."
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-3" stagger={0.12}>
          {GAPS.map((g) => (
            <StaggerItem key={g.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-30px_rgba(28,59,116,0.45)] lg:p-7">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100"
                />
                <p className="flex items-center gap-2 text-[13px] font-medium text-muted">
                  <svg viewBox="0 0 16 16" className="h-4 w-4 text-brand-600" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5.5 8h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Missing
                </p>
                <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em]">{g.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{g.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      {/* full-bleed stat strip */}
      <div className="relative overflow-hidden bg-brand-600 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-400/40 blur-[90px] animate-[drift_20s_ease-in-out_infinite]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 left-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-800/50 blur-[100px] animate-[drift_24s_ease-in-out_infinite_reverse]"
        />
        <Container className="relative py-16 lg:py-24">
          <Reveal y={12}>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-100">
              The cost of disengagement, in numbers
            </p>
          </Reveal>
          <Stagger as="dl" className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {STATS.map((s) => (
              <StaggerItem key={s.note} className="border-t border-white/25 pt-6">
                <dt className="sr-only">{s.to}%</dt>
                <dd>
                  <span className="tabular block text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.045em]">
                    <CountUp to={s.to} decimals={s.decimals} suffix="%" />
                    <NoteRef n={s.note} invert />
                  </span>
                  <span className="mt-4 block max-w-[17rem] text-[15px] leading-relaxed text-brand-50">{s.body}</span>
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </div>
    </section>
  );
}
