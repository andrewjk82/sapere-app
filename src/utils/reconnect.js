import { disableNetwork, enableNetwork } from 'firebase/firestore';
import { db } from '../firebase/config';
import { TIMEOUT_MESSAGE, withTimeout } from './withTimeout';

// An iPad home-screen app is suspended rather than closed, and can come back holding a dead Firestore connection:
// one-off reads then wait forever until the app is reloaded. Closing and reopening the network does the same job
// without a reload. Writes made meanwhile stay queued and are sent afterwards.
const MIN_GAP_MS = 20_000;
let running = null;
let lastAt = 0;

export const reconnectFirestore = () => {
  if (running) return running;
  if (Date.now() - lastAt < MIN_GAP_MS) return Promise.resolve();
  running = (async () => {
    try {
      await withTimeout(disableNetwork(db), 3000).catch(() => {});
      await withTimeout(enableNetwork(db), 3000).catch(() => {});
    } finally {
      lastAt = Date.now();
      running = null;
    }
  })();
  return running;
};

// `start()` begins a fresh read each time. No answer within `ms`: reconnect and ask again.
export const readWithReconnect = async (start, { ms = 10_000, tries = 3 } = {}) => {
  for (let attempt = 1; ; attempt += 1) {
    try {
      return await withTimeout(start(), ms);
    } catch (error) {
      if (error?.message !== TIMEOUT_MESSAGE || attempt >= tries) throw error;
      await reconnectFirestore();
    }
  }
};
