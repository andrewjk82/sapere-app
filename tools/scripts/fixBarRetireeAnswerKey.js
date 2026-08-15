#!/usr/bin/env node
/**
 * Fix a wrong answer key on questions/bar2020-q17biibv (retiree $200,000
 * account, 0.4%/month, $1500/month withdrawal, "how many complete months
 * until empty").
 *
 * The question's own solutionSteps correctly set up
 * 1.004^n = 375000/175000 ≈ 2.143, but then made an arithmetic slip on the
 * final division: claimed n ≈ 169.2, when ln(2.143)/ln(1.004) actually
 * equals ≈ 190.9 (verified independently, matches a direct search for
 * where A_n crosses zero: A_190 ≈ +1368.50, A_191 ≈ -126.03). The wrong
 * 169 then propagated into `answer`, `solution`, and the options —
 * options were also using the broken generic "+1"/unrelated-fraction
 * distractor pattern, replaced with real distractors here too.
 *
 * Usage:
 *   node tools/scripts/fixBarRetireeAnswerKey.js
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

const QUESTION_ID = 'bar2020-q17biibv';

async function main() {
  const ref = db.collection('questions').doc(QUESTION_ID);
  const doc = await ref.get();
  if (!doc.exists) { console.error(`${QUESTION_ID} not found — aborting.`); process.exit(1); }
  const data = doc.data();
  if (data.origin === 'teacher') { console.error(`${QUESTION_ID} is origin:'teacher' — refusing to touch.`); process.exit(1); }
  if (data.answer !== '1' || data.options?.[1]?.text !== '\\(169 months\\)') {
    console.error(`${QUESTION_ID} doesn't match the expected stale state — someone may have already fixed this. Aborting without changes.`);
    process.exit(1);
  }

  const solutionSteps = [...data.solutionSteps];
  const lastTwo = solutionSteps.length - 1;
  solutionSteps[lastTwo - 1] = {
    ...solutionSteps[lastTwo - 1],
    workingOut: '\\(n = \\frac{\\ln(2.143)}{\\ln(1.004)} \\approx 190.9\\)',
  };
  solutionSteps[lastTwo] = {
    ...solutionSteps[lastTwo],
    explanation: 'Final answer: 190 months. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.',
    workingOut: '\\(190 months\\)',
  };

  await ref.set({
    answer: '1',
    solution: 'The correct answer is \\(190 months\\).',
    solutionSteps,
    options: [
      { text: '\\(-190 months\\)', imageUrl: '' },
      { text: '\\(190 months\\)', imageUrl: '' },
      { text: '\\(169 months\\)', imageUrl: '' }, // the old wrong value — now an honest distractor
      { text: '\\(191 months\\)', imageUrl: '' },
    ],
  }, { merge: true });

  console.log(`✓ ${QUESTION_ID}: answer '169 months' → '190 months', solution + solutionSteps + options corrected`);

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
