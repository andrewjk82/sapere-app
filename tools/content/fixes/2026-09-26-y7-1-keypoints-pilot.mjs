// keyPoints pilot for Y7 Ch1 (2026-09-26) — 24 questions across every topic, written by reading
// each question. `text` = a stem substring (maths is widened to the whole expression at render
// time); `note` = the tip a student sees after a wrong answer. Idempotent: skips questions that
// already have keyPoints (teacher edits win). Also fixes y7-1d-h86's sign error.
//   node --import ./scripts/extResolve.mjs tools/content/fixes/2026-09-26-y7-1-keypoints-pilot.mjs
import { readFileSync, writeFileSync } from 'fs';
import { snapToMath } from '../../../src/utils/keyPoints.js';

const KP = {
  'y7-1a-q16': [
    ['-45', 'Below ground is negative. Count the distance up to 0, then from 0 up to the balloon.'],
    ['absolute distance', 'Distance is never negative — it is how far apart the two points are.'],
  ],
  'y7-1a-q56': [
    ['exactly', 'There are two numbers 11 units from −12: one to the left and one to the right.'],
    ['sum of all possible values', 'Find both values of x first, then add them together.'],
  ],
  'y7-1a-q96': [
    ['midpoint', 'The midpoint is halfway: add the two coordinates and divide by 2.'],
    ['-4.2', 'Watch the sign — adding a negative number moves you left.'],
  ],
  'y7-1b-q2b': [
    ['38', 'Look for numbers that make a round ten: 2 + 38 = 40.'],
  ],
  'y7-1b-h43': [
    ['three light wavelengths', 'Add all three bandwidths together.'],
    ['75', 'Group numbers that are easy to add first, e.g. 45 + 75 = 120.'],
  ],
  'y7-1c-q2c': [
    ['1064', 'Line up the units, tens, hundreds and thousands columns before adding, and carry when a column reaches 10.'],
  ],
  'y7-1c-h28': [
    ['burn', '“Burn” means the tokens are destroyed — this is a subtraction.'],
    ['185000', 'Subtract column by column; borrow from the next column when the top digit is smaller.'],
  ],
  'y7-1d-q3b': [
    ['255', 'In the units column 2 − 5 needs a borrow from the tens.'],
  ],
  'y7-1d-h86': [
    ['-14600', 'The trench starts below zero, so its coordinate is negative.'],
    ['raise the floor', 'Raising the floor moves the depth UP towards 0 — add 4255 to −14600.'],
  ],
  'y7-1e-h40': [
    ['each tower', '“Each” tells you to multiply: towers × apartments per tower.'],
  ],
  'y7-1f-q2f': [
    ['102', 'Split 102 into 100 + 2, then 64 × 100 + 64 × 2.'],
  ],
  'y7-1f-high-q31': [
    ['each of 17 boxes', 'Every step uses the same 17 boxes — work out the units per box first, then multiply by 17 once.'],
    ['removed', 'Removed units are subtracted: (37 + 22 − 17) per box.'],
  ],
  'y7-1g-q2e': [
    ['expanded form', 'Write each digit times its place value: hundreds, tens and units.'],
    ['the digit 4', 'Count positions from the right: units, tens, hundreds.'],
  ],
  'y7-1h-q6a': [
    ['r l', 'Start with the units column: 8 × 6 = 48, so the last digit is 8 and you carry 4.'],
  ],
  'y7-1h-h39': [
    ['Each rack', 'Two “each”s mean two multiplications: racks × servers × requests.'],
    ['138 requests per minute', 'Find the number of servers first (19 × 45), then multiply by 138.'],
  ],
  'y7-1i-q5d': [
    ['smallest possible remainder', 'The remainder must be smaller than 8 — use the biggest multiple of 8 that fits into 87.'],
  ],
  'y7-1i-h93': [
    ['distributive law of division', 'Divide each part by 9 separately: 1800 ÷ 9 − 9 ÷ 9.'],
  ],
  'y7-1j-q2f': [
    ['8544', '12 doesn’t go into 8, so start with 85 ÷ 12.'],
  ],
  'y7-1k-q2d': [
    ['quotient r remainder', 'The remainder is what is left over after the last subtraction — it must be less than 105.'],
  ],
  'y7-1k-h24': [
    ['per qubit', '“Per” means share equally — divide the operations by the number of qubits.'],
  ],
  'y7-1l-h26': [
    ['equal beakers', 'Divide first to find how much acid is in one beaker.'],
    ['to each beaker', 'Add the water to ONE beaker’s amount, then combine 2 beakers.'],
  ],
  'y7-1l-h89': [
    ['in every plot', 'Take 5 off each plot’s saplings before multiplying by the number of plots.'],
    ['across both sections', 'Work out Sector A and Sector B separately, then add them.'],
  ],
  'y7-1m-q5': [
    ['buses are needed', 'Every student needs a seat — if there is a remainder, you need one more bus.'],
  ],
  'y7-1m-h40': [
    ['in each window', 'The same decrease happens 3 times: multiply 170 by 3 first.'],
    ['decreases', 'A decrease is subtracted from the starting reading.'],
  ],
};

const file = 'content/chapters/y7-1.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const log = [];
ch.topics.forEach((t) => t.questions.forEach((q) => {
  if (q.id === 'y7-1d-h86' && !q.options.some((o) => o.includes('-10345'))) {
    q.options = ['\\( -10245 \\)', '\\( -10335 \\)', '\\( -18855 \\)', '\\( -10345 \\)'];
    q.answer = 3;
    q.steps = [
      { explain: 'The trench starts below ground, so its depth coordinate is negative. Raising the floor moves it up (towards 0), so add.', work: '\\( -14600 + 4255 \\)' },
      { explain: 'Adding a smaller positive number to a negative number: subtract the sizes and keep the negative sign.', work: '\\( -14600 + 4255 = -10345 \\)' },
    ];
    log.push('fixed sign y7-1d-h86');
  }
  const spec = KP[q.id];
  if (!spec || q.keyPoints?.length) return;
  const kps = [];
  for (const [text, note] of spec) {
    const at = q.stem.indexOf(text);
    if (at < 0) { log.push(`NOT FOUND ${q.id}: ${text}`); continue; }
    const [s, e] = snapToMath(q.stem, at, at + text.length);
    kps.push({ text: q.stem.slice(s, e), note });
  }
  if (kps.length) { q.keyPoints = kps; log.push(`keyPoints ${q.id} (${kps.length})`); }
}));
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n'));
