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

const postsCollection = defineCollection({
  loader: mdLoader('posts'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),                     
    created: z.string().or(z.date()),
    modified: z.string().or(z.date()).optional(),
    tags: z.array(z.string())
  })
});

export const collections = { blurbs: blurbsCollection, posts: postsCollection, };
