import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { getProjectById, getProjects } from "@/lib/data";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  return (
    <div className="wrapper section-gap">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Project Detail</p>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-foreground/75">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tech_stack.map((tech) => (
              <span key={tech} className="rounded-full bg-muted px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link href={project.github_url} className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link href={project.live_url} className="inline-flex items-center gap-2">
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="surface relative min-h-80 overflow-hidden p-4">
          <div className="relative h-full min-h-72 overflow-hidden rounded-[1.5rem]">
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
