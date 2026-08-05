import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const saPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const sa = JSON.parse(fs.readFileSync(saPath, 'utf8'));

initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function fixQ8aMath() {
  const targetIds = ['y9-7a-q8a-alpha', 'y9-7a-q8a-beta', 'y9-7a-q8a-gamma'];
  const batch = db.batch();

  for (const id of targetIds) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    const data = doc.data();
    if (!data) continue;

    // 1. Update the SVG: change 60° to 50°
    let question = data.question;
    question = question.replace(/>60°<\/text>/, '>50°</text>');
    
    let updates = { question };

    // 2. Update the solution and answer for q8a-beta
    if (id === 'y9-7a-q8a-beta') {
      updates.answer = 3; // 130° is index 3
      const solutionSteps = data.solutionSteps;
      if (solutionSteps && solutionSteps.length > 0) {
        solutionSteps[0].workingOut = '\\(\\beta + 50^\\circ = 180^\\circ \\Rightarrow 130^\\circ\\)';
        updates.solutionSteps = solutionSteps;
      }
    }

    batch.update(docRef, updates);
    console.log(`Updated math for ${id}`);
  }

  await batch.commit();
  console.log('Batch commit successful!');
}

fixQ8aMath().catch(console.error);
