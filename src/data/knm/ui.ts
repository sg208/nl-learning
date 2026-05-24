export type KnmLang = 'nl' | 'en';

export type KnmUiStrings = {
  appTitle: string;
  tagline: string;
  subtitle: string;
  toggleLabel: string;
  tabNavLabel: string;
  tabNavClose: string;
  tabHome: string;
  tabTopics: string;
  tabWho: string;
  tabExam: string;
  examFacts: string;
  statQuestions: string;
  statMinutes: string;
  statPass: string;
  statVersions: string;
  cardTopicsTitle: string;
  cardTopicsDesc: string;
  cardWhoTitle: string;
  cardWhoDesc: string;
  cardExamTitle: string;
  cardExamDesc: string;
  homeTip: string;
  topicsIntro: string;
  topicsSubtitle: (count: number) => string;
  priorityLabels: Record<string, string>;
  backToTopics: string;
  whoIntro: string;
  whoHighlight: string;
  whoUWV: string;
  whoUWVBold: string;
  whoGP: string;
  whoGPBold: string;
  formatLabel: string;
  formatItems: Array<{ bold: string | null; rest: string }>;
  chooseLabel: string;
  examTitle: (n: number) => string;
  examDesc: Record<number, string>;
  wordingBtn: (letter: string) => string;
  pickerTip: string;
  stopBtn: string;
  examLabel: (n: number, letter: string) => string;
  questionLabel: (n: number) => string;
  prevBtn: string;
  nextBtn: string;
  submitBtn: (answered: number) => string;
  passRate: string;
  passed: string;
  failed: string;
  scorePerTopic: string;
  reviewBtn: string;
  newExamBtn: string;
  backToResults: string;
  yourAnswer: string;
  correct: string;
  notAnswered: string;
};

