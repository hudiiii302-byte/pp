/**
 * Photography is referenced by remote URL and optimised through next/image.
 * Brand illustrations live in `src/components/brand-visuals.tsx` as inline SVG
 * components, so this project ships with **no binary assets** and nothing in
 * `public/` is required for the site to build or render.
 */
const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

const pxPng = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.png?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const media = {
  aiNeural: pxPng(17483873),
  aiAbstract: pxPng(17485657),
  aiRobotics: px(8386440),

  teamDevelopers: px(6804068),
  teamOffice: px(6804073),
  businessAnalyticsTeam: px(3183126),
  uxTeam: px(8128192),
  pairProgramming: px(6803554),
  engineerCoding: px(3861951),
  htmlEditor: px(6804610),
  officeTeam: px(6803533),
  professionals: px(7988745),
  coffeeCoders: px(6804602),
  codeReview: px(6804594),
  focusedDeveloper: px(6804604),
  deskTeam: px(6804076),

  deliveryApp: px(16052344),
  deliveryAppAlt: px(16052346),
  ecommerceCard: px(7621381),
  appIcons: px(7662059),
  stockCharts: px(7873554),
  analyticsChart: px(7947997),
  marketDashboard: px(7873553),
  posTerminal: px(5849594),
  stripeCheckout: px(29502370),
  stripeMobile: px(29502368),

  serverRacks: px(5480781),
  serverBlue: px(17323801),
  gameControllers: px(5208827),
  gamePad: px(7241436),

  // Healthcare
  doctorTablet: px(5206922),
  doctorsReview: px(6129209),
  hospitalStaff: px(5722160),
  doctorSmartphone: px(8413399),

  // Inventory & warehouse
  warehouseScanning: px(4484151),
  warehouseShelves: px(31112251),
  warehouseTeam: px(4483860),
  warehouseAisle: px(4483775),

  // Real estate
  realEstateKeys: px(8470805),
  realEstateAgent: px(7937682),
  realEstateHandover: px(7937691),
  realEstateCouple: px(8730048),

  // Jewellery & luxury retail
  jewelleryDisplay: px(20858959),
  jewelleryStore: px(28146843),
  jewelleryBoutique: px(5705481),

  // Education
  universityLecture: px(8197508),
  classroomDiscussion: px(8199134),
  studentsStudying: px(37758607),

  // Shopify & eCommerce (distinct visuals)
  shopifyStorefront: px(17485353),
  shopifyStoreAlt: px(16675632),
  ecommerceShopping: px(6667686),
  ecommerceOnline: px(7620619),

  // Android & iOS
  androidApp: px(177707),
  androidInterface: px(5253002),
  iosApp: px(12570216),
  iosInterface: px(5956083),

  // Social media & ads
  socialCreator: px(3850271),
  socialInstagram: px(6255898),
  socialContent: px(4549413),
  adsAnalytics: px(577195),
  adsCharts: px(577210),
  adsRevenue: px(12969403),

  // Premium storefront & store photography
  storeCheckout: px(6925808),
  storeBoutique: px(28271094),
  storeFashion: px(28271065),
  storeWindow: px(13532891),

  // Campus & jewellery
  campusBuilding: px(31085769),
  campusLake: px(31085766),
  jewelleryRings: px(6098253),

  // Multi-device showcase (Android + Apple)
  appShowcase: px(28902919),

  // Residential society aerials
  societyAerial: px(6875496),
  societyAerialAlt: px(33414231),

  // Blog photography
  budgetPlanning: px(4386366),
  businessMeeting: px(8067807),
  flutterCoding: px(8171308),
  phoneCode: px(33797245),
  productPhotography: px(7857497),
  studioShooting: px(9218544),
  speedReport: px(7413936),
  analyticsPaper: px(7947635),

  /**
   * Studio imagery — local files in /public/brand/team.
   *
   * ⚠️  READ BEFORE WRITING ALT TEXT OR CAPTIONS FOR THESE.
   *
   * With the single exception of `/brand/team/awais-malick.jpg` (a real
   * photograph of the founder, used on /about and in team.ts), every file in
   * this folder is a generated illustration, not a photograph of WordbitX
   * staff. All of them are exactly 1152x864 or 864x1152 and the same handful
   * of synthetic faces recurs across them.
   *
   * They are therefore captioned as illustrations. Do NOT reintroduce alt text
   * or body copy that names a real person, says "our team", or claims the
   * people shown are the ones who will work on a client's project — the site
   * sells on "we do not invent things" and that promise has to survive someone
   * looking closely at a photograph.
   *
   * Replace them with a real shoot and this constraint goes away. Until then,
   * illustration language only.
   */
  wordbitxStudio: "/brand/team/studio-restore.jpg",
  whoWeAreStudio: "/brand/team/studio-restore.jpg",
  productWalkthrough: "/brand/team/walkthrough.jpg",
  officeSideAngle: "/brand/team/office-side-angle.jpg",
  teamMeeting: "/brand/team/meeting-room.jpg",
  teamHuddle: "/brand/team/huddle.jpg",
  heroTeam: "/brand/team/hero-office.jpg",
  aboutProcess: "/brand/team/about-office-loft.jpg",
} as const;

export type MediaKey = keyof typeof media;
