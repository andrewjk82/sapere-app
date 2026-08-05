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
    const data = doc.data();
    if (data.type !== 'multiple_choice' || !data.options || data.options.length === 0) continue;

    let correctIndex = -1;
    if (data.answer !== undefined) {
      if (typeof data.answer === 'string') {
        if (data.answer.match(/^\d+$/)) {
          correctIndex = parseInt(data.answer, 10);
        } else if (['0', '1', '2', '3'].includes(data.answer)) {
          correctIndex = parseInt(data.answer, 10);
        } else {
          const map = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
          correctIndex = map[data.answer.toLowerCase()] !== undefined ? map[data.answer.toLowerCase()] : -1;
        }
      } else if (typeof data.answer === 'number') {
        correctIndex = data.answer;
      }
    } else if (data.correctAnswer) {
      correctIndex = data.options.findIndex(o => o.text === data.correctAnswer.text);
    }

    if (correctIndex < 0 || correctIndex >= data.options.length) continue;

    const rawCorrectText = String(data.options[correctIndex].text);
    const correctText = rawCorrectText.replace(/^\\?\(/, '').replace(/\\?\)$/, '').trim();
    
    // Check if correct is a simple number
    if (!/^-?\d+(\.\d+)?$/.test(correctText)) continue;
    
    const correctNum = parseFloat(correctText);

    let needsUpdate = false;
    const newOptions = data.options.map((opt, idx) => {
      if (idx === correctIndex) return opt;
      const t = String(opt.text).replace(/^\\?\(/, '').replace(/\\?\)$/, '').trim();
      
      // If the option is the negative of the correct answer
      if (t === String(-correctNum) && correctNum !== 0) {
        needsUpdate = true;
        // Generate a new distractor that is plausible but not the exact negative
        let newVal;
        if (correctNum > 0) {
          // If correct is 12, options were 13, 11, -12. 
          // Replace -12 with 14 or 10
          newVal = correctNum + 2; 
          // ensure we don't duplicate existing
          const existing = data.options.map(o => o.text.replace(/^\\?\(/, '').replace(/\\?\)$/, '').trim());
          while (existing.includes(String(newVal))) {
            newVal += 1;
          }
        } else {
          newVal = correctNum - 2;
          const existing = data.options.map(o => o.text.replace(/^\\?\(/, '').replace(/\\?\)$/, '').trim());
          while (existing.includes(String(newVal))) {
            newVal -= 1;
          }
        }
        
        return {
          ...opt,
          text: rawCorrectText.includes('\\(') ? `\\(${newVal}\\)` : String(newVal)
        };
      }
      return opt;
    });

    if (needsUpdate) {
      await doc.ref.update({ options: newOptions, updatedAt: FieldValue.serverTimestamp() });
      console.log(`Updated ${doc.id}`);
      updateCount++;
      const parentId = doc.id.replace(/[a-z]$/, '');
      parentSet.add(parentId);
    }
  }

  // Update parents
  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, options: cSnap.data().options } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nTotal updated:', updateCount);
  process.exit(0);
}

run().catch(console.error);
