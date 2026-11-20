import { useSyncExternalStore } from 'react';

// Trial "clay" look (soft, puffy, pastel). One switch for the whole teacher shell: the choice is remembered on the
// device and mirrored as <html data-clay="1">, which the sidebar and Class page CSS key off. Off by default.
const KEY = 'sapere:classStyle';
const EVENT = 'sapere:clay-changed';

const read = () => { try { return window.localStorage.getItem(KEY) === 'clay'; } catch { return false; } };
const apply = (on) => {
  if (typeof document === 'undefined') return;
  if (on) document.documentElement.setAttribute('data-clay', '1');
  else document.documentElement.removeAttribute('data-clay');
};

if (typeof window !== 'undefined') apply(read());

export const setClayStyle = (on) => {
  try { window.localStorage.setItem(KEY, on ? 'clay' : 'plain'); } catch { /* ignore */ }
  apply(on);
  window.dispatchEvent(new Event(EVENT));
};

const subscribe = (cb) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => { window.removeEventListener(EVENT, cb); window.removeEventListener('storage', cb); };
};

export const useClayStyle = () => {
  const clay = useSyncExternalStore(subscribe, read, () => false);
  return [clay, () => setClayStyle(!read())];
};
