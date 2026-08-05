const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgData = JSON.parse(fs.readFileSync('tools/scripts/genSvg24Frac.json', 'utf8'));

  await db.collection('questions').doc('girr2020-mc24').update({
    graphData: { svg: svgData.svg },
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated girr2020-mc24 with fraction SVG.");
  process.exit(0);
}

run().catch(console.error);
