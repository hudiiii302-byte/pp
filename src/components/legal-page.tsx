import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { legalNav } from "@/lib/site";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        description={doc.intro}
        crumbs={[{ label: doc.title, href: `/${doc.slug}` }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_16rem]">
          <article className="max-w-3xl">
            <p className="text-sm text-ink-300">Last updated: {doc.updated}</p>
            {doc.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="text-xl font-semibold text-ink-900">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)} className="mt-3 text-base leading-relaxed text-ink-700">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-relaxed text-ink-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">Legal documents</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 transition-colors ${
                        item.href === `/${doc.slug}`
                          ? "bg-white font-medium text-brand-700"
                          : "text-ink-500 hover:text-brand-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand
        title="Questions about our terms or data handling?"
        description="Our team answers privacy, contractual and data-ownership questions directly before any engagement starts."
        primaryLabel="Contact Us"
      />
    </>
  );
}
