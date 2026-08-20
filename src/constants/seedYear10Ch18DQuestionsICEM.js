// Year 10 Chapter 18: Statistics — ICE-EM Mathematics 10 (3ed), Chapter 18,
// Exercise 18D: "The mean and the standard deviation" (pp.539-540). All
// possible questions converted to multiple_choice; the two "prove that..."
// questions (Q10a, Q10b) are kept as teacher_review per CLAUDE.md, since a
// proof has no fixed 4-option shape without giving the proof away.

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

const svgQ8Rows = [
  { stem: 1, leaves: [2, 2, 8, 9] },
  { stem: 2, leaves: [2, 4, 5, 6, 8] },
  { stem: 3, leaves: [0, 2, 6, 8, 8, 9] },
  { stem: 4, leaves: [0, 1, 2, 3, 6] },
];
const svgQ8 = stemLeafSvg(svgQ8Rows, 'n = 20 test marks (1|2 means 12)');

export const Y10_CH18D_ICEM_QUESTIONS = [
  // ---- Q1: mean of a list ----
  {
    id: 'y10-18d-q1',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    question:
      'The number of kicks obtained by a football player each week over a season is:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">18, 18, 20, 26, 10, 8, 21, 14, 16, 14, 12, 16</div>Calculate the mean number of kicks obtained by the player.',
    opts: ['\\(16.08\\)', '\\(16.00\\)', '\\(14.85\\)', '\\(20.00\\)'],
    a: 0,
    answer: '0',
    hint: 'Mean = (sum of all values) / (number of values). Count the values carefully — there are 12.',
    solution: 'Sum = 193, n = 12, mean = 193/12 ≈ 16.08.',
    solutionSteps: [
      {
        explanation: 'Identify the data set and count the number of values, n = 12.',
        workingOut: '\\(\\bar{x} = \\dfrac{\\sum x}{n}\\)',
        graphData: null,
      },
      {
        explanation: 'Add all 12 values together.',
        workingOut: '\\(18+18+20+26+10+8+21+14+16+14+12+16 = 193\\)',
        graphData: null,
      },
      {
        explanation: 'Divide the total by n = 12. Pitfall: it is easy to accidentally miscount how many values are in the list, or to confuse the mean with the median (the middle value once ordered) — the median here is 16.00, a different number entirely.',
        workingOut: '\\(\\bar{x} = \\dfrac{193}{12} \\approx 16.08\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the mean number of kicks is approximately 16.08.',
        workingOut: '\\(\\bar{x} \\approx 16.08\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q2: comparing two means ----
  {
    id: 'y10-18d-q2',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 90,
    question:
      'The daily maximum temperature was recorded in two different cities for a week:\n\n| City | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Day 6 | Day 7 |\n|---|---|---|---|---|---|---|---|\n| A | 28 | 31 | 34 | 32 | 31 | 29 | 28 |\n| B | 26 | 32 | 36 | 38 | 37 | 29 | 25 |\n\nWhich city had the greater mean daily maximum temperature?',
    opts: [
      'City A (30.43 > 31.86 is false — City B is actually greater)',
      'City B, since \\(31.86 > 30.43\\)',
      'They are equal, since both means round to 31',
      'City A, since \\(30.43 > 31.86\\)',
    ],
    a: 1,
    answer: '1',
    hint: 'Calculate the mean of each city\'s 7 temperatures separately, then compare.',
    solution: 'mean(A) = 213/7 ≈ 30.43. mean(B) = 223/7 ≈ 31.86. City B has the greater mean.',
    solutionSteps: [
      {
        explanation: 'Calculate the mean of City A\'s temperatures.',
        workingOut: '\\(\\bar{x}_A = \\dfrac{28+31+34+32+31+29+28}{7} = \\dfrac{213}{7} \\approx 30.43\\)',
        graphData: null,
      },
      {
        explanation: 'Calculate the mean of City B\'s temperatures.',
        workingOut: '\\(\\bar{x}_B = \\dfrac{26+32+36+38+37+29+25}{7} = \\dfrac{223}{7} \\approx 31.86\\)',
        graphData: null,
      },
      {
        explanation: 'Compare the two means directly.',
        workingOut: '\\(31.86 > 30.43\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: City B had the greater mean daily maximum temperature.',
        workingOut: '\\(\\text{City B}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q3: reverse mean problem ----
  {
    id: 'y10-18d-q3',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'The average of 5 masses is 67 kg. If a mass of 25 kg is added, what is the average of the 6 masses?',
    opts: ['\\(46.00\\)', '\\(59.17\\)', '\\(60.00\\)', '\\(72.00\\)'],
    a: 2,
    answer: '2',
    hint: 'First find the total of the original 5 masses (mean × count). Add the new mass to that total, then divide by the new count (6).',
    solution: 'Original total = 67×5 = 335. New total = 335+25 = 360. New average = 360/6 = 60.',
    solutionSteps: [
      {
        explanation: 'Find the total of the original 5 masses using mean = total / count.',
        workingOut: '\\(\\text{total}_5 = \\bar{x} \\times n = 67 \\times 5 = 335 \\text{ kg}\\)',
        graphData: null,
      },
      {
        explanation: 'Add the new mass (25 kg) to the total.',
        workingOut: '\\(\\text{total}_6 = 335 + 25 = 360 \\text{ kg}\\)',
        graphData: null,
      },
      {
        explanation: 'Divide the new total by the new count of masses, 6. Pitfall: dividing by the OLD count (5) instead of the new count (6) is a common mistake, and just averaging the two numbers 67 and 25 is another.',
        workingOut: '\\(\\bar{x}_6 = \\dfrac{360}{6} = 60 \\text{ kg}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the average of the 6 masses is 60 kg.',
        workingOut: '\\(60 \\text{ kg}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q4: weighted average of two groups of tests ----
  {
    id: 'y10-18d-q4',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'During a term, a student has an average of 46 marks after the first four tests, and an average of 38 marks for the next six tests. What is the student\'s average for all ten tests?',
    opts: ['\\(45.78\\)', '\\(42.80\\)', '\\(42.00\\)', '\\(41.20\\)'],
    a: 3,
    answer: '3',
    hint: 'Find the total marks from each group of tests separately (mean × count for each group), add the totals, then divide by the total number of tests (10). Do NOT just average the two given averages — the groups have different sizes.',
    solution: 'total = 46×4 + 38×6 = 184+228 = 412. average = 412/10 = 41.2.',
    solutionSteps: [
      {
        explanation: 'Find the total marks from the first four tests.',
        workingOut: '\\(\\text{total}_1 = 46 \\times 4 = 184\\)',
        graphData: null,
      },
      {
        explanation: 'Find the total marks from the next six tests.',
        workingOut: '\\(\\text{total}_2 = 38 \\times 6 = 228\\)',
        graphData: null,
      },
      {
        explanation: 'Add the two totals together to get the total marks across all ten tests.',
        workingOut: '\\(\\text{total} = 184 + 228 = 412\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: divide by the total number of tests, 10. Pitfall: simply averaging 46 and 38 to get 42 ignores that the two groups have different sizes (4 tests vs 6 tests) — a weighted average is needed, not a plain average of the two means.',
        workingOut: '\\(\\bar{x} = \\dfrac{412}{10} = 41.2\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q5: mean and SD from two lists, then compare ----
  {
    id: 'y10-18d-q5ai',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Calculate, correct to two decimal places, the mean and standard deviation for the data set:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">2, 4, 8, 10, 2, 9, 3, 8, 2, 2</div>',
    opts: [
      'mean = 5.00, \\(\\sigma\\) = 3.16',
      'mean = 5.00, \\(\\sigma\\) = 10.00',
      'mean = 5.00, \\(\\sigma\\) = 3.33',
      'mean = 5.80, \\(\\sigma\\) = 3.16',
    ],
    a: 0,
    answer: '0',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter all 10 values as individual \\(x\\)-entries, then read \\(\\bar{x}\\) and \\(\\sigma x\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, enter all 10 values, then read x̄ = 5.00 and σx ≈ 3.16 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each of the 10 values into the X column in order, pressing \\(=\\) after every value to move to the next row. Repeated values (like 2, which occurs four times) are simply typed in again each time.',
        workingOut: '\\(2,4,8,10,2,9,3,8,2,2\\)',
        graphData: null,
      },
      {
        explanation: 'Press AC to finish entering all 10 values, then open the statistics variable menu and select \\(\\bar{x}\\) to read the mean.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)\\\\ \\(\\bar{x} = 5.00\\)',
        graphData: null,
      },
      {
        explanation:
          'Reopen the same menu and select \\(\\sigma x\\) (the population standard deviation — NOT \\(sx\\), which divides by n-1 and is a different value this course does not use).',
        workingOut: '\\(\\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\sigma x\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives both statistics directly. Pitfall: reading off the variance display (10.00) instead of the standard deviation display, or selecting \\(sx\\) instead of \\(\\sigma x\\) (which would give 3.33), are both common mix-ups.',
        workingOut: '\\(\\bar{x} = 5.00, \\quad \\sigma x \\approx 3.16\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18d-q5aii',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Calculate, correct to two decimal places, the mean and standard deviation for the data set:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">3, 6, 4, 5, 6, 7, 3, 4, 6, 6</div>',
    opts: [
      'mean = 4.50, \\(\\sigma\\) = 1.34',
      'mean = 5.00, \\(\\sigma\\) = 1.41',
      'mean = 5.00, \\(\\sigma\\) = 1.80',
      'mean = 5.00, \\(\\sigma\\) = 1.34',
    ],
    a: 3,
    answer: '3',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter all 10 values as individual \\(x\\)-entries, then read \\(\\bar{x}\\) and \\(\\sigma x\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, enter all 10 values, then read x̄ = 5.00 and σx ≈ 1.34 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each of the 10 values into the X column in order, pressing \\(=\\) after every value to move to the next row. Repeated values (like 6, which occurs four times) are simply typed in again each time.',
        workingOut: '\\(3,6,4,5,6,7,3,4,6,6\\)',
        graphData: null,
      },
      {
        explanation: 'Press AC to finish entering all 10 values, then open the statistics variable menu and select \\(\\bar{x}\\) to read the mean.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)\\\\ \\(\\bar{x} = 5.00\\)',
        graphData: null,
      },
      {
        explanation:
          'Reopen the same menu and select \\(\\sigma x\\) (the population standard deviation — NOT \\(sx\\), which divides by n-1 and is a different value this course does not use).',
        workingOut: '\\(\\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\sigma x\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives both statistics directly. Pitfall: reading off the variance display (1.80) instead of the standard deviation display, or selecting \\(sx\\) instead of \\(\\sigma x\\) (which would give 1.41), are both common mix-ups.',
        workingOut: '\\(\\bar{x} = 5.00, \\quad \\sigma x \\approx 1.34\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18d-q5b',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Two data sets are given below:\n\n| Data set i | 2 | 4 | 8 | 10 | 2 | 9 | 3 | 8 | 2 | 2 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| Data set ii | 3 | 6 | 4 | 5 | 6 | 7 | 3 | 4 | 6 | 6 |\n\nBoth have mean = 5.00. Data set i has \\(\\sigma \\approx 3.16\\); data set ii has \\(\\sigma \\approx 1.34\\). What can be concluded by comparing them?',
    opts: [
      'Data set i is more tightly clustered around the mean than data set ii.',
      'The two data sets have different means, so they cannot be compared.',
      'Both data sets are spread out from the mean by about the same amount.',
      'Both data sets have the same mean, but data set ii is much more tightly clustered around it than data set i.',
    ],
    a: 3,
    answer: '3',
    hint: 'A larger standard deviation means the data is more spread out from the mean; a smaller standard deviation means it is more tightly clustered.',
    solution: 'Both means are 5.00, but sigma(i)=3.16 is much larger than sigma(ii)=1.34, so data set ii is far more tightly clustered around the shared mean.',
    solutionSteps: [
      {
        explanation: 'Compare the two means first — they are identical (both 5.00), so the "centre" of both data sets is the same.',
        workingOut: '\\(\\bar{x}_i = \\bar{x}_{ii} = 5.00\\)',
        graphData: null,
      },
      {
        explanation: 'Compare the two standard deviations, which measure spread around that shared mean.',
        workingOut: '\\(\\sigma_i \\approx 3.16, \\quad \\sigma_{ii} \\approx 1.34\\)',
        graphData: null,
      },
      {
        explanation: 'Since \\(\\sigma_i > \\sigma_{ii}\\), data set i is more spread out from the mean, and data set ii is more tightly clustered around it.',
        workingOut: '\\(3.16 > 1.34\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: same mean, but very different spread — this is exactly the kind of comparison the standard deviation is designed to reveal, which the mean alone cannot show.',
        workingOut: '\\(\\text{same centre, different spread}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q6: extended frequency table ----
  {
    id: 'y10-18d-q6',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question:
      'Complete the following extended frequency table to calculate the mean and standard deviation of the given data set.\n\n| \\(x_i\\) | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| \\(f_i\\) | 2 | 7 | 6 | 1 | 2 | 2 |',
    opts: [
      'mean = 3.00, \\(\\sigma\\) = 1.45',
      'mean = 3.10, \\(\\sigma\\) = 1.45',
      'mean = 3.00, \\(\\sigma\\) = 1.49',
      'mean = 3.00, \\(\\sigma\\) = 2.10',
    ],
    a: 0,
    answer: '0',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter each \\(x_i\\) value with its frequency \\(f_i\\), then read \\(\\bar{x}\\) and \\(\\sigma x\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, turn Frequency on, enter each x/f pair, then read x̄ = 3.00 and σx ≈ 1.45 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Turn on the frequency column so each \\(x_i\\) can be entered once alongside its frequency \\(f_i\\), instead of typing it in repeatedly. Press SHIFT then MODE (SETUP), scroll down to STAT, and turn Frequency ON. Re-enter STAT mode afterwards if needed.',
        workingOut: '\\(\\text{SHIFT} \\rightarrow \\text{MODE (SETUP)} \\rightarrow \\text{STAT} \\rightarrow \\text{Frequency: On}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each \\(x_i\\) in the X column and its frequency \\(f_i\\) in the FREQ column, pressing \\(=\\) after each entry to move to the next row.',
        workingOut: '\\(X: 1,2,3,4,5,6 \\quad \\text{FREQ}: 2,7,6,1,2,2\\)',
        graphData: null,
      },
      {
        explanation: 'Press AC to finish entering data, open the statistics variable menu, and select \\(\\bar{x}\\) to read the mean.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)\\\\ \\(\\bar{x} = 3.00\\)',
        graphData: null,
      },
      {
        explanation:
          'Reopen the same menu and select \\(\\sigma x\\) (the population standard deviation — NOT \\(sx\\), which divides by n-1 and is a different value this course does not use).',
        workingOut: '\\(\\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\sigma x\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives both statistics directly. Pitfall: selecting \\(sx\\) instead of \\(\\sigma x\\) gives the close-but-wrong distractor 1.49.',
        workingOut: '\\(\\bar{x} = 3.00, \\quad \\sigma x \\approx 1.45\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q7: calculator-style mean and SD ----
  {
    id: 'y10-18d-q7a',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Use a calculator to find, correct to two decimal places, the mean and standard deviation for the data set:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">3, 6, 7, 5, 8, 5, 10, 12, 13, 12, 6, 9, 12, 14, 15</div>',
    opts: [
      'mean = 9.00, \\(\\sigma\\) = 3.61',
      'mean = 9.13, \\(\\sigma\\) = 13.05',
      'mean = 9.13, \\(\\sigma\\) = 3.74',
      'mean = 9.13, \\(\\sigma\\) = 3.61',
    ],
    a: 3,
    answer: '3',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter all 15 values as individual \\(x\\)-entries, then read \\(\\bar{x}\\) and \\(\\sigma x\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, enter all 15 values, then read x̄ ≈ 9.13 and σx ≈ 3.61 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each of the 15 values into the X column in order, pressing \\(=\\) after every value to move to the next row. Repeated values (like 12, which occurs three times) are simply typed in again each time — no need to use the frequency column for a small raw list like this.',
        workingOut: '\\(3,6,7,5,8,5,10,12,13,12,6,9,12,14,15\\)',
        graphData: null,
      },
      {
        explanation: 'Press AC to finish entering all 15 values, then open the statistics variable menu and select \\(\\bar{x}\\) to read the mean.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)\\\\ \\(\\bar{x} \\approx 9.13\\)',
        graphData: null,
      },
      {
        explanation:
          'Reopen the same menu and select \\(\\sigma x\\) (the population standard deviation — NOT \\(sx\\), which divides by n-1 and is a different value this course does not use). Since the mean is not a whole number here, doing this calculation entirely by hand would be very tedious — this is exactly the kind of data set the calculator method is recommended for.',
        workingOut: '\\(\\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\sigma x\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives both statistics directly. Pitfall: selecting \\(sx\\) instead of \\(\\sigma x\\) gives the close-but-wrong distractor 3.74.',
        workingOut: '\\(\\bar{x} \\approx 9.13, \\quad \\sigma x \\approx 3.61\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18d-q7b',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Use a calculator to find, correct to two decimal places, the mean and standard deviation for the data set:<div style="text-align:center;font-weight:600;margin:10px 0;max-width:600px;margin-left:auto;margin-right:auto">8, 10, 12, 14, 16, 17, 19, 12, 11, 10, 14, 16, 18, 19</div>',
    opts: [
      'mean = 14.00, \\(\\sigma\\) = 3.46',
      'mean = 14.20, \\(\\sigma\\) = 3.46',
      'mean = 14.00, \\(\\sigma\\) = 3.60',
      'mean = 14.00, \\(\\sigma\\) = 12.00',
    ],
    a: 0,
    answer: '0',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter all 14 values as individual \\(x\\)-entries, then read \\(\\bar{x}\\) and \\(\\sigma x\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, enter all 14 values, then read x̄ = 14.00 and σx ≈ 3.46 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each of the 14 values into the X column in order, pressing \\(=\\) after every value to move to the next row. Repeated values (like 10, 14, 16 and 19, which each occur twice) are simply typed in again each time.',
        workingOut: '\\(8,10,12,14,16,17,19,12,11,10,14,16,18,19\\)',
        graphData: null,
      },
      {
        explanation: 'Press AC to finish entering all 14 values, then open the statistics variable menu and select \\(\\bar{x}\\) to read the mean.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)\\\\ \\(\\bar{x} = 14.00\\)',
        graphData: null,
      },
      {
        explanation:
          'Reopen the same menu and select \\(\\sigma x\\) (the population standard deviation — NOT \\(sx\\), which divides by n-1 and is a different value this course does not use).',
        workingOut: '\\(\\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\sigma x\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives both statistics directly. Pitfall: selecting \\(sx\\) instead of \\(\\sigma x\\) gives the close-but-wrong distractor 3.60, since \\(sx\\) divides by n-1=13 instead of n=14.',
        workingOut: '\\(\\bar{x} = 14.00, \\quad \\sigma x \\approx 3.46\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q8: stem-and-leaf test marks ----
  {
    id: 'y10-18d-q8a',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Twenty students sat a test and their results are given in the stem-and-leaf plot below (1|2 means 12). Calculate their mean mark.',
    opts: ['\\(30.55\\)', '\\(31.00\\)', '\\(30.05\\)', '\\(32.16\\)'],
    a: 0,
    answer: '0',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): read all 20 marks off the plot, enter them, then read \\(\\bar{x}\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, enter all 20 marks, then read x̄ = 30.55 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: { svg: svgQ8 },
      },
      {
        explanation:
          'Read the 20 marks off the stem-and-leaf plot in order, and enter each one into the X column, pressing \\(=\\) after every value to move to the next row. Since 12 and 38 each occur twice, just type that value in twice.',
        workingOut: '\\(12,12,18,19,22,24,25,26,28,30,32,36,38,38,39,40,41,42,43,46\\)',
        graphData: null,
      },
      {
        explanation: 'Press AC to finish entering all 20 values, then open the statistics variable menu and select \\(\\bar{x}\\) to read the mean.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives the mean directly. Pitfall: this is NOT the same as the median (which the calculator would give under a different STAT variable, and equals 31.00 here) — mean and median only coincide for perfectly symmetric data.',
        workingOut: '\\(\\bar{x} = 30.55\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ8 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18d-q8b',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Twenty students sat a test and their results are given in the stem-and-leaf plot below (1|2 means 12, mean = 30.55). How many students obtained a mark higher than the mean mark?',
    opts: ['\\(9\\)', '\\(11\\)', '\\(10\\)', '\\(12\\)'],
    a: 2,
    answer: '2',
    hint: 'List the 20 marks in order and count how many are strictly greater than 30.55.',
    solution: 'Marks above 30.55: 32,36,38,38,39,40,41,42,43,46 — 10 students.',
    solutionSteps: [
      {
        explanation: 'List the marks and identify which ones are greater than the mean, 30.55.',
        workingOut: '\\(12,12,18,19,22,24,25,26,28,30,\\ [30.55]\\ 32,36,38,38,39,40,41,42,43,46\\)',
        graphData: { svg: svgQ8 },
      },
      {
        explanation: 'Count the marks above the mean line. Note that 30 itself is below 30.55, so it does NOT count.',
        workingOut: '\\(32,36,38,38,39,40,41,42,43,46\\)',
        graphData: null,
      },
      {
        explanation: 'Count these values.',
        workingOut: '\\(\\text{count} = 10\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: 10 students scored above the mean mark.',
        workingOut: '\\(10 \\text{ students}\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ8 },
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18d-q8c',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question: 'Twenty students sat a test and their results are given in the stem-and-leaf plot below (1|2 means 12, n = 20, mean = 30.55). Find the standard deviation of their marks.',
    opts: ['\\(104.55\\)', '\\(10.49\\)', '\\(10.29\\)', '\\(10.22\\)'],
    a: 3,
    answer: '3',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter all 20 marks read off the stem-and-leaf plot, then read \\(\\sigma x\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, enter all 20 marks, then read x̄ = 30.55 and σx ≈ 10.22 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Read the 20 marks off the stem-and-leaf plot in order, and enter each one into the X column, pressing \\(=\\) after every value to move to the next row. Since 12 and 38 each occur twice, just type that value in twice — no need to turn on the frequency column for this data set.',
        workingOut: '\\(12,12,18,19,22,24,25,26,28,30,32,36,38,38,39,40,41,42,43,46\\)',
        graphData: { svg: svgQ8 },
      },
      {
        explanation: 'Press AC to finish entering all 20 values, then open the statistics variable menu and select \\(\\bar{x}\\) to confirm the mean.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)\\\\ \\(\\bar{x} = 30.55 \\ (\\checkmark \\text{ matches})\\)',
        graphData: null,
      },
      {
        explanation:
          'Reopen the same menu and select \\(\\sigma x\\) (the population standard deviation — NOT \\(sx\\), which divides by n-1 and is a different value this course does not use).',
        workingOut: '\\(\\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\sigma x\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives the standard deviation directly. Pitfall: selecting \\(sx\\) instead of \\(\\sigma x\\) gives the close-but-wrong distractor 10.49 — always check which symbol you are reading.',
        workingOut: '\\(\\sigma x \\approx 10.22\\)',
        graphData: null,
      },
    ],
    graphData: { svg: svgQ8 },
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q9: frequency table test scores ----
  {
    id: 'y10-18d-q9a',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 120,
    question:
      'Twenty people completed a test worth 10 marks. Their scores are shown in the frequency table below.\n\n| Score | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|---|\n| Number of people | 0 | 2 | 0 | 1 | 1 | 2 | 4 | 6 | 0 | 2 | 2 |\n\nCalculate the mean mark.',
    opts: ['\\(6.15\\)', '\\(6.50\\)', '\\(6.05\\)', '\\(6.83\\)'],
    a: 0,
    answer: '0',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter the scores as \\(x\\)-values with their frequencies, then read \\(\\bar{x}\\) directly from the STAT variable menu.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, turn Frequency on, enter each score/frequency pair, then read x̄ = 6.15 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Turn on the frequency column so you can enter each score once along with how many people got it, instead of typing a score in repeatedly. Press SHIFT then MODE (SETUP), scroll down to STAT, and turn Frequency ON. Re-enter STAT mode afterwards if needed.',
        workingOut: '\\(\\text{SHIFT} \\rightarrow \\text{MODE (SETUP)} \\rightarrow \\text{STAT} \\rightarrow \\text{Frequency: On}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each score in the X column and its frequency in the FREQ column, pressing \\(=\\) after each entry to move to the next row. Scores 0, 2 and 8 have frequency 0, so they can be skipped entirely.',
        workingOut: '\\(X: 1,3,4,5,6,7,9,10 \\quad \\text{FREQ}: 2,1,1,2,4,6,2,2\\)',
        graphData: null,
      },
      {
        explanation: 'Press AC to finish entering data and return to the calculation screen, then open the statistics variable menu and select \\(\\bar{x}\\) to read the mean directly.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: the calculator gives the mean directly. Pitfall: this is different from the median (6.50), which the calculator would give under a different STAT variable — don\'t confuse the two measures.',
        workingOut: '\\(\\bar{x} = 6.15\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18d-q9b',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 90,
    question:
      'Twenty people completed a test worth 10 marks. Their scores are shown in the frequency table below.\n\n| Score | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|---|\n| Number of people | 0 | 2 | 0 | 1 | 1 | 2 | 4 | 6 | 0 | 2 | 2 |\n\n(mean = 6.15). How many students obtained a mark lower than the mean mark?',
    opts: ['\\(8\\)', '\\(9\\)', '\\(12\\)', '\\(10\\)'],
    a: 3,
    answer: '3',
    hint: 'First find the mean using your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS). Then add up the frequencies for every score strictly less than that mean.',
    solution: 'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR gives x̄ = 6.15. Scores 0-6 have frequencies 0,2,0,1,1,2,4 which sum to 10.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode to find the mean. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). Turn on the frequency column first if it is not already showing: SHIFT → MODE (SETUP) → STAT → Frequency: On.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each score in the X column and its frequency in the FREQ column, pressing \\(=\\) after each entry to move to the next row (skip scores 0, 2 and 8, which have frequency 0).',
        workingOut: '\\(X: 1,3,4,5,6,7,9,10 \\quad \\text{FREQ}: 2,1,1,2,4,6,2,2\\)',
        graphData: null,
      },
      {
        explanation:
          'Press AC to finish entering data, then open the statistics variable menu and select \\(\\bar{x}\\) to read the mean directly off the calculator.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var} \\rightarrow \\bar{x}\\)\\\\ \\(\\bar{x} = 6.15\\)',
        graphData: null,
      },
      {
        explanation: 'Now use this mean to identify which scores are less than it — this includes every score from 0 up to and including 6.',
        workingOut: '\\(\\text{scores } < 6.15: \\ 0,1,2,3,4,5,6\\)',
        graphData: null,
      },
      {
        explanation: 'Add up the frequencies for each of these scores (either by hand from the table, or by reading the FREQ column back off the calculator\'s STAT table).',
        workingOut: '\\(0+2+0+1+1+2+4 = 10\\)',
        graphData: null,
      },
      {
        explanation: 'Pitfall: forgetting to include the score of 6 (since \\(6 < 6.15\\)) undercounts by 4 students — the boundary comparison must use the exact mean the calculator gave, not a rounded value.',
        workingOut: '\\(6 < 6.15 \\Rightarrow \\text{include the 4 people who scored 6}\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: 10 students scored below the mean mark.',
        workingOut: '\\(10 \\text{ students}\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },
  {
    id: 'y10-18d-q9c',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 150,
    question:
      'Twenty people completed a test worth 10 marks. Their scores are shown in the frequency table below.\n\n| Score | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|---|\n| Number of people | 0 | 2 | 0 | 1 | 1 | 2 | 4 | 6 | 0 | 2 | 2 |\n\n(n = 20, mean = 6.15). Find the standard deviation of their marks.',
    opts: ['\\(6.03\\)', '\\(2.52\\)', '\\(2.36\\)', '\\(2.46\\)'],
    a: 3,
    answer: '3',
    hint: 'Use your calculator\'s statistics mode (e.g. Casio fx-82AU PLUS): enter the scores as \\(x\\)-values with their frequencies, then read \\(\\bar{x}\\) and \\(\\sigma x\\) directly from the STAT variable menu — no need to compute \\(\\sum fx^2\\) by hand.',
    solution:
      'On a Casio fx-82AU PLUS: MODE → STAT → 1-VAR, turn Frequency on, enter each score/frequency pair, then read x̄ = 6.15 and σx ≈ 2.46 from SHIFT 1 (STAT) → Var.',
    solutionSteps: [
      {
        explanation:
          'Put the calculator into statistics mode. On a Casio fx-82AU PLUS: press MODE, then select STAT (usually "2"), then select 1-VAR (usually "1"). This opens a table with an X column ready for data entry.',
        workingOut: '\\(\\text{MODE} \\rightarrow \\text{STAT} \\rightarrow \\text{1-VAR}\\)',
        graphData: null,
      },
      {
        explanation:
          'Turn on the frequency column so you can enter each score once along with how many people got it, instead of typing a score in repeatedly. Press SHIFT then MODE (SETUP), scroll down to STAT, and turn Frequency ON. Re-enter STAT mode afterwards if needed.',
        workingOut: '\\(\\text{SHIFT} \\rightarrow \\text{MODE (SETUP)} \\rightarrow \\text{STAT} \\rightarrow \\text{Frequency: On}\\)',
        graphData: null,
      },
      {
        explanation:
          'Enter each score in the X column and its frequency in the FREQ column, pressing \\(=\\) after each entry to move to the next row. Only scores with a non-zero frequency need a row (skip scores 2 and 8, which had 0 people).',
        workingOut:
          '\\(X: 0,1,3,4,5,6,7,9,10\\)\\\\ \\(\\text{FREQ}: 2,1,1,2,4,6,2,2\\)\\\\ (\\text{score } 0 \\text{ has FREQ } 0, \\text{ so it can be skipped too})',
        graphData: null,
      },
      {
        explanation:
          'Press AC to finish entering data and return to the calculation screen. Open the statistics variable menu.',
        workingOut: '\\(\\text{AC} \\rightarrow \\text{SHIFT } 1 \\text{ (STAT)} \\rightarrow \\text{Var}\\)',
        graphData: null,
      },
      {
        explanation:
          'From the Var menu, select \\(\\bar{x}\\) to display the mean, and \\(=\\) to confirm it matches the given mean of 6.15. Then reopen SHIFT 1 → Var and select \\(\\sigma x\\) (the population standard deviation — NOT \\(sx\\), which uses n-1 and is a different value this course does not use).',
        workingOut: '\\(\\bar{x} = 6.15 \\ (\\checkmark \\text{ matches}), \\quad \\sigma x \\approx 2.46\\)',
        graphData: null,
      },
      {
        explanation:
          'Final answer: the calculator gives the standard deviation directly. Pitfall: selecting \\(sx\\) instead of \\(\\sigma x\\) on the Var menu divides by n-1=19 instead of n=20, giving the close-but-wrong distractor 2.52 — always check which symbol you are reading.',
        workingOut: '\\(\\sigma x \\approx 2.46\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  },

  // ---- Q10: proofs — kept as teacher_review ----
  {
    id: 'y10-18d-q10a',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 150,
    question:
      'For the data set 4, 7, 13, calculate the mean and show that the sum of the deviations \\((x - \\bar{x})\\) is zero. Then show algebraically that this must be true for ANY three numbers \\(a, b, c\\) with mean \\(\\bar{x}\\).',
    opts: [],
    a: null,
    answer: '',
    hint: 'First find the mean of 4, 7, 13 and check the three deviations add to zero. Then repeat the same steps using letters instead of numbers: write \\(\\bar{x}\\) in terms of a, b, c, substitute it into \\((a-\\bar{x})+(b-\\bar{x})+(c-\\bar{x})\\), and simplify.',
    solution:
      'Numeric check: mean = (4+7+13)/3 = 8. Deviations: 4-8=-4, 7-8=-1, 13-8=5. Sum = -4-1+5 = 0. '
      + 'General proof: \\(\\bar{x} = \\dfrac{a+b+c}{3}\\), so \\(3\\bar{x}=a+b+c\\). '
      + 'Sum of deviations \\(= (a-\\bar{x})+(b-\\bar{x})+(c-\\bar{x}) = (a+b+c) - 3\\bar{x} = 3\\bar{x} - 3\\bar{x} = 0\\), for any values of a, b and c.',
    solutionSteps: [
      {
        explanation: 'Calculate the mean of the concrete data set 4, 7, 13.',
        workingOut: '\\(\\bar{x} = \\dfrac{4+7+13}{3} = \\dfrac{24}{3} = 8\\)',
        graphData: null,
      },
      {
        explanation: 'Calculate each deviation from the mean, and add them together.',
        workingOut: '\\(4-8=-4, \\quad 7-8=-1, \\quad 13-8=5\\)\\\\ \\(-4+(-1)+5 = 0\\)',
        graphData: null,
      },
      {
        explanation: 'Now repeat the same idea using letters a, b, c instead of 4, 7, 13, so the result holds for ANY three numbers, not just this one example. Write the mean in terms of a, b, c.',
        workingOut: '\\(\\bar{x} = \\dfrac{a+b+c}{3} \\quad \\Rightarrow \\quad 3\\bar{x} = a+b+c\\)',
        graphData: null,
      },
      {
        explanation: 'Final answer: expand the sum of the three deviations and substitute \\(a+b+c = 3\\bar{x}\\) from the previous step.',
        workingOut: '\\((a-\\bar{x})+(b-\\bar{x})+(c-\\bar{x}) = (a+b+c) - 3\\bar{x} = 3\\bar{x} - 3\\bar{x} = 0\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: true,
  },
  {
    id: 'y10-18d-q10b',
    topicId: 'y10-18d-icem',
    c: '18D',
    t: 'The mean and the standard deviation',
    type: 'teacher_review',
    difficulty: 'hard',
    timeLimit: 180,
    question: 'Prove that the sum of the deviations of any data set (with n values \\(x_1, x_2, \\ldots, x_n\\) and mean \\(\\bar{x}\\)) is zero.',
    opts: [],
    a: null,
    answer: '',
    hint: 'Use the general definition \\(\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^n x_i\\), and expand \\(\\sum_{i=1}^n (x_i - \\bar{x})\\) using summation properties.',
    solution:
      '\\(\\sum_{i=1}^n (x_i-\\bar{x}) = \\sum_{i=1}^n x_i - \\sum_{i=1}^n \\bar{x} = \\sum_{i=1}^n x_i - n\\bar{x}\\). Since \\(\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^n x_i\\), we have \\(n\\bar{x} = \\sum_{i=1}^n x_i\\), so the expression equals \\(\\sum x_i - \\sum x_i = 0\\) for any data set.',
    solutionSteps: [
      {
        explanation:
          'This is the exact same idea as the previous question (where you checked it for 3 numbers, a, b, c), now written for ANY number of values, n. State the mean formula and what "sum of the deviations" means in summation notation: it is \\(\\sum_{i=1}^n (x_i - \\bar{x})\\), i.e. \\((x_1-\\bar{x}) + (x_2-\\bar{x}) + \\cdots + (x_n-\\bar{x})\\) added together.',
        workingOut: '\\(\\text{sum of deviations} = \\sum_{i=1}^n (x_i - \\bar{x})\\)',
        graphData: null,
      },
      {
        explanation:
          'Split the sum into two separate sums — one of the \\(x_i\\) values, and one of the \\(\\bar{x}\\) values. This is allowed because summation distributes over subtraction, exactly like \\((x_1+x_2) - (y_1+y_2) = (x_1-y_1)+(x_2-y_2)\\) rearranged.',
        workingOut: '\\(\\sum_{i=1}^n (x_i - \\bar{x}) = \\sum_{i=1}^n x_i - \\sum_{i=1}^n \\bar{x}\\)',
        graphData: null,
      },
      {
        explanation:
          'Simplify the second sum. \\(\\bar{x}\\) is a single fixed number (the mean), not something that changes with i, so adding it to itself n times (once for each of the n data values) just gives \\(n\\bar{x}\\).',
        workingOut: '\\(\\sum_{i=1}^n \\bar{x} = \\underbrace{\\bar{x}+\\bar{x}+\\cdots+\\bar{x}}_{n \\text{ times}} = n\\bar{x}\\)',
        graphData: null,
      },
      {
        explanation:
          'Substitute this back in. The expression becomes \\(\\sum x_i - n\\bar{x}\\). Now use the definition of the mean itself, \\(\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^n x_i\\), and multiply both sides by n to see that \\(n\\bar{x}\\) is just another way of writing \\(\\sum x_i\\).',
        workingOut: '\\(\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^n x_i \\quad \\Rightarrow \\quad n\\bar{x} = \\sum_{i=1}^n x_i\\)',
        graphData: null,
      },
      {
        explanation:
          'Final answer: substitute \\(n\\bar{x} = \\sum x_i\\) into the expression from step 3. The two sums are now identical, so they cancel to zero — and since n and the data values \\(x_1,\\ldots,x_n\\) were never specified as any particular numbers, this holds for EVERY data set, no matter how many values it has or what those values are.',
        workingOut: '\\(\\sum_{i=1}^n (x_i-\\bar{x}) = \\sum_{i=1}^n x_i - n\\bar{x} = \\sum_{i=1}^n x_i - \\sum_{i=1}^n x_i = 0\\)',
        graphData: null,
      },
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: true,
  },
];
