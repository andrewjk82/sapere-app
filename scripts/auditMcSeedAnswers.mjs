/**
 * Audit: which seeded MC questions get a WRONG answer written to Firestore.
 *
 * Runs 100% locally against src/constants — zero Firestore reads.
 *
 * What it looks for
 * ─────────────────
 * chapterSeeder.js resolves the seed's correct option by EXACT string match:
 *
 *   const correctIndex = shuffled.findIndex((opt) => String(text).trim() === String(correct).trim());
 *   answer = String(correctIndex >= 0 ? correctIndex : 0);   // ← silent fallback
 *
 * When that match fails (e.g. `a: "255.00"` against an option rendered
 * `"\(255.00\)"`), the seeder does not fail — it writes `answer: "0"`, which
 * declares the FIRST option correct. The student who picks the real answer is
 * marked wrong and the wrong option lights up green. This finds every seed
 * where that happens, plus the two lesser data faults.
 *
 * Usage: npm run audit:mc-seeds
 */
import { CHAPTER_SEED_REGISTRY } from '../src/constants/curriculumSeeds.js';
import { toDisplayText } from '../src/utils/mathPreprocess.js';
import { answersMatch } from '../src/utils/answerMatching.js';
import {
  prepareShuffledMcOptions,
  isDisplayedOptionCorrect,
  gradeMcSelection,
} from '../src/utils/mcOptionShuffle.js';

const optText = (opt) => (typeof opt === 'object' && opt !== null ? opt.text : opt);

/** Mirrors chapterSeeder.resolveSeedCorrectIndex — text match first, then index. */
const seederWouldResolve = (rawOpts, rawCorrect) => {
  if (rawCorrect === undefined || rawCorrect === null) {
    return { correctIndex: -1, resolvedCorrect: rawCorrect };
  }
  const s = String(rawCorrect).trim();
  const exact = rawOpts.findIndex((opt) => String(optText(opt)).trim() === s);
  if (exact >= 0) {
    return { correctIndex: exact, resolvedCorrect: optText(rawOpts[exact]) };
  }
  if (/^\d+$/.test(s) || typeof rawCorrect === 'number') {
    const idx = parseInt(s, 10);
    if (Number.isInteger(idx) && idx >= 0 && idx < rawOpts.length) {
      return { correctIndex: idx, resolvedCorrect: optText(rawOpts[idx]) };
    }
  }
  return { correctIndex: -1, resolvedCorrect: rawCorrect };
};

const findings = { wrongAnswer: [], ungradeable: [], duplicate: [], ambiguous: [] };
let totalMc = 0;

const auditOne = (raw, entry, path) => {
  if (raw?.type !== 'multiple_choice') return;
  const rawOpts = raw.opts || raw.options || [];
  if (!rawOpts.length) return;
  totalMc += 1;

  const rawCorrect = raw.a ?? raw.answer ?? raw.solution;
  const where = {
    topicId: entry.topicId,
    label: entry.label || entry.topicTitle || entry.topicId,
    id: raw.id || '(no id)',
    path,
    answer: rawCorrect,
    options: rawOpts.map(optText),
  };

  // 1. Seeder silently writes answer "0" — the wrong option becomes correct.
  const { correctIndex, resolvedCorrect } = seederWouldResolve(rawOpts, rawCorrect);
  if (correctIndex < 0) {
    findings.wrongAnswer.push({ ...where, resolvedCorrect });
    return; // this question's answer is already meaningless; don't double-report
  }

  // 2. The correct option is ungradeable — empty text, or math that strips to
  //    nothing (`\(\)`). Nothing a student picks can ever match it.
  const correctText = optText(rawOpts[correctIndex]);
  if (!answersMatch(correctText, correctText)) {
    findings.ungradeable.push({ ...where, resolvedCorrect: correctText });
    return;
  }

  // 3. Duplicate / equivalent options — both light up green. Broken data, but
  //    the student is not punished for it.
  const texts = rawOpts.map((o) => toDisplayText(optText(o)).trim());
  const dupes = texts.filter((t, i) => texts.indexOf(t) !== i);
  const equivalent = [];
  for (let i = 0; i < rawOpts.length; i++) {
    for (let j = i + 1; j < rawOpts.length; j++) {
      if (texts[i] !== texts[j] && answersMatch(texts[i], texts[j])) equivalent.push([texts[i], texts[j]]);
    }
  }
  if (dupes.length || equivalent.length) {
    findings.duplicate.push({ ...where, dupes: [...new Set(dupes)], equivalent });
  }

  // 4. Numeric index answer that ALSO reads as an option value. Seeds are
  //    written with `isManual: true`, so the helper's isManual branch reads it
  //    as an index — matching the seeder. Correct today, but the data is
  //    ambiguous on its face and only one flag stands between it and a
  //    silently wrong answer.
  const isIndexShaped = typeof rawCorrect === 'number'
    || (typeof rawCorrect === 'string' && /^\d+$/.test(rawCorrect.trim()));
  if (isIndexShaped) {
    const n = String(rawCorrect).trim();
    if (rawOpts.some((o) => answersMatch(toDisplayText(optText(o)), n))) {
      findings.ambiguous.push({ ...where, resolvedCorrect });
    }
  }
};

for (const entry of CHAPTER_SEED_REGISTRY) {
  if (!entry || !Array.isArray(entry.seed)) continue;
  entry.seed.forEach((raw, idx) => {
    auditOne(raw, entry, `#${idx}`);
    if (Array.isArray(raw?.subQuestions)) {
      raw.subQuestions.forEach((sq, si) => auditOne(sq, entry, `#${idx}.sub[${si}]`));
    }
  });
}

