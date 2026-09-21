// Year 10 Chapter 18: Statistics — ICE-EM Mathematics 10 (3ed), Chapter 18,
// Exercise 18F: "Time-series data" (pp.544-546). This exercise is built
// around "construct a time-series plot" + "briefly describe the trend"
// prompts. Per project convention (CLAUDE.md), those verbs alone would push
// a question to teacher_review — but here every "construct"/"describe" part
// resolves to one determinate, objectively-checkable fact once the
// underlying data is read correctly (which month/quarter/round is highest
// or lowest, which single-sentence trend description actually matches the
// numbers), so each part is converted to multiple_choice with a real
// hand-drawn time-series line chart supplied as graphData so the student
// can genuinely read the trend instead of only being told about it.

// Modern line-chart SVG: x = index positions (evenly spaced), y = values.
// Same visual language as the Ch18E bar charts (indigo gradient, dashed
// grid, system-ui labels) so the chapter's charts feel consistent.
const lineChartSvg = (values, xLabels, opts = {}) => {
  const {
    yLabel = '',
    pointRadius = 3.5,
    fontSize = 11,
    width: chartW = 640,
    height: chartH = 190,
  } = opts;
  const padL = 44;
  const padR = 18;
  const padT = 20;
  const padB = 34;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const yMin = Math.floor(minV / 10) * 10 - (minV % 10 === 0 ? 10 : 0);
  const yMax = Math.ceil(maxV / 10) * 10 + (maxV % 10 === 0 ? 10 : 0);
  const span = yMax - yMin || 1;
  const n = values.length;
  const x = (i) => padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v) => padT + plotH - ((v - yMin) / span) * plotH;

  const gridCount = 5;
  const gridLines = Array.from({ length: gridCount + 1 }, (_, i) => {
    const v = yMin + (span * i) / gridCount;
    const yy = y(v);
    return `<line x1="${padL}" y1="${yy}" x2="${padL + plotW}" y2="${yy}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 4"/>
      <text x="${padL - 8}" y="${yy + 4}" font-family="system-ui" font-size="${fontSize}" fill="#94a3b8" text-anchor="end">${Math.round(v)}</text>`;
  }).join('');

  const linePath = values
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
    .join(' ');

  const points = values
    .map(
      (v, i) =>
        `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="${pointRadius}" fill="#4f46e5" stroke="#fff" stroke-width="1"/>`
    )
    .join('');

  const showEvery = n > 14 ? 2 : 1;
  const xTicks = xLabels
    .map((lbl, i) =>
      i % showEvery === 0
        ? `<text x="${x(i).toFixed(1)}" y="${padT + plotH + 18}" font-family="system-ui" font-size="${fontSize}" fill="#64748b" text-anchor="middle">${lbl}</text>`
        : ''
    )
    .join('');

  return `<svg viewBox="0 0 ${chartW} ${chartH}" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
    <defs>
      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#818cf8" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#818cf8" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${gridLines}
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#cbd5e1" stroke-width="1.5"/>
    <path d="${linePath} L ${x(n - 1).toFixed(1)} ${(padT + plotH).toFixed(1)} L ${x(0).toFixed(1)} ${(padT + plotH).toFixed(1)} Z" fill="url(#lineGrad)" stroke="none"/>
    <path d="${linePath}" fill="none" stroke="#4f46e5" stroke-width="2"/>
    ${points}
    ${xTicks}
    ${yLabel ? `<text x="12" y="${padT - 6}" font-family="system-ui" font-size="${fontSize}" font-weight="600" fill="#475569">${yLabel}</text>` : ''}
  </svg>`;
};

const rainfallMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const rainfallValues = [16.2, 17.5, 14.2, 9.1, 9.6, 7.1, 6.2, 4.1, 3.3, 9.3, 9.6, 12.6];
const rainfallSvg = lineChartSvg(rainfallValues, rainfallMonths, { yLabel: 'Rainfall (cm)' });

