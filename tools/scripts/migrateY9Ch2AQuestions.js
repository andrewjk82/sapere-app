import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { Y9_CH2A_QUESTIONS } from '../../src/constants/seedSurdsQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  console.log(`Loading Y9 Ch2A questions from local seed. Total: ${Y9_CH2A_QUESTIONS.length}`);
  
  const batch = db.batch();
  
  // 1. Delete all current y9-2a questions from DB to ensure no leftovers
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y9-2a')
    .get();
  
  console.log(`Deleting ${snap.size} current y9-2a questions from Firestore...`);
  snap.forEach(doc => {
    batch.delete(db.collection('questions').doc(doc.id));
  });
  await batch.commit();
  console.log('✅ Deletion complete.');

  // 2. Upload latest 42 questions from seed file
  const uploadBatch = db.batch();
  Y9_CH2A_QUESTIONS.forEach(q => {
    const ref = db.collection('questions').doc(q.id);
    
    // Correct any potential $hypotenuse$ template variable if any still exists in local seed
    let solutionSteps = q.solutionSteps || [];
    if (q.id === "y9-2a-2a" || q.q.includes("hypotenuse of 13") || q.q.includes("shorter side of 5")) {
      solutionSteps = solutionSteps.map(step => {
        let w = step.workingOut || "";
        if (w.includes('$hypotenuse$') || w.includes('hypotenuse$')) {
          w = "a = \\sqrt{13^2 - 5^2}";
        }
        return { ...step, workingOut: w };
      });
    }

    // Fix other questions that might have template variables
    solutionSteps = solutionSteps.map(step => {
      let w = step.workingOut || "";
      if (w.includes("$hypotenuse$")) w = w.replace(/\$hypotenuse\$/g, "13");
      if (w.includes("$side$")) w = w.replace(/\$side\$/g, "5");
      return { ...step, workingOut: w };
    });

    uploadBatch.set(ref, {
      chapterId: "y9-2",
      topicId: "y9-2a",
      topicCode: q.c || "2A",
      topicTitle: "Pythagoras' Theorem",
      chapterTitle: "Chapter 2: Pythagoras' theorem and surds",
      year: "Year 9",
      difficulty: q.difficulty || "medium",
      timeLimit: q.timeLimit || 120,
      isManual: true,
      type: q.type || "multiple_choice",
      question: q.q,
      options: q.opts || [],
      answer: q.answer !== undefined ? q.answer : q.a,
      hint: q.h || "",
      solution: q.s || "",
      solutionSteps: solutionSteps,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  });

  await uploadBatch.commit();
  console.log(`\n🎉 Successfully uploaded ${Y9_CH2A_QUESTIONS.length} y9-2a questions to Firestore!`);
  
  // Clear seeder hash cache as well
  const hashDoc = await db.collection('sync_meta').doc('seed_hashes').get();
  if (hashDoc.exists) {
    const data = hashDoc.data();
    const topicHashes = data._topicHashes || {};
    delete topicHashes['y9-2a'];
    await db.collection('sync_meta').doc('seed_hashes').set({
      _topicHashes: topicHashes
    }, { merge: true });
    console.log('✅ Cleared topic hash cache.');
  }
}

run().catch(console.error);
