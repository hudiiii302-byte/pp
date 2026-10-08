export type HireRole = {
  slug: string;
  label: string;
};

export type HireRoleGroup = {
  title: string;
  roles: HireRole[];
};

function role(label: string): HireRole {
  const slug = label
    .toLowerCase()
    .replace(/^hire\s+/, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return { slug, label };
}

export function hireEnquiryHref(slug: string) {
  return `/contact?intent=hire&role=${encodeURIComponent(slug)}`;
}

export const hireRoleGroups: HireRoleGroup[] = [
  {
    title: "Engineering stacks",
    roles: [
      role("Hire React.js Developers"),
      role("Hire Next.js Developers"),
      role("Hire Vue.js Developers"),
      role("Hire Laravel Developers"),
      role("Hire Node.js Developers"),
      role("Hire Python Developers"),
      role("Hire Java Developers"),
      role("Hire C# Developers"),
      role("Hire React Native Developers"),
      role("Hire Swift Developers"),
    ],
  },
  {
    title: "Software & design",
    roles: [
      role("Hire Website Developers"),
      role("Hire Custom Web App Developers"),
      role("Hire E-commerce Developers"),
      role("Hire Shopify Developers"),
      role("Hire WooCommerce Developers"),
      role("Hire WordPress Developers"),
      role("Hire CMS Developers"),
      role("Hire Android App Developers"),
      role("Hire iOS App Developers"),
      role("Hire Flutter App Developers"),
      role("Hire Cross-Platform App Developers"),
      role("Hire Android Game Developers"),
      role("Hire iOS Game Developers"),
      role("Hire Unity Game Developers"),
      role("Hire Custom Software Developers"),
      role("Hire Enterprise Software Developers"),
      role("Hire POS Developers"),
      role("Hire ERP & CRM Developers"),
      role("Hire SaaS Developers"),
      role("Hire API Developers"),
      role("Hire UI/UX Designers"),
      role("Hire Graphic Designers"),
      role("Hire Brand Identity Designers"),
    ],
  },
  {
    title: "Marketplace & Online Store",
    roles: [
      role("Hire Amazon Store Specialists"),
      role("Hire Amazon Seller Central Support"),
      role("Hire eBay Store Specialists"),
      role("Hire Etsy Store Specialists"),
      role("Hire Walmart Marketplace Specialists"),
      role("Hire TikTok Shop Specialists"),
      role("Hire Facebook Shop Specialists"),
      role("Hire Instagram Shop Specialists"),
      role("Hire Google Merchant Center Specialists"),
    ],
  },
  {
    title: "App Growth & Monetization",
    roles: [
      role("Hire ASO Specialists"),
      role("Hire App Ranking Specialists"),
      role("Hire App Growth Strategists"),
      role("Hire Google Play Publishing"),
      role("Hire Apple App Store Publishing"),
      role("Hire App Maintenance Engineers"),
      role("Hire App Monetization Specialists"),
      role("Hire AdMob Specialists"),
      role("Hire Firebase Engineers"),
      role("Hire Push Notification Engineers"),
      role("Hire App Analytics Specialists"),
    ],
  },
  {
    title: "Website Growth & Monetization",
    roles: [
      role("Hire AdSense Specialists"),
      role("Hire AdSense Optimization"),
      role("Hire SEO Specialists"),
      role("Hire Technical SEO Specialists"),
      role("Hire Local SEO Specialists"),
      role("Hire Speed Optimization Engineers"),
      role("Hire CRO Specialists"),
    ],
  },
  {
    title: "Digital Marketing",
    roles: [
      role("Hire Social Media Marketers"),
      role("Hire Social Media Managers"),
      role("Hire Facebook Ads Specialists"),
      role("Hire Instagram Ads Specialists"),
      role("Hire Google Ads Specialists"),
      role("Hire TikTok Ads Specialists"),
      role("Hire LinkedIn Ads Specialists"),
      role("Hire Email Marketers"),
      role("Hire Content Marketers"),
      role("Hire ORM Specialists"),
    ],
  },
  {
    title: "Business & IT Services",
    roles: [
      role("Hire Domain & Hosting Support"),
      role("Hire Web Hosting"),
      role("Hire Cloud Hosting"),
      role("Hire Website Maintenance"),
      role("Hire Website Security"),
      role("Hire SSL Installation"),
      role("Hire Business Email Setup"),
      role("Hire Technical Support"),
      role("Hire IT Consultants"),
      role("Hire Digital Transformation Consultants"),
    ],
  },
];

export const allHireRoles = hireRoleGroups.flatMap((group) => group.roles);

export function getHireRole(slug: string) {
  return allHireRoles.find((item) => item.slug === slug);
}
