import type { Faq } from "@/lib/types";

export type SocietyPlot = { plot: string; size: string; range: string };

export type Society = {
  slug: string;
  name: string;
  city: string;
  demand: "Very High" | "High" | "Growing";
  status: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  highlights: string[];
  plots: SocietyPlot[];
  faqs: Faq[];
};

export const priceDisclaimer =
  "Indicative market ranges in PKR, refreshed periodically from dealer and developer office activity. Rates move with demand — always verify current pricing with the developer's official office or an authorised dealer before transacting.";

export const pricesUpdatedLabel = "Prices last reviewed: August 2026";

export const societies: Society[] = [
  {
    slug: "dha-lahore",
    name: "DHA Lahore",
    city: "Lahore",
    demand: "Very High",
    status: "Established · Phases 1–8",
    tagline: "Pakistan's benchmark premium address — strong file market across all phases.",
    metaTitle: "DHA Lahore Plots & Files | Prices, Phases and Portal",
    metaDescription:
      "DHA Lahore plots: indicative price ranges for kanal and marla sizes across phases, plus the property portal software behind society inventory.",
    overview: [
      "DHA Lahore remains the reference point for premium property in the city. Files trade actively in Phases 1 to 8, with the older phases commanding higher per-marla rates due to possession and developed infrastructure.",
      "Dealers, investors and society office staff all manage large plot inventories — which is exactly what our real estate portals are built to track: phases, blocks, plot numbers, file status and instalment history.",
    ],
    highlights: [
      "All phases possession ready with developed roads and utilities",
      "Strong resale and rental demand",
      "Active commercial strip in central areas",
      "High search volume for 1 kanal and 10 marla files",
    ],
    plots: [
      { plot: "Residential file", size: "1 Kanal", range: "₨ 1.3 – 1.6 Cr" },
      { plot: "Residential file", size: "2 Kanal", range: "₨ 2.6 – 3.2 Cr" },
      { plot: "Residential plot", size: "5 Marla", range: "₨ 6.5 – 8.0 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 13 – 16 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 15 – 20 Cr" },
    ],
    faqs: [
      { question: "Which phase is best for investment?", answer: "Phases 1 and 2 trade at premium rates because of mature infrastructure. Later phases suit buyers targeting growth as the area develops. The right choice depends on your budget and holding period." },
      { question: "Can files be transferred?", answer: "Yes, file transfers happen at the DHA office with the standard transfer fee and documentation. Any portal managing DHA inventory should track transfer status per plot." },
    ],
  },
  {
    slug: "dha-islamabad",
    name: "DHA Islamabad",
    city: "Islamabad",
    demand: "Very High",
    status: "Established · Phases 1–6",
    tagline: "The capital's premium society with the strongest large-plot market in Pakistan.",
    metaTitle: "DHA Islamabad Plots | Prices, Phases and Property Portal",
    metaDescription:
      "DHA Islamabad plots: indicative price ranges for 5, 10 and 20 marla and commercial plots across phases, plus society inventory portal software.",
    overview: [
      "DHA Islamabad holds the most expensive large plots in the country. Ten and twenty marla plots in central phases trade at premium rates, and the society's commercial areas serve the capital's corporate market.",
      "Transaction values are high, so dealers and investors rely heavily on accurate file records — the core reason society portals exist.",
    ],
    highlights: [
      "Largest 10–20 marla plot market in Pakistan",
      "Strong commercial and office demand",
      "Consistent international buyer interest",
      "High file transfer activity",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 10 – 12 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 20 – 25 Cr" },
      { plot: "Residential plot", size: "20 Marla", range: "₨ 40 – 50 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 25 – 35 Cr" },
      { plot: "Commercial plot", size: "20 Marla", range: "₨ 55 – 70 Cr" },
    ],
    faqs: [
      { question: "What drives value in DHA Islamabad?", answer: "Phase location, road width, park or avenue facing position and possession status. Central phase 10–20 marla plots hold value best over time." },
    ],
  },
  {
    slug: "dha-karachi",
    name: "DHA Karachi",
    city: "Karachi",
    demand: "High",
    status: "Established · Phases 1–8",
    tagline: "Karachi's most established premium society with strong canal-front and avenue demand.",
    metaTitle: "DHA Karachi Plots & Files | Prices and Property Portal",
    metaDescription:
      "DHA Karachi plots and files: indicative price ranges for 2 kanal, 4 kanal and commercial plots across phases, plus property portal software for inventory.",
    overview: [
      "DHA Karachi is the anchor premium address in the city. Canal-facing and avenue plots command premium rates, and the society's commercial zones anchor Karachi's upper-market retail.",
      "File market activity is steady across phases, with 2 and 4 kanal being the most traded sizes.",
    ],
    highlights: [
      "Canal-front and avenue premium",
      "Strong commercial real estate",
      "Deep file market across phases",
      "High overseas buyer interest",
    ],
    plots: [
      { plot: "Residential plot", size: "2 Kanal", range: "₨ 4.0 – 6.0 Cr" },
      { plot: "Residential plot", size: "4 Kanal", range: "₨ 8 – 12 Cr" },
      { plot: "Residential plot", size: "5 Marla (Phase 8)", range: "₨ 3.5 – 4.5 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 14 – 18 Cr" },
    ],
    faqs: [
      { question: "Are DHA Karachi files transferable?", answer: "Yes, at the society office with standard fees. Inventory software should flag any plots under hold or litigation status before they appear for sale." },
    ],
  },
  {
    slug: "bahria-town-lahore",
    name: "Bahria Town Lahore",
    city: "Lahore",
    demand: "High",
    status: "Established · Sectors A–Z & beyond",
    tagline: "One of the country's largest integrated towns with heavy villa and plot volume.",
    metaTitle: "Bahria Town Lahore Plots | Prices, Sectors and Portal",
    metaDescription:
      "Bahria Town Lahore plots: indicative price ranges for 5, 10 and 20 marla plots and villas across sectors, plus property portal software for sector inventory.",
    overview: [
      "Bahria Town Lahore is one of the largest integrated developments in the country. Its sector-based layout (A through Z and beyond) and villa inventory make it a heavy-inventory market that needs real tooling to manage.",
      "Search volume is high for 5 and 10 marla plots plus ready villas in central sectors.",
    ],
    highlights: [
      "Sector-based inventory, thousands of plots",
      "Strong villa and housing demand",
      "Large dealer ecosystem",
      "High search volume for 5–10 marla",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 3.5 – 5.0 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 7 – 9 Cr" },
      { plot: "Residential plot", size: "20 Marla", range: "₨ 14 – 18 Cr" },
      { plot: "Villa", size: "2000–4000 sq yd", range: "₨ 6 – 15 Cr" },
    ],
    faqs: [
      { question: "Which sectors are premium in Bahria Town Lahore?", answer: "Central sectors near the town center, golf course and parks hold premium. Sector, corner and park-facing status all affect price." },
    ],
  },
  {
    slug: "bahria-town-islamabad",
    name: "Bahria Town Islamabad",
    city: "Islamabad",
    demand: "Very High",
    status: "Established · Sectors A–R & beyond",
    tagline: "The capital's largest integrated town with deep plot and villa liquidity.",
    metaTitle: "Bahria Town Islamabad Plots | Prices and Portal",
    metaDescription:
      "Bahria Town Islamabad plots: indicative price ranges for 5, 10 and 20 marla plots and villas, plus property portal software for inventory management.",
    overview: [
      "Bahria Town Islamabad combines DHA-adjacent location with town-scale amenities, making it one of the most liquid large-plot markets in the capital.",
      "Its size means inventory management — by sector, block and status — is a genuine operational problem, and portals solve it.",
    ],
    highlights: [
      "Deep plot liquidity",
      "Villa and housing demand",
      "Amenities: golf, mall, healthcare",
      "High search volume",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 8 – 10 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 16 – 20 Cr" },
      { plot: "Residential plot", size: "20 Marla", range: "₨ 32 – 40 Cr" },
      { plot: "Villa", size: "2000–4500 sq yd", range: "₨ 12 – 30 Cr" },
    ],
    faqs: [
      { question: "How does Bahria Town Islamabad compare to DHA Islamabad?", answer: "Bahria offers wider ranges and town amenities; DHA trades at a per-marla premium in central phases. Both have strong file markets." },
    ],
  },
  {
    slug: "capital-smart-city",
    name: "Capital Smart City",
    city: "Islamabad / Rawalpindi",
    demand: "Very High",
    status: "Ongoing · Residential & Commercial zones",
    tagline: "The fastest-growing smart city in the capital region with strong 5 and 10 marla demand.",
    metaTitle: "Capital Smart City Plots & Files | Prices and Portal",
    metaDescription:
      "Capital Smart City plots: indicative ranges for 3, 5 and 10 marla residential and commercial plots, plus portal software with ballot and instalment tracking.",
    overview: [
      "Capital Smart City has become the capital region's most searched new development. Ballot-based allocation, instalment plans and a structured master plan make it a textbook case for specialised portal tooling.",
      "5 and 10 marla residential plus 10 marla commercial are the most traded categories.",
    ],
    highlights: [
      "Ballot and instalment-based sales",
      "Strong 5 and 10 marla demand",
      "Modern master plan and amenities",
      "Very high search volume",
    ],
    plots: [
      { plot: "Residential plot", size: "3 Marla", range: "₨ 3.6 – 4.5 Cr" },
      { plot: "Residential plot", size: "5 Marla", range: "₨ 6 – 8 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 11 – 14 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 12 – 16 Cr" },
    ],
    faqs: [
      { question: "What is a Capital Smart City ballot?", answer: "Allotted plots are assigned by ballot. Portal systems track ballot results, plot numbers and payment milestones per file so dealers never sell a plot whose status they cannot verify." },
    ],
  },
  {
    slug: "lahore-smart-city",
    name: "Lahore Smart City",
    city: "Lahore",
    demand: "High",
    status: "Ongoing · Overseas & Executive blocks",
    tagline: "Overseas-investor focused development with executive blocks near Lahore's tech corridor.",
    metaTitle: "Lahore Smart City Plots & Files | Prices and Portal",
    metaDescription:
      "Lahore Smart City plots: indicative ranges for overseas and executive block plots, plus property portal software with instalment tracking.",
    overview: [
      "Lahore Smart City is positioned for overseas Pakistanis, with overseas blocks and an executive block near the city's tech and commercial corridor. Its payment plans are instalment-heavy, which makes schedule tracking essential.",
      "Search volume is strong for 5 and 10 marla files in both blocks.",
    ],
    highlights: [
      "Overseas buyer friendly plans",
      "Executive block near tech corridor",
      "Instalment-heavy payment structure",
      "High search volume for 5 marla",
    ],
    plots: [
      { plot: "Overseas block", size: "5 Marla", range: "₨ 5 – 6.5 Cr" },
      { plot: "Executive block", size: "5 Marla", range: "₨ 4.5 – 5.5 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 10 – 12.5 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 8 – 10 Cr" },
    ],
    faqs: [
      { question: "Are there dedicated overseas buyer facilities?", answer: "Yes — dedicated offices, online payment plans and remote purchase processes are part of the overseas block offering." },
    ],
  },
  {
    slug: "etihad-town",
    name: "Etihad Town",
    city: "Lahore",
    demand: "High",
    status: "Ongoing · Residential & Commercial",
    tagline: "Fast-moving development on Lahore's southern expansion corridor with strong 5–20 marla demand.",
    metaTitle: "Etihad Town Plots & Files | Prices and Property Portal",
    metaDescription:
      "Etihad Town plots: indicative price ranges for 5, 10 and 20 marla residential and commercial plots, plus property portal software for dealer inventory.",
    overview: [
      "Etihad Town sits on Lahore's southern growth corridor and has moved quickly from launch to active file trading. Its 5, 10 and 20 marla residential plus commercial categories are all in demand.",
      "A fast-growing inventory like this is exactly what a society portal is for: block, plot and payment status in one place.",
    ],
    highlights: [
      "Southern corridor growth location",
      "Active file market",
      "Residential + commercial mix",
      "Strong 20 marla interest",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 4.5 – 5.5 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 9 – 11 Cr" },
      { plot: "Residential plot", size: "20 Marla", range: "₨ 18 – 22 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 8 – 10 Cr" },
    ],
    faqs: [
      { question: "What infrastructure is underway in Etihad Town?", answer: "Roads, water and utility infrastructure are being delivered in phases alongside the master plan. Developers publish phase timelines on their official channels." },
    ],
  },
  {
    slug: "etihad-city",
    name: "Etihad City",
    city: "Lahore",
    demand: "Growing",
    status: "Ongoing · Sectors with villa & plot ranges",
    tagline: "Sister development to Etihad Town with a wider range of plot and villa products.",
    metaTitle: "Etihad City Plots | Prices and Property Portal",
    metaDescription:
      "Etihad City plots: indicative price ranges for 5, 10 marla plots and villas, plus property portal software for dealer inventory and instalment tracking.",
    overview: [
      "Etihad City complements Etihad Town with a broader product range including villas. Its sector structure suits the same portal model: sector, plot, file status and instalment schedule per record.",
    ],
    highlights: [
      "Wider product range including villas",
      "Sector-based inventory",
      "Growing search interest",
      "Instalment-based plans",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 4 – 5 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 8 – 10 Cr" },
      { plot: "Villa", size: "2000–4000 sq yd", range: "₨ 7 – 14 Cr" },
    ],
    faqs: [
      { question: "How is Etihad City different from Etihad Town?", answer: "Etihad City offers a wider mix of villas and sector products; Etihad Town focuses on classic plot formats on the southern corridor." },
    ],
  },
  {
    slug: "park-view-city",
    name: "Park View City",
    city: "Lahore (Gujranwala Boundary)",
    demand: "High",
    status: "Ongoing · Phases 1–3",
    tagline: "Fast-selling development on the Lahore–Gujranwala route with strong file turnover.",
    metaTitle: "Park View City Plots & Files | Prices and Portal",
    metaDescription:
      "Park View City plots: indicative price ranges for 5, 10 and 20 marla plots across phases, plus property portal software for file inventory.",
    overview: [
      "Park View City has sold through multiple phases quickly, driven by its route location between Lahore and Gujranwala. File turnover is high, which means accurate per-phase, per-plot tracking matters.",
    ],
    highlights: [
      "Route location Lahore–Gujranwala",
      "Multiple phases sold out or near sold out",
      "High file turnover",
      "Strong 5 and 10 marla demand",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 5 – 6 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 9.5 – 12 Cr" },
      { plot: "Residential plot", size: "20 Marla", range: "₨ 19 – 24 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 8 – 10 Cr" },
    ],
    faqs: [
      { question: "Which phase of Park View City trades most?", answer: "Phase 1 and 2 files trade most actively due to earlier possession. Phase 3 is positioned for the next growth wave." },
    ],
  },
  {
    slug: "92-town",
    name: "92 Town",
    city: "Lahore (Jaranwala Road)",
    demand: "Growing",
    status: "Ongoing · Sectors 1 & 2",
    tagline: "High-volume budget-friendly development on the Jaranwala corridor.",
    metaTitle: "92 Town Plots & Files | Prices and Property Portal",
    metaDescription:
      "92 Town plots: indicative price ranges for 5 and 10 marla plots on the Jaranwala corridor, plus property portal software for file and instalment tracking.",
    overview: [
      "92 Town is one of the highest search-volume budget developments on Lahore's Jaranwala corridor. Its 5 and 10 marla categories serve the first-time buyer segment, and file trading is active.",
    ],
    highlights: [
      "Budget-friendly entry points",
      "Very high search volume",
      "Jaranwala corridor growth",
      "Active 5–10 marla file market",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 3.8 – 4.8 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 7.5 – 9.5 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 7 – 9 Cr" },
    ],
    faqs: [
      { question: "Is 92 Town suited for first-time buyers?", answer: "Its 5 marla entry points target first-time and budget buyers. Check the latest possession timeline with the developer before investing." },
    ],
  },
  {
    slug: "gullahri-chak-no-5",
    name: "Gullahri Chak No. 5",
    city: "Lahore (Wapda Town Road)",
    demand: "High",
    status: "Ongoing · Sectors A–D",
    tagline: "One of the most searched Jaranwala-route developments with a deep file market.",
    metaTitle: "Gullahri Chak No 5 Plots | Prices and Property Portal",
    metaDescription:
      "Gullahri Chak No. 5 plots: indicative price ranges for 5, 10 and 20 marla plots, plus property portal software for society inventory and instalment tracking.",
    overview: [
      "Gullahri Chak No. 5 is consistently among the most searched Lahore developments. Its sector layout and strong file market make it a core market for society portal tooling.",
    ],
    highlights: [
      "Very high search volume",
      "Deep file market",
      "Multiple sectors with distinct pricing",
      "Strong 5–20 marla range",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 3.5 – 4.5 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 7 – 9 Cr" },
      { plot: "Residential plot", size: "20 Marla", range: "₨ 14 – 17 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 8 – 10 Cr" },
    ],
    faqs: [
      { question: "How do sector prices differ at Gullahri Chak No. 5?", answer: "Sectors closer to the main access roads and developed infrastructure trade at premium within the development." },
    ],
  },
  {
    slug: "river-view",
    name: "River View",
    city: "Lahore (Jaranwala Road)",
    demand: "Growing",
    status: "Ongoing · Sectors with river-facing areas",
    tagline: "Budget development on the Jaranwala corridor with strong 5 marla search interest.",
    metaTitle: "River View Plots & Files | Prices and Property Portal",
    metaDescription:
      "River View plots: indicative price ranges for 5 and 10 marla plots on Lahore's Jaranwala corridor, plus property portal software for inventory.",
    overview: [
      "River View serves the same high-volume budget segment on the Jaranwala corridor. Its 5 marla plots are heavily searched by first-time buyers.",
    ],
    highlights: [
      "Budget entry points",
      "High 5 marla search volume",
      "Jaranwala corridor growth",
      "Active file trading",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 3.2 – 4 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 6 – 7.5 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 6.5 – 8 Cr" },
    ],
    faqs: [
      { question: "What should a first-time buyer verify at River View?", answer: "Possession timeline, sector development status and transfer process — all should be confirmed in writing from the developer's office." },
    ],
  },
  {
    slug: "northwood",
    name: "Northwood",
    city: "Lahore (Jaranwala Road)",
    demand: "Growing",
    status: "Ongoing · Sectors with golf-view areas",
    tagline: "Mid-segment Jaranwala development with a wide 5–20 marla product range.",
    metaTitle: "Northwood Plots & Files | Prices and Property Portal",
    metaDescription:
      "Northwood plots: indicative price ranges for 5, 10 and 20 marla plots, plus property portal software for file inventory and instalment tracking.",
    overview: [
      "Northwood offers a wide product range on the Jaranwala corridor, from 5 marla to 20 marla, and has built a steady file market across its sectors.",
    ],
    highlights: [
      "Wide 5–20 marla range",
      "Steady file market",
      "Golf-course oriented master plan",
      "Growing search interest",
    ],
    plots: [
      { plot: "Residential plot", size: "5 Marla", range: "₨ 3.5 – 4.5 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 7 – 8.5 Cr" },
      { plot: "Residential plot", size: "20 Marla", range: "₨ 14 – 17 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 7 – 9 Cr" },
    ],
    faqs: [
      { question: "How does Northwood compare to neighbouring Jaranwala projects?", answer: "It sits in the mid-segment — above the pure budget options, below established premium societies — with a broad product range to match." },
    ],
  },
  {
    slug: "al-kabir-city",
    name: "Al Kabir City / Town",
    city: "Lahore (Ferozepur Road)",
    demand: "High",
    status: "Ongoing · City & Town phases",
    tagline: "Ferozepur Road development with strong 1 kanal and 10 marla demand.",
    metaTitle: "Al Kabir City Plots & Files | Prices and Portal",
    metaDescription:
      "Al Kabir City and Town plots: indicative price ranges for 1 kanal, 2 kanal and 10 marla plots, plus property portal software with file and instalment tracking.",
    overview: [
      "Al Kabir's City and Town developments on the Ferozepur Road corridor serve both file investors and housing buyers, with 1 kanal and 10 marla being the most searched formats.",
    ],
    highlights: [
      "Ferozepur Road corridor",
      "City + Town dual phases",
      "Strong 1 kanal file market",
      "Housing and plot products",
    ],
    plots: [
      { plot: "Residential plot", size: "1 Kanal", range: "₨ 1.2 – 1.6 Cr" },
      { plot: "Residential plot", size: "2 Kanal", range: "₨ 2.4 – 3 Cr" },
      { plot: "Residential plot", size: "10 Marla", range: "₨ 8 – 10 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 9 – 11 Cr" },
    ],
    faqs: [
      { question: "What is the difference between Al Kabir City and Town?", answer: "They are related phases of the same development, each with its own layout, plot sizes and payment plans — a portal must track both separately." },
    ],
  },
  {
    slug: "wapda-town-lahore",
    name: "Wapda Town Lahore",
    city: "Lahore",
    demand: "High",
    status: "Established & expanding",
    tagline: "Lahore's value-for-money address with one of the city's largest active file markets.",
    metaTitle: "Wapda Town Lahore Plots & Files | Prices and Portal",
    metaDescription:
      "Wapda Town Lahore plots: indicative price ranges for 1 kanal, 2 kanal and 5 marla plots, plus property portal software for its large file market.",
    overview: [
      "Wapda Town combines established infrastructure with continued expansion, giving it one of Lahore's largest active file markets. The 1 kanal category is heavily searched by first-time housing buyers.",
    ],
    highlights: [
      "One of Lahore's largest file markets",
      "Established infrastructure + expansion",
      "Strong 1 kanal demand",
      "Good value positioning",
    ],
    plots: [
      { plot: "Residential plot", size: "1 Kanal", range: "₨ 1.1 – 1.5 Cr" },
      { plot: "Residential plot", size: "2 Kanal", range: "₨ 2.2 – 2.8 Cr" },
      { plot: "Residential plot", size: "5 Marla", range: "₨ 6.5 – 8 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 10 – 13 Cr" },
    ],
    faqs: [
      { question: "Why does Wapda Town have such a large file market?", answer: "Its value positioning plus continued expansion keeps both first-time buyers and file investors active across its blocks." },
    ],
  },
  {
    slug: "central-park-lahore",
    name: "Central Park (Lahore)",
    city: "Lahore (Multan Road)",
    demand: "High",
    status: "Established · Phases 1 & 2",
    tagline: "Multan Road address with established 1 kanal and 2 kanal trading.",
    metaTitle: "Central Park Lahore Plots | Prices and Property Portal",
    metaDescription:
      "Central Park Lahore plots: indicative price ranges for 1 kanal, 2 kanal and 5 marla plots on Multan Road, plus property portal software.",
    overview: [
      "Central Park on Multan Road has an established file and housing market. Its 1 and 2 kanal categories serve buyers stepping up from older Lahore localities.",
    ],
    highlights: [
      "Multan Road corridor",
      "Established trading",
      "1–2 kanal housing demand",
      "Steady file market",
    ],
    plots: [
      { plot: "Residential plot", size: "1 Kanal", range: "₨ 1.8 – 2.4 Cr" },
      { plot: "Residential plot", size: "2 Kanal", range: "₨ 3.6 – 4.5 Cr" },
      { plot: "Residential plot", size: "5 Marla", range: "₨ 9 – 11 Cr" },
      { plot: "Commercial plot", size: "10 Marla", range: "₨ 11 – 14 Cr" },
    ],
    faqs: [
      { question: "What makes Central Park popular with upgraders?", answer: "Its position on Multan Road and developed infrastructure make it a natural step up from older localities within Lahore." },
    ],
  },
  {
    slug: "park-city-lahore",
    name: "Park City Lahore",
    city: "Lahore (Jaranwala Road)",
    demand: "Growing",
    status: "Ongoing · Phases with villa product",
    tagline: "Jaranwala corridor development with park-centric layout and villa options.",
    metaTitle: "Park City Lahore Plots & Files | Prices and Portal",
    metaDescription:
      "Park City Lahore plots: indicative price ranges for 1 kanal, 2 kanal and 5 marla plots plus villas, with property portal software for inventory.",
    overview: [
      "Park City combines the Jaranwala corridor's growth with a park-centric layout and villa products, attracting both file investors and housing buyers.",
    ],
    highlights: [
      "Park-centric master plan",
      "Plot + villa product mix",
      "Jaranwala corridor growth",
      "Growing search interest",
    ],
    plots: [
      { plot: "Residential plot", size: "1 Kanal", range: "₨ 1.4 – 1.8 Cr" },
      { plot: "Residential plot", size: "2 Kanal", range: "₨ 2.8 – 3.5 Cr" },
      { plot: "Residential plot", size: "5 Marla", range: "₨ 7 – 8.5 Cr" },
      { plot: "Villa", size: "2000–4000 sq yd", range: "₨ 8 – 15 Cr" },
    ],
    faqs: [
      { question: "Does Park City offer villas?", answer: "Yes, alongside standard plots, making it a dual-product market that benefits from the same society portal tooling." },
    ],
  },
];

export function getSociety(slug: string) {
  return societies.find((item) => item.slug === slug);
}

/** Software-first titles. Plot ranges stay on the page as secondary context only. */
export function societySoftwareTitle(society: Society) {
  return `${society.name} Real Estate Portal & Property Management Software`;
}

export function societySoftwareDescription(society: Society) {
  return `${society.name} software from WordbitX: plot inventory, file transfers, instalments, dealer CRM and buyer portals. Indicative market ranges are context only — not a price list or investment advice.`;
}
