// Colour themes the student can pick (Settings → Colour theme). The palette itself lives in components/clay-themes.css;
// this file only stores the choice and puts it on <html data-theme>. "cream" = the original look (no attribute).
export const THEMES = [
  { id: 'cream', name: 'Cream', bg: '#fff4e4', accent: '#8a70d4' },
  { id: 'mint', name: 'Mint', bg: '#eaf7ef', accent: '#2f9e6e' },
  { id: 'sky', name: 'Sky', bg: '#eaf3fc', accent: '#3b82d6' },
  { id: 'rose', name: 'Rose', bg: '#fdecef', accent: '#d9577a' },
  { id: 'lemon', name: 'Lemon', bg: '#fff8dc', accent: '#c99a0a' },
  { id: 'lilac', name: 'Lilac', bg: '#f3eefc', accent: '#8a5be0' },
];

const KEY = 'sapere:theme';
const known = (id) => THEMES.some((t) => t.id === id);

export const getTheme = () => {
  try { const v = localStorage.getItem(KEY); return known(v) ? v : 'cream'; } catch { return 'cream'; }
};

// Puts the theme on the page. `remember` also keeps it on this device so the next start paints it immediately.
export const applyTheme = (id, remember = true) => {
  const theme = known(id) ? id : 'cream';
  if (typeof document !== 'undefined') {
    if (theme === 'cream') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
  }
  if (remember) { try { localStorage.setItem(KEY, theme); } catch { /* storage blocked: the account copy still applies */ } }
  return theme;
};

export const initTheme = () => { applyTheme(getTheme(), false); };
