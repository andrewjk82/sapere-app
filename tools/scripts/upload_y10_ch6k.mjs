import admin from 'firebase-admin';
import { readFileSync, writeFileSync } from 'fs';
import { Y10_CH6K_QUESTIONS } from '../../src/constants/seedYear10Ch6KQuestions.js';

const ALL_QUESTIONS = [...Y10_CH6K_QUESTIONS];

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const run = async () => {
  console.log(`[Y10 Ch6K Upload] Starting upload of ${ALL_QUESTIONS.length} questions...`);
  const qColl = db.collection('questions');

  // Rule G: Backup before delete (only for y10-6k)
  const existing = await qColl.where('topicId', '==', 'y10-6k').get();
  if (!existing.empty) {
    const backup = existing.docs.map(d => ({ id: d.id, ...d.data() }));
    const backupPath = `/Users/andrewkim/Desktop/sapere1/tools/audit-state/backup_y10-6k_${Date.now()}.json`;
    writeFileSync(backupPath, JSON.stringify(backup, null, 2));
    console.log(`Backed up ${backup.length} existing docs to ${backupPath}`);
  }

  // Upload in batches
  const CHUNK = 400;
  let total = 0;
  for (let i = 0; i < ALL_QUESTIONS.length; i += CHUNK) {
    const chunk = ALL_QUESTIONS.slice(i, i + CHUNK);
    const batch = db.batch();
    chunk.forEach(q => {
      const ref = qColl.doc(q.id);
      batch.set(ref, {
        ...q,
        chapterId: 'y10-6',
        chapterTitle: 'Chapter 6: Measurement',
        year: 'Year 10',
        isActive: true,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    });
    await batch.commit();
    total += chunk.length;
    console.log(`Uploaded ${total}/${ALL_QUESTIONS.length}...`);
  }
  console.log(`[Y10 Ch6K Upload] Done! ${total} questions uploaded.`);
  process.exit(0);
};

run().catch(e => { console.error(e); process.exit(1); });
