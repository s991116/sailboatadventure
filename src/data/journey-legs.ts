import passage1Route from './routes/passage-1.json';
import passage2Route from './routes/passage-2.json';
import passage3Route from './routes/passage-3.json';
import passage4Route from './routes/passage-4.json';
import passage5Route from './routes/passage-5.json';
import passage6Route from './routes/passage-6.json';
import { routeLabelFromStops } from './journey-utils';

/** GeoJSON order: [longitude, latitude] */
export type RouteCoordinate = [number, number];

export type StopRole = 'start' | 'stop' | 'end';

export type PassageStop = {
	name: string;
	coordinates: RouteCoordinate;
	role: StopRole;
	note?: string;
};

export type JourneyLeg = {
	slug: string;
	number: number;
	title: string;
	routeLabel: string;
	color: string;
	/** Full sailed line, including shaping points without a stop. */
	route: RouteCoordinate[];
	/** Named places only: departure, intermediate stops, and arrival. */
	stops: PassageStop[];
};

type RouteFeature = {
	geometry: {
		type: 'LineString';
		coordinates: RouteCoordinate[];
	};
};

const routeFromFeature = (feature: RouteFeature) => feature.geometry.coordinates;

const passage1Stops: PassageStop[] = [
	{ name: 'Frederiksværk, Danmark', coordinates: [12.023, 55.97], role: 'start' },
	{ name: 'Kristiansand', coordinates: [7.996, 58.147], role: 'stop' },
	{ name: 'Stavanger', coordinates: [5.733, 58.97], role: 'end' },
];

const passage2Stops: PassageStop[] = [
	{ name: 'Stavanger', coordinates: [5.733, 58.97], role: 'start' },
	{ name: 'Inverness', coordinates: [-4.225, 57.478], role: 'stop' },
	{ name: 'Loch Ness', coordinates: [-4.442, 57.324], role: 'stop' },
	{ name: 'Loch Lochy', coordinates: [-4.933, 57.016], role: 'stop' },
	{ name: 'Fort William', coordinates: [-5.105, 56.82], role: 'end' },
];

const passage3Stops: PassageStop[] = [
	{ name: 'Fort William', coordinates: [-5.105, 56.82], role: 'start' },
	{ name: 'Dublin', coordinates: [-6.26, 53.35], role: 'stop' },
	{ name: 'Isles of Scilly', coordinates: [-6.313, 49.914], role: 'end' },
];

const passage4Stops: PassageStop[] = [
	{ name: 'Isles of Scilly', coordinates: [-6.313, 49.914], role: 'start' },
	{ name: 'Azores', coordinates: [-25.676, 37.741], role: 'end' },
];

const passage5Stops: PassageStop[] = [
	{ name: 'Azores', coordinates: [-25.676, 37.741], role: 'start' },
	{ name: 'Madeira', coordinates: [-16.924, 32.667], role: 'stop' },
	{ name: 'Gran Canaria', coordinates: [-15.415, 28.1], role: 'end' },
];

const passage6Stops: PassageStop[] = [
	{ name: 'Gran Canaria', coordinates: [-15.415, 28.1], role: 'start' },
	{ name: 'Cape Verde', coordinates: [-24.98, 16.89], role: 'stop' },
	{ name: 'Barbados', coordinates: [-59.611, 13.098], role: 'end' },
];

/** Planned passages from Denmark to the Caribbean. */
export const journeyLegs: JourneyLeg[] = [
	{
		slug: 'passage-1',
		number: 1,
		title: 'Passage 1',
		color: '#d11a2a',
		stops: passage1Stops,
		route: routeFromFeature(passage1Route),
		routeLabel: routeLabelFromStops(passage1Stops),
	},
	{
		slug: 'passage-2',
		number: 2,
		title: 'Passage 2',
		color: '#b8843a',
		stops: passage2Stops,
		route: routeFromFeature(passage2Route),
		routeLabel: routeLabelFromStops(passage2Stops),
	},
	{
		slug: 'passage-3',
		number: 3,
		title: 'Passage 3',
		color: '#f0a04b',
		stops: passage3Stops,
		route: routeFromFeature(passage3Route),
		routeLabel: routeLabelFromStops(passage3Stops),
	},
	{
		slug: 'passage-4',
		number: 4,
		title: 'Passage 4',
		color: '#1a8f5c',
		stops: passage4Stops,
		route: routeFromFeature(passage4Route),
		routeLabel: routeLabelFromStops(passage4Stops),
	},
	{
		slug: 'passage-5',
		number: 5,
		title: 'Passage 5',
		color: '#7a3ad1',
		stops: passage5Stops,
		route: routeFromFeature(passage5Route),
		routeLabel: routeLabelFromStops(passage5Stops),
	},
	{
		slug: 'passage-6',
		number: 6,
		title: 'Passage 6',
		color: '#d17a2a',
		stops: passage6Stops,
		route: routeFromFeature(passage6Route),
		routeLabel: routeLabelFromStops(passage6Stops),
	},
];

export const journeyLegBySlug = Object.fromEntries(journeyLegs.map((leg) => [leg.slug, leg])) as Record<
	string,
	JourneyLeg
>;
