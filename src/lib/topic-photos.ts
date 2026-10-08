import { servicePhoto } from "@/lib/service-media";

type Photo = { src: string; alt: string };

const extra = {
  jewellery: "/brand/services/jewellery-store.jpg",
  travel: "/brand/services/travel-booking.jpg",
  construction: "/brand/services/construction-site.jpg",
} as const;

export const projectPhotos: Record<string, Photo> = {
  "multi-branch-retail-pos-platform": {
    src: servicePhoto("pos-software"),
    alt: "Retail counter with a touchscreen POS terminal in a clothing store",
  },
  "logistics-fleet-tracking-app": {
    src: servicePhoto("inventory-management-software"),
    alt: "Warehouse team scanning parcels for a fleet and delivery operation",
  },
  "fashion-shopify-storefront": {
    src: servicePhoto("ecommerce-shopify"),
    alt: "Fashion brand packing station with a Shopify-style storefront on a laptop",
  },
  "clinic-appointment-booking-portal": {
    src: servicePhoto("hospital-medical-portals"),
    alt: "Doctor reviewing a clinic booking portal on a tablet",
  },
  "ai-document-processing-assistant": {
    src: servicePhoto("ai-solutions"),
    alt: "AI workstation extracting information from business documents",
  },
  "real-estate-listing-marketplace": {
    src: servicePhoto("real-estate-portals"),
    alt: "Property listing portal beside a housing-society architectural model",
  },
  "fintech-app-design-system": {
    src: servicePhoto("ui-ux-design"),
    alt: "Product designer arranging fintech app screens and a design system",
  },
  "b2b-wholesale-ordering-app": {
    src: servicePhoto("ecommerce-development"),
    alt: "Wholesale ordering on a laptop next to a boutique checkout counter",
  },
  "hospital-management-system": {
    src: servicePhoto("hospital-medical-portals"),
    alt: "Hospital staff using a medical records and pharmacy portal",
  },
  "warehouse-inventory-management-system": {
    src: servicePhoto("inventory-management-software"),
    alt: "Warehouse worker scanning pallet stock on an industrial tablet",
  },
  "real-estate-crm-property-management": {
    src: servicePhoto("real-estate-portals"),
    alt: "Real estate CRM and property portal on a laptop in an agency office",
  },
  "housing-society-property-portal": {
    src: servicePhoto("real-estate-portals"),
    alt: "Housing society plot files and listing portal on a laptop",
  },
  "jewellery-ecommerce-store": {
    src: extra.jewellery,
    alt: "Luxury jewellery display with an online jewellery store on a laptop",
  },
  "medical-store-pharmacy-portal": {
    src: servicePhoto("pos-software"),
    alt: "Pharmacy counter billing on a modern POS terminal",
  },
  "saas-operations-dashboard": {
    src: servicePhoto("saas-application-development"),
    alt: "SaaS operations dashboard with billing and admin charts",
  },
  "school-admissions-fee-portal": {
    src: servicePhoto("education-portals"),
    alt: "Student using a school admissions and fee portal in a campus library",
  },
  "restaurant-order-kitchen-system": {
    src: servicePhoto("pos-software"),
    alt: "Restaurant counter POS for kitchen orders and table billing",
  },
  "construction-project-management-portal": {
    src: extra.construction,
    alt: "Site supervisor reviewing a construction schedule on a tablet",
  },
  "subscription-ecommerce-platform": {
    src: servicePhoto("ecommerce-development"),
    alt: "Subscription commerce checkout on a laptop in a retail studio",
  },
  "field-service-mobile-application": {
    src: servicePhoto("mobile-app-development"),
    alt: "Field professional using a scheduling app on a smartphone",
  },
  "travel-booking-platform": {
    src: extra.travel,
    alt: "Flight and hotel booking website open beside a passport and boarding pass",
  },
  "legal-document-review-workflow": {
    src: servicePhoto("ai-solutions"),
    alt: "AI-assisted legal document review on dual monitors",
  },
  "multi-location-clinic-booking-app": {
    src: servicePhoto("hospital-medical-portals"),
    alt: "Multi-location clinic booking on a tablet in a modern hospital",
  },
  "b2b-procurement-portal": {
    src: servicePhoto("inventory-management-software"),
    alt: "Supplier procurement and warehouse stock on an industrial tablet",
  },
  "marketing-analytics-lead-platform": {
    src: servicePhoto("digital-marketing"),
    alt: "Marketing analytics and lead-routing dashboards on multiple screens",
  },
};

