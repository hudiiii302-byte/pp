import type { Topic } from "@/lib/topic-types";

/**
 * FBR compliance cluster.
 *
 * Why this exists: before this file the site had zero mentions of FBR, which
 * is the single largest content gap we have. Digital invoicing is a legal
 * obligation in Pakistan, not a preference — so the people searching these
 * terms are compelled buyers with a deadline, which is the highest-intent
 * traffic available to us. Nothing else we could write converts like this.
 *
 * ────────────────────────────────────────────────────────────────────────
 * HONESTY CONSTRAINT — read before editing any copy below.
 *
 * WordbitX is NOT an FBR licensed integrator. Under section 2(15A) of the
 * Sales Tax Act, 1990, only a person licensed by the Board may provide the
 * electronic invoicing system, and under Chapter XIV of the Sales Tax Rules,
 * 2006, only a licensed integrator may configure a registered person's
 * software for real-time transmission.
 *
 * So the claim on these pages is strictly: we build and adapt the POS/ERP so
 * it produces compliant invoice data, and the transmission runs through PRAL
 * (free, rule 150XF) or whichever licensed integrator the client appoints.
 * Never write or imply "WordbitX integrates you with FBR", "FBR approved",
 * "FBR certified" or "licensed integrator". That is the kind of unverifiable
 * claim the trust audit marked as our worst problem.
 *
 * Every statutory reference below was checked against FBR's own FAQ pages and
 * the Sales Tax Act. Thresholds and SROs change every budget — the pages say
 * so, and say to confirm current status with a tax adviser.
 * ────────────────────────────────────────────────────────────────────────
 */

const complianceAuthor = {
  name: "Awais Malick",
  role: "Founder & CEO, WordbitX",
  url: "/about",
  sameAs: "https://www.linkedin.com/in/awais-malick/",
  photo: "/brand/team/awais-malick.jpg",
};

/**
 * Review date, not publish date. SROs in this area land every few months, so
 * a reader needs to know how stale the statutory references are — and so does
 * Google, which treats undated tax content as a trust problem.
 * Bump this whenever the facts above are re-checked.
 */
const reviewed = {
  date: "2026-10-04",
  note: "Written by a software engineer, not a tax adviser. Statutory references were checked against FBR's own published FAQs and the Sales Tax Act, 1990 on this date. WordbitX is not an FBR licensed integrator.",
};

const confirmWithAdviser =
  "Rules, thresholds and dates in this area change with almost every finance act and SRO. Treat this page as an engineering brief, not tax advice, and confirm your own position with your tax adviser or FBR directly before acting.";

