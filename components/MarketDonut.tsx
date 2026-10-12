"use client";

import { useState } from "react";

const DATA = [
  { label: "Global LMS Market Growth", value: 40, color: "#1f4795" },
  { label: "India’s EdTech Boom", value: 25, color: "#2d6cdf" },
  { label: "Focus Realm’s Advantage", value: 20, color: "#6e9bee" },
  { label: "Gaps in the Market", value: 15, color: "#b6cdf6" },
];

const SIZE = 240;
const R = 92;
const STROKE = 34;
const C = 2 * Math.PI * R;
const GAP = 3; // px of surface between segments

export function MarketDonut() {
  const [active, setActive] = useState<number | null>(null);
  const total = DATA.reduce((s, d) => s + d.value, 0);

  let offset = 0;
  const segments = DATA.map((d, i) => {
    const len = (d.value / total) * C;
    const seg = { ...d, i, dash: Math.max(len - GAP, 0), offset };
    offset += len;
    return seg;
  });

  const shown = active === null ? null : DATA[active];

  return (
    <figure className="grid items-center gap-10 sm:grid-cols-[minmax(0,240px)_1fr]">
      <div className="relative mx-auto w-full max-w-[240px]">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-auto w-full" role="img" aria-labelledby="donut-title">
          <title id="donut-title">
            Market opportunity breakdown:{" "}
            {DATA.map((d) => `${d.label} ${d.value}%`).join(", ")}
          </title>
          <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
            {segments.map((s) => (
              <circle
                key={s.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                fill="none"
                stroke={s.color}
                strokeWidth={active === s.i ? STROKE + 6 : STROKE}
                strokeDasharray={`${s.dash} ${C - s.dash}`}
                strokeDashoffset={-s.offset}
                className="cursor-pointer transition-[stroke-width,opacity] duration-200"
                opacity={active === null || active === s.i ? 1 : 0.35}
                onMouseEnter={() => setActive(s.i)}
                onMouseLeave={() => setActive(null)}
              />
            ))}
          </g>
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
          {shown ? (
            <>
              <span className="tabular text-[2.4rem] font-semibold leading-none tracking-[-0.04em]">{shown.value}%</span>
              <span className="mt-2 text-[12px] leading-snug text-ink-2">{shown.label}</span>
            </>
          ) : (
            <>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">Opportunity</span>
              <span className="mt-1 text-[13px] leading-snug text-ink-2">Hover a segment</span>
            </>
          )}
        </div>
      </div>

      <figcaption>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Market opportunity breakdown, %
        </p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {DATA.map((d, i) => (
            <li key={d.label}>
              <button
                type="button"
                className={`flex w-full items-center gap-3 py-3 text-left transition-opacity ${
                  active === null || active === i ? "opacity-100" : "opacity-50"
                }`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <span className="h-3 w-3 shrink-0 rounded-[3px]" style={{ background: d.color }} aria-hidden="true" />
                <span className="flex-1 text-[15px] text-ink">{d.label}</span>
                <span className="tabular text-[15px] font-semibold text-ink">{d.value}%</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12px] leading-snug text-muted">Source: Focus Realm market analysis.</p>
      </figcaption>
    </figure>
  );
}
