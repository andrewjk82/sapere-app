// Replace placeholder MC options ("Alternative D", "option 2") with real distractors (2026-09-27).
// Each distractor is a common student error and differs from every other option. Keyed answers
// were re-checked by hand and are unchanged (only option text moves). Idempotent.
//   node tools/content/fixes/2026-09-27-placeholder-options.mjs
import { readFileSync, writeFileSync } from 'fs';

const PLACEHOLDER = /^\s*(\\\(\s*)?(Alternative|Option|Choice|Distractor)\s*[A-D1-4]?\s*(\\\))?\s*$/i;
// id → distractors to drop into the placeholder slots, in order.
const Y11 = {
  '067b500417f518fb02defeaaa5287eab': ['\\(-4y+12\\)'],
  '14dbd0fcdecc60271a7dfb1cf5a4d5d8': ['\\(x^2+25\\)'],
  '15413390b7e096180b1c55c6737db65a': ['\\(-x\\)', '\\(2x^2+5x\\)'],
  '18b75eaedde35094e636779d537b59b4': ['\\(m^2+n^2\\)'],
  '1b5899a9c5cd56129ebf33fb25f07a88': ['\\(5\\)'],
  '2782ed52b40362bf547a2785b68edc10': ['\\(k^2+64\\)'],
  '2d8924be0f47a2677c07d81d1d397e61': ['\\(2x + 1\\)'],
  '2de4a42f81a78f7a5fa195c8e7decf7c': ['\\(-x + 3\\)'],
  '326967100407fd68a210906e4974b111': ['\\(15x + 23\\)'],
  '3b2decd987cf0200254a889859ec03c2': ['\\(7x-2\\)'],
  '3b429019908ed2e1896ffbc6907efcae': ['\\(x + 2\\)'],
  '501681aad198d8161bf3b58097952475': ['\\(2xy-z\\)'],
  '5a6ecd3bfb422babecea7536604ff6c0': ['\\(-6y^2-y\\)'],
  '60a65a49a17544b674fa202511953442': ['\\(x-5y\\)', '\\(5x-5y\\)'],
  '614626aeaef400ec904466975bffb15a': ['\\(x - 5\\)'],
  '7e67ce97bec038e63db84ca7c011119d': ['\\(12x+3\\)'],
  'b3e4b358ae5305ba2c7fb7f27eaf86a6': ['\\(12x-2y\\)'],
  'b6c600a1feb66c0ef210d4f0bddb4339': ['\\(4x-3\\)'],
  'bdf4a25350a86886fd26d7b48df6d158': ['\\(-x+7\\)'],
  'c54fd16af88fa9f5e34d2f4c962df923': ['\\(x^2+5\\)'],
  'cf3aa66ab87a2e8f8e12c0e69cad355f': ['\\(2x+3y\\)'],
  'ea630096c7f3b14e1a75fc3b439cdd5b': ['\\(9 - x\\)'],
  'feca23651598484bfc36393ea96d936d': ['\\(kx-5\\)'],
};
// "Insert > or <": only one of the four may be true, so no ≤ / ≥ that would also hold.
const Y7 = {
  '4rpo6R8p8n4RgH4ux5tX': { options: ['\\(<\\)', '\\(>\\)', '\\(=\\)', '\\(\\ge\\)'], answer: 0 },   // 3 < -(-4) = 4
  gfL6zbGBBtGt0h1ZoJ0r: { options: ['\\(>\\)', '\\(<\\)', '\\(=\\)', '\\(\\ge\\)'], answer: 1 },     // -9 < -5
};

const log = [];
const fixFile = (chapterId, apply) => {
  const file = `content/chapters/${chapterId}.json`;
  const src = readFileSync(file, 'utf8');
  const ch = JSON.parse(src);
  const walk = (q) => { (q.parts || []).forEach(walk); apply(q); };
  ch.topics.forEach((t) => t.questions.forEach(walk));
  writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
};

fixFile('y11a-1', (q) => {
  const repl = Y11[q.id]; if (!repl) return;
  let k = 0;
  q.options = q.options.map((o) => (PLACEHOLDER.test(o) && k < repl.length ? repl[k++] : o));
  if (q.id === '326967100407fd68a210906e4974b111' && !q.stem.includes('\\(')) q.stem = 'Expand and simplify: \\(3(x + 5) + 4(3x - 2)\\)';
  if (k) log.push(`${q.id}: ${k} option(s)`);
});
fixFile('y7-10', (q) => {
  const fix = Y7[q.id]; if (!fix || !q.options.some((o) => /option \d/.test(o))) return;
  q.options = fix.options; q.answer = fix.answer; log.push(`${q.id}: options rebuilt`);
});
console.log(log.join('\n') || 'nothing to fix');
