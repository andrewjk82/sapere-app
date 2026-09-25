// Y11 Ch6 answer-key repairs (2026-09-25). Keys were pointing at the wrong option while the
// worked solutions were right. Every target below was re-derived by hand (quadrant/ASTC or the
// given approximations). Idempotent: re-keys by option TEXT, not by index.
//   Run together with: node tools/content/checkMcKeys.mjs y11a-6 --fix  (stem-computable trig values)
import { readFileSync, writeFileSync } from 'fs';
const file = 'content/chapters/y11a-6.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const byId = {};
const walk = (q) => { byId[q.id] = q; (q.parts || []).forEach(walk); };
ch.topics.forEach((t) => t.questions.forEach(walk));
const norm = (s) => String(s).replace(/\\\\/g, '\\').replace(/\\[()]/g, '').replace(/\\dfrac/g, '\\frac').replace(/\s+/g, '');
const target = {
  'y11a-6d-q9c': 'undefined', 'y11a-6d-q9d': 'undefined', 'y11a-6d-q9f': 'undefined',
  'y11a-6d-q12a': '0.34', 'y11a-6d-q12c': '0.94', 'y11a-6d-q12e': '0.60', 'y11a-6d-q12f': '0.60',
  'y11a-6d-q13b': '-1.31', 'y11a-6d-q13e': '2.15',
  'y11a-6e-q1a-sin': '\\frac{12}{13}', 'y11a-6e-q1a-cos': '\\frac{5}{13}', 'y11a-6e-q1a-tan': '\\frac{12}{5}',
  'y11a-6e-q1b-sin': '\\frac{15}{17}', 'y11a-6e-q1b-tan': '-\\frac{15}{8}',
  'y11a-6e-q1c-tan': '\\frac{5}{12}',
  'y11a-6e-q1d-cos': '\\frac{7}{25}', 'y11a-6e-q1d-tan': '-\\frac{24}{7}',
  'y11a-6e-q2a-side': '15', 'y11a-6e-q2a-sin': '\\frac{15}{17}', 'y11a-6e-q2a-cos': '\\frac{8}{17}', 'y11a-6e-q2a-tan': '\\frac{15}{8}',
  'y11a-6e-q2b-side': '4', 'y11a-6e-q2b-sin': '\\frac{3}{4}', 'y11a-6e-q2b-cos': '-\\frac{\\sqrt{7}}{4}',
  'y11a-6e-q2c-side': '-3', 'y11a-6e-q2c-tan': '\\frac{4}{3}',
  'y11a-6e-q2d-sin': '-\\frac{1}{\\sqrt{10}}', 'y11a-6e-q2d-cos': '\\frac{3}{\\sqrt{10}}',
  'y11a-6e-q3aii': '-\\frac{12}{5}', 'y11a-6e-q3bi': '\\frac{3}{5}',
  'y11a-6e-q5a': '\\sqrt{15}', 'y11a-6e-q5b': '-\\frac{4}{3}', 'y11a-6e-q5d': '\\frac{4}{5}', 'y11a-6e-q5e': '\\frac{7}{25}', 'y11a-6e-q5f': '\\frac{1}{3}',
  'y11a-6e-q9a': '-\\frac{4}{\\sqrt{7}}', 'y11a-6e-q9b': '-\\frac{13}{5}', 'y11a-6e-q9d': '\\frac{5}{4}',
  'y11a-6e-q10a': '\\frac{4}{\\sqrt{15}}', 'y11a-6e-q10d': '\\frac{15}{17}',
};
const log = [];
for (const [id, want] of Object.entries(target)) {
  const q = byId[id]; if (!q) { log.push(`MISSING ${id}`); continue; }
  const idx = q.options.findIndex((o) => norm(typeof o === 'object' ? o.text : o) === norm(want));
  if (idx < 0) { log.push(`NO-OPTION ${id} (${want})`); continue; }
  if (q.answer !== idx) { log.push(`rekey ${id}: ${q.options[q.answer]} -> ${q.options[idx]}`); q.answer = idx; }
}
// 6d-q1*: ASTC sign items stored as `review` with a bare index answer; options survive.
Object.values(byId).filter((q) => /^y11a-6d-q1[a-p]$/.test(q.id) && q.type === 'review' && /^\d$/.test(String(q.answer)))
  .forEach((q) => { if (!Array.isArray(q.options) || !q.options.length) q.options = ['+', '-', 'Both + and -', 'Cannot be determined']; q.type = 'mc'; q.answer = Number(q.answer); delete q.accepted; delete q.manual; log.push(`review->mc ${q.id} "${q.options[q.answer]}"`); });
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n') || 'nothing to fix');
