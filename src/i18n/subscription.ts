import type { Lang } from '../lib/seo';

const copy = {
  de: {
    title: 'Sidekik PLUS | Abo für Ziele, Stats und Segmente',
    description: 'Das Beste von Sidekik - gemacht für deine Ziele. Alles was du brauchst um deine fliegerischen Ziele zu erreichen.',
    h1: 'Sidekik PLUS',
    lead: 'Das Beste von Sidekik - gemacht für deine Ziele.',
    gridTitle: 'Alles was du brauchst um deine fliegerischen Ziele zu erreichen',
    features: [
      {
        title: 'Navigation Features',
        text: 'Direkt im Tracking kannst du dir Wendepunkte von den Challenges laden und bekommst Assistenz während deines Hike & Fly.',
      },
      {
        title: 'Persönliche Ziele',
        text: 'Setze dir persönliche Ziele und lass dir deinen Fortschritt anzeigen. Das hilft enorm die gesetzten Ziele auch zu erreichen.',
      },
      {
        title: 'Alle Statistiken',
        text: 'Dein Fortschritt, deine Statistiken. Mit PLUS kannst du tiefer in die Auswertung gehen und mehr Statistiken anzeigen.',
      },
      {
        title: 'XC Segmente',
        text: 'Wie schneidest du ab im Vergleich mit anderen Piloten? Finde es heraus mit den vollständigen Leaderboards bei XC Segmenten.',
      },
    ],
    more: '+ viele weitere PLUS Features für 2026 geplant',
    supportTitle: 'Unterstütze die Entwicklung',
    supportText:
      'Sidekik wird von einem Ein-Mann-Team betrieben und ist komplett unabhängig entstanden – ohne Investoren und ohne großes Unternehmen im Hintergrund. Mit einem PLUS-Abo kannst du den Erhalt und die Weiterentwicklung der Plattform unterstützen und fördern.',
    ctaTitle: 'Hol dir Sidekik PLUS',
    ctaText: 'Schalte alle Features frei und unterstütze die Entwicklung.',
    ctaButton: 'Jetzt starten',
  },
  en: {
    title: 'Sidekik PLUS | Subscription for goals, stats and segments',
    description: 'The best of Sidekik — built for your goals. Everything you need to reach your flying targets.',
    h1: 'Sidekik PLUS',
    lead: 'The best of Sidekik — built for your goals.',
    gridTitle: 'Everything you need to reach your flying goals',
    features: [
      {
        title: 'Navigation features',
        text: 'Load challenge turnpoints straight into tracking and get assistance during your Hike & Fly.',
      },
      {
        title: 'Personal goals',
        text: 'Set personal goals and see your progress. That makes it much easier to actually reach them.',
      },
      {
        title: 'All statistics',
        text: 'Your progress, your stats. PLUS lets you go deeper and show more statistics.',
      },
      {
        title: 'XC segments',
        text: 'How do you compare with other pilots? Find out on the full XC segment leaderboards.',
      },
    ],
    more: '+ many more PLUS features planned for 2026',
    supportTitle: 'Support the development',
    supportText:
      'Sidekik is run by a one-person team and was built independently — no investors, no large company behind it. A PLUS subscription helps keep the platform running and growing.',
    ctaTitle: 'Get Sidekik PLUS',
    ctaText: 'Unlock every feature and support the development.',
    ctaButton: 'Get started',
  },
} as const;

export function subscription(lang: Lang) {
  return copy[lang];
}

export type SubscriptionCopy = ReturnType<typeof subscription>;
