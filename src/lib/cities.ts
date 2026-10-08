import type { Faq } from "@/lib/types";

/**
 * City pages.
 *
 * These exist because the highest-intent, lowest-competition search demand we
 * have is city-qualified — "software house in Lahore", "web development
 * company Karachi" — and we had no page that could answer it.
 *
 * The rule applied to every entry below: a city only gets a page if we can
 * write three things about it that appear nowhere else on this site. In
 * practice that means its real industrial base, its actual business districts,
 * and the specific software those businesses ask for. A template with the city
 * name swapped in is worse than no page at all, because Google scores quality
 * across the whole domain.
 */
export type City = {
  slug: string;
  name: string;
  province: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  /** Why this city, in its own terms. Nothing reusable. */
  overview: string[];
  /** The sectors that actually employ people here. */
  economy: { label: string; body: string }[];
  /** Real commercial areas — the detail that proves we know the place. */
  districts: string[];
  /** What businesses here walk in asking for, in their words. */
  asks: string[];
  /** Service slugs, most relevant to this city first. */
  services: string[];
  /** Industry slugs. */
  industries: string[];
  faqs: Faq[];
  /** Other city slugs to link. */
  nearby: string[];
  /**
   * True only for the city we actually have an office in. Gates the
   * LocalBusiness schema: emitting a physical business for a city we do not
   * sit in is exactly the fake-location play Google penalises, and our own
   * local-SEO service page tells clients not to do it.
   */
  headOffice?: true;
};

