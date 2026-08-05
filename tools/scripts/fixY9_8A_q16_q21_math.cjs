const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // q16: (m^3)^? = m^6
  function getQ16Steps(q) {
    const m = q.match(/\\\(\(([a-z])\^?\{?(\d+)\}?\)\^\{\.\.\.\} = ([a-z])\^?\{?(\d+)\}?\\\)/);
    if (!m) return null;
    const v = m[1], inner = parseInt(m[2]), target = parseInt(m[4]);
    const ans = target / inner;
    return [
      { explanation: `Using the Power of a Power Law \\( (a^m)^n = a^{m \\times n} \\), we need to find the value of \\( n \\) such that:`, workingOut: `\\( ${v}^{${inner} \\times n} = ${v}^{${target}} \\)`, graphData: null },
      { explanation: 'Since the bases are equal, the indices must also be equal. We can set up and solve a simple equation:', workingOut: `\\( ${inner} \\times n = ${target} \\)\n\\( n = ${target} \\div ${inner} = ${ans} \\)`, graphData: null },
      { explanation: `Therefore the missing index is \\( ${ans} \\).`, workingOut: `\\(${ans}\\)`, graphData: null }
    ];
  }

  // q17: Is (a^3)^7 = (a^7)^3?
  function getQ17Steps(q) {
    return [
      { explanation: 'To check if this is true, we can simplify both sides separately using the Power of a Power Law.', workingOut: 'Left side: \\( (a^{3})^{7} = a^{3 \\times 7} = a^{21} \\)\nRight side: \\( (a^{7})^{3} = a^{7 \\times 3} = a^{21} \\)', graphData: null },
      { explanation: 'Since multiplication is commutative (order does not matter: \\( 3 \\times 7 = 7 \\times 3 = 21 \\)), both sides simplify to the same value.', workingOut: '\\( a^{21} = a^{21} \\) ✓', graphData: null },
      { explanation: 'Therefore the statement is TRUE.', workingOut: 'True', graphData: null }
    ];
  }

  // q19: (2a^2b)^2 × 3ab^3
  function getQ19Steps(q) {
    return [
      { explanation: 'First, expand the bracket using the Power of a Power Law. The index 2 applies to every factor inside the bracket.', workingOut: '\\( (2a^2b)^2 = 2^2 \\times (a^2)^2 \\times b^2 = 4a^4b^2 \\)', graphData: null },
      { explanation: 'Now multiply the expanded bracket by the remaining term \\( 3ab^3 \\).', workingOut: '\\( 4a^4b^2 \\times 3ab^3 \\)', graphData: null },
      { explanation: 'Group the numbers and each variable separately, then apply the Multiplication Law (add the indices).', workingOut: '\\( (4 \\times 3) \\times (a^4 \\times a^1) \\times (b^2 \\times b^3) \\)\n\\( = 12 \\times a^{4+1} \\times b^{2+3} \\)', graphData: null },
      { explanation: 'Write the final simplified answer.', workingOut: '\\(12a^{5}b^{5}\\)', graphData: null }
    ];
  }

  // q20: (x^2/y)^2 × (y^2/x)^3
  function getQ20Steps(q) {
    return [
      { explanation: 'First, apply the power to each fraction separately. The index distributes to both numerator and denominator.', workingOut: '\\( \\left(\\frac{x^2}{y}\\right)^2 = \\frac{x^{2 \\times 2}}{y^2} = \\frac{x^4}{y^2} \\)\n\\( \\left(\\frac{y^2}{x}\\right)^3 = \\frac{y^{2 \\times 3}}{x^3} = \\frac{y^6}{x^3} \\)', graphData: null },
      { explanation: 'Now multiply the two fractions by multiplying the numerators together and the denominators together.', workingOut: '\\( \\frac{x^4}{y^2} \\times \\frac{y^6}{x^3} = \\frac{x^4 \\times y^6}{y^2 \\times x^3} \\)', graphData: null },
      { explanation: 'Apply the Division Law (subtract indices) for each variable.', workingOut: 'For \\( x \\): \\( x^{4-3} = x^1 = x \\)\nFor \\( y \\): \\( y^{6-2} = y^4 \\)', graphData: null },
      { explanation: 'Combine to get the final answer.', workingOut: '\\(x y^{4}\\)', graphData: null }
    ];
  }

  // q21: ((3x^2y^2)^2 × (2x^2y)^3) / (6x^2y)^2
  function getQ21Steps(q) {
    return [
      { explanation: 'Expand each bracket using the Power of a Power Law. The index applies to every factor inside.', workingOut: '\\( (3x^2y^2)^2 = 9x^4y^4 \\)\n\\( (2x^2y)^3 = 8x^6y^3 \\)\n\\( (6x^2y)^2 = 36x^4y^2 \\)', graphData: null },
      { explanation: 'Multiply the two terms in the numerator using the Multiplication Law (add indices).', workingOut: '\\( 9x^4y^4 \\times 8x^6y^3 = (9 \\times 8) \\times x^{4+6} \\times y^{4+3} = 72x^{10}y^{7} \\)', graphData: null },
      { explanation: 'Now divide the numerator by the denominator using the Division Law (subtract indices).', workingOut: '\\( \\frac{72x^{10}y^{7}}{36x^{4}y^{2}} \\)\nNumbers: \\( 72 \\div 36 = 2 \\)\nFor \\( x \\): \\( 10 - 4 = 6 \\)\nFor \\( y \\): \\( 7 - 2 = 5 \\)', graphData: null },
      { explanation: 'Write the final simplified answer.', workingOut: '\\(2x^{6}y^{5}\\)', graphData: null }
    ];
  }

  const qMap = {
    'y9-8a-16': { fn: getQ16Steps, count: 8 },
    'y9-8a-17': { fn: getQ17Steps, count: 8 },
    'y9-8a-19': { fn: getQ19Steps, count: 4 },
    'y9-8a-20': { fn: getQ20Steps, count: 4 },
    'y9-8a-21': { fn: getQ21Steps, count: 4 },
  };

  let updateCount = 0;
  for (const [qId, { fn, count }] of Object.entries(qMap)) {
    const ids = Array.from({length: count}, (_,j) => qId + String.fromCharCode(97+j));
    for (const id of ids) {
      const docRef = db.collection('questions').doc(id);
      const snap = await docRef.get();
      if (!snap.exists) continue;
      const newSteps = fn(snap.data().question);
      if (newSteps) {
        await docRef.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
        updateCount++;
      }
    }
    // Update parent
    const pSnap = await db.collection('questions').doc(qId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, solutionSteps: cSnap.data().solutionSteps } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Updated', updateCount, 'subquestions for q16-q21');
  process.exit(0);
}

run().catch(console.error);
