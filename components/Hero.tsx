import { Arrow, ButtonLink, Container, NoteRef } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint measurement grid — the "research report" canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--color-line)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <Container className="relative pb-6 pt-14 sm:pt-20 lg:pb-10 lg:pt-24">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[13px] font-medium text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
              AI-powered LMS for Indian classrooms
            </p>

            <h1 className="mt-7 text-[clamp(2.75rem,7vw,5.6rem)] font-semibold leading-[0.97] tracking-[-0.042em] text-ink">
              Engagement,
              <br />
              <span className="text-brand-600">engineered</span> for
              <br />
              the classroom.
            </h1>

            <p className="mt-7 max-w-[34rem] text-[18px] leading-relaxed text-ink-2 sm:text-[19px]">
              Focus Realm is an AI-powered, gamified learning management system that runs on the
              interactive boards your institution already owns, built to fix disengagement in
              Indian classrooms and give educators their time back.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact">
                Request a Demo <Arrow />
              </ButtonLink>
              <ButtonLink href="#product" variant="secondary">
                See the Platform
              </ButtonLink>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-6">
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
            </dl>
          </div>

          <div className="lg:col-span-5">
            <BoardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Illustrative interactive-board view; sample data only. */
function BoardPreview() {
  const leaderboard = [
    { team: "Team Orion", xp: 1240, w: 100 },
    { team: "Team Vega", xp: 1180, w: 95 },
    { team: "Team Lyra", xp: 990, w: 80 },
  ];
  const pulse = [38, 52, 47, 64, 71, 68, 82, 88, 84, 91];

  return (
    <figure className="relative">
      <div className="rounded-[22px] border border-line bg-white p-2.5">
        <div className="rounded-[14px] border border-line bg-paper">
          {/* board chrome */}
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-2 text-[12px] font-medium text-ink-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Class 8B · Science · Live
            </div>
            <span className="text-[11px] text-muted">Interactive board</span>
          </div>

          <div className="grid gap-3 p-4">
            <div className="rounded-xl border border-line bg-white p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Today&rsquo;s quest</p>
              <p className="mt-1 text-[17px] font-semibold tracking-[-0.01em]">Light &amp; Reflection</p>
              <div className="mt-4 flex items-center justify-between text-[12px] text-ink-2">
                <span>Live progress</span>
                <span className="tabular font-medium text-brand-700">72%</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-brand-50">
                <div className="h-2 w-[72%] rounded-full bg-brand-600" />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 rounded-xl border border-line bg-white p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Leaderboard</p>
                <ul className="mt-3 space-y-2.5">
                  {leaderboard.map((r) => (
                    <li key={r.team}>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-ink">{r.team}</span>
                        <span className="tabular text-ink-2">{r.xp.toLocaleString("en-IN")} XP</span>
                      </div>
                      <div className="mt-1 h-1 rounded-full bg-brand-50">
                        <div className="h-1 rounded-full bg-brand-400" style={{ width: `${r.w}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 flex flex-col rounded-xl border border-line bg-white p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">Engagement</p>
                <div className="mt-auto flex h-16 items-end gap-[3px] pt-3">
                  {pulse.map((h, i) => (
                    <span
                      key={i}
                      className={`flex-1 rounded-t-[2px] ${i === pulse.length - 1 ? "bg-brand-600" : "bg-brand-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-brand-600 px-4 py-3 text-white">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="M8 1.5 9.9 5.4l4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6z" fill="currentColor" />
                </svg>
              </span>
              <p className="text-[13px] leading-snug">
                <span className="font-semibold">Badge unlocked:</span> Prism Builder · +120 XP
              </p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-[12px] text-muted">
        Illustrative view of a live lesson on a classroom interactive board.
      </figcaption>
    </figure>
  );
}
