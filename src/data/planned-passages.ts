/** Shared planned passages — used by Planned Route and Join Our Journey. */

import { t, tx, type Locale, type Text } from '../i18n/locale';

/** GeoJSON order: [longitude, latitude] */
export type PassageCoordinate = [number, number];

export type PlannedPassageStop = {
	name: string;
	coordinates: PassageCoordinate;
};

/**
 * Guest signup for a passage.
 * Several map legs can share the same `tripId` so the contact form lists the trip once.
 */
export type GuestSignup =
	| {
			status: 'open';
			tripId: string;
			/** Display label for the signup form, in Danish and English. */
			label: Text;
			/** Inclusive start date, YYYY-MM-DD (year 2027). */
			startDate: string;
			/** Inclusive end date, YYYY-MM-DD (year 2027). */
			endDate: string;
	  }
	| {
			/** Fully booked, or a stretch where we are not sailing with guests. */
			status: 'fully-booked';
	  };

export type PlannedPassage = {
	number: number;
	slug: string;
	month: string;
	from: string;
	to: string;
	fromCoordinates: PassageCoordinate;
	toCoordinates: PassageCoordinate;
	/** Optional intermediate harbour stops between from and to. */
	via?: PlannedPassageStop[];
	color: string;
	guestSignup: GuestSignup;
};

const monthNames: Record<Locale, readonly string[]> = {
	da: [
		'januar',
		'februar',
		'marts',
		'april',
		'maj',
		'juni',
		'juli',
		'august',
		'september',
		'oktober',
		'november',
		'december',
	],
	en: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
};

const formatDayMonth = (isoDate: string, locale: Locale) => {
	const [, month, day] = isoDate.split('-').map(Number);
	const name = monthNames[locale][month - 1];
	return locale === 'da' ? `${day}. ${name}` : `${day} ${name}`;
};

/** e.g. "1 May – 29 May 2027" / "1. maj – 29. maj 2027" */
export const formatGuestDateRange = (startDate: string, endDate: string, locale: Locale) => {
	const year = startDate.slice(0, 4);
	return `${formatDayMonth(startDate, locale)} – ${formatDayMonth(endDate, locale)} ${year}`;
};

export const joinOurJourneyContactHref = (locale: Locale) =>
	`${locale === 'da' ? '/da' : ''}/join-our-journey/#contact`;

export type OpenGuestTrip = {
	tripId: string;
	label: string;
	startDate: string;
	endDate: string;
	dateRangeLabel: string;
	formOption: string;
};

/** Unique open guest trips for the contact form (one option per tripId). */
export const getOpenGuestTrips = (locale: Locale): OpenGuestTrip[] => {
	const trips = new Map<string, OpenGuestTrip>();

	for (const passage of plannedPassages) {
		if (passage.guestSignup.status !== 'open') continue;
		const { tripId, label, startDate, endDate } = passage.guestSignup;
		if (trips.has(tripId)) continue;

		const dateRangeLabel = formatGuestDateRange(startDate, endDate, locale);
		const localizedLabel = t(locale, label);
		trips.set(tripId, {
			tripId,
			label: localizedLabel,
			startDate,
			endDate,
			dateRangeLabel,
			formOption: `${localizedLabel} (${dateRangeLabel})`,
		});
	}

	return Array.from(trips.values());
};

export const plannedPassages: PlannedPassage[] = [
	{
		number: 1,
		slug: 'passage-1',
		month: 'APRIL',
		from: 'Frederiksværk',
		to: 'Kristiansand',
		fromCoordinates: [12.023, 55.97],
		toCoordinates: [7.996, 58.147],
		color: '#d11a2a',
		guestSignup: { status: 'fully-booked' },
	},
	{
		number: 2,
		slug: 'passage-2',
		month: 'MAY',
		from: 'Kristiansand',
		to: 'Inverness',
		fromCoordinates: [7.996, 58.147],
		toCoordinates: [-4.225, 57.478],
		via: [{ name: 'Stavanger', coordinates: [5.733, 58.97] }],
		color: '#b8843a',
		guestSignup: {
			status: 'open',
			tripId: 'kristiansand-inverness',
			label: tx('Kristiansand → Inverness', 'Kristiansand → Inverness'),
			startDate: '2027-05-01',
			endDate: '2027-05-29',
		},
	},
	{
		number: 3,
		slug: 'passage-3',
		month: 'JUNE',
		from: 'Inverness',
		to: 'Dublin',
		fromCoordinates: [-4.225, 57.478],
		toCoordinates: [-6.26, 53.35],
		color: '#f0a04b',
		guestSignup: { status: 'fully-booked' },
	},
	{
		number: 4,
		slug: 'passage-5',
		month: 'AUGUST',
		from: 'Dublin',
		to: 'The Azores',
		fromCoordinates: [-6.26, 53.35],
		toCoordinates: [-25.676, 37.741],
		via: [{ name: 'Isles of Scilly', coordinates: [-6.313, 49.914] }],
		color: '#7a3ad1',
		guestSignup: {
			status: 'open',
			tripId: 'dublin-azores',
			label: tx('Dublin → Azorerne', 'Dublin → The Azores'),
			startDate: '2027-07-17',
			endDate: '2027-09-04',
		},
	},
	{
		number: 5,
		slug: 'passage-6',
		month: 'SEPTEMBER',
		from: 'The Azores',
		to: 'Gran Canaria',
		fromCoordinates: [-25.676, 37.741],
		toCoordinates: [-15.415, 28.1],
		color: '#d17a2a',
		guestSignup: {
			status: 'open',
			tripId: 'azores-gran-canaria',
			label: tx('Azorerne → Gran Canaria', 'The Azores → Gran Canaria'),
			startDate: '2027-09-18',
			endDate: '2027-10-16',
		},
	},
	{
		number: 6,
		slug: 'passage-7',
		month: 'NOVEMBER',
		from: 'Gran Canaria',
		to: 'Barbados',
		fromCoordinates: [-15.415, 28.1],
		toCoordinates: [-59.611, 13.098],
		color: '#2a7ad1',
		guestSignup: {
			status: 'open',
			tripId: 'gran-canaria-barbados',
			label: tx('Gran Canaria → Barbados', 'Gran Canaria → Barbados'),
			startDate: '2027-11-06',
			endDate: '2027-12-12',
		},
	},
];
