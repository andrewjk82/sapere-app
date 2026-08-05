const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y7-6')
    .get();

  let updateCount = 0;
  const parentSet = new Set();

  for (const doc of snap.docs) {
    let data = doc.data();
    let needsUpdate = false;
    let updates = {};

    // 1. Fix broken latex
    if (data.options) {
      const fixedOptions = data.options.map(o => {
        let text = o.text || '';
        if (text.includes('{(36k})') || text.includes('(36k}')) {
          text = text.replace(/\{\(36k\}\)/g, '{36k}').replace(/\(36k\}\)/g, '{36k}').replace(/\(36k\}/g, '{36k}');
          needsUpdate = true;
        }
        return { ...o, text };
      });
      if (needsUpdate) updates.options = fixedOptions;
    }

    if (data.correctAnswer && data.correctAnswer.text) {
      let text = data.correctAnswer.text;
      if (text.includes('{(36k})') || text.includes('(36k}')) {
        updates.correctAnswer = {
          ...data.correctAnswer,
          text: text.replace(/\{\(36k\}\)/g, '{36k}').replace(/\(36k\}\)/g, '{36k}').replace(/\(36k\}/g, '{36k}')
        };
        needsUpdate = true;
      }
    }

    // 2. Fix HTML in solutionSteps
    if (data.solutionSteps) {
      const fixedSteps = data.solutionSteps.map((s, idx) => {
        if (idx === 0 && s.workingOut && s.workingOut.includes('<div')) {
          needsUpdate = true;
          return { ...s, workingOut: '' }; // Remove HTML
        }
        return s;
      });
      if (needsUpdate && !updates.solutionSteps) {
        updates.solutionSteps = fixedSteps;
      }
    }

    if (needsUpdate) {
      updates.updatedAt = FieldValue.serverTimestamp();
      await doc.ref.update(updates);
      console.log(`Fixed ${doc.id}`);
      updateCount++;
      parentSet.add(doc.id.replace(/[a-z]$/, ''));
    }
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        if (cSnap.exists) {
          const cData = cSnap.data();
          return { 
            ...sq, 
            options: cData.options, 
            solutionSteps: cData.solutionSteps,
            correctAnswer: cData.correctAnswer || sq.correctAnswer
          };
        }
        return sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nTotal updated:', updateCount);
  process.exit(0);
}

run().catch(console.error);
