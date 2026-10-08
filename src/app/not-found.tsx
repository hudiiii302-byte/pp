import Link from "next/link";
import { ButtonLink } from "@/components/ui";
import { services } from "@/lib/services";
import { sortedPosts } from "@/lib/blog";
import { ArrowRight } from "@/components/icons";

export const metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found. Explore WordbitX services, portfolio and insights instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const popular = services.slice(0, 6);
  const posts = sortedPosts.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white">
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-brand-500/15 blur-[130px]" aria-hidden="true" />
      <div className="container-page relative">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Error 404</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          We could not find that page
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
          The link may be outdated or the address mistyped. Here are the most useful places to continue.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact WordbitX
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Popular services</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {popular.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-brand-400/50 hover:text-white"
                  >
                    {service.shortTitle}
                    <ArrowRight className="h-4 w-4 text-brand-400 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Latest insights</h2>
            <ul className="mt-4 space-y-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-brand-400/50 hover:text-white"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
