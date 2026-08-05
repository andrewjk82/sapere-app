import fs from 'fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Y10_CH15B_QUESTIONS } from './src/constants/seedYear10Ch15BQuestions.js';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function uploadQuestions() {
  const batch = db.batch();
  
  for (const q of Y10_CH15B_QUESTIONS) {
    const docRef = db.collection('questions').doc(q.id);
    const qToUpload = JSON.parse(JSON.stringify(q));
    
    // Map options for standard multiple_choice
    if (qToUpload.type === 'multiple_choice' && qToUpload.opts) {
      qToUpload.options = qToUpload.opts.map(o => ({ text: o, imageUrl: '' }));
    }
    
    // Map options for multipart subQuestions
    if (qToUpload.type === 'multipart' && qToUpload.subQuestions) {
      qToUpload.subQuestions.forEach(sq => {
        if (sq.type === 'multiple_choice' && sq.opts) {
          sq.options = sq.opts.map(o => ({ text: o, imageUrl: '' }));
        }
      });
    }
    
    batch.set(docRef, qToUpload);
    console.log(`Prepared upload for ${q.id}`);
  }

  // Execute batch
  await batch.commit();
  console.log('Successfully updated all questions with correctly formatted options.');
}

uploadQuestions().catch(console.error);
