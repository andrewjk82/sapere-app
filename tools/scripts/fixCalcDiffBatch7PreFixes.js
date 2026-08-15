#!/usr/bin/env node
/**
 * Pre-fixes for CALC-DIFF-01 batch 7 (2026-08-15, same day):
 *
 * 1. Equivalent-option ambiguity bug, 7th & 8th instances this session:
 *    - asc2020-q14v: options[1] "x=1/√e" (\dfrac) and options[2]
 *      "x=1/√e" (\frac) are the same value; options[3] is also malformed
 *      LaTeX ("\frac{\sqrt{e}{1}}", missing a brace). Verified: g(x)=
 *      x²lnx, g'(x)=2xlnx+x=x(2lnx+1)=0 (x>0) => lnx=-1/2 => x=e^{-1/2}=
 *      1/√e. Marked answer (index1) unaffected. Replaced [2] with a real
 *      distractor (forgot the 1/2, treated lnx=-1 => x=1/e) and fixed the
 *      malformed [3] into a real distractor (sign error, lnx=1/2 =>
 *      x=√e).
 *    - baulko2020-q11aiiv: options[0] "--\sin 2x" is the same value as
 *      the marked-correct options[1] "-\sin 2x" (a stray extra "-" glued
 *      on, same pattern as bbhs2020-18a/cths2020-q25). Verified:
 *      y=cos²x, y'=2cosx(-sinx)=-2sinxcosx=-sin2x. Replaced [0] with a
 *      real distractor (forgot the chain-rule factor of 2, giving
 *      -sinxcosx instead).
 *
 * 2. dnaId misclassifications (13th & 14th this DNA):
 *    - bar2020-q12av: "Evaluate ∫5^x dx" — pure integration, same
 *      pattern as bar2020-q12a/dane2020-mc10.        → CALC-INT-01
 *    - abb2020-q15aiv: "Show how Isabelle used the Trapezoidal Rule..."
 *      — numerical approximation of a definite integral (area under a
 *      curve), zero differentiation content.          → CALC-AREA-01
 *
 * Usage:
 *   node tools/scripts/fixCalcDiffBatch7PreFixes.js
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { touchChapterIndex } from './_lib/touchChapterIndex.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLASSIFIED_PATH = join(__dirname, '../dna/output/questions_classified.json');
const FREQ_PATH = join(__dirname, '../dna/output/frequency_by_dna.json');

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

const OPTION_FIXES = [
  {
    id: 'asc2020-q14v',
    expectAnswer: '1',
    replaceIndex: {
      2: '\\(x = \\dfrac{1}{e}\\)',
      3: '\\(x = \\sqrt{e}\\)',
    },
  },
  {
    id: 'baulko2020-q11aiiv',
    expectAnswer: '1',
    replaceIndex: { 0: '\\(-\\sin x\\cos x\\)' },
  },
];

const OLD_DNA = 'CALC-DIFF-01';
const RECLASSIFICATIONS = {
  'bar2020-q12av': { newDna: 'CALC-INT-01', reason: 'Question is "Evaluate ∫5^x dx" — pure integration, not differentiation. Same pattern as bar2020-q12a/dane2020-mc10.' },
  'abb2020-q15aiv': { newDna: 'CALC-AREA-01', reason: 'Question is about the Trapezoidal Rule approximating a definite integral (area under a curve) — zero differentiation content.' },
};

async function fixOptions() {
  const touchedChapters = new Set();
  for (const fix of OPTION_FIXES) {
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
    console.log(`✓ ${fix.id} — ${Object.keys(fix.replaceIndex).length} option(s) fixed`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  return touchedChapters;
}

async function fixDnaMisclassifications() {
  const chapters = new Set();
  const deltas = {};
  for (const [id, { newDna, reason }] of Object.entries(RECLASSIFICATIONS)) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    if (data.dnaId !== OLD_DNA) {
      console.warn(`SKIP ${id} — dnaId is already '${data.dnaId}', not '${OLD_DNA}' (already fixed?).`);
      continue;
    }
    await ref.set({
      dnaId: newDna,
      dnaConfidence: 1.0,
      dnaReclassifiedReason: reason,
      dnaReclassifiedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log(`✓ ${id}: ${OLD_DNA} → ${newDna}`);
    chapters.add(data.chapterId);
    deltas[OLD_DNA] = (deltas[OLD_DNA] || 0) - 1;
    deltas[newDna] = (deltas[newDna] || 0) + 1;
  }
  for (const [dnaId, delta] of Object.entries(deltas)) {
    await db.collection('question_dna').doc(dnaId).update({ count: FieldValue.increment(delta) });
    console.log(`✓ question_dna/${dnaId}.count ${delta >= 0 ? '+' : ''}${delta}`);
  }

  const classified = JSON.parse(readFileSync(CLASSIFIED_PATH, 'utf8'));
  let changed = 0;
  for (const item of classified) {
    const fix = RECLASSIFICATIONS[item.question_id];
    if (fix && item.dna_id === OLD_DNA) {
      item.dna_id = fix.newDna;
      item.dna_confidence = 1.0;
      item.classification_method = 'manual_review';
      item.review_required = false;
      changed++;
    }
  }
  writeFileSync(CLASSIFIED_PATH, JSON.stringify(classified, null, 2) + '\n');
  console.log(`✓ questions_classified.json — ${changed} entries updated`);

  const freq = JSON.parse(readFileSync(FREQ_PATH, 'utf8'));
  for (const [id, { newDna }] of Object.entries(RECLASSIFICATIONS)) {
    const oldEntry = freq[OLD_DNA];
    if (oldEntry?.question_ids?.includes(id)) {
      oldEntry.question_ids = oldEntry.question_ids.filter((q) => q !== id);
      oldEntry.count = oldEntry.question_ids.length;
    }
    freq[newDna] = freq[newDna] || { count: 0, question_ids: [] };
    if (!freq[newDna].question_ids.includes(id)) {
      freq[newDna].question_ids.push(id);
      freq[newDna].count = freq[newDna].question_ids.length;
    }
  }
  writeFileSync(FREQ_PATH, JSON.stringify(freq, null, 2) + '\n');
  console.log(`✓ frequency_by_dna.json updated`);

  return chapters;
}

async function main() {
  const c1 = await fixOptions();
  const c2 = await fixDnaMisclassifications();
  const allChapters = new Set([...c1, ...c2]);
  for (const chapterId of allChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
