import type { NextConfig } from "next";

const ONE_YEAR = 60 * 60 * 24 * 365;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Keep optimised variants for a year — these are static marketing photos,
    // so re-optimising them on every deploy is wasted origin time.
    minimumCacheTTL: ONE_YEAR,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  compress: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Showcase screenshots are regenerated on each deploy under the same
        // filenames, so they must NOT be immutable — 1 day in the browser,
        // 1 week at the edge, served stale while revalidating.
        source: "/demos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
          },
        ],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` }],
      },
      {
        source: "/ads.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/services/website-development", destination: "/services/web-development", permanent: true },
      { source: "/services/shopify-development", destination: "/services/ecommerce-shopify", permanent: true },
      { source: "/services/ai-development", destination: "/services/ai-solutions", permanent: true },
      { source: "/services/pos-software-development", destination: "/services/pos-software", permanent: true },
      { source: "/services/crm-development", destination: "/services/crm-erp-solutions", permanent: true },
      { source: "/services/erp-development", destination: "/services/crm-erp-solutions", permanent: true },
      { source: "/services/android-development", destination: "/services/android-app-development", permanent: true },
      { source: "/services/ios-development", destination: "/services/ios-app-development", permanent: true },
      { source: "/services/seo", destination: "/services/seo-services", permanent: true },
      { source: "/services/flutter-development", destination: "/services/flutter-app-development", permanent: true },
      { source: "/services/react-native-development", destination: "/services/mobile-app-development", permanent: true },
      { source: "/services/woocommerce", destination: "/services/woocommerce-development", permanent: true },
      { source: "/services/shopify", destination: "/services/ecommerce-shopify", permanent: true },
      { source: "/flutter-development", destination: "/services/flutter-app-development", permanent: true },
      { source: "/website-development", destination: "/services/web-development", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/locations", destination: "/global", permanent: true },
      { source: "/markets", destination: "/global", permanent: true },
      { source: "/jobs", destination: "/careers", permanent: true },
      { source: "/careers/jobs", destination: "/careers", permanent: true },
      { source: "/how-we-work", destination: "/process", permanent: true },
      { source: "/our-process", destination: "/process", permanent: true },
      { source: "/software-development-cost", destination: "/pricing", permanent: true },
      { source: "/website-cost", destination: "/pricing", permanent: true },
      { source: "/app-development-cost", destination: "/pricing", permanent: true },
      { source: "/hire-developers", destination: "/careers", permanent: true },
      { source: "/hire-software-developers", destination: "/pricing", permanent: true },
      { source: "/favicon.ico", destination: "/icon.svg", permanent: false },
    ];
  },
};

export default nextConfig;
