// Answer-key repairs across chapters, found by tools/content/checkMcKeys.mjs (2026-09-25).
// Every target was re-derived by hand; the worked solution already agreed with the target.
// Re-keys by option TEXT, so it is idempotent. Unverifiable items are left alone:
//   asc2020-mc4 (no option equals the correct max range 40), y10-4g-q13a_ii_b (needs the graph).
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const target = {
  'baulko2020-q14ci': '\\dfrac{8}{7}', 'bbhs2020-28c': '0.1846', 'bbhs2020s-28c': '\\dfrac{7}{125}', 'cra2023s-q17a': '0.2674',
  'y11e1-4c-q3b': '3', 'y11a-6e-q9c': '-\\frac{12}{5}', 'y11a-6e-q10c': '\\frac{1}{\\sqrt{2}}',
  'y8-15a-q7a': '12', 'y8-15a-q7b': '120', 'y8-15a-q8b': '120',
  'y10-14e-q1a': '4', 'y10-14e-q1b': '5', 'y10-14e-q1c': '5', 'y10-14e-q2a': '5', 'y10-14e-q2d': '7', 'y10-14e-q2e': '9', 'y10-14e-q2f': '4',
  'y10-14e-q9c': '-11', 'y10-14e-q9d': '1000',
  'y10-2e-q1d': '\\frac{2\\sqrt{3}}{3}', 'y10-2e-q3c': '\\frac{\\sqrt{5}-1}{2}', 'y10-2e-q9iie': '\\frac{540+387\\sqrt{2}}{4}',
  'y10-4g-q5a_i': '2',
  'y10-6a-q1a': '340', 'y10-6a-q3': '5', 'y10-6a-q4': '6', 'y10-6a-q5b': '31.8', 'y10-6a-q7a': '8', 'y10-6a-q9a': '5', 'y10-6a-q9b': '6.7',
  'y12a-1a-h61': '2', 'y12a-1b-h61': '2',
  'y12a-1g-q12-3': '7', 'y12a-1g-q12-7': '7', 'y12a-1g-q12-11': '7', 'y12a-1g-q12-15': '7', 'y12a-1g-q12-19': '7',
  'hg2020-q17': '\\dfrac{2-\\sqrt2}{2}',
  'y7-1c-q10c': '8', 'y7-1c-q10d': '2', 'y7-1i-q1b': '200', 'y8-10g-q15': '6',
  'y9-11g-q6a': '-3', 'y9-11g-q6b': '-\\frac{1}{3}', 'y9-11g-q6c': '-\\frac{2}{5}', 'y9-11g-q6d': '-\\frac{1}{4}', 'y9-11g-q6e': '-\\frac{3}{2}',
  'y9-11g-q6f': '\\frac{1}{3}', 'y9-11g-q6g': '\\frac{1}{4}', 'y9-11g-q6i': '-\\frac{5}{3}', 'y9-11g-q6j': '-\\frac{4}{3}',
  'y9-6a-6a': '2', 'y9-6a-6d': '3', 'y9-6a-9a': '3',
};
const stepFix = { 'y9-8a-13e': ['5 + 5 = 10', '2 + 5 = 7'], 'y9-8a-13f': ['5 + 5 = 10', '2 + 5 = 7'] };

const norm = (s) => String(s).replace(/\\\\/g, '\\').replace(/\\[()]/g, '').replace(/\$/g, '').replace(/\\dfrac/g, '\\frac').replace(/\s+/g, '');
const log = []; const pending = new Set(Object.keys(target));
for (const f of readdirSync('content/chapters').filter((x) => x.endsWith('.json'))) {
  const file = `content/chapters/${f}`;
  const src = readFileSync(file, 'utf8');
  if (![...pending, ...Object.keys(stepFix)].some((id) => src.includes(`"${id}"`))) continue;
  const ch = JSON.parse(src); let changed = false;
  const visit = (q) => {
    (q.parts || []).forEach(visit);
    if (target[q.id] && q.type === 'mc') {
      pending.delete(q.id);
      const idx = q.options.findIndex((o) => norm(typeof o === 'object' ? o.text : o) === norm(target[q.id]));
      if (idx < 0) log.push(`NO-OPTION ${q.id}`);
      else if (idx !== q.answer) { log.push(`rekey ${q.id}: ${q.options[q.answer]} -> ${q.options[idx]}`); q.answer = idx; changed = true; }
    }
    if (stepFix[q.id]) {
      const [from, to] = stepFix[q.id];
      (q.steps || []).forEach((s) => { ['work', 'explain'].forEach((k) => { if (typeof s[k] === 'string' && s[k].includes(from)) { s[k] = s[k].split(from).join(to); changed = true; log.push(`steps ${q.id}`); } }); });
    }
  };
  ch.topics.forEach((t) => t.questions.forEach(visit));
  if (changed) writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
}
pending.forEach((id) => log.push(`NOT-FOUND ${id}`));
console.log(log.join('\n') || 'nothing to fix');
