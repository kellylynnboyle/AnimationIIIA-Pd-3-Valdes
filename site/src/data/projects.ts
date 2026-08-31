export type Media = {
  kind: "video" | "image";
  /** Path to a file in the public/ folder, e.g. "/work/flipbook.mp4" */
  src: string;
  /** Still frame shown before a video plays. Optional but makes the page look better. */
  poster?: string;
  alt?: string;
  caption?: string;
};

export type ProjectStatus = "published" | "in-progress" | "planned";

export type Project = {
  /** Used in the URL: /work/<slug>. Lowercase, dashes, no spaces. */
  slug: string;
  title: string;
  unit: string;
  date: string;
  tools: string[];
  /** One line, shown on the card in the gallery. */
  summary: string;
  /** Paragraphs shown on the project page. */
  description?: string[];
  /** Short notes on your process — what was hard, what you'd change. */
  process?: string[];
  media?: Media[];
  featured?: boolean;
  status: ProjectStatus;
};

// ─────────────────────────────────────────────────────────────────────────────
// ADD YOUR WORK HERE.
//
// 1. Drop your exported file into site/public/work/ (e.g. flipbook.mp4)
// 2. Copy one of the entries below and change it
// 3. Point `src` at your file: "/work/flipbook.mp4"
//
// Entries with no `media` yet still show up in the gallery as a placeholder
// tile, so you can plan pieces before you've finished them.
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "flipbook",
    title: "Make a Flipbook!",
    unit: "Week 1 · Intro to Animation",
    date: "August 2026",
    tools: ["Paper", "Pencil"],
    summary:
      "Hand-drawn flipbook — the first assignment of the year and a reminder that animation is still just drawings in a row.",
    featured: true,
    status: "in-progress",
    description: [
      "Our first assignment: build a flipbook by hand. No software, no undo button — just paper, a pencil, and however many pages it takes to sell the movement.",
      "Replace this text with what you actually made: what the idea was, how many pages it ended up being, and whether it read the way you pictured it.",
    ],
    process: [
      "Write a note here about what was hardest — spacing, registration, keeping volumes consistent.",
      "And one about what you'd do differently with more pages or more time.",
    ],
    // When your video is ready, uncomment this and drop the file in public/work/:
    // media: [{ kind: "video", src: "/work/flipbook.mp4", poster: "/work/flipbook-poster.jpg" }],
  },
  {
    slug: "reflection-and-direction",
    title: "Reflection and Direction",
    unit: "Week 1 · Intro to Animation",
    date: "August 2026",
    tools: ["Writing"],
    summary:
      "Looking at the animation and entertainment design career map, and picking a direction for the year.",
    status: "in-progress",
    description: [
      "A written reflection on where I want this year to go — which parts of the animation pipeline pull at me, and what I want to be noticeably better at by June.",
      "Swap this out for a few lines from your actual reflection.",
    ],
  },
  {
    slug: "walk-cycle",
    title: "Walk Cycle",
    unit: "Coming up",
    date: "Fall 2026",
    tools: ["Toon Boom Harmony"],
    summary:
      "A character walk cycle in Harmony — weight, contact poses, and getting the passing position to feel right.",
    status: "planned",
    description: [
      "Not started yet. This is an example of how to line up a piece before you make it — delete it or replace it with whatever your class assigns next.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Poster frame if there is one, otherwise the first still. Undefined until media is added. */
export function thumbnailFor(project: Project): string | undefined {
  const withPoster = project.media?.find((item) => item.poster);
  if (withPoster?.poster) return withPoster.poster;

  return project.media?.find((item) => item.kind === "image")?.src;
}
