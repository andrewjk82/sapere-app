// Place seed-only questions that had no chapter/topic (content/chapters/unassigned.json) using the
// seed registry (curriculumSeeds.js) and id prefixes; detect duplicates against existing content.
// Usage: node --import ./scripts/extResolve.mjs tools/content/fixes/2026-09-15-place-unassigned.mjs [--apply]
import fs from 'node:fs'; import path from 'node:path';
const APPLY = process.argv.includes('--apply');
const DIR = 'content/chapters';
const load = (f) => JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
const save = (f, ch) => fs.writeFileSync(path.join(DIR, f), JSON.stringify(ch, null, 2));
const fileOf = (cid) => `${cid.replace(/[^a-z0-9:_-]/gi, '_')}.json`;
const norm = (s) => String(s || '').replace(/\\[()\[\]]|\$/g, '').replace(/\s+/g, '').toLowerCase();

// curriculum tree (live Firestore copy) — topic ids per chapter
const cur = JSON.parse(fs.readFileSync('content/_export/raw-meta/curriculum.json', 'utf8'));
const chapters = {}; const chapterYear = {};
const walk = (o, year) => { if (Array.isArray(o)) return o.forEach((x) => walk(x, year)); if (!o || typeof o !== 'object') return;
  if (o.id && (o.topics || o.subtopics)) { chapters[o.id] = (o.topics || o.subtopics).map((t) => ({ id: t.id, title: t.title || t.name || '' })); chapterYear[o.id] = year; }
  Object.entries(o).forEach(([k, v]) => walk(v, o.id && /^Year_/.test(o.id) ? o.id : year)); };
walk(cur);
const findTopic = (chapterId, topicId) => (chapters[chapterId] || []).find((t) => t.id.toLowerCase() === String(topicId).toLowerCase());

// seed registry: id → { chapterId, topicId }
const reg = await import('../../../src/constants/curriculumSeeds.js');
const regMap = new Map();
const entries = Object.values(reg).flat().filter((e) => e && typeof e === 'object' && e.topicId);
for (const e of entries) for (const q of (e.seed || [])) if (q?.id && !regMap.has(q.id)) regMap.set(q.id, { chapterId: e.chapterId, topicId: e.topicId, topicTitle: e.topicTitle || '' });

// surds seeds carry their topic letter in `c` ('2B'/'2C'/'2E'); the ids (s2bc_1, s2e_1) do not
const surds = await import('../../../src/constants/seedSurdsQuestions.js');
const surdsC = new Map(); for (const a of Object.values(surds)) if (Array.isArray(a)) for (const q of a) if (q?.id && q.c) surdsC.set(q.id, String(q.c));

// existing content stems per chapter for duplicate detection
const stems = new Map(); // chapterId → Map(normStem → id)
for (const f of fs.readdirSync(DIR)) { const ch = load(f); const m = new Map(); for (const t of ch.topics) for (const q of t.questions) m.set(norm(q.stem), q.id); stems.set(ch.chapterId, m); }

const un = load('unassigned.json');
const plan = []; const unplaced = []; const dup = [];
for (const q of un.topics[0].questions) {
  let target = regMap.get(q.id);
  if (!target) {
    const m = q.id.match(/^(y\d+[a-z0-9]*-\d+)([a-z]+)-/i);   // y11a-3g-q1a → chapter y11a-3, topic y11a-3g
    if (m) target = { chapterId: m[1], topicId: m[1] + m[2] };
    else if (/^s2[a-z]+_/.test(q.id)) { const c = surdsC.get(q.id); if (c) target = { chapterId: 'y11a-2', topicId: `y11a-2${c.slice(-1).toUpperCase()}` }; }
    else if (/^\d+[a-z]+$/.test(q.id)) target = { chapterId: 'y11a-1', topicId: 'y11a-1A' };   // "1e" — ALGEBRA_QUESTIONS_Y11A, c:'1A'
  }
  if (!target || !chapters[target.chapterId]) { unplaced.push({ id: q.id, target }); continue; }
  let t = findTopic(target.chapterId, target.topicId);
  if (!t) { // not in the curriculum tree, but if the content chapter already has this topic (e.g. y11a-2F), use it
    const f = fileOf(target.chapterId); const existingTopic = fs.existsSync(path.join(DIR, f)) && load(f).topics.find((x) => x.topicId.toLowerCase() === target.topicId.toLowerCase());
    if (existingTopic) t = { id: existingTopic.topicId, title: existingTopic.title };
  }
  if (!t) { unplaced.push({ id: q.id, target, reason: 'topic not in curriculum' }); continue; }
  const existing = stems.get(target.chapterId)?.get(norm(q.stem));
  if (existing && existing !== q.id) { dup.push({ id: q.id, duplicateOf: existing, chapterId: target.chapterId }); continue; }
  plan.push({ id: q.id, chapterId: target.chapterId, topicId: t.id, topicTitle: t.title, src: regMap.has(q.id) ? 'registry' : 'id-prefix' });
}
const by = (arr, k) => arr.reduce((m, x) => { const v = k(x); m[v] = (m[v] || 0) + 1; return m; }, {});
console.log(`plan: place ${plan.length}, duplicates ${dup.length}, unplaced ${unplaced.length}`);
console.log('by target topic:', by(plan, (x) => `${x.chapterId}/${x.topicId}`));
console.log('by source:', by(plan, (x) => x.src));
console.log('duplicates by chapter:', by(dup, (x) => x.chapterId));
console.log('unplaced:', JSON.stringify(unplaced.slice(0, 10)));
if (!APPLY) process.exit(0);

