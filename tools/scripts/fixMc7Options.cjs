const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const opts = [
    "Graph (A): amplitude 2, period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\)",
    "Graph (B): amplitude 2, period \\(4\\pi\\), no phase shift",
    "Graph (C): amplitude 2, period \\(\\pi\\), with phase shift",
    "Graph (D): amplitude 2, period \\(\\pi\\), no phase shift"
  ];
  
  const options = opts.map(opt => ({ text: opt, imageUrl: "" }));
  
  await db.collection('questions').doc('cths2020-mc7').update({
    opts: opts,
    options: options,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed cths2020-mc7 options array!');
  process.exit(0);
}
run();
