/**
 * Write-only (no reads): sets isNew:true on every doc id in a given list, so
 * the existing "NEW question" badge system (Curriculum.jsx queries
 * `where('isNew','==',true)` and cascades a badge up through topic/chapter
 * nav; QuestionBankPage.jsx shows a per-question [NEW] badge; localStorage
 * key 'sapere_viewed_questions' tracks per-browser dismissal) picks up
 * questions fixed by direct-Firestore scripts, which don't go through
 * chapterSeeder.js (the only other place isNew gets set, from a seed file's
 * `raw.isNew` field).
 *
 * No .get() calls — we already know these ids exist and were just written
 * by a fix script in this same session, so this is pure writes.
 *
 * Usage: node tools/scripts/setIsNewForFixedQuestions.js <idsJsonPath>
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const idsPath = process.argv[2];
const ids = JSON.parse(readFileSync(idsPath, 'utf8'));

async function main() {
  let batch = db.batch();
  let inBatch = 0;
  let total = 0;
  for (const id of ids) {
    batch.update(db.doc(`questions/${id}`), { isNew: true });
    inBatch++;
    total++;
    if (inBatch === 400) {
      await batch.commit();
      batch = db.batch();
      inBatch = 0;
    }
  }
  if (inBatch > 0) await batch.commit();
  console.log(`Set isNew:true on ${total} docs.`);
  process.exit(0);
}

main().catch((err) => { console.error('FATAL:', err); process.exit(1); });
