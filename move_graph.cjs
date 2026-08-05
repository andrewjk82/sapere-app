const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./tools/scripts/_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const pSnap = await db.collection('questions').doc('y10-8e-q4').get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const data = pSnap.data();
    
    // Find the graphData from a-i
    const ai = data.subQuestions.find(sq => sq.id === 'y10-8e-q4a-i');
    let svgGraphData = null;
    if (ai && ai.graphData) {
      svgGraphData = ai.graphData;
    }

    if (svgGraphData) {
      const newSubQs = data.subQuestions.map(sq => {
        let updatedSq = { ...sq };
        if (sq.id === 'y10-8e-q4a-i' || sq.id === 'y10-8e-q4a-ii') {
          updatedSq.graphData = null;
        }
        return updatedSq;
      });
      
      // Update parent
      await pSnap.ref.update({
        graphData: svgGraphData,
        subQuestions: newSubQs,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated parent document y10-8e-q4 with new graphData');
      
      // Update subquestions docs
      for (const sq of newSubQs) {
        if (['y10-8e-q4a-i', 'y10-8e-q4a-ii'].includes(sq.id)) {
          const sSnap = await db.collection('questions').doc(sq.id).get();
          if (sSnap.exists) {
            await sSnap.ref.update({
              graphData: null,
              updatedAt: FieldValue.serverTimestamp()
            });
            console.log('Cleared graphData for subquestion doc', sq.id);
          }
        }
      }

      // Call touchChapterIndex to sync metadata
      console.log('Syncing chapter index for y10-8...');
      await touchChapterIndex(db, 'y10-8');
      console.log('Sync complete.');
    } else {
      console.log('Could not find graphData in a(i)');
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
