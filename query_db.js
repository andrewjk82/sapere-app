import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(
  readFileSync('/Users/andrewkim/Desktop/sapere1/scratch/serviceAccountKey.json', 'utf8')
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function run() {
  const snapshot = await db.collection('questions')
    .where('topicId', 'in', ['y11a-6B', 'y11a-6b'])
    .get();

  console.log(`Found ${snapshot.size} questions.`);
  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    console.log(`- ID: ${doc.id}, chapterId: ${data.chapterId}, topicId: ${data.topicId}`);
  });
  process.exit(0);
}

run().catch(console.error);
