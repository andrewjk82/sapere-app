#!/usr/bin/env node
/**
 * Fix 6 more broken-option questions found while scoping CALC-INT-01
 * batch 2 (2026-08-15) — same bug families as fixCalcIntBrokenOptionsBatch1.js.
 * All marked-correct answers verified unaffected.
 *
 *  - baulko2020-q11c: ∫₁⁴5(9x-4)⁴dx. \dfrac vs \frac duplicate at
 *    indices 1/2 (both "(1/9)(32^5-5^5)"). Verified the correct value
 *    independently: u=9x-4, reverse chain rule gives
 *    5·u⁵/(9·5)=u⁵/9=(9x-4)⁵/9, evaluated 1→4 gives (32⁵-5⁵)/9 (matches
 *    correct, unchanged). Replaced the duplicate with a
 *    wrong-denominator distractor (forgot the reverse-chain-rule
 *    correction, used /45 instead of /9).
 *  - baulko2020-q11eii: "hence" ∫tanx·sec²xdx. \dfrac vs \frac
 *    duplicate at indices 1/2 (both "(1/2)sec²x+C"). Verified: u=secx,
 *    du=secx tanx dx, so ∫tanx sec²x dx=∫u du=u²/2=(1/2)sec²x+C
 *    (matches correct, unchanged). Replaced the duplicate with a
 *    dropped-correction-factor distractor.
 *  - baulko2020-q14aii: classic "13/(x+3)" garbage-fraction template at
 *    index 3. Correct (index 0, "2 square units") and index 1 ("+1",
 *    a lazy-but-real distractor) unchanged. Replaced the garbage with a
 *    real distractor: forgot to double the symmetric-interval
 *    contribution ("1 square unit").
 *  - cra2023-q16b: classic "12/(x+2)"/"13/(x+3)" garbage-fraction
 *    template at indices 2/3. Correct (index 0, "4 square units") and
 *    index 1 ("+1") unchanged. Replaced with real distractors: forgot
 *    to double a symmetric-interval contribution ("2 square units");
 *    used the wrong period/amplitude ("8 square units").
 *  - cra2023-q29c: classic "9/5"/"8/4"/"7/3" garbage-fraction template
 *    at indices 0-2. Correct (index 3, "2-ln4 square units") unchanged
 *    — verified 2-ln4 = 2-2ln2 numerically. Replaced with real
 *    distractors: forgot the ln term entirely ("2 square units");
 *    sign error on the ln term ("2+ln4 square units"); used log
 *    instead of ln ("2-log4 square units").
 *  - cra2023-q15: glued-double-negative duplicate at index 0
 *    ("-F(x)=..." — the exact same value as the marked-correct index 1
 *    "F(x)=...", just with a stray "-F(x)=" prefix instead of "F(x)=").
 *    Verified the correct value independently: F(x)=tanx-x+C, and
 *    F(π/3)=0 gives C=π/3-√3 (matches correct, unchanged). Replaced
 *    with a real distractor: sign error on the constant (used
 *    -(π/3-√3) instead of +(π/3-√3)).
 *
 * Not fixed here (flagged separately, different problem class):
 *  - baulko2020-mc3 ("primitive for f'(x)=x/(e^{x²}-8)") — the given
 *    function doesn't reduce to a standard reverse-chain-rule/log form
 *    via any substitution checked (u=x² doesn't make du match the
 *    numerator's relationship to the denominator cleanly), and every
 *    option has an oddly-appended "+8"/"-8" constant even on the wrong
 *    answers — possible authoring/generation error in the source exam
 *    or seed corpus, not confidently fixable without the original exam.
 *  - cra2023-mc10 (even/odd-function signed-area identity) needs the
 *    referenced graphs to verify which combination of A, B, C is
 *    correct — not fixed without seeing them.
 *
 * Usage:
 *   node tools/scripts/fixCalcIntBrokenOptionsBatch2.js
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
    id: 'baulko2020-q11c',
    expectAnswer: '1',
    replaceIndex: { 2: '\\(\\dfrac{1}{45}(32^5 - 5^5)\\)' },
  },
  {
    id: 'baulko2020-q11eii',
    expectAnswer: '1',
    replaceIndex: { 2: '\\(\\sec^2 x + C\\)' },
  },
  {
    id: 'baulko2020-q14aii',
    expectAnswer: '0',
    replaceIndex: { 3: '\\(1\\) square unit' },
  },
  {
    id: 'cra2023-q16b',
    expectAnswer: '0',
    replaceIndex: {
      2: '\\(2\\) square units',
      3: '\\(8\\) square units',
    },
  },
  {
    id: 'cra2023-q29c',
    expectAnswer: '3',
    replaceIndex: {
      0: '\\(2\\) square units',
      1: '\\(2 + \\ln 4\\) square units',
      2: '\\(2 - \\log 4\\) square units',
    },
  },
  {
    id: 'cra2023-q15',
    expectAnswer: '1',
    replaceIndex: { 0: '\\(F(x) = \\tan x - x - \\left(\\dfrac{\\pi}{3} - \\sqrt{3}\\right)\\)' },
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
      console.warn(`SKIP ${fix.id} — answer is '${data.answer}', expected '${fix.expectAnswer}'. Already changed — not touching.`);
      continue;
    }
    const newOptions = data.options.map((o, i) =>
      fix.replaceIndex[i] !== undefined ? { text: fix.replaceIndex[i], imageUrl: o.imageUrl || '' } : o
    );
    const norm = (t) => t.replace(/\\dfrac/g, '\\frac').replace(/\s+/g, ' ').trim();
    const seen = new Set();
    let dup = false;
    for (const o of newOptions) {
      const n = norm(o.text);
      if (seen.has(n)) { dup = true; break; }
      seen.add(n);
    }
    if (dup) {
      console.error(`ABORT ${fix.id} — replacement options still contain a \\dfrac/\\frac-normalized duplicate. Not writing.`);
      continue;
    }
    await ref.set({ options: newOptions }, { merge: true });
    console.log(`✓ ${fix.id} — options fixed`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
