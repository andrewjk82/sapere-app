const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const baseText = "In the diagram below, squares AHFD and HBCF are drawn with common side FH of length 3. Diagonal AC is drawn and E is a point on AC such that AE = 3. G is a point on AC so that FG is parallel to DE.";
  
  const updates = [
    { id: 'y10-2g-q14aii', append: "Find the exact length of EC." },
    { id: 'y10-2g-q14aiii', append: "Find the exact length of EG." },
    { id: 'y10-2g-q14aiv', append: "Find the exact length of GC." }
  ];
  
  for (const item of updates) {
    const docRef = db.collection('questions').doc(item.id);
    const doc = await docRef.get();
    if (doc.exists) {
      await docRef.update({
        question: baseText + " " + item.append
      });
      console.log('Updated question text for ' + item.id);
    }
  }
  
  // y10-2g-q14b says "Using the results from part a..."
  const docRefB = db.collection('questions').doc('y10-2g-q14b');
  const docB = await docRefB.get();
  if (docB.exists) {
    // If it says 'Using the results from part a', maybe replace it entirely?
    const qText = docB.data().question;
    const newText = qText.replace("Refer to the same diagram.", baseText);
    await docRefB.update({ question: newText });
    console.log('Updated question text for y10-2g-q14b');
  }
  
  process.exit(0);
}

run().catch(console.error);
