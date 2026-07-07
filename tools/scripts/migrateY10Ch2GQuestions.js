import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { Y10_CH2G_QUESTIONS } from '../../src/constants/seedYear10Ch2GQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  console.log(`Loading Y10 Ch2G questions from local seed. Total: ${Y10_CH2G_QUESTIONS.length}`);
  
  const batch = db.batch();
  
  // 1. Delete all current y10-2g questions from DB to ensure no leftovers
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y10-2g')
    .get();
  
  console.log(`Deleting ${snap.size} current y10-2g questions from Firestore...`);
  snap.forEach(doc => {
    batch.delete(db.collection('questions').doc(doc.id));
  });
  await batch.commit();
  console.log('✅ Deletion complete.');

  // 2. Upload latest questions from seed file
  const uploadBatch = db.batch();
  Y10_CH2G_QUESTIONS.forEach(q => {
    const ref = db.collection('questions').doc(q.id);
    
    // Map main question
    const docData = {
      chapterId: "y10-2",
      topicId: "y10-2g",
      topicCode: "2G",
      topicTitle: "Challenge exercise",
      chapterTitle: "Chapter 2: Review of surds",
      year: "Year 10",
      difficulty: q.difficulty || "medium",
      timeLimit: q.timeLimit || 60,
      isManual: true,
      type: q.type,
      question: q.question,
      hint: q.hint || "",
      solution: q.solution || "",
      solutionSteps: q.solutionSteps || [],
      t: q.t || "Challenge exercise",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (q.opts) docData.options = q.opts;
    if (q.a !== undefined) docData.answer = q.a;
    if (q.graphData) docData.graphData = q.graphData;
    
    if (q.subQuestions && q.subQuestions.length > 0) {
      docData.subQuestions = q.subQuestions.map(sq => {
        const sqData = {
          id: sq.id,
          type: sq.type === 'teacher_review' ? 'teacher_review' : 'multiple_choice',
          difficulty: sq.difficulty || "medium",
          timeLimit: sq.timeLimit || 60,
          question: sq.question,
          options: sq.opts || [],
          answer: sq.a !== undefined ? sq.a : sq.answer,
          hint: sq.hint || "",
          solution: sq.solution || "",
          solutionSteps: sq.solutionSteps || []
        };
        return sqData;
      });
    }

    uploadBatch.set(ref, docData);
  });

  await uploadBatch.commit();
  console.log(`\n🎉 Successfully uploaded ${Y10_CH2G_QUESTIONS.length} y10-2g questions to Firestore!`);
  
  // Clear seeder hash cache as well
  const hashDoc = await db.collection('sync_meta').doc('seed_hashes').get();
  if (hashDoc.exists) {
    const data = hashDoc.data();
    const topicHashes = data._topicHashes || {};
    delete topicHashes['y10-2g'];
    await db.collection('sync_meta').doc('seed_hashes').set({
      _topicHashes: topicHashes
    }, { merge: true });
    console.log('✅ Cleared topic hash cache.');
  }
}

run().catch(console.error);
