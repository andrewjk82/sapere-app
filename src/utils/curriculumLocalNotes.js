// Curriculum working notes stay on this browser/device. They are never synced
// to Firebase and are kept separately from submitted homework records.
const DB_NAME = 'sapere-curriculum-notes';
const STORE = 'notes';
let dbPromise = null;

const openDb = () => {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('indexedDB unavailable'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE);
    };
    request.onsuccess = () => {
      const db = request.result;
      db.onclose = () => { dbPromise = null; };
      db.onversionchange = () => { db.close(); dbPromise = null; };
      resolve(db);
    };
    request.onerror = () => reject(request.error);
  }).catch((error) => {
    dbPromise = null;
    throw error;
  });
  return dbPromise;
};

const read = async (key) => {
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const request = tx.objectStore(STORE).get(key);
      request.onsuccess = () => resolve(request.result?.pages || null);
      request.onerror = () => reject(request.error);
    });
  } catch {
    return null;
  }
};

// Like `read`, but says whether the read worked: a failed read is NOT "no notes yet" — treating it as
// empty would let the next autosave overwrite the real notes with a blank pad.
const readChecked = async (key) => {
  try {
    const db = await openDb();
    const data = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const request = tx.objectStore(STORE).get(key);
      request.onsuccess = () => resolve(request.result?.pages || null);
      request.onerror = () => reject(request.error);
    });
    return { ok: true, data };
  } catch {
    return { ok: false, data: null };
  }
};

const write = async (key, pages) => {
  try {
    const db = await openDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put({ pages, updatedAt: Date.now() }, key);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
    return true;
  } catch {
    return false;
  }
};

// Notes saved before the key became `topic:<topicId>` were stored under `<year|course>:<topicId>:<worksheet URL>`.
// That key changed whenever the worksheet link did (or the topic was reopened from a different path), so a
// student's note could stop opening. This finds the most recently saved note for a topic under any such
// old key. It only reads — the old records are never touched.
export const noteKeyForTopic = (topicId) => `topic:${topicId}`;
export const isLegacyNoteKeyFor = (key, topicId) => {
  if (typeof key !== 'string') return false;
  const parts = key.split(':');
  return parts.length >= 3 && parts[0] !== 'topic' && parts[1] === String(topicId);
};

const findLegacyNote = async (topicId) => {
  if (!topicId) return null;
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      let best = null;
      const cursorRequest = tx.objectStore(STORE).openCursor();
      cursorRequest.onsuccess = () => {
        const cursor = cursorRequest.result;
        if (!cursor) { resolve(best); return; }
        if (isLegacyNoteKeyFor(cursor.key, topicId) && cursor.value?.pages) {
          const updatedAt = Number(cursor.value.updatedAt) || 0;
          if (!best || updatedAt > best.updatedAt) best = { key: cursor.key, pages: cursor.value.pages, updatedAt };
        }
        cursor.continue();
      };
      cursorRequest.onerror = () => reject(cursorRequest.error);
    });
  } catch {
    return null;
  }
};

export const loadCurriculumNote = read;
export const loadLegacyCurriculumNote = findLegacyNote;
export const loadCurriculumNoteChecked = readChecked;
export const saveCurriculumNote = write;
