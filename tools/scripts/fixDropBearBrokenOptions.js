#!/usr/bin/env node
/**
 * Fix broken multiple-choice content on the 3 FIN-GP-01 questions skipped
 * by addDropBearReasoningBlueprint.js: asc2020-q30-c, asc2020-q30-d,
 * asc2020-q30v (all origin:'seed', not 'teacher').
 *
 * asc2020-q30-c / asc2020-q30-d: the marked-correct option was fine
 * (verified: T_5 = 2000-1000(1.05)^5 ≈ 724; extinction floor(n)=14 ->
 * 2003+14=2017), but the 3 distractor options were generic mismatched
 * template text ("The opposite of this statement is true.", "This is true
 * only when the function is linear.", "This only holds for positive values
 * of x.") — unrelated to a numeric/date question. Replaced with real
 * distractors computed from plausible mistakes (wrong n, forgot a term,
 * off-by-one).
 *
 * asc2020-q30v: same broken-distractor problem (options were bare algebra
 * fractions "9/5","8/4","7/3", unrelated to a fish-population question) —
 * AND the marked-correct option itself had a wrong value: "During year
 * n=10" contradicts the document's own solutionSteps[2].workingOut, which
 * already correctly derives "n ≈ 14.3 => extinct during year 14". Verified
 * independently: 750-250(1.08)^n=0 => n = log(3)/log(1.08) ≈ 14.27.
 * Fixed to "During year n=14" (matches the existing correct solutionSteps),
 * and the old wrong "n=10" text is kept as one of the new distractors
 * (a student following that exact miscalculation lands there, which is a
 * more honest distractor than three unrelated fractions were).
 *
 * Usage:
 *   node tools/scripts/fixDropBearBrokenOptions.js
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

const FIXES = [
  {
    id: 'asc2020-q30-c',
    // answer stays '0' — that option was already correct.
    expectAnswer: '0',
    newOptions: [
      { text: 'Approximately \\(724\\) drop-bears', imageUrl: '' }, // correct, unchanged
      { text: 'Approximately \\(898\\) drop-bears', imageUrl: '' }, // used n=2 instead of n=5
      { text: 'Approximately \\(1276\\) drop-bears', imageUrl: '' }, // computed 1000(1.05)^5 but forgot to subtract from 2000
      { text: 'Approximately \\(784\\) drop-bears', imageUrl: '' }, // off-by-one, used n=4
    ],
  },
  {
    id: 'asc2020-q30-d',
    expectAnswer: '0',
    newOptions: [
      { text: 'During \\(2017\\)', imageUrl: '' }, // correct, unchanged
      { text: 'During \\(2018\\)', imageUrl: '' }, // rounded the fractional n the wrong way
      { text: 'During \\(2031\\)', imageUrl: '' }, // doubled n by mistake
      { text: 'During \\(2003\\)', imageUrl: '' }, // didn't solve for n at all
    ],
  },
  {
    id: 'asc2020-q30v',
    expectAnswer: '3',
    solution: 'The correct answer is (b) \\(T_n = 750 - 250(1.08)^n\\) (c) During year \\(n = 14\\) from the start (approximately).',
    newOptions: [
      { text: '(b) \\(T_n = 500(1.08)^n - 60n\\) (c) During year \\(n = 8\\)', imageUrl: '' }, // wrong formula (linear, not GP sum) and wrong year
      { text: '(b) \\(T_n = 750 - 250(1.08)^n\\) (c) During year \\(n = 18\\)', imageUrl: '' }, // right formula, rounded the wrong way
      { text: '(b) \\(T_n = 750 - 250(1.08)^n\\) (c) During year \\(n = 10\\) from the start (approximately)', imageUrl: '' }, // right formula, the old (wrong) value — now an honest distractor
      { text: '(b) \\(T_n = 750 - 250(1.08)^n\\) (c) During year \\(n = 14\\) from the start (approximately)', imageUrl: '' }, // correct — matches solutionSteps[2]'s own working
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const fix of FIXES) {
    const ref = db.collection('questions').doc(fix.id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${fix.id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${fix.id} — origin:'teacher'.`); continue; }
    if (data.answer !== fix.expectAnswer) {
      console.warn(`SKIP ${fix.id} — answer is '${data.answer}', expected '${fix.expectAnswer}'. Already fixed or changed since — not touching.`);
      continue;
    }
    const update = { options: fix.newOptions };
    if (fix.solution) update.solution = fix.solution;
    await ref.set(update, { merge: true });
    console.log(`✓ ${fix.id} — options replaced${fix.solution ? ' + solution corrected' : ''}`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
