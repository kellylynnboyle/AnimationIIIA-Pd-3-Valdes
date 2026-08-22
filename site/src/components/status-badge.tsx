import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, { label: string; className: string }> = {
  published: {
    label: "Finished",
    className: "border-accent/40 bg-accent/10 text-accent-soft",
  },
  "in-progress": {
    label: "In progress",
    className: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  },
  planned: {
    label: "Planned",
    className: "border-line bg-surface-2 text-muted",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, className } = styles[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}
