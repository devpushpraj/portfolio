import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { SkillBadge } from "@/components/skill-badge";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { getFeaturedProjects, getLatestBlogs } from "@/lib/data";
import { skills } from "@/lib/mock-data";

export default async function HomePage() {
  const [featuredProjects, latestBlogs] = await Promise.all([
    getFeaturedProjects(),
    getLatestBlogs()
  ]);

  return (
    <>
      <HeroSection />

      <section className="section-gap">
        <div className="wrapper">
          <div className="section-panel px-6 py-8 sm:px-10 sm:py-10">
            <SectionHeading
              eyebrow="Skills & Tools"
              title="The stack I reach for when building products that need to move fast and hold up."
              description="From UI architecture to backend delivery, I favor tools that keep the product elegant under pressure."
            />
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="wrapper">
          <div className="mb-10 flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Featured Work"
              title="A few product systems and interfaces I’ve built recently."
            />
            <Link href="/projects" className="hidden text-sm font-medium sm:block">
              View all projects
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="wrapper">
          <div className="mb-10 flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Writing"
              title="Recent notes on product engineering, system design, and practical frontend work."
            />
            <Link href="/blog" className="hidden text-sm font-medium sm:block">
              Browse all posts
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="wrapper">
          <div className="section-panel grid gap-6 px-8 py-8 sm:grid-cols-[1fr_auto] sm:items-center sm:px-10 sm:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-secondary">Start a Project</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Need a polished portfolio, internal tool, or content-driven product?
              </h2>
              <p className="mt-4 max-w-2xl text-foreground/75">
                I work across UX, frontend systems, backend integrations, and
                shipping discipline.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-fit rounded-full bg-primary px-6 py-3 text-sm font-medium text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
