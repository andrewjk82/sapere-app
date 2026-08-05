const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const ids = [
    'y10-13a-q3a', 'y10-13a-q3b', 'y10-13a-q3c',
    'y10-13a-q3d', 'y10-13a-q3e', 'y10-13a-q3f', 'y10-13a-q3g', 'y10-13a-q3h'
  ];

  let anyUpdated = false;
  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const docSnap = await docRef.get();
    
    if (docSnap.exists) {
      let svg = docSnap.data().graphData.svg;
      
      // Remove all elements with class="arc"
      const newSvg = svg.replace(/<path[^>]+class="arc"[^>]*\/>\n\s*/g, '');
      
      if (svg !== newSvg) {
        await docRef.update({
          'graphData.svg': newSvg,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log('Removed arcs from ' + id);
        anyUpdated = true;
      } else {
        console.log('No arcs found to remove in ' + id);
      }
    } else {
      console.log(id + ' not found');
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
