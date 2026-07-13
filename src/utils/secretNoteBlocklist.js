/**
 * Secret Note blocklist — low-Firebase sync
 * --------------------------------------------------------------------------
 * Teachers append broken question ids to system_config/secretNoteBlocklist.
 * Students used to keep a permanent onSnapshot (1 listener × all online kids).
 *
 * Now: when Secret Note opens, one getDoc. If `version` matches the local
 * stamp, do nothing further. If it changed, prune local notebooks and store
 * the new version + ids.
 */
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { pruneBlocked } from './secretNote';

const LOCAL_KEY = 'sapere:sn-blocklist-sync-v1';

const readLocal = () => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed || typeof parsed !== 'object') return { version: 0, ids: [] };
    return {
      version: Number(parsed.version) || 0,
      ids: Array.isArray(parsed.ids) ? parsed.ids.map(String) : [],
    };
  } catch {
    return { version: 0, ids: [] };
  }
};

const writeLocal = (version, ids) => {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify({
      version: Number(version) || 0,
      ids: Array.isArray(ids) ? ids.map(String) : [],
      savedAt: Date.now(),
    }));
  } catch { /* ignore */ }
};

/** Resolve a comparable version number from the server doc. */
const resolveVersion = (data) => {
  if (!data) return 0;
  if (Number(data.version) > 0) return Number(data.version);
  const ts = data.updatedAt;
  if (ts && typeof ts.toMillis === 'function') return ts.toMillis();
  if (typeof ts === 'number') return ts;
  // Fallback: stable-ish from id list length + hash of joined ids
  const ids = Array.isArray(data.ids) ? data.ids.map(String) : [];
  let h = ids.length * 10007;
  for (let i = 0; i < ids.length; i += 1) {
    const s = ids[i];
    for (let j = 0; j < s.length; j += 1) h = (Math.imul(h, 31) + s.charCodeAt(j)) | 0;
  }
  return Math.abs(h) || ids.length;
};

/**
 * Sync blocklist for this student. Call when opening Secret Note.
 * @returns {Promise<number>} notes removed (0 if unchanged / empty / error)
 */
export async function syncSecretNoteBlocklist(uid) {
  if (!uid || typeof window === 'undefined') return 0;

  const local = readLocal();

  try {
    const snap = await getDoc(doc(db, 'system_config', 'secretNoteBlocklist'));
    if (!snap.exists()) {
      writeLocal(0, []);
      return 0;
    }

    const data = snap.data() || {};
    const version = resolveVersion(data);
    const ids = Array.isArray(data.ids) ? data.ids.map(String) : [];

    // Same version as last successful sync → already pruned for this stamp.
    if (version > 0 && version === local.version) {
      return 0;
    }

    const removed = pruneBlocked(uid, ids);
    writeLocal(version, ids);
    return removed;
  } catch (e) {
    console.warn('[secretNoteBlocklist] sync failed:', e?.code || e?.message || e);
    // Offline / permission: still try prune with last known local ids
    if (local.ids?.length) {
      try { return pruneBlocked(uid, local.ids); } catch { return 0; }
    }
    return 0;
  }
}
