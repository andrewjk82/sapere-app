import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

async function inspectCh6() {
  console.log('Querying all questions in Chapter 6 (y11a-6)...');
  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-6')
    .get();

  console.log(`Total questions found in Chapter 6: ${snap.size}`);
  
  const countsByTopic = {};
  const questionsList = [];
  
  snap.forEach(doc => {
    const data = doc.data();
    const topicCode = data.topicCode || 'N/A';
    countsByTopic[topicCode] = (countsByTopic[topicCode] || 0) + 1;
    questionsList.push({
      id: doc.id,
      topicCode,
      question: data.question?.substring(0, 60) + '...'
    });
  });

  console.log('\n--- BREAKDOWN BY TOPIC CODE ---');
  console.log(JSON.stringify(countsByTopic, null, 2));

  console.log('\n--- SAMPLE QUESTIONS (FIRST 10) ---');
  questionsList.slice(0, 10).forEach((q, index) => {
    console.log(`[${index + 1}] ID: ${q.id} | Topic: ${q.topicCode} | Text: ${q.question}`);
  });
  
  process.exit(0);
}

inspectCh6().catch(err => {
  console.error('Inspection failed:', err);
  process.exit(1);
});
