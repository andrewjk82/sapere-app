import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y10-11a-q11');
  const doc = await docRef.get();
  const data = doc.data();

  const subQuestions = data.subQuestions;
  
  // Update subquestion A
  subQuestions[0].type = 'multiple_choice';
  subQuestions[0].options = [
    { text: '\\(6\\)' },
    { text: '\\(36\\)' },
    { text: '\\(12\\)' },
    { text: '\\(3\\)' }
  ];
  subQuestions[0].answer = '0';
  
  // Update subquestion B
  subQuestions[1].type = 'multiple_choice';
  subQuestions[1].options = [
    { text: '\\((6, 8)\\)' },
    { text: '\\((8, 6)\\)' },
    { text: '\\((6, 0)\\)' },
    { text: '\\((12, 16)\\)' }
  ];
  subQuestions[1].answer = '0';

  // Update subquestion C
  subQuestions[2].type = 'multiple_choice';
  subQuestions[2].options = [
    { text: '\\((x-6)^2 + (y-8)^2 = 9\\)' },
    { text: '\\((x-6)^2 + (y-8)^2 = 36\\)' },
    { text: '\\((x+6)^2 + (y+8)^2 = 9\\)' },
    { text: '\\((x-6)^2 + (y-8)^2 = 3\\)' }
  ];
  subQuestions[2].answer = '0';

  await docRef.update({ subQuestions });
  console.log('Converted y10-11a-q11 subquestions to multiple_choice!');
}

run().catch(console.error);
