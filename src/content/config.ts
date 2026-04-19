import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const bibleStudy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    book: z.string().optional(),
    chapter: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const songs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    number: z.number(),
    tags: z.array(z.string()).default([]),
    firstLine: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  'bible-study': bibleStudy,
  songs,
};
