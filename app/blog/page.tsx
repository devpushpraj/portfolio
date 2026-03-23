import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { BlogFilters } from "@/components/blog-filters";
import { getBlogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog"
};

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <div className="wrapper section-gap">
      <SectionHeading
        eyebrow="Blog"
        title="Writing about systems, interfaces, and the practical choices behind good software."
      />
      <BlogFilters posts={posts} />
    </div>
  );
}
