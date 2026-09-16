#!/usr/bin/env node
/** Exercises api/content.js applyEdit() over in-memory copies of content/ (nothing is written to disk). */
import fs from 'node:fs'; import path from 'node:path';
process.env.GITHUB_TOKEN = 'test';
const { applyEdit } = await import('../../../api/content.js');
const { Chapter } = await import('../../../content/schema.js');

const files = new Map(); const writes = [];
const readFile = async (p) => { if (files.has(p)) return files.get(p); if (!fs.existsSync(p)) return null; const v = { sha: 'sha0', text: fs.readFileSync(p, 'utf8') }; files.set(p, v); return v; };
const writeFile = async (p, text, sha, message) => { files.set(p, { sha: `sha${writes.length + 1}`, text }); writes.push({ p, message, size: text.length }); return { commit: { sha: `c${writes.length}` } }; };
const locate = async (id) => { for (const f of fs.readdirSync('content/chapters')) { const ch = JSON.parse(files.get(path.join('content/chapters', f))?.text || fs.readFileSync(path.join('content/chapters', f), 'utf8')); for (const t of ch.topics) if (t.questions.some((q) => q.id === id)) return ch.chapterId; } return null; };
const deps = { readFile, writeFile, locate };
const user = { email: 'test@example.com' };
let pass = 0, fail = 0;
const check = (name, cond, info = '') => { if (cond) { pass++; console.log('  ✓', name); } else { fail++; console.log('  ✗', name, info); } };
const chapterOf = (cid) => JSON.parse(files.get(`content/chapters/${cid.replace(/[^a-z0-9:_-]/gi, '_')}.json`).text);
const findQ = (cid, id) => { for (const t of chapterOf(cid).topics) { const q = t.questions.find((q) => q.id === id); if (q) return { q, t }; } return null; };

// 1. edit an existing question's stem + hint (legacy shape, like the modal sends)
{
  const r = await applyEdit(deps, { op: 'upsert', chapterId: 'y9-16', topicId: 'y9-16b', doc: { id: 'y9-16b-q1a', question: 'Calculate the total surface area of a cube with side length \\(8\\text{ cm}\\). (edited)', hint: 'SA = \\(6s^2\\)' } }, user);
  check('edit: 200', r.status === 200, JSON.stringify(r.body).slice(0, 200));
  const { q, t } = findQ('y9-16', 'y9-16b-q1a');
  check('edit: stem updated', q.stem.endsWith('(edited)'));
  check('edit: options/answer/steps/figure preserved', q.options?.length === 4 && q.answer === 1 && q.steps?.length === 4 && typeof (q.figure?.svg || q.figure?.html) === 'string');
  check('edit: origin teacher', q.meta?.origin === 'teacher');
  check('edit: stays in topic', t.topicId === 'y9-16b');
  check('edit: returned doc is legacy shape', r.body.doc.type === 'multiple_choice' && r.body.doc.options[0].text && r.body.doc.answer === '1');
  check('edit: chapter file still valid', Chapter.safeParse(chapterOf('y9-16')).success);
}
// 2. add a new MC question → pending + inactive
let newId;
{
  const doc = { question: 'What is \\(2+2\\)?', type: 'multiple_choice', options: [{ text: '3', imageUrl: '' }, { text: '4', imageUrl: '' }, { text: '5', imageUrl: '' }, { text: '22', imageUrl: '' }], answer: '1', difficulty: 'easy', timeLimit: 60, solutionSteps: [{ explanation: 'Add.', workingOut: '\\(2+2=4\\)' }], hint: '', subQuestions: [], blanks: [], graphData: null, acceptedAnswers: [], chapterId: 'y7-1', topicId: 'y7-1b', topicTitle: 'Addition', chapterTitle: 'Whole numbers' };
  const r = await applyEdit(deps, { op: 'upsert', chapterId: 'y7-1', topicId: 'y7-1b', doc }, user);
  check('add: 200', r.status === 200, JSON.stringify(r.body).slice(0, 200)); newId = r.body.id;
  const f = findQ('y7-1', newId);
  check('add: placed in y7-1/y7-1b', f && f.t.topicId === 'y7-1b');
  check('add: inactive + pending', f?.q.inactive === true && f?.q.meta?.reviewStatus === 'pending');
  check('add: answer index 1', f?.q.answer === 1);
}
// 3. approve it
{
  const r = await applyEdit(deps, { op: 'patch', id: newId, chapterId: 'y7-1', fields: { isActive: true, reviewStatus: 'approved' } }, user);
  check('approve: 200', r.status === 200, JSON.stringify(r.body).slice(0, 200));
  const { q } = findQ('y7-1', newId);
  check('approve: active', q.inactive === undefined && q.meta?.reviewStatus === 'approved');
}
// 4. timeLimit patch
{
  const r = await applyEdit(deps, { op: 'patch', id: 'y9-16b-q1a', fields: { timeLimit: 90 } }, user);
  check('timeLimit: 200 and stored', r.status === 200 && findQ('y9-16', 'y9-16b-q1a').q.timeLimit === 90);
}
// 5. delete (soft)
{
  const r = await applyEdit(deps, { op: 'patch', id: newId, chapterId: 'y7-1', fields: { isActive: false } }, user);
  check('delete: inactive', r.status === 200 && findQ('y7-1', newId).q.inactive === true);
}
// 6. move to another chapter/topic
{
  const r = await applyEdit(deps, { op: 'upsert', chapterId: 'y8-19', topicId: 'y8-19a', doc: { id: 'y9-16b-q1b' } }, user);
  check('move: 200', r.status === 200, JSON.stringify(r.body).slice(0, 200));
  check('move: gone from y9-16, present in y8-19/y8-19a', !findQ('y9-16', 'y9-16b-q1b') && findQ('y8-19', 'y9-16b-q1b')?.t.topicId === 'y8-19a');
}
// 7. reject NEW broken LaTeX
{
  const r = await applyEdit(deps, { op: 'upsert', chapterId: 'y9-16', doc: { id: 'y9-16b-q1c', question: 'Broken \\(\\frac{1}\\)' } }, user);
  check('latex: 400 with issue', r.status === 400 && r.body.error === 'latex' && r.body.issues?.length > 0, JSON.stringify(r.body).slice(0, 160));
}
// 8. reject MC answer matching no option
{
  const r = await applyEdit(deps, { op: 'upsert', chapterId: 'y9-16', doc: { id: 'y9-16b-q1c', answer: 'nonsense' } }, user);
  check('mc answer: 400', r.status === 400, JSON.stringify(r.body).slice(0, 160));
}
// 9. inline SVG from the editor → externalised to content/figures + fig: ref
{
  const svg = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10"/></svg>';
  const r = await applyEdit(deps, { op: 'upsert', chapterId: 'y9-16', doc: { id: 'y9-16b-q1c', graphData: { svg } } }, user);
  const { q } = findQ('y9-16', 'y9-16b-q1c');
  check('svg: fig ref + figure file written', r.status === 200 && /^fig:[0-9a-f]{10}$/.test(q.figure?.svg) && writes.some((w) => w.p.startsWith('content/figures/')), JSON.stringify(r.body).slice(0, 120));
}
// 10. unknown id
{
  const r = await applyEdit(deps, { op: 'patch', id: 'does-not-exist', fields: { timeLimit: 10 } }, user);
  check('unknown id: 400/404', r.status === 400 || r.status === 404);
}
console.log(`\n${pass} passed, ${fail} failed; ${writes.length} simulated commits`);
process.exit(fail ? 1 : 0);
