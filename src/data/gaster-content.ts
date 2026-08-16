import type { ImageMetadata } from 'astro';
import { plannedPassages } from './planned-passages';

import heroPhoto from '../assets/photos/history/2023-12-01 Over Atlanten/IMG_6681.jpeg';
import benefitsBg from '../assets/photos/journey/Barbados_beach.jpeg';

export type GasterStage = {
	number: string;
	month: string;
	from: string;
	to: string;
};

export type GasterListItem = {
	title: string;
	description: string;
};

export type GasterImages = {
	hero: ImageMetadata;
	benefitsBg: ImageMetadata;
};

export const gasterMeta = {
	title: 'Sailing crew wanted — Atlantic crossing | Sailboat Adventure',
	description:
		'We are looking for sailing crew for a staged voyage from Frederiksværk to Barbados. Join night watches, open-ocean sailing, and adventure under the stars.',
};

export const gasterImages: GasterImages = {
	hero: heroPhoto,
	benefitsBg,
};

export const gasterHero = {
	label: 'Sailboat Adventure',
	title: 'Sailing crew wanted for an Atlantic adventure',
	routeLine:
		'Denmark → Norway → Scotland → Ireland → the Azores → Gran Canaria → Barbados',
	cta: {
		label: 'Get in touch',
		href: '#contact',
	},
};

export const gasterRoute = {
	label: 'The route',
	title: 'Seven passages — from April to November 2027',
	intro:
		'Here is an overview of the passages. For maps, timing details and more about each stretch, see the Planned Route page.',
	note: 'Dates are indicative and may shift with weather, wind, and harbour conditions.',
	plannedRoute: {
		label: 'Read more on Planned Route',
		href: '/plannedroute/',
	},
	stages: plannedPassages.map((passage) => ({
		number: String(passage.number).padStart(2, '0'),
		month: passage.month,
		from: passage.from,
		to: passage.to,
	})) satisfies GasterStage[],
};

export const gasterWho = {
	label: 'Who we are looking for',
	title: 'Attitude matters more than certificates',
	items: [
		{
			title: 'Curious and flexible',
			description: 'You are ready to contribute, learn along the way, and accept that plans can change.',
		},
		{
			title: 'Physically ready for life onboard',
			description: 'Watches, moving in a seaway, and time in the elements require basic fitness.',
		},
		{
			title: 'A calm teammate',
			description: 'Close quarters call for respect, patience, and clear communication.',
		},
		{
			title: 'Adventure first, luxury last',
			description: 'Comfort is limited onboard — in return you get experiences few people ever have.',
		},
	] satisfies GasterListItem[],
};

export const gasterBenefits = {
	label: 'What you get',
	title: 'What awaits you onboard',
	items: [
		{
			title: 'Open-ocean experience',
			description: 'Night watches, navigation, and sailing in changing weather — from archipelago to ocean passage.',
		},
		{
			title: 'A strong crew bond',
			description: 'You sail as a crew. Meals, watches, and challenges are shared along the way.',
		},
		{
			title: 'Unique destinations',
			description: 'Scottish landscapes, Irish coasts, the Azores, and Gran Canaria — before the Caribbean waits.',
		},
		{
			title: 'Stories for life',
			description: 'Whales, stars, storms, and stillness. A journey you will talk about for years.',
		},
	] satisfies GasterListItem[],
};

export const gasterContact = {
	label: 'Contact',
	title: 'Want to come aboard?',
	intro:
		'Write to us with your name, email, preferred passage, and a short note about yourself. We will get back to you as soon as we can.',
	form: {
		nameLabel: 'Name',
		emailLabel: 'Email',
		stageLabel: 'Preferred passage',
		stagePlaceholder: 'Select a passage',
		messageLabel: 'Message',
		submitLabel: 'Send message',
		successMessage: 'Thanks for reaching out — we will reply soon.',
	},
	facebook: {
		label: 'Message us on Messenger',
		href: 'https://m.me/',
	},
	email: 'hello@example.com',
};
