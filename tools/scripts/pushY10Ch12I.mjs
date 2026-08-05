import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';

async function push() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const { Y10_CH12I_QUESTIONS } = await import('../../src/constants/seedYear10Ch12IQuestions.js');
  
  let count = 0;
  for (const q of Y10_CH12I_QUESTIONS) {
    const updateData = {
      isManual: q.isManual || false,
      opts: FieldValue.delete(), // critical for cleanup
      options: q.options || [],
      solutionSteps: q.solutionSteps || [],
      updatedAt: FieldValue.serverTimestamp()
    };
    
    if (q.type === 'multiple_choice') {
      updateData.a = q.a;
      updateData.answer = q.answer;
    }
    
    await db.collection('questions').doc(q.id).set(updateData, { merge: true });
    count++;
  }
  console.log(`Successfully pushed ${count} repaired questions to Firestore.`);
}
push().catch(console.error);
