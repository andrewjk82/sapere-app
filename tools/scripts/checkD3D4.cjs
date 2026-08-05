const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc1 = await db.collection('questions').doc('d3f30ab69aa74f20ac6f50b9b037ce5a').get();
  if (doc1.exists) console.log('\n=== d3f30ab69aa74f20ac6f50b9b037ce5a ===\n', JSON.stringify(doc1.data(), null, 2));
  
  const doc2 = await db.collection('questions').doc('d4c125eab1edc1c554df8b7a4674e8ac').get();
  if (doc2.exists) console.log('\n=== d4c125eab1edc1c554df8b7a4674e8ac ===\n', JSON.stringify(doc2.data(), null, 2));
}
run().catch(console.error);
