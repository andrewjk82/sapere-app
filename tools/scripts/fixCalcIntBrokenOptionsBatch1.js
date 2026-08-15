#!/usr/bin/env node
/**
 * Fix 9 broken-option questions found while scoping CALC-INT-01 batch 2
 * (2026-08-15) — a mix of the classic garbage-fraction template
 * ("12/(x+2)", "13/(x+3)", "9/5", "8/4", "7/3") and the equivalent-
 * option-ambiguity bug (glued double-negatives, \dfrac vs \frac
 * duplicates — same bug class fixed 9x on CALC-DIFF-01 this session).
 * fortst2020-mc10 (empty options, image-based, can't be repaired without
 * the original images) and asc2020-q34 (type:multi_part, its real
 * content lives in sub-question docs, not itself broken) are NOT
 * touched here.
 *
 * All marked-correct answers verified unaffected — only broken/duplicate
 * options are replaced with real, grounded distractors, cross-checked
 * against every other option before trusting each one (per the lesson
 * from cths2020s-q25 earlier this session, where a first-attempt
 * replacement turned out to itself be a duplicate).
 *
 *  - car2020-q31: boat-height cosine model. Verified 2cos(4πt/25)+1=0
 *    => cos(4πt/25)=-1/2 => first positive t=25/6h≈4h10m (matches
 *    correct, unchanged). Replaced the 2 garbage-fraction distractors
 *    with real near-misses: 8:20am (used the OTHER cos=-1/2 solution,
 *    4π/3 instead of 2π/3) and 2:05am (sign error, solved cos=+1/2
 *    instead of -1/2).
 *  - car2020-q36: (a) differentiate xln x, (b) hence evaluate
 *    ∫₁²ln x dx. Verified: d/dx[x ln x]=1+ln x (product rule); ∫ln x dx
 *    = x ln x - x + C (rearranging); [x ln x - x]₁² = (2ln2-2)-(0-1)
 *    = 2ln2-1 (matches correct, unchanged). Replaced 3 garbage-fraction
 *    distractors with real two-part near-misses (forgot the "-x" term;
 *    sign error; wrong derivative in part (a) carried through).
 *  - cths2020-q20: same underlying curve/point as the already-fixed
 *    abb2020-q11eiv/fortst2020-q8 (y'=x³+2x-7, P(2,4)). Verified
 *    y=x⁴/4+x²-7x+10, normal x+5y-22=0 (matches correct, unchanged).
 *    Reused the same real distractor values already used for
 *    abb2020-q11eiv (x-5y+18=0 sign error; 5x-y-6=0 tangent-not-normal
 *    mistake) plus a wrong-C distractor.
 *  - dane2020-q27: ∫cos4x-sinx dx. Verified (1/4)sin4x+cosx+C (matches
 *    correct, unchanged). Replaced the \frac-duplicate of the correct
 *    option with a sign-error distractor on the second term.
 *  - fortst2020-q3a: ∫sin(x/3)dx. Verified -3cos(x/3)+C (matches
 *    correct, unchanged). Replaced the glued-double-negative duplicate
 *    with a dropped-negative-sign distractor.
 *  - fortst2020-q3b: ∫x⁴(x⁵-2)³dx. Verified (1/20)(x⁵-2)⁴+C (reverse
 *    chain rule, matches correct, unchanged). Replaced the \frac-
 *    duplicate with a wrong-denominator distractor (used the new power
 *    4 instead of 5×4=20).
 *  - bar2020-q12b: ∫x/(x²+3)dx. Verified (1/2)ln(x²+3)+C (matches
 *    correct, unchanged). Replaced the \frac-duplicate with a
 *    dropped-correction-factor distractor.
 *  - bbhs2020-17c: ∫(sin10x-2e^{-5x})dx. Verified
 *    -(1/10)cos10x+2/(5e^{5x})+C (matches correct, unchanged). TWO
 *    duplicates in this one (glued double-negative AND \frac-duplicate)
 *    — replaced both with real distractors (dropped negative on first
 *    term; dropped the 1/5 correction factor on the second term).
 *  - bbhs2020-21: "show that" ∫₀²√(4x+1)dx=13/3. Verified 9^{3/2}=27,
 *    1^{3/2}=1, [27/6-1/6]=26/6=13/3 (matches correct, unchanged). This
 *    one had 3 problems at once (a glued-double-negative duplicate, an
 *    internally-INCONSISTENT option whose own arithmetic didn't match
 *    its stated conclusion, and malformed LaTeX with an extra brace) —
 *    fully rebuilt all 3 broken options as internally-consistent wrong
 *    workings (wrong reverse-chain-rule denominator giving 26/3;
 *    evaluated the bracket backwards giving -13/3; forgot the power
 *    giving 4/3).
 *
 * Usage:
 *   node tools/scripts/fixCalcIntBrokenOptionsBatch1.js
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
    id: 'car2020-q31',
    expectAnswer: '0',
    newOptions: [
      '\\(4\\!:\\!10\\) am',
      '\\(4\\!:\\!10\\) am + 1',
      '\\(8\\!:\\!20\\) am',
      '\\(2\\!:\\!05\\) am',
    ],
  },
  {
    id: 'car2020-q36',
    expectAnswer: '3',
    newOptions: [
      '(a) \\(1 + \\log_e x\\)\n\n(b) \\(2\\ln 2\\)',
      '(a) \\(1 + \\log_e x\\)\n\n(b) \\(2\\ln 2 + 1\\)',
      '(a) \\(\\log_e x\\)\n\n(b) \\(\\ln 2 - 1\\)',
      '(a) \\(1 + \\log_e x\\)\n\n(b) \\(2\\ln 2 - 1\\)',
    ],
  },
  {
    id: 'cths2020-q20',
    expectAnswer: '3',
    newOptions: [
      '(a) \\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\)\n(b) \\(x - 5y + 18 = 0\\)',
      '(a) \\(y = \\dfrac{x^4}{4} + x^2 - 7x - 6\\)\n(b) \\(x + 5y - 22 = 0\\)',
      '(a) \\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\)\n(b) \\(5x - y - 6 = 0\\)',
      '(a) \\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\)\n(b) \\(x + 5y - 22 = 0\\)',
    ],
  },
  {
    id: 'dane2020-q27',
    expectAnswer: '1',
    replaceIndex: { 2: '\\(\\dfrac{1}{4}\\sin 4x - \\cos x + C\\)' },
  },
  {
    id: 'fortst2020-q3a',
    expectAnswer: '1',
    replaceIndex: { 0: '\\(3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C\\)' },
  },
  {
    id: 'fortst2020-q3b',
    expectAnswer: '1',
    replaceIndex: { 2: '\\(\\dfrac{1}{4}(x^5 - 2)^4 + C\\)' },
  },
  {
    id: 'bar2020-q12b',
    expectAnswer: '1',
    replaceIndex: { 2: '\\(\\ln(x^2 + 3) + C\\)' },
  },
  {
    id: 'bbhs2020-17c',
    expectAnswer: '1',
    replaceIndex: {
      0: '\\(\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C\\)',
      3: '\\(-\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{e^{5x}} + C\\)',
    },
  },
  {
    id: 'bbhs2020-21',
    expectAnswer: '1',
    newOptions: [
      '\\(\\left[\\dfrac{(4x+1)^{3/2}}{3}\\right]_0^2 = \\dfrac{27}{3} - \\dfrac{1}{3} = \\dfrac{26}{3}\\)',
      '\\(\\left[\\dfrac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\dfrac{27}{6} - \\dfrac{1}{6} = \\dfrac{26}{6} = \\dfrac{13}{3}\\)',
      '\\(\\left[\\dfrac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\dfrac{1}{6} - \\dfrac{27}{6} = -\\dfrac{26}{6} = -\\dfrac{13}{3}\\)',
      '\\(\\left[\\dfrac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\dfrac{9}{6} - \\dfrac{1}{6} = \\dfrac{8}{6} = \\dfrac{4}{3}\\)',
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
      console.warn(`SKIP ${fix.id} — answer is '${data.answer}', expected '${fix.expectAnswer}'. Already changed — not touching.`);
      continue;
    }
    let newOptions;
    if (fix.newOptions) {
      newOptions = fix.newOptions.map((text, i) => ({ text, imageUrl: data.options[i]?.imageUrl || '' }));
    } else {
      newOptions = data.options.map((o, i) =>
        fix.replaceIndex[i] !== undefined ? { text: fix.replaceIndex[i], imageUrl: o.imageUrl || '' } : o
      );
    }
    // sanity check: no two options should render to the same text
    const seen = new Set();
    let dupFound = false;
    for (const o of newOptions) {
      const norm = o.text.replace(/\\dfrac/g, '\\frac').replace(/\s+/g, ' ').trim();
      if (seen.has(norm)) { dupFound = true; break; }
      seen.add(norm);
    }
    if (dupFound) {
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
