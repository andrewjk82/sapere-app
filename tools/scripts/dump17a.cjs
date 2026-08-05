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
  
  const data = [];
  snapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });
  console.log(JSON.stringify(data, null, 2));
}
run().catch(console.error);
