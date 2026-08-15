#!/usr/bin/env node
/**
 * Fix a wrong answer key on questions/girr2020-mc26b — same question as
 * bar2020-q11bii (∫₀²e^{3x}(3+9x)dx via "hence" from part (a)'s
 * d/dx[xe^{3x}]=e^{3x}(1+3x)), but with a broken option set.
 *
 * The doc's own solution/solutionSteps correctly derive:
 *   3+9x = 3(1+3x)
 *   ∫₀²e^{3x}(3+9x)dx = 3∫₀²e^{3x}(1+3x)dx = 3[xe^{3x}]₀² = 3(2e^6-0) = 6e^6
 * Verified independently two ways (direct integration by parts, and via
 * the "hence" shortcut) — matches bar2020-q11bii's correctly-keyed 6e^6.
 * But the marked answer (index 1, "3e^6-3") matches NEITHER derivation,
 * and index 1/index 3 ("3(e^6-1)"=3e^6-3) are themselves duplicates of
 * each other. Replaced the whole option set with the correct value plus
 * real grounded distractors.
 *
 * Usage:
 *   node tools/scripts/fixGirrMc26bAnswerKey.js
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

const QUESTION_ID = 'girr2020-mc26b';

async function main() {
  const ref = db.collection('questions').doc(QUESTION_ID);
  const doc = await ref.get();
  if (!doc.exists) { console.error(`${QUESTION_ID} not found — aborting.`); process.exit(1); }
  const data = doc.data();
  if (data.origin === 'teacher') { console.error(`${QUESTION_ID} is origin:'teacher' — refusing to touch.`); process.exit(1); }
  if (data.answer !== '1') {
    console.error(`${QUESTION_ID}: answer is '${data.answer}', expected '1'. Already changed — aborting.`);
    process.exit(1);
  }

  await ref.set({
    answer: '0',
    solution: 'The correct answer is $6e^6$ (from part (a): $\\frac{d}{dx}[xe^{3x}]=e^{3x}(1+3x)$, and $3+9x=3(1+3x)$, so $\\int_0^2 e^{3x}(3+9x)\\,dx = 3\\int_0^2 e^{3x}(1+3x)\\,dx = 3[xe^{3x}]_0^2 = 3(2e^6-0) = 6e^6$).',
    options: [
      { text: '$6e^6$', imageUrl: '' }, // correct — verified independently, matches bar2020-q11bii
      { text: '$2e^6$', imageUrl: '' }, // forgot the outer factor of 3 from 3+9x=3(1+3x)
      { text: '$3e^6$', imageUrl: '' }, // forgot to substitute x=2 correctly, used a coefficient of 1 instead of 2
      { text: '$12e^6$', imageUrl: '' }, // doubled the result by mistake
    ],
  }, { merge: true });

  console.log(`✓ ${QUESTION_ID}: wrong answer key '3e^6-3' → correct '6e^6', full option set rebuilt with real distractors`);

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
