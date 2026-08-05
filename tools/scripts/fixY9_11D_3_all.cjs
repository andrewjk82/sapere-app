const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Find all questions starting with y9-11d-q3
  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11d-q3')
    .where(FieldPath.documentId(), '<=', 'y9-11d-q3\uf8ff')
    .get();

  let count = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    const hasWeirdOptions = data.options && data.options.length > 3 && (data.options[2].text.includes('Yes') || data.options[0].text.includes('12/5'));
    
    if (hasWeirdOptions || data.question.includes('Check whether or not the point')) {
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
        isYes = data.answer === '2' || data.answer === 'Yes';
      }

      let steps = data.solutionSteps || [];
      if (steps.length > 0) {
        steps[0].workingOut = `x = ${xVal}`;
        steps[0].explanation = `Substitute the $x$-coordinate of the point $(${xVal}, ${yVal})$ into the equation.`;
        
        steps[1].workingOut = `y = ${calculatedY}`;
        steps[1].explanation = `Calculate the corresponding $y$-value.`;
        
        steps[2].workingOut = `${calculatedY} ${isYes ? '=' : '\\neq'} ${yVal} \\implies \\text{${isYes ? 'Yes' : 'No'}}`;
        steps[2].explanation = isYes 
          ? `Since the calculated $y$-value matches the $y$-coordinate of the point, it lies on the line.`
          : `Since the calculated $y$-value does not match the $y$-coordinate of the point, it does not lie on the line.`;
        
        if (data.graphData) {
          steps[2].graphData = data.graphData;
        } else if (steps[0].graphData) {
           steps[2].graphData = steps[0].graphData;
           steps[0].graphData = null;
        }
      }

      batch.update(doc.ref, {
        options: [
          { text: 'Yes', imageUrl: '' },
          { text: 'No', imageUrl: '' }
        ],
        answer: isYes ? '0' : '1',
        solutionSteps: steps,
        graphData: null,
        updatedAt: FieldValue.serverTimestamp()
      });
      count++;
    }
  });

  await batch.commit();
  console.log(`Updated ${count} questions matching y9-11d-q3*`);
  process.exit(0);
}

run().catch(console.error);
