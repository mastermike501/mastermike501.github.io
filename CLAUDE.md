# CLAUDE.md — mastermike501.github.io

## Project overview
Personal website for Michael Kong, hosted on GitHub Pages at mastermike501.github.io.

## Tech stack
- Static site (HTML/CSS/JS) served via GitHub Pages
- No build step — files are served as-is from the repo root
- `index.html` is the entry point

## Repo structure
```
/               → repo root, served by GitHub Pages
  index.html    → main page
  CLAUDE.md     → this file (Claude Code project instructions)
  README.md     → repo readme
  .gitignore    → git ignore rules
```

## Development guidelines
- Keep it simple: vanilla HTML/CSS/JS unless a framework is explicitly requested
- Mobile-first, responsive design
- Accessible (semantic HTML, sufficient contrast, alt text on images)
- No build tools unless explicitly added later
- Test changes by opening index.html locally in a browser

## Deployment
- Push to `master` branch → automatically deployed via GitHub Pages
- No CI/CD pipeline; deployment is instant on push

## Conventions
- Use 2-space indentation in HTML/CSS/JS
- Prefer modern CSS (flexbox, grid, custom properties) over legacy approaches
- Prefer `const`/`let` over `var` in JavaScript
