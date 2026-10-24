export interface Tema {
  id: string;
  lettera: string;
  nome: string;
  idea: string;
  wow?: boolean;
}

export const TEMI: Tema[] = [
  { id: 'essenziale', lettera: 'A', nome: 'Essenziale', idea: 'Pulita e chiara: testo e foto affiancati, poi casa, recensioni e calendario.' },
  { id: 'bordeaux', lettera: 'B', nome: 'Bordeaux pieno', idea: 'Grandi blocchi a colore pieno: il colore del logo diventa la casa.' },
  { id: 'centrale', lettera: 'C', nome: 'Centrale', idea: 'Tutto centrato e arioso: titolo grande, una foto larga e sezioni in fila.' },
  { id: 'salvia', lettera: 'D', nome: 'Salvia', idea: 'Come la B ma più naturale: blocchi verde salvia e accenti vinaccia.' },
  { id: 'meta', lettera: 'E', nome: 'Metà e metà', idea: 'Su computer la foto resta ferma a sinistra e il contenuto scorre a destra.' },
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
