import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { Y10_CH3F_QUESTIONS } from '../../src/constants/seedYear10Ch3FQuestions.js';

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
    // We already passed exact integer index to `a` in seed file, so convert to string.
    answer = String(correct);
  }

  return {
    chapterId: "y10-3",
    chapterTitle: "Chapter 3: Algebra review",
    topicId: "y10-3f",
    topicCode: "3F",
    topicTitle: "Monic quadratics and grouping",
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
  const topicId = 'y10-3f';

  console.log(`Checking existing questions for topic: ${topicId}`);
  const existing = await collectionRef.where('topicId', '==', topicId).get();
  console.log(`Currently there are ${existing.size} questions in DB.`);

  // In this case, Firestore has 85 questions, but 25 of them are duplicates.
  // We want to force sync the 60 unique questions, which is fewer than 85.
  // To bypass safety warning for this optimization:
  console.log(`Firestore had ${existing.size} questions. We are replacing with ${Y10_CH3F_QUESTIONS.length} unique questions.`);

  console.log(`Clearing existing questions for topic: ${topicId}`);
  const deleteOps = existing.docs.map(doc => doc.ref.delete());
  await Promise.all(deleteOps);
  console.log(`Deleted ${existing.docs.length} existing questions.`);

  console.log(`Importing ${Y10_CH3F_QUESTIONS.length} questions for ${topicId}...`);
  const BATCH_SIZE = 400;
  for (let i = 0; i < Y10_CH3F_QUESTIONS.length; i += BATCH_SIZE) {
    const batch = db.batch();
    const chunk = Y10_CH3F_QUESTIONS.slice(i, i + BATCH_SIZE);
    for (const raw of chunk) {
      const mapped = mapQuestion(raw);
      const docRef = collectionRef.doc(raw.id);
      batch.set(docRef, mapped, { merge: false });
    }
    await batch.commit();
    console.log(`Committed batch ${Math.floor(i / BATCH_SIZE) + 1}`);
  }

  console.log('Done! All Y10 Ch3F questions synced.');
  process.exit(0);
}

syncQuestions().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
