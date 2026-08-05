const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y9-1')
    .get();

  const targets = snap.docs.filter(d => d.id.startsWith('y9-1a-'));
  const parentSet = new Set();
  let updateCount = 0;

  for (const doc of targets) {
    const data = doc.data();
    if (!data.question) continue;
    
    let needsFix = false;
    let steps = data.solutionSteps || [];
    
    // Check if step 1 has HTML
    if (steps.length > 0 && steps[0].workingOut && steps[0].workingOut.includes('<div')) {
      needsFix = true;
    }

    if (!needsFix) continue;

    // Clean up the steps genericly
    const newSteps = steps.map((s, idx) => {
      let exp = s.explanation || '';
      let wo = s.workingOut || '';
      let gd = s.graphData || null;

      if (idx === 0) {
        exp = 'Substitute the given values into the formula or expression.';
        wo = ''; // Remove the HTML garbage
      } else {
        // Fix formatting in subsequent steps
        wo = wo.replace(/\*/g, '\\times');
        // If it doesn't have LaTeX wrappers but has math, wrap it
        if (wo && !wo.includes('\\(') && (wo.includes('=') || wo.includes('\\times'))) {
          wo = `\\( ${wo} \\)`;
        }
      }
      return { explanation: exp, workingOut: wo, graphData: gd };
    });

    await doc.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
    console.log(`Cleaned up generic: ${doc.id}`);
    updateCount++;
    const parentId = doc.id.replace(/[a-z]$/, '');
    parentSet.add(parentId);
  }

  // Sync parents
  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, solutionSteps: cSnap.data().solutionSteps } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\nTotal generic fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
