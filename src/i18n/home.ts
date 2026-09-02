import { localizedPath, type Lang } from '../lib/seo';

const copy = {
  de: {
    title: 'Sidekik | Die App für Gleitschirmpiloten und Clubs',
    description:
      'Tracke deine Hike&Fly- und XC-Abenteuer, setze und erreiche deine fliegerischen Ziele – gemeinsam mit deinen Freunden und Clubkollegen.',
    h1Before: 'Bring dein Gleitschirmfliegen aufs ',
    h1Accent: 'nächste Level.',
    h1After: '',
    lead: 'Tracke deine Hike&Fly- und XC-Abenteuer, setze und erreiche deine fliegerischen Ziele – gemeinsam mit deinen Freunden und Clubkollegen.',
    downloadLabel: 'Lade die kostenlose Sidekik App herunter',
    heroFrontAlt: 'Sidekik Tracking: Karte und Live-Werte',
    heroBackAlt: 'Sidekik Home-Feed: Hike&Fly Posts und Community',
    whyTitle: 'Warum Sidekik?',
    whyPoints: [
      'Setze dir Ziele und miss den Fortschritt.',
      'Flüge und Hike&Fly Abenteuer aufzeichnen und teilen.',
      'Support beim Erreichen deiner Ziele in der Luft.',
      'Fordere deine Kollegen bei spannenden Challenges heraus.',
    ],
    definitionTitle: 'Was ist Sidekik?',
    definition:
      'Sidekik ist eine kostenlose iOS- und Android-App für Gleitschirmpiloten. Tracke Hike&Fly- und XC-Flüge, nimm an Peak Hunt Club Challenges teil, sieh Livewind auf der Karte und folge Freunden. Sidekik funktioniert mit XContest, Garmin, Suunto und IGC/GPX; es ersetzt kein Fluginstrument.',
    trackingEyebrow: 'Tracking',
    trackingTitle: 'Unterstützung in der Luft',
    trackingChips: [
      'Hike & Fly Tracking',
      'Lufträume (OpenAIP)',
      'Kabel & Hindernisse',
      'Thermikkarte',
      'Wegpunkte-Assistent',
      'Live Windwerte',
    ],
    trackingFrontAlt: 'Sidekik Tracking im Flug: Karte, Live-Werte und andere Piloten',
    trackingBackAlt: 'Tracking starten: Challenge-Wegpunkte, Live Tracking und Offline Maps',
    xpEyebrow: 'XP & Level',
    xpTitle: 'Klettere im Leaderboard',
    xpText: 'XP für Strecke, Airtime und H&F-Dauer. Die besten 10 deines Clubs treten gegen andere Clubs an.',
    xpSeason: 'Season 2025',
    xpScore: '7.960 XP · LVL 2',
    xpLow: '4.000 XP',
    xpNext: '1.040 XP bis LVL 3',
    segmentsEyebrow: 'Segmente',
    segmentsTitle: 'Hol dir die Krone',
    segmentsText: 'Vergleiche deine Route mit der Bestzeit, sieh dir Ideallinien und Schlüsselstellen an.',
    segmentsAlt: 'Club-Segment mit Karte, Bestzeit und Ideallinie',
    clubsEyebrow: 'Für Clubs',
    clubsTitle: '200+ Clubs fliegen schon gemeinsam',
    clubsText:
      'Erstellt eure eigenen Herausforderungen und Flugaufgaben. Teilt eure Flüge und Hike&Flys untereinander und motiviert euch gegenseitig – die Auswertung macht Sidekik automatisch.',
    clubChips: ['Peak Hunt Challenge', 'Hike & Fly Challenge', 'Tasks & Wettbewerbe', 'Club-Segmente'],
    clubsLink: 'Alles für Clubs ansehen →',
    leaderboardTitle: 'Leaderboard',
    leaderboardSub: 'Gipfel Cup 2025',
    you: 'Du',
    leaderboardMeta: ['253 Flüge', '61h 35m', '451 WPs'],
    testimonials: [
      {
        quote:
          'Sidekik bringt unsere Piloten im Zillertal weg von den klassischen Rennstrecken, hin zu neuen kreativen Routen und neuen Abenteuern.',
        name: 'Bene Dornauer',
        role: 'Red Bull X-Alps Finisher 2025',
      },
      {
        quote: 'Die Peak Hunt Challenge motiviert mich voll, weil sie mich einfach auf neue Ideen und Berge bringt.',
        name: 'Nicole Heimberger',
        role: 'österr. XC Staatsmeisterin',
      },
      {
        quote: 'Sidekik hat alle unsere Club-Mitglieder zu besseren Piloten gemacht.',
        name: 'Robert Assmair',
        role: 'Parateam Virgen',
      },
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        q: 'Welches Equipment brauche ich?',
        a: 'Mit der Sidekik App trackst du Flüge und Hike&Fly Abenteuer und lädst sie direkt hoch. Du kannst auch Wegpunkte exportieren und dein GPS Vario oder andere Flugapps (XC Track, FlySkyHy, SeeYou Navigator) verwenden – die .IGC Datei lädst du dann hoch, oder du verknüpfst XContest, Garmin Connect oder Suunto für automatischen Import.',
      },
      {
        q: 'Ist Sidekik für Piloten kostenlos?',
        a: 'Sidekik ist in der Basisversion kostenlos. Zusätzliche Funktionen gibt es über ein monatliches oder jährliches Abo.',
      },
      {
        q: 'Ist Sidekik für Clubs und Vereine kostenlos?',
        a: 'Registrierte Mitglieder können kostenlos einen Club erstellen, dessen Mitglieder verwalten und eine Challenge pro Jahr über Sidekik veranstalten. Tasks und erweiterte Auswertungen gibt es im Club-Abo.',
      },
      {
        q: 'Wie funktioniert die Club-Challenge?',
        a: '15–30 markante Wegpunkte, ein Zeitraum, automatische Auswertung deiner hochgeladenen Flüge – Punkte, Bonuspunkte, Leaderboard.',
      },
      {
        q: 'Ist Sidekik nur für erfahrene Piloten?',
        a: 'Nein – ganz im Gegenteil. Sidekik ist für alle Pilot:innen mit Lizenz, die regelmäßig fliegen und dabei motiviert bleiben wollen. Egal ob du gerade erst deinen A-Schein gemacht hast oder schon 100+ XC-Flüge hinter dir hast: Wenn du Lust hast, neue Flugziele zu entdecken, Fortschritte zu sehen und deine Abenteuer zu teilen, bist du bei Sidekik genau richtig.',
      },
      {
        q: 'Ich fliege (noch) keine langen XC-Strecken – bringt mir die App trotzdem was?',
        a: 'Ja! Du kannst mit Sidekik Hike&Fly-Ziele sammeln, an Challenges teilnehmen, Sidekik als dein Flugbuch verwenden, deine Höhenmeter, Airtime & Fortschritte verfolgen und dich von Flügen anderer inspirieren lassen. Schon kleine Fortschritte werden sichtbar – und motivieren zum Dranbleiben.',
      },
      {
        q: 'Welche Hike&Fly Funktionen gibt es?',
        a: 'Wenn du eine Aktivität hochlädst, erkennt Sidekik automatisch, welche Abschnitte du geflogen und welche du zu Fuß zurückgelegt hast. Diese werden auf der Karte farblich unterschiedlich dargestellt. So erhältst du eine eigene Hike&Fly-Statistik, in der Flug- und Gehstrecken separat ausgewertet werden.',
      },
      {
        q: 'Kann ich meine Flüge von XContest importieren?',
        a: 'Ja, du kannst dein Sidekik Konto mit deinem XContest Konto verbinden und die Flüge von dort importieren. Wichtig ist nur, dass du sie am selben Tag an dem du geflogen bist noch bei XContest einreichst. Ältere Flüge können nicht importiert werden.',
      },
      {
        q: 'Kann ich meine Flüge von DHV XC importieren?',
        a: 'Das geht leider noch nicht. Es gibt derzeit noch keine Schnittstelle für Drittanbieter, an der Sidekik andocken könnte. Du kannst aber die XContest Verknüpfung verwenden, oder deine Flüge als .IGC oder .GPX Datei hochladen.',
      },
      {
        q: 'Ich verwende eine Fitness Uhr (Garmin, Suunto, etc.) für Hike&Fly Tracking. Wie kann ich diese mit Sidekik verwenden?',
        a: 'Du kannst in den App-Einstellungen deinen Garmin Connect oder Suunto Account direkt mit Sidekik verknüpfen. Bei Suunto kannst du nach erfolgreicher Verknüpfung Aktivitäten vom Typ Hike, Paragliding, Trail-Run, Skitour importieren. Bei Garmin lassen sich Aktivitäten vom Typ Hike, Mountaineering oder Trail-Run importieren.',
      },
    ],
    ctaTitle: 'Starte dein Abenteuer',
    ctaText: 'Lade die kostenlose Sidekik App herunter',
  },
  en: {
    title: 'Sidekik | The app for paraglider pilots and clubs',
    description:
      'Track your Hike&Fly and XC adventures, set flying goals and reach them — with your friends and clubmates.',
    h1Before: 'Take your paragliding to the ',
    h1Accent: 'next level.',
    h1After: '',
    lead: 'Track your Hike&Fly and XC adventures, set flying goals and reach them — with your friends and clubmates.',
    downloadLabel: 'Download the free Sidekik app',
    heroFrontAlt: 'Sidekik tracking: map and live values',
    heroBackAlt: 'Sidekik home feed: Hike&Fly posts and community',
    whyTitle: 'Why Sidekik?',
    whyPoints: [
      'Set goals and measure your progress.',
      'Record and share flights and Hike&Fly adventures.',
      'Support in the air while you chase your goals.',
      'Challenge your clubmates with Peak Hunt and tasks.',
    ],
    definitionTitle: 'What is Sidekik?',
    definition:
      'Sidekik is a free iOS and Android app for paraglider pilots. Track Hike&Fly and XC flights, join Peak Hunt club challenges, see Livewind on the map, and follow friends. It works with XContest, Garmin, Suunto, and IGC/GPX; it does not replace a flight instrument.',
    trackingEyebrow: 'Tracking',
    trackingTitle: 'Support in the air',
    trackingChips: [
      'Hike & Fly tracking',
      'Airspace (OpenAIP)',
      'Cables & obstacles',
      'Thermal map',
      'Waypoint assistant',
      'Live wind values',
    ],
    trackingFrontAlt: 'Sidekik tracking in flight: map, live values and other pilots',
    trackingBackAlt: 'Start tracking: challenge waypoints, live tracking and offline maps',
    xpEyebrow: 'XP & Level',
    xpTitle: 'Climb the leaderboard',
    xpText: 'XP for distance, airtime and H&F duration. The top 10 of your club compete against other clubs.',
    xpSeason: 'Season 2025',
    xpScore: '7,960 XP · LVL 2',
    xpLow: '4,000 XP',
    xpNext: '1,040 XP to LVL 3',
    segmentsEyebrow: 'Segments',
    segmentsTitle: 'Take the crown',
    segmentsText: 'Compare your line with the best time, see ideal lines and key sections.',
    segmentsAlt: 'Club segment with map, best time and ideal line',
    clubsEyebrow: 'For clubs',
    clubsTitle: '200+ clubs already fly together',
    clubsText:
      'Create your own challenges and flight tasks. Share flights and Hike&Flys and keep each other motivated — Sidekik scores them automatically.',
    clubChips: ['Peak Hunt Challenge', 'Hike & Fly Challenge', 'Tasks & competitions', 'Club segments'],
    clubsLink: 'See everything for clubs →',
    leaderboardTitle: 'Leaderboard',
    leaderboardSub: 'Summit Cup 2025',
    you: 'You',
    leaderboardMeta: ['253 flights', '61h 35m', '451 WPs'],
    testimonials: [
      {
        quote:
          'Sidekik takes our pilots in the Zillertal off the classic race lines and onto new creative routes and new adventures.',
        name: 'Bene Dornauer',
        role: 'Red Bull X-Alps Finisher 2025',
      },
      {
        quote: 'The Peak Hunt Challenge really motivates me because it simply puts new ideas and mountains in my head.',
        name: 'Nicole Heimberger',
        role: 'Austrian XC national champion',
      },
      {
        quote: 'Sidekik has made every member of our club a better pilot.',
        name: 'Robert Assmair',
        role: 'Parateam Virgen',
      },
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        q: 'What equipment do I need?',
        a: 'With the Sidekik app you track flights and Hike&Fly adventures and upload them directly. You can also export waypoints and use your GPS vario or other flight apps (XC Track, FlySkyHy, SeeYou Navigator) — then upload the .IGC file, or connect XContest, Garmin Connect or Suunto for automatic import.',
      },
      {
        q: 'Is Sidekik free for pilots?',
        a: 'Sidekik is free in the basic version. Extra features are available with a monthly or yearly PLUS subscription.',
      },
      {
        q: 'Is Sidekik free for clubs?',
        a: 'Registered members can create a club for free, manage its members and run one challenge per year on Sidekik. Tasks and advanced stats come with the club subscription.',
      },
      {
        q: 'How does a club challenge work?',
        a: '15–30 distinctive waypoints, a time window, automatic scoring of your uploaded flights — points, bonus points, leaderboard.',
      },
      {
        q: 'Is Sidekik only for experienced pilots?',
        a: 'No — quite the opposite. Sidekik is for every licensed pilot who flies regularly and wants to stay motivated. Whether you just got your first licence or already have 100+ XC flights: if you want new flying goals, visible progress and a place to share adventures, you are in the right place.',
      },
      {
        q: 'I do not fly long XC yet — is the app still useful?',
        a: 'Yes. You can collect Hike&Fly goals, join challenges, use Sidekik as your logbook, track altitude gain, airtime and progress, and get inspired by other pilots. Even small steps become visible — and that keeps you going.',
      },
      {
        q: 'What Hike&Fly features are there?',
        a: 'When you upload an activity, Sidekik automatically detects which parts you flew and which you hiked. They are shown in different colours on the map. You get a dedicated Hike&Fly statistic with flight and hike sections scored separately.',
      },
      {
        q: 'Can I import flights from XContest?',
        a: 'Yes. Connect your Sidekik account to XContest and import flights from there. You need to submit them to XContest on the same day you flew. Older flights cannot be imported.',
      },
      {
        q: 'Can I import flights from DHV XC?',
        a: 'Not yet. There is currently no third-party interface Sidekik could connect to. You can use the XContest link, or upload flights as .IGC or .GPX files.',
      },
      {
        q: 'I use a sports watch (Garmin, Suunto, etc.) for Hike&Fly tracking. How do I use it with Sidekik?',
        a: 'In the app settings you can connect Garmin Connect or Suunto directly. After linking Suunto you can import Hike, Paragliding, Trail-Run and ski-tour activities. Garmin supports Hike, Mountaineering and Trail-Run.',
      },
    ],
    ctaTitle: 'Start your adventure',
    ctaText: 'Download the free Sidekik app',
  },
} as const;

export function home(lang: Lang) {
  return {
    ...copy[lang],
    clubsHref: localizedPath(lang, '/clubs'),
  };
}

export type HomeCopy = ReturnType<typeof home>;
