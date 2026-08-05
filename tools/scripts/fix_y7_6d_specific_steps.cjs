const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = {
    'y7-6d-q8h': [
      {
        explanation: 'Substitute \\(b = \\frac{5}{6}\\) into the expression \\(3 - b\\). Note that \\(a\\) is not used in this expression.',
        workingOut: '\\( 3 - \\frac{5}{6} \\)',
        graphData: null
      },
      {
        explanation: 'Convert the whole number 3 into a fraction with a denominator of 6 so we can subtract.',
        workingOut: '\\( 3 = \\frac{3 \\times 6}{6} = \\frac{18}{6} \\)',
        graphData: null
      },
      {
        explanation: 'Subtract the numerators now that they have a common denominator.',
        workingOut: '\\( \\frac{18}{6} - \\frac{5}{6} = \\frac{13}{6} \\)',
        graphData: null
      }
    ],
    'y7-6d-q9a': [
      {
        explanation: 'To find the missing term, divide the result on the right by the multiplier on the left.',
        workingOut: '\\( \\square = \\frac{4y^2}{4y} \\)',
        graphData: null
      },
      {
        explanation: 'Simplify by dividing the coefficients (4 divided by 4 is 1).',
        workingOut: '\\( \\square = \\frac{y^2}{y} \\)',
        graphData: null
      },
      {
        explanation: 'Use index laws to divide the variables by subtracting their powers.',
        workingOut: '\\( y^{2-1} = y \\)',
        graphData: null
      }
    ],
    'y7-6d-q9b': [
      {
        explanation: 'To find the missing term, divide the result on the right by the multiplier on the left.',
        workingOut: '\\( \\square = \\frac{9a^2}{16} \\div \\frac{3a^2}{4} \\)',
        graphData: null
      },
      {
        explanation: 'Change the division to multiplication by flipping the second fraction (multiplying by the reciprocal).',
        workingOut: '\\( \\square = \\frac{9a^2}{16} \\times \\frac{4}{3a^2} \\)',
        graphData: null
      },
      {
        explanation: 'Cancel out common terms in the numerator and denominator. The \\(a^2\\) terms cancel each other out.',
        workingOut: '\\( \\square = \\frac{9 \\times 4}{16 \\times 3} = \\frac{36}{48} \\)',
        graphData: null
      },
      {
        explanation: 'Simplify the resulting fraction to its lowest terms by dividing by 12.',
        workingOut: '\\( \\square = \\frac{3}{4} \\)',
        graphData: null
      }
    ],
    'y7-6d-q9c': [
      {
        explanation: 'To find the missing term, divide the result on the right by the multiplier on the left.',
        workingOut: '\\( \\square = 9x^2 \\div \\frac{3x}{5} \\)',
        graphData: null
      },
      {
        explanation: 'Change the division to multiplication by flipping the fraction (multiplying by the reciprocal).',
        workingOut: '\\( \\square = \\frac{9x^2}{1} \\times \\frac{5}{3x} \\)',
        graphData: null
      },
      {
        explanation: 'Multiply the numerators together.',
        workingOut: '\\( \\square = \\frac{9x^2 \\times 5}{3x} = \\frac{45x^2}{3x} \\)',
        graphData: null
      },
      {
        explanation: 'Divide the coefficient 45 by 3, and divide \\(x^2\\) by \\(x\\).',
        workingOut: '\\( \\square = 15x \\)',
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
