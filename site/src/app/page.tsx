import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { WorkCard } from "@/components/work-card";
import { FeaturedCard } from "@/components/featured-card";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-accent">
          {site.course} · {site.period}
        </p>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          {site.student}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            See the work
          </a>
          <Link
            href="/about"
            className="rounded-full border border-line px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:border-accent/60 hover:text-accent"
          >
            About me
          </Link>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-24">
        <div className="mb-8 flex items-baseline justify-between border-b border-line/60 pb-4">
          <h2 className="font-display text-2xl font-bold tracking-tight">Work</h2>
          <p className="text-sm text-muted">
            {projects.length} {projects.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        <div className="space-y-6">
          {featured.map((project) => (
            <FeaturedCard key={project.slug} project={project} />
          ))}

          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <WorkCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
