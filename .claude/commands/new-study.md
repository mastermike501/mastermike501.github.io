---
description: Scaffold a new Bible study note with frontmatter template
---

Create a new Bible study note in `src/content/bible-study/`.

Ask the user for:
1. **Title** — the study title
2. **Description** — a one-sentence summary
3. **Book** — Bible book name (optional, e.g., "Ephesians")
4. **Chapter** — chapter/verse range (optional, e.g., "6:10-18")
5. **Tags** — comma-separated list (optional)

Then:
- Generate a slug from the title (lowercase, hyphens, no special chars)
- Set `pubDate` to today's date (YYYY-MM-DD)
- Set `draft: false` (mention they can set `true` to hide it)
- Create the file at `src/content/bible-study/<slug>.md` with frontmatter and a placeholder body
- Remind the user about the Astro 5 `.id` gotcha if they modify routing code

Use this template:
```markdown
---
title: "<title>"
description: "<description>"
pubDate: <today>
book: "<book>"
chapter: "<chapter>"
tags: [<tags>]
draft: false
---

Write your study notes here.
```
