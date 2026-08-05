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
    if (q.type === 'teacher_review') {
      let changed = false;
      if (q.answer && q.answer.startsWith('LHS =') && !q.answer.startsWith('\\(')) {
        q.answer = '\\(' + q.answer + '\\)';
        changed = true;
      }
      if (q.solution && q.solution.startsWith('LHS =') && !q.solution.startsWith('\\(')) {
        q.solution = '\\(' + q.solution + '\\)';
        changed = true;
      }
      
      // Also check if any answer contains math without wrapper
      if (q.answer && !q.answer.startsWith('\\(') && (q.answer.includes('\\cos') || q.answer.includes('\\sin') || q.answer.includes('\\tan') || q.answer.includes('\\sec') || q.answer.includes('\\csc') || q.answer.includes('\\cot'))) {
        q.answer = '\\(' + q.answer + '\\)';
        changed = true;
      }
      if (q.solution && !q.solution.startsWith('\\(') && (q.solution.includes('\\cos') || q.solution.includes('\\sin') || q.solution.includes('\\tan') || q.solution.includes('\\sec') || q.solution.includes('\\csc') || q.solution.includes('\\cot'))) {
        q.solution = '\\(' + q.solution + '\\)';
        changed = true;
      }

      if (changed) {
        await db.collection('questions').doc(q.id).update({
          answer: q.answer,
          solution: q.solution,
          updatedAt: FieldValue.serverTimestamp()
        });
        count++;
      }
    }
  }

  const fileContent = "export const Y11_CH6F_QUESTIONS = " + JSON.stringify(Y11_CH6F_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully fixed MODEL ANSWER LaTeX wrappers for ${count} teacher_review questions locally and pushed to Firestore.`);
}
fix().catch(console.error);
