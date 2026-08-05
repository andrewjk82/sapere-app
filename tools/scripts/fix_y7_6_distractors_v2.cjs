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

  function stripMath(s) {
    return String(s).replace(/^\\?\(/, '').replace(/\\?\)$/, '').trim();
  }

  function isNegativeOf(a, b) {
    if (!a || !b) return false;
    if (a === '-' + b) return true;
    if (b === '-' + a) return true;
    // For fractions: \frac{x}{y} vs -\frac{x}{y}
    if (a.startsWith('-\\frac') && a.substring(1) === b) return true;
    if (b.startsWith('-\\frac') && b.substring(1) === a) return true;
    return false;
  }

  function generateAlternative(correctText, existingTexts) {
    // try to mutate the text slightly to find a unique, non-negative distractor
    let numStr = correctText.match(/\d+/);
    let baseNum = numStr ? parseInt(numStr[0]) : 2;
    
    let attempt = 1;
    while (attempt < 20) {
      let candidate = '';
      if (correctText.includes('\\frac')) {
        // change numerator or denominator
        candidate = correctText.replace(/\d+/, String(baseNum + attempt));
      } else if (correctText.match(/^\d+[a-zA-Z]$/)) {
        // e.g. 4y -> 5y, 6y
        candidate = correctText.replace(/^\d+/, String(baseNum + attempt));
      } else if (correctText.match(/^[a-zA-Z]$/)) {
        candidate = (attempt + 1) + correctText;
      } else if (correctText.match(/^-?\d+$/)) {
        candidate = String(baseNum + attempt + 1);
      } else {
        candidate = correctText + attempt; // last resort
      }

      if (candidate !== correctText && !existingTexts.has(candidate) && !isNegativeOf(candidate, correctText)) {
        return candidate;
      }
      attempt++;
    }
    return `Option ${Math.random().toString().substring(2, 6)}`;
  }

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.type !== 'multiple_choice' || !data.options || data.options.length === 0) continue;

    let correctIdx = -1;
    if (data.answer !== undefined) {
      if (typeof data.answer === 'string' && data.answer.match(/^\d$/)) {
        correctIdx = parseInt(data.answer, 10);
      } else if (typeof data.answer === 'number') {
        correctIdx = data.answer;
      }
    }

    if (correctIdx < 0 || correctIdx >= data.options.length) {
      if (data.correctAnswer) {
        correctIdx = data.options.findIndex(o => o.text === data.correctAnswer.text);
      }
    }

    if (correctIdx < 0) continue;

    const correctRaw = data.options[correctIdx].text;
    const correctStripped = stripMath(correctRaw);
    
    let needsUpdate = false;
    let newOptions = [...data.options];
    let seenTexts = new Set();
    seenTexts.add(correctStripped);

    for (let i = 0; i < newOptions.length; i++) {
      if (i === correctIdx) continue;
      
      let optText = stripMath(newOptions[i].text);
      let isBad = false;

      // 1. Is it a negative of the correct answer?
      if (isNegativeOf(optText, correctStripped) && correctStripped !== '0') {
        isBad = true;
      }
      
      // 2. Is it a duplicate of an already seen text?
      if (seenTexts.has(optText)) {
        isBad = true;
      }

      if (isBad) {
        needsUpdate = true;
        const newDistractor = generateAlternative(correctStripped, seenTexts);
        seenTexts.add(newDistractor);
        newOptions[i] = {
          ...newOptions[i],
          text: correctRaw.includes('\\(') ? `\\(${newDistractor}\\)` : newDistractor
        };
      } else {
        seenTexts.add(optText);
      }
    }

    if (needsUpdate) {
      await doc.ref.update({ options: newOptions, updatedAt: FieldValue.serverTimestamp() });
      console.log(`Updated ${doc.id}`);
      updateCount++;
      const parentId = doc.id.replace(/[a-z]$/, '');
      parentSet.add(parentId);
    }
  }

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
