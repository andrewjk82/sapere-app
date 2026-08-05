const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const updateQ = (id, steps, hint) => {
    batch.update(db.collection('questions').doc(id), {
      solutionSteps: steps,
      hint: hint,
      updatedAt: FieldValue.serverTimestamp()
    });
  };

  // 9a
  updateQ('y9-11g-q9a', [
    {
      explanation: 'Identify the coordinates of points \\(A(2, 3)\\) and \\(B(4, 6)\\), and prepare to use the midpoint formula \\(M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\).',
      workingOut: 'A(2, 3), \\quad B(4, 6)',
      graphData: null
    },
    {
      explanation: 'Substitute the coordinates of both points into the formula to find their average.',
      workingOut: 'M = \\left(\\frac{2+4}{2}, \\frac{3+6}{2}\\right)',
      graphData: null
    },
    {
      explanation: 'Simplify the fractions to obtain the final coordinates.',
      workingOut: 'M = \\left(\\frac{6}{2}, \\frac{9}{2}\\right) = (3, 4.5)',
      graphData: null
    },
    {
      explanation: 'Therefore, the coordinates of the midpoint \\(M\\) are \\((3, 4.5)\\).',
      workingOut: '(3, 4.5)',
      graphData: null
    }
  ], 'Calculate the average of the x-coordinates and the average of the y-coordinates.');

  // 9b
  updateQ('y9-11g-q9b', [
    {
      explanation: 'Identify the coordinates of points \\(B(4, 6)\\) and \\(C(8, 0)\\), and prepare to use the midpoint formula \\(N = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\).',
      workingOut: 'B(4, 6), \\quad C(8, 0)',
      graphData: null
    },
    {
      explanation: 'Substitute the coordinates into the formula.',
      workingOut: 'N = \\left(\\frac{4+8}{2}, \\frac{6+0}{2}\\right)',
      graphData: null
    },
    {
      explanation: 'Simplify the expression to find the final coordinates of \\(N\\).',
      workingOut: 'N = \\left(\\frac{12}{2}, \\frac{6}{2}\\right) = (6, 3)',
      graphData: null
    },
    {
      explanation: 'Therefore, the coordinates of the midpoint \\(N\\) are \\((6, 3)\\).',
      workingOut: '(6, 3)',
      graphData: null
    }
  ], 'Find the average of the coordinates of B and C.');

  // 9c
  updateQ('y9-11g-q9c', [
    {
      explanation: 'Recall the coordinates of \\(M(3, 4.5)\\) and \\(N(6, 3)\\) from the previous parts, and use the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).',
      workingOut: 'M(3, 4.5), \\quad N(6, 3)',
      graphData: null
    },
    {
      explanation: 'Substitute the coordinate values into the formula to set up the gradient calculation.',
      workingOut: 'm = \\frac{3 - 4.5}{6 - 3}',
      graphData: null
    },
    {
      explanation: 'Simplify the numerator and the denominator to find the gradient.',
      workingOut: 'm = \\frac{-1.5}{3} = -0.5 = -\\frac{1}{2}',
      graphData: null
    },
    {
      explanation: 'Therefore, the gradient is \\(-\\dfrac{1}{2}\\).',
      workingOut: '-\\frac{1}{2}',
      graphData: null
    }
  ], 'Use the gradient formula (y2 - y1) / (x2 - x1).');

  // 9d
  updateQ('y9-11g-q9d', [
    {
      explanation: 'First, calculate the coordinates of \\(P\\) (the midpoint of \\(CD\\)) and \\(Q\\) (the midpoint of \\(DA\\)).',
      workingOut: 'P = \\left(\\frac{8+6}{2}, \\frac{0-3}{2}\\right) = (7, -1.5), \\quad Q = \\left(\\frac{6+2}{2}, \\frac{-3+3}{2}\\right) = (4, 0)',
      graphData: null
    },
    {
      explanation: 'Set up the gradient formula for the two points \\(P(7, -1.5)\\) and \\(Q(4, 0)\\).',
      workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{0 - (-1.5)}{4 - 7}',
      graphData: null
    },
    {
      explanation: 'Simplify the formula to obtain the gradient of the interval \\(PQ\\).',
      workingOut: 'm = \\frac{1.5}{-3} = -0.5 = -\\frac{1}{2}',
      graphData: null
    },
    {
      explanation: 'Therefore, the gradient is \\(-\\dfrac{1}{2}\\).',
      workingOut: '-\\frac{1}{2}',
      graphData: null
    }
  ], 'Find the coordinates of P and Q first, then calculate the gradient between them.');

  // 9e
  updateQ('y9-11g-q9e', [
    {
      explanation: 'Check the gradients of the two intervals that we previously calculated.',
      workingOut: 'm_{MN} = -0.5, \\quad m_{PQ} = -0.5',
      graphData: null
    },
    {
      explanation: 'Apply the rule that if two intervals have the same gradient, they are parallel.',
      workingOut: 'm_{MN} = m_{PQ} \\implies MN \\parallel PQ',
      graphData: null
    },
    {
      explanation: 'Therefore, we can conclude that the two intervals are parallel.',
      workingOut: '\\text{They are parallel}',
      graphData: null
    }
  ], 'Compare the gradient values of the two intervals.');

  // 9f
  updateQ('y9-11g-q9f', [
    {
      explanation: 'Organize the coordinates of each point again.',
      workingOut: 'Q(4, 0), \\ M(3, 4.5), \\ P(7, -1.5), \\ N(6, 3)',
      graphData: null
    },
    {
      explanation: 'Find the gradient of the interval \\(QM\\) using the gradient formula.',
      workingOut: 'm_{QM} = \\frac{4.5 - 0}{3 - 4} = \\frac{4.5}{-1} = -4.5',
      graphData: null
    },
    {
      explanation: 'Find the gradient of the interval \\(PN\\) in the same way.',
      workingOut: 'm_{PN} = \\frac{3 - (-1.5)}{6 - 7} = \\frac{4.5}{-1} = -4.5',
      graphData: null
    },
    {
      explanation: 'The gradients of the two intervals are \\(-4.5\\) and \\(-4.5\\) respectively.',
      workingOut: '-4.5 \\text{ and } -4.5',
      graphData: null
    }
  ], 'Find the coordinates of each point and apply the gradient formula.');

  // 9g
  // We need to keep graphData inside solution steps for 9g.
  // Wait, I will just fetch it first.
  const doc9g = await db.collection('questions').doc('y9-11g-q9g').get();
  let solutionGraphData = null;
  if (doc9g.exists) {
    const data = doc9g.data();
    solutionGraphData = data.solutionSteps[2]?.graphData || null;
  }

  updateQ('y9-11g-q9g', [
    {
      explanation: 'In the quadrilateral \\(MNPQ\\), check if the opposite pair of sides \\(MN\\) and \\(PQ\\) are parallel.',
      workingOut: 'm_{MN} = m_{PQ} = -0.5 \\implies MN \\parallel PQ',
      graphData: null
    },
    {
      explanation: 'Check if the other pair of opposite sides \\(QM\\) and \\(PN\\) are parallel.',
      workingOut: 'm_{QM} = m_{PN} = -4.5 \\implies QM \\parallel PN',
      graphData: null
    },
    {
      explanation: 'Since both pairs of opposite sides are parallel respectively, it satisfies the definition of a parallelogram.',
      workingOut: '\\text{MNPQ is a parallelogram}',
      graphData: solutionGraphData
    },
    {
      explanation: 'Therefore, the correct answer is Parallelogram.',
      workingOut: '\\text{Parallelogram}',
      graphData: null
    }
  ], 'Check if both pairs of opposite sides are parallel respectively.');

  await batch.commit();

  // Update parent subQuestions array
  const subIds = ['y9-11g-q9a', 'y9-11g-q9b', 'y9-11g-q9c', 'y9-11g-q9d', 'y9-11g-q9e', 'y9-11g-q9f', 'y9-11g-q9g'];
  const subQuestions = [];
  for (const id of subIds) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      subQuestions.push({
        id: id,
        ...doc.data(),
      });
    }
  }
  
  await db.collection('questions').doc('y9-11g-q9').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated step-by-step solutions to English successfully.");
  process.exit(0);
}

run().catch(console.error);
