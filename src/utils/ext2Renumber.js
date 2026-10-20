// Extension 2 was re-laid out to match the 2026 textbook (CambridgeMATHS NSW Stage 6 Extension 2, Year 12):
// chapters were renumbered and some topics moved. Question ids did not change; the topic ids below did.
// Everything a student keeps on a device under an old topic id (practice progress, curriculum notes) follows
// the topic to its new id. `OLD_TO_NEW_TOPIC[oldId] = newId`; the identity entries are left out.
export const OLD_TO_NEW_TOPIC = {
  'y12e2-1G': 'y12e2-3A',
  'y12e2-1H': 'y12e2-1R',
  'y12e2-2B': 'y12e2-2C',
  'y12e2-2C': 'y12e2-2D',
  'y12e2-2D': 'y12e2-2E',
  'y12e2-2E': 'y12e2-2F',
  'y12e2-2F': 'y12e2-2G',
  'y12e2-2G': 'y12e2-2R',
  'y12e2-3A': 'y12e2-3B',
  'y12e2-3B': 'y12e2-3C',
  'y12e2-3C': 'y12e2-3D',
  'y12e2-3F': 'y12e2-3R',
  'y12e2-4A': 'y12e2-6A',
  'y12e2-4B': 'y12e2-6B',
  'y12e2-4C': 'y12e2-6C',
  'y12e2-4D': 'y12e2-6D',
  'y12e2-4E': 'y12e2-6E',
  'y12e2-4F': 'y12e2-6F',
  'y12e2-4G': 'y12e2-6G',
  'y12e2-4H': 'y12e2-6H',
  'y12e2-4I': 'y12e2-6I',
  'y12e2-4J': 'y12e2-6R',
  'y12e2-5A': 'y12e2-4X',
  'y12e2-5B': 'y12e2-4G',
  'y12e2-5C': 'y12e2-4F',
  'y12e2-5D': 'y12e2-4F',
  'y12e2-5E': 'y12e2-4G',
  'y12e2-5F': 'y12e2-4A',
  'y12e2-5G': 'y12e2-4D',
  'y12e2-5H': 'y12e2-4R',
  'y12e2-6A': 'y12e2-7C',
  'y12e2-6B': 'y12e2-7D',
  'y12e2-6C': 'y12e2-7E',
  'y12e2-6D': 'y12e2-7F',
  'y12e2-6E': 'y12e2-7G',
  'y12e2-6F': 'y12e2-7H',
  'y12e2-6G': 'y12e2-7J',
  'y12e2-6H': 'y12e2-7R',
};

// 'y12e2-4D' → 'y12e2-4'
export const chapterOfTopic = (topicId) => (/^(y12e2-\d+)/.exec(String(topicId)) || [])[1] || '';

// Old chapter id → the new chapter(s) a student's assigned / completed chapter becomes.
export const OLD_TO_NEW_CHAPTER = { 'y12e2-4': ['y12e2-6'], 'y12e2-5': ['y12e2-4'], 'y12e2-6': ['y12e2-7'] };

// What a student's assigned / completed ids (chapter ids and topic ids mixed) become. Unknown ids pass through;
// ids of topics that no longer exist in the book (Euler's exponential form) are dropped.
const RETIRED = new Set(['y12e2-3D', 'y12e2-3E']);
export const migrateStudentIds = (ids) => {
  const out = [];
  const add = (id) => { if (id && !out.includes(id)) out.push(id); };
  for (const id of Array.isArray(ids) ? ids : []) {
    if (RETIRED.has(id)) continue;
    if (OLD_TO_NEW_TOPIC[id]) { add(OLD_TO_NEW_TOPIC[id]); continue; }
    if (OLD_TO_NEW_CHAPTER[id]) { OLD_TO_NEW_CHAPTER[id].forEach(add); continue; }
    add(id);
  }
  return out;
};

// ── Device-local data: practice progress and curriculum notes ───────────────────────────────────────────────
// New ids reuse old ones (old 4D "Partial Fractions" vs new 4D "Vector Equations of Circles"), so the move must
// be done once, as a whole: take every old key out first, then write the new ones. Never run it on data that
// is already new — callers keep a "done" flag per device (notes) or per student on the device (progress).

const RETIRED_TOPICS = ['y12e2-3D', 'y12e2-3E'];
const newTopicFor = (oldId) => OLD_TO_NEW_TOPIC[oldId] || null;

const mergeMastered = (a, b) => {
  try {
    const x = JSON.parse(a); const y = JSON.parse(b);
    if (Array.isArray(x) && Array.isArray(y)) return JSON.stringify([...new Set([...x, ...y])]);
  } catch { /* not a list: keep the first */ }
  return a;
};

// keys: every storage key. read(key) → string | null. → { remove: [key], set: [[key, value]] }
export const planProgressMoves = (uid, keys, read) => {
  const prefix = `sapere:tp:${uid}:`;
  const remove = [];
  const set = new Map();
  for (const key of keys) {
    if (typeof key !== 'string' || !key.startsWith(prefix)) continue;
    const m = /^(y12e2-\d+):(y12e2-[0-9A-Za-z]+)(:.*)?$/.exec(key.slice(prefix.length));
    if (!m) continue;
    const [, , topicId, rest = ''] = m;
    const isRetired = RETIRED_TOPICS.includes(topicId);
    const target = newTopicFor(topicId);
    if (!isRetired && !target) continue;                   // unchanged topic (1A–1F, 2A)
    remove.push(key);
    if (isRetired) continue;
    const toKey = `${prefix}${chapterOfTopic(target)}:${target}${rest}`;
    const value = read(key);
    if (value == null) continue;
    set.set(toKey, set.has(toKey) ? (rest === '' ? mergeMastered(set.get(toKey), value) : set.get(toKey)) : value);
  }
  return { remove, set: [...set.entries()] };
};

// Notes: keys `topic:<topicId>` (see curriculumLocalNotes). entries = [[key, record]] → { remove, set }.
export const planNoteMoves = (entries) => {
  const remove = [];
  const set = new Map();
  for (const [key, record] of entries) {
    const m = /^topic:(y12e2-[0-9A-Za-z]+)$/.exec(String(key));
    if (!m) continue;
    const topicId = m[1];
    const isRetired = RETIRED_TOPICS.includes(topicId);
    const target = newTopicFor(topicId);
    if (!isRetired && !target) continue;
    remove.push(key);
    if (isRetired) continue;
    const toKey = `topic:${target}`;
    const prev = set.get(toKey);
    if (!prev || (Number(record?.updatedAt) || 0) > (Number(prev?.updatedAt) || 0)) set.set(toKey, record);   // the newer note wins
  }
  return { remove, set: [...set.entries()] };
};
