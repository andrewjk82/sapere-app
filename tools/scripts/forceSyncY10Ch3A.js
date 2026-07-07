import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { Y10_CH3A_QUESTIONS } from '../../src/constants/seedYear10Ch3AQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const mapQuestion = (raw) => {
  const isMC = raw.type === 'multiple_choice';
  let options = [];
  let answer = raw.a || '';

  if (isMC) {
    const rawOpts = raw.opts || [];
    const correct = raw.a;
    options = rawOpts.map((opt) => ({
      text: String(opt),
      imageUrl: ''
    }));
    const correctIdx = rawOpts.findIndex(opt => String(opt).includes(String(correct)));
    answer = String(correctIdx >= 0 ? correctIdx : 0);
  }

  return {
    chapterId: "y10-3",
    chapterTitle: "Chapter 3: Algebra",
    topicId: "y10-3a",
    topicCode: "3A",
    topicTitle: "Expanding brackets and collecting like terms",
    year: "Year 10",
    isManual: true,
    origin: "seed",
    id: raw.id,
    type: raw.type || 'multiple_choice',
    difficulty: raw.difficulty || 'medium',
    question: raw.q || '',
    hint: raw.h || '',
    options,
    answer,
    solutionSteps: raw.solutionSteps || [],
    imageUrl: '',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };
};

async function syncQuestions() {
  const collectionRef = db.collection('questions');
  const topicId = 'y10-3a';

  console.log(`Clearing existing questions for topic: ${topicId}`);
  const existing = await collectionRef.where('topicId', '==', topicId).get();
  const deleteOps = existing.docs.map(doc => doc.ref.delete());
  await Promise.all(deleteOps);
  console.log(`Deleted ${existing.docs.length} existing questions.`);

  console.log(`Importing ${Y10_CH3A_QUESTIONS.length} questions for ${topicId}...`);
  const BATCH_SIZE = 400;
  for (let i = 0; i < Y10_CH3A_QUESTIONS.length; i += BATCH_SIZE) {
    const batch = db.batch();
    const chunk = Y10_CH3A_QUESTIONS.slice(i, i + BATCH_SIZE);
    for (const raw of chunk) {
      const mapped = mapQuestion(raw);
      const docRef = collectionRef.doc(raw.id);
      batch.set(docRef, mapped, { merge: false });
    }
    await batch.commit();
    console.log(`Committed batch ${Math.floor(i / BATCH_SIZE) + 1}`);
  }

  console.log('Done! All Y10 Ch3A questions synced.');
  process.exit(0);
}

syncQuestions().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
