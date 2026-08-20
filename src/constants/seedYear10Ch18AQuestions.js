// Year 10 Chapter 18: Statistics — 18A Measures of centre and spread
// Source: statistic.pdf (stem-and-leaf plot / mean / standard deviation /
// quartiles questions), converted to multiple_choice per project convention
// (see CLAUDE.md "Corpus-generated questions: multiple_choice only").

const stemLeafBaseRows = () => `
  <text x="40" y="40" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">0</text>
  <text x="130" y="40" font-family="system-ui" font-size="13" fill="#1e293b">5   8   8   9</text>
  <text x="40" y="70" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">1</text>
  <text x="130" y="70" font-family="system-ui" font-size="13" fill="#1e293b">2   2   7   8   9</text>
  <text x="40" y="100" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">2</text>
  <text x="130" y="100" font-family="system-ui" font-size="13" fill="#1e293b">0   1   4   6   8</text>
  <text x="40" y="130" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">3</text>
  <text x="130" y="130" font-family="system-ui" font-size="13" fill="#1e293b">2   4   4   6   7   7   8   9   9</text>
  <text x="40" y="160" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">4</text>
  <text x="130" y="160" font-family="system-ui" font-size="13" fill="#1e293b">0   0   1   4   5   9   &#916;</text>
`;

const svgStemLeafQ1 = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <rect x="0" y="0" width="400" height="200" fill="none"/>
  <text x="20" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Stem</text>
  <text x="130" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Leaf</text>
  <line x1="110" y1="10" x2="110" y2="180" stroke="#475569" stroke-width="1.5"/>
  <circle cx="140" cy="36" r="11" fill="#dbeafe" stroke="#475569" stroke-width="1.5" opacity="0.75"/>
  ${stemLeafBaseRows()}
  <circle cx="310" cy="156" r="11" fill="#fef3c7" stroke="#475569" stroke-width="1.5" opacity="0.75"/>
  <text x="150" y="36" font-family="system-ui" font-size="12" fill="#1e293b">&#8592; minimum = 5</text>
  <text x="330" y="160" font-family="system-ui" font-size="12" fill="#1e293b">&#8592; &#916; = ?</text>
</svg>`;

const svgStemLeafQ1Final = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <text x="20" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Stem</text>
  <text x="130" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Leaf</text>
  <line x1="110" y1="10" x2="110" y2="180" stroke="#475569" stroke-width="1.5"/>
  <circle cx="140" cy="36" r="11" fill="#dbeafe" stroke="#475569" stroke-width="2" opacity="0.8"/>
  ${stemLeafBaseRows()}
  <circle cx="310" cy="156" r="11" fill="#e0e7ff" stroke="#16a34a" stroke-width="2.5" opacity="0.9"/>
  <text x="150" y="36" font-family="system-ui" font-size="12" fill="#1e293b">minimum = 5</text>
  <text x="330" y="160" font-family="system-ui" font-size="12" font-weight="600" fill="#16a34a">maximum = 49 &#10003;</text>
  <text x="20" y="200" font-family="system-ui" font-size="12" fill="#1e293b">Range = 49 - 5 = 44 &#10003;, so &#916; = 9</text>
</svg>`;

