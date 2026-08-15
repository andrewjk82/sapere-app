#!/usr/bin/env node
/**
 * Push a question-specific reasoning_blueprint onto one real FIN-GP-01
 * question (Sapere_Question_DNA_v2.0 §3-4 pilot — see
 * src/components/hsc/QuestionReasoningSteps.jsx). Additive merge on a single
 * field of one doc; does not touch answer/options/type or anything else.
 *
 * Pilot question: questions/bar2020-q14ai (origin:'seed', isManual:true —
 * not origin:'teacher', safe to touch per tools/scripts/CLAUDE.md).
 * "Jenna saves for a holiday by contributing $500 every six months into an
 * annuity that pays interest at 9% p.a., compounded every six months. Using
 * the future value interest factor table provided (factor for 4.5%, 6
 * periods = 6.7169), determine how much she will have in 3 years."
 * Real answer: option index "2" → "3358.45".
 *
 * Usage:
 *   node tools/scripts/addQuestionReasoningBlueprint.js
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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

const QUESTION_ID = 'bar2020-q14ai';

const reasoning_blueprint = [
  {
    step_id: 'S1',
    objective: 'Identify the interest rate per compounding period.',
    interaction_type: 'complete',
    expected_response: '4.5',
    tolerance: 0.01,
    hints: [
      'Interest is compounded every six months, but the rate given is annual.',
      'Divide the annual rate by the number of compounding periods per year.',
    ],
    explanation: 'The rate per period is $9\\% \\div 2 = 4.5\\%$.',
  },
  {
    step_id: 'S2',
    objective: 'Identify the number of compounding periods.',
    interaction_type: 'complete',
    expected_response: '6',
    tolerance: 0,
    hints: [
      'Jenna contributes every six months for 3 years.',
      'Multiply the number of years by the number of periods per year.',
    ],
    explanation: 'There are $3 \\times 2 = 6$ six-monthly periods.',
  },
  {
    step_id: 'S3',
    objective: 'Use the given factor to find the total future value.',
    interaction_type: 'complete',
    compute: 'multiply',
    params: { a: 500, b: 6.7169 },
    tolerance: 0.5,
    hints: [
      'Multiply the regular contribution by the factor given in the question.',
      '$500 \\times 6.7169$',
    ],
    explanation: 'Total future value $= 500 \\times 6.7169 = \\$3358.45$ — select this from the options next.',
  },
];

async function main() {
  const ref = db.collection('questions').doc(QUESTION_ID);
  const doc = await ref.get();
  if (!doc.exists) {
    console.error(`Question ${QUESTION_ID} not found — aborting.`);
    process.exit(1);
  }
  if (doc.data().origin === 'teacher') {
    console.error(`Question ${QUESTION_ID} is origin:'teacher' — refusing to touch.`);
    process.exit(1);
  }
  await ref.set({ reasoning_blueprint }, { merge: true });
  console.log(`✓ ${QUESTION_ID} — ${reasoning_blueprint.length} reasoning pre-steps added`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
