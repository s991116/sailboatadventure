import { t, type Locale, type Text } from './locale';

/** Place names that differ between Danish and English. Other names stay as written. */
const placeNames: Record<string, Text> = {
	'The Azores': { da: 'Azorerne', en: 'The Azores' },
	'Isles of Scilly': { da: 'Scilly-øerne', en: 'Isles of Scilly' },
};

export function placeName(locale: Locale, name: string): string {
	const known = placeNames[name];
	return known ? t(locale, known) : name;
}
