"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-2xl">
      <div className="wrapper flex h-[4.5rem] items-center justify-between py-3">
        <Link href="/" className="font-display text-lg font-semibold" onClick={() => setIsOpen(false)}>
          Pushpraj<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-border/60 bg-card/60 p-1.5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition hover:bg-muted/80",
                pathname === link.href && "bg-primary text-white shadow-sm"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="rounded-full border border-border/70 bg-card/70 p-2 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav className="wrapper flex flex-col gap-2 border-t border-border/60 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-sm transition hover:bg-muted",
                pathname === link.href && "bg-primary text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
