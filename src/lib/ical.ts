// Lettura dei calendari iCal di Booking e Airbnb (solo date occupate).
export interface Occupato {
  uid: string;
  dal: string; // YYYY-MM-DD arrivo
  al: string; // YYYY-MM-DD partenza (esclusa)
  titolo: string;
}

function data(v: string) {
  const m = v.match(/(\d{4})(\d{2})(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : '';
}

export function leggiIcal(testo: string): Occupato[] {
  // "srotola" le righe spezzate (RFC 5545: le continuazioni iniziano con spazio o tab)
  const righe = testo.replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '').split(/\r?\n/);
  const eventi: Occupato[] = [];
  let ev: Partial<Occupato> | null = null;
  for (const riga of righe) {
    if (riga.startsWith('BEGIN:VEVENT')) ev = {};
    else if (riga.startsWith('END:VEVENT')) {
      if (ev?.dal) {
        if (!ev.al || ev.al <= ev.dal) {
          const d = new Date(ev.dal + 'T12:00:00Z');
          d.setUTCDate(d.getUTCDate() + 1);
          ev.al = d.toISOString().slice(0, 10);
        }
        eventi.push({ uid: ev.uid || `${ev.dal}-${ev.al}`, dal: ev.dal, al: ev.al, titolo: ev.titolo || '' });
      }
      ev = null;
    } else if (ev) {
      const i = riga.indexOf(':');
      if (i < 0) continue;
      const chiave = riga.slice(0, i).split(';')[0].toUpperCase();
      const valore = riga.slice(i + 1).trim();
      if (chiave === 'DTSTART') ev.dal = data(valore);
      else if (chiave === 'DTEND') ev.al = data(valore);
      else if (chiave === 'UID') ev.uid = valore;
      else if (chiave === 'SUMMARY') ev.titolo = valore;
    }
  }
  return eventi;
}
