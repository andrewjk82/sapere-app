const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ8CancelSteps(text) {
    const match = text.match(/frac\{(.*?)\}\{(.*)\}\\\)/);
    if (!match) return null;
    
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

    const expandVar = (v, p) => {
      let arr = [];
      for(let i=0; i<p; i++) arr.push(v);
      return arr.join(' \\times ');
    };
    
    const numV1Exp = expandVar(v1, np1);
    const numV2Exp = expandVar(v2, np2);
    
    const denV1Exp = expandVar(v1, dp1);
    const denV2Exp = expandVar(v2, dp2);
    
    const numExpanded = `(${numV1Exp}) \\times (${numV2Exp})`;
    const denExpanded = `(${denV1Exp}) \\times (${denV2Exp})`;

    const remaining = `${v1}^{${p1}} ${v2}^{${p2}}`;

    return [
      { explanation: 'To understand why the indices subtract, we can expand both the numerator and the denominator.', workingOut: `\\( \\frac{${nc} ${v1}^{${np1}} ${v2}^{${np2}}}{${dc} ${v1}^{${dp1}} ${v2}^{${dp2}}} \\)`, graphData: null },
      { explanation: 'Expand the powers into repeated multiplication.', workingOut: `\\( \\frac{${nc} \\times ${numExpanded}}{${dc} \\times ${denExpanded}} \\)`, graphData: null },
      { explanation: `Cancel out the common variables from the top and bottom. There are ${dp1} '${v1}'s and ${dp2} '${v2}'s on the bottom that will cancel out with the ones on the top.`, workingOut: `This leaves us with exactly \\( ${np1} - ${dp1} = ${p1} \\) '${v1}'s and \\( ${np2} - ${dp2} = ${p2} \\) '${v2}'s remaining on the top.`, graphData: null },
      { explanation: `Divide the numbers (${nc} ÷ ${dc} = ${coeff}) and combine with the remaining variables.`, workingOut: correct, graphData: null }
    ];
  }

  const idsToProcess = [];
  for (const char of 'abcdefgh') idsToProcess.push('y9-8a-8' + char);

  let updateCount = 0;
  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ8CancelSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
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
          solutionSteps: cSnap.data().solutionSteps || sq.solutionSteps
        };
      }
      return sq;
    }));
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log('Updated', updateCount, 'subquestions for q8 with cancellation steps');
  process.exit(0);
}

run().catch(console.error);
