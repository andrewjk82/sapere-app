const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ7CancelSteps(text) {
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    let expr = match[1].replace(/\s/g, '');
    let t1, t2;
    let isDivSign = false;
    if (expr.includes('\\frac')) {
       const fracMatch = expr.match(/\\frac\{(.*?)\}\{(.*?)\}/);
       t1 = fracMatch[1]; t2 = fracMatch[2];
    } else {
       const divMatch = expr.split('\\div');
       t1 = divMatch[0]; t2 = divMatch[1];
       isDivSign = true;
    }

    const extractTerm = (str) => {
       const m = str.match(/([\d\.]+)?([a-zA-Z])\^?\{?(\d+)?\}?/);
       if (!m) return null;
       return { c: parseFloat(m[1] || 1), v: m[2], p: parseInt(m[3] || 1) };
    };

    const num = extractTerm(t1);
    const den = extractTerm(t2);
    if (!num || !den) return null;

    const coeff = num.c / den.c;
    const pAns = num.p - den.p;
    
    const formatPower = (v, p) => p === 1 ? v : (p === 0 ? '1' : `${v}^{${p}}`);
    const simpleCorrect = `\\(${coeff === 1 ? '' : coeff}${formatPower(num.v, pAns)}\\)`.replace(' or ', '');

    const expandVar = (v, p) => {
      let arr = [];
      for(let i=0; i<p; i++) arr.push(v);
      return arr.join(' \\times ');
    };
    
    const numExpanded = expandVar(num.v, num.p);
    const denExpanded = expandVar(den.v, den.p);

    const remaining = formatPower(num.v, pAns);

    if (num.c !== 1 || den.c !== 1) {
       return [
         { explanation: 'To understand why the indices subtract, we can expand the variables to see how they cancel each other out.', workingOut: `\\( \\frac{${num.c} ${num.v}^{${num.p}}}{${den.c} ${den.v}^{${den.p}}} \\)`, graphData: null },
         { explanation: 'Expand the powers into repeated multiplication.', workingOut: `\\( \\frac{${num.c} \\times ${numExpanded}}{${den.c} \\times ${denExpanded}} \\)`, graphData: null },
         { explanation: `Cancel out the common '${num.v}'s from the top and the bottom. Since there are ${den.p} on the bottom and ${num.p} on the top, ${den.p} of them will cancel out.`, workingOut: `This leaves us with \\( ${remaining} \\) on the top.`, graphData: null },
         { explanation: `Divide the numbers (${num.c} ÷ ${den.c} = ${coeff}) and combine with the remaining variables.`, workingOut: simpleCorrect, graphData: null }
       ];
    } else {
       return [
         { explanation: 'To understand why the indices subtract, we can expand the variables to see how they cancel each other out.', workingOut: `\\( \\frac{${num.v}^{${num.p}}}{${den.v}^{${den.p}}} \\)`, graphData: null },
         { explanation: 'Expand the powers into repeated multiplication.', workingOut: `\\( \\frac{${numExpanded}}{${denExpanded}} \\)`, graphData: null },
         { explanation: `Cancel out the common '${num.v}'s from the top and the bottom. Since there are ${den.p} on the bottom and ${num.p} on the top, ${den.p} of them will cancel out.`, workingOut: `This leaves us with exactly \\( ${num.p} - ${den.p} = ${pAns} \\) '${num.v}'s remaining on the top.`, graphData: null },
         { explanation: 'Rewrite the remaining variables in index notation.', workingOut: simpleCorrect, graphData: null }
       ];
    }
  }

  const idsToProcess = [];
  for (let j = 0; j < 12; j++) idsToProcess.push('y9-8a-7' + String.fromCharCode(97 + j));

  let updateCount = 0;
  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ7CancelSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-7');
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

  console.log('Updated', updateCount, 'subquestions for q7 with cancellation steps');
  process.exit(0);
}

run().catch(console.error);
