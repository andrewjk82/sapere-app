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

// ---------- legacy shape adapter (shared with api/content.js) ----------------------------------
import { toLegacy } from '../../content/legacy.js';
export { toLegacy };

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

// ================================================================================================
// Admin / HSC surfaces and the local edit overlay (P4)
// ================================================================================================

// ---------- edit overlay ------------------------------------------------------------------------
// A teacher's save goes to git and reaches /content/ after the Vercel build (~2 min). Until the
// manifest's contentHash changes, this browser layers its own saved docs on top of what it reads so
// the editor sees the edit immediately. Per-browser only (localStorage); never affects students.
const OVERLAY_KEY = 'sapere:contentOverlay';
const readOverlay = () => { try { return JSON.parse(window.localStorage.getItem(OVERLAY_KEY) || 'null') || { hash: null, docs: {}, removed: [] }; } catch { return { hash: null, docs: {}, removed: [] }; } };
const writeOverlay = (o) => { try { window.localStorage.setItem(OVERLAY_KEY, JSON.stringify(o)); } catch { /* ignore */ } };
let overlayHash = null;
const overlayFor = async () => {
  const m = await getManifest();
  const o = readOverlay();
  if (o.hash && o.hash !== m.contentHash) { writeOverlay({ hash: null, docs: {}, removed: [] }); return { docs: {}, removed: [] }; } // build landed → drop
  overlayHash = m.contentHash;
  return o;
};
/** Record a just-saved legacy doc (or a removal) so this browser shows it before the next build. */
export const overlayPut = async (doc) => { const o = await overlayFor(); o.hash = overlayHash; o.docs[doc.id] = doc; o.removed = o.removed.filter((id) => id !== doc.id); writeOverlay(o); };
export const overlayRemove = async (id) => { const o = await overlayFor(); o.hash = overlayHash; delete o.docs[id]; if (!o.removed.includes(id)) o.removed.push(id); writeOverlay(o); };
export const overlayGet = async (id) => (await overlayFor()).docs[id] || null;
const applyOverlay = async (docs, { chapterId, topicId } = {}) => {
  const o = await overlayFor();
  const removed = new Set(o.removed);
  const out = docs.filter((d) => !removed.has(d.id)).map((d) => o.docs[d.id] || d);
  const seen = new Set(out.map((d) => d.id));
  for (const d of Object.values(o.docs)) {
    if (seen.has(d.id)) continue;
    if (chapterId && d.chapterId !== chapterId) continue;
    if (topicId && d.topicId !== topicId) continue;
    if (chapterId || topicId) out.push(d);   // newly added question in this chapter/topic
  }
  return out;
};

// ---------- admin reads ---------------------------------------------------------------------------
/** Active questions of a chapter (optionally one topic) for the Question Bank, overlay applied. */
export const adminChapterQuestions = async (chapterId, topicId) => {
  const docs = topicId ? await getTopicQuestions(topicId, { chapterId }) : await getChapterQuestions(chapterId);
  return applyOverlay(docs, { chapterId, topicId });
};
/** Inactive / pending questions (published in admin.<hash>.json only). */
export const adminInactiveQuestions = async () => {
  const m = await getManifest();
  const a = await fetchJson(`/content/${m.admin}`);
  return applyOverlay(a.inactive.map(({ ctx, q }) => toLegacy(q, ctx)));
};
export const adminPendingQuestions = async () => (await adminInactiveQuestions()).filter((d) => d.reviewStatus === 'pending');
/** Every active id with its chapter/topic — loaded once, for id-prefix search. */
let allIdsCache = null;
export const searchIds = async (prefix) => {
  const m = await getManifest();
  if (!allIdsCache) allIdsCache = fetchJson(`/content/${m.allIds}`).catch((e) => { allIdsCache = null; throw e; });
  const p = String(prefix).toLowerCase();
  return (await allIdsCache).filter(([id]) => id.toLowerCase().startsWith(p)).map(([id, chapterId, topicId]) => ({ id, chapterId, topicId }));
};
/** Single question by id, overlay-aware; falls back to the inactive set for admin use. */
export const adminGetQuestion = async (id) => {
  const ov = await overlayGet(id); if (ov) return ov;
  const live = await getQuestion(id); if (live) return live;
  return (await adminInactiveQuestions()).find((d) => d.id === id) || null;
};
/** HSC type practice: questions tagged with a DNA/type slug (replaces the dnaId / questionType / question_type_index queries). */
export const getQuestionsByHscType = async (slug) => {
  const m = await getManifest();
  const idx = await fetchJson(`/content/${m.hscTypes}`);
  const ids = [...new Set([...(idx.byDna?.[slug] || []), ...(idx.byType?.[slug] || [])])];
  return ids.length ? (await getQuestionsByIds(ids)).docs : [];
};

/** Question counts per chapter and per topic straight from the manifest (Curriculum tab badges). */
export const getContentCounts = async () => {
  const m = await getManifest();
  const chapters = {}; const topics = {};
  for (const [cid, tps] of Object.entries(m.chapters)) {
    let sum = 0;
    for (const [tid, [, count]] of Object.entries(tps)) { topics[tid] = (topics[tid] || 0) + count; sum += count; }
    chapters[cid] = sum;
  }
  let version = 0; for (const c of m.contentHash || '') version = (version * 31 + c.charCodeAt(0)) >>> 0;
  return { chapters, topics, version };
};
