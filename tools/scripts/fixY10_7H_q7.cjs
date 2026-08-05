const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y10-7h-q7a',
      opts: [
        { text: '\\( (-1, -8) \\)', imageUrl: '' },
        { text: '\\( (1, -8) \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( (1, -6) \\)', imageUrl: '' },
        { text: '\\( (-1, 0) \\)', imageUrl: '' }
      ],
      answer: '1',
      optsReordered: [
        { text: '\\( (1, -6) \\)', imageUrl: '' },
        { text: '\\( (-1, -8) \\)', imageUrl: '' },
        { text: '\\( (1, -8) \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( (-1, 0) \\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'To find the vertex of a parabola in standard form \\( y = ax^2 + bx + c \\), we can first find the \\( x \\)-coordinate using the formula \\( x = -\\frac{b}{2a} \\).',
          workingOut: [
            'Here, \\( a = 2 \\), \\( b = -4 \\), and \\( c = -6 \\).'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Substitute \\( a \\) and \\( b \\) into the formula to find the \\( x \\)-coordinate.',
          workingOut: [
            '\\( x = -\\frac{-4}{2(2)} \\)',
            '\\( x = \\frac{4}{4} = 1 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Now, substitute \\( x = 1 \\) back into the original equation to find the corresponding \\( y \\)-coordinate.',
          workingOut: [
            '\\( y = 2(1)^2 - 4(1) - 6 \\)',
            '\\( y = 2(1) - 4 - 6 \\)',
            '\\( y = 2 - 4 - 6 = -8 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Combine the \\( x \\) and \\( y \\) coordinates to write the final vertex point.',
          workingOut: 'Vertex: \\( (1, -8) \\)',
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q7b',
      opts: [
        { text: '\\( (1, 0) \\text{ and } (-3, 0) \\)', imageUrl: '' },
        { text: '\\( (-1, 0) \\text{ and } (-3, 0) \\)', imageUrl: '' },
        { text: '\\( (-1, 0) \\text{ and } (3, 0) \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( (1, 0) \\text{ and } (3, 0) \\)', imageUrl: '' }
      ],
      answer: '2',
      optsReordered: [
        { text: '\\( (-1, 0) \\text{ and } (3, 0) \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( (1, 0) \\text{ and } (-3, 0) \\)', imageUrl: '' },
        { text: '\\( (-1, 0) \\text{ and } (-3, 0) \\)', imageUrl: '' },
        { text: '\\( (1, 0) \\text{ and } (3, 0) \\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'To find the \\( x \\)-intercepts, we need to find where the graph crosses the x-axis. This happens when \\( y = 0 \\).',
          workingOut: '\\( 0 = 2x^2 - 4x - 6 \\)',
          graphData: null
        },
        {
          explanation: 'To make the equation easier to solve, we can divide every term by 2 (the common factor).',
          workingOut: '\\( 0 = x^2 - 2x - 3 \\)',
          graphData: null
        },
        {
          explanation: 'Factorise the quadratic expression by finding two numbers that multiply to \\(-3\\) and add to \\(-2\\).',
          workingOut: [
            '\\( 0 = (x - 3)(x + 1) \\)',
            '\\( x - 3 = 0 \\quad \\text{or} \\quad x + 1 = 0 \\)',
            '\\( x = 3 \\quad \\text{or} \\quad x = -1 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Write the \\( x \\)-intercepts as coordinate points.',
          workingOut: '\\( (-1, 0) \\text{ and } (3, 0) \\)',
          graphData: null
        }
      ]
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: u.optsReordered,
      answer: u.optsReordered === updates[0].optsReordered ? '2' : '0',
      solutionSteps: u.steps,
      graphData: FieldValue.delete(),
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions for q7
  const pRef = db.collection('questions').doc('y10-7h-q7');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        const { graphData, requiresManualGrading, ...rest } = sq;
        return {
          ...rest,
          type: 'multiple_choice',
          options: u.optsReordered,
          answer: u.optsReordered === updates[0].optsReordered ? '2' : '0',
          solutionSteps: u.steps
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q7a, q7b");
  process.exit(0);
}

run().catch(console.error);
