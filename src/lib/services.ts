import type { Service } from "@/lib/types";
import { servicesA } from "@/lib/services-a";
import { servicesB } from "@/lib/services-b";
import { servicesC } from "@/lib/services-c";
import { servicesD } from "@/lib/services-d";
import { servicesE } from "@/lib/services-e";
import { servicesF } from "@/lib/services-f";
import { servicesG } from "@/lib/services-g";
import { serviceImageAlts, servicePhoto } from "@/lib/service-media";

/**
 * All service data, in the display order the WordbitX team asked for.
 * The order below drives the /services listing and sitemap. The homepage
 * uses featuredServices so the grid stays readable as the catalogue grows.
 */
const allServices: Service[] = [
  ...servicesA,
  ...servicesB,
  ...servicesC,
  ...servicesD,
  ...servicesE,
  ...servicesF,
  ...servicesG,
];

const displayOrder = [
  "web-development",
  "custom-web-application-development",
  "ecommerce-development",
  "ecommerce-shopify",
  "woocommerce-development",
  "wordpress-development",
  "custom-cms-development",
  "android-app-development",
  "ios-app-development",
  "flutter-app-development",
  "mobile-app-development",
  "game-development",
  "custom-software-development",
  "enterprise-software-solutions",
  "saas-application-development",
  "api-development",
  "ai-solutions",
  "pos-software",
  "inventory-management-software",
  "crm-erp-solutions",
  "real-estate-portals",
  "hospital-medical-portals",
  "education-portals",
  "ui-ux-design",
  "graphic-design",
  "logo-brand-identity",
  "amazon-store-setup",
  "ebay-store-setup",
  "etsy-store-setup",
  "walmart-marketplace",
  "tiktok-shop-setup",
  "facebook-instagram-shop",
  "google-merchant-center",
  "digital-marketing",
  "social-media-marketing",
  "seo-services",
  "technical-seo",
  "local-seo",
  "website-speed-optimization",
  "conversion-rate-optimization",
  "google-ads",
  "facebook-instagram-ads",
  "tiktok-ads",
  "linkedin-ads",
  "email-marketing",
  "content-marketing",
  "online-reputation-management",
  "app-store-optimization",
  "google-admob",
  "app-monetization",
  "firebase-integration",
  "google-adsense",
  "google-play-console",
  "app-store-publishing",
  "app-maintenance",
  "web-hosting",
  "website-maintenance",
  "website-security",
  "it-consulting",
  "devops-cloud-solutions",
];

export const services: Service[] = displayOrder
  .map((slug) => allServices.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service))
  .concat(allServices.filter((service) => !displayOrder.includes(service.slug)))
  .map((service) => ({
    ...service,
    image: servicePhoto(service.slug),
    imageAlt: serviceImageAlts[service.slug] ?? service.imageAlt,
  }));

export const serviceSlugs = services.map((service) => service.slug);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
}

export const featuredServices = services.filter((service) => service.featured);

export const serviceNames = services.map((service) => service.title);

/** Maps a URL query (title, short title, or slug) to the contact-form option. */
export function resolveServiceOption(value?: string): string | undefined {
  if (!value?.trim()) return undefined;
  const needle = decodeURIComponent(value).trim().toLowerCase().replace(/\+/g, " ");
  const exact = services.find(
    (service) =>
      service.title.toLowerCase() === needle ||
      service.shortTitle.toLowerCase() === needle ||
      service.slug === needle,
  );
  if (exact) return exact.title;
  return services.find(
    (service) => service.title.toLowerCase().includes(needle) || needle.includes(service.title.toLowerCase()),
  )?.title;
}

/**
 * Groups used by the header mega menu and the /services page.
 * Every service belongs to exactly one group.
 */
export const megaMenuGroups: { title: string; slugs: string[] }[] = [
  {
    title: "Web & E-Commerce",
    slugs: [
      "web-development",
      "custom-web-application-development",
      "ecommerce-development",
      "ecommerce-shopify",
      "woocommerce-development",
      "wordpress-development",
      "custom-cms-development",
    ],
  },
  {
    title: "Mobile & Games",
    slugs: [
      "android-app-development",
      "ios-app-development",
      "flutter-app-development",
      "mobile-app-development",
      "game-development",
      "app-maintenance",
      "firebase-integration",
    ],
  },
  {
    title: "Software & Systems",
    slugs: [
      "custom-software-development",
      "enterprise-software-solutions",
      "saas-application-development",
      "api-development",
      "ai-solutions",
      "pos-software",
      "crm-erp-solutions",
      "inventory-management-software",
    ],
  },
  {
    title: "Design & Portals",
    slugs: [
      "ui-ux-design",
      "graphic-design",
      "logo-brand-identity",
      "real-estate-portals",
      "hospital-medical-portals",
      "education-portals",
    ],
  },
  {
    title: "Marketplaces",
    slugs: [
      "amazon-store-setup",
      "ebay-store-setup",
      "etsy-store-setup",
      "walmart-marketplace",
      "tiktok-shop-setup",
      "facebook-instagram-shop",
      "google-merchant-center",
    ],
  },
  {
    title: "SEO & Site Growth",
    slugs: [
      "seo-services",
      "technical-seo",
      "local-seo",
      "website-speed-optimization",
      "conversion-rate-optimization",
      "google-adsense",
    ],
  },
  {
    title: "Marketing & Ads",
    slugs: [
      "digital-marketing",
      "social-media-marketing",
      "google-ads",
      "facebook-instagram-ads",
      "tiktok-ads",
      "linkedin-ads",
      "email-marketing",
      "content-marketing",
      "online-reputation-management",
    ],
  },
  {
    title: "Apps, Hosting & IT",
    slugs: [
      "app-store-optimization",
      "google-admob",
      "app-monetization",
      "google-play-console",
      "app-store-publishing",
      "web-hosting",
      "website-maintenance",
      "website-security",
      "it-consulting",
      "devops-cloud-solutions",
    ],
  },
];
