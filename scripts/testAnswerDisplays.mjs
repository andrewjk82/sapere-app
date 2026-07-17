/**
 * Answer-display verification: every MC seed, through every surface's logic.
 *
 * Local only — zero Firestore reads. For each of the ~11k multiple-choice
 * seeds (main questions AND sub-questions) this builds the exact Firestore
 * doc chapterSeeder writes, then replays the resolution each surface performs:
 *
 *   A. Question Bank preview / PDF answer key (unshuffled, authored order):
 *      exactly the authored option — and no other — is marked "Correct".
 *   B. Printed answer text (PDF sub-answer box, "Answer:" feedback lines):
 *      resolveCorrectOptionText returns the authored option's text, never a
 *      raw 0-based index.
 *   C. Student quiz (shuffled): the student who picks the authored option is
 *      graded correct and sees it highlighted; an unrelated option is never
 *      highlighted. (Also covered per-seed by audit:mc-seeds; repeated here so
 *      this script alone certifies a surface sweep.)
 *
 * Duplicate/equivalent options (the 615 known data faults) are exempt from
 * "no other option marked" — both copies SHOULD light up; the assertion there
 * is that every marked option reads as the answer.
 *
 * Usage: npm run test:answer-displays
 */
import { CHAPTER_SEED_REGISTRY } from '../src/constants/curriculumSeeds.js';
import { toDisplayText } from '../src/utils/mathPreprocess.js';
import { answersMatch } from '../src/utils/answerMatching.js';
import {
  prepareShuffledMcOptions,
  isDisplayedOptionCorrect,
  gradeMcSelection,
  resolveCorrectOptionIndex,
  resolveCorrectOptionText,
} from '../src/utils/mcOptionShuffle.js';

const optText = (o) => (typeof o === 'object' && o !== null ? o.text : o);

// chapterSeeder's resolution (post-fix: throws on miss, so only >=0 shapes ship)
const seederResolve = (rawOpts, rawCorrect) => {
  let correct = rawCorrect;
  if (rawOpts.length > 0 && (typeof correct === 'number' || (typeof correct === 'string' && /^\d+$/.test(correct)))) {
    const idx = parseInt(correct, 10);
    if (idx >= 0 && idx < rawOpts.length) correct = optText(rawOpts[idx]);
  }
  return rawOpts.findIndex((o) => String(optText(o)).trim() === String(correct).trim());
};

// The doc chapterSeeder writes (authored order, index answer, isManual).
const toFirestoreDoc = (rawOpts, authoredIdx) => ({
  type: 'multiple_choice',
  isManual: true,
  options: rawOpts.map((o) => (typeof o === 'object' && o !== null
    ? { text: String(o.text || ''), imageUrl: o.imageUrl || '' }
    : { text: String(o), imageUrl: '' })),
  answer: String(authoredIdx),
});

let checked = 0;
let skippedBroken = 0;
const failures = [];
const fail = (id, surface, why) => failures.push({ id, surface, why });

let rngState = 424242;
const rng = () => { rngState = (rngState * 1664525 + 1013904223) >>> 0; return rngState / 0x100000000; };

