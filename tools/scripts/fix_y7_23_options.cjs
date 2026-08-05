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

  function generateExtraDistractor(correctText, existingOptions) {
    let base = correctText.replace(/^\\?\(/, '').replace(/\\?\)$/, '').trim();
    let attempt = 1;
    while(attempt < 30) {
      let candidate = '';
      let numMatch = base.match(/(\d+)/);
      if (numMatch) {
        candidate = base.replace(/\d+/, String(parseInt(numMatch[1]) + attempt + 1));
      } else {
        candidate = (attempt + 1) + base;
      }
      
      const candidateFull = correctText.includes('\\(') ? `\\(${candidate}\\)` : candidate;
      if (!existingOptions.some(o => o.text === candidateFull)) {
        return candidateFull;
      }
      attempt++;
    }
    return `Option ${Math.random().toString().substring(2,6)}`;
  }

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.type !== 'multiple_choice' || !data.options) continue;
    
    let hasIssue = false;
    let correctIdx = -1;
    if (data.answer !== undefined) {
      if (typeof data.answer === 'string' && data.answer.match(/^\d$/)) {
        correctIdx = parseInt(data.answer, 10);
      } else if (typeof data.answer === 'number') {
        correctIdx = data.answer;
      }
    }
    
    // Check out of bounds
    let trueCorrectIdx = correctIdx;
    if (correctIdx >= data.options.length) {
      hasIssue = true;
      // If it's exactly one out of bounds, the correct answer is usually the last element
      if (correctIdx === data.options.length) {
        trueCorrectIdx = data.options.length - 1;
      } else {
        trueCorrectIdx = data.options.length - 1; // Fallback to last
      }
    }
    if (data.options.length < 4) {
      hasIssue = true;
    }

    if (!hasIssue) continue;

    if (trueCorrectIdx < 0) trueCorrectIdx = 0;
    
    const correctText = data.options[trueCorrectIdx] ? data.options[trueCorrectIdx].text : data.options[0].text;
    
    let newOptions = [...data.options];
    while (newOptions.length < 4) {
      const newD = generateExtraDistractor(correctText, newOptions);
      newOptions.push({ text: newD, imageUrl: '' });
    }

    await doc.ref.update({
      options: newOptions,
      answer: String(trueCorrectIdx),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Updated ${doc.id}`);
    updateCount++;
    parentSet.add(doc.id.replace(/[a-z]$/, ''));
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        if (cSnap.exists) {
          return { ...sq, options: cSnap.data().options, answer: cSnap.data().answer };
        }
        return sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nTotal fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
