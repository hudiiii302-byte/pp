"use client";

import { useMemo, useState } from "react";
import { PostCard, type PostSummary } from "@/components/cards";
import { SearchIcon, CloseIcon } from "@/components/icons";

export function BlogExplorer({
  posts,
  categories,
  initialQuery = "",
  initialCategory = "All",
}: {
  posts: PostSummary[];
  categories: string[];
  initialQuery?: string;
  initialCategory?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "All",
  );

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        term.length === 0 ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-ink-300 hover:text-ink-700"
              aria-label="Clear search"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === item
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-slate-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-500" role="status">
        Showing {filtered.length} of {posts.length} articles
        {category !== "All" ? ` in ${category}` : ""}
        {query ? ` matching “${query}”` : ""}.
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <PostCard key={post.slug} post={post} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h3 className="text-lg font-semibold text-ink-900">No articles match that search</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
            Try a different keyword or clear the filters. If you are looking for guidance on a specific topic, contact us
            and we will point you to the right resource.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-400 hover:text-brand-700"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
