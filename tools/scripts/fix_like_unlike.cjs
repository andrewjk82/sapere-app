const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y7-23')
    .get();

  let updateCount = 0;
  const parentSet = new Set();

  for (const doc of snap.docs) {
    const data = doc.data();
    if (!data.question || !data.question.includes('Which of the following describes the pair of terms')) continue;

    // The options should be 'like' and 'unlike'
    const newOptions = [
      { text: 'like', imageUrl: '' },
      { text: 'unlike', imageUrl: '' }
    ];

    // Determine correct answer from solution steps
    let isLike = true; // default
    if (data.solutionSteps && data.solutionSteps.length >= 2) {
      const step2WorkingOut = data.solutionSteps[1].workingOut || '';
      if (step2WorkingOut.includes('unlike')) {
        isLike = false;
      }
    }

    const newAnswerIdx = isLike ? "0" : "1";

    let newSteps = [...(data.solutionSteps || [])];
    if (newSteps.length >= 3) {
      newSteps[2] = {
        ...newSteps[2],
        workingOut: isLike ? '\\(\\text{like}\\)' : '\\(\\text{unlike}\\)'
      };
    }

    await doc.ref.update({
      options: newOptions,
      answer: newAnswerIdx,
      solutionSteps: newSteps,
      updatedAt: FieldValue.serverTimestamp()
    });
    
    console.log(`Fixed like/unlike options for ${doc.id}`);
    updateCount++;
    parentSet.add(doc.id.replace(/[a-z]$/, ''));
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer, solutionSteps: cSnap.data().solutionSteps } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nTotal pair of terms questions fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
