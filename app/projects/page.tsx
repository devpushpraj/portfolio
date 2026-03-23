import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects"
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="wrapper section-gap">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds across dashboards, publishing tools, and workflow products."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
