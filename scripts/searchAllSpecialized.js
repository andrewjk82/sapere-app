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
  const snap = await db.collection('questions').get();
  console.log(`Checking all ${snap.docs.length} questions in Firestore...`);
  
  const matches = [];
  snap.docs.forEach(doc => {
    const data = doc.data();
    if (data.question && data.question.toLowerCase().includes('specialized')) {
      matches.push({
        id: doc.id,
        topicId: data.topicId,
        question: data.question
      });
    }
  });
  
  console.log(`Found ${matches.length} questions containing "specialized":`);
  matches.forEach(m => {
    console.log(`[${m.topicId}] [${m.id}]: ${m.question}`);
  });
  process.exit(0);
};

run();
