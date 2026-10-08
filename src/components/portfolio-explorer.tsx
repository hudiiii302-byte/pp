"use client";

import { useMemo, useState } from "react";
import { ProjectCard, type ProjectSummary } from "@/components/cards";

export function PortfolioExplorer({
  projects,
  categories,
}: {
  projects: ProjectSummary[];
  categories: string[];
}) {
  const [active, setActive] = useState(categories[0] ?? "All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return projects;
    return projects.filter((project) => project.category === active);
  }, [projects, active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((category) => {
          const count =
            category === "All Projects"
              ? projects.length
              : projects.filter((project) => project.category === category).length;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-slate-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {category}
              <span className={`ml-2 text-xs ${active === category ? "text-white/70" : "text-ink-300"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-ink-500" role="status">
        Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {active !== "All Projects" ? ` in ${active}` : ""}.
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h3 className="text-lg font-semibold text-ink-900">No projects in this category yet</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
            We publish new project profiles as engagements complete and clients approve the details.
          </p>
        </div>
      )}
    </div>
  );
}
