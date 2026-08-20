// Year 10 Chapter 18: Statistics — ICE-EM Mathematics 10 (3ed), Chapter 18,
// Exercise 18A: "The median and the interquartile range" (pp.524-525).
// Kept as a separate topicId from the earlier ad-hoc y10-18a set (built from
// a different source PDF) to avoid overwriting it — see conversation note
// 2026-08-17. All possible questions converted to multiple_choice; the two
// genuinely open-ended construction/explanation questions (Q8, Q9 in the
// textbook) are kept as teacher_review per CLAUDE.md's MC-conversion rule.

const stemLeafSvg = (rows, highlightCells = [], note = '') => {
  const rowY = (i) => 40 + i * 30;
  const leafText = (leaves) => leaves.map((l) => String(l).padStart(1)).join('   ');
  const rowsSvg = rows
    .map((r, i) => `
      <text x="40" y="${rowY(i)}" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">${r.stem}</text>
      <text x="130" y="${rowY(i)}" font-family="system-ui" font-size="13" fill="#1e293b">${leafText(r.leaves)}</text>
    `)
    .join('');
  const highlights = highlightCells
    .map(({ row, leafIndex, color = '#e0e7ff', stroke = '#16a34a' }) => {
      const cx = 140 + leafIndex * 22;
      const cy = rowY(row) - 4;
      return `<circle cx="${cx}" cy="${cy}" r="11" fill="${color}" stroke="${stroke}" stroke-width="2" opacity="0.85"/>`;
    })
    .join('');
  const height = 40 + rows.length * 30 + (note ? 30 : 10);
  return `<svg viewBox="0 0 420 ${height}" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    <text x="20" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Stem</text>
    <text x="130" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Leaf</text>
    <line x1="110" y1="10" x2="110" y2="${height - (note ? 30 : 10)}" stroke="#475569" stroke-width="1.5"/>
    ${highlights}
    ${rowsSvg}
    ${note ? `<text x="20" y="${height - 10}" font-family="system-ui" font-size="12" fill="#1e293b">${note}</text>` : ''}
  </svg>`;
};

const q2aRows = [
  { stem: 2, leaves: [0, 1, 2, 4, 4, 7, 7, 9] },
  { stem: 3, leaves: [1, 1, 1, 2, 2, 4, 6, 6, 7, 8, 9] },
  { stem: 4, leaves: [0, 1, 2, 2, 4] },
];
const q2bRows = [
  { stem: 5, leaves: [4, 4, 6, 7, 7, 9] },
  { stem: 6, leaves: [1, 4, 4, 4, 6, 7, 8] },
  { stem: 7, leaves: [1, 5, 7, 8, 9, 9] },
  { stem: 8, leaves: [0, 1, 1, 2, 3, 4, 6] },
  { stem: 9, leaves: [1, 3, 4, 5] },
];
const q5Rows = [
  { stem: 14, leaves: [4, 5, 6] },
  { stem: 15, leaves: [0, 1, 2, 8] },
  { stem: 16, leaves: [0, 0, 1, 2, 4, 5, 7] },
  { stem: 17, leaves: [2, 6, 7, 8] },
  { stem: 18, leaves: [0, 2] },
];

const svgQ2aSetup = stemLeafSvg(q2aRows, [], 'n = 24 values (3|2 means 32)');
const svgQ2aFinal = stemLeafSvg(
  q2aRows,
  [
    { row: 1, leafIndex: 3 }, // 32 (first '2')
    { row: 1, leafIndex: 4 }, // 32 (second '2')
  ],
  'Lower half median (Q1) = 27, upper half median (Q3) = 38.5 -> IQR = 11.5'
);
const svgQ2bSetup = stemLeafSvg(q2bRows, [], 'n = 30 values (6|1 means 61)');
const svgQ2bFinal = stemLeafSvg(
  q2bRows,
  [
    { row: 2, leafIndex: 1 }, // 75
    { row: 2, leafIndex: 2 }, // 77
  ],
  'Lower half median (Q1) = 64, upper half median (Q3) = 82 -> IQR = 18'
);
const svgQ5Setup = stemLeafSvg(q5Rows, [], 'n = 20 heights, in cm (15|1 means 151)');
const svgQ5Final = stemLeafSvg(
  q5Rows,
  [
    { row: 2, leafIndex: 1 }, // 161
    { row: 2, leafIndex: 2 }, // 162
  ],
  'median position: average of 10th (161) and 11th (162) values = 161.5'
);

