import type { StudyNote } from './types';

export const cultuurNotes = [
  {
    h: 'Waarden',
    b: 'Directheid, tolerantie, individuele vrijheid, gelijkheid. Poldermodel = consensus.',
    bEn: 'Directness, tolerance, individual freedom, equality. Polder model = consensus.',
  },
  {
    h: 'Feestdagen',
    b: 'Koningsdag 27 april, Sinterklaas 5 december, Kerst 25–26 dec, Pasen, Pinksteren, Hemelvaart.',
    bEn: "King's Day 27 Apr, Sinterklaas 5 Dec, Christmas 25–26 Dec, Easter, Pentecost, Ascension Day.",
  },
  {
    h: 'Omgangsvormen',
    b: 'Op tijd komen. Afspraak vooraf. Drie kussen onder vrienden, handdruk zakelijk.',
    bEn: 'Be on time. Make appointments in advance. Three kisses with friends, handshake in business.',
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
] as const satisfies readonly StudyNote[];
