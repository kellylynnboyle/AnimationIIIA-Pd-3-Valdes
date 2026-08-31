# Animation III A — Pd. 3 (Valdes) · 1959

Class repository for **Animation III A, Period 3** with Valdes at **Corona Del Mar High School** · Fall grading period: Aug 17 – Dec 18, 2026.

📚 **Official course page:** [Schoology — Course Materials](https://nmusd.schoology.com/course/8478718761/materials) (assignments are submitted there; this repo is for backing up and organizing the work itself)

This repo keeps animation work backed up, versioned, and organized by course unit — so a crashed laptop or an accidental overwrite never means lost work.

## Course tools

| Tool | Used for |
|---|---|
| [Toon Boom Harmony](https://www.toonboom.com/products/harmony) | 2D animation |
| [Storyboard Pro](https://www.toonboom.com/products/storyboard-pro) | Storyboarding & animatics |
| [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) | Digital art & assets |

Shortcut sheets and how-to links for each tool live in [`resources/`](resources/). Want to work from home? See [docs/install-tools-at-home.md](docs/install-tools-at-home.md) for installing the class tools (or free parallel alternatives) on your own computer.

## How this repo is organized

```
├── assignments/         # Work for each assignment, organized by week/unit
│   └── week-01-intro-to-animation/
├── course-materials/    # Mirror of the Schoology materials page (syllabus, PDFs, links)
├── resources/           # Tool guides, shortcuts, and course links
├── site/                # Portfolio website that shows off the finished work
└── docs/                # GitHub how-tos (cloning, committing, submitting)
```

## Portfolio site

[`site/`](site/) is a website that turns this work into a portfolio — a gallery of pieces, each with its own page for the video and your process notes. It's free to put online with Vercel, which makes it something you can hand to anyone: a college application, an internship, or family.

To add a piece, drop the export into `site/public/work/` and add an entry to `site/src/data/projects.ts`. Full instructions, including how to deploy it, are in [site/README.md](site/README.md).

## Getting started

1. New to GitHub? Read [docs/github-basics.md](docs/github-basics.md) first.
2. Clone this repo to your computer (instructions in that guide).
3. Save work for each assignment in its folder under `assignments/`, then commit and push.

See [docs/submitting-work.md](docs/submitting-work.md) for the workflow and export settings (what format to save animations in, what not to commit).

## Ground rules for files

- **Keep files under 100 MB** — GitHub blocks anything bigger. Export compressed `.mp4` (H.264) video, not uncompressed renders.
- **Don't commit caches or autosaves** — the `.gitignore` already blocks Harmony, Photoshop, and other app junk automatically.
- **Commit often with clear messages** — `Flipbook rough scan` beats `stuff`.

## License

Shared under the [MIT License](LICENSE). Original artwork remains the property of its creator.
