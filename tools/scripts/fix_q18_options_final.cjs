const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // For each q18 subquestion, compute correct options from the question itself
  function computeOptions(q) {
    const m = q.match(/\\\(\((\d+)([a-z])\^?\{?(\d+)\}?\)\^(\d+)\\\)/);
    if (!m) return null;
    const N = parseInt(m[1]), v = m[2], p = parseInt(m[3]), k = parseInt(m[4]);
    const coeff = Math.pow(N, k);   // correct coefficient
    const exp = p * k;              // correct exponent

    // Correct answer
    const correct = `\\(${coeff}${v}^{${exp}}\\)`;
    // Wrong: forgot to raise coefficient (N stays)
    const wrong1 = `\\(${N}${v}^{${exp}}\\)`;
    // Wrong: added exponents instead of multiplying
    const wrong2 = `\\(${coeff}${v}^{${p + k}}\\)`;
    // Wrong: both errors
    const wrong3 = `\\(${N}${v}^{${p + k}}\\)`;

    const options = [correct, wrong1, wrong2, wrong3];
    // Deduplicate just in case
    const seen = new Set();
    const unique = options.filter(o => {
      if (seen.has(o)) return false;
      seen.add(o);
      return true;
    });
    // If deduplication removed something, add another variant
    while (unique.length < 4) {
      unique.push(`\\(${coeff + 1}${v}^{${exp}}\\)`);
    }
    
    const answerIdx = 0; // correct is always first, then shuffle
    // Shuffle: put correct at index 3
    const shuffled = [unique[1], unique[2], unique[3], unique[0]];

    const steps = [
      { explanation: `Apply the Power of a Power Law: the index outside the bracket applies to EVERY factor inside, including the number.`, workingOut: `\\( (${N}${v}^{${p}})^{${k}} = ${N}^{${k}} \\times (${v}^{${p}})^{${k}} \\)`, graphData: null },
      { explanation: `Calculate the coefficient: \\( ${N}^{${k}} = ${coeff} \\).`, workingOut: `\\( ${N}^{${k}} = ${coeff} \\)`, graphData: null },
      { explanation: `Apply Power of a Power to the variable: multiply the indices. \\( (${v}^{${p}})^{${k}} = ${v}^{${p} \\times ${k}} = ${v}^{${exp}} \\).`, workingOut: `\\( ${p} \\times ${k} = ${exp} \\)`, graphData: null },
      { explanation: 'Combine the coefficient and variable to get the final simplified answer.', workingOut: correct, graphData: null }
    ];

    return { options: shuffled.map(t => ({ text: t, imageUrl: '' })), answer: '3', solutionSteps: steps };
  }

  const ids = Array.from({length: 8}, (_, j) => 'y9-8a-18' + String.fromCharCode(97 + j));
  let updateCount = 0;

  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (!snap.exists) continue;
    
    const result = computeOptions(snap.data().question);
    if (!result) continue;
    
    // Check for duplicates in existing options
    const existingOpts = (snap.data().options || []).map(o => o.text);
    const hasDuplicate = new Set(existingOpts).size < existingOpts.length;
    const hasPlaceholder = existingOpts.some(o => o.includes('100'));
    
    if (hasDuplicate || hasPlaceholder) {
      await docRef.update({
        options: result.options,
        answer: result.answer,
        solutionSteps: result.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Fixed:', id, '| options:', result.options.map(o => o.text));
      updateCount++;
    }
  }

  // Update parent subQuestions
  const pRef = db.collection('questions').doc('y9-8a-18');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
      const cSnap = await db.collection('questions').doc(sq.id).get();
      if (cSnap.exists) {
        return { ...sq, options: cSnap.data().options, answer: cSnap.data().answer, solutionSteps: cSnap.data().solutionSteps };
      }
      return sq;
    }));
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log('Fixed', updateCount, 'documents in q18');
  process.exit(0);
}

run().catch(console.error);
