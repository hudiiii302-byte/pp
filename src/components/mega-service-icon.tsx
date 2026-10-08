import type { ReactElement, ReactNode } from "react";
import { brandIconData, type SimpleIconData } from "@/lib/brand-icon-data";

/**
 * Only the brand glyphs this component maps are bundled — see
 * src/lib/brand-icon-data.ts for why, and regenerate it with
 * `npm run icons` after editing brandBySlug below.
 */
const iconRegistry: Record<string, SimpleIconData | undefined> = brandIconData;

const brandBySlug: Record<string, string> = {
  "ecommerce-shopify": "siShopify",
  "woocommerce-development": "siWoocommerce",
  "wordpress-development": "siWordpress",
  "android-app-development": "siAndroid",
  "ios-app-development": "siApple",
  "flutter-app-development": "siFlutter",
  "mobile-app-development": "siReact",
  "game-development": "siUnity",
  "firebase-integration": "siFirebase",
  "ui-ux-design": "siFigma",
  "ebay-store-setup": "siEbay",
  "etsy-store-setup": "siEtsy",
  "tiktok-shop-setup": "siTiktok",
  "facebook-instagram-shop": "siInstagram",
  "google-merchant-center": "siGoogle",
  "google-adsense": "siGoogleadsense",
  "google-ads": "siGoogleads",
  "facebook-instagram-ads": "siFacebook",
  "google-admob": "siGoogleadmob",
  "google-play-console": "siGoogleplay",
  "app-store-publishing": "siAppstore",
  "email-marketing": "siMailchimp",
  "devops-cloud-solutions": "siCloudflare",
};

type GlyphProps = { className?: string };

