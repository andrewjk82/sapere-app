// Year 10 Chapter 18: Statistics — ICE-EM Mathematics 10 (3ed), Chapter 18,
// Exercise 18H: "Line of best fit" (pp.552-557). Q1 ("copy these scatter
// plots and draw a line of best fit by eye through each") is a pure
// pencil-and-paper drawing task with no single checkable answer — per
// CLAUDE.md's skip-keyword convention it is dropped from the batch, but its
// four scatter plots are still needed for Q2 (which DOES have determinate
// answers: trend direction, relationship strength), so they are rebuilt
// here as self-consistent point sets matching the textbook's four visual
// patterns (moderate scatter / strong tight negative / strong tight
// positive / weak sparse negative).
//
// Q5's scatter plot (fitness vs run time) is a scanned image with a
// hand-drawn line of best fit; the exact anchor points used to derive its
// equation aren't recoverable from the scan, so — same approach used
// throughout this chapter for scanned diagrams — two clean grid points,
// (0, 78) and (10, 54), are chosen as the line's anchor points (consistent
// with where the drawn line visually crosses those grid lines), giving the
// determinate equation Time = 78 − 2.4 &times; Fitness used in Q5's solutions.

const axisTicks = (min, max, step) => {
  const ticks = [];
  for (let v = min; v <= max + 1e-9; v += step) ticks.push(Math.round(v * 100) / 100);
  return ticks;
};

// Scatter plot with an optional fitted line (solid over the observed range,
// dashed where it extends into extrapolation territory).
const scatterWithLineSvg = (points, xLabel, yLabel, opts = {}) => {
  const {
    xMin = 0, xMax = 100, yMin = 0, yMax = 100, xStep = 10, yStep = 10,
    width: chartW = 480, height: chartH = 320,
    line = null, // { x1, y1, x2, y2, extrapolateTo: {x, y} | null }
  } = opts;
  const padL = 56, padR = 20, padT = 20, padB = 50;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const x = (v) => padL + ((v - xMin) / (xMax - xMin)) * plotW;
  const y = (v) => padT + plotH - ((v - yMin) / (yMax - yMin)) * plotH;

  const xTicks = axisTicks(xMin, xMax, xStep);
  const yTicks = axisTicks(yMin, yMax, yStep);

  const gridLines = yTicks
    .map((v) => `<line x1="${padL}" y1="${y(v)}" x2="${padL + plotW}" y2="${y(v)}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 4"/>
      <text x="${padL - 8}" y="${y(v) + 4}" font-family="system-ui" font-size="11" fill="#94a3b8" text-anchor="end">${v}</text>`)
    .join('');
  const xTickLabels = xTicks
    .map((v) => `<text x="${x(v)}" y="${padT + plotH + 18}" font-family="system-ui" font-size="11" fill="#64748b" text-anchor="middle">${v}</text>`)
    .join('');

  const dots = points
    .map((p) => `<circle cx="${x(p.x)}" cy="${y(p.y)}" r="4" fill="#6366f1" stroke="#fff" stroke-width="1"/>`)
    .join('');

  let lineEls = '';
  if (line) {
    lineEls += `<line x1="${x(line.x1)}" y1="${y(line.y1)}" x2="${x(line.x2)}" y2="${y(line.y2)}" stroke="#dc2626" stroke-width="2"/>`;
    if (line.extrapolateTo) {
      lineEls += `<line x1="${x(line.x2)}" y1="${y(line.y2)}" x2="${x(line.extrapolateTo.x)}" y2="${y(line.extrapolateTo.y)}" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
        <circle cx="${x(line.extrapolateTo.x)}" cy="${y(line.extrapolateTo.y)}" r="4.5" fill="#fff" stroke="#dc2626" stroke-width="2"/>`;
    }
  }

  return `<svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    ${gridLines}
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1.5"/>
    ${xTickLabels}
    ${dots}
    ${lineEls}
    <text x="${padL + plotW / 2}" y="${chartH - 6}" font-family="system-ui" font-size="12" font-weight="600" fill="#475569" text-anchor="middle">${xLabel}</text>
    <text x="14" y="${padT + plotH / 2}" font-family="system-ui" font-size="12" font-weight="600" fill="#475569" text-anchor="middle" transform="rotate(-90 14 ${padT + plotH / 2})">${yLabel}</text>
  </svg>`;
};