const profitYears = ['\'89', '\'90', '\'91', '\'92', '\'93', '\'94', '\'95', '\'96', '\'97', '\'98'];
const profitValues = [1.2, 1.8, 2.4, 2.2, 2.6, 3.1, 3.2, 3.4, 3.6, 4.0];
const profitSvg = lineChartSvg(profitValues, profitYears, { yLabel: 'Profit ($m)' });

const birthsMonths = rainfallMonths;
const birthsValues = [52, 46, 43, 40, 31, 32, 26, 27, 24, 20, 26, 26];
const birthsSvg = lineChartSvg(birthsValues, birthsMonths, { yLabel: 'Births' });

const roundLabels = Array.from({ length: 22 }, (_, i) => String(i + 1));
const positionValues = [10, 12, 11, 9, 8, 6, 5, 5, 4, 5, 5, 6, 4, 4, 3, 4, 3, 5, 7, 6, 9, 8];
const positionSvg = lineChartSvg(positionValues, roundLabels, { yLabel: 'League position', pointRadius: 2.5, fontSize: 9 });

const salesQuarterLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const salesValues = [45, 63, 67, 43, 51, 69, 75, 39, 55, 71, 79, 49];
const salesSvg = lineChartSvg(salesValues, salesQuarterLabels, { yLabel: 'Sales $\'000' });

const carQuarterLabels = ['09-Q1', '09-Q2', '09-Q3', '09-Q4', '10-Q1', '10-Q2', '10-Q3', '10-Q4', '11-Q1', '11-Q2', '11-Q3', '11-Q4'];
const carValues = [72, 62, 90, 98, 87, 78, 112, 111, 90, 84, 132, 117];
const carSvg = lineChartSvg(carValues, carQuarterLabels, { yLabel: 'Cars sold', fontSize: 9 });

