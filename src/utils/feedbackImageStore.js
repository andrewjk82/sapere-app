// Per-device store for teacher-feedback photos (see feedbackImages.js). Keyed by
// `${uid}:${noteId}`. Reads swallow errors (a private window or blocked storage just
// means "no photos here"); saveFeedbackImages throws so the caller never strips the
// Firestore copy of a photo this device failed to keep.

const DB_NAME = 'sapere-feedback';
const STORE = 'images';
let dbPromise = null;

const openDb = () => {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('indexedDB unavailable'));
      return;
    }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => {
      const db = req.result;
      // iOS Safari can close the connection when the tab is backgrounded — reopen next call.
      db.onclose = () => { dbPromise = null; };
      db.onversionchange = () => { db.close(); dbPromise = null; };
      resolve(db);
    };
    req.onerror = () => reject(req.error);
  }).catch((err) => {
    dbPromise = null;
    throw err;
  });
  return dbPromise;
};

const keyOf = (uid, noteId) => `${uid}:${noteId}`;

const run = async (mode, operate) => {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    let tx;
    try {
      tx = db.transaction(STORE, mode);
    } catch (err) {
      dbPromise = null;
      reject(err);
      return;
    }
    const req = operate(tx.objectStore(STORE));
    tx.oncomplete = () => resolve(req?.result);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
};

export const saveFeedbackImages = (uid, noteId, images) =>
  run('readwrite', (store) => store.put(images, keyOf(uid, noteId)));

// { [noteId]: images } for the notes this device has photos for.
export const loadFeedbackImages = async (uid, noteIds) => {
  const out = {};
  if (!uid || !noteIds.length) return out;
  try {
    const found = await run('readonly', (store) => {
      const reqs = noteIds.map((id) => [id, store.get(keyOf(uid, id))]);
      return { get result() { return reqs.map(([id, r]) => [id, r.result]); } };
    });
    for (const [id, images] of found) if (images) out[id] = images;
  } catch { /* no photos on this device */ }
  return out;
};

export const deleteFeedbackImages = async (uid, noteId) => {
  try { await run('readwrite', (store) => store.delete(keyOf(uid, noteId))); } catch { /* best-effort */ }
};
