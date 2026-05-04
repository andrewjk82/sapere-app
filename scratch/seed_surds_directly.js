import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { SURDS_QUESTIONS_Y11A } from '../src/constants/seedSurdsQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function seedSurds() {
  const collRef = db.collection('questions');
  
  console.log("Cleaning old Chapter 2 (Surds) questions...");
  const oldDocs = await collRef.where('chapterId', '==', 'y11a-2').get();
  const batchDelete = db.batch();
  oldDocs.forEach(d => batchDelete.delete(d.ref));
  await batchDelete.commit();

  console.log(`Seeding ${SURDS_QUESTIONS_Y11A.length} Surds questions...`);
  const batchAdd = db.batch();
  
  SURDS_QUESTIONS_Y11A.forEach(qData => {
    const docRef = collRef.doc();
    
    // Create options with shuffling
    const shuffledOpts = [...qData.opts]
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    
    const correctIndex = shuffledOpts.indexOf(qData.a);

    batchAdd.set(docRef, {
      chapterId: 'y11a-2',
      chapterTitle: 'Chapter 2: Surds and indices',
      topicId: 'y11a-2' + qData.c.slice(-1),
      topicCode: qData.c,
      topicTitle: qData.t,
      isManual: true,
      title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
      question: qData.q,
      difficulty: 'medium',
      timeLimit: 120,
      type: 'multiple_choice',
      options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
      answer: correctIndex.toString(),
      hint: qData.h,
      solution: qData.s,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batchAdd.commit();
  console.log(`Successfully added ${SURDS_QUESTIONS_Y11A.length} Surds questions!`);
  process.exit();
}

seedSurds().catch(err => {
  console.error(err);
  process.exit(1);
});
