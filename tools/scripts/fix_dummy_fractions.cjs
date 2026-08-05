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

  function isDummyFraction(text) {
    if (!text) return false;
    return text.includes('13}{6}') || text.includes('13/6') || text.includes('12}{5}') || text.includes('12/5');
  }

  function modifyExponents(text, modifier) {
    let res = text.replace(/\^\{(\d+)\}/g, (match, p1) => `^{${modifier(parseInt(p1))}}`);
    res = res.replace(/\^(\d+)/g, (match, p1) => `^{${modifier(parseInt(p1))}}`);
    return res;
  }

  function generateSmartDistractors(baseText, existingTexts, needed) {
    let generated = [];
    function add(cand) {
      if (cand !== baseText && !existingTexts.has(cand) && !generated.includes(cand)) {
        generated.push(cand);
      }
    }
    if (baseText.includes('\\frac{')) {
      let flipped = baseText.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$2}{$1}');
      add(flipped);
    }
    add(modifyExponents(baseText, n => n > 1 ? n - 1 : n + 2));
    add(modifyExponents(baseText, n => n + 1));
    add(modifyExponents(baseText, n => -n));

    let coefModified = baseText.replace(/(\d+)/, (match, p1) => String(parseInt(p1) + 1));
    add(coefModified);
    if (!existingTexts.has('\\(\\text{None of the above}\\)') && !generated.includes('\\(\\text{None of the above}\\)')) {
        generated.push('\\(\\text{None of the above}\\)');
    }
    for(let i=2; i<10; i++) {
        let fallback = baseText.replace(/(\d+)/, (match, p1) => String(parseInt(p1) + i));
        add(fallback);
    }
    return generated.slice(0, needed);
  }

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.type !== 'multiple_choice' || !data.options) continue;

    let hasBadOption = false;
    for (let i = 0; i < data.options.length; i++) {
      if (isDummyFraction(data.options[i].text)) {
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
    let correctText = '';
    if (correctIdx >= 0 && correctIdx < data.options.length) {
      correctText = data.options[correctIdx].text;
    } else {
      correctText = data.options[0].text;
      correctIdx = 0;
    }

    // Keep only good options
    let newOptions = [];
    let newCorrectIdx = 0;
    for (let i = 0; i < data.options.length; i++) {
      if (i === correctIdx || !isDummyFraction(data.options[i].text)) {
        if (i === correctIdx) newCorrectIdx = newOptions.length;
        newOptions.push(data.options[i]);
      }
    }

    if (newOptions.length < 4) {
      const existingTexts = new Set(newOptions.map(o => o.text));
      const needed = 4 - newOptions.length;
      const newDistractors = generateSmartDistractors(correctText, existingTexts, needed);
      
      for (const dist of newDistractors) {
        newOptions.push({ text: dist, imageUrl: '' });
      }
    }

    await doc.ref.update({
      options: newOptions,
      answer: String(newCorrectIdx),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Cleaned dummy fractions for ${doc.id}`);
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
