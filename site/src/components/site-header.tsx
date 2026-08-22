import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="font-display text-lg font-bold tracking-tight">
            {site.student}
          </span>
          <span className="hidden text-sm text-muted transition-colors group-hover:text-accent sm:inline">
            {site.course}
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
