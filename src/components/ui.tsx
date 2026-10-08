import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckIcon } from "@/components/icons";
import { absoluteUrl } from "@/lib/site";

export function Section({
  children,
  className = "",
  tone = "light",
  id,
  /**
   * `content-visibility: auto` — lets the browser skip layout/paint for this
   * section while it is off screen. On by default because marketing pages here
   * are long; set `deferPaint={false}` for anything that must always be
   * measured (e.g. a section that is above the fold).
   */
  deferPaint = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "muted" | "dark";
  id?: string;
  deferPaint?: boolean;
}) {
  const toneClass =
    tone === "dark"
      ? "bg-navy-950 text-white"
      : tone === "muted"
        ? "bg-slate-50 text-ink-900"
        : "bg-white text-ink-900";
  return (
    <section
      id={id}
      className={`${toneClass} scroll-mt-24 py-12 sm:py-20 lg:py-24 ${deferPaint ? "defer-paint" : ""} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.14em] ${
        tone === "dark"
          ? "border-brand-400/30 bg-brand-400/10 text-brand-300"
          : "border-brand-500/20 bg-brand-50 text-brand-700"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={`mt-4 text-[1.65rem] font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          tone === "dark" ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${tone === "dark" ? "text-slate-300" : "text-ink-500"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2";

export function ButtonLink({ href, children, variant = "primary", className = "", external, ariaLabel }: ButtonProps) {
  const styles = {
    primary: "bg-brand-500 text-white shadow-[0_18px_40px_-20px_rgba(28,168,48,0.85)] hover:bg-brand-600 hover:-translate-y-0.5",
    secondary: "border border-navy-800/15 bg-white text-ink-900 hover:border-brand-400 hover:text-brand-700",
    ghost: "border border-white/20 bg-white/5 text-white hover:border-brand-400/60 hover:bg-white/10",
    light: "bg-white text-navy-900 hover:-translate-y-0.5 hover:bg-brand-50",
  }[variant];

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`${buttonBase} ${styles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={`${buttonBase} ${styles} ${className}`}>
      {content}
    </Link>
  );
}

export function Card({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-1000 ${
        tone === "dark"
          ? "border-white/10 bg-white/[0.04] hover:border-brand-400/40 hover:bg-white/[0.07]"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-38px_rgba(5,13,33,0.55)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function IconTile({
  children,
  tone = "light",
  size = "md",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl ${
        size === "lg" ? "h-14 w-14" : "h-12 w-12"
      } ${
        tone === "dark"
          ? "bg-brand-400/12 text-brand-300 ring-1 ring-brand-400/25"
          : "bg-brand-50 text-brand-600 ring-1 ring-brand-500/15"
      }`}
    >
      {children}
    </span>
  );
}

export function CheckList({
  items,
  tone = "light",
  columns = 1,
}: {
  items: string[];
  tone?: "light" | "dark";
  columns?: 1 | 2;
}) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              tone === "dark" ? "bg-brand-400/15 text-brand-300" : "bg-brand-50 text-brand-600"
            }`}
          >
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span className={`text-sm leading-relaxed ${tone === "dark" ? "text-slate-300" : "text-ink-700"}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((crumb, index) => {
          const isLast = index === all.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {isLast ? (
                <span className={tone === "dark" ? "text-brand-300" : "text-brand-700"} aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={`transition-colors ${
                    tone === "dark" ? "text-slate-400 hover:text-white" : "text-ink-500 hover:text-brand-700"
                  }`}
                >
                  {crumb.label}
                </Link>
              )}
              {!isLast && <span className={tone === "dark" ? "text-slate-600" : "text-slate-300"}>/</span>}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-12 pt-24 text-white sm:pb-20 sm:pt-32">
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 h-[26rem] w-[26rem] rounded-full bg-brand-500/16 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 max-w-3xl">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl lg:text-[3.1rem]">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
