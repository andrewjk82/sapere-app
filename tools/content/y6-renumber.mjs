// Re-lay out content/chapters/y6-*.json to the ICE-EM Mathematics Year 6 (3rd ed.) contents: 17 chapters, topics 1A…17B.
// Question ids and bodies are untouched — each question just moves to a new topic (rules below, by old topic and stem).
// New chapter / topic ids (y6-1, y6-1a …) never collide with the old ones (y6-wn, y6-frac-1 …), so a second run is harmless
// (it finds no old files and stops).
//   node tools/content/y6-renumber.mjs            → dry run: counts per topic + every placement
//   node tools/content/y6-renumber.mjs --apply    → rewrites the files
import { readFileSync, writeFileSync, readdirSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const APPLY = process.argv.includes('--apply');
const DIR = new URL('../../content/chapters/', import.meta.url).pathname;
const LAYOUT = JSON.parse(readFileSync(new URL('./y6-2026-layout.json', import.meta.url), 'utf8'));
if (existsSync(join(DIR, 'y6-1.json'))) { console.error('y6-1.json exists: already migrated.'); process.exit(1); }

const BYQ = {
  'y6-frac-q2': '6A', 'y6-frac-q1': '6A', 'y6-frac-q22': '6A', 'y6-frac-q23': '6A',
  'y6-frac-q3': '6D', 'y6-frac-q4': '6D', 'y6-frac-q5': '6D',
  'y6-frac-q6': '6F', 'y6-frac-q7': '6F',
  'y6-frac-q9': '7A', 'y6-frac-q10': '7B', 'y6-frac-q11': '7C', 'y6-frac-q12': '7C', 'y6-frac-q16': '7C',
  'y6-frac-q14': '7D', 'y6-frac-q15': '7D', 'y6-frac-q19': '7D', 'y6-frac-q13': '7E', 'y6-frac-q20': '7E', 'y6-frac-q24': '7E',
  'y6-frac-q17': '7G',
  'y6-rqf-1-q1': '6E', 'y6-rqf-1-q2': '6E', 'y6-rqf-1-q3': '6D',
  'y6-rqf-2-q1': '7B', 'y6-rqf-2-q2': '7B', 'y6-rqf-2-q3': '7C',
  'y6-rqf-3-q1': '7D', 'y6-rqf-3-q2': '7D', 'y6-rqf-3-q3': '7D',
  'y6-rqf-4-q1': '7F', 'y6-rqf-4-q2': '7D',
  'y6-rqf-5-q1': '6D', 'y6-rqf-5-q2': '6D',
  'y6-3ds-1-q3': '12B', 'y6-gm-3-q2': '5A',
  'y6-data-1-q1': '15A', 'y6-data-1-q2': '15C', 'y6-data-1-q3': '15E', 'y6-data-2-q1': '15D', 'y6-data-2-q2': '15F',
  'y6-nsm-1-q3': '13B',
  'y6-rn-2-l5-q11': '13C', 'y6-rn-2-l5-q12a': '5B', 'y6-rn-2-l5-q12b': '13B', 'y6-rn-2-l5-q12c': '5I', 'y6-rn-2-l5-q12d': '5B',
  'y6-mr-2-l5-q4': '8K', 'y6-mr-2-l5-q5': '8I', 'y6-mr-2-l5-q6': '15B', 'y6-mr-2-l5-q7': '8I', 'y6-mr-2-l5-q8': '8G',
  'y6-mr-2-l5-q9': '8H', 'y6-mr-2-l5-q10': '8I',
  'y6-mr-2-l4-q8b': '8K', 'y6-mr-2-l4-q8c': '8K', 'y6-mr-2-l4-q8a': '8I',
  'y6-ar-2-l5-q2': '8D', 'y6-ar-2-l5-q3': '8D', 'y6-ar-4-l4-q8d': '8J',
};
const BYTOPIC = {
  'y6-2ds-1': '17B', 'y6-2ds-2': '17B', 'y6-2ds-3': '5E', 'y6-2ds-4': '5D', 'y6-2ds-5': '5F',
  'y6-3ds-1': '12A', 'y6-3ds-2': '5H',
  'y6-chan-1': '15H', 'y6-chan-2': '15H', 'y6-chan-3': '15H', 'y6-data-3': '15G',
  'y6-gm-1': '14B', 'y6-gm-2': '5B', 'y6-gm-3': '5B', 'y6-gm-4': '10C', 'y6-gm-5': '10C', 'y6-gm-6': '10C',
  'y6-nsm-1': '13A', 'y6-nsm-2': '13C',
};

const clean = (s) => String(s || '').replace(/\\\\/g, '\\');
const operands = (stem, re) => {
  const expr = clean(stem).split(':').pop();
  return expr.split(re).map((p) => (p.replace(/[^0-9.]/g, '').replace(/^\.+|\.+$/g, ''))).filter(Boolean);
};
const digits = (s) => s.replace(/\..*/, '').length;

function whole(stem) {
  const s = clean(stem);
  if (/Roman/i.test(s)) return '1C';
  if (/average/i.test(s)) return '15B';
  if (/expanded|in words|word notation|word number|ordinary numeral|place value/i.test(s)) return '1A';
  if (/Compare|comparison symbol|mathematical statement|Round off|closer to|nearest/i.test(s)) return '1B';
  if (/Translate|Decrease the|Increase the|What is the difference between/.test(s)) return '4H';
  if (/exponential|squared|cubed|\^/.test(s)) return '3A';
  if (/terminology|order of operations|BODMAS|Evaluate the (numerical )?expression|Evaluate:/i.test(s)) return '4H';
  const expr = s.split(':').pop();
  if (/\\times|×/.test(expr)) {
    const ops = operands(s, /\\times|×/);
    const nums = ops.map(Number);
    return (Math.min(...nums) <= 10 && Math.max(...ops.map(digits)) <= 2) ? '4A' : '4C';
  }
  if (/\\div|÷/.test(expr) || /remainder/.test(s)) {
    const ops = operands(s, /\\div|÷/); const [a, b] = ops.map(Number);
    if (/remainder when/.test(s)) return '4E';
    if (b >= 10) return '4E';
    return (/remainder/.test(s) || a % b !== 0) ? '4F' : '4D';
  }
  if (/\+|sum/i.test(expr)) {
    const ops = operands(s, /\+/);
    return (ops.length <= 2 && ops.every((o) => digits(o) <= 2)) ? '2A' : '2B';
  }
  const ops = operands(s, /-/);
  if (ops.some((o) => digits(o) >= 5)) return '2E';
  return ops.every((o) => digits(o) <= 2) ? '2C' : '2D';
}

function decimal(stem) {
  const s = clean(stem);
  if (/Find the percentage of the quantity/.test(s)) return '9C';
  if (/percentage \d+\\?%.*decimal|equivalence row/i.test(s) || /Change the percentage .* to a decimal/.test(s)) return '9B';
  if (/percent|\\%|%/.test(s)) return '9A';
  if (/Order the following/.test(s)) return '8B';
  if (/\bof\b.*\$|\bof\b \d/.test(s) && /Calculate: 0\./.test(s)) return '8G';
  return '8A';
}

function target(q, topicId) {
  if (BYQ[q.id]) return BYQ[q.id];
  if (BYTOPIC[topicId]) return BYTOPIC[topicId];
  const s = clean(q.stem);
  if (topicId === 'y6-wn-1') return whole(s);
  if (topicId === 'y6-rn-2' || topicId === 'y6-rn-3') return decimal(s);
  if (topicId === 'y6-ar-2' || topicId === 'y6-ar-4') return (/-|Decrease|difference|remain/i.test(s.split(':').pop()) ? '8D' : '8C');
  if (topicId === 'y6-mr-2' || topicId === 'y6-mr-3') {
    const e = s.split(':').pop();
    if (/\\div\s*(10|100|1000)\b/.test(e)) return '8F';
    if (/(10|100|1000)\s*\\times|\\times\s*(10|100|1000)\b/.test(e)) return '8E';
    if (/\\div|quotient/.test(e)) return '8H';
    if (/\\times\s*\d*\.\d|\d*\.\d+\s*\\times\s*\d*\.\d/.test(e) || /\^2/.test(e)) return '8I';
    return '8G';
  }
  throw new Error(`no rule for ${q.id} (${topicId})`);
}

const oldFiles = readdirSync(DIR).filter((f) => /^y6-[a-z0-9]+\.json$/.test(f) && !/^y6-\d+\.json$/.test(f));
const placed = new Map(LAYOUT.flatMap(([, , , ts]) => ts.map(([code]) => [code, []])));
const log = [];
for (const f of oldFiles) {
  const d = JSON.parse(readFileSync(join(DIR, f), 'utf8'));
  for (const t of d.topics) for (const q of t.questions || []) {
    const code = target(q, t.topicId);
    if (!placed.has(code)) throw new Error(`${q.id}: bad target ${code}`);
    placed.get(code).push(q);
    log.push(`${t.topicId.padEnd(10)} → ${code.padEnd(4)} ${q.id}  ${clean(q.stem).replace(/\s+/g, ' ').slice(0, 60)}`);
  }
}
if (process.argv.includes('--verbose')) console.log(log.join('\n'));
let total = 0;
for (const [n, title, , topics] of LAYOUT) console.log(`${n}. ${title}: ${topics.map(([c]) => `${c}=${placed.get(c).length}`).join(' ')}`);
for (const qs of placed.values()) total += qs.length;
console.log(`${total} questions`);
if (!APPLY) { console.log('DRY RUN. --verbose lists every placement; --apply writes.'); process.exit(0); }

for (const f of oldFiles) unlinkSync(join(DIR, f));
for (const [n, title, , topics] of LAYOUT) {
  const data = {
    chapterId: `y6-${n}`, title: `Chapter ${n}: ${title}`, year: 'Year 6',
    topics: topics.map(([code, ttl]) => ({ topicId: `y6-${code.toLowerCase()}`, code, title: ttl, questions: placed.get(code) })),
  };
  writeFileSync(join(DIR, `y6-${n}.json`), `${JSON.stringify(data, null, 2)}\n`);
}
console.log('written.');
