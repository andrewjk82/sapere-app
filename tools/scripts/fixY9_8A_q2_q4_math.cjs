const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getPrimeFactors(num) {
     let n = num;
     const factors = [];
     for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
           factors.push(i);
           n /= i;
        }
     }
     return factors;
  }

  function formatDivisionSteps(num, factors) {
     let steps = [];
     let current = num;
     for (const p of factors) {
        let next = current / p;
        steps.push(`\\( ${current} \\div ${p} = ${next} \\)`);
        current = next;
     }
     return steps.join('\n');
  }

  function getQ2CancelSteps(text) {
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    const num = parseInt(match[1]);
    const factors = getPrimeFactors(num);
    const p = factors[0];
    const power = factors.length;

    const divisionStr = formatDivisionSteps(num, factors);
    const correct = `\\(${power === 1 ? p : `${p}^{${power}}`}\\)`;

    return [
        { explanation: `To express ${num} as a power of a prime number, we repeatedly divide by the smallest possible prime number (like 2, 3, 5, etc.) until we reach 1.`, workingOut: '', graphData: null },
        { explanation: `Let's divide ${num} by its prime factors:`, workingOut: divisionStr, graphData: null },
        { explanation: `Since we divided by the prime number ${p} exactly ${power} times, we multiply ${p} by itself ${power} times.`, workingOut: `\\( ${factors.join(' \\times ')} = ${correct} \\)`, graphData: null }
      ];
  }

  function getQ4CancelSteps(text) {
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    const num = parseInt(match[1]);
    const factors = getPrimeFactors(num);

    const divisionStr = formatDivisionSteps(num, factors);

    // Group factors
    const counts = {};
    for (const f of factors) counts[f] = (counts[f] || 0) + 1;
    let parts = [];
    for (const [f, count] of Object.entries(counts)) {
       parts.push(count === 1 ? f : `${f}^{${count}}`);
    }
    const correct = `\\(${parts.join(' \\times ')}\\)`;

    return [
        { explanation: `To express ${num} as a product of prime numbers, we use the method of repeated division. We divide by the smallest prime number possible until we reach 1.`, workingOut: '', graphData: null },
        { explanation: `Let's perform the prime factorisation by dividing:`, workingOut: divisionStr, graphData: null },
        { explanation: `Now, collect all the prime numbers we divided by. If a prime number appears more than once, we use index notation (powers).`, workingOut: `The prime factors are: ${factors.join(', ')}\n\nTherefore:\n\\( ${factors.join(' \\times ')} = ${correct} \\)`, graphData: null }
      ];
  }

  const idsToProcess2 = [];
  for (let j = 0; j < 8; j++) idsToProcess2.push('y9-8a-2' + String.fromCharCode(97 + j));
  
  const idsToProcess4 = [];
  for (let j = 0; j < 8; j++) idsToProcess4.push('y9-8a-4' + String.fromCharCode(97 + j));

  let updateCount = 0;

  for (const id of idsToProcess2) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ2CancelSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }

  for (const id of idsToProcess4) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = getQ4CancelSteps(data.question);
      if (newSteps) {
        await docRef.update({
          solutionSteps: newSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updateCount++;
      }
    }
  }
  
  for (const qNum of ['2', '4']) {
      const pRef = db.collection('questions').doc('y9-8a-' + qNum);
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
  }

  console.log('Updated', updateCount, 'subquestions for q2 and q4 with prime division steps');
  process.exit(0);
}

run().catch(console.error);
