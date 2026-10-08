import type { ReactElement } from "react";

/**
 * One drawn-to-order icon per home-page service tile.
 *
 * The hive used to borrow from MegaServiceIcon, which mixes three visual
 * languages in one grid: vendor logos pulled from simple-icons (Shopify,
 * React, Figma, Cloudflare), hand-drawn stroke icons, and the WordbitX W
 * mark as a PNG. Three weights, three palettes, and — worse — a vendor logo
 * standing in for one of our services. React's logo is not what "App
 * development" means, and Cloudflare's is not what "Cloud" means; those are
 * tools we happen to use, printed at the size of a promise we are making.
 *
 * So: sixteen icons, one grid, one stroke weight, one colour. Everything is
 * currentColor on a 24-unit box with 1.6 stroke, round caps and joins, which
 * is what makes a set read as a set at 20px.
 */
type IconProps = { className?: string };

function Base({ className = "h-5 w-5", children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons: Record<string, (props: IconProps) => ReactElement> = {
  /* Websites — a browser frame */
  "web-development": (p) => (
    <Base {...p}>
      <rect x="2.75" y="4.25" width="18.5" height="15.5" rx="2.5" />
      <path d="M2.75 8.75h18.5" />
      <path d="M5.75 6.5h.01M8 6.5h.01M10.25 6.5h.01" />
    </Base>
  ),

  /* CRM — a contact record */
  "crm-erp-solutions": (p) => (
    <Base {...p}>
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
      <circle cx="8.75" cy="10.75" r="2.1" />
      <path d="M5.4 16.1c.5-1.6 1.8-2.5 3.35-2.5s2.85.9 3.35 2.5" />
      <path d="M15 10h3.75M15 13.25h3.75" />
    </Base>
  ),

  /* Custom business websites — a window being configured */
  "custom-web-application-development": (p) => (
    <Base {...p}>
      <rect x="2.75" y="4.25" width="18.5" height="15.5" rx="2.5" />
      <path d="M2.75 8.75h18.5" />
      <path d="M9 8.75v11" />
      <path d="M12 12.25h6.25M12 15.75h4" />
    </Base>
  ),

  /* Shopify stores — a shopping bag */
  "ecommerce-shopify": (p) => (
    <Base {...p}>
      <path d="M5 8h14l-1.1 11.1a1.6 1.6 0 0 1-1.6 1.4H7.7a1.6 1.6 0 0 1-1.6-1.4Z" />
      <path d="M8.75 8V6.6a3.25 3.25 0 0 1 6.5 0V8" />
    </Base>
  ),

  /* E-commerce stores — a cart */
  "ecommerce-development": (p) => (
    <Base {...p}>
      <path d="M2.75 4.25h2.1l2.3 10.3h9.8" />
      <path d="M6.6 7.5h13.6l-1.6 6.1" />
      <circle cx="9" cy="18.75" r="1.5" />
      <circle cx="17.25" cy="18.75" r="1.5" />
    </Base>
  ),

  /* Distribution & wholesale — a delivery truck */
  "inventory-management-software": (p) => (
    <Base {...p}>
      <path d="M2.75 6.75h10.5v9H2.75z" />
      <path d="M13.25 10h3.6l3.4 3.1v2.65h-7z" />
      <circle cx="7" cy="17.75" r="1.6" />
      <circle cx="16.75" cy="17.75" r="1.6" />
    </Base>
  ),

  /* ERP — stacked business modules */
  "enterprise-software-solutions": (p) => (
    <Base {...p}>
      <path d="M12 2.9 20.5 7 12 11.1 3.5 7Z" />
      <path d="M3.5 12 12 16.1 20.5 12" />
      <path d="M3.5 17 12 21.1 20.5 17" />
    </Base>
  ),

  /* App development — a handset */
  "mobile-app-development": (p) => (
    <Base {...p}>
      <rect x="6.75" y="2.75" width="10.5" height="18.5" rx="2.6" />
      <path d="M10.4 5.6h3.2" />
      <path d="M11 18.4h2" />
    </Base>
  ),

  /* Custom software — source in brackets */
  "custom-software-development": (p) => (
    <Base {...p}>
      <path d="M8.4 7.75 4.15 12l4.25 4.25" />
      <path d="M15.6 7.75 19.85 12l-4.25 4.25" />
      <path d="M13.4 5.4l-2.8 13.2" />
    </Base>
  ),

  /* UI/UX & graphic design — an artboard with a cursor */
  "ui-ux-design": (p) => (
    <Base {...p}>
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="2.5" />
      <path d="M2.75 8h18.5M8 2.75v18.5" />
      <path d="m12.1 11.4 5.3 2.2-2.2.9-.9 2.2z" />
    </Base>
  ),

  /* Digital marketing — a megaphone */
  "digital-marketing": (p) => (
    <Base {...p}>
      <path d="M4.25 9.5h3.1l9.4-4.3v13.6l-9.4-4.3h-3.1a1.6 1.6 0 0 1-1.6-1.6v-1.8a1.6 1.6 0 0 1 1.6-1.6Z" />
      <path d="M20.1 9.1a3.4 3.4 0 0 1 0 5.8" />
      <path d="M7.35 14.5v4.1a1.4 1.4 0 0 0 1.4 1.4h.9a1.4 1.4 0 0 0 1.4-1.4v-2.6" />
    </Base>
  ),

  /* SEO & ASO — search with a rising result */
  "seo-services": (p) => (
    <Base {...p}>
      <circle cx="10.75" cy="10.75" r="7" />
      <path d="m16 16 5 5" />
      <path d="M7.75 12.6v-1.85M10.75 12.6V9.1M13.75 12.6V7.4" />
    </Base>
  ),

  /* AI solutions — a processor with a spark */
  "ai-solutions": (p) => (
    <Base {...p}>
      <rect x="6.75" y="6.75" width="10.5" height="10.5" rx="2.4" />
      <path d="M10 3.25v3.5M14 3.25v3.5M10 17.25v3.5M14 17.25v3.5" />
      <path d="M3.25 10h3.5M3.25 14h3.5M17.25 10h3.5M17.25 14h3.5" />
      <path d="m12 9.4.85 1.75L14.6 12l-1.75.85L12 14.6l-.85-1.75L9.4 12l1.75-.85z" />
    </Base>
  ),

  /* Cloud & API integration — a cloud with a sync arrow */
  "devops-cloud-solutions": (p) => (
    <Base {...p}>
      <path d="M7.4 18.25A4.65 4.65 0 0 1 7 8.97a5.75 5.75 0 0 1 11.02 1.6 3.85 3.85 0 0 1-.62 7.68Z" />
      <path d="M12 15.4V9.9" />
      <path d="m9.8 12.1 2.2-2.2 2.2 2.2" />
    </Base>
  ),

  /* Maintenance & support — a spanner */
  "website-maintenance": (p) => (
    <Base {...p}>
      <path d="M15.1 3.3a5.35 5.35 0 0 0-5.2 8.4L3.6 18a2.05 2.05 0 1 0 2.9 2.9l6.3-6.3a5.35 5.35 0 0 0 7.1-6.8l-3 3-2.9-.7-.7-2.9Z" />
    </Base>
  ),

  /* Business consultation — an idea in conversation */
  "it-consulting": (p) => (
    <Base {...p}>
      <path d="M9.1 15.9a5.2 5.2 0 1 1 5.8 0v1.6H9.1Z" />
      <path d="M9.9 20.3h4.2" />
      <path d="M12 9.1v2.6" />
    </Base>
  ),
};

/**
 * Falls back to a neutral dot so a new slug can never render a hole in the
 * grid — but every slug in src/lib/home-service-links.ts is covered above.
 */
export function ServiceLineIcon({ slug, className = "h-5 w-5" }: { slug: string; className?: string }) {
  const Icon = icons[slug];
  if (Icon) return <Icon className={className} />;
  return (
    <Base className={className}>
      <circle cx="12" cy="12" r="7.5" />
    </Base>
  );
}

export const serviceLineIconSlugs = Object.keys(icons);
