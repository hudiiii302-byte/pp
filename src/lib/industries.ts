import type { Faq } from "@/lib/types";

export type Industry = {
  slug: string;
  name: string;
  h1: string;
  tagline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  problems: { title: string; text: string }[];
  solutions: { title: string; text: string }[];
  modules: string[];
  services: string[];
  projects: string[];
  posts: string[];
  faqs: Faq[];
};

export const industries: Industry[] = [
  {
    slug: "retail",
    name: "Retail",
    h1: "Retail Software Development for Stores, Chains and Counters",
    tagline: "POS, inventory and branch reporting that keep selling when the internet drops.",
    summary:
      "Software for retailers who need offline billing, accurate multi-branch stock and owner-level visibility — not another cloud tool that freezes at the counter.",
    metaTitle: "Retail Software Development | POS, Inventory & Branch Systems",
    metaDescription:
      "Retail software development for stores and chains: offline POS, barcode inventory, multi-branch stock, supplier ledgers and owner dashboards built by WordbitX.",
    image: "/brand/services/pos-software.jpg",
    imageAlt: "Retail point of sale counter with card payment terminal",
    problems: [
      { title: "Billing stops when connectivity drops", text: "Cloud-only POS tools freeze the counter. Retail needs a local data layer that syncs later." },
      { title: "Stock never matches the shelf", text: "Untracked transfers, returns and wastage make month-end a guess." },
      { title: "No live view across branches", text: "Owners wait for WhatsApp totals instead of seeing sales by branch and hour." },
    ],
    solutions: [
      { title: "Offline-first POS", text: "Two-tap billing, barcode and keyboard support, receipts and tax invoices." },
      { title: "Branch inventory", text: "Transfers, in-transit visibility and cycle counts tied to every sale." },
      { title: "Owner reporting", text: "Sales, margin, staff and hour-of-day views without spreadsheet consolidation." },
    ],
    modules: ["Counter billing", "Barcode receiving", "Transfers", "Shift reports", "Discount controls", "Supplier POs"],
    services: ["pos-software", "inventory-management-software", "ecommerce-development", "custom-software-development"],
    projects: ["multi-branch-retail-pos-platform", "warehouse-inventory-management-system"],
    posts: ["pos-software-for-retail-pakistan", "inventory-management-software-guide"],
    faqs: [
      { question: "Can the POS work without internet?", answer: "Yes. Billing, printing and stock deduction continue offline and sync when the connection returns." },
      { question: "Do you integrate online stores?", answer: "Yes. Shopify, WooCommerce or a custom storefront can share the same inventory balance." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    h1: "Real Estate Software for Portals, Agencies and Housing Societies",
    tagline: "Plot files, instalment plans and dealer CRM — modelled the way property is actually sold.",
    summary:
      "Portals and CRMs structured around societies, phases, blocks, plot numbers and file transfers rather than generic listing templates.",
    metaTitle: "Real Estate Software Development | Property Portals & CRM",
    metaDescription:
      "Real estate software for agencies and societies: listing portals, plot-file inventory, instalment schedules, dealer commissions and lead routing.",
    image: "/brand/industries/real-estate.jpg",
    imageAlt: "Property consultant completing a plot handover",
    problems: [
      { title: "The same plot booked twice", text: "Spreadsheet availability goes stale within hours." },
      { title: "Leads lost in chat groups", text: "No owner, no next action, no source attribution." },
      { title: "Instalment recovery by memory", text: "Overdue payments surface late and inconsistently." },
    ],
    solutions: [
      { title: "Society-aware inventory", text: "Phases, blocks, plot sizes and file rules configured per project." },
      { title: "Dealer CRM", text: "Lead capture, assignment, viewing schedules and commission rules." },
      { title: "Payment schedules", text: "Instalment plans, receipts and overdue alerts generated from the booking." },
    ],
    modules: ["Listings & maps", "Plot files", "Holds & bookings", "Instalments", "Document vault", "Commission"],
    services: ["real-estate-portals", "crm-erp-solutions", "web-development", "seo-services"],
    projects: ["housing-society-property-portal", "real-estate-crm-property-management", "real-estate-listing-marketplace"],
    posts: ["custom-crm-for-growing-businesses", "how-to-choose-a-web-development-company"],
    faqs: [
      { question: "Can this handle DHA or Smart City style inventory?", answer: "Yes. Each society defines its own phases, blocks and file rules rather than being forced into a generic property type." },
      { question: "Do you invent client relationships with those societies?", answer: "No. Society names describe inventory structures we support, not endorsements or retained clients." },
      { question: "Can we see a real property portal you built?", answer: "Yes. Properties Pak (propertiespak.com) is our own live Pakistan property portal — society and phase listings, map-led search, plot/file detail pages and dealer enquiry routing. It is a production product you can open right now, not a mock-up." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    h1: "Healthcare Software for Hospitals, Clinics and Diagnostic Labs",
    tagline: "One patient identity across registration, OPD, IPD, lab and billing.",
    summary:
      "Hospital and clinic systems that stop departments keeping separate records of the same patient.",
    metaTitle: "Healthcare Software Development | Hospital & Clinic Systems",
    metaDescription:
      "Healthcare software development: hospital information systems, clinic portals, OPD/IPD workflows, lab orders and consolidated billing.",
    image: "/brand/industries/healthcare.jpg",
    imageAlt: "Clinician reviewing records on a hospital tablet",
    problems: [
      { title: "One patient, many files", text: "Registration, lab and pharmacy each create a different record." },
      { title: "Revenue leaking between departments", text: "Charges billed separately get missed at discharge." },
      { title: "No audit trail on clinical access", text: "Patient data needs role separation and a log of every view." },
    ],
    solutions: [
      { title: "Unified patient master", text: "One medical record number used by every department." },
      { title: "OPD and IPD workflows", text: "Queues, notes, e-prescriptions, beds and discharge summaries." },
      { title: "Consolidated billing", text: "Departmental charges on a single invoice." },
    ],
    modules: ["Registration", "OPD", "IPD / beds", "Lab orders", "Pharmacy link", "Audit log"],
    services: ["hospital-medical-portals", "custom-software-development", "mobile-app-development"],
    projects: ["hospital-management-system", "clinic-appointment-booking-portal"],
    posts: ["custom-software-vs-ready-made-software", "how-ai-automation-helps-businesses"],
    faqs: [
      { question: "Do you store clinical data securely?", answer: "Access is role-based, data is encrypted in transit and at rest, and every record view is written to an audit log. Retention is agreed before launch." },
      { question: "Can a clinic start smaller than a full HMIS?", answer: "Yes. Many start with appointments, notes and billing, then add IPD or lab later on the same patient record." },
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    h1: "Pharmacy & Medical Store Software with Batch and Expiry Control",
    tagline: "Counter billing that picks the earliest-expiring batch, not a simple product quantity.",
    summary:
      "Medical store systems for single shops and pharmacy chains that lose money to expiry write-offs and stockouts.",
    metaTitle: "Pharmacy Software Development | Medical Store POS & Inventory",
    metaDescription:
      "Pharmacy and medical store software: FEFO dispensing, batch and expiry tracking, salt-wise alternatives, supplier ledgers and multi-branch stock.",
    image: "/brand/industries/pharmacy.jpg",
    imageAlt: "Pharmacy staff using a medical store management system",
    problems: [
      { title: "Expiry found too late", text: "Item-level stock hides which batch is about to expire." },
      { title: "No alternative when a brand is out", text: "Staff cannot see salt-wise substitutes at the counter." },
      { title: "Branches cannot see each other's stock", text: "Customers are turned away while another branch holds the pack." },
    ],
    solutions: [
      { title: "FEFO dispensing", text: "Every pack carries batch and expiry; billing picks first-expiry-first-out." },
      { title: "Salt mapping", text: "Offer an available generic when the requested brand is out." },
      { title: "Branch lookup", text: "Live stock across locations and a transfer workflow." },
    ],
    modules: ["Barcode billing", "Batch / expiry", "Near-expiry alerts", "Supplier returns", "Prescriptions", "Reorder points"],
    services: ["hospital-medical-portals", "pos-software", "inventory-management-software"],
    projects: ["medical-store-pharmacy-portal", "hospital-management-system"],
    posts: ["inventory-management-software-guide", "pos-software-for-retail-pakistan"],
    faqs: [
      { question: "Can this handle a chain, not just one shop?", answer: "Yes. Each branch bills locally while head office sees consolidated expiry exposure, sales and transfers." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    h1: "School, College and University Portal Development",
    tagline: "Admissions, attendance, exams and fee recovery on one student record.",
    summary:
      "Campus portals that replace paper admissions, manual vouchers and parent phone calls with a single student information system.",
    metaTitle: "Education Software Development | School & University Portals",
    metaDescription:
      "School and university portal development: online admissions, attendance, examinations, fee vouchers and parent, student and teacher logins.",
    image: "/brand/industries/education.jpg",
    imageAlt: "University lecture hall supported by a campus portal",
    problems: [
      { title: "Admissions chaos every intake", text: "Paper forms and phone follow-ups lose applicants." },
      { title: "Fee recovery guesswork", text: "Defaulters hide in ledgers until the term is over." },
      { title: "Parents kept in the dark", text: "Attendance and results arrive late, if at all." },
    ],
    solutions: [
      { title: "Online admissions", text: "Applications, documents, merit lists and applicant tracking." },
      { title: "Academic operations", text: "Timetables, attendance, marks and result cards." },
      { title: "Fees & parent access", text: "Vouchers, online payment and a parent login for status." },
    ],
    modules: ["Admissions", "SIS", "Attendance", "Exams", "Fees", "Parent / student portals"],
    services: ["education-portals", "custom-software-development", "web-development"],
    projects: ["clinic-appointment-booking-portal"],
    posts: ["custom-software-vs-ready-made-software", "how-to-choose-a-web-development-company"],
    faqs: [
      { question: "Can one portal serve several campuses?", answer: "Yes. Each campus keeps its own classes and fee heads while head office sees consolidated enrolment and collection." },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    h1: "Logistics Software for Fleets, Warehouses and Field Teams",
    tagline: "Delivery apps, offline job queues and warehouse stock that stay in sync.",
    summary:
      "Systems for distributors and delivery operations that currently coordinate drivers by phone and stock by spreadsheet.",
    metaTitle: "Logistics Software Development | Fleet, Warehouse & Delivery Apps",
    metaDescription:
      "Logistics software: driver apps, dispatcher consoles, proof of delivery, offline job queues and warehouse inventory built for unreliable connectivity.",
    image: "/brand/services/inventory-management-software.jpg",
    imageAlt: "Delivery application used during a field job",
    problems: [
      { title: "Status updates die in dead zones", text: "Cloud-only apps fail when drivers lose signal." },
      { title: "Proof of delivery lives in chat", text: "Photos and signatures cannot be audited later." },
      { title: "Warehouse and vans disagree", text: "Stock leaves without a movement record." },
    ],
    solutions: [
      { title: "Offline job queues", text: "Updates store locally and sync when signal returns." },
      { title: "Digital POD", text: "Signature, photo, timestamp and geolocation per drop." },
      { title: "Dispatcher console", text: "Assignment, live map and exception handling." },
    ],
    modules: ["Driver app", "Dispatcher map", "POD", "Warehouse picks", "Transfers", "Exception alerts"],
    services: ["mobile-app-development", "inventory-management-software", "custom-software-development"],
    projects: ["logistics-fleet-tracking-app", "warehouse-inventory-management-system", "b2b-wholesale-ordering-app"],
    posts: ["mobile-app-development-guide", "inventory-management-software-guide"],
    faqs: [
      { question: "Will this work on mid-range Android phones?", answer: "Yes. Field apps are profiled on the device tier drivers actually carry, not only flagships." },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    h1: "E-Commerce Software for Brands, Wholesale and Marketplaces",
    tagline: "Storefronts, checkout and catalogue operations engineered for conversion — on Shopify or custom.",
    summary:
      "Online selling systems from Shopify launches to custom B2B catalogues, with honest shipping, clean tracking and inventory that matches the warehouse.",
    metaTitle: "E-Commerce Software Development | Shopify & Custom Stores",
    metaDescription:
      "E-commerce software for brands and wholesale: Shopify stores, custom storefronts, checkout, payments, shipping and inventory sync.",
    image: "/brand/industries/ecommerce.jpg",
    imageAlt: "Customers shopping on a laptop and phone",
    problems: [
      { title: "Abandoned carts", text: "Forced accounts and surprise shipping kill orders." },
      { title: "Catalogue nobody can find", text: "Weak search and thin product data hide inventory." },
      { title: "Stock oversells", text: "Online and counter stock are two different numbers." },
    ],
    solutions: [
      { title: "Conversion-first storefronts", text: "Clear delivery, guest checkout and product pages that answer questions." },
      { title: "Platform honesty", text: "Shopify when it fits; custom or WooCommerce when it does not." },
      { title: "Shared inventory", text: "POS, warehouse and storefront deduct the same balance." },
    ],
    modules: ["Catalogue", "Checkout", "Payments", "Shipping", "OMS", "Analytics"],
    services: ["ecommerce-development", "ecommerce-shopify", "seo-services", "digital-marketing"],
    projects: ["fashion-shopify-storefront", "jewellery-ecommerce-store"],
    posts: ["how-to-launch-a-shopify-store", "shopify-vs-custom-ecommerce-website"],
    faqs: [
      { question: "Shopify or custom?", answer: "Shopify for speed and simple operations. Custom when pricing, B2B accounts or ERP depth exceed the platform. We recommend after seeing the catalogue." },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    h1: "Hospitality Software for Restaurants, Cafés and Service Counters",
    tagline: "Table flows, kitchen tickets and billing that keep moving during a rush.",
    summary:
      "Restaurant and café systems covering KOT, modifiers, split bills and inventory of perishable items.",
    metaTitle: "Hospitality Software Development | Restaurant POS & Kitchen Systems",
    metaDescription:
      "Hospitality software for restaurants and cafés: table management, kitchen order tickets, modifiers, split billing and perishable inventory.",
    image: "/brand/services/travel-booking.jpg",
    imageAlt: "Front-of-house counter taking a card payment at a hospitality venue",
    problems: [
      { title: "Kitchen tickets go missing", text: "Verbal orders and paper chits create wrong or late dishes." },
      { title: "Modifiers never hit the bill", text: "Extras are given away because the POS cannot express them quickly." },
      { title: "Food cost is a monthly surprise", text: "Recipes are not tied to inventory movements." },
    ],
    solutions: [
      { title: "Restaurant POS", text: "Tables, KOTs, modifiers and split / merge bills." },
      { title: "Recipe-level stock", text: "Ingredients deduct when a dish is fired." },
      { title: "Shift control", text: "Discount limits, voids and cash-up reports." },
    ],
    modules: ["Tables", "KOT", "Modifiers", "Split bills", "Recipes", "Shifts"],
    services: ["pos-software", "inventory-management-software", "custom-software-development"],
    projects: ["multi-branch-retail-pos-platform"],
    posts: ["pos-software-for-retail-pakistan", "custom-software-vs-ready-made-software"],
    faqs: [
      { question: "Do you support multiple printers?", answer: "Yes. Kitchen, bar and receipt printers can be routed by item category." },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    h1: "Finance Software for Operations, Documents and Controlled Workflows",
    tagline: "Document processing, approvals and reporting — without claiming to be a bank or a licensed advisor.",
    summary:
      "Operational software for finance teams: invoice extraction, approval chains, audit logs and integrations with the accounting tools you already run.",
    metaTitle: "Finance Operations Software | Document Intelligence & Workflows",
    metaDescription:
      "Software for finance operations: invoice and document processing, approval workflows, audit logging and integrations. Not a banking or investment product.",
    image: "/brand/services/saas-application-development.jpg",
    imageAlt: "Finance operations dashboard and document review",
    problems: [
      { title: "Hours lost re-keying invoices", text: "Supplier documents arrive in inconsistent layouts." },
      { title: "Approvals live in email", text: "No one can see who signed off or when." },
      { title: "Reports nobody trusts", text: "Numbers are assembled by hand at month-end." },
    ],
    solutions: [
      { title: "Document intelligence", text: "Extraction with confidence scores and human review on exceptions." },
      { title: "Approval workflows", text: "Role-based sign-off with a full audit trail." },
      { title: "Integrations", text: "Push structured data into the accounting system you already use." },
    ],
    modules: ["Ingestion", "Extraction review", "Approvals", "Audit log", "Exports", "Cost alerts"],
    services: ["ai-solutions", "custom-software-development", "crm-erp-solutions"],
    projects: ["ai-document-processing-assistant", "fintech-app-design-system"],
    posts: ["how-ai-automation-helps-businesses", "custom-software-vs-ready-made-software"],
    faqs: [
      { question: "Do you build banking or trading products?", answer: "We build operational tools and integrations. Licensed financial products require the client's own regulatory permissions — we do not claim those licences." },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    h1: "Manufacturing Software for Job Cards, BOM and Shop-Floor Stock",
    tagline: "Work orders and materials that match what actually left the floor — not a spreadsheet from last week.",
    summary:
      "Light manufacturing systems: bills of materials, job cards, wastage and finished-goods stock that purchasing can trust.",
    metaTitle: "Manufacturing Software | Job Cards, BOM & Shop Floor",
    metaDescription:
      "Manufacturing software from WordbitX: bills of materials, job cards, wastage and finished-goods inventory for growing factories — not a full MES theatre.",
    image: "/brand/services/enterprise-software-solutions.jpg",
    imageAlt: "Shop-floor team reviewing production and inventory",
    problems: [
      { title: "BOM and actuals never match", text: "Wastage is informal, so costing is a guess." },
      { title: "Job status lives on a whiteboard", text: "Sales cannot say when an order will ship." },
      { title: "Finished goods vanish into retail", text: "No hand-off between production and the store." },
    ],
    solutions: [
      { title: "Job cards", text: "A work order with materials, status and who signed off." },
      { title: "Simple BOM", text: "Ingredients or components deducted when a job completes." },
      { title: "Finished-goods stock", text: "Production receipts that the warehouse and POS can see." },
    ],
    modules: ["BOM", "Job cards", "Wastage", "FG stock", "Purchase requests", "Basic costing"],
    services: ["custom-software-development", "inventory-management-software", "crm-erp-solutions"],
    projects: ["warehouse-inventory-management-system"],
    posts: ["inventory-management-software-guide", "crm-vs-erp-which-one-does-your-business-need"],
    faqs: [
      { question: "Do you replace SAP PP?", answer: "No. We build the gap a mid-size plant will actually run. If you need a full MES, we will say so." },
    ],
  },
  {
    slug: "legal",
    name: "Legal & Professional",
    h1: "Software for Law Firms and Professional Services",
    tagline: "Matters, documents and time — without claiming to practise law.",
    summary:
      "Practice operations: matter files, deadlines, document vaults and client updates. We build software; we do not give legal advice.",
    metaTitle: "Legal Practice Software | Matters, Documents & Clients",
    metaDescription:
      "Software for law firms and professional services: matter management, documents and client updates. WordbitX builds tools — we do not practise law.",
    image: "/brand/services/it-consulting.jpg",
    imageAlt: "Professional services team reviewing case files on a laptop",
    problems: [
      { title: "Matters live in email folders", text: "Nobody can see the next deadline from one screen." },
      { title: "Versions of the same contract", text: "Clients receive the wrong PDF." },
      { title: "Billing from memory", text: "Time is lost and write-offs appear at month-end." },
    ],
    solutions: [
      { title: "Matter files", text: "A single record for parties, dates and status." },
      { title: "Document vault", text: "Named versions the client portal can share." },
      { title: "Time & invoices", text: "Optional time capture that exports to the accounts tool you already use." },
    ],
    modules: ["Matters", "Deadlines", "Documents", "Client updates", "Time", "Invoices"],
    services: ["custom-software-development", "custom-web-application-development", "crm-erp-solutions"],
    projects: [],
    posts: ["custom-crm-for-growing-businesses", "custom-software-vs-ready-made-software"],
    faqs: [
      { question: "Are you a law firm?", answer: "No. We are a software company. Privilege, filings and advice stay with licensed lawyers." },
    ],
  },
  {
    slug: "fitness",
    name: "Fitness",
    h1: "Fitness and Gym Software for Memberships and Check-in",
    tagline: "Memberships, freezes and a door that knows who paid — then classes if you need them.",
    summary:
      "Gym and studio operations: memberships, attendance, freezes and staff check-in. Wearable medical claims are out of scope.",
    metaTitle: "Gym & Fitness Software | Memberships and Check-in",
    metaDescription:
      "Fitness software for gyms and studios: memberships, check-in, freezes and staff attendance. Built by WordbitX — not a health programme.",
    image: "/brand/services/mobile-app-development.jpg",
    imageAlt: "Membership app shown on a phone and tablet side by side",
    problems: [
      { title: "Frozen memberships nobody recorded", text: "Revenue leaks at the desk." },
      { title: "Guests walk in free", text: "No check-in trail." },
      { title: "Trainers keep lists on their phones", text: "The business cannot see utilisation." },
    ],
    solutions: [
      { title: "Membership state", text: "Active, frozen, expired — with who changed it." },
      { title: "Check-in", text: "A door or desk flow the evening staff will use." },
      { title: "Optional classes", text: "Bookings after the membership object is trusted." },
    ],
    modules: ["Memberships", "Check-in", "Freezes", "Staff", "Packages", "Simple POS"],
    services: ["custom-software-development", "mobile-app-development", "pos-software"],
    projects: [],
    posts: ["saas-mvp-development-cost", "local-seo-for-small-business"],
    faqs: [
      { question: "Do you write workout plans?", answer: "No. We build membership and operations software." },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    h1: "Construction Operations Software for Sites, Snags and Materials",
    tagline: "Site diaries, snag lists and material requests that survive a dusty WhatsApp group.",
    summary:
      "Builder and contractor operations: site progress, snags, material requests and a simple client update — not a full BIM platform.",
    metaTitle: "Construction Software | Site Diaries, Snags & Materials",
    metaDescription:
      "Construction operations software from WordbitX: site diaries, snag lists, material requests and client updates for contractors and developers.",
    image: "/brand/services/construction-site.jpg",
    imageAlt: "Site supervisor recording materials and progress on a handheld device",
    problems: [
      { title: "Progress lives in a group chat", text: "Owners cannot see what happened yesterday." },
      { title: "Snags are verbal", text: "Handover arguments start from missing photos." },
      { title: "Material requests disappear", text: "Purchasing cannot prove what the site asked for." },
    ],
    solutions: [
      { title: "Site diary", text: "Dated notes and photos against a plot or unit." },
      { title: "Snag lists", text: "Open / closed items with an owner." },
      { title: "Material requests", text: "A queue purchasing can fulfil or reject." },
    ],
    modules: ["Sites / units", "Diaries", "Snags", "Materials", "Approvals", "Client view"],
    services: ["custom-software-development", "mobile-app-development", "real-estate-portals"],
    projects: ["housing-society-property-portal"],
    posts: ["custom-software-vs-ready-made-software", "how-to-choose-a-web-development-company"],
    faqs: [
      { question: "Do you do architectural design?", answer: "No. We build operations tools. Drawings stay with your architects." },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}
