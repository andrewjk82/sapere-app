const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgData = JSON.parse(fs.readFileSync('tools/scripts/genSvg28a.json', 'utf8'));

  await db.collection('questions').doc('girr2020-mc28a').update({
    q: 'A vertical tower $YZ$ of height $h$ stands on horizontal ground. The angle of elevation from a point $B$ on the ground to the top of the tower $Z$ is $12^\\circ$. The diagram below illustrates this setup. Show that $BY = h \\cot 12^\\circ$. **(Teacher-graded proof)**',
    question: 'A vertical tower $YZ$ of height $h$ stands on horizontal ground. The angle of elevation from a point $B$ on the ground to the top of the tower $Z$ is $12^\\circ$. The diagram below illustrates this setup. Show that $BY = h \\cot 12^\\circ$. **(Teacher-graded proof)**',
    graphData: { svg: svgData.svg },
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 28a with SVG and descriptive text.");
  process.exit(0);
}

run().catch(console.error);
