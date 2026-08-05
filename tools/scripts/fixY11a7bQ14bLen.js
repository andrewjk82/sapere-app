import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y11a-7b-q14b-len');
  
  await docRef.update({
    options: [
      {
        "text": "\\(\\sqrt{29}, \\sqrt{29} - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\sqrt{29}, \\sqrt{29}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\sqrt{29}, \\sqrt{29} + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\sqrt{29}, \\sqrt{29}\\)",
        "imageUrl": ""
      }
    ]
  });

  console.log('Fixed missing backslashes in y11a-7b-q14b-len options!');
}

run().catch(console.error);
