// Dati generali della Roscignola. Tutto ciò che è "da confermare" va sostituito con i dati veri.
export const SITO = {
  nome: 'La Roscignola',
  tipo: 'Oasi naturale · appartamento in villa con piscina', // da confermare: B&B o casa vacanze?
  titolo: 'La Roscignola · Oasi naturale con piscina in Ciociaria',
  descrizione:
    'Oasi naturale La Roscignola: appartamento in villa con piscina a uso esclusivo, giardino e barbecue tra ulivi e vigneti della Ciociaria. Prenota online le date libere.',
  url: 'https://la-roscignola.vercel.app',
  indirizzo: 'Via le Poste, 03025 Sant’Onofrio – Monte San Giovanni Campano (FR)',
  zona: 'Monte San Giovanni Campano · Ciociaria',
  telefono: '+39 000 000 0000',
  whatsapp: '390000000000', // solo cifre con prefisso
  email: 'info@laroscignola.it',
  piva: 'P.IVA da confermare',
  cin: 'CIN IT060044C2NOGTTZLP',
  checkin: 'dalle 15:00 alle 22:30',
  checkout: 'dalle 8:00 alle 10:30',
  host: 'Franco',
  recensioni: { voto: '8,9', numero: 87, fonte: 'Booking' },
  social: {
    instagram: '#',
    facebook: '#',
  },
  canali: {
    airbnb: '#',
    booking: 'https://www.booking.com/hotel/it/il-roscignolo.it.html',
  },
};

export function linkWhatsApp(messaggio: string) {
  return `https://wa.me/${SITO.whatsapp}?text=${encodeURIComponent(messaggio)}`;
}
