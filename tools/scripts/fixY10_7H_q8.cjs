const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y10-7h-q8a',
      opts: [
        { text: '\\( \\frac{32 - 2x}{4} \\)', imageUrl: '' },
        { text: '\\( \\frac{32 - 4x}{2} \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( 32 - 4x \\)', imageUrl: '' },
        { text: '\\( 16 - 4x \\)', imageUrl: '' }
      ],
      answer: '1',
      optsReordered: [
        { text: '\\( 32 - 4x \\)', imageUrl: '' },
        { text: '\\( \\frac{32 - 2x}{4} \\)', imageUrl: '' },
        { text: '\\( \\frac{32 - 4x}{2} \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( 16 - 4x \\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'The garden has a wooden border (a rectangle) and two dividers parallel to one pair of sides. This means there are 4 parallel wooden segments of length \\( x \\).',
          workingOut: 'Let \\( y \\) be the length of the other two sides (the top and bottom of the border).',
          graphData: null
        },
        {
          explanation: 'The total length of the timber is the sum of all these segments, which is 32 metres.',
          workingOut: '\\( 4x + 2y = 32 \\)',
          graphData: null
        },
        {
          explanation: 'We need to express the other side length, \\( y \\), in terms of \\( x \\). Rearrange the equation to solve for \\( y \\).',
          workingOut: [
            '\\( 2y = 32 - 4x \\)',
            '\\( y = \\frac{32 - 4x}{2} \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'This can also be simplified by dividing both terms in the numerator by 2.',
          workingOut: '\\( y = 16 - 2x \\)',
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q8b',
      opts: [
        { text: '\\( A = x(32 - 4x) \\)', imageUrl: '' },
        { text: '\\( A = x(16 - 2x) \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( A = 16x - 4x^2 \\)', imageUrl: '' },
        { text: '\\( A = 2x(16 - x) \\)', imageUrl: '' }
      ],
      answer: '1',
      optsReordered: [
        { text: '\\( A = x(16 - 2x) \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( A = x(32 - 4x) \\)', imageUrl: '' },
        { text: '\\( A = 16x - 4x^2 \\)', imageUrl: '' },
        { text: '\\( A = 2x(16 - x) \\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'The area \\( A \\) of a rectangle is found by multiplying its length and width.',
          workingOut: '\\( A = \\text{length} \\times \\text{width} \\)',
          graphData: null
        },
        {
          explanation: 'From part (a), the dimensions of the garden are \\( x \\) and \\( \\frac{32 - 4x}{2} \\) (which simplifies to \\( 16 - 2x \\)).',
          workingOut: [
            'Length = \\( 16 - 2x \\)',
            'Width = \\( x \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Substitute these expressions into the area formula.',
          workingOut: [
            '\\( A = x(16 - 2x) \\)',
            'or \\( A = 16x - 2x^2 \\)'
          ].join('\n'),
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q8c',
      opts: [
        { text: '\\( 8 \\text{ m and } 4 \\text{ m} \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( 16 \\text{ m and } 2 \\text{ m} \\)', imageUrl: '' },
        { text: '\\( 10 \\text{ m and } 3 \\text{ m} \\)', imageUrl: '' },
        { text: '\\( 6 \\text{ m and } 5 \\text{ m} \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( 16 \\text{ m and } 2 \\text{ m} \\)', imageUrl: '' },
        { text: '\\( 10 \\text{ m and } 3 \\text{ m} \\)', imageUrl: '' },
        { text: '\\( 6 \\text{ m and } 5 \\text{ m} \\)', imageUrl: '' },
        { text: '\\( 8 \\text{ m and } 4 \\text{ m} \\)', imageUrl: '' } // Correct -> 3
      ],
      steps: [
        {
          explanation: 'The area equation is \\( A = -2x^2 + 16x \\). This is a downward-opening parabola, meaning its highest point (vertex) represents the maximum area.',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'To find the value of \\( x \\) that gives the maximum area, find the \\( x \\)-coordinate of the vertex using the formula \\( x = -\\frac{b}{2a} \\).',
          workingOut: [
            'Here, \\( a = -2 \\) and \\( b = 16 \\).',
            '\\( x = -\\frac{16}{2(-2)} \\)',
            '\\( x = -\\frac{16}{-4} = 4 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'So, one dimension of the garden is \\( 4 \\) m. To find the other dimension, substitute \\( x = 4 \\) back into the expression we found in part (a).',
          workingOut: [
            'Other length = \\( 16 - 2x \\)',
            '\\( 16 - 2(4) \\)',
            '\\( 16 - 8 = 8 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Therefore, the dimensions that give the maximum area are 8 m and 4 m.',
          workingOut: 'Dimensions: \\( 8 \\text{ m and } 4 \\text{ m} \\)',
          graphData: null
        }
      ]
    }
  ];

  for (const u of updates) {
    const finalAns = u.optsReordered === updates[0].optsReordered ? '2' : (u.id === 'y10-7h-q8b' ? '0' : '3');
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: u.optsReordered,
      answer: finalAns,
      solutionSteps: u.steps,
      graphData: FieldValue.delete(),
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions for q8
  const pRef = db.collection('questions').doc('y10-7h-q8');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        const finalAns = u.optsReordered === updates[0].optsReordered ? '2' : (u.id === 'y10-7h-q8b' ? '0' : '3');
        const { graphData, requiresManualGrading, ...rest } = sq;
        return {
          ...rest,
          type: 'multiple_choice',
          options: u.optsReordered,
          answer: finalAns,
          solutionSteps: u.steps
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q8a, q8b, q8c");
  process.exit(0);
}

run().catch(console.error);
