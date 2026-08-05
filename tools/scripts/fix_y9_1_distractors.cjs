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

  console.log('Total docs:', snap.size);

  function parseNum(text) {
    const m = String(text).match(/(-?[\d\.]+)/);
    return m ? parseFloat(m[1]) : null;
  }

  function formatNum(n) {
    const s = Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
    return `\\(${s}\\)`;
  }

  function hasPlusMinusPattern(optObjects) {
    // optObjects = [{text, imageUrl}, ...]
    const nums = optObjects.map(o => parseNum((o && o.text) ? o.text : ''));
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] !== null && nums[j] !== null && nums[i] !== 0
          && Math.abs(nums[i]) === Math.abs(nums[j]) && nums[i] !== nums[j]) {
          return true;
        }
      }
    }
    return false;
  }

  function makeVariedDistractors(correct) {
    const scale = Math.abs(correct);
    const candidates = [];

    if (scale < 5) {
      candidates.push(correct + 2, correct - 3, correct + 5, correct - 7, correct + 4, correct - 5);
    } else if (scale < 20) {
      candidates.push(
        correct + Math.round(scale * 0.2 + 1),
        correct - Math.round(scale * 0.3 + 1),
        correct + Math.round(scale * 0.45 + 2),
        correct - Math.round(scale * 0.55 + 2),
        Math.round(correct * 0.7),
        Math.round(correct * 1.3),
      );
    } else if (scale < 100) {
      candidates.push(
        correct + Math.round(scale * 0.15),
        correct - Math.round(scale * 0.2),
        correct + Math.round(scale * 0.35),
        correct - Math.round(scale * 0.4),
        Math.round(correct * 0.75),
        Math.round(correct * 1.25),
      );
    } else {
      candidates.push(
        Math.round(correct * 1.05),
        Math.round(correct * 0.9),
        Math.round(correct * 1.15),
        Math.round(correct * 0.85),
        Math.round(correct * 1.2),
        Math.round(correct * 0.8),
      );
    }

    const seen = new Set();
    seen.add(correct);
    seen.add(-correct);
    seen.add(Math.abs(correct));

    const valid = [];
    for (const c of candidates) {
      const rounded = Math.round(c * 100) / 100;
      if (Math.abs(rounded) === Math.abs(correct)) continue;
      if (seen.has(rounded)) continue;
      if (rounded === 0) continue;
      seen.add(rounded);
      valid.push(rounded);
      if (valid.length >= 3) break;
    }

    let multiplier = 2;
    while (valid.length < 3) {
      const fallback = Math.round((correct + (correct > 0 ? 1 : -1) * scale * 0.1 * multiplier) * 10) / 10;
      if (!seen.has(fallback) && Math.abs(fallback) !== Math.abs(correct) && fallback !== 0) {
        seen.add(fallback);
        valid.push(fallback);
      }
      multiplier++;
      if (multiplier > 30) break;
    }

    return valid.slice(0, 3);
  }

  let updateCount = 0;

  for (const doc of snap.docs) {
    const data = doc.data();
    const optObjects = data.options || [];

    if (!hasPlusMinusPattern(optObjects)) continue;

    const answerIdx = parseInt(data.answer || '0');
    const correctObj = optObjects[answerIdx];
    const correctText = correctObj ? correctObj.text : '';
    const correct = parseNum(correctText);
    if (correct === null) continue;

    const newDistractors = makeVariedDistractors(correct);
    const newOpts = newDistractors.map(n => ({ text: formatNum(n), imageUrl: '' }));
    newOpts.splice(answerIdx, 0, { text: correctText, imageUrl: '' });

    await doc.ref.update({
      options: newOpts,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Fixed ${doc.id}: correct=${correct} | new opts: ${newOpts.map(o => o.text).join(', ')}`);
    updateCount++;
  }

  console.log('\nTotal fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
