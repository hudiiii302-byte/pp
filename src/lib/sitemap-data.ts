import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/portfolio";
import { blogPosts } from "@/lib/blog";
import { legalDocs, legalSlugs } from "@/lib/legal";
import { industries } from "@/lib/industries";
import { products } from "@/lib/products";
import { cities } from "@/lib/cities";
import { markets } from "@/lib/markets";
import { topics } from "@/lib/topics";
import { societies } from "@/lib/societies";
import { techPages } from "@/lib/tech-pages";
import { isDuplicateTopic, sitemapPriority } from "@/lib/seo-focus";
import { hirePages } from "@/lib/hire-developers";
import { geoPages } from "@/lib/geo-pages";

export type SitemapGroupKey =
  | "core"
  | "services"
  | "industries"
  | "products"
  | "cities"
  | "societies"
  | "global"
  | "technologies"
  | "portfolio"
  | "blog"
  | "topics"
  | "legal"
  | "hire"
  | "geo";

export type SitemapEntry = MetadataRoute.Sitemap[number];

const base = siteConfig.url.toLowerCase();
const staticUpdated = new Date(`${siteConfig.contentUpdated}T00:00:00Z`);

function dateOnly(value: Date): string {
  return value.toISOString().slice(0, 10);
}

function entry(path: string, options: Omit<SitemapEntry, "url">): SitemapEntry {
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  const lastModified =
    options.lastModified instanceof Date
      ? dateOnly(options.lastModified)
      : options.lastModified;
  return { url: `${base}${normalized === "/" ? "" : normalized}`, ...options, lastModified };
}

function parseLooseDate(value: string): Date {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? staticUpdated : parsed;
}

