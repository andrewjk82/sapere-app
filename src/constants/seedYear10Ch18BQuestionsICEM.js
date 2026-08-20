// Year 10 Chapter 18: Statistics — ICE-EM Mathematics 10 (3ed), Chapter 18,
// Exercise 18B: "Boxplots" (pp.526-528). All possible questions converted to
// multiple_choice; genuinely open-ended discussion/justification questions
// (Q8, part of Q10, part of Q11) kept as teacher_review per CLAUDE.md.
//
// The source PDF's boxplots (Q1, Q2, Q3, Q9, Q10, Q11) are scanned diagrams
// whose whisker endpoints cannot be read back precisely from the extracted
// page image, so each is rebuilt here as a self-consistent, exactly-labelled
// SVG boxplot with its own five-number summary (same approach used for the
// dot-plot question in the previous y10-18b topic) — this keeps every
// question objectively gradable while testing the same boxplot-reading
// skill the textbook exercise targets.

const scaleTicks = (scaleMin, scaleMax, step, x0, xScale, y) =>
  Array.from({ length: Math.floor((scaleMax - scaleMin) / step) + 1 }, (_, i) => scaleMin + i * step)
    .map(
      (v) => `<line x1="${x0 + (v - scaleMin) * xScale}" y1="${y - 4}" x2="${x0 + (v - scaleMin) * xScale}" y2="${y + 4}" stroke="#475569" stroke-width="1"/><text x="${x0 + (v - scaleMin) * xScale}" y="${y + 18}" font-family="system-ui" font-size="10" fill="#64748b" text-anchor="middle">${v}</text>`
    )
    .join('');

// Single boxplot on its own scale. `reveal:true` labels the five-number
// summary with its exact values (for use in solution steps, AFTER the
// question is answered) — `reveal:false` (default) draws only the box,
// whiskers and a numbered axis, with NO value callouts, so a question whose
// root graphData IS the boxplot the student must read values off of does
// not hand them the answer on the question screen itself.
const singleBoxplotSvg = ({ min, q1, median, q3, max, scaleMin, scaleMax, unit = '', reveal = false }) => {
  const x0 = 30;
  const width = 380;
  const xScale = width / (scaleMax - scaleMin);
  const y = 70;
  const x = (v) => x0 + (v - scaleMin) * xScale;
  const labels = reveal
    ? `
    <text x="${x(min) - 4}" y="${y - 22}" font-family="system-ui" font-size="10" font-weight="600" fill="#1e293b" text-anchor="end">${min}${unit}</text>
    <text x="${x(q1) - 4}" y="${y - 22}" font-family="system-ui" font-size="10" font-weight="600" fill="#16a34a" text-anchor="end">Q1=${q1}${unit}</text>
    <text x="${x(median)}" y="${y + 30}" font-family="system-ui" font-size="10" font-weight="600" fill="#1e293b" text-anchor="middle">med=${median}${unit}</text>
    <text x="${x(q3) + 4}" y="${y - 22}" font-family="system-ui" font-size="10" font-weight="600" fill="#16a34a" text-anchor="start">Q3=${q3}${unit}</text>
    <text x="${x(max) + 4}" y="${y - 22}" font-family="system-ui" font-size="10" font-weight="600" fill="#1e293b" text-anchor="start">${max}${unit}</text>
    `
    : '';
  return `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    <line x1="${x(min)}" y1="${y}" x2="${x(q1)}" y2="${y}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(q3)}" y1="${y}" x2="${x(max)}" y2="${y}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(min)}" y1="${y - 12}" x2="${x(min)}" y2="${y + 12}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(max)}" y1="${y - 12}" x2="${x(max)}" y2="${y + 12}" stroke="#475569" stroke-width="2"/>
    <rect x="${x(q1)}" y="${y - 18}" width="${x(q3) - x(q1)}" height="36" fill="#dbeafe" stroke="#475569" stroke-width="2" opacity="0.8"/>
    <line x1="${x(median)}" y1="${y - 18}" x2="${x(median)}" y2="${y + 18}" stroke="#1e293b" stroke-width="2.5"/>
    ${labels}
    <line x1="${x0}" y1="${y + 50}" x2="${x0 + width}" y2="${y + 50}" stroke="#475569" stroke-width="1"/>
    ${scaleTicks(scaleMin, scaleMax, (scaleMax - scaleMin) / 8, x0, xScale, y + 50)}
  </svg>`;
};

// Multiple stacked boxplots on a shared scale, for comparison questions.
// Label sits ABOVE each row (not to its left) — a left-side label at a fixed
// x=0 used to run underneath/through the row's own whisker and tick marks
// whenever that row's minimum was close to the left edge of the scale
// (e.g. "Symmetric example" over a box starting near x=10 on a 0-90 scale).
const comparisonBoxplotSvg = (rows, scaleMin, scaleMax) => {
  const x0 = 30;
  const width = 380;
  const xScale = width / (scaleMax - scaleMin);
  const x = (v) => x0 + (v - scaleMin) * xScale;
  const rowsSvg = rows
    .map((r, i) => {
      const y = 55 + i * 65;
      return `
      <text x="${x0}" y="${y - 22}" font-family="system-ui" font-size="12" font-weight="600" fill="#1e293b">${r.label}</text>
      <line x1="${x(r.min)}" y1="${y}" x2="${x(r.q1)}" y2="${y}" stroke="#475569" stroke-width="2"/>
      <line x1="${x(r.q3)}" y1="${y}" x2="${x(r.max)}" y2="${y}" stroke="#475569" stroke-width="2"/>
      <line x1="${x(r.min)}" y1="${y - 10}" x2="${x(r.min)}" y2="${y + 10}" stroke="#475569" stroke-width="2"/>
      <line x1="${x(r.max)}" y1="${y - 10}" x2="${x(r.max)}" y2="${y + 10}" stroke="#475569" stroke-width="2"/>
      <rect x="${x(r.q1)}" y="${y - 14}" width="${x(r.q3) - x(r.q1)}" height="28" fill="${r.color || '#dbeafe'}" stroke="#475569" stroke-width="2" opacity="0.8"/>
      <line x1="${x(r.median)}" y1="${y - 14}" x2="${x(r.median)}" y2="${y + 14}" stroke="#1e293b" stroke-width="2.5"/>
      `;
    })
    .join('');
  const axisY = 55 + rows.length * 65 - 10;
  return `<svg viewBox="0 0 440 ${axisY + 40}" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    ${rowsSvg}
    <line x1="${x0}" y1="${axisY}" x2="${x0 + width}" y2="${axisY}" stroke="#475569" stroke-width="1.5"/>
    ${scaleTicks(scaleMin, scaleMax, (scaleMax - scaleMin) / 8, x0, xScale, axisY)}
  </svg>`;
};

