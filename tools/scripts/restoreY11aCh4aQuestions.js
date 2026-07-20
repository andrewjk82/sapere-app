import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const backup = JSON.parse(readFileSync('/Users/andrewkim/.gemini/antigravity-ide/brain/a055def1-1288-4a20-a812-87f14859d7ad/scratch/y11a_4A_questions.json', 'utf8'));
  
  console.log('Restoring ' + backup.length + ' questions to original state from backup...');
  
  // We can write updates in chunks of 50 using batches
  for (let i = 0; i < backup.length; i += 50) {
    const chunk = backup.slice(i, i + 50);
    const batch = db.batch();
    
    chunk.forEach(q => {
      const ref = db.collection('questions').doc(q.id);
      // Restore original options, and reset graphData/solutionSteps if desired
      // Keep solutionSteps if they were populated
      batch.update(ref, {
        options: q.options,
        graphData: FieldValue.delete() // clean up root graphData
      });
    });
    
    await batch.commit();
    console.log(`Restored chunk ${i / 50 + 1}`);
  }

  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Restore completed successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
