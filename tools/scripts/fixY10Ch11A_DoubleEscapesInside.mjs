import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const filepath = path.resolve('src/constants/seedYear10Ch11AQuestions.js');
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Directly replace the 4 known bad lines in the JS file content
  // They have "\\\\text", "\\\\pm", "\\\\sqrt", "\\\\quad", and end with "\\\\"
  content = content.replace(/\\\\\\\\text/g, '\\\\text');
  content = content.replace(/\\\\\\\\pm/g, '\\\\pm');
  content = content.replace(/\\\\\\\\sqrt/g, '\\\\sqrt');
  content = content.replace(/\\\\\\\\quad/g, '\\\\quad');
  // At the end of the string there is a trailing \\\\) instead of \\)
  // Let's just fix the end of the string if it has \\\\)
  content = content.replace(/\\\\\\\\"\n/g, '\\\\"\n');
  content = content.replace(/\\\\\\\\\)"/g, '\\\\)"');

  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Fixed double escapes in JS file content.');

  // Now evaluate the updated JS file and sync the affected questions
  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions = eval(match[1]);

  let rootUpdates = [];
  let parentUpdates = {};

  // The affected questions are q2c, q3c, q4c, q5c
  const affectedIds = ['y10-11a-q2c', 'y10-11a-q3c', 'y10-11a-q4c', 'y10-11a-q5c'];
  for (let q of questions) {
    if (affectedIds.includes(q.id)) {
      rootUpdates.push(q);
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
    }
  }

  // Update root docs in Firestore
  for (const rq of rootUpdates) {
    try {
      await db.collection('questions').doc(rq.id).update({
        solutionSteps: rq.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Successfully updated root document ${rq.id}`);
    } catch(e) {
      console.error(`Failed to update root document ${rq.id}:`, e);
    }
  }

  // Update parent docs in Firestore
  for (const [parentId, subQs] of Object.entries(parentUpdates)) {
    try {
      const parentRef = db.collection('questions').doc(parentId);
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let currentSubQs = parentData.subQuestions || [];
        for (let i = 0; i < currentSubQs.length; i++) {
          const newSq = subQs.find(s => s.id === currentSubQs[i].id);
          if (newSq) {
            currentSubQs[i].solutionSteps = newSq.solutionSteps;
          }
        }
        await parentRef.update({
          subQuestions: currentSubQs,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Successfully updated parent ${parentId} with subQuestions`);
      }
    } catch(e) {
      console.error(`Failed to update parent ${parentId}:`, e);
    }
  }
}

run().catch(console.error);
