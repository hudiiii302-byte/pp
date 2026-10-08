import type { Project, ProjectCategory } from "@/lib/types";
import { media } from "@/lib/media";
import { moreProjects } from "@/lib/portfolio-more";
import { projectPhotos, withTopicPhoto } from "@/lib/topic-photos";

export const portfolioDisclosure =
  "Client names, commercial figures and confidential product screens are shared privately on request. The profiles below describe the scope, architecture and functionality WordBitX delivers. Newer profiles are explicitly labelled Confidential Client / public scope profile when the client has not approved public identification. We use relevant licensed industry photography rather than inventing a client logo, screenshot or result.";
export const projectCategories: ("All Projects" | ProjectCategory)[] = [
  "All Projects",
  "Websites",
  "Mobile Apps",
  "Software",
  "E-Commerce",
  "AI",
  "Design",
];

const originalProjects: Project[] = [
  {
    slug: "multi-branch-retail-pos-platform",
    title: "Multi-Branch Retail POS Platform",
    type: "Point of sale & inventory platform",
    category: "Software",
    industry: "Retail",
    year: "2024",
    engagement: "WordbitX demo project — product design, development and rollout simulation",
    clientLabel: "WordbitX Demo",
    publicStatus: "Sample project created to demonstrate POS and inventory software capability. It is not presented as a client engagement.",
    summary:
      "A WordbitX demo of an offline-capable point of sale with centralised inventory, branch reporting and supplier management.",
    metaTitle: "Multi-Branch Retail POS Platform | WordBitX Project Profile",
    metaDescription:
      "A custom POS and inventory platform with offline billing, live stock control, supplier management and multi-branch reporting built by WordBitX.",
    image: media.posTerminal,
    imageAlt: "Retail point of sale terminal with card payment and inventory system",
    gallery: [
      { src: media.posTerminal, alt: "POS billing screen with card payment", caption: "Counter billing designed for two-tap checkout" },
      { src: media.officeTeam, alt: "Managers reviewing branch sales reports", caption: "Branch and owner dashboards with live sales data" },
    ],
    overview: [
      "This WordbitX demo models the type of POS and inventory platform a multi-branch retailer needs: counter billing, warehouse stock, supplier purchasing and owner reporting connected to one ledger.",
      "It was created to demonstrate offline-first counter design, role-based access and traceable stock movements. It is a sample capability project, not a disclosed client deployment.",
    ],
    challenge: [
      "Demonstrate a counter flow that can continue during an internet interruption.",
      "Show how transfers, returns and purchases can be recorded against one stock ledger.",
      "Show managers the reporting views typically needed across branches.",
    ],
    solution: [
      "An offline-first POS concept with a local data layer and conflict-safe synchronisation.",
      "A central inventory model tracking sales, returns, transfers and purchase orders.",
      "Role-based concept screens for cashier, branch manager and owner access.",
      "Dashboard concepts reporting by branch, product, category, staff and hour.",
    ],
    features: [
      "Barcode and keyboard-first billing flow",
      "Offline mode with automatic sync and conflict resolution",
      "Purchase orders, supplier ledger and stock transfers",
      "Discount limits, void tracking and shift reconciliation",
      "Tax-compliant invoice templates and receipt printing",
      "Consolidated multi-branch reporting dashboard",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    outcomes: [
      "Demonstrates an offline-first billing pattern for retail counters.",
      "Demonstrates traceable inventory movements against every transaction.",
      "Demonstrates the management reporting views a multi-branch owner typically needs.",
    ],
    relatedServices: ["pos-software", "custom-software-development", "devops-cloud-solutions"],
  },
  {
    slug: "logistics-fleet-tracking-app",
    title: "Logistics Fleet & Delivery App",
    type: "Cross-platform mobile application",
    category: "Mobile Apps",
    industry: "Logistics & Delivery",
    year: "2024",
    engagement: "WordbitX demo project — product concept, UX and mobile delivery simulation",
    clientLabel: "WordbitX Demo",
    publicStatus: "Sample mobile project created to demonstrate logistics and delivery app capability. It is not presented as a client engagement.",
    summary:
      "A WordbitX demo of driver and dispatcher applications with route tracking, proof of delivery and offline job handling for field teams.",
    metaTitle: "Logistics Fleet & Delivery App | WordBitX Project Profile",
    metaDescription:
      "A Flutter delivery and fleet tracking application with live location, digital proof of delivery, offline job queues and a dispatcher dashboard.",
    image: media.deliveryApp,
    imageAlt: "Delivery application running on a smartphone during a field job",
    gallery: [
      { src: media.deliveryApp, alt: "Delivery app job screen on smartphone", caption: "Driver job list with route and status updates" },
      { src: media.deliveryAppAlt, alt: "Mobile delivery tracking interface", caption: "Proof of delivery capture with signature and photo" },
    ],
    overview: [
      "This WordbitX demo models the driver and dispatcher experience for a logistics team: jobs arrive on a mobile device, updates survive weak signal, and a dispatcher sees exceptions in one console.",
      "It was created to demonstrate a cross-platform mobile delivery pattern and backend workflow. It is a sample capability project, not a disclosed client deployment.",
    ],
    challenge: [
      "Demonstrate how field work can continue when a driver loses signal.",
      "Show a structured, searchable proof-of-delivery record.",
      "Show dispatchers the live job and exception view they usually need.",
    ],
    solution: [
      "Offline job queues that retain updates until a connection returns.",
      "Battery-conscious location concepts for driver visibility.",
      "Digital proof-of-delivery concepts: signature, photos, timestamps and notes.",
      "A dispatcher dashboard concept for assignment, map view and exceptions.",
    ],
    features: [
      "Driver job list with route navigation handoff",
      "Offline-first status updates and sync queue",
      "Signature, photo and note capture per delivery",
      "Live vehicle map for dispatchers",
      "Push notifications for new and reassigned jobs",
      "Delivery history with searchable audit trail",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Firebase", "Google Cloud"],
    outcomes: [
      "Demonstrates structured proof-of-delivery records instead of chat messages.",
      "Demonstrates a dispatcher view of job status without phone-based follow-up.",
      "Demonstrates offline field updates that reconcile when signal returns.",
    ],
    relatedServices: ["mobile-app-development", "custom-software-development", "devops-cloud-solutions"],
  },
  {
    slug: "fashion-shopify-storefront",
    title: "Fashion Shopify Storefront",
    type: "Shopify theme & conversion build",
    category: "E-Commerce",
    industry: "Fashion & Apparel",
    year: "2025",
    engagement: "WordbitX demo project — commerce UX, storefront concept and integration simulation",
    clientLabel: "WordbitX Demo",
    publicStatus: "Sample e-commerce project created to demonstrate Shopify storefront capability. It is not presented as a client engagement.",
    summary:
      "A WordbitX demo of a Shopify storefront with fast collection browsing, size-aware product pages and a streamlined mobile checkout.",
    metaTitle: "Fashion Shopify Storefront | WordBitX Project Profile",
    metaDescription:
      "Custom Shopify store development with performance-focused theme, structured collections, size guidance and a simplified mobile checkout experience.",
    image: media.stripeCheckout,
    imageAlt: "Fashion eCommerce store checkout on laptop and mobile",
    gallery: [
      { src: media.stripeCheckout, alt: "Online store checkout screen", caption: "Simplified checkout with clear delivery and cost information" },
      { src: media.ecommerceCard, alt: "Mobile shopping and card payment", caption: "Mobile-first product browsing and payment" },
    ],
    overview: [
      "This WordbitX demo models a premium Shopify storefront: collection discovery, size-aware product pages, transparent delivery information and a mobile-first checkout pattern.",
      "It was created to demonstrate commerce UX and performance-minded storefront design. It is a sample capability project, not a disclosed client deployment.",
    ],
    challenge: [
      "Demonstrate faster mobile collection browsing with image-heavy catalogues.",
      "Show how product pages can answer sizing before a shopper reaches support.",
      "Show a low-friction checkout pattern with transparent delivery costs.",
    ],
    solution: [
      "A lean Shopify theme concept with lazy-loaded media and minimal app overhead.",
      "Collection and filter concepts mapped to common shopping journeys.",
      "Product page components for size guidance, fit notes and delivery expectations.",
      "Checkout concepts with clear shipping and payment options.",
    ],
    features: [
      "Performance-optimised custom Shopify theme",
      "Faceted collection filtering and improved search",
      "Size guide and fit-note components",
      "Bundles and post-purchase upsell blocks",
      "Product and breadcrumb schema for rich results",
      "Enhanced eCommerce event tracking",
    ],
    technologies: ["Shopify", "JavaScript", "Tailwind CSS", "Stripe", "Google Analytics"],
    outcomes: [
      "Demonstrates a performance-minded collection browsing pattern.",
      "Demonstrates product-page components for sizing and delivery questions.",
      "Demonstrates clean funnel event tracking from product view to checkout.",
    ],
    relatedServices: ["ecommerce-shopify", "ui-ux-design", "seo-services"],
  },
  {
    slug: "clinic-appointment-booking-portal",
    title: "Clinic Appointment Booking Portal",
    type: "Web application & patient portal",
    category: "Websites",
    industry: "Healthcare",
    year: "2024",
    engagement: "UX, web application development, integrations",
    summary:
      "A booking portal with doctor schedules, slot management, reminders and an admin console for reception teams.",
    metaTitle: "Clinic Appointment Booking Portal | WordBitX Project Profile",
    metaDescription:
      "A healthcare booking web application with real-time slot availability, automated reminders, doctor scheduling and a reception admin console.",
    image: media.professionals,
    imageAlt: "Healthcare staff managing appointments on a booking portal",
    gallery: [
      { src: media.professionals, alt: "Reception team using the booking console", caption: "Reception console for walk-ins and rescheduling" },
      { src: media.engineerCoding, alt: "Developer building the scheduling engine", caption: "Slot engine handling overlapping doctor schedules" },
    ],
    overview: [
      "Appointments were booked by phone, written into a register, and frequently double-booked when several receptionists worked at once.",
      "WordBitX delivered an online booking portal with a real-time slot engine, so patients self-book while reception retains full override control.",
    ],
    challenge: [
      "Double bookings caused by parallel manual entry.",
      "High no-show rate with no reminder system.",
      "Doctor availability changing weekly with no easy way to publish it.",
    ],
    solution: [
      "A slot engine handling per-doctor schedules, breaks, leave and consultation durations.",
      "Patient self-booking with instant confirmation and rescheduling links.",
      "Automated SMS and email reminders ahead of appointments.",
      "A reception console for walk-ins, overrides and daily schedules.",
    ],
    features: [
      "Real-time availability with locking to prevent double booking",
      "Doctor profile pages with specialisations",
      "Automated reminder and confirmation messaging",
      "Reception dashboard with day and week views",
      "Patient history and visit notes access control",
      "Accessible, mobile-first booking flow",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    outcomes: [
      "Booking conflicts are prevented at the data layer rather than by phone coordination.",
      "Patients can book and reschedule without calling reception.",
      "Reminders are sent automatically for every confirmed appointment.",
    ],
    relatedServices: ["web-development", "custom-software-development", "ui-ux-design"],
  },
  {
    slug: "ai-document-processing-assistant",
    title: "AI Document Processing Assistant",
    type: "AI automation & document intelligence",
    category: "AI",
    industry: "Finance & Operations",
    year: "2025",
    engagement: "Use-case assessment, prototype, production integration",
    summary:
      "An AI pipeline that reads invoices and supporting documents, extracts structured fields and routes exceptions to human review.",
    metaTitle: "AI Document Processing Assistant | WordBitX Project Profile",
    metaDescription:
      "An AI document intelligence solution extracting structured data from invoices and forms, with confidence scoring and human-in-the-loop review.",
    image: media.aiNeural,
    imageAlt: "Neural network visualisation representing AI document processing",
    gallery: [
      { src: media.aiAbstract, alt: "AI processing visualisation", caption: "Extraction pipeline with confidence scoring" },
      { src: media.analyticsChart, alt: "Processing accuracy reporting", caption: "Accuracy and throughput monitoring dashboard" },
    ],
    overview: [
      "A finance operations team was manually reading supplier invoices and typing them into an accounting system, spending hours a day on repetitive entry.",
      "We built an extraction pipeline that reads uploaded documents, returns structured fields with confidence scores, and sends only uncertain cases to a reviewer.",
    ],
    challenge: [
      "Documents arrived in inconsistent layouts from many suppliers.",
      "Manual entry created errors that surfaced weeks later during reconciliation.",
      "Any automated system had to be auditable for finance approval.",
    ],
    solution: [
      "An ingestion pipeline handling PDF and image uploads with OCR pre-processing.",
      "Retrieval and prompt layer producing structured fields with per-field confidence.",
      "A review interface where humans confirm or correct low-confidence extractions.",
      "Full logging of inputs, outputs and reviewer decisions for audit.",
    ],
    features: [
      "Multi-format document ingestion",
      "Structured field extraction with confidence scores",
      "Human-in-the-loop review queue",
      "Duplicate detection and supplier matching",
      "Accuracy evaluation set and drift monitoring",
      "Token and cost usage dashboard",
    ],
    technologies: ["Python", "OpenAI", "LangChain", "Node.js", "PostgreSQL", "Docker"],
    outcomes: [
      "Routine documents are processed automatically, with humans reviewing exceptions only.",
      "Every extraction is logged with its source document for audit.",
      "Accuracy is measured against a labelled evaluation set before each release.",
    ],
    relatedServices: ["ai-solutions", "custom-software-development", "devops-cloud-solutions"],
  },
  {
    slug: "real-estate-listing-marketplace",
    title: "Real Estate Listing Marketplace",
    type: "Marketplace web platform",
    category: "Websites",
    industry: "Real Estate",
    year: "2025",
    engagement: "Architecture, SEO structure, full-stack development",
    summary:
      "A property marketplace with map search, agent dashboards and an SEO structure designed for thousands of indexable listing pages.",
    metaTitle: "Real Estate Listing Marketplace | WordBitX Project Profile",
    metaDescription:
      "A property marketplace platform with map-based search, agent dashboards, lead routing and an SEO architecture built for large listing catalogues.",
    image: media.focusedDeveloper,
    imageAlt: "Developer building a property marketplace platform",
    gallery: [
      { src: media.focusedDeveloper, alt: "Marketplace development workstation", caption: "Search and filtering engine implementation" },
      { src: media.deskTeam, alt: "Team reviewing listing performance", caption: "Agent dashboards and lead routing" },
    ],
    overview: [
      "Property portals live or die on search: buyers need fast filtering, and the platform needs tens of thousands of listing pages that search engines can crawl efficiently.",
      "WordBitX built a marketplace with server-rendered listing pages, map-based discovery and dashboards where agents manage inventory and enquiries.",
    ],
    challenge: [
      "Large, frequently changing catalogues create crawl and indexation problems.",
      "Map plus filter search must stay fast on mobile connections.",
      "Leads need to reach the right agent immediately.",
    ],
    solution: [
      "Server-rendered listing and location pages with canonical and pagination rules.",
      "A geospatial search index supporting map bounds, filters and sorting.",
      "Agent dashboards for listing management, media uploads and lead tracking.",
      "Automatic sitemap generation as listings are published or expire.",
    ],
    features: [
      "Map-based search with viewport filtering",
      "Saved searches and enquiry forms per listing",
      "Agent and agency dashboards with permissions",
      "Structured data for listings and breadcrumbs",
      "Dynamic XML sitemaps for large catalogues",
      "Image pipeline with responsive formats",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    outcomes: [
      "Listing pages are server-rendered and individually indexable.",
      "Search results respond quickly even with combined map and filter queries.",
      "Enquiries route to the responsible agent with a full audit trail.",
    ],
    relatedServices: ["web-development", "seo-services", "devops-cloud-solutions"],
  },
  {
    slug: "fintech-app-design-system",
    title: "Fintech App Design System",
    type: "Product design & design system",
    category: "Design",
    industry: "Financial Services",
    year: "2024",
    engagement: "UX audit, redesign, Figma design system",
    summary:
      "A redesigned onboarding and transaction experience supported by a documented Figma design system for a financial application.",
    metaTitle: "Fintech App Design System | WordBitX Project Profile",
    metaDescription:
      "UX audit, onboarding redesign and a documented Figma design system with accessible components for a financial mobile application.",
    image: media.professionals,
    imageAlt: "Product designers reviewing fintech application screens",
    gallery: [
      { src: media.professionals, alt: "Design review session", caption: "Journey mapping and usability findings" },
      { src: media.stripeMobile, alt: "Financial app payment screen", caption: "Redesigned transaction and confirmation flow" },
    ],
    overview: [
      "A financial product had grown feature by feature until each screen followed different rules, and onboarding lost users before their first transaction.",
      "We audited the journeys, redesigned onboarding and payments around a smaller number of decisions per screen, then packaged everything into a reusable design system.",
    ],
    challenge: [
      "Inconsistent components across screens built by different teams.",
      "A long verification flow with unclear progress and error handling.",
      "Accessibility issues in colour contrast and touch target sizing.",
    ],
    solution: [
      "A UX audit combining analytics review, heuristic evaluation and user testing.",
      "Redesigned onboarding with stepwise progress, inline validation and recovery paths.",
      "A Figma library with tokens, components, states and usage documentation.",
      "Accessibility rules applied to contrast, focus states and target sizes.",
    ],
    features: [
      "Journey maps for onboarding, funding and transfers",
      "Interactive prototype used for usability testing",
      "Token-based Figma component library",
      "Light and dark theme definitions",
      "Error, empty and loading state patterns",
      "Developer handoff specifications",
    ],
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    outcomes: [
      "Screens now share one component library instead of divergent one-off designs.",
      "Onboarding communicates progress and recovers from errors without dead ends.",
      "Engineering builds new screens from documented components.",
    ],
    relatedServices: ["ui-ux-design", "mobile-app-development", "web-development"],
  },
  {
    slug: "b2b-wholesale-ordering-app",
    title: "B2B Wholesale Ordering App",
    type: "Mobile ordering & distributor platform",
    category: "Mobile Apps",
    industry: "Distribution & Wholesale",
    year: "2025",
    engagement: "Discovery, mobile app, backend, ERP integration",
    summary:
      "A distributor ordering app with customer-specific pricing, credit limits, offline carts and back-office order management.",
    metaTitle: "B2B Wholesale Ordering App | WordBitX Project Profile",
    metaDescription:
      "A B2B wholesale ordering application with tiered pricing, credit control, offline cart support and integration with back-office inventory systems.",
    image: media.deliveryAppAlt,
    imageAlt: "Wholesale ordering application used on a mobile device",
    gallery: [
      { src: media.deliveryAppAlt, alt: "Mobile ordering app screen", caption: "Repeat ordering with customer-specific pricing" },
      { src: media.coffeeCoders, alt: "Engineers building the ordering platform", caption: "Integration layer with back-office inventory" },
    ],
    overview: [
      "Wholesale orders were taken over phone and messaging apps, then typed into inventory software by the back office, with pricing errors on every tier change.",
      "We built an ordering app where each customer sees their own catalogue and pricing, and orders flow directly into the back-office system.",
    ],
    challenge: [
      "Different price lists and discount tiers per customer.",
      "Credit limits enforced inconsistently across sales staff.",
      "Field sales teams working in areas with unreliable connectivity.",
    ],
    solution: [
      "Customer-specific catalogues with tiered pricing rules resolved server-side.",
      "Credit limit and outstanding balance checks enforced before order submission.",
      "Offline cart building with queued submission when connectivity returns.",
      "An integration layer syncing orders, stock and customer records.",
    ],
    features: [
      "Per-customer pricing and product visibility",
      "Repeat-order and favourites list",
      "Credit limit and balance validation",
      "Offline cart with automatic submission",
      "Order status tracking and invoice history",
      "Back-office order and dispatch console",
    ],
    technologies: ["Flutter", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    outcomes: [
      "Orders arrive structured and priced correctly instead of as chat messages.",
      "Credit rules are enforced consistently at submission time.",
      "Field teams can build orders without a stable connection.",
    ],
    relatedServices: ["mobile-app-development", "crm-erp-solutions", "custom-software-development"],
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management & Pharmacy Inventory System",
    type: "Hospital information system (HMIS)",
    category: "Software",
    industry: "Healthcare",
    year: "2025",
    engagement: "Discovery, module design, development, department rollout",
    summary:
      "An integrated hospital system covering OPD and IPD workflows, electronic records, billing, laboratory orders and pharmacy stock with batch and expiry control.",
    metaTitle: "Hospital Management & Pharmacy Inventory System | WordBitX Project",
    metaDescription:
      "A custom hospital management system with OPD/IPD workflows, electronic medical records, billing, lab integration and pharmacy inventory with batch and expiry tracking.",
    image: media.doctorTablet,
    imageAlt: "Clinician using a hospital management system on a tablet during a ward round",
    gallery: [
      {
        src: media.doctorsReview,
        alt: "Doctors reviewing patient records and diagnostics",
        caption: "Consultation screen with history, vitals, diagnosis and e-prescription",
      },
      {
        src: media.hospitalStaff,
        alt: "Hospital administration team coordinating departments",
        caption: "Admissions, bed management and departmental billing console",
      },
    ],
    overview: [
      "A multi-department hospital was running registration on one system, the laboratory on spreadsheets, and the pharmacy on a standalone billing package. Patient files moved on paper, so a doctor rarely had the full history at the point of consultation and the finance team reconciled revenue manually every night.",
      "WordBitX delivered a single hospital information system built around one patient identity. Registration, consultation, diagnostics, admission, pharmacy and billing all write to the same record, and pharmacy stock is managed with batch and expiry control instead of a simple product list.",
    ],
    challenge: [
      "One patient existed as several records across registration, lab and pharmacy.",
      "Medicine stock had no batch or expiry visibility, causing avoidable write-offs.",
      "Ward staff could not see live bed availability during admissions.",
      "Access to clinical data needed strict, auditable role separation.",
    ],
    solution: [
      "A unified patient master with a single medical record number used by every department.",
      "OPD consultation workflow with vitals, diagnosis coding, e-prescriptions and visit history.",
      "IPD module covering admission, bed and ward allocation, daily charges and discharge summaries.",
      "Pharmacy inventory with batch numbers, expiry-first (FEFO) dispensing and near-expiry alerts.",
      "Role-based access separating reception, clinician, pharmacist, lab and accounts, with an audit log on every record view.",
    ],
    features: [
      "Patient registration with duplicate detection",
      "OPD queue, token display and consultation notes",
      "IPD admissions, bed management and ward transfers",
      "Laboratory order entry and result attachment",
      "Pharmacy dispensing with batch and expiry (FEFO) control",
      "Consolidated billing across departments with insurance-ready invoices",
      "Stock reorder alerts and expiry write-off reporting",
      "Audit trail on all clinical record access",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    outcomes: [
      "Every department reads and writes to one patient record instead of separate registers.",
      "Pharmacy stock is tracked by batch and expiry, so near-expiry medicine is surfaced before it is written off.",
      "Billing consolidates OPD, IPD, lab and pharmacy charges into a single patient invoice.",
      "Clinical data access is permission-controlled and fully auditable.",
    ],
    relatedServices: ["custom-software-development", "inventory-management-software", "crm-erp-solutions"],
  },
  {
    slug: "warehouse-inventory-management-system",
    title: "Multi-Warehouse Inventory Management System",
    type: "Inventory & warehouse management platform",
    category: "Software",
    industry: "Distribution & Wholesale",
    year: "2025",
    engagement: "Stock audit, data modelling, development, warehouse rollout",
    summary:
      "A barcode-driven inventory platform with multi-warehouse stock ledgers, batch tracking, reorder automation and landed-cost profitability reporting.",
    metaTitle: "Multi-Warehouse Inventory Management System | WordBitX Project",
    metaDescription:
      "A custom inventory management system with barcode receiving and picking, multi-warehouse stock ledgers, batch and expiry tracking, reorder automation and valuation reports.",
    image: media.warehouseScanning,
    imageAlt: "Warehouse operator scanning inventory into a stock management system",
    gallery: [
      {
        src: media.warehouseShelves,
        alt: "Organised warehouse shelving with labelled bins",
        caption: "Bin and rack level locations with barcode-guided put-away",
      },
      {
        src: media.warehouseTeam,
        alt: "Warehouse team managing stock movements",
        caption: "Transfer, cycle count and goods-received workflows",
      },
    ],
    overview: [
      "A distributor operating three warehouses and a van-sales fleet was closing each month with a stock variance large enough to distort profit reporting. Goods moved constantly between locations, but transfers were recorded on paper and reconciled days later.",
      "We rebuilt inventory as an immutable movement ledger: nothing changes a balance except a recorded transaction with a reason, a user and a timestamp. Barcode operations were then layered on top so the warehouse floor could work at speed without bypassing the system.",
    ],
    challenge: [
      "Month-end stock variance made margin reporting unreliable.",
      "Transfers between warehouses were invisible while goods were in transit.",
      "Purchasing was based on memory rather than sales velocity, causing simultaneous stockouts and dead stock.",
      "Product costing ignored freight and clearing charges, overstating profit.",
    ],
    solution: [
      "A transaction-based stock ledger where every balance is derived from recorded movements.",
      "Barcode receiving, put-away, picking and cycle counting on rugged handheld devices.",
      "In-transit state for inter-warehouse transfers with confirmation on arrival.",
      "Reorder points calculated from sales velocity and supplier lead time, generating draft purchase orders.",
      "Landed-cost calculation distributing freight and duty across received units.",
    ],
    features: [
      "Multi-warehouse, bin-level stock tracking",
      "Barcode receiving, picking and put-away",
      "Batch, lot and expiry tracking with FEFO picking",
      "Inter-warehouse transfers with in-transit visibility",
      "Automated reorder points and draft purchase orders",
      "Goods-received note matching against purchase orders",
      "Cycle counting with variance approval workflow",
      "Stock ageing, wastage and landed-cost valuation reports",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Flutter", "Docker"],
    outcomes: [
      "Stock balances are reproducible from the movement history, so variances can be traced to a document.",
      "Goods in transit between warehouses are visible instead of disappearing from reporting.",
      "Purchasing decisions are driven by sales velocity and lead time rather than memory.",
      "Margin reporting includes freight and duty through landed-cost calculation.",
    ],
    relatedServices: ["inventory-management-software", "pos-software", "custom-software-development"],
  },
  {
    slug: "real-estate-crm-property-management",
    title: "Real Estate CRM & Property Management Portal",
    type: "CRM and property management platform",
    category: "Software",
    industry: "Real Estate",
    year: "2025",
    engagement: "Process mapping, CRM design, development, agency onboarding",
    summary:
      "A CRM for property agencies covering lead capture and routing, inventory of plots and units, viewing schedules, instalment plans and commission tracking.",
    metaTitle: "Real Estate CRM & Property Management Portal | WordBitX Project",
    metaDescription:
      "A real estate CRM with lead routing, property and plot inventory, viewing scheduling, instalment payment plans, commission tracking and agency performance dashboards.",
    image: media.realEstateKeys,
    imageAlt: "Real estate agent handing over property keys to new owners",
    gallery: [
      {
        src: media.realEstateAgent,
        alt: "Property consultant reviewing plans and documents",
        caption: "Property and plot inventory with availability status",
      },
      {
        src: media.realEstateHandover,
        alt: "Agent completing a property handover with a client",
        caption: "Instalment plan tracking through to handover",
      },
    ],
    overview: [
      "A property agency was generating leads from portals, social campaigns and walk-ins, then distributing them over WhatsApp. Follow-up depended on individual memory, two agents sometimes called the same buyer, and nobody could say which marketing spend actually produced a booking.",
      "WordBitX built a real estate CRM where every lead has a source, an owner and a next action — connected to a live inventory of plots and units so agents never sell something already booked.",
    ],
    challenge: [
      "Leads from multiple sources arrived in personal inboxes and chat groups.",
      "Plot and unit availability was tracked in a spreadsheet that went stale daily.",
      "Instalment schedules and overdue payments were reconciled manually.",
      "Commission disputes arose because attribution was never recorded at booking time.",
    ],
    solution: [
      "Unified lead capture from website forms, portal feeds and campaign landing pages with automatic routing rules.",
      "Property inventory covering projects, blocks, plots and units with live availability and hold status.",
      "Viewing scheduler with reminders and outcome logging against each lead.",
      "Instalment plan engine generating schedules, receipts and overdue alerts.",
      "Commission rules recorded at booking so payouts are calculated from agreed data.",
    ],
    features: [
      "Multi-source lead capture with duplicate detection",
      "Automatic lead assignment and follow-up reminders",
      "Project, block, plot and unit inventory with hold and booking states",
      "Viewing appointments with outcome tracking",
      "Instalment plans, receipts and overdue payment alerts",
      "Document vault for agreements and ownership files",
      "Commission calculation and agent performance dashboards",
      "Source-level reporting on cost per booking",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    outcomes: [
      "Every lead carries a source, an owner and a scheduled next action.",
      "Agents work from one live availability list, preventing double bookings of the same unit.",
      "Instalment schedules and overdue payments are generated and flagged automatically.",
      "Marketing spend can be compared against bookings by lead source.",
    ],
    relatedServices: ["crm-erp-solutions", "custom-software-development", "web-development"],
  },
  {
    slug: "housing-society-property-portal",
    title: "Housing Society Property & Plot File Portal",
    type: "Property listing portal & dealer CRM",
    category: "Websites",
    industry: "Real Estate",
    year: "2025",
    engagement: "Inventory mapping, portal architecture, development, dealer onboarding",
    summary:
      "A property portal structured around societies, phases, blocks and plot files — covering DHA Lahore, Lahore Smart City, Capital Smart City and Etihad Town style inventory with instalment tracking.",
    metaTitle: "Housing Society Property & Plot File Portal | WordBitX Project",
    metaDescription:
      "A real estate portal with society, phase, block and plot-file inventory, instalment plan tracking, dealer CRM and lead routing built for Pakistani housing society sales.",
    image: media.realEstateAgent,
    imageAlt: "Property consultant reviewing plot files and society layout plans",
    gallery: [
      {
        src: media.realEstateKeys,
        alt: "Plot handover to a property buyer",
        caption: "Booking to handover tracked against each plot file",
      },
      {
        src: media.realEstateCouple,
        alt: "Buyers completing a property booking with an agent",
        caption: "Dealer CRM with lead source and commission attribution",
      },
    ],
    overview: [
      "A property marketing group sells across several major housing societies. Each society has its own phases, blocks, plot sizes and file rules, and none of that fitted the generic listing template their old website used. Availability lived in a shared spreadsheet that was out of date by lunchtime.",
      "WordBitX built a portal where inventory is modelled the way the market actually works. A listing is not just a property — it belongs to a society, a phase and a block, carries a plot number and file status, and can be linked to an instalment plan with its own payment history.",
    ],
    challenge: [
      "Society structures differ: phases and blocks in DHA Lahore, executive and overseas blocks in Lahore Smart City, ballot-based files in Capital Smart City, and mixed residential and commercial plots in Etihad Town.",
      "Two agents could commit the same plot because availability was not live.",
      "Instalment recovery relied on someone remembering which buyer owed what.",
      "Thousands of listing pages needed to stay crawlable for organic search.",
    ],
    solution: [
      "A configurable inventory model where each society defines its own phases, blocks, plot sizes and file rules.",
      "Live availability with hold, booked and sold states locked at the database level to prevent double allocation.",
      "Plot file records carrying ownership, transfer history and verification documents.",
      "An instalment engine generating schedules, receipts and overdue alerts per booking.",
      "Server-rendered society and location pages with structured data and automatic sitemap generation.",
    ],
    features: [
      "Society, phase, block and plot-number inventory",
      "Map and filter search with saved searches",
      "Plot file records, transfers and document vault",
      "Instalment plans with receipts and overdue alerts",
      "Lead capture from portals, ads and walk-ins with auto-routing",
      "Dealer and sub-dealer access with commission attribution",
      "Overseas buyer view with remote document sharing",
      "Automatic sitemaps for large, frequently changing catalogues",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    outcomes: [
      "Each society is listed with its correct phase, block and plot structure instead of as generic properties.",
      "Availability is locked at booking, so the same plot cannot be committed twice.",
      "Instalment schedules and overdue payments are generated automatically per file.",
      "Listing pages are individually indexable as the catalogue grows.",
    ],
    relatedServices: ["real-estate-portals", "crm-erp-solutions", "seo-services"],
  },
  {
    slug: "jewellery-ecommerce-store",
    title: "Jewellery E-Commerce Store with Live Gold Rates",
    type: "Premium eCommerce storefront",
    category: "E-Commerce",
    industry: "Jewellery & Luxury Retail",
    year: "2025",
    engagement: "Commerce strategy, storefront design, development, launch support",
    summary:
      "An online jewellery store with weight and karat based dynamic pricing, live gold rate integration, certification details and secure high-value checkout.",
    metaTitle: "Jewellery E-Commerce Store with Live Gold Rates | WordBitX Project",
    metaDescription:
      "A jewellery eCommerce store featuring weight-based dynamic pricing, live gold and silver rate integration, karat variants, hallmark certification details and secure checkout.",
    image: media.jewelleryDisplay,
    imageAlt: "Gold jewellery collection displayed for an online jewellery store",
    gallery: [
      {
        src: media.jewelleryStore,
        alt: "Luxury jewellery product photography",
        caption: "Product pages with purity, weight and certification details",
      },
      {
        src: media.jewelleryBoutique,
        alt: "Customers viewing jewellery in a boutique",
        caption: "Made-to-order and booking advance workflow",
      },
    ],
    overview: [
      "Jewellery does not price like ordinary retail. The same ring costs a different amount today than last week because the gold rate moved, and the final figure depends on weight, karat, making charges and stone value. A fixed price field cannot express that.",
      "WordBitX built a storefront where price is calculated, not typed. Each product stores its net weight, karat, making charge and stone value, and the displayed price recalculates whenever the gold rate updates — so the catalogue never quotes an outdated figure.",
    ],
    challenge: [
      "Prices had to follow live gold and silver rates rather than static values.",
      "Buyers of high-value items needed strong trust signals before paying online.",
      "Made-to-order pieces required a booking advance rather than full payment.",
      "Heavy product photography risked slowing the store on mobile connections.",
    ],
    solution: [
      "A pricing engine combining net weight, karat, making charges, stone value and the current metal rate.",
      "Scheduled gold and silver rate updates with an admin override and full change history.",
      "Product pages showing purity, hallmark, certification and detailed specification tables.",
      "A made-to-order flow that takes a booking advance and tracks production status.",
      "An optimised image pipeline delivering responsive, modern formats without visible quality loss.",
    ],
    features: [
      "Weight and karat based dynamic pricing",
      "Live gold and silver rate integration with history",
      "Certification, hallmark and purity details per product",
      "Made-to-order with booking advance and status tracking",
      "Wishlist, comparison and appointment booking",
      "Insured delivery and secure high-value checkout",
      "Collection merchandising for bridal and festive ranges",
      "Product schema for rich search results",
    ],
    technologies: ["Next.js", "TypeScript", "Shopify", "Node.js", "PostgreSQL", "Stripe"],
    outcomes: [
      "Displayed prices follow the current metal rate instead of going stale.",
      "Purity, weight and certification are answered on the product page rather than by phone.",
      "Made-to-order pieces are sold with a tracked booking advance.",
      "Product imagery is delivered in optimised formats for mobile shoppers.",
    ],
    relatedServices: ["ecommerce-shopify", "ui-ux-design", "seo-services"],
  },
  {
    slug: "medical-store-pharmacy-portal",
    title: "Medical Store & Pharmacy Chain Portal",
    type: "Pharmacy billing & inventory portal",
    category: "Software",
    industry: "Pharmacy & Healthcare Retail",
    year: "2025",
    engagement: "Counter study, development, multi-branch rollout",
    summary:
      "Pharmacy software with fast counter billing, batch and expiry control, prescription records, supplier ledgers and multi-branch stock visibility.",
    metaTitle: "Medical Store & Pharmacy Chain Portal | WordBitX Project",
    metaDescription:
      "Medical store software with counter billing, batch and expiry (FEFO) stock control, prescription records, supplier ledgers, reorder alerts and multi-branch reporting.",
    image: media.doctorSmartphone,
    imageAlt: "Pharmacy staff member using a medical store management portal",
    gallery: [
      {
        src: media.hospitalStaff,
        alt: "Pharmacy team managing medicine stock",
        caption: "Batch-level stock with first-expiry-first-out dispensing",
      },
      {
        src: media.warehouseShelves,
        alt: "Organised medicine storage shelving",
        caption: "Central warehouse feeding branch-level stock",
      },
    ],
    overview: [
      "A pharmacy chain was losing money at both ends: medicine expiring unnoticed on the shelf, and fast-moving items running out because reordering depended on whoever was at the counter that day. Their billing software treated medicine as a simple product with one quantity.",
      "We built a pharmacy portal where every pack is tracked by batch and expiry date. Dispensing automatically picks the earliest-expiring batch, near-expiry stock is flagged weeks in advance, and reorder suggestions come from actual sales velocity across branches.",
    ],
    challenge: [
      "Expiry losses were discovered only during manual shelf checks.",
      "Salt-wise alternatives could not be suggested when a brand was out of stock.",
      "Branches could not see whether another branch held the medicine a customer needed.",
      "Credit customers and supplier accounts were reconciled on paper.",
    ],
    solution: [
      "Batch-level inventory with expiry dates and first-expiry-first-out dispensing.",
      "Generic and salt mapping so staff can offer an available alternative instantly.",
      "Live branch stock lookup during billing to redirect the customer or arrange a transfer.",
      "Supplier ledgers with purchase orders, returns and credit-note handling.",
      "Reorder suggestions calculated per branch from sales velocity and lead time.",
    ],
    features: [
      "Fast counter billing with barcode support",
      "Batch, expiry and FEFO dispensing",
      "Near-expiry alerts and return-to-supplier workflow",
      "Salt and generic alternative suggestions",
      "Prescription records against customer profiles",
      "Multi-branch stock lookup and transfers",
      "Supplier ledgers, purchase orders and credit notes",
      "Owner dashboard for sales, margin and expiry exposure",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    outcomes: [
      "Near-expiry medicine is surfaced ahead of time instead of found on the shelf.",
      "Counter staff can offer an available alternative when a brand is out of stock.",
      "Branches can see and transfer stock instead of turning a customer away.",
      "Supplier balances and returns are tracked in the system rather than on paper.",
    ],
    relatedServices: ["hospital-medical-portals", "inventory-management-software", "pos-software"],
  },
 ];

export const projects: Project[] = [...originalProjects, ...moreProjects].map((project) => {
  const next = withTopicPhoto(project, projectPhotos);
  if (next.image === project.image) return next;
  return {
    ...next,
    gallery: next.gallery.map((item, index) =>
      index === 0 ? { ...item, src: next.image, alt: next.imageAlt } : item,
    ),
  };
});

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectsForService(serviceSlug: string, limit = 3): Project[] {
  const direct = projects.filter((project) => project.relatedServices.includes(serviceSlug));
  return direct.slice(0, limit);
}
