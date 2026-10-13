"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { CountUp, EASE, Reveal } from "./motion";
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
        <span className="mt-3 block h-1.5 max-w-[14rem] overflow-hidden rounded-full bg-brand-100" aria-hidden="true">
          <motion.span
            className="block h-1.5 rounded-full bg-brand-600"
            initial={{ width: "8%" }}
            whileInView={{ width: ["8%", "64%", "52%", "78%"] }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
          />
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
            <Reveal className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-2xl bg-brand-600 p-7 text-white">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-brand-400/50 blur-3xl animate-[drift_14s_ease-in-out_infinite]"
                />
                <p className="relative text-xs font-medium uppercase tracking-[0.14em] text-brand-100">
                  Per teacher, per month
                </p>
                <p className="tabular relative mt-4 whitespace-nowrap text-[clamp(3.5rem,5.6vw,4.75rem)] font-semibold leading-none tracking-[-0.05em]">
                  <CountUp to={15} duration={1.2} />–<CountUp to={20} duration={1.6} />
                  <span className="ml-2 text-[0.35em] font-medium tracking-[-0.01em]">hrs</span>
                </p>
                <p className="relative mt-4 text-[16px] leading-relaxed text-brand-50">
                  reclaimed through admin automation, and returned to teaching.
                </p>
                {/* hour blocks filling in */}
                <div className="relative mt-6 grid grid-cols-10 gap-1" aria-hidden="true">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="h-2.5 rounded-[3px] bg-white"
                      initial={{ opacity: 0.15 }}
                      whileInView={{ opacity: i < 15 ? 0.95 : 0.5 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* old reality vs focus realm */}
          <div className="lg:col-span-8">
            <div className="hidden grid-cols-[9rem_1fr_1fr] gap-6 border-b border-line pb-3 text-xs font-medium uppercase tracking-[0.14em] md:grid">
              <span className="text-muted">Area</span>
              <span className="text-muted">The old reality</span>
              <span className="text-brand-600">With Focus Realm</span>
            </div>
            <ul>
              {ROWS.map((r, idx) => (
                <motion.li
                  key={r.area}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                  className="group relative grid gap-3 border-b border-line py-6 md:grid-cols-[9rem_1fr_1fr] md:gap-6"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-x-4 inset-y-1 -z-0 rounded-xl bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <motion.p
                    className="relative text-[15px] font-semibold tracking-[-0.01em]"
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    {r.area}
                  </motion.p>
                  <div className="relative flex gap-3">
                    <span className="mt-[3px] text-[11px] font-medium uppercase tracking-[0.12em] text-muted md:hidden">
                      Before
                    </span>
                    <p className="text-[15px] leading-relaxed text-muted">
                      <motion.span
                        className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat [background-position:0_58%] [box-decoration-break:clone]"
                        variants={{ hidden: { backgroundSize: "0% 1px" }, show: { backgroundSize: "100% 1px" } }}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.25 + idx * 0.02 }}
                      >
                        {r.before}
                      </motion.span>
                    </p>
                  </div>
                  <motion.div
                    className="relative flex gap-3"
                    variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
                  >
                    <motion.svg
                      viewBox="0 0 16 16"
                      className="mt-1 h-4 w-4 shrink-0 text-brand-600"
                      fill="none"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="m3 8.5 3.2 3L13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                      />
                    </motion.svg>
                    <div className="text-[15px] leading-relaxed text-ink">{r.after}</div>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