const svgQ1 = singleBoxplotSvg({ min: 15, q1: 20, median: 25, q3: 30, max: 40, scaleMin: 10, scaleMax: 50, unit: '' });
const svgQ2 = singleBoxplotSvg({ min: 45, q1: 85, median: 100, q3: 120, max: 165, scaleMin: 40, scaleMax: 180, unit: 'k' });
const svgQ3 = singleBoxplotSvg({ min: 42, q1: 58, median: 68, q3: 78, max: 95, scaleMin: 40, scaleMax: 100, unit: '' });
const svgQ4 = singleBoxplotSvg({ min: 54, q1: 64, median: 76, q3: 82, max: 95, scaleMin: 50, scaleMax: 100, unit: '' });
const svgQ5 = singleBoxplotSvg({ min: 60, q1: 69.5, median: 75, q3: 78.5, max: 90, scaleMin: 55, scaleMax: 95, unit: '' });
const svgQ9 = comparisonBoxplotSvg(
  [
    { label: 'Data set A', min: 20, q1: 28, median: 32, q3: 35, max: 40, color: '#dbeafe' },
    { label: 'Data set B', min: 15, q1: 22, median: 30, q3: 38, max: 48, color: '#fef3c7' },
  ],
  10,
  50
);
const svgQ10 = comparisonBoxplotSvg(
  [
    { label: 'Class A', min: 22, q1: 30, median: 35, q3: 38, max: 42, color: '#dbeafe' },
    { label: 'Class B', min: 15, q1: 25, median: 32, q3: 39, max: 48, color: '#fef3c7' },
  ],
  10,
  50
);
const svgQ11 = comparisonBoxplotSvg(
  [
    { label: 'Channel A', min: 8, q1: 13, median: 16, q3: 19, max: 25, color: '#dbeafe' },
    { label: 'Channel B', min: 9, q1: 12, median: 18, q3: 21, max: 23, color: '#fef3c7' },
    { label: 'Channel C', min: 13, q1: 15, median: 16.5, q3: 17.5, max: 20, color: '#e0e7ff' },
  ],
  5,
  27
);

