import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to create grid html inside options
const createGridHtml = (cols, shadedCount, rows = 1) => {
  const totalCells = cols * rows;
  let cellsHtml = '';
  for (let i = 0; i < totalCells; i++) {
    const isShaded = i < shadedCount;
    const bg = isShaded ? '#93c5fd' : '#ffffff';
    cellsHtml += `<div style="background: ${bg}; width: 14px; height: 14px;"></div>`;
  }
  return `<div style="display: inline-grid; grid-template-columns: repeat(${cols}, 14px); grid-template-rows: repeat(${rows}, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;">${cellsHtml}</div>`;
};

// Target document mapping by ID
const remainingUpdates = {
  // 1. spelling test
  "0TELHarsFFU13m2DNF6Y": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(7\\) errors on a \\(25\\)-question spelling test",
    opts: [
      "\\(\\dfrac{25}{7}\\)",
      "\\(\\dfrac{7}{25}\\)",
      "\\(\\dfrac{18}{25}\\)",
      "\\(\\dfrac{7}{18}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to express a spelling test score as a fraction in its simplest form. Our strategy is to define the parts of the fraction: the number of errors represents the numerator, and the total number of questions represents the denominator.",
        workingOut: "\\(\\text{Errors (Numerator)} = 7,\\; \\text{Total Questions (Denominator)} = 25\\)",
        graphData: null
      },
      {
        explanation: "Next, we write the initial fraction by placing the numerator over the denominator. This gives us 7/25.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{7}{25}\\)",
        graphData: null
      },
      {
        explanation: "Finally, we determine if the fraction can be simplified. Since 7 is a prime number and does not divide 25, the greatest common divisor of 7 and 25 is 1. Thus, the fraction is already in its simplest form, matching Option B (index 1).",
        workingOut: "\\(\\text{GCD}(7, 25) = 1 \\;\\Rightarrow\\; \\dfrac{7}{25} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // 2. car tyres
  "38PInmr3psGdNl8YI52m": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(2\\) tyres need replacing on a standard car (which has \\(4\\) tyres in total)",
    opts: [
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{2}{5}\\)",
      "\\(\\dfrac{4}{2}\\)",
      "\\(\\dfrac{1}{4}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find the fraction of tyres that need replacing in simplest form. Our strategy is to write a fraction with the number of broken tyres as the numerator and the total tyres of a standard car as the denominator.",
        workingOut: "\\(\\text{Broken Tyres} = 2,\\; \\text{Total Tyres} = 4\\)",
        graphData: null
      },
      {
        explanation: "We construct the initial fraction by placing 2 over 4. We then simplify it by dividing both parts by their greatest common divisor, which is 2.",
        workingOut: "\\(\\dfrac{2}{4} = \\dfrac{2 \\div 2}{4 \\div 2} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 1/2. This matches Option A (index 0) and makes physical sense, as replacing 2 out of 4 tyres means exactly half of them are replaced.",
        workingOut: "\\(\\dfrac{1}{2} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  // 3. broken eggs
  "51Nkihc8gW3a2RYyKjBQ": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(5\\) broken eggs in a dozen",
    opts: [
      "\\(\\dfrac{5}{10}\\)",
      "\\(\\dfrac{7}{12}\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{5}{12}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to write a fraction representing 5 broken eggs out of a dozen. Our strategy is to identify the total number of eggs in a dozen (the denominator) and the number of broken eggs (the numerator).",
        workingOut: "\\(\\text{Numerator} = 5,\\; \\text{Denominator (1 dozen)} = 12\\)",
        graphData: null
      },
      {
        explanation: "We assemble the fraction by writing 5 over 12. Since 5 is a prime number and is not a factor of 12, the greatest common divisor of 5 and 12 is 1.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{5}{12}\\)",
        graphData: null
      },
      {
        explanation: "Because there are no common factors to cancel, the fraction is already in simplest form, which corresponds to Option D (index 3).",
        workingOut: "\\(\\text{Simplest Form} = \\dfrac{5}{12} \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 4. exam minutes
  "5KwFGsMPBc7Oo88pQ0Ll": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(37\\) minutes taken to complete an exam for which \\(1\\) hour was allocated",
    opts: [
      "\\(\\dfrac{37}{100}\\)",
      "\\(\\dfrac{23}{60}\\)",
      "\\(\\dfrac{37}{60}\\)",
      "\\(\\dfrac{60}{37}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the fraction of an allocated hour spent on an exam. Our strategy is to convert the total time (1 hour) into minutes to ensure both quantities share the same units.",
        workingOut: "\\(\\text{Time Spent} = 37 \\text{ mins},\\; \\text{Total Time} = 1 \\text{ hour} = 60 \\text{ mins}\\)",
        graphData: null
      },
      {
        explanation: "Now that we have matching units, we write the fraction by placing the time spent (37) over the total allocated time (60).",
        workingOut: "\\(\\text{Fraction} = \\dfrac{37}{60}\\)",
        graphData: null
      },
      {
        explanation: "We check if the fraction can be simplified. Since 37 is a prime number and does not divide 60, the greatest common divisor is 1. Thus, the fraction is in simplest form, matching Option C (index 2).",
        workingOut: "\\(\\text{GCD}(37, 60) = 1 \\;\\Rightarrow\\; \\dfrac{37}{60} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // 5. grid diagram 8/7
  "6GflvMkAMvovOZ4n7nM4": {
    topic: "Proper vs improper fractions",
    question: "Choose the diagram that correctly shows \\(\\dfrac{8}{7}\\) if the whole (equal to \\(1\\)) is shown below:",
    opts: [
      createGridHtml(6, 6),
      `<div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">${createGridHtml(7, 7)}${createGridHtml(7, 1)}</div>`,
      createGridHtml(8, 7),
      createGridHtml(7, 7)
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to identify which diagram represents the improper fraction 8/7, given that a single whole is a grid of 7 squares. Our strategy is to express 8/7 as a mixed number.",
        workingOut: "\\(\\text{1 Whole} = \\dfrac{7}{7} = 7 \\text{ shaded squares in a 7-square grid}\\)",
        graphData: null
      },
      {
        explanation: "We rewrite the fraction 8/7 by splitting it into a whole part and a fractional part. This shows that 8/7 is equivalent to 1 whole plus an additional 1/7 of another whole.",
        workingOut: "\\(\\dfrac{8}{7} = \\dfrac{7}{7} + \\dfrac{1}{7} = 1\\dfrac{1}{7}\\)",
        graphData: null
      },
      {
        explanation: "This means the correct diagram must show one complete grid of 7 squares fully shaded, plus a second grid of 7 squares with exactly 1 square shaded. Option B (index 1) shows this layout perfectly.",
        workingOut: "\\(1\\text{ full grid of } 7 \\text{ + } 1\\text{ square of another grid} \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  },
  // 6. insect leg
  "7J7OgW8VaiFJNEL3Qgn2": {
    topic: "Fractions from situations",
    question: "One leg of a standard insect is broken (insects have \\(6\\) legs). What fraction of the insect's legs are broken?",
    opts: [
      "\\(\\dfrac{5}{6}\\)",
      "\\(\\dfrac{1}{5}\\)",
      "\\(\\dfrac{6}{1}\\)",
      "\\(\\dfrac{1}{6}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the fraction of an insect's legs that are broken. Our strategy is to identify the numerator as the count of broken legs and the denominator as the total number of legs.",
        workingOut: "\\(\\text{Broken Legs} = 1,\\; \\text{Total Legs} = 6\\)",
        graphData: null
      },
      {
        explanation: "We write the fraction by placing the number of broken legs (1) over the total legs (6). Since the numerator is 1, this unit fraction cannot be simplified further.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{1}{6}\\)",
        graphData: null
      },
      {
        explanation: "We verify that 1/6 correctly represents one out of six equal parts. This corresponds to Option D (index 3).",
        workingOut: "\\(\\dfrac{1}{6} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 7. piano hour
  "FOkES2VjwC2ntqqGNa0x": {
    topic: "Fractions from situations",
    question: "Fifteen minutes out of one hour are spent practicing piano. What fraction of the hour is spent practicing (in simplest form)?",
    opts: [
      "\\(\\dfrac{15}{60}\\)",
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{3}{4}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the simplified fraction of an hour spent practicing. Our strategy is to convert the total time (1 hour) into minutes to establish matching units.",
        workingOut: "\\(\\text{Minutes Spent} = 15,\\; \\text{Total Minutes in 1 Hour} = 60\\)",
        graphData: null
      },
      {
        explanation: "We write the initial fraction as 15/60. To simplify, we find the greatest common divisor of 15 and 60, which is 15.",
        workingOut: "\\(\\text{GCD}(15, 60) = 15 \\;\\Rightarrow\\; \\dfrac{15 \\div 15}{60 \\div 15}\\)",
        graphData: null
      },
      {
        explanation: "Dividing both parts by 15 reduces the fraction to 1/4. This represents a quarter of an hour, matching Option C (index 2).",
        workingOut: "\\(\\dfrac{1}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  },
  // 8. soccer injuries
  "Gf9CKGC6heJZadwnswAO": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(4\\) players injured out of a soccer team of \\(11\\)",
    opts: [
      "\\(\\dfrac{4}{11}\\)",
      "\\(\\dfrac{4}{10}\\)",
      "\\(\\dfrac{7}{11}\\)",
      "\\(\\dfrac{11}{4}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to write a fraction representing the injured players on a soccer team. Our strategy is to locate the numerator (injured players) and the denominator (total team size).",
        workingOut: "\\(\\text{Injured (Numerator)} = 4,\\; \\text{Total Players (Denominator)} = 11\\)",
        graphData: null
      },
      {
        explanation: "We assemble the fraction by writing 4 over 11. Since 11 is a prime number and does not share any common factors with 4, the greatest common divisor is 1.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{4}{11}\\)",
        graphData: null
      },
      {
        explanation: "Because there are no common factors to divide by, the fraction is in its simplest form, which corresponds to Option A (index 0).",
        workingOut: "\\(\\text{Simplest Form} = \\dfrac{4}{11} \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  // 9. shaded area (SVG 1)
  "IT97K2p7zjP7f86oGoI6": {
    topic: "Proper vs improper fractions",
    question: "What fraction does the shaded area represent, given that the area of the large square is \\(1\\)?",
    opts: [
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{12}{14}\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{4}{3}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to find the fraction of the large square that is shaded. Our strategy is to count the total subdivisions in the grid and the number of shaded parts.",
        workingOut: "\\(\\text{Grid dimensions} = 4 \\times 4 = 16 \\text{ total squares}\\)",
        graphData: null
      },
      {
        explanation: "Looking at the grid, exactly 3 full columns are shaded. Since each column contains 4 small squares, the total number of shaded squares is 3 multiplied by 4, which is 12.",
        workingOut: "\\(\\text{Shaded Squares} = 3 \\times 4 = 12\\)",
        graphData: null
      },
      {
        explanation: "We write the fraction of shaded area as 12/16. To simplify it to its simplest form, we divide both parts by their greatest common divisor, which is 4.",
        workingOut: "\\(\\dfrac{12 \\div 4}{16 \\div 4} = \\dfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 3/4. This is a proper fraction representing three-quarters of the entire area, matching Option A (index 0).",
        workingOut: "\\(\\dfrac{3}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  // 10. phone digit
  "MTEjIJUs7ZhlB852KfpH": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(1\\) digit in a \\(10\\)-digit phone number is incorrect",
    opts: [
      "\\(\\dfrac{1}{9}\\)",
      "\\(\\dfrac{9}{10}\\)",
      "\\(\\dfrac{1}{10}\\)",
      "\\(\\dfrac{10}{1}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to express the portion of incorrect phone number digits as a fraction. Our strategy is to set the number of incorrect digits as the numerator and the total number of digits as the denominator.",
        workingOut: "\\(\\text{Incorrect Digits} = 1,\\; \\text{Total Digits} = 10\\)",
        graphData: null
      },
      {
        explanation: "We write the fraction by putting 1 over 10. Since the numerator is 1, this fraction is already in its simplest form.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{1}{10}\\)",
        graphData: null
      },
      {
        explanation: "We check the options and identify the matching choice, which is Option C (index 2).",
        workingOut: "\\(\\dfrac{1}{10} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  },
  // 11. shaded area (SVG 2)
  "MrB0aAU2IadXYB8myw3w": {
    topic: "Proper vs improper fractions",
    question: "What fraction does the shaded area represent, given that the area of the large square is \\(1\\)?",
    opts: [
      "\\(\\dfrac{12}{18}\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(\\dfrac{5}{3}\\)",
      "\\(\\dfrac{4}{3}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are given two grids, where the area of one complete square grid is equal to 1. Our strategy is to count how many parts compose one whole and how many total parts are shaded across both grids.",
        workingOut: "\\(\\text{One Whole Grid} = 9 \\text{ equal subdivisions}\\)",
        graphData: null
      },
      {
        explanation: "We count the shaded parts. The first grid has 3 shaded squares, and the second grid is fully shaded, containing 9 shaded squares. The total count of shaded parts is 3 + 9 = 12.",
        workingOut: "\\(\\text{Total Shaded Parts} = 3 + 9 = 12\\)",
        graphData: null
      },
      {
        explanation: "We express this as the improper fraction 12/9. To simplify, we find the greatest common divisor of 12 and 9, which is 3, and divide both parts.",
        workingOut: "\\(\\dfrac{12 \\div 3}{9 \\div 3} = \\dfrac{4}{3}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 4/3 (or 1 and 1/3). This is an improper fraction representing more than one whole, which matches Option D (index 3).",
        workingOut: "\\(\\dfrac{4}{3} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 12. days out of week
  "YQgbl5UGoCn6ClF6y8yu": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(5\\) days out of \\(1\\) week",
    opts: [
      "\\(\\dfrac{5}{10}\\)",
      "\\(\\dfrac{2}{7}\\)",
      "\\(\\dfrac{7}{5}\\)",
      "\\(\\dfrac{5}{7}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to represent 5 days out of a week as a fraction. Our strategy is to convert the total unit (1 week) into days so that the units in our fraction match.",
        workingOut: "\\(\\text{Days Focused} = 5,\\; \\text{1 Week} = 7 \\text{ days}\\)",
        graphData: null
      },
      {
        explanation: "We assemble the fraction by placing 5 over 7. Since 5 and 7 are both prime numbers, their greatest common divisor is 1.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{5}{7}\\)",
        graphData: null
      },
      {
        explanation: "Because there are no common factors to simplify, the fraction is in its simplest form, which corresponds to Option D (index 3).",
        workingOut: "\\(\\dfrac{5}{7} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 13. grid diagram 1/4
  "ZzJKPsaxCQgEq7ByecGZ": {
    topic: "Proper vs improper fractions",
    question: "Choose the diagram that correctly shows \\(\\dfrac{1}{4}\\) if the whole is shown below:",
    opts: [
      `<div style="display: inline-grid; grid-template-columns: repeat(2, 14px); grid-template-rows: repeat(2, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;"><div style="background: #93c5fd; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div></div>`,
      `<div style="display: flex; gap: 4px;">${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}</div>`,
      createGridHtml(1, 1),
      createGridHtml(3, 1)
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to choose the diagram that represents the fraction 1/4, given that a single whole is a small square block. Our strategy is to identify a representation that divides the whole into 4 equal subdivisions and shades exactly 1 of them.",
        workingOut: "\\(\\text{1 Whole} = 1 \\text{ square block}\\)",
        graphData: null
      },
      {
        explanation: "To show 1/4 of this whole, the square must be partitioned into 4 smaller, equal squares, and exactly 1 of those smaller squares must be shaded.",
        workingOut: "\\(\\text{Required: } 1 \\text{ shaded region out of } 4 \\text{ equal subdivisions}\\)",
        graphData: null
      },
      {
        explanation: "Evaluating Option A, we see a single large square divided into a 2x2 grid of 4 equal regions, with exactly 1 region shaded. This represents 1/4 of the whole, matching Option A (index 0).",
        workingOut: "\\(\\text{Grid with 1 shaded out of 4} \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  // 14. shaded area (SVG 3)
  "b88zApuCGfA8kPbosBzC": {
    topic: "Proper vs improper fractions",
    question: "What fraction does the shaded area represent, given that the area of the large square is \\(1\\)?",
    opts: [
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{8}{16}\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(1\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are given two grids, where one complete grid square represents a whole of 1. Our strategy is to determine the fraction of shaded area in each individual grid and combine them.",
        workingOut: "\\(\\text{Grid division} = 8 \\text{ equal triangles per whole}\\)",
        graphData: null
      },
      {
        explanation: "In each of the two grids, exactly 4 out of 8 triangles are shaded. This means each grid has a shaded fraction of 4/8, which simplifies to 1/2.",
        workingOut: "\\(\\text{Shaded in Grid 1} = \\dfrac{4}{8} = \\dfrac{1}{2},\\; \\text{Shaded in Grid 2} = \\dfrac{4}{8} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "To find the total shaded area, we add the shaded parts of the two grids together: 1/2 + 1/2 = 1 whole.",
        workingOut: "\\(\\text{Total Shaded} = \\dfrac{1}{2} + \\dfrac{1}{2} = 1\\)",
        graphData: null
      },
      {
        explanation: "The combined shaded area represents exactly 1 whole. This corresponds to Option D (index 3).",
        workingOut: "\\(\\text{Total Area} = 1 \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 15. table leg
  "b8UlJSCUUJSxKNR5H5OL": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: \\(1\\) leg of a rectangular table is broken (the table has \\(4\\) legs in total)",
    opts: [
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{4}{1}\\)",
      "\\(\\dfrac{1}{4}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the fraction representing one broken leg out of four table legs. Our strategy is to place the number of broken legs (the numerator) over the total number of legs (the denominator).",
        workingOut: "\\(\\text{Broken Legs (Numerator)} = 1,\\; \\text{Total Legs (Denominator)} = 4\\)",
        graphData: null
      },
      {
        explanation: "We construct the fraction as 1/4. Since the numerator is 1, the fraction is already in simplest form.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We verify the options and select the one matching 1/4, which is Option D (index 3).",
        workingOut: "\\(\\dfrac{1}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 16. november holiday
  "bArwNDmBod7ycDN4rNXk": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: A \\(12\\)-day holiday in November",
    opts: [
      "\\(\\dfrac{12}{31}\\)",
      "\\(\\dfrac{18}{30}\\)",
      "\\(\\dfrac{30}{12}\\)",
      "\\(\\dfrac{2}{5}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to find the fraction of November spent on holiday. Our strategy is to determine the total number of days in November, which represents our denominator.",
        workingOut: "\\(\\text{Holiday Days (Numerator)} = 12,\\; \\text{Days in November (Denominator)} = 30\\)",
        graphData: null
      },
      {
        explanation: "We write the initial fraction as 12/30. We then find the greatest common divisor of 12 and 30, which is 6.",
        workingOut: "\\(\\text{GCD}(12, 30) = 6 \\;\\Rightarrow\\; \\dfrac{12 \\div 6}{30 \\div 6}\\)",
        graphData: null
      },
      {
        explanation: "Dividing both parts by 6 simplifies the fraction to 2/5. We verify that 2 and 5 share no common factors, confirming it is in simplest form. This corresponds to Option D (index 3).",
        workingOut: "\\(\\dfrac{2}{5} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 17. painted wall
  "f5nbRDFPcKFMvhvDTSYZ": {
    topic: "Fractions from situations",
    question: "A rectangular wall is painted with \\(3\\) equally sized vertical stripes. If \\(2\\) of the stripes are painted blue, what fraction of the wall is blue?",
    opts: [
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{3}{2}\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the fraction of the wall painted blue. Our strategy is to identify the number of blue stripes as the numerator and the total stripes as the denominator.",
        workingOut: "\\(\\text{Blue Stripes} = 2,\\; \\text{Total Stripes} = 3\\)",
        graphData: null
      },
      {
        explanation: "We write the fraction by placing 2 over 3. Since 2 and 3 share no common factors other than 1, it is already in simplest form.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "We match our result to the options, finding it corresponds to Option C (index 2).",
        workingOut: "\\(\\dfrac{2}{3} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  },
  // 18. shaded area (SVG 4)
  "lTA9xFFreaduZeiQseUA": {
    topic: "Proper vs improper fractions",
    question: "What fraction does the shaded area represent, given that the area of the large square is \\(1\\)?",
    opts: [
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{3}{8}\\)",
      "\\(\\dfrac{4}{6}\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to identify the fraction of the square grid that is shaded. Our strategy is to count the total subdivisions (triangles) and the shaded ones.",
        workingOut: "\\(\\text{Total Triangles} = 8\\)",
        graphData: null
      },
      {
        explanation: "We count the shaded triangles, which form a pinwheel pattern of exactly 4 triangles.",
        workingOut: "\\(\\text{Shaded Triangles} = 4\\)",
        graphData: null
      },
      {
        explanation: "We write the fraction of shaded area as 4/8, and then divide both parts by their greatest common divisor, which is 4, to simplify it.",
        workingOut: "\\(\\dfrac{4 \\div 4}{8 \\div 4} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 1/2. This matches Option D (index 3).",
        workingOut: "\\(\\dfrac{1}{2} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 19. grid shaded simplest form
  "mmpLmudIE2YNEDqeD4dM": {
    topic: "Simplifying fractions",
    question: "A \\(4 \\times 4\\) square grid has \\(10\\) of its small squares shaded. What fraction of the large square is shaded, in its simplest form?",
    opts: [
      "\\(\\dfrac{10}{16}\\)",
      "\\(\\dfrac{5}{16}\\)",
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{5}{8}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the fraction of the shaded grid in simplest form. Our strategy is to determine the total grid squares and set up the initial fraction.",
        workingOut: "\\(\\text{Total Squares} = 4 \\times 4 = 16,\\; \\text{Shaded Squares} = 10\\)",
        graphData: null
      },
      {
        explanation: "We write the initial fraction as 10/16. To simplify, we find the greatest common divisor of 10 and 16, which is 2.",
        workingOut: "\\(\\text{GCD}(10, 16) = 2 \\;\\Rightarrow\\; \\dfrac{10 \\div 2}{16 \\div 2}\\)",
        graphData: null
      },
      {
        explanation: "Dividing both parts by 2 gives 5/8. Since 5 is a prime number and does not divide 8, the fraction is in simplest form. This matches Option D (index 3).",
        workingOut: "\\(\\dfrac{5}{8} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 20. race competitors
  "nDNNDWnEFDG6V7PcUrQ5": {
    topic: "Fractions from situations",
    question: "Write the fraction, in its simplest form, that describes the following: Out of \\(28\\) competitors, \\(21\\) finish the race",
    opts: [
      "\\(\\dfrac{7}{28}\\)",
      "\\(\\dfrac{28}{21}\\)",
      "\\(\\dfrac{21}{100}\\)",
      "\\(\\dfrac{3}{4}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to write the fraction of competitors who finished the race in simplest form. Our strategy is to define the numerator (finishers) and the denominator (total competitors).",
        workingOut: "\\(\\text{Finishers (Numerator)} = 21,\\; \\text{Total Competitors (Denominator)} = 28\\)",
        graphData: null
      },
      {
        explanation: "We write the initial fraction as 21/28. To simplify, we look for the greatest common divisor of 21 and 28, which is 7.",
        workingOut: "\\(\\text{GCD}(21, 28) = 7 \\;\\Rightarrow\\; \\dfrac{21 \\div 7}{28 \\div 7}\\)",
        graphData: null
      },
      {
        explanation: "Dividing both parts by 7 gives 3/4. This simplified fraction represents that three-quarters of the competitors completed the race. This corresponds to Option D (index 3).",
        workingOut: "\\(\\dfrac{3}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // 21. marathon competitors
  "p6XjSnXfXf1HCnyr65YN": {
    topic: "Fractions from situations",
    question: "Only \\(9\\) competitors out of a field of \\(29\\) complete a grueling marathon. What fraction of the competitors completed the marathon?",
    opts: [
      "\\(\\dfrac{20}{29}\\)",
      "\\(\\dfrac{9}{29}\\)",
      "\\(\\dfrac{29}{9}\\)",
      "\\(\\dfrac{9}{20}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to express the fraction of marathon finishers. Our strategy is to set the number of finishers as the numerator and the total competitors as the denominator.",
        workingOut: "\\(\\text{Finishers} = 9,\\; \\text{Total Competitors} = 29\\)",
        graphData: null
      },
      {
        explanation: "We write the fraction by putting 9 over 29. Since 29 is a prime number and does not share any common factors with 9, the greatest common divisor is 1.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{9}{29}\\)",
        graphData: null
      },
      {
        explanation: "Because there are no common factors, the fraction is in its simplest form. This corresponds to Option B (index 1).",
        workingOut: "\\(\\dfrac{9}{29} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  },
  // 22. puppies female
  "vd0J3WTvJZUO9E1fno0J": {
    topic: "Fractions from situations",
    question: "Five puppies out of a litter of eight are female. What fraction of the litter are female?",
    opts: [
      "\\(\\dfrac{3}{8}\\)",
      "\\(\\dfrac{5}{8}\\)",
      "\\(\\dfrac{8}{5}\\)",
      "\\(\\dfrac{5}{3}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to write the fraction of female puppies in the litter. Our strategy is to define the numerator as the count of female puppies and the denominator as the total number of puppies.",
        workingOut: "\\(\\text{Female Puppies} = 5,\\; \\text{Total Puppies} = 8\\)",
        graphData: null
      },
      {
        explanation: "We write the fraction by placing 5 over 8. Since 5 is a prime number and does not divide 8, the fraction is already in simplest form.",
        workingOut: "\\(\\text{Fraction} = \\dfrac{5}{8}\\)",
        graphData: null
      },
      {
        explanation: "We check the options and select the one matching 5/8, which is Option B (index 1).",
        workingOut: "\\(\\dfrac{5}{8} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4A Remaining] Fetching current y7-4a questions from Firestore...');
    const snap = await db.collection('questions').where('topicId', '==', 'y7-4a').get();
    const existingDocs = snap.docs.map(d => ({ docId: d.id, data: d.data() }));
    console.log(`Found ${existingDocs.length} questions in topic y7-4a.`);

    let updatedCount = 0;

    for (const [docId, updateData] of Object.entries(remainingUpdates)) {
      const match = existingDocs.find(d => d.docId === docId);
      if (match) {
        const ref = db.collection('questions').doc(docId);
        const updatedDoc = {
          ...match.data,
          type: "multiple_choice",
          question: updateData.question,
          opts: updateData.opts,
          a: updateData.a,
          solutionSteps: updateData.solutionSteps,
          topic: updateData.topic,
          isNew: true,
          solution: null,
          answer: null,
          gridConfig: null
        };
        await ref.set(updatedDoc);
        console.log(`  [UPDATED] ${docId}: "${match.data.question.substring(0, 50)}..."`);
        updatedCount++;
      } else {
        console.log(`  [WARNING] Document ${docId} not found in Firestore y7-4a topic.`);
      }
    }

    console.log(`\nSuccessfully updated ${updatedCount} remaining questions in y7-4a.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
//
