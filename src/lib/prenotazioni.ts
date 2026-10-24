// Motore delle prenotazioni – VERSIONE DIMOSTRATIVA.
// I dati vivono nel browser (localStorage) così il cliente può provare calendario e area proprietario.
// Nel sito vero queste stesse funzioni parleranno con un database (Supabase) e con Stripe,
// e i calendari di Airbnb e Booking verranno letti/scritti tramite link iCal.
import { CAMERE } from '../data/camere';

export type Fonte = 'sito' | 'airbnb' | 'booking' | 'manuale' | 'blocco';

export interface Prenotazione {
  id: string;
  camera: string;
  dal: string; // giorno di arrivo (YYYY-MM-DD)
  al: string; // giorno di partenza (esclusa dalla notte)
  ospite: string;
  fonte: Fonte;
  ospiti?: number;
  email?: string;
  telefono?: string;
  totale?: number;
  pagato?: boolean;
  note?: string;
  creata: string;
  demo?: boolean; // prenotazione di esempio
}

export interface Stato {
  versione: 1;
  prenotazioni: Prenotazione[];
  prezzi: Record<string, number>;
  sync: Record<string, { airbnb: string; booking: string; ultima?: string }>;
}

const CHIAVE = 'roscignola-demo-v2';

export const FONTI: Record<Fonte, { nome: string; colore: string }> = {
  sito: { nome: 'Sito', colore: '#6b1c18' },
  airbnb: { nome: 'Airbnb', colore: '#E0565B' },
  booking: { nome: 'Booking', colore: '#2B5C9E' },
  manuale: { nome: 'Manuale', colore: '#7D8A6A' },
  blocco: { nome: 'Chiusa', colore: '#8a7f78' },
};

// ---------- date ----------
export function iso(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const g = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${g}`;
}
export function daIso(s: string) {
  const [y, m, g] = s.split('-').map(Number);
  return new Date(y, m - 1, g);
}
export function oggi() {
  return iso(new Date());
}
export function piuGiorni(s: string, n: number) {
  const d = daIso(s);
  d.setDate(d.getDate() + n);
  return iso(d);
}
export function notti(dal: string, al: string) {
  return Math.round((daIso(al).getTime() - daIso(dal).getTime()) / 86400000);
}
export function dataLunga(s: string) {
  return daIso(s).toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' });
}
export function euro(n: number) {
  return n.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}

// ---------- dati di esempio ----------
function seme(): Stato {
  const t = oggi();
  const p = (camera: string, da: number, n: number, ospite: string, fonte: Fonte, extra: Partial<Prenotazione> = {}): Prenotazione => {
    const dal = piuGiorni(t, da);
    const al = piuGiorni(dal, n);
    const cam = CAMERE.find((c) => c.id === camera)!;
    return {
      id: Math.random().toString(36).slice(2, 10),
      camera,
      dal,
      al,
      ospite,
      fonte,
      ospiti: Math.min(2, cam.ospiti),
      totale: fonte === 'blocco' ? 0 : cam.prezzo * n,
      pagato: fonte !== 'blocco',
      creata: piuGiorni(t, -7),
      demo: true,
      ...extra,
    };
  };
  return {
    versione: 1,
    prenotazioni: [
      p('appartamento', -1, 3, 'Giulia e Marco R.', 'booking'),
      p('appartamento', 3, 2, 'Elena F.', 'sito', { email: 'elena@example.com' }),
      p('appartamento', 7, 4, 'Thomas B.', 'airbnb', { ospiti: 2 }),
      p('appartamento', 13, 2, 'Paolo M.', 'manuale', { note: 'Prenotato al telefono' }),
      p('appartamento', 17, 3, 'Chiuso', 'blocco', { note: 'Manutenzione piscina' }),
      p('appartamento', 22, 5, 'Famiglia Weber', 'booking', { ospiti: 4 }),
      p('appartamento', 30, 2, 'Sara L.', 'sito'),
      p('appartamento', 36, 3, 'Anna e Luca', 'airbnb'),
    ],
    prezzi: Object.fromEntries(CAMERE.map((c) => [c.id, c.prezzo])),
    sync: Object.fromEntries(
      CAMERE.map((c) => [
        c.id,
        {
          airbnb: `https://www.airbnb.it/calendar/ical/0000000.ics?s=esempio-${c.id}`,
          booking: `https://admin.booking.com/hotel/hoteladmin/ical.html?t=esempio-${c.id}`,
          ultima: new Date(Date.now() - 1000 * 60 * 14).toISOString(),
        },
      ]),
    ),
  };
}

// ---------- archivio ----------
let cache: Stato | null = null;

export function carica(): Stato {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(CHIAVE);
    if (raw) {
      const s = JSON.parse(raw) as Stato;
      if (s && s.versione === 1) return (cache = s);
    }
  } catch {}
  cache = seme();
  salva(cache);
  return cache;
}

