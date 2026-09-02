import type { NextConfig } from "next";

// GitHub Pages serves this repo at /<repo-name>, not at the domain root, so the
// build needs a basePath there. Local `npm run dev` sets no GITHUB_PAGES, and
// keeps serving from / as usual.
const repoBasePath = "/AnimationIIIA-Pd-3-Valdes";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Emit a plain folder of HTML/CSS/JS, which any static host can serve.
  output: "export",
  // Next's image optimizer needs a server; static export has none.
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGitHubPages && {
    basePath: repoBasePath,
    assetPrefix: repoBasePath,
  }),
};

export default nextConfig;
