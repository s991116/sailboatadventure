import type { ImageMetadata } from 'astro';
import { tx, type Text } from '../i18n/locale';

import heroPhoto from '../assets/photos/join-our-journey/louise-philip-egypten.jpg';

export type JoinOurJourneyListItem = {
	title: Text;
	description: Text;
};

export type JoinOurJourneyImages = {
	hero: ImageMetadata;
};

export const joinOurJourneyMeta = {
	title: tx('Sejl med os — Atlanterhavskryds | Sailboat Adventure', 'Join Our Journey — Atlantic crossing | Sailboat Adventure'),
	description: tx(
		'Sejl med på rejsen fra Frederiksværk til Barbados. Nattevagter, havsejlads og eventyr under stjernerne.',
		'Join our staged voyage from Frederiksværk to Barbados. Night watches, open-ocean sailing, and adventure under the stars.',
	),
};

export const joinOurJourneyImages: JoinOurJourneyImages = {
	hero: heroPhoto,
};

export const joinOurJourneyHero = {
	title: tx('Tag med på vores rejse', 'Join us, on our journey'),
	alt: tx('Louise og Philip i Egypten.', 'Louise and Philip in Egypt.'),
};

export type JoinOurJourneyPrinciple = {
	lead: Text;
	text: Text;
};

export const joinOurJourneyWho = {
	title: tx('Sådan sejler vi sammen', 'How we sail together'),
	principles: [
		{
			lead: tx('Sikkerhed først.', 'Safety first.'),
			text: tx(
				'Vejr, båd og besætning kommer altid før tidsplan og destination.',
				'Weather, the boat and the crew always come before schedule and destination.',
			),
		},
		{
			lead: tx('Vi hjælper hinanden.', 'We help each other.'),
			text: tx(
				'Vagter og praktiske opgaver deles efter evne og erfaring.',
				'Watches and practical tasks are shared according to ability and experience.',
			),
		},
		{
			lead: tx('Vi siger tingene i tide.', 'We say things in time.'),
			text: tx(
				'Træthed, søsyge, bekymringer og uenigheder er nemmere at håndtere, når vi taler om dem tidligt.',
				'Fatigue, seasickness, worries and disagreements are easier to handle when we talk about them early.',
			),
		},
		{
			lead: tx('Vi passer på ressourcerne.', 'We look after our resources.'),
			text: tx('Vand, strøm, gas, brændstof og plads er begrænset.', 'Water, power, gas, fuel and space are limited.'),
		},
		{
			lead: tx('Vi respekterer hvile.', 'We respect rest.'),
			text: tx(
				'Søvn og ro er en del af sikkerheden, især på længere etaper.',
				'Sleep and quiet are part of safety, especially on longer passages.',
			),
		},
		{
			lead: tx('Vi holder det ryddeligt.', 'We keep things tidy.'),
			text: tx(
				'Personligt udstyr stuves sikkert, og fælles områder efterlades frie.',
				'Personal gear is stowed securely, and shared areas are left clear.',
			),
		},
	] satisfies JoinOurJourneyPrinciple[],
	sharedRule: {
		lead: tx('Vores vigtigste fælles regel:', 'Our most important shared rule:'),
		text: tx(
			'Er du i tvivl, så spørg. Ser du noget usikkert, så sig det med det samme.',
			'If you are in doubt, ask. If you see something unsafe, say so at once.',
		),
	},
	guestAgreement: {
		label: tx('Gæsteaftale', 'Guest agreement'),
		intro: tx('Læs gæsteaftalen, så du kan se, hvad det indebærer at sejle med.', 'Read our guest agreement to see what joining involves.'),
		downloads: [
			{
				href: '/docs/Guest-agreement-DK.pdf',
				label: tx('Dansk', 'Danish'),
				flag: 'dk' as const,
				ariaLabel: tx('Hent gæsteaftalen på dansk (PDF)', 'Download guest agreement in Danish (PDF)'),
			},
			{
				href: '/docs/Guest-agreement-GB.pdf',
				label: tx('Engelsk', 'English'),
				flag: 'gb' as const,
				ariaLabel: tx('Hent gæsteaftalen på engelsk (PDF)', 'Download guest agreement in English (PDF)'),
			},
		],
	},
};

export const joinOurJourneyBenefits = {
	title: tx('Det venter ombord', 'What awaits you onboard'),
	items: [
		{
			title: tx('Erfaring fra åbent hav', 'Open-ocean experience'),
			description: tx(
				'Nattevagter, navigation og sejlads i skiftende vejr — fra skærgård til havsejlads.',
				'Night watches, navigation, and sailing in changing weather — from archipelago to ocean passage.',
			),
		},
		{
			title: tx('Særlige destinationer', 'Unique destinations'),
			description: tx(
				'Skotske landskaber, irske kyster, Azorerne og Gran Canaria — før Caribien venter.',
				'Scottish landscapes, Irish coasts, the Azores, and Gran Canaria — before the Caribbean waits.',
			),
		},
	] satisfies JoinOurJourneyListItem[],
};

export const joinOurJourneyContact = {
	title: tx('Vil du ombord?', 'Want to come aboard?'),
	intro: tx(
		'Skriv til os med dit navn, din e-mail, den etape du helst vil med på, og en kort note om dig selv. Din besked bliver leveret privat til vores indbakke — vi viser ikke en e-mailadresse eller et telefonnummer på siden.',
		'Write to us with your name, email, preferred passage, and a short note about yourself. Your message is delivered privately to our inbox — we do not publish an email address or phone number on this page.',
	),
};
