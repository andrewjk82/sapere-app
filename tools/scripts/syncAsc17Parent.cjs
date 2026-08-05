const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  // Get latest a and b
  const docA = await db.collection('questions').doc('asc2020-q17-a').get();
  const docB = await db.collection('questions').doc('asc2020-q17-b').get();
  
  if (!docA.exists || !docB.exists) {
    throw new Error("Missing standalone subquestion docs!");
  }
  
  const dataA = docA.data();
  const dataB = docB.data();
  
  // Get parent
  const parentRef = db.collection('questions').doc('asc2020-q17');
  const parentDoc = await parentRef.get();
  
  if (!parentDoc.exists) {
    throw new Error("Parent doc asc2020-q17 not found!");
  }
  
  let parentData = parentDoc.data();
  
  // Overwrite subQuestions with fresh data
  parentData.subQuestions = [
    { id: 'asc2020-q17-a', ...dataA },
    { id: 'asc2020-q17-b', ...dataB }
  ];
  
  await parentRef.update({
    subQuestions: parentData.subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully synced subQuestions for asc2020-q17!');
  process.exit(0);
}
run();
