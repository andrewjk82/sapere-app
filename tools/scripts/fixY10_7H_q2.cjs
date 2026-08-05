const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getStepsA = (eq, a, b, c, halfB, halfBSq, k) => [
    {
      explanation: 'To express the equation in vertex form \\( y = a(x - h)^2 + k \\), we use a method called **completing the square**.',
      workingOut: eq,
      graphData: null
    },
    {
      explanation: `Take half of the coefficient of \\(x\\) (which is \\(${b}\\)), and square it:\n\\[ (\\frac{${b}}{2})^2 = (${halfB})^2 = ${halfBSq} \\]\nAdd and subtract this value inside the equation.`,
      workingOut: [
        `\\( y = (x^2 ${b > 0 ? '+' : ''}${b}x + ${halfBSq} - ${halfBSq}) + ${c} \\)`,
        `\\( y = (x^2 ${b > 0 ? '+' : ''}${b}x + ${halfBSq}) - ${halfBSq} + ${c} \\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Write the perfect square trinomial as a squared binomial, and simplify the constant terms at the end.',
      workingOut: `\\( y = (x ${halfB > 0 ? '+' : ''}${halfB})^2 ${k < 0 ? '-' : '+'}\\ ${Math.abs(k)} \\)`,
      graphData: null
    },
    {
      explanation: 'The equation is now in vertex form \\( y = (x - h)^2 + k \\). The vertex is the point \\( (h, k) \\). Remember that the sign of \\(h\\) is opposite to what is in the bracket.',
      workingOut: `Vertex: \\( (${-halfB}, ${k}) \\)`,
      graphData: null
    }
  ];

  const getStepsC = (eq, a, b, c, bFactored, halfB, halfBSq, k1, k) => [
    {
      explanation: 'To express the equation in vertex form \\( y = a(x - h)^2 + k \\), we use a method called **completing the square**. First, factor out the coefficient of \\(x^2\\) (which is \\(${a}\\)) from the first two terms.',
      workingOut: [
        eq,
        `\\( y = ${a}(x^2 + ${bFactored}x) + ${c} \\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: `Take half of the coefficient of \\(x\\) inside the bracket (which is \\(${bFactored}\\)), and square it:\n\\[ (\\frac{${bFactored}}{2})^2 = (${halfB})^2 = ${halfBSq} \\]\nAdd and subtract this value **inside** the brackets.`,
      workingOut: [
        `\\( y = ${a}(x^2 + ${bFactored}x + ${halfBSq} - ${halfBSq}) + ${c} \\)`,
        `\\( y = ${a}((x + ${halfB})^2 - ${halfBSq}) + ${c} \\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: `Multiply the \\(${a}\\) back into the subtracted term to bring it outside the brackets, then simplify the constants.`,
      workingOut: [
        `\\( y = ${a}(x + ${halfB})^2 - (${a} \\times ${halfBSq}) + ${c} \\)`,
        `\\( y = ${a}(x + ${halfB})^2 ${k1 < 0 ? '-' : '+'} ${Math.abs(k1)} + ${c} \\)`,
        `\\( y = ${a}(x + ${halfB})^2 ${k < 0 ? '-' : '+'} ${Math.abs(k)} \\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'The equation is now in vertex form \\( y = a(x - h)^2 + k \\). The vertex is the point \\( (h, k) \\). Remember that the sign of \\(h\\) is opposite to what is in the bracket.',
      workingOut: `Vertex: \\( (${-halfB}, ${k}) \\)`,
      graphData: null
    }
  ];

  const updates = [
    {
      id: 'y10-7h-q2a',
      opts: [
        { text: '\\( y = (x - 4)^2 - 11 \\), Vertex \\( (4, -11) \\)', imageUrl: '' },
        { text: '\\( y = (x + 8)^2 - 59 \\), Vertex \\( (-8, -59) \\)', imageUrl: '' },
        { text: '\\( y = (x + 4)^2 - 11 \\), Vertex \\( (-4, -11) \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( y = (x + 4)^2 + 11 \\), Vertex \\( (-4, 11) \\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getStepsA('\\( y = x^2 + 8x + 5 \\)', 1, 8, 5, 4, 16, -11)
    },
    {
      id: 'y10-7h-q2b',
      opts: [
        { text: '\\( y = (x - 3)^2 - 5 \\), Vertex \\( (3, -5) \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( y = (x + 3)^2 - 5 \\), Vertex \\( (-3, -5) \\)', imageUrl: '' },
        { text: '\\( y = (x - 3)^2 + 5 \\), Vertex \\( (3, 5) \\)', imageUrl: '' },
        { text: '\\( y = (x - 6)^2 - 32 \\), Vertex \\( (6, -32) \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( y = (x - 6)^2 - 32 \\), Vertex \\( (6, -32) \\)', imageUrl: '' },
        { text: '\\( y = (x + 3)^2 - 5 \\), Vertex \\( (-3, -5) \\)', imageUrl: '' },
        { text: '\\( y = (x - 3)^2 + 5 \\), Vertex \\( (3, 5) \\)', imageUrl: '' },
        { text: '\\( y = (x - 3)^2 - 5 \\), Vertex \\( (3, -5) \\)', imageUrl: '' } // Correct -> 3
      ],
      steps: getStepsA('\\( y = x^2 - 6x + 4 \\)', 1, -6, 4, -3, 9, -5)
    },
    {
      id: 'y10-7h-q2c',
      opts: [
        { text: '\\( y = 2(x + 2)^2 - 5 \\), Vertex \\( (-2, -5) \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( y = 2(x - 2)^2 - 5 \\), Vertex \\( (2, -5) \\)', imageUrl: '' },
        { text: '\\( y = 2(x + 4)^2 - 13 \\), Vertex \\( (-4, -13) \\)', imageUrl: '' },
        { text: '\\( y = 2(x + 2)^2 + 5 \\), Vertex \\( (-2, 5) \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( y = 2(x + 4)^2 - 13 \\), Vertex \\( (-4, -13) \\)', imageUrl: '' },
        { text: '\\( y = 2(x + 2)^2 - 5 \\), Vertex \\( (-2, -5) \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( y = 2(x - 2)^2 - 5 \\), Vertex \\( (2, -5) \\)', imageUrl: '' },
        { text: '\\( y = 2(x + 2)^2 + 5 \\), Vertex \\( (-2, 5) \\)', imageUrl: '' }
      ],
      steps: getStepsC('\\( y = 2x^2 + 8x + 3 \\)', 2, 8, 3, 4, 2, 4, -8, -5)
    },
    {
      id: 'y10-7h-q2d',
      opts: [
        { text: '\\( y = 3(x + 4)^2 - 27 \\), Vertex \\( (-4, -27) \\)', imageUrl: '' },
        { text: '\\( y = 3(x - 2)^2 - 7 \\), Vertex \\( (2, -7) \\)', imageUrl: '' },
        { text: '\\( y = 3(x + 2)^2 + 7 \\), Vertex \\( (-2, 7) \\)', imageUrl: '' },
        { text: '\\( y = 3(x + 2)^2 - 7 \\), Vertex \\( (-2, -7) \\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      optsReordered: [
        { text: '\\( y = 3(x + 2)^2 - 7 \\), Vertex \\( (-2, -7) \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( y = 3(x - 2)^2 - 7 \\), Vertex \\( (2, -7) \\)', imageUrl: '' },
        { text: '\\( y = 3(x + 4)^2 - 27 \\), Vertex \\( (-4, -27) \\)', imageUrl: '' },
        { text: '\\( y = 3(x + 2)^2 + 7 \\), Vertex \\( (-2, 7) \\)', imageUrl: '' }
      ],
      steps: getStepsC('\\( y = 3x^2 + 12x + 5 \\)', 3, 12, 5, 4, 2, 4, -12, -7)
    }
  ];

  for (const u of updates) {
    const finalOpts = u.optsReordered || u.opts;
    const finalAns = u.optsReordered ? (u.id === 'y10-7h-q2b' ? '3' : u.id === 'y10-7h-q2c' ? '1' : '0') : u.answer;
    
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

  // Update parent subQuestions for q2
  const pRef = db.collection('questions').doc('y10-7h-q2');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        const finalOpts = u.optsReordered || u.opts;
        const finalAns = u.optsReordered ? (u.id === 'y10-7h-q2b' ? '3' : u.id === 'y10-7h-q2c' ? '1' : '0') : u.answer;
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

  console.log("Updated q2a-q2d: removed root graphs, updated options & steps");
  process.exit(0);
}

run().catch(console.error);
