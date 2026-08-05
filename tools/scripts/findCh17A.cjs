const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions')
    .where('chapterId', '==', 'y7-17')
    .where('topicId', '==', 'y7-17a')
    .get();
  
  console.log(`Found ${snapshot.size} questions.`);
  snapshot.forEach(doc => {
    const data = doc.data();
    console.log(`- ID: ${doc.id}, Title: ${data.title || ''}, Question: ${data.question?.substring(0, 60) || ''}, HasImage: ${!!data.questionImage}`);
  });
}
run().catch(console.error);
