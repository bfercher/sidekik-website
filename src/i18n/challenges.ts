import type { Lang } from '../lib/seo';

const copy = {
  de: {
    title: 'Peak Hunt Challenges | Sidekik',
    description:
      'Regeln und Punktesystem der Sidekik Peak Hunt Challenges: Schwierigkeitsstufen, Bonuspunkte und wie du teilnimmst.',
    h1: 'Peak Hunt Challenges',
    lead: 'Sammle Gipfel und markante Wegpunkte fliegend und zu Fuß, erhalte Punkte und Bonuspunkte und steig auf im Leaderboard.',
    rulesTitle: 'Regeln und Punktesystem',
    peaksTitle: 'Peaks',
    peaksBody:
      'Jeder Peak (Wegpunkt) ist mit Koordinaten, einem Radius und einem Typ definiert. Damit ein Peak markiert ist, muss der Flug oder Hike Track den Radius kreuzen.',
    typesTitle: '3 Peak Typen',
    types: [
      { strong: 'Hike & Fly (standard)', rest: ' — Kann entweder zu Fuß, oder in der Luft markiert werden' },
      {
        strong: 'Fly only (Paragleiter Symbol)',
        rest: ' — Kann nur im Flug markiert werden. Es wird überprüft, ob sich der Pilot niemals über 20 Sekunden durchgehend unterhalb 10km/h innerhalb des Radius aufhält',
      },
      {
        strong: 'Hike only (Wanderer Symbol)',
        rest: ' — Können nur zu Fuß markiert werden. Es wird überprüft, ob sich der Pilot 20 Sekunden unterhalb 10km/h innerhalb des Radius aufhält',
      },
    ],
    typesNote:
      '☝️ Ein Peak muss nicht unbedingt ein Gipfel sein - kann auch ein anderer "Höhepunkt" sein, wie z.B. ein See, ein Bahnhof, eine Almhütte etc..',
    scoringTitle: 'Punktevergabe',
    scoringIntro: 'Beispiel Punkte von der Pinzgau Challenge',
    scoringLevels: 'Jeder Peak hat einen Schwierigkeitsgrad: "Einfach", "Mittel", "Schwer", "Sehr Schwer"',
    scoringRadius:
      'Jeder Peak hat einen vordefinierten Radius zwischen 50m und 1500m. Berührt der Flug- oder Hike-Track den Radius, bekommt man die Punkte.',
    scoringByDifficulty: 'Je nach Schwierigkeit hat der Peak unterschiedlich viele Punkte:',
    scoringPoints: [
      'Einfach: 8 Pkt (blau)',
      'Mittel: 10 Punkte (rot)',
      'Schwer: 12 Punkte (schwarz)',
      'Sehr Schwer: 14 Punkte (schwarz mit gelber Schrift)',
    ],
    scoringOnce: 'Die Punkte für den Peak bekommt man nur einmal pro Challenge.',
    scoringFlight:
      'Zusätzlich: Pro Flug, pro Kalendertag bekommt man 0,5 Punkte für einen Flug, der mindestens einen Peak berührt (egal ob dieser Peak schon geholt wurde oder nicht)',
    proximityTitle: 'Bonuspunkte durch "Proximity"',
    proximitySimple:
      'Die einfache Erklärung: Je näher du zum Mittelpunkt fliegst, desto mehr Bonuspunkte bekommst du (maximal 2 Pkt).',
    proximityDetail:
      'Die genaue Definition und Berechnung: Jeder Peak hat einen vordefinierten Radius. Das Einfliegen in diesen Radius bringt dem Piloten alle Punkte für diesen Peak ein. Zusätzlich können Piloten bis zu 2 Bonuspunkte verdienen, indem sie sich bis zum Zentrum des Peaks nähern. Die Bonuspunkte steigen linear von 0 Punkte bei Eintritt in den Radius, 2 Punkte bei exakten Überfliegen der Koordinaten. Die Bonuspunkte werden auf zwei Kommastellen gerundet. Bonuspunkte können in einem anderen Flug verbessert werden. Ist man zu Fuß dort (starten, oder durchgehen), bekommt man automatisch die 2 Bonuspunkte.',
    proximitySafety:
      '☝️ Es sei hier anzumerken (wie wir ja alle wissen), dass das hangnahe Fliegen gefährlich sein kann. Besonders in Gipfelnähe ist oft mit Turbolenzen zu rechnen. Lieber hoch aufdrehen oder an einem anderen Tag mit besseren Bedingungen versuchen. Die Bonuspunkte laufen nicht davon :-).',
    proximityAlt: 'Sidekik Entfernungsanzeige zum Peak-Mittelpunkt für Proximity-Bonuspunkte',
    seriesTitle: 'Bonuspunkte durch "Peak-Serie"',
    seriesSimple:
      'Die einfache Erklärung: Je mehr Peaks du an einem Kalendertag sammelst, desto besser für dein Ranking.',
    seriesDetail:
      'Die Berechnung: Ab dem zweiten Peak pro Kalendertag (egal ob in einem oder mehreren Flügen) bekommst du 0,5 Bonuspunkte pro zusätzlichen Peak. Das gilt auch für Peaks, die du an anderen Tagen bereits geholt hast.',
    seriesFormula: 'Formel: (Anzahl Peaks - 1) * 0,5',
    seriesExample: 'Beispiel: 6 Peaks = (6-1) * 0,5 = 2,5 Punkte',
    exampleTitle: 'Ein Beispiel',
    exampleIntro: 'Hike&Fly mit 3 Peaks (schwarz fliegend, pink zu Fuß)',
    exampleItems: [
      'Flug: 0,5 Punkte für den Flug, weil dieser mindestens einen "Peak" berührt',
      'Bonuspunkte Peakserie: 1 Bonuspunkt für Peak-Serie (2 zusätzliche "Peaks")',
      'Gesamt: 0,5 (Flug)+9,98+12+11,93 (Peaks)+1 (Serie)=35,41 Pkt.',
    ],
    howTitle: 'Wie du einfach teilnehmen kannst',
    howSteps: [
      { strong: 'Sidekik App herunterladen.', rest: ' Sidekik gibt\'s für Android und iOS in den jeweiligen Stores.' },
      {
        strong: 'An einer Challenge teilnehmen.',
        rest: ' Lies dir die Regeln und Teilnahmebedingungen durch und trete der Challenge bei.',
      },
      {
        strong: 'Export der Wegpunkte',
        rest: ' auf dein GPS-Gerät/Flug-App oder tracke deinen Flug, dein H&F direkt mit der Sidekik App',
      },
      {
        strong: 'Genieße deine Abenteuer.',
        rest: ' Sammle Punkte in dem du die Peaks fliegend oder zu Fuß erreichst - je nach Wegpunke definiert sind.',
      },
      {
        strong: 'Flug speichern oder hochladen.',
        rest: ' Wenn du mit der Sidekik App deinen Flug getrackt hast, dann kannst du ihn direkt online speichern. Du kannst aber auch deine .igc oder .gpx Datei hochladen und mit deinen Freunden teilen.',
      },
      {
        strong: 'Auswertung ansehen, Leaderboard klettern.',
        rest: ' Dein Flug wird automatisch analysiert. Schau dir an welche Peaks du markiert hast und wieviele Punkte du gesammelt hast. Dein aktueller Rang wird direkt im Leaderboard angezeigt.',
      },
    ],
    generalTitle: 'Allgemeine Regeln',
    general: [
      'Alle in dem vordefinierten Zeitraum hochgeladenen Flüge zählen zur Challenge. Die Flüge müssen mindestens bis zum Enddatum 23:59 eingereicht sein.',
      'Flüge müssen innerhalb von 2 Wochen eingereicht werden, damit sie für die Wertung gezählt werden.',
      'Du kannst dich jederzeit vor oder während des Herausforderungszeitraums registrieren und an der Herausforderung teilnehmen.',
      'Unter Umständen darf nur auf vordefinierten Startplätzen gestartet werden (Je nach Challenge).',
      'Gelandet werden darf überall.',
      'Flüge, die gegen Luftverkehrsgesetze verstoßen, werden von der Challenge disqualifiziert (wird nicht vom System überprüft.).',
    ],
    safetyTitle: 'Sicherheit und Haftung',
    safety: [
      'Vermeide es, beim Überfliegen eines Gipfels zu nah am Gelände zu fliegen. Halte immer einen sicheren Abstand zum Boden ein.',
      'Sei vorsichtig bei starken Thermiken und Turbulenzen in der Nähe von Gipfeln. Wenn die Bedingungen gefährlich sind, versuche nicht, den Gipfel zu markieren. Du kannst es an einem anderen Tag erneut versuchen und trotzdem die vollen Punkte erhalten.',
      'Wetterbedingungen: Überprüfe immer die Wetterbedingungen vor dem Flug und vermeide das Fliegen bei unsicheren Bedingungen.',
      'Bitte Lufträume und jagdliche Flugverbotszonen beachten.',
      'Jeder Pilot ist für sich selber verantwortlich und benötigt eine gültige Fluglizenz. Dies wird vom Plattformbetreiber nicht überprüft.',
    ],
    ctaTitle: 'Starte dein Abenteuer!',
    ctaText: 'Lade die kostenlose Sidekik App herunter',
    ctaButton: 'App herunterladen',
  },
  en: {
    title: 'Peak Hunt Challenges | Sidekik',
    description:
      'Rules and scoring for Sidekik Peak Hunt Challenges: difficulty levels, bonus points and how to take part.',
    h1: 'Peak Hunt Challenges',
    lead: 'Collect peaks and distinctive waypoints by air and on foot, earn points and bonus points, and climb the leaderboard.',
    rulesTitle: 'Rules and scoring',
    peaksTitle: 'Peaks',
    peaksBody:
      'Each peak (waypoint) has coordinates, a radius and a type. To mark a peak, the flight or hike track must cross the radius.',
    typesTitle: '3 peak types',
    types: [
      { strong: 'Hike & Fly (default)', rest: ' — Can be marked on foot or in the air' },
      {
        strong: 'Fly only (paraglider icon)',
        rest: ' — Can only be marked in flight. The system checks that the pilot never stays below 10 km/h for more than 20 seconds inside the radius',
      },
      {
        strong: 'Hike only (hiker icon)',
        rest: ' — Can only be marked on foot. The system checks that the pilot stays below 10 km/h for 20 seconds inside the radius',
      },
    ],
    typesNote:
      '☝️ A peak does not have to be a summit — it can be another highlight, such as a lake, a station or a mountain hut.',
    scoringTitle: 'Scoring',
    scoringIntro: 'Example points from the Pinzgau Challenge',
    scoringLevels: 'Each peak has a difficulty: "Easy", "Medium", "Hard", "Very hard"',
    scoringRadius:
      'Each peak has a predefined radius between 50 m and 1,500 m. If the flight or hike track touches the radius, you get the points.',
    scoringByDifficulty: 'Points depend on difficulty:',
    scoringPoints: [
      'Easy: 8 pts (blue)',
      'Medium: 10 points (red)',
      'Hard: 12 points (black)',
      'Very hard: 14 points (black with yellow type)',
    ],
    scoringOnce: 'You only get the peak points once per challenge.',
    scoringFlight:
      'On top: per flight, per calendar day, you get 0.5 points for a flight that touches at least one peak (whether or not that peak was already collected)',
    proximityTitle: 'Bonus points from "Proximity"',
    proximitySimple:
      'The simple version: the closer you fly to the centre, the more bonus points you get (maximum 2 pts).',
    proximityDetail:
      'The exact definition: each peak has a predefined radius. Entering that radius awards all points for the peak. Pilots can earn up to 2 extra bonus points by getting closer to the centre. Bonus rises linearly from 0 at the edge of the radius to 2 for flying exactly over the coordinates. Bonus is rounded to two decimals. You can improve bonus on a later flight. If you are there on foot (launch or walk through), you automatically get the 2 bonus points.',
    proximitySafety:
      '☝️ Flying close to terrain is dangerous — we all know that. Near summits you often get turbulence. Better to climb out high or try another day with better conditions. The bonus points will still be there :-).',
    proximityAlt: 'Sidekik distance readout to the peak centre for proximity bonus points',
    seriesTitle: 'Bonus points from a "Peak series"',
    seriesSimple: 'The simple version: the more peaks you collect on one calendar day, the better for your ranking.',
    seriesDetail:
      'The calculation: from the second peak on a calendar day (in one or several flights) you get 0.5 bonus points per extra peak. That also applies to peaks you already collected on other days.',
    seriesFormula: 'Formula: (number of peaks − 1) × 0.5',
    seriesExample: 'Example: 6 peaks = (6 − 1) × 0.5 = 2.5 points',
    exampleTitle: 'An example',
    exampleIntro: 'Hike&Fly with 3 peaks (black flying, pink on foot)',
    exampleItems: [
      'Flight: 0.5 points because the flight touches at least one peak',
      'Peak-series bonus: 1 bonus point for the series (2 extra peaks)',
      'Total: 0.5 (flight) + 9.98 + 12 + 11.93 (peaks) + 1 (series) = 35.41 pts',
    ],
    howTitle: 'How to take part',
    howSteps: [
      { strong: 'Download the Sidekik app.', rest: ' Sidekik is on Android and iOS in the stores.' },
      {
        strong: 'Join a challenge.',
        rest: ' Read the rules and terms, then join the challenge.',
      },
      {
        strong: 'Export the waypoints',
        rest: ' to your GPS / flight app, or track the flight or H&F directly in Sidekik',
      },
      {
        strong: 'Enjoy the adventure.',
        rest: ' Collect points by reaching peaks in the air or on foot — depending on how each waypoint is defined.',
      },
      {
        strong: 'Save or upload the flight.',
        rest: ' If you tracked with Sidekik, save it online. You can also upload an .igc or .gpx file and share it with friends.',
      },
      {
        strong: 'Check the scoring and climb the leaderboard.',
        rest: ' Your flight is analysed automatically. See which peaks you marked and how many points you scored. Your rank shows on the leaderboard.',
      },
    ],
    generalTitle: 'General rules',
    general: [
      'All flights uploaded in the defined window count. Flights must be submitted by 23:59 on the end date at the latest.',
      'Flights must be submitted within 2 weeks to count for scoring.',
      'You can register and join at any time before or during the challenge window.',
      'In some challenges you may only launch from predefined take-offs.',
      'You may land anywhere.',
      'Flights that break air-traffic law are disqualified (the system does not check this).',
    ],
    safetyTitle: 'Safety and liability',
    safety: [
      'Do not fly too close to terrain when crossing a summit. Always keep a safe distance from the ground.',
      'Be careful with strong thermals and turbulence near peaks. If conditions are dangerous, do not try to mark the summit. You can try another day and still get full points.',
      'Weather: always check conditions before flying and do not fly when it is unsafe.',
      'Respect airspace and hunting no-fly zones.',
      'Every pilot is responsible for themselves and needs a valid licence. The platform operator does not check this.',
    ],
    ctaTitle: 'Start your adventure!',
    ctaText: 'Download the free Sidekik app',
    ctaButton: 'Download the app',
  },
} as const;

export function challenges(lang: Lang) {
  return copy[lang];
}

export type ChallengesCopy = ReturnType<typeof challenges>;
