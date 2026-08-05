const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc1 = await db.collection('questions').doc('dd9adf592212da6b4c48c82f50517950').get();
  if (doc1.exists) console.log('\n=== dd9adf592212da6b4c48c82f50517950 ===\n', JSON.stringify(doc1.data(), null, 2));
  
  const doc2 = await db.collection('questions').doc('decc1505518c9f1b404d29c1b23bfd6f').get();
  if (doc2.exists) console.log('\n=== decc1505518c9f1b404d29c1b23bfd6f ===\n', JSON.stringify(doc2.data(), null, 2));
}
run().catch(console.error);
