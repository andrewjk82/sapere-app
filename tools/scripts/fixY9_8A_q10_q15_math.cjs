const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ===== q10: Complete the equation y^4 × ... = y^9 or y^6 ÷ ... = y^2 =====
  function getQ10Steps(text) {
    const m = text.match(/\\\(([a-z])\^?\{?(\d+)\}? (\\times|\\div) \.\.\. = ([a-z])\^?\{?(\d+)\}?\\\)/);
    if (!m) return null;
    const v = m[1], p1 = parseInt(m[2]), op = m[3], p2 = parseInt(m[5]);
    const ans = op === '\\times' ? p2 - p1 : p1 - p2;
    const opWord = op === '\\times' ? 'multiplied by' : 'divided by';
    const lawWord = op === '\\times' ? 'add' : 'subtract';
    const equation = op === '\\times' ? `${p1} + ? = ${p2}` : `${p1} - ? = ${p2}`;
    return [
      { explanation: `When two powers with the same base are ${opWord}, we ${lawWord} the indices.`, workingOut: `\\( ${v}^{${p1}} ${op === '\\times' ? '\\times' : '\\div'} ${v}^{?} = ${v}^{${p2}} \\)`, graphData: null },
      { explanation: `This means the unknown index satisfies the equation:`, workingOut: `\\( ${equation} \\)\n\\( ? = ${p2} ${op === '\\times' ? '-' : '+'} ${p1} = ${ans} \\)`, graphData: null },
      { explanation: `Therefore, the missing term is \\( ${v}^{${ans}} \\).`, workingOut: `\\(${v}^{${ans}}\\)`, graphData: null }
    ];
  }

  // ===== q12: (7p)^0 — Zero Index Law =====
  function getQ12Steps(text) {
    const m = text.match(/\\\((.*?)\)\^0\\\)/);
    if (!m) return null;
    const inner = m[1];
    return [
      { explanation: 'This question uses the Zero Index Law: any number or expression raised to the power of 0 equals 1.', workingOut: `\\( a^0 = 1 \\) for any value of \\( a \\) (where \\( a \\neq 0 \\))`, graphData: null },
      { explanation: `We can verify this using the Division Law. For example: \\( \\frac{${inner}^{1}}{${inner}^{1}} = ${inner}^{1-1} = ${inner}^{0} \\). But we also know that \\( \\frac{${inner}}{${inner}} = 1 \\).`, workingOut: `So \\( ${inner}^{0} = 1 \\)`, graphData: null },
      { explanation: 'No matter what expression is inside the brackets, once the whole thing is raised to the power of 0, the answer is always 1.', workingOut: '\\(1\\)', graphData: null }
    ];
  }

  // ===== q13: 5x^0 + 5x^0 =====
  function getQ13Steps(text) {
    return [
      { explanation: 'First, apply the Zero Index Law: any variable raised to the power 0 equals 1.', workingOut: '\\( x^0 = 1 \\)', graphData: null },
      { explanation: 'Substitute \\( x^0 = 1 \\) into both terms.', workingOut: '\\( 5 \\times 1 + 5 \\times 1 \\)\n\\( = 5 + 5 \\)', graphData: null },
      { explanation: 'Add the two values together.', workingOut: '\\( 5 + 5 = 10 \\)', graphData: null }
    ];
  }

  // ===== q14: (x^4)^5 — Power of a Power =====
  function getQ14Steps(text) {
    const m = text.match(/\\\(\(([a-z])\^?\{?(\d+)\}?\)\^(\d+)\\\)/);
    if (!m) return null;
    const v = m[1], p = parseInt(m[2]), k = parseInt(m[3]);
    const ans = p * k;
    const factors = Array(k).fill(`${v}^{${p}}`).join(' \\times ');
    return [
      { explanation: 'Apply the Power of a Power Law: when a power is raised to another power, we multiply the indices.', workingOut: `\\( (${v}^{${p}})^{${k}} = ${v}^{${p} \\times ${k}} \\)`, graphData: null },
      { explanation: `To see why, expand the outer power as repeated multiplication: \\( (${v}^{${p}})^{${k}} \\) means multiplying \\( ${v}^{${p}} \\) by itself ${k} times.`, workingOut: `\\( ${factors} = ${v}^{${p}+${p}+...} = ${v}^{${p} \\times ${k}} \\)`, graphData: null },
      { explanation: `Calculate the new index: \\( ${p} \\times ${k} = ${ans} \\).`, workingOut: `\\(${v}^{${ans}}\\)`, graphData: null }
    ];
  }

  // ===== q15: (b^4)^2 / (b^4)^3 =====
  function getQ15Steps(text) {
    const m = text.match(/\\frac\{\(([a-z])\^?\{?(\d+)\}?\)\^(\d+)\}\{\(([a-z])\^?\{?(\d+)\}?\)\^(\d+)\}/);
    if (!m) return null;
    const v = m[1], p1 = parseInt(m[2]), k1 = parseInt(m[3]), p2 = parseInt(m[5]), k2 = parseInt(m[6]);
    const num = p1 * k1, den = p2 * k2;
    const ans = num - den;
    return [
      { explanation: 'First, simplify each bracket using the Power of a Power Law: multiply the indices.', workingOut: `Numerator: \\( (${v}^{${p1}})^{${k1}} = ${v}^{${p1} \\times ${k1}} = ${v}^{${num}} \\)\nDenominator: \\( (${v}^{${p2}})^{${k2}} = ${v}^{${p2} \\times ${k2}} = ${v}^{${den}} \\)`, graphData: null },
      { explanation: 'Now simplify the resulting fraction using the Division Law: subtract the indices.', workingOut: `\\( \\frac{${v}^{${num}}}{${v}^{${den}}} = ${v}^{${num} - ${den}} = ${v}^{${ans}} \\)`, graphData: null },
      { explanation: `Since the index ${ans} is negative, we rewrite it as a fraction using the rule \\( ${v}^{-n} = \\frac{1}{${v}^{n}} \\).`, workingOut: `\\( ${v}^{${ans}} = \\frac{1}{${v}^{${Math.abs(ans)}}} \\)`, graphData: null }
    ];
  }

  const allQuestions = [
    ...Array.from({length:12}, (_,j) => 'y9-8a-10' + String.fromCharCode(97+j)),
    ...Array.from({length:8},  (_,j) => 'y9-8a-12' + String.fromCharCode(97+j)),
    ...Array.from({length:8},  (_,j) => 'y9-8a-13' + String.fromCharCode(97+j)),
    ...Array.from({length:8},  (_,j) => 'y9-8a-14' + String.fromCharCode(97+j)),
    ...Array.from({length:8},  (_,j) => 'y9-8a-15' + String.fromCharCode(97+j)),
  ];

  let updateCount = 0;
  for (const id of allQuestions) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (!snap.exists) continue;
    const data = snap.data();
    const q = data.question;
    
    let newSteps = null;
    if (id.includes('y9-8a-10')) newSteps = getQ10Steps(q);
    else if (id.includes('y9-8a-12')) newSteps = getQ12Steps(q);
    else if (id.includes('y9-8a-13')) newSteps = getQ13Steps(q);
    else if (id.includes('y9-8a-14')) newSteps = getQ14Steps(q);
    else if (id.includes('y9-8a-15')) newSteps = getQ15Steps(q);
    
    if (newSteps) {
      await docRef.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
      updateCount++;
    }
  }
  
  // Update parent docs
  for (const qNum of ['10','12','13','14','15']) {
    const pRef = db.collection('questions').doc('y9-8a-' + qNum);
    const pSnap = await pRef.get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, solutionSteps: cSnap.data().solutionSteps } : sq;
      }));
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Updated', updateCount, 'subquestions for q10, q12-q15');
  process.exit(0);
}

run().catch(console.error);
