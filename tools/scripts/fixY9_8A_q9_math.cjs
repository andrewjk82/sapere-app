const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ9MathSteps(text) {
    const match = text.match(/\\frac\{(.*?)\}\{(.*?)\} \\times \\frac\{(.*?)\}\{(.*?)\}/);
    if (!match) return null;
    
    const n1 = match[1], d1 = match[2], n2 = match[3], d2 = match[4];
    
    const extractVars = (str) => {
       const clean = str.replace(/[{}]/g, ''); 
       let xp = 0, yp = 0;
       const xMatch = clean.match(/x(?:\^(\d+))?/);
       if (xMatch) xp = parseInt(xMatch[1] || 1);
       const yMatch = clean.match(/y(?:\^(\d+))?/);
       if (yMatch) yp = parseInt(yMatch[1] || 1);
       return { xp, yp };
    };

    const nv1 = extractVars(n1);
    const dv1 = extractVars(d1);
    const nv2 = extractVars(n2);
    const dv2 = extractVars(d2);

    const nx = nv1.xp + nv2.xp;
    const ny = nv1.yp + nv2.yp;
    const dx = dv1.xp + dv2.xp;
    const dy = dv1.yp + dv2.yp;
    
    const finalX = nx - dx;
    const finalY = ny - dy;
    
    const formatPower = (v, p) => p === 1 ? v : (p === 0 ? '' : `${v}^{${p}}`);
    
    const numCombined = `${formatPower('x', nx)}${formatPower('y', ny)}`;
    const denCombined = `${formatPower('x', dx)}${formatPower('y', dy)}`;
    
    const finalCombined = `${formatPower('x', finalX)}${formatPower('y', finalY)}`;
    const correct = `\\(${finalCombined}\\)`;

    return [
      { explanation: 'First, multiply the two fractions together by multiplying the numerators (tops) and the denominators (bottoms).', workingOut: `\\( \\frac{${n1} \\times ${n2}}{${d1} \\times ${d2}} \\)`, graphData: null },
      { explanation: 'When multiplying terms with the same base, we add their indices. Do this separately for the top and the bottom.', workingOut: `Top: \\( x^{${nv1.xp} + ${nv2.xp}} y^{${nv1.yp} + ${nv2.yp}} = ${numCombined} \\)\nBottom: \\( x^{${dv1.xp} + ${dv2.xp}} y^{${dv1.yp} + ${dv2.yp}} = ${denCombined} \\)\n\nThis gives us a single fraction: \\( \\frac{${numCombined}}{${denCombined}} \\)`, graphData: null },
      { explanation: 'Now, simplify the fraction by canceling out common variables from the top and bottom (which is the same as subtracting indices).', workingOut: `For x: \\( ${nx} - ${dx} = ${finalX} \\) (so ${finalX} 'x's left on top)\nFor y: \\( ${ny} - ${dy} = ${finalY} \\) (so ${finalY} 'y's left on top)`, graphData: null },
      { explanation: 'Combine the remaining variables to get the final simplified answer.', workingOut: correct, graphData: null }
    ];
  }

  const idsToProcess = [];
  for (const char of 'abcdefgh') idsToProcess.push('y9-8a-9' + char);

  let updateCount = 0;
  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ9MathSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-9');
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

  console.log('Updated', updateCount, 'subquestions for q9 with mathematical fraction steps');
  process.exit(0);
}

run().catch(console.error);
