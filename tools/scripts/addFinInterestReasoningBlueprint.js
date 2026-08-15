#!/usr/bin/env node
/**
 * Push the FIN-INTEREST-01 DNA-generic warmup (tools/dna/dnaTaxonomy.js)
 * and question-specific reasoning_blueprint fields onto 3 real, clean
 * FIN-INTEREST-01 lump-sum present-value questions (Sapere_Question_DNA_v2.0
 * §3-4 — see src/components/hsc/QuestionReasoningSteps.jsx,
 * DnaReasoningWarmup.jsx).
 *
 * ALWAYS multiple-choice (select) — standing project rule ("Corpus-
 * generated questions: multiple_choice only, no exceptions" in CLAUDE.md)
 * applies to these reasoning pre-steps too. Originally free-text 'complete'
 * steps; converted 2026-08-15 after direct user feedback.
 *
 * Percy (asc2020-mc8) — answer key was wrong until
 * fixAsc2020Mc8AnswerKey.js; re-verify it's already fixed before adding
 * pre-steps in front of it.
 * Mia (asc2020-mc8v), Dane2020 (dane2020-q34b) — already correct.
 *
 * NOT enriched this pass (different reasoning shapes — loan amortisation
 * recurrence, annuity depletion solve-for-n via logs, teacher_review
 * multi-step proofs): bar2020-q17bi/biia/biib, baulko2020-q16ai/aii/aiii/
 * aiiiv, bbhs2020-19a/b, dane2020-q37, bar2020-q17biibv.
 *
 * Usage:
 *   node tools/scripts/addFinInterestReasoningBlueprint.js
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { QUESTION_DNA, DNA_TAXONOMY_VERSION } from '../dna/dnaTaxonomy.js';
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

async function pushDnaWarmup() {
  const dna = QUESTION_DNA.find((d) => d.dna_id === 'FIN-INTEREST-01');
  if (!dna?.reasoningBlueprint?.length) { console.error('FIN-INTEREST-01 has no reasoningBlueprint in dnaTaxonomy.js'); process.exit(1); }
  await db.collection('question_dna').doc('FIN-INTEREST-01').set(
    { reasoningBlueprint: dna.reasoningBlueprint, taxonomyVersion: DNA_TAXONOMY_VERSION },
    { merge: true }
  );
  console.log(`✓ FIN-INTEREST-01 — ${dna.reasoningBlueprint.length} warmup steps`);
}

const mc = (stepId, objective, axis, options, correctId, hints, explanation) => ({
  step_id: stepId, objective, axis, interaction_type: 'select', options,
  expected_response: correctId, hints, explanation,
});

const QUESTIONS = [
  {
    // Percy — PV via a given table factor. Rate/periods extraction, then
    // divide (reinforces W3's "PV means divide" from the DNA warmup).
    // Verified: 25000/1.1717 ≈ 21336.52.
    id: 'asc2020-mc8',
    requireAnswer: '3', // must already be the fixed answer, not the old wrong '0'
    reasoning_blueprint: [
      mc('S1', 'Identify the interest rate per compounding period.', 'execution',
        [{ id: 'a', label: '$4\\%$' }, { id: 'b', label: '$2\\%$' }, { id: 'c', label: '$8\\%$' }],
        'b',
        ['Interest compounds every 6 months, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $4\\% \\div 2 = 2\\%$.'),
      mc('S2', 'Identify the number of compounding periods.', 'execution',
        [{ id: 'a', label: '4' }, { id: 'b', label: '8' }, { id: 'c', label: '2' }],
        'b',
        ['Percy is saving for 4 years, compounding every 6 months.', 'Multiply the number of years by the number of periods per year.'],
        'There are $4 \\times 2 = 8$ periods.'),
      mc('S3', 'Use the given factor to find how much Percy must invest today.', 'execution',
        [{ id: 'a', label: '\\$29,287.50' }, { id: 'b', label: '\\$21,336.52' }, { id: 'c', label: '\\$21,335.52' }],
        'b',
        ['This is a present-value question — you want less than $25{,}000$ today.', 'Divide the target amount by the given factor.'],
        '$25000 \\div 1.1717 \\approx \\$21{,}336.52$ — select this from the options next.'),
    ],
  },
  {
    // Mia — same shape, different numbers, quarterly compounding.
    // Verified: 18000/1.1956 ≈ 15055.20.
    id: 'asc2020-mc8v',
    reasoning_blueprint: [
      mc('S1', 'Identify the interest rate per compounding period.', 'execution',
        [{ id: 'a', label: '$1.5\\%$' }, { id: 'b', label: '$6\\%$' }, { id: 'c', label: '$3\\%$' }],
        'a',
        ['Interest compounds quarterly, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $6\\% \\div 4 = 1.5\\%$.'),
      mc('S2', 'Identify the number of compounding periods.', 'execution',
        [{ id: 'a', label: '3' }, { id: 'b', label: '12' }, { id: 'c', label: '4' }],
        'b',
        ['Mia is saving for 3 years, compounding quarterly.', 'Multiply the number of years by the number of periods per year.'],
        'There are $3 \\times 4 = 12$ periods.'),
      mc('S3', 'Use the given factor to find how much Mia must invest today.', 'execution',
        [{ id: 'a', label: '\\$21,524.88' }, { id: 'b', label: '\\$15,054.20' }, { id: 'c', label: '\\$15,055.20' }],
        'c',
        ['This is a present-value question — you want less than $18{,}000$ today.', 'Divide the target amount by the given factor.'],
        '$18000 \\div 1.1956 \\approx \\$15{,}055.20$ — select this from the options next.'),
    ],
  },
  {
    // Dane2020 — same PV idea, but no factor is given directly, so the
    // final step derives (1+rate)^n itself. Verified: 7569.72/1.02^6 ≈ 6721.69.
    id: 'dane2020-q34b',
    reasoning_blueprint: [
      mc('S1', 'Identify the interest rate per compounding period.', 'execution',
        [{ id: 'a', label: '$2\\%$' }, { id: 'b', label: '$4\\%$' }, { id: 'c', label: '$1\\%$' }],
        'a',
        ['Interest compounds half-yearly, but the rate given is annual.', 'Divide the annual rate by the number of compounding periods per year.'],
        'The rate per period is $4\\% \\div 2 = 2\\%$.'),
      mc('S2', 'Identify the number of compounding periods.', 'execution',
        [{ id: 'a', label: '3' }, { id: 'b', label: '6' }, { id: 'c', label: '12' }],
        'b',
        ['The investment runs for 3 years, compounding half-yearly.', 'Multiply the number of years by the number of periods per year.'],
        'There are $3 \\times 2 = 6$ periods.'),
      mc('S3', 'Find the lump sum needed today using $P = A \\div (1+r)^n$.', 'execution',
        [{ id: 'a', label: '\\$6,721.69' }, { id: 'b', label: '\\$8,533.71' }, { id: 'c', label: '\\$6,720.69' }],
        'a',
        ['No factor table is given this time — compute $(1.02)^6$ yourself, or reason it through directly.', '$P = 7569.72 \\div (1.02)^6$'],
        '$P = 7569.72 \\div (1.02)^6 \\approx \\$6721.69$ — select this from the options next.'),
    ],
  },
];

async function pushQuestionBlueprints() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint, requireAnswer } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    if (requireAnswer && data.answer !== requireAnswer) {
      console.warn(`SKIP ${id} — expected answer '${requireAnswer}', found '${data.answer}'. Not adding pre-steps in front of an unverified answer key.`);
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

async function main() {
  await pushDnaWarmup();
  await pushQuestionBlueprints();
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
