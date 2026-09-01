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

/** Visible rating line — keep in lockstep with AggregateRating. */
export function ratingLine(): string {
  return `${ratingValueLocalized()} von 5 aus ${APP.ratingCount} Bewertungen · 2.500+ Piloten`;
}

/**
 * Pages that exist in more than one language. Declared once, in one place,
 * because hreflang is only honoured when every variant in a set points at every
 * other variant — maintaining the annotations per-page is how they silently rot.
 */
const TRANSLATIONS: Record<string, string>[] = [
  { de: '/datenschutzrichtlinie', en: '/privacy-policy' },
  { de: '/nutzungsbedingungen', en: '/terms-of-use' },
  {
    de: '/post/ziele-setzen-besser-fliegen-warum-persönliche-ziele-deinen-flug-verändern',
    en: '/post/set-goals-fly-better-why-personal-goals-change-your-flight',
  },
];

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
  const group = TRANSLATIONS.find((g) => Object.values(g).includes(path));
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
