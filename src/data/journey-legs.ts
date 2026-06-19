export type JourneyWaypoint = {
	name: string;
	/** GeoJSON order: [longitude, latitude] */
	coordinates: [number, number];
};

export type JourneyLeg = {
	slug: string;
	number: number;
	title: string;
	routeLabel: string;
	color: string;
	waypoints: JourneyWaypoint[];
};

/** Planned route legs from Denmark to the Caribbean. */
export const journeyLegs: JourneyLeg[] = [
	{
		slug: 'togt-1',
		number: 1,
		title: 'Togt 1',
		routeLabel: 'Frederiksværk → Kristiansand → Stavanger',
		color: '#d11a2a',
		waypoints: [
			{ name: 'Frederiksværk, Danmark', coordinates: [12.023, 55.97] },
			{ name: 'Kristiansand', coordinates: [7.996, 58.147] },
			{ name: 'Stavanger', coordinates: [5.733, 58.97] },
		],
	},
	{
		slug: 'togt-2',
		number: 2,
		title: 'Togt 2',
		routeLabel: 'Stavanger → Inverness → Loch Ness → Loch Lochy → Fort William',
		color: '#b8843a',
		waypoints: [
			{ name: 'Stavanger', coordinates: [5.733, 58.97] },
			{ name: 'Inverness', coordinates: [-4.225, 57.478] },
			{ name: 'Loch Ness', coordinates: [-4.442, 57.324] },
			{ name: 'Loch Lochy', coordinates: [-4.933, 57.016] },
			{ name: 'Fort William', coordinates: [-5.105, 56.82] },
		],
	},
	{
		slug: 'togt-3',
		number: 3,
		title: 'Togt 3',
		routeLabel: 'Fort William → Dublin → Isles of Scilly',
		color: '#2a6fd1',
		waypoints: [
			{ name: 'Fort William', coordinates: [-5.105, 56.82] },
			{ name: 'Dublin', coordinates: [-6.26, 53.35] },
			{ name: 'Isles of Scilly', coordinates: [-6.313, 49.914] },
		],
	},
	{
		slug: 'togt-4',
		number: 4,
		title: 'Togt 4',
		routeLabel: 'Isles of Scilly → Azores',
		color: '#1a8f5c',
		waypoints: [
			{ name: 'Isles of Scilly', coordinates: [-6.313, 49.914] },
			{ name: 'Azores', coordinates: [-25.676, 37.741] },
		],
	},
	{
		slug: 'togt-5',
		number: 5,
		title: 'Togt 5',
		routeLabel: 'Azores → Madeira → Gran Canaria',
		color: '#7a3ad1',
		waypoints: [
			{ name: 'Azores', coordinates: [-25.676, 37.741] },
			{ name: 'Madeira', coordinates: [-16.924, 32.667] },
			{ name: 'Gran Canaria', coordinates: [-15.415, 28.1] },
		],
	},
	{
		slug: 'togt-6',
		number: 6,
		title: 'Togt 6',
		routeLabel: 'Gran Canaria → Cape Verde → Barbados',
		color: '#d17a2a',
		waypoints: [
			{ name: 'Gran Canaria', coordinates: [-15.415, 28.1] },
			{ name: 'Cape Verde', coordinates: [-24.98, 16.89] },
			{ name: 'Barbados', coordinates: [-59.611, 13.098] },
		],
	},
];

export const journeyLegBySlug = Object.fromEntries(journeyLegs.map((leg) => [leg.slug, leg])) as Record<
	string,
	JourneyLeg
>;
