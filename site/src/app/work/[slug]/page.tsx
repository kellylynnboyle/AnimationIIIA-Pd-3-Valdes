import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { MediaFrame } from "@/components/media-frame";
import { StatusBadge } from "@/components/status-badge";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-14">
      <Link
        href="/#work"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        ← All work
      </Link>

      <header className="mt-8 border-b border-line/60 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted">
            {project.unit}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted">
          {project.summary}
        </p>

        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-muted">Date</dt>
            <dd className="mt-0.5">{project.date}</dd>
          </div>
          <div>
            <dt className="text-muted">Made with</dt>
            <dd className="mt-0.5">{project.tools.join(", ")}</dd>
          </div>
        </dl>
      </header>

      {project.media && project.media.length > 0 ? (
        <div className="mt-10 space-y-6">
          {project.media.map((media) => (
            <MediaFrame key={media.src} media={media} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-line px-6 py-12 text-center">
          <p className="font-display text-lg font-medium">Nothing to show yet</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            When this piece is exported, drop the file into{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 text-cream">
              site/public/work/
            </code>{" "}
            and add a <code className="rounded bg-surface-2 px-1.5 py-0.5 text-cream">media</code>{" "}
            entry for it in{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 text-cream">
              src/data/projects.ts
            </code>
            .
          </p>
        </div>
      )}

      {project.description && (
        <div className="mt-12 space-y-5 text-base leading-relaxed text-cream/90">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {project.process && project.process.length > 0 && (
        <section className="mt-12 rounded-2xl border border-line/70 bg-surface p-6">
          <h2 className="font-display text-lg font-bold">Process notes</h2>
          <ul className="mt-4 space-y-3">
            {project.process.map((note) => (
              <li key={note} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {note}
              </li>
            ))}
          </ul>
        </section>
      )}

      {(previous || next) && (
        <nav className="mt-16 flex justify-between gap-6 border-t border-line/60 pt-8 text-sm">
          {previous ? (
            <Link
              href={`/work/${previous.slug}`}
              className="group max-w-[45%] text-left"
            >
              <span className="text-muted">← Previous</span>
              <span className="mt-1 block font-display font-medium transition-colors group-hover:text-accent">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group max-w-[45%] text-right"
            >
              <span className="text-muted">Next →</span>
              <span className="mt-1 block font-display font-medium transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