// Generic boxplot divided into its four quartile regions, for Q6.
// `reveal:false` (root graphData + early steps, shown before/while solving)
// shades the four regions WITHOUT stating what % each one is — that is
// exactly what the question asks, so labelling it upfront would hand over
// the answer. `reveal:true` (only the final solution step) adds the "25%"
// labels as the worked-out answer.
const buildQ6Regions = (reveal) => {
  const min = 0, q1 = 25, median = 50, q3 = 75, max = 100;
  const x0 = 30, width = 380, scaleMin = 0, scaleMax = 100;
  const xScale = width / (scaleMax - scaleMin);
  const y = 70;
  const x = (v) => x0 + (v - scaleMin) * xScale;
  const region = (a, b, color, label) => `
    <rect x="${x(a)}" y="${y - 18}" width="${x(b) - x(a)}" height="36" fill="${color}" opacity="0.5"/>
    ${label ? `<text x="${(x(a) + x(b)) / 2}" y="${y + 40}" font-family="system-ui" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">${label}</text>` : ''}
  `;
  return `<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    ${region(min, q1, '#fca5a5', reveal ? '25% (left whisker)' : '')}
    ${region(q1, median, '#93c5fd', reveal ? '25% (box, lower)' : '')}
    ${region(median, q3, '#93c5fd', reveal ? '25% (box, upper)' : '')}
    ${region(q3, max, '#fca5a5', reveal ? '25% (right whisker)' : '')}
    <line x1="${x(min)}" y1="${y}" x2="${x(q1)}" y2="${y}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(q3)}" y1="${y}" x2="${x(max)}" y2="${y}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(min)}" y1="${y - 12}" x2="${x(min)}" y2="${y + 12}" stroke="#475569" stroke-width="2"/>
    <line x1="${x(max)}" y1="${y - 12}" x2="${x(max)}" y2="${y + 12}" stroke="#475569" stroke-width="2"/>
    <rect x="${x(q1)}" y="${y - 18}" width="${x(q3) - x(q1)}" height="36" fill="none" stroke="#475569" stroke-width="2"/>
    <line x1="${x(median)}" y1="${y - 18}" x2="${x(median)}" y2="${y + 18}" stroke="#1e293b" stroke-width="2.5"/>
    <text x="${x(min)}" y="${y - 24}" font-family="system-ui" font-size="10" fill="#1e293b" text-anchor="middle">min</text>
    <text x="${x(q1)}" y="${y - 24}" font-family="system-ui" font-size="10" font-weight="600" fill="#16a34a" text-anchor="middle">Q1</text>
    <text x="${x(median)}" y="${y - 24}" font-family="system-ui" font-size="10" fill="#1e293b" text-anchor="middle">median</text>
    <text x="${x(q3)}" y="${y - 24}" font-family="system-ui" font-size="10" font-weight="600" fill="#16a34a" text-anchor="middle">Q3</text>
    <text x="${x(max)}" y="${y - 24}" font-family="system-ui" font-size="10" fill="#1e293b" text-anchor="middle">max</text>
  </svg>`;
};

// Two boxplots contrasting whisker lengths (symmetric vs skewed), for Q7.
const svgQ7Compare = comparisonBoxplotSvg(
  [
    { label: 'Symmetric example', min: 10, q1: 30, median: 45, q3: 60, max: 80, color: '#dbeafe' },
    { label: 'Skewed example', min: 38, q1: 42, median: 46, q3: 55, max: 80, color: '#fef3c7' },
  ],
  0,
  90
);

export const Y10_CH18B_ICEM_QUESTIONS = [
  {
    id: 'y10-18b2-q1',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 60,
    question:
      'The boxplot below shows the price (in $) of 20 different brands of sports shirts, on a scale from 10 to 50.<br>What is the cost of the most expensive and least expensive sports shirt?',
    opts: [
      'most expensive = $40, least expensive = $15',
      'most expensive = $40, least expensive = $20',
      'most expensive = $35, least expensive = $15',
      'most expensive = $45, least expensive = $10',
    ],
    a: 0,
    answer: '0',
    hint: 'The most expensive and least expensive values are the ends of the whiskers (the maximum and minimum), not the edges of the box (Q1 and Q3).',
    solution: 'The whiskers end at the minimum ($15) and maximum ($40).',
    solutionSteps: [
      {
        explanation: 'In a boxplot, the whiskers extend out to the minimum and maximum data values — the box itself only marks Q1, the median and Q3 (the middle 50%).',
        workingOut: '\\(\\text{minimum} = \\text{left whisker end}, \\quad \\text{maximum} = \\text{right whisker end}\\)',
        graphData: { svg: svgQ1 },
      },
      {
        explanation: 'Read the left whisker end (the least expensive shirt) and the right whisker end (the most expensive shirt) directly from the plot.',
        workingOut: '\\(\\text{minimum} = \\$15, \\quad \\text{maximum} = \\$40\\)',
        graphData: null,
      },
      {
        explanation: 'Pitfall: reading the edge of the box (Q1 = $20 or Q3 = $30) instead of the whisker end is the most common mistake here — the box only covers the middle 50% of shirts, not the full range.',
        workingOut: '\\(Q_1 = 20 \\neq \\text{minimum}, \\quad Q_3 = 30 \\neq \\text{maximum}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the least expensive shirt costs $15 and the most expensive costs $40.',
        workingOut: '\\(\\text{most expensive} = \\$40, \\quad \\text{least expensive} = \\$15\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ1 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q2',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The boxplot below gives information about the annual salaries (in thousands of dollars) of employees in a large company, on a scale from 40 to 180.<br>Find: the lowest salary, the range of the salaries, the median salary, and the interquartile range.',
    opts: [
      'lowest = $45k, range = $120k, median = $100k, IQR = $35k',
      'lowest = $45k, range = $120k, median = $100k, IQR = $30k',
      'lowest = $40k, range = $125k, median = $100k, IQR = $35k',
      'lowest = $45k, range = $120k, median = $105k, IQR = $35k',
    ],
    a: 0,
    answer: '0',
    hint: 'Lowest = left whisker end. Range = maximum - minimum. Median = the line inside the box. IQR = Q3 - Q1 (the width of the box).',
    solution: 'min=$45k, max=$165k, Q1=$85k, median=$100k, Q3=$120k. Range=$120k, IQR=$35k.',
    solutionSteps: [
      {
        explanation: 'Read the five key values directly off the boxplot: the whisker ends (minimum, maximum), the box edges (Q1, Q3), and the line inside the box (median).',
        workingOut: '\\(\\text{min}=45,\\ Q_1=85,\\ \\text{median}=100,\\ Q_3=120,\\ \\text{max}=165 \\ (\\text{thousand dollars})\\)',
        graphData: { svg: svgQ2 },
      },
      {
        explanation: 'The lowest salary is simply the left whisker end.',
        workingOut: '\\(\\text{lowest salary} = \\$45\\text{k}\\)',
        graphData: null,
      },
      {
        explanation: 'The range is the difference between the whisker ends (maximum - minimum).',
        workingOut: '\\(\\text{Range} = 165 - 45 = \\$120\\text{k}\\)',
        graphData: null,
      },
      {
        explanation: 'The median is the line inside the box. The IQR is the width of the box: Q3 - Q1. Pitfall: reading Q1 as 90 instead of 85 (misjudging the box edge) produces the wrong IQR of $30k.',
        workingOut: '\\(\\text{median} = \\$100\\text{k}\\)\\\\ \\(\\text{IQR} = 120 - 85 = \\$35\\text{k}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ2 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q3',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The boxplot below gives information about the marks out of 100 obtained by a group of 40 people on a general knowledge quiz, on a scale from 40 to 100.<br>Find: the lowest mark, the median mark, the range of marks, and the interquartile range.',
    opts: [
      'lowest = 42, median = 68, range = 53, IQR = 20',
      'lowest = 42, median = 68, range = 53, IQR = 18',
      'lowest = 40, median = 68, range = 55, IQR = 20',
      'lowest = 42, median = 70, range = 53, IQR = 20',
    ],
    a: 0,
    answer: '0',
    hint: 'Lowest = left whisker end. Median = the line inside the box. Range = maximum - minimum. IQR = Q3 - Q1.',
    solution: 'min=42, Q1=58, median=68, Q3=78, max=95. Range=53, IQR=20.',
    solutionSteps: [
      {
        explanation: 'Read the five key values directly off the boxplot.',
        workingOut: '\\(\\text{min}=42,\\ Q_1=58,\\ \\text{median}=68,\\ Q_3=78,\\ \\text{max}=95\\)',
        graphData: { svg: svgQ3 },
      },
      {
        explanation: 'The lowest mark is the left whisker end, and the median is the line inside the box.',
        workingOut: '\\(\\text{lowest mark} = 42, \\quad \\text{median} = 68\\)',
        graphData: null,
      },
      {
        explanation: 'The range is the difference between the whisker ends.',
        workingOut: '\\(\\text{Range} = 95 - 42 = 53\\)',
        graphData: null,
      },
      {
        explanation: 'The IQR is the width of the box (Q3 - Q1). Pitfall: misreading the box edges by a couple of marks (e.g. Q1 = 60 instead of 58) is easy to do when reading a scanned diagram, and produces a slightly wrong IQR.',
        workingOut: '\\(\\text{IQR} = 78 - 58 = 20\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ3 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q4',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'A data set is shown in the stem-and-leaf plot below (6|1 means 61):<br><br>Stem | Leaf<br>5 | 4 4 6 7 7 9<br>6 | 1 4 4 4 6 7 8<br>7 | 1 5 7 8 9 9<br>8 | 0 1 1 2 3 4 6<br>9 | 1 3 4 5<br><br>Which boxplot correctly represents the five-number summary of this data set?',
    opts: [
      'min = 54, Q1 = 64, median = 76, Q3 = 82, max = 95',
      'min = 54, Q1 = 64, median = 75, Q3 = 82, max = 95',
      'min = 54, Q1 = 63, median = 76, Q3 = 82, max = 95',
      'min = 54, Q1 = 64, median = 76, Q3 = 80, max = 95',
    ],
    a: 0,
    answer: '0',
    hint: 'First read the minimum and maximum straight off the plot. Then find the median (n = 30, even), and split the data into a lower and upper half to find Q1 and Q3.',
    solution: 'n=30. min=54, max=95. median=(75+77)/2=76. Lower half median Q1=64, upper half median Q3=82.',
    solutionSteps: [
      {
        explanation: 'Read the ordered data straight from the plot. There are n = 6 + 7 + 6 + 7 + 4 = 30 values. The minimum is the smallest stem/leaf combination (54); the maximum is the largest (95).',
        workingOut: '\\(n = 30, \\quad \\text{min} = 54, \\quad \\text{max} = 95\\)',
        graphData: { svg: svgQ4 },
      },
      {
        explanation: 'n = 30 is even, so the median is the average of the 15th and 16th values. Counting through the rows (6, then 13, then 19), both fall in the stem-7 row: the 15th value is 75 and the 16th value is 77.',
        workingOut: '\\(\\text{median} = \\dfrac{75+77}{2} = 76\\)',
        graphData: null,
      },
      {
        explanation: 'Split the 30 values into a lower half (positions 1-15) and an upper half (positions 16-30), each of size 15 (odd), so each quartile is the single middle (8th) value of its half.',
        workingOut: '\\(Q_1 = 8\\text{th value of lower half} = 64\\)\\\\ \\(Q_3 = 8\\text{th value of upper half} = 82\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the boxplot is drawn from this exact five-number summary — each distractor option changes exactly one of the five values.',
        workingOut: '\\((\\text{min}, Q_1, \\text{median}, Q_3, \\text{max}) = (54,\\ 64,\\ 76,\\ 82,\\ 95)\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q5a',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'The pulse rates of 21 adult females are recorded:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">60, 61, 67, 68, 69, 70, 70, 70, 73, 74, 75, 75, 76, 77, 77, 78, 79, 80, 81, 89, 90</div>Find the median, upper quartile, lower quartile and interquartile range.',
    opts: [
      'median = 75, Q1 = 69.5, Q3 = 78.5, IQR = 9',
      'median = 75, Q1 = 70, Q3 = 78, IQR = 8',
      'median = 74, Q1 = 69.5, Q3 = 78.5, IQR = 9',
      'median = 75, Q1 = 69.5, Q3 = 78, IQR = 8.5',
    ],
    a: 0,
    answer: '0',
    hint: 'n = 21 (odd), so the median is the single middle (11th) value. Split the remaining 20 values into two halves of 10 for the quartiles.',
    solution: 'median=75 (11th value). Lower half median Q1=69.5, upper half median Q3=78.5. IQR=9.',
    solutionSteps: [
      {
        explanation: 'The data is already given in ascending order, with n = 21 values.',
        workingOut: '\\(n = 21\\)',
        graphData: null,
      },
      {
        explanation: 'n = 21 is odd, so the median is the single middle value, at position \\(\\frac{21+1}{2} = 11\\).',
        workingOut: '\\(\\text{median} = 11\\text{th value} = 75\\)',
        graphData: null,
      },
      {
        explanation: 'Remove the median and split the remaining 20 values into a lower half of 10 (positions 1-10) and an upper half of 10 (positions 12-21). Each half is even-sized, so its median is the average of its 5th and 6th values.',
        workingOut: '\\(\\text{lower half: } 60,61,67,68,69,70,70,70,73,74 \\Rightarrow Q_1 = \\dfrac{69+70}{2} = 69.5\\)\\\\ \\(\\text{upper half: } 75,76,77,77,78,79,80,81,89,90 \\Rightarrow Q_3 = \\dfrac{78+79}{2} = 78.5\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR} = 78.5 - 69.5 = 9\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q5b',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the pulse rate data from the previous question (median = 75, Q1 = 69.5, Q3 = 78.5), which five-number summary would correctly draw the boxplot for this data?',
    opts: [
      'min = 60, Q1 = 69.5, median = 75, Q3 = 78.5, max = 90',
      'min = 61, Q1 = 69.5, median = 75, Q3 = 78.5, max = 90',
      'min = 60, Q1 = 70, median = 75, Q3 = 78.5, max = 90',
      'min = 60, Q1 = 69.5, median = 75, Q3 = 78.5, max = 89',
    ],
    a: 0,
    answer: '0',
    hint: 'The whiskers of a boxplot run out to the actual minimum and maximum data values, not the calculated quartiles.',
    solution: 'The full ordered list starts at 60 and ends at 90, so those are the whisker ends.',
    solutionSteps: [
      {
        explanation: 'The minimum and maximum for the boxplot whiskers come from the actual smallest and largest data values in the original ordered list, not from any calculation.',
        workingOut: '\\(60,\\ 61,\\ 67,\\ldots,\\ 89,\\ 90\\)',
        graphData: null,
      },
      {
        explanation: 'Read the first and last values of the ordered list.',
        workingOut: '\\(\\text{min} = 60, \\quad \\text{max} = 90\\)',
        graphData: null,
      },
      {
        explanation: 'Combine with the median and quartiles already found to get the complete five-number summary.',
        workingOut: '\\(\\text{min}=60,\\ Q_1=69.5,\\ \\text{median}=75,\\ Q_3=78.5,\\ \\text{max}=90\\)',
        graphData: { svg: svgQ5 },
      },
      {
        explanation: 'Final answer: this is the exact five-number summary the boxplot is drawn from. Pitfall: mistaking the second-smallest value (61) for the minimum, or the second-largest (89) for the maximum, are common off-by-one reading errors.',
        workingOut: '\\((60,\\ 69.5,\\ 75,\\ 78.5,\\ 90)\\)',
        graphData: { svg: svgQ5 },
      },
    ],
    graphData: { svg: svgQ5 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q6',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'In a boxplot for a large data set, approximately what percentage of the data set is: below the median? below the lower quartile? in the box? in each whisker?',
    opts: [
      'below median = 50%, below LQ = 25%, in box = 50%, in each whisker = 25%',
      'below median = 50%, below LQ = 25%, in box = 25%, in each whisker = 25%',
      'below median = 50%, below LQ = 50%, in box = 50%, in each whisker = 25%',
      'below median = 25%, below LQ = 50%, in box = 50%, in each whisker = 25%',
    ],
    a: 0,
    answer: '0',
    hint: 'By definition, quartiles divide the ordered data into four equal-sized groups of 25% each.',
    solution: 'Each quarter of the data (25%) sits between consecutive markers: min-Q1, Q1-median, median-Q3, Q3-max.',
    solutionSteps: [
      {
        explanation: 'Quartiles are defined so that each of the four sections of the ordered data — minimum to Q1, Q1 to median, median to Q3, and Q3 to maximum — contains approximately 25% of the data.',
        workingOut: '\\(4 \\times 25\\% = 100\\%\\)',
        graphData: { svg: buildQ6Regions(false) },
      },
      {
        explanation: 'Below the median means the first two sections combined (min to Q1, plus Q1 to median).',
        workingOut: '\\(25\\% + 25\\% = 50\\% \\text{ below the median}\\)',
        graphData: { svg: buildQ6Regions(false) },
      },
      {
        explanation: 'Below the lower quartile is just the first section on its own.',
        workingOut: '\\(25\\% \\text{ below the lower quartile}\\)',
        graphData: { svg: buildQ6Regions(false) },
      },
      {
        explanation: 'The box covers Q1 to Q3 (the middle two sections combined = 50%); each whisker covers one outer section on its own (25% each). Pitfall: confusing "in the box" (50%, two sections) with "below the lower quartile" (25%, one section) is the most common mix-up.',
        workingOut: '\\(\\text{in box} = 50\\%, \\quad \\text{in each whisker} = 25\\%\\)',
        graphData: { svg: buildQ6Regions(true) },
      },
    ],
    graphData: { svg: buildQ6Regions(false) },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q7',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'In a boxplot, is one whisker always longer than the other?',
    opts: [
      'Yes — the right-hand whisker is always longer, because real data is usually positively skewed.',
      'Yes — both whiskers are always exactly equal, because the median splits the box in half.',
      'Yes — the left-hand whisker is always longer, because the minimum is always further from Q1 than the maximum is from Q3.',
      'No — the relative whisker lengths depend entirely on how the data is spread near the minimum and maximum; either whisker can be longer, shorter, or the two can be equal.',
    ],
    a: 3,
    answer: '3',
    hint: 'Whisker length depends on the gap between Q1 and the minimum, and between Q3 and the maximum — these gaps are set by the actual data values, not by any rule.',
    solution: 'No fixed rule forces one whisker to be longer — it depends entirely on the data\'s distribution near its extremes.',
    solutionSteps: [
      {
        explanation: 'The left whisker length is (Q1 - minimum); the right whisker length is (maximum - Q3). Both are determined purely by how the most extreme 25% of values on each side happen to be spread out.',
        workingOut: '\\(\\text{left whisker} = Q_1 - \\text{min}, \\quad \\text{right whisker} = \\text{max} - Q_3\\)',
        graphData: { svg: svgQ7Compare },
      },
      {
        explanation: 'A symmetric data set tends to have similar whisker lengths; a data set with an unusually spread-out tail on one side (positive or negative skew) will have a longer whisker on that side. The "Symmetric example" below has equal 20-unit whiskers on both sides; the "Skewed example" has a short 4-unit left whisker but a long 25-unit right whisker.',
        workingOut: '\\(\\text{skewed right (positive skew)} \\Rightarrow \\text{right whisker often longer}\\)\\\\ \\(\\text{skewed left (negative skew)} \\Rightarrow \\text{left whisker often longer}\\)',
        graphData: { svg: svgQ7Compare },
      },
      {
        explanation: 'Since either pattern (or a symmetric one with equal whiskers) is possible depending on the actual data, no single option ("always the right", "always equal", "always the left") can be a universal rule.',
        workingOut: '\\(\\text{no universal rule}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: no, one whisker is not always longer — it depends on the shape/skew of the specific data set.',
        workingOut: '\\(\\text{whisker length depends on data spread near the extremes}\\)',
        graphData: { svg: svgQ7Compare },
      },
    ],
    graphData: { svg: svgQ7Compare },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q8: open-ended "why" question — kept as teacher_review ----
  {
    id: 'y10-18b2-q8',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 150,
    question:
      'For the data set:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">10, 12, 13, 14, 14, 15, 20, 25, 30, 40, 50</div>find Q1, the median and Q3, then explain why the median is not in the centre of the box (i.e. why it is not the same distance from Q1 as it is from Q3).',
    opts: [],
    a: null,
    answer: '',
    hint: 'n = 11, so the median is the single middle (6th) value. Split the other 10 values into two halves of 5 to find Q1 and Q3. Once you have all three values, compare the two gaps: (median - Q1) and (Q3 - median).',
    solution:
      'Q1 = 13 (median of the lower 5 values: 10,12,13,14,14), median = 15 (6th value), Q3 = 30 (median of the upper 5 values: 20,25,30,40,50).\n\n'
      + 'The gap from Q1 to the median is only 15 - 13 = 2, while the gap from the median to Q3 is 30 - 15 = 15 — nowhere near equal, so the median sits well off-centre, close to the Q1 side of the box.\n\n'
      + 'This happens because the median splits the data into two halves with an EQUAL NUMBER of values on each side (5 and 5), but that does not mean those halves are equally spread out. Here the lower half (10 to 14) is tightly clustered in a narrow range, while the upper half (20 to 50) is spread out over a much wider range — so even though exactly 25% of the data lies in each of the two sections next to the median, one section is visually much narrower than the other.',
    solutionSteps: [
      {
        explanation: 'Order the 11 values (already given in order) and find n.',
        workingOut: '\\(10,12,13,14,14,15,20,25,30,40,50 \\quad (n=11)\\)',
        graphData: null,
      },
      {
        explanation: 'n = 11 is odd, so the median is the single middle value, at position \\(\\frac{11+1}{2}=6\\).',
        workingOut: '\\(\\text{median} = 6\\text{th value} = 15\\)',
        graphData: null,
      },
      {
        explanation: 'Remove the median and split the remaining 10 values into a lower half of 5 and an upper half of 5. Each half has an odd size, so its median is its own single middle (3rd) value.',
        workingOut: '\\(\\text{lower half: } 10,12,13,14,14 \\Rightarrow Q_1 = 13\\)\\\\ \\(\\text{upper half: } 20,25,30,40,50 \\Rightarrow Q_3 = 30\\)',
        graphData: null,
      },
      {
        explanation: 'Compare the two gaps either side of the median: (median - Q1) versus (Q3 - median). If they are very different, the median sits off-centre in the box, closer to whichever quartile has the smaller gap.',
        workingOut: '\\(\\text{median} - Q_1 = 15 - 13 = 2\\)\\\\ \\(Q_3 - \\text{median} = 30 - 15 = 15\\)\\\\ \\(2 \\ll 15 \\Rightarrow \\text{median is close to } Q_1\\text{, far from } Q_3\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: true,
  },

  // ---- Q9: comparing two boxplots on one scale ----
  {
    id: 'y10-18b2-q9',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Here are two boxplots drawn on the same scale (10 to 50): Data set A (min=20, Q1=28, median=32, Q3=35, max=40) and Data set B (min=15, Q1=22, median=30, Q3=38, max=48).<br>Which data set has: the greater median? the greater range? the greater interquartile range? the greater largest data value?',
    opts: [
      'greater median = A, greater range = B, greater IQR = B, greater max = B',
      'greater median = B, greater range = B, greater IQR = B, greater max = B',
      'greater median = A, greater range = A, greater IQR = B, greater max = B',
      'greater median = A, greater range = B, greater IQR = A, greater max = B',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the median lines, the whisker-to-whisker spans (range), the box widths (IQR), and the right whisker ends (max), one at a time.',
    solution: 'A has the greater median (32 vs 30); B has the greater range (33 vs 20), IQR (16 vs 7) and max (48 vs 40).',
    solutionSteps: [
      {
        explanation: 'Compare the median (the line inside each box): Data set A\'s median is 32, Data set B\'s median is 30.',
        workingOut: '\\(\\text{median}_A = 32 > \\text{median}_B = 30 \\Rightarrow A \\text{ has the greater median}\\)',
        graphData: { svg: svgQ9 },
      },
      {
        explanation: 'Compare the range (maximum - minimum) for each: A spans 20 to 40; B spans 15 to 48.',
        workingOut: '\\(\\text{range}_A = 40-20 = 20, \\quad \\text{range}_B = 48-15 = 33 \\Rightarrow B \\text{ has the greater range}\\)',
        graphData: null,
      },
      {
        explanation: 'Compare the IQR (the width of each box, Q3 - Q1).',
        workingOut: '\\(\\text{IQR}_A = 35-28 = 7, \\quad \\text{IQR}_B = 38-22 = 16 \\Rightarrow B \\text{ has the greater IQR}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: compare the right whisker ends (maximum values). Pitfall: assuming the data set with the higher median must also have the greater max/range/IQR is a common but incorrect shortcut — each statistic must be checked separately.',
        workingOut: '\\(\\text{max}_A = 40 < \\text{max}_B = 48 \\Rightarrow B \\text{ has the greater maximum}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ9 },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q10: comparing two classes' test results (a-d MC, e teacher_review) ----
  {
    id: 'y10-18b2-q10a',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Students in two classes sat the same mathematics test. Class A: min=22, Q1=30, median=35, Q3=38, max=42. Class B: min=15, Q1=25, median=32, Q3=39, max=48. (Boxplots drawn on the same scale.)<br>Which class had: the higher median mark? the higher interquartile range? the highest mark obtained? the lowest mark obtained?',
    opts: [
      'higher median = A, higher IQR = B, highest mark = B, lowest mark = B',
      'higher median = B, higher IQR = B, highest mark = B, lowest mark = B',
      'higher median = A, higher IQR = A, highest mark = B, lowest mark = B',
      'higher median = A, higher IQR = B, highest mark = A, lowest mark = B',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the median lines, the box widths (IQR), and the whisker ends (max and min) between the two classes.',
    solution: 'A has the higher median (35 vs 32); B has the higher IQR (14 vs 8), the highest mark (48) and the lowest mark (15).',
    solutionSteps: [
      {
        explanation: 'Compare the medians: Class A\'s median is 35, Class B\'s median is 32.',
        workingOut: '\\(\\text{median}_A = 35 > \\text{median}_B = 32 \\Rightarrow A \\text{ had the higher median mark}\\)',
        graphData: { svg: svgQ10 },
      },
      {
        explanation: 'Compare the IQR (box width, Q3 - Q1) for each class.',
        workingOut: '\\(\\text{IQR}_A = 38-30 = 8, \\quad \\text{IQR}_B = 39-25 = 14 \\Rightarrow B \\text{ had the higher IQR}\\)',
        graphData: null,
      },
      {
        explanation: 'Compare the right whisker ends (maximum marks obtained).',
        workingOut: '\\(\\text{max}_A = 42 < \\text{max}_B = 48 \\Rightarrow B \\text{ had the highest mark}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: compare the left whisker ends (minimum marks obtained). Pitfall: Class A having the higher median does NOT mean Class A did better on every measure — B has more variability (higher IQR) and a wider overall spread (both the highest and the lowest mark).',
        workingOut: '\\(\\text{min}_A = 22 > \\text{min}_B = 15 \\Rightarrow B \\text{ had the lowest mark}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ10 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q10e',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 180,
    question:
      'Using the same two classes\' boxplots (Class A: min=22, Q1=30, median=35, Q3=38, max=42; Class B: min=15, Q1=25, median=32, Q3=39, max=48), which class did better on the test? Give reasons for your choice. (Class discussion)',
    opts: [],
    a: null,
    answer: '',
    hint: 'There is no single "correct" class — argue from the statistics: median, IQR (consistency), and range/extremes.',
    solution:
      'Reasonable answer: Class A did better "typically" — its median (35) is higher than Class B\'s (32), and its smaller IQR (8 vs 14) shows Class A\'s marks were more consistent/tightly clustered around a solid result. However, Class B contains both the single highest mark (48) and the single lowest mark (15), so a case can also be made for Class B having more high achievers, at the cost of more students struggling. Either answer is acceptable if backed by the correct statistics.',
    solutionSteps: [],
    graphData: { svg: svgQ10 },
    isNew: true,
    requiresManualGrading: true,
  },

  // ---- Q11: TV channel ratings (a-d MC, e teacher_review) ----
  {
    id: 'y10-18b2-q11a',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The ratings for television programs on Channel A, Channel B and Channel C are shown as boxplots on the same scale (5 to 27). Which table correctly gives the five-number summary for each channel?',
    opts: [
      'A: (8,13,16,19,25); B: (9,12,18,21,23); C: (13,15,16.5,17.5,20)',
      'A: (8,13,16,19,25); B: (9,12,17,21,23); C: (13,15,16.5,17.5,20)',
      'A: (8,13,16,19,25); B: (9,12,18,20,23); C: (13,15,16.5,17.5,20)',
      'A: (8,13,16,19,25); B: (9,12,18,21,23); C: (13,14,16.5,17.5,20)',
    ],
    a: 0,
    answer: '0',
    hint: 'Read each channel\'s five-number summary (min, Q1, median, Q3, max) directly off its boxplot, one channel at a time.',
    solution: 'A: min=8,Q1=13,median=16,Q3=19,max=25. B: min=9,Q1=12,median=18,Q3=21,max=23. C: min=13,Q1=15,median=16.5,Q3=17.5,max=20.',
    solutionSteps: [
      {
        explanation: 'Read Channel A\'s five-number summary from its boxplot: the whisker ends give the minimum and maximum, the box edges give Q1 and Q3, and the line inside the box gives the median.',
        workingOut: '\\(A: \\text{min}=8,\\ Q_1=13,\\ \\text{median}=16,\\ Q_3=19,\\ \\text{max}=25\\)',
        graphData: { svg: svgQ11 },
      },
      {
        explanation: 'Read Channel B\'s five-number summary the same way.',
        workingOut: '\\(B: \\text{min}=9,\\ Q_1=12,\\ \\text{median}=18,\\ Q_3=21,\\ \\text{max}=23\\)',
        graphData: null,
      },
      {
        explanation: 'Read Channel C\'s five-number summary the same way — note that Channel C\'s box is the narrowest of the three, indicating its ratings were the most consistent.',
        workingOut: '\\(C: \\text{min}=13,\\ Q_1=15,\\ \\text{median}=16.5,\\ Q_3=17.5,\\ \\text{max}=20\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: match each channel\'s full five-number summary exactly — each distractor changes exactly one value on one channel.',
        workingOut: '\\(A:(8,13,16,19,25),\\ B:(9,12,18,21,23),\\ C:(13,15,16.5,17.5,20)\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ11 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q11b',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same TV channel boxplots (A: min=8,Q1=13,median=16,Q3=19,max=25; B: min=9,Q1=12,median=18,Q3=21,max=23; C: min=13,Q1=15,median=16.5,Q3=17.5,max=20), which channel has the largest interquartile range?',
    opts: ['Channel A', 'Channel B', 'Channel C', 'All three are equal'],
    a: 1,
    answer: '1',
    hint: 'IQR = Q3 - Q1 for each channel. Compare the three box widths.',
    solution: 'IQR(A)=6, IQR(B)=9, IQR(C)=2.5. Channel B has the largest IQR.',
    solutionSteps: [
      {
        explanation: 'Calculate the IQR for each channel: IQR = Q3 - Q1.',
        workingOut: '\\(\\text{IQR}_A = 19-13 = 6\\)\\\\ \\(\\text{IQR}_B = 21-12 = 9\\)\\\\ \\(\\text{IQR}_C = 17.5-15 = 2.5\\)',
        graphData: null,
      },
      {
        explanation: 'Compare the three values — the IQR is visually the width of each box, so this can also be checked directly on the plot.',
        workingOut: '\\(9 > 6 > 2.5\\)',
        graphData: null,
      },
      {
        explanation: 'Pitfall: it is tempting to assume the channel with the largest range (max - min) also has the largest IQR, but Channel A has a slightly larger range than Channel B (17 vs 14) while having a smaller IQR — the two statistics measure different things.',
        workingOut: '\\(\\text{range}_A = 25-8=17, \\quad \\text{range}_B = 23-9=14\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: Channel B has the largest interquartile range.',
        workingOut: '\\(\\text{Channel B}, \\text{ IQR} = 9\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ11 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q11c',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same TV channel boxplots (A: max=25; B: max=23; C: max=20), if the winning channel is the one with the highest-rated single program, rank the three channels from 1st to 3rd.',
    opts: ['1st: A, 2nd: B, 3rd: C', '1st: B, 2nd: A, 3rd: C', '1st: A, 2nd: C, 3rd: B', '1st: C, 2nd: A, 3rd: B'],
    a: 0,
    answer: '0',
    hint: 'The "highest-rated single program" for each channel is its maximum value — the right whisker end of its boxplot.',
    solution: 'max(A)=25, max(B)=23, max(C)=20. So A > B > C.',
    solutionSteps: [
      {
        explanation: 'The highest-rated single program on each channel corresponds to that channel\'s maximum value — the right whisker end of its boxplot.',
        workingOut: '\\(\\text{max}_A = 25, \\quad \\text{max}_B = 23, \\quad \\text{max}_C = 20\\)',
        graphData: { svg: svgQ11 },
      },
      {
        explanation: 'Order the three maximums from largest to smallest.',
        workingOut: '\\(25 > 23 > 20\\)',
        graphData: null,
      },
      {
        explanation: 'Match each maximum back to its channel.',
        workingOut: '\\(A \\to 25, \\quad B \\to 23, \\quad C \\to 20\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: rank from highest to lowest maximum.',
        workingOut: '\\(1\\text{st: } A, \\quad 2\\text{nd: } B, \\quad 3\\text{rd: } C\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ11 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q11d',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same TV channel boxplots (A: median=16; B: median=18; C: median=16.5), if the winning channel is the one with the largest median rating, rank the three channels from 1st to 3rd.',
    opts: ['1st: B, 2nd: C, 3rd: A', '1st: A, 2nd: B, 3rd: C', '1st: B, 2nd: A, 3rd: C', '1st: C, 2nd: B, 3rd: A'],
    a: 0,
    answer: '0',
    hint: 'The median for each channel is the line inside its box.',
    solution: 'median(A)=16, median(B)=18, median(C)=16.5. So B > C > A.',
    solutionSteps: [
      {
        explanation: 'Read each channel\'s median directly from the line inside its box.',
        workingOut: '\\(\\text{median}_A = 16, \\quad \\text{median}_B = 18, \\quad \\text{median}_C = 16.5\\)',
        graphData: { svg: svgQ11 },
      },
      {
        explanation: 'Order the three medians from largest to smallest.',
        workingOut: '\\(18 > 16.5 > 16\\)',
        graphData: null,
      },
      {
        explanation: 'Match each median back to its channel. Pitfall: Channel A had the highest-rated single program (Q11c), but that does not mean it also has the largest median — a channel can have one outstanding hit show while typically rating lower than its rivals.',
        workingOut: '\\(B \\to 18, \\quad C \\to 16.5, \\quad A \\to 16\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: rank from highest to lowest median.',
        workingOut: '\\(1\\text{st: } B, \\quad 2\\text{nd: } C, \\quad 3\\text{rd: } A\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ11 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b2-q11e',
    topicId: 'y10-18b-icem',
    c: '18B',
    t: 'Boxplots',
    type: 'teacher_review',
    difficulty: 'hard',
    timeLimit: 180,
    question:
      'Using the same TV channel boxplots (A: min=8,Q1=13,median=16,Q3=19,max=25; B: min=9,Q1=12,median=18,Q3=21,max=23; C: min=13,Q1=15,median=16.5,Q3=17.5,max=20), can you find a criterion that makes Channel C the winning channel?',
    opts: [],
    a: null,
    answer: '',
    hint: 'Channel C does not win on median (B is higher) or on maximum single-program rating (A is higher). Look at what Channel C\'s narrow box tells you about its programs instead.',
    solution:
      'Channel C has by far the smallest interquartile range (2.5, vs 6 for A and 9 for B) and the highest lower quartile (Q1 = 15, vs 13 for A and 12 for B). So a criterion like "most consistent channel" (smallest IQR) or "channel whose worst-rated 75% of programs still rate the highest" (highest Q1) makes Channel C the winner — even though it never has a single standout hit show, it never has a real flop either.',
    solutionSteps: [],
    graphData: { svg: svgQ11 },
    isNew: true,
    requiresManualGrading: true,
  },
];
