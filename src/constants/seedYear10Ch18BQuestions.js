// Year 10 Chapter 18: Statistics — 18B Z-scores and comparing data sets
// Source: statistic.pdf (mean/mode reasoning, z-score, and dot-plot
// comparison questions), all multiple_choice per project convention.

const dotRow = (values, y, color) => {
  const counts = {};
  return values
    .map((v) => {
      counts[v] = (counts[v] || 0) + 1;
      const stackIndex = counts[v] - 1;
      const cx = 30 + v * 38;
      const cy = y - stackIndex * 16;
      return `<circle cx="${cx}" cy="${cy}" r="6" fill="${color}" stroke="#475569" stroke-width="1"/>`;
    })
    .join('');
};

const beforeValues = [2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7];
const afterValues = [5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9];

const svgDotPlotSetup = `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <text x="10" y="18" font-family="system-ui" font-size="12" font-weight="600" fill="#1e293b">Before</text>
  <line x1="20" y1="90" x2="390" y2="90" stroke="#475569" stroke-width="1.5"/>
  ${[0, 2, 4, 6, 8, 10].map((v) => `<line x1="${30 + v * 38}" y1="87" x2="${30 + v * 38}" y2="93" stroke="#475569"/><text x="${30 + v * 38}" y="105" font-family="system-ui" font-size="10" fill="#64748b" text-anchor="middle">${v}</text>`).join('')}
  ${dotRow(beforeValues, 80, '#94a3b8')}
  <text x="10" y="130" font-family="system-ui" font-size="12" font-weight="600" fill="#1e293b">After</text>
  <line x1="20" y1="200" x2="390" y2="200" stroke="#475569" stroke-width="1.5"/>
  ${[0, 2, 4, 6, 8, 10].map((v) => `<line x1="${30 + v * 38}" y1="197" x2="${30 + v * 38}" y2="203" stroke="#475569"/><text x="${30 + v * 38}" y="215" font-family="system-ui" font-size="10" fill="#64748b" text-anchor="middle">${v}</text>`).join('')}
  ${dotRow(afterValues, 190, '#94a3b8')}
</svg>`;

const svgDotPlotFinal = `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto">
  <text x="10" y="18" font-family="system-ui" font-size="12" font-weight="600" fill="#1e293b">Before: mean = 4.20, SD = 1.42</text>
  <line x1="20" y1="90" x2="390" y2="90" stroke="#475569" stroke-width="1.5"/>
  <line x1="${30 + 4.2 * 38}" y1="60" x2="${30 + 4.2 * 38}" y2="90" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
  ${dotRow(beforeValues, 80, '#94a3b8')}
  <text x="10" y="130" font-family="system-ui" font-size="12" font-weight="600" fill="#16a34a">After: mean = 7.07, SD = 1.00</text>
  <line x1="20" y1="200" x2="390" y2="200" stroke="#475569" stroke-width="1.5"/>
  <line x1="${30 + 7.07 * 38}" y1="150" x2="${30 + 7.07 * 38}" y2="200" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>
  ${dotRow(afterValues, 190, '#6366f1')}
  <text x="200" y="225" font-family="system-ui" font-size="11" font-weight="600" fill="#16a34a" text-anchor="middle">Mean shifted right (up) and dots are more tightly clustered &#10003;</text>
</svg>`;

