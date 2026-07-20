const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const snapshot = await db.collection('questions').where('question', '>=', '').get();
  for (const doc of snapshot.docs) {
    if (doc.id.includes('7Kdw') || (doc.data().question && doc.data().question.includes('840'))) {
      console.log('ID:', doc.id);
      console.log('Options:', doc.data().options);
    }
  }
}
check().catch(console.error);
