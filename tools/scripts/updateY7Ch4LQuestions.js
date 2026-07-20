import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "ydJCnuWkRTwhYPCXY1ps": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{2}{3} \\times \\dfrac{9}{10} + \\dfrac{2}{5}\\)",
    opts: [
      "\\(\\dfrac{4}{5}\\)",
      "\\(\\dfrac{3}{5}\\)",
      "\\(\\dfrac{7}{10}\\)",
      "\\(1\\)" // Correct (Index 3) - 2/3 * 9/10 = 18/30 = 3/5. 3/5 + 2/5 = 1
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to evaluate the expression. According to the order of operations, we must perform the multiplication first before the addition.",
        workingOut: "\\(\\dfrac{2}{3} \\times \\dfrac{9}{10} + \\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 2/3 by 9/10. We cancel common factors: 2 and 10 divide by 2 (leaving 1 and 5), and 9 and 3 divide by 3 (leaving 3 and 1). This simplifies the multiplication to 3/5.",
        workingOut: "\\(\\dfrac{2}{3} \\times \\dfrac{9}{10} = \\dfrac{18}{30} = \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "Now we add 3/5 and 2/5 together. Since they share a common denominator of 5, we add the numerators directly.",
        workingOut: "\\(\\dfrac{3}{5} + \\dfrac{2}{5} = \\dfrac{3 + 2}{5} = \\dfrac{5}{5} = 1\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "5BF5hH4V9bFy8FmjRdAX": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{4}{5} \\times \\dfrac{5}{8} + \\dfrac{1}{2}\\)",
    opts: [
      "\\(1\\)", // Correct (Index 0) - 4/5 * 5/8 = 20/40 = 1/2. 1/2 + 1/2 = 1
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\dfrac{1}{2}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to evaluate the expression. Following the order of operations, we perform the multiplication before the addition.",
        workingOut: "\\(\\dfrac{4}{5} \\times \\dfrac{5}{8} + \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 4/5 by 5/8. The factor 5 cancels out. We simplify 4/8 to 1/2 by dividing both parts by 4.",
        workingOut: "\\(\\dfrac{4}{5} \\times \\dfrac{5}{8} = \\dfrac{4}{8} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We add the product 1/2 to the remaining term 1/2.",
        workingOut: "\\(\\dfrac{1}{2} + \\dfrac{1}{2} = \\dfrac{2}{2} = 1\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "SeqNjU3HPLii3xuGZFRC": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{8} \\times \\dfrac{4}{9} + \\dfrac{5}{6}\\)",
    opts: [
      "\\(1\\)",
      "\\(1\\dfrac{1}{6}\\)", // Correct (Index 1) - 3/8 * 4/9 = 12/72 = 1/6. 1/6 + 5/6 = 6/6 = 1. Wait, let me re-evaluate: 1/6 + 5/6 = 1. Wait, 1/6 + 5/6 = 1. Is choice B correct? Ah, 3/8 * 4/9 = 12/72 = 1/6. 1/6 + 5/6 = 6/6 = 1. Yes, the answer is 1. Let's make index 0: 1. Let's swap the correct option to Index 1 as 1, and make Index 0: 1 1/6.
      "\\(\\dfrac{17}{18}\\)",
      "\\(1\\dfrac{1}{18}\\)"
    ],
    a: 1,
    opts: [
      "\\(1\\dfrac{1}{6}\\)",
      "\\(1\\)", // Correct (Index 1)
      "\\(\\dfrac{17}{18}\\)",
      "\\(1\\dfrac{1}{18}\\)"
    ],
    solutionSteps: [
      {
        explanation: "We evaluate the expression by performing multiplication first.",
        workingOut: "\\(\\dfrac{3}{8} \\times \\dfrac{4}{9} + \\dfrac{5}{6}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 3/8 by 4/9. We simplify common factors: 3 and 9 divide by 3 (leaving 1 and 3), and 4 and 8 divide by 4 (leaving 1 and 2). This gives 1/6.",
        workingOut: "\\(\\dfrac{3}{8} \\times \\dfrac{4}{9} = \\dfrac{1}{2} \\times \\dfrac{1}{3} = \\dfrac{1}{6}\\)",
        graphData: null
      },
      {
        explanation: "We add the result 1/6 to 5/6.",
        workingOut: "\\(\\dfrac{1}{6} + \\dfrac{5}{6} = \\dfrac{6}{6} = 1\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "oaBKW1x9E57PewsIl8jP": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{2}{5} + \\dfrac{3}{10} + \\dfrac{1}{4}\\)",
    opts: [
      "\\(\\dfrac{6}{19}\\)",
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{19}{20}\\)", // Correct (Index 2) - 8/20 + 6/20 + 5/20 = 19/20
      "\\(1\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the sum of three fractions. Our strategy is to convert them to a common denominator. The least common multiple of 5, 10, and 4 is 20.",
        workingOut: "\\(\\dfrac{2}{5} + \\dfrac{3}{10} + \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We convert each fraction to have a denominator of 20.",
        workingOut: "\\(\\dfrac{2 \\times 4}{5 \\times 4} = \\dfrac{8}{20}\\); \\;\\dfrac{3 \\times 2}{10 \\times 2} = \\dfrac{6}{20}\\); \\;\\dfrac{1 \\times 5}{4 \\times 5} = \\dfrac{5}{20}\\)",
        graphData: null
      },
      {
        explanation: "We add all the numerators over the common denominator 20.",
        workingOut: "\\(\\dfrac{8}{20} + \\dfrac{6}{20} + \\dfrac{5}{20} = \\dfrac{8 + 6 + 5}{20} = \\dfrac{19}{20}\\)",
        graphData: null
      },
      {
        explanation: "Since 19 is prime and does not divide 20, the fraction 19/20 is in simplest form.",
        workingOut: "\\(\\dfrac{19}{20} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "XACIRaDjfCLQckBoYG1X": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{2}{3} + \\dfrac{5}{6} - \\dfrac{1}{4}\\)",
    opts: [
      "\\(1\\dfrac{1}{6}\\)",
      "\\(1\\dfrac{1}{12}\\)",
      "\\(\\dfrac{3}{4}\\)",
      "\\(1\\dfrac{1}{4}\\)" // Correct (Index 3) - 8/12 + 10/12 - 3/12 = 15/12 = 5/4 = 1 1/4
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We evaluate the expression containing addition and subtraction. Our strategy is to convert all fractions to a common denominator. The least common multiple of 3, 6, and 4 is 12.",
        workingOut: "\\(\\dfrac{2}{3} + \\dfrac{5}{6} - \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We convert each fraction to have a denominator of 12.",
        workingOut: "\\(\\dfrac{2 \\times 4}{3 \\times 4} = \\dfrac{8}{12}\\); \\;\\dfrac{5 \\times 2}{6 \\times 2} = \\dfrac{10}{12}\\); \\;\\dfrac{1 \\times 3}{4 \\times 3} = \\dfrac{3}{12}\\)",
        graphData: null
      },
      {
        explanation: "We perform the operations from left to right: first we add 8/12 and 10/12, then we subtract 3/12.",
        workingOut: "\\(\\dfrac{8 + 10 - 3}{12} = \\dfrac{15}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 15/12 by dividing both parts by 3 to get 5/4. We then convert the improper fraction 5/4 into the mixed numeral 1 and 1/4.",
        workingOut: "\\(\\dfrac{15 \\div 3}{12 \\div 3} = \\dfrac{5}{4} = 1\\dfrac{1}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "PKaqN0hAosyA8ZyvzJbe": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{3}{4}\\) of \\(\\dfrac{8}{9} \\times \\dfrac{1}{2}\\)",
    opts: [
      "\\(\\dfrac{1}{3}\\)", // Correct (Index 0) - 3/4 * (8/9 * 1/2) = 3/4 * 4/9 = 12/36 = 1/3
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{1}{6}\\)",
      "\\(\\dfrac{2}{9}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The word 'of' in mathematics indicates multiplication. Our strategy is to multiply the three fractions together.",
        workingOut: "\\(\\dfrac{3}{4} \\times \\dfrac{8}{9} \\times \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the first two fractions 3/4 and 8/9. We cancel common factors: 3 and 9 divide by 3 (leaving 1 and 3), and 8 and 4 divide by 4 (leaving 2 and 1). This yields 2/3.",
        workingOut: "\\(\\dfrac{3}{4} \\times \\dfrac{8}{9} = \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "Now we multiply the product 2/3 by the third fraction 1/2. The factor 2 cancels out.",
        workingOut: "\\(\\dfrac{2}{3} \\times \\dfrac{1}{2} = \\dfrac{1}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "lgrbvxFpvY27AgwakoKU": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{4}{5}\\) of \\(\\dfrac{5}{8} - \\dfrac{3}{4}\\) of \\(\\dfrac{1}{3}\\)",
    opts: [
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{4}\\)", // Correct (Index 1) - 4/5 * 5/8 - 3/4 * 1/3 = 4/8 - 1/4 = 1/2 - 1/4 = 1/4
      "\\(\\dfrac{3}{8}\\)",
      "\\(0\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We interpret 'of' as multiplication. Our strategy is to perform both multiplication steps first, then subtract the two results.",
        workingOut: "\\(\\left( \\dfrac{4}{5} \\times \\dfrac{5}{8} \\right) - \\left( \\dfrac{3}{4} \\times \\dfrac{1}{3} \\right)\\)",
        graphData: null
      },
      {
        explanation: "We calculate the first term: 4/5 of 5/8. The factor 5 cancels out, leaving 4/8, which simplifies to 1/2.",
        workingOut: "\\(\\dfrac{4}{5} \\times \\dfrac{5}{8} = \\dfrac{4}{8} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We calculate the second term: 3/4 of 1/3. The factor 3 cancels out, leaving 1/4.",
        workingOut: "\\(\\dfrac{3}{4} \\times \\dfrac{1}{3} = \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the second term from the first term. We convert 1/2 to 2/4 to perform the subtraction.",
        workingOut: "\\(\\dfrac{1}{2} - \\dfrac{1}{4} = \\dfrac{2}{4} - \\dfrac{1}{4} = \\dfrac{1}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "Lf6ctecshDW0l3KEvyab": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate: \\(\\dfrac{5}{8} + \\dfrac{2}{3} \\times \\dfrac{9}{16}\\)",
    opts: [
      "\\(1\\)",
      "\\(\\dfrac{7}{8}\\)",
      "\\(1\\dfrac{1}{2}\\)", // Correct (Index 2) - Wait: 2/3 * 9/16 = 3/8. 5/8 + 3/8 = 8/8 = 1. Wait, 5/8 + 3/8 = 8/8 = 1. Let's correct the options: correct option is 1. Let me change correct index to Index 0 (1), and make Index 2: 1 1/2.
      "\\(1\\dfrac{1}{8}\\)"
    ],
    a: 0, // Correct is 1 (Index 0)
    opts: [
      "\\(1\\)", // Correct (Index 0)
      "\\(\\dfrac{7}{8}\\)",
      "\\(1\\dfrac{1}{2}\\)",
      "\\(1\\dfrac{1}{8}\\)"
    ],
    solutionSteps: [
      {
        explanation: "We evaluate the expression. According to the order of operations, we perform multiplication before addition.",
        workingOut: "\\(\\dfrac{5}{8} + \\dfrac{2}{3} \\times \\dfrac{9}{16}\\)",
        graphData: null
      },
      {
        explanation: "We multiply 2/3 by 9/16. We simplify: 9 and 3 divide by 3 (leaving 3 and 1), and 2 and 16 divide by 2 (leaving 1 and 8). This gives 3/8.",
        workingOut: "\\(\\dfrac{2}{3} \\times \\dfrac{9}{16} = \\dfrac{1}{1} \\times \\dfrac{3}{8} = \\dfrac{3}{8}\\)",
        graphData: null
      },
      {
        explanation: "We add the product 3/8 to the first term 5/8.",
        workingOut: "\\(\\dfrac{5}{8} + \\dfrac{3}{8} = \\dfrac{8}{8} = 1\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "bGc6KIhycISaCTqhc9dl": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate the complex fraction: \\(\\dfrac{\\dfrac{1}{2} + \\dfrac{1}{3}}{\\dfrac{5}{6} - \\dfrac{1}{6}}\\)",
    opts: [
      "\\(\\dfrac{5}{4}\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(\\dfrac{5}{6}\\)",
      "\\(1\\dfrac{1}{4}\\)" // Correct (Index 3) - Numerator: 3/6 + 2/6 = 5/6. Denominator: 4/6 = 2/3. (5/6)/(2/3) = 5/6 * 3/2 = 15/12 = 5/4 = 1 1/4.
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are asked to simplify a complex fraction. Our strategy is to evaluate the numerator and the denominator separately first.",
        workingOut: "\\(\\dfrac{\\dfrac{1}{2} + \\dfrac{1}{3}}{\\dfrac{5}{6} - \\dfrac{1}{6}}\\)",
        graphData: null
      },
      {
        explanation: "We evaluate the numerator: 1/2 + 1/3. We convert them to a common denominator of 6, yielding 3/6 + 2/6 = 5/6.",
        workingOut: "\\(\\text{Numerator} = \\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}\\)",
        graphData: null
      },
      {
        explanation: "We evaluate the denominator: 5/6 - 1/6. Since they share a denominator of 6, we subtract directly to get 4/6, which simplifies to 2/3.",
        workingOut: "\\(\\text{Denominator} = \\dfrac{4}{6} = \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "Now we divide the simplified numerator (5/6) by the simplified denominator (2/3). We multiply 5/6 by the reciprocal of 2/3, which is 3/2.",
        workingOut: "\\(\\dfrac{5}{6} \\div \\dfrac{2}{3} = \\dfrac{5}{6} \\times \\dfrac{3}{2} = \\dfrac{15}{12} = \\dfrac{5}{4}\\)",
        graphData: null
      },
      {
        explanation: "We convert 5/4 into the mixed numeral 1 and 1/4.",
        workingOut: "\\(\\dfrac{5}{4} = 1\\dfrac{1}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "BUrpcNm8SkSHeQca9quy": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate the complex fraction: \\(\\dfrac{\\dfrac{7}{10} - \\dfrac{1}{2}}{\\dfrac{2}{5} + \\dfrac{1}{10}}\\)",
    opts: [
      "\\(\\dfrac{1}{5}\\)",
      "\\(\\dfrac{2}{5}\\)", // Correct (Index 1) - Numerator: 7/10 - 5/10 = 2/10 = 1/5. Denominator: 4/10 + 1/10 = 5/10 = 1/2. (1/5)/(1/2) = 1/5 * 2 = 2/5
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{3}{5}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We simplify the complex fraction by evaluating the numerator and denominator separately.",
        workingOut: "\\(\\dfrac{\\dfrac{7}{10} - \\dfrac{1}{2}}{\\dfrac{2}{5} + \\dfrac{1}{10}}\\)",
        graphData: null
      },
      {
        explanation: "We evaluate the numerator: 7/10 - 1/2. We convert 1/2 to 5/10, giving 2/10, which simplifies to 1/5.",
        workingOut: "\\(\\text{Numerator} = \\dfrac{7}{10} - \\dfrac{5}{10} = \\dfrac{2}{10} = \\dfrac{1}{5}\\)",
        graphData: null
      },
      {
        explanation: "We evaluate the denominator: 2/5 + 1/10. We convert 2/5 to 4/10, giving 5/10, which simplifies to 1/2.",
        workingOut: "\\(\\text{Denominator} = \\dfrac{4}{10} + \\dfrac{1}{10} = \\dfrac{5}{10} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Now we divide 1/5 by 1/2, which is equivalent to multiplying 1/5 by 2.",
        workingOut: "\\(\\dfrac{1}{5} \\div \\dfrac{1}{2} = \\dfrac{1}{5} \\times 2 = \\dfrac{2}{5}\\)",
        graphData: null
      }
    ]
  },
  // Q11
  "OoJBNVlq3qTFyCb4jD3M": {
    topic: "Multiplication and division of fractions",
    question: "Evaluate the complex fraction: \\(\\dfrac{\\dfrac{4}{5} \\times \\dfrac{5}{8}}{\\dfrac{3}{4} - \\dfrac{1}{4}}\\)",
    opts: [
      "\\(1\\)", // Correct (Index 0) - Numerator: 4/5 * 5/8 = 4/8 = 1/2. Denominator: 3/4 - 1/4 = 2/4 = 1/2. (1/2)/(1/2) = 1
      "\\(\\dfrac{1}{2}\\)",
      "\\(2\\)",
      "\\(\\dfrac{3}{4}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We simplify the complex fraction by evaluating the numerator and denominator separately.",
        workingOut: "\\(\\dfrac{\\dfrac{4}{5} \\times \\dfrac{5}{8}}{\\dfrac{3}{4} - \\dfrac{1}{4}}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the fractions in the numerator. The factor 5 cancels out, leaving 4/8, which simplifies to 1/2.",
        workingOut: "\\(\\text{Numerator} = \\dfrac{4}{5} \\times \\dfrac{5}{8} = \\dfrac{4}{8} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the fractions in the denominator. Since they share a common denominator of 4, we subtract directly to get 2/4, which simplifies to 1/2.",
        workingOut: "\\(\\text{Denominator} = \\dfrac{3}{4} - \\dfrac{1}{4} = \\dfrac{2}{4} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We divide the simplified numerator (1/2) by the simplified denominator (1/2). Any non-zero value divided by itself equals 1.",
        workingOut: "\\(\\dfrac{1}{2} \\div \\dfrac{1}{2} = 1\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4L Questions] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4L.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
