/**
 * Push rewritten solutionSteps for y11a-9A from the seed file to Firestore.
 * Only updates solutionSteps + solution. Skips docs with origin: 'teacher'.
 *
 * Usage: node tools/scripts/pushY11Ch9ASolutionSteps.mjs
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

const seedPath = path.resolve(__dirname, '../../src/constants/seedYear11Ch9AQuestions.js');
const { Y11_CH9A_QUESTIONS } = await import(pathToFileURL(seedPath).href);

const targets = Y11_CH9A_QUESTIONS.filter((q) => q.id);
console.log(`Pushing solutionSteps for ${targets.length} y11a-9A questions…`);

const short = targets.filter((q) => !Array.isArray(q.solutionSteps) || q.solutionSteps.length < 4);
if (short.length) {
  console.error(`Abort: ${short.length} questions have <4 steps:`, short.map((q) => q.id));
  process.exit(1);
}

const generic = targets.filter((q) =>
  (q.solutionSteps || []).some(
    (s) =>
      s.workingOut === 'Given data' ||
      (s.explanation || '').includes('Strategy for Tangents and the derivative')
  )
);
if (generic.length) {
  console.error(`Abort: ${generic.length} questions still have generic steps:`, generic.map((q) => q.id));
  process.exit(1);
}

const BATCH = 400;
let updated = 0;
let skippedTeacher = 0;
let missing = 0;
const stepStats = {};

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

    const n = q.solutionSteps.length;
    stepStats[n] = (stepStats[n] || 0) + 1;

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
console.log('Step-count distribution pushed:', stepStats);
