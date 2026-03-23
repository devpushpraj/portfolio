import { notFound } from "next/navigation";
import { blogPosts, projects } from "@/lib/mock-data";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import type { BlogPost, Project } from "@/lib/types";

export async function getProjects() {
  if (!hasSupabaseEnv()) {
    return projects;
  }

  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return projects;
    }

    return (data as Project[]) || projects;
  } catch {
    return projects;
  }
}

export async function getFeaturedProjects() {
  const allProjects = await getProjects();
  const featured = allProjects.filter((project) => project.featured);
  return (featured.length ? featured : allProjects).slice(0, 4);
}

export async function getProjectById(id: string) {
  const allProjects = await getProjects();
  const project = allProjects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return project;
}

export async function getBlogs() {
  if (!hasSupabaseEnv()) {
    return blogPosts;
  }

  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return blogPosts;
    }

    return ((data as BlogPost[]) || []).map((post) => ({
      ...post,
      excerpt:
        post.excerpt ||
        post.content.replace(/[#*_`>\-\n]/g, " ").trim().slice(0, 140) + "..."
    }));
  } catch {
    return blogPosts;
  }
}

export async function getLatestBlogs() {
  const posts = await getBlogs();
  return posts.slice(0, 3);
}

export async function getBlogBySlug(slug: string) {
  const posts = await getBlogs();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return post;
}
