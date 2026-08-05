const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newOptions = [
    { text: '\\(-\\frac{4}{3}\\)', imageUrl: '' },
    { text: '\\(-\\frac{7}{3}\\)', imageUrl: '' }, // Answer is 1
    { text: '\\(-\\frac{10}{3}\\)', imageUrl: '' },
    { text: '\\(\\frac{7}{3}\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y9-11g-q10').update({
    options: newOptions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated q10 options successfully.");
  process.exit(0);
}

run().catch(console.error);
