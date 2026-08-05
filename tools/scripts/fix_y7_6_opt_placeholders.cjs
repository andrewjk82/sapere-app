const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function generateDistractors(correctText) {
    let t = correctText.replace(/^\\?\(/, '').replace(/\\?\)$/, '').trim();
    const distractors = new Set();
    
    // Pattern 1: Fraction \frac{num}{den}
    const fracMatch = t.match(/\\frac\{([a-zA-Z0-9]+)\}\{([a-zA-Z0-9]+)\}/);
    if (fracMatch) {
      const num = fracMatch[1];
      const den = fracMatch[2];
      
      const numIsNum = /^\d+$/.test(num);
      const denIsNum = /^\d+$/.test(den);
      
      if (numIsNum) {
        distractors.add(`\\(\\frac{${parseInt(num)+1}}{${den}}\\)`);
        if (parseInt(num) > 1) distractors.add(`\\(\\frac{${parseInt(num)-1}}{${den}}\\)`);
        distractors.add(`\\(\\frac{${parseInt(num)+2}}{${den}}\\)`);
      } else {
        distractors.add(`\\(\\frac{2${num}}{${den}}\\)`);
        distractors.add(`\\(\\frac{${num}^2}{${den}}\\)`);
      }
      
      if (denIsNum) {
        distractors.add(`\\(\\frac{${num}}{${parseInt(den)+1}}\\)`);
        if (parseInt(den) > 1) distractors.add(`\\(\\frac{${num}}{${parseInt(den)-1}}\\)`);
      } else {
        distractors.add(`\\(\\frac{${num}}{2${den}}\\)`);
      }
    }
    
    // Pattern 2: Number + Variable (e.g. 15z, 4y)
    const varMatch = t.match(/^(\d+)([a-zA-Z])$/);
    if (varMatch) {
      const coef = parseInt(varMatch[1]);
      const v = varMatch[2];
      distractors.add(`\\(${coef+1}${v}\\)`);
      if (coef > 1) distractors.add(`\\(${coef-1}${v}\\)`);
      distractors.add(`\\(${coef+2}${v}\\)`);
      distractors.add(`\\(${coef}${v}^2\\)`);
    }
    
    // Pattern 3: Just a variable (e.g. y)
    if (/^[a-zA-Z]$/.test(t)) {
      distractors.add(`\\(2${t}\\)`);
      distractors.add(`\\(\\frac{${t}}{2}\\)`);
      distractors.add(`\\(${t}^2\\)`);
      distractors.add(`\\(3${t}\\)`);
    }

    // Pattern 4: Number
    if (/^\d+$/.test(t)) {
      const num = parseInt(t);
      distractors.add(`\\(${num+1}\\)`);
      if (num > 1) distractors.add(`\\(${num-1}\\)`);
      distractors.add(`\\(${num+2}\\)`);
      distractors.add(`\\(${num+5}\\)`);
    }

    // Fallbacks if nothing matched
    if (distractors.size < 3) {
      distractors.add(`\\(${t} + 1\\)`);
      distractors.add(`\\(${t} - 1\\)`);
      distractors.add(`\\(2(${t})\\)`);
      distractors.add(`\\(\\frac{${t}}{2}\\)`);
    }

    // Convert Set to array, filter out correct text, take exactly 3
    const dArray = Array.from(distractors).filter(d => d !== correctText).slice(0, 3);
    
    // If still less than 3, just pad
    while (dArray.length < 3) {
      dArray.push(`\\(Option ${dArray.length + 1}\\)`); 
    }
    
    return dArray;
  }

  const snap = await db.collection('questions').where('chapterId', '==', 'y7-6').get();
  
  let updateCount = 0;
  const parentSet = new Set();

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.options && data.options.some(o => o.text.includes('opt'))) {
      
      let correctIdx = 0;
      if (data.answer !== undefined) {
        if (typeof data.answer === 'string' && data.answer.match(/^\d$/)) {
          correctIdx = parseInt(data.answer);
        } else if (typeof data.answer === 'number') {
          correctIdx = data.answer;
        }
      }

      const correctOpt = data.options[correctIdx];
      if (!correctOpt) {
        console.log(`Skipping ${doc.id} - valid correct answer not found`);
        continue;
      }
      
      const correctText = correctOpt.text;
      const newDistractors = generateDistractors(correctText);
      
      let dIdx = 0;
      const newOptions = data.options.map((opt, idx) => {
        if (idx === correctIdx) return opt;
        if (opt.text.includes('opt')) {
          const res = { text: newDistractors[dIdx], imageUrl: '' };
          dIdx++;
          return res;
        }
        return opt;
      });

      await doc.ref.update({ options: newOptions, updatedAt: FieldValue.serverTimestamp() });
      console.log(`Fixed ${doc.id} - ${correctText}`);
      updateCount++;
      parentSet.add(doc.id.replace(/[a-z]$/, ''));
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
