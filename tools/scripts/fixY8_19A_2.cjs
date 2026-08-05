const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const dataContext = `The weights of a group of students, in kilograms, are given below:

\\(53, 52, 51, 52, 48, 47, 51, 47, 55, 52, 48, 49\\)

`;

  // ─── q2a: Median ───
  // Options: A) 50.5, B) 51.5, C) 51, D) 52. Correct: C (index 2)
  const q2a = {
    id: 'y8-19a-q2a',
    type: 'multiple_choice',
    question: dataContext + 'a) What is the median?',
    options: [
      { text: '\\(50.5\\)', imageUrl: '' },
      { text: '\\(51.5\\)', imageUrl: '' },
      { text: '\\(51\\)', imageUrl: '' }, // Correct
      { text: '\\(52\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'To find the median, the most important first step is to arrange all the numbers in ascending order (from smallest to largest). If you skip this, your answer will be wrong!',
        workingOut: 'Given data: \\(53, 52, 51, 52, 48, 47, 51, 47, 55, 52, 48, 49\\)',
        graphData: null
      },
      {
        explanation: 'Sort the numbers in ascending order.',
        workingOut: 'Sorted: \\(47, 47, 48, 48, 49, 51, 51, 52, 52, 52, 53, 55\\)',
        graphData: null
      },
      {
        explanation: 'Count the total number of data points. There are 12 numbers. Since 12 is an even number, there is no single middle number. We must take the average of the two middle numbers.',
        workingOut: [
          'Total \\(n = 12\\).',
          'The middle numbers are in positions \\(12 \\div 2 = 6\\) and \\(6 + 1 = 7\\).',
          'So we need the 6th and 7th values.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Identify the 6th and 7th values from the sorted list.',
        workingOut: [
          'The 6th value is 51.',
          'The 7th value is also 51.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Calculate the average of these two values.',
        workingOut: [
          '\\(\\text{Median} = \\frac{51 + 51}{2}\\)',
          '\\(\\text{Median} = \\frac{102}{2} = 51\\)'
        ].join('\n'),
        graphData: null
      }
    ]
  };

  // ─── q2b: Mean ───
  // Mean: 50.4166... -> 50.42
  // Options: A) 50.42, B) 50.41, C) 50.50, D) 50.43. Correct: A (index 0)
  // Let's shuffle so it's D (index 3)
  const q2b = {
    id: 'y8-19a-q2b',
    type: 'multiple_choice',
    question: dataContext + 'b) Calculate the mean, correct to two decimal places.',
    options: [
      { text: '\\(50.41\\)', imageUrl: '' },
      { text: '\\(50.43\\)', imageUrl: '' },
      { text: '\\(50.50\\)', imageUrl: '' },
      { text: '\\(50.42\\)', imageUrl: '' } // Correct
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'The mean is the average of all the numbers. To find it, we add all the values together and then divide by the total number of values.',
        workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Total count}}\\)',
        graphData: null
      },
      {
        explanation: 'First, let\'s calculate the sum of all 12 weights.',
        workingOut: [
          '\\(53+52+51+52+48+47+51+47+55+52+48+49\\)',
          '\\text{Sum } = 605'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Now, divide the total sum by the number of students (12).',
        workingOut: '\\(\\text{Mean} = \\frac{605}{12} = 50.416666...\\)',
        graphData: null
      },
      {
        explanation: 'The question asks to round the answer correct to two decimal places. Look at the third decimal digit (6). Since it is 5 or greater, we round up the second digit.',
        workingOut: [
          '\\(50.416... \\rightarrow 50.42\\)',
          '\\(\\text{Final Answer: } 50.42\\)'
        ].join('\n'),
        graphData: null
      }
    ]
  };

  for (const q of [q2a, q2b]) {
    await db.collection('questions').doc(q.id).update({
      type: q.type,
      question: q.question,
      options: q.options,
      answer: q.answer,
      solutionSteps: q.solutionSteps,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  const parentRef = db.collection('questions').doc('y8-19a-q2');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q2a') return { ...sq, type: q2a.type, question: q2a.question, options: q2a.options, answer: q2a.answer, solutionSteps: q2a.solutionSteps };
      if (sq.id === 'y8-19a-q2b') return { ...sq, type: q2b.type, question: q2b.question, options: q2b.options, answer: q2b.answer, solutionSteps: q2b.solutionSteps };
      return sq;
    });

    await parentRef.update({
      type: 'multiple_choice',
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  console.log("Updated y8-19a-q2 and subquestions");
  process.exit(0);
}

run().catch(console.error);
