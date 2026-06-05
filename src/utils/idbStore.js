/**
 * Minimal promise-based IndexedDB key–value store (no dependencies).
 *
 * Why this exists: localStorage has a hard ~5 MB quota and throws
 * QuotaExceededError when exceeded. Large caches (e.g. the Exam Prep question
 * pool with embedded base64 diagrams) overflow it. IndexedDB has a far larger
 * quota (typically a large fraction of free disk) and stores structured data
 * directly — no JSON.stringify, no string-length ceiling.
 *
 * Every method is defensive: if IndexedDB is unavailable (private mode, old
 * browser) or a transaction fails, reads resolve to null and writes resolve to
 * false instead of throwing. Callers can treat persistence as best-effort.
 */

const DB_NAME = 'sapere';
const STORE = 'kv';
const VERSION = 1;

let dbPromise = null;

const openDB = () => {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    let req;
    try {
      req = indexedDB.open(DB_NAME, VERSION);
    } catch (err) {
      reject(err);
      return;
    }
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onblocked = () => reject(new Error('IndexedDB blocked'));
  });
  // Reset on failure so a later call can retry a fresh open.
  dbPromise.catch(() => { dbPromise = null; });
  return dbPromise;
};

export const idbGet = async (key) => {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(key);
      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
};

export const idbSet = async (key, value) => {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(value, key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error || new Error('tx aborted'));
    });
  } catch {
    return false;
  }
};

export const idbDel = async (key) => {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
      tx.onabort = () => resolve(false);
    });
  } catch {
    return false;
  }
};
