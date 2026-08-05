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
  let updateCount = 0;

  for (let q of questions) {
    if (q.id === 'y10-11a-q8b') {
      q.solutionSteps = [
        {
          explanation: "Identify the centre \\((h, k)\\) and the radius \\(r\\) from the given information.",
          workingOut: "\\(h = 3, \\quad k = 10, \\quad r = 13\\)",
          graphData: null
        },
        {
          explanation: "Substitute the centre and radius into the standard circle equation \\((x-h)^2 + (y-k)^2 = r^2\\).",
          workingOut: "\\((x - 3)^2 + (y - 10)^2 = 13^2\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the radius squared to find the final equation.",
          workingOut: "\\((x - 3)^2 + (y - 10)^2 = 169\\)",
          graphData: null
        }
      ];
      rootUpdates.push(q);
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
}

run().catch(console.error);
