const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc1 = await db.collection('questions').doc('dadd32e10529898e4cd6ef9a3a506492').get();
  if (doc1.exists) console.log('\n=== dadd32e10529898e4cd6ef9a3a506492 ===\n', JSON.stringify(doc1.data(), null, 2));
  
  const doc2 = await db.collection('questions').doc('db65bd3d89222045c977f4f83af66113').get();
  if (doc2.exists) console.log('\n=== db65bd3d89222045c977f4f83af66113 ===\n', JSON.stringify(doc2.data(), null, 2));
}
run().catch(console.error);
