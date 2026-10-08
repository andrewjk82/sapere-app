// Device cache for the teacher's textbook answer keys (Firestore answer_keys/{topicId}).
// Answers almost never change, so a key read once is kept in IndexedDB and
// reused — marking the same topic again costs no Firestore read. Entries expire
// after TTL (so a corrected key reaches the device within two weeks) and are
// dropped when ANSWER_KEY_CACHE_VERSION changes. "No key" results are never
// stored, so a key added later shows up on the next open.

// 2: part-level labels (1a, 1b, …) replaced the number-only labels for the Cambridge Year 11 books.
export const ANSWER_KEY_CACHE_VERSION = 2;
export const ANSWER_KEY_TTL_MS = 14 * 24 * 60 * 60 * 1000;

// adapter: { get(id) → Promise<record|undefined>, set(id, record) → Promise }
export const createAnswerKeyCache = (adapter, { ttlMs = ANSWER_KEY_TTL_MS, version = ANSWER_KEY_CACHE_VERSION, now = Date.now } = {}) => ({
  async get(id) {
    try {
      const rec = await adapter.get(id);
      if (!rec || rec.version !== version || !rec.data) return null;
      if (now() - rec.cachedAt > ttlMs) return null;
      return rec.data;
    } catch {
      return null;
    }
  },
  async set(id, data) {
    if (!data) return;
    try { await adapter.set(id, { data, version, cachedAt: now() }); } catch { /* best-effort cache only */ }
  },
});

// Browser adapter. Any failure (private mode, quota, no IndexedDB) just means
// "not cached" — callers fall back to Firestore.
export const idbAnswerKeyAdapter = () => {
  let dbPromise;
  const open = () => {
    if (!dbPromise) {
      dbPromise = new Promise((resolve, reject) => {
        if (typeof indexedDB === 'undefined') { reject(new Error('no indexedDB')); return; }
        const req = indexedDB.open('sapere-answer-keys', 1);
        req.onupgradeneeded = () => req.result.createObjectStore('keys');
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
    return dbPromise;
  };
  const run = async (mode, operate) => {
    const db = await open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('keys', mode);
      const req = operate(tx.objectStore('keys'));
      tx.oncomplete = () => resolve(req?.result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  };
  return {
    get: (id) => run('readonly', (s) => s.get(id)),
    set: (id, record) => run('readwrite', (s) => s.put(record, id)),
  };
};
