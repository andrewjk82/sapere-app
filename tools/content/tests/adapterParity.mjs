#!/usr/bin/env node
/**
 * P3 acceptance: for every question the app serves today from Firestore (raw snapshot, active,
 * indexed), the CDN loader's legacy-shaped output must match field-for-field — except where P1
 * deliberately repaired or adjudicated content. Reports every kind of difference and its count.
 * Zero Firestore. Run after `npm run content:publish`.
 */
import fs from 'node:fs';
import path from 'node:path';

const PUB = 'public/content';
globalThis.__SAPERE_CONTENT_SOURCE = 'cdn';
globalThis.fetch = async (url) => {
  const f = path.join(PUB, url.replace(/^\/content\//, ''));
  if (!fs.existsSync(f)) return { ok: false, status: 404 };
  return { ok: true, status: 200, json: async () => JSON.parse(fs.readFileSync(f, 'utf8')) };
};
const L = await import('../../../src/services/contentLoader.js');
const { resolveCorrectOptionIndex } = await import('../../../src/utils/mcOptionShuffle.js');

const raw = new Map();
for (const f of fs.readdirSync('content/_export/raw')) for (const q of JSON.parse(fs.readFileSync(path.join('content/_export/raw', f), 'utf8'))) if (!raw.has(q.id) && q.isActive !== false) raw.set(q.id, q);
const review = JSON.parse(fs.readFileSync('content/_export/review-queue.json', 'utf8'));
const adjudicated = new Set(review.filter((r) => r.resolved === 'seed-was-right').map((r) => r.id));
const GENERIC = /We are asked to evaluate the expression step-by-step|<div style="text-align: left;"><p>/;

const norm = (v) => (v == null ? '' : String(v)).replace(/\s+/g, ' ').trim();
const optT = (o) => (o && typeof o === 'object' ? norm(o.text) : norm(o));
const diffs = {}; const examples = {};
const note = (k, id, a, b) => { diffs[k] = (diffs[k] || 0) + 1; if (!examples[k]) examples[k] = { id, firestore: String(a).slice(0, 80), cdn: String(b).slice(0, 80) }; };

const { docs } = await L.getQuestionsByIds([...raw.keys()]);
const cdn = new Map(docs.map((d) => [d.id, d]));
let compared = 0;
for (const [id, f] of raw) {
  const c = cdn.get(id);
  if (!c) { note('MISSING-from-cdn', id, f.chapterId, ''); continue; }
  compared++;
  const fType = f.type === 'mcq' ? 'multiple_choice' : (f.subQuestions?.length ? 'multi_part' : (f.type || 'short_answer'));
  if (fType !== c.type && !(['subquestions', 'multipart', 'composite', 'group', 'parent'].includes(f.type) && c.type === 'multi_part') && !(f.type === undefined && c.type === 'short_answer') && !(['none', 'sub_question'].includes(f.type) && c.type === 'short_answer')) note('type', id, f.type, c.type);
  if (norm(f.question) !== norm(c.question)) note(norm(f.question) ? 'question' : 'question(recovered: fs was empty)', id, f.question, c.question);
  const fo = (f.options || []).map(optT), co = (c.options || []).map(optT);
  if (fo.join('|') !== co.join('|')) note(fo.length ? 'options' : 'options(recovered: fs had none)', id, fo.join('|'), co.join('|'));
  if (c.type === 'multiple_choice') {
    // expected = what the app grades against TODAY from the Firestore doc (app's own resolver)
    let fi = -1; try { fi = resolveCorrectOptionIndex({ answer: f.answer ?? f.a, isManual: f.isManual !== false }, (f.options || []).map((o) => ({ text: optT(o) }))); } catch { /* */ }
    const fa = fi >= 0 ? fo[fi] : null;
    const ca = co[Number(c.answer)];
    if (norm(fa ?? '') !== norm(ca ?? '')) note(adjudicated.has(id) ? 'mc-answer(adjudicated)' : (!fo.length ? 'mc-answer(recovered)' : (fa == null ? 'mc-answer(fs unresolvable today)' : 'mc-answer')), id, fa, ca);
  } else if (norm(f.answer) !== norm(c.answer)) note('answer', id, f.answer, c.answer);
  if (norm(f.hint) !== norm(c.hint)) note(norm(f.hint) ? 'hint' : 'hint(recovered)', id, f.hint, c.hint);
  if (norm(f.solution) !== norm(c.solution)) note(norm(f.solution) ? 'solution' : 'solution(recovered)', id, f.solution, c.solution);
  const fs_ = f.solutionSteps || [], cs = c.solutionSteps || [];
  if (fs_.length !== cs.length || fs_.some((s, i) => norm(s.explanation) !== norm(cs[i].explanation) || norm(s.workingOut) !== norm(cs[i].workingOut))) note(GENERIC.test(JSON.stringify(fs_)) ? 'steps(recovered: fs generic template)' : (fs_.length ? 'steps' : 'steps(recovered: fs empty)'), id, fs_.length, cs.length);
  const fg = f.graphData ? JSON.stringify(f.graphData) : '', cg = c.graphData ? JSON.stringify(c.graphData) : '';
  if (fg !== cg) note(fg ? 'graphData' : 'graphData(recovered)', id, fg.slice(0, 40), cg.slice(0, 40));
  if ((f.subQuestions || []).length !== (c.subQuestions || []).length) note('subQuestions.length', id, (f.subQuestions || []).length, (c.subQuestions || []).length);
  for (const k of ['topicId', 'chapterId', 'difficulty', 'timeLimit', 'requiresManualGrading', 'questionImage', 'examPaper', 'questionType', 'dnaId']) {
    const a = f[k] ?? (k === 'timeLimit' ? 120 : k === 'requiresManualGrading' ? false : ''), b = c[k] ?? (k === 'timeLimit' ? 120 : k === 'requiresManualGrading' ? false : '');
    if (norm(a) !== norm(b)) note(k, id, a, b);
  }
}
console.log(`compared ${compared}/${raw.size} active Firestore docs`);
console.log(JSON.stringify(Object.fromEntries(Object.entries(diffs).sort((a, b) => b[1] - a[1])), null, 1));
console.log('\nexamples:'); for (const [k, v] of Object.entries(examples)) console.log(' ', k, '→', JSON.stringify(v));
