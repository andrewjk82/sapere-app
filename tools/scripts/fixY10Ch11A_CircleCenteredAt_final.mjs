import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const filepath = path.resolve('src/constants/seedYear10Ch11AQuestions.js');
  const content = fs.readFileSync(filepath, 'utf8');
  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions = eval(match[1]);
  
  let rootUpdates = [];
  let parentUpdates = {};
  let updateCount = 0;

  for (let q of questions) {
    if (q.solutionSteps) {
      let changed = false;
      for (let s of q.solutionSteps) {
        if (s.explanation && s.explanation.includes('Circle centered at')) {
          // Truncate the explanation up to "directions." or "axes."
          let baseExp = s.explanation.split('Circle centered at')[0].trim();
          
          let text = q.solution;
          text = text.replace(/\n/g, ' ');
          text = text.replace(/radius ([^.]+)\./g, 'radius \\\\($1\\\\).');
          text = text.replace(/(\([^)]+\))/g, '\\\\($1\\\\)');

          s.explanation = baseExp + ' ' + text;
          changed = true;
        }
      }
      if (changed) {
        rootUpdates.push(q);
        const parentId = q.id.replace(/[a-z]$/, '');
        if (parentId !== q.id) {
          if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
          parentUpdates[parentId].push(q);
        }
        updateCount++;
      }
    }
  }

  if (updateCount > 0) {
    const newFileContent = `export const Y10_CH11A_QUESTIONS = ` + JSON.stringify(questions, null, 2) + ";\n";
    fs.writeFileSync(filepath, newFileContent, 'utf8');
    console.log(`Updated ${updateCount} questions by fixing explanation text.`);
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
