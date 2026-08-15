#!/usr/bin/env node
/**
 * Fix broken multiple-choice content on questions/dane2020-q37 (Ozzie's
 * retirement fund halving problem, FIN-INTEREST-01).
 *
 * The marked-correct option ("n ≈ 105 months") was already right — verified
 * independently: A_n = 600000(1.0025)^n - 4000*(1.0025^n-1)/0.0025, set
 * A_n = 300000, let x = 1.0025^n:
 *   600000x - 1600000(x-1) = 300000  =>  -1000000x = -1300000  =>  x = 1.3
 *   n = ln(1.3)/ln(1.0025) ≈ 105.08 => 105 months.
 *
 * But 3 of the 4 options were leftover generic-template algebra fractions
 * ("7/3", "12/(x+2)", "13/(x+3)") completely unrelated to a
 * months-to-halve annuity question. Replaced with real distractors from
 * plausible rounding/off-by-one mistakes (verified: 1.0025^104≈1.2965,
 * 1.0025^105≈1.2998, 1.0025^106≈1.3030 — 104 and 106 are genuine
 * off-by-one near-misses around the true root ≈105.08).
 *
 * Usage:
 *   node tools/scripts/fixDane2020Q37Options.js
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

const QUESTION_ID = 'dane2020-q37';

async function main() {
  const ref = db.collection('questions').doc(QUESTION_ID);
  const doc = await ref.get();
  if (!doc.exists) { console.error(`${QUESTION_ID} not found — aborting.`); process.exit(1); }
  const data = doc.data();
  if (data.origin === 'teacher') { console.error(`${QUESTION_ID} is origin:'teacher' — refusing to touch.`); process.exit(1); }
  if (data.answer !== '1' || data.options?.[1]?.text !== '\\(n \\approx 105 \\text{ months } (\\approx 8 \\text{ years } 9 \\text{ months})\\)') {
    // tolerate minor text differences but bail if answer index moved
    if (data.answer !== '1') {
      console.error(`${QUESTION_ID}: answer is '${data.answer}', expected '1'. Already changed — aborting.`);
      process.exit(1);
    }
  }

  const newOptions = [
    { text: '\\(n \\approx 104 \\text{ months } (\\approx 8 \\text{ years } 8 \\text{ months})\\)', imageUrl: '' }, // off-by-one, rounded down too far
    { text: data.options[1].text, imageUrl: '' }, // correct, unchanged
    { text: '\\(n \\approx 106 \\text{ months } (\\approx 8 \\text{ years } 10 \\text{ months})\\)', imageUrl: '' }, // off-by-one, rounded up too far
    { text: '\\(n \\approx 211 \\text{ months } (\\approx 17 \\text{ years } 7 \\text{ months})\\)', imageUrl: '' }, // confused "halve" with a full doubling-time-style miscalculation
  ];

  await ref.set({ options: newOptions }, { merge: true });
  console.log(`✓ ${QUESTION_ID}: 3 broken generic-template distractors replaced with real near-miss options; correct answer unchanged`);

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
