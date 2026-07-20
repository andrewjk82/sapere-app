import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snapB = await db.collection('questions').where('topicId', '==', 'y10-4b').get();
  let invalidCount = 0;
  
  snapB.docs.forEach(doc => {
    const data = doc.data();
    if (data.solutionSteps) {
      data.solutionSteps.forEach((step, idx) => {
        if (step.workingOut) {
          const openCount = (step.workingOut.match(/\\\(/g) || []).length;
          const closeCount = (step.workingOut.match(/\\\)/g) || []).length;
          if (openCount !== closeCount) {
            console.log(`  [REMAINING MISMATCH] ID: ${doc.id}, Step ${idx+1}`);
            console.log(`    Content: "${step.workingOut}"`);
            invalidCount++;
          }
        }
      });
    }
  });

  console.log('Final y10-4b validation audit invalid counts:', invalidCount);
  process.exit(0);
})();
