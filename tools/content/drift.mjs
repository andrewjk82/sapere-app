#!/usr/bin/env node
/**
 * P0 — drift report: content/_export/raw (Firestore truth) vs src/constants/seed*.js
 * Offline. Zero Firestore reads.
 */
import fs from 'node:fs';
import path from 'node:path';

const RAW = 'content/_export/raw';
const SEED_DIR = 'src/constants';

// ---- load Firestore export
const fsDocs = new Map();       // id -> doc
const idChapters = new Map();   // id -> [chapterId]
for (const f of fs.readdirSync(RAW)) {
  const chapterId = f.replace(/\.json$/, '');
  for (const q of JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8'))) {
    fsDocs.set(q.id, q);
    idChapters.set(q.id, [...(idChapters.get(q.id) || []), chapterId]);
  }
}

// ---- load seeds
const seedDocs = new Map();     // id -> { raw, file }
const seedNoId = [];
const seedDupId = [];
for (const f of fs.readdirSync(SEED_DIR).filter((x) => /^seed.*\.js$/.test(x))) {
  let mod;
  try { mod = await import(path.resolve(SEED_DIR, f)); } catch (e) { console.error('skip', f, e.message.split('\n')[0]); continue; }
  for (const arr of Object.values(mod)) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q || typeof q !== 'object') continue;
      if (!q.id) { seedNoId.push(f); continue; }
      if (seedDocs.has(q.id)) seedDupId.push(q.id);
      seedDocs.set(q.id, { raw: q, file: f });
    }
  }
}

// ---- normalise both sides to a comparable shape (mirrors chapterSeeder.mapSeedQuestion)
const optText = (o) => (o && typeof o === 'object' ? String(o.text ?? '') : String(o ?? ''));
const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const normSteps = (steps) => JSON.stringify((Array.isArray(steps) ? steps : []).map((s) => ({
  e: norm(s.explanation ?? s.explain), w: norm(s.workingOut ?? s.work), g: s.graphData ? JSON.stringify(s.graphData) : null,
})));

const fromSeed = (r) => {
  const isMC = r.type === 'multiple_choice';
  const opts = (r.opts || r.options || []).map(optText);
  let correct = null;
  if (isMC) {
    const a = r.a ?? r.answer ?? r.solution;
    if (typeof a === 'number') correct = opts[a] ?? null;
    else if (/^\d+$/.test(String(a)) && Number(a) < opts.length && r.isManual !== false) correct = opts[Number(a)];
    else { const i = opts.findIndex((o) => norm(o) === norm(a)); correct = i >= 0 ? opts[i] : String(a); }
  }
  return {
    type: isMC ? 'multiple_choice' : (r.type || 'short_answer'),
    question: norm(r.q || r.question),
    options: opts.map(norm),
    answer: isMC ? norm(correct) : norm(r.a ?? r.answer ?? r.solution),
    hint: norm(r.h || r.hint), solution: norm(r.s || r.solution || (isMC ? '' : r.a)),
    steps: normSteps(r.solutionSteps), graph: r.graphData ? JSON.stringify(r.graphData) : null,
    difficulty: r.difficulty || 'medium',
  };
};
const fromFs = (d) => {
  const isMC = d.type === 'multiple_choice';
  const opts = (d.options || []).map(optText);
  const correct = isMC ? (opts[Number(d.answer)] ?? d.answer) : d.answer;
  return {
    type: d.type || 'short_answer', question: norm(d.question), options: opts.map(norm),
    answer: norm(correct), hint: norm(d.hint), solution: norm(d.solution),
    steps: normSteps(d.solutionSteps), graph: d.graphData ? JSON.stringify(d.graphData) : null,
    difficulty: d.difficulty || 'medium',
  };
};

// ---- compare
const FIELDS = ['type', 'question', 'options', 'answer', 'hint', 'solution', 'steps', 'graph', 'difficulty'];
const fieldDiff = {}; FIELDS.forEach((f) => (fieldDiff[f] = 0));
const differing = [];
const same = [];
for (const [id, d] of fsDocs) {
  const s = seedDocs.get(id);
  if (!s) continue;
  const a = fromSeed(s.raw), b = fromFs(d);
  const diffs = FIELDS.filter((f) => JSON.stringify(a[f]) !== JSON.stringify(b[f]));
  if (diffs.length) { diffs.forEach((f) => fieldDiff[f]++); differing.push({ id, file: s.file, origin: d.origin || '(none)', diffs }); }
  else same.push(id);
}
const fsOnly = [...fsDocs.keys()].filter((id) => !seedDocs.has(id));
const seedOnly = [...seedDocs.keys()].filter((id) => !fsDocs.has(id));
const byOrigin = (ids) => ids.reduce((m, id) => { const o = fsDocs.get(id)?.origin || '(none)'; m[o] = (m[o] || 0) + 1; return m; }, {});
const byFile = (rows) => rows.reduce((m, r) => { m[r.file] = (m[r.file] || 0) + 1; return m; }, {});
const multiIdx = [...idChapters.entries()].filter(([, c]) => c.length > 1);

const report = {
  firestore: { uniqueDocs: fsDocs.size, inMultipleIndexes: multiIdx.length, byOrigin: byOrigin([...fsDocs.keys()]) },
  seeds: { uniqueIds: seedDocs.size, missingId: seedNoId.length, duplicateIds: seedDupId.length },
  overlap: { both: same.length + differing.length, identical: same.length, differing: differing.length },
  firestoreOnly: { count: fsOnly.length, byOrigin: byOrigin(fsOnly) },
  seedOnly: { count: seedOnly.length },
  differingByField: fieldDiff,
  differingByOrigin: differing.reduce((m, r) => { m[r.origin] = (m[r.origin] || 0) + 1; return m; }, {}),
  differingBySeedFile_top20: Object.entries(byFile(differing)).sort((a, b) => b[1] - a[1]).slice(0, 20),
  seedOnlyByFile_top20: Object.entries(byFile(seedOnly.map((id) => seedDocs.get(id)))).sort((a, b) => b[1] - a[1]).slice(0, 20),
};
fs.writeFileSync('content/_export/drift-report.json', JSON.stringify({ ...report, differing, firestoreOnly: fsOnly, seedOnly, multiIndex: multiIdx.map(([id, c]) => ({ id, chapters: c })) }, null, 1));
console.log(JSON.stringify(report, null, 2));
