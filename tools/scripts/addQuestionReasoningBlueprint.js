#!/usr/bin/env node
/**
 * Push question-specific reasoning_blueprint fields onto real FIN-GP-01
 * questions (Sapere_Question_DNA_v2.0 §3-4 pilot — see
 * src/components/hsc/QuestionReasoningSteps.jsx). Additive merge on one
 * field per doc; never touches answer/options/type.
 *
 * Content-only edit to `questions` docs (tools/scripts/CLAUDE.md) — after
 * writing, touches each affected chapter's question_index so
 * chapterQuestionsCache.js doesn't keep serving a stale cached copy.
 *
 * Scope: only the "future value of an annuity, factor given" questions —
 * same reasoning shape as the pilot (rate → periods → factor arithmetic).
 * Deliberately SKIPPED from this pass, not silently forced into the pattern:
 *   - bbhs2020-30a/b/c: tagged FIN-GP-01 but are actually an arithmetic
 *     (AP) rose-garden problem, not geometric — looks like a
 *     classification-pipeline mistake (topic_label-based, not manually
 *     reviewed; see tools/dna/output/questions_classified.json). Needs a
 *     dnaId fix, not a reasoning_blueprint that would assert "this is a GP".
 *   - asc2020-q30-a/b/c/d, asc2020-q30v: multi-part recurrence/extinction-
 *     year problems (drop-bears / fish population) — a different reasoning
 *     shape (recurrence, log-solve) that deserves its own bespoke blueprint,
 *     not this compute-and-select pattern. Left for a future pass.
 *
 * Usage:
 *   node tools/scripts/addQuestionReasoningBlueprint.js
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { touchChapterIndex } from './_lib/touchChapterIndex.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const POSSIBLE_KEY_PATHS = [
  join(__dirname, '../../serviceAccountKey.json'),
  join(__dirname, '../../firebase-service-account.json'),
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
].filter(Boolean);

let app;
for (const keyPath of POSSIBLE_KEY_PATHS) {
  try {
    if (!existsSync(keyPath)) continue;
    const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
    app = initializeApp({ credential: cert(serviceAccount) });
    console.log(`Using service account: ${keyPath}`);
    break;
  } catch { /* try next */ }
}
if (!app) {
  console.error('ERROR: No Firebase service account key found.');
  process.exit(1);
}
const db = getFirestore(app);

const rateStep = (id, pct, hints, explanation) => ({
  step_id: id, objective: 'Identify the interest rate per compounding period.',
  axis: 'execution', interaction_type: 'complete', expected_response: String(pct), tolerance: 0.01,
  hints, explanation,
});

const periodsStep = (id, n, hints, explanation) => ({
  step_id: id, objective: 'Identify the number of compounding periods.',
  axis: 'execution', interaction_type: 'complete', expected_response: String(n), tolerance: 0,
  hints, explanation,
});

