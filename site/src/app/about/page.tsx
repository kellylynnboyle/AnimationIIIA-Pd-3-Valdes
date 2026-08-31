import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: site.tagline,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-14">
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        About
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream/90">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-bold tracking-tight">
          Tools I work in
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {site.tools.map((tool) => (
            <li
              key={tool.name}
              className="rounded-xl border border-line/70 bg-surface p-4"
            >
              <p className="font-display font-medium">{tool.name}</p>
              <p className="mt-1 text-sm text-muted">{tool.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl border border-line/70 bg-surface p-6">
        <h2 className="font-display text-xl font-bold tracking-tight">Class</h2>
        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted">Course</dt>
            <dd className="mt-1">
              {site.course} · {site.period}
            </dd>
          </div>
          <div>
            <dt className="text-muted">School</dt>
            <dd className="mt-1">{site.school}</dd>
          </div>
          <div>
            <dt className="text-muted">Year</dt>
            <dd className="mt-1">{site.year}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
