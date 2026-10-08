import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { BlogExplorer } from "@/components/blog-explorer";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight, ClockIcon } from "@/components/icons";
import { sortedPosts, blogCategories, formatDate } from "@/lib/blog";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Blog | Software, Shopify, Flutter & SEO Guides",
  description:
    "Guides from WordbitX: choosing a software company, e-commerce and POS cost, Flutter vs React Native, school systems, SEO vs Google Ads and SaaS MVPs.",
  alternates: { canonical: "/blog" },
  keywords: [
    "software company Lahore",
    "ecommerce website cost Pakistan",
    "Flutter vs React Native",
    "SEO vs Google Ads",
    "school management system software",
    "restaurant POS Pakistan",
  ],
  openGraph: {
    url: "/blog",
    title: "WordbitX Blog | Software, Shopify, Flutter & SEO",
    description:
      "High-intent guides on choosing a software company, store cost, Flutter vs React Native, local SEO, Amazon and SaaS MVPs.",
  },
};

type PageProps = {
  searchParams: Promise<{ q?: string; category?: string }>;
};

export default async function BlogPage({ searchParams }: PageProps) {
  const { q, category } = await searchParams;
  const featured = sortedPosts.find((post) => post.featured) ?? sortedPosts[0];
  const popularServices = services.filter((service) =>
    ["web-development", "flutter-app-development", "seo-services", "google-ads"].includes(service.slug),
  );

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guides, Comparisons and Technical Explainers"
        description="No filler posts. Every article answers a question our clients actually ask before starting a project — with the trade-offs included. Definitions and “what is” pages live in the software topic library."
        crumbs={[{ label: "Blog", href: "/blog" }]}
      >
        <ButtonLink href="/topics" variant="ghost">
          Software topics
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Featured Article" title="Start here" />
        <article className="mt-8 grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-2">
          <Link href={`/blog/${featured.slug}`} className="relative aspect-[16/10] block bg-slate-100 lg:aspect-auto">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Link>
          <div className="flex flex-col justify-center p-7 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">{featured.category}</span>
              <time dateTime={featured.publishedAt} className="text-ink-300">
                {formatDate(featured.publishedAt)}
              </time>
              <span className="inline-flex items-center gap-1 text-ink-300">
                <ClockIcon className="h-3.5 w-3.5" /> {featured.readingMinutes} min read
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
              <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-brand-700">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">{featured.excerpt}</p>
            <div className="mt-7">
              <ButtonLink href={`/blog/${featured.slug}`}>Read the guide</ButtonLink>
            </div>
          </div>
        </article>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="All Articles"
          title="Search and filter the library"
          description="Search by keyword or filter by category — both work instantly, no page reload."
        />
        <div className="mt-10">
          <BlogExplorer
            posts={sortedPosts.map((post) => ({
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              category: post.category,
              image: post.image,
              imageAlt: post.imageAlt,
              publishedAt: post.publishedAt,
              readingMinutes: post.readingMinutes,
            }))}
            categories={blogCategories}
            initialQuery={q ?? ""}
            initialCategory={category ?? "All"}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="From Reading to Building"
            title="Services referenced across these guides"
            description="Each article links to the service that turns the advice into delivery."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {popularServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200"
              >
                <h3 className="text-base font-semibold text-ink-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  View {service.shortTitle}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
       </Section>

      <Section tone="muted" className="!py-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-ink-500">
          <h2 className="text-base font-semibold text-ink-900">Why you can trust these articles</h2>
          <p className="mt-2 leading-relaxed">
            Every guide is drafted from real delivery work at WordBitX, carries an author and publication date, and is
            reviewed by our engineering team before publication. Read our{" "}
            <Link href="/editorial-policy" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
              Editorial &amp; Content Standards
            </Link>{" "}
            to see how we research, review, price and update content.
          </p>
        </div>
      </Section>

       <CtaBand
         title="Have a question our articles do not answer?"
         description="Send it over. We answer technical questions directly, even when it does not turn into a project."
       />
     </>
   );
}
