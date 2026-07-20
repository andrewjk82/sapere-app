import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q11
  "3QdpGhg3TAtOxEFNsBhF": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{8} \\times \\dfrac{8}{5}\\)",
    opts: [
      "\\(\\dfrac{24}{40}\\)",
      "\\(\\dfrac{8}{5}\\)",
      "\\(\\dfrac{3}{5}\\)", // Correct (Index 2)
      "\\(\\dfrac{3}{8}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to multiply 3/8 by 8/5. Our strategy is to cancel out the common factor 8 in both the numerator and the denominator before multiplying.",
        workingOut: "\\(\\dfrac{3}{8} \\times \\dfrac{8}{5}\\)",
        graphData: null
      },
      {
        explanation: "The factor 8 cancels out to 1 in both positions. This leaves us with a simplified expression of 3/1 multiplied by 1/5.",
        workingOut: "\\(\\dfrac{3}{1} \\times \\dfrac{1}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the remaining numerators and denominators to get the simplified result.",
        workingOut: "\\(\\dfrac{3 \\times 1}{1 \\times 5} = \\dfrac{3}{5}\\)",
        graphData: null
      }
    ]
  },
  // Q12
  "3sqUoY9dNauAMa79FYSc": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{4} \\times \\dfrac{1}{4}\\)",
    opts: [
      "\\(\\dfrac{3}{16}\\)", // Correct (Index 0)
      "\\(\\dfrac{3}{8}\\)",
      "\\(\\dfrac{4}{8}\\)",
      "\\(\\dfrac{1}{4}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to multiply 3/4 by 1/4. Our strategy is to multiply the numerators together and the denominators together.",
        workingOut: "\\(\\dfrac{3}{4} \\times \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators (3 x 1 = 3) and the denominators (4 x 4 = 16).",
        workingOut: "\\(\\dfrac{3 \\times 1}{4 \\times 4} = \\dfrac{3}{16}\\)",
        graphData: null
      },
      {
        explanation: "Since 3 is prime and does not divide 16, the fraction 3/16 is in its simplest form.",
        workingOut: "\\(\\dfrac{3}{16} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q13
  "VuJ1TTVZiALRTdy5RNzT": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{5} \\times \\dfrac{5}{6}\\)",
    opts: [
      "\\(\\dfrac{15}{30}\\)",
      "\\(\\dfrac{1}{2}\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{3}{6}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to multiply 3/5 by 5/6. Our strategy is to cross-cancel common factors to make calculation simpler.",
        workingOut: "\\(\\dfrac{3}{5} \\times \\dfrac{5}{6}\\)",
        graphData: null
      },
      {
        explanation: "The factor 5 in the numerator and denominator cancel out to 1. This simplifies the equation to 3/6.",
        workingOut: "\\(\\dfrac{3 \\times 1}{1 \\times 6} = \\dfrac{3}{6}\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator and denominator of 3/6 by their greatest common divisor, which is 3, to get 1/2.",
        workingOut: "\\(\\dfrac{3 \\div 3}{6 \\div 3} = \\dfrac{1}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q14
  "ovMhz4bEHfJ0Fs51ct0H": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(5 \\times \\dfrac{1}{4}\\)",
    opts: [
      "\\(\\dfrac{5}{20}\\)",
      "\\(1\\dfrac{1}{5}\\)",
      "\\(\\dfrac{1}{20}\\)",
      "\\(1\\dfrac{1}{4}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to multiply the integer 5 by 1/4. Our strategy is to write 5 as 5/1 and multiply the numerators and denominators.",
        workingOut: "\\(5 \\times \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators (5 x 1) and denominators (1 x 4) to get the improper fraction 5/4.",
        workingOut: "\\(\\dfrac{5}{1} \\times \\dfrac{1}{4} = \\dfrac{5}{4}\\)",
        graphData: null
      },
      {
        explanation: "We convert the improper fraction 5/4 into a mixed numeral. Dividing 5 by 4 gives 1 with a remainder of 1, yielding 1 and 1/4.",
        workingOut: "\\(\\dfrac{5}{4} = 1\\dfrac{1}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q15
  "r2ngYLIQr5As7Ba9UL6B": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{4} \\times 4\\)",
    opts: [
      "\\(\\dfrac{12}{16}\\)",
      "\\(3\\)", // Correct (Index 1)
      "\\(\\dfrac{3}{16}\\)",
      "\\(12\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to multiply the fraction 3/4 by the integer 4. Our strategy is to recognize that multiplying by 4 and dividing by 4 cancel each other out.",
        workingOut: "\\(\\dfrac{3}{4} \\times 4\\)",
        graphData: null
      },
      {
        explanation: "We write 4 as 4/1. The factor 4 in the numerator and denominator cancel out, leaving 3/1.",
        workingOut: "\\(\\dfrac{3}{1} \\times \\dfrac{1}{1} = 3\\)",
        graphData: null
      },
      {
        explanation: "Any fraction with a denominator of 1 is equivalent to its numerator as a whole number, which is 3.",
        workingOut: "\\(3\\)",
        graphData: null
      }
    ]
  },
  // Q16
  "wgzTNgPzBcEyGf3RN9y7": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{1}{4} \\times 4\\)",
    opts: [
      "\\(\\dfrac{4}{16}\\)",
      "\\(\\dfrac{1}{16}\\)",
      "\\(1\\)", // Correct (Index 2)
      "\\(4\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to multiply 1/4 by 4. Our strategy is to rewrite 4 as 4/1 and perform the multiplication.",
        workingOut: "\\(\\dfrac{1}{4} \\times 4\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators (1 x 4 = 4) and denominators (4 x 1 = 4), which gives us 4/4.",
        workingOut: "\\(\\dfrac{1}{4} \\times \\dfrac{4}{1} = \\dfrac{4}{4}\\)",
        graphData: null
      },
      {
        explanation: "Any fraction where the numerator and denominator are identical simplifies to the whole number 1.",
        workingOut: "\\(\\dfrac{4}{4} = 1\\)",
        graphData: null
      }
    ]
  },
  // Q17
  "xT0gBdFkPE0x01fc5Sl0": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{1}{3} \\times 13\\)",
    opts: [
      "\\(4\\dfrac{1}{3}\\)", // Correct (Index 0)
      "\\(\\dfrac{1}{39}\\)",
      "\\(\\dfrac{13}{39}\\)",
      "\\(3\\dfrac{1}{3}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to multiply 1/3 by the integer 13. Our strategy is to multiply the numerators and denominators to find the improper fraction first.",
        workingOut: "\\(\\dfrac{1}{3} \\times 13\\)",
        graphData: null
      },
      {
        explanation: "We rewrite 13 as 13/1. Multiplying gives us the improper fraction 13/3.",
        workingOut: "\\(\\dfrac{1}{3} \\times \\dfrac{13}{1} = \\dfrac{13}{3}\\)",
        graphData: null
      },
      {
        explanation: "We convert 13/3 into a mixed numeral. 3 goes into 13 exactly 4 times with a remainder of 1, giving us 4 and 1/3.",
        workingOut: "\\(\\dfrac{13}{3} = 4\\dfrac{1}{3}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4H Final 7] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} remaining target questions for Year 7 Chapter 4H.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
