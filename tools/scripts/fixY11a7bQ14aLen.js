import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y11a-7b-q14a-len');
  
  await docRef.update({
    options: [
      {
        "text": "\\(\\sqrt{17}, \\sqrt{17}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\sqrt{17}, \\sqrt{17} - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\sqrt{17}, \\sqrt{17} + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\sqrt{17}, \\sqrt{17}\\)",
        "imageUrl": ""
      }
    ]
  });

  console.log('Fixed missing backslashes in y11a-7b-q14a-len options!');
}

run().catch(console.error);
