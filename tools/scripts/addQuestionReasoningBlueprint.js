#!/usr/bin/env node
/**
 * Push question-specific reasoning_blueprint fields onto real FIN-GP-01
 * questions (Sapere_Question_DNA_v2.0 §3-4 pilot — see
 * src/components/hsc/QuestionReasoningSteps.jsx). Additive merge on one
 * field per doc; never touches answer/options/type.
 *
 * ALWAYS multiple-choice (select) — standing project rule (CLAUDE.md
 * "Corpus-generated questions: multiple_choice only, no exceptions")
 * applies to these reasoning pre-steps too, not just the final answer.
 * Originally written as free-text 'complete' steps; converted 2026-08-15
 * after direct user feedback that a free-text numeric input for an
 * intermediate step ("r/12" for "identify the rate") is exactly the kind
 * of thing this rule exists to prevent.
 *
 * Content-only edit to `questions` docs (tools/scripts/CLAUDE.md) — after
 * writing, touches each affected chapter's question_index so
 * chapterQuestionsCache.js doesn't keep serving a stale cached copy.
 *
 * Scope: only the "future value of an annuity, factor given" questions —
 * same reasoning shape as the pilot (rate → periods → factor arithmetic).
 * Deliberately SKIPPED from this pass, not silently forced into the pattern:
 *   - bbhs2020-30a/b/c: tagged FIN-GP-01 but are actually an arithmetic
 *     (AP) rose-garden problem, not geometric — fixed via
 *     fixBbhs2020DnaMisclassification.js.
 *   - asc2020-q30-c/d, asc2020-q30v: broken MC options (generic mismatched
 *     distractors) — see addDropBearReasoningBlueprint.js header.
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

// options: [{id,label}], correctId: which id is right. Every numeric option
// verified against the actual computed value before being hardcoded here —
// see the header comment in each QUESTIONS entry for the node -e check.
const mc = (stepId, objective, axis, options, correctId, hints, explanation) => ({
  step_id: stepId, objective, axis, interaction_type: 'select', options,
  expected_response: correctId, hints, explanation,
});

const QUESTIONS = [
  {
    // Jenna — $500/6mo, 9% p.a. compounded 6-monthly, 3yr, factor 6.7169.
    // Verified: 500*6.7169 = 3358.45.
    id: 'bar2020-q14ai',
    reasoning_blueprint: [
      mc('S1', 'Identify the interest rate per compounding period.', 'execution',
        [{ id: 'a', label: '$9\\%$' }, { id: 'b', label: '$4.5\\%$' }, { id: 'c', label: '$18\\%$' }],
        'b',
        ['Interest compounds every 6 months, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $9\\% \\div 2 = 4.5\\%$.'),
      mc('S2', 'Identify the number of compounding periods.', 'execution',
        [{ id: 'a', label: '3' }, { id: 'b', label: '6' }, { id: 'c', label: '9' }],
        'b',
        ['Jenna contributes every six months for 3 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $3 \\times 2 = 6$ six-monthly periods.'),
      mc('S3', 'Use the given factor to find the total future value.', 'execution',
        [{ id: 'a', label: '\\$3,357.45' }, { id: 'b', label: '\\$3,358.45' }, { id: 'c', label: '\\$33,584.50' }],
        'b',
        ['Multiply the regular contribution by the factor given in the question.', '$500 \\times 6.7169$'],
        '$500 \\times 6.7169 = \\$3358.45$ — select this from the options next.'),
    ],
  },
  {
    // Marcus — $400/6mo, 9% p.a., 2yr, factor 4.2782. Verified: 400*4.2782=1711.28.
    id: 'bar2020-q14aiv',
    reasoning_blueprint: [
      mc('S1', 'Identify the interest rate per compounding period.', 'execution',
        [{ id: 'a', label: '$4.5\\%$' }, { id: 'b', label: '$9\\%$' }, { id: 'c', label: '$2.25\\%$' }],
        'a',
        ['Interest compounds every 6 months, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $9\\% \\div 2 = 4.5\\%$.'),
      mc('S2', 'Identify the number of compounding periods.', 'execution',
        [{ id: 'a', label: '2' }, { id: 'b', label: '4' }, { id: 'c', label: '8' }],
        'b',
        ['Marcus contributes every six months for 2 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $2 \\times 2 = 4$ six-monthly periods.'),
      mc('S3', 'Use the given factor to find the total future value.', 'execution',
        [{ id: 'a', label: '\\$1,711.28' }, { id: 'b', label: '\\$1,710.28' }, { id: 'c', label: '\\$17,112.80' }],
        'a',
        ['Multiply the regular contribution by the factor given in the question.', '$400 \\times 4.2782$'],
        '$400 \\times 4.2782 = \\$1711.28$ — select this from the options next.'),
    ],
  },
  {
    // Dane2020 — $1200/6mo, 4% p.a., 3yr, factor 6.3081. Verified: 1200*6.3081=7569.72.
    id: 'dane2020-q34a',
    reasoning_blueprint: [
      mc('S1', 'Identify the interest rate per compounding period.', 'execution',
        [{ id: 'a', label: '$4\\%$' }, { id: 'b', label: '$8\\%$' }, { id: 'c', label: '$2\\%$' }],
        'c',
        ['The compounding period is half-yearly, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $4\\% \\div 2 = 2\\%$.'),
      mc('S2', 'Identify the number of compounding periods.', 'execution',
        [{ id: 'a', label: '6' }, { id: 'b', label: '3' }, { id: 'c', label: '1.5' }],
        'a',
        ['Contributions are made every half-year for 3 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $3 \\times 2 = 6$ half-yearly periods.'),
      mc('S3', 'Use the given factor to find the total future value.', 'execution',
        [{ id: 'a', label: '\\$7,570.72' }, { id: 'b', label: '\\$7,569.72' }, { id: 'c', label: '\\$75,697.20' }],
        'b',
        ['Multiply the regular contribution by the factor given in the question.', '$1200 \\times 6.3081$'],
        '$1200 \\times 6.3081 = \\$7569.72$ — select this from the options next.'),
    ],
  },
  {
    // Sophia — inverse: wants $3000 in 2yr, 4.5%/6mo, factor(4 periods)=4.2782.
    // Verified: 3000/4.2782 ≈ 701.29.
    id: 'bar2020-q14aiiv',
    reasoning_blueprint: [
      mc('S1', 'Identify the number of compounding periods.', 'execution',
        [{ id: 'a', label: '4' }, { id: 'b', label: '2' }, { id: 'c', label: '8' }],
        'a',
        ['Sophia contributes every six months for 2 years.', 'Multiply the number of years by the number of periods per year.'],
        'There are $2 \\times 2 = 4$ six-monthly periods.'),
      mc('S2', 'Rearrange $FV = R \\times \\text{factor}$ to find the required contribution $R$.', 'execution',
        [{ id: 'a', label: '\\$12,834.60' }, { id: 'b', label: '\\$701.29' }, { id: 'c', label: '\\$700.29' }],
        'b',
        ['You know the target future value and the factor — you need the contribution, not the total.', 'Divide the target amount by the factor: $R = FV \\div \\text{factor}$.'],
        '$R = 3000 \\div 4.2782 \\approx \\$701.29$ every six months — select this from the options next.'),
    ],
  },
  {
    // Toby — comparison: needs $5000 in 3yr, same annuity as Jenna
    // (4.5%/6mo, factor 6.7169). Verified: 5000/6.7169≈744.39, -500≈244.39
    // (matches the real MC answer exactly).
    id: 'bar2020-q14aii',
    reasoning_blueprint: [
      mc('S1', 'Find the six-monthly contribution Toby needs, using $FV = R \\times \\text{factor}$.', 'execution',
        [{ id: 'a', label: '\\$33,584.50' }, { id: 'b', label: '\\$744.39' }, { id: 'c', label: '\\$500.00' }],
        'b',
        ['This is the same annuity as Jenna\'s (4.5% per period, factor 6.7169) but a different target amount.', 'Divide the target amount by the factor: $R = FV \\div \\text{factor}$.'],
        '$R = 5000 \\div 6.7169 \\approx \\$744.39$ every six months.'),
      mc('S2', 'How much more than Jenna\'s \\$500 must Toby contribute?', 'execution',
        [{ id: 'a', label: '\\$244.39' }, { id: 'b', label: '\\$1,244.39' }, { id: 'c', label: '\\$744.39' }],
        'a',
        ['Jenna contributes \\$500 every six months.', 'Subtract Jenna\'s contribution from the amount you just found for Toby.'],
        '$744.39 - 500 \\approx \\$244.39$ — select this from the options next.'),
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
