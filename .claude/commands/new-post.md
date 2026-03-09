---
description: Scaffold a new blog post with frontmatter template
model: haiku
---

Create a new blog post in `src/content/blog/`.

Ask the user for:
1. **Title** — the post title
2. **Description** — a one-sentence summary
3. **Tags** — comma-separated list (optional)

Then:
- Generate a slug from the title (lowercase, hyphens, no special chars)
- Set `pubDate` to today's date (YYYY-MM-DD)
- Set `draft: false` (mention they can set `true` to hide it)
- Create the file at `src/content/blog/<slug>.md` with frontmatter and a placeholder body
- Remind the user about the Astro 5 `.id` gotcha if they modify routing code

Use this template:
```markdown
---
title: "<title>"
description: "<description>"
pubDate: <today>
tags: [<tags>]
draft: false
---

Write your post here.
```
