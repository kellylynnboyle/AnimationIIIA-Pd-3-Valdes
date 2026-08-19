# Saving & Submitting Your Work

Assignments are officially submitted on [Schoology](https://nmusd.schoology.com/course/8478718761/materials). This repo is your backup and portfolio — every version of your work, safe and organized.

## For each assignment

1. **Pull** the latest changes (see [github-basics.md](github-basics.md)).
2. Find (or create) the assignment's folder under `assignments/week-XX-unit-name/assignment-name/`.
3. Put your work in it. A typical folder:
   - Your exported animation as `.mp4` (H.264) or `.gif`
   - Your project file (`.xstage` Harmony scene, `.sboard`, `.psd`, etc.) if it's under 100 MB
   - `notes.md` — what you were going for, what was hard, what you'd improve
4. **Commit** with a clear message, e.g. `Flipbook final video + page scans`.
5. **Push.**
6. Check the GitHub website to confirm your files are there — then submit on Schoology as usual.

## Export settings cheat sheet

| Deliverable | Format | Why |
|---|---|---|
| Final animation | `.mp4` (H.264, 1080p or 720p) | Small, plays everywhere, previews on GitHub |
| Short loops / flipbook | `.gif` or `.mp4` | Previews right in the repo |
| Stills / boards / scans | `.png` or `.jpg` | Previews right in the repo |
| Project file | Native format (`.xstage`, `.sboard`, `.psd`, …) | So you can reopen and keep working anywhere |

**Don't commit:** render caches, autosave folders, uncompressed video, or image sequences with hundreds of frames. The repo's `.gitignore` blocks most of these automatically. GitHub rejects any single file over **100 MB**.
