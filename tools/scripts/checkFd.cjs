const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc = await db.collection('questions').doc('fd86831b3328c6ffa2f15e714d3ce14a').get();
  if (doc.exists) console.log(JSON.stringify(doc.data(), null, 2));
  else console.log('fd86831b... Not found');
  
  const doc2 = await db.collection('questions').doc('asc2020-q16').get();
  if (doc2.exists) console.log(JSON.stringify(doc2.data(), null, 2));
}
run().catch(console.error);
