import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { sitemapGroupsForHtml } from "@/lib/sitemap-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description: `Indexable pages on ${siteConfig.domain}: services, industries, markets, portfolio, blog and legal.`,
  alternates: { canonical: "/sitemap" },
  robots: { index: false, follow: true },
};

export default function HtmlSitemapPage() {
  const groups = sitemapGroupsForHtml();

  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="All indexable pages"
        description="Service, market, portfolio and blog URLs Google should crawl. Society plot pages and demo subdomains are kept off this list on purpose."
        crumbs={[{ label: "Sitemap", href: "/sitemap" }]}
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.key}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">{group.label}</h2>
              <ul className="mt-4 space-y-2">
                {group.entries.map((item) => {
                  const path = item.url.replace(siteConfig.url.toLowerCase(), "") || "/";
                  return (
                    <li key={item.url}>
                      <Link href={path} className="text-sm text-ink-700 underline-offset-4 hover:text-brand-700 hover:underline">
                        {path}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
