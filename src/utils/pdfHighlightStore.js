// Per-device storage for PDF highlights, keyed by the PDF's Drive file id.
// Nothing here touches Firestore. Every call swallows errors — private mode or
// blocked storage just means the highlights are not remembered.
import { cleanHighlights } from './pdfHighlights';

const DB_NAME = 'sapere-pdf-highlights';
const STORE = 'docs';
let dbPromise = null;

const openDb = () => {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') { reject(new Error('indexedDB unavailable')); return; }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => { if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE); };
    req.onsuccess = () => {
      const db = req.result;
      db.onclose = () => { dbPromise = null; };
      db.onversionchange = () => { db.close(); dbPromise = null; };
      resolve(db);
    };
    req.onerror = () => reject(req.error);
  }).catch((err) => { dbPromise = null; throw err; });
  return dbPromise;
};

const run = async (mode, operate) => {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    let tx;
    try { tx = db.transaction(STORE, mode); } catch (err) { dbPromise = null; reject(err); return; }
    const req = operate(tx.objectStore(STORE));
    tx.oncomplete = () => resolve(req?.result);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
};

export const loadHighlights = async (key) => {
  if (!key) return {};
  try {
    const record = await run('readonly', (store) => store.get(key));
    return cleanHighlights(record?.pages);
  } catch {
    return {};
  }
};

// An empty set removes the record instead of keeping an empty one.
export const saveHighlights = async (key, pages) => {
  if (!key) return false;
  const clean = cleanHighlights(pages);
  try {
    if (Object.keys(clean).length === 0) await run('readwrite', (store) => store.delete(key));
    else await run('readwrite', (store) => store.put({ pages: clean, updatedAt: Date.now() }, key));
    return true;
  } catch {
    return false;
  }
};
