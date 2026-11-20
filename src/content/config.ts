import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		/** Public URL slug, shared by the Danish and English files. */
		entrySlug: z.string(),
		/** Write the sibling file in the other language when you change this post. */
		locale: z.enum(['da', 'en']),
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

/** Danish and English together. Edit both whenever the wording changes. */
const text = z.object({
	da: z.string(),
	en: z.string(),
});

const journeyFact = z.object({
	label: text,
	value: text,
});

const journey = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: text,
			legNumber: z.number().int().min(1),
			routeLabel: z.string(),
			description: text.optional(),
			/** Structured key facts shown above the passage narrative (period, distance, etc.). */
			facts: z.array(journeyFact).default([]),
			/** Optional heading shown above the intro paragraph. */
			sectionHeading: text.optional(),
			/** Short intro shown before the gallery and remaining markdown body. */
			intro: text.optional(),
			/** Photos shown between the facts and the section heading. */
			gallery: z
				.array(
					z.object({
						src: image(),
						alt: text,
					}),
				)
				.default([]),
			/** Optional second photo row shown after the intro text. */
			secondaryGallery: z
				.array(
					z.object({
						src: image(),
						alt: text,
					}),
				)
				.default([]),
			/** Optional heading shown above the closing paragraph. */
			outroHeading: text.optional(),
			/** Optional closing paragraph shown after the secondary gallery. */
			outro: text.optional(),
			/** Paragraph shown after the rest of the passage. */
			closing: text.optional(),
			/** Bullet list of hoped-for experiences. */
			highlights: z.array(text).default([]),
			/** Optional alternative routing notes. */
			alternativeRoute: text.optional(),
			coverImage: image(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { posts, pages, journey };
