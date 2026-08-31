# Animation III A — Repo Guide

This is a **class repository**, not a software project. It backs up and organizes animation coursework for Animation III A, Period 3 (Valdes) at Corona Del Mar High School. Most files here are Markdown notes plus exported animation media.

Assignments are officially submitted on **Schoology**; this repo is the backup and portfolio. Never describe pushing to GitHub as "submitting the assignment."

## Structure

```
├── assignments/         # Student work, by week/unit — the only folder that grows regularly
│   └── week-XX-unit-name/
│       └── assignment-name/     # exports + project file + notes.md
├── course-materials/    # Mirror of the Schoology materials page (syllabus, links)
├── resources/           # Tool guides and shortcut sheets (Harmony, Storyboard Pro, Photoshop)
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

## Audience

The people using this repo are high school animation students, many of them new to Git and working on **Windows**. Documentation should be written for them: plain language, no assumed command-line background, and no setup that depends on symlinks or Unix-only tooling.

See [`docs/github-basics.md`](docs/github-basics.md) and [`docs/submitting-work.md`](docs/submitting-work.md) for the workflows students are told to follow — keep any instructions you write consistent with those.
