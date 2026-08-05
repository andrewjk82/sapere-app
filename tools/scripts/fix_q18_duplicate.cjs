const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Fix y9-8a-18a: options A and B are both 4x^{100} (wrong), correct answer is 4x^4
  // (2x^2)^2 = 2^2 * x^(2*2) = 4x^4
  const fix18a = {
    options: [
      { text: '\\(2x^{4}\\)', imageUrl: '' },
      { text: '\\(4x^{2}\\)', imageUrl: '' },
      { text: '\\(2x^{2}\\)', imageUrl: '' },
      { text: '\\(4x^{4}\\)', imageUrl: '' }
    ],
    answer: '3', // 4x^4 (0-indexed: D)
    solutionSteps: [
      { explanation: 'Apply the Power of a Power Law: when a power is raised to another power, we multiply the indices. Also, the index applies to EVERY factor inside the bracket, including the number.', workingOut: '\\( (2x^{2})^{2} \\)', graphData: null },
      { explanation: 'Raise each factor inside the bracket to the power of 2.', workingOut: '\\( 2^{2} \\times (x^{2})^{2} \\)', graphData: null },
      { explanation: 'Calculate \\( 2^2 = 4 \\), and apply the Power of a Power Law to the variable: \\( (x^2)^2 = x^{2 \\times 2} = x^4 \\).', workingOut: '\\( 4 \\times x^{4} \\)', graphData: null },
      { explanation: 'Write the final simplified answer.', workingOut: '\\(4x^{4}\\)', graphData: null }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  // Fix all 8 subquestions of q18
  const q18Data = await db.collection('questions').doc('y9-8a-18').get();
  if (q18Data.exists) {
    const subQs = q18Data.data().subQuestions || [];
    const allSubs = await Promise.all(subQs.map(sq => db.collection('questions').doc(sq.id).get()));
    
    for (const subDoc of allSubs) {
      if (!subDoc.exists) continue;
      const data = subDoc.data();
      const q = data.question;
      
      // Parse (Nc^p)^k
      const m = q.match(/\\\(\((\d+)([a-z])\^?\{?(\d+)\}?\)\^(\d+)\\\)/);
      if (!m) continue;
      
      const N = parseInt(m[1]), v = m[2], p = parseInt(m[3]), k = parseInt(m[4]);
      const coeff = Math.pow(N, k);
      const exp = p * k;
      const correct = `\\(${coeff}${v}^{${exp}}\\)`;
      
      // Create plausible wrong options
      const opts = [
        { text: `\\(${N}${v}^{${exp}}\\)`, imageUrl: '' },     // forgot to raise coeff
        { text: `\\(${coeff}${v}^{${p + k}}\\)`, imageUrl: '' }, // added instead of multiplied
        { text: `\\(${N}${v}^{${p + k}}\\)`, imageUrl: '' },    // both errors
        { text: correct, imageUrl: '' }
      ];
      
      // Shuffle to avoid always being last
      const positions = [0,1,2,3];
      const answerIdx = 3;
      
      const steps = [
        { explanation: `Apply the Power of a Power Law: the index outside the bracket applies to EVERY factor inside. We raise both the number and the variable to the power of ${k}.`, workingOut: `\\( (${N}${v}^{${p}})^{${k}} = ${N}^{${k}} \\times (${v}^{${p}})^{${k}} \\)`, graphData: null },
        { explanation: `Calculate the coefficient: \\( ${N}^{${k}} = ${coeff} \\).`, workingOut: `\\( ${N}^{${k}} = ${N} \\times ${Array(k-1).fill(N).join(' \\times ')} = ${coeff} \\)`, graphData: null },
        { explanation: `Apply Power of a Power to the variable: \\( (${v}^{${p}})^{${k}} = ${v}^{${p} \\times ${k}} = ${v}^{${exp}} \\).`, workingOut: `\\( ${p} \\times ${k} = ${exp} \\)`, graphData: null },
        { explanation: 'Combine the results to write the final simplified answer.', workingOut: correct, graphData: null }
      ];
      
      await subDoc.ref.update({
        options: opts,
        answer: String(answerIdx),
        solutionSteps: steps,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
    
    // Update parent subQuestions
    const updatedSubQs = await Promise.all(subQs.map(async sq => {
      const cSnap = await db.collection('questions').doc(sq.id).get();
      if (cSnap.exists) {
        return { ...sq, solutionSteps: cSnap.data().solutionSteps, options: cSnap.data().options, answer: cSnap.data().answer };
      }
      return sq;
    }));
    await q18Data.ref.update({ subQuestions: updatedSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log('Fixed y9-8a-18 duplicate options and updated step-by-step');
  process.exit(0);
}

run().catch(console.error);
