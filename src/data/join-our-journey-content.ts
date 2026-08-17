import type { ImageMetadata } from 'astro';
import { plannedPassages } from './planned-passages';

import heroPhoto from '../assets/photos/history/2023-12-01 Over Atlanten/IMG_6681.jpeg';
import benefitsBg from '../assets/photos/journey/Barbados_beach.jpeg';

export type JoinOurJourneyStage = {
	month: string;
	title: string;
};

const placeCountry: Record<string, string> = {
	Frederiksværk: 'Denmark',
	Arendal: 'Norway',
	Inverness: 'Scotland',
	Dublin: 'Ireland',
	'Isles of Scilly': 'England',
	'the Azores': 'Portugal',
	'Gran Canaria': 'Spain',
	Barbados: 'Barbados',
};

const formatEndpoint = (place: string) => {
	const country = placeCountry[place];
	if (!country || country.toLowerCase() === place.toLowerCase()) return place;
	return `${place} (${country})`;
};

export type JoinOurJourneyListItem = {
	title: string;
	description: string;
};

export type JoinOurJourneyImages = {
	hero: ImageMetadata;
	benefitsBg: ImageMetadata;
};

export const joinOurJourneyMeta = {
	title: 'Join Our Journey — Atlantic crossing | Sailboat Adventure',
	description:
		'Join our staged voyage from Frederiksværk to Barbados. Night watches, open-ocean sailing, and adventure under the stars.',
};

export const joinOurJourneyImages: JoinOurJourneyImages = {
	hero: heroPhoto,
	benefitsBg,
};

export const joinOurJourneyHero = {
	label: 'Join Our Journey',
	title: 'Join us, on our journey',
	routeLine: 'From Denmark to the Caribbean',
};

export const joinOurJourneyRoute = {
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
		month: passage.month,
		title: `${formatEndpoint(passage.from)} → ${formatEndpoint(passage.to)}`,
	})) satisfies JoinOurJourneyStage[],
};

export const joinOurJourneyWho = {
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
	] satisfies JoinOurJourneyListItem[],
};

export const joinOurJourneyBenefits = {
	title: 'What awaits you onboard',
	items: [
		{
			title: 'Open-ocean experience',
			description: 'Night watches, navigation, and sailing in changing weather — from archipelago to ocean passage.',
		},
		{
			title: 'A strong crew bond',
			description: 'We sail as a crew. Meals, watches, and challenges are shared along the way. We reflect on our team-work and adjust what we do as a group, to make the most of our time together.',
		},
		{
			title: 'Unique destinations',
			description: 'Scottish landscapes, Irish coasts, the Azores, and Gran Canaria — before the Caribbean waits.',
		},
		{
			title: 'Stories for life',
			description: 'Whales, stars, storms, and stillness. A journey you will talk about for years.',
		},
	] satisfies JoinOurJourneyListItem[],
};

export const joinOurJourneyContact = {
	label: 'Contact',
	title: 'Want to come aboard?',
	intro:
		'Write to us with your name, email, preferred passage, and a short note about yourself. Your message is delivered privately to our inbox — we do not publish an email address or phone number on this page.',
	form: {
		nameLabel: 'Name',
		emailLabel: 'Email',
		stageLabel: 'Preferred passage',
		stagePlaceholder: 'Select a passage',
		messageLabel: 'Message',
		submitLabel: 'Send message',
		successMessage: 'Thanks for reaching out — we will reply soon.',
		errorMessage: 'Could not send your message. Please try again.',
		sendingLabel: 'Sending…',
	},
};
