const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ5MathSteps(text) {
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    const expr = match[1].replace(/\s/g, '');
    const parts = expr.split('\\times');
    
    const extract = (s) => {
       const m = s.match(/(\d+)?([a-zA-Z])\^?\{?(\d+)?\}?/);
       return { c: parseInt(m[1]||1), v: m[2], p: parseInt(m[3]||1) };
    };
    const t1 = extract(parts[0]);
    const t2 = extract(parts[1]);
    
    const cTotal = t1.c * t2.c;
    const pTotal = t1.p + t2.p;
    
    const cText = cTotal === 1 ? '' : cTotal;
    const correct = `\\(${cText}${t1.v}^{${pTotal}}\\)`;

    const expandVar = (v, p) => {
      let arr = [];
      for(let i=0; i<p; i++) arr.push(v);
      return arr.join(' \\times ');
    };
    
    const v1Exp = expandVar(t1.v, t1.p);
    const v2Exp = expandVar(t2.v, t2.p);
    
    const hasCoeff = (t1.c !== 1 || t2.c !== 1);

    if (hasCoeff) {
       return [
         { explanation: 'To understand why the indices add together, we can expand the expression completely.', workingOut: `\\( ${t1.c}${t1.v}^{${t1.p}} \\times ${t2.c}${t2.v}^{${t2.p}} \\)`, graphData: null },
         { explanation: 'First, expand the powers into repeated multiplication.', workingOut: `\\( (${t1.c} \\times ${v1Exp}) \\times (${t2.c} \\times ${v2Exp}) \\)`, graphData: null },
         { explanation: 'Because multiplication is commutative, we can rearrange the terms to group the numbers together and the variables together.', workingOut: `\\( (${t1.c} \\times ${t2.c}) \\times (${v1Exp} \\times ${v2Exp}) \\)`, graphData: null },
         { explanation: `Multiply the numbers to get ${cTotal}, and count the total number of '${t1.v}'s being multiplied (there are ${pTotal} of them).`, workingOut: correct, graphData: null }
       ];
    } else {
       return [
         { explanation: 'To understand why the indices add together, we can expand the expression completely.', workingOut: `\\( ${t1.v}^{${t1.p}} \\times ${t2.v}^{${t2.p}} \\)`, graphData: null },
         { explanation: 'Expand the powers into repeated multiplication.', workingOut: `\\( (${v1Exp}) \\times (${v2Exp}) \\)`, graphData: null },
         { explanation: 'Now, simply count how many times the variable is being multiplied by itself in total.', workingOut: `There are ${t1.p} + ${t2.p} = ${pTotal} '${t1.v}'s.`, graphData: null },
         { explanation: 'Rewrite this back into index notation.', workingOut: correct, graphData: null }
       ];
    }
  }

  const idsToProcess = [];
  for (let j = 0; j < 12; j++) idsToProcess.push('y9-8a-5' + String.fromCharCode(97 + j));

  let updateCount = 0;
  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ5MathSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-5');
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

  console.log('Updated', updateCount, 'subquestions for q5 with mathematical expansion steps');
  process.exit(0);
}

run().catch(console.error);
