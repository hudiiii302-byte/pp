import { siteConfig } from "@/lib/site";

/**
 * Google AdSense IDs. Set either:
 *   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
 *   ADSENSE_PUBLISHER_ID=pub-xxxxxxxxxxxxxxxx
 * or siteConfig.adsensePublisherId (pub-…).
 */
function rawAdsenseId(): string {
  return (
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT ||
    process.env.ADSENSE_PUBLISHER_ID ||
    siteConfig.adsensePublisherId ||
    ""
  ).trim();
}

export function adsensePublisherId(): string | null {
  const raw = rawAdsenseId().replace(/^ca-/i, "");
  if (!/^pub-\d{10,}$/.test(raw)) return null;
  return raw;
}

export function adsenseClientId(): string | null {
  const publisher = adsensePublisherId();
  return publisher ? `ca-${publisher}` : null;
}
