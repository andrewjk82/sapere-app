import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y11a-7b-q12');
  
  await docRef.update({
    answer: "\\( m_{AB} = \\frac{1}{3}, m_{AC} = \\frac{1}{3}, m_{AD} = \\frac{1}{3} \\).\n\nSince all line segments share point A and have the same gradient, the four points are collinear."
  });

  console.log('Fixed the formatting of the model answer in y11a-7b-q12!');
}

run().catch(console.error);
