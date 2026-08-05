const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const doc = await db.collection('questions').doc('girr2020-mc17s').get();
  const data = doc.data();
  console.log("Firestore girr2020-mc17s SVG text:");
  const svg = data.solutionSteps[data.solutionSteps.length - 1].graphData.svg;
  console.log(svg.includes('2x² + 5') ? 'Has 2x² + 5' : (svg.includes('2x^2 + 5') ? 'Has 2x^2 + 5' : 'Neither'));

  process.exit(0);
}

run().catch(console.error);
