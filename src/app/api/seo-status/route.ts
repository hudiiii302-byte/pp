import { siteConfig } from "@/lib/site";
import { sitemapIndexItems, absoluteSitemapUrl, getAllSitemapEntries } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  const canonical = siteConfig.url.toLowerCase();
  const sitemapUrls = [absoluteSitemapUrl("/sitemap-index.xml"), ...sitemapIndexItems.map((item) => absoluteSitemapUrl(item.path))];

  return Response.json({
    ok: true,
    canonicalDomain: canonical,
    indexThis: canonical,
    doNotIndexTheseRedirectVariants: [
      "https://wordbitxtech.com/",
      "http://wordbitxtech.com/",
      "http://www.wordbitxtech.com/",
      "wordbitxtech.com without protocol",
      "any preview / vercel / arena URL",
    ],
    reason:
      "Google should index only one canonical URL version. Other protocol/host variants should redirect to the canonical www HTTPS URL and will show as 'Page with redirect' in Search Console by design.",
    sitemapCount: sitemapUrls.length,
    canonicalUrlCount: getAllSitemapEntries().length,
    submitTheseSitemapsInGoogleSearchConsole: [
      absoluteSitemapUrl("/sitemap.xml"),
      absoluteSitemapUrl("/sitemap-index.xml"),
    ],
    doNotSubmitTheseSitemaps: sitemapUrls.filter(
      (url) => !url.endsWith("/sitemap.xml") && !url.endsWith("/sitemap-index.xml"),
    ),
    priorityInspectionUrls: [
      `${canonical}/`,
      `${canonical}/services`,
      `${canonical}/services/web-development`,
      `${canonical}/services/ecommerce-shopify`,
      `${canonical}/services/flutter-app-development`,
      `${canonical}/services/seo-services`,
      `${canonical}/services/local-seo`,
      `${canonical}/blog/software-company-lahore`,
      `${canonical}/global/usa`,
      `${canonical}/blog`,
      `${canonical}/contact`,
    ],
    requiredManualGoogleActions: [
      "Use a Domain Property for wordbitxtech.com in Search Console if possible.",
      "If using URL-prefix property, use https://www.wordbitxtech.com/ because the apex redirects to www.",
      "Submit sitemap.xml or sitemap-index.xml in Search Console. Delete societies submissions.",
      "Inspect the canonical www URLs, not redirected apex URLs.",
      "Do not request indexing for /societies — those pages are noindex.",
      "Monitor Pages, Sitemaps, Core Web Vitals, HTTPS, Security Issues and Manual Actions.",
    ],
  });
}
