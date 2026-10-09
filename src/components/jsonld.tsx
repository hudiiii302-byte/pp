import { siteConfig, absoluteUrl } from "@/lib/site";
import { jobs } from "@/lib/careers";
import { propertiesPak } from "@/lib/demos";
import type { Faq } from "@/lib/types";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        /**
         * Entity disambiguation. The brand is split across an old domain
         * (wordbitx.com), an abandoned "WordBitx Tech." LinkedIn page that
         * data aggregators keep re-publishing, and the current name. Listing
         * every spelling we are cited under tells Google these are one
         * organisation instead of several weak ones.
         */
        alternateName: ["WordbitX Tech", "WordBitx Tech", "Wordbit X", "WordbitX Technology", "Wordbitx"],
        url: siteConfig.url,
        logo: absoluteUrl("/brand/wordbitx-mark.png"),
        image: absoluteUrl(siteConfig.ogImage),
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        foundingDate: String(siteConfig.foundingYear),
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Company registration",
            value: siteConfig.registration.secp,
          },
          {
            "@type": "PropertyValue",
            name: "Tax registration",
            value: siteConfig.registration.fbr,
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.streetAddress,
          addressLocality: siteConfig.addressLocality,
          addressRegion: siteConfig.addressRegion,
          addressCountry: siteConfig.addressCountry,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phoneDisplay,
            email: siteConfig.email,
            contactType: "sales",
            availableLanguage: ["English", "Urdu"],
            areaServed: ["PK", "GB", "US", "AE", "AU", "CA"],
          },
          {
            "@type": "ContactPoint",
            telephone: siteConfig.usPhoneDisplay,
            email: siteConfig.email,
            contactType: "sales",
            availableLanguage: ["English"],
            areaServed: ["US", "CA", "GB", "AE", "AU"],
          },
        ],
        sameAs: [
          ...siteConfig.socials.map((social) => social.href),
          ...siteConfig.directories.map((directory) => directory.href),
        ],
        // Entity link between WordbitX and the live product it operates.
        owns: [
          {
            "@type": "WebSite",
            name: propertiesPak.name,
            url: propertiesPak.url,
            description: propertiesPak.description,
            inLanguage: "en",
          },
        ],
        knowsAbout: [
          "Custom software development",
          "Website development",
          "SEO",
          "Digital marketing",
          "Shopify development",
          "E-commerce",
          "Mobile app development",
          "POS software",
          "Artificial Intelligence",
        ],
      }}
    />
  );
}

export function VideoObjectSchema({
  name,
  description,
  contentUrl,
  thumbnailUrl,
}: {
  name: string;
  description: string;
  contentUrl: string;
  thumbnailUrl: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name,
        description,
        contentUrl,
        thumbnailUrl,
        uploadDate: siteConfig.contentUpdated,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType,
        url: absoluteUrl(url),
        provider: {
          "@type": "ProfessionalService",
          name: siteConfig.name,
          url: siteConfig.url,
          telephone: siteConfig.phoneDisplay,
          email: siteConfig.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.streetAddress,
            addressLocality: siteConfig.addressLocality,
            addressRegion: siteConfig.addressRegion,
            addressCountry: siteConfig.addressCountry,
          },
        },
        areaServed: ["Pakistan", "United Kingdom", "United States", "United Arab Emirates", "Australia", "Canada"],
      }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }}
    />
  );
}

export function JobPostingSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": jobs.map((job) => ({
          "@type": "JobPosting",
          title: job.title,
          description: `${job.summary} ${job.youWill.join(" ")}`,
          datePosted: job.posted,
          validThrough: `${job.validThrough}T23:59:59+05:00`,
          employmentType: job.type,
          hiringOrganization: {
            "@id": `${siteConfig.url}/#organization`,
            "@type": "Organization",
            name: siteConfig.name,
            sameAs: siteConfig.url,
            logo: absoluteUrl("/brand/wordbitx-mark.png"),
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.streetAddress,
              addressLocality: siteConfig.addressLocality,
              addressRegion: siteConfig.addressRegion,
              addressCountry: siteConfig.addressCountry,
            },
          },
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "Pakistan" },
          url: absoluteUrl(`/careers#${job.slug}`),
          directApply: true,
          identifier: { "@type": "PropertyValue", name: siteConfig.name, value: job.slug },
        })),
      }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  publishedAt,
  updatedAt,
  authorName,
  authorSameAs,
  authorUrl,
  authorImage,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  /** External profile. Its presence is what promotes the author from an
   *  anonymous Organization to a resolvable Person entity. */
  authorSameAs?: string;
  authorUrl?: string;
  authorImage?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        image: image.startsWith("http") ? image : absoluteUrl(image),
        mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(url) },
        datePublished: publishedAt,
        dateModified: updatedAt ?? publishedAt,
        author: authorSameAs
          ? {
              "@type": "Person",
              name: authorName,
              url: authorUrl ? absoluteUrl(authorUrl) : siteConfig.url,
              sameAs: [authorSameAs],
              ...(authorImage ? { image: absoluteUrl(authorImage) } : {}),
            }
          : { "@type": "Organization", name: authorName, url: siteConfig.url },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          logo: { "@type": "ImageObject", url: absoluteUrl("/brand/wordbitx-mark.png") },
        },
      }}
    />
  );
}
