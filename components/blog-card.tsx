import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25">
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-foreground/60">{formatDate(post.created_at)}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold">{post.title}</h3>
      <p className="mt-3 text-sm leading-6 text-foreground/75">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
      >
        Read post <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
