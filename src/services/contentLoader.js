/**
 * contentLoader.js — question content over HTTP from /content/ (built by tools/content/publish.mjs).
 *
 * Replaces Firestore reads of the `questions` collection for whichever chapters are switched on:
 *
 *   VITE_CONTENT_SOURCE = firestore            (default) nothing here is used
 *                       = cdn                  every chapter from /content/
 *                       = y7-7,y9-16,exam:     comma list of chapterIds or prefixes → only those
 *   localStorage 'sapere:contentSource'        same values; overrides the env for THIS browser (admin testing)
 *
 * Kill-switch: if manifest.json cannot be fetched, useCdn() returns false for everything and the
 * existing Firestore paths run unchanged. No Firestore reads happen in this file.
 *
 * Caching is the browser's: topic files are hash-named + immutable, manifest is max-age=60.
 * Documents are returned in the LEGACY Firestore shape (toLegacy) so no component changes.
 */

const MANIFEST_URL = '/content/manifest.json';
const MANIFEST_TTL = 60_000;

let manifestPromise = null;
let manifestAt = 0;
let manifestFailed = false;
const topicCache = new Map(); // file → Promise<topicFile>
let idsCache = null;          // Promise<{ id: topicId }>

// ---------- switch -------------------------------------------------------------------------------
const readSetting = () => {
  if (globalThis.__SAPERE_CONTENT_SOURCE) return String(globalThis.__SAPERE_CONTENT_SOURCE); // node tests
  try { const v = window.localStorage.getItem('sapere:contentSource'); if (v) return v.trim(); } catch { /* ignore */ }
  return String(import.meta.env?.VITE_CONTENT_SOURCE || 'firestore').trim();
};
const parseSetting = (v) => {
  if (!v || v === 'firestore') return { all: false, list: [] };
  if (v === 'cdn' || v === 'all') return { all: true, list: [] };
  return { all: false, list: v.split(',').map((x) => x.trim()).filter(Boolean) };
};
export const contentSourceSetting = () => parseSetting(readSetting());

/** Is this chapter served from /content/? Synchronous — call primeContent() once at app start. */
export const useCdn = (chapterId) => {
  if (manifestFailed) return false;
  const s = contentSourceSetting();
  if (s.all) return true;
  if (!chapterId) return false;
  return s.list.some((p) => chapterId === p || chapterId.startsWith(p));
};
export const cdnEnabledAtAll = () => { const s = contentSourceSetting(); return !manifestFailed && (s.all || s.list.length > 0); };

// ---------- fetch ------------------------------------------------------------------------------
const fetchJson = async (url) => {
  const r = await fetch(url, { cache: 'default' });
  if (!r.ok) throw new Error(`${url} → ${r.status}`);
  return r.json();
};

export const getManifest = async () => {
  if (manifestPromise && Date.now() - manifestAt < MANIFEST_TTL) return manifestPromise;
  manifestAt = Date.now();
  manifestPromise = fetchJson(MANIFEST_URL).then((m) => { manifestFailed = false; return m; }).catch((e) => {
    manifestFailed = true; manifestPromise = null;
    console.warn('[contentLoader] manifest unavailable — falling back to Firestore', e?.message || e);
    throw e;
  });
  return manifestPromise;
};
/** Warm the manifest so useCdn() can answer synchronously. Safe to call many times. */
export const primeContent = () => { if (cdnEnabledAtAll()) getManifest().catch(() => {}); };

const getTopicFile = (file) => {
  if (!topicCache.has(file)) topicCache.set(file, fetchJson(`/content/${file}`).catch((e) => { topicCache.delete(file); throw e; }));
  return topicCache.get(file);
};
const getIdMap = async () => {
  if (!idsCache) { const m = await getManifest(); idsCache = fetchJson(`/content/${m.ids}`).catch((e) => { idsCache = null; throw e; }); }
  return idsCache;
};

