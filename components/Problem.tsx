import { Container, NoteRef, SectionHeader } from "./ui";

const GAPS = [
  {
    title: "Engagement",
    body: "Built to store content, not to hold attention. Students scroll past it.",
  },
  {
    title: "Adaptability",
    body: "One pace for every learner, regardless of readiness or performance.",
  },
  {
    title: "Integration",
    body: "Disconnected from the interactive boards already installed on campus.",
  },
];

const STATS = [
  {
    value: "55%",
    note: 1,
    body: (
      <>
        of Indian teachers report high burnout, with up to <strong className="font-semibold text-white">40%</strong> of
        their day spent on non-teaching admin work.
      </>
    ),
  },
  { value: "87.9%", note: 2, body: <>of students describe their curriculum as outdated or rote.</> },
  { value: "73%", note: 3, body: <>of Indian teens report high academic stress.</> },
  {
    value: "67%",
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

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {GAPS.map((g) => (
            <div key={g.title} className="bg-white p-6 lg:p-7">
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
          ))}
        </div>
      </Container>

      {/* full-bleed stat strip */}
      <div className="bg-brand-600 text-white">
        <Container className="py-16 lg:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-100">
            The cost of disengagement, in numbers
          </p>
          <dl className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.value} className="border-t border-white/25 pt-6">
                <dt className="sr-only">{s.value}</dt>
                <dd>
                  <span className="tabular block text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.045em]">
                    {s.value}
                    <NoteRef n={s.note} invert />
                  </span>
                  <span className="mt-4 block max-w-[17rem] text-[15px] leading-relaxed text-brand-50">{s.body}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
