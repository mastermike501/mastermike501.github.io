import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const bibleStudy = await getCollection('bible-study', ({ data }) => !data.draft);

  const items = [
    ...blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id.replace(/\.md$/, '')}/`,
    })),
    ...bibleStudy.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.pubDate,
      link: `/bible-study/${note.id.replace(/\.md$/, '')}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: "Michael Kong",
    description: "Personal blog and Bible study notes by Michael Kong.",
    site: context.site!,
    items,
  });
}
