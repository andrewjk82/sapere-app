import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Explicit mapping by Document ID to avoid string match lookup failures
const targets = {
  // Q11
  "1u7GZcETrBbsXvPlA9TI": {
    topic: "Equivalent fractions",
    question: "Find the value of \\(n\\) that makes the statement true: \\(\\dfrac{n}{50} = \\dfrac{12}{20}\\)",
    opts: [
      "\\(25\\)",
      "\\(30\\)", // Correct (Index 1)
      "\\(15\\)",
      "\\(40\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to solve for the unknown variable n in the given fraction proportion. Our strategy is to first simplify the known fraction on the right side to reduce the scale of numbers.",
        workingOut: "\\(\\dfrac{n}{50} = \\dfrac{12}{20}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 12/20 by dividing both the numerator and the denominator by their greatest common divisor, which is 4. This reduces the fraction to 3/5.",
        workingOut: "\\(\\dfrac{12 \\div 4}{20 \\div 4} = \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "Now we equate the two fractions: n/50 = 3/5. To isolate n, we multiply both sides of the equation by 50.",
        workingOut: "\\(n = \\dfrac{3}{5} \\times 50\\)",
        graphData: null
      },
      {
        explanation: "We perform the division 50 divided by 5 which gives 10, then multiply by 3 to get 30. We verify that 30/50 is equivalent to 12/20.",
        workingOut: "n = 30",
        graphData: null
      }
    ]
  },
  // Q12
  "wuzWLodF36MdVqcBevRH": {
    topic: "Equivalent fractions",
    question: "Find the value of \\(n\\) that makes the statement true: \\(\\dfrac{36}{30} = \\dfrac{6}{n}\\)",
    opts: [
      "\\(5\\)", // Correct (Index 0)
      "\\(6\\)",
      "\\(4\\)",
      "\\(8\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find the value of n that satisfies the equation. Our strategy is to simplify the fraction on the left side to see the ratio clearly.",
        workingOut: "\\(\\dfrac{36}{30} = \\dfrac{6}{n}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 36/30 by dividing both parts by their greatest common divisor, which is 6. This reduces the left-hand fraction to 6/5.",
        workingOut: "\\(\\dfrac{36 \\div 6}{30 \\div 6} = \\dfrac{6}{5}\\)",
        graphData: null
      },
      {
        explanation: "Now we have 6/5 = 6/n. Because the numerators on both sides are identical (6), the denominators must be equal to make the equation true. Thus, n is equal to 5.",
        workingOut: "n = 5",
        graphData: null
      }
    ]
  },
  // Q13
  "bkQigEVefiMQT2MSdsYC": {
    topic: "Equivalent fractions",
    question: "Find the value of \\(n\\) that makes the statement true: \\(\\dfrac{12}{18} = \\dfrac{n}{90}\\)",
    opts: [
      "\\(50\\)",
      "\\(45\\)",
      "\\(60\\)", // Correct (Index 2)
      "\\(75\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to solve for n in the equivalent fractions equation. Our strategy is to reduce the left-hand fraction to its simplest form before scaling up.",
        workingOut: "\\(\\dfrac{12}{18} = \\dfrac{n}{90}\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator and denominator of 12/18 by their greatest common divisor, which is 6. This simplifies the fraction to 2/3.",
        workingOut: "\\(\\dfrac{12 \\div 6}{18 \\div 6} = \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "We set up the simplified equation: 2/3 = n/90. To isolate n, we multiply both sides of the equation by 90.",
        workingOut: "\\(n = \\dfrac{2}{3} \\times 90\\)",
        graphData: null
      },
      {
        explanation: "We compute the multiplication. Dividing 90 by 3 gives 30, and multiplying 30 by 2 gives 60. We verify that 60/90 simplifies back to 2/3.",
        workingOut: "n = 60",
        graphData: null
      }
    ]
  },
  // Q14
  "5uEJzKUIbpfkqBUO4kRq": {
    topic: "Equivalent fractions",
    question: "Find the value of \\(n\\) that makes the statement true: \\(\\dfrac{4}{9} = \\dfrac{24}{n}\\)",
    opts: [
      "\\(45\\)",
      "\\(36\\)",
      "\\(63\\)",
      "\\(54\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to solve for n in the proportion. Our strategy is to determine the multiplier needed to scale the numerator on the left to match the numerator on the right.",
        workingOut: "\\(\\dfrac{4}{9} = \\dfrac{24}{n}\\)",
        graphData: null
      },
      {
        explanation: "We compare the two numerators: 4 and 24. Since 4 multiplied by 6 is 24, the scale factor is 6.",
        workingOut: "\\(4 \\times 6 = 24\\)",
        graphData: null
      },
      {
        explanation: "To keep the fractions equivalent, we must scale the denominator by the same factor of 6. Therefore, we multiply 9 by 6 to find n.",
        workingOut: "\\(n = 9 \\times 6 = 54\\)",
        graphData: null
      },
      {
        explanation: "We verify the result: 4/9 scaled by 6 yields 24/54, which confirms n equals 54.",
        workingOut: "n = 54",
        graphData: null
      }
    ]
  },
  // Q15
  "B4DDUEzJliLZpNQbYYcA": {
    topic: "Equivalent fractions",
    question: "Find the value of \\(n\\) that makes the statement true: \\(\\dfrac{14}{n} = \\dfrac{70}{100}\\)",
    opts: [
      "\\(20\\)", // Correct (Index 0)
      "\\(25\\)",
      "\\(15\\)",
      "\\(30\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to solve for the denominator n. Our strategy is to first simplify the complete fraction on the right-hand side.",
        workingOut: "\\(\\dfrac{14}{n} = \\dfrac{70}{100}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 70/100 by dividing both parts by their greatest common divisor, which is 10. This reduces the fraction to 7/10.",
        workingOut: "\\(\\dfrac{70 \\div 10}{100 \\div 10} = \\dfrac{7}{10}\\)",
        graphData: null
      },
      {
        explanation: "Now we have 14/n = 7/10. We look at the numerators: 7 scaled by 2 is 14. To keep the fractions equivalent, we scale the denominator 10 by the same factor of 2.",
        workingOut: "\\(n = 10 \\times 2 = 20\\)",
        graphData: null
      },
      {
        explanation: "We verify: 14/20 simplifies to 7/10, which matches 70/100, confirming n equals 20.",
        workingOut: "n = 20",
        graphData: null
      }
    ]
  },
  // Q16
  "k7cnuejIjyFtptzczLWf": {
    topic: "Equivalent fractions",
    question: "Find the value of \\(n\\) that makes the statement true: \\(\\dfrac{5}{n} = \\dfrac{35}{63}\\)",
    opts: [
      "\\(7\\)",
      "\\(9\\)", // Correct (Index 1)
      "\\(8\\)",
      "\\(10\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to find the denominator n. Our strategy is to simplify the known fraction on the right-hand side first.",
        workingOut: "\\(\\dfrac{5}{n} = \\dfrac{35}{63}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 35/63 by dividing both the numerator and the denominator by their greatest common divisor, which is 7. This simplifies the fraction to 5/9.",
        workingOut: "\\(\\dfrac{35 \\div 7}{63 \\div 7} = \\dfrac{5}{9}\\)",
        graphData: null
      },
      {
        explanation: "Equating the fractions gives 5/n = 5/9. Since the numerators are identical (5), the denominators must be equal too, meaning n equals 9.",
        workingOut: "n = 9",
        graphData: null
      }
    ]
  },
  // Q17
  "hxEsDCJWrVJirTaQKkRU": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{6}{18}\\)",
    opts: [
      "\\(\\dfrac{2}{6}\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{3}\\)", // Correct (Index 2)
      "\\(\\dfrac{3}{9}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We want to write the fraction 6/18 in simplest form. Our strategy is to identify the greatest common divisor (GCD) of 6 and 18, then divide both parts by it.",
        workingOut: "\\(\\text{Given: } \\dfrac{6}{18}\\)",
        graphData: null
      },
      {
        explanation: "We list the factors of 6: 1, 2, 3, 6. Since 18 is also divisible by 6, the greatest common divisor of both numbers is 6.",
        workingOut: "\\(\\text{GCD}(6, 18) = 6\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator and the denominator of 6/18 by their GCD of 6 to reduce it to simplest form.",
        workingOut: "\\(\\dfrac{6 \\div 6}{18 \\div 6} = \\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 1/3, which cannot be reduced further since 1 and 3 share no common factors.",
        workingOut: "\\(\\dfrac{1}{3} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q18
  "UddlIo5Xp901Eb88Q6RT": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{8}{84}\\)",
    opts: [
      "\\(\\dfrac{2}{21}\\)", // Correct (Index 0)
      "\\(\\dfrac{4}{42}\\)",
      "\\(\\dfrac{1}{10}\\)",
      "\\(\\dfrac{2}{23}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to simplify the fraction 8/84. Our strategy is to determine the greatest common divisor of the numerator 8 and the denominator 84.",
        workingOut: "\\(\\text{Given: } \\dfrac{8}{84}\\)",
        graphData: null
      },
      {
        explanation: "Both 8 and 84 are even numbers, so they are divisible by 2 and 4. We find that the greatest common divisor of 8 and 84 is 4.",
        workingOut: "\\(\\text{GCD}(8, 84) = 4\\)",
        graphData: null
      },
      {
        explanation: "We divide both the numerator and the denominator by 4 to reduce the fraction to its simplest terms.",
        workingOut: "\\(\\dfrac{8 \\div 4}{84 \\div 4} = \\dfrac{2}{21}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 2/21. Since 2 is a prime number and does not divide 21, the fraction cannot be simplified further.",
        workingOut: "\\(\\dfrac{2}{21} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q19
  "C5uWmALtxvXOqgYuMPkq": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{135}{180}\\)",
    opts: [
      "\\(\\dfrac{9}{12}\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(\\dfrac{3}{5}\\)",
      "\\(\\dfrac{3}{4}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to simplify 135/180. Since these are larger numbers, our strategy is to perform step-by-step division using common factors like 5 and 9.",
        workingOut: "\\(\\text{Given: } \\dfrac{135}{180}\\)",
        graphData: null
      },
      {
        explanation: "Since both numbers end in 5 or 0, they are divisible by 5. Dividing the numerator and denominator by 5 gives 27/36.",
        workingOut: "\\(\\dfrac{135 \\div 5}{180 \\div 5} = \\dfrac{27}{36}\\)",
        graphData: null
      },
      {
        explanation: "Next, we observe that 27 and 36 are both divisible by 9. Dividing both parts by 9 simplifies the fraction further.",
        workingOut: "\\(\\dfrac{27 \\div 9}{36 \\div 9} = \\dfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "The final simplified fraction is 3/4, which cannot be simplified any further.",
        workingOut: "\\(\\dfrac{3}{4} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q20
  "3F3zToCo86F4hqqiLpn6": {
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{35}{175}\\)",
    opts: [
      "\\(\\dfrac{5}{25}\\)",
      "\\(\\dfrac{1}{5}\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{1}{6}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We want to simplify the fraction 35/175. Our strategy is to find a common factor of 35 and 175, starting with 5 since they both end in 5.",
        workingOut: "\\(\\text{Given: } \\dfrac{35}{175}\\)",
        graphData: null
      },
      {
        explanation: "Dividing the numerator and the denominator by 5 yields 7/35.",
        workingOut: "\\(\\dfrac{35 \\div 5}{175 \\div 5} = \\dfrac{7}{35}\\)",
        graphData: null
      },
      {
        explanation: "Both 7 and 35 are multiples of 7. We divide both parts by 7 to reduce the fraction to its simplest form.",
        workingOut: "\\(\\dfrac{7 \\div 7}{35 \\div 7} = \\dfrac{1}{5}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 1/5. (Alternatively, recognizing that 35 x 5 = 175 allows us to simplify directly by dividing both parts by 35).",
        workingOut: "\\(\\dfrac{1}{5} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4B Remaining 10] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} remaining target questions for Year 7 Chapter 4B.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
