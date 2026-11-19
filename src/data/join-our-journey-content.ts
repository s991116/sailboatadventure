import type { ImageMetadata } from 'astro';
import { getOpenGuestTrips } from './planned-passages';

import heroPhoto from '../assets/photos/join-our-journey/louise-philip-egypten.jpg';

export type JoinOurJourneyListItem = {
	title: string;
	description: string;
};

export type JoinOurJourneyImages = {
	hero: ImageMetadata;
};

export const joinOurJourneyMeta = {
	title: 'Join Our Journey — Atlantic crossing | Sailboat Adventure',
	description:
		'Join our staged voyage from Frederiksværk to Barbados. Night watches, open-ocean sailing, and adventure under the stars.',
};

export const joinOurJourneyImages: JoinOurJourneyImages = {
	hero: heroPhoto,
};

export const joinOurJourneyHero = {
	title: 'Join us, on our journey',
};

/** Only open guest trips — used by the contact form. */
export const joinOurJourneyOpenTrips = getOpenGuestTrips();

export type JoinOurJourneyPrinciple = {
	lead: string;
	text: string;
};

export const joinOurJourneyWho = {
	title: 'How we sail together',
	principles: [
		{
			lead: 'Safety first.',
			text: 'Weather, the boat and the crew always come before schedule and destination.',
		},
		{
			lead: 'We help each other.',
			text: 'Watches and practical tasks are shared according to ability and experience.',
		},
		{
			lead: 'We say things in time.',
			text: 'Fatigue, seasickness, worries and disagreements are easier to handle when we talk about them early.',
		},
		{
			lead: 'We look after our resources.',
			text: 'Water, power, gas, fuel and space are limited.',
		},
		{
			lead: 'We respect rest.',
			text: 'Sleep and quiet are part of safety, especially on longer passages.',
		},
		{
			lead: 'We keep things tidy.',
			text: 'Personal gear is stowed securely, and shared areas are left clear.',
		},
	] satisfies JoinOurJourneyPrinciple[],
	sharedRule: {
		lead: 'Our most important shared rule:',
		text: 'If you are in doubt, ask. If you see something unsafe, say so at once.',
	},
	guestAgreement: {
		label: 'Guest agreement',
		intro: 'Download the guest agreement before you join:',
		downloads: [
			{
				href: '/docs/Guest-agreement-DK.pdf',
				label: 'Danish',
				flag: 'dk' as const,
				ariaLabel: 'Download guest agreement in Danish (PDF)',
			},
			{
				href: '/docs/Guest-agreement-GB.pdf',
				label: 'English',
				flag: 'gb' as const,
				ariaLabel: 'Download guest agreement in English (PDF)',
			},
		],
	},
};

export const joinOurJourneyBenefits = {
	title: 'What awaits you onboard',
	items: [
		{
			title: 'Open-ocean experience',
			description: 'Night watches, navigation, and sailing in changing weather — from archipelago to ocean passage.',
		},
		{
			title: 'Unique destinations',
			description: 'Scottish landscapes, Irish coasts, the Azores, and Gran Canaria — before the Caribbean waits.',
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