export const cities: City[] = [
  {
    slug: "lahore",
    name: "Lahore",
    province: "Punjab",
    h1: "Software House in Lahore",
    tagline: "Our team is here. Websites, custom software, apps and SEO built in Lahore, for Lahore and well beyond it.",
    // seoTitle() clips to 58 chars, so the old title rendered as the truncated
    // "Software House in Lahore | Web, App & Custom". This one fits whole and
    // carries both head terms people actually type.
    metaTitle: "Software Company in Lahore | Software House",
    headOffice: true,
    metaDescription:
      "Lahore-based software house building websites, custom software, mobile apps, POS and e-commerce for businesses in Gulberg, DHA, Johar Town and citywide.",
    overview: [
      "Lahore is where WordbitX is based, so this is the one city where a meeting is a drive rather than a call. If you want to sit in a room and go through a scope line by line before signing anything, that is available here.",
      "It is also the city whose business mix we know best. Lahore runs on retail and fashion brands, a very large real-estate market, a restaurant scene that has professionalised fast, private education, and a textile and manufacturing base that still runs most of its operations on spreadsheets. Those four or five patterns cover most of what we are asked to build here.",
      "The flip side worth saying out loud: Lahore has more software houses than any other Pakistani city, so the market is crowded and the price range is enormous. We compete on being openable — our own products are live and clickable — rather than on being the cheapest quote in your inbox.",
    ],
    economy: [
      {
        label: "Retail and fashion brands",
        body: "Lahore brands outgrow a Facebook page faster than anywhere else in the country. The usual job is a real store with COD, courier integration and a POS that matches the outlet to the website.",
      },
      {
        label: "Real estate",
        body: "DHA, Bahria Town, Lake City, Park View and the agency networks around them. Plot files, instalment plans and dealer CRM are the actual requirement; a pretty listing page is not.",
      },
      {
        label: "Restaurants and food",
        body: "MM Alam Road, Gulberg, Johar Town and DHA phases. Direct ordering to avoid aggregator commission, table reservations, and a menu that is data rather than a PDF.",
      },
      {
        label: "Private education",
        body: "Schools, academies and test-prep centres. Admissions, attendance, fee challans and a parent app — the sector that buys the most ERP per rupee of revenue in the city.",
      },
      {
        label: "Textile and manufacturing",
        body: "Order-to-dispatch tracking, inventory across godowns, and export documentation for the mills and units around Ferozepur Road and Raiwind Road.",
      },
    ],
    districts: [
      "Gulberg and MM Alam Road",
      "DHA Lahore (Phases 1-8)",
      "Johar Town and Faisal Town",
      "Model Town and Garden Town",
      "Arfa Software Technology Park, Ferozepur Road",
      "Bahria Town and Lake City",
      "Walton Road and Cantt",
      "Shahalam, Azam Cloth and Hall Road wholesale markets",
    ],
    asks: [
      "A website that actually brings enquiries, not just a presence",
      "POS that ties three or four outlets to one stock figure",
      "A property portal with society, phase, plot-file and instalment logic",
      "A school or academy system with fee challans and a parent app",
      "Shopify or a custom store with COD, Leopards or TCS, and WhatsApp order alerts",
      "To rank for a service plus Lahore, instead of paying for every click",
    ],
    services: [
      "web-development",
      "pos-software",
      "real-estate-portals",
      "ecommerce-shopify",
      "local-seo",
      "custom-software-development",
    ],
    industries: ["retail", "real-estate", "hospitality", "education", "ecommerce", "manufacturing"],
    faqs: [
      {
        question: "Can we meet in person in Lahore?",
        answer:
          "Yes. The team is based here, so an in-person scoping meeting is normal rather than an exception. We will come to your office or you are welcome at ours.",
      },
      {
        question: "What does a website cost in Lahore?",
        answer:
          "The honest range in this city runs from around PKR 50,000 for a template job to several lakh for a custom build with real functionality. We quote against what the site has to do — forms, payments, stock, bookings — rather than a page count, and we will tell you when the cheaper option is the right one.",
      },
      {
        question: "Do you only work with Lahore clients?",
        answer:
          "No. We deliver across Pakistan and export to the US, UK, UAE, Canada and Australia. Lahore is simply the one city where the whole team is in the same building.",
      },
      {
        question: "Can you take over a site another Lahore agency built?",
        answer:
          "Usually yes. The first step is a short audit — what it is built on, who owns the hosting and domain, and whether it is worth fixing or replacing. We will say which, even when replacing is the smaller job for us.",
      },
    ],
    nearby: ["karachi", "islamabad", "faisalabad", "gujranwala"],
  },
  {
    slug: "karachi",
    name: "Karachi",
    province: "Sindh",
    h1: "Software Development Company in Karachi",
    tagline: "Built for the city that moves the country's cargo, money and medicine.",
    metaTitle: "Software Development Company in Karachi | Web & Custom Software — WordbitX",
    metaDescription:
      "WordbitX builds websites, custom software, logistics systems, e-commerce and POS for Karachi businesses — SITE, Korangi, I.I. Chundrigar Road, Clifton and DHA.",
    overview: [
      "Karachi is the largest commercial market in Pakistan and the one where software is most often bought to fix an operational problem rather than a marketing one. The brief here is usually 'our dispatch is a mess' or 'we cannot reconcile three warehouses', not 'we need a nicer homepage'.",
      "The city's industrial geography matters to what we build. SITE and Korangi are manufacturing and packaging. Port Qasim and the KPT corridor are freight, clearing and forwarding. I.I. Chundrigar Road is banking and insurance. Clifton and DHA are where the consumer brands and the service businesses sit. Each of those buys very different software.",
      "Karachi also has the country's hardest logistics problem, which makes it the best place to build anything involving routing, consignments, proof of delivery or multi-warehouse stock. If the system survives Karachi, it works anywhere in Pakistan.",
    ],
    economy: [
      {
        label: "Logistics, freight and clearing",
        body: "Consignment tracking, proof of delivery, driver apps and customer portals for the forwarders and transporters around Port Qasim and the KPT corridor.",
      },
      {
        label: "Banking, insurance and fintech",
        body: "Internal tools, customer portals and integrations around I.I. Chundrigar Road, where the requirement is audit trails and access control before features.",
      },
      {
        label: "Pharmaceutical and medical distribution",
        body: "Batch and expiry tracking, distributor hierarchies and tax invoices — the compliance detail that generic inventory software gets wrong.",
      },
      {
        label: "FMCG and manufacturing",
        body: "Production, stores and dispatch systems for the SITE and Korangi units, usually replacing a decade of linked spreadsheets.",
      },
      {
        label: "Textile and leather export",
        body: "Order books, sampling workflows and buyer portals for export houses that need a foreign buyer to see status without an email chain.",
      },
    ],
    districts: [
      "SITE Industrial Area",
      "Korangi and Landhi industrial zones",
      "I.I. Chundrigar Road",
      "Clifton and DHA Karachi",
      "Shahrah-e-Faisal corridor",
      "Port Qasim and the KPT corridor",
      "Saddar and Tariq Road retail",
      "Gulshan-e-Iqbal and North Nazimabad",
    ],
    asks: [
      "Multi-warehouse stock that reconciles without a monthly fight",
      "Consignment tracking with proof of delivery on the driver's phone",
      "A distributor and dealer portal instead of WhatsApp order lists",
      "Batch and expiry handling for pharma and medical stock",
      "A buyer-facing portal so export clients stop emailing for status",
      "Custom software to replace a spreadsheet that four departments edit",
    ],
    services: [
      "custom-software-development",
      "inventory-management-software",
      "enterprise-software-solutions",
      "crm-erp-solutions",
      "mobile-app-development",
      "api-development",
    ],
    industries: ["logistics", "manufacturing", "pharmacy", "finance", "ecommerce", "retail"],
    faqs: [
      {
        question: "Do you have an office in Karachi?",
        answer:
          "No — the team is in Lahore. We work with Karachi clients remotely as standard, and travel for kickoff or go-live when the project justifies it. We will say honestly whether your project needs on-site time or not.",
      },
      {
        question: "Can you integrate with our existing ERP?",
        answer:
          "Usually. The deciding factor is whether it exposes an API or a database we can read safely. If it does neither, we build an integration layer rather than ask you to replace a working system.",
      },
      {
        question: "We have three warehouses and the stock never matches. Can software fix that?",
        answer:
          "Software fixes it only if the process is fixed with it. We start by mapping where stock actually moves without being recorded — usually returns, samples and inter-branch transfers — and build around those, because that is where the variance comes from.",
      },
    ],
    nearby: ["lahore", "hyderabad", "islamabad", "quetta"],
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    province: "Islamabad Capital Territory",
    h1: "Software Company in Islamabad",
    tagline: "For the capital's public sector, development organisations and export-facing teams.",
    metaTitle: "Software Company in Islamabad | Web, Portals & Custom Software — WordbitX",
    metaDescription:
      "Websites, portals, custom software and apps for Islamabad organisations — Blue Area corporates, development-sector offices, clinics and schools.",
    overview: [
      "Islamabad buys software differently from Lahore or Karachi. Procurement is more formal, documentation matters more, and the buyer is often accountable to a board, a donor or a ministry rather than to a profit line. We write proposals for Islamabad with that in mind — scope, deliverables and acceptance criteria stated plainly enough to survive a committee.",
      "The capital's largest software demand sits in three places: the public and semi-public sector, the development and NGO sector that reports to international funders, and the export-facing technology and consultancy firms in Blue Area and the I-sectors.",
      "Accessibility and bilingual content come up here more than anywhere else, because a public-facing portal in Islamabad is expected to work for everyone. That is a design requirement we take seriously rather than a checkbox at the end.",
    ],
    economy: [
      {
        label: "Public and semi-public sector",
        body: "Citizen-facing portals, internal workflow systems and data dashboards, where auditability and clear access roles are the first requirement rather than the last.",
      },
      {
        label: "Development sector and NGOs",
        body: "Programme and beneficiary tracking, field data collection that works offline, and reporting formatted the way an international donor expects to receive it.",
      },
      {
        label: "Technology and consulting exports",
        body: "Product websites, SaaS marketing sites and internal tooling for the Blue Area and I-sector firms selling into Europe and North America.",
      },
      {
        label: "Private healthcare",
        body: "Clinic and diagnostic-centre platforms across the F and G sectors — appointments, consultant panels, published fees and patient records.",
      },
      {
        label: "Education",
        body: "Schools, O/A-level campuses and universities needing admissions, attendance, examinations and a parent portal that actually gets used.",
      },
    ],
    districts: [
      "Blue Area",
      "F-6, F-7, F-8 and F-10",
      "G-8, G-9, G-10 and G-11",
      "I-9 and I-10 industrial sectors",
      "Diplomatic Enclave surrounds",
      "Bahria Town and DHA Islamabad",
      "Gulberg Greens and Park Road corridor",
    ],
    asks: [
      "A public-facing portal that is accessible and works in Urdu and English",
      "Field data collection that keeps working with no signal",
      "Donor reporting that does not need a week of manual spreadsheet work",
      "A clinic platform with consultant schedules and published fees",
      "A product or SaaS site aimed at buyers in Europe and North America",
      "Documentation and handover good enough to pass a procurement review",
    ],
    services: [
      "custom-web-application-development",
      "saas-application-development",
      "web-development",
      "hospital-medical-portals",
      "education-portals",
      "ui-ux-design",
    ],
    industries: ["healthcare", "education", "finance", "legal", "ecommerce"],
    faqs: [
      {
        question: "Can you work with government or public-sector procurement?",
        answer:
          "Yes. We can provide a scoped proposal with deliverables, milestones and acceptance criteria written for a procurement process, plus the documentation and handover that usually come as an afterthought elsewhere.",
      },
      {
        question: "Do you build bilingual Urdu and English portals?",
        answer:
          "Yes, and properly — as a language-aware route structure with translated content, not a widget that machine-translates the page. We have shipped bilingual products before, so the pitfalls are known ones.",
      },
      {
        question: "Our field teams have no connectivity. Is that a problem?",
        answer:
          "No, but it has to be designed in from the start. Offline-first data capture with conflict handling on sync is a different architecture from an online form, and retrofitting it is far more expensive than planning it.",
      },
    ],
    nearby: ["rawalpindi", "lahore", "peshawar", "karachi"],
  },
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    province: "Punjab",
    h1: "Web Development Company in Rawalpindi",
    tagline: "For Pindi's traders, property offices and service businesses — with Islamabad next door.",
    metaTitle: "Web Development Company in Rawalpindi | Websites & Software — WordbitX",
    metaDescription:
      "WordbitX builds websites, e-commerce, POS and custom software for Rawalpindi businesses — Saddar, Raja Bazaar, Bahria Town and the Islamabad twin-city corridor.",
    overview: [
      "Rawalpindi is a trading city attached to an administrative one, and the software it buys reflects that. Where Islamabad wants a portal and a reporting pack, Pindi wants an order book, a stock figure and a way to stop losing enquiries on WhatsApp.",
      "The wholesale markets around Raja Bazaar and the retail along Saddar and Murree Road still run on relationships and handwritten ledgers. The businesses that move first — a catalogue online, a POS that prints a proper invoice, a dealer order form — take share quickly, because their competitors are not there yet.",
      "The twin-city corridor also means a lot of Rawalpindi businesses sell into Islamabad. A site that ranks for both cities, and a delivery flow that handles the two together, is worth more here than it would be anywhere else.",
    ],
    economy: [
      {
        label: "Wholesale and trading",
        body: "Catalogues, dealer order forms and credit tracking for the Raja Bazaar and Saddar trade, replacing the ledger without pretending the ledger was not working.",
      },
      {
        label: "Real estate",
        body: "Bahria Town, DHA Islamabad and the Adiala and Chakri corridors. Listings, plot files, instalment plans and a dealer CRM.",
      },
      {
        label: "Transport and travel",
        body: "Booking, fleet and route systems for a city that has been a transport hub for as long as it has existed.",
      },
      {
        label: "Retail and services",
        body: "Salons, clinics, gyms, academies and restaurants along Murree Road and Saddar — all appointment or order businesses, all underserved by software.",
      },
    ],
    districts: [
      "Saddar and Bank Road",
      "Raja Bazaar and Moti Bazaar",
      "Murree Road and Committee Chowk",
      "Bahria Town Rawalpindi",
      "Chaklala Scheme III",
      "Satellite Town",
      "Adiala Road corridor",
    ],
    asks: [
      "An online catalogue so dealers stop phoning for prices",
      "POS that prints a proper invoice and tracks credit customers",
      "A property site covering both Rawalpindi and Islamabad",
      "Online booking for a salon, clinic or academy",
      "A website that shows up for both twin cities, not just one",
    ],
    services: [
      "web-development",
      "pos-software",
      "ecommerce-development",
      "real-estate-portals",
      "local-seo",
      "inventory-management-software",
    ],
    industries: ["retail", "real-estate", "logistics", "hospitality", "fitness"],
    faqs: [
      {
        question: "Can one website rank in both Rawalpindi and Islamabad?",
        answer:
          "Yes, and it should. We treat the twin cities as one service area with separate location signals — distinct content, distinct business listings — rather than cramming both names into one page title and hoping.",
      },
      {
        question: "Our business runs on a ledger. Is software worth it?",
        answer:
          "Only if it removes work rather than adding it. If a ledger is working and the business is one counter, keep it. The moment there are two locations, credit customers, or a second person writing in the book, the arithmetic changes.",
      },
      {
        question: "What is the smallest project you will take?",
        answer:
          "A single well-built site or a one-counter POS is a perfectly normal engagement. We would rather start small and grow it than sell a system the business is not ready to run.",
      },
    ],
    nearby: ["islamabad", "lahore", "peshawar", "gujranwala"],
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    province: "Punjab",
    h1: "Software House in Faisalabad",
    tagline: "Built for the textile capital — production, stock, orders and export buyers.",
    metaTitle: "Software House in Faisalabad | Textile ERP, Web & Custom Software — WordbitX",
    metaDescription:
      "Production tracking, inventory, order management and export-buyer portals for Faisalabad textile mills, processing units and export houses.",
    overview: [
      "Faisalabad is a single-industry city in the most useful sense: almost every software conversation here eventually becomes a textile conversation. Weaving, processing, stitching, packing, export. That focus means we can be specific rather than generic.",
      "The recurring problem is not a missing website. It is that an order's status lives in four places — the production supervisor's register, the store's stock card, the accounts ledger and somebody's WhatsApp — and nobody can answer 'where is this order' without three phone calls. That is a solvable software problem and it pays for itself in weeks.",
      "The second recurring problem is the export buyer. A foreign buyer who can see sampling status, production progress and shipping documents in a portal stops emailing, and a supplier who offers that looks materially more professional than one who does not.",
    ],
    economy: [
      {
        label: "Weaving and power looms",
        body: "Loom-level production capture, shift output and wastage tracking — the numbers that decide margin and are currently written on paper.",
      },
      {
        label: "Processing and dyeing",
        body: "Batch and lot tracking through dyeing and finishing, with recipe records and rejection reasons captured where they happen.",
      },
      {
        label: "Stitching and made-ups",
        body: "Order-to-dispatch tracking across cutting, stitching, finishing and packing, so an order status is one screen rather than four registers.",
      },
      {
        label: "Export houses",
        body: "Buyer portals, sampling workflows, document packs and shipment tracking for houses selling into Europe, the US and the Gulf.",
      },
      {
        label: "Home textiles retail",
        body: "Brands moving from wholesale into direct retail need a store, a POS and stock that reconciles between the two.",
      },
    ],
    districts: [
      "Ghanta Ghar and the eight bazaars",
      "Faisalabad Industrial Estate (FIEDMC, M-3)",
      "Sargodha Road industrial belt",
      "Jhang Road and Sheikhupura Road units",
      "Peoples Colony and Madina Town",
      "Susan Road commercial",
    ],
    asks: [
      "One screen that answers 'where is this order'",
      "Stock that matches between the store, production and accounts",
      "A portal so export buyers can see status without emailing",
      "Loom and shift production captured without more paperwork",
      "A proper company website that an overseas buyer takes seriously",
      "Costing that reflects real wastage, not an assumed percentage",
    ],
    services: [
      "enterprise-software-solutions",
      "inventory-management-software",
      "custom-software-development",
      "crm-erp-solutions",
      "web-development",
      "ecommerce-development",
    ],
    industries: ["manufacturing", "logistics", "retail", "ecommerce"],
    faqs: [
      {
        question: "Our supervisors will not use a computer. How does this work?",
        answer:
          "It works when data capture happens where the work happens, on a phone or a fixed tablet, in two taps, in Urdu. If a system needs a supervisor to leave the floor and type into a desktop, it will not be used, and we design on that assumption.",
      },
      {
        question: "Do we have to replace everything at once?",
        answer:
          "No, and you should not. We normally start with the single worst bottleneck — usually order status or store stock — prove it in one department, then extend. A full-mill rollout as a first project is how these fail.",
      },
      {
        question: "Can it produce the documents our export buyer asks for?",
        answer:
          "Yes. Packing lists, invoices and shipment documents generated from the same data the production floor entered is the entire point — it removes the re-typing step where errors get introduced.",
      },
    ],
    nearby: ["lahore", "gujranwala", "multan", "sialkot"],
  },
  {
    slug: "sialkot",
    name: "Sialkot",
    province: "Punjab",
    h1: "Software Company in Sialkot",
    tagline: "For exporters — multi-currency B2B stores, buyer portals and marketplace listings.",
    metaTitle: "Software Company in Sialkot | B2B E-Commerce & Export Software — WordbitX",
    metaDescription:
      "Multi-currency B2B stores, buyer portals, Amazon and eBay listings and production tracking for Sialkot's sports goods, surgical and leather exporters.",
    overview: [
      "Sialkot is the most export-oriented city in Pakistan, and that changes the software brief completely. A Sialkot manufacturer's customer is in Germany, the UK or the US, has never visited the factory, and judges the company almost entirely on what it can see online.",
      "That makes a serious B2B web presence a commercial asset rather than a marketing expense. Prices in the buyer's currency, a downloadable catalogue, certifications visible, sample requests handled as a workflow rather than a contact form. Most Sialkot sites do none of this, which is exactly why the ones that do get the enquiry.",
      "The second opportunity is marketplace selling. Sports goods, leather and smaller surgical instruments sell well on Amazon, eBay and Etsy, and the manufacturers here are the people the current sellers are buying from. Going direct is a software and operations problem more than a manufacturing one.",
    ],
    economy: [
      {
        label: "Sports goods",
        body: "Catalogues with customisation options, branding and sampling workflows, and order tracking for buyers placing seasonal runs.",
      },
      {
        label: "Surgical instruments",
        body: "Catalogue depth is the problem here — thousands of SKUs with sizes, patterns and reference codes that need to be searchable, not a PDF.",
      },
      {
        label: "Leather goods and apparel",
        body: "Multi-currency B2B storefronts, sample requests and buyer-specific pricing, which a consumer store template cannot express.",
      },
      {
        label: "Direct marketplace selling",
        body: "Amazon, eBay and Etsy store setup and listing operations for manufacturers going direct instead of supplying someone else's brand.",
      },
    ],
    districts: [
      "Small Industrial Estate",
      "Sialkot Export Processing Zone",
      "Defence Road and Daska Road units",
      "Pasrur Road industrial belt",
      "Kashmir Road commercial",
      "Sialkot International Airport corridor",
    ],
    asks: [
      "A site that shows prices in the buyer's currency",
      "A catalogue with thousands of SKUs that is actually searchable",
      "Sample requests handled as a workflow, not an email",
      "Amazon, eBay or Etsy stores run properly instead of abandoned",
      "Certifications and compliance documents visible to buyers",
      "A buyer portal showing production and shipment status",
    ],
    services: [
      "ecommerce-development",
      "ecommerce-shopify",
      "amazon-store-setup",
      "custom-web-application-development",
      "seo-services",
      "ui-ux-design",
    ],
    industries: ["manufacturing", "ecommerce", "logistics", "retail"],
    faqs: [
      {
        question: "Should we sell B2B or go direct to consumers?",
        answer:
          "Usually both, but not at once. B2B is where the volume and the existing relationships are; direct-to-consumer is where the margin is and it needs operations you probably do not have yet. We would build the B2B surface first and the marketplace channel second.",
      },
      {
        question: "Can you handle a catalogue with thousands of references?",
        answer:
          "Yes, and that is the interesting part of the job. The work is in the data model — patterns, sizes, finishes and reference codes — because once that is right, search, filtering and the printed catalogue all come from one source.",
      },
      {
        question: "We already have a website nobody enquires through. What is wrong?",
        answer:
          "Nearly always one of three things: it does not say prices or terms, it does not appear for the product terms buyers actually search, or it gives no reason to trust an unknown supplier. An audit answers which in a day or two.",
      },
    ],
    nearby: ["gujranwala", "lahore", "faisalabad", "islamabad"],
  },
  {
    slug: "gujranwala",
    name: "Gujranwala",
    province: "Punjab",
    h1: "Software House in Gujranwala",
    tagline: "For manufacturers with dealer networks — orders, stock and after-sales in one place.",
    metaTitle: "Software House in Gujranwala | Manufacturing & Dealer Software — WordbitX",
    metaDescription:
      "Dealer portals, order management, inventory and websites for Gujranwala manufacturers — fans, ceramics, steel, agricultural machinery and food brands.",
    overview: [
      "Gujranwala manufactures things that get sold through dealers: fans, ceramics and sanitary ware, steel and pipe, agricultural machinery, food products. Almost every software problem in the city follows from that one fact.",
      "A dealer network run on phone calls and WhatsApp means orders get missed, prices drift between dealers, credit limits are informal, and nobody knows what is actually in a dealer's warehouse. A dealer portal fixes all four, and it is usually the single highest-return system a Gujranwala manufacturer can buy.",
      "The second theme is seasonality. Fans sell in summer, heaters in winter, machinery around harvest. Production planning and stock decisions here depend on a seasonal curve, which is exactly the sort of thing a dashboard built on real order history does better than memory.",
    ],
    economy: [
      {
        label: "Fans and electrical goods",
        body: "Dealer ordering, seasonal demand planning and warranty or after-sales tracking across a national dealer network.",
      },
      {
        label: "Ceramics and sanitary ware",
        body: "Catalogues with finishes and sizes, showroom stock visibility and dealer pricing tiers.",
      },
      {
        label: "Steel, pipe and hardware",
        body: "Order books priced by weight and grade, where the quoting logic itself is the software problem.",
      },
      {
        label: "Agricultural machinery",
        body: "Dealer and service-centre networks, spare-part catalogues and warranty claims tied to a serial number.",
      },
      {
        label: "Food processing",
        body: "Batch traceability, distributor allocation and route-wise dispatch.",
      },
    ],
    districts: [
      "Gujranwala Industrial Estate",
      "Sialkot Road and Wazirabad Road units",
      "GT Road industrial belt",
      "Satellite Town and Model Town commercial",
      "Sheikhupura Road corridor",
    ],
    asks: [
      "A dealer portal so orders stop arriving on WhatsApp",
      "One price list that every dealer sees the same version of",
      "Credit limits enforced by the system rather than by argument",
      "Warranty and after-sales claims tracked against a serial number",
      "Seasonal demand visible from real order history",
      "A company website an overseas or national buyer takes seriously",
    ],
    services: [
      "crm-erp-solutions",
      "inventory-management-software",
      "custom-software-development",
      "web-development",
      "mobile-app-development",
      "enterprise-software-solutions",
    ],
    industries: ["manufacturing", "logistics", "retail", "ecommerce"],
    faqs: [
      {
        question: "Our dealers are not technical. Will they use a portal?",
        answer:
          "They will if it is faster than phoning. In practice that means it works on a phone, in Urdu, with the dealer's own price list and order history already loaded, and it takes under a minute to place a repeat order. Anything heavier gets ignored.",
      },
      {
        question: "Can it handle different prices for different dealers?",
        answer:
          "Yes — tiered and dealer-specific pricing, discount slabs and credit limits are standard requirements here, and they belong in the system rather than in somebody's head.",
      },
      {
        question: "How long before we see a return?",
        answer:
          "For dealer ordering, typically one season. The gain is not dramatic efficiency; it is the orders that currently get lost, the pricing disputes that stop, and the credit that stops quietly expanding.",
      },
    ],
    nearby: ["sialkot", "lahore", "faisalabad", "rawalpindi"],
  },
  {
    slug: "multan",
    name: "Multan",
    province: "Punjab",
    h1: "Software Company in Multan",
    tagline: "For south Punjab — agriculture supply chains, distribution and growing retail.",
    metaTitle: "Software Company in Multan | Web, Agri & Retail Software — WordbitX",
    metaDescription:
      "Websites, distribution software, POS and custom systems for Multan businesses — mango and citrus export, agri inputs, retail, healthcare and real estate.",
    overview: [
      "Multan is the commercial centre of south Punjab, which means a Multan business is usually serving a large, spread-out area rather than a dense city. Distribution, route planning and dealer coverage matter more here than footfall.",
      "Agriculture sets the rhythm. Mango and citrus export, cotton, and the agri-input trade in seeds, fertiliser and pesticides all run on seasons and on credit extended down a chain of dealers and farmers. Software that ignores credit and seasonality is useless here regardless of how good it looks.",
      "The city is also growing fast in retail, private healthcare and real estate, and those sectors are roughly where Lahore was some years ago — enough demand to justify proper systems, not yet enough competition to make them table stakes. That is a good moment to move.",
    ],
    economy: [
      {
        label: "Mango and citrus export",
        body: "Procurement from orchards, grading, packing and shipment documents — a short, intense season where paperwork delays cost real money.",
      },
      {
        label: "Agri inputs and distribution",
        body: "Seed, fertiliser and pesticide dealers need route-wise dispatch, credit tracking and season-aware stock planning.",
      },
      {
        label: "Retail and wholesale",
        body: "Multi-counter POS and stock for the Hussain Agahi and Bosan Road trade, and for brands opening their first south Punjab outlets.",
      },
      {
        label: "Private healthcare",
        body: "Clinics and diagnostic centres around the Nishtar and Bosan Road corridor — appointments, reports and published fees.",
      },
      {
        label: "Real estate",
        body: "Listings, plot files and instalment plans for a market expanding along the bypass and the new housing schemes.",
      },
    ],
    districts: [
      "Bosan Road and Gulgasht",
      "Hussain Agahi and the old city bazaars",
      "Multan Industrial Estate",
      "Vehari Road and Khanewal Road corridors",
      "Northern Bypass housing schemes",
    ],
    asks: [
      "Credit tracked per dealer and per farmer, not in a register",
      "Route-wise dispatch instead of guessing what each van needs",
      "Grading and packing records for an export season that moves fast",
      "POS for two or three counters with one stock figure",
      "A clinic site with appointments and clear fees",
      "To appear in search for south Punjab, not compete with Lahore",
    ],
    services: [
      "inventory-management-software",
      "pos-software",
      "custom-software-development",
      "web-development",
      "local-seo",
      "hospital-medical-portals",
    ],
    industries: ["logistics", "retail", "healthcare", "real-estate", "manufacturing"],
    faqs: [
      {
        question: "Our business is seasonal. Does that change the system?",
        answer:
          "It changes the planning side substantially. Stock, credit and staffing decisions all need the previous season's actual numbers rather than a rolling monthly average, and that has to be designed in rather than reported around.",
      },
      {
        question: "Most of our sales are on credit. Can software handle that?",
        answer:
          "Yes, and it is normally the main reason to buy it. Credit limits, ageing, partial recoveries and dealer-level exposure are standard features of what we build for distribution businesses here.",
      },
      {
        question: "Is it harder to rank in search outside Lahore and Karachi?",
        answer:
          "It is considerably easier. There is far less competition for south Punjab terms, so a well-built local page can rank in months rather than years. That advantage will not last indefinitely.",
      },
    ],
    nearby: ["lahore", "faisalabad", "karachi", "quetta"],
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    province: "Khyber Pakhtunkhwa",
    h1: "Software House in Peshawar",
    tagline: "For KP's traders, marble and furniture units, clinics and schools.",
    metaTitle: "Software House in Peshawar | Websites, Trade & Clinic Software — WordbitX",
    metaDescription:
      "WordbitX builds websites, trading and inventory systems, clinic platforms and school portals for Peshawar and Khyber Pakhtunkhwa businesses.",
    overview: [
      "Peshawar is first and foremost a trading city, and trade here moves in volumes and on terms that a standard retail system does not express well. Mixed consignments, credit between known parties, and pricing that moves with the border and the rupee.",
      "Alongside trade sit real manufacturing clusters — marble and granite, furniture, dry fruit processing — and a large private healthcare and education sector serving the whole province.",
      "Software adoption is lower here than in Punjab, which cuts both ways. There are fewer good local options, and there is also far less competition for search terms. A Peshawar business with a genuinely good website and a working system is competing against very little.",
    ],
    economy: [
      {
        label: "Trading and wholesale",
        body: "Mixed consignments, party-wise credit and ledger-style accounts — modelled as they actually work rather than forced into a retail template.",
      },
      {
        label: "Marble, granite and stone",
        body: "Catalogues by slab, grade and finish, quoting by area, and stock that is measured rather than counted.",
      },
      {
        label: "Furniture and wood",
        body: "Made-to-order workflows, customer-specific specifications and production scheduling for the Peshawar furniture trade.",
      },
      {
        label: "Dry fruit and food trade",
        body: "Lot tracking, grading and seasonal pricing for a trade that moves large volumes on short notice.",
      },
      {
        label: "Private healthcare and education",
        body: "Clinic appointment platforms and school systems serving patients and families from across Khyber Pakhtunkhwa.",
      },
    ],
    districts: [
      "Hayatabad Industrial Estate",
      "Khyber Bazaar and Qissa Khwani",
      "University Road corridor",
      "Ring Road industrial units",
      "Hayatabad and Regi Model Town",
    ],
    asks: [
      "Party-wise ledgers and credit, the way the trade actually runs",
      "A catalogue for stone or furniture with real specifications",
      "Quoting by area or by measurement, not by unit",
      "Appointment booking for a clinic or diagnostic centre",
      "A school system with fee challans and parent communication",
      "A website in a market where almost nobody has a good one",
    ],
    services: [
      "inventory-management-software",
      "web-development",
      "custom-software-development",
      "hospital-medical-portals",
      "education-portals",
      "local-seo",
    ],
    industries: ["logistics", "manufacturing", "healthcare", "education", "retail"],
    faqs: [
      {
        question: "Do you work with clients in Khyber Pakhtunkhwa?",
        answer:
          "Yes, remotely as standard. Video calls, shared documents and WhatsApp for day-to-day work; travel when kickoff or training genuinely needs it.",
      },
      {
        question: "Our accounts are kept the traditional way. Will this fit?",
        answer:
          "It has to. We model party-wise ledgers, credit and settlement the way the trade actually works, rather than imposing an accounting structure the business will quietly abandon in month two.",
      },
      {
        question: "Is it worth investing in SEO here?",
        answer:
          "More than in Lahore or Karachi, because the competition is thinner. The absolute search volume is lower, but so is the cost of reaching the top of it, and the enquiries that come through are local and serious.",
      },
    ],
    nearby: ["islamabad", "rawalpindi", "lahore", "quetta"],
  },
  {
    slug: "quetta",
    name: "Quetta",
    province: "Balochistan",
    h1: "Software Company in Quetta",
    tagline: "Built for patchy connectivity, long distances and trade that does not wait.",
    metaTitle: "Software Company in Quetta | Websites & Business Software — WordbitX",
    metaDescription:
      "Websites, offline-capable business systems, inventory and clinic software for Quetta and Balochistan — fruit trade, mining, logistics and retail.",
    overview: [
      "Quetta is the hardest Pakistani city to build software for, and that is a design brief rather than a complaint. Connectivity is inconsistent, distances between a head office and a site are large, and a system that assumes a steady connection will simply stop being used.",
      "So the architecture changes: offline-capable data capture, sync when a connection appears, and interfaces light enough to work on a weak mobile signal. That is a deliberate engineering choice, and it is the difference between a system that runs in Balochistan and one that runs in a demo.",
      "The commercial base is fruit — apples, grapes, almonds — plus mining services, cross-border trade and logistics, and a retail and healthcare sector serving a very large catchment. Nearly all of it is underserved by software, and almost none of it is contested in search.",
    ],
    economy: [
      {
        label: "Fruit and dry fruit trade",
        body: "Procurement, grading, cold storage and dispatch to Karachi, Lahore and beyond, in a trade where a day's delay changes the price.",
      },
      {
        label: "Mining and mineral services",
        body: "Site reporting, equipment and consumable tracking, and dispatch records captured where there is no reliable signal.",
      },
      {
        label: "Logistics and transport",
        body: "Fleet, trip and consignment records for long-haul routes, with drivers reporting from the road rather than the office.",
      },
      {
        label: "Retail and healthcare",
        body: "POS, stock and clinic appointment systems for businesses serving a catchment far larger than the city itself.",
      },
    ],
    districts: [
      "Jinnah Road and Liaquat Bazaar",
      "Quetta Industrial Estate",
      "Airport Road corridor",
      "Sariab Road",
      "Hazara Town and Satellite Town",
    ],
    asks: [
      "Something that keeps working when the internet does not",
      "Dispatch and trip records captured from the road",
      "Grading and cold-store records for a fast-moving fruit season",
      "POS and stock for a shop serving a very wide catchment",
      "A website at all — most competitors do not have one",
    ],
    services: [
      "custom-software-development",
      "inventory-management-software",
      "mobile-app-development",
      "web-development",
      "pos-software",
      "local-seo",
    ],
    industries: ["logistics", "retail", "healthcare", "manufacturing"],
    faqs: [
      {
        question: "Can software work where the internet keeps dropping?",
        answer:
          "Yes, if it is built for it. Data is captured and stored on the device, then synced when a connection appears, with explicit handling for conflicts. It is a different architecture from a normal web app and it has to be chosen at the start.",
      },
      {
        question: "Do you travel to Quetta?",
        answer:
          "For kickoff or training when the project warrants it. Most of the work is remote, and we are straightforward about what genuinely needs a visit and what does not.",
      },
      {
        question: "Is a website worth it in a small market?",
        answer:
          "Often more than in a large one. When almost no competitor has a working site, the one business that does takes the enquiries from the entire catchment, not a share of them.",
      },
    ],
    nearby: ["karachi", "multan", "lahore", "peshawar"],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    province: "Sindh",
    h1: "Software House in Hyderabad, Sindh",
    tagline: "For Sindh's second city — trade, agriculture, handicraft and the Karachi corridor.",
    metaTitle: "Software House in Hyderabad Sindh | Web & Business Software — WordbitX",
    metaDescription:
      "Websites, e-commerce, inventory and POS software for Hyderabad, Sindh — bangle and handicraft makers, agriculture trade, retail and supply logistics.",
    overview: [
      "Hyderabad sits close enough to Karachi to supply it and far enough to have its own economy. A great deal of what is made or grown here is sold there, which makes dispatch, credit and coordination along that corridor the recurring operational theme.",
      "The city has two things most Pakistani cities do not: a genuine handicraft manufacturing base — bangles above all — and a large agricultural hinterland feeding into it. Both are export-capable and both are almost entirely absent from online selling, which is an open opportunity rather than a saturated one.",
      "Search competition here is low. A Hyderabad business with a properly built site and local SEO can own its category locally far faster and more cheaply than the equivalent business in Karachi could.",
    ],
    economy: [
      {
        label: "Bangles and handicraft",
        body: "Product catalogues, wholesale ordering and export or marketplace selling for a craft industry that barely sells online today.",
      },
      {
        label: "Agriculture and food trade",
        body: "Procurement, grading and dispatch into the Karachi market, with credit tracked along the chain.",
      },
      {
        label: "Wholesale and distribution",
        body: "Order books, route dispatch and dealer credit for businesses supplying both Hyderabad and Karachi.",
      },
      {
        label: "Retail and services",
        body: "POS, stock and booking systems for shops, clinics and academies across the city.",
      },
    ],
    districts: [
      "Hyderabad Site Area",
      "Resham Gali and the bangle market",
      "Latifabad and Qasimabad",
      "Saddar and Shahi Bazaar",
      "Hyderabad Bypass and the Karachi corridor",
    ],
    asks: [
      "A way to sell handicraft products beyond the local wholesale market",
      "Dispatch and credit tracked along the Karachi corridor",
      "POS and stock for a multi-counter shop",
      "A catalogue buyers outside Sindh can actually browse",
      "Local search presence in a market almost nobody is competing in",
    ],
    services: [
      "ecommerce-development",
      "web-development",
      "inventory-management-software",
      "pos-software",
      "local-seo",
      "ecommerce-shopify",
    ],
    industries: ["manufacturing", "retail", "logistics", "ecommerce"],
    faqs: [
      {
        question: "Can a Hyderabad manufacturer sell online internationally?",
        answer:
          "Yes, and handicraft is one of the better categories for it. The work is in photography, a catalogue with proper specifications, and the shipping and payment setup — the manufacturing side is already there.",
      },
      {
        question: "Do you serve clients outside Karachi in Sindh?",
        answer:
          "Yes. We work remotely across Sindh as standard, with the same process we use for any other city.",
      },
      {
        question: "What should a smaller business spend on first?",
        answer:
          "A site that can be found and that explains what you sell, before anything internal. If enquiries are the constraint, an ERP does not help; if dispatch is the constraint, the site can wait.",
      },
    ],
    nearby: ["karachi", "multan", "quetta", "lahore"],
  },
];

export const cityBySlug = new Map(cities.map((city) => [city.slug, city]));

export function getCity(slug: string): City | undefined {
  return cityBySlug.get(slug);
}

export function getCities(slugs: string[]): City[] {
  return slugs.map((slug) => cityBySlug.get(slug)).filter((city): city is City => Boolean(city));
}

export const citiesIntro =
  "We are a Lahore-based team that delivers across Pakistan. These pages are not the same page with the city name changed — each one covers what that city's businesses actually build, which districts they trade in and what they ask us for.";
