// y7-1a-q6..q10 asked students to "prove" that |X − Y| = d means the points are d apart — that is
// just the definition restated, and the worked "proof" was circular (user report, 2026-09-27).
// Rewritten as a real Y7 number-line task: Y is d units from X, find both positions. MC so it can
// be auto-graded. Idempotent (skips questions already rewritten).
//   node tools/content/fixes/2026-09-27-y7-1a-distance-rewrite.mjs
import { readFileSync, writeFileSync } from 'fs';

const SPEC = { 'y7-1a-q6': [-3, 2], 'y7-1a-q7': [4, 3], 'y7-1a-q8': [-1, 4], 'y7-1a-q9': [-6, 5], 'y7-1a-q10': [-2, 6] };
const m = (n) => `\\(${n}\\)`;

const build = (id, x, d) => {
  const lo = x - d; const hi = x + d;
  const pair = (a, b) => `\\(${Math.min(a, b)}\\) and \\(${Math.max(a, b)}\\)`;
  const fixed = [
    pair(lo, hi),          // correct
    `\\(${hi}\\) only`,     // forgot the other direction
    pair(-lo, -hi),        // sign slip
    pair(-d, d),           // measured the distance from 0 instead of from X
  ];
  if (new Set(fixed).size !== 4) throw new Error(`duplicate options for ${id}`);
  return {
    id,
    type: 'mc',
    difficulty: 'medium',
    stem: `On a number line, point \\( X \\) is at ${m(x)}. Point \\( Y \\) is ${m(d)} units away from \\( X \\). What are the two possible positions of \\( Y \\)?`,
    options: fixed,
    answer: 0,
    hint: `“${d} units away” can be to the left or to the right of X.`,
    steps: [
      { explain: `Moving ${d} units to the right of X means adding ${d}.`, work: `\\(${x} + ${d} = ${hi}\\)` },
      { explain: `Moving ${d} units to the left of X means subtracting ${d}.`, work: `\\(${x} - ${d} = ${lo}\\)` },
      { explain: 'Both points are the same distance from X, so there are two answers.', work: `\\(Y = ${lo} \\text{ or } Y = ${hi}\\)` },
    ],
    keyPoints: [
      { text: 'units away', note: 'Away can mean to the left OR to the right — check both directions.' },
      { text: 'two possible positions', note: 'Find one position on each side of X.' },
    ],
    xp: 2,
  };
};

const file = 'content/chapters/y7-1.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const log = [];
ch.topics.forEach((t) => {
  t.questions = t.questions.map((q) => {
    const spec = SPEC[q.id];
    if (!spec || q.type === 'mc') return q;
    log.push(q.id);
    return build(q.id, ...spec);
  });
});
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.length ? `rewrote ${log.join(', ')}` : 'nothing to do');
