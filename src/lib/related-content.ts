/**
 * Hub-and-spoke links between industries and topic slugs.
 * Only pairs that already exist — no new URLs.
 */
export const industryTopicSlugs: Record<string, string[]> = {
  "real-estate": ["real-estate-crm-software", "property-listing-website", "real-estate-agent-app"],
  healthcare: ["hospital-management-system", "clinic-management-software", "pharmacy-management-software"],
  pharmacy: ["pharmacy-management-software", "hospital-management-system"],
  education: ["school-erp-software", "university-portal-software"],
  retail: ["inventory-management-system", "restaurant-pos-system", "fbr-pos-integration", "tier-1-retailer-pos-requirements"],
  hospitality: ["restaurant-pos-system", "hotel-booking-system", "fbr-restaurant-pos"],
  ecommerce: ["shopify-store-setup-guide", "woocommerce-vs-shopify-store", "fbr-digital-invoicing"],
  logistics: ["warehouse-management-system"],
  finance: ["what-is-crm", "what-is-erp", "fbr-digital-invoicing"],
  manufacturing: ["inventory-management-system", "odoo-vs-custom-erp"],
  legal: ["what-is-crm"],
  fitness: ["gym-management-software"],
  construction: ["real-estate-crm-software", "dealer-management-system"],
};

const serviceToIndustry: Record<string, string> = {
  "real-estate-portals": "real-estate",
  "hospital-medical-portals": "healthcare",
  "education-portals": "education",
  "pos-software": "retail",
  "inventory-management-software": "retail",
  "ecommerce-development": "ecommerce",
  "ecommerce-shopify": "ecommerce",
};

export function industrySlugsForServices(serviceSlugs: string[]) {
  const found = new Set<string>();
  for (const slug of serviceSlugs) {
    const industry = serviceToIndustry[slug];
    if (industry) found.add(industry);
  }
  return [...found];
}
