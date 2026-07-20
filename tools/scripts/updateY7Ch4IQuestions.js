import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "FyCcqiyGFzlvk12gFuTF": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{5}{6} \\div \\dfrac{5}{12}\\)",
    opts: [
      "\\(\\dfrac{25}{72}\\)",
      "\\(2\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{2}\\)",
      "\\(4\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to divide 5/6 by 5/12. Our strategy is to multiply the first fraction by the reciprocal of the second fraction.",
        workingOut: "\\(\\dfrac{5}{6} \\div \\dfrac{5}{12}\\)",
        graphData: null
      },
      {
        explanation: "We find the reciprocal of 5/12, which is 12/5. We change the division sign to multiplication.",
        workingOut: "\\(\\dfrac{5}{6} \\times \\dfrac{12}{5}\\)",
        graphData: null
      },
      {
        explanation: "We notice the factor 5 appears in both the numerator and denominator, canceling out to 1. This leaves us with 12/6.",
        workingOut: "\\(\\dfrac{5 \\times 12}{6 \\times 5} = \\dfrac{12}{6}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 12/6 by dividing 12 by 6, which gives exactly the whole number 2.",
        workingOut: "\\(\\dfrac{12}{6} = 2\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "y6KJZUQi2XrF1mTq8JQ1": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(6 \\div \\dfrac{3}{5}\\)",
    opts: [
      "\\(\\dfrac{18}{5}\\)",
      "\\(\\dfrac{5}{18}\\)",
      "\\(5\\)",
      "\\(10\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to divide the integer 6 by the fraction 3/5. Our strategy is to multiply 6 by the reciprocal of 3/5.",
        workingOut: "\\(6 \\div \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 3/5 is 5/3. We rewrite the equation as 6 multiplied by 5/3.",
        workingOut: "\\(6 \\times \\dfrac{5}{3}\\)",
        graphData: null
      },
      {
        explanation: "We simplify by dividing 6 by 3, which equals 2. This leaves us with 2 multiplied by 5.",
        workingOut: "\\(\\dfrac{6}{1} \\times \\dfrac{5}{3} = 2 \\times 5\\)",
        graphData: null
      },
      {
        explanation: "We multiply 2 by 5 to find the final answer.",
        workingOut: "\\(10\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "5uwO2Hl2DFgnOXgt8kZ9": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{5} \\div 3\\)",
    opts: [
      "\\(\\dfrac{1}{5}\\)", // Correct (Index 0)
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{3}{15}\\)",
      "\\(1\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to divide 3/5 by the integer 3. Our strategy is to write 3 as 3/1 and multiply 3/5 by its reciprocal.",
        workingOut: "\\(\\dfrac{3}{5} \\div 3\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 3/1 is 1/3. We rewrite the division as multiplication by 1/3.",
        workingOut: "\\(\\dfrac{3}{5} \\times \\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "The factor 3 in the numerator and denominator cancel out, leaving 1/5.",
        workingOut: "\\(\\dfrac{3 \\times 1}{5 \\times 3} = \\dfrac{1}{5}\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "gPxvEOR8qSTmp4DcFOkE": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(4 \\div \\dfrac{1}{3}\\)",
    opts: [
      "\\(\\dfrac{4}{3}\\)",
      "\\(\\dfrac{3}{4}\\)",
      "\\(12\\)", // Correct (Index 2)
      "\\(6\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to divide 4 by 1/3. Our strategy is to multiply 4 by the reciprocal of 1/3.",
        workingOut: "\\(4 \\div \\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 1/3 is 3/1, which is simply 3. We multiply 4 by 3.",
        workingOut: "\\(4 \\times 3\\)",
        graphData: null
      },
      {
        explanation: "We perform the multiplication to find the final integer value.",
        workingOut: "\\(12\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "3H4AUMXhU63OX3H7cwMc": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{1}{3} \\div 3\\)",
    opts: [
      "\\(1\\)",
      "\\(\\dfrac{1}{9}\\)", // Correct (Index 1)
      "\\(9\\)",
      "\\(\\dfrac{3}{3}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to divide 1/3 by the integer 3. Our strategy is to multiply 1/3 by the reciprocal of 3.",
        workingOut: "\\(\\dfrac{1}{3} \\div 3\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 3 (or 3/1) is 1/3. We multiply 1/3 by 1/3.",
        workingOut: "\\(\\dfrac{1}{3} \\times \\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators (1 x 1 = 1) and denominators (3 x 3 = 9) to get the final fraction.",
        workingOut: "\\(\\dfrac{1 \\times 1}{3 \\times 3} = \\dfrac{1}{9}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "FyZqMAqTeAUf05CMMkJu": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{1}{3} \\div 13\\)",
    opts: [
      "\\(\\dfrac{1}{39}\\)", // Correct (Index 0)
      "\\(\\dfrac{13}{3}\\)",
      "\\(39\\)",
      "\\(\\dfrac{13}{39}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to divide 1/3 by the integer 13. Our strategy is to multiply 1/3 by the reciprocal of 13.",
        workingOut: "\\(\\dfrac{1}{3} \\div 13\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 13 is 1/13. We multiply 1/3 by 1/13.",
        workingOut: "\\(\\dfrac{1}{3} \\times \\dfrac{1}{13}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators and denominators to find the final result.",
        workingOut: "\\(\\dfrac{1 \\times 1}{3 \\times 13} = \\dfrac{1}{39}\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "hr8LPLuJEOX1WHPlufqE": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{5} \\div \\dfrac{5}{6}\\)",
    opts: [
      "\\(\\dfrac{18}{30}\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{25}{18}\\)",
      "\\(\\dfrac{18}{25}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to divide 3/5 by 5/6. Our strategy is to multiply 3/5 by the reciprocal of 5/6.",
        workingOut: "\\(\\dfrac{3}{5} \\div \\dfrac{5}{6}\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 5/6 is 6/5. We rewrite the equation as 3/5 multiplied by 6/5.",
        workingOut: "\\(\\dfrac{3}{5} \\times \\dfrac{6}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators (3 x 6 = 18) and the denominators (5 x 5 = 25).",
        workingOut: "\\(\\dfrac{3 \\times 6}{5 \\times 5} = \\dfrac{18}{25}\\)",
        graphData: null
      },
      {
        explanation: "Since 18 and 25 share no common factors, the fraction 18/25 is in simplest form.",
        workingOut: "\\(\\dfrac{18}{25} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "1SWNgaRobtYXjdQ9GaOO": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{4} \\div \\dfrac{1}{4}\\)",
    opts: [
      "\\(\\dfrac{3}{16}\\)",
      "\\(\\dfrac{12}{4}\\)",
      "\\(3\\)", // Correct (Index 2)
      "\\(\\dfrac{1}{3}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to divide 3/4 by 1/4. Our strategy is to multiply 3/4 by the reciprocal of 1/4.",
        workingOut: "\\(\\dfrac{3}{4} \\div \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 1/4 is 4/1, which is simply 4. We rewrite the division as multiplication by 4.",
        workingOut: "\\(\\dfrac{3}{4} \\times 4\\)",
        graphData: null
      },
      {
        explanation: "The factor 4 in the numerator and denominator cancel out to 1, leaving 3.",
        workingOut: "\\(\\dfrac{3}{1} \\times \\dfrac{1}{1} = 3\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "IH1vDp6vEw4OZDUI8HoT": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{8} \\div \\dfrac{8}{5}\\)",
    opts: [
      "\\(\\dfrac{3}{5}\\)",
      "\\(\\dfrac{15}{64}\\)", // Correct (Index 1)
      "\\(\\dfrac{64}{15}\\)",
      "\\(\\dfrac{24}{40}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to divide 3/8 by 8/5. Our strategy is to multiply 3/8 by the reciprocal of 8/5.",
        workingOut: "\\(\\dfrac{3}{8} \\div \\dfrac{8}{5}\\)",
        graphData: null
      },
      {
        explanation: "The reciprocal of 8/5 is 5/8. We rewrite the division as 3/8 multiplied by 5/8.",
        workingOut: "\\(\\dfrac{3}{8} \\times \\dfrac{5}{8}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators (3 x 5 = 15) and denominators (8 x 8 = 64) to find the result.",
        workingOut: "\\(\\dfrac{3 \\times 5}{8 \\times 8} = \\dfrac{15}{64}\\)",
        graphData: null
      },
      {
        explanation: "Since 15 and 64 share no common factors, the fraction 15/64 is in simplest form.",
        workingOut: "\\(\\dfrac{15}{64} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4I Questions] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4I.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
