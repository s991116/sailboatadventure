import type { PassageStop, RouteCoordinate } from './journey-legs';

export const formatPlaceName = (name: string) => name.replace(/,\s*Danmark$/i, '').trim();

export const routeLabelFromStops = (stops: PassageStop[]) =>
	stops.map((stop) => formatPlaceName(stop.name)).join(' → ');

export const getPassageEndpoints = (stops: PassageStop[]) => {
	const start = stops.find((stop) => stop.role === 'start') ?? stops[0];
	const end = stops.find((stop) => stop.role === 'end') ?? stops[stops.length - 1];
	return { start, end };
};

export const getPassageTooltip = (stops: PassageStop[]) => {
	const { start, end } = getPassageEndpoints(stops);
	return `${formatPlaceName(start.name)} to ${formatPlaceName(end.name)}`;
};

/** Bounds helpers use the full sailed route geometry. */
export const getRouteBounds = (route: RouteCoordinate[]) => {
	const lngs = route.map((coord) => coord[0]);
	const lats = route.map((coord) => coord[1]);
	return [
		[Math.min(...lngs), Math.min(...lats)],
		[Math.max(...lngs), Math.max(...lats)],
	] as [[number, number], [number, number]];
};
