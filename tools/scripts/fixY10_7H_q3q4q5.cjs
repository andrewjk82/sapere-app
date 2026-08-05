const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y10-7h-q3a',
      opts: [
        { text: '\\( y = (x + 2)(x - 5) \\)', imageUrl: '' },
        { text: '\\( y = -(x - 2)(x + 5) \\)', imageUrl: '' },
        { text: '\\( y = -(x + 2)(x - 5) \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( y = (x - 2)(x + 5) \\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        {
          explanation: 'Since we are given the \\( x \\)-intercepts, we can start with the **intercept form** of a parabola:\n\\[ y = a(x - x_1)(x - x_2) \\]',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'Substitute the given \\( x \\)-intercepts, \\(-2\\) and \\(5\\), into the equation. Remember that substituting a negative intercept changes the sign inside the bracket.',
          workingOut: [
            '\\( y = a(x - (-2))(x - 5) \\)',
            '\\( y = a(x + 2)(x - 5) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'To find the value of \\( a \\), use the other piece of information: the \\( y \\)-intercept is \\(10\\). This means the parabola passes through the point \\( (0, 10) \\). Substitute \\( x = 0 \\) and \\( y = 10 \\).',
          workingOut: [
            '\\( 10 = a(0 + 2)(0 - 5) \\)',
            '\\( 10 = a(2)(-5) \\)',
            '\\( 10 = -10a \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Solve for \\( a \\) and write the final equation.',
          workingOut: [
            '\\( a = \\frac{10}{-10} = -1 \\)',
            '\\( y = -1(x + 2)(x - 5) \\)',
            '\\( y = -(x + 2)(x - 5) \\)'
          ].join('\n'),
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q3b',
      opts: [
        { text: '\\( y = -2(x - 2)(x - 6) \\)', imageUrl: '' },
        { text: '\\( y = 2(x - 2)(x - 6) \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( y = 2(x + 2)(x + 6) \\)', imageUrl: '' },
        { text: '\\( y = \\frac{1}{2}(x - 2)(x - 6) \\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        {
          explanation: 'Since we are given the \\( x \\)-intercepts, we can start with the **intercept form** of a parabola:\n\\[ y = a(x - x_1)(x - x_2) \\]',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'Substitute the given \\( x \\)-intercepts, \\(2\\) and \\(6\\), into the equation.',
          workingOut: '\\( y = a(x - 2)(x - 6) \\)',
          graphData: null
        },
        {
          explanation: 'To find the value of \\( a \\), substitute the coordinates of the given point \\( (1, 10) \\) into the equation. Let \\( x = 1 \\) and \\( y = 10 \\).',
          workingOut: [
            '\\( 10 = a(1 - 2)(1 - 6) \\)',
            '\\( 10 = a(-1)(-5) \\)',
            '\\( 10 = 5a \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Solve for \\( a \\) and write the final equation.',
          workingOut: [
            '\\( a = \\frac{10}{5} = 2 \\)',
            '\\( y = 2(x - 2)(x - 6) \\)'
          ].join('\n'),
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q4a',
      opts: [
        { text: '\\( y = (x - 4)^2 - 3 \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( y = -(x - 4)^2 - 3 \\)', imageUrl: '' },
        { text: '\\( y = (x + 4)^2 - 3 \\)', imageUrl: '' },
        { text: '\\( y = (x - 4)^2 + 3 \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( y = -(x - 4)^2 - 3 \\)', imageUrl: '' },
        { text: '\\( y = (x + 4)^2 - 3 \\)', imageUrl: '' },
        { text: '\\( y = (x - 4)^2 + 3 \\)', imageUrl: '' },
        { text: '\\( y = (x - 4)^2 - 3 \\)', imageUrl: '' } // Correct -> 3
      ],
      steps: [
        {
          explanation: 'Since we are given the vertex, we can start with the **vertex form** of a parabola:\n\\[ y = a(x - h)^2 + k \\]',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'Substitute the vertex coordinates \\( (4, -3) \\) for \\( h \\) and \\( k \\). Remember the sign for \\( h \\) is opposite.',
          workingOut: '\\( y = a(x - 4)^2 - 3 \\)',
          graphData: null
        },
        {
          explanation: 'To find \\( a \\), we use the \\( y \\)-intercept, which is \\( 13 \\). This means the graph passes through the point \\( (0, 13) \\). Substitute \\( x = 0 \\) and \\( y = 13 \\).',
          workingOut: [
            '\\( 13 = a(0 - 4)^2 - 3 \\)',
            '\\( 13 = a(-4)^2 - 3 \\)',
            '\\( 13 = 16a - 3 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Solve for \\( a \\) and write the final equation.',
          workingOut: [
            '\\( 16 = 16a \\)',
            '\\( a = 1 \\)',
            '\\( y = 1(x - 4)^2 - 3 \\)',
            '\\( y = (x - 4)^2 - 3 \\)'
          ].join('\n'),
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q4b',
      opts: [
        { text: '\\( y = 2(x - 3)^2 + 6 \\)', imageUrl: '' },
        { text: '\\( y = -2(x - 3)^2 + 6 \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( y = -2(x + 3)^2 + 6 \\)', imageUrl: '' },
        { text: '\\( y = 2(x + 3)^2 + 6 \\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        {
          explanation: 'Since we are given the vertex, we can start with the **vertex form** of a parabola:\n\\[ y = a(x - h)^2 + k \\]',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'Substitute the vertex coordinates \\( (3, 6) \\) for \\( h \\) and \\( k \\).',
          workingOut: '\\( y = a(x - 3)^2 + 6 \\)',
          graphData: null
        },
        {
          explanation: 'To find \\( a \\), substitute the coordinates of the given point \\( (1, -2) \\) into the equation. Let \\( x = 1 \\) and \\( y = -2 \\).',
          workingOut: [
            '\\( -2 = a(1 - 3)^2 + 6 \\)',
            '\\( -2 = a(-2)^2 + 6 \\)',
            '\\( -2 = 4a + 6 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Solve for \\( a \\) and write the final equation.',
          workingOut: [
            '\\( -8 = 4a \\)',
            '\\( a = -2 \\)',
            '\\( y = -2(x - 3)^2 + 6 \\)'
          ].join('\n'),
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q5a',
      opts: [
        { text: '\\( y = \\frac{1}{2}(x - 3)^2 \\)', imageUrl: '' },
        { text: '\\( y = 2(x + 3)^2 \\)', imageUrl: '' },
        { text: '\\( y = 2(x - 3)^2 + 3 \\)', imageUrl: '' },
        { text: '\\( y = 2(x - 3)^2 \\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      optsReordered: [
        { text: '\\( y = 2(x - 3)^2 \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( y = \\frac{1}{2}(x - 3)^2 \\)', imageUrl: '' },
        { text: '\\( y = 2(x + 3)^2 \\)', imageUrl: '' },
        { text: '\\( y = 2(x - 3)^2 + 3 \\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'We start with the basic parabola \\( y = x^2 \\). Let\'s apply the transformations one by one.',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'A **stretch by a factor of 2** from the \\( x \\)-axis means we multiply the entire function by 2. This represents the \\( a \\) value in \\( y = ax^2 \\).',
          workingOut: '\\( y = 2x^2 \\)',
          graphData: null
        },
        {
          explanation: 'A **translation 3 units to the right** means we replace every \\( x \\) with \\( (x - 3) \\).',
          workingOut: '\\( y = 2(x - 3)^2 \\)',
          graphData: null
        },
        {
          explanation: 'This gives us the final equation of the translated and stretched parabola.',
          workingOut: '\\( y = 2(x - 3)^2 \\)',
          graphData: null
        }
      ]
    }
  ];

  for (const u of updates) {
    const finalOpts = u.optsReordered || u.opts;
    const finalAns = u.optsReordered ? (u.id === 'y10-7h-q4a' ? '3' : u.id === 'y10-7h-q5a' ? '0' : u.answer) : u.answer;
    
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: finalOpts,
      answer: finalAns,
      solutionSteps: u.steps,
      graphData: FieldValue.delete(),
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions
  const parentIds = ['y10-7h-q3', 'y10-7h-q4', 'y10-7h-q5'];
  for (const pId of parentIds) {
    const pRef = db.collection('questions').doc(pId);
    const pSnap = await pRef.get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = pSnap.data().subQuestions.map(sq => {
        const u = updates.find(x => x.id === sq.id);
        if (u) {
          const finalOpts = u.optsReordered || u.opts;
          const finalAns = u.optsReordered ? (u.id === 'y10-7h-q4a' ? '3' : u.id === 'y10-7h-q5a' ? '0' : u.answer) : u.answer;
          const { graphData, requiresManualGrading, ...rest } = sq;
          return {
            ...rest,
            type: 'multiple_choice',
            options: finalOpts,
            answer: finalAns,
            solutionSteps: u.steps
          };
        }
        return sq;
      });
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated q3a, q3b, q4a, q4b, q5a");
  process.exit(0);
}

run().catch(console.error);
