import { CONTACT } from "@/lib/content";
import { Reveal, Stagger, StaggerItem, WordRevealInView } from "./motion";
import { Arrow, ButtonLink, Container, Monogram } from "./ui";

export function Contact() {
  const rows = [
    { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: "Web", value: CONTACT.site, href: CONTACT.siteHref },
  ];

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-brand-600 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-400/40 blur-[100px] animate-[drift_20s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-800/60 blur-[110px] animate-[drift_26s_ease-in-out_infinite_reverse]" />
        <div className="absolute -bottom-24 -right-16 h-[26rem] w-[26rem] text-white/[0.07] animate-[spin-slow_90s_linear_infinite] sm:h-[34rem] sm:w-[34rem]">
          <Monogram tone="outline" className="h-full w-full" />
        </div>
      </div>
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-brand-100">
                <span className="tabular">08</span>
                <span className="h-px w-6 bg-white/40" aria-hidden="true" />
                Contact
              </p>
            </Reveal>
            <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              <WordRevealInView text="Let’s bring clarity to your campus." />
            </h2>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-brand-50">
                Book a walkthrough and see Focus Realm running on the interactive boards you already have, in about
                thirty minutes.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={CONTACT.demoHref} variant="white" className="group">
                  Book a Walkthrough <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
                <ButtonLink href={CONTACT.phoneHref} variant="ghost-white">
                  Call us
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Stagger as="dl" className="self-end lg:col-span-5" stagger={0.12}>
            {rows.map((r) => (
              <StaggerItem key={r.label} className="group grid grid-cols-[5rem_1fr] items-baseline border-t border-white/25 py-5">
                <dt className="text-[13px] text-brand-100">{r.label}</dt>
                <dd>
                  <a
                    href={r.href}
                    className="inline-flex items-center gap-2 text-[18px] font-medium tracking-[-0.01em]"
                  >
                    <span className="bg-[linear-gradient(white,white)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                      {r.value}
                    </span>
                    <Arrow className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
