import { defineCollection, z } from 'astro:content';


export const collections = {
  events: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date(),
    })
  }),
};