export const postPhotos: Record<string, Photo> = {
  "mobile-app-development-guide": {
    src: servicePhoto("mobile-app-development"),
    alt: "Person using a business mobile app in a modern office",
  },
  "custom-software-vs-ready-made-software": {
    src: servicePhoto("custom-software-development"),
    alt: "Engineers mapping custom software architecture on a glass whiteboard",
  },
  "how-ai-automation-helps-businesses": {
    src: servicePhoto("ai-solutions"),
    alt: "Artificial intelligence workstation with document-intelligence graphs",
  },
  "how-to-choose-a-web-development-company": {
    src: servicePhoto("web-development"),
    alt: "Custom business website on an ultrawide monitor in a premium studio",
  },
  "seo-guide-for-businesses": {
    src: servicePhoto("seo-services"),
    alt: "SEO analyst reviewing search rankings and a keyword spreadsheet",
  },
  "shopify-vs-custom-ecommerce-website": {
    src: servicePhoto("ecommerce-shopify"),
    alt: "Shopify-style brand packing table with an online store on a laptop",
  },
  "crm-vs-erp-which-one-does-your-business-need": {
    src: servicePhoto("crm-erp-solutions"),
    alt: "CRM pipeline board on a sales operations monitor",
  },
  "inventory-management-software-guide": {
    src: servicePhoto("inventory-management-software"),
    alt: "Warehouse scanning stock into an inventory system",
  },
  "website-development-cost-pakistan": {
    src: servicePhoto("web-development"),
    alt: "Premium website being designed on a large studio monitor",
  },
  "flutter-app-development-benefits": {
    src: servicePhoto("flutter-app-development"),
    alt: "Smartphone and tablet showing the same Flutter app",
  },
  "android-vs-ios-which-to-build-first": {
    src: servicePhoto("ios-app-development"),
    alt: "iPhone and laptop with a native mobile app on a stone desk",
  },
  "how-to-launch-a-shopify-store": {
    src: servicePhoto("ecommerce-shopify"),
    alt: "Direct-to-consumer packing studio launching an online store",
  },
  "wordpress-vs-custom-website": {
    src: servicePhoto("wordpress-development"),
    alt: "WordPress-style content editor and blog layout on an iMac",
  },
  "website-speed-and-seo": {
    src: servicePhoto("website-speed-optimization"),
    alt: "Website performance scores on a studio monitor",
  },
  "how-seo-helps-businesses-grow": {
    src: servicePhoto("seo-services"),
    alt: "Search rankings research for a growing business",
  },
  "complete-guide-to-app-store-optimization": {
    src: servicePhoto("app-store-optimization"),
    alt: "App store listing screenshots and keyword notes on a pinboard",
  },
  "how-to-get-google-adsense-approval": {
    src: servicePhoto("google-adsense"),
    alt: "Publisher website with ad slots and revenue charts",
  },
  "pos-software-for-retail-pakistan": {
    src: servicePhoto("pos-software"),
    alt: "Retail POS terminal on a boutique checkout counter",
  },
  "hire-android-app-developers": {
    src: servicePhoto("android-app-development"),
    alt: "Android smartphone showing a business app in development",
  },
  "custom-crm-for-growing-businesses": {
    src: servicePhoto("crm-erp-solutions"),
    alt: "Custom CRM contacts and pipeline on a widescreen",
  },
  "digital-marketing-for-software-companies": {
    src: servicePhoto("digital-marketing"),
    alt: "Campaign dashboards and ad creatives in a marketing war-room",
  },
  "software-company-lahore": {
    src: servicePhoto("it-consulting"),
    alt: "Consultant presenting a systems diagram to a client team",
  },
  "ecommerce-website-cost-pakistan": {
    src: servicePhoto("ecommerce-development"),
    alt: "Luxury online store checkout on a laptop in a boutique",
  },
  "shopify-vs-woocommerce": {
    src: servicePhoto("woocommerce-development"),
    alt: "Storefront and shop dashboard on a commerce studio iMac",
  },
  "flutter-vs-react-native": {
    src: servicePhoto("flutter-app-development"),
    alt: "Cross-platform mobile app on a phone and tablet",
  },
  "school-management-system-software": {
    src: servicePhoto("education-portals"),
    alt: "University student portal open in a campus library",
  },
  "restaurant-pos-software-pakistan": {
    src: servicePhoto("pos-software"),
    alt: "Restaurant point of sale terminal at a service counter",
  },
  "seo-vs-google-ads": {
    src: servicePhoto("google-ads"),
    alt: "Paid-search dashboard with graphs and search-ad previews",
  },
  "local-seo-for-small-business": {
    src: servicePhoto("local-seo"),
    alt: "Local storefront with a maps pack on a phone in the foreground",
  },
  "sell-on-amazon-from-pakistan": {
    src: servicePhoto("amazon-store-setup"),
    alt: "Marketplace seller packing boxes with a product listing on a laptop",
  },
  "saas-mvp-development-cost": {
    src: servicePhoto("saas-application-development"),
    alt: "SaaS product billing and admin charts on a laptop",
  },
  "website-or-mobile-app-first": {
    src: servicePhoto("mobile-app-development"),
    alt: "Smartphone app in use in a glass office lobby",
  },
  "offshore-software-development-company": {
    src: servicePhoto("it-consulting"),
    alt: "Software consulting meeting in a premium glass office",
  },
};

export function withTopicPhoto<T extends { slug: string; image: string; imageAlt: string }>(
  entry: T,
  catalog: Record<string, Photo>,
): T {
  const photo = catalog[entry.slug];
  if (!photo) return entry;
  return { ...entry, image: photo.src, imageAlt: photo.alt };
}
