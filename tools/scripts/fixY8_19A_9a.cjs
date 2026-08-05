const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Data from stem-and-leaf:
  // 6 | 4 7       → 64, 67
  // 7 | 1 2 3 4 7 → 71, 72, 73, 74, 77
  // 8 | 5 5 6 6 7 → 85, 85, 86, 86, 87
  // 9 | 2 2 2 4 4 5 5 5 6 6 8 8 → 92,92,92,94,94,95,95,95,96,96,98,98
  // Total = 2+5+5+12 = 24 values
  // Sorted already in plot
  // Median: n=24, average of 12th and 13th values
  // Counting: 2+5=7 up to row 7, +5=12 up to row 8
  // 12th value: last in row 8 = 87
  // 13th value: first in row 9 = 92
  // Median = (87+92)/2 = 89.5 ✓
  // Sum = 64+67+71+72+73+74+77+85+85+86+86+87+92+92+92+94+94+95+95+95+96+96+98+98
  // Row 6: 64+67=131
  // Row 7: 71+72+73+74+77=367
  // Row 8: 85+85+86+86+87=429
  // Row 9: 92+92+92+94+94+95+95+95+96+96+98+98=1137
  // Total = 131+367+429+1137 = 2064
  // Mean = 2064/24 = 86 ✓

  // Since q9a asks for BOTH median AND mean, we'll have two options per answer
  // Correct: Median=89.5, Mean=86
  // Let's make it index 2 (C)

  const dataContext = `Find the median and mean of the data represented in the stem-and-leaf plot below:

\`\`\`
6 | 4 7
7 | 1 2 3 4 7
8 | 5 5 6 6 7
9 | 2 2 2 4 4 5 5 5 6 6 8 8
\`\`\`

`;

  const solutionSteps = [
    {
      explanation: 'First, read all values from the stem-and-leaf plot. The stem is the tens digit and each leaf is a ones digit. Count the total number of values.',
      workingOut: [
        'Row 6: 64, 67 → 2 values',
        'Row 7: 71, 72, 73, 74, 77 → 5 values',
        'Row 8: 85, 85, 86, 86, 87 → 5 values',
        'Row 9: 92, 92, 92, 94, 94, 95, 95, 95, 96, 96, 98, 98 → 12 values',
        'Total \\(n = 2 + 5 + 5 + 12 = 24\\) values'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Since there are 24 values (an even number), the median is the average of the 12th and 13th values. Count through the ordered data to find them.',
      workingOut: [
        'Values 1–2: Row 6 (64, 67) → 2 values counted',
        'Values 3–7: Row 7 (71, 72, 73, 74, 77) → 7 values counted',
        'Values 8–12: Row 8 (85, 85, 86, 86, 87) → 12 values counted',
        '12th value = \\(87\\)',
        'Value 13: First value in Row 9 = \\(92\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the average of the 12th and 13th values to find the median.',
      workingOut: [
        '\\(\\text{Median} = \\frac{87 + 92}{2}\\)',
        '\\(\\text{Median} = \\frac{179}{2} = 89.5\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Now calculate the mean. Add the values row by row, then divide by 24.',
      workingOut: [
        'Row 6 sum: \\(64 + 67 = 131\\)',
        'Row 7 sum: \\(71 + 72 + 73 + 74 + 77 = 367\\)',
        'Row 8 sum: \\(85 + 85 + 86 + 86 + 87 = 429\\)',
        'Row 9 sum: \\(92 \\times 3 + 94 \\times 2 + 95 \\times 3 + 96 \\times 2 + 98 \\times 2 = 276 + 188 + 285 + 192 + 196 = 1137\\)',
        'Total Sum \\(= 131 + 367 + 429 + 1137 = 2064\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Divide the total sum by the number of values.',
      workingOut: [
        '\\(\\text{Mean} = \\frac{2064}{24} = 86\\)',
        '\\(\\text{Final Answer: Median} = 89.5, \\text{ Mean} = 86\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-19a-q9a').update({
    type: 'multiple_choice',
    options: [
      { text: 'Median \\(= 86\\), Mean \\(= 89.5\\)', imageUrl: '' },
      { text: 'Median \\(= 88\\), Mean \\(= 86\\)', imageUrl: '' },
      { text: 'Median \\(= 89.5\\), Mean \\(= 86\\)', imageUrl: '' }, // Correct
      { text: 'Median \\(= 89.5\\), Mean \\(= 87\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y8-19a-q9a");
  process.exit(0);
}

run().catch(console.error);