export function salva(s: Stato) {
  cache = s;
  try {
    localStorage.setItem(CHIAVE, JSON.stringify(s));
  } catch {}
  try {
    window.dispatchEvent(new CustomEvent('roscignola:aggiornato'));
  } catch {}
}

export function ripristina() {
  try {
    localStorage.removeItem(CHIAVE);
  } catch {}
  cache = null;
  return carica();
}

export function prezzo(camera: string) {
  const s = carica();
  return s.prezzi[camera] ?? CAMERE.find((c) => c.id === camera)?.prezzo ?? 0;
}

export function prenotazioniCamera(camera: string) {
  return carica().prenotazioni.filter((p) => p.camera === camera);
}

/** La notte che inizia in `giorno` è occupata? */
export function occupata(camera: string, giorno: string) {
  return prenotazioniCamera(camera).some((p) => p.dal <= giorno && giorno < p.al);
}

/** Tutte le notti tra dal (incluso) e al (escluso) sono libere? */
export function libera(camera: string, dal: string, al: string) {
  return !prenotazioniCamera(camera).some((p) => p.dal < al && dal < p.al);
}

export function camereLibere(dal: string, al: string) {
  return CAMERE.filter((c) => libera(c.id, dal, al));
}

export function aggiungi(dati: Omit<Prenotazione, 'id' | 'creata'>) {
  const s = carica();
  if (!libera(dati.camera, dati.dal, dati.al)) throw new Error('Le date si sovrappongono a un’altra prenotazione.');
  const nuova: Prenotazione = { ...dati, id: Math.random().toString(36).slice(2, 10), creata: oggi() };
  s.prenotazioni.push(nuova);
  salva(s);
  return nuova;
}

export function rimuovi(id: string) {
  const s = carica();
  s.prenotazioni = s.prenotazioni.filter((p) => p.id !== id);
  salva(s);
}

export function impostaPrezzo(camera: string, valore: number) {
  const s = carica();
  s.prezzi[camera] = valore;
  salva(s);
}

export function sincronizzaDemo(camera?: string) {
  const s = carica();
  const ora = new Date().toISOString();
  for (const id of Object.keys(s.sync)) if (!camera || camera === id) s.sync[id].ultima = ora;
  salva(s);
}

/** File iCal della camera, da incollare in Airbnb e Booking ("Importa calendario"). */
export function ics(camera: string) {
  const cam = CAMERE.find((c) => c.id === camera);
  const righe = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//La Roscignola//Prenotazioni//IT',
    `X-WR-CALNAME:La Roscignola – ${cam?.nome ?? camera}`,
  ];
  for (const p of prenotazioniCamera(camera)) {
    righe.push(
      'BEGIN:VEVENT',
      `UID:${p.id}@laroscignola`,
      `DTSTART;VALUE=DATE:${p.dal.replaceAll('-', '')}`,
      `DTEND;VALUE=DATE:${p.al.replaceAll('-', '')}`,
      `SUMMARY:${p.fonte === 'blocco' ? 'Non disponibile' : 'Prenotato'}`,
      'END:VEVENT',
    );
  }
  righe.push('END:VCALENDAR');
  return righe.join('\r\n');
}

// ---------- calendari veri di Booking e Airbnb ----------
export interface StatoSync {
  configurato: boolean;
  aggiornato: string;
  fonti: Record<string, { configurato: boolean; ok: boolean; eventi: number; errore?: string }>;
  occupati: { camera: string; fonte: 'booking' | 'airbnb'; uid: string; dal: string; al: string }[];
}
let richiesta: Promise<StatoSync | null> | null = null;

/** Legge /api/disponibilita. Se i link iCal sono configurati, sostituisce i dati di esempio con le date vere. */
export function caricaEsterne(forza = false): Promise<StatoSync | null> {
  if (richiesta && !forza) return richiesta;
  richiesta = fetch('/api/disponibilita', { cache: forza ? 'reload' : 'default' })
    .then((r) => (r.ok ? r.json() : null))
    .then((d: StatoSync | null) => {
      if (!d || !d.configurato) return d;
      const s = carica();
      s.prenotazioni = s.prenotazioni.filter((p) => !p.demo && p.fonte !== 'airbnb' && p.fonte !== 'booking');
      for (const o of d.occupati)
        s.prenotazioni.push({
          id: o.uid,
          camera: o.camera,
          dal: o.dal,
          al: o.al,
          ospite: o.fonte === 'booking' ? 'Prenotazione Booking' : 'Prenotazione Airbnb',
          fonte: o.fonte,
          creata: oggi(),
        });
      salva(s);
      return d;
    })
    .catch(() => null);
  return richiesta;
}
