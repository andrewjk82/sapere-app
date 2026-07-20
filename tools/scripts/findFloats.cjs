const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function findFloatingPointErrors() {
  const snapshot = await db.collection('questions').get();
  let count = 0;
  for (const doc of snapshot.docs) {
    const data = doc.data();
    if (data.options) {
      let hasError = false;
      data.options.forEach(opt => {
        if (opt.text && (/\.\d*9999/.test(opt.text) || /\.\d*0000/.test(opt.text))) {
            hasError = true;
            console.log(`[${doc.id}] ID: ${doc.id}, text: ${opt.text}`);
        }
      });
    }
  }
}
findFloatingPointErrors().catch(console.error);