function Stroke({ children, className }: GlyphProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const customBySlug: Record<string, (props: GlyphProps) => ReactElement> = {
  "custom-web-application-development": (props) => (
    <Stroke {...props}>
      <rect x="3" y="4" width="13" height="10" rx="1.6" />
      <rect x="8" y="10" width="13" height="10" rx="1.6" />
    </Stroke>
  ),
  "ecommerce-development": (props) => (
    <Stroke {...props}>
      <path d="M6 7h13l-1.2 8.2A2 2 0 0 1 15.8 17H9.4A2 2 0 0 1 7.5 15.4L6 7Z" />
      <path d="M6 7 5 4H3" />
    </Stroke>
  ),
  "custom-cms-development": (props) => (
    <Stroke {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </Stroke>
  ),
  "app-maintenance": (props) => (
    <Stroke {...props}>
      <rect x="8" y="2.5" width="8" height="14" rx="1.8" />
      <path d="M5 16.5 7.8 14l2.2 2.2 4.4-4.6" />
      <path d="M16.5 18.2a2.4 2.4 0 1 0 3.3 3.3l-4-1.2 1.2-4a2.4 2.4 0 0 0-.5 1.9Z" />
    </Stroke>
  ),
  "custom-software-development": (props) => (
    <Stroke {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
    </Stroke>
  ),
  "enterprise-software-solutions": (props) => (
    <Stroke {...props}>
      <path d="M4 20V8.5L12 4l8 4.5V20" />
      <path d="M9 20v-6h6v6" />
      <path d="M9 11h.01M12 11h.01M15 11h.01M9 14.5h.01M15 14.5h.01" />
    </Stroke>
  ),
  "saas-application-development": (props) => (
    <Stroke {...props}>
      <path d="M7 16a4 4 0 0 1 .2-8 5.2 5.2 0 0 1 10.1 1.4A3.6 3.6 0 0 1 17.5 16Z" />
      <rect x="8" y="14.5" width="8" height="6" rx="1.2" />
    </Stroke>
  ),
  "api-development": (props) => (
    <Stroke {...props}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="7" r="2.4" />
      <circle cx="18" cy="17" r="2.4" />
      <path d="M8.2 11.2 15.7 8M8.2 12.8 15.7 16" />
    </Stroke>
  ),
  "ai-solutions": (props) => (
    <Stroke {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2.4" />
      <path d="M10 10h4v4h-4zM12 3.2v3.2M12 17.6v3.2M3.2 12h3.2M17.6 12h3.2" />
    </Stroke>
  ),
  "pos-software": (props) => (
    <Stroke {...props}>
      <rect x="4" y="3" width="16" height="11" rx="1.8" />
      <path d="M7 7h10M7 10h6" />
      <path d="M6 16h12v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
    </Stroke>
  ),
  "crm-erp-solutions": (props) => (
    <Stroke {...props}>
      <circle cx="9" cy="8" r="2.6" />
      <path d="M4 19v-1.6A3.6 3.6 0 0 1 7.6 14h2.8A3.6 3.6 0 0 1 14 17.4V19" />
      <circle cx="17" cy="8.5" r="2.2" />
      <path d="M16 14.2a3.2 3.2 0 0 1 4 3V19" />
    </Stroke>
  ),
  "inventory-management-software": (props) => (
    <Stroke {...props}>
      <path d="M4 8 12 4l8 4v8l-8 4-8-4Z" />
      <path d="M4 8l8 4 8-4M12 12v8" />
    </Stroke>
  ),
  "graphic-design": (props) => (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 5.2 13.6 9M18.8 12 15 13.6M12 18.8 10.4 15M5.2 12 9 10.4" />
      <path d="m15.8 6.4 1.6-1.6M18.8 15.8l1.6 1.6M8.2 17.6 6.6 19.2M5.2 8.2 3.6 6.6" />
    </Stroke>
  ),
  "logo-brand-identity": (props) => (
    <Stroke {...props}>
      <path d="M12 3.5 14.6 9l6 .7-4.4 4.1 1.2 5.8L12 16.7 6.6 19.6l1.2-5.8L3.4 9.7l6-.7Z" />
    </Stroke>
  ),
  "real-estate-portals": (props) => (
    <Stroke {...props}>
      <path d="M4 20V10l8-6 8 6v10" />
      <path d="M9 20v-6h6v6" />
    </Stroke>
  ),
  "hospital-medical-portals": (props) => (
    <Stroke {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </Stroke>
  ),
  "education-portals": (props) => (
    <Stroke {...props}>
      <path d="M3 9.5 12 5l9 4.5-9 4.5Z" />
      <path d="M7 11.5v5.2c2.2 1.3 7.8 1.3 10 0v-5.2" />
      <path d="M21 9.5v6.4" />
    </Stroke>
  ),
  "amazon-store-setup": (props) => (
    <Stroke {...props}>
      <path d="M5.5 8.5c1.8-2 5-3 8.8-1.6" />
      <path d="M4.5 14.5c4.5 3.8 10.8 3.6 15.2-.4" />
      <path d="m17.4 16.2 2.8.2-.8 2.4" />
    </Stroke>
  ),
  "walmart-marketplace": (props) => (
    <Stroke {...props}>
      <path d="M12 3.2v3.4M12 17.4v3.4M3.2 12h3.4M17.4 12h3.4M6.2 6.2l2.4 2.4M15.4 15.4l2.4 2.4M17.8 6.2l-2.4 2.4M8.6 15.4l-2.4 2.4" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </Stroke>
  ),
  "seo-services": (props) => (
    <Stroke {...props}>
      <circle cx="10.5" cy="10.5" r="6.2" />
      <path d="m15.2 15.2 5 5" />
    </Stroke>
  ),
  "technical-seo": (props) => (
    <Stroke {...props}>
      <circle cx="10" cy="10" r="5.5" />
      <path d="m14.4 14.4 5.2 5.2M8 9l-1.6 2L8 13M12 9l1.6 2L12 13" />
    </Stroke>
  ),
  "local-seo": (props) => (
    <Stroke {...props}>
      <path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2.2" />
    </Stroke>
  ),
  "website-speed-optimization": (props) => (
    <Stroke {...props}>
      <path d="M5 19a9 9 0 1 1 14 0" />
      <path d="M12 16V10l4 2" />
    </Stroke>
  ),
  "conversion-rate-optimization": (props) => (
    <Stroke {...props}>
      <path d="M4 5h16l-5 6v5l-6 3v-8Z" />
    </Stroke>
  ),
  "digital-marketing": (props) => (
    <Stroke {...props}>
      <path d="M4 10.5v3A1.5 1.5 0 0 0 5.5 15h2l6.5 4.2V6.3L7.5 10.5H5.5A1.5 1.5 0 0 0 4 12Z" />
      <path d="M17.2 8.8a4.6 4.6 0 0 1 0 6.4" />
    </Stroke>
  ),
  "social-media-marketing": (props) => (
    <Stroke {...props}>
      <circle cx="6.5" cy="12" r="2.3" />
      <circle cx="16.8" cy="7" r="2.3" />
      <circle cx="16.8" cy="17" r="2.3" />
      <path d="M8.6 11.2 14.6 8M8.6 12.8 14.6 16" />
    </Stroke>
  ),
  "tiktok-ads": (props) => (
    <Stroke {...props}>
      <path d="M4 10.5v3A1.5 1.5 0 0 0 5.5 15h2l5.5 3.6V6.9L7.5 10.5H5.5A1.5 1.5 0 0 0 4 12Z" />
      <path d="M16 8.5v5.2l4 2.3V10.8Z" />
    </Stroke>
  ),
  "linkedin-ads": (props) => (
    <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path fill="#07111f" d="M7.2 10.2h2.1V17H7.2zM8.25 7a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM11.2 10.2h2v.9c.3-.6 1.1-1.1 2.3-1.1 2.4 0 2.8 1.5 2.8 3.5V17h-2.1v-3.1c0-.9 0-2.1-1.3-2.1s-1.5.9-1.5 2v3.2h-2.2z" />
    </svg>
  ),
  "content-marketing": (props) => (
    <Stroke {...props}>
      <path d="M6 4.5h9l4 4V19.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
      <path d="M14.5 4.5V9h4.5M8 13h8M8 16.5h5" />
    </Stroke>
  ),
  "online-reputation-management": (props) => (
    <Stroke {...props}>
      <path d="M12 3 19 6.5v5.3c0 4.3-2.9 7.4-7 8.7-4.1-1.3-7-4.4-7-8.7V6.5Z" />
      <path d="m9 12 2 2 4-4.5" />
    </Stroke>
  ),
  "app-store-optimization": (props) => (
    <Stroke {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="m12 8 1 2.1 2.3.3-1.7 1.6.4 2.3L12 13.2l-2 1.1.4-2.3-1.7-1.6 2.3-.3Z" />
    </Stroke>
  ),
  "app-monetization": (props) => (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.4v9.2M9.4 9.2c.6-1 1.6-1.5 2.6-1.5 1.7 0 2.6.9 2.6 2.1s-.8 1.9-2.8 2.4c-1.8.4-2.8 1.1-2.8 2.4 0 1.3 1.1 2.3 3 2.3 1.2 0 2.2-.5 2.8-1.4" />
    </Stroke>
  ),
  "web-hosting": (props) => (
    <Stroke {...props}>
      <rect x="4" y="4" width="16" height="5" rx="1.4" />
      <rect x="4" y="10.5" width="16" height="5" rx="1.4" />
      <rect x="4" y="17" width="16" height="3.2" rx="1.2" />
      <circle cx="7.2" cy="6.5" r="0.7" fill="currentColor" />
      <circle cx="7.2" cy="13" r="0.7" fill="currentColor" />
    </Stroke>
  ),
  "website-maintenance": (props) => (
    <Stroke {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.2 16.2 4 4" />
      <path d="M9 9.2 11 11l3.2-3.4" />
    </Stroke>
  ),
  "website-security": (props) => (
    <Stroke {...props}>
      <rect x="7" y="11" width="10" height="9" rx="1.6" />
      <path d="M9 11V8.2a3 3 0 0 1 6 0V11" />
    </Stroke>
  ),
  "it-consulting": (props) => (
    <Stroke {...props}>
      <path d="M5 15.5c0-2 2.4-3.5 7-3.5s7 1.5 7 3.5" />
      <path d="M8 15.5v3.2A2.3 2.3 0 0 0 10.3 21h3.4A2.3 2.3 0 0 0 16 18.7v-3.2" />
      <circle cx="12" cy="8" r="3.1" />
    </Stroke>
  ),
};

function isDark(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.28;
}

/**
 * `monochrome` makes every icon render in `currentColor`, whatever it is.
 *
 * It exists because several of these icons carry their own brand colour and
 * two of them are green — the WordbitX W mark is #34B02A and Shopify is
 * #7AB55C — so on any emerald surface (a brand-500 badge, the hive tile under
 * the cursor) they were green on green and simply disappeared. The W is a PNG
 * with a clean alpha channel, so in monochrome mode it is drawn as a CSS mask
 * filled with currentColor instead of as an <img>; that makes it behave
 * exactly like the SVG icons beside it in both the resting and hover state.
 */
export function MegaServiceIcon({
  slug,
  className = "h-4 w-4",
  monochrome = false,
}: {
  slug: string;
  className?: string;
  monochrome?: boolean;
}) {
  if (slug === "web-development") {
    // WordbitX W mark — brand identity for Website Development
    if (monochrome) {
      return (
        <span
          aria-hidden="true"
          className={`${className} inline-block scale-125`}
          style={{
            backgroundColor: "currentColor",
            maskImage: "url(/brand/wordbitx-mark.png)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: "url(/brand/wordbitx-mark.png)",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/brand/wordbitx-mark.png"
        alt="WordbitX"
        aria-hidden="true"
        className={`${className} scale-125 rounded-[2px] object-contain`}
      />
    );
  }

  const brandKey = brandBySlug[slug];
  const brand = brandKey ? iconRegistry[brandKey] : undefined;
  if (brand) {
    const color = monochrome || isDark(brand.hex) ? "currentColor" : `#${brand.hex}`;
    return (
      <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
        <path d={brand.path} />
      </svg>
    );
  }

  const Custom = customBySlug[slug];
  if (Custom) return <Custom className={className} />;

  return (
    <Stroke className={className}>
      <circle cx="12" cy="12" r="8" />
    </Stroke>
  );
}
