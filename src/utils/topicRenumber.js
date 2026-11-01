// A course re-laid out to a new textbook (Extension 2 in 2026-10, Extension 1 Year 12 in 2026-11): chapters are
// renumbered and topics move. Question ids do not change; topic and chapter ids do — and new ids reuse old ones with
// other meanings (Ext2 old 4D "Partial Fractions" vs new 4D "Vector Equations of Circles"). So every move below must run
// exactly once, on old-layout data, as a whole: take every old key out first, then write the new ones. Callers keep a
// "done" flag per device (notes, progress) or a marker per Firestore document.
//
//   prefix      — the course's id prefix ('y12e2-'): only ids starting with it are touched.
//   topicMap    — old topic id → new topic id (identity entries left out). A target may be in another course.
//   chapterMap  — old chapter id → the new chapter id(s) an assigned / completed chapter becomes.
//   retired     — old topic / chapter ids that have no place in the new book: dropped.

// 'y12e2-4D' → 'y12e2-4', 'y11e1-16D' → 'y11e1-16'
export const chapterOfTopic = (topicId) => (/^(y1[12]e[12]-\d+)/.exec(String(topicId)) || [])[1] || '';

const mergeMastered = (a, b) => {
  try {
    const x = JSON.parse(a); const y = JSON.parse(b);
    if (Array.isArray(x) && Array.isArray(y)) return JSON.stringify([...new Set([...x, ...y])]);
  } catch { /* not a list: keep the first */ }
  return a;
};

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const makeRenumber = ({ prefix, topicMap, chapterMap, retired = [] }) => {
  const retiredSet = new Set(retired);
  const p = escape(prefix);

  // A student's assigned / completed ids (chapter ids and topic ids mixed). Unknown ids pass through.
  const migrateStudentIds = (ids) => {
    const out = [];
    const add = (id) => { if (id && !out.includes(id)) out.push(id); };
    for (const id of Array.isArray(ids) ? ids : []) {
      if (retiredSet.has(id)) continue;
      if (topicMap[id]) { add(topicMap[id]); continue; }
      if (chapterMap[id]) { chapterMap[id].forEach(add); continue; }
      add(id);
    }
    return out;
  };

  // Practice progress: keys `sapere:tp:{uid}:{chapterId}:{topicId}[:…]`. keys: every storage key;
  // read(key) → string | null. → { remove: [key], set: [[key, value]] }
  const progressKey = new RegExp(`^(${p}\\d+):(${p}[0-9A-Za-z-]+)(:.*)?$`);
  const planProgressMoves = (uid, keys, read) => {
    const keyPrefix = `sapere:tp:${uid}:`;
    const remove = [];
    const set = new Map();
    for (const key of keys) {
      if (typeof key !== 'string' || !key.startsWith(keyPrefix)) continue;
      const m = progressKey.exec(key.slice(keyPrefix.length));
      if (!m) continue;
      const [, , topicId, rest = ''] = m;
      const isRetired = retiredSet.has(topicId);
      const target = topicMap[topicId] || null;
      if (!isRetired && !target) continue;                   // unchanged topic
      remove.push(key);
      if (isRetired) continue;
      const toKey = `${keyPrefix}${chapterOfTopic(target)}:${target}${rest}`;
      const value = read(key);
      if (value == null) continue;
      set.set(toKey, set.has(toKey) ? (rest === '' ? mergeMastered(set.get(toKey), value) : set.get(toKey)) : value);
    }
    return { remove, set: [...set.entries()] };
  };

  // Notes: keys `topic:<topicId>` (see curriculumLocalNotes). entries = [[key, record]] → { remove, set }.
  const noteKey = new RegExp(`^topic:(${p}[0-9A-Za-z-]+)$`);
  const planNoteMoves = (entries) => {
    const remove = [];
    const set = new Map();
    for (const [key, record] of entries) {
      const m = noteKey.exec(String(key));
      if (!m) continue;
      const topicId = m[1];
      const isRetired = retiredSet.has(topicId);
      const target = topicMap[topicId] || null;
      if (!isRetired && !target) continue;
      remove.push(key);
      if (isRetired) continue;
      const toKey = `topic:${target}`;
      const prev = set.get(toKey);
      if (!prev || (Number(record?.updatedAt) || 0) > (Number(prev?.updatedAt) || 0)) set.set(toKey, record);   // the newer note wins
    }
    return { remove, set: [...set.entries()] };
  };

  return { prefix, migrateStudentIds, planProgressMoves, planNoteMoves };
};
