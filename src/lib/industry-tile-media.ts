/**
 * Local photography for the thirteen industry tiles on the home page.
 *
 * Why this exists rather than reusing `industry.image`:
 *
 * 1. `industries.ts` points at images.pexels.com. Every other photograph on
 *    the home page is a committed file under /public/brand, so those thirteen
 *    were the only third-party hotlinks on the page — slower, outside our
 *    control, and dependent on a host we do not own.
 * 2. The six "ready-to-adapt platform" cards sit directly above these tiles
 *    and already use the service photos for e-commerce, Shopify, real estate,
 *    hospital, education and jewellery. Reusing those files here would print
 *    the same photograph twice within one screen.
 *
 * So eight tiles borrow a service photo that the cards above do not use, and
 * five — real estate, healthcare, pharmacy, education, e-commerce — have their
 * own file shot to the same house style, because their natural match was
 * already taken by the cards above.
 *
 * Industry *pages* still use `industry.image`; this map only feeds the home
 * page grid.
 */
export const industryTileMedia: Record<string, { src: string; alt: string }> = {
  retail: {
    src: "/brand/services/pos-software.jpg",
    alt: "Retail counter taking a card payment on a point-of-sale terminal",
  },
  "real-estate": {
    src: "/brand/industries/real-estate.jpg",
    alt: "Plot file and society layout map beside a tablet showing an instalment schedule",
  },
  healthcare: {
    src: "/brand/industries/healthcare.jpg",
    alt: "Clinic reception with an appointment queue display and a patient schedule on screen",
  },
  pharmacy: {
    src: "/brand/industries/pharmacy.jpg",
    alt: "Pharmacy counter with a billing terminal showing batch and expiry columns",
  },
  education: {
    src: "/brand/industries/education.jpg",
    alt: "School office desk with a student fee and attendance dashboard and a voucher printing",
  },
  logistics: {
    src: "/brand/services/inventory-management-software.jpg",
    alt: "Warehouse operator scanning a carton against a stock system",
  },
  ecommerce: {
    src: "/brand/industries/ecommerce.jpg",
    alt: "Packing bench with an order management screen and a shipping label printing",
  },
  hospitality: {
    src: "/brand/services/travel-booking.jpg",
    alt: "Booking itinerary open on a laptop beside travel documents",
  },
  finance: {
    src: "/brand/services/saas-application-development.jpg",
    alt: "Subscription billing dashboard with revenue charts on a laptop",
  },
  manufacturing: {
    src: "/brand/services/enterprise-software-solutions.jpg",
    alt: "Operations dashboard on a boardroom screen showing plant performance",
  },
  legal: {
    src: "/brand/services/it-consulting.jpg",
    alt: "Advisors mapping a process on a boardroom whiteboard",
  },
  fitness: {
    src: "/brand/services/mobile-app-development.jpg",
    alt: "Membership app open on a phone",
  },
  construction: {
    src: "/brand/services/construction-site.jpg",
    alt: "Site engineer checking a project schedule on a tablet in front of a building under construction",
  },
};
