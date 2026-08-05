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
  
  let parentUpdates = {};
  let rootUpdates = [];
  let updateCount = 0;

  for (let q of questions) {
    if (q.id === 'y10-11a-q9') {
      q.solutionSteps = [
        {
          explanation: "The radius of the circle is the distance from the centre (5, -12) to the origin (0, 0). Use the distance formula.",
          workingOut: "\\(r = \\sqrt{(5 - 0)^2 + (-12 - 0)^2}\\)",
          graphData: null
        },
        {
          explanation: "Calculate the radius.",
          workingOut: "\\(r = \\sqrt{25 + 144} = \\sqrt{169} = 13\\)",
          graphData: null
        },
        {
          explanation: "Substitute the centre (5, -12) and radius r = 13 into the standard circle equation \\((x-h)^2 + (y-k)^2 = r^2\\).",
          workingOut: "\\((x - 5)^2 + (y - (-12))^2 = 13^2\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the radius squared to find the final equation.",
          workingOut: "\\((x-5)^2 + (y+12)^2 = 169\\)",
          graphData: null
        }
      ];
      rootUpdates.push(q);
      updateCount++;
    } else if (q.id === 'y10-11a-q10a') {
      q.solutionSteps = [
        {
          explanation: "Since the circle touches the y-axis, its radius is equal to the absolute value of the x-coordinate of the centre.",
          workingOut: "\\(r = |5| = 5\\)",
          graphData: null
        },
        {
          explanation: "Substitute the centre (5, 8) and radius r = 5 into the standard circle equation \\((x-h)^2 + (y-k)^2 = r^2\\).",
          workingOut: "\\((x - 5)^2 + (y - 8)^2 = 5^2\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the radius squared to get the final equation.",
          workingOut: "\\((x - 5)^2 + (y - 8)^2 = 25\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    } else if (q.id === 'y10-11a-q10b') {
      q.solutionSteps = [
        {
          explanation: "Since the circle touches the x-axis, its radius is equal to the absolute value of the y-coordinate of the centre.",
          workingOut: "\\(r = |8| = 8\\)",
          graphData: null
        },
        {
          explanation: "Substitute the centre (5, 8) and radius r = 8 into the standard circle equation \\((x-h)^2 + (y-k)^2 = r^2\\).",
          workingOut: "\\((x - 5)^2 + (y - 8)^2 = 8^2\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the radius squared to get the final equation.",
          workingOut: "\\((x - 5)^2 + (y - 8)^2 = 64\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    }
  }

  if (updateCount > 0) {
    const newFileContent = `export const Y10_CH11A_QUESTIONS = ` + JSON.stringify(questions, null, 2) + ";\n";
    fs.writeFileSync(filepath, newFileContent, 'utf8');
    console.log(`Updated ${updateCount} solutionSteps in JS file.`);
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
