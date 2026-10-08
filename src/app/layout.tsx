import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DeferredWidgets } from "@/components/deferred-widgets";
import { OrganizationSchema, WebsiteSchema } from "@/components/jsonld";
import { TrackingBody, TrackingHead } from "@/components/analytics";
import { adsenseClientId } from "@/lib/adsense";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Software Development Company in Pakistan",
    template: "%s | WordbitX",
  },
  description: siteConfig.seoDescription,
  applicationName: siteConfig.name,
  keywords: [
    "software development company",
    "software development company Pakistan",
    "website development company",
    "mobile app development",
    "Shopify development Pakistan",
    "SEO services Pakistan",
    "digital marketing company",
    "POS software Pakistan",
    "AI solutions",
    "WordbitX",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    languages: { en: "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Software Development Company in Pakistan | WordbitX",
    description: siteConfig.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: "WordbitX | Software Development Company in Pakistan",
    description: siteConfig.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    ...(adsenseClientId() ? { "google-adsense-account": adsenseClientId() as string } : {}),
    "fb:page_id": siteConfig.facebookPageId,
    "dmca-site-verification": siteConfig.dmcaSiteVerification,
  },
};

export const viewport: Viewport = {
  themeColor: "#050d21",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const adsense = adsenseClientId();
  return (
    <html lang="en">
      <head>
        {adsense ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`}
            crossOrigin="anonymous"
          />
        ) : null}
        <TrackingHead />
      </head>
      <body className="bg-white text-ink-900 antialiased">
        <TrackingBody />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <DeferredWidgets />
        <OrganizationSchema />
        <WebsiteSchema />
      </body>
    </html>
  );
}
