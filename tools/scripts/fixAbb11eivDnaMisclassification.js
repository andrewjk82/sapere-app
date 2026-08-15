#!/usr/bin/env node
/**
 * Fix a 12th dnaId misclassification found while scoping CALC-DIFF-01
 * batch 6 (2026-08-15) — same pattern as fortst2020-q8
 * (fixCalcDiffDnaMisclassification.js): abb2020-q11eiv asks for the
 * equation of the NORMAL to a curve at a point, which tests forming a
 * tangent/normal line from a derivative (CALC-TAN-01's own skill), not
 * plain direct differentiation.
 *
 * Usage:
 *   node tools/scripts/fixAbb11eivDnaMisclassification.js
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

const ID = 'abb2020-q11eiv';
const OLD_DNA = 'CALC-DIFF-01';
const NEW_DNA = 'CALC-TAN-01';
const REASON = 'Question asks for the equation of the NORMAL to a curve — tests forming a tangent/normal line from a derivative (CALC-TAN-01), not plain direct differentiation. Same pattern as fortst2020-q8.';

async function main() {
  const ref = db.collection('questions').doc(ID);
  const doc = await ref.get();
  if (!doc.exists) { console.error(`${ID} not found — aborting.`); process.exit(1); }
  const data = doc.data();
  if (data.origin === 'teacher') { console.error(`${ID} is origin:'teacher' — refusing to touch.`); process.exit(1); }
  if (data.dnaId !== OLD_DNA) {
    console.error(`${ID} dnaId is already '${data.dnaId}', not '${OLD_DNA}' — already fixed, aborting.`);
    process.exit(1);
  }

  await ref.set({
    dnaId: NEW_DNA,
    dnaConfidence: 1.0,
    dnaReclassifiedReason: REASON,
    dnaReclassifiedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  console.log(`✓ ${ID}: ${OLD_DNA} → ${NEW_DNA}`);

  await db.collection('question_dna').doc(OLD_DNA).update({ count: FieldValue.increment(-1) });
  await db.collection('question_dna').doc(NEW_DNA).update({ count: FieldValue.increment(1) });
  console.log('✓ question_dna counts updated');

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);

  const classified = JSON.parse(readFileSync(CLASSIFIED_PATH, 'utf8'));
  let changed = 0;
  for (const item of classified) {
    if (item.question_id === ID && item.dna_id === OLD_DNA) {
      item.dna_id = NEW_DNA;
      item.dna_confidence = 1.0;
      item.classification_method = 'manual_review';
      item.review_required = false;
      changed++;
    }
  }
  writeFileSync(CLASSIFIED_PATH, JSON.stringify(classified, null, 2) + '\n');
  console.log(`✓ questions_classified.json — ${changed} entries updated`);

  const freq = JSON.parse(readFileSync(FREQ_PATH, 'utf8'));
  freq[OLD_DNA].question_ids = freq[OLD_DNA].question_ids.filter((q) => q !== ID);
  freq[OLD_DNA].count = freq[OLD_DNA].question_ids.length;
  freq[NEW_DNA] = freq[NEW_DNA] || { count: 0, question_ids: [] };
  if (!freq[NEW_DNA].question_ids.includes(ID)) freq[NEW_DNA].question_ids.push(ID);
  freq[NEW_DNA].count = freq[NEW_DNA].question_ids.length;
  writeFileSync(FREQ_PATH, JSON.stringify(freq, null, 2) + '\n');
  console.log('✓ frequency_by_dna.json updated');
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
