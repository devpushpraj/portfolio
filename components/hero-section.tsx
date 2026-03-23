import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden section-gap pt-10 sm:pt-14">
      <div className="wrapper">
        <div className="section-panel grid items-center gap-12 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-14">
          <div className="animate-fadeUp space-y-8">
            <div className="inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Full-stack engineer focused on product clarity, performance, and durable systems.
            </div>
            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-secondary">
                Portfolio 2026
              </p>
              <h1 className="text-balance font-display text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl">
                Building digital products that feel precise, fast, and unmistakably premium.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-foreground/75 sm:text-lg">
                I design and ship fast, reliable web applications with Next.js,
                Supabase, and thoughtful UX. This portfolio is structured around
                production-ready systems, sharp interfaces, and the discipline to
                deliver them cleanly.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Let&apos;s Work Together <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.socials.github}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-6 py-3 text-sm font-medium backdrop-blur transition hover:border-primary/30 hover:bg-card"
              >
                View Resume <Download className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "5+", label: "Years shipping products" },
                { value: "20+", label: "Interfaces delivered" },
                { value: "100%", label: "Built for real-world use" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-border/60 bg-background/70 px-5 py-4 backdrop-blur"
                >
                  <p className="font-display text-3xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-1 text-sm text-foreground/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 animate-float rounded-[2.5rem] bg-gradient-to-br from-secondary/35 via-primary/10 to-primary/30 blur-3xl" />
            <div className="surface grid-overlay overflow-hidden rounded-[2.25rem] p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
                  alt="Portrait of Pushpraj Singh"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Based in India</p>
                  <p className="mt-2 font-display text-2xl font-semibold">
                    Designing systems people actually enjoy using.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/55">Focus</p>
                  <p className="mt-2 text-sm font-medium">Product design, frontend systems, and backend integrations.</p>
                </div>
                <div className="rounded-[1.5rem] border border-border/60 bg-primary px-4 py-4 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">Availability</p>
                  <p className="mt-2 text-sm font-medium">Open to selected freelance and product build engagements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
