/** Visitor-facing copy is always a Danish/English pair. Edit both languages together. */
export const locales = ['da', 'en'] as const;

export type Locale = (typeof locales)[number];

export type Text = {
	da: string;
	en: string;
};

export function tx(da: string, en: string): Text {
	return { da, en };
}

export function t(locale: Locale, text: Text): string {
	return text[locale];
}

export function localeFromPath(pathname: string): Locale {
	return pathname === '/da' || pathname.startsWith('/da/') ? 'da' : 'en';
}

export function resolveLocale(explicit: unknown, pathname: string): Locale {
	if (explicit === 'da' || explicit === 'en') return explicit;
	return localeFromPath(pathname);
}

export function stripLocale(pathname: string): string {
	const path = pathname || '/';
	if (path === '/da' || path === '/da/') return '/';
	if (path.startsWith('/da/')) return path.slice(3);
	return path.startsWith('/') ? path : `/${path}`;
}

/** Build a path in the given language. English stays unprefixed; Danish lives under /da/. */
export function localePath(locale: Locale, path: string): string {
	const hashAt = path.indexOf('#');
	const hash = hashAt >= 0 ? path.slice(hashAt) : '';
	let bare = stripLocale(hashAt >= 0 ? path.slice(0, hashAt) : path);
	if (!bare.startsWith('/')) bare = `/${bare}`;
	if (bare.length > 1 && !bare.endsWith('/')) bare = `${bare}/`;
	const localized = locale === 'da' ? (bare === '/' ? '/da/' : `/da${bare}`) : bare === '' ? '/' : bare;
	return `${localized}${hash}`;
}

export function isActivePath(pathname: string, href: string): boolean {
	const current = normalizePath(pathname);
	const target = normalizePath(href);
	if (target === '/' || target === '/da') return current === target;
	return current === target || current.startsWith(`${target}/`);
}

function normalizePath(pathname: string): string {
	const path = pathname || '/';
	if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
	return path;
}
