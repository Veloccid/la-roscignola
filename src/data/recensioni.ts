// RECENSIONI SCELTE A MANO da Booking (testi degli ospiti: alcuni accorciati, refusi corretti).
// Per aggiornarle: aggiungi o togli un blocco { ... } qui sotto e fai git push.
// Il voto generale e il numero di recensioni si cambiano in src/config.ts (SITO.recensioni).

export interface Recensione {
  nome: string;
  paese: string;
  tipo: string; // Coppia, Famiglia, Gruppo, Viaggiatore singolo
  data: string; // mese e anno del soggiorno o della recensione
  voto: number; // su 10
  titolo?: string;
  testo: string;
  fonte: 'Booking' | 'Airbnb' | 'Google';
}

export const PUNTEGGI = [
  { nome: 'Staff', voto: '9,5' },
  { nome: 'Rapporto qualità‑prezzo', voto: '9,2' },
  { nome: 'Pulizia', voto: '8,8' },
  { nome: 'Posizione', voto: '8,8' },
  { nome: 'Comfort', voto: '8,7' },
  { nome: 'Servizi', voto: '8,5' },
];

export const RECENSIONI: Recensione[] = [
  {
    nome: 'Grazia',
    paese: 'Italia',
    tipo: 'Famiglia',
    data: 'settembre 2026',
    voto: 10,
    testo:
      'Abbiamo soggiornato dal 1 al 3 settembre, ci siamo trovati benissimo. Il signor Franco persona squisita ci ha anche regalato una bottiglia di vino e dell’uva ottimi. Appartamento pulito, piscina tutta a nostra disposizione. Il silenzio e la tranquillità meravigliosi.',
    fonte: 'Booking',
  },
  {
    nome: 'Giulia',
    paese: 'Italia',
    tipo: 'Famiglia',
    data: 'giugno 2024',
    voto: 10,
    titolo: 'Bellissima struttura con piscina, la consiglio',
    testo:
      'Abbiamo passato una stupenda vacanzetta in questa bellissima struttura! Appartamento comodo e pulito, con una cucina molto attrezzata, anche con lavatrice. Una grande piscina privata per noi, con spazi esterni di lettini/divanetti/tavoli/sedie/barbecue ecc. nel mezzo di una bellissima campagna curata con vista sui colli. Ci siamo molto divertiti noi e la nostra bimba, ed anche la nostra cagnolina che è potuta venire con noi senza problemi. Ci hanno anche regalato una bottiglia di vino del loro vigneto, molto buona e gradita. Sicuramente ci ritorneremo!!!',
    fonte: 'Booking',
  },
  {
    nome: 'Kimiko',
    paese: 'Italia',
    tipo: 'Famiglia',
    data: 'aprile 2025',
    voto: 10,
    testo:
      'Ampio appartamento con vasto giardino e piscina privata. Ha la vista montagna bellissima. Il paese è tranquillo, lontano da caos di città, così il soggiorno era veramente rilassante. Abbiamo usufruito barbeque tutti i giorni. Il padrone è gentilissimo e accogliente. Stiamo già pensando quando torniamo prossimamente.',
    fonte: 'Booking',
  },
  {
    nome: 'Iridius',
    paese: 'Italia',
    tipo: 'Coppia',
    data: 'giugno 2024',
    voto: 10,
    titolo: 'Oasi di pace e di relax',
    testo:
      'Un’oasi di pace e di relax con una bella piscina e un barbecue per cenare all’aperto col caldo. Host gentilissimo e discreto. Esperienza da ripetere sicuramente!!!',
    fonte: 'Booking',
  },
  {
    nome: 'Marilyn',
    paese: 'Italia',
    tipo: 'Famiglia',
    data: 'luglio 2024',
    voto: 10,
    titolo: 'Oasi naturale Roscignola è un “paradiso”',
    testo:
      'L’appartamento è super spazioso e pulito. La piscina è bella grande. La vista è meravigliosa. I proprietari sono gentili e disponibili. La signora ci ha regalato sugo di pomodori fatto da lei. Un posto dove ci si può rilassare al massimo!!! Ci torneremo di sicuro!',
    fonte: 'Booking',
  },
  {
    nome: 'Pasquale',
    paese: 'Italia',
    tipo: 'Gruppo',
    data: 'giugno 2025',
    voto: 10,
    titolo: 'Oasi Roscignola',
    testo:
      'Il posto è eccezionale, immerso nella natura con una piscina che ti aiuta ad eliminare tutto lo stress… posizione strategica ma soprattutto la super accoglienza del sig. Franco.',
    fonte: 'Booking',
  },
  {
    nome: 'Ciotola',
    paese: 'Italia',
    tipo: 'Viaggiatore singolo',
    data: 'maggio 2026',
    voto: 10,
    titolo: 'Splendida villa',
    testo:
      'Villa incantevole, immersa nella natura. Ampi spazi per godere appieno momenti di relax. Il proprietario abita al piano di sopra, ma per niente invadente. Abbiamo apprezzato la sua disponibilità e cortesia, permettendoci di anticipare il check in e posticipare il check out. Il letto è molto comodo.',
    fonte: 'Booking',
  },
  {
    nome: 'Fract83',
    paese: 'Italia',
    tipo: 'Viaggiatore singolo',
    data: 'giugno 2026',
    voto: 10,
    testo:
      'Tutto bellissimo e super organizzato. Un ringraziamento al gestore per la sua disponibilità e simpatia. Esperienza bellissima e niente da ridire. Posto immerso nel verde da relax totale.',
    fonte: 'Booking',
  },
  {
    nome: 'Ferrari',
    paese: 'Italia',
    tipo: 'Viaggiatore singolo',
    data: 'luglio 2026',
    voto: 10,
    testo:
      'La piscina costituisce un vero plus: dopo una giornata alla scoperta del territorio, un bagno rinfrescante fa dimenticare la stanchezza.',
    fonte: 'Booking',
  },
  {
    nome: 'Teodora‑Olimpia',
    paese: 'Romania',
    tipo: 'Famiglia',
    data: 'giugno 2024',
    voto: 10,
    testo: 'Simply amazing. The view was breathtaking and the hosts are very friendly! One of the few accommodations I would love to return to.',
    fonte: 'Booking',
  },
];
