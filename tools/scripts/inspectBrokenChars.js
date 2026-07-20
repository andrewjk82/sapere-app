import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const ids = ['9JZUyr1wjgH69tn9fj3u', '9aeB4HLTzduvPDDIlDa1'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      console.log(`Document ID: ${id}`);
      const question = doc.data().question;
      console.log("Question string length:", question.length);
      console.log("Question raw content:");
      for (let i = 0; i < question.length; i++) {
        console.log(`Char ${i}: '${question[i]}' (code: ${question.charCodeAt(i)})`);
      }
      console.log("-----------------------------------------");
    }
  }
}

run().catch(console.error);
