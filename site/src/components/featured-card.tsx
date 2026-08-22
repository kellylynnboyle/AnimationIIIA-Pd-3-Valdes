import Image from "next/image";
import Link from "next/link";
import { thumbnailFor, type Project } from "@/data/projects";
import { StatusBadge } from "@/components/status-badge";

export function FeaturedCard({ project }: { project: Project }) {
  const thumbnail = thumbnailFor(project);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-line/70 bg-surface transition-all duration-300 hover:border-accent/50 md:grid-cols-5"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2 md:col-span-3 md:aspect-auto md:min-h-[22rem]">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.2),transparent_65%)]">
            <span className="font-display text-8xl font-bold text-line select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center gap-3 p-7 md:col-span-2 md:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-accent">
            Featured
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="font-display text-3xl font-bold leading-tight tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="text-xs uppercase tracking-widest text-muted">
          {project.unit}
        </p>

        <p className="leading-relaxed text-muted">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-line/70 px-2 py-0.5 text-xs text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
