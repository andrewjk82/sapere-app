const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11f-q1a')
    .where(FieldPath.documentId(), '<=', 'y9-11f-q1\uf8ff')
    .get();

  let count = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    
    // We parse the gradient and y-intercept from the solution final equation
    let finalEqMatch = data.solution.match(/\\\(y = .*?\\\)/g);
    if (!finalEqMatch) return;
    
    let finalEq = finalEqMatch[finalEqMatch.length - 1]; 
    let rawEq = finalEq.replace(/\\\(|\\\)/g, ''); // e.g. "y = 3x - 1" or "y = \frac{1}{2}x + \frac{9}{2}"
    
    // Create new completely distinct options
    let opt0, opt1, opt2, opt3;
    let answerIdx = '1';
    
    // For fractions, let's just make up some visually distinct ones.
    // To be safe and simple, let's hardcode the options based on rawEq, or modify the strings.
    if (rawEq === 'y = 2x + 2') { // 1a
        opt0 = '\\(y = 3x - 1\\)';
        opt1 = finalEq; // correct
        opt2 = '\\(y = x + 4\\)';
        opt3 = '\\(y = -2x + 3\\)';
    } else if (rawEq === 'y = 3x - 1') { // 1b
        opt0 = '\\(y = 2x - 3\\)';
        opt1 = '\\(y = -3x + 2\\)';
        opt2 = finalEq; // correct (idx 2)
        opt3 = '\\(y = 4x + 1\\)';
        answerIdx = '2';
    } else if (rawEq === 'y = 5x + 7') { // 1c
        opt0 = '\\(y = 4x + 5\\)';
        opt1 = finalEq; // correct
        opt2 = '\\(y = -5x - 2\\)';
        opt3 = '\\(y = 2x + 9\\)';
    } else if (rawEq === 'y = 3x + 1') { // 1d
        opt0 = '\\(y = 2x + 3\\)';
        opt1 = '\\(y = -3x - 1\\)';
        opt2 = finalEq; // correct
        opt3 = '\\(y = 4x - 2\\)';
        answerIdx = '2';
    } else if (rawEq === 'y = \\frac{1}{2}x + \\frac{9}{2}') { // 1e
        opt0 = '\\(y = 2x + 3\\)';
        opt1 = finalEq; // correct
        opt2 = '\\(y = -\\frac{1}{2}x + 4\\)';
        opt3 = '\\(y = \\frac{3}{2}x + 1\\)';
    } else if (rawEq === 'y = \\frac{2}{3}x - 4') { // 1f
        opt0 = '\\(y = \\frac{3}{2}x - 2\\)';
        opt1 = finalEq; // correct
        opt2 = '\\(y = -\\frac{2}{3}x + 4\\)';
        opt3 = '\\(y = 2x - 3\\)';
    } else if (rawEq === 'y = -\\frac{1}{3}x - \\frac{2}{3}') { // 1g
        opt0 = '\\(y = \\frac{1}{3}x + 2\\)';
        opt1 = finalEq; // correct
        opt2 = '\\(y = -3x - 1\\)';
        opt3 = '\\(y = -\\frac{2}{3}x + \\frac{1}{3}\\)';
    } else if (rawEq === 'y = -\\frac{2}{5}x - \\frac{17}{5}') { // 1h
        opt0 = '\\(y = \\frac{2}{5}x - 3\\)';
        opt1 = finalEq; // correct
        opt2 = '\\(y = -\\frac{5}{2}x + 2\\)';
        opt3 = '\\(y = -\\frac{3}{5}x - 2\\)';
    } else {
        return; // skip unknown
    }

    batch.update(doc.ref, {
      options: [
        { text: opt0, imageUrl: '' },
        { text: opt1, imageUrl: '' },
        { text: opt2, imageUrl: '' },
        { text: opt3, imageUrl: '' }
      ],
      answer: answerIdx,
      updatedAt: FieldValue.serverTimestamp()
    });
    
    count++;
  });

  await batch.commit();
  console.log(`Updated options for ${count} questions successfully.`);
  process.exit(0);
}

run().catch(console.error);
