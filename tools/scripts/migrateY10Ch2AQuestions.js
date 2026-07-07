import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { Y10_CH2A_QUESTIONS } from '../../src/constants/seedYear10Ch2Questions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  console.log(`Loading Y10 Ch2A questions from local seed. Total: ${Y10_CH2A_QUESTIONS.length}`);
  
  const batch = db.batch();
  
  // 1. Delete all current y10-2a questions from DB to ensure no leftovers
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y10-2a')
    .get();
  
  console.log(`Deleting ${snap.size} current y10-2a questions from Firestore...`);
  snap.forEach(doc => {
    batch.delete(db.collection('questions').doc(doc.id));
  });
  await batch.commit();
  console.log('✅ Deletion complete.');

  // 2. Upload latest questions from seed file
  const uploadBatch = db.batch();
  Y10_CH2A_QUESTIONS.forEach(q => {
    const ref = db.collection('questions').doc(q.id);
    
    uploadBatch.set(ref, {
      chapterId: "y10-2",
      topicId: "y10-2a",
      topicCode: "2A",
      topicTitle: "Irrational numbers and surds",
      chapterTitle: "Chapter 2: Review of surds",
      year: "Year 10",
      difficulty: q.difficulty || "medium",
      timeLimit: q.timeLimit || 60,
      isManual: true,
      type: "multiple_choice",
      question: q.question,
      options: q.opts || [],
      answer: q.a !== undefined ? q.a : q.answer,
      hint: q.hint || "",
      solution: q.solution || "",
      solutionSteps: q.solutionSteps || [],
      createdAt: new Date(),
      updatedAt: new Date()
    });
  });

  await uploadBatch.commit();
  console.log(`\n🎉 Successfully uploaded ${Y10_CH2A_QUESTIONS.length} y10-2a questions to Firestore!`);
  
  // Clear seeder hash cache as well
  const hashDoc = await db.collection('sync_meta').doc('seed_hashes').get();
  if (hashDoc.exists) {
    const data = hashDoc.data();
    const topicHashes = data._topicHashes || {};
    delete topicHashes['y10-2a'];
    await db.collection('sync_meta').doc('seed_hashes').set({
      _topicHashes: topicHashes
    }, { merge: true });
    console.log('✅ Cleared topic hash cache.');
  }
}

run().catch(console.error);
