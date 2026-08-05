const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Data from stem-and-leaf plot:
  // 8 | 6 7         → 86, 87
  // 9 | 1 1 1 2 3 4 5 7 7 → 91,91,91,92,93,94,95,97,97
  // 10| 0 2 3 4 5 7 7 8 8 → 100,102,103,104,105,107,107,108,108
  // 11| 2 2 8       → 112, 112, 118
  // Total: 23 values
  // Ordered: 86,87,91,91,91,92,93,94,95,97,97,100,102,103,104,105,107,107,108,108,112,112,118
  // Median = 12th value = 100
  // Sum = 86+87+91+91+91+92+93+94+95+97+97+100+102+103+104+105+107+107+108+108+112+112+118
  //     = 173+546+904+342 = 2300
  // Mean = 2300/23 = 100
  // After removing <90 and >110: 91,91,91,92,93,94,95,97,97,100,102,103,104,105,107,107,108,108
  // = 18 values
  // 9th: 97, 10th: 100 → median = (97+100)/2 = 98.5
  // Sum = 546+904 = 1785 (excluding 86,87,112,112,118)
  // Actually let me recheck:
  // Row 9: 91,91,91,92,93,94,95,97,97 = 9 values, sum = 825
  // Row 10: 100,102,103,104,105,107,107,108,108 = 9 values, sum = 944
  // Total 18 values
  // Mean = (825+944)/18 = 1769/18 = 98.28
  // Wait: 91*3=273, 92+93+94+95=374, 97*2=194 → 273+374+194=841
  // 100+102+103+104+105+107+107+108+108 = 100+102=202, +103=305, +104=409, +105=514, +107=621, +107=728, +108=836, +108=944
  // Sum = 841+944 = 1785
  // Mean = 1785/18 = 99.1666... ≈ 99.17
  // New median (18 values, avg of 9th and 10th):
  // 91,91,91,92,93,94,95,97,97, 100,102,103,104,105,107,107,108,108
  // 9th = 97, 10th = 100 → (97+100)/2 = 98.5

  const dataContext = `The chest measurements, in centimetres, of 23 people are shown in the stem-and-leaf plot below.

\`\`\`
 8 | 6 7
 9 | 1 1 1 2 3 4 5 7 7
10 | 0 2 3 4 5 7 7 8 8
11 | 2 2 8
\`\`\`

`;

  // ─── q7a: Median = 100. Answer: B (index 1) ───
  const q7aText = dataContext + 'a) Find the median chest measurement.';
  await db.collection('questions').doc('y8-19a-q7a').update({
    question: q7aText,
    options: [
      { text: '\\(99\\)', imageUrl: '' },
      { text: '\\(100\\)', imageUrl: '' }, // Correct
      { text: '\\(101\\)', imageUrl: '' },
      { text: '\\(102\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Read the data from the stem-and-leaf plot. The stem is the tens digit and each leaf is the ones digit. The plot already orders the data from smallest to largest.',
        workingOut: [
          '8|6 7 → 86, 87',
          '9|1 1 1 2 3 4 5 7 7 → 91, 91, 91, 92, 93, 94, 95, 97, 97',
          '10|0 2 3 4 5 7 7 8 8 → 100, 102, 103, 104, 105, 107, 107, 108, 108',
          '11|2 2 8 → 112, 112, 118'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Count the total number of leaves. There are 23 data values in total. Since 23 is an odd number, the median is the single middle value.',
        workingOut: [
          '\\(n = 23\\)',
          'Position of median \\(= \\frac{23+1}{2} = 12\\)',
          'The median is the 12th value.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Count through the ordered data to find the 12th value.',
        workingOut: [
          'Values 1–2: 86, 87 (2 so far)',
          'Values 3–11: 91, 91, 91, 92, 93, 94, 95, 97, 97 (11 so far)',
          'Value 12: \\(\\mathbf{100}\\) ← this is the 12th value'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'The 12th value is 100.',
        workingOut: '\\(\\text{Median} = 100 \\text{ cm}\\)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q7b: Mean = 100. Answer: C (index 2) ───
  const q7bText = dataContext + 'b) Find the mean chest measurement.';
  await db.collection('questions').doc('y8-19a-q7b').update({
    question: q7bText,
    options: [
      { text: '\\(99.5\\)', imageUrl: '' },
      { text: '\\(100.5\\)', imageUrl: '' },
      { text: '\\(100\\)', imageUrl: '' }, // Correct
      { text: '\\(98.5\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'To find the mean, we need to add up all 23 values from the stem-and-leaf plot and divide by 23.',
        workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{23}\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the sum for each row.',
        workingOut: [
          'Row 8: \\(86 + 87 = 173\\)',
          'Row 9: \\(91 \\times 3 + 92 + 93 + 94 + 95 + 97 \\times 2 = 273 + 471 = 841\\)',
          'Row 10: \\(100 + 102 + 103 + 104 + 105 + 107 \\times 2 + 108 \\times 2 = 944\\)',
          'Row 11: \\(112 + 112 + 118 = 342\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Add all row totals together.',
        workingOut: '\\(\\text{Total Sum} = 173 + 841 + 944 + 342 = 2300\\)',
        graphData: null
      },
      {
        explanation: 'Divide the total sum by 23 to find the mean.',
        workingOut: [
          '\\(\\text{Mean} = \\frac{2300}{23} = 100\\)',
          '\\(\\text{Final Answer: } 100 \\text{ cm}\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q7c: New median = 98.5. Answer: D (index 3) ───
  const q7cText = dataContext + 'c) Find the new median chest measurement if readings less than 90 cm and greater than 110 cm are not included.';
  await db.collection('questions').doc('y8-19a-q7c').update({
    question: q7cText,
    options: [
      { text: '\\(97\\)', imageUrl: '' },
      { text: '\\(98\\)', imageUrl: '' },
      { text: '\\(100\\)', imageUrl: '' },
      { text: '\\(98.5\\)', imageUrl: '' } // Correct
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'First, identify which values to REMOVE. We remove all values that are less than 90 or greater than 110.',
        workingOut: [
          'Values to remove (< 90): 86, 87',
          'Values to remove (> 110): 112, 112, 118',
          'Total removed: 5 values'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'The remaining data set contains only the values in the rows 9 and 10. List them out in order.',
        workingOut: [
          'Remaining (18 values):',
          '91, 91, 91, 92, 93, 94, 95, 97, 97, 100, 102, 103, 104, 105, 107, 107, 108, 108'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Since there are now 18 values (an even number), the median is the average of the 9th and 10th values.',
        workingOut: [
          '9th value: \\(97\\)',
          '10th value: \\(100\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Calculate the average of the 9th and 10th values.',
        workingOut: [
          '\\(\\text{New Median} = \\frac{97 + 100}{2}\\)',
          '\\(\\text{New Median} = \\frac{197}{2} = 98.5\\)',
          '\\(\\text{Final Answer: } 98.5 \\text{ cm}\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q7d: New mean = 99.17. Answer: B (index 1) ───
  const q7dText = dataContext + 'd) Find the new mean chest measurement if readings less than 90 cm and greater than 110 cm are not included (correct to two decimal places).';
  await db.collection('questions').doc('y8-19a-q7d').update({
    question: q7dText,
    options: [
      { text: '\\(99.28\\)', imageUrl: '' },
      { text: '\\(99.17\\)', imageUrl: '' }, // Correct
      { text: '\\(98.83\\)', imageUrl: '' },
      { text: '\\(99.50\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'We are using the same 18 values from part c) after removing the readings outside 90–110 cm.',
        workingOut: '18 remaining values: 91, 91, 91, 92, 93, 94, 95, 97, 97, 100, 102, 103, 104, 105, 107, 107, 108, 108',
        graphData: null
      },
      {
        explanation: 'Calculate the sum of the 18 remaining values.',
        workingOut: [
          'Row 9 sum: \\(91+91+91+92+93+94+95+97+97 = 841\\)',
          'Row 10 sum: \\(100+102+103+104+105+107+107+108+108 = 944\\)',
          'Total Sum \\(= 841 + 944 = 1785\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Divide the total sum (1785) by the new number of values (18) to find the new mean.',
        workingOut: '\\(\\text{New Mean} = \\frac{1785}{18} = 99.1\\overline{6}\\)',
        graphData: null
      },
      {
        explanation: 'Round the answer to two decimal places. The third decimal digit is 6 (≥ 5), so we round up.',
        workingOut: [
          '\\(99.166... \\approx 99.17\\)',
          '\\(\\text{Final Answer: } 99.17 \\text{ cm}\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // Clear redundant parent steps
  await db.collection('questions').doc('y8-19a-q7').update({
    solutionSteps: [],
    solution: '',
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions array (short question text, no data context)
  const parentRef = db.collection('questions').doc('y8-19a-q7');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  if (parentData && parentData.subQuestions) {
    const updates = {
      'y8-19a-q7a': { q: 'a) Find the median chest measurement.', ans: '1', opts: [{text:'\\(99\\)',imageUrl:''},{text:'\\(100\\)',imageUrl:''},{text:'\\(101\\)',imageUrl:''},{text:'\\(102\\)',imageUrl:''}] },
      'y8-19a-q7b': { q: 'b) Find the mean chest measurement.', ans: '2', opts: [{text:'\\(99.5\\)',imageUrl:''},{text:'\\(100.5\\)',imageUrl:''},{text:'\\(100\\)',imageUrl:''},{text:'\\(98.5\\)',imageUrl:''}] },
      'y8-19a-q7c': { q: 'c) Find the new median if readings < 90 and > 110 are excluded.', ans: '3', opts: [{text:'\\(97\\)',imageUrl:''},{text:'\\(98\\)',imageUrl:''},{text:'\\(100\\)',imageUrl:''},{text:'\\(98.5\\)',imageUrl:''}] },
      'y8-19a-q7d': { q: 'd) Find the new mean if readings < 90 and > 110 are excluded (to 2 d.p.).', ans: '1', opts: [{text:'\\(99.28\\)',imageUrl:''},{text:'\\(99.17\\)',imageUrl:''},{text:'\\(98.83\\)',imageUrl:''},{text:'\\(99.50\\)',imageUrl:''}] }
    };

    const newSubQs = parentData.subQuestions.map(sq => {
      const u = updates[sq.id];
      if (u) return { ...sq, question: u.q, answer: u.ans, options: u.opts, type: 'multiple_choice' };
      return sq;
    });

    await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated y8-19a-q7a, q7b, q7c, q7d");
  process.exit(0);
}

run().catch(console.error);
