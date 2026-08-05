const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const dataContext = `For the stem-and-leaf plot shown below, answer the question.

\`\`\`
1 | 2 2 4 6 8
2 | 2 5
3 | 1 1 2 2 3 4 6
4 | 0 2 3 5 5 7
\`\`\`

`;

  // ─── q6a ───
  // Median = 32. Options: A) 31, B) 31.5, C) 32 (correct), D) 33
  // Let's make it index 2 (C).
  const q6aText = dataContext + 'a) Find the median.';
  await db.collection('questions').doc('y8-19a-q6a').update({
    type: 'multiple_choice',
    question: q6aText,
    options: [
      { text: '\\(31\\)', imageUrl: '' },
      { text: '\\(31.5\\)', imageUrl: '' },
      { text: '\\(32\\)', imageUrl: '' }, // Correct
      { text: '\\(33\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'A stem-and-leaf plot already shows the data ordered from smallest to largest! The "stem" represents the tens digit, and the "leaf" represents the ones digit.',
        workingOut: 'For example, `1 | 2` means 12, and `4 | 7` means 47.',
        graphData: null
      },
      {
        explanation: 'Count the total number of leaves to find out how many data points there are.',
        workingOut: [
          'Row 1: 5 leaves',
          'Row 2: 2 leaves',
          'Row 3: 7 leaves',
          'Row 4: 6 leaves',
          'Total \\(n = 5 + 2 + 7 + 6 = 20\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Since there are 20 data points (an even number), the median is the average of the 10th and 11th values.',
        workingOut: 'We need to find the 10th and 11th leaves by counting from the top.',
        graphData: null
      },
      {
        explanation: 'Count from the beginning (smallest values) until you reach the 10th and 11th positions.',
        workingOut: [
          'The first 7 values are in rows 1 and 2.',
          'Counting into row 3:',
          '8th: 31',
          '9th: 31',
          '10th: 32',
          '11th: 32'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Calculate the average of the 10th and 11th values to find the median.',
        workingOut: [
          '\\(\\text{Median} = \\frac{32 + 32}{2}\\)',
          '\\(\\text{Median} = 32\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });


  // ─── q6b ───
  // Mean = 610 / 20 = 30.5. Options: A) 30.5 (correct), B) 30, C) 31, D) 31.5
  // Let's make it index 0 (A).
  const q6bText = dataContext + 'b) Calculate the mean.';
  await db.collection('questions').doc('y8-19a-q6b').update({
    type: 'multiple_choice',
    question: q6bText,
    options: [
      { text: '\\(30.5\\)', imageUrl: '' }, // Correct
      { text: '\\(30\\)', imageUrl: '' },
      { text: '\\(31\\)', imageUrl: '' },
      { text: '\\(31.5\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'To find the mean, we must first add up all 20 values shown in the stem-and-leaf plot.',
        workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{20}\\)',
        graphData: null
      },
      {
        explanation: 'Let\'s calculate the sum of each row carefully.',
        workingOut: [
          'Row 1 (10s): \\(12 + 12 + 14 + 16 + 18 = 72\\)',
          'Row 2 (20s): \\(22 + 25 = 47\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Continue adding for the last two rows.',
        workingOut: [
          'Row 3 (30s): \\(31 + 31 + 32 + 32 + 33 + 34 + 36 = 229\\)',
          'Row 4 (40s): \\(40 + 42 + 43 + 45 + 45 + 47 = 262\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Add the row sums together to get the total sum.',
        workingOut: '\\text{Total Sum} = 72 + 47 + 229 + 262 = 610',
        graphData: null
      },
      {
        explanation: 'Finally, divide the total sum (610) by the number of values (20) to find the mean.',
        workingOut: [
          '\\(\\text{Mean} = \\frac{610}{20}\\)',
          '\\(\\text{Mean} = 30.5\\)',
          '\\(\\text{Final Answer: } 30.5\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // Clear redundant parent steps for y8-19a-q6 and remove context from subQuestions array
  await db.collection('questions').doc('y8-19a-q6').update({
    solutionSteps: [],
    solution: '',
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-19a-q6');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q6a') {
        return {
          ...sq,
          question: 'a) Find the median.', // Keep short for parent array
          type: 'multiple_choice',
          options: [
            { text: '\\(31\\)', imageUrl: '' },
            { text: '\\(31.5\\)', imageUrl: '' },
            { text: '\\(32\\)', imageUrl: '' },
            { text: '\\(33\\)', imageUrl: '' }
          ],
          answer: '2',
          solutionSteps: [] // No redundant steps needed here since top level has them
        };
      }
      if (sq.id === 'y8-19a-q6b') {
        return {
          ...sq,
          question: 'b) Calculate the mean.', // Keep short for parent array
          type: 'multiple_choice',
          options: [
            { text: '\\(30.5\\)', imageUrl: '' },
            { text: '\\(30\\)', imageUrl: '' },
            { text: '\\(31\\)', imageUrl: '' },
            { text: '\\(31.5\\)', imageUrl: '' }
          ],
          answer: '0',
          solutionSteps: []
        };
      }
      return sq;
    });

    await parentRef.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  console.log("Updated y8-19a-q6a and q6b");
  process.exit(0);
}

run().catch(console.error);
