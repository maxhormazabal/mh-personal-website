import { defineCollection, z } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.string(),
    type: z.string(),
    venue: z.string(),
    en: z.string(),
    es: z.string(),
    authors: z.string(),
    aen: z.string(),
    aes: z.string(),
  }),
});

export const collections = {
  'research': researchCollection,
};
