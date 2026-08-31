import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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
