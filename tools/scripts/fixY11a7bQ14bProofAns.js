import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y11a-7b-q14b-proof');
  
  await docRef.update({
    answer: "\\(m_{XZ} = -\\frac{5}{2}, m_{YZ} = \\frac{2}{5}\\).\n\n\\(m_{XZ} \\cdot m_{YZ} = -1\\), right-angled at \\(Z\\)."
  });

  console.log('Fixed the formatting of the model answer in y11a-7b-q14b-proof!');
}

run().catch(console.error);
