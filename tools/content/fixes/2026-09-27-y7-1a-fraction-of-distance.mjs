// y7-1a "fraction of the distance" questions (q18, q27 … q99): the maths was right but the stem
// ("P lies exactly 2/7 of the distance from A to B") didn't say that AP is the fraction of AB, and
// the steps called it an unexplained "shift" (user report, 2026-09-27). Rewords the stem, rewrites
// the steps with AP / AB, simplifies 2/8 → 1/4 and 6/8 → 3/4, and refreshes the keyPoints.
// Idempotent: only touches stems still in the old wording.
//   node tools/content/fixes/2026-09-27-y7-1a-fraction-of-distance.mjs
import { readFileSync, writeFileSync } from 'fs';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const file = 'content/chapters/y7-1.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const log = [];
ch.topics.forEach((t) => t.questions.forEach((q) => {
  if (!/lies exactly \\\( \\frac\{\d+\}\{\d+\} \\\) of the distance from/.test(q.stem)) return;
  const [A, B] = [...q.stem.matchAll(/located at \\\( (-?\d+) \\\)/g)].map((m) => Number(m[1]));
  let [, n, d] = q.stem.match(/\\frac\{(\d+)\}\{(\d+)\}/).map(Number);
  const g = gcd(n, d); n /= g; d /= g;
  const AB = B - A; const AP = (AB * n) / d; const P = A + AP;
  if (!Number.isInteger(AP) || String(q.options[q.answer]).replace(/[\\() ]/g, '') !== String(P)) { log.push(`SKIP ${q.id}: check by hand`); return; }
  const frac = `\\frac{${n}}{${d}}`;
  q.stem = `On a number line, point \\( A \\) is at \\( ${A} \\) and point \\( B \\) is at \\( ${B} \\). Point \\( P \\) lies between \\( A \\) and \\( B \\) so that the distance from \\( A \\) to \\( P \\) is \\( ${frac} \\) of the distance from \\( A \\) to \\( B \\). Find the coordinate of \\( P \\).`;
  q.steps = [
    { explain: 'Find the distance from A to B (right end minus left end).', work: `\\( AB = ${B} - (${A}) = ${AB} \\)` },
    { explain: `The distance from A to P is \\( ${frac} \\) of that.`, work: `\\( AP = ${frac} \\times ${AB} = ${AP} \\)` },
    { explain: `P is ${AP} units to the right of A (towards B), so add ${AP} to A.`, work: `\\( P = ${A} + ${AP} = ${P} \\)` },
  ];
  q.hint = 'Work out the whole distance AB first, then take the fraction of it and move that far from A towards B.';
  q.keyPoints = [
    { text: `\\( ${frac} \\)`, note: 'Find the whole distance from A to B first, then take this fraction of it.' },
    { text: 'the distance from \\( A \\) to \\( P \\)', note: 'Measure from A: P is that many units from A, moving towards B.' },
  ];
  log.push(`${q.id}: A=${A} B=${B} ${n}/${d} → P=${P}`);
}));
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n') || 'nothing to do');
