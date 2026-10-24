export interface Tema {
  id: string;
  lettera: string;
  nome: string;
  idea: string;
  wow?: boolean;
}

export const TEMI: Tema[] = [
  { id: 'essenziale', lettera: 'A', nome: 'Essenziale', idea: 'Pulita e chiara: foto, camere, calendario e contatti senza distrazioni.' },
  { id: 'bordeaux', lettera: 'B', nome: 'Bordeaux pieno', idea: 'Grandi blocchi a colore pieno: il bordeaux del logo diventa la casa.' },
  { id: 'diario', lettera: 'C', nome: 'Diario', idea: 'Impaginata come una rivista: la casa raccontata a capitoli.' },
  { id: 'canto', lettera: 'D', nome: 'Il canto', idea: 'La R con la piuma apre la pagina e il logo si scrive mentre scorri.', wow: true },
  { id: 'cancello', lettera: 'E', nome: 'Dal cancello alla stanza', idea: 'Scorrendo entri: cancello, giardino, camera, colazione.', wow: true },
  { id: 'casa', lettera: 'F', nome: 'La casa da esplorare', idea: 'La casa disegnata: tocchi una finestra e si apre la camera.' },
  { id: 'date', lettera: 'G', nome: 'Prima le date', idea: 'Il calendario è la prima cosa: scegli i giorni e vedi subito cosa è libero.' },
  { id: 'chiavi', lettera: 'H', nome: 'Le chiavi', idea: 'Ogni camera è una chiave con la sua targhetta: la giri e scopri la stanza.' },
  { id: 'giornata', lettera: 'I', nome: 'Una giornata qui', idea: 'Il cielo passa dall’alba alla notte mentre scorri la giornata tipo.', wow: true },
  { id: 'foto', lettera: 'J', nome: 'Tutto foto', idea: 'Le foto vere a schermo intero, testi minimi: piscina, giardino e camere parlano da sole.' },
];

export function percorsiTemi() {
  return TEMI.map((t) => ({ params: { tema: t.id }, props: { tema: t } }));
}

export function link(tema: string, percorso = '') {
  const p = percorso.replace(/^\//, '');
  return `/${tema}/${p}${p && !p.includes('?') && !p.includes('#') ? '/' : ''}`;
}

export function trovaTema(id: string) {
  return TEMI.find((t) => t.id === id) ?? TEMI[0];
}
