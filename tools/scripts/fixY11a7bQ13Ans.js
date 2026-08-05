import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y11a-7b-q13');
  
  await docRef.update({
    answer: "\\(m_{AB} = \\frac{1}{2}, m_{BC} = -2, m_{AC} = 0\\).\n\nSince \\(m_{AB} \\cdot m_{BC} = -1\\), \\(AB\\) is perpendicular to \\(BC\\), so it is a right-angled triangle."
  });

  console.log('Fixed the formatting of the model answer in y11a-7b-q13!');
}

run().catch(console.error);
