"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/types";
import { BlogCard } from "@/components/blog-card";

export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = useMemo(() => {
    const unique = new Set(posts.flatMap((post) => post.tags));
    return ["all", ...Array.from(unique)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);
      const matchesQuery =
        query.length === 0 ||
        `${post.title} ${post.excerpt} ${post.tags.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchesTag && matchesQuery;
    });
  }, [posts, query, selectedTag]);

  return (
    <div className="space-y-8">
      <div className="surface flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search posts..."
          className="h-12 w-full rounded-2xl border bg-background px-4 outline-none sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedTag === tag
                  ? "bg-primary text-white"
                  : "border border-border/70 bg-card"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {filteredPosts.length === 0 ? (
        <div className="surface p-8 text-center text-sm text-foreground/70">
          No posts match your current filters.
        </div>
      ) : null}
    </div>
  );
}
