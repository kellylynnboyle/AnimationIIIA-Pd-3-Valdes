# Animation III A — Repo Guide

This repository backs up and organizes animation coursework for Animation III A, Period 3 (Valdes) at Corona Del Mar High School. Most of it is Markdown notes plus exported animation media — with one exception: `site/` is a real Next.js app, covered below.

Assignments are officially submitted on **Schoology**; this repo is the backup and portfolio. Never describe pushing to GitHub as "submitting the assignment."

## Structure

```
├── assignments/         # Student work, by week/unit — the only folder that grows regularly
│   └── week-XX-unit-name/
│       └── assignment-name/     # exports + project file + notes.md
├── course-materials/    # Mirror of the Schoology materials page (syllabus, links)
├── resources/           # Tool guides and shortcut sheets (Harmony, Storyboard Pro, Photoshop)
├── site/                # Next.js portfolio site presenting the finished work
└── docs/                # GitHub how-tos for students
```

## Before editing

Read the `README.md` in the folder you're working in, and the ones above it, before creating or changing files there. Each folder documents its own local conventions — `assignments/README.md` defines the week-folder naming, `assignments/week-01-intro-to-animation/README.md` tracks that week's assignment table and due dates.

## Conventions

**New assignment folders** follow `assignments/week-XX-unit-name/assignment-name/`, all lowercase with hyphens. When you add one, also add its row to that week's `README.md` table. When a new week opens, create `week-XX-name/` with a `README.md` listing the assignments and due dates from Schoology.

**Every assignment folder gets a `notes.md`** — what the student was going for, what was hard, what they'd improve. This is part of the coursework, not optional metadata.

**Commit messages** describe the work in plain language: `Flipbook final video + page scans`, not `stuff` or `update files`.

## File rules

These are hard constraints, not preferences:

- **Nothing over 100 MB** — GitHub rejects it outright.
- **Video exports as `.mp4` (H.264, 1080p or 720p)**, never uncompressed renders.
- **Stills as `.png` or `.jpg`**; short loops as `.gif` or `.mp4`. These preview directly on GitHub.
- **Project files** (`.xstage`, `.sboard`, `.psd`) are committed in native format only if under 100 MB.
- **Never commit** render caches, autosave folders, or image sequences of hundreds of frames.

`.gitignore` already blocks app caches and autosaves for Harmony, Photoshop, Premiere, After Effects, Blender, and Maya. `.gitattributes` marks media and project files as binary so Git doesn't corrupt them with line-ending conversion. When adding support for a new tool, extend both files rather than working around them.

The same limits apply to media committed for the portfolio site under `site/public/work/` — it is served straight from the repo, so an oversized export breaks the push, not just the page.

## Portfolio site (`site/`)

The one part of this repo that is real code. It presents the coursework as a portfolio: a gallery home page, a page per piece with video playback and process notes, and an about page.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript 5 · ESLint 9. Exact versions are pinned in `site/package.json`; read it rather than assuming.

**Adding work is data, not code.** A piece is one entry in `site/src/data/projects.ts` plus a file in `site/public/work/`. Entries with no `media` render as placeholder tiles, so upcoming pieces can be lined up before they're finished. Adding or updating work should never require editing a page or component.

**Don't write these APIs from memory.** Next.js 16, React 19, and Tailwind v4 all postdate most training data and changed conventions from the versions you likely recall. Check the installed packages — Next.js ships its own guides under `site/node_modules/next/dist/docs/` — before writing code, and heed deprecation notices.

**`site/` documents its own rules.** `site/CLAUDE.md` imports `site/AGENTS.md`, which carries a block that `next dev` generates and re-adds automatically. Those conventions take precedence inside `site/`; leave the generated block in place rather than stripping it from a diff.

**Verify before committing** changes under `site/`: run `npm run lint` and `npm run build` there. `site/.gitignore` already excludes `node_modules/` and `.next/` — never commit either.

## Web search tools

`.mcp.json` configures two web search servers for AI sessions in this repo. Route queries to the one that fits so lookups stay fast and free-tier limits aren't wasted:

- **Parallel** (`web_search`, `web_fetch`) — default for everyday lookups: current facts, news, comparisons, troubleshooting. Free without an API key; answer from search excerpts when they suffice instead of fetching every result.
- **Exa** (`web_search_exa`, `web_fetch_exa`, `web_search_advanced_exa`, `agent_run`) — use for semantic queries ("a tutorial that explains X like Y"), code/documentation lookups, people or company searches, and filtered searches (domain, date, category) via the advanced tool. `agent_run` is usage-billed and needs the user signed in to Exa — don't call it for anything a plain search answers.

Neither server has an API key in this repo, and none should ever be committed here.

## Audience

The people using this repo are high school animation students, many of them new to Git and working on **Windows**. Documentation should be written for them: plain language, no assumed command-line background, and no setup that depends on symlinks or Unix-only tooling.

See [`docs/github-basics.md`](docs/github-basics.md) and [`docs/submitting-work.md`](docs/submitting-work.md) for the workflows students are told to follow — keep any instructions you write consistent with those.
