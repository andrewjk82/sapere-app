const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update q10 options
  const newOptionsQ10 = [
    { text: '\\(-\\frac{1}{2}\\)', imageUrl: '' },
    { text: '\\(-\\frac{7}{3}\\)', imageUrl: '' }, // Answer is 1
    { text: '\\(-\\frac{5}{2}\\)', imageUrl: '' },
    { text: '\\(-\\frac{3}{4}\\)', imageUrl: '' }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q10'), {
    options: newOptionsQ10,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update q11 options
  const newOptionsQ11 = [
    { text: '\\(-\\frac{1}{2}\\)', imageUrl: '' }, // Answer is 0
    { text: '\\(-\\frac{2}{3}\\)', imageUrl: '' },
    { text: '\\(-\\frac{3}{5}\\)', imageUrl: '' },
    { text: '\\(-\\frac{1}{4}\\)', imageUrl: '' }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q11'), {
    options: newOptionsQ11,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q10 and q11 options successfully.");
  process.exit(0);
}

run().catch(console.error);
