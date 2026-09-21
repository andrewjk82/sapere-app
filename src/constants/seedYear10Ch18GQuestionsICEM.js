// Year 10 Chapter 18: Statistics — ICE-EM Mathematics 10 (3ed), Chapter 18,
// Exercise 18G: "Bivariate data" (pp.547-551). This exercise is built
// around "represent this on a scatter plot" + "describe the relationship /
// which point represents..." prompts. Every one of those resolves to a
// single determinate fact once the data is plotted correctly (the
// direction/strength of the trend, or which single point matches a given
// description), so each part is converted to multiple_choice with a real
// hand-drawn scatter-plot SVG supplied as graphData.
//
// Q7, Q8: the textbook's scatter plots are scanned images whose point
// coordinates can't be read back precisely, so — same approach used
// throughout this chapter for scanned diagrams — each is rebuilt as a
// self-consistent set of coordinates that satisfies every verbal
// description in the question (e.g. "Barry, who is heavier and taller than
// Annabelle" really does sit up-and-right of Annabelle's point), so there
// is exactly one correct point for each part.

const axisTicks = (min, max, step) => {
  const ticks = [];
  for (let v = min; v <= max + 1e-9; v += step) ticks.push(Math.round(v * 100) / 100);
  return ticks;
};

// Generic scatter-plot SVG: plain (x,y) points, optional text labels next
// to each point. Same visual language as the Ch18E/18F charts (indigo
// points, dashed grid, system-ui labels).
const scatterSvg = (points, xLabel, yLabel, opts = {}) => {
  const {
    xMin = 0,
    xMax = 100,
    yMin = 0,
    yMax = 100,
    xStep = 10,
    yStep = 10,
    width: chartW = 480,
    height: chartH = 340,
    showLabels = false,
    axisBreak = false,
  } = opts;
  const padL = 56;
  const padR = 20;
  const padT = 20;
  const padB = 50;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const x = (v) => padL + ((v - xMin) / (xMax - xMin)) * plotW;
  const y = (v) => padT + plotH - ((v - yMin) / (yMax - yMin)) * plotH;

  const xTicks = axisTicks(xMin, xMax, xStep);
  const yTicks = axisTicks(yMin, yMax, yStep);

  const gridLines = yTicks
    .map(
      (v) =>
        `<line x1="${padL}" y1="${y(v)}" x2="${padL + plotW}" y2="${y(v)}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 4"/>
         <text x="${padL - 8}" y="${y(v) + 4}" font-family="system-ui" font-size="11" fill="#94a3b8" text-anchor="end">${v}</text>`
    )
    .join('');

  const xTickLabels = xTicks
    .map(
      (v) =>
        `<text x="${x(v)}" y="${padT + plotH + 18}" font-family="system-ui" font-size="11" fill="#64748b" text-anchor="middle">${v}</text>`
    )
    .join('');

  const dots = points
    .map((p) => {
      const label = showLabels && p.label
        ? `<text x="${x(p.x) + 8}" y="${y(p.y) - 6}" font-family="system-ui" font-size="12" font-weight="700" fill="#4338ca">${p.label}</text>`
        : '';
      return `<circle cx="${x(p.x)}" cy="${y(p.y)}" r="4" fill="#6366f1" stroke="#fff" stroke-width="1"/>${label}`;
    })
    .join('');

  const breakMark = axisBreak
    ? `<path d="M ${padL - 6} ${padT + plotH + 6} l 5 -6 l 5 6 l 5 -6" stroke="#94a3b8" stroke-width="1.5" fill="none"/>`
    : '';

  return `<svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    ${gridLines}
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1.5"/>
    ${breakMark}
    ${xTickLabels}
    ${dots}
    <text x="${padL + plotW / 2}" y="${chartH - 6}" font-family="system-ui" font-size="12" font-weight="600" fill="#475569" text-anchor="middle">${xLabel}</text>
    <text x="14" y="${padT + plotH / 2}" font-family="system-ui" font-size="12" font-weight="600" fill="#475569" text-anchor="middle" transform="rotate(-90 14 ${padT + plotH / 2})">${yLabel}</text>
  </svg>`;
};

// ---- Q1: Maths vs English marks, 10 students ----
const q1Points = [
  { x: 72, y: 78 }, { x: 50, y: 64 }, { x: 96, y: 70 }, { x: 58, y: 46 }, { x: 86, y: 88 },
  { x: 94, y: 72 }, { x: 78, y: 70 }, { x: 66, y: 62 }, { x: 85, y: 72 }, { x: 78, y: 74 },
];
const q1Svg = scatterSvg(q1Points, 'Mathematics mark', 'English mark', { xMin: 50, xMax: 100, yMin: 40, yMax: 90, xStep: 10, yStep: 10, axisBreak: true });

// ---- Q2: rainfall vs rainy days, 12 cities ----
const q2Points = [
  { x: 161, y: 13 }, { x: 175, y: 14 }, { x: 142, y: 14 }, { x: 90, y: 11 }, { x: 96, y: 10 }, { x: 71, y: 7 },
  { x: 62, y: 7 }, { x: 41, y: 6 }, { x: 33, y: 7 }, { x: 93, y: 10 }, { x: 96, y: 10 }, { x: 126, y: 12 },
];
const q2Svg = scatterSvg(q2Points, 'Average rainfall (mm)', 'Average rainy days', { xMin: 0, xMax: 180, yMin: 0, yMax: 16, xStep: 20, yStep: 2 });

// ---- Q3: carbohydrates vs fat, 9 cereals ----
const q3Points = [
  { x: 88.7, y: 0.3 }, { x: 67.0, y: 1.3 }, { x: 77.5, y: 2.8 }, { x: 61.7, y: 7.6 }, { x: 86.8, y: 1.2 },
  { x: 32.4, y: 5.7 }, { x: 72.4, y: 9.4 }, { x: 77.1, y: 10.0 }, { x: 86.5, y: 0.7 },
];
const q3Svg = scatterSvg(q3Points, 'Carbohydrates (g)', 'Fat (g)', { xMin: 0, xMax: 100, yMin: 0, yMax: 12, xStep: 10, yStep: 2 });

