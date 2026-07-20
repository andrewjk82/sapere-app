import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "Cpujy40znOySjfLcfrDn": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{4}{7} \\times \\dfrac{7}{8}\\)",
    opts: [
      "\\(\\dfrac{28}{56}\\)",
      "\\(\\dfrac{1}{2}\\)", // Correct (Index 1)
      "\\(\\dfrac{4}{8}\\)",
      "\\(\\dfrac{1}{4}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to multiply 4/7 by 7/8 and simplify the result. Our strategy is to cancel out common factors in the numerator and denominator before performing the multiplication.",
        workingOut: "\\(\\dfrac{4}{7} \\times \\dfrac{7}{8}\\)",
        graphData: null
      },
      {
        explanation: "We notice the number 7 appears in both the numerator and the denominator, so they cancel each other out to 1. This simplifies the equation to 4/8.",
        workingOut: "\\(\\dfrac{4 \\times 1}{1 \\times 8} = \\dfrac{4}{8}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 4/8 by dividing both parts by their greatest common divisor, which is 4. This reduces the fraction to 1/2.",
        workingOut: "\\(\\dfrac{4 \\div 4}{8 \\div 4} = \\dfrac{1}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "ZwZcvF2cpd51TEYjFw1D": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{3}{8} \\times \\dfrac{4}{5}\\)",
    opts: [
      "\\(\\dfrac{12}{40}\\)",
      "\\(\\dfrac{3}{5}\\)",
      "\\(\\dfrac{3}{8}\\)",
      "\\(\\dfrac{3}{10}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to multiply 3/8 by 4/5. Our strategy is to identify and simplify common factors first. We notice that 4 in the numerator and 8 in the denominator share a factor of 4.",
        workingOut: "\\(\\dfrac{3}{8} \\times \\dfrac{4}{5}\\)",
        graphData: null
      },
      {
        explanation: "We divide 4 by 4 to get 1, and 8 by 4 to get 2. This simplifies the expression to 3/2 multiplied by 1/5.",
        workingOut: "\\(\\dfrac{3}{2} \\times \\dfrac{1}{5}\\)",
        graphData: null
      },
      {
        explanation: "Now we multiply the remaining numerators and denominators.",
        workingOut: "\\(\\dfrac{3 \\times 1}{2 \\times 5} = \\dfrac{3}{10}\\)",
        graphData: null
      },
      {
        explanation: "Since 3 is prime and does not divide 10, the fraction 3/10 is in simplest form.",
        workingOut: "\\(\\dfrac{3}{10} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "0R8b9Ln6CmSfNuPaXiBa": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{5}{9} \\times \\dfrac{3}{5}\\)",
    opts: [
      "\\(\\dfrac{1}{3}\\)", // Correct (Index 0)
      "\\(\\dfrac{3}{9}\\)",
      "\\(\\dfrac{15}{45}\\)",
      "\\(\\dfrac{1}{5}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to multiply 5/9 by 3/5. Our strategy is to cancel common factors between the numerators and denominators.",
        workingOut: "\\(\\dfrac{5}{9} \\times \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "The factor 5 appears in both the numerator and the denominator, so they cancel out to 1. This leaves us with 3/9.",
        workingOut: "\\(\\dfrac{1 \\times 3}{9 \\times 1} = \\dfrac{3}{9}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 3/9 by dividing both the numerator and denominator by their greatest common divisor, which is 3. This reduces the fraction to 1/3.",
        workingOut: "\\(\\dfrac{3 \\div 3}{9 \\div 3} = \\dfrac{1}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "sKRjDKaTOvDQar677nnD": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{2}{9} \\times \\dfrac{3}{4}\\)",
    opts: [
      "\\(\\dfrac{6}{36}\\)",
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{1}{6}\\)", // Correct (Index 2)
      "\\(\\dfrac{1}{12}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to multiply 2/9 by 3/4. Our strategy is to simplify common factors across the numerators and denominators.",
        workingOut: "\\(\\dfrac{2}{9} \\times \\dfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 2 and 4 by dividing both by 2 (leaving 1 in the numerator and 2 in the denominator). We simplify 3 and 9 by dividing both by 3 (leaving 1 in the numerator and 3 in the denominator).",
        workingOut: "\\(\\dfrac{1}{3} \\times \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Now we multiply the simplified numerators and denominators together.",
        workingOut: "\\(\\dfrac{1 \\times 1}{3 \\times 2} = \\dfrac{1}{6}\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "nZ15HOOLIGsi8y7eOJCL": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{1}{3} \\times \\dfrac{1}{4} \\times \\dfrac{1}{5}\\)",
    opts: [
      "\\(\\dfrac{1}{60}\\)", // Correct (Index 0)
      "\\(\\dfrac{1}{12}\\)",
      "\\(\\dfrac{3}{12}\\)",
      "\\(\\dfrac{1}{20}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to multiply three fractions: 1/3, 1/4, and 1/5. Our strategy is to multiply all the numerators together and all the denominators together.",
        workingOut: "\\(\\dfrac{1}{3} \\times \\dfrac{1}{4} \\times \\dfrac{1}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators: 1 x 1 x 1 = 1. We multiply the denominators: 3 x 4 = 12, then 12 x 5 = 60.",
        workingOut: "\\(\\dfrac{1 \\times 1 \\times 1}{3 \\times 4 \\times 5} = \\dfrac{1}{60}\\)",
        graphData: null
      },
      {
        explanation: "The resulting fraction is 1/60. Since the numerator is 1, the fraction is already in simplest form.",
        workingOut: "\\(\\dfrac{1}{60} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "NBtyYt1lKSZkxm7hM2CY": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{2}{5} \\times \\dfrac{10}{9} \\times \\dfrac{3}{4}\\)",
    opts: [
      "\\(\\dfrac{60}{180}\\)",
      "\\(\\dfrac{1}{3}\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{2}{3}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to multiply three fractions: 2/5, 10/9, and 3/4. Our strategy is to cross-cancel common factors before multiplying.",
        workingOut: "\\(\\dfrac{2}{5} \\times \\dfrac{10}{9} \\times \\dfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "We cancel 5 in the denominator and 10 in the numerator (leaving 2 in the numerator). We cancel 3 in the numerator and 9 in the denominator (leaving 3 in the denominator). This simplifies the expression.",
        workingOut: "\\(\\dfrac{2 \\times 2 \\times 1}{1 \\times 3 \\times 4} = \\dfrac{4}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 4/12 by dividing both parts by their greatest common divisor, which is 4. This reduces the fraction to 1/3.",
        workingOut: "\\(\\dfrac{4 \\div 4}{12 \\div 4} = \\dfrac{1}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "2BABN4Mrzy6PrQkHQa7L": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{3}{8} \\times \\dfrac{2}{3} \\times \\dfrac{4}{5}\\)",
    opts: [
      "\\(\\dfrac{24}{120}\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{2}{5}\\)",
      "\\(\\dfrac{1}{5}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to multiply three fractions: 3/8, 2/3, and 4/5. Our strategy is to cross-cancel common factors to make the multiplication easier.",
        workingOut: "\\(\\dfrac{3}{8} \\times \\dfrac{2}{3} \\times \\dfrac{4}{5}\\)",
        graphData: null
      },
      {
        explanation: "We notice the factor 3 appears in both the numerator and denominator, canceling out to 1. We also multiply the remaining numerators 2 and 4 to get 8, which cancels exactly with the 8 in the denominator.",
        workingOut: "\\(\\dfrac{3 \\times 2 \\times 4}{8 \\times 3 \\times 5} = \\dfrac{8}{40}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 8/40 by dividing both parts by 8, which is their greatest common divisor. This yields 1/5.",
        workingOut: "\\(\\dfrac{8 \\div 8}{40 \\div 8} = \\dfrac{1}{5}\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "5K8zSna8pfKseB5E4wqz": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{5}{6} \\times \\dfrac{3}{5} \\times \\dfrac{2}{7}\\)",
    opts: [
      "\\(\\dfrac{30}{210}\\)",
      "\\(\\dfrac{1}{5}\\)",
      "\\(\\dfrac{1}{7}\\)", // Correct (Index 2)
      "\\(\\dfrac{2}{7}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to multiply 5/6, 3/5, and 2/7. Our strategy is to simplify common factors across the numerators and denominators.",
        workingOut: "\\(\\dfrac{5}{6} \\times \\dfrac{3}{5} \\times \\dfrac{2}{7}\\)",
        graphData: null
      },
      {
        explanation: "The factor 5 appears in both the numerator and the denominator, so they cancel out to 1. We multiply the remaining numerators 3 and 2, which equals 6. This 6 cancels with the 6 in the denominator.",
        workingOut: "\\(\\dfrac{5 \\times 3 \\times 2}{6 \\times 5 \\times 7} = \\dfrac{6}{42}\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator and the denominator of 6/42 by their greatest common divisor, which is 6, to simplify the fraction to 1/7.",
        workingOut: "\\(\\dfrac{6 \\div 6}{42 \\div 6} = \\dfrac{1}{7}\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "o0bfRxehzK4SPhRbvVnv": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{15}{16} \\times \\dfrac{12}{25} \\times \\dfrac{5}{9}\\)",
    opts: [
      "\\(\\dfrac{1}{4}\\)", // Correct (Index 0)
      "\\(\\dfrac{3}{10}\\)",
      "\\(\\dfrac{1}{5}\\)",
      "\\(\\dfrac{9}{36}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to multiply 15/16, 12/25, and 5/9. Our strategy is to cancel common prime factors before multiplying.",
        workingOut: "\\(\\dfrac{15}{16} \\times \\dfrac{12}{25} \\times \\dfrac{5}{9}\\)",
        graphData: null
      },
      {
        explanation: "We cancel 15 and 25 by dividing by 5 (leaving 3 and 5). The 5 in the numerator and 5 in the denominator cancel out. We cancel 12 and 16 by dividing by 4 (leaving 3 and 4). We also cancel the 3 and 3 in the numerator (3 x 3 = 9) with the 9 in the denominator.",
        workingOut: "\\(\\dfrac{9}{36}\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator and denominator by 9 to simplify the fraction to 1/4.",
        workingOut: "\\(\\dfrac{9 \\div 9}{36 \\div 9} = \\dfrac{1}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "WT0NSc0A9HQNp7F9F420": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(5 \\times \\dfrac{1}{5}\\)",
    opts: [
      "\\(5\\)",
      "\\(1\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{5}\\)",
      "\\(\\dfrac{5}{25}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to multiply the integer 5 by the fraction 1/5. Our strategy is to express the integer 5 as a fraction, 5/1, and then multiply.",
        workingOut: "\\(5 \\times \\dfrac{1}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerators and denominators: 5 x 1 = 5, and 1 x 5 = 5.",
        workingOut: "\\(\\dfrac{5}{1} \\times \\dfrac{1}{5} = \\dfrac{5}{5}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 5/5. Any fraction where the numerator and denominator are equal simplifies to the whole number 1.",
        workingOut: "\\(\\dfrac{5}{5} = 1\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4G First 10] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4G.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
