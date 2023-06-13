import { defineCollection, z } from 'astro:content';


export const collections = {
  events: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date(),
      location: z.object({
        lat: z.number(),
        lon: z.number()
      })
    })
  }),
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string()
    })
  })
};
