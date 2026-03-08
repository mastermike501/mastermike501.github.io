# CLAUDE.md — mastermike501.github.io

## Project overview
Personal blog and Bible study website for Michael Kong, hosted on GitHub Pages at mastermike501.github.io. Built with Astro.

## Tech stack
- **Astro** — static site generator (zero JS by default)
- **Content Collections** — blog posts and Bible study notes as Markdown with validated frontmatter
- **GitHub Actions** — builds and deploys to GitHub Pages on push to `master`
- **@astrojs/sitemap** — auto-generated sitemap
- **@astrojs/rss** — RSS feed at `/rss.xml`

## Commands
```bash
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Build to dist/
npm run preview   # Preview production build locally
```

## Repo structure
```
├── .github/workflows/deploy.yml   # GitHub Actions deploy workflow
├── .claude/commands/              # Claude Code slash commands
│   ├── new-post.md                # /new-post — scaffold a blog post
│   └── new-study.md               # /new-study — scaffold a Bible study note
├── src/
│   ├── components/                # Reusable .astro components
│   │   ├── BaseHead.astro         # <head> meta, theme init, analytics
│   │   ├── Header.astro           # Site nav + theme toggle
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro      # Dark/light mode toggle
│   │   └── PostCard.astro         # Card for listing pages
│   ├── content/
│   │   ├── config.ts              # Collection schemas
│   │   ├── blog/                  # Blog posts (Markdown)
│   │   └── bible-study/           # Bible study notes (Markdown)
│   ├── layouts/
│   │   ├── BaseLayout.astro       # HTML shell for all pages
│   │   ├── BlogPost.astro         # Blog post layout
│   │   └── BibleStudy.astro       # Bible study note layout
│   ├── pages/                     # File-based routing
│   │   ├── index.astro            # Homepage
│   │   ├── rss.xml.ts             # RSS feed
│   │   ├── blog/
│   │   └── bible-study/
│   └── styles/
│       └── global.css             # CSS custom properties, light/dark themes
├── public/                        # Static assets served at site root
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Adding content

### Blog post
Create `src/content/blog/my-post.md`:
```markdown
---
title: "Post Title"
description: "Brief description."
pubDate: 2026-03-08
tags: ["tag1", "tag2"]
draft: false
---

Post body in Markdown.
```

### Bible study note
Create `src/content/bible-study/my-note.md`:
```markdown
---
title: "Study Title"
description: "Brief description."
pubDate: 2026-03-08
book: "Genesis"
chapter: "1:1-5"
tags: ["Genesis"]
draft: false
---

Study notes in Markdown.
```

Set `draft: true` to hide from listings.

## Public directory
Files in `public/` are copied as-is to the site root at build time. Use it for:
- `favicon.ico` — site favicon
- Images referenced by absolute path (e.g., `/images/photo.jpg`)
- Any static files that don't need processing (robots.txt, etc.)

## Theming
- Light/dark mode via CSS custom properties in `global.css`
- `[data-theme="dark"]` selector for dark theme
- Respects `prefers-color-scheme` by default; manual toggle overrides and persists in `localStorage`
- Inline script in `BaseHead.astro` reads theme before paint (no flash)

## Analytics
- Umami Cloud placeholder in `BaseHead.astro` (commented out)
- To enable: uncomment the script tag and set your `data-website-id`

## Deployment
- Push to `master` → GitHub Actions builds Astro → deploys to GitHub Pages
- Workflow: `.github/workflows/deploy.yml`
- **Important:** GitHub Pages source must be set to **"GitHub Actions"** (not "Deploy from a branch") in repo Settings > Pages. Otherwise GitHub will try to build with Jekyll and fail.

## Conventions
- 2-space indentation in all files
- Modern CSS (flexbox, grid, custom properties, `clamp()`)
- Semantic HTML, ARIA labels, skip-to-content link
- `const`/`let` over `var` in JavaScript/TypeScript
- **Always run `npm run build` before committing** to catch errors before they hit CI

## Known gotchas

### Astro 5: `post.id` includes the file extension
In Astro 5, Content Collection entry IDs include the `.md` extension (e.g., `hello-world.md` not `hello-world`). When building URLs from content entries, always strip it:
```ts
const slug = post.id.replace(/\.md$/, '');
const href = `/blog/${slug}/`;
```
This applies everywhere an entry ID is used as a URL segment: dynamic route params, listing page links, and RSS feed links.
