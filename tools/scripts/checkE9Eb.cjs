const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc1 = await db.collection('questions').doc('e92eecb53c2404d35ffda7e143405d11').get();
  if (doc1.exists) console.log('\n=== e92eecb53c2404d35ffda7e143405d11 ===\n', JSON.stringify(doc1.data(), null, 2));
  
  const doc2 = await db.collection('questions').doc('eb670dc5a59c9a83a32db4cea3181e75').get();
  if (doc2.exists) console.log('\n=== eb670dc5a59c9a83a32db4cea3181e75 ===\n', JSON.stringify(doc2.data(), null, 2));
}
run().catch(console.error);
