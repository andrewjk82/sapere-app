// The PDF a student's lessons use, kept on this device only (IndexedDB) — one per student, replaced when a
// new one is chosen. Never synced anywhere. Lesson notes live in curriculumLocalNotes under `lesson:` keys.
const DB_NAME = 'sapere-lesson-pdfs';
const STORE = 'pdfs';
let dbPromise = null;

const openDb = () => {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') { reject(new Error('indexedDB unavailable')); return; }
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
  }).catch((error) => { dbPromise = null; throw error; });
  return dbPromise;
};

const run = async (mode, fn) => {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const request = fn(tx.objectStore(STORE));
    tx.oncomplete = () => resolve(request?.result ?? null);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('aborted'));
  });
};

// → { name, size, blob, updatedAt } | null. Throws when the device storage cannot be read (that is not "no PDF").
export const loadLessonPdf = (studentId) => run('readonly', (store) => store.get(studentId)).then((r) => r || null);

export const saveLessonPdf = (studentId, file) => run('readwrite', (store) => store.put(
  { name: file.name, size: file.size, blob: file, updatedAt: Date.now() },
  studentId,
));

export const deleteLessonPdf = (studentId) => run('readwrite', (store) => store.delete(studentId));

export const lessonNoteKey = (studentId, date) => `lesson:${studentId}:${date}`;
