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
  
  let count = 0;
  let parentUpdates = {};

  for (let q of Y8_CH10G_QUESTIONS) {
    if (q.question && q.question.includes('e.g.')) {
      // Strip out the (e.g. ...) and any text before it inside the parentheses like (Enter ..., e.g. ...)
      q.question = q.question.replace(/\s*\([^)]*e\.g\.[^)]*\)/g, '');
      // Also remove redundant sentences if they now end abruptly
      q.question = q.question.replace(/\s*Enter the two parts.*?, separated by a comma\./g, '');
      q.question = q.question.replace(/\s*Enter the parts.*?, separated by commas\./g, '');
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (parentId !== q.id) {
        if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
        parentUpdates[parentId].push(q);
      } else {
        // standalone update
        await db.collection('questions').doc(q.id).update({
          question: q.question,
          updatedAt: FieldValue.serverTimestamp()
        }).catch(e => {});
      }
      count++;
    }
  }

  // Update parent docs for subquestions
  for (const [parentId, subQuestions] of Object.entries(parentUpdates)) {
    try {
      const parentRef = db.collection('questions').doc(parentId);
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let subQs = parentData.subQuestions || [];
        for (let i = 0; i < subQs.length; i++) {
          const matchingNew = subQuestions.find(s => s.id === subQs[i].id);
          if (matchingNew) {
            subQs[i].question = matchingNew.question;
          }
        }
        await parentRef.update({
          subQuestions: subQs,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Successfully updated parent ${parentId}`);
      }
    } catch(e) {
      console.log(`Failed to update parent ${parentId}:`, e);
    }
  }

  if (count > 0) {
    const fileContent = "export const Y8_CH10G_QUESTIONS = " + JSON.stringify(Y8_CH10G_QUESTIONS, null, 2) + ";\n";
    fs.writeFileSync(filepath, fileContent, 'utf8');
    console.log(`Successfully stripped e.g. leaks from ${count} questions.`);
  } else {
    console.log(`No leaks found.`);
  }
}
run().catch(console.error);
