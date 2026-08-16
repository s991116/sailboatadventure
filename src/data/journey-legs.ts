import passage1Route from './routes/passage-1.json';
import passage2Route from './routes/passage-2.json';
import passage3Route from './routes/passage-3.json';
import passage4Route from './routes/passage-4.json';
import passage5Route from './routes/passage-5.json';
import passage6Route from './routes/passage-6.json';
import passage7Route from './routes/passage-7.json';
import { plannedPassages } from './planned-passages';
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

const routeBySlug: Record<string, RouteFeature> = {
	'passage-1': passage1Route,
	'passage-2': passage2Route,
	'passage-3': passage3Route,
	'passage-4': passage4Route,
	'passage-5': passage5Route,
	'passage-6': passage6Route,
	'passage-7': passage7Route,
};

/** Planned passages from Denmark to the Caribbean. */
export const journeyLegs: JourneyLeg[] = plannedPassages.map((passage) => {
	const stops: PassageStop[] = [
		{ name: passage.from, coordinates: passage.fromCoordinates, role: 'start' },
		...(passage.via ?? []).map((stop) => ({
			name: stop.name,
			coordinates: stop.coordinates,
			role: 'stop' as const,
		})),
		{ name: passage.to, coordinates: passage.toCoordinates, role: 'end' },
	];

	return {
		slug: passage.slug,
		number: passage.number,
		title: `Passage ${passage.number}`,
		color: passage.color,
		stops,
		route: routeFromFeature(routeBySlug[passage.slug]),
		routeLabel: routeLabelFromStops(stops),
	};
});

export const journeyLegBySlug = Object.fromEntries(journeyLegs.map((leg) => [leg.slug, leg])) as Record<
	string,
	JourneyLeg
>;
