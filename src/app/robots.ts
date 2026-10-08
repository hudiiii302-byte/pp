import type { MetadataRoute } from "next";
import { absoluteSitemapUrl } from "@/lib/sitemap-data";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const allowAi = ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "ClaudeBot", "anthropic-ai"];
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /societies (the hub) is a software page and is indexed. Its children are
        // indicative plot-price tables that must not compete with our software
        // pages or go stale in the index, so only the children are blocked.
        disallow: ["/api/", "/admin", "/admin/", "/societies/", "/lab", "/lab/"],
      },
      ...allowAi.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    // Only the index is advertised. /sitemap.xml stays available as a debug dump
    // but listing both made Search Console report the same URLs twice.
    sitemap: absoluteSitemapUrl("/sitemap-index.xml"),
    host: siteConfig.url.toLowerCase(),
  };
}
