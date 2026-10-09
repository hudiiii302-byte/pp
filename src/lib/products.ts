/**
 * WordbitX products.
 *
 * The showcase sites in demos.ts are not throwaway templates — they are
 * products we designed, built and host ourselves. This file carries the
 * long-form detail for the ones that deserve a page of their own, keyed by the
 * demo id so there is exactly one source of truth for the URL, screenshot and
 * live link (demos.ts) and one for the written detail (here).
 *
 * Everything written below describes software we actually built. No client
 * names, revenue figures or results are claimed, because we do not have any to
 * claim for these builds — the sites themselves are the evidence, and every
 * one of them can be opened and clicked through.
 */
import { demoWebsites, type DemoWebsite } from "@/lib/demos";

export type ProductFaq = { q: string; a: string };

export type ProductDetail = {
  /** Matches DemoWebsite.id and becomes the URL slug. */
  slug: string;
  /** The product's own brand name, as it appears on the live site. */
  productName: string;
  /** One line under the H1. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  /** Opening paragraphs — what it is and why we built it. */
  overview: string[];
  /** Who the build is aimed at. */
  builtFor: string[];
  /** The things you can actually click on the live site. */
  capabilities: { title: string; body: string }[];
  /** Engineering notes — the part a buyer cannot see from the screenshot. */
  insideTheBuild: string[];
  /** Service pages this product proves we can deliver. */
  relatedServiceSlugs: string[];
  faqs: ProductFaq[];
};

