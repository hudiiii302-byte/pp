import Image from "next/image";
import Link from "next/link";
import type { BlogPost, Project, Service } from "@/lib/types";
import { ArrowRight, ClockIcon } from "@/components/icons";
import { MegaServiceIcon } from "@/components/mega-service-icon";
import { formatDate } from "@/lib/blog";

export function ServiceCard({
  service,
  tone = "light",
  showImage = false,
  premium = false,
}: {
  service: Service;
  tone?: "light" | "dark";
  showImage?: boolean;
  premium?: boolean;
}) {
  if (premium) {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group animate-tile-in relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-[0_24px_55px_-28px_rgba(28,168,48,0.45)]"
      >
        <span className="relative block aspect-[16/10] overflow-hidden bg-navy-800">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
          <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand-500/90 text-white ring-1 ring-white/20">
            <MegaServiceIcon monochrome slug={service.slug} className="h-5 w-5" />
          </span>
        </span>
        <span className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="relative text-base font-semibold leading-snug text-white transition-colors group-hover:text-brand-200">
          {service.title}
        </h3>
        <span className="relative mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">{service.summary}</span>
        <span className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-200">
            View {service.shortTitle}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-brand-300 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
          </span>
        </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ${
        tone === "dark"
          ? "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07]"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-38px_rgba(5,13,33,0.55)]"
      }`}
    >
      {showImage && (
        <span className="image-sheen relative -mx-px -mt-px block aspect-[16/9] overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand-500 text-white shadow-lg">
            <MegaServiceIcon monochrome slug={service.slug} className="h-5 w-5" />
          </span>
        </span>
      )}
      {!showImage && (
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
            tone === "dark"
              ? "bg-brand-400/12 text-brand-300 ring-1 ring-brand-400/20 group-hover:bg-brand-400/20"
              : "bg-brand-50 text-brand-600 ring-1 ring-brand-500/15 group-hover:bg-brand-100"
          }`}
        >
          <MegaServiceIcon slug={service.slug} className="h-6 w-6" />
        </span>
      )}
      <span className="flex flex-1 flex-col p-6">
        <h3 className={`text-lg font-semibold ${tone === "dark" ? "text-white" : "text-ink-900"}`}>
          {service.title}
        </h3>
        <span className={`mt-2.5 flex-1 text-sm leading-relaxed ${tone === "dark" ? "text-slate-400" : "text-ink-500"}`}>
          {service.summary}
        </span>
        <span
          className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
            tone === "dark" ? "text-brand-300" : "text-brand-600"
          }`}
        >
          View {service.shortTitle}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}

export type PostSummary = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "category" | "image" | "imageAlt" | "publishedAt" | "readingMinutes"
>;

export type ProjectSummary = Pick<
  Project,
  "slug" | "title" | "summary" | "category" | "industry" | "image" | "imageAlt" | "technologies" | "clientLabel"
>;

export function PostCard({ post, priority = false }: { post: PostSummary; priority?: boolean }) {
  return (
    <article className="group flex h-full animate-reveal flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-40px_rgba(5,13,33,0.6)]">
      <Link href={`/blog/${post.slug}`} className="image-sheen relative block aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          unoptimized={post.image.startsWith("/")}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/85 px-3 py-1 text-xs font-semibold text-brand-300 backdrop-blur">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-ink-300">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="inline-flex items-center gap-1">
            <ClockIcon className="h-3.5 w-3.5" /> {post.readingMinutes} min read
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-900">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function ProjectCard({ project, priority = false }: { project: ProjectSummary; priority?: boolean }) {
  return (
    <article className="group flex h-full animate-reveal flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-40px_rgba(5,13,33,0.6)]">
      <Link href={`/portfolio/${project.slug}`} className="image-sheen relative block aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          unoptimized={project.image.startsWith("/")}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/85 px-3 py-1 text-xs font-semibold text-brand-300 backdrop-blur">
          {project.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-300">{project.industry}</p>
          {"clientLabel" in project && project.clientLabel ? (
            <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[0.65rem] font-medium text-ink-400">
              {project.clientLabel}
            </span>
          ) : null}
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-ink-900">
          <Link href={`/portfolio/${project.slug}`} className="transition-colors hover:text-brand-700">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-md bg-slate-100 px-2 py-1 text-[0.7rem] font-medium text-ink-700">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/portfolio/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
