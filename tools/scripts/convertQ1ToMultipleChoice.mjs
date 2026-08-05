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
  
  const q1Ids = ['y11a-6f-q1a', 'y11a-6f-q1b', 'y11a-6f-q1c', 'y11a-6f-q1d', 'y11a-6f-q1e', 'y11a-6f-q1f'];
  
  let count = 0;
  for (let q of Y11_CH6F_QUESTIONS) {
    if (q1Ids.includes(q.id)) {
      q.type = 'multiple_choice';
      q.isManual = false;
      q.options = [
        { text: 'True', imageUrl: '' },
        { text: 'False', imageUrl: '' }
      ];
      q.a = 0;
      q.answer = "0";
      
      // Clean up fields specific to teacher_review
      delete q.solution;
      if (q.opts) delete q.opts;

      await db.collection('questions').doc(q.id).set({
        type: q.type,
        isManual: q.isManual,
        options: q.options,
        a: q.a,
        answer: q.answer,
        solution: FieldValue.delete(),
        opts: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp()
      }, { merge: true });
      
      count++;
    }
  }

  const fileContent = "export const Y11_CH6F_QUESTIONS = " + JSON.stringify(Y11_CH6F_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully converted ${count} q1 questions to multiple_choice locally and pushed to Firestore.`);
}
fix().catch(console.error);