export function getSitemapGroups(now = staticUpdated): Record<SitemapGroupKey, SitemapEntry[]> {
  return {
    core: [
      entry("/", { lastModified: now, changeFrequency: "weekly", priority: sitemapPriority("/", 1) }),
      entry("/about", { lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
      entry("/services", { lastModified: now, changeFrequency: "weekly", priority: 0.9 }),
      entry("/industries", { lastModified: now, changeFrequency: "weekly", priority: 0.75 }),
      entry("/products", { lastModified: now, changeFrequency: "weekly", priority: 0.85 }),
      entry("/software-house", { lastModified: now, changeFrequency: "weekly", priority: 0.85 }),
      // The hub only. Its 20 child pages carry indicative plot-price tables and
      // stay noindex, so they neither compete with our software pages nor rot
      // in the index between price reviews.
      entry("/societies", { lastModified: now, changeFrequency: "monthly", priority: 0.6 }),
      entry("/global", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }),
      entry("/technologies", { lastModified: now, changeFrequency: "monthly", priority: 0.4 }),
      entry("/portfolio", { lastModified: now, changeFrequency: "weekly", priority: 0.8 }),
      entry("/blog", { lastModified: now, changeFrequency: "weekly", priority: 0.8 }),
      entry("/topics", { lastModified: now, changeFrequency: "weekly", priority: 0.5 }),
      entry("/contact", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }),
      entry("/pricing", { lastModified: now, changeFrequency: "weekly", priority: sitemapPriority("/pricing", 0.9) }),
      entry("/tools/cost-calculator", { lastModified: now, changeFrequency: "monthly", priority: 0.85 }),
      entry("/process", { lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
      entry("/careers", { lastModified: now, changeFrequency: "weekly", priority: 0.55 }),
    ],
    services: services.map((service) =>
      entry(`/services/${service.slug}`, {
        lastModified: now,
        changeFrequency: "monthly",
        priority: sitemapPriority(`/services/${service.slug}`, 0.7),
      }),
    ),
    industries: industries.map((industry) =>
      entry(`/industries/${industry.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.75 }),
    ),
    products: products.map((product) =>
      entry(`/products/${product.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
    ),
    cities: cities.map((city) =>
      entry(`/software-house/${city.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
    ),
    societies: societies.map((society) =>
      entry(`/societies/${society.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.6 }),
    ),
    global: markets.map((market) =>
      entry(`/global/${market.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.7 }),
    ),
    technologies: techPages.map((tech) =>
      entry(`/technologies/${tech.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.4 }),
    ),
    portfolio: projects.map((project) =>
      entry(`/portfolio/${project.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.65 }),
    ),
    blog: blogPosts.map((post) =>
      entry(`/blog/${post.slug}`, {
        lastModified: new Date(`${post.updatedAt ?? post.publishedAt}T00:00:00Z`),
        changeFrequency: "monthly",
        priority: 0.7,
      }),
    ),
    topics: topics
      .filter((topic) => !isDuplicateTopic(topic.slug))
      .map((topic) =>
        entry(`/topics/${topic.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.45 }),
      ),
    legal: legalSlugs.map((slug) =>
      entry(`/${slug}`, {
        lastModified: parseLooseDate(legalDocs[slug]?.updated ?? siteConfig.contentUpdated),
        changeFrequency: "yearly",
        priority: 0.3,
      }),
    ),
    hire: [
      entry("/hire-developers", { lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
      ...hirePages.map((page) =>
        entry(`/hire-developers/${page.slug}`, {
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        }),
      ),
    ],
    geo: geoPages.map((page) =>
      entry(`/${page.slug}`, {
        lastModified: now,
        changeFrequency: "monthly",
        priority: sitemapPriority(`/${page.slug}`, 0.72),
      }),
    ),
  };
}

export function getAllSitemapEntries(now = staticUpdated): SitemapEntry[] {
  return Object.values(getSitemapGroups(now)).flat();
}

export const sitemapIndexItems: { key: SitemapGroupKey; path: string; label: string }[] = [
  { key: "core", path: "/sitemaps/core.xml", label: "Core pages" },
  { key: "services", path: "/sitemaps/services.xml", label: "Service pages" },
  { key: "industries", path: "/sitemaps/industries.xml", label: "Industry pages" },
  { key: "products", path: "/sitemaps/products.xml", label: "Our product pages" },
  { key: "cities", path: "/sitemaps/cities.xml", label: "Pakistan city pages" },
  { key: "global", path: "/sitemaps/global.xml", label: "Country / market pages" },
  { key: "technologies", path: "/sitemaps/technologies.xml", label: "Technology pages" },
  { key: "portfolio", path: "/sitemaps/portfolio.xml", label: "Portfolio / demo profiles" },
  { key: "blog", path: "/sitemaps/blog.xml", label: "Blog articles" },
  { key: "topics", path: "/sitemaps/topics.xml", label: "Software topic guides" },
  { key: "legal", path: "/sitemaps/legal.xml", label: "Legal pages" },
  { key: "hire", path: "/sitemaps/hire.xml", label: "Hire developers pages" },
  { key: "geo", path: "/sitemaps/geo.xml", label: "Service × city pages" },
];

export function publishedSitemapIndexItems() {
  const groups = getSitemapGroups();
  return sitemapIndexItems.filter((item) => groups[item.key].length > 0);
}

export function sitemapGroupsForHtml() {
  const groups = getSitemapGroups();
  return sitemapIndexItems
    .map((item) => ({ ...item, entries: groups[item.key] }))
    .filter((item) => item.entries.length > 0);
}

export function absoluteSitemapUrl(path: string) {
  return `${base}${path}`;
}

function iso(value: SitemapEntry["lastModified"]) {
  if (!value) return dateOnly(staticUpdated);
  if (value instanceof Date) return dateOnly(value);
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? dateOnly(staticUpdated) : dateOnly(parsed);
}

function latestLastmod(entries: SitemapEntry[]) {
  if (!entries.length) return staticUpdated;
  return entries.reduce((latest, item) => {
    const current = item.lastModified instanceof Date ? item.lastModified : new Date(item.lastModified ?? 0);
    return current > latest ? current : latest;
  }, staticUpdated);
}

export function sitemapXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map((item) => {
      const parts = [
        `  <loc>${item.url}</loc>`,
        `  <lastmod>${iso(item.lastModified)}</lastmod>`,
      ];
      if (item.changeFrequency) parts.push(`  <changefreq>${item.changeFrequency}</changefreq>`);
      if (typeof item.priority === "number") parts.push(`  <priority>${item.priority}</priority>`);
      return `<url>\n${parts.join("\n")}\n</url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function sitemapIndexXml(): string {
  const groups = getSitemapGroups();
  const items = publishedSitemapIndexItems();
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items
  .map(
    (item) => `<sitemap>
  <loc>${absoluteSitemapUrl(item.path)}</loc>
  <lastmod>${iso(latestLastmod(groups[item.key]))}</lastmod>
</sitemap>`,
  )
  .join("\n")}
</sitemapindex>
`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
