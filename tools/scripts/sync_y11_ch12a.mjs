import admin from 'firebase-admin';
import { readFileSync, writeFileSync } from 'fs';
import { Y11_CH12A_QUESTIONS } from '../../src/constants/seedYear11Ch12AQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const run = async () => {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y11a-12A').get();
  let count = 0;
  
  for (const doc of snapshot.docs) {
    let data = doc.data();
    let seedMatch = Y11_CH12A_QUESTIONS.find(q => q.id === doc.id);
    
    if (seedMatch) {
      let needsUpdate = false;
      
      // Update opts
      if (JSON.stringify(data.opts) !== JSON.stringify(seedMatch.opts)) {
        data.opts = seedMatch.opts;
        // Also update options format for multiple_choice if needed
        if (data.type === 'multiple_choice' && data.opts) {
          data.options = data.opts.map((opt, i) => ({
            text: opt,
            imageUrl: ''
          }));
        }
        needsUpdate = true;
      }
      
      // Update solutionSteps ONLY if it's NOT a group (group questions have custom steps in subQuestions)
      if (data.type !== 'group' && data.solutionSteps && data.solutionSteps.length > 0) {
        if (data.solutionSteps[0].explanation.includes('calculus or finance')) {
          data.solutionSteps = seedMatch.solutionSteps;
          needsUpdate = true;
        }
      }
      
      if (needsUpdate) {
        await db.collection('questions').doc(doc.id).set(data);
        console.log('Updated', doc.id);
        count++;
      }
    }
  }
  console.log('Total documents updated in DB:', count);
  process.exit(0);
};
run();
