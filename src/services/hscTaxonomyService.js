/**
 * HSC question-type and Question-DNA definitions (Firestore `question_types`, `question_dna`), cached on the device.
 *
 * Both are small, teacher-authored taxonomies (≈21 and ≈33 docs) that change a few times a term, yet HSC Type
 * Practice re-read both whole collections on every visit (~54 reads), and Curriculum's Past Paper filter read
 * `question_types` again. They now come from IndexedDB (not localStorage — DNA docs carry reasoning blueprints and
 * localStorage quota pressure is a known crash source) and are re-read from Firestore at most once per
 * REFRESH_MS per device. A failed refresh keeps serving the stale copy.
 *
 * The teacher's own review page passes { force: true } so edits made with the DNA tooling show up immediately
 * there; students pick them up within REFRESH_MS.
 */
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { idbGet, idbSet } from '../utils/idbStore';

const REFRESH_MS = 24 * 60 * 60 * 1000;
const CACHE_VERSION = 1;
const memo = new Map(); // collection → Promise<docs[]>

const cacheKey = (name) => `hsc-taxonomy:v${CACHE_VERSION}:${name}`;

const readFresh = async (name, idField) => {
  const snap = await getDocs(collection(db, name));
  const docs = snap.docs.map((d) => ({ [idField]: d.id, ...d.data() }));
  // Firestore Timestamps don't survive structured clone as Timestamps; nothing here needs them as such.
  idbSet(cacheKey(name), { savedAt: Date.now(), docs: JSON.parse(JSON.stringify(docs)) }).catch(() => {});
  return docs;
};

const load = (name, idField, { force = false } = {}) => {
  if (!force && memo.has(name)) return memo.get(name);
  const promise = (async () => {
    const cached = force ? null : await idbGet(cacheKey(name));
    if (cached && Array.isArray(cached.docs) && Date.now() - Number(cached.savedAt || 0) < REFRESH_MS) {
      return cached.docs;
    }
    try {
      return await readFresh(name, idField);
    } catch (err) {
      const stale = cached || await idbGet(cacheKey(name));
      if (stale && Array.isArray(stale.docs)) return stale.docs;
      throw err;
    }
  })();
  memo.set(name, promise);
  promise.catch(() => memo.delete(name));
  return promise;
};

/** question_types docs as `{ id, ...data }`. */
export const loadQuestionTypes = (opts) => load('question_types', 'id', opts);

/** question_dna docs as `{ dnaId, ...data }`. */
export const loadQuestionDna = (opts) => load('question_dna', 'dnaId', opts);
