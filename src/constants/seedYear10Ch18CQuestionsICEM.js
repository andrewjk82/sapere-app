// Year 10 Chapter 18: Statistics — ICE-EM Mathematics 10 (3ed), Chapter 18,
// Exercise 18C: "Boxplots, histograms and outliers" (pp.533-534). All
// questions converted to multiple_choice — every "draw/construct" prompt in
// this exercise has a single objectively correct set of computed values, so
// each was reframed as "which computed values / statement is correct"
// (same approach used for Q4/Q9-11a in the earlier 18A/18B ICE-EM topics)
// rather than skipped, since the underlying skill being assessed (compute
// the five-number summary, apply the 1.5xIQR outlier rule, read a shape)
// has a definite right answer.

const scaleTicks = (scaleMin, scaleMax, step, x0, xScale, y) =>
  Array.from({ length: Math.floor((scaleMax - scaleMin) / step) + 1 }, (_, i) => scaleMin + i * step)
    .map(
      (v) => `<line x1="${x0 + (v - scaleMin) * xScale}" y1="${y - 4}" x2="${x0 + (v - scaleMin) * xScale}" y2="${y + 4}" stroke="#475569" stroke-width="1"/><text x="${x0 + (v - scaleMin) * xScale}" y="${y + 18}" font-family="system-ui" font-size="10" fill="#64748b" text-anchor="middle">${v}</text>`
    )
    .join('');

// Boxplot with optional outlier markers (triangles) beyond the 1.5xIQR bounds.
const boxplotWithOutliersSvg = ({ min, q1, median, q3, max, outliers = [], scaleMin, scaleMax, unit = '' }) => {
  const x0 = 30;
  const width = 380;
  const xScale = width / (scaleMax - scaleMin);
  const y = 70;
  const x = (v) => x0 + (v - scaleMin) * xScale;
  // Whiskers stop at the last non-outlier value inside the bounds.
  const nonOutlierValues = [min, max].filter((v) => !outliers.includes(v));
  const whiskerMin = nonOutlierValues.length ? Math.min(...nonOutlierValues, q1) : q1;
  const whiskerMax = nonOutlierValues.length ? Math.max(...nonOutlierValues, q3) : q3;
  const outlierMarks = outliers
    .map((v) => `<path d="M ${x(v)} ${y - 26} l -5 9 l 10 0 Z" fill="#dc2626"/>`)
    .join('');
  return `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    <line x1="${x(whiskerMin)}" y1="${y}" x2="${x(q1)}" y2="${y}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(q3)}" y1="${y}" x2="${x(whiskerMax)}" y2="${y}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(whiskerMin)}" y1="${y - 12}" x2="${x(whiskerMin)}" y2="${y + 12}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(whiskerMax)}" y1="${y - 12}" x2="${x(whiskerMax)}" y2="${y + 12}" stroke="#475569" stroke-width="2"/>
    <rect x="${x(q1)}" y="${y - 18}" width="${x(q3) - x(q1)}" height="36" fill="#dbeafe" stroke="#475569" stroke-width="2" opacity="0.8"/>
    <line x1="${x(median)}" y1="${y - 18}" x2="${x(median)}" y2="${y + 18}" stroke="#1e293b" stroke-width="2.5"/>
    ${outlierMarks}
    <text x="${x(q1) - 4}" y="${y - 22}" font-family="system-ui" font-size="10" font-weight="600" fill="#16a34a" text-anchor="end">Q1=${q1}${unit}</text>
    <text x="${x(median)}" y="${y + 30}" font-family="system-ui" font-size="10" font-weight="600" fill="#1e293b" text-anchor="middle">med=${median}${unit}</text>
    <text x="${x(q3) + 4}" y="${y - 22}" font-family="system-ui" font-size="10" font-weight="600" fill="#16a34a" text-anchor="start">Q3=${q3}${unit}</text>
    <line x1="${x0}" y1="${y + 50}" x2="${x0 + width}" y2="${y + 50}" stroke="#475569" stroke-width="1"/>
    ${scaleTicks(scaleMin, scaleMax, (scaleMax - scaleMin) / 8, x0, xScale, y + 50)}
  </svg>`;
};

const stemLeafSvg = (rows, note = '') => {
  const rowY = (i) => 40 + i * 26;
  const leafText = (leaves) => leaves.map((l) => String(l)).join('   ');
  const rowsSvg = rows
    .map((r, i) => `
      <text x="40" y="${rowY(i)}" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">${r.stem}</text>
      <text x="130" y="${rowY(i)}" font-family="system-ui" font-size="13" fill="#1e293b">${leafText(r.leaves)}</text>
    `)
    .join('');
  const height = 40 + rows.length * 26 + (note ? 30 : 10);
  return `<svg viewBox="0 0 420 ${height}" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    <text x="20" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Stem</text>
    <text x="130" y="20" font-family="system-ui" font-size="13" font-weight="600" fill="#1e293b">Leaf</text>
    <line x1="110" y1="10" x2="110" y2="${height - (note ? 30 : 10)}" stroke="#475569" stroke-width="1.5"/>
    ${rowsSvg}
    ${note ? `<text x="20" y="${height - 10}" font-family="system-ui" font-size="12" fill="#1e293b">${note}</text>` : ''}
  </svg>`;
};

