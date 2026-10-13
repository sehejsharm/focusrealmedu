"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE, Marquee, WordReveal } from "./motion";
import { Arrow, Container, NoteRef } from "./ui";

const TICKER = [
  "Interactive-board native",
  "AI-personalized learning paths",
  "XP, badges & school-wide narratives",
  "Live Progress Bar",
  "Real-time analytics",
  "Parent Portal",
  "NEP 2020 aligned",
  "5,000+ certification courses",
  "Minimal teacher training",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* drifting light fields */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] -top-[20%] h-[38rem] w-[38rem] rounded-full bg-brand-200/50 blur-[110px] animate-[drift_18s_ease-in-out_infinite]" />
        <div className="absolute right-[-12%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-brand-100/80 blur-[100px] animate-[drift_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--color-line)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <Container className="relative pb-14 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-[13px] font-medium text-brand-700 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              AI-powered LMS for Indian classrooms
            </motion.p>

            <h1 className="mt-7 text-[clamp(2.75rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.042em] text-ink">
              <WordReveal text="Engagement," className="block" delay={0.1} />
              <span className="block">
                <WordReveal text="engineered" className="text-brand-600" delay={0.22} />{" "}
                <WordReveal text="for" delay={0.3} />
              </span>
              <WordReveal text="the classroom." className="block" delay={0.38} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
              className="mt-7 max-w-[34rem] text-[18px] leading-relaxed text-ink-2 sm:text-[19px]"
            >
              Focus Realm is an AI-powered, gamified learning management system that runs on the interactive boards
              your institution already owns, built to fix disengagement in Indian classrooms and give educators their
              time back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.78 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-600 px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_-12px_rgba(45,108,223,0.8)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3.2s_ease-in-out_infinite]"
                />
                Request a Demo
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#product"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/80 px-6 py-3.5 text-[15px] font-medium text-ink backdrop-blur transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                See the Platform
              </motion.a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-6"
            >
              <div>
                <dt className="text-[13px] leading-snug text-muted">India&rsquo;s EdTech sector, projected</dt>
                <dd className="tabular mt-1 text-[clamp(1.75rem,3.4vw,2.4rem)] font-semibold tracking-[-0.03em] text-ink">
                  $30B
                  <NoteRef n={6} />
                </dd>
              </div>
              <div>
                <dt className="text-[13px] leading-snug text-muted">Global LMS market by 2030</dt>
                <dd className="tabular mt-1 text-[clamp(1.75rem,3.4vw,2.4rem)] font-semibold tracking-[-0.03em] text-ink">
                  $47.47B
                  <NoteRef n={5} />
                </dd>
              </div>
            </motion.dl>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          >
            <LiveBoard />
          </motion.div>
        </div>
      </Container>

      <div className="relative border-y border-line bg-white/60 py-4 text-[14px] font-medium text-ink-2 backdrop-blur">
        <Marquee items={TICKER} className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Live interactive-board preview (illustrative sample data)           */
/* ------------------------------------------------------------------ */

type TeamRow = { team: string; xp: number };

const TOASTS = [
  { title: "Badge unlocked", body: "Prism Builder · +120 XP" },
  { title: "Quest complete", body: "Mirror Maze · +80 XP" },
  { title: "Streak", body: "5 lessons in a row · +50 XP" },
  { title: "Class milestone", body: "Chapter 4 mastered · +200 XP" },
];

