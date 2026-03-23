import type { BlogPost, Project } from "@/lib/types";

export const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "React",
  "Vercel",
  "Figma",
  "Prisma"
];

export const education = [
  {
    title: "B.Tech in Computer Science",
    subtitle: "Modern web systems, distributed computing, and product engineering",
    period: "2019 - 2023"
  }
];

export const goals = [
  "Design systems that scale across products and teams.",
  "Build reliable full-stack applications with performance and accessibility first.",
  "Write technical essays about practical software architecture."
];

export const projects: Project[] = [
  {
    id: "signal-board",
    title: "Signal Board",
    description:
      "Analytics dashboard for product teams with event funnels, retention cohorts, and anomaly alerts.",
    tech_stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    github_url: "https://github.com/pushpraj/signal-board",
    live_url: "https://signal-board.vercel.app",
    created_at: "2026-02-14",
    featured: true
  },
  {
    id: "hireflow",
    title: "Hireflow",
    description:
      "Applicant tracking workflow with interview stages, collaborative notes, and hiring insights.",
    tech_stack: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    image_url:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    github_url: "https://github.com/pushpraj/hireflow",
    live_url: "https://hireflow-app.vercel.app",
    created_at: "2026-01-10",
    featured: true
  },
  {
    id: "pulse-writer",
    title: "Pulse Writer",
    description:
      "Minimal markdown publishing platform with editorial workflows and performance-focused rendering.",
    tech_stack: ["Next.js", "MDX", "Supabase", "Vercel"],
    image_url:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    github_url: "https://github.com/pushpraj/pulse-writer",
    live_url: "https://pulse-writer.vercel.app",
    created_at: "2025-11-02",
    featured: true
  },
  {
    id: "ops-lens",
    title: "Ops Lens",
    description:
      "Internal tool for operations teams to track requests, SLAs, and recurring workloads across departments.",
    tech_stack: ["React", "Node.js", "Supabase", "Chart.js"],
    image_url:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    github_url: "https://github.com/pushpraj/ops-lens",
    live_url: "https://ops-lens.vercel.app",
    created_at: "2025-08-21"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Designing a portfolio that feels like software",
    slug: "designing-a-portfolio-that-feels-like-software",
    excerpt:
      "How to approach personal sites with the same product rigor used in serious SaaS work.",
    content: `# Designing a portfolio that feels like software

Your portfolio is a product surface. Treat it like one.

## Principles

- Optimize for clarity before decoration.
- Keep navigation obvious.
- Publish case studies that explain constraints and tradeoffs.

## Shipping details

\`\`\`ts
export const revalidate = 3600;
\`\`\`

Static generation keeps content fast, while server routes handle data mutations securely.`,
    tags: ["design", "portfolio", "architecture"],
    created_at: "2026-03-09",
    cover_image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "2",
    title: "Rate limiting forms in serverless apps",
    slug: "rate-limiting-forms-in-serverless-apps",
    excerpt:
      "A pragmatic pattern for throttling abuse on contact forms without adding heavy infrastructure.",
    content: `# Rate limiting forms in serverless apps

Serverless apps still need guardrails.

## The simple approach

Use an in-memory limiter for low-volume projects and layer provider protections where possible.

## Validation

Pair rate limits with schema validation and honeypot checks.`,
    tags: ["security", "serverless", "nextjs"],
    created_at: "2026-02-22",
    cover_image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "3",
    title: "Using Supabase storage for editorial workflows",
    slug: "using-supabase-storage-for-editorial-workflows",
    excerpt:
      "A practical setup for image uploads, signed access, and editorial asset management.",
    content: `# Using Supabase storage for editorial workflows

Storage is part of product UX.

## Why it matters

Editors need predictable uploads, clear validation, and stable URLs.

## Rules

- Validate mime type.
- Enforce size limits.
- Store public URLs only when intended.`,
    tags: ["supabase", "storage", "cms"],
    created_at: "2026-01-30",
    cover_image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80"
  }
];
