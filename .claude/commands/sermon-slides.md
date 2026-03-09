---
description: Convert a sermon file (PDF/MD/TXT) into a presentation with light/dark mode
model: opus
---

Convert a sermon file into a subfolder with an HTML slide presentation.

## Input

The user will provide a path to a sermon file (PDF, MD, or TXT) via `$ARGUMENTS`. If no arguments are provided, ask for:
1. **File path** — path to the sermon file (PDF, MD, or TXT)
2. **Title** — sermon title (optional; infer from content if not given)

## Steps

### 1. Read the sermon file
- For PDF files, use the Read tool (it supports PDFs)
- For MD or TXT files, read normally
- Extract the sermon content, identifying:
  - Title / theme
  - Main points or sections
  - Key scripture references
  - Illustrations or stories
  - Application points / takeaways

### 2. Create the sermon subfolder
- Generate a slug from the sermon title (lowercase, hyphens, no special chars)
- Create the folder at `public/sermons/<slug>/`

### 3. Build the HTML presentation
Create `public/sermons/<slug>/index.html` — a self-contained, single-file HTML presentation.

**Slide structure:**
- **Title slide** — sermon title, date, key scripture (no speaker name)
- **Section slides** — one per main point/section from the sermon
- **Scripture slides** — highlighted scripture references
- **Application slide** — key takeaways
- **Closing slide** — summary or call to action

**Design requirements:**
- Single HTML file, no external dependencies (all CSS/JS inline)
- Keyboard navigation only: arrow keys and spacebar to advance slides (no on-screen nav buttons)
- Slide number counter (e.g., "3 / 20") in the bottom-right corner
- Responsive design that works on projectors, laptops, tablets, and phones
- Clean, modern typography with good readability for presentations
- Subtle slide transitions (CSS transitions, no heavy libraries)
- Touch/swipe support for mobile

**Light/dark mode toggle:**
- Include a subtle, small toggle button (sun/moon icon) in the top-right corner — low opacity by default, visible on hover (used only for calibration, not audience-facing)
- Default to the user's system preference (`prefers-color-scheme`)
- Manual toggle overrides and persists via `localStorage`
- Light mode: clean white background, dark text, accent colors for scripture
- Dark mode: dark background, light text, muted accent colors
- Smooth transition between modes

**Songs:**
- If any songs or hymns are mentioned in the sermon, include them on a slide with the correct composer/songwriter credited
- Verify the composer is accurate (e.g., "All I Once Held Dear" is by Graham Kendrick, not the Gettys)

**Typography and styling:**
- Sans-serif font stack (system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial)
- High-contrast colors suitable for low-quality projectors (e.g., near-black text on white, near-white text on near-black in dark mode)
- Large, readable font sizes suitable for projection (base ~20px, body text clamp from ~1.1rem to ~1.65rem)
- Scripture references styled distinctly (e.g., italic, accent color, or block quote)
- Bullet points with adequate spacing
- Slide titles prominent and clear
- **Section labels:** If a slide belongs to an obvious sermon section (e.g., "Deny Oneself", "Take Up One's Cross", "Closing"), display the section name in small, muted text at the bottom-left corner of the screen for audience context. Omit for title slides or standalone slides that don't belong to a section. Implementation: use a single fixed-position element outside the slide deck, updated via JS with a slide-index-to-section map. This prevents the label from inheriting slide transitions (child elements cannot escape a parent's opacity/transform).

### 4. Update the sermons listing data
- Read `src/data/sermons.json` (if it doesn't exist, create it with an empty array `[]`)
- Add a new entry to the beginning of the array with: `title`, `slug`, `description` (a brief summary of the sermon), `pubDate` (today's date in YYYY-MM-DD format), `scripture` (the main scripture reference), `tags` (relevant tags like the book name and key themes)
- Write the updated JSON back to `src/data/sermons.json`

### 5. Output summary
After creating the files, tell the user:
- The folder created: `public/sermons/<slug>/`
- How to preview: open `public/sermons/<slug>/index.html` in a browser, or run `npm run dev` and visit `http://localhost:4321/sermons/<slug>/`
- Keyboard controls: arrow keys / spacebar to navigate (subtle theme toggle in top-right, visible on hover)
- Remind them to run `npm run build` before committing
