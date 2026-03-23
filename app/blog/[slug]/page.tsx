import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { getBlogBySlug, getBlogs } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  return (
    <article className="wrapper section-gap max-w-3xl">
      <div className="surface p-8 sm:p-10">
        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-foreground/60">{formatDate(post.created_at)}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-foreground/75">{post.excerpt}</p>
        <div className="markdown-content mt-10 leading-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
