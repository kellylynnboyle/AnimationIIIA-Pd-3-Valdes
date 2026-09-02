# Portfolio Site

A portfolio site for the animation work in this repo, built with [Next.js](https://nextjs.org). It shows a gallery of pieces, with a page for each one that plays the video and holds your process notes.

## Run it on your computer

You need [Node.js](https://nodejs.org) installed (version 20 or newer). Then, from this `site/` folder:

```bash
npm install     # first time only
npm run dev
```

Open **http://localhost:3000**. Edits show up as soon as you save.

## Make it yours

Everything you'd want to change lives in two files — you don't have to touch any of the page code.

### 1. Your name and bio → `src/data/site.ts`

Change `student` and `tagline` first; those show up on the home page. Then rewrite the `about` paragraphs and fill in any links you want in the footer (leave a link `""` to hide it).

### 2. Your work → `src/data/projects.ts`

Each piece is one entry in the `projects` list. To add a new one, copy an existing entry and change it:

```ts
{
  slug: "walk-cycle",                    // becomes the URL: /work/walk-cycle
  title: "Walk Cycle",
  unit: "Week 4 · Character Animation",
  date: "September 2026",
  tools: ["Toon Boom Harmony"],
  summary: "One line for the gallery card.",
  status: "published",                   // "published" | "in-progress" | "planned"
  description: [
    "A paragraph about the piece.",
    "Another paragraph.",
  ],
  process: [
    "What was hard.",
    "What you'd do differently.",
  ],
  media: [
    { kind: "video", src: "/work/walk-cycle.mp4", poster: "/work/walk-cycle.jpg" },
  ],
}
```

Add `featured: true` to any piece you want shown large at the top of the gallery.

### 3. Your files → `public/work/`

Drop exports into `public/work/`, then point `src` at them starting with `/work/`. A file saved as `public/work/flipbook.mp4` is referenced as `"/work/flipbook.mp4"`.

- **Video:** `.mp4` (H.264). Also add a `poster` image so the card has a thumbnail instead of a black rectangle.
- **Stills:** `.png` or `.jpg`, with `kind: "image"`.

A piece with no `media` yet still appears in the gallery as a placeholder tile, so you can line up work before it's finished.

## Put it online (free)

This repo publishes itself to **GitHub Pages**. On every push to `main`, a workflow builds the site and pushes the result to a branch called `gh-pages`, which GitHub serves as a website.

**One-time switch-on:** in the repository on GitHub, go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then choose branch **`gh-pages`** and folder **`/ (root)`**, and click **Save**. The `gh-pages` branch has to exist first, so let the workflow run once before setting this.

Once it's on, the site lives at:

```
https://kellylynnboyle.github.io/AnimationIIIA-Pd-3-Valdes/
```

You can run the deploy by hand any time from the **Actions** tab → *Deploy portfolio site* → **Run workflow**.

> Don't edit the `gh-pages` branch by hand — it's generated, and every deploy overwrites it completely. All real work happens on `main`.

### Or use Vercel instead

Vercel gives you a shorter URL and faster builds, if you'd rather host there:

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. **Add New → Project**, and pick this repository.
3. **Important:** set **Root Directory** to `site`, since the app lives in a subfolder rather than at the top of the repo.
4. Click **Deploy**.

The two can coexist — nothing about the Vercel setup conflicts with the Pages workflow.

## Checking your work before you push

```bash
npm run build   # catches broken links and type errors
npm run lint
```

## Where things are

```
src/
├── app/
│   ├── page.tsx            # Home — hero + gallery
│   ├── about/page.tsx      # About page
│   ├── work/[slug]/page.tsx # One page per piece, generated from projects.ts
│   ├── layout.tsx          # Header, footer, fonts
│   └── globals.css         # Colors and theme
├── components/             # Cards, badges, video frame
└── data/
    ├── site.ts             # ← your name, bio, links
    └── projects.ts         # ← your work
public/work/                # ← your video and image files
```