// apply
const byChapter = {};
for (const p of plan) (byChapter[p.chapterId] ||= []).push(p);
const qById = new Map(un.topics[0].questions.map((q) => [q.id, q]));
for (const [cid, ps] of Object.entries(byChapter)) {
  const f = fileOf(cid); const ch = fs.existsSync(path.join(DIR, f)) ? load(f) : { chapterId: cid, title: '', year: chapterYear[cid] || '', topics: [] };
  for (const p of ps) {
    let t = ch.topics.find((x) => x.topicId === p.topicId);
    if (!t) { t = { topicId: p.topicId, code: p.topicId.replace(/^.*-/, '').toUpperCase(), title: p.topicTitle, questions: [] }; ch.topics.push(t); }
    t.questions.push(qById.get(p.id));
  }
  ch.topics.sort((a, b) => a.topicId.localeCompare(b.topicId, undefined, { numeric: true }));
  save(f, ch);
}
// duplicates: keep in a review file, drop from content
fs.writeFileSync('content/_export/unassigned-duplicates.json', JSON.stringify(dup, null, 1));
const keep = un.topics[0].questions.filter((q) => unplaced.some((u) => u.id === q.id));
if (keep.length) { un.topics[0].questions = keep; save('unassigned.json', un); } else fs.unlinkSync(path.join(DIR, 'unassigned.json'));
// ---- misfiled chapter files -------------------------------------------------------------------
const moves = [];
const moveAll = (fromFile, toChapter, topicOf) => {
  if (!fs.existsSync(path.join(DIR, fromFile))) return;
  const src = load(fromFile); const dstF = fileOf(toChapter); const dst = load(dstF);
  for (const t of src.topics) for (const q of t.questions) {
    const tid = topicOf(q, t); let dt = dst.topics.find((x) => x.topicId === tid);
    if (!dt) { dt = { topicId: tid, ...(tid === toChapter ? { synthetic: true } : {}), code: t.code, title: t.title, questions: [] }; dst.topics.push(dt); }
    dt.questions.push(q); moves.push(`${q.id}: ${src.chapterId}/${t.topicId} → ${toChapter}/${tid}`);
  }
  save(dstF, dst); fs.unlinkSync(path.join(DIR, fromFile));
};
// y11-1 (71 q, all stems already in y11a-1) → duplicates, drop
{ const f = 'y11-1.json'; if (fs.existsSync(path.join(DIR, f))) { const src = load(f); const a1 = stems.get('y11a-1');
  for (const q of src.topics.flatMap((t) => t.questions)) dup.push({ id: q.id, duplicateOf: a1.get(norm(q.stem)) || '?', chapterId: 'y11a-1', from: 'y11-1' });
  fs.unlinkSync(path.join(DIR, f)); moves.push(`y11-1.json: ${src.topics.flatMap((t) => t.questions).length} duplicates of y11a-1 dropped`); } }
moveAll('y10-18b-.json', 'y10-18', () => 'y10-18b-icem');                       // chapterId mis-derived from the -icem suffix
moveAll('y12a-.json', 'exam:caringbah-2020', () => 'exam:caringbah-2020');      // car2020-q18
moveAll('y12a-exam.json', 'exam:asc-2020', () => 'exam:asc-2020');             // asc2020-q34 (+ legacy standalone parts)
fs.writeFileSync('content/_export/unassigned-duplicates.json', JSON.stringify(dup, null, 1));
console.log(moves.join('\n'));
console.log(`applied: ${plan.length} placed into ${Object.keys(byChapter).length} chapters, ${dup.length} duplicates dropped (logged), ${keep.length} left unassigned`);