const show = (title, rows, render, limit = 12) => {
  console.log(`\n── ${title}: ${rows.length}`);
  rows.slice(0, limit).forEach((r) => console.log(render(r)));
  if (rows.length > limit) console.log(`   … and ${rows.length - limit} more`);
};

console.log(`\nMC seed answer audit — ${totalMc} multiple-choice seeds across ${CHAPTER_SEED_REGISTRY.length} topics`);
console.log('(local only — zero Firestore reads)');

show(
  'BROKEN — seeder writes answer "0", wrong option becomes correct',
  findings.wrongAnswer,
  (r) => `   ${r.id} [${r.topicId}] ${r.path}\n      a=${JSON.stringify(r.answer)} resolved=${JSON.stringify(r.resolvedCorrect)}\n      opts=${JSON.stringify(r.options)}`,
);
show(
  'BROKEN — correct option is empty/ungradeable, no answer can match',
  findings.ungradeable,
  (r) => `   ${r.id} [${r.topicId}] ${r.path} a=${JSON.stringify(r.answer)} correct=${JSON.stringify(r.resolvedCorrect)}\n      opts=${JSON.stringify(r.options)}`,
);
show(
  'Duplicate / equivalent options — two greens, student not punished',
  findings.duplicate,
  (r) => `   ${r.id} [${r.topicId}] dupes=${JSON.stringify(r.dupes)}${r.equivalent.length ? ` equivalent=${JSON.stringify(r.equivalent)}` : ''}`,
);
show(
  'Ambiguous numeric index answer (correct today via isManual)',
  findings.ambiguous,
  (r) => `   ${r.id} [${r.topicId}] a=${JSON.stringify(r.answer)} → ${JSON.stringify(r.resolvedCorrect)} opts=${JSON.stringify(r.options)}`,
);

console.log(`\nSummary: ${findings.wrongAnswer.length + findings.ungradeable.length} broken (${findings.wrongAnswer.length} wrong-answer + ${findings.ungradeable.length} ungradeable), ${findings.duplicate.length} duplicate-option, ${findings.ambiguous.length} ambiguous`);

// ── End-to-end simulation ──────────────────────────────────────────────────
// The audit above judges the DATA. This judges the CODE, on that same real
// data: seed → chapterSeeder mapping → display shuffle → student picks the
// option the author marked correct. That student must be graded correct, and
// the option they picked must be the one that lights up green. Every seed the
// audit did not call broken has to pass.
const simulate = () => {
  const failures = [];
  let checked = 0;

  const rng = (() => { let s = 12345; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0x100000000; }; })();

  for (const entry of CHAPTER_SEED_REGISTRY) {
    for (const raw of entry.seed || []) {
      if (raw?.type !== 'multiple_choice') continue;
      const rawOpts = raw.opts || raw.options || [];
      if (!rawOpts.length) continue;

      const { correctIndex } = seederWouldResolve(rawOpts, raw.a ?? raw.answer ?? raw.solution);
      if (correctIndex < 0) continue; // already reported as broken data
      const cText = optText(rawOpts[correctIndex]);
      if (!answersMatch(cText, cText)) continue; // ungradeable option — reported above

      // What chapterSeeder now writes to Firestore.
      const doc = {
        type: 'multiple_choice',
        isManual: true,
        options: rawOpts.map((o) => (typeof o === 'object' && o !== null
          ? { text: String(o.text || ''), imageUrl: o.imageUrl || '' }
          : { text: String(o), imageUrl: '' })),
        answer: String(correctIndex),
      };
      const authoredCorrectText = toDisplayText(doc.options[correctIndex]);

      // What the quiz screens now do.
      const display = prepareShuffledMcOptions(doc, { rng });
      checked += 1;

      const pickIdx = display.findIndex((o) => toDisplayText(o) === authoredCorrectText);
      if (pickIdx < 0) {
        failures.push({ id: raw.id, why: 'author-correct option vanished from the shuffled list' });
        continue;
      }
      const pickText = toDisplayText(display[pickIdx]);

      if (!gradeMcSelection(doc, pickText, pickIdx, display)) {
        failures.push({ id: raw.id, why: `student picked the correct option (${JSON.stringify(pickText)}) and was marked WRONG` });
        continue;
      }
      if (!isDisplayedOptionCorrect(doc, display, pickIdx)) {
        failures.push({ id: raw.id, why: 'correct option did not light up green' });
        continue;
      }
      // Any option marked green must actually read as the answer. Duplicate /
      // equivalent options legitimately produce more than one green.
      for (let i = 0; i < display.length; i++) {
        if (!isDisplayedOptionCorrect(doc, display, i)) continue;
        const t = toDisplayText(display[i]);
        if (!answersMatch(t, authoredCorrectText)) {
          failures.push({ id: raw.id, why: `unrelated option ${JSON.stringify(t)} lit up green (answer is ${JSON.stringify(authoredCorrectText)})` });
          break;
        }
      }
    }
  }
  return { failures, checked };
};

const { failures, checked } = simulate();
console.log(`\n── End-to-end simulation: ${checked} seeds through seeder → shuffle → grade`);
if (failures.length === 0) {
  console.log('   ok  every student who picks the authored answer is graded correct,');
  console.log('       and no unrelated option ever lights up green.\n');
} else {
  failures.slice(0, 15).forEach((f) => console.error(`   ✗ ${f.id}: ${f.why}`));
  if (failures.length > 15) console.error(`   … and ${failures.length - 15} more`);
  console.error(`\n   ${failures.length} simulation failure(s).\n`);
}

process.exit(findings.wrongAnswer.length > 0 || findings.ungradeable.length > 0 || failures.length > 0 ? 1 : 0);