// ---- Q4: IQ vs puzzle time, 9 adults ----
const q4Points = [
  { x: 115, y: 14 }, { x: 118, y: 15 }, { x: 110, y: 21 }, { x: 103, y: 27 }, { x: 120, y: 11 },
  { x: 104, y: 25 }, { x: 124, y: 9 }, { x: 116, y: 16 }, { x: 110, y: 18 },
];
const q4Svg = scatterSvg(q4Points, 'IQ', 'Time (seconds)', { xMin: 95, xMax: 130, yMin: 0, yMax: 30, xStep: 5, yStep: 5, axisBreak: true });

// ---- Q5: kicks vs handballs, 22 AFL players ----
const q5Points = [
  { x: 3, y: 8 }, { x: 20, y: 11 }, { x: 7, y: 11 }, { x: 19, y: 6 }, { x: 7, y: 4 }, { x: 6, y: 6 },
  { x: 2, y: 3 }, { x: 9, y: 1 }, { x: 7, y: 3 }, { x: 26, y: 3 }, { x: 3, y: 8 }, { x: 12, y: 4 },
  { x: 17, y: 5 }, { x: 6, y: 0 }, { x: 11, y: 3 }, { x: 14, y: 8 }, { x: 5, y: 3 }, { x: 1, y: 0 },
  { x: 21, y: 11 }, { x: 6, y: 0 }, { x: 13, y: 17 }, { x: 4, y: 11 },
];
const q5Svg = scatterSvg(q5Points, 'Number of kicks', 'Number of handballs', { xMin: 0, xMax: 28, yMin: 0, yMax: 18, xStep: 4, yStep: 2 });

// ---- Q6: goals for vs goals against, 11 soccer teams ----
const q6Teams = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const q6For = [36, 45, 22, 26, 20, 59, 24, 41, 23, 43, 32, 41];
const q6Against = [31, 16, 33, 26, 64, 16, 53, 42, 47, 21, 49, 14];
const q6Points = q6Teams.map((t, i) => ({ x: q6For[i], y: q6Against[i], label: t }));
const q6Svg = scatterSvg(q6Points, 'Goals for', 'Goals against', { xMin: 0, xMax: 65, yMin: 0, yMax: 70, xStep: 10, yStep: 10, showLabels: true });

// ---- Q7: height vs weight, 8 people + Annabelle (self-consistent reconstruction) ----
const q7People = [
  { x: 170, y: 65, label: 'A' }, // Annabelle
  { x: 178, y: 75, label: 'iv' }, // Barry: heavier & taller than A
  { x: 165, y: 70, label: 'ii' }, // Chandra: shorter but heavier than A
  { x: 178, y: 78, label: 'v' }, // Dario: same height as Barry, a little heavier
  { x: 160, y: 60, label: 'viii' }, // Edwina: shorter and lighter than Chandra
  { x: 183, y: 75, label: 'vii' }, // Frederick: same weight as Barry, a bit taller
  { x: 170, y: 75, label: 'iii' }, // George: same height as A, heavier
  { x: 162, y: 65, label: 'i' }, // Harriet: same weight as A, shorter
  { x: 190, y: 80, label: 'vi' }, // Ivan: tallest in the group
];
const q7Svg = scatterSvg(q7People, 'Height (cm)', 'Weight (kg)', { xMin: 155, xMax: 195, yMin: 55, yMax: 85, xStep: 5, yStep: 5, showLabels: true, axisBreak: true });

// ---- Q8: Test 1 vs Test 2 marks, 8 students + John (self-consistent reconstruction) ----
const q8Points = [
  { x: 60, y: 65, label: 'J' }, // John
  { x: 90, y: 92, label: 'iii' }, // Alex: top mark in BOTH tests
  { x: 90, y: 55, label: 'iv' }, // Bao: top mark in Test 1, not Test 2
  { x: 75, y: 55, label: 'vi' }, // Charlene: better than John in Test1, worse in Test2
  { x: 50, y: 40, label: 'vii' }, // Drago: worse than Charlene on both
  { x: 45, y: 65, label: 'i' }, // Eddie: same Test2 as John, worse Test1
  { x: 60, y: 80, label: 'v' }, // Francis: same Test1 as John, better Test2
  { x: 35, y: 45, label: 'viii' }, // Georgina: lowest Test1 mark
  { x: 85, y: 30, label: 'ii' }, // Harvir: greatest discrepancy between marks
];
const q8Svg = scatterSvg(q8Points, 'Test 1', 'Test 2', { xMin: 0, xMax: 100, yMin: 0, yMax: 100, xStep: 10, yStep: 10, showLabels: true });

// ---- Q9: Test 1 vs Test 2 with line of best fit ----
const q9Points = [
  { x: 53, y: 54 }, { x: 70, y: 67 }, { x: 53, y: 55 }, { x: 81, y: 81 }, { x: 85, y: 82 },
  { x: 51, y: 51 }, { x: 52, y: 53 }, { x: 76, y: 78 }, { x: 75, y: 77 },
];
const q9Svg = scatterSvg(q9Points, 'Test 1', 'Test 2', { xMin: 40, xMax: 100, yMin: 40, yMax: 100, xStep: 10, yStep: 10, axisBreak: true });

