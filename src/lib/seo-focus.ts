/**
 * Ranking focus for WordbitX. Google should treat these ten URLs as the
 * primary answers. Overlapping topic/tech pages stay live for humans but
 * are canonicalised away so they do not compete.
 */
export const noindexFollow = { index: false, follow: true } as const;

export const primaryKeywords = [
  { keyword: "software development company", path: "/" },
  { keyword: "website development company", path: "/services/web-development" },
  { keyword: "Shopify development", path: "/services/ecommerce-shopify" },
  { keyword: "ecommerce website development", path: "/services/ecommerce-development" },
  { keyword: "mobile app development", path: "/services/mobile-app-development" },
  { keyword: "SEO services", path: "/services/seo-services" },
  { keyword: "digital marketing company", path: "/services/digital-marketing" },
  { keyword: "POS software", path: "/services/pos-software" },
  { keyword: "custom software development", path: "/services/custom-software-development" },
  { keyword: "software development cost", path: "/pricing" },
] as const;

export const primaryPaths = new Set<string>(primaryKeywords.map((item) => item.path));

/** Topic slugs that repeat a service, market or careers page. */
export const duplicateTopicCanonical: Record<string, string> = {
  "what-is-custom-software": "/services/custom-software-development",
  "mvp-development-company": "/services/custom-software-development",
  "white-label-software-development": "/services/custom-software-development",
  "hospital-management-system": "/services/hospital-medical-portals",
  "clinic-management-software": "/services/hospital-medical-portals",
  "pharmacy-management-software": "/services/hospital-medical-portals",
  "patient-portal-software": "/services/hospital-medical-portals",
  "dental-clinic-software": "/services/hospital-medical-portals",
  "clinic-appointment-app": "/services/hospital-medical-portals",
  "lab-information-system": "/services/hospital-medical-portals",
  "what-is-erp": "/services/crm-erp-solutions",
  "what-is-crm": "/services/crm-erp-solutions",
  "custom-crm-vs-salesforce": "/services/crm-erp-solutions",
  "odoo-vs-custom-erp": "/services/crm-erp-solutions",
  "hr-payroll-software": "/services/crm-erp-solutions",
  "inventory-management-system": "/services/inventory-management-software",
  "warehouse-management-system": "/services/inventory-management-software",
  "spare-parts-inventory": "/services/inventory-management-software",
  "restaurant-pos-system": "/services/pos-software",
  "jewellery-pos-software": "/services/pos-software",
  "school-erp-software": "/services/education-portals",
  "learning-management-system": "/services/education-portals",
  "university-portal-software": "/services/education-portals",
  "tuition-center-software": "/services/education-portals",
  "real-estate-crm-software": "/services/real-estate-portals",
  "property-listing-website": "/services/real-estate-portals",
  "real-estate-agent-app": "/services/real-estate-portals",
  "shopify-store-setup-guide": "/services/ecommerce-shopify",
  "shopify-plus-development": "/services/ecommerce-shopify",
  "magento-vs-shopify": "/services/ecommerce-shopify",
  "woocommerce-vs-shopify-store": "/services/woocommerce-development",
  "wordpress-website-development": "/services/wordpress-development",
  "nextjs-website-development": "/services/web-development",
  "android-app-development-company": "/services/android-app-development",
  "ios-app-development-company": "/services/ios-app-development",
  "hire-flutter-developers": "/services/flutter-app-development",
  "hire-react-developers": "/services/web-development",
  "react-native-app-development": "/services/mobile-app-development",
  "cross-platform-app-development": "/services/flutter-app-development",
  "on-demand-app-development": "/services/mobile-app-development",
  "ai-chatbot-development": "/services/ai-solutions",
  "document-ai-automation": "/services/ai-solutions",
  "google-ads-for-service-businesses": "/services/google-ads",
  "local-seo-for-agencies": "/services/local-seo",
  "technical-seo-for-nextjs": "/services/technical-seo",
  "facebook-ads-for-ecommerce": "/services/facebook-instagram-ads",
  "linkedin-ads-for-b2b": "/services/linkedin-ads",
  "tiktok-ads-for-dtc": "/services/tiktok-ads",
  "instagram-shopping-setup": "/services/facebook-instagram-shop",
  "amazon-seller-central-guide": "/services/amazon-store-setup",
  "ebay-store-management": "/services/ebay-store-setup",
  "etsy-shop-seo": "/services/etsy-store-setup",
  "tiktok-shop-for-brands": "/services/tiktok-shop-setup",
  "google-shopping-ads": "/services/google-merchant-center",
  "app-store-optimization-basics": "/services/app-store-optimization",
  "website-maintenance-retainer": "/services/website-maintenance",
  "website-security-hardening": "/services/website-security",
  "conversion-rate-optimization-guide": "/services/conversion-rate-optimization",
  "core-web-vitals-guide": "/services/website-speed-optimization",
  "logo-and-brand-kit": "/services/logo-brand-identity",
  "landing-page-design": "/services/ui-ux-design",
  "mobile-app-ui-design": "/services/ui-ux-design",
  "design-system-for-products": "/services/ui-ux-design",
  "ui-ux-for-saas": "/services/ui-ux-design",
  "saas-product-development": "/services/saas-application-development",
  "api-integration-services": "/services/api-development",
  "payment-gateway-integration": "/services/ecommerce-development",
  "b2b-ecommerce-portal": "/services/ecommerce-development",
  "subscription-ecommerce": "/services/ecommerce-development",
  "checkout-optimization": "/services/conversion-rate-optimization",
  "firebase-for-startups": "/services/firebase-integration",
  "devops-for-startups": "/services/devops-cloud-solutions",
  "content-marketing-for-saas": "/services/content-marketing",
  "email-automation-for-stores": "/services/email-marketing",
  "google-search-console-setup": "/services/seo-services",
  "schema-markup-for-local-business": "/services/local-seo",
  "honest-backlink-strategy": "/services/seo-services",
  "brand-serp-management": "/services/online-reputation-management",
  "dedicated-development-team": "/careers",
  "staff-augmentation": "/careers",
  "software-development-company-usa": "/global/usa",
  "software-development-company-uk": "/global/uk",
  "software-development-company-uae": "/global/uae",
  "software-development-company-canada": "/global/canada",
  "software-development-company-australia": "/global/australia",
};

export function topicCanonical(slug: string) {
  return duplicateTopicCanonical[slug] ?? `/topics/${slug}`;
}

export function isDuplicateTopic(slug: string) {
  return Boolean(duplicateTopicCanonical[slug]);
}

export function sitemapPriority(path: string, fallback: number) {
  if (path === "/") return 1;
  return primaryPaths.has(path) ? 0.95 : fallback;
}
