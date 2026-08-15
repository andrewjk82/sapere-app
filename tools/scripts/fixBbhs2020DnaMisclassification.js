#!/usr/bin/env node
/**
 * Fix a dnaId misclassification found while building the FIN-GP-01
 * reasoning-blueprint pilot (2026-08-15, see addQuestionReasoningBlueprint.js
 * header): bbhs2020-30a/b/c were tagged FIN-GP-01 (Financial geometric-series
 * modelling) via the topic_label-based classification pass ("8A —
 * Applications of APs and GPs", never manually reviewed), but the question
 * itself is an arithmetic (AP) rose-garden problem, not geometric:
 *
 *   30a — find the 8th term of an AP (a=24, d=5)          → SEQ-01
 *   30b — find the first row exceeding 150 (nth-term/AP)  → SEQ-01
 *   30c — sum of an AP = 2895, solve for number of rows   → SERIES-01
 *
 * Updates:
 *   - questions/{id}.dnaId (+ dnaConfidence: 1.0, manual reclassification)
 *   - question_dna/{FIN-GP-01,SEQ-01,SERIES-01}.count (-3/+2/+1)
 *   - touches question_index/exam:bbhs-2020 (content-only edit, see
 *     tools/scripts/CLAUDE.md)
 *   - tools/dna/output/questions_classified.json and frequency_by_dna.json
 *     (source-of-truth files importQuestionDna.js reads — kept in sync so a
 *     future full re-import doesn't revert this fix)
 *
 * Usage:
 *   node tools/scripts/fixBbhs2020DnaMisclassification.js
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

const RECLASSIFICATIONS = {
  'bbhs2020-30a': 'SEQ-01',
  'bbhs2020-30b': 'SEQ-01',
  'bbhs2020-30c': 'SERIES-01',
};
const OLD_DNA = 'FIN-GP-01';

async function updateFirestore() {
  const chapters = new Set();
  const deltas = {}; // dnaId -> count delta

  for (const [id, newDna] of Object.entries(RECLASSIFICATIONS)) {
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
      dnaReclassifiedReason: `Misclassified as ${OLD_DNA} via topic_label rule ("Applications of APs and GPs" chapter) — question is arithmetic (AP), not geometric.`,
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
    if (RECLASSIFICATIONS[item.question_id] && item.dna_id === OLD_DNA) {
      item.dna_id = RECLASSIFICATIONS[item.question_id];
      item.dna_confidence = 1.0;
      item.classification_method = 'manual_review';
      item.review_required = false;
      changed++;
    }
  }
  writeFileSync(CLASSIFIED_PATH, JSON.stringify(classified, null, 2) + '\n');
  console.log(`✓ questions_classified.json — ${changed} entries updated`);

  const freq = JSON.parse(readFileSync(FREQ_PATH, 'utf8'));
  for (const [id, newDna] of Object.entries(RECLASSIFICATIONS)) {
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
