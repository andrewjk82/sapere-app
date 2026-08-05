const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docId = 'y10-3c-56';
  const docRef = db.collection('questions').doc(docId);
  const doc = await docRef.get();
  
  if (!doc.exists) {
    console.log('Doc does not exist!');
    process.exit(1);
  }
  
  const data = doc.data();
  console.log('Original opts:', data.opts);
  console.log('Original options (if any):', data.options ? data.options.map(o => o.text) : null);
  console.log('Original answer:', data.answer);
  
  const correctOptText = "\\(x = -\\frac{4}{3}\\)";
  const opt2 = "\\(x = \\frac{4}{3}\\)";
  const opt3 = "\\(x = -\\frac{3}{4}\\)";
  const opt4 = "\\(x = -10\\)";
  
  const newOpts = [correctOptText, opt2, opt3, opt4];
  
  let updates = {
    opts: newOpts,
    answer: "0" // index of correct answer
  };
  
  // If it's a seed document format (isManual might be true or false, but it's an MCQ)
  // Usually if `options` array exists, we should update it too.
  if (data.options) {
    updates.options = newOpts.map(t => ({ text: t, graphData: null }));
  }
  
  await docRef.update(updates);
  console.log(`Successfully updated question ${docId} options in Firestore.`);
  
  process.exit(0);
}

run().catch(console.error);