export const Y10_CH18B_QUESTIONS = [
  {
    id: 'y10-18b-q1',
    topicId: 'y10-18b',
    c: '18B',
    t: 'Z-scores and comparing data sets',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'The following marks were scored by 9 students in a test:<br>0, 1, 2, 2, 2, 3, 3, 6, 8<br>Two students were absent and did the test on a later day. When their marks were included, the mean stayed the same but the mode changed. What could their marks have been?',
    opts: ['\\(0 \\text{ and } 6\\)', '\\(1 \\text{ and } 5\\)', '\\(3 \\text{ and } 3\\)', '\\(2 \\text{ and } 4\\)'],
    a: 2,
    answer: '2',
    hint: 'First find the original mean, then use "mean stays the same" to find what the two new marks must add up to. Finally check each option to see whether the mode actually changes.',
    solution: 'Original mean = 3, so the two new marks must sum to 6. Only 3 and 3 changes the mode from 2 to 3.',
    solutionSteps: [
      {
        explanation:
          'Find the mean and mode of the original 9 marks: 0, 1, 2, 2, 2, 3, 3, 6, 8.',
        workingOut: '\\(\\text{sum} = 0+1+2+2+2+3+3+6+8 = 27, \\quad \\bar{x} = \\dfrac{27}{9} = 3\\)\\\\ \\(\\text{mode} = 2 \\ (\\text{appears 3 times})\\)',
        graphData: null,
      },
      {
        explanation:
          'Adding two more students makes n = 11. "The mean stayed the same" means the mean is still 3, so use this to find the required new total, then the sum of the two new marks.',
        workingOut: '\\(\\text{new sum} = \\bar{x} \\times n = 3 \\times 11 = 33\\)\\\\ \\(\\text{sum of the two new marks} = 33 - 27 = 6\\)',
        graphData: null,
      },
      {
        explanation:
          'Every option given adds to 6 (0+6, 1+5, 3+3, 2+4), so the mean condition alone cannot distinguish them. Check each option against the second condition: does adding it make the mode change from 2?',
        workingOut:
          '\\(0,6: \\text{counts become } 2{:}3,\\ 3{:}2,\\ 0{:}2,\\ 6{:}2 \\Rightarrow \\text{mode still } 2\\)\\\\ \\(1,5: \\text{counts become } 2{:}3,\\ 3{:}2 \\Rightarrow \\text{mode still } 2\\)\\\\ \\(2,4: \\text{counts become } 2{:}4 \\Rightarrow \\text{mode still } 2 \\ (\\text{just more common})\\)\\\\ \\(3,3: \\text{counts become } 3{:}4,\\ 2{:}3 \\Rightarrow \\text{mode becomes } 3\\)',
        graphData: null,
      },
      {
        explanation:
          'Only adding 3 and 3 both keeps the mean at 3 AND changes the mode (from 2 to 3). Pitfall: many students stop after checking the mean and pick any pair that sums to 6 — the mode condition is what actually decides the answer.',
        workingOut: '\\(\\text{marks} = 3 \\text{ and } 3\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b-q2',
    topicId: 'y10-18b',
    c: '18B',
    t: 'Z-scores and comparing data sets',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Results for an aptitude test are given as z-scores. In this test Di gained a z-score of 3. The test has a mean of 55 and a standard deviation of 6. What was Di\'s actual mark in this test?',
    opts: ['\\(64\\)', '\\(73\\)', '\\(58\\)', '\\(57\\)'],
    a: 1,
    answer: '1',
    hint: 'Rearrange the z-score formula \\(z = \\dfrac{x - \\bar{x}}{\\sigma}\\) to solve for \\(x\\): \\(x = \\bar{x} + z\\sigma\\).',
    solution: 'x = 55 + 3(6) = 73.',
    solutionSteps: [
      {
        explanation:
          'State the z-score formula and the known values: \\(z = 3\\), \\(\\bar{x} = 55\\), \\(\\sigma = 6\\). We need to find the raw mark \\(x\\).',
        workingOut: '\\(z = \\dfrac{x - \\bar{x}}{\\sigma}\\)',
        graphData: null,
      },
      {
        explanation:
          'Rearrange to make \\(x\\) the subject, then substitute the known values in.',
        workingOut: '\\(x = \\bar{x} + z\\sigma\\)\\\\ \\(x = 55 + 3 \\times 6\\)',
        graphData: null,
      },
      {
        explanation:
          'Carry out the multiplication first, then add. Pitfall: adding the mean and SD first (55 + 6 = 61, then multiplying by z) gives the wrong order of operations and a wrong answer.',
        workingOut: '\\(x = 55 + 18 = 73\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: Di\'s actual mark was 73, which is 3 standard deviations above the mean.',
        workingOut: '\\(x = 73\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b-q3',
    topicId: 'y10-18b',
    c: '18B',
    t: 'Z-scores and comparing data sets',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'For a class of 20 students, the statistics of Maths and English marks are given below:<br><br>Subject | Mean | SD<br>English | 60 | 10<br>Maths | 70 | 14<br><br>Tom scored 77 in Maths and 70 in English. Using z-scores, which subject represents Tom\'s better relative performance?',
    opts: [
      'Maths, because the raw score 77 is higher than 70',
      'Both subjects are equal, since both scores are exactly 1 standard deviation above the mean',
      'Maths, because \\(z_{Maths} = 1.0 > z_{English} = 0.5\\)',
      'English, because \\(z_{English} = 1.0 > z_{Maths} = 0.5\\)',
    ],
    a: 3,
    answer: '3',
    hint: 'Convert each raw score to a z-score using its own subject\'s mean and standard deviation: \\(z = \\dfrac{x - \\bar{x}}{\\sigma}\\). Compare the z-scores, not the raw marks.',
    solution: 'z(Maths) = 0.5, z(English) = 1.0, so English is the relatively better result.',
    solutionSteps: [
      {
        explanation:
          'Comparing raw scores directly (77 in Maths vs 70 in English) is meaningless here, because the two subjects have different means and spreads. Each score must be converted to a z-score using its own subject\'s mean and SD.',
        workingOut: '\\(z = \\dfrac{x - \\bar{x}}{\\sigma}\\)',
        graphData: null,
      },
      {
        explanation: 'Calculate the z-score for Maths, using Maths\' own mean (70) and SD (14).',
        workingOut: '\\(z_{Maths} = \\dfrac{77 - 70}{14} = \\dfrac{7}{14} = 0.5\\)',
        graphData: null,
      },
      {
        explanation:
          'Calculate the z-score for English, using English\'s own mean (60) and SD (10). Pitfall: using the wrong subject\'s mean/SD (e.g. Maths\' SD for English) is a common mix-up.',
        workingOut: '\\(z_{English} = \\dfrac{70 - 60}{10} = \\dfrac{10}{10} = 1.0\\)',
        graphData: null,
      },
      {
        explanation:
          'The higher z-score represents the better result relative to the rest of the cohort, regardless of which raw score is numerically bigger. Since \\(z_{English} = 1.0 > z_{Maths} = 0.5\\), English is Tom\'s relatively stronger subject even though his raw Maths mark (77) is higher than his raw English mark (70).',
        workingOut: '\\(z_{English} = 1.0 > z_{Maths} = 0.5 \\Rightarrow \\text{English is the better result}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18b-q4',
    topicId: 'y10-18b',
    c: '18B',
    t: 'Z-scores and comparing data sets',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 100,
    question:
      'The dot plots below, drawn on the same scale, show a class\'s test scores before and after a unit of work was completed. Which statement about the change in scores is correct?',
    opts: [
      'The mean increased and the standard deviation increased.',
      'The mean decreased and the standard deviation decreased.',
      'The mean increased and the standard deviation decreased.',
      'The mean decreased and the standard deviation increased.',
    ],
    a: 2,
    answer: '2',
    hint: 'Look at where the dots are centred (mean) and how spread out they are (standard deviation) in each plot.',
    solution: 'The "after" dots are shifted right (higher mean) and clustered more tightly (lower SD).',
    solutionSteps: [
      {
        explanation:
          'Read the two dot plots: "Before" shows scores spread across roughly 2 to 7, while "After" shows scores spread across roughly 5 to 9, shifted to the right.',
        workingOut: '\\(\\text{Before scores: } 2,2,3,3,3,4,4,4,4,5,5,5,6,6,7\\)\\\\ \\(\\text{After scores: } 5,6,6,6,7,7,7,7,7,7,8,8,8,8,9\\)',
        graphData: { svg: svgDotPlotSetup },
      },
      {
        explanation:
          'Compare the centres: the "After" dots are noticeably further right than the "Before" dots, so the mean increased. Confirm by calculating both means.',
        workingOut: '\\(\\bar{x}_{\\text{before}} = \\dfrac{63}{15} = 4.20\\)\\\\ \\(\\bar{x}_{\\text{after}} = \\dfrac{106}{15} \\approx 7.07\\)',
        graphData: null,
      },
      {
        explanation:
          'Compare the spread: the "After" dots are clustered more tightly around their mean than the "Before" dots (which spread widely from 2 to 7), so the standard deviation decreased. Pitfall: it is easy to only look at the range (4-3=... ) rather than how tightly the bulk of the data is clustered.',
        workingOut: '\\(\\sigma_{\\text{before}} = \\sqrt{\\dfrac{30.4}{15}} \\approx 1.42\\)\\\\ \\(\\sigma_{\\text{after}} = \\sqrt{\\dfrac{14.93}{15}} \\approx 1.00\\)',
        graphData: { svg: svgDotPlotFinal },
      },
      {
        explanation: 'Since the mean increased (4.20 &#8594; 7.07) and the standard deviation decreased (1.42 &#8594; 1.00), the class both performed better and became more consistent.',
        workingOut: '\\(\\text{mean } \\uparrow, \\quad \\sigma \\downarrow\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgDotPlotSetup },
    isNew: true,
    requiresManualGrading: false,
  },
];
