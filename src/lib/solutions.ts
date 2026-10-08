import type { IconName } from "@/lib/types";
import { servicePhoto } from "@/lib/service-media";

export type Solution = {
  id: string;
  name: string;
  icon: IconName;
  headline: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  serviceSlug: string;
  featured?: boolean;
};

export const solutions: Solution[] = [
  {
    id: "ecommerce",
    name: "E-Commerce Development",
    icon: "ecommerce",
    headline: "Custom online stores built to sell",
    description:
      "Custom eCommerce platforms and WooCommerce stores with tailored catalogue logic, B2B pricing and marketplace integrations — for brands whose requirements outgrow a hosted platform.",
    bullets: [
      "Custom checkout logic and B2B / wholesale pricing",
      "WooCommerce, headless and fully bespoke storefronts",
      "Payment gateways, courier and COD workflows",
      "ERP, POS and marketplace inventory sync",
    ],
    image: servicePhoto("ecommerce-development"),
    imageAlt: "Luxury boutique checkout with an online store on a laptop",
    serviceSlug: "ecommerce-development",
    featured: true,
  },
  {
    id: "shopify",
    name: "Shopify Stores",
    icon: "ecommerce",
    headline: "Shopify stores launched fast and tuned to convert",
    description:
      "Custom Shopify themes, Shopify Plus builds, app integrations and migrations — with performance and conversion optimisation baked in from day one.",
    bullets: [
      "Custom Shopify themes and Shopify Plus builds",
      "Store migrations from WooCommerce, Magento or WordPress",
      "App integrations, payment and shipping setup",
      "Conversion optimisation and analytics tracking",
    ],
    image: servicePhoto("ecommerce-shopify"),
    imageAlt: "Shopify-style packing studio with a product storefront on a laptop",
    serviceSlug: "ecommerce-shopify",
    featured: true,
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Portals",
    icon: "web",
    headline: "Property portals for societies, plots and files",
    description:
      "Listing portals and CRM systems structured around how property is actually sold in Pakistan — societies, phases, blocks, plot numbers, files, instalment plans and dealer commissions.",
    bullets: [
      "Society, phase, block and plot-number inventory",
      "Plot file records, transfers and instalment schedules",
      "Lead capture from portals, ads and walk-ins with auto-routing",
      "Dealer and agent commission tracking with performance dashboards",
    ],
    image: servicePhoto("real-estate-portals"),
    imageAlt: "Property listing portal beside a housing-society architectural model",
    serviceSlug: "real-estate-portals",
    featured: true,
  },
  {
    id: "healthcare",
    name: "Hospital & Medical Store Portals",
    icon: "software",
    headline: "Systems for hospitals, clinics and pharmacies",
    description:
      "Hospital management portals with patient records, OPD and IPD workflows and billing — plus medical store software with batch, expiry and supplier control built in.",
    bullets: [
      "Patient registration, OPD queues and electronic records",
      "IPD admissions, bed management and discharge billing",
      "Medical store billing with batch and expiry (FEFO) control",
      "Prescription handling, supplier ledgers and reorder alerts",
    ],
    image: servicePhoto("hospital-medical-portals"),
    imageAlt: "Doctor reviewing a hospital portal on a tablet in a modern clinic",
    serviceSlug: "hospital-medical-portals",
    featured: true,
  },
  {
    id: "education",
    name: "University & School Portals",
    icon: "crm",
    headline: "Campus portals for schools, colleges and universities",
    description:
      "Admissions, student records, attendance, examinations, fee collection and parent communication in one portal with separate access for staff, students and parents.",
    bullets: [
      "Online admissions and applicant tracking",
      "Attendance, timetable and examination management",
      "Fee vouchers, online payment and defaulter reporting",
      "Separate student, parent, teacher and admin logins",
    ],
    image: servicePhoto("education-portals"),
    imageAlt: "Student using a university portal on a laptop in a campus library",
    serviceSlug: "education-portals",
    featured: true,
  },
  {
    id: "jewellery",
    name: "Jewellery Online Stores",
    icon: "ecommerce",
    headline: "Jewellery stores with live gold rates and made-to-order",
    description:
      "Premium online jewellery stores that handle weight-based pricing, live gold and silver rates, karat variants, certification details and high-trust product photography.",
    bullets: [
      "Weight and karat based dynamic pricing",
      "Live gold and silver rate integration",
      "Certification, hallmark and purity details per product",
      "Made-to-order, booking advance and secure delivery flows",
    ],
    image: "/brand/services/jewellery-store.jpg",
    imageAlt: "Luxury jewellery display with an online jewellery store on a laptop",
    serviceSlug: "ecommerce-shopify",
    featured: true,
  },
  {
    id: "management-portals",
    name: "Business Management Portals",
    icon: "inventory",
    headline: "Inventory, POS, CRM and ERP portals",
    description:
      "Management systems that replace spreadsheets — stock control across warehouses and branches, counter billing, sales pipelines and operational reporting in one place.",
    bullets: [
      "Multi-warehouse inventory with barcode operations",
      "POS billing that keeps working offline",
      "CRM pipelines with follow-up accountability",
      "Owner dashboards for sales, stock and receivables",
    ],
    image: servicePhoto("inventory-management-software"),
    imageAlt: "Warehouse staff scanning stock into a management portal",
    serviceSlug: "inventory-management-software",
    featured: true,
  },
];

export const propertySocieties = [
  { name: "DHA Lahore", note: "Phases, blocks, plot files and transfer records", query: "DHA Lahore" },
  { name: "Lahore Smart City", note: "Overseas and executive blocks with instalment plans", query: "Lahore Smart City" },
  { name: "Capital Smart City", note: "Plot files, ballot records and payment schedules", query: "Capital Smart City" },
  { name: "Etihad Town", note: "Residential and commercial plots with dealer inventory", query: "Etihad Town" },
  { name: "Bahria Town", note: "Sector and precinct level listing structures", query: "Bahria Town" },
  { name: "Park View City", note: "Block-wise availability and booking status", query: "Park View City" },
  { name: "Al Kabir Town", note: "Instalment tracking and file verification", query: "Al Kabir Town" },
  { name: "Central Park Housing", note: "Plot inventory with dealer commission rules", query: "Central Park Housing" },
];
