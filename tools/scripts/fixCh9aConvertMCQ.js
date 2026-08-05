import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const batch = db.batch();

  // Fix y10-9a-q8n
  const docRefN = db.collection('questions').doc('y10-9a-q8n');
  batch.update(docRefN, {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(1\\)', isCorrect: true },
      { text: '\\(0\\)', isCorrect: false },
      { text: '\\(3+x\\)', isCorrect: false },
      { text: '\\(x\\)', isCorrect: false }
    ],
    answer: '0'
  });

  // Fix y10-9a-q8o
  const docRefO = db.collection('questions').doc('y10-9a-q8o');
  batch.update(docRefO, {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(1\\)', isCorrect: true },
      { text: '\\(0\\)', isCorrect: false },
      { text: '\\(5^4\\)', isCorrect: false },
      { text: '\\(5\\)', isCorrect: false }
    ],
    answer: '0'
  });

  await batch.commit();
  console.log('Converted y10-9a-q8n and y10-9a-q8o to multiple_choice!');
}

run().catch(console.error);