function LiveBoard() {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(reduce ? 72 : 8);
  const [teams, setTeams] = useState<TeamRow[]>([
    { team: "Team Orion", xp: 1240 },
    { team: "Team Vega", xp: 1180 },
    { team: "Team Lyra", xp: 990 },
  ]);
  const [pulse, setPulse] = useState([38, 52, 47, 64, 71, 68, 82, 88, 84, 91]);
  const [toast, setToast] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t0 = setTimeout(() => setProgress(72), 500);
    const p = setInterval(() => setProgress((v) => (v >= 96 ? 58 : v + 2 + Math.round(Math.random() * 3))), 2400);
    const l = setInterval(() => {
      setTeams((rows) => {
        const i = Math.floor(Math.random() * rows.length);
        return rows
          .map((r, j) => (j === i ? { ...r, xp: r.xp + 40 + Math.round(Math.random() * 110) } : r))
          .sort((a, b) => b.xp - a.xp);
      });
    }, 1900);
    const e = setInterval(() => setPulse((a) => [...a.slice(1), 45 + Math.round(Math.random() * 50)]), 1300);
    const t = setInterval(() => setToast((v) => (v + 1) % TOASTS.length), 3600);
    return () => {
      clearTimeout(t0);
      [p, l, e, t].forEach(clearInterval);
    };
  }, [reduce]);

  const max = Math.max(...teams.map((t) => t.xp));

  // pointer tilt
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 160, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 160, damping: 18 });

  return (
    <figure className="relative [perspective:1400px]">
      <motion.div
        ref={ref}
        onPointerMove={(e) => {
          if (reduce || e.pointerType !== "mouse" || !ref.current) return;
          const r = ref.current.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative rounded-[24px] border border-white/70 bg-white/70 p-2.5 shadow-[0_40px_80px_-40px_rgba(28,59,116,0.45)] backdrop-blur-xl"
      >
        <div className="overflow-hidden rounded-[16px] border border-line bg-paper">
          {/* board chrome */}
          <div className="flex items-center justify-between border-b border-line bg-white/60 px-4 py-3">
            <div className="flex items-center gap-2 text-[12px] font-medium text-ink-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Class 8B · Science · Live
            </div>
            <span className="flex gap-1" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
            </span>
          </div>

          <div className="grid gap-3 p-4">
            <div className="rounded-xl border border-line bg-white p-4" style={{ transform: "translateZ(30px)" }}>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Today&rsquo;s quest</p>
              <p className="mt-1 text-[17px] font-semibold tracking-[-0.01em]">Light &amp; Reflection</p>
              <div className="mt-4 flex items-center justify-between text-[12px] text-ink-2">
                <span>Live progress</span>
                <span className="tabular font-medium text-brand-700">{progress}%</span>
              </div>
              <div className="relative mt-1.5 h-2 overflow-hidden rounded-full bg-brand-50">
                <motion.div
                  className="relative h-2 overflow-hidden rounded-full bg-brand-600"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  <span className="absolute inset-y-0 left-0 w-1/3 bg-white/35 animate-[shimmer_2.4s_ease-in-out_infinite]" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 rounded-xl border border-line bg-white p-4" style={{ transform: "translateZ(20px)" }}>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Leaderboard</p>
                <ul className="mt-3 space-y-2.5">
                  {teams.map((r, i) => (
                    <motion.li key={r.team} layout transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-ink">
                          <span className="tabular mr-1.5 text-muted">{i + 1}</span>
                          {r.team}
                        </span>
                        <motion.span
                          key={r.xp}
                          initial={{ color: "#2d6cdf" }}
                          animate={{ color: "#3d4a63" }}
                          transition={{ duration: 1.2 }}
                          className="tabular"
                        >
                          {r.xp.toLocaleString("en-IN")} XP
                        </motion.span>
                      </div>
                      <div className="mt-1 h-1 rounded-full bg-brand-50">
                        <motion.div
                          className={`h-1 rounded-full ${i === 0 ? "bg-brand-600" : "bg-brand-300"}`}
                          animate={{ width: `${(r.xp / max) * 100}%` }}
                          transition={{ duration: 0.8, ease: EASE }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 flex flex-col rounded-xl border border-line bg-white p-4" style={{ transform: "translateZ(20px)" }}>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Engagement</p>
                <div className="mt-auto flex h-16 items-end gap-[3px] pt-3">
                  {pulse.map((h, i) => (
                    <motion.span
                      key={i}
                      className={`flex-1 rounded-t-[2px] ${i === pulse.length - 1 ? "bg-brand-600" : "bg-brand-200"}`}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-14" style={{ transform: "translateZ(40px)" }}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={toast}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0 flex items-center gap-3 rounded-xl bg-brand-600 px-4 text-white"
                >
                  <motion.span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15"
                    initial={{ rotate: -40, scale: 0.6 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                      <path d="M8 1.5 9.9 5.4l4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6z" fill="currentColor" />
                    </svg>
                  </motion.span>
                  <p className="text-[13px] leading-snug">
                    <span className="font-semibold">{TOASTS[toast].title}:</span> {TOASTS[toast].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* floating chips */}
        <motion.div
          aria-hidden="true"
          className="absolute -top-8 right-8 hidden rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-[0_20px_40px_-20px_rgba(28,59,116,0.35)] sm:block"
          style={{ transform: "translateZ(70px)" }}
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted">Adaptive path</p>
          <p className="mt-0.5 text-[13px] font-semibold text-ink">Level 3 → 4 unlocked</p>
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-10 -left-6 hidden rounded-2xl bg-ink px-3.5 py-2.5 text-white shadow-[0_20px_40px_-20px_rgba(14,26,47,0.6)] sm:block"
          style={{ transform: "translateZ(80px)" }}
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-brand-200">Admin time saved</p>
          <p className="tabular mt-0.5 text-[13px] font-semibold">−4.5 hrs this week</p>
        </motion.div>
      </motion.div>
      <figcaption className="mt-4 text-[12px] text-muted sm:text-right">
        Illustrative view of a live lesson on a classroom interactive board.
      </figcaption>
    </figure>
  );
}
