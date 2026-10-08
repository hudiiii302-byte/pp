/**
 * The sixteen headline service links that the home page surfaces underneath
 * the eight service cards.
 *
 * This list used to live inside service-ring.tsx. It was lifted out when the
 * rotating ring stopped being the only way to present it: the same sixteen
 * links now have to feed a hive, an index and a pill cloud, and three copies
 * of the same slug list is three chances for one of them to rot into a 404.
 *
 * Every slug below is checked against src/lib/services-*.ts — none 404.
 */
export type HomeServiceLink = {
  /** Service page slug, rendered as /services/<slug>. */
  slug: string;
  /** Full service name, used as the accessible label and in list layouts. */
  label: string;
  /** Shortened name for layouts where the full label will not fit. */
  short: string;
};

export const homeServiceLinks: HomeServiceLink[] = [
  { slug: "web-development", label: "Website Development", short: "Websites" },
  { slug: "crm-erp-solutions", label: "CRM & Business Management Software", short: "CRM" },
  { slug: "custom-web-application-development", label: "Custom Business Websites", short: "Custom apps" },
  { slug: "ecommerce-shopify", label: "Shopify Stores", short: "Shopify" },
  { slug: "ecommerce-development", label: "E-Commerce Stores", short: "E-commerce" },
  { slug: "inventory-management-software", label: "Distribution & Wholesale Systems", short: "Distribution" },
  { slug: "enterprise-software-solutions", label: "ERP & Business Management Systems", short: "ERP" },
  { slug: "mobile-app-development", label: "App Development", short: "Mobile apps" },
  { slug: "custom-software-development", label: "Custom Software Development", short: "Custom software" },
  { slug: "ui-ux-design", label: "UI/UX & Graphic Design", short: "UI/UX" },
  { slug: "digital-marketing", label: "Digital Marketing & Social Media", short: "Marketing" },
  { slug: "seo-services", label: "SEO & ASO", short: "SEO" },
  { slug: "ai-solutions", label: "AI Solutions & Automation", short: "AI" },
  { slug: "devops-cloud-solutions", label: "Cloud & API Integration", short: "Cloud" },
  { slug: "website-maintenance", label: "Software Maintenance & Support", short: "Maintenance" },
  { slug: "it-consulting", label: "Business Consultation", short: "Consulting" },
];

/**
 * The same sixteen links, grouped the way a buyer thinks about them rather
 * than the way the catalogue is filed: what you are building, what you sell
 * with, what keeps the business running, what makes it grow.
 */
/**
 * The home page's service index: four buyer-shaped groups of six.
 *
 * This replaced a sixteen-icon graphic. The point of the change was not
 * decoration — it is that a reader and a crawler both get twenty-four full
 * service names as anchor text here, instead of sixteen two-word labels on
 * tiles. Anchor text is the cheapest ranking signal a home page can hand to
 * its own service pages, and "Real Estate Portal Development" is worth more
 * of it than "Websites".
 *
 * Every slug is checked against src/lib/services-*.ts — none 404.
 */
export const homeServiceGroups: { title: string; blurb: string; items: { slug: string; label: string }[] }[] = [
  {
    title: "Build",
    blurb: "The product itself",
    items: [
      { slug: "web-development", label: "Website Development" },
      { slug: "custom-web-application-development", label: "Custom Web Application Development" },
      { slug: "mobile-app-development", label: "Mobile App Development" },
      { slug: "custom-software-development", label: "Custom Software Development" },
      { slug: "saas-application-development", label: "SaaS Application Development" },
      { slug: "real-estate-portals", label: "Real Estate Portal Development" },
    ],
  },
  {
    title: "Sell",
    blurb: "Storefronts, counters and stock",
    items: [
      { slug: "ecommerce-shopify", label: "Shopify Store Development" },
      { slug: "ecommerce-development", label: "E-Commerce Website Development" },
      { slug: "pos-software", label: "POS Software Development" },
      { slug: "inventory-management-software", label: "Inventory Management Software" },
      { slug: "enterprise-software-solutions", label: "ERP & Enterprise Software" },
      { slug: "woocommerce-development", label: "WooCommerce Development" },
    ],
  },
  {
    title: "Operate",
    blurb: "Run it day to day",
    items: [
      { slug: "crm-erp-solutions", label: "CRM Software Development" },
      { slug: "devops-cloud-solutions", label: "DevOps & Cloud Solutions" },
      { slug: "api-development", label: "API Development & Integration" },
      { slug: "website-maintenance", label: "Website Maintenance & Support" },
      { slug: "website-security", label: "Website Security Hardening" },
      { slug: "it-consulting", label: "IT Consulting" },
    ],
  },
  {
    title: "Grow",
    blurb: "Reach and conversion",
    items: [
      { slug: "digital-marketing", label: "Digital Marketing Services" },
      { slug: "seo-services", label: "SEO Services" },
      { slug: "local-seo", label: "Local SEO Services" },
      { slug: "google-ads", label: "Google Ads Management" },
      { slug: "ai-solutions", label: "AI Solutions & Automation" },
      { slug: "ui-ux-design", label: "UI/UX Design Services" },
    ],
  },
];
