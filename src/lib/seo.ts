export const SITE_URL = 'https://www.sidekik.cloud';

/** Primary language of the site; used for the hreflang x-default annotation. */
export const DEFAULT_LANG = 'de';

export const ORGANIZATION = {
  name: 'Sidekik',
  legalName: 'Sidekik GmbH',
  email: 'hi@sidekik.cloud',
  instagram: 'https://www.instagram.com/sidekik_paragliding/',
  /** Public square mark; used as Organization / publisher logo in JSON-LD. */
  logo: '/apple-touch-icon.png',
};

/**
 * Store ratings, as of 2026-08-31. Google requires the rating in structured data
 * to match the rating shown on the page, so the homepage renders these same
 * values rather than hard-coding its own — update here and both move together.
 *
 * Combined value is the count-weighted mean of the two stores:
 *   (4.6 × 98 + 4.767 × 60) / 158 = 4.663 → 4.7
 */
export const APP = {
  name: 'Sidekik',
  stores: {
    apple: {
      ratingValue: '4.6',
      ratingCount: 98,
      url: 'https://apps.apple.com/app/sidekik-paragliding-hike-fly/id6738481976',
    },
    google: {
      ratingValue: '4.767',
      ratingCount: 60,
      url: 'https://play.google.com/store/apps/details?id=com.armadaar5org.sidekikapp',
    },
  },
  /** Machine-readable form; see ratingValueLocalized for display. */
  ratingValue: '4.7',
  ratingCount: 158,
};

/** German decimal comma, for rendering the rating in page copy. */
export function ratingValueLocalized(): string {
  return APP.ratingValue.replace('.', ',');
}

export type Lang = 'de' | 'en';

/** Visible rating line — keep in lockstep with AggregateRating. */
export function ratingLine(lang: Lang = 'de'): string {
  if (lang === 'en') {
    return `${APP.ratingValue} out of 5 from ${APP.ratingCount} reviews · 2,500+ pilots`;
  }
  return `${ratingValueLocalized()} von 5 aus ${APP.ratingCount} Bewertungen · 2.500+ Piloten`;
}

/**
 * Pages that exist in more than one language. Declared once, in one place,
 * because hreflang is only honoured when every variant in a set points at every
 * other variant — maintaining the annotations per-page is how they silently rot.
 */
const TRANSLATIONS: Record<string, string>[] = [
  { de: '/', en: '/en' },
  { de: '/features', en: '/en/features' },
  { de: '/clubs', en: '/en/clubs' },
  { de: '/about', en: '/en/about' },
  { de: '/challenges', en: '/en/challenges' },
  { de: '/subscription', en: '/en/subscription' },
  { de: '/blog', en: '/en/blog' },
  { de: '/datenschutzrichtlinie', en: '/privacy-policy' },
  { de: '/nutzungsbedingungen', en: '/terms-of-use' },
  {
    de: '/post/ziele-setzen-besser-fliegen-warum-persönliche-ziele-deinen-flug-verändern',
    en: '/post/set-goals-fly-better-why-personal-goals-change-your-flight',
  },
  { de: '/post/quickstart-guide', en: '/post/getting-started-with-sidekik' },
  { de: '/post/xcontest-synchronisierung', en: '/post/automatic-xcontest-import' },
  {
    de: '/post/flugplanung-mit-flyskyhy-und-sidekik',
    en: '/post/flight-planning-with-flyskyhy-and-sidekik',
  },
  {
    de: '/post/sidekik-2025-neue-regeln-intelligente-flugauswertung-vereinfachte-einreichung',
    en: '/post/peak-hunt-2025-new-rules',
  },
  {
    de: '/post/sidekik-jetzt-als-mobile-app-für-ios-und-android-verfügbar-mit-spannenden-updates',
    en: '/post/sidekik-mobile-app-for-ios-and-android',
  },
  { de: '/post/experience-points-und-level', en: '/post/experience-points-and-levels' },
  { de: '/post/hike-fly-tracking-beta', en: '/post/hike-fly-tracking-beta-launch' },
  { de: '/post/podcast-mit-lucian-haas', en: '/post/podcast-with-lucian-haas' },
  {
    de: '/post/live-windwerte-in-sidekik-bessere-entscheidungen-am-berg-und-in-der-luft',
    en: '/post/live-wind-values-in-sidekik',
  },
  { de: '/post/hike-fly-import-von-garmin-connect', en: '/post/hike-fly-import-from-garmin-connect' },
  { de: '/post/hike-fly-import-von-suunto-watch', en: '/post/hike-fly-import-from-suunto-watch' },
  {
    de: '/post/flugwetterprognose-mit-paraglidable-com',
    en: '/post/flight-weather-forecast-with-paraglidable',
  },
  { de: '/post/wingmates-gemeinsam-fliegen-gehen', en: '/post/wingmates-go-flying-together' },
  { de: '/post/neue-berechnung-von-xp', en: '/post/new-xp-calculation' },
  {
    de: '/post/die-neuen-statistiken-für-piloten-clubs-und-challenges-bei-sidekik',
    en: '/post/new-statistics-for-pilots-clubs-and-challenges',
  },
  { de: '/post/tracking-reloaded', en: '/post/sidekik-tracking-reloaded' },
  {
    de: '/post/livewind-by-breezedude-de-tausende-neue-windstationen-in-sidekik',
    en: '/post/livewind-by-breezedude-thousands-of-new-wind-stations',
  },
];

export function normalizePath(path: string): string {
  return path.replace(/\/$/, '') || '/';
}

/** Prefix English routes; German paths stay unprefixed. */
export function localizedPath(lang: Lang, path: string): string {
  const p = normalizePath(path);
  if (lang === 'de') return p;
  return p === '/' ? '/en' : `/en${p}`;
}

/** Translation pair for a path, or null when the page exists in only one language. */
export function getTranslationPaths(path: string): { de: string; en: string } | null {
  const p = normalizePath(path);
  const group = TRANSLATIONS.find((g) => Object.values(g).includes(p));
  if (!group?.de || !group?.en) return null;
  return { de: group.de, en: group.en };
}

/** Other language of a translated path, or the locale home if none exists. */
export function getSiblingPath(path: string, targetLang: Lang): string {
  const group = getTranslationPaths(path);
  if (group?.[targetLang]) return group[targetLang];
  return targetLang === 'en' ? '/en' : '/';
}

export interface Alternate {
  hreflang: string;
  href: string;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

/**
 * Returns the hreflang set for a path, including a self-reference and
 * x-default, or an empty array when the page has no translation.
 */
export function getAlternates(path: string): Alternate[] {
  const group = TRANSLATIONS.find((g) => Object.values(g).includes(normalizePath(path)));
  if (!group) return [];

  const alternates: Alternate[] = Object.entries(group).map(([lang, p]) => ({
    hreflang: lang,
    href: absoluteUrl(p),
  }));

  const fallback = group[DEFAULT_LANG];
  if (fallback) {
    alternates.push({ hreflang: 'x-default', href: absoluteUrl(fallback) });
  }

  return alternates;
}
