import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q2
  "UrsHRx0IV01yiLHND5FS": {
    topic: "Mixed numerals and division by whole numbers",
    question: "Convert the improper fraction \\(\\dfrac{19}{6}\\) to a mixed numeral.",
    opts: [
      "\\(3\\dfrac{5}{6}\\)",
      "\\(3\\dfrac{1}{6}\\)", // Correct (Index 1)
      "\\(2\\dfrac{5}{6}\\)",
      "\\(2\\dfrac{1}{6}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to convert the improper fraction 19/6 into a mixed numeral. Our strategy is to divide the numerator 19 by the denominator 6 to determine the whole number and remainder parts.",
        workingOut: "\\(\\text{Given: } \\dfrac{19}{6}\\)",
        graphData: null
      },
      {
        explanation: "We perform division. 6 goes into 19 exactly 3 times, because 6 multiplied by 3 equals 18. This gives us a whole number part of 3.",
        workingOut: "\\(19 \\div 6 = 3 \\text{ with a remainder}\\)",
        graphData: null
      },
      {
        explanation: "Next, we calculate the remainder by subtracting 18 from 19, which yields 1. The remainder 1 represents the numerator of the fractional part.",
        workingOut: "\\(19 - 18 = 1 \\;\\Rightarrow\\; \\text{Remainder} = 1\\)",
        graphData: null
      },
      {
        explanation: "We combine the whole number 3 and the fractional part 1/6 (placing the remainder over the original denominator 6) to write the mixed numeral 3 and 1/6.",
        workingOut: "\\(3\\dfrac{1}{6} \\;\\checkmark\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "5ayX6ktyOrcHETDlF6Of": {
    topic: "Mixed numerals and division by whole numbers",
    question: "Convert the improper fraction \\(\\dfrac{23}{5}\\) to a mixed numeral.",
    opts: [
      "\\(4\\dfrac{2}{5}\\)",
      "\\(3\\dfrac{4}{5}\\)",
      "\\(4\\dfrac{4}{5}\\)",
      "\\(4\\dfrac{3}{5}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to convert the improper fraction 23/5 to a mixed numeral. Our strategy is to perform integer division on the numerator by the denominator.",
        workingOut: "\\(\\text{Given: } \\dfrac{23}{5}\\)",
        graphData: null
      },
      {
        explanation: "We divide 23 by 5. Since 5 multiplied by 4 is 20, 5 goes into 23 exactly 4 times. This gives us a quotient of 4.",
        workingOut: "\\(23 \\div 5 = 4 \\text{ with a remainder}\\)",
        graphData: null
      },
      {
        explanation: "We calculate the remainder by subtracting 20 from 23, which gives a remainder of 3. The remainder represents the remaining fractional parts.",
        workingOut: "\\(23 - 20 = 3 \\;\\Rightarrow\\; \\text{Remainder} = 3\\)",
        graphData: null
      },
      {
        explanation: "We construct the mixed numeral by combining the whole number 4 with the fraction 3/5, giving us 4 and 3/5.",
        workingOut: "\\(4\\dfrac{3}{5} \\;\\checkmark\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "5zRmO5utmEYj8lJms7oY": {
    topic: "Mixed numerals and division by whole numbers",
    question: "Convert the improper fraction \\(\\dfrac{52}{48}\\) to a mixed numeral in its simplest form.",
    opts: [
      "\\(1\\dfrac{1}{12}\\)", // Correct (Index 0)
      "\\(1\\dfrac{4}{48}\\)",
      "\\(1\\dfrac{1}{6}\\)",
      "\\(1\\dfrac{1}{8}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to convert 52/48 to a mixed numeral in its simplest form. Our strategy is to first write it as a mixed numeral and then simplify the fractional part.",
        workingOut: "\\(\\text{Given: } \\dfrac{52}{48}\\)",
        graphData: null
      },
      {
        explanation: "We divide 52 by 48. 48 goes into 52 exactly 1 time, with a remainder of 4. This gives us the initial mixed numeral 1 and 4/48.",
        workingOut: "\\(52 \\div 48 = 1 \\text{ remainder } 4 \\;\\Rightarrow\\; 1\\dfrac{4}{48}\\)",
        graphData: null
      },
      {
        explanation: "Now we simplify the fractional part 4/48. We divide the numerator and the denominator by their greatest common divisor, which is 4.",
        workingOut: "\\(\\dfrac{4 \\div 4}{48 \\div 4} = \\dfrac{1}{12}\\)",
        graphData: null
      },
      {
        explanation: "We combine the whole number 1 and the simplified fraction 1/12 to write the final mixed numeral, 1 and 1/12.",
        workingOut: "\\(1\\dfrac{1}{12} \\;\\checkmark\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "mqIK7s3IqYzunBPjn3M7": {
    topic: "Mixed numerals and division by whole numbers",
    question: "Convert the improper fraction \\(\\dfrac{150}{120}\\) to a mixed numeral in its simplest form.",
    opts: [
      "\\(1\\dfrac{30}{120}\\)",
      "\\(1\\dfrac{1}{5}\\)",
      "\\(1\\dfrac{1}{4}\\)", // Correct (Index 2)
      "\\(1\\dfrac{1}{3}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to convert 150/120 into a mixed numeral in simplest form. Our strategy is to first convert the improper fraction into a mixed numeral and then simplify the fractional remainder.",
        workingOut: "\\(\\text{Given: } \\dfrac{150}{120}\\)",
        graphData: null
      },
      {
        explanation: "Dividing 150 by 120 gives a quotient of 1 with a remainder of 30, since 120 multiplied by 1 is 120. This gives us the initial mixed numeral 1 and 30/120.",
        workingOut: "\\(150 \\div 120 = 1 \\text{ remainder } 30 \\;\\Rightarrow\\; 1\\dfrac{30}{120}\\)",
        graphData: null
      },
      {
        explanation: "Next, we simplify the fractional part 30/120. We divide the numerator and denominator by 30, which is their greatest common divisor.",
        workingOut: "\\(\\dfrac{30 \\div 30}{120 \\div 30} = \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "Combining the whole number 1 with the simplified fraction 1/4 gives us the final answer: 1 and 1/4.",
        workingOut: "\\(1\\dfrac{1}{4} \\;\\checkmark\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "pKRhKnSD2nKBpFyseqWa": {
    topic: "Mixed numerals and division by whole numbers",
    question: "Convert the improper fraction \\(\\dfrac{99}{32}\\) to a mixed numeral.",
    opts: [
      "\\(3\\dfrac{3}{32}\\)", // Correct (Index 0)
      "\\(3\\dfrac{1}{32}\\)",
      "\\(3\\dfrac{5}{32}\\)",
      "\\(2\\dfrac{31}{32}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to convert the improper fraction 99/32 to a mixed numeral. Our strategy is to divide 99 by 32 to determine the whole number quotient and fractional remainder.",
        workingOut: "\\(\\text{Given: } \\dfrac{99}{32}\\)",
        graphData: null
      },
      {
        explanation: "We perform division. 32 multiplied by 3 equals 96. This means 32 goes into 99 exactly 3 times, giving us a whole number part of 3.",
        workingOut: "\\(32 \\times 3 = 96 \\;\\Rightarrow\\; 99 \\div 32 = 3 \\text{ with a remainder}\\)",
        graphData: null
      },
      {
        explanation: "We find the remainder by subtracting 96 from 99, which yields 3. The remainder 3 represents the numerator of the remaining fraction.",
        workingOut: "\\(99 - 96 = 3 \\;\\Rightarrow\\; \\text{Remainder} = 3\\)",
        graphData: null
      },
      {
        explanation: "We combine the whole number 3 and the fractional part 3/32 to write the final mixed numeral, 3 and 3/32.",
        workingOut: "\\(3\\dfrac{3}{32} \\;\\checkmark\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4C Remaining] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} remaining target questions for Year 7 Chapter 4C.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
