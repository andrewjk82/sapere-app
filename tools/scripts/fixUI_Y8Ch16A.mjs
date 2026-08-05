import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

async function fixIssues() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // 1. Fix the $10 voucher issue (q21) and any others
  const snapshot = await db.collection('questions').where('topicId', '==', 'y8-16a').get();
  
  let qFixCount = 0;
  for (const doc of snapshot.docs) {
    const data = doc.data();
    if (data.question && (data.question.includes('\\(10') || data.question.includes('\\)10'))) {
      const newQuestion = data.question.replace(/\\\(/g, '$').replace(/\\\)/g, '$');
      await db.collection('questions').doc(doc.id).set({ question: newQuestion }, { merge: true });
      console.log(`Fixed formatting for ${doc.id}`);
      qFixCount++;
    }
  }

  // 2. Remove parent solutionSteps to prevent duplicate rendering
  const parentIds = [
    'y8-16a-q8', 'y8-16a-q10', 'y8-16a-q12', 
    'y8-16a-q23', 'y8-16a-q24', 'y8-16a-q25', 
    'y8-16a-q26', 'y8-16a-q27'
  ];

  let pFixCount = 0;
  for (const pid of parentIds) {
    await db.collection('questions').doc(pid).set({
      solutionSteps: [],
      solution: "See individual step-by-step solutions for each sub-question."
    }, { merge: true });
    pFixCount++;
  }
  console.log(`Removed redundant parent solutionSteps for ${pFixCount} parent questions.`);
}

fixIssues().catch(console.error);
