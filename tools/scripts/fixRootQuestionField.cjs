const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const toFix = ['girr2020-mc29', 'girr2020-mc29s'];

  for (const docId of toFix) {
    const docSnap = await db.collection('questions').doc(docId).get();
    if (!docSnap.exists) continue;
    const data = docSnap.data();

    // The root document also needs the 'question' field set for QuestionBankModal
    if (!data.question && data.q) {
      await db.collection('questions').doc(docId).update({
        question: data.q,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Fixed root question field in Firestore.");
  process.exit(0);
}

run().catch(console.error);
