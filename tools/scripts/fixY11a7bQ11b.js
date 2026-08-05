import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y11a-7b-q11b');
  
  await docRef.update({
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: 'no', isCorrect: true },
      { text: 'yes', isCorrect: false }
    ],
    answer: '0'
  });

  console.log('Converted y11a-7b-q11b to multiple_choice with no/yes options!');
}

run().catch(console.error);
