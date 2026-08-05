const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ11CancelSteps(text, currentData) {
    const match = text.match(/\\frac\{(.*?)\}\{(.*?)\}/);
    if (!match) return null;
    const numPart = match[1]; // e.g. 5x^{3}
    const denPart = match[2]; // e.g. 2x^{2}
    
    const extract = (s) => {
       const m = s.match(/(\d+)?([a-zA-Z])\^?\{?(\d+)?\}?/);
       return { c: parseInt(m[1]||1), v: m[2], p: parseInt(m[3]||1) };
    };
    const num = extract(numPart);
    const den = extract(denPart);
    
    let cText = '';
    if (num.c % den.c === 0) {
      cText = `${num.c / den.c}`;
    } else {
      cText = `\\frac{${num.c}}{${den.c}}`; 
    }
    
    const pAns = num.p - den.p;
    const vText = pAns === 1 ? num.v : (pAns === 0 ? '' : `${num.v}^{${pAns}}`);
    const simpleCorrect = `\\(${cText}${vText}\\)`.replace(' or ', '');

    const expandVar = (v, p) => {
      let arr = [];
      for(let i=0; i<p; i++) arr.push(v);
      return arr.join(' \\times ');
    };
    
    // Create cancellation string like \frac{x \times x \times x}{x \times x}
    const numExpanded = expandVar(num.v, num.p);
    const denExpanded = expandVar(den.v, den.p);

    const remaining = pAns === 1 ? num.v : (pAns === 0 ? '1' : `${num.v}^{${pAns}}`);

    return [
        { explanation: 'To understand why the indices subtract, we can expand the variables to see how they cancel each other out.', workingOut: `\\( \\frac{${num.c} ${num.v}^{${num.p}}}{${den.c} ${den.v}^{${den.p}}} \\)`, graphData: null },
        { explanation: 'Expand the powers into repeated multiplication.', workingOut: `\\( \\frac{${num.c} \\times ${numExpanded}}{${den.c} \\times ${denExpanded}} \\)`, graphData: null },
        { explanation: `Cancel out the common '${num.v}'s from the top and the bottom. Since there are ${den.p} on the bottom and ${num.p} on the top, ${den.p} of them will cancel out.`, workingOut: `This leaves us with \\( ${remaining} \\) on the top.`, graphData: null },
        { explanation: 'Combine the remaining variables with the number fraction to get the final answer.', workingOut: simpleCorrect, graphData: null }
      ];
  }

  const idsToProcess = [];
  for (let j = 0; j < 8; j++) idsToProcess.push('y9-8a-11' + String.fromCharCode(97 + j));

  let updateCount = 0;
  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ11CancelSteps(data.question, data);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-11');
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

  console.log('Updated', updateCount, 'subquestions for q11 with cancellation steps');
  process.exit(0);
}

run().catch(console.error);
