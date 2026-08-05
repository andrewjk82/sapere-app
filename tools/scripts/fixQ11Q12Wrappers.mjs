import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

async function fix() {
  const filepath = path.resolve('src/constants/seedYear11Ch6FQuestions.js');
  const { Y11_CH6F_QUESTIONS } = await import('../../src/constants/seedYear11Ch6FQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let count = 0;
  for (let q of Y11_CH6F_QUESTIONS) {
    if (q.id.startsWith('y11a-6f-q11') || q.id.startsWith('y11a-6f-q12')) {
      let changed = false;
      for (let step of q.solutionSteps) {
        if (step.workingOut && !step.workingOut.startsWith('\\(')) {
          // It needs wrappers
          step.workingOut = '\\(' + step.workingOut + '\\)';
          changed = true;
        }
      }
      if (changed) {
        await db.collection('questions').doc(q.id).update({
          solutionSteps: q.solutionSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        count++;
      }
    }
  }

  const fileContent = "export const Y11_CH6F_QUESTIONS = " + JSON.stringify(Y11_CH6F_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully fixed LaTeX wrappers for ${count} questions locally and pushed to Firestore.`);
}
fix().catch(console.error);
