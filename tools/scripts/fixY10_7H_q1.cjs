const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getSteps = (eq, substitutedEq, factorizationSteps, roots) => [
    {
      explanation: 'To find the \\( x \\)-intercepts, we need to find the points where the graph crosses the x-axis. At the x-axis, the value of \\( y \\) is always 0.',
      workingOut: 'Let \\( y = 0 \\)',
      graphData: null
    },
    {
      explanation: 'Substitute \\( y = 0 \\) into the given equation:',
      workingOut: substitutedEq,
      graphData: null
    },
    {
      explanation: 'Now, solve the equation for \\( x \\).',
      workingOut: factorizationSteps,
      graphData: null
    },
    {
      explanation: 'Write the \\( x \\)-intercepts as coordinate points. Since \\( y = 0 \\), the points are in the form \\( (x, 0) \\).',
      workingOut: roots,
      graphData: null
    }
  ];

  const updates = [
    {
      id: 'y10-7h-q1a',
      opts: [
        { text: '\\( (4, 0) \\text{ and } (1, 0) \\)', imageUrl: '' },
        { text: '\\( (-4, 0) \\text{ and } (-1, 0) \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( (-4, 0) \\text{ and } (1, 0) \\)', imageUrl: '' },
        { text: '\\( (4, 0) \\text{ and } (-1, 0) \\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps(
        '\\( y = x^2 + 5x + 4 \\)',
        '\\( 0 = x^2 + 5x + 4 \\)',
        [
          'Factorise the quadratic by finding two numbers that multiply to 4 and add to 5.',
          '\\( 0 = (x + 4)(x + 1) \\)',
          '\\( x + 4 = 0 \\quad \\text{or} \\quad x + 1 = 0 \\)',
          '\\( x = -4 \\quad \\text{or} \\quad x = -1 \\)'
        ].join('\n'),
        '\\( (-4, 0) \\text{ and } (-1, 0) \\)'
      )
    },
    {
      id: 'y10-7h-q1b',
      opts: [
        { text: '\\( (\\frac{2}{3}, 0) \\text{ and } (-4, 0) \\)', imageUrl: '' },
        { text: '\\( (-\\frac{2}{3}, 0) \\text{ and } (-4, 0) \\)', imageUrl: '' },
        { text: '\\( (\\frac{2}{3}, 0) \\text{ and } (4, 0) \\)', imageUrl: '' },
        { text: '\\( (-\\frac{2}{3}, 0) \\text{ and } (4, 0) \\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: getSteps(
        '\\( y = 3x^2 - 10x - 8 \\)',
        '\\( 0 = 3x^2 - 10x - 8 \\)',
        [
          'Factorise the non-monic quadratic using the cross method or splitting the middle term.',
          '\\( 0 = (3x + 2)(x - 4) \\)',
          '\\( 3x + 2 = 0 \\quad \\text{or} \\quad x - 4 = 0 \\)',
          '\\( 3x = -2 \\implies x = -\\frac{2}{3} \\)',
          '\\( x = 4 \\)'
        ].join('\n'),
        '\\( (-\\frac{2}{3}, 0) \\text{ and } (4, 0) \\)'
      )
    },
    {
      id: 'y10-7h-q1c',
      opts: [
        { text: '\\( (3, 0) \\text{ and } (7, 0) \\)', imageUrl: '' },
        { text: '\\( (-3, 0) \\text{ and } (-7, 0) \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( (-5, 0) \\text{ and } (-4, 0) \\)', imageUrl: '' },
        { text: '\\( (-3, 0) \\text{ and } (7, 0) \\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps(
        '\\( y = (x + 5)^2 - 4 \\)',
        '\\( 0 = (x + 5)^2 - 4 \\)',
        [
          'Rearrange the equation and solve for \\( x \\) by taking the square root of both sides.',
          '\\( (x + 5)^2 = 4 \\)',
          '\\( x + 5 = \\pm\\sqrt{4} \\)',
          '\\( x + 5 = \\pm 2 \\)',
          '\\( x = -5 \\pm 2 \\)',
          '\\( x = -5 + 2 = -3 \\quad \\text{or} \\quad x = -5 - 2 = -7 \\)'
        ].join('\n'),
        '\\( (-3, 0) \\text{ and } (-7, 0) \\)'
      )
    },
    {
      id: 'y10-7h-q1d',
      opts: [
        { text: '\\( (5, 0) \\text{ and } (1, 0) \\)', imageUrl: '' }, // Correct -> 0 (Change to 2)
        { text: '\\( (-5, 0) \\text{ and } (1, 0) \\)', imageUrl: '' },
        { text: '\\( (3, 0) \\text{ and } (8, 0) \\)', imageUrl: '' },
        { text: '\\( (-5, 0) \\text{ and } (-1, 0) \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( (-5, 0) \\text{ and } (1, 0) \\)', imageUrl: '' },
        { text: '\\( (-5, 0) \\text{ and } (-1, 0) \\)', imageUrl: '' },
        { text: '\\( (5, 0) \\text{ and } (1, 0) \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( (3, 0) \\text{ and } (8, 0) \\)', imageUrl: '' }
      ],
      steps: getSteps(
        '\\( y = 2(x - 3)^2 - 8 \\)',
        '\\( 0 = 2(x - 3)^2 - 8 \\)',
        [
          'Rearrange the equation and solve for \\( x \\) by taking the square root of both sides.',
          '\\( 2(x - 3)^2 = 8 \\)',
          '\\( (x - 3)^2 = 4 \\)',
          '\\( x - 3 = \\pm\\sqrt{4} \\)',
          '\\( x - 3 = \\pm 2 \\)',
          '\\( x = 3 \\pm 2 \\)',
          '\\( x = 3 + 2 = 5 \\quad \\text{or} \\quad x = 3 - 2 = 1 \\)'
        ].join('\n'),
        '\\( (5, 0) \\text{ and } (1, 0) \\)'
      )
    }
  ];

  for (const u of updates) {
    const finalOpts = u.optsReordered || u.opts;
    const finalAns = u.optsReordered ? '2' : u.answer;
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: finalOpts,
      answer: finalAns,
      solutionSteps: u.steps,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions for q1
  const pRef = db.collection('questions').doc('y10-7h-q1');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          type: 'multiple_choice',
          options: u.optsReordered || u.opts,
          answer: u.optsReordered ? '2' : u.answer,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q1a, q1b, q1c, q1d");
  process.exit(0);
}

run().catch(console.error);