export const Y10_CH18A2_QUESTIONS = [
  // ---- Q1: range and IQR from raw lists ----
  {
    id: 'y10-18a2-q1a',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the range and interquartile range of the data set:<br>7, 5, 15, 10, 13, 3, 20, 7, 15',
    opts: ['Range = 17, IQR = 9', 'Range = 17, IQR = 8', 'Range = 20, IQR = 9', 'Range = 17, IQR = 6'],
    a: 0,
    answer: '0',
    hint: 'Order the data first. Range = highest - lowest. For the IQR, split the ordered data into a lower half and upper half around the median, then IQR = Q3 - Q1.',
    solution: 'Ordered: 3,5,7,7,10,13,15,15,20. Range = 20-3=17. Q1=6, Q3=15, IQR=9.',
    solutionSteps: [
      {
        explanation: 'Arrange the 9 values in ascending order first — this is essential before finding the range, median, or quartiles.',
        workingOut: '\\(3,\\ 5,\\ 7,\\ 7,\\ 10,\\ 13,\\ 15,\\ 15,\\ 20\\)',
        graphData: null,
      },
      {
        explanation: 'Range = highest value - lowest value.',
        workingOut: '\\(\\text{Range} = 20 - 3 = 17\\)',
        graphData: null,
      },
      {
        explanation: 'n = 9 is odd, so the median (10) sits alone in the middle. Omit it and split the rest into a lower half of 4 and an upper half of 4. \\(Q_1\\) is the median of the lower half; \\(Q_3\\) is the median of the upper half.',
        workingOut: '\\(\\text{lower half: } 3,5,7,7 \\Rightarrow Q_1 = \\dfrac{5+7}{2} = 6\\)\\\\ \\(\\text{upper half: } 13,15,15,20 \\Rightarrow Q_3 = \\dfrac{15+15}{2} = 15\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1. Pitfall: forgetting to remove the middle value (10) before splitting into halves, or splitting the halves unevenly, is a common mistake with odd-sized data sets.',
        workingOut: '\\(\\text{IQR} = 15 - 6 = 9\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q1b',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the range and interquartile range of the data set:<br>8, 5, 1, 7, 5, 7, 8, 10, 5, 7',
    opts: ['Range = 9, IQR = 2', 'Range = 9, IQR = 3', 'Range = 10, IQR = 3', 'Range = 9, IQR = 4'],
    a: 1,
    answer: '1',
    hint: 'Order the data first (n = 10, even). Range = highest - lowest. Split into two equal halves of 5 for the quartiles.',
    solution: 'Ordered: 1,5,5,5,7,7,7,8,8,10. Range=9. Q1=5, Q3=8, IQR=3.',
    solutionSteps: [
      {
        explanation: 'Arrange the 10 values in ascending order.',
        workingOut: '\\(1,\\ 5,\\ 5,\\ 5,\\ 7,\\ 7,\\ 7,\\ 8,\\ 8,\\ 10\\)',
        graphData: null,
      },
      {
        explanation: 'Range = highest value - lowest value.',
        workingOut: '\\(\\text{Range} = 10 - 1 = 9\\)',
        graphData: null,
      },
      {
        explanation: 'n = 10 is even, so split into a lower half of 5 values and an upper half of 5 values. Each half has an odd size, so its median is a single middle value.',
        workingOut: '\\(\\text{lower half: } 1,5,5,5,7 \\Rightarrow Q_1 = 5\\)\\\\ \\(\\text{upper half: } 7,7,8,8,10 \\Rightarrow Q_3 = 8\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1. Pitfall: using the range (9) in place of the IQR, or mis-splitting the halves as 4/6 instead of 5/5, are common errors.',
        workingOut: '\\(\\text{IQR} = 8 - 5 = 3\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q1c',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the range and interquartile range of the data set:<br>4, 0, 6, 4, 6, 7, 9, 4',
    opts: ['Range = 9, IQR = 2.5', 'Range = 9, IQR = 2', 'Range = 9, IQR = 3', 'Range = 7, IQR = 2.5'],
    a: 0,
    answer: '0',
    hint: 'Order the data first (n = 8, even). Split into two equal halves of 4.',
    solution: 'Ordered: 0,4,4,4,6,6,7,9. Range=9. Q1=4, Q3=6.5, IQR=2.5.',
    solutionSteps: [
      {
        explanation: 'Arrange the 8 values in ascending order.',
        workingOut: '\\(0,\\ 4,\\ 4,\\ 4,\\ 6,\\ 6,\\ 7,\\ 9\\)',
        graphData: null,
      },
      {
        explanation: 'Range = highest value - lowest value.',
        workingOut: '\\(\\text{Range} = 9 - 0 = 9\\)',
        graphData: null,
      },
      {
        explanation: 'n = 8 is even, so split into a lower half of 4 and an upper half of 4. Each half has an even size, so its median is the average of its two middle values.',
        workingOut: '\\(\\text{lower half: } 0,4,4,4 \\Rightarrow Q_1 = \\dfrac{4+4}{2} = 4\\)\\\\ \\(\\text{upper half: } 6,6,7,9 \\Rightarrow Q_3 = \\dfrac{6+7}{2} = 6.5\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1. Pitfall: rounding 6.5 down to 6 before subtracting changes the answer — keep the exact decimal until the final step.',
        workingOut: '\\(\\text{IQR} = 6.5 - 4 = 2.5\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q1d',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the range and interquartile range of the data set:<br>3, 13, 8, 11, 1, 18, 5, 13',
    opts: ['Range = 17, IQR = 8', 'Range = 18, IQR = 9', 'Range = 17, IQR = 10', 'Range = 17, IQR = 9'],
    a: 3,
    answer: '3',
    hint: 'Order the data first (n = 8, even). Split into two equal halves of 4.',
    solution: 'Ordered: 1,3,5,8,11,13,13,18. Range=17. Q1=4, Q3=13, IQR=9.',
    solutionSteps: [
      {
        explanation: 'Arrange the 8 values in ascending order.',
        workingOut: '\\(1,\\ 3,\\ 5,\\ 8,\\ 11,\\ 13,\\ 13,\\ 18\\)',
        graphData: null,
      },
      {
        explanation: 'Range = highest value - lowest value.',
        workingOut: '\\(\\text{Range} = 18 - 1 = 17\\)',
        graphData: null,
      },
      {
        explanation: 'n = 8 is even, so split into a lower half of 4 and an upper half of 4.',
        workingOut: '\\(\\text{lower half: } 1,3,5,8 \\Rightarrow Q_1 = \\dfrac{3+5}{2} = 4\\)\\\\ \\(\\text{upper half: } 11,13,13,18 \\Rightarrow Q_3 = \\dfrac{13+13}{2} = 13\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 13 - 4 = 9\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q2: median and IQR from stem-and-leaf plots ----
  {
    id: 'y10-18a2-q2a',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Locate the median and the quartiles for the stem-and-leaf plot, and state the interquartile range (3|2 means 32).<br><br>Stem | Leaf<br>2 | 0 1 2 4 4 7 7 9<br>3 | 1 1 1 2 2 4 6 6 7 8 9<br>4 | 0 1 2 2 4',
    opts: ['\\(10.5\\)', '\\(12\\)', '\\(11.5\\)', '\\(11\\)'],
    a: 2,
    answer: '2',
    hint: 'n = 24 values. Median = average of the 12th and 13th values. Split into a lower half of 12 and an upper half of 12 to find Q1 and Q3.',
    solution: 'median=32, Q1=27, Q3=38.5, IQR=11.5.',
    solutionSteps: [
      {
        explanation: 'Read the ordered data straight from the plot (leaves within each row are already ascending). There are n = 8 + 11 + 5 = 24 values.',
        workingOut: '\\(n = 24\\)',
        graphData: { svg: svgQ2aSetup },
      },
      {
        explanation: 'n = 24 is even, so the median is the average of the 12th and 13th values. Counting through the rows (8, then 8+11=19, then 24), both fall in the stem-3 row: the 12th value is 32 and the 13th value is also 32.',
        workingOut: '\\(\\text{median} = \\dfrac{32+32}{2} = 32\\)',
        graphData: null,
      },
      {
        explanation: 'Split the 24 values into a lower half (positions 1-12) and an upper half (positions 13-24), each of size 12 (even), so each quartile is the average of its half\'s two middle values.',
        workingOut: '\\(Q_1 = \\dfrac{27+27}{2} = 27 \\quad (\\text{6th and 7th values})\\)\\\\ \\(Q_3 = \\dfrac{38+39}{2} = 38.5 \\quad (\\text{6th and 7th values of the upper half})\\)',
        graphData: { svg: svgQ2aFinal },
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1. Pitfall: misreading a stem-and-leaf row (e.g. treating "3 | 1 1 1" as one value 31 instead of three separate values 31, 31, 31) throws off every position count after it.',
        workingOut: '\\(\\text{IQR} = 38.5 - 27 = 11.5\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ2aSetup },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q2b',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Locate the median and the quartiles for the stem-and-leaf plot, and state the interquartile range (6|1 means 61).<br><br>Stem | Leaf<br>5 | 4 4 6 7 7 9<br>6 | 1 4 4 4 6 7 8<br>7 | 1 5 7 8 9 9<br>8 | 0 1 1 2 3 4 6<br>9 | 1 3 4 5',
    opts: ['\\(17\\)', '\\(19\\)', '\\(16\\)', '\\(18\\)'],
    a: 3,
    answer: '3',
    hint: 'n = 30 values. Median = average of the 15th and 16th values. Split into a lower half of 15 and an upper half of 15 to find Q1 and Q3.',
    solution: 'median=76, Q1=64, Q3=82, IQR=18.',
    solutionSteps: [
      {
        explanation: 'Read the ordered data straight from the plot. There are n = 6 + 7 + 6 + 7 + 4 = 30 values.',
        workingOut: '\\(n = 30\\)',
        graphData: { svg: svgQ2bSetup },
      },
      {
        explanation: 'n = 30 is even, so the median is the average of the 15th and 16th values. Counting through the rows (6, then 13, then 19), both fall in the stem-7 row: the 15th value is 75 and the 16th value is 77.',
        workingOut: '\\(\\text{median} = \\dfrac{75+77}{2} = 76\\)',
        graphData: null,
      },
      {
        explanation: 'Split the 30 values into a lower half (positions 1-15) and an upper half (positions 16-30), each of size 15 (odd), so each quartile is the single middle value of its half (the 8th value).',
        workingOut: '\\(Q_1 = 8\\text{th value of lower half} = 64\\)\\\\ \\(Q_3 = 8\\text{th value of upper half} = 82\\)',
        graphData: { svg: svgQ2bFinal },
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 82 - 64 = 18\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q3: mean, mode, median, IQR from a frequency table ----
  {
    id: 'y10-18a2-q3',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question:
      'Find the mean, the mode, the median and the interquartile range of this data set.<br><br>Value | 0 1 2 3 4 5 6 7 8 9 10<br>Frequency | 5 2 0 7 1 8 4 6 0 2 11',
    opts: [
      'mean = 5.67, mode = 10, median = 5.5, IQR = 6',
      'mean = 5.67, mode = 11, median = 5.5, IQR = 6',
      'mean = 5, mode = 10, median = 6, IQR = 7',
      'mean = 5.67, mode = 10, median = 5, IQR = 6',
    ],
    a: 0,
    answer: '0',
    hint: 'n = sum of the frequencies. Mean = (sum of value x frequency) / n. Mode = the value with the highest frequency (not the frequency itself). Use cumulative frequencies to locate the median and quartiles.',
    solution: 'n=46, mean=261/46≈5.67, mode=10 (freq 11), median=5.5, Q1=3, Q3=9, IQR=6.',
    solutionSteps: [
      {
        explanation: 'Find n by adding all the frequencies, and find the total by adding value x frequency for each row.',
        workingOut: '\\(n = 5+2+0+7+1+8+4+6+0+2+11 = 46\\)\\\\ \\(\\sum (\\text{value} \\times \\text{freq}) = 0+2+0+21+4+40+24+42+0+18+110 = 261\\)',
        graphData: null,
      },
      {
        explanation: 'Mean = total / n. Mode = the value with the highest frequency — here the highest frequency is 11 (belonging to value 10), so the mode is 10, not 11. Pitfall: confusing the mode (the value) with its frequency (the count) is exactly how the second option was produced.',
        workingOut: '\\(\\bar{x} = \\dfrac{261}{46} \\approx 5.67\\)\\\\ \\(\\text{mode} = 10 \\ (\\text{frequency } 11, \\text{ the highest})\\)',
        graphData: null,
      },
      {
        explanation: 'Build cumulative frequencies to locate the median (n = 46 even, so average the 23rd and 24th values): value 0 reaches cumulative 5, value 1 reaches 7, value 3 reaches 14, value 4 reaches 15, value 5 reaches 23, value 6 reaches 27. The 23rd value is 5 (last one at value 5) and the 24th value is 6 (first one at value 6).',
        workingOut: '\\(\\text{median} = \\dfrac{5+6}{2} = 5.5\\)',
        graphData: null,
      },
      {
        explanation: 'Q1 is the median of the lower 23 values (12th value overall): cumulative frequency reaches value 3 by position 14, so position 12 is inside value 3, giving Q1 = 3. Q3 is the median of the upper 23 values (35th value overall): cumulative frequency reaches value 9 by position 35, so Q3 = 9. Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(Q_1 = 3, \\quad Q_3 = 9\\)\\\\ \\(\\text{IQR} = 9 - 3 = 6\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q4: quartile/median positions for n=100, n=101 ----
  {
    id: 'y10-18a2-q4',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 120,
    question:
      'Complete the table for the positions of the median and the quartiles for data sets of 100 and 101 items (a position of 8.5 means it is between the 8th and 9th data values).<br><br>Number of items | Lower quartile position | Median position | Upper quartile position<br>a) 100 | ? | ? | ?<br>b) 101 | ? | ? | ?',
    opts: [
      'a) 100: LQ = 25.5th, median = 50.5th, UQ = 75.5th; b) 101: LQ = 25.5th, median = 51st, UQ = 76.5th',
      'a) 100: LQ = 25th, median = 50th, UQ = 75th; b) 101: LQ = 26th, median = 51st, UQ = 76th',
      'a) 100: LQ = 25.5th, median = 50.5th, UQ = 75.5th; b) 101: LQ = 26th, median = 51st, UQ = 76th',
      'a) 100: LQ = 25.5th, median = 50th, UQ = 75.5th; b) 101: LQ = 25.5th, median = 51st, UQ = 76.5th',
    ],
    a: 0,
    answer: '0',
    hint: 'For an even n, the median lies between the n/2th and (n/2+1)th values. Split the data into two equal halves of n/2 and find the median position of each half (that half\'s own middle position, mapped back onto the whole data set).',
    solution: 'n=100 (even): LQ=25.5th, median=50.5th, UQ=75.5th. n=101 (odd): LQ=25.5th, median=51st, UQ=76.5th.',
    solutionSteps: [
      {
        explanation: 'For n = 100 (even), the median lies between the 50th and 51st values, i.e. at position 50.5.',
        workingOut: '\\(\\text{median position} = \\dfrac{100+1}{2} = 50.5\\text{th}\\)',
        graphData: null,
      },
      {
        explanation: 'Split the 100 values into a lower half of 50 (positions 1-50) and an upper half of 50 (positions 51-100). Each half has an even size, so its own median lies between its 25th and 26th values — the 25.5th position of that half, which lands on the whole data set\'s 25.5th and 75.5th positions respectively.',
        workingOut: '\\(\\text{LQ position} = 25.5\\text{th}, \\quad \\text{UQ position} = 50 + 25.5 = 75.5\\text{th}\\)',
        graphData: null,
      },
      {
        explanation: 'For n = 101 (odd), the median is the single middle value at position 51. Removing it leaves two halves of 50 values each: positions 1-50 (lower) and 52-101 (upper).',
        workingOut: '\\(\\text{median position} = \\dfrac{101+1}{2} = 51\\text{st}\\)',
        graphData: null,
      },
      {
        explanation: 'Each 50-value half is even-sized, so its own median is at its 25.5th position. The lower half\'s 25.5th position is the whole set\'s 25.5th position (unchanged); the upper half starts at position 52, so its 25.5th position is \\(52 + 24.5 = 76.5\\). Pitfall: forgetting that the upper half starts at position 52 (not 51) after removing the middle value is a common off-by-one error.',
        workingOut: '\\(\\text{LQ position} = 25.5\\text{th}, \\quad \\text{UQ position} = 76.5\\text{th}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q5: heights stem-and-leaf plot ----
  {
    id: 'y10-18a2-q5a',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 60,
    question:
      'The stem-and-leaf plot gives the height in centimetres of 20 students in a class (15|1 means 151).<br><br>Stem | Leaf<br>14 | 4 5 6<br>15 | 0 1 2 8<br>16 | 0 0 1 2 4 5 7<br>17 | 2 6 7 8<br>18 | 0 2<br><br>What is the range of the height of students in the class?',
    opts: ['\\(36\\)', '\\(38\\)', '\\(40\\)', '\\(34\\)'],
    a: 1,
    answer: '1',
    hint: 'Range = highest value - lowest value. Read the minimum from the first row and the maximum from the last row.',
    solution: 'min=144, max=182, range=38.',
    solutionSteps: [
      {
        explanation: 'Read the minimum and maximum heights directly off the stem-and-leaf plot: the smallest stem (14) with its smallest leaf (4) gives the minimum; the largest stem (18) with its largest leaf (2) gives the maximum.',
        workingOut: '\\(\\text{minimum} = 144, \\quad \\text{maximum} = 182\\)',
        graphData: { svg: svgQ5Setup },
      },
      {
        explanation: 'Apply the range formula.',
        workingOut: '\\(\\text{Range} = \\text{maximum} - \\text{minimum}\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute and calculate.',
        workingOut: '\\(\\text{Range} = 182 - 144 = 38\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the range of heights is 38 cm.',
        workingOut: '\\(\\text{Range} = 38\\text{ cm}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q5b',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same stem-and-leaf plot of student heights (n = 20, 15|1 means 151):<br><br>Stem | Leaf<br>14 | 4 5 6<br>15 | 0 1 2 8<br>16 | 0 0 1 2 4 5 7<br>17 | 2 6 7 8<br>18 | 0 2<br><br>What is the median height of students in the class?',
    opts: ['\\(161\\)', '\\(162\\)', '\\(160.5\\)', '\\(161.5\\)'],
    a: 3,
    answer: '3',
    hint: 'n = 20 is even, so the median is the average of the 10th and 11th values, counted in ascending order through the plot.',
    solution: '10th value=161, 11th value=162, median=161.5.',
    solutionSteps: [
      {
        explanation: 'The data set has n = 20 values (3 + 4 + 7 + 4 + 2), already in ascending order within the plot.',
        workingOut: '\\(n = 20\\)',
        graphData: { svg: svgQ5Setup },
      },
      {
        explanation: 'n = 20 is even, so the median is the average of the 10th and 11th values.',
        workingOut: '\\(\\text{median position} = \\dfrac{10\\text{th} + 11\\text{th}}{2}\\)',
        graphData: null,
      },
      {
        explanation: 'Count cumulatively through the rows: stem 14 gives 3 values, stem 15 gives 4 more (total 7), stem 16 gives 7 more (total 14). The 10th and 11th values are inside the stem-16 row: 161 (10th) and 162 (11th).',
        workingOut: '\\(\\text{10th value} = 161, \\quad \\text{11th value} = 162\\)',
        graphData: { svg: svgQ5Final },
      },
      {
        explanation: 'Final answer: average the two middle values.',
        workingOut: '\\(\\text{median} = \\dfrac{161+162}{2} = 161.5\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q5c',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same stem-and-leaf plot of student heights (n = 20, 15|1 means 151):<br><br>Stem | Leaf<br>14 | 4 5 6<br>15 | 0 1 2 8<br>16 | 0 0 1 2 4 5 7<br>17 | 2 6 7 8<br>18 | 0 2<br><br>What is the interquartile range?',
    opts: ['\\(22.5\\)', '\\(22\\)', '\\(23\\)', '\\(21.5\\)'],
    a: 0,
    answer: '0',
    hint: 'Split the 20 values into a lower half of 10 and an upper half of 10, then find the median of each half.',
    solution: 'Q1=151.5, Q3=174, IQR=22.5.',
    solutionSteps: [
      {
        explanation: 'Split the 20 ordered values into a lower half (positions 1-10) and an upper half (positions 11-20).',
        workingOut: '\\(\\text{lower half: } 144,145,146,150,151,152,158,160,160,161\\)\\\\ \\(\\text{upper half: } 162,164,165,167,172,176,177,178,180,182\\)',
        graphData: null,
      },
      {
        explanation: 'Each half has 10 values (even), so its median is the average of its 5th and 6th values.',
        workingOut: '\\(Q_1 = \\dfrac{151+152}{2} = 151.5\\)\\\\ \\(Q_3 = \\dfrac{172+176}{2} = 174\\)',
        graphData: null,
      },
      {
        explanation: 'Apply the IQR formula.',
        workingOut: '\\(\\text{IQR} = Q_3 - Q_1\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: substitute and calculate.',
        workingOut: '\\(\\text{IQR} = 174 - 151.5 = 22.5\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q6: leaf lengths stem-and-leaf plot (decimal, 1dp) ----
  {
    id: 'y10-18a2-q6',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'The stem-and-leaf plot gives the lengths (cm, to 1 decimal place) of 15 leaves that fell from a tree (9|4 means 9.4).<br><br>Stem | Leaf<br>4 | 4<br>5 | 5 1 8 4 4<br>6 | 3 1 2 4<br>7 | 7 2 7<br>8 |<br>9 | 4 3<br><br>Find the interquartile range of the leaf lengths.',
    opts: ['\\(2.3\\)', '\\(2.2\\)', '\\(2.6\\)', '\\(1.9\\)'],
    a: 0,
    answer: '0',
    hint: 'Order the 15 values first (there is a gap at stem 8 — no leaves there). Split into a lower half of 7, the median, and an upper half of 7.',
    solution: 'Ordered: 4.4,5.1,5.4,5.4,5.5,5.8,6.1,6.2,6.3,6.4,7.2,7.7,7.7,9.3,9.4. Median=6.2, Q1=5.4, Q3=7.7, IQR=2.3.',
    solutionSteps: [
      {
        explanation: 'Read and order all 15 values from the plot (each entry is stem.leaf, e.g. row 5 gives 5.5, 5.1, 5.8, 5.4, 5.4). Note stem 8 has no leaves at all.',
        workingOut: '\\(4.4,\\ 5.1,\\ 5.4,\\ 5.4,\\ 5.5,\\ 5.8,\\ 6.1,\\ 6.2,\\ 6.3,\\ 6.4,\\ 7.2,\\ 7.7,\\ 7.7,\\ 9.3,\\ 9.4\\)',
        graphData: null,
      },
      {
        explanation: 'n = 15 is odd, so the median is the single middle (8th) value. Remove it and split the remaining 14 values into a lower half of 7 and an upper half of 7.',
        workingOut: '\\(\\text{median} = 8\\text{th value} = 6.2\\)',
        graphData: null,
      },
      {
        explanation: 'Each half of 7 has an odd size, so its median is its own middle (4th) value.',
        workingOut: '\\(\\text{lower half: } 4.4,5.1,5.4,5.4,5.5,5.8,6.1 \\Rightarrow Q_1 = 5.4\\)\\\\ \\(\\text{upper half: } 6.3,6.4,7.2,7.7,7.7,9.3,9.4 \\Rightarrow Q_3 = 7.7\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1. Pitfall: forgetting stem 8 has no leaves and accidentally inserting a value of 8.0, or miscounting due to the gap, both shift every position after it.',
        workingOut: '\\(\\text{IQR} = 7.7 - 5.4 = 2.3\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q7: weekly food spending ----
  {
    id: 'y10-18a2-q7a',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'A family\'s weekly food spending, in dollars, over 13 weeks was:<br>148, 143, 152, 149, 158, 155, 147, 152, 158, 139, 143, 150, 141<br>Find the median, the upper quartile and the lower quartile.',
    opts: [
      'median = 149, UQ = 153.5, LQ = 143',
      'median = 149, UQ = 152, LQ = 143',
      'median = 150, UQ = 153.5, LQ = 143',
      'median = 149, UQ = 153.5, LQ = 141',
    ],
    a: 0,
    answer: '0',
    hint: 'Order the 13 values first. The median is the single middle (7th) value. Split the remaining 12 into two halves of 6 for the quartiles.',
    solution: 'Ordered: 139,141,143,143,147,148,149,150,152,152,155,158,158. Median=149, LQ=143, UQ=153.5.',
    solutionSteps: [
      {
        explanation: 'Arrange the 13 values in ascending order.',
        workingOut: '\\(139,141,143,143,147,148,149,150,152,152,155,158,158\\)',
        graphData: null,
      },
      {
        explanation: 'n = 13 is odd, so the median is the single middle (7th) value.',
        workingOut: '\\(\\text{median} = 7\\text{th value} = 149\\)',
        graphData: null,
      },
      {
        explanation: 'Remove the median and split the other 12 values into a lower half of 6 (positions 1-6) and an upper half of 6 (positions 8-13). Each half is even-sized, so its median is the average of its 3rd and 4th values.',
        workingOut: '\\(\\text{lower half: } 139,141,143,143,147,148 \\Rightarrow Q_1 = \\dfrac{143+143}{2} = 143\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: repeat for the upper half to find Q3 (the upper quartile).',
        workingOut: '\\(\\text{upper half: } 150,152,152,155,158,158 \\Rightarrow Q_3 = \\dfrac{152+155}{2} = 153.5\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q7b',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same weekly food spending data (median = 149, lower quartile = 143, upper quartile = 153.5), find the interquartile range of the amounts spent.',
    opts: ['\\(11\\)', '\\(10.5\\)', '\\(9.5\\)', '\\(10\\)'],
    a: 1,
    answer: '1',
    hint: 'IQR = upper quartile - lower quartile.',
    solution: 'IQR = 153.5 - 143 = 10.5.',
    solutionSteps: [
      {
        explanation: 'State the IQR formula and the known quartile values from the previous part.',
        workingOut: '\\(\\text{IQR} = Q_3 - Q_1\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute the values.',
        workingOut: '\\(\\text{IQR} = 153.5 - 143\\)',
        graphData: null,
      },
      {
        explanation: 'Calculate.',
        workingOut: '\\(\\text{IQR} = 10.5\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the middle 50% of weekly food spending has a spread of $10.50.',
        workingOut: '\\(\\text{IQR} = \\$10.50\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q8, Q9: open-ended (kept as teacher_review, per CLAUDE.md MC rule) ----
  {
    id: 'y10-18a2-q8',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 180,
    question:
      'Write down two different sets of seven whole numbers with minimum data value 3, lower quartile 5, median 10, upper quartile 12 and maximum data value 13.',
    opts: [],
    a: null,
    answer: '',
    hint: 'With 7 values, the median is the 4th value, the lower quartile is the median of the first 3, and the upper quartile is the median of the last 3.',
    solution:
      'Any set of the form (3, a, 5, 10, 12, b, 13) where a is between 3 and 5, and b is between 12 and 13-ish (careful: with only 3 values in each half, the quartile IS the middle one, so the outer values just need to keep the ordering valid), e.g. 3, 4, 5, 10, 12, 12, 13 and 3, 3, 5, 10, 12, 13, 13 are both valid — many other answers are possible.',
    solutionSteps: [],
    graphData: null,
    isNew: true,
    requiresManualGrading: true,
  },
  {
    id: 'y10-18a2-q9',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 180,
    question:
      'The median is always between the two quartiles. Is the mean always between the two quartiles? If not, give an example of seven whole numbers where the mean is above the upper quartile, and an example where the mean is below the lower quartile.',
    opts: [],
    a: null,
    answer: '',
    hint: 'Try a data set with one very large or very small outlier — the mean is pulled toward the outlier much more than the quartiles are.',
    solution:
      'No — the mean is not always between the quartiles. Example (mean above UQ): 1,2,3,4,5,6,100 has Q1=2, Q3=6, but mean = 121/7 ≈ 17.3, which is above Q3. Example (mean below LQ): 1,50,51,52,53,54,55 has Q1=51, but mean = 316/7 ≈ 45.1, which is below Q1. Outliers pull the mean far more than they pull the quartiles.',
    solutionSteps: [],
    graphData: null,
    isNew: true,
    requiresManualGrading: true,
  },

  // ---- Q10: reverse problems (max from range, LQ from IQR) ----
  {
    id: 'y10-18a2-q10a',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'For a data set, the minimum value is 8 and the range is 27. Find the maximum value.',
    opts: ['\\(19\\)', '\\(35\\)', '\\(27\\)', '\\(43\\)'],
    a: 1,
    answer: '1',
    hint: 'Range = maximum - minimum, so maximum = minimum + range.',
    solution: 'maximum = 8 + 27 = 35.',
    solutionSteps: [
      {
        explanation: 'State the range formula and known values: minimum = 8, range = 27.',
        workingOut: '\\(\\text{Range} = \\text{maximum} - \\text{minimum}\\)',
        graphData: null,
      },
      {
        explanation: 'Rearrange to make the maximum the subject.',
        workingOut: '\\(\\text{maximum} = \\text{minimum} + \\text{range}\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute and calculate. Pitfall: subtracting instead of adding (8 - 27 = -19, giving the illogical distractor 19 after a sign slip) is a common mistake.',
        workingOut: '\\(\\text{maximum} = 8 + 27 = 35\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the maximum value is 35.',
        workingOut: '\\(\\text{maximum} = 35\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a2-q10b',
    topicId: 'y10-18a-icem',
    c: '18A',
    t: 'The median and the interquartile range',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'For a particular data set, the upper quartile is 25.6, and the interquartile range is 11.9. Find the lower quartile.',
    opts: ['\\(37.5\\)', '\\(13.9\\)', '\\(11.9\\)', '\\(13.7\\)'],
    a: 3,
    answer: '3',
    hint: 'IQR = upper quartile - lower quartile, so lower quartile = upper quartile - IQR.',
    solution: 'LQ = 25.6 - 11.9 = 13.7.',
    solutionSteps: [
      {
        explanation: 'State the IQR formula and known values: Q3 = 25.6, IQR = 11.9.',
        workingOut: '\\(\\text{IQR} = Q_3 - Q_1\\)',
        graphData: null,
      },
      {
        explanation: 'Rearrange to make Q1 the subject.',
        workingOut: '\\(Q_1 = Q_3 - \\text{IQR}\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute and calculate. Pitfall: adding instead of subtracting (25.6 + 11.9 = 37.5) is a common sign error.',
        workingOut: '\\(Q_1 = 25.6 - 11.9 = 13.7\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the lower quartile is 13.7.',
        workingOut: '\\(Q_1 = 13.7\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
];