export const Y10_CH18F_ICEM_QUESTIONS = [
  // ---- Q1: rainfall time series ----
  {
    id: 'y10-18f-q1a',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The average monthly rainfall (in cm) in a particular city is shown in the time-series plot below. Which month had the highest average rainfall, and which had the lowest?',
    opts: [
      'February (17.5 cm) highest; September (3.3 cm) lowest',
      'January (16.2 cm) highest; August (4.1 cm) lowest',
      'December (12.6 cm) highest; July (6.2 cm) lowest',
      'March (14.2 cm) highest; October (9.3 cm) lowest',
    ],
    a: 0,
    answer: '0',
    hint: 'Read the highest and lowest points on the plot directly off the table/graph.',
    solution: 'The table gives Feb = 17.5 cm (highest) and Sep = 3.3 cm (lowest).',
    solutionSteps: [
      {
        explanation: 'Scan the 12 monthly values for the largest one.',
        workingOut: 'Jan 16.2, Feb 17.5, Mar 14.2, ... — the largest value is Feb = 17.5 cm.',
        graphData: null,
      },
      {
        explanation: 'Scan the 12 monthly values for the smallest one.',
        workingOut: 'Aug 4.1, Sep 3.3 — the smallest value is Sep = 3.3 cm (not Aug, which is close but slightly higher).',
        graphData: null,
      },
    ],
    graphData: { svg: rainfallSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q1b',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same rainfall time-series plot, which statement best describes how the rainfall varies over the year?',
    opts: [
      'Rainfall is highest in Jan–Mar, decreases fairly steadily to a minimum around September, then rises again through to December.',
      'Rainfall increases steadily throughout the year with no dips.',
      'Rainfall is roughly constant all year, with only minor month-to-month variation.',
      'Rainfall is lowest at the start of the year and highest at the end, with no dip in between.',
    ],
    a: 0,
    answer: '0',
    hint: 'Trace the overall shape of the plot from left to right.',
    solution: 'The plot starts high (Jan–Mar), falls to a minimum in September, then rises again to December — a single U-shaped dip.',
    solutionSteps: [
      {
        explanation: 'Compare the first few months to the middle months.',
        workingOut: 'Jan–Mar are the highest values (14–17.5 cm); by June–September the values have fallen to 3–7 cm.',
        graphData: null,
      },
      {
        explanation: 'Compare the middle months to the last few months.',
        workingOut: 'From Sep (3.3) the values rise again: Oct 9.3, Nov 9.6, Dec 12.6 — a clear recovery toward the end of the year.',
        graphData: null,
      },
      {
        explanation: 'Put it together as a single trend statement.',
        workingOut: 'The city has a wetter start/end of year (summer) and a dry middle (winter), with rainfall falling then rising — matching option A.',
        graphData: null,
      },
    ],
    graphData: { svg: rainfallSvg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q2: company profit 10-year time series ----
  {
    id: 'y10-18f-q2a',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The annual profit (in millions of dollars) of a company over a 10-year period is shown below. In which year did the profit actually DIP compared to the year before (i.e. go down, not up)?',
    opts: ['1992 (\\(2.2m\\) after \\(2.4m\\) in 1991)', '1990 (\\(1.8m\\) after \\(1.2m\\) in 1989)', '1996 (\\(3.4m\\) after \\(3.2m\\) in 1995)', '1998 (\\(4.0m\\) after \\(3.6m\\) in 1997)'],
    a: 0,
    answer: '0',
    hint: 'Compare each year\'s profit with the year immediately before it — every other year in the list is an increase.',
    solution: '1991 = $2.4m, 1992 = $2.2m — this is the only year that fell compared to the year before.',
    solutionSteps: [
      {
        explanation: 'List consecutive-year differences.',
        workingOut: '1989→1990: +0.6, 1990→1991: +0.6, 1991→1992: −0.2, 1992→1993: +0.4, and every later year is also an increase.',
        graphData: null,
      },
      {
        explanation: 'Only one difference is negative.',
        workingOut: 'The only dip is 1991→1992 (2.4 → 2.2), i.e. the profit in 1992 is lower than 1991.',
        graphData: null,
      },
    ],
    graphData: { svg: profitSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q2b',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same profit time-series plot, which statement best describes the overall trend in profit from 1989 to 1998?',
    opts: [
      'A generally increasing trend, with a single dip in 1992, after which profit rises every year to 1998.',
      'Profit rises and falls repeatedly throughout the 10 years with no overall direction.',
      'Profit is roughly constant from 1989 to 1998.',
      'A generally decreasing trend, with a single rise in 1992.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the very first value (1989) with the very last (1998), and note how many years actually decreased.',
    solution: 'Profit rises from $1.2m to $4.0m overall, with only 1992 breaking the otherwise unbroken year-on-year increase.',
    solutionSteps: [
      {
        explanation: 'Compare the endpoints.',
        workingOut: '1989 = $1.2m, 1998 = $4.0m — an overall increase of $2.8m across the decade.',
        graphData: null,
      },
      {
        explanation: 'Check how many individual years decreased.',
        workingOut: 'Only 1991→1992 decreases; every other consecutive pair increases — so the trend is "increasing with one dip", not erratic or flat.',
        graphData: null,
      },
    ],
    graphData: { svg: profitSvg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q3: hospital births time series ----
  {
    id: 'y10-18f-q3a',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The number of births recorded at a hospital each month for a year is shown below. Which month had the most births, and which had the fewest?',
    opts: [
      'January (52) most; October (20) fewest',
      'January (52) most; December (26) fewest',
      'February (46) most; September (24) fewest',
      'March (43) most; October (20) fewest',
    ],
    a: 0,
    answer: '0',
    hint: 'Read the highest and lowest points on the plot.',
    solution: 'Jan = 52 (highest), Oct = 20 (lowest).',
    solutionSteps: [
      {
        explanation: 'Find the largest monthly value.',
        workingOut: 'Jan = 52 is the largest of the 12 values.',
        graphData: null,
      },
      {
        explanation: 'Find the smallest monthly value.',
        workingOut: 'Oct = 20 is the smallest of the 12 values (Nov and Dec both recover slightly to 26).',
        graphData: null,
      },
    ],
    graphData: { svg: birthsSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q3b',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same births time-series plot, which statement best describes how the number of births changed over the year?',
    opts: [
      'Births decrease fairly steadily from a high in January to a low in October, then level off (with a slight recovery) in November and December.',
      'Births increase steadily throughout the year.',
      'Births stay roughly constant all year, with no clear pattern.',
      'Births are lowest in January and highest in December, rising steadily all year.',
    ],
    a: 0,
    answer: '0',
    hint: 'Trace the shape of the plot from January through to December.',
    solution: 'The plot falls almost every month from Jan (52) to Oct (20), then ticks back up slightly for Nov/Dec (26, 26).',
    solutionSteps: [
      {
        explanation: 'Compare early months to later months.',
        workingOut: 'Jan 52, Feb 46, Mar 43, ... Oct 20 — an almost unbroken monthly decline.',
        graphData: null,
      },
      {
        explanation: 'Check the last two months.',
        workingOut: 'Nov = 26 and Dec = 26 are both higher than Oct = 20 — a small levelling-off/recovery at the very end of the year.',
        graphData: null,
      },
    ],
    graphData: { svg: birthsSvg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q4: football team league position, 22 rounds ----
  {
    id: 'y10-18f-q4a',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The table below gives the league position (1 = best, 12 = worst, out of 12 teams) of a football team at the end of each round of a 22-round season, shown as a time-series plot. In which round(s) did the team record its BEST (lowest-numbered) position?',
    opts: [
      'Rounds 15 and 17 (position 3, tied)',
      'Round 9 (position 4)',
      'Round 1 (position 10)',
      'Round 22 (position 8)',
    ],
    a: 0,
    answer: '0',
    hint: 'Remember: a LOWER position number is better (1st is best). Find the smallest number on the plot.',
    solution: 'The lowest position value reached is 3, occurring at rounds 15 and 17.',
    solutionSteps: [
      {
        explanation: 'Scan the 22 position values for the smallest number (best result).',
        workingOut: 'Round 15 = 3 and round 17 = 3 are the two smallest values in the whole season; round 9 (=4) is close but not the best.',
        graphData: null,
      },
    ],
    graphData: { svg: positionSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q4b',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'Using the same league-position time-series plot, which statement best describes the team\'s progress throughout the season?',
    opts: [
      'The team started mid-table (10th), steadily improved to its best position (3rd) around rounds 15–17, then gradually slipped back to around 8th–9th by the end of the season.',
      'The team started at the top of the table and steadily fell to last place by the end of the season.',
      'The team\'s position stayed roughly the same (around 6th) for the entire season.',
      'The team started last and finished first, improving every single round with no setbacks.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the start, the middle, and the end of the season (remember lower = better).',
    solution: 'Position falls (improves) from 10th to 3rd by round ~15-17, then rises (worsens) back to 8th-9th by round 22.',
    solutionSteps: [
      {
        explanation: 'Read the position at the start of the season.',
        workingOut: 'Round 1 = 10th place.',
        graphData: null,
      },
      {
        explanation: 'Read the best position and where it happens.',
        workingOut: 'The position improves (the number falls) to its lowest value, 3rd, by rounds 15 and 17.',
        graphData: null,
      },
      {
        explanation: 'Read the position at the end of the season.',
        workingOut: 'From round 17 onward the position number rises again (worsens), finishing at 8th in round 22.',
        graphData: null,
      },
    ],
    graphData: { svg: positionSvg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q5: department store quarterly sales, 3 years ----
  {
    id: 'y10-18f-q5a',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The quarterly sales, in thousands of dollars, of a department store over three years (quarters 1–12 = 2009 Q1 through 2011 Q4) are shown below. In which quarter of each year are the sales figures the WORST (lowest)?',
    opts: [
      'Quarter 4, every year (2009: 43, 2010: 39, 2011: 49 — all the lowest in their year)',
      'Quarter 1, every year',
      'Quarter 2, every year',
      'It changes every year — there is no consistent worst quarter',
    ],
    a: 0,
    answer: '0',
    hint: 'Look at each year (4 quarters) separately and find the smallest value within that year.',
    solution: 'In every one of the three years, Q4 has the smallest sales figure.',
    solutionSteps: [
      {
        explanation: '2009: compare Q1–Q4.',
        workingOut: '45, 63, 67, 43 — Q4 (43) is the smallest.',
        graphData: null,
      },
      {
        explanation: '2010: compare Q1–Q4.',
        workingOut: '51, 69, 75, 39 — Q4 (39) is the smallest.',
        graphData: null,
      },
      {
        explanation: '2011: compare Q1–Q4.',
        workingOut: '55, 71, 79, 49 — Q4 (49) is the smallest. Q4 is consistently the worst quarter.',
        graphData: null,
      },
    ],
    graphData: { svg: salesSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q5b',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same quarterly department-store sales plot, in which quarter of each year are the sales figures the BEST (highest)?',
    opts: [
      'Quarter 3, every year (2009: 67, 2010: 75, 2011: 79 — all the highest in their year)',
      'Quarter 4, every year',
      'Quarter 1, every year',
      'It changes every year — there is no consistent best quarter',
    ],
    a: 0,
    answer: '0',
    hint: 'Look at each year (4 quarters) separately and find the largest value within that year.',
    solution: 'In every one of the three years, Q3 has the largest sales figure.',
    solutionSteps: [
      {
        explanation: '2009: compare Q1–Q4.',
        workingOut: '45, 63, 67, 43 — Q3 (67) is the largest.',
        graphData: null,
      },
      {
        explanation: '2010: compare Q1–Q4.',
        workingOut: '51, 69, 75, 39 — Q3 (75) is the largest.',
        graphData: null,
      },
      {
        explanation: '2011: compare Q1–Q4.',
        workingOut: '55, 71, 79, 49 — Q3 (79) is the largest. Q3 is consistently the best quarter.',
        graphData: null,
      },
    ],
    graphData: { svg: salesSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q5c',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'Using the same quarterly department-store sales plot, compare the sales figures for the same quarter across the three years (e.g. all the Q1s, all the Q2s, and so on). Are the sales figures improving?',
    opts: [
      'Yes for Q1, Q2 and Q3 — each rises every year (e.g. Q1: 45→51→55); Q4 dips in 2010 (39) before recovering above its 2009 level in 2011 (49).',
      'No — every quarter\'s sales figures fall every year.',
      'Yes — all four quarters rise every single year with no exceptions.',
      'No — sales figures are identical every year for every quarter.',
    ],
    a: 0,
    answer: '0',
    hint: 'Track Q1 across 2009/2010/2011, then Q2, then Q3, then Q4, separately.',
    solution: 'Q1, Q2, Q3 each increase every year; Q4 dips in the middle year (39 < 43) before rising again in 2011 (49).',
    solutionSteps: [
      {
        explanation: 'Track Q1 across the three years.',
        workingOut: '2009: 45, 2010: 51, 2011: 55 — increasing every year.',
        graphData: null,
      },
      {
        explanation: 'Track Q2 and Q3 across the three years.',
        workingOut: 'Q2: 63, 69, 71 (increasing). Q3: 67, 75, 79 (increasing).',
        graphData: null,
      },
      {
        explanation: 'Track Q4 across the three years — this one is different.',
        workingOut: 'Q4: 43, 39, 49 — it actually falls in 2010 before rising back up in 2011, so Q4 is not a clean increase like the other three quarters.',
        graphData: null,
      },
    ],
    graphData: { svg: salesSvg },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q6: car dealer quarterly sales, 2009-2011 ----
  {
    id: 'y10-18f-q6a',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The quarterly sales figures for a car dealer over 2009–2011 are shown below. Which quarter is consistently the WEAKEST (lowest sales) in every year?',
    opts: [
      'Quarter 2 (2009: 62, 2010: 78, 2011: 84 — the lowest in every year)',
      'Quarter 1',
      'Quarter 4',
      'It changes every year — there is no consistently weakest quarter',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the four quarters within each year separately.',
    solution: 'Q2 is the lowest of the four quarters in 2009, 2010 and 2011.',
    solutionSteps: [
      {
        explanation: '2009: compare Q1–Q4.',
        workingOut: '72, 62, 90, 98 — Q2 (62) is the lowest.',
        graphData: null,
      },
      {
        explanation: '2010: compare Q1–Q4.',
        workingOut: '87, 78, 112, 111 — Q2 (78) is the lowest.',
        graphData: null,
      },
      {
        explanation: '2011: compare Q1–Q4.',
        workingOut: '90, 84, 132, 117 — Q2 (84) is the lowest. Q2 is consistently the weakest quarter.',
        graphData: null,
      },
    ],
    graphData: { svg: carSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q6b',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'Using the same car-dealer quarterly sales plot, which statement best describes how car sales have changed over this period?',
    opts: [
      'Sales show an overall upward trend across the three years (from 72 in 2009-Q1 to 117 in 2011-Q4), with a repeating dip in Q2 of each year and a peak in Q3 or Q4.',
      'Sales fall steadily across the three years with no repeating pattern.',
      'Sales stay roughly constant across the three years.',
      'Sales rise every single quarter with no dips of any kind.',
    ],
    a: 0,
    answer: '0',
    hint: 'Compare the overall start/end values, and look for a pattern that repeats each year.',
    solution: 'Overall sales rise year to year, and within each year Q2 is always the low point (a repeating seasonal dip).',
    solutionSteps: [
      {
        explanation: 'Compare the very first and very last values.',
        workingOut: '2009-Q1 = 72, 2011-Q4 = 117 — an overall rise across the three years.',
        graphData: null,
      },
      {
        explanation: 'Look for a pattern that repeats within each year.',
        workingOut: 'In all three years, Q2 is the lowest quarter and Q3 or Q4 is the highest — the same shape repeats each year, on top of an overall upward trend.',
        graphData: null,
      },
    ],
    graphData: { svg: carSvg },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18f-q6c',
    topicId: 'y10-18f-icem',
    c: '18F',
    t: 'Time-series data',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Using the same car-dealer quarterly sales plot, Comparing Quarter 1 sales across the three years (2009: 72, 2010: 87, 2011: 90), what does this show?',
    opts: [
      'Quarter 1 sales increase every year — the dealer is selling more cars in the first quarter each successive year.',
      'Quarter 1 sales decrease every year.',
      'Quarter 1 sales are identical every year.',
      'Quarter 1 sales rise then fall, with no clear direction.',
    ],
    a: 0,
    answer: '0',
    hint: 'Just compare the three Q1 values directly: 72, 87, 90.',
    solution: '72 < 87 < 90 — Q1 sales increase in each successive year.',
    solutionSteps: [
      {
        explanation: 'Compare 2009-Q1 to 2010-Q1.',
        workingOut: '72 → 87: an increase of 15.',
        graphData: null,
      },
      {
        explanation: 'Compare 2010-Q1 to 2011-Q1.',
        workingOut: '87 → 90: a further increase of 3. Both year-on-year changes for Q1 are increases.',
        graphData: null,
      },
    ],
    graphData: { svg: carSvg },
    isNew: true,
    requiresManualGrading: false,
  },
];
