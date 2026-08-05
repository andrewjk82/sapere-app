const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions').get();

  let updateCount = 0;
  const parentSet = new Set();

  function isBadText(text) {
    if (!text) return false;
    if (text.includes('Option ')) return true;
    if (text.match(/^\d+like$/i) || text.match(/^\d+unlike$/i)) return true;
    if (text.match(/^\\\(\d+like\\\)$/i) || text.match(/^\\\(\d+unlike\\\)$/i)) return true;
    return false;
  }

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.type !== 'multiple_choice' || !data.options) continue;

    let hasBadOption = false;
    for (let i = 0; i < data.options.length; i++) {
      if (isBadText(data.options[i].text)) {
        hasBadOption = true;
        break;
      }
    }

    if (!hasBadOption) continue;

    let correctIdx = -1;
    if (data.answer !== undefined) {
      if (typeof data.answer === 'string' && data.answer.match(/^\d$/)) {
        correctIdx = parseInt(data.answer, 10);
      } else if (typeof data.answer === 'number') {
        correctIdx = data.answer;
      }
    }

    let correctText = null;
    if (correctIdx >= 0 && correctIdx < data.options.length) {
      correctText = data.options[correctIdx].text;
    }

    // Filter out bad options
    let newOptions = [];
    for (let i = 0; i < data.options.length; i++) {
      if (!isBadText(data.options[i].text)) {
        newOptions.push(data.options[i]);
      }
    }

    // Find the new index of the correct answer
    let newCorrectIdx = 0;
    if (correctText !== null) {
      const foundIdx = newOptions.findIndex(o => o.text === correctText);
      if (foundIdx !== -1) {
        newCorrectIdx = foundIdx;
      }
    }

    await doc.ref.update({
      options: newOptions,
      answer: String(newCorrectIdx),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Cleaned bad options from ${doc.id}`);
    updateCount++;
    parentSet.add(doc.id.replace(/[a-z]$/, ''));
  }

  // Update parents
  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nTotal questions cleaned:', updateCount);
  process.exit(0);
}

run().catch(console.error);
