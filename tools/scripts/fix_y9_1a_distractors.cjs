const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'exam:year9ch1')
    .get();

  function parseNum(text) {
    // Extract number from LaTeX like \(14\), \(-14\), \(3.5\)
    const m = text.match(/\\?\(?(-?[\d\.]+)\)?\\?/);
    return m ? parseFloat(m[1]) : null;
  }

  function formatNum(n) {
    // Format back to LaTeX with up to 2 decimal places
    const s = Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
    return `\\(${s}\\)`;
  }

  function makeDistractors(correct, allOpts) {
    // Generate 3 varied distractors that are NOT:
    // - equal to correct
    // - negative of correct
    // - too obviously related (same absolute value)
    // Strategy: use offsets that vary based on the scale of the number

    const scale = Math.abs(correct);
    let offsets;
    if (scale < 5) {
      offsets = [1.5, 3, 5];
    } else if (scale < 20) {
      offsets = [scale * 0.25, scale * 0.5, scale * 0.15];
    } else if (scale < 100) {
      offsets = [scale * 0.1, scale * 0.2, scale * 0.35];
    } else if (scale < 1000) {
      offsets = [scale * 0.05, scale * 0.1, scale * 0.2];
    } else {
      offsets = [scale * 0.05, scale * 0.1, scale * 0.15];
    }

    const candidates = [
      correct + offsets[0],
      correct - offsets[1],
      correct + offsets[2],
      correct - offsets[0],
      correct + offsets[1],
      correct * 0.8,
      correct * 1.2,
      correct / 2,
      correct * 2,
    ];

    const seen = new Set();
    seen.add(correct);
    seen.add(-correct); // explicitly exclude negative
    seen.add(Math.abs(correct)); // exclude absolute value if different

    const valid = [];
    for (const c of candidates) {
      const rounded = parseFloat(c.toFixed(2));
      const key = rounded;
      // Skip if same absolute value as correct (e.g., -14 when correct is 14)
      if (Math.abs(rounded) === Math.abs(correct)) continue;
      if (seen.has(key)) continue;
      seen.add(key);
      valid.push(rounded);
      if (valid.length >= 3) break;
    }

    // If still not enough, just pad with offset multiples
    let extra = 1;
    while (valid.length < 3) {
      const candidate = parseFloat((correct + offsets[0] * extra * 2).toFixed(2));
      if (!seen.has(candidate) && Math.abs(candidate) !== Math.abs(correct)) {
        seen.add(candidate);
        valid.push(candidate);
      }
      extra++;
    }

    return valid.slice(0, 3);
  }

  let updateCount = 0;

  for (const doc of snap.docs) {
    const data = doc.data();
    const opts = data.options || [];
    if (opts.length < 2) continue;

    const answerIdx = parseInt(data.answer || '0');
    const correctText = opts[answerIdx]?.text || '';
    const correct = parseNum(correctText);
    if (correct === null) continue;

    // Check if any distractor has the same absolute value as correct
    const distractors = opts.filter((_, i) => i !== answerIdx);
    const hasObviousPattern = distractors.some(o => {
      const n = parseNum(o.text);
      return n !== null && Math.abs(n) === Math.abs(correct);
    });

    if (!hasObviousPattern) continue; // No problem, skip

    // Generate new varied distractors
    const newDistractors = makeDistractors(correct, opts);
    const newOpts = newDistractors.map(n => ({ text: formatNum(n), imageUrl: '' }));
    // Insert correct at original position
    newOpts.splice(answerIdx, 0, { text: correctText, imageUrl: '' });

    await doc.ref.update({
      options: newOpts,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Fixed ${doc.id}: correct=${correct}, new opts=${newOpts.map(o=>o.text).join(', ')}`);
    updateCount++;
  }

  console.log('\nTotal updated:', updateCount);
  process.exit(0);
}

run().catch(console.error);
