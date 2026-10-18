// Dati generali del B&B. Tutto ciò che è "da confermare" va sostituito con i dati veri.
export const SITO = {
  nome: 'La Roscignola',
  tipo: 'Bed & Breakfast',
  titolo: 'La Roscignola · Bed & Breakfast',
  descrizione:
    'Bed & Breakfast La Roscignola: quattro camere, colazione fatta in casa e un giardino dove al mattino canta l’usignolo. Prenota online le date libere.',
  url: 'https://roscignola-proposte.vercel.app',
  indirizzo: 'Indirizzo da confermare',
  zona: 'Località da confermare',
  telefono: '+39 000 000 0000',
  whatsapp: '390000000000', // solo cifre con prefisso
  email: 'info@laroscignola.it',
  piva: 'P.IVA da confermare',
  cin: 'CIN da confermare',
  checkin: 'dalle 15:00 alle 20:00',
  checkout: 'entro le 10:30',
  social: {
    instagram: '#',
    facebook: '#',
  },
  canali: {
    airbnb: '#',
    booking: '#',
  },
};

export function linkWhatsApp(messaggio: string) {
  return `https://wa.me/${SITO.whatsapp}?text=${encodeURIComponent(messaggio)}`;
}
