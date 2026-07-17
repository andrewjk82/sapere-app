/**
 * Audit: MC answer keys that DISAGREE with their own worked solution.
 *
 * Local only — zero Firestore reads.
 *
 * Why this exists
 * ───────────────
 * audit:mc-seeds validates that the answer key RESOLVES to an option. It
 * cannot tell whether that option is mathematically right. Two real student
 * reports (2026-07-17) exposed keys that resolve cleanly but are wrong:
 *
 *   y11a-7d-q6a   a:"3" meant the VALUE 3 (the gradient), but digits-in-range
 *                 read as an INDEX → options[3]="2" became the official answer.
 *   3980466a…     answer:"0" (3/4) while the solution ends "= \frac{1}{2}".
 *
 * The only ground truth in the data is the worked solution. This audit
 * extracts the final value from the last solution step / solution string and
 * checks which option it matches:
 *
 *   MISMATCH  — solution's final value matches exactly ONE option and it is
 *               NOT the keyed one. High confidence the key is wrong; the
 *               report includes the suggested index. Fix the seed, then let
 *               the seeder re-sync (or patch the live doc).
 *   UNCLEAR   — the final value matched no option, or several. Human review.
 *
 * This is a REPORTING tool. It never edits anything — a wrong "fix" is the
 * exact failure class it exists to catch, so corrections stay human-reviewed.
 *
 * Usage: npm run audit:mc-key-vs-solution
 *        (writes tools/audit-state/mc-key-vs-solution.json for the fixing
 *         workflow, prints a summary)
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { CHAPTER_SEED_REGISTRY } from '../src/constants/curriculumSeeds.js';
import { answersMatch } from '../src/utils/answerMatching.js';
import { toDisplayText } from '../src/utils/mathPreprocess.js';

const optText = (o) => (typeof o === 'object' && o !== null ? o.text : o);

/** chapterSeeder's resolution: digits-in-range → index, else exact text. */
const resolveKeyedIndex = (opts, raw) => {
  let c = raw;
  if (typeof c === 'number' || (typeof c === 'string' && /^\d+$/.test(String(c).trim()))) {
    const i = parseInt(c, 10);
    if (i >= 0 && i < opts.length) c = optText(opts[i]);
  }
  return opts.findIndex((o) => String(optText(o)).trim() === String(c).trim());
};

/** Normalise a fragment for comparison: strip delimiters, unify minus signs. */
const clean = (s) => String(s || '')
  .replace(/\\[()[\]]/g, ' ')
  .replace(/[−–—]/g, '-')
  .replace(/\\[,;!]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

/**
 * Final-value candidates from the solution: the segment after the LAST
 * = / ⇒ / \implies / \approx in the last workingOut, and in `s`/`solution`.
 */
const finalCandidates = (q) => {
  const sources = [];
  const steps = Array.isArray(q.solutionSteps) ? q.solutionSteps : [];
  for (let i = steps.length - 1; i >= 0; i--) {
    const w = String(steps[i]?.workingOut || '').trim();
    if (w) { sources.push(w); break; }
  }
  if (q.s || q.solution) sources.push(String(q.s || q.solution));

  const out = [];
  for (const src of sources) {
    const norm = clean(src)
      .replace(/\\Rightarrow|\\implies|\\approx|\\therefore/g, '=');
    const parts = norm.split('=').map((p) => p.trim()).filter(Boolean);
    if (parts.length >= 2) out.push(parts[parts.length - 1]);
    else if (parts.length === 1) out.push(parts[0]);
  }
  return [...new Set(out)].filter((c) => c.length > 0 && c.length < 120);
};

const mismatches = [];
const unclear = [];
let checked = 0;

const auditOne = (q, entry, path) => {
  if (q?.type !== 'multiple_choice') return;
  const opts = q.opts || q.options || [];
  if (opts.length < 2) return;
  const raw = q.a ?? q.answer ?? q.solution;
  const keyedIdx = resolveKeyedIndex(opts, raw);
  if (keyedIdx < 0) return; // audit:mc-seeds already reports these as broken
  checked += 1;

  const candidates = finalCandidates(q);
  if (candidates.length === 0) return;

  const optClean = opts.map((o) => clean(toDisplayText(optText(o))));
  const keyedMatches = candidates.some((c) => answersMatch(c, optClean[keyedIdx]) || c === optClean[keyedIdx]);
  if (keyedMatches) return; // key agrees with the solution — done

  // Which other options does the final value match?
  const hits = new Set();
  opts.forEach((o, i) => {
    if (i === keyedIdx) return;
    if (candidates.some((c) => answersMatch(c, optClean[i]) || c === optClean[i])) hits.add(i);
  });

  const row = {
    id: q.id || path,
    topicId: entry.topicId,
    a: raw,
    keyedIndex: keyedIdx,
    keyedOption: optText(opts[keyedIdx]),
    solutionFinal: candidates,
    options: opts.map(optText),
  };
  if (hits.size === 1) {
    mismatches.push({ ...row, suggestedIndex: [...hits][0], suggestedOption: optText(opts[[...hits][0]]) });
  } else {
    unclear.push({ ...row, otherMatches: [...hits] });
  }
};

for (const entry of CHAPTER_SEED_REGISTRY) {
  if (!Array.isArray(entry?.seed)) continue;
  entry.seed.forEach((q, i) => {
    auditOne(q, entry, `${entry.topicId}#${i}`);
    (q?.subQuestions || []).forEach((sq, si) => auditOne(sq, entry, `${entry.topicId}#${i}.sub[${si}]`));
  });
}

console.log(`\nMC key vs solution audit — ${checked} MC seeds cross-checked (local, zero Firestore reads)\n`);
console.log(`── MISMATCH (solution matches exactly one OTHER option): ${mismatches.length}`);
mismatches.slice(0, 20).forEach((r) => console.log(
  `   ${r.id} [${r.topicId}] keyed #${r.keyedIndex}=${JSON.stringify(r.keyedOption)} → solution says #${r.suggestedIndex}=${JSON.stringify(r.suggestedOption)}`,
));
if (mismatches.length > 20) console.log(`   … and ${mismatches.length - 20} more`);
console.log(`\n── UNCLEAR (solution final matched none/several — human review): ${unclear.length}`);
unclear.slice(0, 8).forEach((r) => console.log(`   ${r.id} [${r.topicId}] keyed=${JSON.stringify(r.keyedOption)} final=${JSON.stringify(r.solutionFinal)}`));
if (unclear.length > 8) console.log(`   … and ${unclear.length - 8} more`);

mkdirSync('tools/audit-state', { recursive: true });
const reportPath = 'tools/audit-state/mc-key-vs-solution.json';
writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), checked, mismatches, unclear }, null, 2));
console.log(`\nFull report: ${reportPath}\n`);
process.exit(0);
