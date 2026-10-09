import type { Service } from "@/lib/types";
import { media } from "@/lib/media";

export const servicesC: Service[] = [
  {
    slug: "real-estate-portals",
    title: "Real Estate & Property Portals",
    shortTitle: "Real Estate Portals",
    icon: "web",
    h1: "Real Estate Portal & Property Management Software Development",
    tagline:
      "Listing portals and CRM systems built around societies, phases, blocks, plot files and instalment plans.",
    summary:
      "Property listing portals, dealer CRM and society management systems with plot inventory, file transfers and instalment tracking.",
    metaTitle: "Real Estate Portal Development | Property Management Software Pakistan",
    metaDescription:
      "Real estate portal and property software development: plot inventory, file transfers, instalment plans, dealer CRM and lead routing for property businesses.",
    primaryKeyword: "real estate portal development",
    keywords: [
      "real estate portal development",
      "property management software",
      "real estate CRM Pakistan",
      "property listing website development",
      "housing society management software",
    ],
    image: media.realEstateKeys,
    imageAlt: "Property consultant completing a plot handover to new owners",
    overview: [
      "Property is not sold the way generic listing software assumes. A buyer in Pakistan asks about a society, a phase, a block, a plot number, whether the file is transferable and how many instalments remain. Imported real estate templates model none of that, so agencies end up tracking the real information in a spreadsheet beside the website.",
      "WordBitX builds property portals around the actual structure of the market. Inventory is organised by society, phase, block and plot, files carry transfer and payment history, and instalment plans generate their own schedules and overdue alerts. Dealers get a CRM that records who brought the lead, so commission is calculated from data rather than argument.",
      "We run this stack ourselves. Properties Pak (propertiespak.com) is our own live Pakistan property portal — society and phase listings, map-led search, plot and file detail pages, and dealer enquiry routing. It is a production product, not a demo, and the fastest way to judge what we would build for you.",
    ],
    whoNeeds: [
      "Property agencies and dealer networks managing plot inventory",
      "Housing societies handling files, transfers and instalment recovery",
      "Developers and marketing companies launching a new project",
      "Portals aggregating listings from multiple agencies",
      "Overseas-focused agencies needing remote booking and payment tracking",
    ],
    problems: [
      {
        title: "The same plot sold twice",
        text: "Availability tracked in a spreadsheet goes stale within hours. Live inventory with hold and booking states prevents two agents committing the same unit.",
      },
      {
        title: "Leads lost in WhatsApp groups",
        text: "Enquiries from portals, ads and walk-ins scatter across personal phones. Unified capture with automatic routing gives every lead an owner and a next action.",
      },
      {
        title: "Instalment recovery done by memory",
        text: "Overdue payments surface late and inconsistently. A schedule engine generates receipts, reminders and defaulter lists automatically.",
      },
    ],
    benefits: [
      { title: "Live, trusted inventory", text: "One availability list for the whole team, updated the moment a plot is held or booked." },
      { title: "Faster follow-up", text: "Assignment rules and reminders mean leads are contacted while they are still warm." },
      { title: "Clean commission data", text: "Attribution recorded at booking removes disputes at payout time." },
      { title: "Search visibility", text: "Server-rendered society and location pages that search engines can index at scale." },
    ],
    offerings: [
      { title: "Property listing portals", text: "Map and filter search, society pages, project microsites and enquiry capture." },
      { title: "Dealer & agency CRM", text: "Lead routing, viewing schedules, follow-up tasks and performance dashboards." },
      { title: "Plot file management", text: "File records, ownership transfers, verification status and document vault." },
      { title: "Instalment & recovery", text: "Payment plans, receipts, overdue alerts and collection reporting." },
    ],
    deliverables: [
      "Society, phase, block and plot inventory model",
      "Listing pages with map, filter and saved-search functionality",
      "Lead capture with source tracking and auto-assignment",
      "Instalment schedule engine with receipts and reminders",
      "Document vault for agreements and ownership files",
      "Commission rules and agent performance reporting",
    ],
    process: [
      { step: "01", title: "Inventory mapping", text: "Document how your societies, phases, blocks and files are structured today." },
      { step: "02", title: "Portal architecture", text: "URL and SEO structure for societies and locations, plus CRM data model." },
      { step: "03", title: "Build", text: "Listings, search, CRM, payments and dashboards delivered in modules." },
      { step: "04", title: "Data migration", text: "Import existing plots, files, clients and payment history." },
      { step: "05", title: "Rollout", text: "Agent training, phased go-live and post-launch optimisation." },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Tailwind CSS"],
    whyUs: [
      { title: "Built for local practice", text: "Plot files, transfers, ballots and instalment culture are modelled properly, not forced into a foreign template." },
      { title: "SEO at catalogue scale", text: "Thousands of listing pages structured so they stay crawlable and indexable." },
      { title: "Dealer-network aware", text: "Multi-agency access, sub-dealer hierarchies and commission splits supported." },
      { title: "Overseas-buyer ready", text: "Remote booking, document sharing and payment tracking across time zones." },
    ],
    faqs: [
      {
        question: "Can the portal handle societies like DHA, Lahore Smart City or Capital Smart City?",
        answer:
          "Yes. Inventory is configured per society with its own phases, blocks, plot sizes and file rules — so DHA Lahore, Lahore Smart City, Capital Smart City, Etihad Town, Bahria Town and similar projects can all be listed with the correct structure rather than as generic properties.",
      },
      {
        question: "Does it support instalment plans and file transfers?",
        answer:
          "Yes. Each booking can carry a payment schedule that generates receipts, tracks paid and outstanding amounts, and flags overdue instalments. File records keep ownership and transfer history with supporting documents.",
      },
      {
        question: "Can multiple dealers and agents use the same system?",
        answer:
          "Yes. Agencies, sub-dealers and individual agents get role-based access with their own leads and listings, while head office keeps a consolidated view and controls commission rules.",
      },
    ],
    related: ["web-development", "crm-erp-solutions", "seo-services", "custom-software-development"],
    relatedPosts: ["how-to-choose-a-web-development-company", "crm-vs-erp-which-one-does-your-business-need"],
    projectCategory: "Websites",
    featured: true,
  },
  {
    slug: "hospital-medical-portals",
    title: "Hospital & Medical Store Portals",
    shortTitle: "Hospital & Medical Portals",
    icon: "software",
    h1: "Hospital Management Software & Medical Store Portal Development",
    tagline:
      "Patient records, OPD and IPD workflows, pharmacy billing and batch-and-expiry stock control in one connected system.",
    summary:
      "Hospital management systems, clinic portals and medical store software with prescriptions, batch tracking and departmental billing.",
    metaTitle: "Hospital Management Software | Medical Store & Pharmacy Portal Development",
    metaDescription:
      "Hospital management software and medical store portals: patient records, OPD/IPD workflows, lab orders and pharmacy billing with batch and expiry control.",
    primaryKeyword: "hospital management software",
    keywords: [
      "hospital management software",
      "medical store software",
      "pharmacy management system",
      "clinic management software",
      "hospital portal development",
    ],
    image: media.doctorTablet,
    imageAlt: "Doctor reviewing patient records on a hospital management portal",
    overview: [
      "Healthcare software fails when departments cannot see the same patient. Registration creates one record, the lab keeps another, and the pharmacy sells against a third — so a doctor consults without the full history and the accounts team reconciles revenue by hand every night.",
      "WordBitX builds hospital and medical store portals around a single patient identity, with medicine stock managed at batch and expiry level rather than as a plain product list. Access is role-separated and every clinical record view is logged, because patient data deserves an audit trail.",
    ],
    whoNeeds: [
      "Hospitals running registration, lab and pharmacy on separate systems",
      "Clinics and polyclinics still using paper patient files",
      "Medical stores and pharmacy chains needing batch and expiry control",
      "Diagnostic labs delivering reports to patients and referring doctors",
      "Healthcare groups needing consolidated multi-branch reporting",
    ],
    problems: [
      {
        title: "One patient, many records",
        text: "Duplicate files across departments hide history. A single medical record number with duplicate detection fixes it at registration.",
      },
      {
        title: "Expired medicine written off",
        text: "Stock tracked without batch or expiry is discovered too late. FEFO dispensing and near-expiry alerts protect margin and patient safety.",
      },
      {
        title: "Revenue leaking between departments",
        text: "Lab, pharmacy and ward charges billed separately get missed. Consolidated billing captures every chargeable item on one invoice.",
      },
    ],
    benefits: [
      { title: "Complete patient history", text: "Every visit, prescription, lab result and admission on one timeline." },
      { title: "Safer dispensing", text: "Batch, expiry and interaction checks at the point of sale." },
      { title: "Accurate revenue", text: "Departmental charges consolidated into a single, insurance-ready invoice." },
      { title: "Auditable access", text: "Role separation with a log of who viewed or edited each clinical record." },
    ],
    offerings: [
      { title: "Hospital management (HMIS)", text: "Registration, OPD queues, IPD admissions, bed management and discharge." },
      { title: "Medical store software", text: "Counter billing, batch and expiry stock, supplier ledgers and reorder alerts." },
      { title: "Clinic & doctor portals", text: "Appointments, consultation notes, e-prescriptions and patient follow-up." },
      { title: "Lab & diagnostics", text: "Test orders, result entry, report delivery and referring-doctor access." },
    ],
    deliverables: [
      "Unified patient master with duplicate detection",
      "OPD consultation workflow with e-prescriptions",
      "IPD admission, bed allocation and daily charge capture",
      "Pharmacy dispensing with batch, expiry and FEFO picking",
      "Consolidated departmental billing and receipts",
      "Role-based access control with a full audit log",
    ],
    process: [
      { step: "01", title: "Department mapping", text: "Trace a patient journey end to end and record where data currently breaks." },
      { step: "02", title: "Data & access design", text: "Patient model, department modules and the permission matrix." },
      { step: "03", title: "Module build", text: "Registration and OPD first, then pharmacy, IPD, lab and billing." },
      { step: "04", title: "Parallel running", text: "Operate alongside existing registers until numbers reconcile." },
      { step: "05", title: "Rollout", text: "Department-by-department training, go-live and priority support." },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    whyUs: [
      { title: "Patient-first data model", text: "One identity across every department instead of per-system records." },
      { title: "Pharmacy done properly", text: "Batch, expiry and FEFO built in, not bolted on as a product list." },
      { title: "Privacy by design", text: "Least-privilege access, encrypted storage and audit logging as standard." },
      { title: "Works during busy hours", text: "Fast counter and OPD screens designed for queues, not demos." },
    ],
    faqs: [
      {
        question: "Can you build only the medical store or pharmacy part?",
        answer:
          "Yes. Many clients start with medical store software — counter billing, batch and expiry stock, supplier ledgers and reorder alerts — and later add clinic or hospital modules on the same platform.",
      },
      {
        question: "Does it handle batch numbers and expiry dates?",
        answer:
          "Yes. Every medicine can carry batch or lot numbers with expiry dates, dispensed on a first-expiry-first-out basis, with near-expiry alerts and full traceability for recalls.",
      },
      {
        question: "How is patient data protected?",
        answer:
          "Access is role-based so staff see only what their job requires, data is encrypted at rest and in transit, and every record view or edit is written to an audit log. Retention and backup policies are agreed before launch.",
      },
    ],
    related: ["custom-software-development", "inventory-management-software", "mobile-app-development", "crm-erp-solutions"],
    relatedPosts: ["inventory-management-software-guide", "custom-software-vs-ready-made-software"],
    projectCategory: "Software",
    featured: true,
  },
  {
    slug: "education-portals",
    title: "University & School Portals",
    shortTitle: "School & University Portals",
    icon: "crm",
    h1: "School, College & University Portal Development",
    tagline:
      "Admissions, attendance, examinations, fee collection and parent communication in one campus portal.",
    summary:
      "Campus management portals with online admissions, student records, attendance, exams, fee vouchers and separate parent and student logins.",
    metaTitle: "School Management System Pakistan",
    metaDescription:
      "School, college and university portal development: online admissions, records, attendance, exams, fee vouchers and parent, student and teacher logins.",
    primaryKeyword: "school management software",
    keywords: [
      "school management software",
      "university portal development",
      "campus management system",
      "student information system",
      "school fee management software",
    ],
    image: media.campusBuilding,
    imageAlt: "Modern university campus architecture with students, representing an education portal",
    overview: [
      "Educational institutions carry an enormous administrative load: admissions every intake, daily attendance, examination results, fee collection and constant parent communication. When each of these lives in a different register or spreadsheet, staff spend more time reconciling records than teaching.",
      "WordBitX builds campus portals where the student record is the centre of everything. Admissions flow into enrolment, enrolment drives attendance and examinations, and fees generate vouchers and defaulter lists automatically — with parents and students given their own limited, useful view.",
    ],
    whoNeeds: [
      "Schools handling admissions and fees on paper or Excel",
      "Colleges and universities managing multi-programme enrolment",
      "Academies and training institutes running batches and certifications",
      "School networks needing consolidated multi-campus reporting",
      "Institutions wanting parents to see attendance and results online",
    ],
    problems: [
      {
        title: "Admissions chaos every intake",
        text: "Paper forms and phone follow-ups lose applicants. Online admissions with applicant tracking keeps every enquiry visible until enrolment or rejection.",
      },
      {
        title: "Fee recovery guesswork",
        text: "Manual vouchers and ledgers make defaulters hard to identify. Automated vouchers, online payment and ageing reports fix collection.",
      },
      {
        title: "Parents kept in the dark",
        text: "Attendance and results reach parents late, if at all. A parent login with notifications closes the gap without extra staff work.",
      },
    ],
    benefits: [
      { title: "Fewer administrative hours", text: "Attendance, vouchers, result cards and reports generated instead of typed." },
      { title: "Better fee recovery", text: "Automated reminders and defaulter lists surface arrears early." },
      { title: "Transparent to parents", text: "Attendance, results and fee status visible without a phone call." },
      { title: "Data for decisions", text: "Enrolment trends, class performance and collection rates in one dashboard." },
    ],
    offerings: [
      { title: "Online admissions", text: "Application forms, document upload, merit lists and applicant tracking." },
      { title: "Student information system", text: "Enrolment, sections, timetables, attendance and disciplinary records." },
      { title: "Examinations & results", text: "Marks entry, grading schemes, result cards and transcript generation." },
      { title: "Fees & accounts", text: "Voucher generation, online payment, receipts, discounts and defaulter reporting." },
    ],
    deliverables: [
      "Student master record with admission-to-alumni history",
      "Online admission forms with document upload",
      "Attendance capture with class and student reporting",
      "Examination marks entry, grading and result cards",
      "Fee vouchers, online payment and collection reports",
      "Separate student, parent, teacher and admin portals",
    ],
    process: [
      { step: "01", title: "Academic mapping", text: "Programmes, sections, grading schemes, fee heads and the academic calendar." },
      { step: "02", title: "Portal design", text: "Role structure for admin, teacher, student and parent access." },
      { step: "03", title: "Build", text: "Admissions and student records first, then attendance, exams and fees." },
      { step: "04", title: "Data import", text: "Migrate current students, classes and outstanding fee balances." },
      { step: "05", title: "Launch", text: "Staff training, parent onboarding and support through the first term." },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Flutter", "AWS", "Tailwind CSS"],
    whyUs: [
      { title: "Built around the academic year", text: "Sessions, terms, promotions and re-enrolment handled as first-class concepts." },
      { title: "Parent adoption considered", text: "Simple, mobile-first parent views that people actually use." },
      { title: "Flexible fee structures", text: "Multiple heads, discounts, scholarships, siblings and instalments supported." },
      { title: "Multi-campus ready", text: "Branch-level operation with consolidated management reporting." },
    ],
    faqs: [
      {
        question: "Can parents and students get their own logins?",
        answer:
          "Yes. Parents can see attendance, results, fee status and announcements for their children, students see their timetable and results, and teachers get marks and attendance entry — each with clearly separated permissions.",
      },
      {
        question: "Does it support online fee payment?",
        answer:
          "Yes. Vouchers can be generated automatically and paid through integrated gateways or bank challan, with receipts recorded against the student ledger and defaulter reports produced for accounts.",
      },
      {
        question: "Can it work for a school network with several campuses?",
        answer:
          "Yes. Each campus operates with its own classes, staff and fee structure while head office gets consolidated enrolment, attendance and collection reporting across all branches.",
      },
    ],
    related: ["custom-software-development", "web-development", "mobile-app-development", "crm-erp-solutions"],
    relatedPosts: ["custom-software-vs-ready-made-software", "how-to-choose-a-web-development-company"],
    projectCategory: "Software",
  },
];
