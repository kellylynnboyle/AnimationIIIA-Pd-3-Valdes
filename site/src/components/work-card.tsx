import Image from "next/image";
import Link from "next/link";
import { thumbnailFor, type Project } from "@/data/projects";
import { StatusBadge } from "@/components/status-badge";

export function WorkCard({ project }: { project: Project }) {
  const thumbnail = thumbnailFor(project);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.18),transparent_60%)]">
            <span className="font-display text-6xl font-bold text-line select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        <div className="absolute left-4 top-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs uppercase tracking-widest text-muted">
          {project.unit}
        </p>
        <h3 className="font-display text-xl font-bold leading-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
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
