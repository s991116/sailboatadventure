import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
	}),
});

const pages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

const journey = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			legNumber: z.number().int().min(1),
			routeLabel: z.string(),
			description: z.string().optional(),
			coverImage: image(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { posts, pages, journey };
