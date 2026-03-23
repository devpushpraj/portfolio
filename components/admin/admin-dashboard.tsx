"use client";

import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import type { BlogPost, Project } from "@/lib/types";
import { blogSchema, projectSchema } from "@/lib/validations";

type ProjectValues = z.infer<typeof projectSchema>;
type BlogValues = z.infer<typeof blogSchema>;

export function AdminDashboard({
  initialProjects,
  initialBlogs
}: {
  initialProjects: Project[];
  initialBlogs: BlogPost[];
}) {
  const [projects, setProjects] = useState(initialProjects);
  const [blogs, setBlogs] = useState(initialBlogs);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [projectStatus, setProjectStatus] = useState("");
  const [blogStatus, setBlogStatus] = useState("");

  const projectForm = useForm<ProjectValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      tech_stack: [],
      image_url: "",
      github_url: "",
      live_url: ""
    }
  });

  const blogForm = useForm<BlogValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      tags: []
    }
  });

  const projectTechStack = projectForm.watch("tech_stack");
  const blogTags = blogForm.watch("tags");

  async function handleProjectSubmit(values: ProjectValues) {
    setProjectStatus("");
    const isEditing = Boolean(editingProjectId);
    const response = await fetch(
      isEditing ? `/api/projects/${editingProjectId}` : "/api/projects",
      {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      }
    );
    const result = await response.json();

    if (!response.ok) {
      setProjectStatus(result.error || "Unable to save project.");
      return;
    }

    setProjects((current) =>
      isEditing
        ? current.map((item) => (item.id === result.data.id ? result.data : item))
        : [result.data, ...current]
    );
    setProjectStatus(isEditing ? "Project updated." : "Project saved.");
    projectForm.reset();
    setEditingProjectId(null);
  }

  async function handleBlogSubmit(values: BlogValues) {
    setBlogStatus("");
    const isEditing = Boolean(editingBlogId);
    const response = await fetch(isEditing ? `/api/blogs/${editingBlogId}` : "/api/blogs", {
      method: isEditing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const result = await response.json();

    if (!response.ok) {
      setBlogStatus(result.error || "Unable to save blog post.");
      return;
    }

    setBlogs((current) =>
      isEditing
        ? current.map((item) => (item.id === result.data.id ? result.data : item))
        : [result.data, ...current]
    );
    setBlogStatus(isEditing ? "Blog post updated." : "Blog post saved.");
    blogForm.reset();
    setEditingBlogId(null);
  }

  async function handleDeleteProject(id: string) {
    const response = await fetch(`/api/projects/${id}`, { method: "DELETE" });
    if (response.ok) {
      setProjects((current) => current.filter((item) => item.id !== id));
    }
  }

  async function handleDeleteBlog(id: string) {
    const response = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    if (response.ok) {
      setBlogs((current) => current.filter((item) => item.id !== id));
    }
  }

  function startEditProject(project: Project) {
    setEditingProjectId(project.id);
    projectForm.reset({
      title: project.title,
      description: project.description,
      tech_stack: project.tech_stack,
      image_url: project.image_url,
      github_url: project.github_url,
      live_url: project.live_url
    });
    setProjectStatus("Editing existing project.");
  }

  function startEditBlog(blog: BlogPost) {
    setEditingBlogId(blog.id);
    blogForm.reset({
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      tags: blog.tags
    });
    setBlogStatus("Editing existing blog post.");
  }

  async function handleImageUpload(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    setUploading(false);

    if (!response.ok) {
      setProjectStatus(result.error || "Upload failed.");
      return;
    }

    projectForm.setValue("image_url", result.url, { shouldValidate: true });
    setProjectStatus("Image uploaded.");
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-8 xl:grid-cols-2">
        <section className="surface p-6">
          <h2 className="font-display text-2xl font-semibold">Manage Projects</h2>
          <form
            className="mt-6 space-y-4"
            onSubmit={projectForm.handleSubmit(handleProjectSubmit)}
          >
            <Input label="Title" error={projectForm.formState.errors.title?.message}>
              <input {...projectForm.register("title")} className="field" />
            </Input>
            <Input
              label="Description"
              error={projectForm.formState.errors.description?.message}
            >
              <textarea {...projectForm.register("description")} className="field min-h-28" />
            </Input>
            <Input
              label="Tech Stack (comma separated)"
              error={projectForm.formState.errors.tech_stack?.message as string | undefined}
            >
              <input
                className="field"
                value={projectTechStack.join(", ")}
                onChange={(event) =>
                  projectForm.setValue(
                    "tech_stack",
                    event.target.value
                      .split(",")
                      .map((value) => value.trim())
                      .filter(Boolean),
                    { shouldValidate: true }
                  )
                }
              />
            </Input>
            <Input label="Image URL" error={projectForm.formState.errors.image_url?.message}>
              <input {...projectForm.register("image_url")} className="field" />
            </Input>
            <div>
              <label className="mb-2 block text-sm font-medium">Upload Image</label>
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    void handleImageUpload(file);
                  }
                }}
              />
              {uploading ? <p className="mt-2 text-sm">Uploading...</p> : null}
            </div>
            <Input label="GitHub URL" error={projectForm.formState.errors.github_url?.message}>
              <input {...projectForm.register("github_url")} className="field" />
            </Input>
            <Input label="Live URL" error={projectForm.formState.errors.live_url?.message}>
              <input {...projectForm.register("live_url")} className="field" />
            </Input>
            {projectStatus ? <p className="text-sm">{projectStatus}</p> : null}
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white">
                {editingProjectId ? "Update Project" : "Save Project"}
              </button>
              {editingProjectId ? (
                <button
                  type="button"
                  onClick={() => {
                    setEditingProjectId(null);
                    setProjectStatus("");
                    projectForm.reset();
                  }}
                  className="rounded-full border border-border/70 px-5 py-3 text-sm font-medium"
                >
                  Cancel
                </button>
              ) : null}
            </div>
          </form>
        </section>

        <section className="surface p-6">
          <h2 className="font-display text-2xl font-semibold">Manage Blog Posts</h2>
          <form className="mt-6 space-y-4" onSubmit={blogForm.handleSubmit(handleBlogSubmit)}>
            <Input label="Title" error={blogForm.formState.errors.title?.message}>
              <input {...blogForm.register("title")} className="field" />
            </Input>
            <Input label="Slug" error={blogForm.formState.errors.slug?.message}>
              <input {...blogForm.register("slug")} className="field" />
            </Input>
            <Input label="Tags (comma separated)" error={blogForm.formState.errors.tags?.message as string | undefined}>
              <input
                className="field"
                value={blogTags.join(", ")}
                onChange={(event) =>
                  blogForm.setValue(
                    "tags",
                    event.target.value
                      .split(",")
                      .map((value) => value.trim())
                      .filter(Boolean),
                    { shouldValidate: true }
                  )
                }
              />
            </Input>
            <Input label="Content" error={blogForm.formState.errors.content?.message}>
              <textarea {...blogForm.register("content")} className="field min-h-56" />
            </Input>
            {blogStatus ? <p className="text-sm">{blogStatus}</p> : null}
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white">
                {editingBlogId ? "Update Blog Post" : "Save Blog Post"}
              </button>
              {editingBlogId ? (
                <button
                  type="button"
                  onClick={() => {
                    setEditingBlogId(null);
                    setBlogStatus("");
                    blogForm.reset();
                  }}
                  className="rounded-full border border-border/70 px-5 py-3 text-sm font-medium"
                >
                  Cancel
                </button>
              ) : null}
            </div>
          </form>
        </section>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <section className="surface p-6">
          <h3 className="font-display text-xl font-semibold">Current Projects</h3>
          <div className="mt-4 space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border/70 p-4"
              >
                <div>
                  <p className="font-medium">{project.title}</p>
                  <p className="text-sm text-foreground/70">{project.description}</p>
                </div>
                <div className="flex gap-3 text-sm">
                  <button onClick={() => startEditProject(project)}>Edit</button>
                  <button
                    onClick={() => void handleDeleteProject(project.id)}
                    className="text-rose-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="surface p-6">
          <h3 className="font-display text-xl font-semibold">Current Blog Posts</h3>
          <div className="mt-4 space-y-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border/70 p-4"
              >
                <div>
                  <p className="font-medium">{blog.title}</p>
                  <p className="text-sm text-foreground/70">{blog.slug}</p>
                </div>
                <div className="flex gap-3 text-sm">
                  <button onClick={() => startEditBlog(blog)}>Edit</button>
                  <button
                    onClick={() => void handleDeleteBlog(blog.id)}
                    className="text-rose-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Input({
  label,
  children,
  error
}: {
  label: string;
  children: ReactNode;
  error?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error ? <span className="text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}
