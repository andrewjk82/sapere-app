/**
 * Local audit + fix verification (zero Firestore reads): which MC
 * sub-questions have a digit-shaped correct index that ALSO matches an
 * option's literal text via answersMatch — the exact ambiguity
 * isOptionIndexAnswer() rejects unless `isManual: true` is set. chapterSeeder
 * never stamped isManual on sub-questions (only on the parent doc), so
 * mcOptionShuffle's resolver fell back to a literal text comparison against
 * the raw index digit, which matches nothing — the sub was silently
 * ungradeable (e.g. y12a-5c-q14d: correct option text "(-1,-e^{-2})" at
 * index 0, but ANOTHER option in the same list literally reads "(0,0)",
 * which answersMatch("(0,0)", "0") treats as colliding with the digit "0").
 *
 * chapterSeeder.js now stamps `isManual: true` on every mapped sub-question
 * (2026-07-18) — this script proves that fixes every case found here, using
 * the real shared resolver (resolveCorrectOptionIndex / gradeMcSelection),
 * not a re-implementation of the fix.
 *
 * Imports every src/constants/seed*.js file individually (not the aggregated
 * curriculumSeeds.js registry) so one broken in-progress seed file elsewhere
 * doesn't block this audit; a file that fails to import is reported and
 * skipped, never silently dropped.
 *
 * Usage: npm run audit:sub-mc-ambiguity
 *        (writes tools/audit-state/sub-mc-ambiguity.json — parent ids feed
 *         the live-doc patch script)
 */
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { answersMatch } from '../src/utils/answerMatching.js';
import { resolveCorrectOptionIndex, gradeMcSelection } from '../src/utils/mcOptionShuffle.js';

const optText = (o) => (typeof o === 'object' && o !== null ? o.text : o);

const resolveSeedCorrectIndex = (rawOpts, rawCorrect) => {
  let correct = rawCorrect;
  if (rawOpts.length > 0 && (typeof correct === 'number' || (typeof correct === 'string' && /^\d+$/.test(String(correct).trim())))) {
    const idx = parseInt(correct, 10);
    if (idx >= 0 && idx < rawOpts.length) correct = optText(rawOpts[idx]);
  }
  return rawOpts.findIndex((o) => String(optText(o)).trim() === String(correct).trim());
};

const files = readdirSync(new URL('../src/constants/', import.meta.url))
  .filter((f) => f.startsWith('seed') && f.endsWith('.js'));

let totalMcSubs = 0;
const affected = [];
const failedImports = [];

for (const file of files) {
  let mod;
  try {
    mod = await import(`../src/constants/${file}`);
  } catch (e) {
    failedImports.push({ file, error: e.message.split('\n')[0] });
    continue;
  }
  for (const value of Object.values(mod)) {
    if (!Array.isArray(value)) continue;
    for (const q of value) {
      if (!q || !Array.isArray(q.subQuestions)) continue;
      for (const sq of q.subQuestions) {
        if (sq.type !== 'multiple_choice') continue;
        const rawOpts = sq.opts || sq.options || [];
        if (!rawOpts.length) continue;
        totalMcSubs += 1;
        const idx = resolveSeedCorrectIndex(rawOpts, sq.a ?? sq.answer ?? sq.solution);
        if (idx < 0) continue; // reported separately by the answer-key audits
        const digitStr = String(idx);
        const collision = rawOpts.some((o) => answersMatch(String(optText(o)).trim(), digitStr));
        if (collision) {
          affected.push({
            file, parentId: q.id, subId: sq.id,
            correctIndex: idx,
            correctText: optText(rawOpts[idx]),
            options: rawOpts.map(optText),
          });
        }
      }
    }
  }
}

console.log(`\nSub-question MC isManual-ambiguity audit — ${files.length} seed files\n`);
if (failedImports.length) {
  console.log(`⚠ ${failedImports.length} file(s) failed to import (skipped, not silently dropped):`);
  failedImports.forEach((f) => console.log(`   ${f.file}: ${f.error}`));
  console.log('');
}
console.log(`MC sub-questions scanned: ${totalMcSubs}`);
console.log(`Affected (ambiguous without isManual): ${affected.length}\n`);
affected.forEach((a) => console.log(
  `  ${a.subId} (parent ${a.parentId}) [${a.file}] idx=${a.correctIndex} text=${JSON.stringify(a.correctText)}\n    opts=${JSON.stringify(a.options)}`,
));

// ── Fix verification ────────────────────────────────────────────────────────
// Simulate the FIXED chapterSeeder write (isManual: true) for every affected
// sub and re-check with the real shared resolver: the correct option must
// resolve and grade correct, and — not just "always true" — a wrong pick must
// still grade wrong.
let simPassed = 0;
const simFailed = [];
for (const a of affected) {
  const options = a.options.map((text) => ({ text, imageUrl: '' }));
  const doc = { type: 'multiple_choice', isManual: true, answer: String(a.correctIndex), options };
  const resolvedIdx = resolveCorrectOptionIndex(doc, options);
  const gradesCorrect = gradeMcSelection(doc, a.correctText, null, options);
  const wrongIdx = options.findIndex((_, i) => i !== a.correctIndex);
  const gradesWrongAsWrong = wrongIdx < 0 || !gradeMcSelection(doc, options[wrongIdx].text, null, options);
  if (resolvedIdx === a.correctIndex && gradesCorrect && gradesWrongAsWrong) simPassed += 1;
  else simFailed.push({ ...a, resolvedIdx, gradesCorrect, gradesWrongAsWrong });
}

console.log(`\n── Fix verification (isManual: true, real resolveCorrectOptionIndex/gradeMcSelection)`);
console.log(`  ${simPassed}/${affected.length} now resolve and grade correctly`);
if (simFailed.length) {
  console.error(`  ✗ ${simFailed.length} still broken after the fix:`);
  simFailed.forEach((f) => console.error(`     ${f.subId}: ${JSON.stringify(f)}`));
}

mkdirSync('tools/audit-state', { recursive: true });
const reportPath = 'tools/audit-state/sub-mc-ambiguity.json';
writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), totalMcSubs, affected }, null, 2));
console.log(`\nFull report (parent ids for the live-doc patch): ${reportPath}\n`);

process.exit(failedImports.length > 0 || simFailed.length > 0 ? 1 : 0);
