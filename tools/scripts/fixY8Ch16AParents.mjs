import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

async function fixParents() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Get all individual questions from the seed file to ensure we have the exact data
  const { Y8_CH16A_QUESTIONS } = await import('../../src/constants/seedYear8Ch16Questions.js');
  const childMap = {};
  for (const q of Y8_CH16A_QUESTIONS) {
    childMap[q.id] = q;
  }

  const parentIds = [
    'y8-16a-q8', 'y8-16a-q10', 'y8-16a-q12', 
    'y8-16a-q23', 'y8-16a-q24', 'y8-16a-q25', 
    'y8-16a-q26', 'y8-16a-q27'
  ];

  let updateCount = 0;
  for (const pid of parentIds) {
    const parentDoc = await db.collection('questions').doc(pid).get();
    if (!parentDoc.exists) {
      console.log(`Parent ${pid} does not exist`);
      continue;
    }
    const data = parentDoc.data();
    
    let modified = false;
    const newSubQuestions = [];
    
    for (const sub of (data.subQuestions || [])) {
      const childData = childMap[sub.id];
      if (childData) {
        // Ensure options array has modern format
        const modernOptions = (childData.opts || []).map(opt => ({ text: opt, imageUrl: '' }));
        
        newSubQuestions.push({
          ...sub,
          type: 'multiple_choice',
          options: modernOptions,
          answer: childData.answer || sub.answer,
          solutionSteps: childData.solutionSteps || [],
          isManual: false,
          requiresManualGrading: false
        });
        modified = true;
      } else {
        newSubQuestions.push(sub);
      }
    }
    
    if (modified) {
      // Fix topicId just in case
      await db.collection('questions').doc(pid).set({
        subQuestions: newSubQuestions,
        topicId: 'y8-16a',
        isManual: false
      }, { merge: true });
      console.log(`Updated parent ${pid}`);
      updateCount++;
    }
  }

  console.log(`Successfully updated ${updateCount} parent documents with embedded child data.`);
}

fixParents().catch(console.error);
