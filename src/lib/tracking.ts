import { siteConfig } from "@/lib/site";

/**
 * Public tracking IDs. Env vars override the committed fallbacks.
 *
 * NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 * NEXT_PUBLIC_FACEBOOK_PIXEL_ID=123456789012345
 */
export function gaMeasurementId(): string | null {
  const id = (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || siteConfig.gaMeasurementId || "").trim();
  return id && /^G-[A-Z0-9]+$/i.test(id) ? id : null;
}

export function gtmId(): string | null {
  const id = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  return id && /^GTM-[A-Z0-9]+$/i.test(id) ? id : null;
}

export function facebookPixelId(): string | null {
  const id = (process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || siteConfig.facebookPixelId || "").trim();
  return id && /^\d{8,20}$/.test(id) ? id : null;
}
