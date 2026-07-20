import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Original question texts from importYear7Ch4A.js (Q1 to Q10) to map to existing Firestore documents
const targets = [
  {
    originalQuestion: "Where are the points $A = \\frac{3}{5}$, $B = \\frac{9}{5}$, and $C = \\frac{15}{5}$ located on a number line?",
    topic: "Fractions on a number line",
    question: "Where are the points \\(A = \\dfrac{3}{5}\\), \\(B = \\dfrac{9}{5}\\), and \\(C = \\dfrac{15}{5}\\) located on a number line?",
    opts: [
      "\\(A\\) is between \\(1\\) and \\(2\\); \\(B\\) is between \\(2\\) and \\(3\\); \\(C\\) is exactly at \\(5\\).",
      "\\(A\\) is exactly at \\(1\\); \\(B\\) is between \\(1\\) and \\(2\\); \\(C\\) is between \\(2\\) and \\(3\\).",
      "\\(A\\) is between \\(0\\) and \\(1\\); \\(B\\) is between \\(1\\) and \\(2\\); \\(C\\) is exactly at \\(3\\).",
      "\\(A\\) is between \\(0\\) and \\(1\\); \\(B\\) is exactly at \\(2\\); \\(C\\) is between \\(3\\) and \\(4\\)."
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are given three fractions with a common denominator of 5. To determine where they lie on a number line relative to integers, our strategy is to convert each fraction into a mixed number or integer by dividing the numerator by the denominator.",
        workingOut: "\\(\\dfrac{3}{5},\\; \\dfrac{9}{5},\\; \\dfrac{15}{5} \\;\\Rightarrow\\; \\text{Convert each to a mixed number by dividing by 5}\\)",
        graphData: null
      },
      {
        explanation: "For the first point, A = 3/5, the numerator is smaller than the denominator, meaning the division yields a quotient of 0 and a remainder of 3. Therefore, A represents the mixed number 0 and 3/5, placing it strictly between 0 and 1 on the number line.",
        workingOut: "\\(A = \\dfrac{3}{5} = 0\\tfrac{3}{5} \\;\\Rightarrow\\; 0 < A < 1\\)",
        graphData: null
      },
      {
        explanation: "For the second point, B = 9/5, dividing 9 by 5 gives a quotient of 1 and a remainder of 4. This means B is equal to 1 and 4/5, which places it strictly between 1 and 2. A common error is misidentifying the integer boundaries, so we verify that 1 and 4/5 is indeed greater than 1 but less than 2.",
        workingOut: "\\(B = \\dfrac{9}{5} = 1\\tfrac{4}{5} \\;\\Rightarrow\\; 1 < B < 2\\)",
        graphData: null
      },
      {
        explanation: "For the third point, C = 15/5, dividing 15 by 5 yields a quotient of 3 with a remainder of 0. Since there is no remainder, this fraction simplifies directly to the whole number 3, placing point C exactly on the integer 3.",
        workingOut: "\\(C = \\dfrac{15}{5} = 3 \\;\\Rightarrow\\; C\\text{ is exactly at 3}\\)",
        graphData: null
      },
      {
        explanation: "Combining our observations, we find that A is between 0 and 1, B is between 1 and 2, and C is exactly at 3. Comparing this to our options, we select the choice matching these criteria, which is Option C (index 2). We double-check each boundary to ensure perfect alignment.",
        workingOut: "\\(A \\in (0,1),\\; B \\in (1,2),\\; C = 3 \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "Which list correctly identifies the integers that the fractions $\\frac{2}{7}$, $\\frac{11}{7}$, and $\\frac{20}{7}$ lie between?",
    topic: "Fractions on a number line",
    question: "Which list correctly identifies the integers that the fractions \\(\\dfrac{2}{7}\\), \\(\\dfrac{11}{7}\\), and \\(\\dfrac{20}{7}\\) lie between?",
    opts: [
      "Between \\(1\\) and \\(2\\), between \\(2\\) and \\(3\\), between \\(3\\) and \\(4\\)",
      "Between \\(0\\) and \\(1\\), between \\(1\\) and \\(2\\), between \\(2\\) and \\(3\\)",
      "Between \\(0\\) and \\(1\\), between \\(1\\) and \\(2\\), between \\(3\\) and \\(4\\)",
      "Between \\(0\\) and \\(1\\), between \\(2\\) and \\(3\\), between \\(3\\) and \\(4\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are given three fractions sharing a denominator of 7. To find the integers they lie between, our strategy is to perform division on each fraction to express them as mixed numbers, identifying their integer parts.",
        workingOut: "\\(\\dfrac{2}{7},\\; \\dfrac{11}{7},\\; \\dfrac{20}{7} \\;\\Rightarrow\\; \\text{Divide each numerator by 7}\\)",
        graphData: null
      },
      {
        explanation: "For the fraction 2/7, the numerator is less than 7, so it cannot make a whole. Its value is 0 and 2/7, which lies strictly between the integers 0 and 1.",
        workingOut: "\\(\\dfrac{2}{7} = 0\\tfrac{2}{7} \\;\\Rightarrow\\; 0 < \\dfrac{2}{7} < 1\\)",
        graphData: null
      },
      {
        explanation: "For the fraction 11/7, dividing 11 by 7 gives a quotient of 1 and a remainder of 4. This gives us the mixed number 1 and 4/7, which lies strictly between 1 and 2.",
        workingOut: "\\(\\dfrac{11}{7} = 1\\tfrac{4}{7} \\;\\Rightarrow\\; 1 < \\dfrac{11}{7} < 2\\)",
        graphData: null
      },
      {
        explanation: "For the fraction 20/7, dividing 20 by 7 gives a quotient of 2 and a remainder of 6. This results in the mixed number 2 and 6/7, which lies strictly between 2 and 3.",
        workingOut: "\\(\\dfrac{20}{7} = 2\\tfrac{6}{7} \\;\\Rightarrow\\; 2 < \\dfrac{20}{7} < 3\\)",
        graphData: null
      },
      {
        explanation: "Summarizing our findings, the fractions lie between 0 and 1, 1 and 2, and 2 and 3 respectively. We look for the option that lists these intervals in order, which corresponds to Option B (index 1).",
        workingOut: "\\(\\dfrac{2}{7} \\in (0,1),\\; \\dfrac{11}{7} \\in (1,2),\\; \\dfrac{20}{7} \\in (2,3) \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "Consider the fractions $\\frac{5}{9}$, $\\frac{8}{9}$, and $\\frac{13}{9}$. Which of these fractions is greater than $1$?",
    topic: "Proper vs improper fractions",
    question: "Consider the fractions \\(\\dfrac{5}{9}\\), \\(\\dfrac{8}{9}\\), and \\(\\dfrac{13}{9}\\). Which of these fractions is greater than \\(1\\)?",
    opts: [
      "Only \\(\\dfrac{13}{9}\\)",
      "\\(\\dfrac{8}{9}\\) and \\(\\dfrac{13}{9}\\)",
      "All of them",
      "None of them"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to determine which of the given fractions is strictly greater than 1. Our strategy is to compare the numerator of each fraction with its denominator, since a positive fraction is greater than 1 if and only if its numerator is larger than its denominator.",
        workingOut: "\\(\\text{Compare each numerator with the denominator } 9\\)",
        graphData: null
      },
      {
        explanation: "Evaluating the first fraction 5/9, we compare the numerator 5 to the denominator 9. Since 5 is less than 9, this fraction represents a value less than 1 whole.",
        workingOut: "\\(5 < 9 \\;\\Rightarrow\\; \\dfrac{5}{9} < 1\\)",
        graphData: null
      },
      {
        explanation: "Evaluating the second fraction 8/9, we compare 8 to 9. Since 8 is less than 9, this fraction is also less than 1. Students sometimes mistake fractions close to 1 as being greater than 1, but because the numerator is smaller, it remains strictly below 1.",
        workingOut: "\\(8 < 9 \\;\\Rightarrow\\; \\dfrac{8}{9} < 1\\)",
        graphData: null
      },
      {
        explanation: "Evaluating the third fraction 13/9, we compare 13 to 9. Since 13 is greater than 9, this is an improper fraction. Converting to a mixed number gives 1 and 4/9, which is clearly greater than 1.",
        workingOut: "\\(13 > 9 \\;\\Rightarrow\\; \\dfrac{13}{9} = 1\\tfrac{4}{9} > 1\\)",
        graphData: null
      },
      {
        explanation: "Comparing all results, only the fraction 13/9 is greater than 1, while 5/9 and 8/9 are less than 1. This matches Option A (index 0) perfectly.",
        workingOut: "\\(\\dfrac{5}{9} < 1,\\; \\dfrac{8}{9} < 1,\\; \\dfrac{13}{9} > 1 \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "A number line is marked with whole numbers ($0, 1, 2, \\dots$). The space between each whole number is divided into $4$ equal parts. A star is placed on the $3$rd tick mark after the number $5$. What fraction represents the star?",
    topic: "Mixed numbers and improper fractions",
    question: "A number line is marked with whole numbers (\\(0, 1, 2, \\dots\\)). The space between each whole number is divided into \\(4\\) equal parts. A star is placed on the \\(3\\)rd tick mark after the number \\(5\\). What fraction represents the star?",
    opts: [
      "\\(\\dfrac{15}{4}\\)",
      "\\(\\dfrac{21}{4}\\)",
      "\\(\\dfrac{53}{4}\\)",
      "\\(\\dfrac{23}{4}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are given a number line where each unit interval is split into 4 equal subdivisions, and a star is located 3 ticks past the integer 5. Our strategy is to first write this position as a mixed number and then convert it into an improper fraction.",
        workingOut: "\\(\\text{Denominator} = 4,\\; \\text{Starting Integer} = 5,\\; \\text{Ticks Past} = 3\\)",
        graphData: null
      },
      {
        explanation: "Since the unit interval is divided into 4 parts, each tick mark represents a quarter (1/4). The star is 3 ticks past 5, representing an additional 3/4. Writing this as a mixed number gives 5 and 3/4.",
        workingOut: "\\(\\text{Star Position} = 5\\tfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "To convert the mixed number 5 and 3/4 into an improper fraction, we multiply the whole number by the denominator and add the numerator, placing the result over the original denominator.",
        workingOut: "\\(5 \\times 4 + 3 = 20 + 3 = 23 \\;\\Rightarrow\\; \\dfrac{23}{4}\\)",
        graphData: null
      },
      {
        explanation: "We verify our calculation by dividing 23 by 4, which yields 5 with a remainder of 3, confirming the mixed number is 5 and 3/4. This corresponds to Option D (index 3).",
        workingOut: "\\(\\dfrac{23}{4} = 5\\tfrac{3}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "A number line is divided into thirds (3 equal spaces between each whole number). A triangle is placed on the $1$st tick mark after the number $8$. What fraction represents the triangle?",
    topic: "Mixed numbers and improper fractions",
    question: "A number line is divided into thirds (3 equal spaces between each whole number). A triangle is placed on the \\(1\\)st tick mark after the number \\(8\\). What fraction represents the triangle?",
    opts: [
      "\\(\\dfrac{8}{3}\\)",
      "\\(\\dfrac{25}{3}\\)",
      "\\(\\dfrac{11}{3}\\)",
      "\\(\\dfrac{23}{3}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are given a number line divided into thirds, with a triangle placed 1 tick past the integer 8. Our strategy is to represent the triangle's location as a mixed number and convert it to an improper fraction.",
        workingOut: "\\(\\text{Denominator} = 3,\\; \\text{Starting Integer} = 8,\\; \\text{Ticks Past} = 1\\)",
        graphData: null
      },
      {
        explanation: "Because the interval is divided into 3 equal parts, each subdivision represents 1/3. The triangle sits 1 subdivision past 8, which translates to the mixed number 8 and 1/3.",
        workingOut: "\\(\\text{Triangle Position} = 8\\tfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "We convert the mixed number 8 and 1/3 into an improper fraction by multiplying the whole number 8 by the denominator 3, adding the numerator 1, and placing it over 3.",
        workingOut: "\\(8 \\times 3 + 1 = 24 + 1 = 25 \\;\\Rightarrow\\; \\dfrac{25}{3}\\)",
        graphData: null
      },
      {
        explanation: "We verify the result: 25 divided by 3 yields 8 with a remainder of 1, which represents 8 and 1/3. This matches Option B (index 1).",
        workingOut: "\\(\\dfrac{25}{3} = 8\\tfrac{1}{3} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "The square below is divided into 16 regions of equal area. Tap the panels to shade exactly $\\frac{1}{4}$ of the total area.",
    topic: "Fractions of a whole — grid model",
    question: "A square is divided into a \\(4 \\times 4\\) grid of \\(16\\) equal smaller squares. How many of the small squares must be shaded to represent \\(\\dfrac{1}{4}\\) of the total area?",
    opts: [
      "\\(2\\) squares",
      "\\(8\\) squares",
      "\\(4\\) squares",
      "\\(1\\) square"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to find how many small squares represent 1/4 of a 4x4 grid. Our strategy is to determine the total number of squares and multiply it by the target fraction.",
        workingOut: "\\(\\text{Total Squares} = 4 \\times 4 = 16\\)",
        graphData: null
      },
      {
        explanation: "To find 1/4 of the total area, we compute 1/4 of 16. This is done by dividing the total number of squares, 16, by the denominator, 4.",
        workingOut: "\\(\\dfrac{1}{4} \\times 16 = \\dfrac{16}{4} = 4\\)",
        graphData: null
      },
      {
        explanation: "We double-check our answer: shading 4 squares out of 16 gives the fraction 4/16, which simplifies to 1/4. Thus, shading 4 squares represents exactly 1/4 of the grid, which matches Option C (index 2).",
        workingOut: "\\(\\dfrac{4}{16} = \\dfrac{1}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "Tap the panels to shade exactly $\\frac{3}{8}$ of the $4 \\times 4$ grid.",
    topic: "Equivalent fractions — grid model",
    question: "A \\(4 \\times 4\\) grid has \\(16\\) equal squares. How many squares must be shaded to represent \\(\\dfrac{3}{8}\\) of the grid?",
    opts: [
      "\\(6\\) squares",
      "\\(3\\) squares",
      "\\(8\\) squares",
      "\\(4\\) squares"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to represent 3/8 of a 16-square grid. Our strategy is to find an equivalent fraction with a denominator of 16, which represents the total number of squares.",
        workingOut: "\\(\\text{Total Squares} = 16,\\; \\text{Target Fraction} = \\dfrac{3}{8}\\)",
        graphData: null
      },
      {
        explanation: "To convert the denominator 8 into 16, we multiply both the numerator and the denominator of 3/8 by 2. This maintains the value of the fraction while scaling it to match our grid size.",
        workingOut: "\\(\\dfrac{3}{8} = \\dfrac{3 \\times 2}{8 \\times 2} = \\dfrac{6}{16}\\)",
        graphData: null
      },
      {
        explanation: "The equivalent fraction 6/16 tells us that we must shade 6 out of the 16 squares. We verify that 6/16 simplifies to 3/8. This matches Option A (index 0).",
        workingOut: "\\(\\dfrac{6}{16} = \\dfrac{3}{8} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "Tap the panels to shade exactly $\\frac{5}{16}$ of the grid.",
    topic: "Fractions of a whole — grid model",
    question: "A \\(4 \\times 4\\) grid has \\(16\\) equal squares. How many squares must be shaded to represent \\(\\dfrac{5}{16}\\) of the total area?",
    opts: [
      "\\(16\\) squares",
      "\\(8\\) squares",
      "\\(11\\) squares",
      "\\(5\\) squares"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the number of squares to shade to represent 5/16 of a 16-square grid. Our strategy is to match the denominator of the fraction to the total number of grid squares.",
        workingOut: "\\(\\text{Total Squares} = 16,\\; \\text{Target Fraction} = \\dfrac{5}{16}\\)",
        graphData: null
      },
      {
        explanation: "Since the denominator of our target fraction (16) matches the total number of squares in the grid (16) exactly, the numerator directly represents the number of squares we need to shade.",
        workingOut: "\\(\\dfrac{5}{16} \\;\\Rightarrow\\; \\text{Squares to Shade} = 5\\)",
        graphData: null
      },
      {
        explanation: "Shading 5 squares yields the fraction 5/16, which is already in simplest form and matches the required fraction. This corresponds to Option D (index 3).",
        workingOut: "\\(\\dfrac{5}{16} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "This $2 \\times 2$ grid has each square split diagonally into $2$ triangles. Tap the panels to shade exactly $\\frac{5}{8}$ of the whole area.",
    topic: "Fractions of a whole — triangle model",
    question: "A \\(2 \\times 2\\) grid has each of its \\(4\\) squares split diagonally into \\(2\\) equal triangles. How many triangles must be shaded to represent \\(\\dfrac{5}{8}\\) of the whole area?",
    opts: [
      "\\(4\\) triangles",
      "\\(5\\) triangles",
      "\\(8\\) triangles",
      "\\(3\\) triangles"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are given a 2x2 grid where each of the 4 squares is split into 2 triangles. Our strategy is to determine the total number of triangles in the grid first.",
        workingOut: "\\(\\text{Total Squares} = 2 \\times 2 = 4,\\; \\text{Total Triangles} = 4 \\times 2 = 8\\)",
        graphData: null
      },
      {
        explanation: "Since the grid contains 8 triangles in total, and the target fraction is 5/8, the denominator matches the total number of triangles. Thus, the numerator (5) is the number of triangles we need to shade.",
        workingOut: "\\(\\dfrac{5}{8} \\times 8 = 5 \\;\\Rightarrow\\; \\text{Triangles to Shade} = 5\\)",
        graphData: null
      },
      {
        explanation: "Shading 5 out of 8 triangles gives 5/8 of the total area. We check this against the options and select Option B (index 1).",
        workingOut: "\\(\\dfrac{5}{8} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  },
  {
    originalQuestion: "Tap the panels to shade exactly $\\frac{1}{2}$ of the whole area.",
    topic: "Fractions of a whole — triangle model",
    question: "A \\(2 \\times 2\\) grid has each of its \\(4\\) squares split diagonally into \\(2\\) equal triangles. How many triangles must be shaded to represent \\(\\dfrac{1}{2}\\) of the whole area?",
    opts: [
      "\\(2\\) triangles",
      "\\(8\\) triangles",
      "\\(4\\) triangles",
      "\\(1\\) triangle"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We have a 2x2 grid where each square is split diagonally into 2 triangles, and we want to shade exactly 1/2 of the total area. Our strategy is to find the total number of triangles in the grid.",
        workingOut: "\\(\\text{Total Squares} = 2 \\times 2 = 4,\\; \\text{Total Triangles} = 4 \\times 2 = 8\\)",
        graphData: null
      },
      {
        explanation: "To represent 1/2 of the area, we calculate half of the total number of triangles (8) by multiplying the total by 1/2.",
        workingOut: "\\(\\dfrac{1}{2} \\times 8 = 4 \\;\\Rightarrow\\; \\text{Triangles to Shade} = 4\\)",
        graphData: null
      },
      {
        explanation: "Shading 4 triangles out of 8 yields 4/8, which simplifies directly to 1/2. This matches Option C (index 2).",
        workingOut: "\\(\\dfrac{4}{8} = \\dfrac{1}{2} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  }
];

(async () => {
  try {
    console.log('[Y7 Ch4A Correct] Starting clean-up of temporary documents...');
    
    // 1. Delete the temporary document IDs that were inserted in the previous step
    const tempIds = [
      'y7-4a-q01', 'y7-4a-q02', 'y7-4a-q03', 'y7-4a-q04', 'y7-4a-q05',
      'y7-4a-q06', 'y7-4a-q07', 'y7-4a-q08', 'y7-4a-q09', 'y7-4a-q10'
    ];
    for (const tid of tempIds) {
      const qSnap = await db.collection('questions').where('id', '==', tid).get();
      for (const doc of qSnap.docs) {
        await doc.ref.delete();
        console.log(`  Deleted temp doc with id: ${tid}`);
      }
    }

    // 2. Fetch all existing documents in topic y7-4a to match by question text
    console.log('\nFetching current y7-4a questions from Firestore...');
    const snap = await db.collection('questions').where('topicId', '==', 'y7-4a').get();
    const existingDocs = snap.docs.map(d => ({ docId: d.id, data: d.data() }));
    console.log(`Found ${existingDocs.length} questions in topic y7-4a.`);

    // 3. Match and update the correct original Q1 ~ Q10 documents
    let matchCount = 0;
    for (const target of targets) {
      // Find matching document by question text
      const matched = existingDocs.find(item => {
        const dbQ = item.data.question ? item.data.question.trim() : '';
        const targetQ = target.originalQuestion.trim();
        return dbQ === targetQ;
      });

      if (matched) {
        const ref = db.collection('questions').doc(matched.docId);
        
        // Construct the updated document, keeping existing metadata and fields
        const updatedDoc = {
          ...matched.data,
          type: "multiple_choice",
          question: target.question,
          opts: target.opts,
          a: target.a,
          solutionSteps: target.solutionSteps,
          topic: target.topic,
          isNew: true,
          // Remove old fields that are no longer needed
          solution: null,
          answer: null,
          gridConfig: null
        };
        
        await ref.set(updatedDoc);
        console.log(`  [UPDATED] Match found: "${target.originalQuestion.substring(0, 50)}..." -> Doc ID: ${matched.docId}`);
        matchCount++;
      } else {
        console.log(`  [NOT FOUND] No matching document for: "${target.originalQuestion.substring(0, 50)}..."`);
      }
    }

    console.log(`\nSuccessfully matched and updated ${matchCount} of 10 target questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
//
