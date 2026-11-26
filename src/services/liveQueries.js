import { onSnapshot } from 'firebase/firestore';
import { reconnectFirestore } from '../utils/reconnect';

// One realtime listener per query key, shared by every screen that wants it. It stays up for a while after the last
// screen leaves (switching tabs back and forth costs nothing and paints at once), pauses while the app is hidden, and
// reconnects once if the server does not answer.
const LINGER_MS = 10 * 60_000;
const STALL_MS = 12_000;
const entries = new Map();

const emit = (entry) => entry.listeners.forEach((l) => l.onData(entry.last));

const detach = (entry) => {
  clearTimeout(entry.stall);
  entry.unsub();
  entry.unsub = () => {};
  entry.attached = false;
};

const fail = (entry, error) => {
  console.warn(`[live] ${entry.key} failed:`, error?.code || error?.message || error);
  detach(entry);
  entry.listeners.forEach((l) => l.onError?.(error));
};

function attach(entry, retried = false) {
  detach(entry);
  if (document.visibilityState === 'hidden') return;
  entry.attached = true;
  entry.stall = setTimeout(() => {
    if (retried) {
      // Keep listening (it may still answer); screens with nothing to show offer Retry.
      entry.listeners.forEach((l) => l.onError?.(new Error('timeout')));
      return;
    }
    reconnectFirestore().then(() => { if (entry.attached) attach(entry, true); });
  }, STALL_MS);
  entry.unsub = onSnapshot(entry.makeQuery(), { includeMetadataChanges: true }, (snap) => {
    const fresh = !snap.metadata.fromCache;
    if (fresh) clearTimeout(entry.stall);
    // Nothing saved on this device and no server answer yet: do not claim "empty".
    if (!fresh && snap.empty) return;
    entry.last = { docs: snap.docs.map((d) => ({ id: d.id, ...d.data() })), fresh };
    emit(entry);
  }, (error) => fail(entry, error));
}

const drop = (entry) => { detach(entry); clearTimeout(entry.linger); entries.delete(entry.key); };

document.addEventListener('visibilitychange', () => {
  entries.forEach((entry) => {
    if (document.visibilityState === 'hidden') detach(entry);
    else if (entry.listeners.size) attach(entry);
    else drop(entry);
  });
});

/** onData({ docs, fresh }) on every change, and at once if the data is already here. Returns unsubscribe. */
export const subscribeLive = (key, makeQuery, onData, onError) => {
  let entry = entries.get(key);
  if (!entry) {
    entry = { key, makeQuery, listeners: new Set(), last: null, unsub: () => {}, attached: false, stall: 0, linger: 0 };
    entries.set(key, entry);
  }
  clearTimeout(entry.linger);
  const listener = { onData, onError };
  entry.listeners.add(listener);
  if (entry.last) onData(entry.last);
  if (!entry.attached) attach(entry);
  return () => {
    entry.listeners.delete(listener);
    if (!entry.listeners.size) entry.linger = setTimeout(() => drop(entry), LINGER_MS);
  };
};

/** For a Retry button: forget the listener so the next subscribe starts afresh. */
export const resetLive = (key) => { const entry = entries.get(key); if (entry) drop(entry); };
