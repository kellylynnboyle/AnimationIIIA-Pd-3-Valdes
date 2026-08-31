import { site } from "@/data/site";

export function SiteFooter() {
  const socials = [
    { href: site.links.github, label: "GitHub" },
    { href: site.links.instagram, label: "Instagram" },
    { href: site.links.email ? `mailto:${site.links.email}` : "", label: "Email" },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.course} · {site.period}
          <span className="mx-2 text-line">/</span>
          {site.school}
          <span className="mx-2 text-line">/</span>
          {site.year}
        </p>

        {socials.length > 0 && (
          <nav className="flex gap-5">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
