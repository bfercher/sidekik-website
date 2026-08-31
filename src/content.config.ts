import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
    lang: z.enum(['de', 'en']).default('de'),
    author: z.string().default('Bernhard Fercher'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    flagged: z.boolean().default(false),
  }),
});

export const collections = { blog };
