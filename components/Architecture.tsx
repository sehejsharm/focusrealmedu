"use client";

import { motion, type Variants } from "motion/react";
import { CountUp, EASE } from "./motion";
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

/* Layers enter in DOM order (foundation first), each one building on the last. */
const stack: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.35 } } };
const layer: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: EASE } },
};
const inner: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } } };
const cell: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

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

function Toggle() {
  return (
    <motion.span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5"
      variants={{ hidden: { backgroundColor: "#dde8fc" }, show: { backgroundColor: "#2d6cdf" } }}
      transition={{ duration: 0.35, delay: 0.25 }}
    >
      <motion.span
        className="h-4 w-4 rounded-full bg-white shadow-sm"
        variants={{ hidden: { x: 0 }, show: { x: 16 } }}
        transition={{ type: "spring", stiffness: 500, damping: 28, delay: 0.25 }}
      />
    </motion.span>
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
            <motion.svg
              viewBox="0 0 12 12"
              className="h-3 w-3 text-brand-600"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M6 1 11 9H1z" fill="currentColor" />
            </motion.svg>
            <motion.span
              className="w-px flex-1 origin-bottom bg-gradient-to-b from-brand-600 to-brand-200"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
            />
            <span className="mt-4 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] text-muted [writing-mode:vertical-rl] rotate-180">
              Foundation → Innovation → Employability
            </span>
          </div>

          {/* Stack: DOM order is foundation-first (mobile reads top-down); desktop builds upward */}
          <motion.div
            className="flex flex-col gap-3 lg:flex-col-reverse"
            variants={stack}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          >
            {/* Layer 01 — Core Academic Hub */}
            <motion.article
              variants={layer}
              className="relative overflow-hidden rounded-2xl bg-brand-600 p-6 text-white shadow-[0_30px_60px_-35px_rgba(31,71,149,0.8)] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl animate-[drift_16s_ease-in-out_infinite]"
              />
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
                <motion.ul variants={inner} className="grid gap-2 sm:grid-cols-2 lg:col-span-8">
                  {CORE.map((c) => (
                    <motion.li
                      key={c.title}
                      variants={cell}
                      className="rounded-xl border border-white/15 bg-white/[0.06] p-5 transition-colors duration-300 hover:bg-white/[0.14]"
                    >
                      <p className="text-[16px] font-semibold">{c.title}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-brand-100">{c.body}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.article>

            {/* Layer 02 — Micro-Services */}
            <motion.article variants={layer} className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8 lg:mx-8">
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
                <motion.ul variants={inner} className="grid gap-2.5 sm:grid-cols-2 lg:col-span-8">
                  {MODULES.map((m, i) => (
                    <motion.li
                      key={m.title}
                      variants={cell}
                      whileHover={{ y: -3 }}
                      className={`flex items-start gap-3 rounded-xl border border-brand-200 bg-white p-4 transition-shadow duration-300 hover:shadow-[0_18px_36px_-24px_rgba(28,59,116,0.45)] ${
                        i === MODULES.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <Toggle />
                      <span>
                        <span className="block text-[15px] font-semibold">{m.title}</span>
                        <span className="mt-0.5 block text-[14px] leading-relaxed text-ink-2">{m.body}</span>
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.article>

            {/* Layer 03 — Employability */}
            <motion.article
              variants={layer}
              className="relative overflow-hidden rounded-2xl border-2 border-brand-600 bg-white p-6 sm:p-8 lg:mx-16"
            >
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
                <motion.div variants={inner} className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                  <motion.div variants={cell}>
                    <p className="tabular text-[clamp(3rem,5vw,4rem)] font-semibold leading-none tracking-[-0.045em] text-brand-600">
                      <CountUp to={5000} suffix="+" duration={2} />
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                      industry-recognized, dual-certification courses through global partner libraries.
                    </p>
                  </motion.div>
                  <motion.div variants={cell} className="rounded-xl border border-line bg-paper p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[13px] font-semibold">Skill-Tracker Dashboard</p>
                      <span className="whitespace-nowrap rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-medium text-brand-700">
                        Digital resume
                      </span>
                    </div>
                    <ul className="mt-4 space-y-3" aria-label="Example skills">
                      {SKILLS.map((s, i) => (
                        <li key={s.name}>
                          <div className="flex justify-between text-[12px] text-ink-2">
                            <span>{s.name}</span>
                            <span className="tabular">{s.v}%</span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-brand-100">
                            <motion.div
                              className="h-1.5 rounded-full bg-brand-600"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${s.v}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: EASE, delay: 0.9 + i * 0.15 }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[12px] leading-snug text-muted">
                      Builds a verified skills profile recruiters can read at a glance.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
