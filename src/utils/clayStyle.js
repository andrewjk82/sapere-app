import { useSyncExternalStore } from 'react';

// "Clay" look (soft, puffy, pastel). One switch for the whole app shell (students and teacher): on by default; the
// Class page's Clay style button turns it off/on and the choice is remembered on the device. Mirrored as
// <html data-clay="1">, which the sidebar and Class page CSS key off.
const KEY = 'sapere:classStyle';
const EVENT = 'sapere:clay-changed';

const read = () => { try { return window.localStorage.getItem(KEY) !== 'plain'; } catch { return true; } };
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
  const clay = useSyncExternalStore(subscribe, read, () => true);
  return [clay, () => setClayStyle(!read())];
};
