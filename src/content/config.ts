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

const journeyFact = z.object({
	label: z.string(),
	value: z.string(),
});

const journey = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			legNumber: z.number().int().min(1),
			routeLabel: z.string(),
			description: z.string().optional(),
			/** Structured key facts shown above the passage narrative (period, distance, etc.). */
			facts: z.array(journeyFact).default([]),
			/** Optional heading shown above the intro paragraph. */
			sectionHeading: z.string().optional(),
			/** Short intro shown before the gallery and remaining markdown body. */
			intro: z.string().optional(),
			/** Photos shown between the intro and the markdown body. */
			gallery: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
					}),
				)
				.default([]),
			/** Bullet list of hoped-for experiences. */
			highlights: z.array(z.string()).default([]),
			/** Optional alternative routing notes. */
			alternativeRoute: z.string().optional(),
			coverImage: image(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { posts, pages, journey };
