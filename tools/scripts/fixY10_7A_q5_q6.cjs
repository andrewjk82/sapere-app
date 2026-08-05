const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getHorizontalStep = (direction, units, varName = 'x', isNegativeA = false) => {
    let eq = isNegativeA ? 'y = -x^2' : 'y = x^2';
    let newTerm = direction === 'right' ? `(${varName} - ${units})` : `(${varName} + ${units})`;
    let newEq = isNegativeA ? `y = -${newTerm}^2` : `y = ${newTerm}^2`;
    let rule = direction === 'right' ? `subtract ${units} from ${varName}` : `add ${units} to ${varName}`;
    return {
      explanation: `A translation of **${units} units to the ${direction}** is a horizontal shift. We replace \\(${varName}\\) with \\(${newTerm}\\) (we ${rule} inside the squared term).`,
      workingOut: `\\(${eq}\\) becomes \\(${newEq}\\)`,
      graphData: null
    };
  };

  const getVerticalStep = (direction, units, currentEq) => {
    let sign = direction === 'up' ? '+' : '-';
    let newEq = `${currentEq} ${sign} ${units}`;
    let rule = direction === 'up' ? `add ${units} to` : `subtract ${units} from`;
    return {
      explanation: `A translation of **${units} units ${direction}** is a vertical shift. We ${rule} the entire function.`,
      workingOut: `\\(${currentEq}\\) becomes \\(${newEq}\\)`,
      graphData: null
    };
  };

  const updates = [
    {
      id: 'y10-7a-q5a',
      opts: [
        { text: '\\(y = -(x + 3)^2\\)', imageUrl: '' },
        { text: '\\(y = -x^2 + 3\\)', imageUrl: '' },
        { text: '\\(y = -(x - 3)^2\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(y = -x^2 - 3\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        {
          explanation: 'The basic parabola is \\(y = -x^2\\). We need to apply a horizontal translation.',
          workingOut: '', graphData: null
        },
        getHorizontalStep('right', '3', 'x', true),
        {
          explanation: 'Therefore, the new equation is:',
          workingOut: '\\(y = -(x - 3)^2\\)', graphData: null
        }
      ]
    },
    {
      id: 'y10-7a-q5b',
      opts: [
        { text: '\\(y = -(x + b)^2\\)', imageUrl: '' }, // Correct -> 0 (Change to 3)
        { text: '\\(y = -x^2 + b\\)', imageUrl: '' },
        { text: '\\(y = -(x - b)^2\\)', imageUrl: '' },
        { text: '\\(y = -x^2 - b\\)', imageUrl: '' }
      ],
      answer: '3',
      optsReordered: [
        { text: '\\(y = -x^2 - b\\)', imageUrl: '' },
        { text: '\\(y = -x^2 + b\\)', imageUrl: '' },
        { text: '\\(y = -(x - b)^2\\)', imageUrl: '' },
        { text: '\\(y = -(x + b)^2\\)', imageUrl: '' } // Correct
      ],
      steps: [
        {
          explanation: 'The basic parabola is \\(y = -x^2\\). We need to apply a horizontal translation.',
          workingOut: '', graphData: null
        },
        getHorizontalStep('left', 'b', 'x', true),
        {
          explanation: 'Therefore, the new equation is:',
          workingOut: '\\(y = -(x + b)^2\\)', graphData: null
        }
      ]
    },
    {
      id: 'y10-7a-q5c',
      opts: [
        { text: '\\(y = -(x - 6)^2\\)', imageUrl: '' },
        { text: '\\(y = -x^2 - 6\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(y = -x^2 + 6\\)', imageUrl: '' },
        { text: '\\(y = -(x + 6)^2\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        {
          explanation: 'The basic parabola is \\(y = -x^2\\). We need to apply a vertical translation.',
          workingOut: '', graphData: null
        },
        getVerticalStep('down', '6', 'y = -x^2'),
        {
          explanation: 'Therefore, the new equation is:',
          workingOut: '\\(y = -x^2 - 6\\)', graphData: null
        }
      ]
    },
    {
      id: 'y10-7a-q5d',
      opts: [
        { text: '\\(y = -(x - c)^2\\)', imageUrl: '' },
        { text: '\\(y = -(x + c)^2\\)', imageUrl: '' },
        { text: '\\(y = -x^2 - c\\)', imageUrl: '' },
        { text: '\\(y = -x^2 + c\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: [
        {
          explanation: 'The basic parabola is \\(y = -x^2\\). We need to apply a vertical translation.',
          workingOut: '', graphData: null
        },
        getVerticalStep('up', 'c', 'y = -x^2'),
        {
          explanation: 'Therefore, the new equation is:',
          workingOut: '\\(y = -x^2 + c\\)', graphData: null
        }
      ]
    },
    {
      id: 'y10-7a-q6a',
      opts: [
        { text: '\\(y = (x - 4)^2 + 3\\)', imageUrl: '' },
        { text: '\\(y = (x + 4)^2 - 3\\)', imageUrl: '' },
        { text: '\\(y = (x + 4)^2 + 3\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(y = (x - 4)^2 - 3\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        {
          explanation: 'The basic parabola is \\(y = x^2\\). We need to apply two translations.',
          workingOut: '', graphData: null
        },
        getHorizontalStep('left', '4', 'x', false),
        getVerticalStep('up', '3', 'y = (x + 4)^2'),
        {
          explanation: 'Combining both translations gives the final equation:',
          workingOut: '\\(y = (x + 4)^2 + 3\\)', graphData: null
        }
      ]
    },
    {
      id: 'y10-7a-q6b',
      opts: [
        { text: '\\(y = (x - 6)^2 - 5\\)', imageUrl: '' }, // Correct -> 0 (Change to 1)
        { text: '\\(y = (x + 6)^2 - 5\\)', imageUrl: '' },
        { text: '\\(y = (x - 6)^2 + 5\\)', imageUrl: '' },
        { text: '\\(y = (x + 6)^2 + 5\\)', imageUrl: '' }
      ],
      answer: '1',
      optsReordered: [
        { text: '\\(y = (x + 6)^2 - 5\\)', imageUrl: '' },
        { text: '\\(y = (x - 6)^2 - 5\\)', imageUrl: '' }, // Correct
        { text: '\\(y = (x - 6)^2 + 5\\)', imageUrl: '' },
        { text: '\\(y = (x + 6)^2 + 5\\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'The basic parabola is \\(y = x^2\\). We need to apply two translations.',
          workingOut: '', graphData: null
        },
        getHorizontalStep('right', '6', 'x', false),
        getVerticalStep('down', '5', 'y = (x - 6)^2'),
        {
          explanation: 'Combining both translations gives the final equation:',
          workingOut: '\\(y = (x - 6)^2 - 5\\)', graphData: null
        }
      ]
    },
    {
      id: 'y10-7a-q6c',
      opts: [
        { text: '\\(y = (x + a)^2 + b\\)', imageUrl: '' },
        { text: '\\(y = (x - a)^2 - b\\)', imageUrl: '' },
        { text: '\\(y = (x + a)^2 - b\\)', imageUrl: '' },
        { text: '\\(y = (x - a)^2 + b\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: [
        {
          explanation: 'The basic parabola is \\(y = x^2\\). We need to apply two translations involving variables \\(a\\) and \\(b\\).',
          workingOut: '', graphData: null
        },
        getHorizontalStep('right', 'a', 'x', false),
        getVerticalStep('up', 'b', 'y = (x - a)^2'),
        {
          explanation: 'Combining both translations gives the final equation:',
          workingOut: '\\(y = (x - a)^2 + b\\)', graphData: null
        }
      ]
    },
    {
      id: 'y10-7a-q6d',
      opts: [
        { text: '\\(y = (x - d)^2 - c\\)', imageUrl: '' },
        { text: '\\(y = (x + d)^2 - c\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(y = (x + d)^2 + c\\)', imageUrl: '' },
        { text: '\\(y = (x - d)^2 + c\\)', imageUrl: '' } 
      ],
      answer: '1',
      steps: [
        {
          explanation: 'The basic parabola is \\(y = x^2\\). We need to apply two translations involving variables \\(c\\) and \\(d\\).',
          workingOut: '', graphData: null
        },
        getHorizontalStep('left', 'd', 'x', false),
        getVerticalStep('down', 'c', 'y = (x + d)^2'),
        {
          explanation: 'Combining both translations gives the final equation:',
          workingOut: '\\(y = (x + d)^2 - c\\)', graphData: null
        }
      ]
    }
  ];

  for (const u of updates) {
    const finalOpts = u.optsReordered || u.opts;
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: finalOpts,
      answer: u.answer,
      solutionSteps: u.steps,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions for q5
  const pRef5 = db.collection('questions').doc('y10-7a-q5');
  const pSnap5 = await pRef5.get();
  if (pSnap5.exists && pSnap5.data().subQuestions) {
    const newSubQs = pSnap5.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          type: 'multiple_choice',
          options: u.optsReordered || u.opts,
          answer: u.answer,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef5.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  // Update parent subQuestions for q6
  const pRef6 = db.collection('questions').doc('y10-7a-q6');
  const pSnap6 = await pRef6.get();
  if (pSnap6.exists && pSnap6.data().subQuestions) {
    const newSubQs = pSnap6.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          type: 'multiple_choice',
          options: u.optsReordered || u.opts,
          answer: u.answer,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef6.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q5a-q5d, q6a-q6d");
  process.exit(0);
}

run().catch(console.error);
