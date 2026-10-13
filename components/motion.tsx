"use client";

import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "figure";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: (stagger: number = 0.08) => ({ transition: { staggerChildren: stagger } }),
};
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={staggerParent}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = motion[as];
  return (
    <Comp className={className} variants={staggerChild}>
      {children}
    </Comp>
  );
}

/** Number that counts up from 0 when it enters the viewport. */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const format = (v: number) =>
    `${prefix}${v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
  const [text, setText] = useState(format(to));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setText(format(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to]);

  // Before it is in view, show 0 so the count is visible; SSR shows the final value for no-JS readers.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const display = mounted && !inView && !reduce ? format(0) : text;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/** Headline that reveals word by word from behind a mask. */
export function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.07 }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Word-by-word reveal that waits until the heading scrolls into view. */
export function WordRevealInView({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 0.9, ease: EASE } } }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Horizontal rule that draws itself left → right on view. */
export function DrawLine({ className }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block origin-left ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: EASE }}
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand-600"
      style={{ scaleX }}
    />
  );
}

/** Infinite horizontal ticker. */
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-10 whitespace-nowrap">
          <span>{t}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <span className="sr-only">{items.join(", ")}</span>
      <div className="flex animate-[marquee_38s_linear_infinite] group-hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  );
}
