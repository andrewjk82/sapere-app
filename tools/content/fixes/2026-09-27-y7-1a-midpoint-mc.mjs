// y7-1a-q2/q3/q5 ("Show that the midpoint … is exactly M") converted to multiple choice — the
// answer was already given away in the stem, so there was nothing to grade (user, 2026-09-27).
// Now: "What is the midpoint?" with 4 options (correct + 3 common slips). Idempotent.
//   node tools/content/fixes/2026-09-27-y7-1a-midpoint-mc.mjs
import { readFileSync, writeFileSync } from 'fs';

const file = 'content/chapters/y7-1.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
const log = [];
ch.topics.forEach((t) => t.questions.forEach((q) => {
  const m = q.stem.match(/between \\\( A = (-?\d+) \\\) and \\\( B = (-?\d+) \\\) is exactly \\\( (-?\d+(?:\.\d+)?) \\\)/);
  if (!m) return;
  const A = Number(m[1]); const B = Number(m[2]); const M = (A + B) / 2;
  if (M !== Number(m[3])) { log.push(`SKIP ${q.id}: stated ${m[3]} but M=${M}`); return; }
  const opts = [M, (A + B), (B - A) / 2, -M];
  if (new Set(opts).size !== 4) { log.push(`SKIP ${q.id}: duplicate options`); return; }
  q.type = 'mc';
  q.stem = `On a number line, point \\( A \\) is at \\( ${A} \\) and point \\( B \\) is at \\( ${B} \\). What is the midpoint of \\( AB \\)?`;
  q.options = opts.map((v) => `\\(${fmt(v)}\\)`);
  q.answer = 0;
  q.steps = [
    { explain: 'The midpoint is halfway between A and B: add them, then divide by 2.', work: `\\( M = \\frac{A + B}{2} \\)` },
    { explain: 'Substitute the coordinates.', work: `\\( M = \\frac{${A} + ${B}}{2} = \\frac{${A + B}}{2} = ${fmt(M)} \\)` },
  ];
  q.hint = 'Add the two coordinates, then divide by 2.';
  q.keyPoints = [{ text: 'midpoint', note: 'The midpoint is halfway: add the two coordinates and divide by 2.' }];
  delete q.answer_old; delete q.manual; delete q.solution;
  log.push(`${q.id}: A=${A} B=${B} → M=${fmt(M)}`);
}));
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n') || 'nothing to do');
