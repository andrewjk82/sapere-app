import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions').where('chapterId', '==', 'y9-5').where('topicId', '==', 'y9-5a').get();
  const list = [];
  snapshot.forEach(doc => {
    list.push({ id: doc.id, question: doc.data().question, solutionSteps: doc.data().solutionSteps });
  });
  list.sort((a, b) => a.id.localeCompare(b.id));

  console.log('Total questions in y9-5a:', list.length);
  list.forEach(item => {
    console.log(`- ID: ${item.id}`);
    if (item.solutionSteps) {
      item.solutionSteps.forEach((step, i) => {
        console.log(`   Step ${i+1}: Exp: ${step.explanation} | WO: ${step.workingOut}`);
      });
    }
  });
  process.exit(0);
}

run();
