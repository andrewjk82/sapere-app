const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ── q9a data verification ──
  // 6|4 7 → 64,67 (2)
  // 7|1 2 3 4 7 → 71,72,73,74,77 (5)
  // 8|5 5 6 6 7 → 85,85,86,86,87 (5)
  // 9|2 2 2 4 4 5 5 5 6 6 8 8 → 92,92,92,94,94,95,95,95,96,96,98,98 (12)
  // n=24, median = avg of 12th & 13th = (87+92)/2 = 89.5
  // Sum = 131+367+429+1137 = 2064, Mean = 2064/24 = 86 ✓

  const dataContextQ9a = `Find the median and mean of the data represented in the stem-and-leaf plot below:

\`\`\`
6 | 4 7
7 | 1 2 3 4 7
8 | 5 5 6 6 7
9 | 2 2 2 4 4 5 5 5 6 6 8 8
\`\`\`

`;

  const stepsQ9a = [
    {
      explanation: 'Read all values from the stem-and-leaf plot. The stem is the tens digit and each leaf is a ones digit. Count the total number of values.',
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
      explanation: 'Since there are 24 values (even), the median is the average of the 12th and 13th values.',
      workingOut: [
        'Values 1–2: Row 6 → 2 counted',
        'Values 3–7: Row 7 → 7 counted',
        'Values 8–12: Row 8 → 12 counted',
        '12th value = \\(87\\)',
        '13th value = \\(92\\) (first leaf in Row 9)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the average of the 12th and 13th values.',
      workingOut: [
        '\\(\\text{Median} = \\frac{87 + 92}{2} = \\frac{179}{2} = 89.5\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the mean by summing all values row by row.',
      workingOut: [
        'Row 6: \\(64 + 67 = 131\\)',
        'Row 7: \\(71 + 72 + 73 + 74 + 77 = 367\\)',
        'Row 8: \\(85 + 85 + 86 + 86 + 87 = 429\\)',
        'Row 9: \\(92 \\times 3 + 94 \\times 2 + 95 \\times 3 + 96 \\times 2 + 98 \\times 2 = 1137\\)',
        'Total Sum \\(= 131 + 367 + 429 + 1137 = 2064\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Divide the total sum by 24.',
      workingOut: [
        '\\(\\text{Mean} = \\frac{2064}{24} = 86\\)',
        '\\(\\text{Median} = 89.5, \\quad \\text{Mean} = 86\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-19a-q9a').update({
    type: 'multiple_choice',
    question: dataContextQ9a + 'a) Find the median and mean.',
    options: [
      { text: 'Median \\(= 86\\), Mean \\(= 89.5\\)', imageUrl: '' },
      { text: 'Median \\(= 88\\), Mean \\(= 86\\)', imageUrl: '' },
      { text: 'Median \\(= 89.5\\), Mean \\(= 86\\)', imageUrl: '' }, // Correct → C
      { text: 'Median \\(= 89.5\\), Mean \\(= 87\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: stepsQ9a,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ── q9b data ──
  // 6|6 → 66 (1)
  // 7|6 8 → 76,78 (2)
  // 8|1 1 3 3 4 4 4 5 5 6 7 7 7 8 → 81,81,83,83,84,84,84,85,85,86,87,87,87,88 (14)
  // 9|0 0 1 1 2 8 8 → 90,90,91,91,92,98,98 (7)
  // n = 1+2+14+7 = 24
  // Median = avg of 12th and 13th values
  // 1+2 = 3 values from rows 6 & 7
  // Row 8: values 4..17 (14 values)
  //   4th: 81, 5th: 81, 6th: 83, 7th: 83, 8th: 84, 9th: 84, 10th: 84
  //   11th: 85, 12th: 85, 13th: 86, 14th: 87, 15th: 87, 16th: 87, 17th: 88
  // 12th = 85, 13th = 86
  // Median = (85+86)/2 = 85.5
  // But the stored answer says Median = 85... Let me recalculate
  // Actually wait: 1+2=3, then row 8:
  // value 4: 81, 5: 81, 6: 83, 7: 83, 8: 84, 9: 84, 10: 84, 11: 85, 12: 85
  // 12th = 85, 13th = 86
  // Median = (85+86)/2 = 85.5
  // Stored says 85. Let me recount leaves: 8|1 1 3 3 4 4 4 5 5 6 7 7 7 8 = 14 leaves ✓
  // n=24, so 12th and 13th. 3+14=17, so row 8 covers positions 4-17.
  // position 12 within the set = position 12-3=9th leaf in row 8 = 85
  // position 13 within the set = 13-3=10th leaf in row 8 = 86
  // Median = (85+86)/2 = 85.5
  // Sum:
  // Row 6: 66
  // Row 7: 76+78 = 154
  // Row 8: 81+81+83+83+84+84+84+85+85+86+87+87+87+88 = 
  //   81*2=162, 83*2=166, 84*3=252, 85*2=170, 86=86, 87*3=261, 88=88
  //   = 162+166+252+170+86+261+88 = 1185
  // Row 9: 90+90+91+91+92+98+98 = 180+182+92+196 = 650
  // Total = 66+154+1185+650 = 2055
  // Mean = 2055/24 = 85.625 ≈ 85.63 (2 d.p.)
  // Stored answer says Mean = 85.17. Let me re-examine.
  // Row 8: let me recount manually:
  // 81,81,83,83,84,84,84,85,85,86,87,87,87,88
  // 81+81=162
  // 83+83=166 → 328
  // 84+84+84=252 → 580
  // 85+85=170 → 750
  // 86 → 836
  // 87+87+87=261 → 1097
  // 88 → 1185 ✓
  // Row 9: 90+90+91+91+92+98+98
  // 90*2=180, 91*2=182, 92=92, 98*2=196
  // = 180+182+92+196 = 650 ✓
  // Total = 66+154+1185+650 = 2055
  // 2055/24 = 85.625 ≈ 85.63
  // The stored answer (85.17) seems wrong. I'll use the correct values.
  // Median = 85.5, Mean = 85.63

  const dataContextQ9b = `Find the median and mean of the data represented in the stem-and-leaf plot below:

\`\`\`
6 | 6
7 | 6 8
8 | 1 1 3 3 4 4 4 5 5 6 7 7 7 8
9 | 0 0 1 1 2 8 8
\`\`\`

`;

  const stepsQ9b = [
    {
      explanation: 'Read the values from the stem-and-leaf plot and count the total number of values.',
      workingOut: [
        'Row 6: 66 → 1 value',
        'Row 7: 76, 78 → 2 values',
        'Row 8: 81, 81, 83, 83, 84, 84, 84, 85, 85, 86, 87, 87, 87, 88 → 14 values',
        'Row 9: 90, 90, 91, 91, 92, 98, 98 → 7 values',
        'Total \\(n = 1 + 2 + 14 + 7 = 24\\) values'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Since there are 24 values (even), the median is the average of the 12th and 13th values. Count to find them.',
      workingOut: [
        'Values 1–3: Rows 6 & 7 → 3 counted',
        'The 12th value is the 9th leaf in Row 8 → \\(85\\)',
        'The 13th value is the 10th leaf in Row 8 → \\(86\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the average of the 12th and 13th values.',
      workingOut: [
        '\\(\\text{Median} = \\frac{85 + 86}{2} = \\frac{171}{2} = 85.5\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the mean by finding the sum of all values row by row.',
      workingOut: [
        'Row 6: \\(66\\)',
        'Row 7: \\(76 + 78 = 154\\)',
        'Row 8: \\(81 \\times 2 + 83 \\times 2 + 84 \\times 3 + 85 \\times 2 + 86 + 87 \\times 3 + 88 = 1185\\)',
        'Row 9: \\(90 \\times 2 + 91 \\times 2 + 92 + 98 \\times 2 = 650\\)',
        'Total Sum \\(= 66 + 154 + 1185 + 650 = 2055\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Divide the total sum by 24 and round to two decimal places.',
      workingOut: [
        '\\(\\text{Mean} = \\frac{2055}{24} = 85.625 \\approx 85.63\\)',
        '\\(\\text{Median} = 85.5, \\quad \\text{Mean} = 85.63\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-19a-q9b').update({
    type: 'multiple_choice',
    question: dataContextQ9b + 'b) Find the median and mean.',
    options: [
      { text: 'Median \\(= 85.5\\), Mean \\(= 85.63\\)', imageUrl: '' }, // Correct → A
      { text: 'Median \\(= 85\\), Mean \\(= 85.17\\)', imageUrl: '' },
      { text: 'Median \\(= 86\\), Mean \\(= 85.63\\)', imageUrl: '' },
      { text: 'Median \\(= 85.5\\), Mean \\(= 86\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: stepsQ9b,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y8-19a-q9a and q9b");
  process.exit(0);
}

run().catch(console.error);