const svgQ1 = boxplotWithOutliersSvg({ min: 133, q1: 151.5, median: 164, q3: 171.5, max: 189, outliers: [], scaleMin: 130, scaleMax: 195, unit: '' });
const svgQ2 = boxplotWithOutliersSvg({ min: 21, q1: 67, median: 81.5, q3: 100, max: 345, outliers: [256, 345], scaleMin: 0, scaleMax: 350, unit: 'k' });
const svgQ4Rows = [
  { stem: 15, leaves: [6, 8] },
  { stem: 16, leaves: [9, 9] },
  { stem: 17, leaves: [0, 1, 3, 3, 4, 5, 8, 8, 9, 9] },
  { stem: 18, leaves: [0, 0, 1, 3, 3, 4, 7, 7, 8, 8] },
  { stem: 19, leaves: [1, 2, 3] },
];
const svgQ4 = stemLeafSvg(svgQ4Rows, 'n = 27 values (17|0 means 170)');
const svgQ4Box = boxplotWithOutliersSvg({ min: 156, q1: 173, median: 179, q3: 187, max: 193, outliers: [], scaleMin: 150, scaleMax: 200, unit: '' });
const svgQ5 = boxplotWithOutliersSvg({ min: 60, q1: 116, median: 125, q3: 134, max: 190, outliers: [60, 190], scaleMin: 40, scaleMax: 200, unit: '' });
const svgQ6Rows = [
  { stem: 0, leaves: [3, 5] },
  { stem: 1, leaves: [1, 4, 7] },
  { stem: 2, leaves: [0, 4, 4, 4, 6, 7, 8, 9] },
  { stem: 3, leaves: [1, 3, 5, 6] },
  { stem: 4, leaves: [0, 2] },
  { stem: 5, leaves: [1] },
];
const svgQ6 = stemLeafSvg(svgQ6Rows, 'n = 20 speeds, km/h (2|4 means 24)');
const svgQ6Box = boxplotWithOutliersSvg({ min: 3, q1: 18.5, median: 26.5, q3: 34, max: 51, outliers: [], scaleMin: 0, scaleMax: 55, unit: '' });
const svgQ7 = boxplotWithOutliersSvg({ min: 22, q1: 32.5, median: 38.5, q3: 44, max: 62, outliers: [62], scaleMin: 20, scaleMax: 65, unit: '' });
const svgQ8 = boxplotWithOutliersSvg({ min: 4, q1: 5, median: 6, q3: 7.5, max: 13, outliers: [12, 13], scaleMin: 2, scaleMax: 15, unit: '' });

// Mini histograms (a,b,c) and boxplots (i,ii,iii) for the Q3 shape-matching
// question. `reveal:false` (used as the question's root graphData, shown
// BEFORE the student answers) draws the three histograms and three boxplots
// as two SEPARATE, independently-ordered rows with only neutral labels
// (a/b/c, i/ii/iii) — so column position does not itself give away which
// histogram pairs with which boxplot. `reveal:true` (used only in the
// solution steps, shown after answering) stacks each correctly-matched pair
// in the same column with its shape/skew description, as the explanation.
const buildQ3Pairs = (reveal) => {
  const bars = [
    { heights: [2, 5, 9, 9, 5, 2], letter: 'a', desc: 'symmetric' },
    { heights: [1, 2, 4, 6, 8, 9], letter: 'b', desc: 'bulk high, thin tail low' },
    { heights: [9, 8, 6, 4, 2, 1], letter: 'c', desc: 'bulk low, thin tail high' },
  ];
  // Correct pairing: a-iii, b-i, c-ii. For the blank (unrevealed) row, the
  // boxplots are listed in their own natural i/ii/iii order — deliberately
  // NOT reordered to align under their matching histogram.
  // Each box's `min`/`max` is its actual most extreme data value. Where that
  // extreme value is itself the outlier, `whiskerMin`/`whiskerMax` gives the
  // whisker a real (non-outlier) point to end at, so the outlier triangle
  // reads as "beyond the whisker" rather than floating disconnected in
  // empty space with no line ever drawn out to it.
  const boxesByRoman = {
    iii: { min: 20, q1: 42, median: 50, q3: 58, max: 80, outliers: [], roman: 'iii', desc: 'symmetric' },
    i: { min: 20, whiskerMin: 48, q1: 55, median: 62, q3: 68, max: 80, outliers: [20], roman: 'i', desc: 'box shifted high' },
    ii: { min: 20, q1: 32, median: 38, q3: 45, max: 80, whiskerMax: 52, outliers: [80], roman: 'ii', desc: 'box shifted low' },
  };
  const colWidth = 140;
  const barW = 16;
  const histSvg = (heights, colX, yBase) =>
    heights
      .map((h, i) => `<rect x="${colX + i * barW}" y="${yBase - h * 5}" width="${barW - 2}" height="${h * 5}" fill="#93c5fd" stroke="#475569" stroke-width="1"/>`)
      .join('');
  const boxSvg = (b, colX, y) => {
    const scaleMin = 15, scaleMax = 85;
    const x = (v) => colX + ((v - scaleMin) / (scaleMax - scaleMin)) * (colWidth - 20);
    const outlierMarks = b.outliers.map((v) => `<path d="M ${x(v)} ${y - 20} l -4 7 l 8 0 Z" fill="#dc2626"/>`).join('');
    const wMin = b.whiskerMin ?? (b.outliers.includes(b.min) ? b.q1 : b.min);
    const wMax = b.whiskerMax ?? (b.outliers.includes(b.max) ? b.q3 : b.max);
    return `
      <line x1="${x(wMin)}" y1="${y}" x2="${x(b.q1)}" y2="${y}" stroke="#475569" stroke-width="1.5"/>
      <line x1="${x(b.q3)}" y1="${y}" x2="${x(wMax)}" y2="${y}" stroke="#475569" stroke-width="1.5"/>
      <rect x="${x(b.q1)}" y="${y - 10}" width="${x(b.q3) - x(b.q1)}" height="20" fill="#fef3c7" stroke="#475569" stroke-width="1.5"/>
      <line x1="${x(b.median)}" y1="${y - 10}" x2="${x(b.median)}" y2="${y + 10}" stroke="#1e293b" stroke-width="2"/>
      ${outlierMarks}
    `;
  };

  if (!reveal) {
    // Row 1: histograms a, b, c (natural order). Row 2: boxplots i, ii, iii
    // (own natural order, independent of the histogram row above). Generous
    // vertical gaps keep the section headers clear of the tallest bars and
    // clear of the outlier triangle markers (which are drawn ABOVE their
    // box, at rowY-20 to rowY-13) — the previous tighter layout let both
    // collide with the "Histograms:"/"Boxplots:" header text.
    const histBaseline = 95;
    const boxRowY = 180;
    const histRow = bars
      .map((h, i) => {
        const colX = 20 + i * colWidth;
        return `
        ${histSvg(h.heights, colX, histBaseline)}
        <text x="${colX + (barW * h.heights.length) / 2}" y="${histBaseline + 15}" font-family="system-ui" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">${h.letter}</text>
      `;
      })
      .join('');
    const boxRow = ['i', 'ii', 'iii']
      .map((roman, i) => {
        const colX = 20 + i * colWidth;
        return `
        ${boxSvg(boxesByRoman[roman], colX, boxRowY)}
        <text x="${colX + (colWidth - 20) / 2}" y="${boxRowY + 25}" font-family="system-ui" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">${roman}</text>
      `;
      })
      .join('');
    return `<svg viewBox="0 0 440 225" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
      <text x="0" y="16" font-family="system-ui" font-size="11" fill="#64748b">Histograms:</text>
      ${histRow}
      <line x1="0" y1="130" x2="440" y2="130" stroke="#e2e8f0" stroke-width="1"/>
      <text x="0" y="145" font-family="system-ui" font-size="11" fill="#64748b">Boxplots:</text>
      ${boxRow}
    </svg>`;
  }

  // Revealed version: each column stacks the CORRECT pair with its description.
  const pairs = [
    { bar: bars[0], box: boxesByRoman.iii },
    { bar: bars[1], box: boxesByRoman.i },
    { bar: bars[2], box: boxesByRoman.ii },
  ];
  const cols = pairs
    .map(({ bar, box }, i) => {
      const colX = 20 + i * colWidth;
      return `
      ${histSvg(bar.heights, colX, 60)}
      <text x="${colX + (barW * bar.heights.length) / 2}" y="72" font-family="system-ui" font-size="10" fill="#1e293b" text-anchor="middle">${bar.letter}: ${bar.desc}</text>
      ${boxSvg(box, colX, 100)}
      <text x="${colX + (colWidth - 20) / 2}" y="120" font-family="system-ui" font-size="10" fill="#1e293b" text-anchor="middle">${box.roman}: ${box.desc}</text>
    `;
    })
    .join('');
  return `<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">${cols}</svg>`;
};