export const topicsE: Topic[] = [
  {
    slug: "fbr-digital-invoicing",
    title: "FBR Digital Invoicing",
    h1: "FBR Digital Invoicing — What Your Software Actually Has to Do",
    category: "Compliance",
    summary:
      "Real-time invoice transmission to FBR, an IRN and a QR code on every receipt. What that means for the system you already run.",
    metaTitle: "FBR Digital Invoicing Software Pakistan",
    metaDescription:
      "FBR digital invoicing explained: who must integrate under SRO 709(I)/2025, what the invoice must carry, and what it means for your POS or ERP system.",
    keywords: [
      "FBR digital invoicing",
      "FBR e-invoicing software",
      "SRO 709 digital invoicing",
      "FBR invoicing integration Pakistan",
      "digital invoicing software Pakistan",
    ],
    overview: [
      "FBR digital invoicing means your billing system stops being a private record and becomes a reporting channel. Each sales tax invoice is transmitted to FBR's platform as it is raised, validated, and returned with a unique invoice reference number and a QR code that the buyer can verify. The paper you hand over is only the printed end of that round trip.",
      "The obligation comes from SRO 709(I)/2025, dated 22 April 2025, issued under the Sales Tax Act, 1990 and rule 150Q of the Sales Tax Rules, 2006. FBR's own FAQ sets the integration dates at 1 June 2025 for corporate registered persons and 1 July 2025 for non-corporate registered persons, and later SROs have continued to widen the net. If you are sales tax registered, the question is not whether this applies but when it already did.",
      "Two things businesses are routinely overcharged for are free. FBR charges no fee to a registered person for digital invoicing, and under rule 150XF, PRAL acts as a licensed integrator providing integration services at no cost. You pay for software, setup and support — not for access to the fiscal system.",
      "The part that cannot be done by just anyone: only a licensed integrator, as defined in section 2(15A), may configure a registered person's invoicing software for real-time transmission to FBR. WordbitX is not a licensed integrator and does not claim to be. What we do is build or adapt the POS, ERP or e-commerce backend so it emits exactly the structured data the fiscal system expects, then work alongside PRAL or your appointed licensed integrator to get it transmitting.",
      "This is where off-the-shelf foreign software tends to fail. QuickBooks, Xero, Zoho and most international ERPs were never designed around Pakistani sales tax: the JSON payload varies by scenario — exempt supplies, reduced-rate supplies, third schedule items, further tax on unregistered buyers — and HS code validation happens in real time against a local list. A compliance layer bolted onto software that does not model those concepts is where most failed integrations come from.",
      confirmWithAdviser,
    ],
    useCases: [
      "Sales tax registered companies whose current billing software cannot emit the required fields",
      "Businesses running an international ERP that has no Pakistani fiscal module",
      "Distributors and wholesalers issuing high invoice volumes where manual portal entry is impractical",
      "E-commerce stores that must raise a compliant invoice at checkout, not after it",
      "Finance teams that need a retry queue so a fiscal-server outage does not stop trading",
    ],
    services: [
      "pos-software",
      "crm-erp-solutions",
      "custom-software-development",
      "api-development",
      "ecommerce-development",
    ],
    posts: ["pos-software-for-retail-pakistan", "custom-software-vs-ready-made-software"],
    reviewed,
    author: complianceAuthor,
    faqs: [
      {
        question: "Does WordbitX integrate my system with FBR?",
        answer:
          "Not directly, and anyone telling you they do without a licence is overstating. Only an FBR licensed integrator under section 2(15A) may configure your software for real-time transmission. We build the software so it produces compliant invoice data and we work with PRAL — which provides integration free of cost under rule 150XF — or with whichever licensed integrator you appoint.",
      },
      {
        question: "What does FBR charge for digital invoicing?",
        answer:
          "Nothing. Per FBR's own FAQ, a registered person pays no fee to FBR, and PRAL provides integration services free of cost. Your costs are the invoicing software, configuration, and any fee a private licensed integrator charges — which FBR caps by general order.",
      },
      {
        question: "What has to appear on a compliant invoice?",
        answer:
          "The centrally generated unique invoice number, a verifiable QR code and the FBR logo, alongside seller NTN and STRN, buyer details, item description with HS code and unit of measurement, quantity, value excluding tax, the sales tax amount, and value including tax. Further tax and withheld tax appear where they apply.",
      },
      {
        question: "What happens when the fiscal server is down?",
        answer:
          "Your software should queue and retry rather than stop the counter. That is an architectural requirement we design for from the start — an offline-capable local layer with a conflict-safe sync, so trading continues and invoices reconcile when the connection returns.",
      },
      {
        question: "Can we keep our existing system?",
        answer:
          "Often yes. If it exposes a clean data layer we add a compliance service alongside it rather than replacing it. If it is a closed foreign product with no Pakistani tax model, replacing the invoicing path is usually cheaper than fighting it. We tell you which of the two you are looking at during discovery.",
      },
    ],
  },
  {
    slug: "fbr-pos-integration",
    title: "FBR POS Integration",
    h1: "FBR POS Integration for Retail Counters in Pakistan",
    category: "Compliance",
    summary:
      "Real-time reporting from the till, an FBR invoice number and QR code on every receipt, and a counter that keeps selling when the line drops.",
    metaTitle: "FBR POS Integration Software Pakistan",
    metaDescription:
      "FBR POS integration for Tier-1 retailers: what section 3(9A) requires, what the receipt must print, non-integration costs under 8B(6), and offline billing.",
    keywords: [
      "FBR POS integration",
      "FBR integrated POS software",
      "POS integration Pakistan",
      "Tier-1 retailer POS",
      "FBR POS software Lahore",
    ],
    overview: [
      "Section 3(9A) of the Sales Tax Act, 1990 requires Tier-1 retailers to integrate every retail outlet with FBR's computerised system so that sales are reported in real time. In practice: the cashier completes the sale, your POS transmits the invoice, FBR validates it and returns an invoice number and QR code, and the receipt prints with both — usually inside a second or two.",
      "The cost of ignoring it is specific rather than vague. Under section 8B(6) a Tier-1 retailer that has not integrated loses a large share of its adjustable input tax for that period — the reduction was 15% when the regime started and has since been raised to 60%, which turns sales tax you already paid on purchases into money you cannot claim back. Section 33 adds monetary penalties, and continued non-compliance can lead to sealing of premises.",
      "The engineering problem nobody mentions in the compliance brochures is the network. A counter that stops billing because a fiscal API is unreachable is not a compliant shop, it is a closed one. We treat offline-first as the default: the till writes locally, keeps serving customers, and syncs with conflict handling when connectivity returns. That is the same architecture our retail POS work has always used, and it is the reason the compliance layer does not become a single point of failure for the business.",
      "Multi-branch adds its own requirement. Each outlet registers its own store ID and each POS terminal is registered separately, so the reporting model has to mirror your actual branch and terminal structure rather than pretending the chain is one till. Reporting back to the owner then has to reconcile branch, terminal, shift and cashier against what was actually transmitted.",
      "Who does the connecting: only an FBR licensed integrator may configure your software for transmission, and PRAL performs that role free of cost. WordbitX builds the POS and the data layer behind it; the fiscal link runs through PRAL or the licensed integrator you choose. We are not a licensed integrator and do not describe ourselves as FBR approved.",
      confirmWithAdviser,
    ],
    useCases: [
      "Chain stores registering a store ID and terminals per outlet",
      "Retailers whose current POS cannot print an FBR invoice number, QR code and logo",
      "Shops that lose billing whenever the internet drops and need an offline-first till",
      "Owners who need branch, shift and cashier reporting reconciled against transmitted invoices",
      "Businesses moving off a closed foreign POS with no Pakistani fiscal path",
    ],
    services: [
      "pos-software",
      "inventory-management-software",
      "custom-software-development",
      "api-development",
      "enterprise-software-solutions",
    ],
    posts: ["pos-software-for-retail-pakistan", "restaurant-pos-software-pakistan", "inventory-management-software-guide"],
    reviewed,
    author: complianceAuthor,
    faqs: [
      {
        question: "Is FBR POS integration mandatory for my shop?",
        answer:
          "It is mandatory for Tier-1 retailers, and Tier-1 status is triggered by meeting any one of the tests in section 2(43A) — not all of them. A single air-conditioned mall unit, a card machine, or an electricity bill over Rs 1.2 million across twelve months is enough on its own. See our Tier-1 retailer page for the full list.",
      },
      {
        question: "What does a non-integrated Tier-1 retailer actually lose?",
        answer:
          "A reduction in adjustable input tax for the period under section 8B(6) — originally 15%, now 60% — which directly raises what you owe, plus penalties under section 33 and, for continued failure, sealing of the premises. The input tax reduction is usually the larger number.",
      },
      {
        question: "Will billing stop if the FBR service is unreachable?",
        answer:
          "It should not. We build the counter offline-first: billing, printing and stock deduction continue locally, invoices queue, and transmission catches up when the connection returns. A compliance requirement should never become the reason a shop cannot trade.",
      },
      {
        question: "Can our existing POS be made compliant instead of replaced?",
        answer:
          "Sometimes. If it can be extended and exposes its data cleanly, adding the compliant invoicing path is cheaper than a rebuild. If it is closed software with no Pakistani tax model, we will say so rather than sell you an integration that will keep breaking.",
      },
      {
        question: "Do online sales have to be reported too?",
        answer:
          "Yes. A Tier-1 retailer's web sales fall within the same regime, so the storefront has to raise the compliant invoice at checkout and print the FBR invoice number and QR code on what the online customer receives.",
      },
    ],
  },
  {
    slug: "tier-1-retailer-pos-requirements",
    title: "Tier-1 Retailer Requirements",
    h1: "Am I a Tier-1 Retailer? The Seven Tests, in Plain Language",
    category: "Compliance",
    summary:
      "Section 2(43A) catches far more shops than owners expect. Meeting any one test is enough — including the electricity bill.",
    metaTitle: "Tier-1 Retailer POS Rules Pakistan",
    metaDescription:
      "Tier-1 retailer defined under section 2(43A) of the Sales Tax Act: the seven tests, the electricity threshold, integration requirements and penalties.",
    keywords: [
      "Tier-1 retailer",
      "Tier 1 retailer Pakistan",
      "section 2(43A) Sales Tax Act",
      "Tier-1 retailer POS integration",
      "am I a tier 1 retailer",
    ],
    overview: [
      "Most owners assume Tier-1 means a national chain or a big brand outlet, so they never check. The definition in section 2(43A) of the Sales Tax Act, 1990 is far wider than that, and the wording matters: you qualify by meeting any one of the tests, not all of them.",
      "The tests are: operating as a unit of a national or international chain of stores; operating in an air-conditioned shopping mall, plaza or centre, with kiosks excluded; a cumulative electricity bill exceeding Rs 1,200,000 over the preceding twelve months; being a wholesaler-cum-retailer engaged in bulk import and supply of consumer goods; a shop measuring one thousand square feet or more; having acquired a point of sale for accepting debit or credit card payments; and withholding tax under sections 236G or 236H of the Income Tax Ordinance above the notified threshold.",
      "The electricity test catches the most people. Rs 1,200,000 across twelve months is roughly Rs 100,000 a month — which an air-conditioned shop in Lahore or Karachi can reach without being large by any other measure. The threshold was raised from Rs 600,000, so owners who checked years ago may have the wrong figure in their head.",
      "Once you qualify, integration under section 3(9A) is not the only obligation. You also need sales tax registration under section 14, proper electronic tax invoices under section 23, tax charged at the rate applicable to the goods, and the monthly return under section 26. The software has to support all of that, not just the transmission.",
      "Separately, and often missed: restaurants, cafés and snack bars fall under their own chapter of the Sales Tax Rules, 2006 and are required to integrate whether or not they meet any Tier-1 test. If you run a food business, the Tier-1 question is beside the point.",
      confirmWithAdviser,
    ],
    useCases: [
      "A single shop that crossed the electricity threshold without noticing",
      "A boutique inside an air-conditioned mall, regardless of size or turnover",
      "A standalone shop that installed a card machine and triggered the POS test",
      "Wholesaler-cum-retailers importing and supplying consumer goods in bulk",
      "Owners who last checked the threshold when it was Rs 600,000",
    ],
    services: ["pos-software", "inventory-management-software", "crm-erp-solutions", "it-consulting"],
    posts: ["pos-software-for-retail-pakistan", "restaurant-pos-software-pakistan"],
    reviewed,
    author: complianceAuthor,
    faqs: [
      {
        question: "Do I need to meet all seven tests?",
        answer:
          "No — any one. The statute uses the words 'any one or more', so a single trigger such as a card machine or an electricity bill over Rs 1,200,000 across twelve months makes you a Tier-1 retailer on its own.",
      },
      {
        question: "What is the electricity bill threshold?",
        answer:
          "A cumulative bill exceeding Rs 1,200,000 during the immediately preceding twelve consecutive months, under section 2(43A)(c). That is about Rs 100,000 a month. It was raised from Rs 600,000, so older guidance you may have read is out of date.",
      },
      {
        question: "Does accepting cards really make me Tier-1?",
        answer:
          "Acquiring a point of sale for accepting debit or credit card payments is one of the listed tests, so on its face yes, even for a standalone shop. Because this one surprises people most often, confirm your specific position with your tax adviser.",
      },
      {
        question: "Are restaurants Tier-1 retailers?",
        answer:
          "Restaurants are covered by their own chapter of the Sales Tax Rules, 2006, which requires integration whether or not they fall inside the Tier-1 definition. For a food business the practical answer is that integration applies either way.",
      },
      {
        question: "Should I check my status again each year?",
        answer:
          "Yes. The tests are rolling — the electricity test looks at the preceding twelve months — so a business can move into Tier-1 simply because tariffs rose or it added air conditioning. Review it annually.",
      },
    ],
  },
  {
    slug: "fbr-restaurant-pos",
    title: "FBR Restaurant POS",
    h1: "FBR-Ready Restaurant POS — Integration Applies Whether or Not You Are Tier-1",
    category: "Compliance",
    summary:
      "Restaurants, cafés and snack bars have their own rule. Dine-in, takeaway, delivery and aggregator orders all have to reconcile.",
    metaTitle: "FBR Restaurant POS Software Pakistan",
    metaDescription:
      "FBR-ready restaurant POS software: why restaurants must integrate regardless of Tier-1 status, how aggregator orders reconcile, and offline counters.",
    keywords: [
      "FBR restaurant POS",
      "restaurant POS software Pakistan",
      "FBR integrated restaurant billing",
      "cafe POS software Lahore",
      "KOT software Pakistan",
    ],
    overview: [
      "Restaurant owners spend a lot of time working out whether they are Tier-1. For food businesses that question is largely academic: restaurants, snack bars and cafés are addressed by their own chapter of the Sales Tax Rules, 2006, which requires POS integration whether or not the Tier-1 tests are met.",
      "A restaurant is a harder integration than a shop because one covered sits across several revenue paths. Dine-in with table and split billing, takeaway at the counter, your own delivery, and aggregator orders arriving through a third-party tablet all have to end up as reportable invoices that reconcile against the kitchen and against the day's cash. If the aggregator channel is handled outside the POS, the books will not tie out and the reported figure will not match the real one.",
      "Service charge, discounts, voids and comped items are the second trap. Every one of those adjusts the taxable value, and every one is a place where staff behaviour and tax reporting meet. Role-based permissions, void tracking and discount limits are not just anti-theft features here — they are what makes the transmitted numbers defensible.",
      "The counter still has to work during a dinner rush on a bad connection. We build restaurant tills offline-first: KOT printing, billing and table state continue locally, invoices queue, and transmission catches up on reconnect.",
      "As with all of our compliance work: WordbitX builds the POS and the data behind it. The fiscal link is configured by PRAL, which does it free of cost, or by the licensed integrator you appoint. We are not a licensed integrator.",
      confirmWithAdviser,
    ],
    useCases: [
      "Cafés and restaurants that assumed Tier-1 thresholds let them out of integration",
      "Multi-outlet food brands needing per-outlet store IDs and consolidated owner reporting",
      "Kitchens where aggregator orders currently bypass the POS entirely",
      "Operators who need void, discount and comp tracking that stands up to an audit",
      "Venues on unreliable connections that cannot risk a till that stops at 9pm",
    ],
    services: ["pos-software", "inventory-management-software", "custom-software-development", "mobile-app-development"],
    posts: ["restaurant-pos-software-pakistan", "pos-software-for-retail-pakistan"],
    reviewed,
    author: complianceAuthor,
    faqs: [
      {
        question: "Do small cafés have to integrate?",
        answer:
          "The restaurant chapter of the Sales Tax Rules, 2006 applies to restaurants, snack bars and cafés without depending on the Tier-1 tests, so size alone does not exempt a food business. Confirm your own position with your tax adviser, because enforcement and notification practice vary.",
      },
      {
        question: "How do aggregator orders get reported?",
        answer:
          "They have to come into the same order pipeline as everything else, either through an integration with the aggregator or through a disciplined entry step, so that one invoice series covers every channel. Leaving them on a separate tablet is the most common reason a restaurant's reported sales do not match its actual sales.",
      },
      {
        question: "What about service charge and discounts?",
        answer:
          "Both change the taxable value, so they must be modelled in the invoice rather than applied as an afterthought on the printout. We build them as first-class fields with permission limits and an audit trail.",
      },
      {
        question: "Can the till keep working offline?",
        answer:
          "Yes, and for a restaurant it has to. KOTs, table state and billing run locally, invoices queue, and they transmit when the connection is back. The kitchen never waits on an API.",
      },
    ],
  },
];
