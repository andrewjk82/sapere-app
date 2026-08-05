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
  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions = eval(match[1]);
  
  let rootUpdates = [];
  let parentUpdates = {};
  let updateCount = 0;

  for (let q of questions) {
    if (q.question && q.question.includes('Check whether or not the point')) {
      let step0 = q.solutionSteps[0];
      // step0.workingOut in memory looks like: \((-5)^2 + (-5)^2 = 25 + 25 = 50\)
      let parts = step0.workingOut.replace(/^\\\(/, '').replace(/\\\)$/, '').split('=');
      
      if (parts.length >= 3) {
        let r2Match = q.question.match(/x\^2 \+ y\^2 = (\d+)/);
        let r2 = r2Match ? r2Match[1] : null;
        
        let calculated = parts[parts.length - 1].trim();
        
        let newSteps = [
          {
            explanation: "Substitute the x and y coordinates of the point into the left side of the circle equation.",
            workingOut: '\\\\(' + parts[0].trim() + '\\\\)',
            graphData: step0.graphData
          },
          {
            explanation: "Calculate the squares of the coordinates.",
            workingOut: '\\\\(' + parts[0].trim() + ' = ' + parts[1].trim() + '\\\\)',
            graphData: null
          },
          {
            explanation: "Add them together to find the result.",
            workingOut: '\\\\(' + parts[1].trim() + ' = ' + calculated + '\\\\)',
            graphData: null
          },
          {
            explanation: "Compare the result with the radius squared (the right side of the equation) to determine if the point lies on the circle.",
            workingOut: '\\\\(' + calculated + (calculated === r2 ? ' = ' : ' \\\\\\\\neq ') + r2 + '\\\\)',
            graphData: null
          },
          {
            explanation: "Conclude whether the point lies on the circle.",
            workingOut: '\\\\(\\\\text{' + (q.answer === "0" ? "Yes" : "No") + '}\\\\)',
            graphData: null
          }
        ];
        
        q.solutionSteps = newSteps;
        
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
    console.log(`Updated ${updateCount} questions.`);
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
