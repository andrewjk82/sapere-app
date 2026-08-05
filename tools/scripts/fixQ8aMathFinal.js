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

async function fixQ8aMathFinal() {
  const targetIds = ['y9-7a-q8a-alpha', 'y9-7a-q8a-beta', 'y9-7a-q8a-gamma'];
  const batch = db.batch();

  for (const id of targetIds) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    const data = doc.data();
    if (!data) continue;

    // 1. Update the SVG: change 130° to 120°, and 50°/60° (whatever T currently is) to 120°
    let question = data.question;
    question = question.replace(/>130°<\/text>/, '>120°</text>');
    // The previous script might have changed it to 50, or it might still be 60.
    question = question.replace(/>50°<\/text>/, '>120°</text>');
    question = question.replace(/>60°<\/text>/, '>120°</text>'); // just in case

    // Create new options with 60°
    const options = [
      { text: '\\(30^\\circ\\)' },
      { text: '\\(60^\\circ\\)' },
      { text: '\\(90^\\circ\\)' },
      { text: '\\(120^\\circ\\)' }
    ];

    let updates = { question, options, answer: 1 }; // index 1 is 60°

    const solutionSteps = data.solutionSteps || [];
    
    // Update the solution based on the variant
    if (id === 'y9-7a-q8a-alpha') {
      if (solutionSteps.length > 0) {
        solutionSteps[0].workingOut = '\\(\\alpha = \\angle SQR = 180^\\circ - 120^\\circ = 60^\\circ\\)';
      }
    } else if (id === 'y9-7a-q8a-beta') {
      if (solutionSteps.length > 0) {
        solutionSteps[0].workingOut = '\\(\\beta + 120^\\circ = 180^\\circ \\Rightarrow 60^\\circ\\)';
      }
    } else if (id === 'y9-7a-q8a-gamma') {
      if (solutionSteps.length > 0) {
        solutionSteps[0].workingOut = '\\(\\gamma = \\angle SQR = 180^\\circ - 120^\\circ = 60^\\circ\\)';
      }
    }
    
    updates.solutionSteps = solutionSteps;

    batch.update(docRef, updates);
    console.log(`Updated math (final redesign) for ${id}`);
  }

  await batch.commit();
  console.log('Batch commit successful!');
}

fixQ8aMathFinal().catch(console.error);
