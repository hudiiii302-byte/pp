import { siteConfig } from "@/lib/site";

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type LegalDoc = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export const legalDocs: Record<string, LegalDoc> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy | WordBitX",
    metaDescription:
      "How WordBitX collects, uses, stores and protects personal information submitted through wordbitxtech.com, including enquiry forms, analytics and third-party services.",
    intro:
      "This policy explains what information WordBitX collects when you use our website or contact us, why we collect it, and the choices you have.",
    updated: "1 March 2026",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect only the information needed to respond to enquiries and operate this website.",
        ],
        bullets: [
          "Details you submit voluntarily through the contact form: name, email, phone or WhatsApp number, company name, selected service, budget range and project description.",
          "Email addresses submitted to our insights newsletter.",
          "Standard technical data such as IP address, browser type, referring page and pages visited, collected through analytics.",
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: ["Your information is used for a limited set of purposes."],
        bullets: [
          "Responding to your enquiry and preparing a proposal.",
          "Delivering services under an agreed contract.",
          "Sending relevant updates if you opted in, with an unsubscribe option in every message.",
          "Improving website content, performance and usability through aggregated analytics.",
        ],
      },
      {
        heading: "Legal basis and retention",
        paragraphs: [
          "We process enquiry data on the basis of your consent and our legitimate interest in responding to business requests. Enquiry records are retained while there is an active or prospective business relationship, and removed on request.",
        ],
      },
      {
        heading: "Sharing and third parties",
        paragraphs: [
          "We do not sell personal information. Data may be processed by service providers that support our operations — hosting, analytics, email delivery and communication tools — under agreements that require appropriate safeguards.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "We use a small number of cookies and analytics tools to understand traffic and improve the site. Depending on configuration this can include Google Analytics 4, Google Tag Manager, Google AdSense and the Meta Pixel. Details are in our Cookie Policy. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "The site is served over HTTPS and enquiry data is stored in access-controlled systems. No transmission over the internet can be guaranteed to be completely secure, but we apply reasonable technical and organisational measures to protect your information.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          `You may request access to, correction of, or deletion of the personal information we hold about you, and you may withdraw consent for marketing at any time. Contact ${siteConfig.email} and we will respond promptly.`,
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Questions about this policy can be sent to ${siteConfig.email} or by phone and WhatsApp on ${siteConfig.phoneDisplay}.`,
        ],
      },
    ],
  },
  "terms-conditions": {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    metaTitle: "Terms & Conditions | WordBitX",
    metaDescription:
      "The terms governing use of the WordBitX website and the general conditions that apply to proposals, project engagements, intellectual property and liability.",
    intro:
      "These terms govern your use of wordbitxtech.com and set out the general conditions that apply to our proposals and engagements. Specific projects are always governed by a signed proposal or contract.",
    updated: "1 March 2026",
    sections: [
      {
        heading: "Use of this website",
        paragraphs: [
          "You may browse and use this website for lawful purposes. You agree not to attempt unauthorised access, disrupt service availability, or use automated tools in a way that degrades performance for other visitors.",
        ],
      },
      {
        heading: "Information accuracy",
        paragraphs: [
          "Content on this website is provided for general information. Service descriptions, timelines and indicative figures are illustrative and do not constitute a binding offer. Commercial terms apply only once set out in a signed proposal.",
        ],
      },
      {
        heading: "Proposals and engagements",
        paragraphs: [
          "Every engagement is defined in a written scope covering deliverables, milestones, timelines, assumptions and payment terms. Changes to scope are handled through a documented change request that states any impact on cost and schedule.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "On full payment, ownership of project-specific source code, designs and documentation transfers to the client, unless a different arrangement is stated in the contract. WordBitX retains ownership of pre-existing tools, libraries and internal frameworks, licensed to the client for use within the delivered solution.",
          "Website content, branding and materials published on wordbitxtech.com remain the property of WordBitX.",
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          "Projects may rely on third-party platforms such as hosting providers, payment gateways, app stores and analytics tools. Their availability, pricing and policies are outside our control and are governed by their own terms.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the extent permitted by law, WordBitX is not liable for indirect or consequential losses arising from use of this website. Liability under a project contract is limited as set out in that contract.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of the Islamic Republic of Pakistan, unless a project contract specifies a different governing law agreed by both parties.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions about these terms can be sent to ${siteConfig.email}.`],
      },
    ],
  },
  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy",
    metaTitle: "Cookie Policy | WordBitX",
    metaDescription:
      "Details of the cookies and similar technologies used on wordbitxtech.com, what they do, and how you can control them in your browser.",
    intro:
      "This policy explains how cookies and similar technologies are used on wordbitxtech.com and how you can control them.",
    updated: "1 March 2026",
    sections: [
      {
        heading: "What cookies are",
        paragraphs: [
          "Cookies are small text files stored by your browser. They allow a website to remember preferences and to understand how visitors use the site.",
        ],
      },
      {
        heading: "Cookies we use",
        paragraphs: ["We keep cookie usage minimal and purposeful."],
        bullets: [
          "Essential: required for security, routing and core site functionality.",
          "Analytics: aggregated measurement of page views, traffic sources and site performance.",
          "Marketing: used only when advertising campaigns are running, to measure campaign effectiveness.",
        ],
      },
      {
        heading: "Third-party cookies",
        paragraphs: [
          "When enabled, Google Analytics 4, Google Tag Manager, Google AdSense and the Meta (Facebook) Pixel may set their own cookies to measure traffic, verify the site, or measure ads. Their use of data is governed by their privacy policies. These tags load only when the corresponding account IDs are configured on the live site.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can block or delete cookies in your browser settings at any time. Blocking essential cookies may affect how parts of the website function. Most browsers also offer a private browsing mode that limits cookie storage.",
        ],
      },
      {
        heading: "Updates to this policy",
        paragraphs: [
          `We review this policy periodically and update it when our tooling changes. Questions can be sent to ${siteConfig.email}.`,
        ],
      },
    ],
  },
  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    metaTitle: "Disclaimer | WordbitX",
    metaDescription:
      "Legal disclaimer for wordbitxtech.com: no ranking or AdSense guarantees, no invented affiliations, and the limits of website information.",
    intro:
      "This disclaimer sets out the limits of the information published on wordbitxtech.com. It should be read with our Terms and Privacy Policy.",
    updated: "18 August 2026",
    sections: [
      {
        heading: "No guarantees of ranking or advertising approval",
        paragraphs: [
          "Nothing on this website is a promise of Google search rankings, traffic volume, revenue or Google AdSense approval. Search and advertising programmes are controlled by third parties. We describe the work we do; we do not control those programmes' outcomes.",
        ],
      },
      {
        heading: "No invented affiliations",
        paragraphs: [
          "References to platforms (Shopify, Google Play, Apple, AWS and others) describe technologies we implement. They are not endorsements by those companies unless a specific partnership is stated in writing.",
          "Housing society names used on property-related pages describe inventory structures our software can model. They do not imply a commercial relationship, endorsement or retained client.",
        ],
      },
      {
        heading: "Portfolio and case studies",
        paragraphs: [
          "Project profiles describe scope, architecture and operational change. Client names, confidential screens and commercial figures are shared privately on request. We do not invent logos, awards, testimonials or results.",
        ],
      },
      {
        heading: "Professional advice",
        paragraphs: [
          "Content is general information for business readers. It is not legal, tax, medical, financial or investment advice. Regulated products require the client's own licences.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions about this disclaimer can be sent to ${siteConfig.email}.`],
      },
    ],
  },
  "editorial-policy": {
    slug: "editorial-policy",
    title: "Editorial & Content Standards",
    metaTitle: "Editorial & Content Standards | WordbitX",
    metaDescription:
      "How WordbitX produces original, human-reviewed content: our authorship, review process, pricing disclosures, update policy and corrections for articles, service pages and market data.",
    intro:
      "WordbitX publishes software, technology and business content to genuinely help buyers make better decisions. This page explains how that content is researched, written, reviewed, priced and updated.",
    updated: "19 August 2026",
    sections: [
      {
        heading: "What we publish",
        paragraphs: [
          "We publish content about the work we actually do: custom software development, website and mobile app development, e-commerce and Shopify, POS and inventory systems, CRM/ERP, AI integration, SEO and digital marketing, plus industry-specific portals for real estate, healthcare, education, retail and logistics.",
          "Our service pages explain real delivery processes, technology stacks and engagement models. Our articles answer questions our clients genuinely ask before starting projects — costs, platform choices, implementation steps and mistakes to avoid.",
        ],
      },
      {
        heading: "Originality standard",
        paragraphs: [
          "We do not republish, spin, scrape or machine-translate content from other websites. Every page is drafted around our own delivery experience, internal workflows and frequently asked client questions.",
          "Where we reference external facts, standards or platform documentation, we link to the original source instead of copying it.",
        ],
      },
      {
        heading: "Human authorship and review",
        paragraphs: [
          "Content is prepared by the WordBitX editorial team and reviewed by our engineers before publication — including technical accuracy, code references and platform rules. Articles carry an author area and publication dates, and the founder's name and role are published on our About page.",
          "We may use AI tools to assist with research and drafting, but every published page is reviewed, edited and approved by a human before going live. We do not publish unedited machine output.",
        ],
      },
      {
        heading: "Pricing and market data disclosure",
        paragraphs: [
          "Our housing society pages show indicative market price ranges because they describe property portal software requirements. These ranges are explicitly labelled as indicative, are not official developer price lists, and must always be verified with the developer's office or an authorised dealer before any transaction.",
          "We do not represent that we sell property, and we do not invent sold-plot data, client names or results.",
        ],
      },
      {
        heading: "Accuracy, updates and corrections",
        paragraphs: [
          "Technology details, prices and platform rules change. We review important pages periodically and show publication or update dates where relevant. When a factual error is reported, we correct it promptly.",
          `To report an error or request a correction, email ${siteConfig.email} with the page URL and the correction required.`,
        ],
      },
      {
        heading: "Advertising and sponsorship",
        paragraphs: [
          "Our editorial content is written independently. If we ever publish sponsored content or advertising, it will be clearly labelled and kept separate from editorial guidance. We do not use deceptive ad placements, forced redirects, fake download buttons or intrusive popups.",
        ],
      },
      {
        heading: "Who owns this standard",
        paragraphs: [
          `Editorial responsibility sits with the WordBitX leadership team. Questions about this policy can be sent to ${siteConfig.email} or via WhatsApp on ${siteConfig.phoneDisplay}.`,
        ],
      },
    ],
  },
};

export const legalSlugs = Object.keys(legalDocs);
