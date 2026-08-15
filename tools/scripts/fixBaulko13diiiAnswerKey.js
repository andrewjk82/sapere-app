#!/usr/bin/env node
/**
 * Fix a wrong answer key on questions/baulko2020-q13diii — a 7th wrong
 * answer key found this session, discovered because the reasoning-
 * blueprint script's requireAnswer guard correctly refused to build on
 * top of unverified content when the independently-derived answer
 * didn't match the doc's marked answer.
 *
 * f(x)=ln(x²+1). Points of inflection require f''(x)=0:
 *   f''(x) = (2-2x²)/(x²+1)² = 0  =>  x² = 1  =>  x = ±1
 *   f(1) = f(-1) = ln(1+1) = ln2   (verified numerically, both equal)
 * So the correct points of inflection are (1, ln2) AND (-1, ln2) —
 * matching the doc's own options[0]. But the marked answer was
 * options[1], "(1, ln2) and (0, 0)" — which incorrectly substitutes the
 * STATIONARY point (0,0) (already correctly used as the answer to the
 * companion question baulko2020-q13dii, "local minimum at (0,0)") in
 * place of the second inflection point (-1, ln2). A real content error,
 * not a duplicate/garbage-distractor issue.
 *
 * Usage:
 *   node tools/scripts/fixBaulko13diiiAnswerKey.js
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

const QUESTION_ID = 'baulko2020-q13diii';

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
  if (data.options?.[0]?.text !== '\\((1, \\ln 2)\\) and \\((-1, \\ln 2)\\)') {
    console.error(`${QUESTION_ID}: options[0] doesn't match the expected pre-fix text — aborting.`, data.options?.[0]?.text);
    process.exit(1);
  }

  await ref.set({
    answer: '0',
    solution: 'The correct answer is $(1, \\ln 2)$ and $(-1, \\ln 2)$.',
  }, { merge: true });

  console.log(`✓ ${QUESTION_ID}: wrong answer key (index 1, "(1,ln2) and (0,0)" — conflated with the stationary point) → correct index 0, "(1,ln2) and (-1,ln2)"`);

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