const checkOne = (raw, id) => {
  if (raw?.type !== 'multiple_choice') return;
  const rawOpts = raw.opts || raw.options || [];
  if (!rawOpts.length) return;

  const authoredIdx = seederResolve(rawOpts, raw.a ?? raw.answer ?? raw.solution);
  const authoredText = authoredIdx >= 0 ? optText(rawOpts[authoredIdx]) : null;
  if (authoredIdx < 0 || !answersMatch(authoredText, authoredText)) {
    skippedBroken += 1; // known-broken data, gated out of Firestore by the seeder
    return;
  }
  checked += 1;

  const doc = toFirestoreDoc(rawOpts, authoredIdx);
  const displayTexts = doc.options.map((o) => toDisplayText(o).trim());
  const authoredDisplay = displayTexts[authoredIdx];
  const isEquivToAnswer = (i) => displayTexts[i] === authoredDisplay
    || answersMatch(displayTexts[i], authoredDisplay);

  // ── A. Bank preview / PDF answer key (unshuffled) ──
  const bankIdx = resolveCorrectOptionIndex(doc, doc.options);
  if (bankIdx !== authoredIdx) {
    fail(id, 'bank/pdf', `marked option ${bankIdx} (${JSON.stringify(displayTexts[bankIdx] ?? null)}) instead of authored ${authoredIdx} (${JSON.stringify(authoredDisplay)})`);
    return;
  }

  // ── B. Printed answer text ──
  // Must be derived from the authored option. Compare against the same
  // pipeline applied to that option directly — NOT a re-normalised form:
  // toDisplayText is not idempotent on double-escaped seed text (`\\text{ and }`
  // gains a nested-but-valid `\text{ \text{ and } }`; KaTeX renders both
  // identically, verified), so string-comparing across a second pass fails on
  // cosmetics, not correctness.
  const printed = resolveCorrectOptionText(doc);
  if (printed !== toDisplayText(doc.options[authoredIdx])) {
    fail(id, 'answer-text', `prints ${JSON.stringify(printed)}, not the authored option ${JSON.stringify(authoredText)}`);
    return;
  }
  // Never the raw index — unless that number genuinely IS the option's text.
  if (String(printed).trim() === String(authoredIdx) && !answersMatch(authoredText, String(authoredIdx))) {
    fail(id, 'answer-text', `prints the raw index "${printed}"`);
    return;
  }

  // ── C. Student quiz (shuffled) ──
  const display = prepareShuffledMcOptions(doc, { rng });
  const pickIdx = display.findIndex((o) => toDisplayText(o).trim() === authoredDisplay);
  if (pickIdx < 0) { fail(id, 'quiz', 'authored option missing after shuffle'); return; }
  if (!gradeMcSelection(doc, optText(display[pickIdx]), pickIdx, display)) {
    fail(id, 'quiz', 'student picked the authored option and was graded WRONG');
    return;
  }
  if (!isDisplayedOptionCorrect(doc, display, pickIdx)) {
    fail(id, 'quiz', 'authored option not highlighted after shuffle');
    return;
  }
  for (let i = 0; i < display.length; i++) {
    const green = isDisplayedOptionCorrect(doc, display, i);
    const t = toDisplayText(display[i]).trim();
    const equiv = t === authoredDisplay || answersMatch(t, authoredDisplay);
    if (green && !equiv) {
      fail(id, 'quiz', `unrelated option ${JSON.stringify(t)} highlighted (answer ${JSON.stringify(authoredDisplay)})`);
      return;
    }
    // grade must agree with highlight on every option
    if (gradeMcSelection(doc, optText(display[i]), i, display) !== green) {
      fail(id, 'quiz', `grade/highlight disagree on option ${i}`);
      return;
    }
  }
};

for (const entry of CHAPTER_SEED_REGISTRY) {
  if (!Array.isArray(entry?.seed)) continue;
  entry.seed.forEach((raw, i) => {
    const id = raw?.id || `${entry.topicId}#${i}`;
    checkOne(raw, id);
    (raw?.subQuestions || []).forEach((sq, si) => checkOne(sq, `${id}.sub[${si}]`));
  });
}

console.log('\nAnswer-display sweep (local only — zero Firestore reads)\n');
console.log(`  seeds checked : ${checked} (main + sub-question MCQs)`);
console.log(`  known-broken  : ${skippedBroken} (gated out of Firestore by the seeder — never shown)`);

if (failures.length === 0) {
  console.log('\n  ok  bank preview & PDF answer key mark exactly the authored option');
  console.log('  ok  every printed "Answer:" is the option text, never a raw index');
  console.log('  ok  after shuffle: authored pick grades correct, highlight agrees,');
  console.log('      and no unrelated option is ever marked\n');
  process.exit(0);
}
failures.slice(0, 20).forEach((f) => console.error(`  ✗ [${f.surface}] ${f.id}: ${f.why}`));
if (failures.length > 20) console.error(`  … and ${failures.length - 20} more`);
console.error(`\n${failures.length} failure(s).\n`);
process.exit(1);
