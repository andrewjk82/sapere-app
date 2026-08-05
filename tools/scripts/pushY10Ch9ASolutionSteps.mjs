/**
 * Push rewritten solutionSteps for y10-9a from the seed file to Firestore.
 * Only updates solutionSteps + solution. Skips docs with origin: 'teacher'.
 *
 * Usage: node tools/scripts/pushY10Ch9ASolutionSteps.mjs
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const saPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const sa = JSON.parse(fs.readFileSync(saPath, 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const seedPath = path.resolve(__dirname, '../../src/constants/seedYear10Ch9Questions.js');
const { Y10_CH9_QUESTIONS } = await import(pathToFileURL(seedPath).href);

const targets = Y10_CH9_QUESTIONS.filter((q) => q.id?.startsWith('y10-9a-'));
console.log(`Pushing solutionSteps for ${targets.length} questions…`);

const BATCH = 400;
let updated = 0;
let skippedTeacher = 0;
let missing = 0;

for (let i = 0; i < targets.length; i += BATCH) {
  const chunk = targets.slice(i, i + BATCH);
  const batch = db.batch();
  let ops = 0;

  for (const q of chunk) {
    const ref = db.collection('questions').doc(q.id);
    const snap = await ref.get();
    if (!snap.exists) {
      missing++;
      console.warn(`  missing in DB: ${q.id}`);
      continue;
    }
    const data = snap.data() || {};
    if (data.origin === 'teacher') {
      skippedTeacher++;
      console.warn(`  skip teacher origin: ${q.id}`);
      continue;
    }
    batch.update(ref, {
      solutionSteps: q.solutionSteps,
      solution: q.solution || data.solution || '',
      updatedAt: FieldValue.serverTimestamp(),
    });
    ops++;
    updated++;
  }

  if (ops > 0) await batch.commit();
}

console.log(`Done. updated=${updated} missing=${missing} skippedTeacher=${skippedTeacher}`);