export const productDetails: ProductDetail[] = [
  {
    slug: "properties-pak",
    productName: "Properties Pak",
    tagline: "Pakistan's property marketplace — built, launched and operated by WordbitX.",
    metaTitle: "Properties Pak — Our Pakistan Real Estate Portal | WordbitX Products",
    metaDescription:
      "Properties Pak is WordbitX's own live property marketplace: city and society search, dealer profiles, new projects and listing management.",
    overview: [
      "Properties Pak is the one product on this page that is not a showcase build. It is a live, publicly trading property marketplace that WordbitX designed, built, launched and still operates. Buyers, sellers and estate agencies use it every day.",
      "We built it because a real estate portal is the hardest thing we are regularly asked to quote for, and the fastest way to prove we can deliver one was to run one ourselves. Everything a client asks for — listing intake, moderation, dealer accounts, map-led search, enquiry routing — exists on Properties Pak as working software rather than a wireframe.",
      "If you are evaluating us for a property portal, this is the page to open in another tab. Search a city, open a dealer, start a listing. There is nothing behind a sales call.",
    ],
    builtFor: [
      "Property marketplaces and classifieds",
      "Estate agencies moving from Facebook pages to a real platform",
      "Developers selling plots, files and new projects",
      "Housing society and phase-level listing portals",
    ],
    capabilities: [
      {
        title: "Multi-filter property search",
        body: "City, property type, budget band in PKR and bedroom count combine into one search, with an all-filters panel for everything else. Buy and rent are separate intents, not a checkbox.",
      },
      {
        title: "Nineteen property types",
        body: "House, upper and lower portion, farm house, penthouse, flat, room, residential and commercial plot, plot file, plot form, agricultural and industrial land, office, warehouse, building, shop, factory. Pakistani property is not three dropdown options.",
      },
      {
        title: "Dealer and agency profiles",
        body: "Every agency gets a verified profile page with its city, agent name and live listing count, and buyers can browse the dealer directory directly instead of going listing by listing.",
      },
      {
        title: "New projects section",
        body: "Developer launches are a separate content type from resale listings, because they are a different buying decision with different fields.",
      },
      {
        title: "Self-service listing intake",
        body: "A seller lists a property themselves through a guided flow; the listing enters a moderation queue before it goes public.",
      },
      {
        title: "City coverage out of the box",
        body: "Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Gujranwala and Peshawar, each with its own search surface.",
      },
    ],
    insideTheBuild: [
      "Next.js App Router with server rendering, so listing and dealer pages are crawlable HTML rather than a client-side search result.",
      "Image pipeline that serves modern formats at the size the device actually needs — property portals die on image weight.",
      "A media API for user-uploaded agency logos and listing photography, separate from the static design assets.",
      "Budget filtering in PKR crore and lac bands, because that is how the market talks, not in raw numbers.",
    ],
    relatedServiceSlugs: ["real-estate-portals", "custom-web-application-development", "web-development", "seo-services"],
    faqs: [
      {
        q: "Is Properties Pak a demo?",
        a: "No. It is a real, live product owned and operated by WordbitX at propertiespak.com. Everything else on this page is a showcase build; this one is a trading platform.",
      },
      {
        q: "Can you build something like this for us?",
        a: "Yes — that is the point of running it. We can build a national marketplace, a single-agency portal or a developer's project site, and the architecture scales down as readily as up.",
      },
      {
        q: "How long does a property portal take?",
        a: "A focused agency portal is measured in weeks; a multi-dealer marketplace with moderation, accounts and a listing economy is measured in months. We scope it against your first revenue milestone rather than the full feature list.",
      },
    ],
  },
  {
    slug: "motor",
    productName: "MOTOR Pakistan",
    tagline: "An automotive marketplace — used cars, new launches, bikes, EVs and rentals.",
    metaTitle: "MOTOR Pakistan — Automotive Marketplace Platform | WordbitX Products",
    metaDescription:
      "MOTOR Pakistan is a WordbitX-built car marketplace: used and new listings, EV catalogues, brand pages, rentals and sell-your-car — in English and Urdu.",
    overview: [
      "MOTOR Pakistan is a full automotive marketplace, not a car-dealer brochure. It carries used car listings, a new-car catalogue with 2026 prices and specifications, bikes, electric and hybrid vehicles, car rentals and two different ways to sell a vehicle.",
      "The catalogue side is the part most templates skip. MOTOR carries brand pages for more than twenty marques with their Pakistan entry year and electrified model count, a launch calendar, and model pages with powertrain, body style and starting price in PKR.",
      "It runs bilingually in English and Urdu, which is a structural decision rather than a translation plugin — the whole route tree is language-aware.",
    ],
    builtFor: [
      "Vehicle marketplaces and classifieds",
      "Multi-brand dealerships and showroom groups",
      "Rental and fleet businesses",
      "Any catalogue business with brands, models and variants",
    ],
    capabilities: [
      {
        title: "Used, new, bike and EV verticals",
        body: "Four separate inventory types with their own search, filters and detail layouts, not one listing table with a category column.",
      },
      {
        title: "Brand and model catalogue",
        body: "Brand pages carry the year the marque entered Pakistan and how many electrified models it sells; model pages carry body style, powertrain, EV range and starting price.",
      },
      {
        title: "Two selling paths",
        body: "Sell it yourself with a two-minute ad, or hand it to the team for inspection, listing and a featured boost. Two different funnels, two different forms.",
      },
      {
        title: "PKR price bands",
        body: "Search bands run from under 10 lacs to above 1 crore — the way a Pakistani buyer sets a budget.",
      },
      {
        title: "Launch calendar",
        body: "A dated calendar of 2025–26 Pakistan launches, which is the content that earns repeat visits between purchases.",
      },
      {
        title: "English and Urdu",
        body: "A language switch that changes the interface, not just a translated homepage.",
      },
    ],
    insideTheBuild: [
      "Eleven cities wired into search as first-class filters, so a city query returns a real page rather than a query string.",
      "Brand logos served as SVG, so a twenty-one-brand grid costs almost nothing to load.",
      "Listing detail pages with a stable reference code, which is what a buyer quotes on WhatsApp.",
      "WhatsApp contact built into the header, because that is where Pakistani vehicle enquiries actually happen.",
    ],
    relatedServiceSlugs: ["web-development", "custom-web-application-development", "mobile-app-development", "seo-services"],
    faqs: [
      {
        q: "Is the inventory on MOTOR real?",
        a: "The platform is real and fully working; the vehicles on it are showcase data. The point of the build is the software — search, catalogue, listing intake and the sell flow — not the stock.",
      },
      {
        q: "Can this handle a dealership with several showrooms?",
        a: "Yes. The data model already separates brands, models, variants and individual listings, which is exactly what a multi-showroom group needs.",
      },
      {
        q: "Do you build the mobile app too?",
        a: "Yes. A marketplace of this shape normally wants a buyer app and a seller or inspection app, and we build both alongside the web platform.",
      },
    ],
  },
  {
    slug: "healthcare",
    productName: "Medicare Plus",
    tagline: "A clinic platform — consultants, OPD shifts, transparent PKR fees and online booking.",
    metaTitle: "Medicare Plus — Clinic & Appointment Platform | WordbitX Products",
    metaDescription:
      "Medicare Plus is a WordbitX-built clinic platform: consultant panels, specialty filters, PKR pricing and online or WhatsApp appointment booking.",
    overview: [
      "Medicare Plus is a private-clinic platform built around the one thing Pakistani patients complain about most: not knowing what a visit will cost or when it will actually happen.",
      "Every service on the site carries its duration, its preparation instructions and its fee in rupees before you book. Appointments run against real OPD shifts, and the booking path offers both a web form and WhatsApp, because a large share of patients will only ever use the second one.",
      "Underneath the booking layer it is also a content platform — a library of clinical articles attributed to named consultants, which is how a medical site earns search traffic without making claims it cannot support.",
    ],
    builtFor: [
      "Private clinics and polyclinics",
      "Specialist consultants running their own OPD",
      "Dental, dermatology and diagnostic centres",
      "Hospital outpatient departments",
    ],
    capabilities: [
      {
        title: "Services with published PKR fees",
        body: "Consultation, diagnostics and procedures each list duration, preparation and price. No 'call for pricing'.",
      },
      {
        title: "Specialty filtering",
        body: "General medicine, dental, dermatology and cardiology filter the service list in place, across twenty-six clinical specialties.",
      },
      {
        title: "Shift-aware appointments",
        body: "Morning, evening and executive clinics are separate shifts with separate availability, which is how a real OPD runs.",
      },
      {
        title: "WhatsApp booking",
        body: "A pre-filled WhatsApp message as a first-class booking path, sitting next to the web form rather than hidden in the footer.",
      },
      {
        title: "Consultant panel",
        body: "Doctors are a content type with their specialty and schedule, and treatments link to the consultant who performs them.",
      },
      {
        title: "Clinical article library",
        body: "Long-form health guides with a named author, a specialty and a reading time — the search engine for a clinic is a patient asking a symptom question.",
      },
    ],
    insideTheBuild: [
      "Service, consultant and article are three separate content models that cross-reference each other, so one edit updates every surface.",
      "Booking deep links carry the service in the URL, so a 'Book this' button lands on a pre-selected form.",
      "Bilingual copy in the feature section — plain Urdu explanations next to English headings, written for the patient rather than the brochure.",
      "Appointment confirmation produces a reference slip rather than an unacknowledged form submission.",
    ],
    relatedServiceSlugs: ["hospital-medical-portals", "custom-software-development", "web-development", "local-seo"],
    faqs: [
      {
        q: "Is Medicare Plus a real clinic?",
        a: "No. It is a showcase platform built by WordbitX to demonstrate how a clinic site should work. The doctors, patients and reviews on it are illustrative, not real people or real testimonials.",
      },
      {
        q: "Can it connect to a hospital management system?",
        a: "Yes. The booking layer is designed to hand off to an HMS or EMR rather than own the medical record itself, which is normally the right division of responsibility.",
      },
      {
        q: "Does it handle online payment of consultation fees?",
        a: "The published-fee model is built in; payment collection is an add-on we wire to the gateway or wallet the clinic already uses.",
      },
    ],
  },
  {
    slug: "education",
    productName: "WordbitX Education Platform",
    tagline: "A school, academy and college ERP — thirty-seven modules, five role portals, fees in PKR.",
    metaTitle: "Education Management Platform (School ERP) | WordbitX Products",
    metaDescription:
      "Education ERP for Pakistani schools and colleges: admissions, attendance, exams, fee challans with JazzCash and Easypaisa, and five role portals.",
    overview: [
      "This is the largest product on the list. It is a complete education management platform — thirty-seven modules across academics, finance, communication, administration and enterprise — with an open admin dashboard you can click through without signing up.",
      "It was built specifically for how Pakistani institutions operate. Fees are challans in rupees paid through JazzCash, Easypaisa, bank transfer or cash at the counter. Madaris get Nazra, Hifz and Qirat tracking next to general subjects. Multi-campus groups get isolated branch data under one head-office login.",
      "Five roles each get their own workspace: admin, principal, teacher, parent and student. A parent sees fees, attendance, results, homework and notices. A teacher sees attendance, marks and timetable. Nobody sees a dashboard built for somebody else's job.",
    ],
    builtFor: [
      "K-12 private schools",
      "Academies, coaching centres and test-prep institutes",
      "Degree colleges and universities",
      "Madaris",
      "Multi-campus education groups",
    ],
    capabilities: [
      {
        title: "Thirty-seven modules",
        body: "Admissions, classes and sections, subjects, timetable, attendance, exams, results and report cards, homework, assignments and online classes — enable what you need now, switch on more later.",
      },
      {
        title: "Five role portals",
        body: "Admin, principal, teacher, parent and student, each a distinct workspace rather than one dashboard with hidden buttons.",
      },
      {
        title: "Fee challans in PKR",
        body: "Digital challans with line items, transport fees and scholarship deductions, automated due-date reminders, and WhatsApp or SMS alerts to parents.",
      },
      {
        title: "JazzCash, Easypaisa, bank and counter",
        body: "The four payment paths Pakistani parents actually use, including challan-based cash payment, which most imported school software ignores.",
      },
      {
        title: "Multi-campus control",
        body: "Each branch's data stays isolated while the group office sees students, staff, fees, attendance, exams and analytics across every campus.",
      },
      {
        title: "Parent, teacher, student and admin apps",
        body: "The same data on the phone — attendance, fees, results, homework, notifications, timetable and online classes.",
      },
    ],
    insideTheBuild: [
      "An open demo dashboard with working data, so a principal can evaluate the product before anyone books a call.",
      "Analytics built on the metrics an institution head actually reads: student growth, fee collection rate, attendance trend and campus comparison.",
      "Solution pages per institution type — schools, academies, colleges, universities, madaris, groups — because the same ERP is bought for six different reasons.",
      "Role-based access designed in from the start; retrofitting permissions onto a finished ERP is where these projects usually fail.",
    ],
    relatedServiceSlugs: ["education-portals", "custom-software-development", "crm-erp-solutions", "mobile-app-development"],
    faqs: [
      {
        q: "Can we see it before committing?",
        a: "Yes — the admin dashboard is open on the live site with demo data in it. Click through the portals before you speak to us.",
      },
      {
        q: "Does it work for a single 40-student tuition centre?",
        a: "Yes. You enable the modules you need; a coaching centre typically runs batches, fees and results and ignores the rest.",
      },
      {
        q: "Can it be white-labelled for our institution?",
        a: "Yes. The platform is ours, so branding, domain, module set and workflow are all configurable for the institution rather than fixed by a vendor.",
      },
      {
        q: "What about data from our existing registers?",
        a: "Migration from spreadsheets or an existing system is part of onboarding. It is usually the single biggest piece of work, and we scope it explicitly rather than assuming it away.",
      },
    ],
  },
  {
    slug: "ecommerce",
    productName: "Veranne",
    tagline: "A multi-currency premium storefront — nine departments, eight currencies, full checkout.",
    metaTitle: "Veranne — Multi-Currency E-Commerce Storefront | WordbitX Products",
    metaDescription:
      "Veranne is a WordbitX-built e-commerce storefront: nine departments, eight currencies, reviews, gifting, order tracking and a help centre.",
    overview: [
      "Veranne is a premium fashion, accessories and home store built to show what a serious storefront looks like when it is not a theme with the colours changed.",
      "It runs nine departments — womenswear, menswear, footwear, timepieces, leather goods, cashmere, home and living, fragrance and gifting — with curated collections layered on top of the category tree, which is how editorial retail actually merchandises.",
      "It prices in eight currencies: USD, PKR, GBP, EUR, AED, CAD, INR and AUD. For a Pakistani brand selling to the Gulf, the UK and North America, that is not a nice-to-have, it is the difference between a visitor and an order.",
    ],
    builtFor: [
      "Fashion, lifestyle and home brands",
      "Pakistani brands selling into the Gulf, UK and North America",
      "Retailers outgrowing a hosted theme",
      "Any catalogue with collections, variants and gifting",
    ],
    capabilities: [
      {
        title: "Nine departments, layered collections",
        body: "A category tree for browsing and an editorial collection layer — signature, the wardrobe, the gift edit, best sellers — for merchandising.",
      },
      {
        title: "Eight-currency pricing",
        body: "USD, PKR, GBP, EUR, AED, CAD, INR and AUD, switched from the header rather than guessed from the IP address.",
      },
      {
        title: "Product pages with real depth",
        body: "Multiple photographs, construction detail, review scores and counts, stock state and discount badges — the information that removes the reason not to buy.",
      },
      {
        title: "Gift experience",
        body: "A dedicated gifting flow with one-size selections, a written card and prices kept off the packing note.",
      },
      {
        title: "Order tracking and help centre",
        body: "A tracking page and an FAQ-backed help centre, which is where most of a store's support load goes.",
      },
      {
        title: "Accounts and a journal",
        body: "Customer accounts plus a long-form journal, so the store has a reason to appear in search between campaigns.",
      },
    ],
    insideTheBuild: [
      "Server-rendered product and collection pages, so every item is indexable without a client-side rendering workaround.",
      "A cart that adds from the listing grid as well as the product page, which measurably shortens the path to checkout.",
      "Image-heavy design held to a sensible weight by responsive sizing and modern formats.",
      "The same patterns transfer to a Shopify or WooCommerce build when a client wants the platform rather than the custom stack.",
    ],
    relatedServiceSlugs: ["ecommerce-development", "ecommerce-shopify", "woocommerce-development", "ui-ux-design"],
    faqs: [
      {
        q: "Is Veranne a real shop?",
        a: "No. It is a showcase storefront built by WordbitX. The products, prices and reviews on it are illustrative; the software is real and fully navigable.",
      },
      {
        q: "Would you build this custom or on Shopify?",
        a: "It depends on your catalogue and your team. Shopify wins on operations and payments; a custom stack wins when the merchandising or the checkout is unusual. We quote both and say which one we would pick.",
      },
      {
        q: "Does multi-currency mean multi-payment?",
        a: "They are separate problems. Displaying eight currencies is straightforward; settling in them depends on your payment provider and company structure, and we plan it with you rather than after launch.",
      },
    ],
  },
  {
    slug: "luxury-restaurant",
    productName: "Maison Noor",
    tagline: "A restaurant platform — forty-dish menu, online ordering and table reservations.",
    metaTitle: "Maison Noor — Restaurant Ordering & Reservation Platform | WordbitX Products",
    metaDescription:
      "Maison Noor is a WordbitX-built restaurant platform: forty-dish menu, allergen tags, online ordering, table reservations and a photo gallery.",
    overview: [
      "Maison Noor is a fine-dining platform for a Lahore restaurant concept, and it carries the three things a restaurant site is actually judged on: can I see the menu, can I order, can I book a table.",
      "The menu is forty dishes across starters, mains, steak and grill, seafood and desserts, each with a PKR price, its ingredients, a heat indicator and vegetarian, vegan and gluten-free tagging. Allergen information is a first-class field, not a footnote.",
      "The photography-led layout is doing a job rather than decorating — a filtered gallery across BBQ, desi, continental, desserts, drinks and the room itself, because the dining room is half of what the customer is buying.",
    ],
    builtFor: [
      "Fine-dining and casual-dining restaurants",
      "Cafés and dessert houses",
      "Cloud kitchens taking direct orders",
      "Hotel food and beverage operations",
    ],
    capabilities: [
      {
        title: "Forty-dish structured menu",
        body: "Five categories, per-dish ingredients, PKR pricing, heat level and dietary tags — a data model, not a PDF.",
      },
      {
        title: "Online ordering",
        body: "Order directly from the dish card or the full menu, keeping the margin that an aggregator takes.",
      },
      {
        title: "Table reservations",
        body: "A separate reservation path from ordering, because they are different intents at different times of day.",
      },
      {
        title: "Signature-plate storytelling",
        body: "A rotating feature for the three dishes the kitchen wants to sell, with its own photography and copy.",
      },
      {
        title: "Filtered gallery",
        body: "BBQ, desi, continental, desserts, drinks and interior, each filterable, each image openable at full size.",
      },
      {
        title: "Chef and story pages",
        body: "The provenance content that justifies a 3,950-rupee plate, which price alone cannot do.",
      },
    ],
    insideTheBuild: [
      "Dishes are structured records, so the same item feeds the menu, the recommendations rail, the gallery and the order flow from one edit.",
      "Dietary and allergen flags are fields on the dish rather than text in the description — searchable and filterable.",
      "Image delivery tuned hard, because a restaurant site is almost entirely photography and most of them are unusably slow on mobile data.",
      "Order and reserve are both reachable from the first screen without scrolling.",
    ],
    relatedServiceSlugs: ["web-development", "ui-ux-design", "ecommerce-development", "local-seo"],
    faqs: [
      {
        q: "Is Maison Noor a real restaurant?",
        a: "No. It is a showcase build by WordbitX demonstrating a restaurant ordering and reservation platform. The dishes, prices and ratings are illustrative.",
      },
      {
        q: "Can orders go to our kitchen printer or POS?",
        a: "Yes. Orders are designed to hand off — to a POS, a kitchen display or WhatsApp — rather than sit in an inbox nobody is watching during service.",
      },
      {
        q: "Why take direct orders instead of using an aggregator?",
        a: "Commission. A direct order keeps the full ticket and gives you the customer's contact details; the aggregator keeps both. Most restaurants should run both channels, not one.",
      },
    ],
  },
  {
    slug: "salon-beauty",
    productName: "ÉLAN Beauty Studio",
    tagline: "A salon booking platform — service menu, specialist assignment and slot reservations.",
    metaTitle: "ÉLAN Beauty Studio — Salon Booking Platform | WordbitX Products",
    metaDescription:
      "ÉLAN Beauty Studio is a WordbitX-built salon platform: priced service menu, specialist assignment, duration-aware slots and WhatsApp booking.",
    overview: [
      "ÉLAN is a salon and beauty studio platform built around the appointment, which is the only transaction a salon site has.",
      "Every service carries a starting price in rupees and a realistic duration — a haircut is an hour, keratin is three, bridal is four — and the booking engine uses that duration to work out what can actually fit in the day. A booking system that treats every service as a thirty-minute slot is the reason salons go back to a paper diary.",
      "Services are assigned to a named specialist, and the next available slot is surfaced on the first screen with the stylist's name attached, so the customer books a person rather than a time.",
    ],
    builtFor: [
      "Hair and beauty salons",
      "Bridal studios and makeup artists",
      "Spas and wellness centres",
      "Any appointment business where services have different durations",
    ],
    capabilities: [
      {
        title: "Priced, timed service menu",
        body: "Hair, colour, keratin, bridal, engagement and party makeup, facials, nails, manicure and pedicure, waxing, threading, mehndi and spa — each with a from-price in PKR and a duration.",
      },
      {
        title: "Duration-aware booking",
        body: "Slot availability is calculated from how long the service really takes, so a four-hour bridal does not get double-booked against a blow-dry.",
      },
      {
        title: "Specialist assignment",
        body: "Services map to the stylist or therapist who performs them, and the next-available card names her.",
      },
      {
        title: "Deep-linked booking",
        body: "Every 'Book now' carries its service into the booking form — one tap from browsing to a pre-filled appointment.",
      },
      {
        title: "WhatsApp as a booking channel",
        body: "A pre-written WhatsApp message beside the booking button, which is how most salon bookings in Pakistan still start.",
      },
      {
        title: "Service detail pages",
        body: "Each treatment has its own page, which is what ranks for 'bridal makeup in Lahore' — a single services page never will.",
      },
    ],
    insideTheBuild: [
      "One service record drives the menu card, the detail page, the booking deep link and the availability calculation.",
      "Opening-hours state rendered live in the header, so the site says 'open today, closes 8 PM' rather than listing a table.",
      "Per-service pages with their own metadata and imagery — the local-SEO surface area that a one-page salon site gives away.",
      "Mobile-first layout, because effectively all salon traffic is a phone.",
    ],
    relatedServiceSlugs: ["web-development", "local-seo", "ui-ux-design", "digital-marketing"],
    faqs: [
      {
        q: "Is ÉLAN a real salon?",
        a: "No. It is a showcase platform built by WordbitX. The studio, stylists, ratings and client numbers shown on it are illustrative.",
      },
      {
        q: "Can staff manage their own calendars?",
        a: "Yes. Specialist-level availability is the natural extension of specialist assignment, and it is how we build these for a salon with more than two chairs.",
      },
      {
        q: "Does it send appointment reminders?",
        a: "Reminders over WhatsApp or SMS are the single highest-return addition to a salon booking system, and we wire them to whichever provider you already pay for.",
      },
    ],
  },
];

const detailBySlug = new Map(productDetails.map((item) => [item.slug, item]));
const demoById = new Map(demoWebsites.map((item) => [item.id, item]));

export type Product = ProductDetail & { showcase: DemoWebsite };

/** Products in the order they should be listed: the live one first. */
export const products: Product[] = productDetails
  .map((detail) => {
    const showcase = demoById.get(detail.slug);
    return showcase ? { ...detail, showcase } : null;
  })
  .filter((item): item is Product => item !== null);

export function getProduct(slug: string): Product | undefined {
  const detail = detailBySlug.get(slug);
  const showcase = detail ? demoById.get(detail.slug) : undefined;
  return detail && showcase ? { ...detail, showcase } : undefined;
}

export const productsIntro =
  "We do not only build software for clients — we build and run our own. Every product below is live and openable right now: one is a real trading platform, the rest are full builds we use to prove a capability instead of describing it.";
