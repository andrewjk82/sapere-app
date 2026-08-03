/**
 * secretNoteSyncService.js
 *
 * Cross-device sync for the Secret Note (see secretNote.js). Secret Note
 * content itself stays local-first — this only adds a low-traffic bridge:
 *
 *   - Pull: ONE point-read on note open (`pullRemoteNote`), compared against
 *     a per-device "last synced" marker. If the remote copy is newer, it
 *     replaces the local copy before the review queue is built. No listener.
 *   - Push: the full (small) item array is written to Firestore only at
 *     session-boundary events the caller chooses (unmount, tab hidden,
 *     session done) — never per answered question. Callers should read
 *     current items fresh from secretNote.js and call `pushLocalNote` once
 *     per boundary; an unchanged snapshot is skipped (no-op write).
 *
 * One doc per kind: `users/{uid}/secret_note/{kind}`, holding the whole
 * items array plus `updatedAtMs` (client clock, used for ordering without
 * waiting on `serverTimestamp()` to resolve) and `updatedAt` (server time,
 * informational only).
 */

import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { trackRead, trackWrite } from './trafficTrackerService';

const LAST_SYNCED_KEY = (uid, kind) => `sapere:sn-last-synced:${uid || 'anon'}:${kind}`;
const LAST_PUSHED_SIG_KEY = (uid, kind) => `sapere:sn-last-pushed-sig:${uid || 'anon'}:${kind}`;

const noteDocRef = (uid, kind) => doc(db, 'users', uid, 'secret_note', kind);

const getLastSyncedMs = (uid, kind) => {
  try {
    return Number(localStorage.getItem(LAST_SYNCED_KEY(uid, kind))) || 0;
  } catch {
    return 0;
  }
};

const setLastSyncedMs = (uid, kind, ms) => {
  try {
    localStorage.setItem(LAST_SYNCED_KEY(uid, kind), String(ms || 0));
  } catch { /* ignore */ }
};

const getLastPushedSignature = (uid, kind) => {
  try {
    return localStorage.getItem(LAST_PUSHED_SIG_KEY(uid, kind)) || '';
  } catch {
    return '';
  }
};

const setLastPushedSignature = (uid, kind, sig) => {
  try {
    localStorage.setItem(LAST_PUSHED_SIG_KEY(uid, kind), sig || '');
  } catch { /* ignore */ }
};

// Cheap content signature — good enough to skip a byte-for-byte-unchanged
// republish (e.g. pushed on "hidden" then again moments later on unmount).
const signatureOf = (items) => {
  if (!Array.isArray(items) || items.length === 0) return '0';
  return `${items.length}:${items.map((it) => `${it.question?.id}.${it.stage}.${it.nextReviewAt}.${it.correctStreak}.${it.mistakeTag || ''}`).join('|')}`;
};

/**
 * One point-read of the remote note doc, called only on note-open. Returns
 * `{ items, updatedAtMs }` when the remote copy is newer than what this
 * device last synced, otherwise `null` (local stays authoritative — no
 * write happened, so nothing is lost by skipping the merge).
 */
export const pullRemoteNoteIfNewer = async (uid, kind) => {
  if (!uid || !kind) return null;
  try {
    const snap = await getDoc(noteDocRef(uid, kind));
    trackRead(1, 'secret_note_sync');
    if (!snap.exists()) return null;
    const data = snap.data();
    const remoteMs = Number(data?.updatedAtMs) || 0;
    if (remoteMs <= getLastSyncedMs(uid, kind)) return null;
    setLastSyncedMs(uid, kind, remoteMs);
    setLastPushedSignature(uid, kind, signatureOf(data?.items));
    return { items: Array.isArray(data?.items) ? data.items : [], updatedAtMs: remoteMs };
  } catch (err) {
    console.warn('[secretNoteSync] pull failed:', err?.code || err);
    return null;
  }
};

/**
 * Publish the full item array at a session-boundary event (unmount, tab
 * hidden, session done) — never per answered question. Skips the write
 * entirely when the content signature matches what was last pushed/pulled.
 */
export const pushLocalNote = async (uid, kind, items) => {
  if (!uid || !kind) return;
  const sig = signatureOf(items);
  if (sig === getLastPushedSignature(uid, kind)) return; // unchanged — no-op
  const updatedAtMs = Date.now();
  try {
    await setDoc(noteDocRef(uid, kind), {
      items: items || [],
      updatedAtMs,
      updatedAt: serverTimestamp(),
    });
    trackWrite(1, 'secret_note_sync');
    setLastSyncedMs(uid, kind, updatedAtMs);
    setLastPushedSignature(uid, kind, sig);
  } catch (err) {
    console.warn('[secretNoteSync] push failed:', err?.code || err);
  }
};