// Small single-panel scatter (no line), used inside the 2x2 grid for Q2.
const miniPanelSvg = (points, title, panelW, panelH, xMin, xMax, yMin, yMax) => {
  const padL = 8, padR = 8, padT = 22, padB = 8;
  const plotW = panelW - padL - padR;
  const plotH = panelH - padT - padB;
  const x = (v) => padL + ((v - xMin) / (xMax - xMin)) * plotW;
  const y = (v) => padT + plotH - ((v - yMin) / (yMax - yMin)) * plotH;
  const dots = points.map((p) => `<circle cx="${x(p.x).toFixed(1)}" cy="${y(p.y).toFixed(1)}" r="3" fill="#6366f1"/>`).join('');
  return `
    <rect x="0" y="0" width="${panelW}" height="${panelH}" fill="none" stroke="#e2e8f0" stroke-width="1"/>
    <text x="${panelW / 2}" y="14" font-family="system-ui" font-size="12" font-weight="700" fill="#4338ca" text-anchor="middle">${title}</text>
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1"/>
    ${dots}
  `;
};

const q1PointsI = [{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 4 }, { x: 4, y: 7 }, { x: 5, y: 6 }, { x: 6, y: 8 }, { x: 7, y: 7 }, { x: 8, y: 9 }, { x: 9, y: 8 }, { x: 10, y: 10 }];
const q1PointsII = [{ x: 1, y: 10 }, { x: 2, y: 9.2 }, { x: 2.5, y: 8.8 }, { x: 3, y: 8.5 }, { x: 3.5, y: 8 }, { x: 4, y: 7.5 }, { x: 4.5, y: 7 }, { x: 5, y: 6.5 }, { x: 5.5, y: 6 }, { x: 6, y: 5.5 }, { x: 6.5, y: 5 }, { x: 7, y: 4.5 }, { x: 7.5, y: 4 }, { x: 8, y: 3.5 }];
const q1PointsIII = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4.2 }, { x: 4, y: 5 }, { x: 5, y: 6.1 }, { x: 6, y: 7 }, { x: 7, y: 7.9 }, { x: 8, y: 9 }, { x: 9, y: 10 }, { x: 10, y: 10.8 }];
const q1PointsIV = [{ x: 1, y: 7 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 4 }, { x: 6, y: 6 }, { x: 7, y: 3 }, { x: 8, y: 5 }, { x: 9, y: 2 }];

const panelW = 220;
const panelH = 150;
const q2GridSvg = `<svg viewBox="0 0 ${panelW * 2 + 12} ${panelH * 2 + 12}" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <g transform="translate(0,0)">${miniPanelSvg(q1PointsI, 'i', panelW, panelH, 0, 11, 0, 11)}</g>
  <g transform="translate(${panelW + 12},0)">${miniPanelSvg(q1PointsII, 'ii', panelW, panelH, 0, 9, 3, 11)}</g>
  <g transform="translate(0,${panelH + 12})">${miniPanelSvg(q1PointsIII, 'iii', panelW, panelH, 0, 11, 0, 12)}</g>
  <g transform="translate(${panelW + 12},${panelH + 12})">${miniPanelSvg(q1PointsIV, 'iv', panelW, panelH, 0, 10, 0, 9)}</g>
</svg>`;

// Q4: pumpkin weight (x) vs seed count (y), line through (1,300) and (7,540).
const q4Svg = scatterWithLineSvg(
  [{ x: 1, y: 300 }, { x: 7, y: 540 }],
  'Weight (kg)', 'Number of seeds',
  { xMin: 0, xMax: 9, yMin: 250, yMax: 600, xStep: 1, yStep: 50, line: { x1: 0, y1: 260, x2: 9, y2: 620 } }
);

