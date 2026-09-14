#!/usr/bin/env node
/**
 * P1 — merge Firestore export + seeds field-by-field, emit canonical content/chapters/*.json
 *
 * Inputs (offline, 0 Firestore reads):
 *   content/_export/raw/<chapterId>.json   (P0 export — live truth for teacher edits)
 *   src/constants/seed*.js                 (authoring copy — truth where Firestore was damaged)
 * Outputs:
 *   content/chapters/<chapterId>.json      canonical schema (see content/schema.js)
 *   content/figures/<sha8>.svg             SVGs extracted + de-duplicated, referenced as "fig:<sha8>"
 *   content/_export/review-queue.json      MC answer conflicts a human must resolve
 *   content/_export/normalize-report.json  counts of every decision taken
 *
 * Merge rules (content/_export/P0-REPORT.md):
 *   teacher doc      → Firestore wins all fields
 *   question/solution/hint → non-empty wins; both non-empty & differ → Firestore
 *   solutionSteps    → Firestore generic template && seed real → seed; else Firestore
 *   MC options/answer→ LaTeX-normalised compare; differ → Firestore provisionally + review queue
 *   MC options      → Firestore has none && seed has → seed options + seed answer
 *   only one side    → that side
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const RAW = 'content/_export/raw';
const SEED_DIR = 'src/constants';
const OUT_CH = 'content/chapters';
const OUT_FIG = 'content/figures';
const GENERIC_STEPS = /We are asked to evaluate the expression step-by-step|<div style="text-align: left;"><p>/;

const R = { types: {}, merged: { fsOnly: 0, seedOnly: 0, both: 0, teacherWins: 0 }, fields: {}, review: [], figures: 0, figureDedup: 0, orphanTopic: 0, crossListed: 0, dropped: {} };
const bump = (k, sub) => { R.fields[k] = R.fields[k] || {}; R.fields[k][sub] = (R.fields[k][sub] || 0) + 1; };

// ---------- load
const fsById = new Map(); const fsHome = new Map();
for (const f of fs.readdirSync(RAW)) {
  const ch = f.replace(/\.json$/, '');
  for (const q of JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8'))) {
    if (!fsById.has(q.id)) fsById.set(q.id, q);
    fsHome.set(q.id, [...(fsHome.get(q.id) || []), ch]);
  }
}
const seedById = new Map(); const seedOrder = new Map(); let ord = 0;
for (const f of fs.readdirSync(SEED_DIR).filter((x) => /^seed.*\.js$/.test(x)).sort()) {
  let mod; try { mod = await import(path.resolve(SEED_DIR, f)); } catch { continue; }
  for (const arr of Object.values(mod)) if (Array.isArray(arr)) for (const q of arr) if (q?.id && !seedById.has(q.id)) { seedById.set(q.id, q); seedOrder.set(q.id, ord++); }
}

// ---------- helpers
const str = (v) => (v == null ? '' : String(v));
const nz = (v) => str(v).trim().length > 0;
const texNorm = (s) => str(s).replace(/\\\(|\\\)|\\\[|\\\]|\$/g, '').replace(/\\text\{([^}]*)\}/g, '$1').replace(/\\,|\;|\\!|~/g, '').replace(/\s+/g, '').toLowerCase();
const optText = (o) => (o && typeof o === 'object' ? str(o.text) : str(o));
const TYPE_MAP = { multiple_choice: 'mc', mcq: 'mc', teacher_review: 'review', short_answer: 'short', fill_blank: 'short', none: 'short', sub_question: 'short', subquestions: 'multipart', multi_part: 'multipart', multipart: 'multipart', composite: 'multipart', group: 'multipart', parent: 'multipart' };
const mapType = (raw) => {
  if (raw.subQuestions?.length) return 'multipart';
  const t = TYPE_MAP[raw.type] || (raw.opts?.length || raw.options?.length ? 'mc' : 'short');
  R.types[`${raw.type}→${t}`] = (R.types[`${raw.type}→${t}`] || 0) + 1;
  return t;
};
const svgRef = (svg) => {
  const sha = crypto.createHash('sha1').update(svg).digest('hex').slice(0, 10);
  const p = path.join(OUT_FIG, `${sha}.svg`);
  if (fs.existsSync(p)) R.figureDedup++; else { fs.writeFileSync(p, svg); R.figures++; }
  return `fig:${sha}`;
};
const figure = (gd) => {
  if (!gd || typeof gd !== 'object') return undefined;
  const out = {};
  const svg = gd.svg || gd.diagramSvg;
  if (nz(svg) && str(svg).trimStart().startsWith('<svg')) out.svg = svgRef(str(svg));
  if (gd.jsxGraph) out.jsxGraph = gd.jsxGraph;
  if (gd.geometry) out.geometry = gd.geometry;
  if (nz(gd.html)) out.html = gd.html;
  if (gd.diagramSource) out.source = gd.diagramSource;
  // legacy bare jsxgraph config at top level
  if (gd.boundingbox && gd.elements) out.jsxGraph = gd;
  if (gd.equations || gd.points) out.plot = { equations: gd.equations, points: gd.points, config: gd.config };
  return Object.keys(out).length ? out : undefined;
};
const steps = (arr) => (Array.isArray(arr) ? arr : []).map((s) => {
  if (!s || typeof s !== 'object') return { explain: str(s) };
  const { explanation, explain, workingOut, work, graphData, ...rest } = s;
  const o = { explain: str(explanation ?? explain) };
  if (nz(workingOut ?? work)) o.work = str(workingOut ?? work);
  const fig = figure(graphData); if (fig) o.figure = fig;
  if (Object.keys(rest).length) o.ext = rest;
  return o;
});
const resolveMcAnswer = (opts, raw, id) => {
  const texts = opts.map(optText);
  const cands = [raw.answer, raw.a, raw.correctAnswer, raw.answerStr].filter((x) => x != null && x !== '');
  for (const a of cands) {
    if (typeof a === 'number' && a >= 0 && a < texts.length) return a;
    if (/^\d+$/.test(str(a)) && Number(a) < texts.length) {
      // index vs value ambiguity: if some option text equals the digit literally and isManual===false, treat as text
      const asText = texts.findIndex((t) => texNorm(t) === texNorm(a));
      if (asText >= 0 && raw.isManual === false) return asText;
      return Number(a);
    }
    const i = texts.findIndex((t) => texNorm(t) === texNorm(a)); if (i >= 0) return i;
  }
  const ic = opts.findIndex((o) => o && typeof o === 'object' && o.isCorrect === true); if (ic >= 0) return ic;
  return null;
};

// ---------- merge one id
const merge = (id) => {
  const f = fsById.get(id), s = seedById.get(id);
  if (f && !s) { R.merged.fsOnly++; return { m: f, src: 'fs' }; }
  if (s && !f) { R.merged.seedOnly++; return { m: s, src: 'seed' }; }
  R.merged.both++;
  if (f.origin === 'teacher') { R.merged.teacherWins++; return { m: f, src: 'fs' }; }
  const m = { ...f };
  const pickText = (k, fv, sv) => { if (nz(fv)) { bump(k, nz(sv) && str(fv) !== str(sv) ? 'fs(differ)' : 'fs'); return fv; } if (nz(sv)) { bump(k, 'seed(fs empty)'); return sv; } return fv; };
  m.question = pickText('question', f.question, s.q ?? s.question);
  m.solution = pickText('solution', f.solution, s.s ?? s.solution);
  m.hint = pickText('hint', f.hint, s.h ?? s.hint ?? s.hintText);
  const fSteps = Array.isArray(f.solutionSteps) ? f.solutionSteps : [], sSteps = Array.isArray(s.solutionSteps) ? s.solutionSteps : [];
  if (GENERIC_STEPS.test(JSON.stringify(fSteps)) && sSteps.length && !GENERIC_STEPS.test(JSON.stringify(sSteps))) { m.solutionSteps = sSteps; bump('steps', 'seed(fs generic)'); }
  else if (!fSteps.length && sSteps.length) { m.solutionSteps = sSteps; bump('steps', 'seed(fs empty)'); }
  else { m.solutionSteps = fSteps; bump('steps', 'fs'); }
  if (!f.graphData && s.graphData) { m.graphData = s.graphData; bump('graph', 'seed(fs empty)'); }
  // options: Firestore MC with no options at all → take the seed's options AND its answer (fs index is meaningless)
  const sOpts = s.opts || s.options || [];
  if (!(f.options || []).length && sOpts.length) { m.options = sOpts; m.answer = s.a ?? s.answer; m.a = undefined; m.correctAnswer = undefined; m.answerStr = undefined; m.isManual = s.isManual; bump('options', 'seed(fs empty)'); }
  // MC answer conflict detection
  const fo = (f.options || []).map(optText), so = (s.opts || s.options || []).map(optText);
  if (fo.length && so.length) {
    const fi = resolveMcAnswer(f.options, f, id), si = resolveMcAnswer(s.opts || s.options, s, id);
    const fT = fi != null ? texNorm(fo[fi]) : null, sT = si != null ? texNorm(so[si]) : null;
    if (fT && sT && fT !== sT) {
      const sameSet = fo.map(texNorm).sort().join('|') === so.map(texNorm).sort().join('|');
      R.review.push({ id, reason: 'mc-answer-differs', severity: sameSet ? 'KEY-CONFLICT' : 'revision', fs: fo[fi], seed: so[si], fsOptions: fo, seedOptions: so });
    }
  }
  return { m, src: 'merged' };
};

// ---------- canonicalise
const CORE = new Set(['id', 'type', 'question', 'q', 'options', 'opts', 'answer', 'a', 'correctAnswer', 'answerStr', 'acceptedAnswers', 'hint', 'h', 'hintText', 'solution', 's', 'solutionSteps', 'graphData', 'questionImage', 'imageUrl', 'subQuestions', 'blanks', 'difficulty', 'timeLimit', 'requiresManualGrading', 'topicId', 'chapterId', 'topicCode', 'topicTitle', 'chapterTitle', 'year', 'c', 't', 'title', 'isManual', 'isActive', 'createdAt', 'updatedAt', 'isNew', 'examPaper', 'origin', 'questionType', '_pingTest', 'contentBump', 'bankVersion', 'batchId']);
const META = ['source', 'sourcePaper', 'sourceId', 'sourcePdf', 'school', 'examType', 'course', 'grade', 'tags', 'reviewStatus', 'verificationNeeded', 'manualReview', 'topic'];
const DNA = ['dnaId', 'dnaConfidence', 'reasoning_blueprint', 'hasReasoningBlueprint', 'dnaReclassifiedAt', 'dnaReclassifiedReason'];

const canon = (raw, id, depth = 0) => {
  const type = mapType(raw);
  const q = { id, type };
  if (raw.difficulty && ['easy', 'medium', 'hard'].includes(raw.difficulty)) q.difficulty = raw.difficulty;
  q.stem = str(raw.question ?? raw.q);
  if (!nz(q.stem) && type !== 'multipart' && depth === 0) { q.inactive = true; R.review.push({ id, reason: 'empty-stem', severity: 'BROKEN' }); }
  const fig = figure(raw.graphData); if (fig) q.figure = fig;
  if (nz(raw.questionImage ?? raw.imageUrl)) q.image = str(raw.questionImage ?? raw.imageUrl);
  if (type === 'mc') {
    const opts = raw.options?.length ? raw.options : (raw.opts || []);
    const rich = opts.some((o) => o && typeof o === 'object' && (nz(o.imageUrl) || o.graphData));
    q.options = rich
      ? opts.map((o) => { const x = { text: optText(o) }; if (nz(o?.imageUrl)) x.image = o.imageUrl; const g = figure(o?.graphData); if (g) x.figure = g; return x; })
      : opts.map(optText);
    const ai = resolveMcAnswer(opts, raw, id);
    if (opts.length < 2) { q.answer = null; q.inactive = true; R.review.push({ id, reason: 'mc-no-options', severity: 'BROKEN', answer: raw.answer ?? raw.a }); }
    else if (ai == null) { q.answer = null; R.review.push({ id, reason: 'mc-answer-unresolvable', severity: 'BROKEN', answer: raw.answer ?? raw.a, options: opts.map(optText) }); }
    else q.answer = ai;
  } else if (type === 'multipart') {
    q.parts = (raw.subQuestions || []).map((sq, i) => canon(sq, sq.id || `${id}-p${i + 1}`, depth + 1));
    if (nz(raw.answer ?? raw.a)) q.answer = str(raw.answer ?? raw.a);
  } else {
    q.answer = str(raw.answer ?? raw.a ?? raw.correctAnswer ?? raw.answerStr);
    if (raw.acceptedAnswers?.length) q.accepted = raw.acceptedAnswers.map(str);
    if (raw.blanks?.length) q.blanks = raw.blanks;
  }
  if (nz(raw.hint ?? raw.h ?? raw.hintText)) q.hint = str(raw.hint ?? raw.h ?? raw.hintText);
  if (nz(raw.solution ?? raw.s)) q.solution = str(raw.solution ?? raw.s);
  const st = steps(raw.solutionSteps); if (st.length) q.steps = st;
  if (raw.requiresManualGrading === true || raw.isManual === false && type === 'short') q.manual = true;
  if (raw.timeLimit && Number(raw.timeLimit) !== 120) q.timeLimit = Number(raw.timeLimit);
  if (raw.isActive === false) q.inactive = true;
  const meta = {}; META.forEach((k) => { if (raw[k] != null && raw[k] !== '') meta[k] = raw[k]; });
  if (raw.origin === 'teacher') meta.origin = 'teacher';
  if (nz(raw.examPaper)) meta.examPaper = raw.examPaper;
  if (Object.keys(meta).length) q.meta = meta;
  if (nz(raw.questionType)) q.hscType = str(raw.questionType);   // HSC type-practice slug (was question_type_index)
  const dna = {}; DNA.forEach((k) => { if (raw[k] != null) dna[k] = raw[k]; });
  if (Object.keys(dna).length) q.dna = dna;
  const ext = {}; Object.keys(raw).forEach((k) => { if (!CORE.has(k) && !META.includes(k) && !DNA.includes(k)) ext[k] = raw[k]; });
  if (Object.keys(ext).length) { q.ext = ext; Object.keys(ext).forEach((k) => { R.dropped[k] = (R.dropped[k] || 0) + 1; }); }
  return q;
};

// ---------- group into chapters/topics
fs.rmSync(OUT_CH, { recursive: true, force: true }); fs.mkdirSync(OUT_CH, { recursive: true });
fs.rmSync(OUT_FIG, { recursive: true, force: true }); fs.mkdirSync(OUT_FIG, { recursive: true });
const ids = [...new Set([...fsById.keys(), ...seedById.keys()])];
const chapters = new Map(); // chapterId -> { meta, topics: Map(topicId -> {meta, qs: [] }) }
for (const id of ids) {
  const { m } = merge(id);
  const homes = fsHome.get(id) || [];
  let chapterId = homes.includes(m.chapterId) ? m.chapterId : (homes[0] || m.chapterId || str(m.topicId).replace(/[A-Z]+$/i, '') || 'unassigned');
  if (homes.length > 1) R.crossListed++;
  let topicId = str(m.topicId); if (!topicId) { topicId = chapterId; R.orphanTopic++; }
  const q = canon(m, id);
  if (homes.length > 1) q.alsoIn = homes.filter((h) => h !== chapterId);
  q._ord = seedOrder.has(id) ? seedOrder.get(id) : 1e9;
  if (!chapters.has(chapterId)) chapters.set(chapterId, { chapterId, title: str(m.chapterTitle), year: str(m.year), topics: new Map() });
  const ch = chapters.get(chapterId);
  if (!ch.topics.has(topicId)) ch.topics.set(topicId, { topicId, code: str(m.topicCode ?? m.c), title: str(m.topicTitle ?? m.t), questions: [] });
  ch.topics.get(topicId).questions.push(q);
}
const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true });
let written = 0;
for (const ch of [...chapters.values()].sort((a, b) => natural(a.chapterId, b.chapterId))) {
  const topics = [...ch.topics.values()].sort((a, b) => natural(a.topicId, b.topicId)).map((t) => ({
    ...t, questions: t.questions.sort((a, b) => a._ord - b._ord || natural(a.id, b.id)).map(({ _ord, ...q }) => q),
  }));
  fs.writeFileSync(path.join(OUT_CH, `${ch.chapterId.replace(/[^a-z0-9:_-]/gi, '_')}.json`), JSON.stringify({ chapterId: ch.chapterId, title: ch.title, year: ch.year, topics }, null, 2));
  written++;
}
fs.writeFileSync('content/_export/review-queue.json', JSON.stringify(R.review, null, 1));
fs.writeFileSync('content/_export/normalize-report.json', JSON.stringify({ ...R, review: R.review.length, chapterFiles: written, questions: ids.length }, null, 2));
console.log(JSON.stringify({ questions: ids.length, chapterFiles: written, merged: R.merged, fields: R.fields, figures: R.figures, figureDedup: R.figureDedup, review: R.review.length, crossListed: R.crossListed, orphanTopic: R.orphanTopic, ext: R.dropped }, null, 2));
