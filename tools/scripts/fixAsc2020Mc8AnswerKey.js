#!/usr/bin/env node
/**
 * Fix a wrong answer key found while extending the FIN-INTEREST-01
 * reasoning-blueprint pilot (2026-08-15): questions/asc2020-mc8 (Percy's
 * savings-goal present-value question).
 *
 * The question states the compound factor as 1.1717 (2% per period, 8
 * periods — matches 1.02^8 exactly) and its own hint says "divide the
 * future value by the compound interest factor" — but `answer` pointed to
 * option 0, "25000 × 1.3686" (wrong operation, and 1.3686 isn't even the
 * factor given in the question). The actually-correct option is index 3,
 * "25000 ÷ 1.1717" — matches the hint and 25000/1.1717 ≈ 21336.52.
 *
 * `solution` and the final `solutionSteps` entry repeated the same wrong
 * value ("25000 × 1.3686") — a generic bulk-template solution baked the
 * bad answer key in, so both get corrected too.
 *
 * Usage:
 *   node tools/scripts/fixAsc2020Mc8AnswerKey.js
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

const QUESTION_ID = 'asc2020-mc8';

async function main() {
  const ref = db.collection('questions').doc(QUESTION_ID);
  const doc = await ref.get();
  if (!doc.exists) { console.error(`${QUESTION_ID} not found — aborting.`); process.exit(1); }
  const data = doc.data();
  if (data.origin === 'teacher') { console.error(`${QUESTION_ID} is origin:'teacher' — refusing to touch.`); process.exit(1); }
  if (data.answer !== '0') {
    console.error(`${QUESTION_ID}.answer is '${data.answer}', not the expected '0' — someone may have already fixed this. Aborting without changes.`);
    process.exit(1);
  }
  if (data.options?.[3]?.text !== '\\(25000 \\div 1.1717\\)') {
    console.error(`${QUESTION_ID}.options[3] text doesn't match the expected correct option — aborting without changes.`);
    process.exit(1);
  }

  const solutionSteps = [...data.solutionSteps];
  const lastIdx = solutionSteps.length - 1;
  solutionSteps[lastIdx] = {
    ...solutionSteps[lastIdx],
    explanation: 'Final answer: \\(25000 \\div 1.1717 \\approx 21\\,336.52\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.',
    workingOut: '\\(25000 \\div 1.1717\\)',
  };

  await ref.set({
    answer: '3',
    solution: 'The correct answer is \\(25000 \\div 1.1717\\).',
    solutionSteps,
  }, { merge: true });

  console.log(`✓ ${QUESTION_ID}: answer '0' → '3' (25000×1.3686 → 25000÷1.1717), solution + solutionSteps corrected`);

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
