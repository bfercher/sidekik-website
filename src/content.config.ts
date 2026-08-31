import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  // image() resolves the frontmatter path against the markdown file and returns
  // metadata including intrinsic width and height, so <Image> can emit those
  // attributes itself rather than having them duplicated in frontmatter where
  // they would drift out of sync with the file.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date().optional(),
      lang: z.enum(['de', 'en']).default('de'),
      author: z.string().default('Bernhard Fercher'),
      image: image().optional(),
      imageAlt: z.string().optional(),
      flagged: z.boolean().default(false),
    }),
});

export const collections = { blog };
