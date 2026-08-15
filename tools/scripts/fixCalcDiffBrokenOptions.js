#!/usr/bin/env node
/**
 * Fix broken multiple-choice content on 5 CALC-DIFF-01 questions found
 * while scoping the pilot reasoning-blueprint batch for this DNA
 * (2026-08-15). Same leftover generic-template distractor bug already
 * found and fixed twice before (dane2020-q37, asc2020-q30-*) — a corpus
 * search shows \dfrac{12}{x+2} / \dfrac{13}{x+3} appear 355 times across
 * src/constants/seed*.js, far beyond this DNA's scope; that broader sweep
 * is flagged separately (spawn_task), not fixed here. This script only
 * touches the 5 CALC-DIFF-01 questions this pilot batch is about to build
 * reasoning steps on top of.
 *
 * Every marked-correct answer was independently verified unaffected —
 * only the nonsensical garbage-fraction distractors are replaced with
 * real near-miss options computed from plausible mistakes:
 *
 *  - car2020-q34 (y=tan²x, d²y/dx²=ay²+by+2, solve for a,b — correct
 *    a=6,b=8 unchanged): added "a=8,b=6" (swapped) and "a=2,b=8"
 *    (arithmetic slip) distractors.
 *  - cra2023-q31 (chain-rule rate-of-change, correct 80 W/s unchanged,
 *    verified: H'=2·f(g(t))·f'(g(t))·g'(t) = 2×5×2×4 = 80): added
 *    "20 W/s" (forgot the g'(t)=4 factor) and "40 W/s" (forgot the
 *    outer factor of 2 from d/dx[f²]) distractors.
 *  - asc2020-q14 (f(x)=x/ln x, solve f'(x)=0, correct x=e unchanged):
 *    added "x = 1/e" (sign-flip solving ln x = 1 as ln x = -1).
 *  - fortst2020-q19b (minimise travel time T(θ), correct θ≈19°28'
 *    unchanged, verified arcsin(1/3)≈19.47°=19°28'): added
 *    "θ ≈ 70°32'" (confusing sin and cos — arccos(1/3)≈70.53°=70°32',
 *    a genuine sin/cos mix-up distractor).
 *  - baulko2020-q11aiv (differentiate y=(3x-2)(3x+2), correct 18x
 *    unchanged): added "9x² - 4" (gave the expanded original function
 *    instead of differentiating it — a real conceptual-error distractor).
 *
 * Usage:
 *   node tools/scripts/fixCalcDiffBrokenOptions.js
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

const GARBAGE = ['\\(\\dfrac{12}{x + 2}\\)', '\\(\\dfrac{13}{x + 3}\\)'];

const FIXES = [
  {
    id: 'car2020-q34',
    expectAnswer: '2',
    replacements: {
      '\\(\\dfrac{12}{x + 2}\\)': '\\(a = 8,\\ b = 6\\)',
      '\\(\\dfrac{13}{x + 3}\\)': '\\(a = 2,\\ b = 8\\)',
    },
  },
  {
    id: 'cra2023-q31',
    expectAnswer: '0',
    replacements: {
      '\\(\\dfrac{12}{x + 2}\\)': '\\(20\\) watts per second',
      '\\(\\dfrac{13}{x + 3}\\)': '\\(40\\) watts per second',
    },
  },
  {
    id: 'asc2020-q14',
    expectAnswer: '2',
    replacements: {
      '\\(\\dfrac{13}{x + 3}\\)': '\\(x = \\dfrac{1}{e}\\)',
    },
  },
  {
    id: 'fortst2020-q19b',
    expectAnswer: '1',
    replacements: {
      '\\(\\dfrac{13}{x + 3}\\)': '\\(\\theta \\approx 70°32\'\\)',
    },
  },
  {
    id: 'baulko2020-q11aiv',
    expectAnswer: '1',
    replacements: {
      '\\(\\dfrac{13}{x + 3}\\)': '\\(9x^{2} - 4\\)',
    },
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
    let changed = 0;
    const newOptions = (data.options || []).map((o) => {
      if (fix.replacements[o.text]) {
        changed += 1;
        return { text: fix.replacements[o.text], imageUrl: o.imageUrl || '' };
      }
      return o;
    });
    if (changed !== Object.keys(fix.replacements).length) {
      console.warn(`SKIP ${fix.id} — expected to replace ${Object.keys(fix.replacements).length} option(s), matched ${changed}. Content may have changed — not touching.`);
      continue;
    }
    await ref.set({ options: newOptions }, { merge: true });
    console.log(`✓ ${fix.id} — ${changed} garbage distractor(s) replaced`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
