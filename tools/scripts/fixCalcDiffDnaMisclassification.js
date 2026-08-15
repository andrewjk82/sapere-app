#!/usr/bin/env node
/**
 * Fix 3 dnaId misclassifications found while scoping CALC-DIFF-01 batch 3
 * (2026-08-15) — same class of bug as fixBbhs2020DnaMisclassification.js /
 * fixCra2023DnaMisclassification.js: content doesn't match the tagged DNA.
 *
 *   bar2020-q12a   — "Evaluate ∫3^x dx" — pure integration, not
 *                    differentiation.                    → CALC-INT-01
 *   dane2020-mc10  — "What is ∫_1^2 2^{-x} dx?" — pure definite
 *                    integration.                         → CALC-INT-01
 *   fortst2020-q8  — "Find the equation of the NORMAL to the curve
 *                    y=ln((2x-1)/(x+1)) at x=2" — the skill being tested
 *                    is forming a tangent/normal line equation from a
 *                    derivative (differentiate → evaluate gradient → form
 *                    line equation), which is CALC-TAN-01's own operations
 *                    list verbatim, not plain "direct differentiation".
 *                                                          → CALC-TAN-01
 *
 * Updates:
 *   - questions/{id}.dnaId (+ dnaConfidence: 1.0, manual reclassification)
 *   - question_dna/{CALC-DIFF-01,CALC-INT-01,CALC-TAN-01}.count deltas
 *   - touches question_index/{chapterId} (content-only edit)
 *   - tools/dna/output/questions_classified.json and frequency_by_dna.json
 *     (source-of-truth files importQuestionDna.js reads — kept in sync so a
 *     future full re-import doesn't revert this fix)
 *
 * Usage:
 *   node tools/scripts/fixCalcDiffDnaMisclassification.js
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

const OLD_DNA = 'CALC-DIFF-01';
const RECLASSIFICATIONS = {
  'bar2020-q12a': { newDna: 'CALC-INT-01', reason: 'Question is "Evaluate ∫3^x dx" — pure integration, not differentiation.' },
  'dane2020-mc10': { newDna: 'CALC-INT-01', reason: 'Question is "∫_1^2 2^{-x} dx" — pure definite integration, not differentiation.' },
  'fortst2020-q8': { newDna: 'CALC-TAN-01', reason: 'Question asks for the equation of the normal to a curve — tests forming a tangent/normal line from a derivative (CALC-TAN-01\'s operations), not plain direct differentiation.' },
};

async function updateFirestore() {
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

  for (const chapterId of chapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

function updateSourceFiles() {
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
}

async function main() {
  await updateFirestore();
  updateSourceFiles();
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
