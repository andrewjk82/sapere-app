import admin from 'firebase-admin';
import { readFileSync, writeFileSync } from 'fs';
import { Y10_CH6K_QUESTIONS } from '../../src/constants/seedYear10Ch6KQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const run = async () => {
  console.log('[Fix] Updating parent documents with new subquestion data...');
  
  // Get all parent documents in y10-6k
  const qColl = db.collection('questions');
  const docs = await qColl.where('chapterId', '==', 'y10-6').get();
  const parents = docs.docs.filter(d => d.id.startsWith('y10-6k-q') && !d.id.match(/[a-z]$/));
  
  const batch = db.batch();
  let updatedCount = 0;

  for (const p of parents) {
    const parentData = p.data();
    if (parentData.subQuestions && parentData.subQuestions.length > 0) {
      const updatedSubQs = parentData.subQuestions.map(subq => {
        // Find corresponding flat question from seed data
        const newQ = Y10_CH6K_QUESTIONS.find(q => q.id === subq.id);
        if (newQ) {
          console.log(`Updating subquestion ${subq.id} in parent ${p.id}`);
          return {
            ...subq,
            type: "multiple_choice",
            options: newQ.options,
            solutionSteps: newQ.solutionSteps
          };
        }
        return subq;
      });
      
      batch.update(p.ref, { subQuestions: updatedSubQs });
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    await batch.commit();
    console.log(`Successfully updated ${updatedCount} parent documents!`);
  } else {
    console.log('No parent documents needed updating.');
  }
  process.exit(0);
};

run().catch(e => { console.error(e); process.exit(1); });
