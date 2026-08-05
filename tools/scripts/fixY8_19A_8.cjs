const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Data: 8.5, 3.2, 6.2, 20.2, 3.4, 42.3, 12.3, 28.6, 10.0, 3.3, 29.4, 4.2, 4.6
  // Sorted: 3.2, 3.3, 3.4, 4.2, 4.6, 6.2, 8.5, 10.0, 12.3, 20.2, 28.6, 29.4, 42.3
  // n = 13 (odd), median = 7th value = 8.5
  // Sum = 3.2+3.3+3.4+4.2+4.6+6.2+8.5+10.0+12.3+20.2+28.6+29.4+42.3 = 176.2
  // Mean = 176.2 / 13 = 13.553... wait let me re-check
  // 3.2+3.3=6.5, +3.4=9.9, +4.2=14.1, +4.6=18.7, +6.2=24.9, +8.5=33.4, +10.0=43.4,
  // +12.3=55.7, +20.2=75.9, +28.6=104.5, +29.4=133.9, +42.3=176.2
  // Mean = 176.2/13 = 13.5538... ≈ 13.55
  // But the parent says answer is 12.78... let me re-add carefully
  // 8.5+3.2=11.7, +6.2=17.9, +20.2=38.1, +3.4=41.5, +42.3=83.8, +12.3=96.1,
  // +28.6=124.7, +10.0=134.7, +3.3=138.0, +29.4=167.4, +4.2=171.6, +4.6=176.2
  // 176.2/13 = 13.5538...
  // Hmm, the parent says 12.78. Let me recheck.
  // Actually wait: 176.2 / 13 = 13.55... but parent says 12.78. 
  // Maybe there are 13 values with different data? 
  // Actually: 8.5+3.2+6.2+20.2+3.4+42.3+12.3+28.6+10.0+3.3+29.4+4.2+4.6
  // Let me recount step by step:
  // 8.5, 3.2 → 11.7
  // +6.2 → 17.9
  // +20.2 → 38.1
  // +3.4 → 41.5
  // +42.3 → 83.8
  // +12.3 → 96.1
  // +28.6 → 124.7
  // +10.0 → 134.7
  // +3.3 → 138.0
  // +29.4 → 167.4
  // +4.2 → 171.6
  // +4.6 → 176.2
  // 176.2 / 13 = 13.5538...
  // The parent answer (12.78) seems wrong. Let me use the correct value 13.55.
  // Actually wait - maybe the parent data includes a different set. Let me trust the math:
  // Mean = 176.2 / 13 ≈ 13.55

  const dataContext = `The following list gives the area in hectares of each of the suburbs of a city:

\\(8.5, 3.2, 6.2, 20.2, 3.4, 42.3, 12.3, 28.6, 10.0, 3.3, 29.4, 4.2, 4.6\\)

`;

  // ─── q8a: Median = 8.5. Answer: B (index 1) ───
  const q8aSteps = [
    {
      explanation: 'To find the median, the first step is ALWAYS to sort the data in ascending order (smallest to largest).',
      workingOut: [
        'Original: 8.5, 3.2, 6.2, 20.2, 3.4, 42.3, 12.3, 28.6, 10.0, 3.3, 29.4, 4.2, 4.6',
        'Sorted: 3.2, 3.3, 3.4, 4.2, 4.6, 6.2, 8.5, 10.0, 12.3, 20.2, 28.6, 29.4, 42.3'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Count the total number of values.',
      workingOut: '\\(n = 13\\) (an odd number)',
      graphData: null
    },
    {
      explanation: 'Since there are 13 values (an odd number), the median is the single middle value. Find its position using the formula:',
      workingOut: [
        '\\(\\text{Position} = \\frac{n + 1}{2} = \\frac{13 + 1}{2} = 7\\)',
        'The median is the 7th value.'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Count to the 7th value in the sorted list.',
      workingOut: [
        '1st: 3.2, 2nd: 3.3, 3rd: 3.4, 4th: 4.2, 5th: 4.6, 6th: 6.2, 7th: **8.5**'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'The 7th value is 8.5.',
      workingOut: '\\(\\text{Median} = 8.5 \\text{ hectares}\\)',
      graphData: null
    }
  ];

  const q8aText = dataContext + 'a) Find the median area in hectares.';
  await db.collection('questions').doc('y8-19a-q8a').update({
    type: 'multiple_choice',
    question: q8aText,
    options: [
      { text: '\\(6.2\\)', imageUrl: '' },
      { text: '\\(8.5\\)', imageUrl: '' }, // Correct
      { text: '\\(10.0\\)', imageUrl: '' },
      { text: '\\(9.25\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: q8aSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q8b: Mean = 176.2/13 ≈ 13.55. Answer: D (index 3) ───
  const q8bSteps = [
    {
      explanation: 'To find the mean, add up all the areas and divide by the total number of suburbs (13).',
      workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all areas}}{13}\\)',
      graphData: null
    },
    {
      explanation: 'Add all 13 values together, step by step.',
      workingOut: [
        '\\(8.5 + 3.2 + 6.2 + 20.2 + 3.4 + 42.3 + 12.3 + 28.6 + 10.0 + 3.3 + 29.4 + 4.2 + 4.6\\)',
        '\\(= 176.2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Divide the total sum by 13.',
      workingOut: '\\(\\text{Mean} = \\frac{176.2}{13} = 13.553...\\)',
      graphData: null
    },
    {
      explanation: 'Round to two decimal places. The third decimal digit is 3 (< 5), so we round down.',
      workingOut: [
        '\\(13.553... \\approx 13.55\\)',
        '\\(\\text{Final Answer: } 13.55 \\text{ hectares}\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const q8bText = dataContext + 'b) Find the mean area in hectares (correct to two decimal places).';
  await db.collection('questions').doc('y8-19a-q8b').update({
    type: 'multiple_choice',
    question: q8bText,
    options: [
      { text: '\\(12.78\\)', imageUrl: '' },
      { text: '\\(14.32\\)', imageUrl: '' },
      { text: '\\(13.50\\)', imageUrl: '' },
      { text: '\\(13.55\\)', imageUrl: '' } // Correct
    ],
    answer: '3',
    solutionSteps: q8bSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q8c: Teacher review - median is better ───
  const sampleAnswer = 'The median (8.5 hectares) is a better measure of centre for this data set. The mean (13.55 hectares) is skewed upwards by a few very large suburbs (such as 42.3 and 29.4 hectares), which act as outliers and pull the average higher than what is typical.';

  const q8cSteps = [
    {
      explanation: 'Let\'s compare the two measures of centre we calculated.',
      workingOut: [
        '\\(\\text{Median} = 8.5 \\text{ ha}\\)',
        '\\(\\text{Mean} = 13.55 \\text{ ha}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Look at the sorted data. Most suburbs have small areas — the majority are between 3.2 and 12.3 hectares. However, two suburbs are unusually large: 42.3 ha and 29.4 ha. These are called **outliers**.',
      workingOut: 'Outliers: \\(42.3 \\text{ ha}\\) and \\(29.4 \\text{ ha}\\)',
      graphData: null
    },
    {
      explanation: 'These large outliers pull the mean significantly upwards (from a "typical" value of ~8.5 ha all the way up to 13.55 ha). The median, however, is not affected by how extreme the outliers are — it only depends on the middle position.',
      workingOut: [
        'The mean is skewed upward by the outliers.',
        'The median remains a representative "typical" value.'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Therefore, the median (8.5 ha) better represents the "typical" suburb size in this city, while the mean gives a misleadingly high value due to the outliers.',
      workingOut: '\\(\\text{Median is the better measure of centre.}\\)',
      graphData: null
    }
  ];

  const q8cText = dataContext + 'c) Which is a better measure of centre for this data set? Explain your answer.';
  await db.collection('questions').doc('y8-19a-q8c').update({
    type: 'teacher_review',
    question: q8cText,
    options: [],
    answer: sampleAnswer,
    solution: sampleAnswer,
    solutionSteps: q8cSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions array
  const parentRef = db.collection('questions').doc('y8-19a-q8');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  await parentRef.update({ solutionSteps: [], solution: '', updatedAt: FieldValue.serverTimestamp() });

  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q8a') return { ...sq, question: 'a) Find the median area in hectares.', type: 'multiple_choice', options: [{text:'\\(6.2\\)',imageUrl:''},{text:'\\(8.5\\)',imageUrl:''},{text:'\\(10.0\\)',imageUrl:''},{text:'\\(9.25\\)',imageUrl:''}], answer: '1', solutionSteps: q8aSteps };
      if (sq.id === 'y8-19a-q8b') return { ...sq, question: 'b) Find the mean area in hectares (correct to two decimal places).', type: 'multiple_choice', options: [{text:'\\(12.78\\)',imageUrl:''},{text:'\\(14.32\\)',imageUrl:''},{text:'\\(13.50\\)',imageUrl:''},{text:'\\(13.55\\)',imageUrl:''}], answer: '3', solutionSteps: q8bSteps };
      if (sq.id === 'y8-19a-q8c') return { ...sq, question: 'c) Which is a better measure of centre for this data set? Explain your answer.', type: 'teacher_review', options: [], answer: sampleAnswer, solutionSteps: q8cSteps };
      return sq;
    });
    await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated y8-19a-q8a, q8b, q8c");
  process.exit(0);
}

run().catch(console.error);
