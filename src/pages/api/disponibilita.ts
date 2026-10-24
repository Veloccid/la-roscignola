// GET /api/disponibilita → date occupate lette dai calendari di Booking e Airbnb.
// I link iCal si impostano su Vercel → Settings → Environment Variables:
//   ICAL_BOOKING_APPARTAMENTO  e  ICAL_AIRBNB_APPARTAMENTO
// Vercel tiene in cache la risposta per 15 minuti, così i portali non vengono interrogati a ogni visita.
import type { APIRoute } from 'astro';
import { leggiIcal } from '../../lib/ical';
import { CAMERE } from '../../data/camere';

export const prerender = false;

const CANALI = ['booking', 'airbnb'] as const;

export const GET: APIRoute = async () => {
  const oggi = new Date().toISOString().slice(0, 10);
  const fonti: Record<string, { configurato: boolean; ok: boolean; eventi: number; errore?: string }> = {};
  const occupati: { camera: string; fonte: string; uid: string; dal: string; al: string }[] = [];

  await Promise.all(
    CAMERE.flatMap((c) =>
      CANALI.map(async (canale) => {
        const chiave = `ICAL_${canale.toUpperCase()}_${c.id.toUpperCase()}`;
        const url = import.meta.env[chiave] ?? process.env[chiave];
        const nome = `${canale}:${c.id}`;
        if (!url) return (fonti[nome] = { configurato: false, ok: false, eventi: 0 });
        try {
          const r = await fetch(url, { headers: { 'User-Agent': 'LaRoscignola-sito/1.0' }, signal: AbortSignal.timeout(8000) });
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          const eventi = leggiIcal(await r.text()).filter((e) => e.al > oggi);
          eventi.forEach((e) => occupati.push({ camera: c.id, fonte: canale, uid: `${canale}-${e.uid}`, dal: e.dal, al: e.al }));
          fonti[nome] = { configurato: true, ok: true, eventi: eventi.length };
        } catch (err) {
          fonti[nome] = { configurato: true, ok: false, eventi: 0, errore: (err as Error).message };
        }
      }),
    ),
  );

  const configurato = Object.values(fonti).some((f) => f.configurato);
  return new Response(JSON.stringify({ configurato, aggiornato: new Date().toISOString(), fonti, occupati }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=900, stale-while-revalidate=3600',
    },
  });
};
