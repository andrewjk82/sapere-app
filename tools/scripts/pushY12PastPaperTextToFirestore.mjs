#!/usr/bin/env node
// Push the restored question/hint text (now in src/constants/seed*.js) into
// live Firestore `questions/{id}` docs, but ONLY where:
//   - the doc exists
//   - origin !== 'teacher' (never overwrite teacher edits)
//   - the doc's current `question` (or `hint`) field is blank
// This is a surgical field patch — it never touches options, solutionSteps,
// topicId, or any other field, and never creates/deletes docs.

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = '/Users/andrewkim/Desktop/sapere1';
const DRY_RUN = process.argv.includes('--dry-run');

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const FILES = [
  'seedAbbotsleigh2020Ext1Questions.js',
  'seedAbbotsleigh2020Ext1SimilarQuestions.js',
  'seedAbbotsleigh2020Questions.js',
  'seedAscham2020Questions.js',
  'seedBarker2020Questions.js',
  'seedBaulkham2020Questions.js',
  'seedBlacktownBoys2020Questions.js',
  'seedBlacktownBoys2020SimilarQuestions.js',
  'seedCaringbah2020Questions.js',
  'seedCaringbah2020SimilarQuestions.js',
  'seedCherrybrookTech2020Questions.js',
  'seedCherrybrookTech2020SimilarQuestions.js',
  'seedCranbrook2023Questions.js',
  'seedCranbrook2023SimilarQuestions.js',
  'seedDanebank2020Questions.js',
  'seedDanebank2020SimilarQuestions.js',
  'seedFortSt2020Questions.js',
  'seedFortSt2020SimilarQuestions.js',
];

async function loadLocalMap() {
  const map = new Map();
  for (const f of FILES) {
    const mod = await import(join(REPO_ROOT, 'src', 'constants', f));
    for (const val of Object.values(mod)) {
      if (!Array.isArray(val)) continue;
      for (const q of val) {
        if (!q.id) continue;
        map.set(q.id, { question: (q.question || '').toString(), hint: (q.hint || '').toString() });
      }
    }
  }
  return map;
}

async function run() {
  const localMap = await loadLocalMap();
  const ids = Array.from(localMap.keys());
  console.log(`Loaded ${ids.length} local ids across ${FILES.length} files.${DRY_RUN ? ' [DRY RUN]' : ''}`);

  let updatedQuestion = 0;
  let updatedHint = 0;
  let skippedTeacher = 0;
  let skippedNotBlankInFirestore = 0;
  let skippedNotFound = 0;
  const teacherIds = [];
  const notFoundIds = [];

  const CHUNK = 300;
  for (let i = 0; i < ids.length; i += CHUNK) {
    const chunk = ids.slice(i, i + CHUNK);
    const refs = chunk.map((id) => db.collection('questions').doc(id));
    const snaps = await db.getAll(...refs);

    const writeOps = [];
    snaps.forEach((snap, idx) => {
      const id = chunk[idx];
      if (!snap.exists) { skippedNotFound++; notFoundIds.push(id); return; }
      const data = snap.data();
      if (data.origin === 'teacher') { skippedTeacher++; teacherIds.push(id); return; }

      const local = localMap.get(id);
      const patch = {};
      const currentQ = (data.question || '').toString().trim();
      const currentH = (data.hint || '').toString().trim();

      if (!currentQ && local.question.trim()) {
        patch.question = local.question;
        updatedQuestion++;
      }
      if (!currentH && local.hint.trim()) {
        patch.hint = local.hint;
        updatedHint++;
      }

      if (Object.keys(patch).length === 0) {
        if (currentQ) skippedNotBlankInFirestore++;
        return;
      }

      patch.updatedAt = FieldValue.serverTimestamp();
      writeOps.push({ ref: refs[idx], patch });
    });

    if (!DRY_RUN && writeOps.length > 0) {
      const BATCH_SIZE = 450;
      for (let j = 0; j < writeOps.length; j += BATCH_SIZE) {
        const batch = db.batch();
        writeOps.slice(j, j + BATCH_SIZE).forEach(({ ref, patch }) => batch.update(ref, patch));
        await batch.commit();
      }
    }

    process.stdout.write(`  ${Math.min(i + CHUNK, ids.length)}/${ids.length} checked\r`);
  }

  console.log('\n\n=== SUMMARY ===');
  console.log(`  question field updated: ${updatedQuestion}`);
  console.log(`  hint field updated:     ${updatedHint}`);
  console.log(`  skipped (origin=teacher): ${skippedTeacher}`);
  console.log(`  skipped (already had question text): ${skippedNotBlankInFirestore}`);
  console.log(`  skipped (doc not found in Firestore): ${skippedNotFound}`);
  if (teacherIds.length) console.log('  teacher-owned ids:', teacherIds.slice(0, 20));
  if (notFoundIds.length) console.log('  not-found ids (sample):', notFoundIds.slice(0, 20));
  console.log(DRY_RUN ? '\n[DRY RUN] No writes were made.' : '\n✅ Firestore updated.');
  process.exit(0);
}

run().catch((err) => { console.error(err); process.exit(1); });
