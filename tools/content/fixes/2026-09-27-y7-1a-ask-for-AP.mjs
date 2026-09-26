// y7-1a fraction-of-distance questions (q18, q27 … q99), second pass (user, 2026-09-27): once AB is
// worked out, P's coordinate adds nothing — ask for the distance AP instead. New options: AP
// (correct), AB (forgot to take the fraction), AB − AP (took the rest of the way) and P's
// coordinate (answered the old question). Idempotent.
//   node tools/content/fixes/2026-09-27-y7-1a-ask-for-AP.mjs
import { readFileSync, writeFileSync } from 'fs';

const file = 'content/chapters/y7-1.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const log = [];
ch.topics.forEach((t) => t.questions.forEach((q) => {
  if (!/Find the coordinate of \\\( P \\\)\.$/.test(q.stem) || !/distance from \\\( A \\\) to \\\( P \\\)/.test(q.stem)) return;
  const [A, B] = [...q.stem.matchAll(/is at \\\( (-?\d+) \\\)/g)].map((m) => Number(m[1]));
  const [, n, d] = q.stem.match(/\\frac\{(\d+)\}\{(\d+)\}/).map(Number);
  const frac = `\\frac{${n}}{${d}}`;
  const AB = B - A; const AP = (AB * n) / d; const P = A + AP;
  const opts = [AP, AB, AB - AP, P];
  if (new Set(opts).size !== 4) { log.push(`SKIP ${q.id}: duplicate options ${opts}`); return; }
  q.stem = `On a number line, point \\( A \\) is at \\( ${A} \\) and point \\( B \\) is at \\( ${B} \\). Point \\( P \\) lies between \\( A \\) and \\( B \\) so that the distance from \\( A \\) to \\( P \\) is \\( ${frac} \\) of the distance from \\( A \\) to \\( B \\). Find the distance from \\( A \\) to \\( P \\).`;
  q.options = opts.map((v) => `\\(${v}\\)`);
  q.answer = 0;
  q.steps = [
    { explain: 'Find the distance from A to B (right end minus left end).', work: `\\( AB = ${B} - (${A}) = ${AB} \\)` },
    { explain: `The distance from A to P is \\( ${frac} \\) of AB.`, work: `\\( AP = ${frac} \\times ${AB} = ${AP} \\)` },
  ];
  q.hint = 'Work out the whole distance AB first, then take the fraction of it.';
  q.keyPoints = [
    { text: `\\( ${frac} \\)`, note: 'Take this fraction of the whole distance AB.' },
    { text: 'the distance from \\( A \\) to \\( B \\)', note: 'Find AB first: right end minus left end — subtracting a negative adds.' },
  ];
  log.push(`${q.id}: AB=${AB}, ${n}/${d} → AP=${AP}`);
}));
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n') || 'nothing to do');
