import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "Oal6j6oP2E150sg9kLci": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(2\\dfrac{1}{4} \\times \\dfrac{2}{3}\\)",
    opts: [
      "\\(1\\dfrac{1}{2}\\)", // Correct (Index 0) - wait, let's calculate: 9/4 * 2/3 = 18/12 = 3/2 = 1 1/2. Correct option index is 0.
      "\\(\\dfrac{3}{2}\\)",
      "\\(2\\dfrac{1}{6}\\)",
      "\\(1\\dfrac{1}{3}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to multiply 2 and 1/4 by 2/3. Our strategy is to convert the mixed numeral 2 and 1/4 into an improper fraction first.",
        workingOut: "\\(2\\dfrac{1}{4} \\times \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "We convert 2 and 1/4 to an improper fraction: (2 x 4 + 1)/4 = 9/4.",
        workingOut: "\\(2\\dfrac{1}{4} = \\dfrac{9}{4}\\)",
        graphData: null
      },
      {
        explanation: "Now we multiply 9/4 by 2/3. We simplify common factors: 9 and 3 divide by 3 (leaving 3 and 1), and 2 and 4 divide by 2 (leaving 1 and 2).",
        workingOut: "\\(\\dfrac{9}{4} \\times \\dfrac{2}{3} = \\dfrac{3}{2} \\times \\dfrac{1}{1} = \\dfrac{3}{2}\\)",
        graphData: null
      },
      {
        explanation: "We convert the improper fraction 3/2 back to a mixed numeral. Dividing 3 by 2 gives 1 with a remainder of 1, yielding 1 and 1/2.",
        workingOut: "\\(\\dfrac{3}{2} = 1\\dfrac{1}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "VyUHo6sv0r1cYsUdFhaM": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(1\\dfrac{3}{5} \\times 2\\dfrac{1}{12}\\)",
    opts: [
      "\\(2\\dfrac{3}{60}\\)",
      "\\(2\\dfrac{1}{5}\\)",
      "\\(3\\dfrac{1}{12}\\)",
      "\\(3\\dfrac{1}{3}\\)" // Correct (Index 3) - 8/5 * 25/12 = (8*25)/(5*12) = 200/60 = 20/6 = 10/3 = 3 1/3
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to multiply 1 and 3/5 by 2 and 1/12. Our strategy is to convert both mixed numerals into improper fractions.",
        workingOut: "\\(1\\dfrac{3}{5} \\times 2\\dfrac{1}{12}\\)",
        graphData: null
      },
      {
        explanation: "We convert 1 and 3/5 to 8/5, and 2 and 1/12 to 25/12.",
        workingOut: "\\(1\\dfrac{3}{5} = \\dfrac{8}{5}\\); \\;2\\dfrac{1}{12} = \\dfrac{25}{12}\\)",
        graphData: null
      },
      {
        explanation: "Now we multiply 8/5 by 25/12. We cancel common factors: 25 and 5 divide by 5 (leaving 5 and 1), and 8 and 12 divide by 4 (leaving 2 and 3).",
        workingOut: "\\(\\dfrac{8}{5} \\times \\dfrac{25}{12} = \\dfrac{2}{1} \\times \\dfrac{5}{3} = \\dfrac{10}{3}\\)",
        graphData: null
      },
      {
        explanation: "We convert the improper fraction 10/3 back to a mixed numeral. 3 goes into 10 exactly 3 times with a remainder of 1, resulting in 3 and 1/3.",
        workingOut: "\\(\\dfrac{10}{3} = 3\\dfrac{1}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "j2k2QhPP7P2q9P4r72VP": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(2\\dfrac{2}{5} \\times 1\\dfrac{7}{8}\\)",
    opts: [
      "\\(4\\dfrac{1}{2}\\)", // Correct (Index 0) - 12/5 * 15/8 = (12*15)/(5*8) = 180/40 = 18/4 = 9/2 = 4 1/2
      "\\(2\\dfrac{14}{40}\\)",
      "\\(3\\dfrac{1}{2}\\)",
      "\\(4\\dfrac{3}{8}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to multiply 2 and 2/5 by 1 and 7/8. Our strategy is to convert both mixed numerals to improper fractions first.",
        workingOut: "\\(2\\dfrac{2}{5} \\times 1\\dfrac{7}{8}\\)",
        graphData: null
      },
      {
        explanation: "We convert 2 and 2/5 to 12/5, and 1 and 7/8 to 15/8.",
        workingOut: "\\(2\\dfrac{2}{5} = \\dfrac{12}{5}\\); \\;1\\dfrac{7}{8} = \\dfrac{15}{8}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 12/5 by 15/8. We cancel common factors: 15 and 5 divide by 5 (leaving 3 and 1), and 12 and 8 divide by 4 (leaving 3 and 2).",
        workingOut: "\\(\\dfrac{12}{5} \\times \\dfrac{15}{8} = \\dfrac{3}{1} \\times \\dfrac{3}{2} = \\dfrac{9}{2}\\)",
        graphData: null
      },
      {
        explanation: "We convert the improper fraction 9/2 back to a mixed numeral. Dividing 9 by 2 gives 4 with a remainder of 1, resulting in 4 and 1/2.",
        workingOut: "\\(\\dfrac{9}{2} = 4\\dfrac{1}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "Q7rIuBVGzSj7ZVWdymNu": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(1\\dfrac{1}{4} \\div \\dfrac{5}{8}\\)",
    opts: [
      "\\(\\dfrac{25}{32}\\)",
      "\\(1\\dfrac{5}{32}\\)",
      "\\(2\\)", // Correct (Index 2) - 5/4 * 8/5 = 40/20 = 2
      "\\(\\dfrac{1}{2}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to divide 1 and 1/4 by 5/8. Our strategy is to first convert the mixed numeral 1 and 1/4 into an improper fraction.",
        workingOut: "\\(1\\dfrac{1}{4} \\div \\dfrac{5}{8}\\)",
        graphData: null
      },
      {
        explanation: "We convert 1 and 1/4 to the improper fraction 5/4.",
        workingOut: "\\(1\\dfrac{1}{4} = \\dfrac{5}{4}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 5/4 by the reciprocal of 5/8, which is 8/5.",
        workingOut: "\\(\\dfrac{5}{4} \\times \\dfrac{8}{5}\\)",
        graphData: null
      },
      {
        explanation: "We notice that the factor 5 appears in both the numerator and denominator, canceling out to 1. This leaves 8/4, which simplifies to the integer 2.",
        workingOut: "\\(\\dfrac{5 \\times 8}{4 \\times 5} = \\dfrac{8}{4} = 2\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "9WhE6gdh5vwMOiAKSJPI": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(1\\dfrac{1}{3} \\div 2\\dfrac{2}{5}\\)",
    opts: [
      "\\(2\\dfrac{2}{15}\\)",
      "\\(\\dfrac{5}{9}\\)", // Correct (Index 1) - 4/3 div 12/5 = 4/3 * 5/12 = 20/36 = 5/9
      "\\(\\dfrac{9}{5}\\)",
      "\\(1\\dfrac{4}{5}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to divide 1 and 1/3 by 2 and 2/5. Our strategy is to convert both mixed numerals into improper fractions.",
        workingOut: "\\(1\\dfrac{1}{3} \\div 2\\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "We convert 1 and 1/3 to 4/3, and 2 and 2/5 to 12/5.",
        workingOut: "\\(1\\dfrac{1}{3} = \\dfrac{4}{3}\\); \\;2\\dfrac{2}{5} = \\dfrac{12}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 4/3 by the reciprocal of 12/5, which is 5/12.",
        workingOut: "\\(\\dfrac{4}{3} \\times \\dfrac{5}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify the factors: 4 and 12 divide by 4 (leaving 1 and 3). We multiply the remaining parts to get 5/9.",
        workingOut: "\\(\\dfrac{4 \\times 5}{3 \\times 12} = \\dfrac{1 \\times 5}{3 \\times 3} = \\dfrac{5}{9}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "uwh1erZNgeBmGLWIF6Uv": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(2\\dfrac{1}{4} \\div 1\\dfrac{1}{8}\\)",
    opts: [
      "\\(2\\dfrac{1}{32}\\)",
      "\\(2\\)", // Correct (Index 1) - 9/4 div 9/8 = 9/4 * 8/9 = 72/36 = 2
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\dfrac{1}{2}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to divide 2 and 1/4 by 1 and 1/8. Our strategy is to convert both mixed numerals into improper fractions.",
        workingOut: "\\(2\\dfrac{1}{4} \\div 1\\dfrac{1}{8}\\)",
        graphData: null
      },
      {
        explanation: "We convert 2 and 1/4 to 9/4, and 1 and 1/8 to 9/8.",
        workingOut: "\\(2\\dfrac{1}{4} = \\dfrac{9}{4}\\); \\;1\\dfrac{1}{8} = \\dfrac{9}{8}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 9/4 by the reciprocal of 9/8, which is 8/9.",
        workingOut: "\\(\\dfrac{9}{4} \\times \\dfrac{8}{9}\\)",
        graphData: null
      },
      {
        explanation: "The factor 9 in the numerator and denominator cancel out to 1. This leaves 8/4, which simplifies to the whole number 2.",
        workingOut: "\\(\\dfrac{9 \\times 8}{4 \\times 9} = \\dfrac{8}{4} = 2\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4J Questions] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4J.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
