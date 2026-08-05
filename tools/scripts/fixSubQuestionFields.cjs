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

    if (data.subQuestions) {
      const fixedSubQuestions = data.subQuestions.map(sq => {
        return {
          ...sq,
          question: sq.question || sq.q || '',
          options: sq.options || (sq.opts ? sq.opts.map(opt => ({ text: String(opt), imageUrl: '' })) : []),
          answer: sq.answer || sq.a || '',
        };
      });

      await db.collection('questions').doc(docId).update({
        subQuestions: fixedSubQuestions,
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

  console.log("Fixed subQuestions schema in Firestore.");
  process.exit(0);
}

run().catch(console.error);
