import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q2
  "MFQPirScLfUEAW1QxXCy": {
    topic: "Comparison of fractions",
    question: "Which fraction is strictly between \\(\\dfrac{1}{3}\\) and \\(\\dfrac{2}{3}\\)?",
    opts: [
      "\\(\\dfrac{1}{2}\\)", // Correct (Index 0)
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{4}{5}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find which of the options lies strictly between 1/3 and 2/3. Our strategy is to convert the fractions to a common denominator to make comparison straightforward.",
        workingOut: "\\(\\text{Given interval: } \\left( \\dfrac{1}{3},\\; \\dfrac{2}{3} \\right)\\)",
        graphData: null
      },
      {
        explanation: "We choose 6 as the common denominator. Converting 1/3 and 2/3 gives us 2/6 and 4/6 respectively.",
        workingOut: "\\(\\dfrac{1}{3} = \\dfrac{2}{6}\\); \\;\\dfrac{2}{3} = \\dfrac{4}{6}\\)",
        graphData: null
      },
      {
        explanation: "We test the first option, 1/2. Converting 1/2 to have a denominator of 6 gives us 3/6.",
        workingOut: "\\(\\dfrac{1}{2} = \\dfrac{3}{6}\\)",
        graphData: null
      },
      {
        explanation: "Since 2/6 < 3/6 < 4/6, the fraction 3/6 (which is 1/2) lies strictly between 1/3 and 2/3. We verify that other options (like 1/4 or 3/4) fall outside this range.",
        workingOut: "\\(\\dfrac{2}{6} < \\dfrac{3}{6} < \\dfrac{4}{6} \\;\\Rightarrow\\; \\dfrac{1}{3} < \\dfrac{1}{2} < \\dfrac{2}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "ZOzOKM9DjEJPArOnKQpY": {
    topic: "Comparison of fractions",
    question: "Which fraction is equivalent to \\(\\dfrac{2}{3}\\), but has a denominator strictly greater than \\(60\\)?",
    opts: [
      "\\(\\dfrac{40}{60}\\)",
      "\\(\\dfrac{20}{30}\\)",
      "\\(\\dfrac{38}{63}\\)",
      "\\(\\dfrac{42}{63}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find a fraction equivalent to 2/3 with a denominator larger than 60. Our strategy is to evaluate each option by checking both equivalence to 2/3 and the size of the denominator.",
        workingOut: "\\(\\text{Target Fraction} = \\dfrac{2}{3},\\; \\text{Denominator} > 60\\)",
        graphData: null
      },
      {
        explanation: "We check the denominator condition first. Option A has 60, which is not strictly greater than 60. Option B has 30, which is also too small. Options C and D both have 63, which is greater than 60.",
        workingOut: "\\(63 > 60 \\;\\Rightarrow\\; \\text{Denominator condition met for 63}\\)",
        graphData: null
      },
      {
        explanation: "Next, we check which of the remaining options is equivalent to 2/3. For a denominator of 63, the equivalent numerator is found by multiplying 2 by the same scale factor (21) used for the denominator.",
        workingOut: "\\(\\dfrac{2 \\times 21}{3 \\times 21} = \\dfrac{42}{63}\\)",
        graphData: null
      },
      {
        explanation: "We compare this to our choices and confirm that 42/63 simplifies directly to 2/3, whereas 38/63 does not. Thus, the correct fraction is 42/63.",
        workingOut: "\\(\\dfrac{42 \\div 21}{63 \\div 21} = \\dfrac{2}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "Bs0EZRUmhEsk4mrgIGBy": {
    topic: "Comparison of fractions",
    question: "Which fraction lies strictly between the integers \\(4\\) and \\(5\\)?",
    opts: [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{23}{5}\\)", // Correct (Index 1)
      "\\(\\dfrac{27}{5}\\)",
      "\\(\\dfrac{19}{4}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to find which fraction lies strictly between 4 and 5. Our strategy is to convert each improper fraction option into a mixed numeral to easily identify its integer bounds.",
        workingOut: "\\(\\text{Target Interval: } (4,\\; 5)\\)",
        graphData: null
      },
      {
        explanation: "We evaluate the target option, 23/5. Dividing 23 by 5 yields 4 with a remainder of 3, which can be written as the mixed number 4 and 3/5.",
        workingOut: "\\(\\dfrac{23}{5} = 4\\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "We check the bounds for 4 and 3/5. Since 4 and 3/5 is greater than 4 but less than 5, it lies strictly between 4 and 5. Other options evaluate to different integer bounds (e.g., 12/5 = 2 and 2/5; 27/5 = 5 and 2/5).",
        workingOut: "\\(4 < 4\\dfrac{3}{5} < 5 \\;\\Rightarrow\\; 4 < \\dfrac{23}{5} < 5\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "u6erMuLpP3tYX8jhAfHo": {
    topic: "Comparison of fractions",
    question: "Which fraction is larger than \\(\\dfrac{3}{5}\\) but smaller than \\(\\dfrac{7}{8}\\)?",
    opts: [
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{9}{10}\\)",
      "\\(\\dfrac{3}{4}\\)", // Correct (Index 2)
      "\\(\\dfrac{2}{5}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are looking for a fraction strictly between 3/5 and 7/8. Our strategy is to convert the boundary fractions into decimals to make comparison easier.",
        workingOut: "\\(\\text{Boundaries: } \\dfrac{3}{5} < x < \\dfrac{7}{8}\\)",
        graphData: null
      },
      {
        explanation: "We calculate the decimal equivalents: 3/5 equals 0.60, and 7/8 equals 0.875. So we need a fraction whose decimal value lies in the interval (0.60, 0.875).",
        workingOut: "\\(\\dfrac{3}{5} = 0.60\\); \\;\\dfrac{7}{8} = 0.875\\)",
        graphData: null
      },
      {
        explanation: "We test the decimal values of the options. 1/2 is 0.50 (too small). 9/10 is 0.90 (too large). 3/4 is 0.75, which lies strictly between 0.60 and 0.875.",
        workingOut: "\\(\\dfrac{3}{4} = 0.75 \\;\\Rightarrow\\; 0.60 < 0.75 < 0.875\\)",
        graphData: null
      },
      {
        explanation: "Since 0.75 is within our bounds, the fraction 3/4 is larger than 3/5 but smaller than 7/8.",
        workingOut: "\\(\\dfrac{3}{5} < \\dfrac{3}{4} < \\dfrac{7}{8}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "4q74JWAFFPxjIzrsYIip": {
    topic: "Comparison of fractions",
    question: "Which mixed number is larger than \\(3\\), but closer to \\(3\\) than \\(2\\dfrac{9}{10}\\)?",
    opts: [
      "\\(3\\dfrac{1}{12}\\)", // Correct (Index 0)
      "\\(3\\dfrac{1}{4}\\)",
      "\\(3\\dfrac{1}{5}\\)",
      "\\(3\\dfrac{1}{2}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find a mixed number larger than 3 that is closer to 3 than 2 and 9/10 is. Our strategy is to first determine the distance between 2 and 9/10 and 3.",
        workingOut: "\\(\\text{Target: } x > 3,\\; \\text{Distance}(x, 3) < \\text{Distance}\\left(2\\dfrac{9}{10},\\; 3\\right)\\)",
        graphData: null
      },
      {
        explanation: "We calculate the distance from 2 and 9/10 (2.90) to 3, which is 0.10. Therefore, our target mixed number x must be larger than 3, and its fractional part must be strictly less than 0.10.",
        workingOut: "\\(3 - 2\\dfrac{9}{10} = \\dfrac{1}{10} = 0.10\\)",
        graphData: null
      },
      {
        explanation: "We analyze the fractional parts of the options: 1/12 is approximately 0.0833, 1/4 is 0.25, 1/5 is 0.20, and 1/2 is 0.50. Only 1/12 is strictly less than 1/10.",
        workingOut: "\\(\\dfrac{1}{12} \\approx 0.0833 < 0.10\\)",
        graphData: null
      },
      {
        explanation: "Since 1/12 is smaller than 1/10, the mixed number 3 and 1/12 is closer to 3 than 2 and 9/10. It is also clearly larger than 3.",
        workingOut: "\\(3\\dfrac{1}{12} > 3 \\text{ and distance is } 0.0833 < 0.10\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "0Z92m1j9T7cF5QYuNjtt": {
    topic: "Comparison of fractions",
    question: "Order the unit fractions \\(\\dfrac{1}{3},\\; \\dfrac{1}{8},\\; \\dfrac{1}{5},\\; \\dfrac{1}{12},\\; \\dfrac{1}{2}\\) from smallest to largest.",
    opts: [
      "\\(\\dfrac{1}{12},\\; \\dfrac{1}{5},\\; \\dfrac{1}{8},\\; \\dfrac{1}{3},\\; \\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{2},\\; \\dfrac{1}{3},\\; \\dfrac{1}{5},\\; \\dfrac{1}{8},\\; \\dfrac{1}{12}\\)",
      "\\(\\dfrac{1}{12},\\; \\dfrac{1}{8},\\; \\dfrac{1}{3},\\; \\dfrac{1}{5},\\; \\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{12},\\; \\dfrac{1}{8},\\; \\dfrac{1}{5},\\; \\dfrac{1}{3},\\; \\dfrac{1}{2}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to arrange five unit fractions in ascending order. Our strategy is to recall that for fractions with identical numerators, the fraction with a larger denominator represents a smaller value.",
        workingOut: "\\(\\text{Fractions: } \\dfrac{1}{3},\\; \\dfrac{1}{8},\\; \\dfrac{1}{5},\\; \\dfrac{1}{12},\\; \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We sort the denominators from largest to smallest. The denominators are 12, 8, 5, 3, and 2.",
        workingOut: "\\(\\text{Sorted Denominators: } 12 > 8 > 5 > 3 > 2\\)",
        graphData: null
      },
      {
        explanation: "Since a larger denominator means a smaller unit fraction, sorting the denominators in descending order gives the fractions in ascending order: 1/12, 1/8, 1/5, 1/3, 1/2.",
        workingOut: "\\(\\dfrac{1}{12} < \\dfrac{1}{8} < \\dfrac{1}{5} < \\dfrac{1}{3} < \\dfrac{1}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "8FDHNcWlMs3JPOi5rgIk": {
    topic: "Comparison of fractions",
    question: "Order these fractions from smallest to largest: \\(\\dfrac{2}{3},\\; \\dfrac{2}{9},\\; \\dfrac{1}{9},\\; \\dfrac{1}{3},\\; \\dfrac{10}{9}\\).",
    opts: [
      "\\(\\dfrac{1}{9},\\; \\dfrac{2}{9},\\; \\dfrac{2}{3},\\; \\dfrac{1}{3},\\; \\dfrac{10}{9}\\)",
      "\\(\\dfrac{1}{9},\\; \\dfrac{2}{9},\\; \\dfrac{1}{3},\\; \\dfrac{2}{3},\\; \\dfrac{10}{9}\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{9},\\; \\dfrac{1}{3},\\; \\dfrac{2}{9},\\; \\dfrac{2}{3},\\; \\dfrac{10}{9}\\)",
      "\\(\\dfrac{10}{9},\\; \\dfrac{2}{3},\\; \\dfrac{1}{3},\\; \\dfrac{2}{9},\\; \\dfrac{1}{9}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to order five fractions from smallest to largest. Our strategy is to convert all fractions to a common denominator of 9.",
        workingOut: "\\(\\text{Given: } \\dfrac{2}{3},\\; \\dfrac{2}{9},\\; \\dfrac{1}{9},\\; \\dfrac{1}{3},\\; \\dfrac{10}{9}\\)",
        graphData: null
      },
      {
        explanation: "We convert 2/3 and 1/3 to have a denominator of 9 by multiplying their numerators and denominators by 3. This gives us 6/9 and 3/9.",
        workingOut: "\\\(\\dfrac{2}{3} = \\dfrac{6}{9}\\); \\;\\dfrac{1}{3} = \\dfrac{3}{9}\\)",
        graphData: null
      },
      {
        explanation: "Now we compare the numerators: 1, 2, 3, 6, and 10. The ascending order of the numerators is 1 < 2 < 3 < 6 < 10.",
        workingOut: "\\(1 < 2 < 3 < 6 < 10 \\;\\Rightarrow\\; \\dfrac{1}{9} < \\dfrac{2}{9} < \\dfrac{3}{9} < \\dfrac{6}{9} < \\dfrac{10}{9}\\)",
        graphData: null
      },
      {
        explanation: "Replacing the converted fractions back with their original forms gives the ordered list: 1/9, 2/9, 1/3, 2/3, 10/9.",
        workingOut: "\\(\\dfrac{1}{9},\\; \\dfrac{2}{9},\\; \\dfrac{1}{3},\\; \\dfrac{2}{3},\\; \\dfrac{10}{9}\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "hVhaqApjUjz4gdqLM9Ou": {
    topic: "Comparison of fractions",
    question: "Order these fractions from smallest to largest: \\(\\dfrac{1}{4},\\; \\dfrac{3}{8},\\; \\dfrac{5}{8},\\; \\dfrac{2}{4},\\; \\dfrac{3}{4}\\).",
    opts: [
      "\\(\\dfrac{1}{4},\\; \\dfrac{2}{4},\\; \\dfrac{3}{8},\\; \\dfrac{5}{8},\\; \\dfrac{3}{4}\\)",
      "\\(\\dfrac{3}{4},\\; \\dfrac{2}{4},\\; \\dfrac{5}{8},\\; \\dfrac{3}{8},\\; \\dfrac{1}{4}\\)",
      "\\(\\dfrac{1}{4},\\; \\dfrac{3}{8},\\; \\dfrac{2}{4},\\; \\dfrac{5}{8},\\; \\dfrac{3}{4}\\)", // Correct (Index 2)
      "\\(\\dfrac{1}{4},\\; \\dfrac{3}{8},\\; \\dfrac{2}{4},\\; \\dfrac{3}{4},\\; \\dfrac{5}{8}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to order five fractions with denominators 4 and 8. Our strategy is to convert all fractions to a common denominator of 8.",
        workingOut: "\\(\\text{Given: } \\dfrac{1}{4},\\; \\dfrac{3}{8},\\; \\dfrac{5}{8},\\; \\dfrac{2}{4},\\; \\dfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "We convert the fractions with denominator 4. 1/4 becomes 2/8, 2/4 becomes 4/8, and 3/4 becomes 6/8.",
        workingOut: "\\(\\dfrac{1}{4} = \\dfrac{2}{8}\\); \\;\\dfrac{2}{4} = \\dfrac{4}{8}\\); \\;\\dfrac{3}{4} = \\dfrac{6}{8}\\)",
        graphData: null
      },
      {
        explanation: "We compare all numerators over the common denominator 8. The values are 2/8, 3/8, 4/8, 5/8, and 6/8.",
        workingOut: "\\(\\dfrac{2}{8} < \\dfrac{3}{8} < \\dfrac{4}{8} < \\dfrac{5}{8} < \\dfrac{6}{8}\\)",
        graphData: null
      },
      {
        explanation: "Substituting the original forms back gives the ordered sequence: 1/4, 3/8, 2/4, 5/8, 3/4.",
        workingOut: "\\(\\dfrac{1}{4},\\; \\dfrac{3}{8},\\; \\dfrac{2}{4},\\; \\dfrac{5}{8},\\; \\dfrac{3}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "KJKL4PaAMBMvq8uxZnBb": {
    topic: "Comparison of fractions",
    question: "Order these fractions from smallest to largest: \\(\\dfrac{1}{20},\\; \\dfrac{14}{15},\\; \\dfrac{10}{20},\\; \\dfrac{15}{16},\\; \\dfrac{3}{12}\\).",
    opts: [
      "\\(\\dfrac{1}{20},\\; \\dfrac{3}{12},\\; \\dfrac{10}{20},\\; \\dfrac{14}{15},\\; \\dfrac{15}{16}\\)", // Correct (Index 0)
      "\\(\\dfrac{1}{20},\\; \\dfrac{10}{20},\\; \\dfrac{3}{12},\\; \\dfrac{14}{15},\\; \\dfrac{15}{16}\\)",
      "\\(\\dfrac{3}{12},\\; \\dfrac{1}{20},\\; \\dfrac{10}{20},\\; \\dfrac{15}{16},\\; \\dfrac{14}{15}\\)",
      "\\(\\dfrac{15}{16},\\; \\dfrac{14}{15},\\; \\dfrac{10}{20},\\; \\dfrac{3}{12},\\; \\dfrac{1}{20}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to sort five fractions with different denominators. Our strategy is to simplify each fraction first and compare their relative sizes to common benchmarks like 0, 1/2, and 1.",
        workingOut: "\\(\\text{Given: } \\dfrac{1}{20},\\; \\dfrac{14}{15},\\; \\dfrac{10}{20},\\; \\dfrac{15}{16},\\; \\dfrac{3}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify the fractions where possible: 10/20 simplifies to 1/2, and 3/12 simplifies to 1/4.",
        workingOut: "\\(\\dfrac{10}{20} = \\dfrac{1}{2}\\); \\;\\dfrac{3}{12} = \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We compare 1/20 (very close to 0), 1/4 (0.25), and 1/2 (0.50). This gives us: 1/20 < 1/4 < 1/2.",
        workingOut: "\\(\\dfrac{1}{20} < \\dfrac{1}{4} < \\dfrac{1}{2} \\;\\Rightarrow\\; \\dfrac{1}{20} < \\dfrac{3}{12} < \\dfrac{10}{20}\\)",
        graphData: null
      },
      {
        explanation: "Now we compare the remaining fractions: 14/15 and 15/16. Both are close to 1. The distance to 1 for 14/15 is 1/15, and for 15/16 it is 1/16. Since 1/16 < 1/15, 15/16 is closer to 1, meaning 14/15 < 15/16. Both are larger than 1/2.",
        workingOut: "\\(\\dfrac{10}{20} < \\dfrac{14}{15} < \\dfrac{15}{16}\\)",
        graphData: null
      },
      {
        explanation: "Putting all fractions in order gives: 1/20, 3/12, 10/20, 14/15, 15/16.",
        workingOut: "\\(\\dfrac{1}{20},\\; \\dfrac{3}{12},\\; \\dfrac{10}{20},\\; \\dfrac{14}{15},\\; \\dfrac{15}{16}\\)",
        graphData: null
      }
    ]
  },
  // Q11
  "QjMm0UBHcRHuvWiV5jG5": {
    topic: "Comparison of fractions",
    question: "Order these fractions from smallest to largest: \\(\\dfrac{5}{6},\\; \\dfrac{3}{4},\\; \\dfrac{4}{5},\\; \\dfrac{2}{3},\\; \\dfrac{2}{9}\\).",
    opts: [
      "\\(\\dfrac{2}{9},\\; \\dfrac{2}{3},\\; \\dfrac{4}{5},\\; \\dfrac{3}{4},\\; \\dfrac{5}{6}\\)",
      "\\(\\dfrac{2}{9},\\; \\dfrac{2}{3},\\; \\dfrac{3}{4},\\; \\dfrac{4}{5},\\; \\dfrac{5}{6}\\)", // Correct (Index 1)
      "\\(\\dfrac{2}{9},\\; \\dfrac{3}{4},\\; \\dfrac{2}{3},\\; \\dfrac{4}{5},\\; \\dfrac{5}{6}\\)",
      "\\(\\dfrac{5}{6},\\; \\dfrac{4}{5},\\; \\dfrac{3}{4},\\; \\dfrac{2}{3},\\; \\dfrac{2}{9}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to order five fractions from smallest to largest. Our strategy is to convert them to a common denominator or compare their decimal approximations.",
        workingOut: "\\(\\text{Given: } \\dfrac{5}{6},\\; \\dfrac{3}{4},\\; \\dfrac{4}{5},\\; \\dfrac{2}{3},\\; \\dfrac{2}{9}\\)",
        graphData: null
      },
      {
        explanation: "We convert each fraction to decimals. 2/9 is approximately 0.222, 2/3 is approximately 0.667, 3/4 is 0.750, 4/5 is 0.800, and 5/6 is approximately 0.833.",
        workingOut: "\\(\\dfrac{2}{9} \\approx 0.222\\); \\;\\dfrac{2}{3} \\approx 0.667\\); \\;\\dfrac{3}{4} = 0.750\\); \\;\\dfrac{4}{5} = 0.800\\); \\;\\dfrac{5}{6} \\approx 0.833\\)",
        graphData: null
      },
      {
        explanation: "We compare the decimal values in ascending order: 0.222 < 0.667 < 0.750 < 0.800 < 0.833.",
        workingOut: "\\(\\dfrac{2}{9} < \\dfrac{2}{3} < \\dfrac{3}{4} < \\dfrac{4}{5} < \\dfrac{5}{6}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4D Questions] Updating target documents directly by ID...');
    let updatedCount = 0;

    for (const [docId, updateData] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();

      if (doc.exists) {
        const currentData = doc.data();

        const updatedDoc = {
          ...currentData,
          type: "multiple_choice",
          question: updateData.question,
          opts: updateData.opts,
          options: updateData.opts, // SYNC options and opts (Rule 11-1)
          a: updateData.a,
          answer: updateData.a,     // SYNC a and answer (Rule 11-1)
          solutionSteps: updateData.solutionSteps,
          topic: updateData.topic,
          isNew: true,
          solution: null // Clean legacy field
        };

        // Self-Verification Check (Rule 11-3)
        const expectedIndex = updateData.a;
        if (updateData.opts[expectedIndex] !== updatedDoc.options[expectedIndex]) {
          throw new Error(`Self-Verification Failed: Options/Opts mismatch for doc ${docId}`);
        }
        
        // Ensure no Index reference in the last step workingOut
        const lastStepWorkingOut = updateData.solutionSteps[updateData.solutionSteps.length - 1].workingOut;
        if (lastStepWorkingOut.toLowerCase().includes("index") || lastStepWorkingOut.toLowerCase().includes("option")) {
          throw new Error(`Self-Verification Failed: Last step workingOut contains forbidden index references in doc ${docId}`);
        }

        await ref.set(updatedDoc);
        console.log(`  [UPDATED] Doc ID: ${docId} -> Synced successfully.`);
        updatedCount++;
      } else {
        console.log(`  [WARNING] Doc ID: ${docId} not found in Firestore.`);
      }
    }

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4D.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
