/** Shared planned passages — used by Planned Route and Join Our Journey. */

/** GeoJSON order: [longitude, latitude] */
export type PassageCoordinate = [number, number];

export type PlannedPassageStop = {
	name: string;
	coordinates: PassageCoordinate;
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
};

export const plannedPassages: PlannedPassage[] = [
	{
		number: 1,
		slug: 'passage-1',
		month: 'APRIL',
		from: 'Frederiksværk',
		to: 'Arendal',
		fromCoordinates: [12.023, 55.97],
		toCoordinates: [8.772, 58.461],
		color: '#d11a2a',
	},
	{
		number: 2,
		slug: 'passage-2',
		month: 'MAY',
		from: 'Arendal',
		to: 'Inverness',
		fromCoordinates: [8.772, 58.461],
		toCoordinates: [-4.225, 57.478],
		via: [{ name: 'Stavanger', coordinates: [5.733, 58.97] }],
		color: '#b8843a',
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
	},
	{
		number: 4,
		slug: 'passage-4',
		month: 'JULY',
		from: 'Dublin',
		to: 'Isles of Scilly',
		fromCoordinates: [-6.26, 53.35],
		toCoordinates: [-6.313, 49.914],
		color: '#1a8f5c',
	},
	{
		number: 5,
		slug: 'passage-5',
		month: 'AUGUST',
		from: 'Isles of Scilly',
		to: 'the Azores',
		fromCoordinates: [-6.313, 49.914],
		toCoordinates: [-25.676, 37.741],
		color: '#7a3ad1',
	},
	{
		number: 6,
		slug: 'passage-6',
		month: 'SEPTEMBER',
		from: 'the Azores',
		to: 'Gran Canaria',
		fromCoordinates: [-25.676, 37.741],
		toCoordinates: [-15.415, 28.1],
		color: '#d17a2a',
	},
	{
		number: 7,
		slug: 'passage-7',
		month: 'NOVEMBER',
		from: 'Gran Canaria',
		to: 'Barbados',
		fromCoordinates: [-15.415, 28.1],
		toCoordinates: [-59.611, 13.098],
		color: '#2a7ad1',
	},
];
