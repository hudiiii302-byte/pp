import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeading, ButtonLink, Breadcrumbs, Eyebrow, Card } from "@/components/ui";
import { PostCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { RichText } from "@/components/rich-text";
import { ArticleSchema } from "@/components/jsonld";
import { ArrowRight, ClockIcon, CheckIcon } from "@/components/icons";
import { blogPosts, getPost, getPosts, adjacentPosts, formatDate, slugifyHeading, sortedPosts } from "@/lib/blog";
import { getServices } from "@/lib/services";
import { seoTitleAbsolute } from "@/lib/seo-title";
import { siteConfig } from "@/lib/site";
import type { BlogBlock } from "@/lib/types";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: seoTitleAbsolute(post.metaTitle),
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={slugifyHeading(block.text)} className="mt-12 scroll-mt-28 text-2xl font-semibold text-ink-900 sm:text-[1.7rem]">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold text-ink-900">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-4 text-base leading-[1.75] text-ink-700">
          <RichText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3">
          {block.items.map((item, index) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                {index + 1}
              </span>
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-slate-50 px-6 py-5 text-lg font-medium italic leading-relaxed text-ink-900">
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/70 p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-ink-900">
            <CheckIcon className="h-4.5 w-4.5 text-brand-600" />
            {block.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            <RichText text={block.text} />
          </p>
        </aside>
      );
    case "table":
      return (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} className="border-b border-slate-200 px-4 py-3 font-semibold text-ink-900">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="odd:bg-white even:bg-slate-50/60">
                  {row.map((cell) => (
                    <td key={cell} className="border-b border-slate-100 px-4 py-3 text-ink-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getPosts(post.relatedPosts);
  const fallbackRelated = sortedPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const relatedList = (related.length > 0 ? related : fallbackRelated).slice(0, 3);
  const relatedServices = getServices(post.relatedServices);
  const { previous, next } = adjacentPosts(post.slug);
  const toc = post.blocks.filter((block): block is { type: "h2"; text: string } => block.type === "h2");
  // Named humans get their own initials; the brand byline keeps the "WB" mark
  // rather than rendering as "WE" for "WordBitX Editorial".
  const authorInitials = /wordbitx/i.test(post.author.name)
    ? "WB"
    : post.author.name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase() || "WB";

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-14 pt-28 text-white sm:pt-32">
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand-500/15 blur-[130px]" aria-hidden="true" />
        <div className="container-page relative">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <Eyebrow tone="dark">{post.category}</Eyebrow>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.9rem]">{post.h1}</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{post.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                {post.author.photo ? (
                  <Image
                    src={post.author.photo}
                    alt={`${post.author.name}, ${post.author.role}`}
                    width={36}
                    height={36}
                    unoptimized
                    className="h-9 w-9 rounded-full object-cover object-[center_22%]"
                  />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-400/15 text-xs font-bold text-brand-300">
                    {authorInitials}
                  </span>
                )}
                <span>
                  <span className="block text-white">
                    {post.author.url ? (
                      <Link href={post.author.url} className="underline underline-offset-4 hover:text-brand-300">
                        {post.author.name}
                      </Link>
                    ) : (
                      post.author.name
                    )}
                  </span>
                  <span className="text-xs">
                    {post.author.role}
                    {post.author.bio ? null : " · Reviewed by our engineering team"}
                  </span>
                </span>
              </span>
              <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
              {post.updatedAt ? <span>Updated {formatDate(post.updatedAt)}</span> : null}
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" /> {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1600}
            height={900}
            priority
            unoptimized={post.image.startsWith("/")}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
          <article className="prose-article max-w-none">
            {post.blocks.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-ink-900">Need help applying this?</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                WordBitX turns guidance like this into delivered work — scoped, built and supported. Email{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand-600 hover:text-brand-700">
                  {siteConfig.email}
                </a>{" "}
                or send your brief through the contact form.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a conversation</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Browse services
                </ButtonLink>
              </div>
            </div>

            <nav aria-label="Article navigation" className="mt-10 grid gap-4 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/blog/${previous.slug}`}
                  className="group rounded-2xl border border-slate-200 p-5 transition-colors hover:border-brand-300"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-300">Previous article</span>
                  <span className="mt-2 block text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group rounded-2xl border border-slate-200 p-5 text-right transition-colors hover:border-brand-300"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-300">Next article</span>
                  <span className="mt-2 block text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                    {next.title}
                  </span>
                </Link>
              ) : null}
            </nav>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {toc.length > 0 && (
              <Card>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">Table of contents</h2>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {toc.map((heading, index) => (
                    <li key={heading.text} className="flex gap-2.5">
                      <span className="text-brand-500">{String(index + 1).padStart(2, "0")}</span>
                      <a
                        href={`#${slugifyHeading(heading.text)}`}
                        className="text-ink-500 transition-colors hover:text-brand-700"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </Card>
            )}

            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">Related services</h2>
              <ul className="mt-4 space-y-2">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      {service.shortTitle}
                      <ArrowRight className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">About the author</h2>
              <div className="mt-4 flex items-center gap-3">
                {post.author.photo ? (
                  <Image
                    src={post.author.photo}
                    alt={`${post.author.name}, ${post.author.role}`}
                    width={44}
                    height={44}
                    unoptimized
                    className="h-11 w-11 shrink-0 rounded-full object-cover object-[center_22%]"
                  />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    {authorInitials}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold text-ink-900">
                    {post.author.url ? (
                      <Link href={post.author.url} className="underline underline-offset-4 hover:text-brand-700">
                        {post.author.name}
                      </Link>
                    ) : (
                      post.author.name
                    )}
                  </p>
                  <p className="text-xs text-ink-500">{post.author.role}</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-500">
                {post.author.bio ??
                  "The WordbitX editorial team covers software development, websites, mobile apps and digital growth from real delivery work. Every guide is reviewed by our engineers for technical accuracy before publication and updated when platforms, prices or rules change."}
              </p>
              {post.author.sameAs ? (
                <a
                  href={post.author.sameAs}
                  rel="noopener noreferrer me"
                  target="_blank"
                  className="mt-2 inline-block text-xs font-medium text-brand-700 underline underline-offset-4 hover:text-brand-600"
                >
                  LinkedIn profile
                </a>
              ) : null}
              <p className="mt-3 text-xs text-ink-300">
                Published {formatDate(post.publishedAt)}
                {post.updatedAt ? ` · Updated ${formatDate(post.updatedAt)}` : ""}
              </p>
            </Card>

            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">Talk to a specialist</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                Get a scoped plan for your project, usually within one business day.
              </p>
              <div className="mt-4">
                <ButtonLink href="/contact" className="w-full">
                  Get a quote
                </ButtonLink>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Keep Reading" title="Related articles" />
          <ButtonLink href="/blog" variant="secondary" className="shrink-0">
            All articles
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedList.map((item) => (
            <PostCard key={item.slug} post={item} />
          ))}
        </div>
      </Section>

      <CtaBand />

      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        url={`/blog/${post.slug}`}
        image={post.image}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        authorName={post.author.name}
        authorSameAs={post.author.sameAs}
        authorImage={post.author.photo}
        authorUrl={post.author.url}
      />
    </>
  );
}
