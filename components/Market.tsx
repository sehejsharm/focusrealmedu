import { MarketDonut } from "./MarketDonut";
import { Container, NoteRef, SectionHeader } from "./ui";

const GAPS = [
  {
    title: "Low Engagement",
    body: "Platforms digitise content but don't hold attention, so students tune out.",
  },
  {
    title: "Fragmented Solutions",
    body: "Separate tools for attendance, grading, communication and learning that never talk to each other.",
  },
  {
    title: "High Costs & Complexity",
    body: "Systems priced and built for large IT teams, not for the realities of most campuses.",
  },
];

export function Market() {
  return (
    <section id="market" className="scroll-mt-16">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="05"
          label="Market Opportunity"
          title="A large market that is still underserved."
          intro="Spending on learning platforms is accelerating worldwide and in India, yet the tools on offer haven't solved the engagement problem."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <div className="bg-white p-7 lg:p-9">
            <p className="text-[13px] text-muted">Global LMS market by 2030</p>
            <p className="tabular mt-2 text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.045em] text-brand-600">
              $47.47B
              <NoteRef n={5} />
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[13px] font-medium text-brand-700">
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
                <path d="M2 9 6 4l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="tabular">18.3%</span> CAGR
            </p>
          </div>
          <div className="bg-white p-7 lg:p-9">
            <p className="text-[13px] text-muted">India&rsquo;s EdTech sector, projected</p>
            <p className="tabular mt-2 text-[clamp(3rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.045em] text-ink">
              $30B
              <NoteRef n={6} />
            </p>
            <p className="mt-4 text-[14px] text-ink-2">One of the fastest-growing education markets in the world.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <MarketDonut />
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Three gaps we close</p>
            <ol className="mt-4 space-y-px">
              {GAPS.map((g, i) => (
                <li key={g.title} className="grid grid-cols-[2.25rem_1fr] border-t border-line py-5">
                  <span className="tabular text-[14px] font-medium text-brand-600">0{i + 1}</span>
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.015em]">{g.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{g.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
