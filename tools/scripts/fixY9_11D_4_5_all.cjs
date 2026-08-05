const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const ids = ['y9-11d-q4a', 'y9-11d-q4b', 'y9-11d-q4c', 'y9-11d-q4d', 'y9-11d-q5a', 'y9-11d-q5b', 'y9-11d-q5c', 'y9-11d-q5d'];

  for (let id of ids) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) continue;

    const data = doc.data();
    
    // We already know these have the issue
    const qText = data.question; 
    const pointMatch = qText.match(/\(([-0-9.]+),\s*([-0-9.]+)\)/);
    const eqMatch = qText.match(/y = ([-0-9.]+)?x([+\-\s0-9.]+)?/);
    
    let isYes = false;
    let xVal = 0, yVal = 0, calculatedY = 0;

    if (pointMatch && eqMatch) {
      xVal = parseFloat(pointMatch[1]);
      yVal = parseFloat(pointMatch[2]);
      
      let m = parseFloat(eqMatch[1] || '1');
      if (eqMatch[1] === '-') m = -1;
      
      let cStr = eqMatch[2] ? eqMatch[2].replace(/\s/g, '') : '+0';
      let c = parseFloat(cStr);
      
      calculatedY = m * xVal + c;
      isYes = Math.abs(calculatedY - yVal) < 0.0001;
    } else {
      isYes = data.answer === '2' || data.answer === 'Yes' || data.answer === '0';
    }

    let steps = data.solutionSteps || [];
    if (steps.length > 0) {
      steps[0].workingOut = `x = ${xVal}`;
      steps[0].explanation = `Substitute the $x$-coordinate of the point $(${xVal}, ${yVal})$ into the equation.`;
      
      steps[1].workingOut = `y = ${calculatedY}`;
      steps[1].explanation = `Calculate the corresponding $y$-value.`;
      
      steps[2].workingOut = `${calculatedY} ${isYes ? '=' : '\\neq'} ${yVal} \\implies \\text{${isYes ? 'Yes' : 'No'}}`;
      steps[2].explanation = isYes 
        ? `Since the calculated $y$-value matches the $y$-coordinate of the given point $(${xVal}, ${yVal})$, it lies on the line.`
        : `Since the calculated $y$-value does not match the $y$-coordinate of the given point $(${xVal}, ${yVal})$, it does not lie on the line.`;
      
      if (data.graphData) {
        steps[2].graphData = data.graphData;
      } else if (steps[0].graphData) {
         steps[2].graphData = steps[0].graphData;
         steps[0].graphData = null;
      }
    }

    batch.update(docRef, {
      options: [
        { text: 'Yes', imageUrl: '' },
        { text: 'No', imageUrl: '' }
      ],
      answer: isYes ? '0' : '1',
      solutionSteps: steps,
      graphData: null,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  await batch.commit();
  console.log("Updated q4 and q5 questions successfully.");
  process.exit(0);
}

run().catch(console.error);
