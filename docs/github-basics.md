# GitHub Basics

New to GitHub? This page gets you from zero to working in the class repo.

## What is this thing?

- **Git** tracks versions of files, so you can see history and never lose work.
- **GitHub** hosts our shared copy of those files online.
- This **repository (repo)** is the class's shared folder of files, with full history.

## One-time setup

### Option A: GitHub Desktop (recommended if you're new)

1. Sign in to your GitHub account at [github.com](https://github.com).
2. Install [GitHub Desktop](https://desktop.github.com/).
3. In GitHub Desktop: **File → Clone Repository**, pick `AnimationIIIA-Pd-3-Valdes`, and choose where to save it on your computer.

### Option B: Command line

```bash
git clone https://github.com/kellylynnboyle/AnimationIIIA-Pd-3-Valdes.git
cd AnimationIIIA-Pd-3-Valdes
```

## The everyday workflow

Every work session follows the same loop:

1. **Pull first.** Get the latest changes before you start.
   - GitHub Desktop: click **Fetch origin**, then **Pull origin** if it appears.
   - Command line: `git pull`
2. **Do your work** and save files into the right assignment folder under `assignments/`.
3. **Commit** your changes with a short message describing what you did.
   - GitHub Desktop: check your changed files, type a summary (e.g. `Flipbook final video`), click **Commit to main**.
   - Command line: `git add assignments/` then `git commit -m "Flipbook final video"`
4. **Push** so your work is backed up on GitHub.
   - GitHub Desktop: click **Push origin**.
   - Command line: `git push`

## Things to watch out for

- **Pull before you push.** If you work from more than one computer (home + school lab), always pull first so the computers don't fight over versions.
- **File size limit: 100 MB per file.** Export compressed `.mp4` video (H.264) instead of uncompressed renders.
- **Commit often.** Small, frequent commits are easier to recover from than one giant end-of-week commit.