// ---------- legacy shape adapter -----------------------------------------------------------------
const TYPE_BACK = { mc: 'multiple_choice', short: 'short_answer', review: 'teacher_review', multipart: 'multi_part' };
const figBack = (fig) => {
  if (!fig) return null;
  const g = {};
  if (fig.svg) g.svg = fig.svg;
  if (fig.jsxGraph) g.jsxGraph = fig.jsxGraph;
  if (fig.geometry) g.geometry = fig.geometry;
  if (fig.html) g.html = fig.html;
  if (fig.source) g.diagramSource = fig.source;
  if (fig.plot) Object.assign(g, fig.plot);
  if (fig.raw) Object.assign(g, fig.raw);
  return Object.keys(g).length ? g : null;
};
const optBack = (o) => (typeof o === 'string'
  ? { text: o, imageUrl: '' }
  : { text: o.text || '', imageUrl: o.image || '', ...(o.figure ? { graphData: figBack(o.figure) } : {}) });

/** canonical question (content/schema.js) → the Firestore document shape every component expects */
export const toLegacy = (q, ctx = {}) => {
  const isMC = q.type === 'mc' || (q.type === 'multipart' && q.mc === true);
  const d = {
    id: q.id,
    type: q.type === 'short' && q.blanks?.length ? 'fill_blank' : (isMC ? 'multiple_choice' : (TYPE_BACK[q.type] || 'short_answer')),
    question: q.stem || '',
    options: (q.options || []).map(optBack),
    answer: isMC ? (q.answer == null ? '' : String(q.answer)) : (q.answer ?? ''),
    hint: q.hint || '',
    solution: q.solution || '',
    solutionSteps: (q.steps || []).map((s) => ({ explanation: s.explain || '', workingOut: s.work || '', graphData: figBack(s.figure), ...(s.ext || {}) })),
    graphData: figBack(q.figure),
    questionImage: q.image || '',
    subQuestions: (q.parts || []).map((p) => toLegacy(p, ctx)),
    blanks: q.blanks || [],
    acceptedAnswers: q.accepted || [],
    difficulty: q.difficulty || '',
    timeLimit: q.timeLimit || 120,
    requiresManualGrading: q.manual === true,
    isManual: true,
    isActive: q.inactive !== true,
    topicId: ctx.synthetic ? '' : (ctx.topicId || ''),   // synthetic topic (topicId was '' in Firestore)
    topicCode: ctx.code || '',
    topicTitle: ctx.title || '',
    chapterId: ctx.chapterId || '',
    chapterTitle: ctx.chapterTitle || '',
    year: ctx.year || '',
    examPaper: q.meta?.examPaper || '',
    origin: q.meta?.origin || 'seed',
    title: `${(q.stem || '').replace(/\$/g, '').slice(0, 30)}...`,
  };
  if (q.hscType) d.questionType = q.hscType;
  if (q.meta) for (const k of ['source', 'sourcePaper', 'school', 'examType', 'course', 'grade', 'tags', 'reviewStatus']) if (q.meta[k] != null) d[k] = q.meta[k];
  if (q.dna) Object.assign(d, q.dna);
  if (q.ext) Object.assign(d, q.ext);
  return d;
};
const legacyFromTopicFile = (tf) => tf.questions.map((q) => toLegacy(q, { topicId: tf.topicId, synthetic: tf.synthetic === true, code: tf.code, title: tf.title, chapterId: tf.chapterId, chapterTitle: tf.chapterTitle, year: tf.year }));

// ---------- public reads (all zero-Firestore) ----------------------------------------------------
const chapterFiles = async (chapterId) => {
  const m = await getManifest();
  return Object.values(m.chapters[chapterId] || {}).map(([file]) => file);
};

