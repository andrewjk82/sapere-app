const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ8Fallback(text) {
    const match = text.match(/\\frac\{(.*?)\}\{(.*?)\}/);
    if (!match) return null;
    
    // Very simple fallback that assumes the format is always "\frac{20a^{7}b^{7}}{2a^{5}b^{5}}"
    const numPart = match[1]; // 20a^{7}b^{7}
    const denPart = match[2]; // 2a^{5}b^{5}
    
    const numMatch = numPart.match(/(\d+)a\^?\{?(\d+)\}?b\^?\{?(\d+)\}?/i) || numPart.match(/(\d+)x\^?\{?(\d+)\}?y\^?\{?(\d+)\}?/i);
    const denMatch = denPart.match(/(\d+)a\^?\{?(\d+)\}?b\^?\{?(\d+)\}?/i) || denPart.match(/(\d+)x\^?\{?(\d+)\}?y\^?\{?(\d+)\}?/i);
    
    if (!numMatch || !denMatch) return null;
    
    const v1 = numPart.includes('a') ? 'a' : 'x';
    const v2 = numPart.includes('b') ? 'b' : 'y';
    
    const nc = parseInt(numMatch[1]), np1 = parseInt(numMatch[2]), np2 = parseInt(numMatch[3]);
    const dc = parseInt(denMatch[1]), dp1 = parseInt(denMatch[2]), dp2 = parseInt(denMatch[3]);
    
    const coeff = nc / dc;
    const p1 = np1 - dp1;
    const p2 = np2 - dp2;
    
    const correct = `\\(${coeff === 1 ? '' : coeff}${v1}^{${p1}}${v2}^{${p2}}\\)`;

    let opts = [
      { text: correct, imageUrl: '' },
      { text: `\\(${coeff === 1 ? '' : coeff}${v1}^{${np1 + dp1}}${v2}^{${np2 + dp2}}\\)`, imageUrl: '' },
      { text: `\\(${nc - dc === 1 ? '' : nc - dc}${v1}^{${p1}}${v2}^{${p2}}\\)`, imageUrl: '' },
      { text: `\\(${coeff === 1 ? '' : coeff}${v1}^{${p1}}${v2}^{${np2 + dp2}}\\)`, imageUrl: '' }
    ];
    // shuffle opts
    opts.sort(() => Math.random() - 0.5);
    const answer = String(opts.findIndex(o => o.text === correct));

    return {
      opts,
      answer,
      steps: [
        { explanation: 'For a fraction with variables, divide the numbers first, then apply the division index law (subtract the powers) for each matching variable.', workingOut: '', graphData: null },
        { explanation: `Divide the numbers: ${nc} ÷ ${dc}. Subtract the powers for ${v1} and ${v2}.`, workingOut: `\\( ${nc} / ${dc} = ${coeff} \\)\n\\( ${np1} - ${dp1} = ${p1} \\)\n\\( ${np2} - ${dp2} = ${p2} \\)`, graphData: null },
        { explanation: 'Write out the final term.', workingOut: correct, graphData: null }
      ]
    };
  }


  const idsToProcess = [];
  for (const char of 'abcdefgh') idsToProcess.push({ id: 'y9-8a-8' + char });

  let updateCount = 0;
  for (const item of idsToProcess) {
    const docRef = db.collection('questions').doc(item.id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const result = getQ8Fallback(data.question);
      if (result) {
        await docRef.update({
          type: 'multiple_choice',
          options: result.opts,
          answer: result.answer,
          solutionSteps: result.steps,
          requiresManualGrading: FieldValue.delete(),
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-8');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
      const cSnap = await db.collection('questions').doc(sq.id).get();
      if (cSnap.exists) {
        return {
          ...sq,
          type: cSnap.data().type,
          options: cSnap.data().options || sq.options,
          answer: cSnap.data().answer || sq.answer,
          solutionSteps: cSnap.data().solutionSteps || sq.solutionSteps
        };
      }
      return sq;
    }));
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log('Updated', updateCount, 'subquestions for q8');
  process.exit(0);
}

run().catch(console.error);
