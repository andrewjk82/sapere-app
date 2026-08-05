const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  await db.collection('questions').doc('y9-11i-q1a').update({ graphData: null });
  await db.collection('questions').doc('y9-11i-q1b').update({ graphData: null });
  await db.collection('questions').doc('y9-11i-q1c').update({ graphData: null });

  console.log("Removed graphData from main question body for y9-11i-q1a, q1b, q1c");
  process.exit(0);
}

run().catch(console.error);
