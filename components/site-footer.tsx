import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="wrapper flex flex-col gap-4 rounded-[2rem] border border-border/50 bg-card/45 px-6 py-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-foreground/70">{siteConfig.title}</p>
        </div>
        <div className="flex gap-4 text-sm text-foreground/70">
          <Link href={siteConfig.socials.github}>GitHub</Link>
          <Link href={siteConfig.socials.linkedin}>LinkedIn</Link>
          <Link href={`mailto:${siteConfig.email}`}>Email</Link>
        </div>
      </div>
    </footer>
  );
}
