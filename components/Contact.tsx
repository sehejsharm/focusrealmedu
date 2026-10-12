import { CONTACT } from "@/lib/content";
import { Arrow, ButtonLink, Container, Monogram } from "./ui";

export function Contact() {
  const rows = [
    { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: "Web", value: CONTACT.site, href: CONTACT.siteHref },
  ];

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-brand-600 text-white">
      <Monogram
        tone="outline"
        className="pointer-events-none absolute -bottom-24 -right-16 h-[26rem] w-[26rem] text-white/[0.07] sm:h-[34rem] sm:w-[34rem]"
      />
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-brand-100">
              <span className="tabular">08</span>
              <span className="h-px w-6 bg-white/40" aria-hidden="true" />
              Contact
            </p>
            <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Let&rsquo;s bring clarity to your campus.
            </h2>
            <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-brand-50">
              Book a walkthrough and see Focus Realm running on the interactive boards you already have, in about
              thirty minutes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={CONTACT.demoHref} variant="white">
                Book a Walkthrough <Arrow />
              </ButtonLink>
              <ButtonLink href={CONTACT.phoneHref} variant="ghost-white">
                Call us
              </ButtonLink>
            </div>
          </div>

          <dl className="self-end lg:col-span-5">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[5rem_1fr] items-baseline border-t border-white/25 py-5">
                <dt className="text-[13px] text-brand-100">{r.label}</dt>
                <dd>
                  <a href={r.href} className="text-[18px] font-medium tracking-[-0.01em] underline-offset-4 hover:underline">
                    {r.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
