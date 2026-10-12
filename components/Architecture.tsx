import { Container, SectionHeader } from "./ui";

const CORE = [
  { title: "Course & content management", body: "Curriculum, lessons and resources in one place." },
  { title: "Assignments & grading", body: "Set, submit and assess without the paperwork." },
  { title: "Smart attendance", body: "Captured in seconds, not the first ten minutes of class." },
  { title: "Centralized notices", body: "One channel for every announcement on campus." },
];

const MODULES = [
  { title: "AI Analytics Engine", body: "Spots disengagement and learning gaps early." },
  { title: "Faculty Development Module", body: "Continuous growth paths for educators." },
  { title: "Gamification Engine", body: "Points, badges and leaderboards." },
  { title: "Parent Portal", body: "Live visibility into progress at home." },
  { title: "Dynamic Timetable & Goal Setting", body: "Schedules and student goals that adapt." },
];

const SKILLS = [
  { name: "Data literacy", v: 82 },
  { name: "Communication", v: 68 },
  { name: "Python", v: 46 },
];

function LayerTag({ n, role, invert = false }: { n: string; role: string; invert?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] ${
        invert ? "text-brand-100" : "text-brand-700"
      }`}
    >
      <span className="tabular">Layer {n}</span>
      <span className={`h-px w-5 ${invert ? "bg-white/40" : "bg-brand-300"}`} aria-hidden="true" />
      {role}
    </p>
  );
}

export function Architecture() {
  return (
    <section id="product" className="scroll-mt-16">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="03"
          label="Product Architecture"
          title={
            <>
              One ecosystem.
              <br />
              <span className="text-brand-600">Three layers.</span>
            </>
          }
          intro="Start with the foundation every institution needs, switch on the modules that fit your campus, and give students a path from classroom to career."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[56px_1fr]">
          {/* progression axis */}
          <div className="hidden lg:flex lg:flex-col lg:items-center" aria-hidden="true">
            <svg viewBox="0 0 12 12" className="h-3 w-3 text-brand-600">
              <path d="M6 1 11 9H1z" fill="currentColor" />
            </svg>
            <span className="w-px flex-1 bg-gradient-to-b from-brand-600 to-brand-200" />
            <span className="mt-4 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] text-muted [writing-mode:vertical-rl] rotate-180">
              Foundation → Innovation → Employability
            </span>
          </div>

          {/* Stack: DOM order is foundation-first (mobile reads top-down); desktop builds upward */}
          <div className="flex flex-col gap-3 lg:flex-col-reverse">
            {/* Layer 01 — Core Academic Hub */}
            <article className="relative overflow-hidden rounded-2xl bg-brand-600 p-6 text-white sm:p-8">
              <div className="relative grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <LayerTag n="01" role="The foundation" invert />
                  <h3 className="mt-4 text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-[-0.025em]">
                    Core Academic Hub
                  </h3>
                  <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-brand-50">
                    The everyday operating system of teaching and learning, included for every institution.
                  </p>
                </div>
                <ul className="grid gap-px overflow-hidden rounded-xl bg-white/20 sm:grid-cols-2 lg:col-span-8">
                  {CORE.map((c) => (
                    <li key={c.title} className="bg-brand-600 p-5">
                      <p className="text-[16px] font-semibold">{c.title}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-brand-100">{c.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Layer 02 — Micro-Services */}
            <article className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8 lg:mx-8">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <LayerTag n="02" role="The innovation layer" />
                  <h3 className="mt-4 text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-[-0.025em]">
                    Micro-Services
                  </h3>
                  <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-2">
                    Optional modules. Switch on what your campus needs, when it needs it.
                  </p>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2 lg:col-span-8">
                  {MODULES.map((m, i) => (
                    <li
                      key={m.title}
                      className={`flex items-start gap-3 rounded-xl border border-brand-200 bg-white p-4 ${
                        i === MODULES.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <span
                        className="mt-0.5 inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-brand-600 p-0.5"
                        aria-hidden="true"
                      >
                        <span className="ml-auto h-4 w-4 rounded-full bg-white" />
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold">{m.title}</span>
                        <span className="mt-0.5 block text-[14px] leading-relaxed text-ink-2">{m.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Layer 03 — Employability */}
            <article className="rounded-2xl border-2 border-brand-600 bg-white p-6 sm:p-8 lg:mx-16">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <LayerTag n="03" role="The outcome" />
                  <h3 className="mt-4 text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-[-0.025em]">
                    The Employability Layer
                  </h3>
                  <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-2">
                    From classroom learning to career-ready credentials.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                  <div>
                    <p className="tabular text-[clamp(3rem,5vw,4rem)] font-semibold leading-none tracking-[-0.045em] text-brand-600">
                      5,000+
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                      industry-recognized, dual-certification courses through global partner libraries.
                    </p>
                  </div>
                  <div className="rounded-xl border border-line bg-paper p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] font-semibold">Skill-Tracker Dashboard</p>
                      <span className="whitespace-nowrap rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-medium text-brand-700">
                        Digital resume
                      </span>
                    </div>
                    <ul className="mt-4 space-y-3" aria-label="Example skills">
                      {SKILLS.map((s) => (
                        <li key={s.name}>
                          <div className="flex justify-between text-[12px] text-ink-2">
                            <span>{s.name}</span>
                            <span className="tabular">{s.v}%</span>
                          </div>
                          <div className="mt-1 h-1.5 rounded-full bg-brand-100">
                            <div className="h-1.5 rounded-full bg-brand-600" style={{ width: `${s.v}%` }} />
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[12px] leading-snug text-muted">
                      Builds a verified skills profile recruiters can read at a glance.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
