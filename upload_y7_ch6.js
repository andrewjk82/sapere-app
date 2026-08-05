import fs from 'fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Y7_CH6A_QUESTIONS } from './src/constants/seedYear7Ch6AQuestions.js';
import { Y7_CH6B_QUESTIONS } from './src/constants/seedYear7Ch6BQuestions.js';
import { Y7_CH6C_QUESTIONS } from './src/constants/seedYear7Ch6CQuestions.js';
import { Y7_CH6D_QUESTIONS } from './src/constants/seedYear7Ch6DQuestions.js';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function uploadQuestions() {
  const batch = db.batch();
  let count = 0;

  const allQuestions = [
    ...Y7_CH6A_QUESTIONS,
    ...Y7_CH6B_QUESTIONS,
    ...Y7_CH6C_QUESTIONS,
    ...Y7_CH6D_QUESTIONS
  ];

  for (const q of allQuestions) {
    if (!q.id) {
        console.warn('Skipping question without ID', q);
        continue;
    }
    const docRef = db.collection('questions').doc(q.id);
    batch.set(docRef, q);
    count++;
  }

  await batch.commit();
  console.log(`Successfully uploaded ${count} questions to Firestore.`);
}

uploadQuestions().catch(console.error);
