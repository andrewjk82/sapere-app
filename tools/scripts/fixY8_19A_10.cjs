const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Stem and leaf plot representations
  const stemPlotCorrect = `<pre style="font-size:14px; background:#f8fafc; padding:10px; border-radius:5px; margin:0; line-height: 1.5; font-family: monospace;">2 | 5 6 7 8 9 9
3 | 0 1 1 2 3 3 7 7 7 7 8 8
4 | 0 3
Key: 3 | 1 = 3.1 kg</pre>`;

  const stemPlotDistractor1 = `<pre style="font-size:14px; background:#f8fafc; padding:10px; border-radius:5px; margin:0; line-height: 1.5; font-family: monospace;">2 | 5 6 7 8 9 9
3 | 0 1 1 2 3 3 7 7 7 8 8
4 | 0 3
Key: 3 | 1 = 3.1 kg</pre>`; // Missed a 7

  const stemPlotDistractor2 = `<pre style="font-size:14px; background:#f8fafc; padding:10px; border-radius:5px; margin:0; line-height: 1.5; font-family: monospace;">2 | 5 6 7 8 9
3 | 1 1 2 3 3 7 7 7 7 8 8
4 | 0 3
Key: 3 | 1 = 3.1 kg</pre>`; // Missed a 9 and 0

  const stemPlotDistractor3 = `<pre style="font-size:14px; background:#f8fafc; padding:10px; border-radius:5px; margin:0; line-height: 1.5; font-family: monospace;">2 | 9 9 8 7 6 5
3 | 8 8 7 7 7 7 3 3 2 1 1 0
4 | 3 0
Key: 3 | 1 = 3.1 kg</pre>`; // Reversed order

  // Define the subquestions
  const q10a = {
    id: 'y8-19a-q10a',
    type: 'multiple_choice',
    question: 'a) Which of the following is the correct stem-and-leaf plot for the data?',
    options: [
      { text: stemPlotDistractor1, imageUrl: '' },
      { text: stemPlotDistractor2, imageUrl: '' },
      { text: stemPlotCorrect, imageUrl: '' }, // Correct index 2 (C)
      { text: stemPlotDistractor3, imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'A stem-and-leaf plot divides each data point into a "stem" (the first part of the number) and a "leaf" (the last digit). Here, the whole numbers (2, 3, 4) form the stem, and the tenths form the leaves.',
        workingOut: 'Stems: 2, 3, 4',
        graphData: null
      },
      {
        explanation: 'First, let\'s group the numbers by their stem. Let\'s find all the numbers that start with 2 (2.x) and list their leaves (tenths digit).',
        workingOut: [
          'Numbers starting with 2: 2.9, 2.9, 2.8, 2.6, 2.7, 2.5',
          'Sort them in ascending order: 2.5, 2.6, 2.7, 2.8, 2.9, 2.9',
          'Leaves for stem 2: 5, 6, 7, 8, 9, 9'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Next, group all the numbers starting with 3 (3.x) and list their leaves in ascending order.',
        workingOut: [
          'Numbers: 3.1, 3.7, 3.7, 3.8, 3.3, 3.7, 3.8, 3.2, 3.1, 3.7, 3.0, 3.3',
          'Sorted: 3.0, 3.1, 3.1, 3.2, 3.3, 3.3, 3.7, 3.7, 3.7, 3.7, 3.8, 3.8',
          'Leaves for stem 3: 0, 1, 1, 2, 3, 3, 7, 7, 7, 7, 8, 8'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Finally, group the numbers starting with 4 (4.x) and list their leaves.',
        workingOut: [
          'Numbers: 4.0, 4.3',
          'Sorted: 4.0, 4.3',
          'Leaves for stem 4: 0, 3'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Combine the stems and leaves into the final plot. Always include a key to explain what the plot means.',
        workingOut: 'See the correct plot in the answer.',
        graphData: { html: stemPlotCorrect }
      }
    ]
  };

  const q10b = {
    id: 'y8-19a-q10b',
    type: 'multiple_choice',
    question: 'b) Find the median birth weight.',
    options: [
      { text: '\\(3.2\\)', imageUrl: '' },
      { text: '\\(3.25\\)', imageUrl: '' }, // Correct index 1 (B)
      { text: '\\(3.3\\)', imageUrl: '' },
      { text: '\\(3.5\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'The median is the middle value when the data is ordered from smallest to largest. First, we count how many data points we have.',
        workingOut: 'Total number of data points \\(n = 20\\).',
        graphData: null
      },
      {
        explanation: 'Since 20 is an even number, there isn\'t a single middle number. Instead, the median is the average of the two middle numbers. The middle positions are \\(n \\div 2\\) and \\((n \\div 2) + 1\\).',
        workingOut: [
          'Middle positions: \\(20 \\div 2 = 10\\)',
          'So we need the 10th and 11th values.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Using the ordered stem-and-leaf plot from part a), count the leaves until you reach the 10th and 11th values.',
        workingOut: [
          'Stem 2 has 6 values.',
          'So we need the 4th and 5th values in Stem 3.',
          'Stem 3 leaves: 0, 1, 1, **2 (4th)**, **3 (5th)**...',
          '10th value = \\(3.2\\)',
          '11th value = \\(3.3\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Calculate the average of these two middle values.',
        workingOut: [
          '\\(\\text{Median} = \\frac{3.2 + 3.3}{2}\\)',
          '\\(\\text{Median} = \\frac{6.5}{2} = 3.25\\)'
        ].join('\n'),
        graphData: null
      }
    ]
  };

  const q10c = {
    id: 'y8-19a-q10c',
    type: 'multiple_choice',
    question: 'c) Find the mean birth weight.',
    options: [
      { text: '\\(3.35\\)', imageUrl: '' },
      { text: '\\(3.25\\)', imageUrl: '' },
      { text: '\\(3.30\\)', imageUrl: '' },
      { text: '\\(3.305\\)', imageUrl: '' } // Correct index 3 (D)
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'The mean (average) is calculated by adding all the values together and dividing by the total number of values.',
        workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Total count}}\\)',
        graphData: null
      },
      {
        explanation: 'First, let\'s calculate the sum of all 20 values. It\'s easier to sum them by their stems or rows.',
        workingOut: [
          'Sum of 2.x values: \\(2.5+2.6+2.7+2.8+2.9+2.9 = 16.4\\)',
          'Sum of 3.x values: \\(3.0+3.1+3.1+3.2+3.3+3.3+3.7+3.7+3.7+3.7+3.8+3.8 = 41.4\\)',
          'Sum of 4.x values: \\(4.0+4.3 = 8.3\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Add those group sums together to get the total sum.',
        workingOut: '\\text{Total sum} = 16.4 + 41.4 + 8.3 = 66.1',
        graphData: null
      },
      {
        explanation: 'Divide the total sum by the number of data points (20).',
        workingOut: [
          '\\(\\text{Mean} = \\frac{66.1}{20}\\)',
          '\\(\\text{Mean} = 3.305\\)'
        ].join('\n'),
        graphData: null
      }
    ]
  };

  // Update top-level documents
  for (const q of [q10a, q10b, q10c]) {
    await db.collection('questions').doc(q.id).update({
      type: q.type,
      question: q.question,
      options: q.options,
      answer: q.answer,
      solutionSteps: q.solutionSteps,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent document's subQuestions array
  const parentRef = db.collection('questions').doc('y8-19a-q10');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  const newSubQuestions = parentData.subQuestions.map(sq => {
    if (sq.id === 'y8-19a-q10a') return { ...sq, type: q10a.type, question: q10a.question, options: q10a.options, answer: q10a.answer, solutionSteps: q10a.solutionSteps };
    if (sq.id === 'y8-19a-q10b') return { ...sq, type: q10b.type, question: q10b.question, options: q10b.options, answer: q10b.answer, solutionSteps: q10b.solutionSteps };
    if (sq.id === 'y8-19a-q10c') return { ...sq, type: q10c.type, question: q10c.question, options: q10c.options, answer: q10c.answer, solutionSteps: q10c.solutionSteps };
    return sq;
  });

  await parentRef.update({
    type: 'multiple_choice',
    subQuestions: newSubQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y8-19a-q10 and subquestions");
  process.exit(0);
}

run().catch(console.error);
