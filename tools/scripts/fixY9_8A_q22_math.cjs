const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ22MathSteps(text) {
    const match = text.match(/\\\(\(\.\.\.\)\^\{?(\d+)\}? = ([a-zA-Z])\^?\{?(\d+)?\}? ([a-zA-Z])\^?\{?(\d+)?\}?\\\)/i);
    if (!match) return null;
    
    const outP = parseInt(match[1]);
    const v1 = match[2];
    const p1 = parseInt(match[3]);
    const v2 = match[4];
    const p2 = parseInt(match[5]);
    
    const xAns = p1 / outP;
    const yAns = p2 / outP;
    const correct = `\\(${v1}^{${xAns}} ${v2}^{${yAns}}\\)`;

    return [
        { explanation: `Let the missing term inside the brackets be \\( (${v1}^x ${v2}^y) \\).`, workingOut: `The equation becomes: \\( (${v1}^x ${v2}^y)^{${outP}} = ${v1}^{${p1}} ${v2}^{${p2}} \\)`, graphData: null },
        { explanation: 'Apply the Power of a Power Law \\( (a^m)^n = a^{m \\times n} \\) to expand the left side.', workingOut: `\\( ${v1}^{${outP}x} ${v2}^{${outP}y} = ${v1}^{${p1}} ${v2}^{${p2}} \\)`, graphData: null },
        { explanation: 'Since the bases are the same on both sides, we can equate the indices (powers) for each variable and solve the linear equations.', workingOut: `For base ${v1}: \\( ${outP}x = ${p1} \\)  \n\\( x = ${p1} \\div ${outP} = ${xAns} \\)\n\nFor base ${v2}: \\( ${outP}y = ${p2} \\)  \n\\( y = ${p2} \\div ${outP} = ${yAns} \\)`, graphData: null },
        { explanation: `Substitute \\( x = ${xAns} \\) and \\( y = ${yAns} \\) back into our original assumption to find the missing term.`, workingOut: correct, graphData: null }
      ];
  }

  const idsToProcess = [];
  for (let j = 0; j < 12; j++) idsToProcess.push('y9-8a-22' + String.fromCharCode(97 + j));

  let updateCount = 0;
  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ22MathSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-22');
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

  console.log('Updated', updateCount, 'subquestions for q22 with mathematical equations steps');
  process.exit(0);
}

run().catch(console.error);
