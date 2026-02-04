import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mdLoader = (collection: string) =>
  glob({
    pattern: ['**/*.{md,mdx}', '!**/*.draft.{md,mdx}'],
    base: `./src/content/${collection}`,
  });

const blurbsCollection = defineCollection({
  loader: mdLoader('blurbs'),
  schema: z.object({
    id: z.string()
  })
});

export const collections = { blurbsCollection };
