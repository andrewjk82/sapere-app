// Colour themes the student can pick (Settings → Colour theme). The palette itself lives in components/clay-themes.css;
// this file only stores the choice and puts it on <html data-theme>. "cream" = the original look (no attribute).
export const THEMES = [
  { id: 'cream', name: 'Cream', bg: '#fff4e4', accent: '#8a70d4' },
  { id: 'mint', name: 'Mint', bg: '#eaf7ef', accent: '#2f9e6e' },
  { id: 'sky', name: 'Sky', bg: '#eaf3fc', accent: '#3b82d6' },
  { id: 'rose', name: 'Rose', bg: '#fdecef', accent: '#d9577a' },
  { id: 'lemon', name: 'Lemon', bg: '#fff8dc', accent: '#c99a0a' },
  { id: 'lilac', name: 'Lilac', bg: '#f3eefc', accent: '#8a5be0' },
  { id: 'dark', name: 'Dark', bg: '#2a2838', accent: '#a58bf0', ink: '#f1ecff' },
  { id: 'auto', name: 'Auto', bg: 'linear-gradient(115deg, #fff4e4 50%, #2a2838 50%)', accent: '#8a70d4', ink: '#4a2f2a' },
];

const KEY = 'sapere:theme';
const known = (id) => THEMES.some((t) => t.id === id);

export const getTheme = () => {
  try { const v = localStorage.getItem(KEY); return known(v) ? v : 'cream'; } catch { return 'cream'; }
};

// Puts the theme on the page. `remember` also keeps it on this device so the next start paints it immediately.
// "auto" follows the phone/computer setting (light = Cream, dark = Dark) and switches live when that setting changes.
const darkQuery = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null);
let chosen = 'cream';
let watching = false;
const paint = () => {
  if (typeof document === 'undefined') return;
  const shown = chosen === 'auto' ? (darkQuery()?.matches ? 'dark' : 'cream') : chosen;
  const root = document.documentElement;
  if (shown === 'cream') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', shown);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', shown === 'dark' ? '#1b1a24' : '#6366f1');
};
export const applyTheme = (id, remember = true) => {
  const theme = known(id) ? id : 'cream';
  chosen = theme;
  paint();
  if (!watching) { watching = true; darkQuery()?.addEventListener?.('change', () => { if (chosen === 'auto') paint(); }); }
  if (remember) { try { localStorage.setItem(KEY, theme); } catch { /* storage blocked: the account copy still applies */ } }
  return theme;
};

export const initTheme = () => { applyTheme(getTheme(), false); };
