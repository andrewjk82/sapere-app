import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { Y5_CH5_QUESTIONS } from '../../src/constants/seedYear5Ch5Questions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const topicsToMigrate = ['y5-rn-4', 'y5-rn-5', 'y5-ar-3', 'y5-ar-4'];

async function run() {
  console.log(`Loading Y5 Ch5 questions from local seed. Total: ${Y5_CH5_QUESTIONS.length}`);
  
  // 1. Delete all current questions for these 4 topics from Firestore to prevent duplicates
  for (const topicId of topicsToMigrate) {
    const batch = db.batch();
    const snap = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();
    
    console.log(`Deleting ${snap.size} current ${topicId} questions from Firestore...`);
    snap.forEach(doc => {
      batch.delete(db.collection('questions').doc(doc.id));
    });
    if (snap.size > 0) {
      await batch.commit();
    }
  }
  console.log('✅ Deletion of old questions complete.');

  // 2. Upload latest questions from seed file
  const uploadBatch = db.batch();
  Y5_CH5_QUESTIONS.forEach(q => {
    const ref = db.collection('questions').doc(q.id);
    
    const docData = {
      chapterId: q.chapterId,
      topicId: q.topicId,
      topicCode: q.topicCode,
      topicTitle: q.topicTitle,
      chapterTitle: q.chapterTitle,
      year: q.year,
      difficulty: q.difficulty || "medium",
      timeLimit: q.timeLimit || 60,
      isManual: true,
      type: q.type,
      question: q.question,
      hint: q.hint || "",
      solution: q.solution || "",
      solutionSteps: q.solutionSteps || [],
      t: q.t || "",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (q.options) docData.options = q.options;
    if (q.a !== undefined) docData.answer = q.a;
    if (q.graphData) docData.graphData = q.graphData;

    uploadBatch.set(ref, docData);
  });

  await uploadBatch.commit();
  console.log(`\n🎉 Successfully uploaded ${Y5_CH5_QUESTIONS.length} y5-ch5 questions to Firestore!`);
  
  // Clear seeder hash cache for these topics
  const hashDoc = await db.collection('sync_meta').doc('seed_hashes').get();
  if (hashDoc.exists) {
    const data = hashDoc.data();
    const topicHashes = data._topicHashes || {};
    topicsToMigrate.forEach(topicId => {
      delete topicHashes[topicId];
    });
    await db.collection('sync_meta').doc('seed_hashes').set({
      _topicHashes: topicHashes
    }, { merge: true });
    console.log('✅ Cleared topic hash cache.');
  }
}

run().catch(console.error);