const svgStemLeafQ2 = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <text x="20" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Stem</text>
  <text x="130" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Leaf</text>
  <line x1="110" y1="10" x2="110" y2="180" stroke="#475569" stroke-width="1.5"/>
  ${stemLeafBaseRows()}
  <text x="20" y="200" font-family="system-ui" font-size="12" fill="#1e293b">n = 30 values total (count each leaf, including &#916; = 9)</text>
</svg>`;

const svgStemLeafQ2Final = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <text x="20" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Stem</text>
  <text x="130" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Leaf</text>
  <line x1="110" y1="10" x2="110" y2="180" stroke="#475569" stroke-width="1.5"/>
  ${stemLeafBaseRows()}
  <circle cx="140" cy="126" r="11" fill="#e0e7ff" stroke="#16a34a" stroke-width="2.5" opacity="0.9"/>
  <circle cx="162" cy="126" r="11" fill="#e0e7ff" stroke="#16a34a" stroke-width="2.5" opacity="0.9"/>
  <text x="190" y="130" font-family="system-ui" font-size="12" font-weight="600" fill="#16a34a">&#8592; 15th (32) and 16th (34) values</text>
  <text x="20" y="200" font-family="system-ui" font-size="12" fill="#1e293b">Median = (32 + 34) / 2 = 33</text>
</svg>`;

const svgBoxWhiskerSetup = `<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <line x1="20" y1="100" x2="440" y2="100" stroke="#475569" stroke-width="1.5"/>
  ${[5, 12, 19, 26, 33, 40, 47].map((v) => `<line x1="${20 + v * 8.5}" y1="96" x2="${20 + v * 8.5}" y2="104" stroke="#475569" stroke-width="1"/><text x="${20 + v * 8.5}" y="118" font-family="system-ui" font-size="10" fill="#64748b" text-anchor="middle">${v}</text>`).join('')}
  <text x="230" y="30" font-family="system-ui" font-size="12" fill="#1e293b" text-anchor="middle">Ordered data (n = 30): 5, 8, 8, 9, ..., 45, 49, 49</text>
  <text x="230" y="50" font-family="system-ui" font-size="12" fill="#1e293b" text-anchor="middle">Split into lower half (15 values) and upper half (15 values)</text>
</svg>`;

const svgBoxWhiskerFinal = `<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <line x1="20" y1="110" x2="440" y2="110" stroke="#475569" stroke-width="1.5"/>
  <line x1="${20 + 5 * 8.5}" y1="90" x2="${20 + 5 * 8.5}" y2="130" stroke="#475569" stroke-width="2"/>
  <line x1="${20 + 49 * 8.5}" y1="90" x2="${20 + 49 * 8.5}" y2="130" stroke="#475569" stroke-width="2"/>
  <line x1="${20 + 5 * 8.5}" y1="110" x2="${20 + 18 * 8.5}" y2="110" stroke="#475569" stroke-width="2"/>
  <line x1="${20 + 39 * 8.5}" y1="110" x2="${20 + 49 * 8.5}" y2="110" stroke="#475569" stroke-width="2"/>
  <rect x="${20 + 18 * 8.5}" y="90" width="${(39 - 18) * 8.5}" height="40" fill="#dbeafe" stroke="#475569" stroke-width="2" opacity="0.75"/>
  <line x1="${20 + 33 * 8.5}" y1="90" x2="${20 + 33 * 8.5}" y2="130" stroke="#1e293b" stroke-width="2"/>
  <text x="${20 + 18 * 8.5}" y="145" font-family="system-ui" font-size="11" font-weight="600" fill="#16a34a" text-anchor="middle">Q1 = 18</text>
  <text x="${20 + 33 * 8.5}" y="80" font-family="system-ui" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">median = 33</text>
  <text x="${20 + 39 * 8.5}" y="145" font-family="system-ui" font-size="11" font-weight="600" fill="#16a34a" text-anchor="middle">Q3 = 39</text>
  <text x="230" y="20" font-family="system-ui" font-size="12" font-weight="600" fill="#16a34a" text-anchor="middle">IQR = Q3 - Q1 = 39 - 18 = 21 &#10003;</text>
</svg>`;

export const Y10_CH18A_QUESTIONS = [
  {
    id: 'y10-18a-q1',
    topicId: 'y10-18a',
    c: '18A',
    t: 'Measures of centre and spread',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Thirty randomly chosen passengers at Sydney Airport were surveyed about the length of time in minutes they spent waiting in line at Customs. The data is shown in the stem-and-leaf plot below (stem = tens, leaf = units).<br><br>Stem | Leaf<br>0 | 5 8 8 9<br>1 | 2 2 7 8 9<br>2 | 0 1 4 6 8<br>3 | 2 4 4 6 7 7 8 9 9<br>4 | 0 0 1 4 5 9 \\(\\Delta\\)<br><br>If the range of the scores is 44, find the value of \\(\\Delta\\).',
    opts: ['\\(9\\)', '\\(4\\)', '\\(5\\)', '\\(8\\)'],
    a: 0,
    answer: '0',
    hint: 'Range = highest value - lowest value. Read the lowest value from the stem 0 row first.',
    solution: 'Range = 44, minimum = 5, so maximum = 49 = 40 + Delta, giving Delta = 9.',
    solutionSteps: [
      {
        explanation:
          'Identify the known values: this is a stem-and-leaf plot where each entry is read as stem &#215; 10 + leaf. We are told the range of all 30 scores is 44, and asked to find the missing leaf \\(\\Delta\\) in the last row (stem 4).',
        workingOut: '\\(\\text{Range} = \\text{maximum} - \\text{minimum} = 44\\)',
        graphData: { svg: svgStemLeafQ1 },
      },
      {
        explanation:
          'Read the minimum value directly off the plot: the smallest stem is 0, and its smallest leaf is 5, so the minimum score is 5. Pitfall: do not read the stem digit "0" itself as the minimum — you must combine it with its smallest leaf.',
        workingOut: '\\(\\text{minimum} = 05 = 5\\)',
        graphData: null,
      },
      {
        explanation:
          'The maximum score must be in the last row (stem 4), since every earlier row has a smaller stem. Its value is \\(40 + \\Delta\\). Use the range formula to solve for the maximum, then for \\(\\Delta\\).',
        workingOut: '\\(\\text{maximum} = \\text{minimum} + \\text{range} = 5 + 44 = 49\\)\\\\ \\(40 + \\Delta = 49\\)\\\\ \\(\\Delta = 49 - 40 = 9\\)',
        graphData: svgStemLeafQ1Final ? { svg: svgStemLeafQ1Final } : null,
      },
      {
        explanation: 'Final answer: substituting back confirms 49 - 5 = 44, which matches the given range.',
        workingOut: '\\(\\Delta = 9\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgStemLeafQ1 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a-q2',
    topicId: 'y10-18a',
    c: '18A',
    t: 'Measures of centre and spread',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same stem-and-leaf plot of Customs waiting times (\\(\\Delta = 9\\)):<br><br>Stem | Leaf<br>0 | 5 8 8 9<br>1 | 2 2 7 8 9<br>2 | 0 1 4 6 8<br>3 | 2 4 4 6 7 7 8 9 9<br>4 | 0 0 1 4 5 9 9<br><br>Find the median waiting time.',
    opts: ['\\(32\\)', '\\(33\\)', '\\(34\\)', '\\(37\\)'],
    a: 1,
    answer: '1',
    hint: 'There are 30 values (even), so the median is the average of the 15th and 16th values once the data is in ascending order.',
    solution: 'The 15th value is 32 and the 16th value is 34, so the median is 33.',
    solutionSteps: [
      {
        explanation:
          'A stem-and-leaf plot already lists leaves in ascending order within each row, so the full data set (n = 30) is already ordered once you read row by row. Count how many values fall in each row: 4, 5, 5, 9, 7.',
        workingOut: '\\(n = 4 + 5 + 5 + 9 + 7 = 30\\)',
        graphData: { svg: svgStemLeafQ2 },
      },
      {
        explanation:
          'Since n = 30 is even, the median is the average of the \\(\\frac{n}{2} = 15\\)th and \\(\\left(\\frac{n}{2}+1\\right) = 16\\)th values. Count cumulatively through the rows to locate them: after stem 0 (4 values), stem 1 (9 values), stem 2 (14 values), the 15th and 16th values fall inside the stem 3 row.',
        workingOut: '\\(\\text{position of median} = \\frac{15\\text{th} + 16\\text{th}}{2}\\)',
        graphData: null,
      },
      {
        explanation:
          'Row 3 (stem 3) in order is 32, 34, 34, 36, 37, 37, 38, 39, 39 — these are positions 15 to 23. So the 15th value is 32 and the 16th value is 34.',
        workingOut: '\\(\\text{15th value} = 32, \\quad \\text{16th value} = 34\\)',
        graphData: { svg: svgStemLeafQ2Final },
      },
      {
        explanation:
          'Average the two middle values to get the median. Pitfall: forgetting to average when n is even, and just picking one of the two middle values, is a common mistake.',
        workingOut: '\\(\\text{median} = \\frac{32 + 34}{2} = \\frac{66}{2} = 33\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a-q3',
    topicId: 'y10-18a',
    c: '18A',
    t: 'Measures of centre and spread',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'For the following set of scores, determine the mean:<br>17, 27, 37, 40, 28, 35, 37, 20',
    opts: ['\\(30\\)', '\\(26.78\\)', '\\(30.125\\)', '\\(34.43\\)'],
    a: 2,
    answer: '2',
    hint: 'Mean = (sum of all scores) / (number of scores). Count the scores carefully — there are 8 of them.',
    solution: 'Sum = 241, n = 8, mean = 241/8 = 30.125.',
    solutionSteps: [
      {
        explanation:
          'Identify the data set and count how many scores there are (n = 8): 17, 27, 37, 40, 28, 35, 37, 20. We need the mean, \\(\\bar{x} = \\frac{\\sum x}{n}\\).',
        workingOut: '\\(\\bar{x} = \\dfrac{\\sum x}{n}\\)',
        graphData: null,
      },
      {
        explanation: 'Add all the scores together carefully, keeping a running total.',
        workingOut:
          '\\(17 + 27 + 37 + 40 + 28 + 35 + 37 + 20\\)\\\\ \\(= 44 + 37 + 40 + 28 + 35 + 37 + 20\\)\\\\ \\(= 81 + 40 + 28 + 35 + 37 + 20\\)\\\\ \\(= 241\\)',
        graphData: null,
      },
      {
        explanation:
          'Divide the total by n = 8. Pitfall: a very common mistake is miscounting the number of scores (e.g. using n = 7 or n = 9), which is exactly how two of the other options were produced.',
        workingOut: '\\(\\bar{x} = \\dfrac{241}{8} = 30.125\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the mean of the data set is 30.125.',
        workingOut: '\\(\\bar{x} = 30.125\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a-q4',
    topicId: 'y10-18a',
    c: '18A',
    t: 'Measures of centre and spread',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'For the following set of scores, determine the standard deviation (to 2 decimal places):<br>17, 27, 37, 40, 28, 35, 37, 20<br>(The mean of this data set is 30.125.)',
    opts: ['\\(63.11\\)', '\\(8.49\\)', '\\(7.13\\)', '\\(7.94\\)'],
    a: 3,
    answer: '3',
    hint: 'Standard deviation \\(\\sigma = \\sqrt{\\dfrac{\\sum(x - \\bar{x})^2}{n}}\\). Square each deviation before adding them — don\'t forget the square root at the end.',
    solution: 'sum of squared deviations = 504.875, divided by n = 8 gives variance 63.109, sqrt gives SD approx 7.94.',
    solutionSteps: [
      {
        explanation:
          'State the formula for standard deviation (population version, used in this course) and the known mean \\(\\bar{x} = 30.125\\), n = 8.',
        workingOut: '\\(\\sigma = \\sqrt{\\dfrac{\\sum (x - \\bar{x})^2}{n}}\\)',
        graphData: null,
      },
      {
        explanation:
          'Find each deviation from the mean, \\(x - \\bar{x}\\), for all 8 scores.',
        workingOut:
          '\\(17-30.125=-13.125,\\ 27-30.125=-3.125,\\ 37-30.125=6.875,\\ 40-30.125=9.875\\)\\\\ \\(28-30.125=-2.125,\\ 35-30.125=4.875,\\ 37-30.125=6.875,\\ 20-30.125=-10.125\\)',
        graphData: null,
      },
      {
        explanation:
          'Square every deviation (this removes the negative signs) and add them together. Pitfall: forgetting to square the deviations, or squaring but forgetting the final square root, gives the wrong-looking large distractor (63.11) — that is the variance, not the standard deviation.',
        workingOut:
          '\\((-13.125)^2 + (-3.125)^2 + 6.875^2 + 9.875^2 + (-2.125)^2 + 4.875^2 + 6.875^2 + (-10.125)^2\\)\\\\ \\(= 172.27 + 9.77 + 47.27 + 97.52 + 4.52 + 23.77 + 47.27 + 102.52 = 504.88\\)',
        graphData: null,
      },
      {
        explanation:
          'Divide by n = 8 to get the variance, then take the square root. Pitfall: dividing by \\(n - 1 = 7\\) instead of n = 8 gives a slightly different (wrong, for this course\'s definition) answer of about 8.49.',
        workingOut: '\\(\\sigma^2 = \\dfrac{504.88}{8} = 63.11 \\quad\\Rightarrow\\quad \\sigma = \\sqrt{63.11} \\approx 7.94\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18a-q5',
    topicId: 'y10-18a',
    c: '18A',
    t: 'Measures of centre and spread',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same 30 Customs waiting times as before (ordered: 5, 8, 8, 9, 12, 12, 17, 18, 19, 20, 21, 24, 26, 28, 32, 34, 34, 36, 37, 37, 38, 39, 39, 40, 40, 41, 44, 45, 49, 49), find the interquartile range (IQR).',
    opts: ['\\(18\\)', '\\(21\\)', '\\(22\\)', '\\(44\\)'],
    a: 1,
    answer: '1',
    hint: 'Split the ordered data into a lower half (first 15 values) and an upper half (last 15 values). \\(Q_1\\) is the median of the lower half, \\(Q_3\\) is the median of the upper half. \\(\\text{IQR} = Q_3 - Q_1\\).',
    solution: 'Q1 = 18 (median of first 15 values), Q3 = 39 (median of last 15 values), IQR = 39 - 18 = 21.',
    solutionSteps: [
      {
        explanation:
          'With n = 30 values already ordered, split the data into two equal halves of 15 values each: the lower half and the upper half.',
        workingOut:
          '\\(\\text{lower half (15 values)}: 5,8,8,9,12,12,17,18,19,20,21,24,26,28,32\\)\\\\ \\(\\text{upper half (15 values)}: 34,34,36,37,37,38,39,39,40,40,41,44,45,49,49\\)',
        graphData: { svg: svgBoxWhiskerSetup },
      },
      {
        explanation:
          '\\(Q_1\\) is the median of the lower half. With 15 values, the median is the 8th value.',
        workingOut: '\\(Q_1 = 8\\text{th value of lower half} = 18\\)',
        graphData: null,
      },
      {
        explanation:
          '\\(Q_3\\) is the median of the upper half. Again, with 15 values, the median is the 8th value of that half. Pitfall: mixing up which half gives \\(Q_1\\) vs \\(Q_3\\), or using the whole 30-value list\'s 8th/23rd value instead of splitting first, are common errors here.',
        workingOut: '\\(Q_3 = 8\\text{th value of upper half} = 39\\)',
        graphData: null,
      },
      {
        explanation:
          'The interquartile range is the difference between the upper and lower quartiles. Pitfall: the range (44) is a different statistic — don\'t confuse "range" with "interquartile range".',
        workingOut: '\\(\\text{IQR} = Q_3 - Q_1 = 39 - 18 = 21\\)',
        graphData: { svg: svgBoxWhiskerFinal },
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
];
