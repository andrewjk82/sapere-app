import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { Y10_CH1C_QUESTIONS } from '../../src/constants/seedYear10Ch1CQuestions.js';

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
    
    // Find index of answer
    const correctIdx = rawOpts.findIndex(opt => String(opt).includes(String(correct)));
    answer = String(correctIdx >= 0 ? correctIdx : 0);
  }

  return {
    chapterId: "y10-1",
    chapterTitle: "Chapter 1: Consumer arithmetic",
    topicId: "y10-1c",
    topicCode: "1C",
    topicTitle: "Repeated increases and decreases",
    year: "Year 10",
    isManual: true,
    origin: "seed",
    title: `${raw.question.replace(/\\\\\(|\\\\\)|\\\(|\\\)/g, '').slice(0, 30)}...`,
    question: raw.question,
    difficulty: raw.difficulty || 'hard',
    timeLimit: raw.timeLimit || 120,
    type: raw.type || 'multiple_choice',
    requiresManualGrading: raw.type === 'teacher_review',
    options,
    answer,
    hint: raw.hint || '',
    solution: raw.solution || raw.a || '',
    solutionSteps: raw.solutionSteps || [],
    questionImage: '',
    subQuestions: raw.subQuestions || [],
    blanks: [],
    graphData: null,
    examPaper: '',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };
};

const run = async () => {
  try {
    const collRef = db.collection('questions');
    
    // Clear old seed questions for y10-1c
    console.log("Clearing existing seed questions for y10-1c...");
    const snap = await collRef.where('topicId', '==', 'y10-1c').where('origin', '==', 'seed').get();
    
    const batchSize = 400;
    let docs = snap.docs;
    for (let i = 0; i < docs.length; i += batchSize) {
      const batch = db.batch();
      docs.slice(i, i + batchSize).forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    }
    console.log(`Deleted ${docs.length} old seed questions.`);

    // Write new questions
    console.log(`Writing ${Y10_CH1C_QUESTIONS.length} questions...`);
    for (let i = 0; i < Y10_CH1C_QUESTIONS.length; i += batchSize) {
      const batch = db.batch();
      Y10_CH1C_QUESTIONS.slice(i, i + batchSize).forEach(raw => {
        const mapped = mapQuestion(raw);
        const docRef = raw.id ? collRef.doc(raw.id) : collRef.doc();
        batch.set(docRef, mapped);
      });
      await batch.commit();
    }
    console.log("Successfully seeded questions to questions collection.");
    
    // Rebuild the question index for chapter y10-1 so the new questions show up instantly!
    console.log("Rebuilding index for chapter y10-1...");
    const allQuestionsSnap = await db.collection('questions').where('chapterId', '==', 'y10-1').get();
    const activeIds = [];
    allQuestionsSnap.docs.forEach(doc => {
      const data = doc.data();
      if (data.isActive !== false) {
        activeIds.push(doc.id);
      }
    });
    activeIds.sort();
    
    await db.collection('question_index').doc('y10-1').set({
      ids: activeIds,
      count: activeIds.length,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`Index question_index/y10-1 rebuilt with ${activeIds.length} active question IDs.`);

    // Stamp sync_meta
    const seedVersion = Date.now();
    await db.collection('sync_meta').doc('questions').set({
      version: seedVersion,
      membershipVersion: seedVersion,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    // Also update seed_hashes for y10-1c
    const str = Y10_CH1C_QUESTIONS.map((q) => q.id || '').sort().join(',');
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    const currentHash = (h >>> 0).toString(36);

    await db.collection('sync_meta').doc('seed_hashes').set({
      'y10-1c': currentHash,
      _updatedAt: seedVersion
    }, { merge: true });

    await db.collection('question_index').doc('_meta').set({
      builtVersion: seedVersion,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log("Successfully completed sync for Y10 Ch1C!");
    process.exit(0);
  } catch (err) {
    console.error("Force sync failed:", err);
    process.exit(1);
  }
};

run();
