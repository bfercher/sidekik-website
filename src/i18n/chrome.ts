import { localizedPath, type Lang } from '../lib/seo';

export function chrome(lang: Lang) {
  const p = (path: string) => localizedPath(lang, path);

  if (lang === 'en') {
    return {
      homeHref: p('/'),
      homeAria: 'Sidekik home',
      menuAria: 'Open menu',
      navAria: 'Main navigation',
      langSwitch: 'Deutsch',
      nav: [
        { href: p('/'), label: 'Home' },
        { href: p('/features'), label: 'Features' },
        { href: p('/clubs'), label: 'For clubs' },
        { href: p('/blog'), label: 'Blog' },
        { href: p('/about'), label: 'About' },
      ],
      footerTagline: 'The app for paraglider pilots, Hike&Fly and clubs.',
      productTitle: 'Product',
      moreTitle: 'More',
      legalTitle: 'Legal',
      product: [
        { href: p('/features'), label: 'Features' },
        { href: p('/clubs'), label: 'For clubs' },
        { href: p('/challenges'), label: 'Challenges' },
        { href: p('/subscription'), label: 'PLUS' },
      ],
      more: [
        { href: p('/blog'), label: 'Blog' },
        { href: p('/about'), label: 'About' },
        { href: 'https://www.instagram.com/sidekik_paragliding/', label: 'Instagram', external: true },
        { href: 'mailto:hi@sidekik.cloud', label: 'Contact' },
      ],
      legal: [
        { href: '/terms-of-use', label: 'Terms of use' },
        { href: '/privacy-policy', label: 'Privacy policy' },
        { href: '/impressum', label: 'Imprint' },
        { href: '/account-loeschen', label: 'Delete account' },
      ],
      copyright: 'All rights reserved.',
      cookie: {
        message:
          'We use PostHog to understand how this website is used. That helps us improve Sidekik. More in our',
        privacyHref: '/privacy-policy',
        privacyLabel: 'Privacy Policy',
        accept: 'Accept',
        decline: 'Decline',
      },
    };
  }

  return {
    homeHref: p('/'),
    homeAria: 'Sidekik Startseite',
    menuAria: 'Menü öffnen',
    navAria: 'Hauptnavigation',
    langSwitch: 'English',
    nav: [
      { href: p('/'), label: 'Home' },
      { href: p('/features'), label: 'Features' },
      { href: p('/clubs'), label: 'Für Clubs' },
      { href: p('/blog'), label: 'Blog' },
      { href: p('/about'), label: 'About' },
    ],
    footerTagline: 'Die App für Gleitschirmpiloten, Hike&Fly und Clubs.',
    productTitle: 'Produkt',
    moreTitle: 'Mehr',
    legalTitle: 'Rechtliches',
    product: [
      { href: p('/features'), label: 'Features' },
      { href: p('/clubs'), label: 'Für Clubs' },
      { href: p('/challenges'), label: 'Challenges' },
      { href: p('/subscription'), label: 'Abo' },
    ],
    more: [
      { href: p('/blog'), label: 'Blog' },
      { href: p('/about'), label: 'About' },
      { href: 'https://www.instagram.com/sidekik_paragliding/', label: 'Instagram', external: true },
      { href: 'mailto:hi@sidekik.cloud', label: 'Kontakt' },
    ],
    legal: [
      { href: '/nutzungsbedingungen', label: 'Nutzungsbedingungen' },
      { href: '/datenschutzrichtlinie', label: 'Datenschutz' },
      { href: '/impressum', label: 'Impressum' },
      { href: '/account-loeschen', label: 'Account löschen' },
    ],
    copyright: 'Alle Rechte vorbehalten.',
    cookie: {
      message:
        'Wir verwenden PostHog, um zu verstehen, wie diese Website genutzt wird. Das hilft uns, Sidekik zu verbessern. Mehr dazu in unserer',
      privacyHref: '/datenschutzrichtlinie',
      privacyLabel: 'Datenschutzrichtlinie',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
    },
  };
}
