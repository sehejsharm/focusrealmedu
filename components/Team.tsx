import fs from "node:fs";
import path from "node:path";
import { Stagger, StaggerItem } from "./motion";
import { Container, Monogram, SectionHeader } from "./ui";

const TEAM = [
  { name: "Sehej Sharma", role: "Co-Founder & CEO", slug: "sehej-sharma" },
  { name: "Ali Electricwala", role: "Co-Founder & COO", slug: "ali-electricwala" },
  { name: "Aditya Mishra", role: "Co-Founder & CTO", slug: "aditya-mishra" },
];

/** Photos live at public/team/<slug>.(jpg|png|webp); initials are used if one is missing. */
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
        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-3" stagger={0.14}>
          {TEAM.map((m) => {
            const photo = findPhoto(m.slug);
            return (
              <StaggerItem as="li" key={m.slug}>
                <figure className="group">
                  <div className="relative aspect-square overflow-hidden sm:aspect-[4/5] rounded-2xl bg-brand-50 ring-1 ring-line">
                    {photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={photo}
                        alt={`${m.name}, ${m.role}`}
                        loading="lazy"
                        className="h-full w-full object-cover object-[50%_25%] transition-[filter,transform] [@media(hover:hover)]:grayscale-[0.85] duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                      />
                    ) : (
                      <span
                        className="flex h-full w-full items-center justify-center text-[48px] font-semibold tracking-[-0.03em] text-brand-700"
                        aria-hidden="true"
                      >
                        {initials(m.name)}
                      </span>
                    )}
                    {/* blue wash that lifts on hover */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-700/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-50"
                    />
                    <span className="absolute left-4 top-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Monogram className="h-7 w-7" tone="white" />
                    </span>
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="text-[20px] font-semibold tracking-[-0.02em]">{m.name}</p>
                      <p className="mt-0.5 text-[14px] text-brand-100">{m.role}</p>
                    </figcaption>
                  </div>
                </figure>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