export const UI: Record<KnmLang, KnmUiStrings> = {
  nl: {
    appTitle: 'Kennis van de Nederlandse Maatschappij',
    tagline: 'Inburgering · Nederland · 2026',
    subtitle: '40 vragen · 45 minuten · Slaagnorm ~26/40 (65%)',
    toggleLabel: 'UITLEG',
    tabNavLabel: 'KNM onderdelen',
    tabNavClose: 'Sluit navigatie',
    tabHome: '🏠 Overzicht',
    tabTopics: '📚 Onderwerpen',
    tabWho: '🗂️ Wie doet wat',
    tabExam: '📝 Mock Examen',
    examFacts: 'EXAMEN FEITEN',
    statQuestions: 'vragen',
    statMinutes: 'minuten',
    statPass: 'slagen (65%)',
    statVersions: 'examen-versies',
    cardTopicsTitle: 'Bestudeer de 8 onderwerpen',
    cardTopicsDesc:
      'Notities per thema. Begin met gezondheid, werk, overheid — die komen het vaakst voor.',
    cardWhoTitle: 'Wie doet wat',
    cardWhoDesc: "Referentietabel voor de meest voorkomende vraag: 'waar moet deze persoon heen?'",
    cardExamTitle: 'Doe een oefenexamen',
    cardExamDesc: '3 examens × 3 bewoordings-varianten = 9 unieke runs. Volgorde elke keer anders.',
    homeTip:
      'Tip: doe ook het officiële DUO oefenexamen op inburgeren.nl voor het echte videoformat.',
    topicsIntro: 'Leer in deze volgorde. Gezondheid, Werk en Overheid komen vaakst voor.',
    topicsSubtitle: (n) => `${n} onderwerpen · 3×5 oefenvragen`,
    priorityLabels: {
      gezondheid: 'MEEST GETEST',
      werk: 'HOOG',
      overheid: 'HOOG',
      wonen: 'MIDDEL',
      onderwijs: 'MIDDEL',
      politiek: 'MIDDEL',
      geschiedenis: 'LAAG',
      cultuur: 'LAAG',
    },
    backToTopics: "← Terug naar thema's",
    whoIntro:
      'Veel examenvragen vragen "waar moet deze persoon heen?". Leer deze tabel uit het hoofd.',
    whoHighlight: 'CRUCIAAL ONDERSCHEID',
    whoUWV: 'UWV vs Gemeente: Ontslagen + recht op WW → UWV. Geen UWV-recht → Gemeente (bijstand).',
    whoUWVBold: 'UWV vs Gemeente',
    whoGP:
      'Huisarts vs 112: Niet-spoed → huisarts. Levensgevaar → 112. Spoed buiten kantooruren → huisartsenpost (HAP).',
    whoGPBold: 'Huisarts vs 112',
    formatLabel: 'FORMAAT',
    formatItems: [
      { bold: '40 vragen', rest: ", 5 per thema, alle 8 thema's gelijk verdeeld" },
      { bold: '45 minuten', rest: ' timer (echte examenduur)' },
      { bold: null, rest: 'Vraagvolgorde en antwoordopties worden elke keer geschud' },
      { bold: '26/40', rest: ' goed (≈65%) om te slagen' },
    ],
    chooseLabel: 'KIES EXAMEN + BEWOORDING',
    examTitle: (n) => `Mock Examen #${n}`,
    examDesc: {
      1: "Set A — basisscenario's",
      2: "Set B — andere scenario's, zelfde concepten",
      3: 'Set C — dieper/randgevallen',
    },
    wordingBtn: (l) => `Bewoording ${l} →`,
    pickerTip: 'Elke combinatie geeft een nieuwe randomisatie — 9 unieke variaties in totaal.',
    stopBtn: '← Stoppen',
    examLabel: (n, l) => `Examen ${n}${l}`,
    questionLabel: (n) => `VRAAG ${n}/40`,
    prevBtn: '← Vorige',
    nextBtn: 'Volgende →',
    submitBtn: (n) => `Examen inleveren (${n}/40 beantwoord)`,
    passRate: 'slaagnorm 65% (26/40)',
    passed: 'GESLAAGD ✓',
    failed: 'GEZAKT — blijf oefenen',
    scorePerTopic: 'SCORE PER THEMA',
    reviewBtn: 'Bekijk antwoorden',
    newExamBtn: 'Nieuw examen',
    backToResults: '← Terug naar resultaten',
    yourAnswer: 'Jouw antwoord',
    correct: 'Juist',
    notAnswered: 'Niet beantwoord',
  },
  en: {
    appTitle: 'Knowledge of Dutch Society (KNM)',
    tagline: 'Civic Integration · Netherlands · 2026',
    subtitle: '40 questions · 45 minutes · Pass mark ~26/40 (65%)',
    toggleLabel: 'EXPLANATION',
    tabNavLabel: 'KNM sections',
    tabNavClose: 'Close navigation',
    tabHome: '🏠 Overview',
    tabTopics: '📚 Topics',
    tabWho: '🗂️ Who does what',
    tabExam: '📝 Mock Exam',
    examFacts: 'EXAM FACTS',
    statQuestions: 'questions',
    statMinutes: 'minutes',
    statPass: 'to pass (65%)',
    statVersions: 'exam versions',
    cardTopicsTitle: 'Study the 8 topics',
    cardTopicsDesc:
      'Notes per topic. Start with healthcare, work, government — those appear most often.',
    cardWhoTitle: 'Who does what',
    cardWhoDesc:
      "Reference table for the most common question type: 'where should this person go?'",
    cardExamTitle: 'Take a mock exam',
    cardExamDesc: '3 exams × 3 wording variants = 9 unique runs. Order randomized every time.',
    homeTip:
      'Tip: also try the official DUO practice exam at inburgeren.nl for the exact video-based format.',
    topicsIntro: 'Study in this order. Healthcare, Work and Government appear most often.',
    topicsSubtitle: (n) => `${n} topics · 3×5 practice questions`,
    priorityLabels: {
      gezondheid: 'MOST TESTED',
      werk: 'HIGH',
      overheid: 'HIGH',
      wonen: 'MEDIUM',
      onderwijs: 'MEDIUM',
      politiek: 'MEDIUM',
      geschiedenis: 'LOW',
      cultuur: 'LOW',
    },
    backToTopics: '← Back to topics',
    whoIntro: 'Many exam questions ask "where should this person go?". Memorise this table.',
    whoHighlight: 'CRUCIAL DISTINCTION',
    whoUWV:
      'UWV vs Municipality: Dismissed + entitled to WW → UWV. No UWV entitlement → Municipality (social assistance).',
    whoUWVBold: 'UWV vs Municipality',
    whoGP:
      'GP vs 112: Non-urgent → GP. Life-threatening → 112. Urgent outside office hours → out-of-hours GP clinic (HAP).',
    whoGPBold: 'GP vs 112',
    formatLabel: 'FORMAT',
    formatItems: [
      { bold: '40 questions', rest: ', 5 per topic, all 8 topics equally distributed' },
      { bold: '45 minutes', rest: ' timer (real exam time)' },
      { bold: null, rest: 'Question order and answer options reshuffled every time' },
      { bold: '26/40', rest: ' correct (≈65%) to pass' },
    ],
    chooseLabel: 'CHOOSE EXAM + WORDING',
    examTitle: (n) => `Mock Exam #${n}`,
    examDesc: {
      1: 'Set A — basic scenarios',
      2: 'Set B — different scenarios, same concepts',
      3: 'Set C — deeper/edge cases',
    },
    wordingBtn: (l) => `Wording ${l} →`,
    pickerTip: 'Each combination gives a new randomisation — 9 unique variations in total.',
    stopBtn: '← Stop',
    examLabel: (n, l) => `Exam ${n}${l}`,
    questionLabel: (n) => `QUESTION ${n}/40`,
    prevBtn: '← Previous',
    nextBtn: 'Next →',
    submitBtn: (n) => `Submit exam (${n}/40 answered)`,
    passRate: 'pass mark 65% (26/40)',
    passed: 'PASSED ✓',
    failed: 'FAILED — keep practising',
    scorePerTopic: 'SCORE PER TOPIC',
    reviewBtn: 'Review answers',
    newExamBtn: 'New exam',
    backToResults: '← Back to results',
    yourAnswer: 'Your answer',
    correct: 'Correct',
    notAnswered: 'Not answered',
  },
};