const QUESTIONS = [
  {
    // Jenna — already live (2026-08-15), kept here so a re-run stays idempotent.
    id: 'bar2020-q14ai',
    reasoning_blueprint: [
      rateStep('S1', 4.5,
        ['Interest is compounded every six months, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $9\\% \\div 2 = 4.5\\%$.'),
      periodsStep('S2', 6,
        ['Jenna contributes every six months for 3 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $3 \\times 2 = 6$ six-monthly periods.'),
      {
        step_id: 'S3', objective: 'Use the given factor to find the total future value.',
        axis: 'execution', interaction_type: 'complete', compute: 'multiply', params: { a: 500, b: 6.7169 }, tolerance: 0.5,
        hints: ['Multiply the regular contribution by the factor given in the question.', '$500 \\times 6.7169$'],
        explanation: 'Total future value $= 500 \\times 6.7169 = \\$3358.45$ — select this from the options next.',
      },
    ],
  },
  {
    // Marcus — same shape as Jenna, different numbers.
    id: 'bar2020-q14aiv',
    reasoning_blueprint: [
      rateStep('S1', 4.5,
        ['Interest is compounded every six months, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $9\\% \\div 2 = 4.5\\%$.'),
      periodsStep('S2', 4,
        ['Marcus contributes every six months for 2 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $2 \\times 2 = 4$ six-monthly periods.'),
      {
        step_id: 'S3', objective: 'Use the given factor to find the total future value.',
        axis: 'execution', interaction_type: 'complete', compute: 'multiply', params: { a: 400, b: 4.2782 }, tolerance: 0.5,
        hints: ['Multiply the regular contribution by the factor given in the question.', '$400 \\times 4.2782$'],
        explanation: 'Total future value $= 400 \\times 4.2782 = \\$1711.28$ — select this from the options next.',
      },
    ],
  },
  {
    // Dane 2020 — contributions given, factor given, straight FV calc.
    id: 'dane2020-q34a',
    reasoning_blueprint: [
      rateStep('S1', 2,
        ['The compounding period is half-yearly, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $4\\% \\div 2 = 2\\%$.'),
      periodsStep('S2', 6,
        ['Contributions are made every half-year for 3 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $3 \\times 2 = 6$ half-yearly periods.'),
      {
        step_id: 'S3', objective: 'Use the given factor to find the total future value.',
        axis: 'execution', interaction_type: 'complete', compute: 'multiply', params: { a: 1200, b: 6.3081 }, tolerance: 0.5,
        hints: ['Multiply the regular contribution by the factor given in the question.', '$1200 \\times 6.3081$'],
        explanation: 'Total future value $= 1200 \\times 6.3081 = \\$7569.72$ — select this from the options next.',
      },
    ],
  },
  {
    // Sophia — inverse problem: given the target FV and factor, find the
    // required regular contribution (FV = R × factor, solve for R).
    id: 'bar2020-q14aiiv',
    reasoning_blueprint: [
      periodsStep('S1', 4,
        ['Sophia contributes every six months for 2 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $2 \\times 2 = 4$ six-monthly periods.'),
      {
        step_id: 'S2', objective: 'Rearrange $FV = R \\times \\text{factor}$ to find the required contribution $R$.',
        axis: 'execution', interaction_type: 'complete', compute: 'divide', params: { a: 3000, b: 4.2782 }, tolerance: 0.5,
        hints: ['You know the target future value and the factor — you need the contribution, not the total.', 'Divide the target amount by the factor: $R = FV \\div \\text{factor}$.'],
        explanation: '$R = 3000 \\div 4.2782 \\approx \\$701.29$ every six months — select this from the options next.',
      },
    ],
  },
  {
    // Toby — comparison problem: find his required contribution, then the
    // difference from Jenna's $500 (real MC answer 244.39 matches exactly).
    id: 'bar2020-q14aii',
    reasoning_blueprint: [
      {
        step_id: 'S1', objective: 'Find the six-monthly contribution Toby needs, using $FV = R \\times \\text{factor}$.',
        axis: 'execution', interaction_type: 'complete', compute: 'divide', params: { a: 5000, b: 6.7169 }, tolerance: 0.5,
        hints: ['This is the same annuity as Jenna\'s (4.5% per period, factor 6.7169) but a different target amount.', 'Divide the target amount by the factor: $R = FV \\div \\text{factor}$.'],
        explanation: '$R = 5000 \\div 6.7169 \\approx \\$744.39$ every six months.',
      },
      {
        step_id: 'S2', objective: 'How much more than Jenna\'s \\$500 must Toby contribute?',
        axis: 'execution', interaction_type: 'complete', expected_response: '244.39', tolerance: 0.5,
        hints: ['Jenna contributes \\$500 every six months.', 'Subtract Jenna\'s contribution from the amount you just found for Toby.'],
        explanation: '$744.39 - 500 \\approx \\$244.39$ — select this from the options next.',
      },
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) {
      console.warn(`SKIP ${id} — not found.`);
      continue;
    }
    const data = doc.data();
    if (data.origin === 'teacher') {
      console.warn(`SKIP ${id} — origin:'teacher', refusing to touch.`);
      continue;
    }
    await ref.set({ reasoning_blueprint }, { merge: true });
    console.log(`✓ ${id} — ${reasoning_blueprint.length} reasoning pre-steps`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }

  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
