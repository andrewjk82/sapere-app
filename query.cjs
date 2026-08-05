const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qs = await db.collection('questions').where('question', '==', 'Which of the following describes the graph of \\(x \\geq 5\\)?').get();
  console.log(`Found ${qs.docs.length} questions`);
  qs.docs.forEach(doc => {
    console.log(`\nDoc ID: ${doc.id}`);
    console.log(JSON.stringify(doc.data().options, null, 2));
  });
}
run().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
