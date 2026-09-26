/**
 * "Who else is studying right now" for the Study Timer focus screen.
 *
 * Uses the Firebase Realtime Database, not Firestore: presence is exactly what RTDB's
 * onDisconnect() is for — the server deletes a student's entry when their tab closes or
 * the connection drops, so there is no heartbeat write and no stale "still studying"
 * ghosts. RTDB is not billed per document read, so a live listener on the whole list costs
 * nothing like a Firestore listener would (Sapere is on the Spark plan).
 *
 * Traffic model:
 *   - write: one per start / pause / resume / stop (never per second)
 *   - listen: only while the black focus clock is on screen (≤ ~20 concurrent students,
 *     well under Spark's 100 simultaneous connections)
 *   - viewers compute each timer locally from { bankedSec, running, since } + server offset
 *
 * Data: /studyPresence/{uid} = { name, avatarUrl, bankedSec, running, since }
 * Rules: database.rules.json (paste into the Firebase console — never `firebase deploy`).
 *
 * The feature is a silent no-op until DATABASE_URL is set (RTDB must be created in the
 * console first).
 */
import { app } from '../firebase/config';

export const DATABASE_URL = 'https://sapere-fe23e-default-rtdb.asia-southeast1.firebasedatabase.app';

let dbPromise = null;
const getDb = () => {
  if (!DATABASE_URL) return null;
  if (!dbPromise) {
    // Lazy: keeps firebase/database out of the main bundle for everyone who never opens
    // the focus screen.
    dbPromise = import('firebase/database').then((mod) => ({ mod, db: mod.getDatabase(app, DATABASE_URL) }));
  }
  return dbPromise;
};

const firstNameOf = (profile) => {
  // Some accounts store the full name in firstName — show the first word only.
  const raw = profile?.firstName || profile?.name || profile?.displayName || 'Student';
  return String(raw).trim().split(/\s+/)[0] || 'Student';
};

/** Publish (or refresh) this student's entry. Safe to call on every phase change. */
export const publishStudyPresence = async ({ uid, profile, avatarUrl, bankedSec, running }) => {
  const handle = getDb();
  if (!handle || !uid) return;
  try {
    const { mod, db } = await handle;
    const node = mod.ref(db, `studyPresence/${uid}`);
    await mod.onDisconnect(node).remove();
    await mod.set(node, {
      name: firstNameOf(profile),
      // Inline data: images (some dream images) are far too big for a presence row.
      avatarUrl: avatarUrl && !String(avatarUrl).startsWith('data:') && String(avatarUrl).length <= 2000 ? avatarUrl : '',
      bankedSec: Math.max(0, Math.floor(Number(bankedSec) || 0)),
      running: Boolean(running),
      since: mod.serverTimestamp(),
    });
  } catch (e) {
    console.warn('[studyPresence] publish failed (non-fatal):', e?.code || e?.message || e);
  }
};

export const clearStudyPresence = async (uid) => {
  const handle = getDb();
  if (!handle || !uid) return;
  try {
    const { mod, db } = await handle;
    const node = mod.ref(db, `studyPresence/${uid}`);
    await mod.remove(node);
    await mod.onDisconnect(node).cancel();
  } catch (e) {
    console.warn('[studyPresence] clear failed (non-fatal):', e?.code || e?.message || e);
  }
};

/**
 * Live list of everyone else studying. `onChange(list, serverOffsetMs)` where each entry is
 * { uid, name, avatarUrl, bankedSec, running, since }. Returns an unsubscribe function.
 */
export const subscribeStudyPresence = (selfUid, onChange) => {
  const handle = getDb();
  if (!handle) return () => {};
  let unsubs = [];
  let cancelled = false;
  let offset = 0;
  let latest = [];
  handle.then(({ mod, db }) => {
    if (cancelled) return;
    unsubs.push(mod.onValue(mod.ref(db, '.info/serverTimeOffset'), (snap) => {
      offset = Number(snap.val()) || 0;
      onChange(latest, offset);
    }));
    unsubs.push(mod.onValue(mod.ref(db, 'studyPresence'), (snap) => {
      const val = snap.val() || {};
      latest = Object.entries(val)
        .filter(([id, v]) => id !== selfUid && v && typeof v === 'object')
        .map(([id, v]) => ({ uid: id, ...v }))
        .sort((a, b) => (Number(a.since) || 0) - (Number(b.since) || 0));
      onChange(latest, offset);
    }, (e) => console.warn('[studyPresence] listen failed (non-fatal):', e?.code || e?.message || e)));
  }).catch(() => {});
  return () => { cancelled = true; unsubs.forEach((u) => u()); unsubs = []; };
};

/** Elapsed seconds for an entry right now, on the server clock. */
export const presenceElapsedSec = (entry, serverOffsetMs) => {
  const base = Number(entry?.bankedSec) || 0;
  if (!entry?.running || !entry?.since) return base;
  return base + Math.max(0, Math.floor((Date.now() + serverOffsetMs - Number(entry.since)) / 1000));
};
