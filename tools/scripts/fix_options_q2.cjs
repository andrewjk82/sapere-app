const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y10-13a-q2a',
      options: [
        { text: "\\( \\alpha = 75^\\circ, \\beta = 90^\\circ \\)", imageUrl: "" },
        { text: "\\( \\alpha = 90^\\circ, \\beta = 65^\\circ \\)", imageUrl: "" },
        { text: "\\( \\alpha = 90^\\circ, \\beta = 75^\\circ \\)", imageUrl: "" },
        { text: "\\( \\alpha = 90^\\circ, \\beta = 85^\\circ \\)", imageUrl: "" }
      ]
    },
    {
      id: 'y10-13a-q2b',
      options: [
        { text: "\\( \\theta = 92^\\circ \\)", imageUrl: "" },
        { text: "\\( \\theta = 89^\\circ \\)", imageUrl: "" },
        { text: "\\( \\theta = 90^\\circ \\)", imageUrl: "" },
        { text: "\\( \\theta = 91^\\circ \\)", imageUrl: "" }
      ]
    },
    {
      id: 'y10-13a-q2c',
      options: [
        { text: "\\( \\theta = 92^\\circ \\)", imageUrl: "" },
        { text: "\\( \\theta = 89^\\circ \\)", imageUrl: "" },
        { text: "\\( \\theta = 90^\\circ \\)", imageUrl: "" },
        { text: "\\( \\theta = 91^\\circ \\)", imageUrl: "" }
      ]
    }
  ];

  let anyUpdated = false;
  for (const update of updates) {
    const docRef = db.collection('questions').doc(update.id);
    const docSnap = await docRef.get();
    
    if (docSnap.exists) {
      await docRef.update({
        options: update.options,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated options for ' + update.id);
      anyUpdated = true;
    } else {
      console.log(update.id + ' not found');
    }
  }

  if (anyUpdated) {
    console.log('Syncing chapter index for y10-13a...');
    await touchChapterIndex(db, 'y10-13a');
    console.log('Sync complete.');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
