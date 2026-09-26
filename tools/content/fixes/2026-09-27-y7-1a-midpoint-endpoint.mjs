// y7-1a "geological midpoint" questions (10): "depth A = -36 … midpoint at depth 14 … bottom
// endpoint B" mixed depth language with signed coordinates (a depth of 64 isn't the "bottom" of
// anything) and solved with B = 2M − A, algebra beyond Y7 Ch1 (user, 2026-09-27). Now a plain
// number-line question solved by stepping the A→M distance again. Answers re-derived; idempotent.
//   node tools/content/fixes/2026-09-27-y7-1a-midpoint-endpoint.mjs
import { readFileSync, writeFileSync } from 'fs';

const file = 'content/chapters/y7-1.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const log = [];
ch.topics.forEach((t) => t.questions.forEach((q) => {
  const m = q.stem.match(/depth \\\( A = (-?\d+) \\\)[\s\S]*depth \\\( M = (-?\d+) \\\)/);
  if (!m || !/geological segment/.test(q.stem)) return;
  const A = Number(m[1]); const M = Number(m[2]);
  const AM = M - A; const B = M + AM;
  const keyed = Number(String(q.options[q.answer]).replace(/[\\() ]/g, ''));
  if (keyed !== B) { log.push(`SKIP ${q.id}: keyed ${keyed}, expected ${B}`); return; }
  q.stem = `On a number line, point \\( A \\) is at \\( ${A} \\). The midpoint \\( M \\) of the segment \\( AB \\) is at \\( ${M} \\). Find the coordinate of point \\( B \\).`;
  q.steps = [
    { explain: 'Find how far it is from A to the midpoint M.', work: `\\( AM = ${M} - (${A}) = ${AM} \\)` },
    { explain: 'M is halfway, so B is the same distance again on the other side of M.', work: `\\( B = ${M} + ${AM} = ${B} \\)` },
  ];
  q.hint = 'M is exactly halfway between A and B: go from A to M, then the same distance again.';
  q.keyPoints = [
    { text: 'midpoint', note: 'Halfway: B is as far past M as A is before it.' },
    { text: `\\( ${A} \\)`, note: 'A is negative — subtracting a negative adds when you find the distance to M.' },
  ];
  log.push(`${q.id}: A=${A} M=${M} → B=${B}`);
}));
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n') || 'nothing to do');
