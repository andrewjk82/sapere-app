const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const ids = ['L2lzKvAHrVdkrcl6Pm2u', 'LMgiYvyJC8gXtYL5NMS0'];
  for (const id of ids) {
      const doc = await db.collection('questions').doc(id).get();
      console.log(`\n--- ID: ${id} ---`);
      console.log('Solution:', doc.data().solution.replace(/\n/g, ' '));
  }
}
check().catch(console.error);
