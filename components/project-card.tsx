import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/25">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-foreground/75">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-primary">
          <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2">
            View Details <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href={project.github_url} className="inline-flex items-center gap-2">
            <Github className="h-4 w-4" /> GitHub
          </Link>
          <Link href={project.live_url} className="inline-flex items-center gap-2">
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
