import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const qRef = db.collection('questions').doc('9JZUyr1wjgH69tn9fj3u');
  
  await qRef.update({
    question: 'Complete the statement: \\( 32\\text{ km } 600\\text{ m} = \\text{\\_\\_\\_ } m \\).',
    options: [
      '\\( 32600\\text{ m} \\)',
      '\\( 326000\\text{ m} \\)',
      '\\( 3260\\text{ m} \\)',
      '\\( 320600\\text{ m} \\)'
    ]
  });

  const metaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await metaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Fixed LaTeX syntax securely via Node script!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
