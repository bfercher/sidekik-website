import type { Lang } from '../lib/seo';

const copy = {
  de: {
    title: 'Blog | Guides und Updates für Gleitschirmpiloten',
    description: 'Guides, Updates und Geschichten. Erfahre Neuigkeiten rund um Sidekik und lerne die Plattform optimal zu nutzen.',
    h1: 'Guides, Updates und Geschichten',
    lead: 'Erfahre Neuigkeiten rund um Sidekik und lerne die Plattform optimal zu nutzen.',
    locale: 'de-DE',
  },
  en: {
    title: 'Blog | Guides and updates for paraglider pilots',
    description: 'Guides, updates and stories. News around Sidekik and how to get the most from the platform.',
    h1: 'Guides, updates and stories',
    lead: 'News around Sidekik and how to get the most from the platform.',
    locale: 'en-GB',
  },
} as const;

export function blog(lang: Lang) {
  return copy[lang];
}

export type BlogCopy = ReturnType<typeof blog>;