export const Y10_CH18C_ICEM_QUESTIONS = [
  // ---- Q1: heights of 25 students ----
  {
    id: 'y10-18c-q1ab',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'The heights, measured in centimetres, of 25 students in a class are:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">170, 175, 133, 153, 164, 189, 143, 133, 167, 145, 150, 164, 169, 159, 177, 186, 173, 164, 177, 168, 142, 155, 153, 167, 166</div>Find Q1, the median, Q3, and the interquartile range.',
    opts: [
      'Q1 = 151.5, median = 164, Q3 = 171.5, IQR = 20',
      'Q1 = 150, median = 164, Q3 = 173, IQR = 23',
      'Q1 = 151.5, median = 164, Q3 = 171.5, IQR = 40',
      'Q1 = 153, median = 164, Q3 = 169, IQR = 16',
    ],
    a: 0,
    answer: '0',
    hint: 'Order all 25 values first. n is odd, so the median is a single middle value; split the rest into two halves of 12 for the quartiles.',
    solution: 'Ordered, n=25. median=164 (13th value). Q1=151.5 (avg of 6th&7th), Q3=171.5 (avg of 6th&7th of upper half). IQR=20.',
    solutionSteps: [
      {
        explanation: 'Arrange the 25 heights in ascending order.',
        workingOut:
          '\\(133,133,142,143,145,150,153,153,155,159,164,164,164,\\)\\\\ \\(166,167,167,168,169,170,173,175,177,177,186,189\\)',
        graphData: null,
      },
      {
        explanation: 'n = 25 is odd, so the median is the single middle value, at position \\(\\frac{25+1}{2}=13\\).',
        workingOut: '\\(\\text{median} = 13\\text{th value} = 164\\)',
        graphData: null,
      },
      {
        explanation: 'Remove the median and split the other 24 values into a lower half of 12 and an upper half of 12. Each half is even-sized, so its median is the average of its two middle (6th and 7th) values.',
        workingOut:
          '\\(\\text{lower half: } 133,\\ldots,164 \\Rightarrow Q_1 = \\dfrac{150+153}{2} = 151.5\\)\\\\ \\(\\text{upper half: } 166,\\ldots,189 \\Rightarrow Q_3 = \\dfrac{170+173}{2} = 171.5\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 171.5 - 151.5 = 20\\)',
        graphData: { svg: svgQ1 },
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q1c',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'The heights, measured in centimetres, of 25 students in a class are:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">170, 175, 133, 153, 164, 189, 143, 133, 167, 145, 150, 164, 169, 159, 177, 186, 173, 164, 177, 168, 142, 155, 153, 167, 166</div>(min = 133, Q1 = 151.5, median = 164, Q3 = 171.5, max = 189, IQR = 20). Which of these values are outliers, using the rule "a value is an outlier if it is more than \\(1.5 \\times \\text{IQR}\\) beyond the nearest quartile"?',
    opts: [
      'There are no outliers.',
      '133 is an outlier (below Q1 - 1.5xIQR).',
      '189 is an outlier (above Q3 + 1.5xIQR).',
      'Both 133 and 189 are outliers.',
    ],
    a: 0,
    answer: '0',
    hint: 'Calculate the two outlier boundaries: \\(Q_1 - 1.5 \\times \\text{IQR}\\) and \\(Q_3 + 1.5 \\times \\text{IQR}\\). Any value outside those boundaries is an outlier.',
    solution: 'Lower bound = 151.5-30=121.5, upper bound = 171.5+30=201.5. min=133 and max=189 both lie inside these bounds, so there are no outliers.',
    solutionSteps: [
      {
        explanation: 'State the outlier rule and calculate \\(1.5 \\times \\text{IQR}\\).',
        workingOut: '\\(1.5 \\times \\text{IQR} = 1.5 \\times 20 = 30\\)',
        graphData: { svg: svgQ1 },
      },
      {
        explanation: 'Calculate the lower and upper outlier boundaries.',
        workingOut: '\\(\\text{lower bound} = Q_1 - 30 = 151.5 - 30 = 121.5\\)\\\\ \\(\\text{upper bound} = Q_3 + 30 = 171.5 + 30 = 201.5\\)',
        graphData: null,
      },
      {
        explanation: 'Check the actual minimum and maximum against these boundaries.',
        workingOut: '\\(\\text{min} = 133 > 121.5 \\quad (\\text{inside}), \\qquad \\text{max} = 189 < 201.5 \\quad (\\text{inside})\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: since even the most extreme values (133 and 189) fall inside the boundaries, no value in this data set is an outlier. Pitfall: assuming the smallest and largest values are automatically outliers, without actually checking them against \\(1.5 \\times \\text{IQR}\\), is a common mistake.',
        workingOut: '\\(\\text{no outliers}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q2: annual incomes of 30 people ----
  {
    id: 'y10-18c-q2ab',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question:
      'The annual incomes of 30 people, correct to the nearest $1000, are:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">54000, 67000, 92000, 78000, 54000, 87000, 102000, 112000, 132000, 45000, 256000, 89000, 78000, 98000, 34000, 75000, 65000, 100000, 34000, 68000, 79000, 81000, 82000, 103000, 21000, 345000, 98000, 67000, 105000, 98000</div>Find Q1, the median, Q3, and the interquartile range.',
    opts: [
      'Q1 = $67000, median = $81500, Q3 = $100000, IQR = $33000',
      'Q1 = $67000, median = $80000, Q3 = $100000, IQR = $33000',
      'Q1 = $65000, median = $81500, Q3 = $102000, IQR = $37000',
      'Q1 = $67000, median = $81500, Q3 = $98000, IQR = $31000',
    ],
    a: 0,
    answer: '0',
    hint: 'Order all 30 values. n is even, so the median is the average of the 15th and 16th values. Split into two halves of 15 for the quartiles.',
    solution: 'Ordered, n=30. median=(81000+82000)/2=81500. Q1=67000 (8th value). Q3=100000 (8th value of upper half). IQR=33000.',
    solutionSteps: [
      {
        explanation: 'Arrange the 30 incomes in ascending order (in thousands of dollars for readability).',
        workingOut:
          '\\(21,34,34,45,54,54,65,67,67,68,75,78,78,79,81,\\)\\\\ \\(82,87,89,92,98,98,98,100,102,103,105,112,132,256,345\\)',
        graphData: null,
      },
      {
        explanation: 'n = 30 is even, so the median is the average of the 15th and 16th values.',
        workingOut: '\\(\\text{median} = \\dfrac{81000+82000}{2} = \\$81500\\)',
        graphData: null,
      },
      {
        explanation: 'Split into a lower half of 15 (positions 1-15) and an upper half of 15 (positions 16-30). Each half is odd-sized, so its median is its own single middle (8th) value.',
        workingOut: '\\(Q_1 = 8\\text{th value of lower half} = \\$67000\\)\\\\ \\(Q_3 = 8\\text{th value of upper half} = \\$100000\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 100000 - 67000 = \\$33000\\)',
        graphData: { svg: svgQ2 },
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q2c',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same income data:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">(Q1 = $67000, Q3 = $100000, IQR = $33000, minimum = $21000, maximum = $345000)</div>Which incomes are outliers?',
    opts: ['$256000 and $345000', '$345000 only', '$21000 and $345000', 'There are no outliers.'],
    a: 0,
    answer: '0',
    hint: 'Calculate the outlier boundaries \\(Q_1 - 1.5 \\times \\text{IQR}\\) and \\(Q_3 + 1.5 \\times \\text{IQR}\\), then check every unusually large or small value against them — not just the single maximum.',
    solution: 'Lower bound = 67000-49500=17500, upper bound = 100000+49500=149500. Only 256000 and 345000 exceed the upper bound.',
    solutionSteps: [
      {
        explanation: 'Calculate \\(1.5 \\times \\text{IQR}\\) and the two outlier boundaries.',
        workingOut: '\\(1.5 \\times \\text{IQR} = 1.5 \\times 33000 = 49500\\)\\\\ \\(\\text{lower bound} = 67000-49500 = 17500\\)\\\\ \\(\\text{upper bound} = 100000+49500 = 149500\\)',
        graphData: { svg: svgQ2 },
      },
      {
        explanation: 'Check the minimum against the lower bound: $21000 is greater than $17500, so it is NOT an outlier.',
        workingOut: '\\(\\$21000 > \\$17500 \\Rightarrow \\text{not an outlier}\\)',
        graphData: null,
      },
      {
        explanation: 'Check every value above the upper bound of $149500. Scanning the ordered list, only two incomes exceed it.',
        workingOut: '\\(\\$256000 > \\$149500 \\quad \\text{and} \\quad \\$345000 > \\$149500\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: pitfall — outliers are not always just "the single highest or lowest value"; here TWO separate incomes both exceed the upper boundary.',
        workingOut: '\\(\\text{outliers} = \\$256000, \\$345000\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q3: match histograms to boxplots and describe shape ----
  {
    id: 'y10-18c-q3',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Three histograms (a, b, c) and three boxplots (i, ii, iii), all on the same scale, describe the same three data sets. Histogram a is a symmetric bell shape peaking in the middle. Histogram b has bars increasing in height from left to right (most data concentrated at the high end, with a thin tail toward the low end). Histogram c has bars decreasing in height from left to right (most data concentrated at the low end, with a thin tail toward the high end).<br>Match each histogram to its boxplot and describe the shape of each distribution.',
    opts: [
      'a-iii (symmetric); b-i (negatively skewed — box shifted high, outliers toward the low end); c-ii (positively skewed — box shifted low, outliers toward the high end)',
      'a-iii (symmetric); b-ii (positively skewed); c-i (negatively skewed)',
      'a-i (symmetric); b-ii (negatively skewed); c-iii (positively skewed)',
      'a-ii (symmetric); b-iii (negatively skewed); c-i (positively skewed)',
    ],
    a: 0,
    answer: '0',
    hint: 'A symmetric histogram matches a boxplot with roughly equal whiskers and no outliers. A histogram with a thin tail on one side matches a boxplot whose box is shifted toward the opposite (bulk) side, with outliers appearing on the thin-tail side.',
    solution: 'a matches iii (symmetric); b (bulk high, tail low) is negatively skewed, matching i; c (bulk low, tail high) is positively skewed, matching ii.',
    solutionSteps: [
      {
        explanation: 'Histogram a is a symmetric bell shape, so its boxplot should have a box roughly centred with two whiskers of similar length and no outliers — this matches boxplot iii.',
        workingOut: '\\(a \\to iii \\ (\\text{symmetric})\\)',
        graphData: { svg: buildQ3Pairs(true) },
      },
      {
        explanation: 'Histogram b has most of its data concentrated at the HIGH end, with only a thin tail stretching toward the low end. A distribution with a long thin tail toward low values is called negatively skewed. Its boxplot should have the box shifted toward the high end, with any outliers appearing on the low side.',
        workingOut: '\\(b \\to i \\ (\\text{negatively skewed: tail toward low values})\\)',
        graphData: { svg: buildQ3Pairs(true) },
      },
      {
        explanation: 'Histogram c has most of its data concentrated at the LOW end, with a thin tail stretching toward the high end. This is called positively skewed. Its boxplot should have the box shifted toward the low end, with any outliers appearing on the high side.',
        workingOut: '\\(c \\to ii \\ (\\text{positively skewed: tail toward high values})\\)',
        graphData: { svg: buildQ3Pairs(true) },
      },
      {
        explanation: 'Final answer: match all three pairs and their shape descriptions together. Pitfall: it is very common to swap "positively skewed" and "negatively skewed" — the skew direction refers to which side has the long thin TAIL, not which side has the bulk of the data.',
        workingOut: '\\(a\\text{-}iii,\\ b\\text{-}i,\\ c\\text{-}ii\\)',
        graphData: { svg: buildQ3Pairs(true) },
      },
    ],
    graphData: { svg: buildQ3Pairs(false) },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q4: stem-and-leaf plot ----
  {
    id: 'y10-18c-q4a',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Consider the data shown in the stem-and-leaf plot (17|0 means 170):<br><br>Stem | Leaf<br>15 | 6 8<br>16 | 9 9<br>17 | 0 1 3 3 4 5 8 8 9 9<br>18 | 0 0 1 3 3 4 7 7 8 8<br>19 | 1 2 3<br><br>If this data is grouped into a histogram with class width 10 (150-159, 160-169, etc.), which class interval(s) have the highest frequency?',
    opts: ['170-179 and 180-189 (tied at 10 each)', '170-179 only (10)', '180-189 only (10)', '150-159 and 190-199 (tied at 3 each)'],
    a: 0,
    answer: '0',
    hint: 'Count how many leaves are in each stem row — each stem row IS one class interval when the class width matches the stem.',
    solution: 'Row counts: 150s=2, 160s=2, 170s=10, 180s=10, 190s=3. The two highest (tied) are 170-179 and 180-189.',
    solutionSteps: [
      {
        explanation: 'Since the class width (10) matches the stem, each stem row is exactly one histogram class. Count the leaves in each row.',
        workingOut: '\\(150\\text{-}159: 2, \\quad 160\\text{-}169: 2, \\quad 170\\text{-}179: 10, \\quad 180\\text{-}189: 10, \\quad 190\\text{-}199: 3\\)',
        graphData: { svg: svgQ4 },
      },
      {
        explanation: 'Compare all five frequencies to find the highest.',
        workingOut: '\\(2, 2, 10, 10, 3\\)',
        graphData: null,
      },
      {
        explanation: 'Two classes are tied for the highest frequency. Pitfall: assuming only one class can "win" and picking just one of the tied classes is a common mistake — always check for ties.',
        workingOut: '\\(\\max = 10, \\text{ achieved by both } 170\\text{-}179 \\text{ and } 180\\text{-}189\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: both 170-179 and 180-189 have the highest frequency, 10.',
        workingOut: '\\(170\\text{-}179 \\text{ and } 180\\text{-}189, \\text{ each with frequency } 10\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q4b',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same stem-and-leaf plot (n = 27, 17|0 means 170):<br><br>Stem | Leaf<br>15 | 6 8<br>16 | 9 9<br>17 | 0 1 3 3 4 5 8 8 9 9<br>18 | 0 0 1 3 3 4 7 7 8 8<br>19 | 1 2 3<br><br>Find Q1, the median, Q3 and the interquartile range.',
    opts: [
      'Q1 = 173, median = 179, Q3 = 187, IQR = 14',
      'Q1 = 173, median = 178, Q3 = 187, IQR = 14',
      'Q1 = 171, median = 179, Q3 = 188, IQR = 17',
      'Q1 = 173, median = 179, Q3 = 188, IQR = 15',
    ],
    a: 0,
    answer: '0',
    hint: 'n = 27 is odd, so the median is the single middle (14th) value. Split the remaining 26 values into two halves of 13.',
    solution: 'median=179 (14th value). Q1=173 (7th value of lower 13), Q3=187 (7th value of upper 13). IQR=14.',
    solutionSteps: [
      {
        explanation: 'Read the ordered data from the plot: n = 2+2+10+10+3 = 27 values.',
        workingOut: '\\(n = 27\\)',
        graphData: { svg: svgQ4 },
      },
      {
        explanation: 'n = 27 is odd, so the median is the single middle value at position \\(\\frac{27+1}{2} = 14\\). Counting cumulatively (2, 4, 14), the 14th value is the last leaf of the stem-17 row.',
        workingOut: '\\(\\text{median} = 14\\text{th value} = 179\\)',
        graphData: null,
      },
      {
        explanation: 'Remove the median and split the remaining 26 values into a lower half of 13 (positions 1-13) and an upper half of 13 (positions 15-27). Each half is odd-sized, so its median is its own single middle (7th) value.',
        workingOut: '\\(Q_1 = 7\\text{th value of lower half} = 173\\)\\\\ \\(Q_3 = 7\\text{th value of upper half} = 187\\)',
        graphData: { svg: svgQ4Box },
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 187 - 173 = 14\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q4c',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'Using the same data:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">(min = 156, Q1 = 173, median = 179, Q3 = 187, max = 193, IQR = 14)</div>Are there any outliers?',
    opts: ['No outliers', '156 is an outlier', '193 is an outlier', 'Both 156 and 193 are outliers'],
    a: 0,
    answer: '0',
    hint: 'Calculate \\(Q_1 - 1.5 \\times \\text{IQR}\\) and \\(Q_3 + 1.5 \\times \\text{IQR}\\), then compare the actual minimum and maximum to those boundaries.',
    solution: 'Lower bound = 173-21=152, upper bound = 187+21=208. min=156 and max=193 both lie within these bounds, so there are no outliers.',
    solutionSteps: [
      {
        explanation: 'Calculate \\(1.5 \\times \\text{IQR}\\) and the outlier boundaries.',
        workingOut: '\\(1.5 \\times 14 = 21\\)\\\\ \\(\\text{lower bound} = 173-21=152, \\quad \\text{upper bound} = 187+21=208\\)',
        graphData: { svg: svgQ4Box },
      },
      {
        explanation: 'Compare the actual minimum and maximum against the boundaries.',
        workingOut: '\\(156 > 152 \\ (\\text{inside}), \\quad 193 < 208 \\ (\\text{inside})\\)',
        graphData: null,
      },
      {
        explanation: 'Since both extreme values fall inside the boundaries, neither is an outlier.',
        workingOut: '\\(\\text{no values outside } [152, 208]\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: there are no outliers in this data set.',
        workingOut: '\\(\\text{no outliers}\\)',
        graphData: { svg: svgQ4Box },
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q4d',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'Comment on the shape of the histogram and boxplot for this data (class frequencies: 150s=2, 160s=2, 170s=10, 180s=10, 190s=3; min=156, Q1=173, median=179, Q3=187, max=193, no outliers).',
    opts: [
      'Approximately symmetric — the two tallest classes (170s and 180s) sit either side of the median, with roughly matching small classes at both ends.',
      'Strongly positively skewed — most of the data is concentrated at the low end with a long tail toward high values.',
      'Strongly negatively skewed — most of the data is concentrated at the high end with a long tail toward low values.',
      'Uniform — every class has approximately the same frequency.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the class frequencies on either side of the median, and compare the two whisker lengths (Q1 - min) vs (max - Q3).',
    solution: 'Frequencies rise to a peak around 170-189 then fall off similarly on both sides; whisker lengths (173-156=17) and (193-187=6) are roughly comparable given the small tail counts — overall a roughly symmetric shape.',
    solutionSteps: [
      {
        explanation: 'Look at the histogram frequencies: they rise from 2 (150s) to 10 (170s and 180s, tied) then fall to 3 (190s) — a rise-then-fall shape typical of a roughly symmetric or bell-shaped distribution, not a one-directional skew.',
        workingOut: '\\(2, 2, 10, 10, 3\\)',
        graphData: null,
      },
      {
        explanation: 'Check the boxplot whisker lengths, which should be roughly comparable for a symmetric distribution.',
        workingOut: '\\(\\text{left whisker} = Q_1 - \\text{min} = 173-156 = 17\\)\\\\ \\(\\text{right whisker} = \\text{max} - Q_3 = 193-187 = 6\\)',
        graphData: { svg: svgQ4Box },
      },
      {
        explanation: 'While the whiskers are not perfectly equal, both the histogram shape (peak in the middle two classes with small tails on both sides) and the fact there are no outliers on either side both point away from a strong skew.',
        workingOut: '\\(\\text{peak near the centre, small tails both sides}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: this data set is best described as approximately symmetric.',
        workingOut: '\\(\\text{approximately symmetric}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q5: outlier classification from given quartiles ----
  {
    id: 'y10-18c-q5',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The lower and upper quartiles for a data set are 116 and 134. Which of the following data values would be classified as an outlier: 190, 60, or 150?',
    opts: ['190 and 60 only', '190 only', 'All three (190, 60, 150)', '150 only'],
    a: 0,
    answer: '0',
    hint: 'IQR = 134 - 116 = 18. Calculate both boundaries, \\(Q_1 - 1.5 \\times \\text{IQR}\\) and \\(Q_3 + 1.5 \\times \\text{IQR}\\), and check each value individually.',
    solution: 'IQR=18. Bounds: 116-27=89, 134+27=161. 190>161 (outlier). 60<89 (outlier). 150 is between 89 and 161 (not an outlier).',
    solutionSteps: [
      {
        explanation: 'Calculate the IQR and \\(1.5 \\times \\text{IQR}\\).',
        workingOut: '\\(\\text{IQR} = 134-116 = 18\\)\\\\ \\(1.5 \\times \\text{IQR} = 27\\)',
        graphData: null,
      },
      {
        explanation: 'Calculate the two outlier boundaries.',
        workingOut: '\\(\\text{lower bound} = 116-27 = 89\\)\\\\ \\(\\text{upper bound} = 134+27 = 161\\)',
        graphData: { svg: svgQ5 },
      },
      {
        explanation: 'Check each of the three values against the boundaries individually.',
        workingOut: '\\(190 > 161 \\Rightarrow \\text{outlier}\\)\\\\ \\(60 < 89 \\Rightarrow \\text{outlier}\\)\\\\ \\(89 < 150 < 161 \\Rightarrow \\text{not an outlier}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: pitfall — 150 might look "large" at a glance, but it is well inside the upper boundary of 161, so it is not an outlier.',
        workingOut: '\\(\\text{outliers: } 190 \\text{ and } 60\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q6: speeds of 20 cars ----
  {
    id: 'y10-18c-q6a',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The speeds of 20 cars measured on a city street were recorded (km/h):<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">40, 14, 3, 26, 20, 31, 42, 36, 17, 24, 28, 33, 27, 29, 24, 51, 11, 35, 5, 24</div>If this data is arranged into a stem-and-leaf diagram (stem = tens digit), how many leaves are in the stem "2" row (speeds 20-29 km/h)?',
    opts: ['\\(8\\)', '\\(6\\)', '\\(7\\)', '\\(9\\)'],
    a: 0,
    answer: '0',
    hint: 'List every speed from 20 to 29 in the data set, including repeats.',
    solution: 'Speeds in the 20s: 26, 20, 24, 28, 27, 29, 24, 24 = 8 values.',
    solutionSteps: [
      {
        explanation: 'Scan through the full list and pick out every value between 20 and 29 (inclusive), keeping every repeat.',
        workingOut: '\\(26, 20, 24, 28, 27, 29, 24, 24\\)',
        graphData: { svg: svgQ6 },
      },
      {
        explanation: 'Count how many values were found.',
        workingOut: '\\(\\text{count} = 8\\)',
        graphData: null,
      },
      {
        explanation: 'Pitfall: it is easy to miss a repeated value (like 24, which appears three times) when scanning quickly through an unordered list — sort the data first, or tally carefully, to avoid under- or over-counting.',
        workingOut: '\\(24 \\text{ appears 3 times in this data set}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the stem "2" row has 8 leaves.',
        workingOut: '\\(8 \\text{ leaves}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q6b',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same 20 car speeds, ordered:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">3, 5, 11, 14, 17, 20, 24, 24, 24, 26, 27, 28, 29, 31, 33, 35, 36, 40, 42, 51</div>find Q1, the median, Q3 and the IQR (for the boxplot).',
    opts: [
      'Q1 = 18.5, median = 26.5, Q3 = 34, IQR = 15.5',
      'Q1 = 17, median = 26.5, Q3 = 35, IQR = 18',
      'Q1 = 18.5, median = 26, Q3 = 34, IQR = 15.5',
      'Q1 = 20, median = 26.5, Q3 = 33, IQR = 13',
    ],
    a: 0,
    answer: '0',
    hint: 'n = 20 is even. Median = average of the 10th and 11th values. Split into two halves of 10 for the quartiles.',
    solution: 'median=(26+27)/2=26.5. Q1=(17+20)/2=18.5. Q3=(33+35)/2=34. IQR=15.5.',
    solutionSteps: [
      {
        explanation: 'n = 20 is even, so the median is the average of the 10th and 11th values.',
        workingOut: '\\(\\text{median} = \\dfrac{26+27}{2} = 26.5\\)',
        graphData: null,
      },
      {
        explanation: 'Split into a lower half of 10 (positions 1-10) and an upper half of 10 (positions 11-20). Each half is even-sized, so its median is the average of its 5th and 6th values.',
        workingOut: '\\(\\text{lower half: } 3,5,11,14,17,20,24,24,24,26 \\Rightarrow Q_1 = \\dfrac{17+20}{2} = 18.5\\)',
        graphData: null,
      },
      {
        explanation: 'Repeat for the upper half to find Q3.',
        workingOut: '\\(\\text{upper half: } 27,28,29,31,33,35,36,40,42,51 \\Rightarrow Q_3 = \\dfrac{33+35}{2} = 34\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 34 - 18.5 = 15.5\\)',
        graphData: { svg: svgQ6Box },
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q6c',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The speeds of 20 cars measured on a city street were recorded (km/h):<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">40, 14, 3, 26, 20, 31, 42, 36, 17, 24, 28, 33, 27, 29, 24, 51, 11, 35, 5, 24</div>(min = 3, Q1 = 18.5, median = 26.5, Q3 = 34, max = 51). Comment on the shape of the distribution.',
    opts: [
      'Slightly positively skewed — the upper whisker (Q3 to max) is a bit longer than the lower whisker (min to Q1), showing a mild tail toward higher speeds.',
      'Strongly negatively skewed — almost all values are bunched near the maximum speed.',
      'Perfectly symmetric — both whiskers are exactly equal in length.',
      'Uniform — speeds are spread completely evenly across the whole range.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the two whisker lengths: (Q1 - min) vs (max - Q3).',
    solution: 'left whisker = 18.5-3=15.5, right whisker = 51-34=17. The right whisker is slightly longer, indicating a mild positive skew.',
    solutionSteps: [
      {
        explanation: 'Calculate the length of each whisker.',
        workingOut: '\\(\\text{left whisker} = Q_1 - \\text{min} = 18.5 - 3 = 15.5\\)\\\\ \\(\\text{right whisker} = \\text{max} - Q_3 = 51 - 34 = 17\\)',
        graphData: { svg: svgQ6Box },
      },
      {
        explanation: 'Compare the two lengths.',
        workingOut: '\\(17 > 15.5\\)',
        graphData: null,
      },
      {
        explanation: 'A slightly longer right (upper) whisker suggests a mild positive skew — a small tail of higher speed values (like 40, 42, 51) stretching the data upward.',
        workingOut: '\\(\\text{right whisker slightly longer} \\Rightarrow \\text{mild positive skew}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the distribution is slightly positively skewed, not strongly skewed, symmetric, or uniform.',
        workingOut: '\\(\\text{slightly positively skewed}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q7: reaction times of 20 people ----
  {
    id: 'y10-18c-q7ab',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'The reaction times (in milliseconds) of 20 people are listed:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">38, 31, 36, 39, 35, 25, 35, 44, 43, 44, 46, 34, 62, 22, 42, 48, 31, 30, 45, 40</div>Find the median, Q1, Q3 and the interquartile range.',
    opts: [
      'median = 38.5, Q1 = 32.5, Q3 = 44, IQR = 11.5',
      'median = 39, Q1 = 31, Q3 = 44, IQR = 13',
      'median = 38.5, Q1 = 32.5, Q3 = 45, IQR = 12.5',
      'median = 38, Q1 = 34, Q3 = 44, IQR = 10',
    ],
    a: 0,
    answer: '0',
    hint: 'Order the 20 values first. n is even, so median = average of 10th and 11th values. Split into two halves of 10 for the quartiles.',
    solution: 'Ordered: 22,25,30,31,31,34,35,35,36,38,39,40,42,43,44,44,45,46,48,62. median=38.5, Q1=32.5, Q3=44, IQR=11.5.',
    solutionSteps: [
      {
        explanation: 'Arrange the 20 reaction times in ascending order.',
        workingOut: '\\(22,25,30,31,31,34,35,35,36,38,39,40,42,43,44,44,45,46,48,62\\)',
        graphData: null,
      },
      {
        explanation: 'n = 20 is even, so the median is the average of the 10th and 11th values.',
        workingOut: '\\(\\text{median} = \\dfrac{38+39}{2} = 38.5\\)',
        graphData: null,
      },
      {
        explanation: 'Split into a lower half of 10 (positions 1-10) and an upper half of 10 (positions 11-20).',
        workingOut: '\\(\\text{lower half: } 22,25,30,31,31,34,35,35,36,38 \\Rightarrow Q_1 = \\dfrac{31+34}{2} = 32.5\\)\\\\ \\(\\text{upper half: } 39,40,42,43,44,44,45,46,48,62 \\Rightarrow Q_3 = \\dfrac{44+44}{2} = 44\\)',
        graphData: { svg: svgQ7 },
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 44 - 32.5 = 11.5\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q7c',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same reaction time data:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">(min = 22, Q1 = 32.5, median = 38.5, Q3 = 44, max = 62, IQR = 11.5)</div>Identify any outliers.',
    opts: ['62 is an outlier', '22 is an outlier', 'Both 22 and 62 are outliers', 'There are no outliers'],
    a: 0,
    answer: '0',
    hint: 'Calculate \\(Q_1 - 1.5 \\times \\text{IQR}\\) and \\(Q_3 + 1.5 \\times \\text{IQR}\\), and check the minimum and maximum against them.',
    solution: 'Lower bound = 32.5-17.25=15.25, upper bound = 44+17.25=61.25. min=22>15.25 (not outlier). max=62>61.25, so 62 IS an outlier.',
    solutionSteps: [
      {
        explanation: 'Calculate \\(1.5 \\times \\text{IQR}\\) and the outlier boundaries.',
        workingOut: '\\(1.5 \\times 11.5 = 17.25\\)\\\\ \\(\\text{lower bound} = 32.5-17.25=15.25, \\quad \\text{upper bound} = 44+17.25=61.25\\)',
        graphData: null,
      },
      {
        explanation: 'Check the minimum against the lower bound.',
        workingOut: '\\(22 > 15.25 \\Rightarrow \\text{not an outlier}\\)',
        graphData: null,
      },
      {
        explanation: 'Check the maximum against the upper bound.',
        workingOut: '\\(62 > 61.25 \\Rightarrow \\text{IS an outlier}\\)',
        graphData: { svg: svgQ7 },
      },
      {
        explanation: 'Final answer: pitfall — 62 only just clears the boundary (61.25), so it is easy to wrongly dismiss it as "not extreme enough"; always compare the exact numbers rather than eyeballing.',
        workingOut: '\\(\\text{only } 62 \\text{ is an outlier}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q8: weight loss data ----
  {
    id: 'y10-18c-q8a',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The weight loss (in kilograms) of 20 randomly selected people undertaking a special diet over three weeks is:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">8, 5, 10, 6, 6, 12, 4, 5, 5, 6, 8, 13, 7, 7, 7, 6, 6, 4, 5, 5</div>If this data is displayed as a dotplot, what is the mode (or modes)?',
    opts: ['5 kg and 6 kg (bimodal — both occur 5 times)', '6 kg only (occurs 6 times)', '5 kg only (occurs 6 times)', '7 kg (occurs the most, 4 times)'],
    a: 0,
    answer: '0',
    hint: 'Tally how many times each weight-loss value occurs. There can be more than one mode if two values tie for the highest frequency.',
    solution: 'Tally: 4->2, 5->5, 6->5, 7->3, 8->2, 10->1, 12->1, 13->1. Both 5 and 6 tie for the highest count (5 each).',
    solutionSteps: [
      {
        explanation: 'Tally how many times each value appears in the data set.',
        workingOut: '\\(4:2,\\ 5:5,\\ 6:5,\\ 7:3,\\ 8:2,\\ 10:1,\\ 12:1,\\ 13:1\\)',
        graphData: null,
      },
      {
        explanation: 'The mode is the value (or values) with the highest frequency. Here, 5 and 6 are tied with a frequency of 5 each — higher than any other value.',
        workingOut: '\\(\\max(\\text{frequency}) = 5, \\text{ shared by } 5 \\text{ kg and } 6 \\text{ kg}\\)',
        graphData: null,
      },
      {
        explanation: 'A data set can have more than one mode — this is called bimodal.',
        workingOut: '\\(\\text{bimodal: } 5 \\text{ kg and } 6 \\text{ kg}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: pitfall — stopping the tally early or miscounting one value (e.g. thinking 6 appears 6 times) can hide the tie and make it look like there is a single mode.',
        workingOut: '\\(\\text{modes} = 5 \\text{ kg and } 6 \\text{ kg}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q8b',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same weight loss data, ordered:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 10, 12, 13</div>find Q1, the median, Q3 and the IQR for the boxplot.',
    opts: [
      'Q1 = 5, median = 6, Q3 = 7.5, IQR = 2.5',
      'Q1 = 5, median = 6, Q3 = 7, IQR = 2',
      'Q1 = 4.5, median = 6, Q3 = 7.5, IQR = 3',
      'Q1 = 5, median = 6.5, Q3 = 7.5, IQR = 2.5',
    ],
    a: 0,
    answer: '0',
    hint: 'n = 20 is even. Median = average of 10th and 11th values. Split into two halves of 10 for the quartiles.',
    solution: 'median=(6+6)/2=6. Q1=(5+5)/2=5. Q3=(7+8)/2=7.5. IQR=2.5.',
    solutionSteps: [
      {
        explanation: 'n = 20 is even, so the median is the average of the 10th and 11th values.',
        workingOut: '\\(\\text{median} = \\dfrac{6+6}{2} = 6\\)',
        graphData: null,
      },
      {
        explanation: 'Split into a lower half of 10 (positions 1-10) and an upper half of 10 (positions 11-20).',
        workingOut: '\\(\\text{lower half: } 4,4,5,5,5,5,5,6,6,6 \\Rightarrow Q_1 = \\dfrac{5+5}{2} = 5\\)',
        graphData: null,
      },
      {
        explanation: 'Repeat for the upper half to find Q3.',
        workingOut: '\\(\\text{upper half: } 6,6,7,7,7,8,8,10,12,13 \\Rightarrow Q_3 = \\dfrac{7+8}{2} = 7.5\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 7.5 - 5 = 2.5\\)',
        graphData: { svg: svgQ8 },
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18c-q8c',
    topicId: 'y10-18c-icem',
    c: '18C',
    t: 'Boxplots, histograms and outliers',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Using the same weight loss data:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">(min = 4, Q1 = 5, median = 6, Q3 = 7.5, max = 13, IQR = 2.5)</div>Comment on the shape and identify any outliers.',
    opts: [
      'Positively skewed (tail toward higher weight loss), with outliers at 12 kg and 13 kg.',
      'Negatively skewed (tail toward lower weight loss), with no outliers.',
      'Symmetric, with an outlier at 4 kg.',
      'Positively skewed, with no outliers.',
    ],
    a: 0,
    answer: '0',
    hint: 'Calculate the outlier boundaries first, then compare whisker lengths to judge the skew direction.',
    solution: 'Bounds: 5-3.75=1.25, 7.5+3.75=11.25. 12 and 13 exceed the upper bound (outliers). The long right whisker/tail (up to 13) vs short left side shows positive skew.',
    solutionSteps: [
      {
        explanation: 'Calculate the outlier boundaries.',
        workingOut: '\\(1.5 \\times 2.5 = 3.75\\)\\\\ \\(\\text{lower bound} = 5-3.75=1.25, \\quad \\text{upper bound} = 7.5+3.75=11.25\\)',
        graphData: { svg: svgQ8 },
      },
      {
        explanation: 'Check the extreme values against the boundaries.',
        workingOut: '\\(4 > 1.25 \\ (\\text{not an outlier}), \\quad 12 > 11.25 \\ (\\text{outlier}), \\quad 13 > 11.25 \\ (\\text{outlier})\\)',
        graphData: null,
      },
      {
        explanation: 'Compare the general spread on each side of the median: most values cluster tightly between 4 and 8, with just a couple of much larger values (10, 12, 13) stretching the data upward — a tail toward high values.',
        workingOut: '\\(\\text{most data in } [4,8], \\text{ few high values up to } 13\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: a tail toward higher values is a positive skew, and 12 kg and 13 kg both lie beyond the upper outlier boundary.',
        workingOut: '\\(\\text{positively skewed, outliers at 12 kg and 13 kg}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
];
