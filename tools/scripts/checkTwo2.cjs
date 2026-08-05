const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Check asc2020-q16
  const doc1 = await db.collection('questions').doc('asc2020-q16').get();
  if (doc1.exists) {
    console.log('=== asc2020-q16 ===');
    console.log(JSON.stringify(doc1.data(), null, 2));
  } else {
    console.log('asc2020-q16 not found in questions');
    // Try pastPaperQuestions
    const doc1b = await db.collection('pastPaperQuestions').doc('asc2020-q16').get();
    if (doc1b.exists) {
      console.log('=== asc2020-q16 (pastPaperQuestions) ===');
      console.log(JSON.stringify(doc1b.data(), null, 2));
    }
  }

  // Check a68a344d...
  const doc2 = await db.collection('questions').doc('a68a344d83f2ed38d93e5170c749407e').get();
  if (doc2.exists) {
    console.log('\n=== a68a344d83f2ed38d93e5170c749407e ===');
    console.log(JSON.stringify(doc2.data(), null, 2));
  }
}
run().catch(console.error);
