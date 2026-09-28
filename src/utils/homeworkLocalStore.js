// Per-device homework storage: the in-progress ink draft and the full-size
// pages the student submitted. Firestore keeps only thumbnails long-term, so
// this is the student's full-quality copy. Every call swallows errors — a
// private window or blocked storage must never break the homework screen.

const DB_NAME = 'sapere-homework';
const STORE = 'items';
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
      // iOS Safari can close an IndexedDB connection behind our back (e.g. after
      // the tab is backgrounded). Drop the cached promise so the next call
      // reopens instead of failing on a dead handle for the rest of the session.
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

const keyOf = (uid, sessionId) => `${uid}:${sessionId}`;

const run = async (mode, operate) => {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    let tx;
    try {
      tx = db.transaction(STORE, mode);
    } catch (err) {
      // InvalidStateError: the connection was closed. Reopen next time.
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

export const loadHomeworkLocal = async (uid, sessionId) => {
  if (!uid || !sessionId) return null;
  try {
    return (await run('readonly', (store) => store.get(keyOf(uid, sessionId)))) || null;
  } catch {
    return null;
  }
};

export const saveHomeworkLocal = async (uid, sessionId, patch) => {
  if (!uid || !sessionId) return false;
  try {
    // Read-merge-write inside ONE readwrite transaction so two overlapping
    // saves (draft autosave + submittedImages) can't drop each other's fields.
    const key = keyOf(uid, sessionId);
    await run('readwrite', (store) => {
      const getReq = store.get(key);
      getReq.onsuccess = () => {
        try {
          store.put({ ...(getReq.result || {}), ...patch, updatedAt: Date.now() }, key);
        } catch {
          // e.g. DataCloneError — abort so run() rejects instead of resolving.
          store.transaction.abort();
        }
      };
      return getReq;
    });
    return true;
  } catch {
    return false;
  }
};

// Safari evicts script-written storage after 7 days without a visit unless the
// site is persisted (installed to the home screen, or persist() granted).
export const requestPersistentStorage = async () => {
  try {
    if (navigator?.storage?.persist && !(await navigator.storage.persisted?.())) {
      await navigator.storage.persist();
    }
  } catch { /* best effort */ }
};
