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
  foto?: string; // foto vera della camera
  piano: string;
}

// La Roscignola ha un solo alloggio: l'appartamento in villa (dati da Booking).
export const CAMERE: Camera[] = [
  {
    id: 'appartamento',
    nome: 'L’appartamento',
    breve: '58 m² tutti per voi: camera, soggiorno con camino, cucina e piscina a uso esclusivo.',
    descrizione:
      'Nella villa, sotto l’abitazione dell’host: una camera con letto matrimoniale alla francese, un soggiorno con due divani letto e il caminetto a legna, una cucina attrezzata e un bagno con doccia. Fuori, giardino con barbecue e piscina riservata solo a voi.',
    ospiti: 4,
    letti: '1 matrimoniale alla francese + 2 divani letto',
    mq: 58,
    prezzo: 75,
    servizi: ['Piscina a uso esclusivo', 'Cucina privata', 'Caminetto a legna', 'Giardino e barbecue', 'Parcheggio privato', 'Ricarica auto elettriche', 'Wi‑Fi', 'Animali ammessi'],
    tinta: ['#6B1C18', '#B48F5A'],
    foto: '/foto/camera-matrimoniale.jpg',
    piano: 'Appartamento in villa',
  },
];

export const SERVIZI_CASA = [
  { titolo: 'Piscina tutta per voi', testo: 'Una piscina all’aperto a uso esclusivo, con zona ad acqua bassa e vista sulle colline.' },
  { titolo: 'Giardino e barbecue', testo: 'Un ampio giardino tra ulivi e vigneti, con gazebo e spazio attrezzato per il barbecue.' },
  { titolo: 'Il camino d’inverno', testo: 'Nel soggiorno c’è un caminetto a legna: d’inverno la casa diventa un rifugio caldo.' },
  { titolo: 'Animali benvenuti', testo: 'Cani e gatti sono ospiti graditi, senza supplementi.' },
  { titolo: 'Parcheggio e ricarica', testo: 'Parcheggio interno riservato e gratuito, con ricarica per auto elettriche.' },
  { titolo: 'Il vino di casa', testo: 'Siamo tra i vigneti: capita che Franco accolga gli ospiti con il vino di sua produzione.' },
];

// Dai dintorni descritti dall'host su Booking
export const PUNTI_INTERESSE = [
  { nome: 'Castello d’Avalos e centro storico di Monte San Giovanni Campano', distanza: '2 km' },
  { nome: 'Abbazia di Casamari', distanza: '7 km' },
  { nome: 'Cascate del Liri (Isola del Liri)', distanza: '10 km' },
  { nome: 'Abbazia di San Domenico, Sora', distanza: '12 km' },
  { nome: 'Mura ciclopiche di Arpino', distanza: '15 km' },
  { nome: 'Terme di Fiuggi', distanza: '35 km' },
  { nome: 'Abbazia di Montecassino', distanza: '42 km' },
  { nome: 'Parco Nazionale d’Abruzzo', distanza: '50 km' },
  { nome: 'Sperlonga, Terracina, San Felice Circeo', distanza: '70 km' },
  { nome: 'Aeroporto di Roma Ciampino', distanza: '97 km' },
];

export const VICINO = [
  { nome: 'Supermercato SIGMA', distanza: '500 m' },
  { nome: 'Ristorante La Pineta', distanza: '500 m' },
  { nome: 'Ristorante Lucineto', distanza: '600 m' },
  { nome: 'Bar Tabacchi Mamò', distanza: '300 m' },
  { nome: 'CONAD centro storico', distanza: '1,5 km' },
];

export const REGOLE = [
  'Arrivo dalle 15:00 alle 22:30, comunicando prima l’orario',
  'Partenza dalle 8:00 alle 10:30',
  'Bambini di tutte le età benvenuti; non sono disponibili culle o letti aggiuntivi',
  'Animali ammessi gratuitamente',
  'Non si fuma all’interno',
  'Niente feste, eventi o addii al celibato/nubilato',
  'Silenzio dalle 14:00 alle 16:00',
];
