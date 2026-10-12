import fs from "node:fs";
import path from "node:path";
import { Container, SectionHeader } from "./ui";

const TEAM = [
  { name: "Sehej Sharma", role: "Co-Founder & CEO", slug: "sehej-sharma" },
  { name: "Ali Electricwala", role: "Co-Founder & COO", slug: "ali-electricwala" },
  { name: "Aditya Mishra", role: "Co-Founder & CTO", slug: "aditya-mishra" },
];

/** Drop a photo at public/team/<slug>.(jpg|png|webp) and it replaces the initials at build time. */
function findPhoto(slug: string): string | null {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "team", `${slug}.${ext}`))) {
      return `/team/${slug}.${ext}`;
    }
  }
  return null;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

export function Team() {
  return (
    <section id="team" className="scroll-mt-16">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="07"
          label="Team"
          title="The people building Focus Realm."
          intro="A founding team combining operations, product and engineering, focused on making classrooms work better for students and educators alike."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {TEAM.map((m) => {
            const photo = findPhoto(m.slug);
            return (
              <li key={m.slug} className="flex items-center gap-5 bg-white p-6 sm:flex-col sm:items-start sm:p-8">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-brand-50 ring-1 ring-brand-200 sm:h-28 sm:w-28">
                  {photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <span
                      className="flex h-full w-full items-center justify-center text-[22px] font-semibold tracking-[-0.02em] text-brand-700 sm:text-[28px]"
                      aria-hidden="true"
                    >
                      {initials(m.name)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[19px] font-semibold tracking-[-0.02em]">{m.name}</p>
                  <p className="mt-1 text-[15px] text-ink-2">{m.role}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
