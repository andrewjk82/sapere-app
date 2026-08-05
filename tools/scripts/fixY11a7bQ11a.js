import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y11a-7b-q11a');
  
  await docRef.update({
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: 'yes', isCorrect: true },
      { text: 'no', isCorrect: false }
    ],
    answer: '0'
  });

  console.log('Converted y11a-7b-q11a to multiple_choice with yes/no options!');
}

run().catch(console.error);