// Q5: fitness level (x) vs run time (y), line through (0,78) and (10,54).
const q5Points = [
  { x: 1, y: 77 }, { x: 1.5, y: 76 }, { x: 2, y: 70 }, { x: 2, y: 68 }, { x: 4.5, y: 65 },
  { x: 5, y: 62 }, { x: 6, y: 66 }, { x: 6, y: 65 }, { x: 6, y: 64 }, { x: 5.5, y: 60 },
  { x: 7, y: 59 }, { x: 7.5, y: 61 }, { x: 8, y: 58 }, { x: 8.5, y: 62 }, { x: 9, y: 56 },
  { x: 9.5, y: 55 }, { x: 9.5, y: 54 }, { x: 10, y: 54 },
];
const q5Svg = scatterWithLineSvg(q5Points, 'Fitness level', 'Time (seconds)', {
  xMin: 0, xMax: 10, yMin: 50, yMax: 80, xStep: 2, yStep: 5,
  line: { x1: 0, y1: 78, x2: 10, y2: 54 },
});

// Q6a: sparse, widely-scattered points with a weak fitted line.
const q6aPoints = [{ x: 2, y: 4 }, { x: 3, y: 8 }, { x: 5, y: 9 }, { x: 6, y: 5 }, { x: 7, y: 2 }];
const q6aSvg = scatterWithLineSvg(q6aPoints, 'x', 'y', {
  xMin: 0, xMax: 9, yMin: 0, yMax: 10, xStep: 1, yStep: 1,
  line: { x1: 0.5, y1: 3, x2: 8, y2: 8 },
});
// Q6b: a curve that looks linear at first then flattens — a straight line
// is fitted through the early data but the later data plateaus above it.
const q6bPoints = [
  { x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 6 }, { x: 4, y: 8 }, { x: 5, y: 9.5 },
  { x: 6, y: 10.5 }, { x: 7, y: 11 }, { x: 8, y: 11.3 }, { x: 9, y: 11.4 }, { x: 10, y: 11.5 },
];
const q6bSvg = scatterWithLineSvg(q6bPoints, 'x', 'y', {
  xMin: 0, xMax: 11, yMin: 0, yMax: 13, xStep: 1, yStep: 2,
  line: { x1: 0.5, y1: 1, x2: 9, y2: 11.8 },
});

// Q7: company profit time series (same data as Ch18F Q2), with a fitted
// line and a dashed forecast segment into year 11 (extrapolation).
const q7Points = [
  { x: 1, y: 1.2 }, { x: 2, y: 1.8 }, { x: 3, y: 2.4 }, { x: 4, y: 2.2 }, { x: 5, y: 2.6 },
  { x: 6, y: 3.1 }, { x: 7, y: 3.2 }, { x: 8, y: 3.4 }, { x: 9, y: 3.6 }, { x: 10, y: 4.0 },
];
const q7Svg = scatterWithLineSvg(q7Points, 'Year number', 'Profit ($ million)', {
  xMin: 0, xMax: 12, yMin: 0, yMax: 4.5, xStep: 2, yStep: 0.5,
  line: { x1: 0, y1: 1, x2: 10, y2: 4, extrapolateTo: { x: 11, y: 4.3 } },
});

