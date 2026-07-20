import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q21
  "sYuaDcpk5cxGnnOhnMuY": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{28}{112}\\)",
    opts: [
      "\\(\\dfrac{2}{8}\\)",
      "\\(\\dfrac{1}{4}\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{1}{5}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to simplify 28/112. Our strategy is to identify common factors of both numbers and divide step-by-step or use the greatest common divisor (GCD).",
        workingOut: "\\(\\text{Given: } \\dfrac{28}{112}\\)",
        graphData: null
      },
      {
        explanation: "Both numbers are even. We can start by dividing the numerator and the denominator by 28. We test 28 multiplied by 4, which equals exactly 112.",
        workingOut: "\\(28 \\times 4 = 112\\)",
        graphData: null
      },
      {
        explanation: "Since 28 divides 112 exactly, the greatest common divisor of 28 and 112 is 28. We divide both parts by 28 to simplify the fraction.",
        workingOut: "\\(\\dfrac{28 \\div 28}{112 \\div 28} = \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 1/4. We verify that 1 and 4 share no other common factors, confirming it is in simplest form.",
        workingOut: "\\(\\dfrac{1}{4} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q22
  "OlfU6vaDDLAyX9hrBfVD": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{56}{120}\\)",
    opts: [
      "\\(\\dfrac{14}{30}\\)",
      "\\(\\dfrac{8}{15}\\)",
      "\\(\\dfrac{7}{16}\\)",
      "\\(\\dfrac{7}{15}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to reduce 56/120 to its simplest form. Our strategy is to find their greatest common divisor (GCD) and perform division.",
        workingOut: "\\(\\text{Given: } \\dfrac{56}{120}\\)",
        graphData: null
      },
      {
        explanation: "We look for the largest common factor. 56 is divisible by 8 (8 x 7 = 56) and 120 is also divisible by 8 (8 x 15 = 120). Thus, the GCD is 8.",
        workingOut: "\\(\\text{GCD}(56, 120) = 8\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator and the denominator by their GCD of 8 to simplify the fraction.",
        workingOut: "\\(\\dfrac{56 \\div 8}{120 \\div 8} = \\dfrac{7}{15}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 7/15. Since 7 is a prime number and does not divide 15, the fraction is in simplest form.",
        workingOut: "\\(\\dfrac{7}{15} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q23
  "g19bQxuVwAYad835ZrDM": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{400}{150}\\)",
    opts: [
      "\\(\\dfrac{8}{3}\\)", // Correct (Index 0)
      "\\(\\dfrac{4}{3}\\)",
      "\\(\\dfrac{8}{5}\\)",
      "\\(\\dfrac{16}{6}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We want to simplify the improper fraction 400/150. Our strategy is to first eliminate the trailing zeros to make the numbers smaller and easier to simplify.",
        workingOut: "\\(\\text{Given: } \\dfrac{400}{150}\\)",
        graphData: null
      },
      {
        explanation: "We divide both the numerator and the denominator by 10 to cancel out the trailing zeros, resulting in 40/15.",
        workingOut: "\\(\\dfrac{400 \\div 10}{150 \\div 10} = \\dfrac{40}{15}\\)",
        graphData: null
      },
      {
        explanation: "Both 40 and 15 end in 0 or 5, meaning they are divisible by 5. We divide both parts by 5 to simplify further.",
        workingOut: "\\(\\dfrac{40 \\div 5}{15 \\div 5} = \\dfrac{8}{3}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 8/3. Since 8 and 3 share no common factors, this is the simplest form.",
        workingOut: "\\(\\dfrac{8}{3} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q24
  "iyQxLYKOrxlw5Bv3ZZJU": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{384}{96}\\)",
    opts: [
      "\\(6\\)",
      "\\(8\\)",
      "\\(4\\)", // Correct (Index 2)
      "\\(\\dfrac{8}{2}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to simplify 384/96. Our strategy is to check if the numerator is exactly divisible by the denominator, which would reduce the fraction to a whole number.",
        workingOut: "\\(\\text{Given: } \\dfrac{384}{96}\\)",
        graphData: null
      },
      {
        explanation: "We test if 96 divides 384 exactly by estimating and multiplying. We calculate 96 multiplied by 4.",
        workingOut: "\\(96 \\times 4 = 384\\)",
        graphData: null
      },
      {
        explanation: "Since 384 divided by 96 equals 4 with a remainder of 0, the fraction simplifies directly to the whole number 4.",
        workingOut: "\\(\\dfrac{384}{96} = 4\\)",
        graphData: null
      },
      {
        explanation: "The simplified value is the whole number 4, which is equivalent to the fraction.",
        workingOut: "\\(4 \\;\\checkmark\\)",
        graphData: null
      }
    ]
  },
  // Q25
  "g3An7khfj68BM3aWHNXz": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{180}{168}\\)",
    opts: [
      "\\(\\dfrac{30}{28}\\)",
      "\\(\\dfrac{15}{14}\\)", // Correct (Index 1)
      "\\(\\dfrac{15}{16}\\)",
      "\\(\\dfrac{16}{15}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to simplify 180/168. Our strategy is to find their greatest common divisor (GCD) and perform division to express it in simplest terms.",
        workingOut: "\\(\\text{Given: } \\dfrac{180}{168}\\)",
        graphData: null
      },
      {
        explanation: "Both numbers are even and divisible by 2, 3, 4, and 6. We find that the greatest common divisor of 180 and 168 is 12.",
        workingOut: "\\(\\text{GCD}(180, 168) = 12\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator 180 and the denominator 168 by their GCD of 12 to simplify the fraction.",
        workingOut: "\\(\\dfrac{180 \\div 12}{168 \\div 12} = \\dfrac{15}{14}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 15/14. Since 15 and 14 are consecutive integers, they share no common factors other than 1, confirming the fraction is in simplest form.",
        workingOut: "\\(\\dfrac{15}{14} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4B Final 5] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} final target questions for Year 7 Chapter 4B.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
