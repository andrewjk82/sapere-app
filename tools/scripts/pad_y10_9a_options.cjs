const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('topicId', '==', 'y10-9a')
    .get();

  let updateCount = 0;
  const parentSet = new Set();

  function generateSmartDistractors(baseText, existingTexts, needed) {
    let generated = [];
    
    // 1. Flip fraction
    if (baseText.includes('\\frac{')) {
      let flipped = baseText.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$2}{$1}');
      if (flipped !== baseText && !existingTexts.has(flipped) && !generated.includes(flipped)) {
        generated.push(flipped);
      }
    }
    
    // 2. Modify exponents: x^12 -> x^11
    let expMinus1 = baseText.replace(/\^\{?(\d+)\}?/g, (match, p1) => {
      let num = parseInt(p1);
      return num > 1 ? `^{${num - 1}}` : `^{${num + 2}}`;
    });
    if (expMinus1 !== baseText && !existingTexts.has(expMinus1) && !generated.includes(expMinus1)) {
      generated.push(expMinus1);
    }
    
    // 3. Modify exponents: x^12 -> x^13
    let expPlus1 = baseText.replace(/\^\{?(\d+)\}?/g, (match, p1) => {
      let num = parseInt(p1);
      return `^{${num + 1}}`;
    });
    if (expPlus1 !== baseText && !existingTexts.has(expPlus1) && !generated.includes(expPlus1)) {
      generated.push(expPlus1);
    }

    // 4. Modify coefficients (first number that doesn't follow ^ or _)
    // Try to just add 1 to the first number found
    let coefModified = baseText.replace(/(\d+)/, (match, p1) => String(parseInt(p1) + 1));
    if (coefModified !== baseText && !existingTexts.has(coefModified) && !generated.includes(coefModified)) {
        generated.push(coefModified);
    }

    // 5. Change signs of exponents
    let negExp = baseText.replace(/\^\{?(\d+)\}?/g, '^{-$1}');
    if (negExp !== baseText && !existingTexts.has(negExp) && !generated.includes(negExp)) {
        generated.push(negExp);
    }

    // 6. Add "None of the above" if still short
    if (!existingTexts.has('\\text{None of the above}') && !generated.includes('\\text{None of the above}')) {
        generated.push('\\text{None of the above}');
    }
    
    // 7. Add fallback variations
    for(let i=2; i<10; i++) {
        let fallback = baseText.replace(/(\d+)/, (match, p1) => String(parseInt(p1) + i));
        if (fallback !== baseText && !existingTexts.has(fallback) && !generated.includes(fallback)) {
            generated.push(fallback);
        }
    }

    return generated.slice(0, needed);
  }

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.type !== 'multiple_choice' || !data.options) continue;

    if (data.options.length < 4) {
      let correctIdx = -1;
      if (data.answer !== undefined) {
        if (typeof data.answer === 'string' && data.answer.match(/^\d$/)) {
          correctIdx = parseInt(data.answer, 10);
        } else if (typeof data.answer === 'number') {
          correctIdx = data.answer;
        }
      }

      let correctText = '';
      if (correctIdx >= 0 && correctIdx < data.options.length) {
        correctText = data.options[correctIdx].text;
      } else {
        // If answer index is messed up, default to first option just in case
        correctText = data.options[0].text;
      }

      const existingTexts = new Set(data.options.map(o => o.text));
      const needed = 4 - data.options.length;
      
      const newDistractors = generateSmartDistractors(correctText, existingTexts, needed);
      
      let newOptions = [...data.options];
      for (const dist of newDistractors) {
        newOptions.push({ text: dist, imageUrl: '' });
      }

      await doc.ref.update({
        options: newOptions,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Padded ${doc.id} from ${data.options.length} to ${newOptions.length} options`);
      updateCount++;
      parentSet.add(doc.id.replace(/[a-z]$/, ''));
    }
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

  console.log('\\nTotal questions padded:', updateCount);
  process.exit(0);
}

run().catch(console.error);
