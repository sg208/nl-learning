import type { StudyNote } from './types';

export const cultuurNotes = [
  {
    h: 'Eerste stappen',
    steps: [
      'Wees op tijd — punctualiteit telt.',
      'Directe feedback is normaal, niet persoonlijk bedoeld.',
      'Zakelijk: handdruk. Vrienden/familie: drie kussen.',
      'Op visite? Bloemen, wijn of bonbons meenemen.',
      'Discriminatie? Meld bij Anti Discriminatie Bureau (ADB).',
    ],
    stepsEn: [
      'Be on time — punctuality matters.',
      'Direct feedback is normal, not meant personally.',
      'Business: handshake. Friends/family: three kisses.',
      'Visiting? Bring flowers, wine or chocolates.',
      'Discrimination? Report to Anti Discriminatie Bureau (ADB).',
    ],
  },
  {
    h: 'Waarden',
    b: 'Directheid, tolerantie, individuele vrijheid, gelijkheid. Poldermodel = consensus via overleg.',
    bEn: 'Directness, tolerance, individual freedom, equality. Polder model = consensus through consultation.',
    tip: 'Openlijke kritiek in vergadering is geen persoonlijke aanval — dat is normaal.',
    tipEn: 'Open criticism in a meeting is not a personal attack — that is normal here.',
  },
  {
    h: 'Gezelligheid',
    b: 'Typisch Nederlands: warme, ontspannen sfeer met mensen. Geen exacte vertaling — denk aan cozy togetherness.',
    bEn: 'Typically Dutch: a warm, relaxed atmosphere with people. No exact translation — think cozy togetherness.',
  },
  {
    h: 'Gedogen',
    b: 'Iets is formeel verboden, maar de overheid tolereert het onder voorwaarden (bijv. softdrugs in coffeeshops).',
    bEn: 'Something is formally prohibited but authorities tolerate it under conditions (e.g. soft drugs in coffeeshops).',
  },
  {
    h: 'Feestdagen',
    b: 'Koningsdag 27 apr (oranje), Sinterklaas 5 dec, Kerst 25–26 dec, Oudejaarsavond (oliebollen, vuurwerk). Ook Pasen, Pinksteren, Hemelvaart.',
    bEn: "King's Day 27 Apr (wear orange), Sinterklaas 5 Dec, Christmas 25–26 Dec, New Year's Eve (oliebollen, fireworks). Also Easter, Pentecost, Ascension.",
  },
  {
    h: 'Koningsdag & oranje',
    b: '27 april — verjaardag van de koning. Oranje = kleur van het Huis van Oranje-Nassau. Feest op straat met markten.',
    bEn: "27 April — the king's birthday. Orange = colour of the House of Orange-Nassau. Street parties and markets.",
  },
  {
    h: 'Omgangsvormen',
    b: 'Op tijd komen. Afspraak vooraf. Drie kussen onder vrienden, handdruk zakelijk.',
    bEn: 'Be on time. Make appointments in advance. Three kisses with friends, handshake in business.',
  },
  {
    h: 'Bezoek etiquette',
    b: 'Op visite: klein attentie meenemen — bloemen, wijn of bonbons. Niet te duur.',
    bEn: 'When visiting: bring a small token — flowers, wine or chocolates. Not too expensive.',
  },
  {
    h: 'Verjaardagskalender',
    b: 'Veel Nederlanders hebben een kalender met verjaardagen, vaak op het toilet — typisch cultureel gebruik.',
    bEn: 'Many Dutch people keep a birthday calendar, often in the toilet — a typical cultural habit.',
  },
  {
    h: 'Vrijwilligerswerk',
    b: 'Veel gewaardeerd. Verenigingen, sportclubs, scholen draaien deels op vrijwilligers.',
    bEn: 'Highly valued. Clubs, sports associations, schools partly run on volunteers.',
  },
  {
    h: 'Discriminatie',
    b: 'Verboden op grond van ras, religie, geslacht, seksuele geaardheid. ADB voor klachten. Artikel 1 Grondwet.',
    bEn: 'Prohibited on grounds of race, religion, gender, sexual orientation. ADB for complaints. Article 1 Constitution.',
  },
  {
    h: 'Inburgering',
    b: 'Leren over Nederlandse taal en samenleving om zelfstandig mee te doen. Examen via DUO; cursus soms via gemeente.',
    bEn: 'Learning Dutch language and society to participate independently. Exam via DUO; course sometimes via municipality.',
  },
  {
    h: 'Koninkrijk der Nederlanden',
    b: 'Officiële staatsnaam. Inclusief Aruba, Curaçao, Sint Maarten en Caribisch Nederland (Bonaire, Saba, Sint Eustatius).',
    bEn: 'Official state name. Includes Aruba, Curaçao, Sint Maarten and Caribbean Netherlands (Bonaire, Saba, Sint Eustatius).',
  },
] as const satisfies readonly StudyNote[];
