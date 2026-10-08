import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeading, ButtonLink, Card } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/accordion";
import { FaqSchema } from "@/components/jsonld";
import { DemoShot } from "@/components/demo-shot";
import { ArrowRight, GlobeIcon, CheckIcon } from "@/components/icons";
import { products, getProduct } from "@/lib/products";
import { showcaseRel, demosDisclosure } from "@/lib/demos";
import { demoPreview } from "@/lib/demo-shots";
import { getServices } from "@/lib/services";
import { seoTitleAbsolute } from "@/lib/seo-title";

export function generateStaticParams() {
  return products.map((item) => ({ slug: item.slug }));
}
export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: seoTitleAbsolute(product.metaTitle),
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { url: `/products/${product.slug}`, title: product.metaTitle, description: product.metaDescription },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const { showcase } = product;
  const isLive = showcase.kind === "live";
  const preview = demoPreview(showcase);
  const relatedServices = getServices(product.relatedServiceSlugs);
  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={showcase.label}
        title={product.productName}
        description={product.tagline}
        crumbs={[
          { label: "Products", href: "/products" },
          { label: product.productName, href: `/products/${product.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={showcase.url} external>
            Open {showcase.host}
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Discuss Your Project
          </ButtonLink>
        </div>
      </PageHero>

      <Section deferPaint={false}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading eyebrow={showcase.category} title="What it is" />
            <div className="mt-6 space-y-4">
              {product.overview.map((para) => (
                <p key={para.slice(0, 40)} className="text-base leading-relaxed text-ink-600">
                  {para}
                </p>
              ))}
            </div>

            <h3 className="mt-10 text-lg font-semibold text-ink-900">Built for</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.builtFor.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-700">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-28">
            <a
              href={showcase.url}
              target="_blank"
              rel={showcaseRel(showcase.url)}
              className="group relative block aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-navy-950 shadow-lg"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${showcase.accent ?? "from-navy-800 via-navy-700 to-brand-600"} opacity-90`}
              />
              <DemoShot
                src={preview.src}
                alt={
                  preview.isCover
                    ? `Illustration representing ${product.productName}`
                    : `${product.productName} — screenshot of the live site`
                }
                priority
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-navy-950/85 px-4 py-3 text-xs font-medium text-white">
                <GlobeIcon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{showcase.host}</span>
                <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-ink-500">
              {isLive
                ? "Properties Pak is a real, live product owned and operated by WordbitX. It is not a demo, and the listings and dealers on it are real users of the platform."
                : demosDisclosure}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Capabilities"
          title="What you can actually do on it"
          description="Everything below is working software on the live site. Open it and try any of them."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.capabilities.map((item) => (
            <Card key={item.title}>
              <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Inside the build"
          title="The part a screenshot does not show"
          description="Engineering decisions that decide whether this kind of product survives its second year."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {product.insideTheBuild.map((item) => (
            <li
              key={item.slice(0, 40)}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-slate-300"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {relatedServices.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="The services behind it"
            title={`What building ${product.productName} proves we can do`}
            description="This product is the evidence for these service lines. Each page explains how we deliver it for a client."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <SectionHeading eyebrow="FAQ" title={`Questions about ${product.productName}`} />
          <div>
            <FaqAccordion faqs={product.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))} />
          </div>
        </div>
        <FaqSchema faqs={product.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))} />
      </Section>

      {others.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="More products" title="Other things we built and run" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
                  {item.showcase.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                  {item.productName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  View product
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={`Need something like ${product.productName}?`}
        description="Open the live build, decide what you would keep and what you would change, and send us the list. We will quote against that."
      />
    </>
  );
}
