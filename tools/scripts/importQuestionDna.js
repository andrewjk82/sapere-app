#!/usr/bin/env node
/**
 * Import Question DNA into Firestore (HSC past-paper corpus only)
 *
 * Writes:
 *   question_dna/{dnaId}   — 33 canonical DNA definition docs (tools/dna/dnaTaxonomy.js)
 *
 * Backfills:
 *   questions/{id}.dnaId, .dnaConfidence   — only for the ~772 HSC trial-paper
 *   questions classified in tools/dna/output/questions_classified.json
 *   (UNCLASSIFIED items are skipped — see tools/dna/output/question_dna_candidates.json)
 *
 * Scope: point-reads by id only (never an unfiltered `questions` scan — see
 * tools/scripts/CLAUDE.md). Skips docs with origin:'teacher' (teacher edits
 * win) and docs that already have a dnaId (safe to re-run).
 *
 * This is a content-only edit (no add/delete/rename of questions docs), so
 * per tools/scripts/CLAUDE.md we touch each affected exam:* chapter's
 * question_index doc instead of running the full rebuildQuestionIndexes.js.
 *
 * Usage:
 *   node tools/scripts/importQuestionDna.js
 */

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { QUESTION_DNA, DNA_TAXONOMY_VERSION } from '../dna/dnaTaxonomy.js';
import { touchChapterIndexes } from './_lib/touchChapterIndex.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DNA_OUTPUT_DIR = join(__dirname, '../dna/output');

// ─── Firebase Admin init ──────────────────────────────────────────────────────
const POSSIBLE_KEY_PATHS = [
  join(__dirname, '../../serviceAccountKey.json'),
  join(__dirname, '../../firebase-service-account.json'),
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', // used by rebuildHscPastPaperPool.mjs on this machine
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

// ─── Exam chapters this DNA pass covers (src/constants/curriculumSeeds.js) ────
const EXAM_CHAPTER_IDS = [
  'exam:caringbah-2020', 'exam:abbotsleigh-2020', 'exam:abb-2020-ext1',
  'exam:asc-2020', 'exam:bar-2020', 'exam:baulko-2020', 'exam:bbhs-2020',
  'exam:cra-2023', 'exam:dane-2020', 'exam:fortst-2020', 'exam:cths-2020',
  'exam:girr-2020',
];

async function commitBatches(operations) {
  const BATCH_SIZE = 450;
  for (let i = 0; i < operations.length; i += BATCH_SIZE) {
    const batch = db.batch();
    operations.slice(i, i + BATCH_SIZE).forEach(({ ref, data, merge }) => {
      if (merge) batch.set(ref, data, { merge: true });
      else batch.update(ref, data);
    });
    await batch.commit();
    process.stdout.write(`  committed ${Math.min(i + BATCH_SIZE, operations.length)}/${operations.length}\r`);
  }
  console.log('');
}

async function main() {
  const classified = JSON.parse(readFileSync(join(DNA_OUTPUT_DIR, 'questions_classified.json'), 'utf8'));
  const freqByDna = JSON.parse(readFileSync(join(DNA_OUTPUT_DIR, 'frequency_by_dna.json'), 'utf8'));

  // ─── Step 1: question_dna collection ─────────────────────────────────────
  console.log('\n[1/2] Writing question_dna collection...');
  const dnaOps = QUESTION_DNA.map(d => ({
    ref: db.collection('question_dna').doc(d.dna_id),
    merge: true,
    data: {
      dnaId: d.dna_id,
      family: d.family,
      skill: d.skill,
      operations: d.operations,
      priorityScore: d.priorityScore,
      taxonomyVersion: d.dna_version || DNA_TAXONOMY_VERSION,
      ...(d.created_reason ? { createdReason: d.created_reason } : {}),
      count: freqByDna[d.dna_id]?.count || 0,
      updatedAt: FieldValue.serverTimestamp(),
    },
  }));
  await commitBatches(dnaOps);
  console.log(`  ✅ ${dnaOps.length} DNA documents written.`);

  // ─── Step 2: backfill dnaId on questions docs (point-reads only) ─────────
  console.log('\n[2/2] Backfilling dnaId on questions docs...');
  const toBackfill = classified.filter(r => r.dna_id && r.dna_id !== 'UNCLASSIFIED');
  const CHUNK = 100;
  let updated = 0, skippedTeacher = 0, skippedMissing = 0, skippedAlready = 0;
  const touchedChapters = new Set();

  for (let i = 0; i < toBackfill.length; i += CHUNK) {
    const chunk = toBackfill.slice(i, i + CHUNK);
    const refs = chunk.map(r => db.collection('questions').doc(r.question_id));
    const snaps = await db.getAll(...refs);

    const writeOps = [];
    snaps.forEach((snap, idx) => {
      const rec = chunk[idx];
      if (!snap.exists) { skippedMissing++; return; }
      const data = snap.data();
      if (data.origin === 'teacher') { skippedTeacher++; return; } // teacher edits win — never overwrite
      if (data.dnaId) { skippedAlready++; return; }                 // safe to re-run
      writeOps.push({
        ref: refs[idx],
        data: { dnaId: rec.dna_id, dnaConfidence: rec.dna_confidence, updatedAt: FieldValue.serverTimestamp() },
        merge: true,
      });
      if (data.chapterId) touchedChapters.add(data.chapterId);
    });

    if (writeOps.length > 0) {
      const batch = db.batch();
      writeOps.forEach(({ ref, data }) => batch.set(ref, data, { merge: true }));
      await batch.commit();
      updated += writeOps.length;
    }
    process.stdout.write(`  ${Math.min(i + CHUNK, toBackfill.length)}/${toBackfill.length} checked, ${updated} updated\r`);
  }
  console.log(`\n  ✅ ${updated} questions backfilled. Skipped: ${skippedMissing} missing, ${skippedTeacher} teacher-owned, ${skippedAlready} already tagged.`);

  // ─── Step 3: touch chapter indexes (content-only edit, per CLAUDE.md) ────
  console.log('\n[3/3] Touching exam chapter indexes (content-only edit)...');
  const touched = await touchChapterIndexes(db, EXAM_CHAPTER_IDS);
  console.log(`  ✅ Touched ${touched.length}/${EXAM_CHAPTER_IDS.length} chapter indexes:`, touched);

  console.log(`\n✅ Question DNA import complete.`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
