const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const ids = ['BFhzM0bWyBfwAQegceez', 'c7zjNOo8brVdv0j9aQ1u', 'HSpNVJRCRqwIXfQ0GLQr'];
  
  for (const id of ids) {
      const doc = await db.collection('questions').doc(id).get();
      if (doc.exists) {
          console.log(`\n--- ID: ${id} ---`);
          console.log(JSON.stringify(doc.data().solutionSteps, null, 2));
      } else {
          console.log(`ID ${id} not found.`);
      }
  }
}
check().catch(console.error);
