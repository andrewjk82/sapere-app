#!/usr/bin/env node
/**
 * Fix 2 questions found while scoping CALC-INT-01 batch 7 (2026-08-15):
 *
 *   cths2020s-q20 — a 6th WRONG ANSWER KEY found this session. Given
 *   dy/dx=x²+4x-5 and Q(3,10) on the curve: y=x³/3+2x²-5x+C. At x=3:
 *   27/3+2(9)-5(3)+C=9+18-15+C=12+C. Setting =10 gives C=-2, so
 *   y=x³/3+2x²-5x-2 — but the doc's marked-correct option stated
 *   "+4" instead. Part (b) (the normal line, x+16y-163=0) doesn't
 *   depend on C and was independently verified correct (gradient at
 *   x=3 is 9+12-5=16, normal gradient -1/16, line simplifies to
 *   x+16y-163=0) — only part (a)'s constant was wrong. Also had the
 *   classic "9/5"/"8/4"/"7/3" garbage-fraction distractors.
 *
 *   asc2020-q34v — classic "9/5"/"8/4"/"7/3" garbage-fraction
 *   distractors at indices 0-2; the marked-correct option (index 3,
 *   two-part water-tank flow-rate question) was independently verified:
 *   dV/dt=0.5cos(πt/20)=0 at t=10 (cos=0 first at πt/20=π/2); V(t)=
 *   ∫0.5cos(πt/20)dt=(10/π)sin(πt/20)+C, and V(0)=0 (tank empty) gives
 *   C=0, so V(t)=(10/π)sin(πt/20). Matches doc, unchanged.
 *
 * Usage:
 *   node tools/scripts/fixCthsS20AndAsc34vOptions.js
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

async function main() {
  const touchedChapters = new Set();

  // --- cths2020s-q20: wrong answer key + garbage options ---
  {
    const ref = db.collection('questions').doc('cths2020s-q20');
    const doc = await ref.get();
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn('SKIP cths2020s-q20 — origin:teacher.'); }
    else if (data.answer !== '3') {
      console.warn(`SKIP cths2020s-q20 — answer is '${data.answer}', expected '3'. Already changed.`);
    } else {
      await ref.set({
        answer: '3',
        solution: 'The correct answer is (a) $y=\\dfrac{x^3}{3}+2x^2-5x-2$ (b) $x+16y-163=0$.',
        options: [
          { text: '(a) $y = \\dfrac{x^3}{3} + 2x^2 - 5x + 4$\n(b) $x + 16y - 163 = 0$', imageUrl: '' }, // old wrong C, kept as an honest distractor
          { text: '(a) $y = \\dfrac{x^3}{3} + 2x^2 - 5x - 2$\n(b) $x - 16y + 157 = 0$', imageUrl: '' }, // sign error in normal line
          { text: '(a) $y = \\dfrac{x^3}{3} + 2x^2 - 5x - 2$\n(b) $16x - y - 38 = 0$', imageUrl: '' }, // used tangent instead of normal
          { text: '(a) $y = \\dfrac{x^3}{3} + 2x^2 - 5x - 2$\n(b) $x + 16y - 163 = 0$', imageUrl: '' }, // correct
        ],
      }, { merge: true });
      console.log('✓ cths2020s-q20 — wrong answer key fixed (part a constant +4 → -2), options rebuilt');
      if (data.chapterId) touchedChapters.add(data.chapterId);
    }
  }

  // --- asc2020-q34v: garbage-fraction distractors ---
  {
    const ref = db.collection('questions').doc('asc2020-q34v');
    const doc = await ref.get();
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn('SKIP asc2020-q34v — origin:teacher.'); }
    else if (data.answer !== '3') {
      console.warn(`SKIP asc2020-q34v — answer is '${data.answer}', expected '3'. Already changed.`);
    } else {
      const newOptions = [...data.options];
      newOptions[0] = { text: '(a) $t = 20$ min (b) $V = \\dfrac{10}{\\pi}\\sin\\dfrac{\\pi t}{20}$', imageUrl: '' }; // used full period instead of quarter period
      newOptions[1] = { text: '(a) $t = 10$ min (b) $V = \\dfrac{10}{\\pi}\\cos\\dfrac{\\pi t}{20}$', imageUrl: '' }; // used cos instead of sin (forgot the reverse chain rule swaps sin/cos)
      newOptions[2] = { text: '(a) $t = 10$ min (b) $V = 10\\sin\\dfrac{\\pi t}{20}$', imageUrl: '' }; // dropped the 1/π correction factor
      await ref.set({ options: newOptions }, { merge: true });
      console.log('✓ asc2020-q34v — 3 garbage-fraction distractors replaced with real ones');
      if (data.chapterId) touchedChapters.add(data.chapterId);
    }
  }

  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
