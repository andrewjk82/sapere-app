// One-off: apply the 2026-09-14 human/AI adjudication of the 97 KEY-CONFLICT review items.
import fs from 'node:fs'; import path from 'node:path';
const FIX = { // id → correct option index (verified by solving each question)
  'asc2020-mc10': 2,      // sin(b/2)=1 → b=π
  'asc2020-mc4v': 0,      // Q3+1.5·IQR = 27+18 = 45
  'dane2020-q21a': 3,     // f'=4x²(3−x): (0,0) HPOI, (3,27) max
  'dane2020s-q21a': 3,    // f'=12x²(2−x): (0,0) HPOI, (2,16) max
  'y11e1-4c-q2a': 3,      // Δ=4, rational
  'y11e1-4c-q2b': 2,      // Δ=40, irrational
  'y11e1-4c-q2c': 1,      // Δ=−16
  'y11e1-4c-q2e': 1,      // Δ=−3
  'y11e1-4c-q2f': 0,      // Δ=361=19², rational
  'y11e1-4c-q3c': 2,      // k=−2/3
  'y11e1-4c-q3d': 1,      // k=11
  'y10-14e-q1e': 0,       // log₂(1/16)=−4
  'y10-14e-q1f': 0,       // log₅(1/125)=−3
  'y10-14e-q1h': 0,       // log₁₀(0.01)=−2
  'y11a-5-14a': 2,        // y=3x+2
  'y7-4i-q1a': 3,         // 6÷(2/5)=15
  'y7-4i-q1g': 3,         // 9÷(3/4)=12
  'y7-4i-q1h': 3,         // 12÷(4/5)=15
};
const TEXT = { // id → (q) => mutate solution/option text that contradicted the (correct) key
  'y11e1-4c-q2b': (q) => { q.options[1] = '40, two rational roots'; },                         // was a typo-duplicate of the answer
  'y9-8a-12b': (q) => { q.solution = q.solution.replace('is \\(0\\)', 'is \\(2\\)'); },        // 2b⁰ = 2
  'y9-8a-12c': (q) => { q.solution = q.solution.replace('is \\(7\\)', 'is \\(1\\)'); },        // (7n)⁰ = 1
  'asc2020-mc8': (q) => { const s = q.steps?.at(-1); if (s?.work?.includes('1.3686')) s.work = s.work.replace('\\times 1.3686', '\\div 1.1717'); },
};
const UNRESOLVED = ['y10-2g-q10']; // leaning-square geometry: needs the diagram; solution text and last step disagree (4√2+7 vs 3√2)

const log = [];
for (const f of fs.readdirSync('content/chapters')) {
  const p = path.join('content/chapters', f); const ch = JSON.parse(fs.readFileSync(p, 'utf8')); let touched = false;
  for (const t of ch.topics) for (const q of t.questions) {
    if (q.id in FIX && q.answer !== FIX[q.id]) { log.push(`${q.id}: answer ${q.answer} → ${FIX[q.id]}`); q.answer = FIX[q.id]; touched = true; }
    if (q.id in TEXT) { const before = JSON.stringify(q); TEXT[q.id](q); if (JSON.stringify(q) !== before) { log.push(`${q.id}: text fixed`); touched = true; } }
  }
  if (touched) fs.writeFileSync(p, JSON.stringify(ch, null, 2));
}
// review queue: mark resolved
const rq = JSON.parse(fs.readFileSync('content/_export/review-queue.json', 'utf8'));
for (const r of rq) if (r.severity === 'KEY-CONFLICT') { r.resolved = UNRESOLVED.includes(r.id) ? false : (r.id in FIX ? 'seed-was-right' : 'firestore-was-right'); r.resolvedAt = '2026-09-14'; }
fs.writeFileSync('content/_export/review-queue.json', JSON.stringify(rq, null, 1));
console.log(log.join('\n')); console.log(`\n${log.length} edits; unresolved: ${UNRESOLVED}`);
