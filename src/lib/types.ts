export type IconName =
  | "web"
  | "mobile"
  | "software"
  | "ai"
  | "ecommerce"
  | "pos"
  | "design"
  | "marketing"
  | "seo"
  | "aso"
  | "wordpress"
  | "crm"
  | "game"
  | "devops"
  | "inventory";

export type Faq = { question: string; answer: string };

export type TitledPoint = { title: string; text: string };

export type ProcessStep = { step: string; title: string; text: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: IconName;
  h1: string;
  tagline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  overview: string[];
  whoNeeds: string[];
  problems: TitledPoint[];
  benefits: TitledPoint[];
  offerings: TitledPoint[];
  deliverables: string[];
  process: ProcessStep[];
  techStack: string[];
  whyUs: TitledPoint[];
  faqs: Faq[];
  related: string[];
  relatedPosts: string[];
  projectCategory: ProjectCategory;
  featured?: boolean;
};

export type ProjectCategory =
  | "Websites"
  | "Mobile Apps"
  | "Software"
  | "E-Commerce"
  | "AI"
  | "Design";

export type Project = {
  slug: string;
  title: string;
  type: string;
  category: ProjectCategory;
  industry: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string; caption: string }[];
  overview: string[];
  challenge: string[];
  solution: string[];
  features: string[];
  technologies: string[];
  outcomes: string[];
  relatedServices: string[];
  year: string;
  engagement: string;
  /** Public disclosure label; use for confidential client work. */
  clientLabel?: string;
  /** Explains what can be publicly verified without inventing results. */
  publicStatus?: string;
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  h1: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  author: {
    name: string;
    role: string;
    /** Shown in the "About the author" card instead of the generic editorial blurb. */
    bio?: string;
    /** On-site profile. Makes the byline a link. */
    url?: string;
    /** External profile (LinkedIn). Emitted as schema.org sameAs so the author
     *  resolves to a real entity rather than an anonymous string. */
    sameAs?: string;
    /** Real photograph only. A monogram is more honest than a synthetic face. */
    photo?: string;
  };
  image: string;
  imageAlt: string;
  featured?: boolean;
  blocks: BlogBlock[];
  relatedServices: string[];
  relatedPosts: string[];
};
