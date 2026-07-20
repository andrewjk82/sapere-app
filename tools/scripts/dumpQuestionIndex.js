/**
 * Cheap read: dumps the question_index and question_topic_index collections
 * (one small summary doc per chapter/topic — NOT the full questions
 * collection). Used to find chapters that exist in Firestore but aren't
 * registered in curriculumSeeds.js (e.g. y7-4).
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const chapterSnap = await db.collection('question_index').get();
  console.log('question_index docs:', chapterSnap.size);
  const chapters = chapterSnap.docs.map(d => ({ chapterId: d.id, ...d.data() }));

  const topicSnap = await db.collection('question_topic_index').get();
  console.log('question_topic_index docs:', topicSnap.size);
  const topics = topicSnap.docs.map(d => ({ topicId: d.id, ...d.data() }));

  writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/audit-state/question_index_dump.json', JSON.stringify(chapters, null, 2));
  writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/audit-state/question_topic_index_dump.json', JSON.stringify(topics, null, 2));
  process.exit(0);
})();
