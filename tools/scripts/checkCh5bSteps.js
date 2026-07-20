import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const ids = [
    'y9-5b-q1a', 'y9-5b-q1b', 'y9-5b-q1c', 'y9-5b-q1d', 'y9-5b-q1e', 'y9-5b-q1f', 'y9-5b-q1g', 'y9-5b-q1h', 'y9-5b-q1i', 'y9-5b-q1j',
    'y9-5b-q1k', 'y9-5b-q1l', 'y9-5b-q1m', 'y9-5b-q1n', 'y9-5b-q1o', 'y9-5b-q1p', 'y9-5b-q1q', 'y9-5b-q1r',
    'y9-5b-q2a', 'y9-5b-q2b', 'y9-5b-q2c', 'y9-5b-q2d', 'y9-5b-q2e', 'y9-5b-q2f', 'y9-5b-q2g', 'y9-5b-q2h', 'y9-5b-q2i', 'y9-5b-q2j',
    'y9-5b-q2k', 'y9-5b-q2l'
  ];

  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    const data = doc.data();
    console.log(`- ID: ${id}`);
    if (data && data.solutionSteps) {
      data.solutionSteps.forEach((step, i) => {
        console.log(`   Step ${i+1}: Exp: ${step.explanation} | WO: ${step.workingOut}`);
      });
    }
  }
  process.exit(0);
}

run();
