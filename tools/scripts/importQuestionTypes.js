#!/usr/bin/env node
/**
 * Phase 1 — Import question type taxonomy to Firestore
 *
 * Writes:
 *   question_types/{typeSlug}        — type definition docs
 *   question_type_index/{typeSlug}   — { ids, count, label } (like question_index)
 *
 * Backfills:
 *   questions/{id}.questionType      — only if field is missing (safe to re-run)
 *
 * Usage:
 *   node tools/scripts/importQuestionTypes.js
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, 'output');

// ─── Firebase Admin init ──────────────────────────────────────────────────────
// Looks for service account key at project root or via env var
const POSSIBLE_KEY_PATHS = [
  join(__dirname, '../../serviceAccountKey.json'),
  join(__dirname, '../../firebase-service-account.json'),
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
].filter(Boolean);

let app;
for (const keyPath of POSSIBLE_KEY_PATHS) {
  try {
    const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
    app = initializeApp({ credential: cert(serviceAccount) });
    console.log(`Using service account: ${keyPath}`);
    break;
  } catch { /* try next */ }
}
if (!app) {
  console.error('ERROR: No Firebase service account key found.');
  console.error('Place serviceAccountKey.json in the project root, or set GOOGLE_APPLICATION_CREDENTIALS.');
  process.exit(1);
}

const db = getFirestore(app);

// ─── Load taxonomy output ─────────────────────────────────────────────────────
const taxonomy = JSON.parse(readFileSync(join(OUTPUT_DIR, 'question_types_taxonomy.json'), 'utf8'));
const assignments = JSON.parse(readFileSync(join(OUTPUT_DIR, 'question_type_assignments.json'), 'utf8'));

// ─── Helper: batch writes ─────────────────────────────────────────────────────
async function commitBatches(operations) {
  const BATCH_SIZE = 450;
  for (let i = 0; i < operations.length; i += BATCH_SIZE) {
    const batch = db.batch();
    operations.slice(i, i + BATCH_SIZE).forEach(({ ref, data, merge }) => {
      if (merge) batch.set(ref, data, { merge: true });
      else batch.set(ref, data);
    });
    await batch.commit();
    process.stdout.write(`  committed ${Math.min(i + BATCH_SIZE, operations.length)}/${operations.length}\r`);
  }
  console.log('');
}

// ─── Step 1: Write question_types collection ──────────────────────────────────
console.log('\n[1/3] Writing question_types collection...');
const typeOps = taxonomy.types.map(t => ({
  ref: db.collection('question_types').doc(t.slug),
  data: {
    slug: t.slug,
    label: t.label,
    description: t.description,
    chapterIds: t.chapterIds,
    examLevel: t.examLevel,
    count: t.count,
    updatedAt: FieldValue.serverTimestamp(),
  },
}));
await commitBatches(typeOps);
console.log(`  ✅ ${typeOps.length} type documents written.`);

// ─── Step 2: Write question_type_index collection ─────────────────────────────
console.log('\n[2/3] Writing question_type_index collection...');
const indexOps = taxonomy.types.map(t => ({
  ref: db.collection('question_type_index').doc(t.slug),
  data: {
    slug: t.slug,
    label: t.label,
    ids: t.questionIds,
    count: t.questionIds.length,
    updatedAt: FieldValue.serverTimestamp(),
  },
}));
await commitBatches(indexOps);
console.log(`  ✅ ${indexOps.length} index documents written.`);

// ─── Step 3: Backfill questionType field on questions docs ────────────────────
console.log('\n[3/3] Backfilling questionType on questions docs...');
const allIds = Object.keys(assignments);
let updated = 0;
let skipped = 0;

// Process in batches of 100 (check first, then write only if missing)
const CHUNK = 100;
for (let i = 0; i < allIds.length; i += CHUNK) {
  const chunk = allIds.slice(i, i + CHUNK);
  const refs = chunk.map(id => db.collection('questions').doc(id));

  const snaps = await db.getAll(...refs);
  const writeOps = [];
  snaps.forEach((snap, idx) => {
    const id = chunk[idx];
    if (!snap.exists) { skipped++; return; }          // not in Firestore yet
    if (snap.data().questionType) { skipped++; return; } // already has type
    writeOps.push({
      ref: refs[idx],
      data: { questionType: assignments[id], updatedAt: FieldValue.serverTimestamp() },
      merge: true,
    });
  });

  if (writeOps.length > 0) {
    const batch = db.batch();
    writeOps.forEach(({ ref, data }) => batch.update(ref, data));
    await batch.commit();
    updated += writeOps.length;
  }

  process.stdout.write(`  ${i + chunk.length}/${allIds.length} checked, ${updated} updated\r`);
}

console.log(`\n  ✅ ${updated} questions backfilled, ${skipped} skipped (not in DB or already typed).`);

console.log(`
✅ Import complete!
   - ${typeOps.length} question types in question_types/
   - ${indexOps.length} index docs in question_type_index/
   - ${updated} questions backfilled with questionType field
`);
process.exit(0);
