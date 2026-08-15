#!/usr/bin/env node
/**
 * Fix the "equivalent-option ambiguity" bug found 4x while building
 * CALC-DIFF-01 reasoning blueprints (2026-08-15): a question has two MC
 * options that are textually different but algebraically/rendered
 * IDENTICAL (unfactored vs factored form, \frac vs \dfrac, terms
 * reordered, or a stray leading "-" glued onto an otherwise-identical
 * copy of the correct option) — a real grading trap, since a student
 * picking the "wrong" duplicate is marked incorrect for an answer that's
 * actually right.
 *
 *   bar2020-q11bi  — options[1] "e^{3x}+3xe^{3x}" is algebraically
 *                    IDENTICAL to the marked-correct options[2]
 *                    "e^{3x}(3x+1)" (just unfactored). Replaced [1] with
 *                    a real distractor: forgetting the chain-rule factor
 *                    of 3 when differentiating e^{3x} gives
 *                    e^{3x}(x+1) instead — genuinely wrong, not a dup.
 *   bbhs2020-18a   — options[0] is the exact same statement as the
 *                    marked-correct options[3], just with a stray
 *                    leading "-" glued on and \frac instead of \dfrac —
 *                    textually different, same rendered content.
 *                    Replaced [0] with a real distractor: swapping which
 *                    term gets sin vs cos (a genuine mix-up).
 *   girr2020-mc16s — options[1] "e^{-2x}(\cos x - 2\sin x)" is the exact
 *                    same expression as the marked-correct options[2]
 *                    "e^{-2x}(-2\sin x + \cos x)", terms reordered.
 *                    Replaced [1] with a real distractor: forgetting the
 *                    chain-rule factor of 2 on e^{-2x}'s own derivative
 *                    gives e^{-2x}(\cos x - \sin x) instead.
 *   cths2020-q25   — THREE of the four options ([0],[1],[3]) are all the
 *                    same value \frac{1}{6}\ln|...|+C (just \dfrac vs
 *                    \frac macro, and a stray "-" prefix on [3]). Kept
 *                    [0] as the correct answer, fixed [1] to a real
 *                    distractor (forgot the 1/6 scaling factor
 *                    entirely), fixed [3] to a real distractor (sign
 *                    error: -1/6 instead of +1/6). [2] ("6\ln|...|+C",
 *                    the reciprocal-confusion mistake) was already a
 *                    genuinely distinct value — untouched.
 *   cths2020s-q25  — the "similar questions" variant of cths2020-q25
 *                    (numbers 5,10 instead of 3,6) has the exact same bug
 *                    — same fix pattern applied.
 *
 * All marked-correct answers verified unaffected — only the duplicate
 * options are replaced, with the correct index/value untouched.
 *
 * Usage:
 *   node tools/scripts/fixEquivalentOptionAmbiguity.js
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
    id: 'bar2020-q11bi',
    expectAnswer: '2',
    replaceIndex: { 1: '\\(e^{3x}(x+1)\\)' },
  },
  {
    id: 'bbhs2020-18a',
    expectAnswer: '3',
    replaceIndex: { 0: 'By the product rule: \\(\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\sin x - e^{2x}\\cos x = e^{2x}(2\\sin x - \\cos x)\\).' },
  },
  {
    id: 'girr2020-mc16s',
    expectAnswer: '2',
    replaceIndex: { 1: '$\\frac{dy}{dx} = e^{-2x}(\\cos x - \\sin x)$' },
  },
  {
    id: 'cths2020-q25',
    expectAnswer: '0',
    replaceIndex: {
      1: '(a) Proof shown.\n(b) \\(\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C\\)',
      3: '(a) Proof shown.\n(b) \\(-\\dfrac{1}{6}\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C\\)',
    },
  },
  {
    id: 'cths2020s-q25',
    expectAnswer: '0',
    replaceIndex: {
      1: '(a) Proof shown.\n(b) \\(\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\)',
      3: '(a) Proof shown.\n(b) \\(-\\dfrac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\)',
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
    const newOptions = (data.options || []).map((o, i) =>
      fix.replaceIndex[i] !== undefined ? { text: fix.replaceIndex[i], imageUrl: o.imageUrl || '' } : o
    );
    await ref.set({ options: newOptions }, { merge: true });
    console.log(`✓ ${fix.id} — ${Object.keys(fix.replaceIndex).length} duplicate option(s) replaced`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