export const Y10_CH18G_ICEM_QUESTIONS = [
  // ==== Q1: Maths vs English marks ====
  {
    id: 'y10-18g-q1a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The table below gives the Mathematics and English marks obtained by 10 students.<div style="text-align:center;font-weight:600;margin:10px 0">Maths: 72, 50, 96, 58, 86, 94, 78, 66, 85, 78<br/>English: 78, 64, 70, 46, 88, 72, 70, 62, 72, 74</div>This data is plotted on the scatter plot below (Mathematics on the horizontal axis, English on the vertical axis). The student with the highest Mathematics mark (96) got what English mark?',
    opts: ['70', '78', '88', '46'],
    a: 0,
    answer: '0',
    hint: 'Find the (96, ?) point on the plot / the pair (96, 70) in the table.',
    solution: 'The student with Maths = 96 has English = 70 (they are paired in the same table column).',
    solutionSteps: [
      {
        explanation: 'Locate the student whose Mathematics mark is 96 in the table.',
        workingOut: 'The 3rd student: Maths = 96, English = 70.',
        graphData: null,
      },
      {
        explanation: 'Read off their English mark from the same column.',
        workingOut: 'English mark = 70.',
        graphData: null,
      },
    ],
    graphData: { svg: q1Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q1b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same Mathematics/English scatter plot, which best describes the relationship between the two sets of marks?',
    opts: [
      'A weak-to-moderate positive relationship — students with higher Maths marks tend to also have higher English marks, though the points are fairly scattered.',
      'A strong negative relationship — higher Maths marks go with lower English marks.',
      'No relationship at all — the marks appear completely unrelated.',
      'A perfect positive relationship — every student\'s Maths and English marks are identical.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the students at the low-Maths end of the plot to those at the high-Maths end.',
    solution: 'Low-Maths students (50, 58) have low-ish English marks (64, 46); high-Maths students (86, 94, 96) have higher English marks overall (88, 72, 70) — a scattered but generally positive trend.',
    solutionSteps: [
      {
        explanation: 'Compare the two lowest Maths marks and their English marks.',
        workingOut: 'Maths 50→English 64; Maths 58→English 46 — relatively low English marks.',
        graphData: null,
      },
      {
        explanation: 'Compare the highest Maths marks and their English marks.',
        workingOut: 'Maths 86→English 88; Maths 94→English 72; Maths 96→English 70 — generally higher English marks than the low-Maths group, though not perfectly ordered.',
        graphData: null,
      },
      {
        explanation: 'Conclude the overall direction.',
        workingOut: 'The general trend (not a perfect line) is: higher Maths tends to come with higher English — a weak-to-moderate positive relationship.',
        graphData: null,
      },
    ],
    graphData: { svg: q1Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q2: rainfall vs rainy days ====
  {
    id: 'y10-18g-q2a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The table below gives the average monthly rainfall (mm) and average number of rainy days per month for 12 Australian cities.<div style="text-align:center;font-weight:600;margin:10px 0">Rainfall: 161, 175, 142, 90, 96, 71, 62, 41, 33, 93, 96, 126<br/>Rainy days: 13, 14, 14, 11, 10, 7, 7, 6, 7, 10, 10, 12</div>This is plotted on the scatter plot below (rainfall on the horizontal axis, rainy days on the vertical axis). Give a brief description of the relationship between rainy days and average rainfall.',
    opts: [
      'A strong positive relationship — cities with higher average rainfall tend to have more rainy days per month.',
      'A strong negative relationship — cities with higher rainfall have fewer rainy days.',
      'No relationship — rainfall and number of rainy days appear unrelated.',
      'A weak positive relationship with many contradictions.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the city with the highest rainfall to the city with the lowest, and check their rainy-day counts.',
    solution: 'The city with the highest rainfall (175 mm) has the most rainy days (14); the city with the lowest rainfall (33 mm) has few rainy days (7) — a clear, strong positive trend.',
    solutionSteps: [
      {
        explanation: 'Check the city with the most rainfall.',
        workingOut: 'Rainfall = 175 mm → rainy days = 14 (the maximum).',
        graphData: null,
      },
      {
        explanation: 'Check the city with the least rainfall.',
        workingOut: 'Rainfall = 33 mm → rainy days = 7 (well below the maximum).',
        graphData: null,
      },
      {
        explanation: 'Check the rest of the data follows the same pattern.',
        workingOut: 'Every city with rainfall above ~120 mm has 12-14 rainy days; every city below ~70 mm has 6-7 rainy days — a consistent, strong positive relationship.',
        graphData: null,
      },
    ],
    graphData: { svg: q2Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q2b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same rainfall/rainy-days data, the city with the LOWEST average rainfall (33 mm) has how many average rainy days per month?',
    opts: ['7', '6', '10', '14'],
    a: 0,
    answer: '0',
    hint: 'Find the pair (33, ?) in the table.',
    solution: 'Rainfall = 33 mm is paired with 7 rainy days in the table.',
    solutionSteps: [
      {
        explanation: 'Find the smallest rainfall value in the table.',
        workingOut: 'The smallest rainfall value is 33 mm.',
        graphData: null,
      },
      {
        explanation: 'Read the paired rainy-days value.',
        workingOut: 'Rainfall 33 mm is paired with 7 rainy days.',
        graphData: null,
      },
    ],
    graphData: { svg: q2Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q3: carbohydrates vs fat ====
  {
    id: 'y10-18g-q3a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The table below gives the carbohydrate and fat content (in g, per 100 g) of 9 breakfast cereals.<div style="text-align:center;font-weight:600;margin:10px 0">Carbohydrates: 88.7, 67.0, 77.5, 61.7, 86.8, 32.4, 72.4, 77.1, 86.5<br/>Fat: 0.3, 1.3, 2.8, 7.6, 1.2, 5.7, 9.4, 10.0, 0.7</div>This is plotted below (carbohydrates on the horizontal axis, fat on the vertical axis). Does there appear to be any relationship between the carbohydrate content and the fat content?',
    opts: [
      'A weak negative trend with several exceptions — the very highest-carbohydrate cereals (86-89 g) all have very low fat (under 1.3 g), but some mid-carbohydrate cereals have unexpectedly high fat.',
      'A strong, perfectly consistent positive relationship — more carbohydrates always means more fat.',
      'A strong, perfectly consistent negative relationship with no exceptions.',
      'The two quantities are completely unrelated, with no pattern at all.',
    ],
    a: 0,
    answer: '0',
    hint: 'Look at the three highest-carbohydrate cereals first, then check whether the pattern holds for the mid-range cereals.',
    solution: 'The three highest-carb cereals (88.7, 86.8, 86.5) all have very low fat (0.3, 1.2, 0.7 g) — but mid-carb cereals like 77.1 g and 72.4 g have high fat (10.0, 9.4 g), breaking a clean trend.',
    solutionSteps: [
      {
        explanation: 'Check the highest-carbohydrate cereals.',
        workingOut: '88.7g carbs → 0.3g fat; 86.8g carbs → 1.2g fat; 86.5g carbs → 0.7g fat — all very low fat, supporting a negative trend.',
        graphData: null,
      },
      {
        explanation: 'Check the mid-range carbohydrate cereals.',
        workingOut: '77.1g carbs → 10.0g fat (the highest fat in the whole data set!); 72.4g carbs → 9.4g fat — these break the otherwise negative pattern.',
        graphData: null,
      },
      {
        explanation: 'Conclude.',
        workingOut: 'There is a weak negative tendency overall, but it is not consistent — several mid-range cereals are clear exceptions.',
        graphData: null,
      },
    ],
    graphData: { svg: q3Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q3b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same carbohydrate/fat data, which cereal has the HIGHEST fat content, and what is its carbohydrate content?',
    opts: ['10.0 g fat; 77.1 g carbohydrates', '9.4 g fat; 72.4 g carbohydrates', '7.6 g fat; 61.7 g carbohydrates', '0.3 g fat; 88.7 g carbohydrates'],
    a: 0,
    answer: '0',
    hint: 'Find the largest value in the fat row, then read the paired carbohydrate value.',
    solution: 'The highest fat value is 10.0 g, paired with 77.1 g of carbohydrates.',
    solutionSteps: [
      {
        explanation: 'Scan the fat values for the largest one.',
        workingOut: '0.3, 1.3, 2.8, 7.6, 1.2, 5.7, 9.4, 10.0, 0.7 — the largest is 10.0 g.',
        graphData: null,
      },
      {
        explanation: 'Read the carbohydrate value paired with it.',
        workingOut: '10.0 g fat is paired with 77.1 g carbohydrates.',
        graphData: null,
      },
    ],
    graphData: { svg: q3Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q4: IQ vs puzzle time ====
  {
    id: 'y10-18g-q4a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The table below gives the IQ of 9 adults and the time (in seconds) each took to complete a simple puzzle.<div style="text-align:center;font-weight:600;margin:10px 0">IQ: 115, 118, 110, 103, 120, 104, 124, 116, 110<br/>Time (s): 14, 15, 21, 27, 11, 25, 9, 16, 18</div>This is plotted below (IQ on the horizontal axis, time on the vertical axis). Is there any trend in the data?',
    opts: [
      'Yes — a negative trend: adults with a higher IQ generally took less time to complete the puzzle.',
      'Yes — a positive trend: adults with a higher IQ generally took more time.',
      'No trend — IQ and puzzle time appear unrelated.',
      'Yes — but the trend is that everyone took exactly the same time regardless of IQ.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the adult with the highest IQ to the adult with the lowest IQ, and check their times.',
    solution: 'IQ = 124 (highest) → time = 9s (fastest); IQ = 103 (lowest) → time = 27s (slowest) — a clear negative trend.',
    solutionSteps: [
      {
        explanation: 'Check the adult with the highest IQ.',
        workingOut: 'IQ = 124 → time = 9 seconds, the fastest time in the data set.',
        graphData: null,
      },
      {
        explanation: 'Check the adult with the lowest IQ.',
        workingOut: 'IQ = 103 → time = 27 seconds, the slowest time in the data set.',
        graphData: null,
      },
      {
        explanation: 'Conclude the direction of the trend.',
        workingOut: 'Higher IQ pairs with lower (faster) time throughout the data — a negative trend.',
        graphData: null,
      },
    ],
    graphData: { svg: q4Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q4b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same IQ/puzzle-time data, the adult with the HIGHEST IQ (124) took how many seconds to complete the puzzle?',
    opts: ['9', '11', '14', '16'],
    a: 0,
    answer: '0',
    hint: 'Find the pair (124, ?) in the table.',
    solution: 'IQ = 124 is paired with a time of 9 seconds.',
    solutionSteps: [
      {
        explanation: 'Find the largest IQ value in the table.',
        workingOut: 'The largest IQ value is 124.',
        graphData: null,
      },
      {
        explanation: 'Read the paired time value.',
        workingOut: 'IQ 124 is paired with a time of 9 seconds.',
        graphData: null,
      },
    ],
    graphData: { svg: q4Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q5: AFL kicks vs handballs ====
  {
    id: 'y10-18g-q5a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'The table below gives the number of kicks and handballs obtained by each of 22 players in an AFL team in a particular match.<div style="text-align:center;font-weight:600;margin:10px 0">Kicks: 3, 20, 7, 19, 7, 6, 2, 9, 7, 26, 3, 12, 17, 6, 11, 14, 5, 1, 21, 6, 13, 4<br/>Handballs: 8, 11, 11, 6, 4, 6, 3, 1, 3, 3, 8, 4, 5, 0, 3, 8, 3, 0, 11, 0, 17, 11</div>This is plotted below (kicks on the horizontal axis, handballs on the vertical axis). Does the scatter plot support the claim, "the more kicks a player obtains, the more handballs he gives"?',
    opts: [
      'No — there are clear counterexamples: the player with the most kicks (26) had only 3 handballs, while a player with only 4 kicks had 11 handballs.',
      'Yes — every player with more kicks also has more handballs, with no exceptions.',
      'Yes — the two quantities are perfectly, linearly related.',
      'The claim cannot be assessed from this data at all.',
    ],
    a: 0,
    answer: '0',
    hint: 'Look at the player with the most kicks — do they also have the most handballs?',
    solution: 'The player with 26 kicks (the most of anyone) has only 3 handballs, and a player with just 4 kicks has 11 handballs — the claim does not hold.',
    solutionSteps: [
      {
        explanation: 'Check the player with the most kicks.',
        workingOut: '26 kicks (the maximum) → only 3 handballs — not a high handball count.',
        graphData: null,
      },
      {
        explanation: 'Check a player with very few kicks.',
        workingOut: '4 kicks → 11 handballs, one of the highest handball counts in the data — the opposite of what the claim predicts.',
        graphData: null,
      },
      {
        explanation: 'Conclude.',
        workingOut: 'These counterexamples show kicks and handballs are not consistently related — the scatter plot does not support the claim.',
        graphData: null,
      },
    ],
    graphData: { svg: q5Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q5b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same kicks/handballs data, the player with the MOST kicks (26) recorded how many handballs?',
    opts: ['3', '8', '11', '17'],
    a: 0,
    answer: '0',
    hint: 'Find the pair (26, ?) in the table.',
    solution: '26 kicks is paired with 3 handballs.',
    solutionSteps: [
      {
        explanation: 'Find the largest number of kicks in the table.',
        workingOut: 'The largest value in the kicks row is 26.',
        graphData: null,
      },
      {
        explanation: 'Read the paired handball value.',
        workingOut: '26 kicks is paired with 3 handballs.',
        graphData: null,
      },
    ],
    graphData: { svg: q5Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q6: goals for vs goals against ====
  {
    id: 'y10-18g-q6a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The table below gives the number of "goals for" and "goals against" for each of 12 teams (A-L) in a soccer competition.<div style="text-align:center;font-weight:600;margin:10px 0">Goals for: A 36, B 45, C 22, D 26, E 20, F 59, G 24, H 41, I 23, J 43, K 32, L 41<br/>Goals against: A 31, B 16, C 33, D 26, E 64, F 16, G 53, H 42, I 47, J 21, K 49, L 14</div>This is plotted below (goals for on the horizontal axis, goals against on the vertical axis). Which team is the BEST team in the competition, and why?',
    opts: [
      'Team F — it has the highest goals for (59) combined with a low goals against (16), giving the best goal difference (+43).',
      'Team L — it has the lowest goals against (14).',
      'Team B — it has the second-highest goals for (45).',
      'Team E — it has the most goals for relative to its games.',
    ],
    a: 0,
    answer: '0',
    hint: 'The best team sits in the bottom-right of the plot: high goals for, low goals against. Compute goal difference (for − against) for the top candidates.',
    solution: 'Team F: 59 − 16 = +43, the highest goal difference of any team.',
    solutionSteps: [
      {
        explanation: 'Identify teams that look strong (high goals for, low goals against) on the plot.',
        workingOut: 'Team F (59 for, 16 against) and Team L (41 for, 14 against) both sit toward the bottom-right.',
        graphData: null,
      },
      {
        explanation: 'Compute goal difference for the leading candidates.',
        workingOut: 'F: 59 − 16 = +43. L: 41 − 14 = +27. B: 45 − 16 = +29.',
        graphData: null,
      },
      {
        explanation: 'Compare and conclude.',
        workingOut: 'Team F has the largest goal difference (+43), so it is the best team.',
        graphData: null,
      },
    ],
    graphData: { svg: q6Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q6b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'Using the same goals-for/goals-against data, which team is the WORST team in the competition, and why?',
    opts: [
      'Team E — it has a low goals for (20) combined with the highest goals against (64), giving the worst goal difference (\\(-44\\)).',
      'Team G — it has the second-highest goals against (53).',
      'Team K — it has a high goals against (49).',
      'Team I — it has a low goals for (23).',
    ],
    a: 0,
    answer: '0',
    hint: 'The worst team sits in the top-left of the plot: low goals for, high goals against. Compute goal difference for the candidates.',
    solution: 'Team E: 20 − 64 = −44, the lowest (most negative) goal difference of any team.',
    solutionSteps: [
      {
        explanation: 'Identify teams that look weak (low goals for, high goals against) on the plot.',
        workingOut: 'Team E (20 for, 64 against) and Team G (24 for, 53 against) both sit toward the top-left.',
        graphData: null,
      },
      {
        explanation: 'Compute goal difference for the leading candidates.',
        workingOut: 'E: 20 − 64 = −44. G: 24 − 53 = −29. K: 32 − 49 = −17.',
        graphData: null,
      },
      {
        explanation: 'Compare and conclude.',
        workingOut: 'Team E has the most negative goal difference (−44), so it is the worst team.',
        graphData: null,
      },
    ],
    graphData: { svg: q6Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q6c',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same goals-for/goals-against data, which of Team J (43 for, 21 against) and Team H (41 for, 42 against) is better, and why?',
    opts: [
      'Team J — its goal difference is +22 (43 − 21), much better than Team H\'s \\(-1\\) (41 − 42).',
      'Team H — it has a slightly higher goals-against total, showing a tougher schedule.',
      'They are equally good — both have similar goals for.',
      'Team H — it has fewer goals for, which is better in soccer.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compute each team\'s goal difference (goals for − goals against).',
    solution: 'J: 43 − 21 = +22. H: 41 − 42 = −1. J is clearly better.',
    solutionSteps: [
      {
        explanation: 'Compute Team J\'s goal difference.',
        workingOut: '43 − 21 = +22.',
        graphData: null,
      },
      {
        explanation: 'Compute Team H\'s goal difference.',
        workingOut: '41 − 42 = −1.',
        graphData: null,
      },
      {
        explanation: 'Compare.',
        workingOut: '+22 is much better than −1, so Team J is the better team.',
        graphData: null,
      },
    ],
    graphData: { svg: q6Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q7: height vs weight, identifying named points ====
  {
    id: 'y10-18g-q7a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The scatter plot below gives the height and weight of a number of people. Annabelle\'s height and weight is represented by the point A. Which point represents Barry, who is heavier AND taller than Annabelle?',
    opts: ['iv', 'ii', 'i', 'viii'],
    a: 0,
    answer: '0',
    hint: 'Annabelle (A) is at (170, 65). Barry must be both to the right (taller) and above (heavier) A.',
    solution: 'Point iv is at (178, 75) — taller and heavier than A (170, 65).',
    solutionSteps: [
      {
        explanation: 'Locate Annabelle\'s point.',
        workingOut: 'A = (height 170 cm, weight 65 kg).',
        graphData: null,
      },
      {
        explanation: 'Find the point that is both further right and further up than A.',
        workingOut: 'Point iv = (178, 75) — both greater than A\'s height and weight.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q7b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same height/weight scatter plot, which point represents Chandra, who is shorter but heavier than Annabelle?',
    opts: ['ii', 'iv', 'iii', 'viii'],
    a: 0,
    answer: '0',
    hint: 'Chandra must be to the left (shorter) but above (heavier) A (170, 65).',
    solution: 'Point ii is at (165, 70) — shorter and heavier than A.',
    solutionSteps: [
      {
        explanation: 'Locate Annabelle\'s point.',
        workingOut: 'A = (170, 65).',
        graphData: null,
      },
      {
        explanation: 'Find the point that is to the left (shorter) but above (heavier) A.',
        workingOut: 'Point ii = (165, 70) — shorter and heavier.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q7c',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same height/weight scatter plot, which point represents Dario, who is the same height as Barry but a little heavier?',
    opts: ['v', 'iv', 'vii', 'vi'],
    a: 0,
    answer: '0',
    hint: 'Barry (point iv) is at (178, 75). Dario must share the same x-coordinate but sit slightly higher.',
    solution: 'Point v is at (178, 78) — same height as Barry (178), slightly heavier.',
    solutionSteps: [
      {
        explanation: 'Locate Barry\'s point.',
        workingOut: 'Barry (iv) = (178, 75).',
        graphData: null,
      },
      {
        explanation: 'Find the point directly above Barry (same height, more weight).',
        workingOut: 'Point v = (178, 78) — same height as Barry, a little heavier.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q7d',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same height/weight scatter plot, which point represents Edwina, who is shorter and lighter than Chandra?',
    opts: ['viii', 'i', 'ii', 'iii'],
    a: 0,
    answer: '0',
    hint: 'Chandra (point ii) is at (165, 70). Edwina must be to the left and below that point.',
    solution: 'Point viii is at (160, 60) — shorter and lighter than Chandra (165, 70).',
    solutionSteps: [
      {
        explanation: 'Locate Chandra\'s point.',
        workingOut: 'Chandra (ii) = (165, 70).',
        graphData: null,
      },
      {
        explanation: 'Find the point that is both shorter and lighter than Chandra.',
        workingOut: 'Point viii = (160, 60) — both height and weight are less than Chandra\'s.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q7e',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same height/weight scatter plot, which point represents Frederick, who is the same weight as Barry but a bit taller?',
    opts: ['vii', 'v', 'vi', 'i'],
    a: 0,
    answer: '0',
    hint: 'Barry (point iv) is at (178, 75). Frederick must share the same y-coordinate but sit further right.',
    solution: 'Point vii is at (183, 75) — same weight as Barry (75), taller (183 > 178).',
    solutionSteps: [
      {
        explanation: 'Locate Barry\'s point.',
        workingOut: 'Barry (iv) = (178, 75).',
        graphData: null,
      },
      {
        explanation: 'Find the point directly to the right of Barry (same weight, more height).',
        workingOut: 'Point vii = (183, 75) — same weight as Barry, a bit taller.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q7f',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same height/weight scatter plot, which point represents George, who is the same height as Annabelle but heavier?',
    opts: ['iii', 'i', 'ii', 'iv'],
    a: 0,
    answer: '0',
    hint: 'Annabelle (A) is at (170, 65). George must share the same x-coordinate but sit higher.',
    solution: 'Point iii is at (170, 75) — same height as A (170), heavier (75 > 65).',
    solutionSteps: [
      {
        explanation: 'Locate Annabelle\'s point.',
        workingOut: 'A = (170, 65).',
        graphData: null,
      },
      {
        explanation: 'Find the point directly above A (same height, more weight).',
        workingOut: 'Point iii = (170, 75) — same height as Annabelle, heavier.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q7g',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same height/weight scatter plot, which point represents Harriet, who is the same weight as Annabelle but shorter?',
    opts: ['i', 'iii', 'viii', 'ii'],
    a: 0,
    answer: '0',
    hint: 'Annabelle (A) is at (170, 65). Harriet must share the same y-coordinate but sit further left.',
    solution: 'Point i is at (162, 65) — same weight as A (65), shorter (162 < 170).',
    solutionSteps: [
      {
        explanation: 'Locate Annabelle\'s point.',
        workingOut: 'A = (170, 65).',
        graphData: null,
      },
      {
        explanation: 'Find the point directly to the left of A (same weight, less height).',
        workingOut: 'Point i = (162, 65) — same weight as Annabelle, shorter.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q7h',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same height/weight scatter plot, which point represents Ivan, who is the tallest person in the group?',
    opts: ['vi', 'vii', 'iv', 'v'],
    a: 0,
    answer: '0',
    hint: 'Find the point furthest to the right (largest height value) on the plot.',
    solution: 'Point vi is at height 190, the largest height value of anyone on the plot.',
    solutionSteps: [
      {
        explanation: 'Compare the height (x-coordinate) of every point.',
        workingOut: 'A=170, iv=178, ii=165, v=178, viii=160, vii=183, iii=170, i=162, vi=190.',
        graphData: null,
      },
      {
        explanation: 'Identify the largest.',
        workingOut: '190 (point vi) is the largest height, so Ivan = point vi.',
        graphData: null,
      },
    ],
    graphData: { svg: q7Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q8: Test 1 vs Test 2, identifying named points ====
  {
    id: 'y10-18g-q8a',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The scatter plot below gives the marks obtained by students in two tests. John\'s marks are represented by the point J. Which point represents Alex, who got the top mark in BOTH tests?',
    opts: ['iii', 'iv', 'v', 'vi'],
    a: 0,
    answer: '0',
    hint: 'Find the point that is furthest right AND furthest up at the same time.',
    solution: 'Point iii is at (90, 92) — the highest Test 1 mark and the highest Test 2 mark.',
    solutionSteps: [
      {
        explanation: 'Compare every point\'s Test 1 and Test 2 marks.',
        workingOut: 'J=(60,65), iii=(90,92), iv=(90,55), vi=(75,55), vii=(50,40), i=(45,65), v=(60,80), viii=(35,45), ii=(85,30).',
        graphData: null,
      },
      {
        explanation: 'Find the point with the highest value in both coordinates.',
        workingOut: 'Test 1 max = 90 (tied: iii and iv). Test 2 max = 92, achieved only by iii. So iii is top in both.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q8b',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same Test 1/Test 2 scatter plot, which point represents Bao, who got the top mark in Test 1 but NOT in Test 2?',
    opts: ['iv', 'iii', 'vi', 'v'],
    a: 0,
    answer: '0',
    hint: 'Find the point tied for the highest Test 1 mark (90) but with a much lower Test 2 mark than Alex.',
    solution: 'Point iv is at (90, 55) — tied for the top Test 1 mark (90) but a much lower Test 2 mark than Alex\'s 92.',
    solutionSteps: [
      {
        explanation: 'Find the points with the highest Test 1 mark.',
        workingOut: 'Test 1 = 90 is shared by points iii (90, 92) and iv (90, 55).',
        graphData: null,
      },
      {
        explanation: 'Pick the one that did NOT also get the top Test 2 mark.',
        workingOut: 'iii has Test 2 = 92 (top mark); iv has Test 2 = 55 (not top) — so Bao = iv.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q8c',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same Test 1/Test 2 scatter plot, which point represents Charlene, who did better in Test 1 than John, but not as well on Test 2?',
    opts: ['vi', 'i', 'v', 'vii'],
    a: 0,
    answer: '0',
    hint: 'John (J) is at (60, 65). Charlene needs Test 1 > 60 and Test 2 < 65.',
    solution: 'Point vi is at (75, 55) — Test 1 = 75 > John\'s 60, Test 2 = 55 < John\'s 65.',
    solutionSteps: [
      {
        explanation: 'Locate John\'s point.',
        workingOut: 'J = (60, 65).',
        graphData: null,
      },
      {
        explanation: 'Find a point with Test 1 above 60 and Test 2 below 65.',
        workingOut: 'Point vi = (75, 55) satisfies both conditions.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q8d',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same Test 1/Test 2 scatter plot, which point represents Drago, who did not do as well as Charlene on either test?',
    opts: ['vii', 'viii', 'i', 'ii'],
    a: 0,
    answer: '0',
    hint: 'Charlene (point vi) is at (75, 55). Drago needs both marks lower than that.',
    solution: 'Point vii is at (50, 40) — both marks lower than Charlene\'s (75, 55).',
    solutionSteps: [
      {
        explanation: 'Locate Charlene\'s point.',
        workingOut: 'Charlene (vi) = (75, 55).',
        graphData: null,
      },
      {
        explanation: 'Find a point with both Test 1 and Test 2 lower than Charlene\'s.',
        workingOut: 'Point vii = (50, 40) — both marks are lower than Charlene\'s.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q8e',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same Test 1/Test 2 scatter plot, which point represents Eddie, who got the same mark as John for Test 2, but did not do as well as John on Test 1?',
    opts: ['i', 'v', 'vi', 'viii'],
    a: 0,
    answer: '0',
    hint: 'John (J) is at (60, 65). Eddie needs the same Test 2 (65) but a lower Test 1.',
    solution: 'Point i is at (45, 65) — same Test 2 mark as John (65), lower Test 1 (45 < 60).',
    solutionSteps: [
      {
        explanation: 'Locate John\'s point.',
        workingOut: 'J = (60, 65).',
        graphData: null,
      },
      {
        explanation: 'Find a point with Test 2 = 65 and Test 1 < 60.',
        workingOut: 'Point i = (45, 65) matches both conditions.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q8f',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same Test 1/Test 2 scatter plot, which point represents Francis, who got the same mark as John for Test 1, but did better than John on Test 2?',
    opts: ['v', 'i', 'iv', 'vi'],
    a: 0,
    answer: '0',
    hint: 'John (J) is at (60, 65). Francis needs the same Test 1 (60) but a higher Test 2.',
    solution: 'Point v is at (60, 80) — same Test 1 mark as John (60), higher Test 2 (80 > 65).',
    solutionSteps: [
      {
        explanation: 'Locate John\'s point.',
        workingOut: 'J = (60, 65).',
        graphData: null,
      },
      {
        explanation: 'Find a point with Test 1 = 60 and Test 2 > 65.',
        workingOut: 'Point v = (60, 80) matches both conditions.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q8g',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same Test 1/Test 2 scatter plot, which point represents Georgina, who got the LOWEST mark for Test 1?',
    opts: ['viii', 'vii', 'i', 'ii'],
    a: 0,
    answer: '0',
    hint: 'Find the point furthest left on the plot (smallest Test 1 mark).',
    solution: 'Point viii is at Test 1 = 35, the smallest Test 1 value on the plot.',
    solutionSteps: [
      {
        explanation: 'Compare every point\'s Test 1 mark.',
        workingOut: 'J=60, iii=90, iv=90, vi=75, vii=50, i=45, v=60, viii=35, ii=85.',
        graphData: null,
      },
      {
        explanation: 'Find the smallest.',
        workingOut: '35 (point viii) is the smallest Test 1 mark, so Georgina = point viii.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q8h',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'Using the same Test 1/Test 2 scatter plot, which point represents Harvir, who had the GREATEST discrepancy (difference) between his two marks?',
    opts: ['ii', 'vi', 'i', 'v'],
    a: 0,
    answer: '0',
    hint: 'Compute |Test 1 − Test 2| for every point and find the largest.',
    solution: 'Point ii = (85, 30): |85 − 30| = 55, the largest gap of any point.',
    solutionSteps: [
      {
        explanation: 'Compute the absolute difference between Test 1 and Test 2 for each point.',
        workingOut: 'iii: |90−92|=2. iv: |90−55|=35. vi: |75−55|=20. vii: |50−40|=10. i: |45−65|=20. v: |60−80|=20. viii: |35−45|=10. ii: |85−30|=55.',
        graphData: null,
      },
      {
        explanation: 'Find the largest discrepancy.',
        workingOut: '55 (point ii) is the largest, so Harvir = point ii.',
        graphData: null,
      },
    ],
    graphData: { svg: q8Svg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ==== Q9: line of best fit predictions ====
  {
    id: 'y10-18g-q9a1',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The test results of 9 students are plotted below, with a line of best fit drawn through the points. The equation of the line is Test 2 = \\(0.95\\) &times; Test 1 + \\(3.85\\). Use this equation to predict the Test 2 mark of a student whose Test 1 mark was 53.',
    opts: ['54.20', '50.35', '56.85', '49.15'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 1 = 53 into Test 2 = 0.95 &times; Test 1 + 3.85.',
    solution: 'Test 2 = 0.95 &times; 53 + 3.85 = 50.35 + 3.85 = 54.20.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 1 = 53 into the equation.',
        workingOut: '\\(\\text{Test 2} = 0.95 \\times 53 + 3.85\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 50.35 + 3.85 = 54.20\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9a2',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same line of best fit, Test 2 = \\(0.95\\) &times; Test 1 + \\(3.85\\),predict the Test 2 mark of a student whose Test 1 mark was 54.',
    opts: ['55.15', '54.85', '51.30', '57.85'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 1 = 54 into Test 2 = 0.95 &times; Test 1 + 3.85.',
    solution: 'Test 2 = 0.95 &times; 54 + 3.85 = 51.30 + 3.85 = 55.15.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 1 = 54 into the equation.',
        workingOut: '\\(\\text{Test 2} = 0.95 \\times 54 + 3.85\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 51.30 + 3.85 = 55.15\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9a3',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same line of best fit, Test 2 = \\(0.95\\) &times; Test 1 + \\(3.85\\),predict the Test 2 mark of a student whose Test 1 mark was 34.',
    opts: ['36.15', '32.30', '37.85', '34.00'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 1 = 34 into Test 2 = 0.95 &times; Test 1 + 3.85.',
    solution: 'Test 2 = 0.95 &times; 34 + 3.85 = 32.30 + 3.85 = 36.15.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 1 = 34 into the equation.',
        workingOut: '\\(\\text{Test 2} = 0.95 \\times 34 + 3.85\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 32.30 + 3.85 = 36.15\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9a4',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same line of best fit, Test 2 = \\(0.95\\) &times; Test 1 + \\(3.85\\),predict the Test 2 mark of a student whose Test 1 mark was 84.',
    opts: ['83.65', '79.80', '87.85', '80.00'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 1 = 84 into Test 2 = 0.95 &times; Test 1 + 3.85.',
    solution: 'Test 2 = 0.95 &times; 84 + 3.85 = 79.80 + 3.85 = 83.65.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 1 = 84 into the equation.',
        workingOut: '\\(\\text{Test 2} = 0.95 \\times 84 + 3.85\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 79.80 + 3.85 = 83.65\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9a5',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same line of best fit, Test 2 = \\(0.95\\) &times; Test 1 + \\(3.85\\),predict the Test 2 mark of a student whose Test 1 mark was 67.',
    opts: ['67.50', '63.65', '70.85', '66.00'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 1 = 67 into Test 2 = 0.95 &times; Test 1 + 3.85.',
    solution: 'Test 2 = 0.95 &times; 67 + 3.85 = 63.65 + 3.85 = 67.50.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 1 = 67 into the equation.',
        workingOut: '\\(\\text{Test 2} = 0.95 \\times 67 + 3.85\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(= 63.65 + 3.85 = 67.50\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9b1',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 100,
    question:
      'Using the same line of best fit, Test 2 = \\(0.95\\) &times; Test 1 + \\(3.85\\),use the equation to predict the Test 1 mark of a student whose Test 2 mark was 53. (Rearrange the equation first.)',
    opts: ['51.74', '49.15', '55.83', '53.00'],
    a: 0,
    answer: '0',
    hint: 'Rearrange: \\(\\text{Test 1} = \\dfrac{\\text{Test 2} - 3.85}{0.95}\\), then substitute Test 2 = 53.',
    solution: 'Test 1 = (53 − 3.85)/0.95 = 49.15/0.95 ≈ 51.74.',
    solutionSteps: [
      {
        explanation: 'Rearrange the equation to make Test 1 the subject.',
        workingOut: '\\(\\text{Test 2} = 0.95 \\times \\text{Test 1} + 3.85 \\ \\Rightarrow \\ \\text{Test 1} = \\dfrac{\\text{Test 2} - 3.85}{0.95}\\)',
        graphData: null,
      },
      {
        explanation: 'Substitute Test 2 = 53.',
        workingOut: '\\(\\text{Test 1} = \\dfrac{53 - 3.85}{0.95} = \\dfrac{49.15}{0.95}\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(\\text{Test 1} \\approx 51.74\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9b2',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 100,
    question:
      'Using the same rearranged equation, Test 1 = (Test 2 − 3.85) ÷ 0.95, predict the Test 1 mark of a student whose Test 2 mark was 54.',
    opts: ['52.79', '50.15', '56.83', '54.00'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 2 = 54 into Test 1 = (Test 2 − 3.85) ÷ 0.95.',
    solution: 'Test 1 = (54 − 3.85)/0.95 = 50.15/0.95 ≈ 52.79.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 2 = 54.',
        workingOut: '\\(\\text{Test 1} = \\dfrac{54 - 3.85}{0.95} = \\dfrac{50.15}{0.95}\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(\\text{Test 1} \\approx 52.79\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9b3',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 100,
    question:
      'Using the same rearranged equation, Test 1 = (Test 2 − 3.85) ÷ 0.95, predict the Test 1 mark of a student whose Test 2 mark was 34.',
    opts: ['31.74', '30.15', '35.83', '34.00'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 2 = 34 into Test 1 = (Test 2 − 3.85) ÷ 0.95.',
    solution: 'Test 1 = (34 − 3.85)/0.95 = 30.15/0.95 ≈ 31.74.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 2 = 34.',
        workingOut: '\\(\\text{Test 1} = \\dfrac{34 - 3.85}{0.95} = \\dfrac{30.15}{0.95}\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(\\text{Test 1} \\approx 31.74\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9b4',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 100,
    question:
      'Using the same rearranged equation, Test 1 = (Test 2 − 3.85) ÷ 0.95, predict the Test 1 mark of a student whose Test 2 mark was 84.',
    opts: ['84.37', '80.15', '88.16', '84.00'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 2 = 84 into Test 1 = (Test 2 − 3.85) ÷ 0.95.',
    solution: 'Test 1 = (84 − 3.85)/0.95 = 80.15/0.95 ≈ 84.37.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 2 = 84.',
        workingOut: '\\(\\text{Test 1} = \\dfrac{84 - 3.85}{0.95} = \\dfrac{80.15}{0.95}\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(\\text{Test 1} \\approx 84.37\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18g-q9b5',
    topicId: 'y10-18g-icem',
    c: '18G',
    t: 'Bivariate data',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 100,
    question:
      'Using the same rearranged equation, Test 1 = (Test 2 − 3.85) ÷ 0.95, predict the Test 1 mark of a student whose Test 2 mark was 67.',
    opts: ['66.47', '63.15', '70.16', '67.00'],
    a: 0,
    answer: '0',
    hint: 'Substitute Test 2 = 67 into Test 1 = (Test 2 − 3.85) ÷ 0.95.',
    solution: 'Test 1 = (67 − 3.85)/0.95 = 63.15/0.95 ≈ 66.47.',
    solutionSteps: [
      {
        explanation: 'Substitute Test 2 = 67.',
        workingOut: '\\(\\text{Test 1} = \\dfrac{67 - 3.85}{0.95} = \\dfrac{63.15}{0.95}\\)',
        graphData: null,
      },
      {
        explanation: 'Evaluate.',
        workingOut: '\\(\\text{Test 1} \\approx 66.47\\)',
        graphData: null,
      },
    ],
    graphData: { svg: q9Svg },
    isNew: true,
    requiresManualGrading: false,
  },
];
