const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ6MathSteps(text) {
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    const expr = match[1].replace(/\\times/g, '*').replace(/\s/g, '');
    
    const extractTerm = (str) => {
       const m = str.match(/(\d+)?([a-zA-Z])\^?\{?(\d+)?\}?([a-zA-Z])\^?\{?(\d+)?\}?/);
       if (!m) return null;
       return {
         c: parseInt(m[1] || 1),
         v1: m[2], p1: parseInt(m[3] || 1),
         v2: m[4], p2: parseInt(m[5] || 1)
       };
    };

    const parts = expr.split('*');
    const t1 = extractTerm(parts[0]);
    const t2 = extractTerm(parts[1]);
    
    if (!t1 || !t2) return null;

    const coeff = t1.c * t2.c;
    const p1 = t1.p1 + t2.p1;
    const p2 = t1.p2 + t2.p2;
    const correct = `\\(${coeff === 1 ? '' : coeff}${t1.v1}^{${p1}}${t1.v2}^{${p2}}\\)`;

    const expandVar = (v, p) => {
      let arr = [];
      for(let i=0; i<p; i++) arr.push(v);
      return arr.join(' \\times ');
    };
    
    const v1_1Exp = expandVar(t1.v1, t1.p1);
    const v1_2Exp = expandVar(t1.v2, t1.p2);
    
    const v2_1Exp = expandVar(t2.v1, t2.p1);
    const v2_2Exp = expandVar(t2.v2, t2.p2);
    
    let t1ExpStr = '';
    if (t1.c !== 1) t1ExpStr += `${t1.c} \\times `;
    t1ExpStr += `${v1_1Exp} \\times ${v1_2Exp}`;
    
    let t2ExpStr = '';
    if (t2.c !== 1) t2ExpStr += `${t2.c} \\times `;
    t2ExpStr += `${v2_1Exp} \\times ${v2_2Exp}`;

    const hasCoeff = (t1.c !== 1 || t2.c !== 1);
    
    const allV1 = expandVar(t1.v1, p1);
    const allV2 = expandVar(t1.v2, p2);

    if (hasCoeff) {
       return [
         { explanation: 'To fully understand how to simplify this expression, we can expand all the terms into repeated multiplication.', workingOut: `\\( ${parts[0].replace('*', ' \\times ')} \\times ${parts[1].replace('*', ' \\times ')} \\)`, graphData: null },
         { explanation: 'Expand the indices into long multiplication.', workingOut: `\\( (${t1ExpStr}) \\times (${t2ExpStr}) \\)`, graphData: null },
         { explanation: `Since everything is being multiplied, we can rearrange the terms. Group the numbers together, the '${t1.v1}'s together, and the '${t1.v2}'s together.`, workingOut: `\\( (${t1.c} \\times ${t2.c}) \\times (${allV1}) \\times (${allV2}) \\)`, graphData: null },
         { explanation: `Multiply the numbers to get ${coeff}. Count that there are ${p1} '${t1.v1}'s and ${p2} '${t1.v2}'s, and rewrite them as indices.`, workingOut: correct, graphData: null }
       ];
    } else {
       return [
         { explanation: 'To fully understand how to simplify this expression, we can expand all the terms into repeated multiplication.', workingOut: `\\( ${parts[0].replace('*', ' \\times ')} \\times ${parts[1].replace('*', ' \\times ')} \\)`, graphData: null },
         { explanation: 'Expand the indices into long multiplication.', workingOut: `\\( (${t1ExpStr}) \\times (${t2ExpStr}) \\)`, graphData: null },
         { explanation: `Since everything is being multiplied, we can rearrange the terms. Group the '${t1.v1}'s together, and the '${t1.v2}'s together.`, workingOut: `\\( (${allV1}) \\times (${allV2}) \\)`, graphData: null },
         { explanation: `Count that there are ${p1} '${t1.v1}'s and ${p2} '${t1.v2}'s, and rewrite them as indices.`, workingOut: correct, graphData: null }
       ];
    }
  }

  const idsToProcess = [];
  for (let j = 0; j < 6; j++) idsToProcess.push('y9-8a-6' + String.fromCharCode(97 + j));

  let updateCount = 0;
  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ6MathSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-6');
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

  console.log('Updated', updateCount, 'subquestions for q6 with mathematical expansion steps');
  process.exit(0);
}

run().catch(console.error);
