import type { MetadataRoute } from "next";
import { getBlogs, getProjects } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);
  const baseRoutes = ["", "/about", "/projects", "/blog", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    lastModified: new Date(project.created_at)
  }));

  const blogRoutes = blogs.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.created_at)
  }));

  return [...baseRoutes, ...projectRoutes, ...blogRoutes];
}
