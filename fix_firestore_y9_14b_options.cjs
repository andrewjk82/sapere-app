const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qs = await db.collection('questions').where('topicId', '==', 'y9-14b').get();
  let count = 0;
  for (const doc of qs.docs) {
    const data = doc.data();
    if (data.opts && Array.isArray(data.opts)) {
      const newOptions = data.opts.map(optStr => ({
        text: optStr,
        imageUrl: ""
      }));
      await doc.ref.update({
        options: newOptions,
        opts: FieldValue.delete()
      });
      count++;
    }
  }
  console.log(`Updated ${count} questions in Firestore.`);
}
run().catch(console.error);
