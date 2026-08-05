const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = {
    'y7-6d-q9d': [
      {
        explanation: 'In a division equation like \\(A \\div B = C\\), we can find the divisor \\(B\\) by dividing the dividend \\(A\\) by the quotient \\(C\\).',
        workingOut: '\\( \\square = \\frac{36y^2}{5} \\div 4y \\)',
        graphData: null
      },
      {
        explanation: 'Change the division by \\(4y\\) into a multiplication by its reciprocal, which is \\(\\frac{1}{4y}\\).',
        workingOut: '\\( \\square = \\frac{36y^2}{5} \\times \\frac{1}{4y} \\)',
        graphData: null
      },
      {
        explanation: 'Multiply the numerators and denominators together.',
        workingOut: '\\( \\square = \\frac{36y^2 \\times 1}{5 \\times 4y} = \\frac{36y^2}{20y} \\)',
        graphData: null
      },
      {
        explanation: 'Simplify the fraction by dividing the numbers by 4, and dividing \\(y^2\\) by \\(y\\).',
        workingOut: '\\( \\square = \\frac{9y}{5} \\)',
        graphData: null
      }
    ],
    'y7-6d-q9e': [
      {
        explanation: 'To find the missing divisor, divide the dividend on the left by the quotient on the right.',
        workingOut: '\\( \\square = \\frac{8k}{9} \\div 32k^2 \\)',
        graphData: null
      },
      {
        explanation: 'Change the division by \\(32k^2\\) into a multiplication by its reciprocal.',
        workingOut: '\\( \\square = \\frac{8k}{9} \\times \\frac{1}{32k^2} \\)',
        graphData: null
      },
      {
        explanation: 'Multiply the numerators and denominators together.',
        workingOut: '\\( \\square = \\frac{8k \\times 1}{9 \\times 32k^2} = \\frac{8k}{288k^2} \\)',
        graphData: null
      },
      {
        explanation: 'Simplify the fraction by dividing the numbers by 8, and cancelling \\(k\\) from the numerator and denominator.',
        workingOut: '\\( \\square = \\frac{1}{36k} \\)',
        graphData: null
      }
    ],
    'y7-6d-q9f': [
      {
        explanation: 'To find the missing divisor, divide the dividend on the left by the quotient on the right.',
        workingOut: '\\( \\square = \\frac{7w}{10} \\div w \\)',
        graphData: null
      },
      {
        explanation: 'Change the division by \\(w\\) into a multiplication by its reciprocal, which is \\(\\frac{1}{w}\\).',
        workingOut: '\\( \\square = \\frac{7w}{10} \\times \\frac{1}{w} \\)',
        graphData: null
      },
      {
        explanation: 'Multiply the fractions together.',
        workingOut: '\\( \\square = \\frac{7w}{10w} \\)',
        graphData: null
      },
      {
        explanation: 'Cancel out the common variable \\(w\\) from the numerator and denominator.',
        workingOut: '\\( \\square = \\frac{7}{10} \\)',
        graphData: null
      }
    ]
  };

  const parentSet = new Set();
  
  for (const [id, steps] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      await docRef.update({
        solutionSteps: steps,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Updated ${id}`);
      parentSet.add(id.replace(/[a-z]$/, ''));
    }
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, solutionSteps: cSnap.data().solutionSteps } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      console.log(`Updated parent ${parentId}`);
    }
  }

  console.log('Done.');
  process.exit(0);
}

run().catch(console.error);
