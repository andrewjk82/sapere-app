import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const run = async () => {
  const snap = await db.collection('questions')
    .where('topicId', 'in', ['y7-1c', 'y10-1c'])
    .get();
  
  console.log(`Found ${snap.docs.length} questions.`);
  let count = 0;
  snap.docs.forEach(doc => {
    const data = doc.data();
    if (data.question && data.question.toLowerCase().includes('specialized')) {
      console.log(`[${data.topicId}] [${doc.id}]: ${data.question}`);
      count++;
    }
  });
  console.log(`Total questions containing "specialized": ${count}`);
  process.exit(0);
};

run();
