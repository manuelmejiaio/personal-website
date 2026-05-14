import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional().default(''),
    legacyPath: z.string(),
    canonicalPath: z.string(),
  }),
})

export const collections = { blog }
