import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { Y11_CH1E_QUESTIONS } from '../../src/constants/seedYear11Ch1EQuestions.js';

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
    const rawOpts = raw.options || [];
    const correct = raw.a;
    options = rawOpts.map((opt) => ({
      text: typeof opt === 'object' && opt !== null ? String(opt.text) : String(opt),
      imageUrl: ''
    }));
    
    // Find index of answer
    const clean = (s) => String(s).replace(/\\\\\(|\\\\\)/g, '').replace(/\\\(|\\\)/g, '').trim();
    const correctClean = clean(correct);
    const correctIdx = rawOpts.findIndex(opt => {
      const txt = typeof opt === 'object' && opt !== null ? opt.text : opt;
      return clean(txt) === correctClean;
    });
    answer = String(correctIdx >= 0 ? correctIdx : 0);
  }

  return {
    chapterId: "y11a-1",
    chapterTitle: "Chapter 1: Algebra review",
    topicId: "y11a-1E",
    topicCode: "1E",
    topicTitle: "Solving simultaneous equations",
    year: "Year 11",
    isManual: true,
    origin: "seed",
    title: `${raw.question.replace(/\\\\\(|\\\\\)/g, '').slice(0, 30)}...`,
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
    subQuestions: [],
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
    
    // Clear old seed questions for y11a-1E
    console.log("Clearing existing seed questions for y11a-1E...");
    const snap = await collRef.where('topicId', '==', 'y11a-1E').where('origin', '==', 'seed').get();
    
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
    console.log(`Writing ${Y11_CH1E_QUESTIONS.length} questions...`);
    for (let i = 0; i < Y11_CH1E_QUESTIONS.length; i += batchSize) {
      const batch = db.batch();
      Y11_CH1E_QUESTIONS.slice(i, i + batchSize).forEach(raw => {
        const mapped = mapQuestion(raw);
        const docRef = raw.id ? collRef.doc(raw.id) : collRef.doc();
        batch.set(docRef, mapped);
      });
      await batch.commit();
    }
    console.log("Successfully seeded questions to questions collection.");
    
    // Rebuild the question index for chapter y11a-1 so the new questions show up instantly!
    console.log("Rebuilding index for chapter y11a-1...");
    const allQuestionsSnap = await db.collection('questions').where('chapterId', '==', 'y11a-1').get();
    const activeIds = [];
    allQuestionsSnap.docs.forEach(doc => {
      const data = doc.data();
      if (data.isActive !== false) {
        activeIds.push(doc.id);
      }
    });
    activeIds.sort();
    
    await db.collection('question_index').doc('y11a-1').set({
      ids: activeIds,
      count: activeIds.length,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`Index question_index/y11a-1 rebuilt with ${activeIds.length} active question IDs.`);

    // Stamp sync_meta
    const seedVersion = Date.now();
    await db.collection('sync_meta').doc('questions').set({
      version: seedVersion,
      membershipVersion: seedVersion,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    // Also update seed_hashes for y11a-1e
    const str = Y11_CH1E_QUESTIONS.map((q) => q.id || '').sort().join(',');
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    const currentHash = (h >>> 0).toString(36);

    await db.collection('sync_meta').doc('seed_hashes').set({
      'y11a-1e': currentHash,
      _updatedAt: seedVersion
    }, { merge: true });

    await db.collection('question_index').doc('_meta').set({
      builtVersion: seedVersion,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log("Successfully completed sync for Y11 Ch1E!");
    process.exit(0);
  } catch (err) {
    console.error("Force sync failed:", err);
    process.exit(1);
  }
};

run();