/** Every active question of a chapter, in the legacy shape. Includes cross-listed extras. */
export const getChapterQuestions = async (chapterId) => {
  const m = await getManifest();
  const files = await chapterFiles(chapterId);
  const own = (await Promise.all(files.map(getTopicFile))).flatMap(legacyFromTopicFile);
  const extra = m.extra ? await fetchJson(`/content/${m.extra}`).then((x) => x[chapterId] || {}).catch(() => ({})) : {};
  const extraDocs = [];
  for (const [topicId, ids] of Object.entries(extra)) {
    const want = new Set(ids);
    for (const [, file] of m.topics[topicId] || []) {
      const tf = await getTopicFile(file);
      legacyFromTopicFile(tf).forEach((d) => { if (want.has(d.id)) extraDocs.push(d); });
    }
  }
  return own.concat(extraDocs);
};

/** Just the ids — the CDN stand-in for question_index/{chapterId}. `version` changes when any topic file does. */
export const getChapterIndex = async (chapterId) => {
  const m = await getManifest();
  const entries = Object.values(m.chapters[chapterId] || {});
  if (!entries.length) return null;
  const docs = await getChapterQuestions(chapterId);
  let h = 0; for (const [file] of entries) for (const c of file) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return { ids: docs.map((d) => d.id), updatedAtMs: h };
};

/**
 * A topic's questions. By default only from curriculum chapters — exam papers tag questions with
 * curriculum topicIds too, but today's topic practice never showed those, so keep that behaviour.
 */
export const getTopicQuestions = async (topicId, { includeExam = false, chapterId } = {}) => {
  const m = await getManifest();
  const refs = (m.topics[topicId] || []).filter(([cid]) => (chapterId ? cid === chapterId : (includeExam || !cid.startsWith('exam:'))));
  return (await Promise.all(refs.map(([, file]) => getTopicFile(file)))).flatMap(legacyFromTopicFile);
};

/** Which chapter an id belongs to (null if unknown to the manifest). */
export const chapterOfId = async (id) => {
  const m = await getManifest();
  const ids = await getIdMap();
  const topicId = ids[id] || String(id).replace(/-[^-]+$/, '');
  const refs = m.topics[topicId];
  if (!refs) return null;
  // prefer the file that actually contains the id (a topicId can span chapters)
  for (const [cid, file] of refs) { const tf = await getTopicFile(file); if (tf.questions.some((q) => q.id === id)) return cid; }
  return null;
};

/**
 * Fetch by id for the chapters served from CDN. Returns { docs, remaining } — `remaining` are ids
 * this loader does not serve (chapter not switched on, or unknown) and must still come from Firestore.
 */
export const getQuestionsByIds = async (ids) => {
  const unique = [...new Set((ids || []).map(String))];
  const docs = []; const remaining = [];
  if (!unique.length || !cdnEnabledAtAll()) return { docs, remaining: unique };
  let m; let idMap;
  try { m = await getManifest(); idMap = await getIdMap(); } catch { return { docs, remaining: unique }; }
  const byFile = new Map(); // file → Set(ids wanted)
  for (const id of unique) {
    const topicId = idMap[id] || id.replace(/-[^-]+$/, '');
    const refs = (m.topics[topicId] || []).filter(([cid]) => useCdn(cid));
    if (!refs.length) { remaining.push(id); continue; }
    for (const [, file] of refs) { if (!byFile.has(file)) byFile.set(file, new Set()); byFile.get(file).add(id); }
  }
  const found = new Set();
  await Promise.all([...byFile.entries()].map(async ([file, want]) => {
    const tf = await getTopicFile(file);
    for (const d of legacyFromTopicFile(tf)) if (want.has(d.id) && !found.has(d.id)) { found.add(d.id); docs.push(d); }
  }));
  for (const id of unique) if (!found.has(id) && !remaining.includes(id)) remaining.push(id);
  return { docs, remaining };
};

/** Single question (null if not served). */
export const getQuestion = async (id) => (await getQuestionsByIds([id])).docs[0] || null;
