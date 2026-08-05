import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

async function run() {
  const filepath = path.resolve('src/constants/seedYear8Ch10GQuestions.js');
  const { Y8_CH10G_QUESTIONS } = await import('../../src/constants/seedYear8Ch10GQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let parentUpdates = {};
  
  // The list of 25 subquestions affected
  const affectedIds = [
    'y8-10g-q8a', 'y8-10g-q8b', 'y8-10g-q10a', 'y8-10g-q10b',
    'y8-10g-q11a', 'y8-10g-q11b', 'y8-10g-q16a', 'y8-10g-q16b',
    'y8-10g-q16c', 'y8-10g-q16d', 'y8-10g-q16e', 'y8-10g-q17a',
    'y8-10g-q17b', 'y8-10g-q17c', 'y8-10g-q17d', 'y8-10g-q18a',
    'y8-10g-q18b', 'y8-10g-q18c', 'y8-10g-q22a', 'y8-10g-q22b',
    'y8-10g-q22c', 'y8-10g-q25a', 'y8-10g-q25b', 'y8-10g-q25c',
    'y8-10g-q25d'
  ];

  for (let q of Y8_CH10G_QUESTIONS) {
    if (affectedIds.includes(q.id)) {
      if (q.solutionSteps) {
        q.solutionSteps.forEach(step => {
          if (step.workingOut) {
            let wo = step.workingOut.trim();
            if (!wo.startsWith('\\(')) {
              step.workingOut = '\\(' + wo + '\\)';
            }
          }
        });
      }
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
    }
  }

  // Write local file
  const fileContent = "export const Y8_CH10G_QUESTIONS = " + JSON.stringify(Y8_CH10G_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');

  // Push updates to Firestore
  for (const [parentId, subQuestions] of Object.entries(parentUpdates)) {
    for (let sq of subQuestions) {
      await db.collection('questions').doc(sq.id).update({
        solutionSteps: sq.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      }).catch(e => {});
    }

    try {
      const parentRef = db.collection('questions').doc(parentId);
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let currentSubQs = parentData.subQuestions || [];
        
        let newSubQs = currentSubQs.map(oldSq => {
          const newSq = subQuestions.find(s => s.id === oldSq.id);
          if (newSq) {
            const updatedSq = { ...oldSq, solutionSteps: newSq.solutionSteps };
            return updatedSq;
          }
          return oldSq;
        });

        await parentRef.update({
          subQuestions: newSubQs,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Updated parent document ${parentId} successfully.`);
      }
    } catch (e) {
      console.error(`Failed to update parent ${parentId}:`, e);
    }
  }

  console.log(`Successfully fixed MathJax wrappers for 25 questions.`);
}
run().catch(console.error);
