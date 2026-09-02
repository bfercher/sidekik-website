import type { Lang } from '../lib/seo';

const copy = {
  de: {
    title: 'Über Sidekik | Mission und Geschichte',
    description:
      'Sidekik inspiriert Gleitschirmpiloten, sich Ziele zu setzen, Challenges anzunehmen und spielerisch besser zu werden.',
    missionLabel: 'Unsere Mission',
    mission:
      'Unsere Mission ist es, Gleitschirmpiloten zu inspirieren, sich neue Ziele zu setzen, spannende Herausforderungen anzunehmen und ihre Fähigkeiten spielerisch in einem unterstützenden und dynamischen Umfeld zu verbessern.',
    pillars: [
      {
        title: 'Spannende Ziele',
        text: 'Ein Ziel ist der erste Schritt zum Wachstum. Setzt dir eigene persönliche Ziele oder mach bei Club-Challenges mit.',
        icon: 'goals',
      },
      {
        title: 'Lebendige Community',
        text: 'Teile deine Abenteuer mit Gleichgesinnten und lerne von anderen in unserer aktiven Community – ganz egal, ob du Neuling oder Profi bist.',
        icon: 'community',
      },
      {
        title: 'Lernen durch Analyse',
        text: 'Entwickle dich kontinuierlich weiter durch Feedback aus der Community, Selbstreflexion, gezielten Zielsetzungen und Fluganalysen.',
        icon: 'analyse',
      },
    ],
    brandCopy:
      '“Sidekick” ist ein anderes Wort für “Wingman”. Es spiegelt die Rolle der Plattform als vertrauenswürdiger Begleiter und Unterstützer wider. Sidekik ist da, um dich bei deinen Gleitschirmabenteuern zu supporten, zu motivieren und zu leiten.',
    originTitle: 'Alles hat einen Anfang',
    originP1:
      'Die Idee entstand im Stubaital am Landeplatz. Mitglieder der “Stubaier Jochdohlen” schwärmten über ihr soeben erlebtes Gipfel-Sammel-Abenteuer und diskutierten Fehlentscheidungen, brenzlige Momente und Gipfel-Erfolge. Das Konzept haben wir im “Parateam Virgen” übernommen und gleich gemerkt, dass diese Form der Challenge nicht nur die Strecken-Cracks begeistert, sondern alle Erfahrungsstufen gleichermaßen einbindet. Es ist eine großartige Herausforderung über einen längeren Zeitraum und bietet enorm viele Möglichkeiten, sich als Pilot weiterzuentwickeln.',
    originP2:
      'Inspiriert von dieser Begeisterung, habe ich mir mit Sidekik es zur Aufgabe gemacht, dieses Format einem größeren Publikum zugänglich zu machen. Sidekik soll Piloten dazu motivieren, neue Gebiete zu erkunden, Gänsehaut-Feeling erzeugen, wenn sie über neue Gipfel soaren, gelegentlich ermutigen ihre Komfortzone zu verlassen und diese Abenteuer mit Freunden und Kollegen zu teilen – mit dem Ziel zu lernen und Spaß zu haben.',
    signature: 'Bernhard, Entwickler von Sidekik',
    photoAlt: 'Bernhard, Gründer von Sidekik, in den Bergen',
  },
  en: {
    title: 'About Sidekik | Mission and story',
    description:
      'Sidekik inspires paraglider pilots to set goals, take on challenges and get better — playfully.',
    missionLabel: 'Our mission',
    mission:
      'Our mission is to inspire paraglider pilots to set new goals, take on exciting challenges and improve their skills — playfully, in a supportive and dynamic environment.',
    pillars: [
      {
        title: 'Exciting goals',
        text: 'A goal is the first step toward growth. Set your own personal goals or join club challenges.',
        icon: 'goals',
      },
      {
        title: 'A living community',
        text: 'Share your adventures with people who get it and learn from others in an active community — whether you are new or a pro.',
        icon: 'community',
      },
      {
        title: 'Learn by analysing',
        text: 'Keep getting better through community feedback, self-reflection, clear goals and flight analysis.',
        icon: 'analyse',
      },
    ],
    brandCopy:
      '“Sidekick” is another word for “wingman”. It reflects the platform’s role as a trusted companion. Sidekik is there to support, motivate and guide you on your paragliding adventures.',
    originTitle: 'Everything has a beginning',
    originP1:
      'The idea started at the landing field in the Stubai Valley. Members of the “Stubaier Jochdohlen” were buzzing about a peak-collecting adventure they had just flown — bad decisions, close calls, summit wins. We brought the format to “Parateam Virgen” and immediately saw that this kind of challenge does not only excite XC specialists: it includes every experience level. It is a great long-term challenge and a huge opportunity to grow as a pilot.',
    originP2:
      'Inspired by that energy, I set out with Sidekik to make the format available to more pilots. Sidekik should motivate you to explore new areas, give you goosebumps when you soar new peaks, occasionally push you out of your comfort zone, and let you share those adventures with friends — to learn and to have fun.',
    signature: 'Bernhard, developer of Sidekik',
    photoAlt: 'Bernhard, founder of Sidekik, in the mountains',
  },
} as const;

export function about(lang: Lang) {
  return copy[lang];
}

export type AboutCopy = ReturnType<typeof about>;
