import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { DemoShot } from "@/components/demo-shot";
import { ArrowRight, GlobeIcon, CheckIcon } from "@/components/icons";
import { products, productsIntro } from "@/lib/products";
import { demosDisclosure, showcaseRel } from "@/lib/demos";
import { demoPreview } from "@/lib/demo-shots";
import { seoTitleAbsolute } from "@/lib/seo-title";

const metaTitle = "Our Products — Software WordbitX Built and Runs";
const metaDescription =
  "Seven products built by WordbitX: a live Pakistan property marketplace, an automotive marketplace, a school ERP, a clinic platform and more. All openable.";

export const metadata: Metadata = {
  title: seoTitleAbsolute(metaTitle),
  description: metaDescription,
  alternates: { canonical: "/products" },
  openGraph: { url: "/products", title: metaTitle, description: metaDescription },
};

export default function ProductsPage() {
  const live = products.filter((item) => item.showcase.kind === "live");
  const showcases = products.filter((item) => item.showcase.kind !== "live");

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Software we built, and still run"
        description={productsIntro}
        crumbs={[{ label: "Products", href: "/products" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Discuss Your Project</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Browse all services
          </ButtonLink>
        </div>
        <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: `${products.length}`, v: "products built" },
            { k: `${live.length}`, v: "live and trading" },
            { k: "100%", v: "openable, no call first" },
            { k: "0", v: "stock templates used" },
          ].map((stat) => (
            <div key={stat.v} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <dt className="text-2xl font-semibold text-white">{stat.k}</dt>
              <dd className="mt-1 text-xs leading-relaxed text-slate-400">{stat.v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section deferPaint={false}>
        <SectionHeading
          eyebrow="Live Product"
          title="The one that is not a showcase"
          description="Properties Pak is a real, publicly trading platform that we own and operate. It is the strongest answer we can give to 'can you actually build this?'"
        />
        <div className="mt-10 grid gap-8">
          {live.map((product) => (
            <ProductRow key={product.slug} product={product} priority />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Platform Builds"
          title="Six platforms you can open and click through"
          description="Each one is a complete build with real software behind it — search, booking, checkout, dashboards. The businesses they describe are illustrative; the engineering is not."
        />
        <div className="mt-10 grid gap-8">
          {showcases.map((product) => (
            <ProductRow key={product.slug} product={product} priority={false} />
          ))}
        </div>
        <p className="mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 text-xs leading-relaxed text-ink-500">
          {demosDisclosure}
        </p>
      </Section>

      <CtaBand
        title="Want one of these for your business?"
        description="Tell us which product is closest to what you need. We will send back a scope, a timeline and a price — against the build you just clicked through, not a brochure."
      />
    </>
  );
}

function ProductRow({
  product,
  priority,
}: {
  product: (typeof products)[number];
  priority: boolean;
}) {
  const { showcase } = product;
  const isLive = showcase.kind === "live";
  const preview = demoPreview(showcase);

  return (
    <article className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-950"
        aria-label={`${product.productName} product details`}
      >
        <span aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${showcase.accent ?? "from-navy-800 via-navy-700 to-brand-600"} opacity-90`} />
        <DemoShot
          src={preview.src}
          alt={
            preview.isCover
              ? `Illustration representing ${product.productName}`
              : `${product.productName} — screenshot of the live site`
          }
          priority={priority}
        />
      </Link>

      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${
              isLive ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-600"
            }`}
          >
            {showcase.label}
          </span>
          <span className="text-xs font-medium text-ink-500">{showcase.category}</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-ink-900 sm:text-2xl">
          <Link href={`/products/${product.slug}`} className="transition-colors hover:text-brand-700">
            {product.productName}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{product.tagline}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {product.capabilities.slice(0, 4).map((item) => (
            <li key={item.title} className="flex gap-2 text-sm text-ink-700">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            How we built it
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={showcase.url}
            target="_blank"
            rel={showcaseRel(showcase.url)}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
          >
            <GlobeIcon className="h-4 w-4" />
            {showcase.host}
          </a>
        </div>
      </div>
    </article>
  );
}
