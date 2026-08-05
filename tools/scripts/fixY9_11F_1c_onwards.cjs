const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11f-q1c')
    .where(FieldPath.documentId(), '<=', 'y9-11f-q1\uf8ff')
    .get();

  let count = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    
    const pointMatch = data.question.match(/\(([-0-9.]+),\s*([-0-9.]+)\)/);
    let mStrMatch = data.question.match(/gradient\s+\\\((.*?)\\\)/);
    
    if (!pointMatch || !mStrMatch) {
        console.log("Could not parse point or m", doc.id);
        return;
    }
    
    let x1 = pointMatch[1];
    let y1 = pointMatch[2];
    let mStr = mStrMatch[1]; 
    
    // finalEqMatch looks for \(y = ...\)
    let finalEqMatch = data.solution.match(/\\\(y = .*?\\\)/g);
    
    if (!finalEqMatch) {
        console.log("Could not parse final eq for", doc.id, "Solution:", data.solution);
        return;
    }
    let finalEq = finalEqMatch[finalEqMatch.length - 1]; 
    
    let rawEq = finalEq.replace(/\\\(|\\\)/g, ''); 
    
    let opt0 = `\\(y = ${mStr}x\\)`;
    let opt1 = finalEq;
    
    let opt2 = '';
    if (rawEq.includes('+')) opt2 = `\\(${rawEq.replace('+', '-')}\\)`;
    else if (rawEq.includes('-')) opt2 = `\\(${rawEq.replace('-', '+')}\\)`;
    else opt2 = `\\(${rawEq} + 1\\)`;
    
    let opt3 = `\\(y = x${rawEq.split('x')[1] || ''}\\)`;
    if (opt3 === opt1) opt3 = `\\(y = 2x${rawEq.split('x')[1] || ''}\\)`;

    let steps = [
      {
        explanation: 'State the point-gradient formula for the equation of a line.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: `Substitute the given point $(x_1, y_1) = (${x1}, ${y1})$ and the given gradient $m = ${mStr.replace(/\\/g, '\\\\')}$ into the formula.`,
        workingOut: `y - ${y1.startsWith('-') ? `(${y1})` : y1} = ${mStr.replace(/\\/g, '\\\\')}(x - ${x1.startsWith('-') ? `(${x1})` : x1})`,
        graphData: null
      },
      {
        explanation: 'Expand the brackets and simplify the terms.',
        workingOut: `y - ${y1.startsWith('-') ? `(${y1})` : y1} = ${mStr.replace(/\\/g, '\\\\')}(x ${x1.startsWith('-') ? '+' + x1.substring(1) : '-' + x1})`,
        graphData: null
      },
      {
        explanation: 'Rearrange the equation into the slope-intercept form $y = mx + c$.',
        workingOut: rawEq.replace(/\\/g, '\\\\'),
        graphData: null
      }
    ];

    batch.update(doc.ref, {
      options: [
        { text: opt0, imageUrl: '' },
        { text: opt1, imageUrl: '' },
        { text: opt2, imageUrl: '' },
        { text: opt3, imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: steps,
      updatedAt: FieldValue.serverTimestamp()
    });
    
    count++;
  });

  await batch.commit();
  console.log(`Updated ${count} questions successfully.`);
  process.exit(0);
}

run().catch(console.error);
