#!/usr/bin/env node
/**
 * P2 — publish content/ as static, hash-addressed files for the app to fetch over HTTP.
 *
 *   content/chapters/*.json  ─▶  public/content/
 *                                 ├─ manifest.json                 small; re-validated every 60s
 *                                 │     chapters: { chapterId: { topicId: [file, count] } }
 *                                 │     topics:   { topicId: [[chapterId, file], …] }   ← a topicId can live in several
 *                                 │               chapters (exam papers tag questions with curriculum topicIds), so a
 *                                 │               topic fetch = every file that carries it — same as question_topic_index
 *                                 ├─ topics/<chapter>__<topic>.<hash>.json   one file per (chapter, topic), immutable
 *                                 ├─ ids.<hash>.json               id → topicId for ids whose topic isn't derivable from the prefix
 *                                 ├─ extra.<hash>.json             chapter → { topicId: [ids] } cross-listings (alsoIn)
 *                                 ├─ hsc-types.<hash>.json         { byType: {slug:[ids]}, byDna: {dnaId:[ids]} }  (replaces question_type_index)
 *                                 ├─ all-ids.<hash>.json           [[id, chapterId, topicId], …] every ACTIVE question — admin id-prefix search only
 *                                 ├─ admin.<hash>.json             inactive/pending questions with context — admin surfaces only
 *                                 └─ parts.<hash>.json             { partId: { topicId, parentId } } for every sub-question id — lets a
 *                                                                  report/preview reached by a PART's own id (a student's report snapshot
 *                                                                  captures the sub-question, not the parent) resolve back to the whole
 *                                                                  multipart question instead of rendering that part in isolation, out of
 *                                                                  context. Parts are never independently listed elsewhere (allIds, ids,
 *                                                                  hscTypes) — a part is only ever reachable as .parts[] of its parent.
 *
 * Rules:
 *   - inactive questions are NOT published (they stay in git)
 *   - fig:<sha> refs are inlined as SVG strings so a topic is exactly one GET
 *   - hash = sha1(file body) → same content ⇒ same name ⇒ browser cache hit; changed ⇒ new name
 *   - output dir is wiped first, so stale hashes never accumulate
 *   - deterministic: running twice on the same content yields byte-identical output
 *
 * Runs as part of `npm run build` after `content:validate`. Zero Firestore.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SRC = 'content/chapters';
const FIG = 'content/figures';
const OUT = 'public/content';
const sha = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 8);
const fileSafe = (id) => id.replace(/[^a-z0-9_-]/gi, '_');
const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true });

const figCache = new Map();
const inlineFig = (fig) => {
  if (!fig) return fig;
  const out = { ...fig };
  if (out.svg?.startsWith('fig:')) {
    const k = out.svg.slice(4);
    if (!figCache.has(k)) figCache.set(k, fs.readFileSync(path.join(FIG, `${k}.svg`), 'utf8'));
    out.svg = figCache.get(k);
  }
  return out;
};
const inlineQuestion = (q) => {
  const o = { ...q };
  if (o.figure) o.figure = inlineFig(o.figure);
  if (o.steps) o.steps = o.steps.map((s) => (s.figure ? { ...s, figure: inlineFig(s.figure) } : s));
  if (Array.isArray(o.options)) o.options = o.options.map((op) => (typeof op === 'object' && op.figure ? { ...op, figure: inlineFig(op.figure) } : op));
  if (o.parts) o.parts = o.parts.map(inlineQuestion);
  delete o.alsoIn; // membership lives in the manifest
  return o;
};

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'topics'), { recursive: true });

const manifest = { builtAt: new Date().toISOString(), topics: {}, chapters: {} };
const idToTopic = {}; const extra = {}; const hscTypes = {}; const dnaTypes = {}; const allIds = []; const adminDocs = []; const partIndex = {};
let nQ = 0, nInactive = 0, bytes = 0;

for (const f of fs.readdirSync(SRC).filter((x) => x.endsWith('.json')).sort(natural)) {
  const ch = JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8'));
  manifest.chapters[ch.chapterId] = {};
  for (const t of ch.topics) {
    const active = t.questions.filter((q) => !q.inactive);
    nInactive += t.questions.length - active.length;
    const ctx = { topicId: t.topicId, synthetic: t.synthetic === true, code: t.code, title: t.title, chapterId: ch.chapterId, chapterTitle: ch.title, year: ch.year };
    for (const q of t.questions) if (q.inactive) adminDocs.push({ ctx, q: inlineQuestion(q) });
    for (const q of active) {
      nQ++;
      if (q.id.replace(/-[^-]+$/, '') !== t.topicId) idToTopic[q.id] = t.topicId;
      if (q.hscType) (hscTypes[q.hscType] ||= []).push(q.id);
      if (q.dna?.dnaId) (dnaTypes[q.dna.dnaId] ||= []).push(q.id);
      allIds.push([q.id, ch.chapterId, t.topicId]);
      for (const other of q.alsoIn || []) ((extra[other] ||= {})[t.topicId] ||= []).push(q.id);
      const indexParts = (parts, parentId) => { for (const p of parts || []) { partIndex[p.id] = { topicId: t.topicId, parentId }; indexParts(p.parts, parentId); } };
      indexParts(q.parts, q.id);
    }
    const body = JSON.stringify({ topicId: t.topicId, ...(t.synthetic ? { synthetic: true } : {}), chapterId: ch.chapterId, chapterTitle: ch.title, year: ch.year, code: t.code, title: t.title, questions: active.map(inlineQuestion) });
    const h = sha(body);
    const name = `topics/${fileSafe(ch.chapterId)}__${fileSafe(t.topicId)}.${h}.json`;
    fs.writeFileSync(path.join(OUT, name), body); bytes += body.length;
    manifest.chapters[ch.chapterId][t.topicId] = [name, active.length];
    (manifest.topics[t.topicId] ||= []).push([ch.chapterId, name]);
  }
}
for (const c in extra) for (const k in extra[c]) extra[c][k].sort(natural);
for (const k in hscTypes) hscTypes[k].sort(natural);
const side = (name, obj) => { const body = JSON.stringify(obj); const n = `${name}.${sha(body)}.json`; fs.writeFileSync(path.join(OUT, n), body); return [n, body.length]; };
const [idsName, idsLen] = side('ids', idToTopic);
const [extraName] = side('extra', extra);
for (const k in dnaTypes) dnaTypes[k].sort(natural);
const [hscName] = side('hsc-types', { byType: hscTypes, byDna: dnaTypes });
allIds.sort((a, b) => natural(a[0], b[0]));
const [allIdsName] = side('all-ids', allIds);
const [adminName] = side('admin', { inactive: adminDocs });
const [partsName] = side('parts', partIndex);
manifest.ids = idsName; manifest.extra = extraName; manifest.hscTypes = hscName; manifest.allIds = allIdsName; manifest.admin = adminName; manifest.parts = partsName;
manifest.contentHash = sha(Object.values(manifest.chapters).flatMap((c) => Object.values(c).map((v) => v[0])).join(''));
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));

const mSize = fs.statSync(path.join(OUT, 'manifest.json')).size;
const nFiles = Object.values(manifest.chapters).reduce((a, c) => a + Object.keys(c).length, 0);
console.log(`published ${nQ} questions (${nInactive} inactive skipped) → ${nFiles} (chapter,topic) files, ${Object.keys(manifest.topics).length} distinct topicIds, ${(bytes / 1048576).toFixed(1)}MB raw`);
console.log(`manifest ${(mSize / 1024).toFixed(0)}KB, ids map ${(idsLen / 1024).toFixed(0)}KB (${Object.keys(idToTopic).length} ids), extra chapters ${Object.keys(extra).length}, hscTypes ${Object.keys(hscTypes).length}, contentHash ${manifest.contentHash}`);
