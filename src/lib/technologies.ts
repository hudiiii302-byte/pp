export type TechItem = {
  name: string;
  /** simple-icons export key, e.g. siReact */
  icon?: string;
  /** used when no brand icon is available */
  fallback?: string;
  color?: string;
};

export type TechCategory = {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
};

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Fast, accessible, SEO-ready interfaces built with modern JavaScript frameworks.",
    items: [
      { name: "HTML5", icon: "siHtml5" },
      { name: "CSS3", icon: "siCss" },
      { name: "JavaScript", icon: "siJavascript" },
      { name: "TypeScript", icon: "siTypescript" },
      { name: "React", icon: "siReact" },
      { name: "Next.js", icon: "siNextdotjs" },
      { name: "Vue.js", icon: "siVuedotjs" },
      { name: "Tailwind CSS", icon: "siTailwindcss" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Cross-platform and native apps for Android and iOS with a single delivery pipeline.",
    items: [
      { name: "Flutter", icon: "siFlutter" },
      { name: "Dart", icon: "siDart" },
      { name: "React Native", icon: "siReact" },
      { name: "Kotlin", icon: "siKotlin" },
      { name: "Swift", icon: "siSwift" },
      { name: "Android", icon: "siAndroid" },
      { name: "App Store", icon: "siAppstore" },
      { name: "Google Play", icon: "siGoogleplay" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Secure APIs, business logic and integrations that scale with your traffic.",
    items: [
      { name: "Node.js", icon: "siNodedotjs" },
      { name: "Express", icon: "siExpress" },
      { name: "PHP", icon: "siPhp" },
      { name: "Laravel", icon: "siLaravel" },
      { name: "Python", icon: "siPython" },
      { name: "Django", icon: "siDjango" },
      { name: "Java", icon: "siOpenjdk" },
      { name: ".NET", icon: "siDotnet" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational and document data models designed for integrity and speed.",
    items: [
      { name: "MySQL", icon: "siMysql" },
      { name: "PostgreSQL", icon: "siPostgresql" },
      { name: "MongoDB", icon: "siMongodb" },
      { name: "Firebase", icon: "siFirebase" },
      { name: "Redis", icon: "siRedis" },
      { name: "GraphQL", icon: "siGraphql" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Automated builds, containerised deployments and monitored production systems.",
    items: [
      { name: "AWS", fallback: "AWS", color: "#FF9900" },
      { name: "Google Cloud", icon: "siGooglecloud" },
      { name: "Docker", icon: "siDocker" },
      { name: "Kubernetes", icon: "siKubernetes" },
      { name: "GitHub", icon: "siGithub" },
      { name: "GitLab", icon: "siGitlab" },
      { name: "Cloudflare", icon: "siCloudflare" },
      { name: "Jenkins", icon: "siJenkins" },
    ],
  },
  {
    id: "commerce",
    title: "E-Commerce & CMS",
    description: "Storefronts and content platforms that marketing teams can actually manage.",
    items: [
      { name: "Shopify", icon: "siShopify" },
      { name: "WordPress", icon: "siWordpress" },
      { name: "WooCommerce", icon: "siWoocommerce" },
      { name: "Stripe", icon: "siStripe" },
    ],
  },
  {
    id: "growth",
    title: "AI, Design & Growth",
    description: "The tools we use for intelligent features, product design and measurable marketing.",
    items: [
      { name: "OpenAI", fallback: "AI", color: "#1CA830" },
      { name: "LangChain", icon: "siLangchain" },
      { name: "Figma", icon: "siFigma" },
      { name: "Google Analytics", icon: "siGoogleanalytics" },
      { name: "Search Console", icon: "siGooglesearchconsole" },
      { name: "Tag Manager", icon: "siGoogletagmanager" },
      { name: "Google Ads", icon: "siGoogleads" },
      { name: "Semrush", icon: "siSemrush" },
    ],
  },
];

export const marqueeTech: TechItem[] = [
  { name: "React", icon: "siReact" },
  { name: "Next.js", icon: "siNextdotjs" },
  { name: "TypeScript", icon: "siTypescript" },
  { name: "Flutter", icon: "siFlutter" },
  { name: "Node.js", icon: "siNodedotjs" },
  { name: "Laravel", icon: "siLaravel" },
  { name: "Python", icon: "siPython" },
  { name: ".NET", icon: "siDotnet" },
  { name: "PostgreSQL", icon: "siPostgresql" },
  { name: "MongoDB", icon: "siMongodb" },
  { name: "AWS", fallback: "AWS", color: "#FF9900" },
  { name: "Docker", icon: "siDocker" },
  { name: "Shopify", icon: "siShopify" },
  { name: "WordPress", icon: "siWordpress" },
  { name: "Figma", icon: "siFigma" },
  { name: "Kubernetes", icon: "siKubernetes" },
];
