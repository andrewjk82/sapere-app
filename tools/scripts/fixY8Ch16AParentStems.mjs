import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

async function fixParentStems() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const parentIds = [
    'y8-16a-q8', 'y8-16a-q10', 'y8-16a-q12', 
    'y8-16a-q23', 'y8-16a-q24', 'y8-16a-q25', 
    'y8-16a-q26', 'y8-16a-q27'
  ];

  for (const pid of parentIds) {
    const parentDoc = await db.collection('questions').doc(pid).get();
    if (!parentDoc.exists) continue;
    const data = parentDoc.data();
    
    if (data.question && data.question.includes('..')) {
      const newStem = data.question.replace(/\.\./g, '.');
      await db.collection('questions').doc(pid).set({
        question: newStem
      }, { merge: true });
      console.log(`Cleaned double dots for ${pid}`);
    }
  }
}

fixParentStems().catch(console.error);
