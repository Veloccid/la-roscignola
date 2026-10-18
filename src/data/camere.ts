// Camere della Roscignola. Nomi e testi inventati come segnaposto: da confermare con il proprietario.
export interface Camera {
  id: string;
  nome: string;
  breve: string;
  descrizione: string;
  ospiti: number;
  letti: string;
  mq: number;
  prezzo: number; // prezzo base a notte (modificabile dall'area proprietario)
  servizi: string[];
  tinta: [string, string]; // colori del segnaposto foto
  piano: string;
}

export const CAMERE: Camera[] = [
  {
    id: 'usignolo',
    nome: 'Camera Usignolo',
    breve: 'La più romantica, con il balconcino sul giardino.',
    descrizione:
      'Letto matrimoniale in ferro battuto, pareti color calce e un piccolo balcone affacciato sugli alberi da cui, la mattina presto, si sente cantare l’usignolo che dà il nome alla casa.',
    ospiti: 2,
    letti: '1 matrimoniale',
    mq: 18,
    prezzo: 95,
    servizi: ['Balcone', 'Bagno privato', 'Aria condizionata', 'Wi‑Fi'],
    tinta: ['#7A1F2B', '#B48F5A'],
    piano: 'Primo piano',
  },
  {
    id: 'glicine',
    nome: 'Camera Glicine',
    breve: 'Ampia e luminosa, fino a tre ospiti.',
    descrizione:
      'Due finestre sul glicine della facciata, un matrimoniale comodo e un divano letto singolo. Perfetta per una coppia con bambino o per chi vuole spazio.',
    ospiti: 3,
    letti: '1 matrimoniale + 1 divano letto',
    mq: 24,
    prezzo: 110,
    servizi: ['Bagno con doccia grande', 'Aria condizionata', 'Scrivania', 'Wi‑Fi'],
    tinta: ['#8C6A9A', '#E4D4BD'],
    piano: 'Primo piano',
  },
  {
    id: 'uliveto',
    nome: 'Camera Uliveto',
    breve: 'Al piano terra, con accesso diretto al giardino.',
    descrizione:
      'Due letti singoli unibili, pavimento in cotto e una porta finestra che si apre sul prato e sugli ulivi. Senza scale: comoda per tutti.',
    ospiti: 2,
    letti: '2 singoli (unibili)',
    mq: 16,
    prezzo: 85,
    servizi: ['Accesso al giardino', 'Senza scale', 'Bagno privato', 'Wi‑Fi'],
    tinta: ['#7D8A6A', '#F6F0E7'],
    piano: 'Piano terra',
  },
  {
    id: 'pergola',
    nome: 'Suite Pergola',
    breve: 'Per famiglie: due ambienti e angolo cottura.',
    descrizione:
      'Camera matrimoniale e saletta con due letti singoli, angolo cottura e una pergola privata dove fare colazione all’aperto nelle giornate belle.',
    ospiti: 4,
    letti: '1 matrimoniale + 2 singoli',
    mq: 34,
    prezzo: 145,
    servizi: ['Pergola privata', 'Angolo cottura', 'Due ambienti', 'Wi‑Fi'],
    tinta: ['#B48F5A', '#5A1520'],
    piano: 'Piano terra',
  },
];

export const SERVIZI_CASA = [
  { titolo: 'Colazione fatta in casa', testo: 'Torte, marmellate e pane del forno del paese, serviti in sala o sotto il pergolato.' },
  { titolo: 'Giardino e ulivi', testo: 'Un prato con sdraio, ombra e silenzio. Si sente solo il canto degli uccelli.' },
  { titolo: 'Parcheggio gratuito', testo: 'Posto auto interno, senza cercare parcheggio.' },
  { titolo: 'Wi‑Fi in tutta la casa', testo: 'Veloce anche in giardino, per chi deve lavorare qualche ora.' },
];

export const PUNTI_INTERESSE = [
  { nome: 'Centro del paese', distanza: 'da confermare' },
  { nome: 'Stazione più vicina', distanza: 'da confermare' },
  { nome: 'Spiaggia / lago / sentieri', distanza: 'da confermare' },
];
