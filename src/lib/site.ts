export const siteConfig = {
  name: "WordbitX",
  /** Registered company name — invoices, contracts and schema. */
  legalName: "Wordbit X TECHNOLOGY SMC – PVT. LTD.",
  /** Public footer / marketing legal line. */
  legalDisplayName: "WordbitX SMC – PVT. LTD.",
  domain: "wordbitxtech.com",
  /** Canonical production URL. Vercel currently redirects apex → www, so all canonicals and sitemaps use www. */
  url: "https://www.wordbitxtech.com",
  tagline: "Software Development Company for Businesses Worldwide",
  description:
    "WordbitX is a Pakistan-based software development company serving businesses in the USA, UK, UAE, Canada, Australia and worldwide. Custom websites, mobile apps, Shopify, POS, CRM/ERP, SEO and digital marketing — with practical AI where it helps. You own the code.",
  /** Homepage / layout meta description — keep 120–160 characters for SERP tools. */
  seoDescription:
    "Pakistan software company serving USA, UK, UAE and worldwide. Websites, apps, Shopify, POS, SEO and digital marketing. You own the code.",
  /** Public contact address shown across the website. */
  email: "info@wordbitxtech.com",
  /** Mailbox that actually receives enquiry notifications (overridable with MAIL_TO). */
  inboxEmail: "wordbitx@gmail.com",
  phoneDisplay: "+92 325 1888841",
  phoneRaw: "+923251888841",
  whatsappNumber: "923251888841",
  /** USA / international line — voice and WhatsApp Business. */
  usPhoneDisplay: "+1 (929) 619-7699",
  usPhoneRaw: "+19296197699",
  usWhatsappNumber: "19296197699",
  addressLocality: "Lahore",
  addressRegion: "Punjab",
  addressCountry: "PK",
  streetAddress: "DHA Phase 2",
  addressDisplay: "DHA Phase 2, Lahore, Pakistan",
  foundingYear: 2021,
  /** Shared lastmod for static marketing pages. Update when those pages ship a real content change. */
  contentUpdated: "2026-10-03",
  ogImage: "/opengraph-image",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=WordbitX+Technology+Lahore",
  googleWriteReviewUrl: "https://www.google.com/search?q=WordbitX+Technology+Lahore+write+a+review",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=WordbitX+Technology+Lahore+Pakistan&z=14&output=embed",
  /**
   * Google AdSense publisher id (pub-16digits). Public in ads.txt anyway.
   * Prefer Vercel env NEXT_PUBLIC_ADSENSE_CLIENT / ADSENSE_PUBLISHER_ID;
   * this is the committed fallback once the real id is pasted.
   */
  adsensePublisherId: "pub-6979050813391613",
  /** Google Analytics 4 measurement ID. Public in page source once the tag loads. */
  gaMeasurementId: "G-TCWMWER9PF",
  /** Facebook Page ID from Meta Business Suite. Also used as the Pixel until a separate Events Manager pixel is provided. */
  facebookPageId: "1283273721536116",
  facebookPixelId: "1283273721536116",
  twitterHandle: "@wordbitx",
  /**
   * DMCA.com protection record. The token verifies domain ownership via a
   * meta tag; the id drives the footer badge and its status page link.
   * Not a ranking factor — it is a takedown/credibility signal only.
   */
  dmcaSiteVerification: "Zjl1QkJTL0Fjbnp1eFRrMkZXaFh4dksyNmFMTVovMlF1TG5GWVJvdzBuTT01",
  dmcaProtectionId: "333dbd60-cb93-41a3-a11e-a96732c17360",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/wordbitx", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com/wordbitx", icon: "facebook" },
    { label: "X", href: "https://x.com/wordbitx", icon: "x" },
    { label: "Instagram", href: "https://www.instagram.com/wordbitx", icon: "instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@wordbitx", icon: "tiktok" },
    { label: "YouTube", href: "https://www.youtube.com/@wordbitx", icon: "youtube" },
    { label: "GitHub", href: "https://github.com/wordbitx", icon: "github" },
  ],
  /**
   * Corporate registration, shown on the About page and in the
   * Organization schema. Numbers (SECP file number, NTN) are added here
   * and published once confirmed against the certificates.
   */
  registration: {
    legalForm: "Private limited company (Pvt. Ltd.)",
    secp: "Registered with the Securities and Exchange Commission of Pakistan (SECP)",
    fbr: "Registered with the Federal Board of Revenue (FBR)",
    founded: "Founded 2021, Lahore, Pakistan",
  },
  /**
   * Third-party directory profiles we can verify.
   *
   * Only facts that are actually published on the profile belong here. Clutch
   * currently shows no reviews for us, so there is deliberately no rating or
   * star count — inventing one would be fabricated proof.
   */
  directories: [
    {
      label: "Clutch",
      href: "https://clutch.co/profile/wordbitx",
      blurb: "Verified B2B provider profile — company size, rates and founding year, confirmed by Clutch.",
      facts: ["Founded 2021", "10 - 49 employees", "Min project size $1,000+", "Under $25 / hr"],
    },
  ],
} as const;

export function whatsappLink(
  message = "Hello WordbitX, I would like to discuss a project.",
  number: string = siteConfig.whatsappNumber,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function usWhatsappLink(message = "Hello WordbitX, I would like to discuss a project.") {
  return whatsappLink(message, siteConfig.usWhatsappNumber);
}

/** Prefills the contact form service dropdown. */
export function contactHref(service?: string) {
  if (!service) return "/contact";
  return `/contact?service=${encodeURIComponent(service)}`;
}

export function absoluteUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

export const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
] as const;