export const Y10_CH18H_ICEM_QUESTIONS = [
  // ==== Q2: trend direction and relationship strength across 4 plots ====
  {
    id: 'y10-18h-q2a',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The four scatter plots below are labelled i, ii, iii and iv.' +
      'Which plots display an INCREASING trend, and which display a DECREASING trend?',
    opts: [
      'i and iii are increasing; ii and iv are decreasing.',
      'i and ii are increasing; iii and iv are decreasing.',
      'All four plots are increasing.',
      'ii and iii are increasing; i and iv are decreasing.',
    ],
    a: 0,
    answer: '0',
    hint: 'Trace each plot from left to right — does y generally rise or fall as x increases?',
    solution: 'Plots i and iii rise from left to right (increasing); plots ii and iv fall from left to right (decreasing).',
    solutionSteps: [
      {
        explanation: 'Check plot i.',
        workingOut: 'As x goes from 1 to 10, y rises overall (3 → 10, with scatter) — increasing.',
        graphData: null,
      },
      {
        explanation: 'Check plot ii.',
        workingOut: 'As x goes from 1 to 8, y falls steadily (10 → 3.5) — decreasing.',
        graphData: null,
      },
      {
        explanation: 'Check plot iii.',
        workingOut: 'As x goes from 1 to 10, y rises steadily (2 → 10.8) — increasing.',
        graphData: null,
      },
      {
        explanation: 'Check plot iv.',
        workingOut: 'As x goes from 1 to 9, y falls overall (7 → 2, with scatter) — decreasing.',
        graphData: null,
      },
    ],
    graphData: { svg: q2GridSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q2b',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same four scatter plots,' +
      'which plot shows the STRONGEST linear relationship (points closest to a straight line), and which shows the WEAKEST?',
    opts: [
      'ii is the strongest (points tightly hug a straight line); iv is the weakest (points are sparse and widely scattered).',
      'i is the strongest; iii is the weakest.',
      'iv is the strongest; ii is the weakest.',
      'All four plots show equally strong relationships.',
    ],
    a: 0,
    answer: '0',
    hint: 'A strong relationship means the points sit very close to a single straight line; a weak relationship means they are spread out widely around any line you could draw.',
    solution: 'Plot ii\'s points sit almost exactly on a line (strongest); plot iv\'s points are few and scattered with no tight pattern (weakest).',
    solutionSteps: [
      {
        explanation: 'Compare how tightly the points cluster around a straight line in each plot.',
        workingOut: 'ii: points are closely packed along a clear downward line, very little scatter.',
        graphData: null,
      },
      {
        explanation: 'Compare the most scattered plot.',
        workingOut: 'iv: only 8 points, spread widely with no tight linear pattern — the weakest relationship of the four.',
        graphData: null,
      },
    ],
    graphData: { svg: q2GridSvg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q3: shoe size / height regression ====
  {
    id: 'y10-18h-q3a',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Data was collected on 100 adults comparing shoe size (ranging from 6 to 13) and height. An equation relating height (cm) to shoe size was found:<div style="text-align:center;font-weight:600;margin:10px 0">height = 127.18 + 4.84 &times; shoe size</div>Use this equation to predict (to the nearest cm) the height of a person whose shoe size is 7. Is this interpolation or extrapolation?',
    opts: [
      '161 cm; interpolation (7 is within the observed range 6-13)',
      '161 cm; extrapolation (7 is outside the observed range)',
      '166 cm; interpolation',
      '161 cm; neither, since this is an exact data point',
    ],
    a: 0,
    answer: '0',
    hint: 'Substitute shoe size = 7 into the equation, then check whether 7 lies inside [6, 13].',
    solution: 'height = 127.18 + 4.84 &times; 7 = 127.18 + 33.88 = 161.06 ≈ 161 cm. Since 7 is between 6 and 13, this is interpolation.',
    solutionSteps: [
      {
        explanation: 'Substitute shoe size = 7.',
        workingOut: '\\(\\text{height} = 127.18 + 4.84 \\times 7 = 127.18 + 33.88\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate and round to the nearest cm.',
        workingOut: '\\(= 161.06 \\approx 161\\text{ cm}\\)',
        graphData: null,
      },
      {
        explanation: 'Classify the prediction.',
        workingOut: 'Shoe size 7 lies within the observed range of 6 to 13, so this is interpolation.',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q3b',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same equation, height = 127.18 + 4.84 &times; shoe size, predict (to the nearest cm) the height of a person whose shoe size is 12. Is this interpolation or extrapolation?',
    opts: [
      '185 cm; interpolation (12 is within the observed range 6-13)',
      '185 cm; extrapolation',
      '190 cm; interpolation',
      '185 cm; cannot be determined',
    ],
    a: 0,
    answer: '0',
    hint: 'Substitute shoe size = 12, then check whether 12 lies inside [6, 13].',
    solution: 'height = 127.18 + 4.84 &times; 12 = 127.18 + 58.08 = 185.26 ≈ 185 cm. Since 12 is between 6 and 13, this is interpolation.',
    solutionSteps: [
      {
        explanation: 'Substitute shoe size = 12.',
        workingOut: '\\(\\text{height} = 127.18 + 4.84 \\times 12 = 127.18 + 58.08\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate and round to the nearest cm.',
        workingOut: '\\(= 185.26 \\approx 185\\text{ cm}\\)',
        graphData: null,
      },
      {
        explanation: 'Classify the prediction.',
        workingOut: 'Shoe size 12 lies within the observed range of 6 to 13, so this is interpolation.',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q3c',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same equation, height = 127.18 + 4.84 &times; shoe size, predict (to the nearest cm) the height of a person whose shoe size is 14. Is this interpolation or extrapolation?',
    opts: [
      '195 cm; extrapolation (14 is outside the observed range 6-13)',
      '195 cm; interpolation',
      '190 cm; extrapolation',
      '195 cm; neither',
    ],
    a: 0,
    answer: '0',
    hint: 'Substitute shoe size = 14, then check whether 14 lies inside [6, 13].',
    solution: 'height = 127.18 + 4.84 &times; 14 = 127.18 + 67.76 = 194.94 ≈ 195 cm. Since 14 is outside 6-13, this is extrapolation.',
    solutionSteps: [
      {
        explanation: 'Substitute shoe size = 14.',
        workingOut: '\\(\\text{height} = 127.18 + 4.84 \\times 14 = 127.18 + 67.76\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate and round to the nearest cm.',
        workingOut: '\\(= 194.94 \\approx 195\\text{ cm}\\)',
        graphData: null,
      },
      {
        explanation: 'Classify the prediction.',
        workingOut: 'Shoe size 14 is outside the observed range of 6 to 13 (no adult in the data had size 14), so this is extrapolation — less reliable.',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q4: pumpkin weight vs seed count ====
  {
    id: 'y10-18h-q4a',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'A line of best fit relating the weight of a pumpkin (kg, on the x-axis) to the number of seeds it contains (y-axis) was found to pass through the points (1, 300) and (7, 540).Find the equation of the line of best fit.',
    opts: [
      'seeds = 40 &times; weight + 260',
      'seeds = 40 &times; weight + 300',
      'seeds = 34.3 &times; weight + 266',
      'seeds = 240 &times; weight + 60',
    ],
    a: 0,
    answer: '0',
    hint: 'Find the gradient m = (540 − 300) / (7 − 1), then use the point-gradient form y − y₁ = m(x − x₁) with (1, 300).',
    solution: 'm = 240/6 = 40. y − 300 = 40(x − 1) ⟹ y = 40x + 260.',
    solutionSteps: [
      {
        explanation: 'Find the gradient using the two given points.',
        workingOut: '\\(m = \\dfrac{540 - 300}{7 - 1} = \\dfrac{240}{6} = 40\\)',
        graphData: null,
      },
      {
        explanation: 'Use the point-gradient form with (1, 300).',
        workingOut: '\\(y - 300 = 40(x - 1)\\)\\\\ \\(y = 40x - 40 + 300\\)',
        graphData: null,
      },
      {
        explanation: 'Simplify, and interpret in context.',
        workingOut: '\\(y = 40x + 260 \\ \\Rightarrow \\ \\text{seeds} = 40 \\times \\text{weight} + 260\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q4Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q4b',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the equation seeds = 40 &times; weight + 260, estimate the number of seeds a pumpkin contains if it weighs 5.2 kg.',
    opts: ['468 seeds', '208 seeds', '468.4 seeds rounded up to 469', '520 seeds'],
    a: 0,
    answer: '0',
    hint: 'Substitute weight = 5.2 into seeds = 40 &times; weight + 260.',
    solution: 'seeds = 40 &times; 5.2 + 260 = 208 + 260 = 468.',
    solutionSteps: [
      {
        explanation: 'Substitute weight = 5.2.',
        workingOut: '\\(\\text{seeds} = 40 \\times 5.2 + 260 = 208 + 260\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 468\\text{ seeds}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q4Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q4c',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 100,
    question:
      'Using the same equation, seeds = 40 &times; weight + 260, estimate the weight of a pumpkin containing 600 seeds. (Rearrange the equation first.)',
    opts: ['8.5 kg', '8.0 kg', '15 kg', '9.0 kg'],
    a: 0,
    answer: '0',
    hint: 'Rearrange: weight = (seeds − 260) ÷ 40, then substitute seeds = 600.',
    solution: 'weight = (600 − 260)/40 = 340/40 = 8.5 kg.',
    solutionSteps: [
      {
        explanation: 'Rearrange the equation to make weight the subject.',
        workingOut: '\\(\\text{seeds} = 40 \\times \\text{weight} + 260 \\ \\Rightarrow \\ \\text{weight} = \\dfrac{\\text{seeds} - 260}{40}\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute seeds = 600.',
        workingOut: '\\(\\text{weight} = \\dfrac{600 - 260}{40} = \\dfrac{340}{40}\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 8.5\\text{ kg}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q4Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q5: fitness level vs run time (Example 17 style) ====
  {
    id: 'y10-18h-q5a',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 110,
    question:
      'A class of Year 10 PE students ran a lap of the school\'s oval. Their times were compared against their fitness level (1-10). The teacher drew a line of best fit over the scatter plot, passing through (0, 78) and (10, 54).Determine the equation of the line of best fit.',
    opts: [
      'Time = 78 − 2.4 &times; Fitness',
      'Time = 78 + 2.4 &times; Fitness',
      'Time = 54 − 2.4 &times; Fitness',
      'Time = 2.4 &times; Fitness + 54',
    ],
    a: 0,
    answer: '0',
    hint: 'Find the gradient using (0, 78) and (10, 54), then use the point-gradient form.',
    solution: 'm = (54 − 78)/(10 − 0) = −24/10 = −2.4. Time − 78 = −2.4(Fitness − 0) ⟹ Time = 78 − 2.4 &times; Fitness.',
    solutionSteps: [
      {
        explanation: 'Find the gradient using the two anchor points on the line.',
        workingOut: '\\(m = \\dfrac{54 - 78}{10 - 0} = \\dfrac{-24}{10} = -2.4\\)',
        graphData: null,
      },
      {
        explanation: 'Use the point-gradient form with (0, 78).',
        workingOut: '\\(\\text{Time} - 78 = -2.4(\\text{Fitness} - 0)\\)',
        graphData: null,
      },
      {
        explanation: 'Simplify.',
        workingOut: '\\(\\text{Time} = 78 - 2.4 \\times \\text{Fitness}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q5Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q5b',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the equation Time = 78 − 2.4 &times; Fitness, predict the time (to 1 decimal place) it would take a student with a fitness level of 3 to run a lap of the oval.',
    opts: ['70.8 seconds', '75.6 seconds', '71.4 seconds', '68.4 seconds'],
    a: 0,
    answer: '0',
    hint: 'Substitute Fitness = 3 into Time = 78 − 2.4 &times; Fitness.',
    solution: 'Time = 78 − 2.4 &times; 3 = 78 − 7.2 = 70.8 seconds.',
    solutionSteps: [
      {
        explanation: 'Substitute Fitness = 3.',
        workingOut: '\\(\\text{Time} = 78 - 2.4 \\times 3 = 78 - 7.2\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 70.8\\text{ seconds}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q5Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q5c',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 100,
    question:
      'Using the same equation, Time = 78 − 2.4 &times; Fitness, predict the fitness level of a student if a lap of the oval is run in 62 seconds. (Rearrange the equation first.)',
    opts: ['6.7', '6.0', '6.5', '7.3'],
    a: 0,
    answer: '0',
    hint: 'Rearrange: Fitness = (78 − Time) ÷ 2.4, then substitute Time = 62.',
    solution: 'Fitness = (78 − 62)/2.4 = 16/2.4 ≈ 6.7.',
    solutionSteps: [
      {
        explanation: 'Rearrange the equation to make Fitness the subject.',
        workingOut: '\\(\\text{Time} = 78 - 2.4 \\times \\text{Fitness} \\ \\Rightarrow \\ \\text{Fitness} = \\dfrac{78 - \\text{Time}}{2.4}\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute Time = 62.',
        workingOut: '\\(\\text{Fitness} = \\dfrac{78 - 62}{2.4} = \\dfrac{16}{2.4}\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(\\approx 6.7\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q5Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q5d',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Considering the two predictions just made (fitness level 3, and a 62-second lap time),are these predictions examples of interpolation or extrapolation? Explain.',
    opts: [
      'Both are interpolation — fitness level 3 lies within the observed 0-10 range, and 62 seconds lies within the observed 54-78 second range.',
      'Both are extrapolation, since the exact values weren\'t directly measured for any student.',
      'The fitness prediction is extrapolation; the time prediction is interpolation.',
      'The fitness prediction is interpolation; the time prediction is extrapolation.',
    ],
    a: 0,
    answer: '0',
    hint: 'Interpolation means the input value lies within the range of the data actually observed on that axis.',
    solution: 'Fitness = 3 is within the observed range (0-10); Time = 62s is within the observed range (54-78s) — both predictions are interpolation.',
    solutionSteps: [
      {
        explanation: 'Check the fitness-level prediction (Q5b used Fitness = 3).',
        workingOut: 'The observed fitness levels range from about 0 to 10; 3 lies within this range — interpolation.',
        graphData: null,
      },
      {
        explanation: 'Check the time prediction (Q5c used Time = 62s).',
        workingOut: 'The observed times range from about 54 to 78 seconds; 62 lies within this range — interpolation.',
        graphData: null,
      },
    ],
    graphData: { svg: q5Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q6: problems with predictions from a line of best fit ====
  {
    id: 'y10-18h-q6a',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'State the problem with making predictions using the line of best fit in the scatter plot below.',
    opts: [
      'There are very few data points, and they are widely scattered around the line — the relationship is weak, so predictions from this line would be unreliable.',
      'The line has the wrong sign of gradient.',
      'There are too many data points for a line of best fit to be meaningful.',
      'There is no problem — this is an ideal data set for making predictions.',
    ],
    a: 0,
    answer: '0',
    hint: 'Look at how far the points sit from the line, and how many points there are in total.',
    solution: 'Only 5 points, spread widely around the line — a weak relationship makes any prediction from this line unreliable.',
    solutionSteps: [
      {
        explanation: 'Count the data points and assess how well they fit the line.',
        workingOut: 'Only 5 points, and they lie well above or below the line rather than hugging it — a weak, unreliable linear relationship.',
        graphData: null,
      },
      {
        explanation: 'Conclude.',
        workingOut: 'With so little data and such a poor fit, predictions from this line of best fit cannot be trusted.',
        graphData: null,
      },
    ],
    graphData: { svg: q6aSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q6b',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'State the problem with making predictions using the line of best fit in the scatter plot below.',
    opts: [
      'The data actually follows a curved (non-linear) trend that flattens out at higher x-values, but a straight line has been fitted — using it to predict beyond the flattening region would give an overestimate.',
      'The points are too scattered for any line to fit.',
      'The line\'s gradient is too steep for the data shown.',
      'There is no problem — a straight line always fits curved data equally well.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the shape of the point pattern (does it stay straight, or bend?) to the straight line drawn through it.',
    solution: 'The points curve and flatten (plateau) for larger x, but the fitted line keeps rising in a straight line — beyond the observed data it would predict values that are too high.',
    solutionSteps: [
      {
        explanation: 'Examine the shape of the data.',
        workingOut: 'For small x the points rise steeply, but from about x = 5 onward they level off (plateau) near y ≈ 11.5 — this is a curve, not a straight line.',
        graphData: null,
      },
      {
        explanation: 'Compare this to the fitted straight line.',
        workingOut: 'The straight line keeps increasing at a constant rate, so past the plateau it would predict values well above what the data actually shows.',
        graphData: null,
      },
    ],
    graphData: { svg: q6bSvg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q7: forecasting from a time series line of best fit ====
  {
    id: 'y10-18h-q7a',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 110,
    question:
      'The time series below shows a company\'s profit (in millions of dollars) for 10 consecutive financial years. \'Year 1\' is 1988-1989, ..., \'Year 10\' is 1997-1998. A line of best fit has been drawn through the points (0, 1) and (10, 4), and extended (dashed) to forecast Year 11. Using this line, predict the company\'s profit (to the nearest $100 000) in the financial year 1998-1999 (Year 11).',
    opts: ['\\(4.3\\) million', '\\(4.0\\) million', '\\(4.6\\) million', '\\(4.1\\) million'],
    a: 0,
    answer: '0',
    hint: 'Find the equation of the line through (0, 1) and (10, 4), then substitute Year = 11.',
    solution: 'm = (4−1)/(10−0) = 0.3. Profit = 1 + 0.3 &times; Year. At Year = 11: Profit = 1 + 3.3 = 4.3.',
    solutionSteps: [
      {
        explanation: 'Find the gradient using the two anchor points on the line.',
        workingOut: '\\(m = \\dfrac{4 - 1}{10 - 0} = \\dfrac{3}{10} = 0.3\\)',
        graphData: null,
      },
      {
        explanation: 'Write the equation using the point (0, 1).',
        workingOut: '\\(\\text{Profit} = 1 + 0.3 \\times \\text{Year}\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute Year = 11 (the financial year 1998-1999).',
        workingOut: '\\(\\text{Profit} = 1 + 0.3 \\times 11 = 1 + 3.3 = 4.3\\)',
        graphData: null,
      },
      {
        explanation: 'State the forecast.',
        workingOut: 'Predicted profit ≈ \\(4.3\\) million.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18h-q7b',
    topicId: 'y10-18h-icem',
    c: '18H',
    t: 'Line of best fit',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Considering the Year 11 (1998-1999) profit forecast just made, is this an example of interpolation or extrapolation? Explain.',
    opts: [
      'Extrapolation — Year 11 lies outside the observed range of Years 1-10, so this is forecasting beyond the collected data.',
      'Interpolation — Year 11 lies within the observed range of Years 1-10.',
      'Neither — forecasting is a completely different technique from both interpolation and extrapolation.',
      'Extrapolation, but only because profit is measured in millions of dollars.',
    ],
    a: 0,
    answer: '0',
    hint: 'The observed data covers Years 1 to 10. Where does Year 11 sit relative to that range?',
    solution: 'Year 11 is beyond the observed range (Years 1-10), so predicting it is extrapolation — this kind of forecast should be treated with caution.',
    solutionSteps: [
      {
        explanation: 'Identify the observed range of the data.',
        workingOut: 'The time series covers Year 1 through Year 10 only.',
        graphData: null,
      },
      {
        explanation: 'Compare Year 11 to that range.',
        workingOut: 'Year 11 is outside (beyond) the observed range, so this prediction is extrapolation, not interpolation.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
];
