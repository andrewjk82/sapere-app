import admin from 'firebase-admin';
import { readFileSync, writeFileSync } from 'fs';
import { Y7_CH7A_QUESTIONS } from '../../src/constants/seedYear7Ch7AQuestions.js';
import { Y7_CH7B_QUESTIONS } from '../../src/constants/seedYear7Ch7BQuestions.js';
import { Y7_CH7C_QUESTIONS } from '../../src/constants/seedYear7Ch7CQuestions.js';
import { Y7_CH7D_QUESTIONS } from '../../src/constants/seedYear7Ch7DQuestions.js';
import { Y7_CH7E_QUESTIONS } from '../../src/constants/seedYear7Ch7EQuestions.js';
import { Y7_CH7F_QUESTIONS } from '../../src/constants/seedYear7Ch7FQuestions.js';
import { Y7_CH7G_QUESTIONS } from '../../src/constants/seedYear7Ch7GQuestions.js';

const ALL_QUESTIONS = [
  ...Y7_CH7A_QUESTIONS,
  ...Y7_CH7B_QUESTIONS,
  ...Y7_CH7C_QUESTIONS,
  ...Y7_CH7D_QUESTIONS,
  ...Y7_CH7E_QUESTIONS,
  ...Y7_CH7F_QUESTIONS,
  ...Y7_CH7G_QUESTIONS,
];

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const run = async () => {
  console.log(`[Y7 Ch7 Upload] Starting upload of ${ALL_QUESTIONS.length} questions...`);
  const qColl = db.collection('questions');

  // Rule G: Backup before delete
  const existing = await qColl.where('chapterId', '==', 'y7-7').get();
  if (!existing.empty) {
    const backup = existing.docs.map(d => ({ id: d.id, ...d.data() }));
    const backupPath = `/Users/andrewkim/Desktop/sapere1/tools/audit-state/backup_y7-7_${Date.now()}.json`;
    writeFileSync(backupPath, JSON.stringify(backup, null, 2));
    console.log(`Backed up ${backup.length} existing docs to ${backupPath}`);

    const batchDel = db.batch();
    existing.docs.forEach(doc => batchDel.delete(doc.ref));
    await batchDel.commit();
    console.log(`Deleted ${existing.size} existing questions.`);
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
        chapterId: 'y7-7',
        chapterTitle: 'Chapter 7: Decimals',
        year: 'Year 7',
        isActive: true,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    });
    await batch.commit();
    total += chunk.length;
    console.log(`Uploaded ${total}/${ALL_QUESTIONS.length}...`);
  }
  console.log(`[Y7 Ch7 Upload] Done! ${total} questions uploaded.`);
  process.exit(0);
};

run().catch(e => { console.error(e); process.exit(1); });
