import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { SkillBadge } from "@/components/skill-badge";
import { education, goals, skills } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div className="wrapper section-gap space-y-16">
      <section>
        <SectionHeading
          eyebrow="About"
          title="I build software with a product lens, not just a shipping checklist."
          description="My work sits at the intersection of engineering rigor, UI craft, and systems thinking. I prefer simple architectures that are easy to maintain, secure by default, and pleasant to use."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface p-8">
            <h3 className="font-display text-2xl font-semibold">Bio</h3>
            <p className="mt-4 leading-8 text-foreground/75">
              I’m a full-stack developer focused on modern web applications. My
              projects usually combine strong UX, pragmatic backend design, and
              a bias toward maintainable systems. I care about performance,
              accessibility, and making product decisions that stay coherent as
              the surface area grows.
            </p>
          </div>
          <div className="surface p-8">
            <h3 className="font-display text-2xl font-semibold">Goals</h3>
            <ul className="mt-4 space-y-4 text-foreground/75">
              {goals.map((goal) => (
                <li key={goal} className="rounded-2xl bg-muted/50 p-4">
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Skills"
          title="Core tools"
          description="Frontend systems, backend workflows, and deployment infrastructure I use regularly."
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="surface p-8">
          <h3 className="font-display text-2xl font-semibold">Tech Stack</h3>
          <div className="mt-5 grid gap-3 text-sm text-foreground/75">
            <p>Frontend: Next.js, React, TypeScript, Tailwind CSS</p>
            <p>Backend: Supabase, PostgreSQL, API Routes, Auth</p>
            <p>Infra: Vercel, storage pipelines, caching, analytics</p>
            <p>Workflow: GitHub, Figma, testing, design systems</p>
          </div>
        </div>
        <div className="surface p-8">
          <h3 className="font-display text-2xl font-semibold">Education</h3>
          <div className="mt-5 space-y-4">
            {education.map((item) => (
              <div key={item.title} className="rounded-2xl bg-muted/50 p-4">
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-foreground/70">{item.subtitle}</p>
                <p className="mt-2 text-sm text-primary">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
