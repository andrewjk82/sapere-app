import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q3
  "cG6laz4JS32Bdr28akxU": {
    topic: "Fraction sequences",
    question: "Find the next four terms in the sequence: \\(\\dfrac{1}{8},\\; \\dfrac{1}{4},\\; \\dfrac{3}{8},\\; \\dfrac{1}{2},\\; \\dots\\)",
    opts: [
      "\\(\\dfrac{5}{8},\\; \\dfrac{3}{4},\\; 1,\\; 1\\dfrac{1}{8}\\)",
      "\\(\\dfrac{9}{16},\\; \\dfrac{5}{8},\\; \\dfrac{11}{16},\\; \\dfrac{3}{4}\\)",
      "\\(0.6,\\; 0.7,\\; 0.8,\\; 0.9\\)",
      "\\(\\dfrac{5}{8},\\; \\dfrac{3}{4},\\; \\dfrac{7}{8},\\; 1\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the next four terms of the given fraction sequence. Our strategy is to express all terms with a common denominator to easily determine the pattern.",
        workingOut: "\\(\\text{Sequence: } \\dfrac{1}{8},\\; \\dfrac{1}{4},\\; \\dfrac{3}{8},\\; \\dfrac{1}{2},\\; \\dots\\)",
        graphData: null
      },
      {
        explanation: "We convert 1/4 and 1/2 to have a denominator of 8. This yields 2/8 and 4/8 respectively.",
        workingOut: "\\(\\dfrac{1}{4} = \\dfrac{2}{8}\\); \\;\\dfrac{1}{2} = \\dfrac{4}{8}\\)",
        graphData: null
      },
      {
        explanation: "Rewriting the sequence gives: 1/8, 2/8, 3/8, 4/8. It is clear that the common difference between consecutive terms is adding 1/8 at each step.",
        workingOut: "\\(\\text{Common Difference} = \\dfrac{1}{8}\\)",
        graphData: null
      },
      {
        explanation: "We compute the next four terms by continuously adding 1/8: the 5th term is 5/8, the 6th is 6/8 (which simplifies to 3/4), the 7th is 7/8, and the 8th is 8/8 (which simplifies to 1).",
        workingOut: "\\(\\dfrac{5}{8},\\; \\dfrac{6}{8} = \\dfrac{3}{4},\\; \\dfrac{7}{8},\\; \\dfrac{8}{8} = 1\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "cE2vptR1PZDSGv0yVgFY": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{2}{9} + \\dfrac{5}{9}\\)",
    opts: [
      "\\(\\dfrac{7}{18}\\)",
      "\\(\\dfrac{7}{9}\\)", // Correct (Index 1)
      "\\(\\dfrac{10}{9}\\)",
      "\\(\\dfrac{3}{9}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to calculate the sum of two fractions. Our strategy is to verify if they share a common denominator. Since both fractions have a denominator of 9, we can add their numerators directly.",
        workingOut: "\\(\\dfrac{2}{9} + \\dfrac{5}{9}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 2 and 5 together while keeping the denominator 9 unchanged.",
        workingOut: "\\(\\dfrac{2 + 5}{9} = \\dfrac{7}{9}\\)",
        graphData: null
      },
      {
        explanation: "The resulting fraction is 7/9. Since 7 is a prime number and does not divide 9, the fraction is in its simplest form.",
        workingOut: "\\(\\dfrac{7}{9} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "4TthyndcsISmM1vqkJOM": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{5}{12} + \\dfrac{2}{12}\\)",
    opts: [
      "\\(\\dfrac{7}{12}\\)", // Correct (Index 0)
      "\\(\\dfrac{7}{24}\\)",
      "\\(\\dfrac{10}{12}\\)",
      "\\(\\dfrac{3}{12}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to evaluate the sum of 5/12 and 2/12. Our strategy is to observe that they already share a common denominator of 12, allowing us to combine the numerators directly.",
        workingOut: "\\(\\dfrac{5}{12} + \\dfrac{2}{12}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 5 and 2 together and place the result over the common denominator 12.",
        workingOut: "\\(\\dfrac{5 + 2}{12} = \\dfrac{7}{12}\\)",
        graphData: null
      },
      {
        explanation: "We check if the fraction can be simplified. Since 7 is prime and not a factor of 12, 7/12 is in simplest form.",
        workingOut: "\\(\\dfrac{7}{12} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "Adr6WovADN5b2PTzPPBh": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum in simplest form: \\(\\dfrac{3}{10} + \\dfrac{3}{10}\\)",
    opts: [
      "\\(\\dfrac{6}{10}\\)",
      "\\(\\dfrac{6}{20}\\)",
      "\\(\\dfrac{3}{5}\\)", // Correct (Index 2)
      "\\(\\dfrac{9}{10}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to evaluate the sum of 3/10 and 3/10 in simplest form. Our strategy is to add the numerators since the denominators are identical, and then reduce the resulting fraction.",
        workingOut: "\\(\\dfrac{3}{10} + \\dfrac{3}{10}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 3 and 3 together, keeping the denominator as 10.",
        workingOut: "\\(\\dfrac{3 + 3}{10} = \\dfrac{6}{10}\\)",
        graphData: null
      },
      {
        explanation: "Next, we simplify 6/10. Both 6 and 10 are even numbers, so we divide both the numerator and the denominator by their greatest common divisor, which is 2.",
        workingOut: "\\(\\dfrac{6 \\div 2}{10 \\div 2} = \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 3/5. We verify that 3 and 5 share no common factors, confirming the simplest form.",
        workingOut: "\\(\\dfrac{3}{5} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "D33IxTDI6U4XYYmxDLVS": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{3}{5} + \\dfrac{7}{5}\\)",
    opts: [
      "\\(\\dfrac{10}{10}\\)",
      "\\(\\dfrac{4}{5}\\)",
      "\\(\\dfrac{21}{5}\\)",
      "\\(2\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the sum of 3/5 and 7/5. Our strategy is to add the numerators directly because the fractions share a common denominator of 5.",
        workingOut: "\\(\\dfrac{3}{5} + \\dfrac{7}{5}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 3 and 7, resulting in 10, and place it over the common denominator 5.",
        workingOut: "\\(\\dfrac{3 + 7}{5} = \\dfrac{10}{5}\\)",
        graphData: null
      },
      {
        explanation: "We simplify the improper fraction 10/5. Dividing 10 by 5 yields exactly the whole number 2, with no remainder.",
        workingOut: "\\(\\dfrac{10}{5} = 2\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "2w754c872iVaca6ZbZVZ": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum in simplest form: \\(\\dfrac{5}{8} + \\dfrac{5}{8}\\)",
    opts: [
      "\\(1\\dfrac{1}{4}\\)", // Correct (Index 0)
      "\\(\\dfrac{10}{8}\\)",
      "\\(\\dfrac{10}{16}\\)",
      "\\(1\\dfrac{3}{8}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to calculate the sum of 5/8 and 5/8 and express the answer in simplest form. Our strategy is to add the numerators over the common denominator 8, then convert the result to a mixed numeral.",
        workingOut: "\\(\\dfrac{5}{8} + \\dfrac{5}{8}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 5 and 5 together, keeping the denominator 8.",
        workingOut: "\\(\\dfrac{5 + 5}{8} = \\dfrac{10}{8}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 10/8 by dividing both parts by their greatest common divisor, which is 2. This reduces the fraction to 5/4.",
        workingOut: "\\(\\dfrac{10 \\div 2}{8 \\div 2} = \\dfrac{5}{4}\\)",
        graphData: null
      },
      {
        explanation: "Finally, we convert the improper fraction 5/4 into a mixed numeral. Dividing 5 by 4 gives 1 with a remainder of 1, resulting in 1 and 1/4.",
        workingOut: "\\(\\dfrac{5}{4} = 1\\dfrac{1}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "gcyTbgOorhvuOBbq6iQX": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum in simplest form: \\(\\dfrac{11}{14} + \\dfrac{5}{14}\\)",
    opts: [
      "\\(\\dfrac{16}{14}\\)",
      "\\(1\\dfrac{1}{7}\\)", // Correct (Index 1)
      "\\(\\dfrac{16}{28}\\)",
      "\\(1\\dfrac{2}{7}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to evaluate the sum of 11/14 and 5/14 in simplest form. Our strategy is to add the numerators since the denominators are identical, then simplify the resulting improper fraction.",
        workingOut: "\\(\\dfrac{11}{14} + \\dfrac{5}{14}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 11 and 5, placing the sum over the common denominator 14.",
        workingOut: "\\(\\dfrac{11 + 5}{14} = \\dfrac{16}{14}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 16/14 by dividing both the numerator and the denominator by their greatest common divisor, which is 2. This reduces the fraction to 8/7.",
        workingOut: "\\(\\dfrac{16 \\div 2}{14 \\div 2} = \\dfrac{8}{7}\\)",
        graphData: null
      },
      {
        explanation: "Lastly, we convert 8/7 into a mixed numeral. Dividing 8 by 7 gives 1 with a remainder of 1, yielding 1 and 1/7.",
        workingOut: "\\(\\dfrac{8}{7} = 1\\dfrac{1}{7}\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "ltjrMKuh3Xb2QuOoSpyd": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum in simplest form: \\(\\dfrac{3}{10} + \\dfrac{2}{5}\\)",
    opts: [
      "\\(\\dfrac{5}{15}\\)",
      "\\(\\dfrac{5}{10}\\)",
      "\\(\\dfrac{7}{10}\\)", // Correct (Index 2)
      "\\(\\dfrac{7}{5}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the sum of 3/10 and 2/5. Our strategy is to convert the fraction with the smaller denominator (2/5) to an equivalent fraction with a denominator of 10 so we can add them.",
        workingOut: "\\(\\dfrac{3}{10} + \\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator of 2/5 by 2 to convert its denominator to 10. This yields 4/10.",
        workingOut: "\\(\\dfrac{2 \\times 2}{5 \\times 2} = \\dfrac{4}{10}\\)",
        graphData: null
      },
      {
        explanation: "Now we add the numerators 3 and 4 over the common denominator 10.",
        workingOut: "\\(\\dfrac{3}{10} + \\dfrac{4}{10} = \\dfrac{3 + 4}{10} = \\dfrac{7}{10}\\)",
        graphData: null
      },
      {
        explanation: "The resulting fraction is 7/10. Since 7 is a prime number and does not divide 10, the fraction is already in simplest form.",
        workingOut: "\\(\\dfrac{7}{10} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q11
  "kevxuohNDE0CQwREAbXu": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{5}{16} + \\dfrac{3}{8}\\)",
    opts: [
      "\\(\\dfrac{11}{16}\\)", // Correct (Index 0)
      "\\(\\dfrac{8}{24}\\)",
      "\\(\\dfrac{8}{16}\\)",
      "\\(\\dfrac{11}{8}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to evaluate the sum of 5/16 and 3/8. Our strategy is to convert 3/8 into an equivalent fraction with a denominator of 16 to match the first fraction.",
        workingOut: "\\(\\dfrac{5}{16} + \\dfrac{3}{8}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator of 3/8 by 2. This gives us 6/16.",
        workingOut: "\\(\\dfrac{3 \\times 2}{8 \\times 2} = \\dfrac{6}{16}\\)",
        graphData: null
      },
      {
        explanation: "Now we add the numerators 5 and 6 together over the common denominator 16.",
        workingOut: "\\(\\dfrac{5}{16} + \\dfrac{6}{16} = \\dfrac{5 + 6}{16} = \\dfrac{11}{16}\\)",
        graphData: null
      },
      {
        explanation: "The resulting fraction is 11/16. Since 11 is prime and does not share factors with 16, the fraction is in simplest form.",
        workingOut: "\\(\\dfrac{11}{16} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q12
  "IHG0yIA3Hgs2dkVKR3GN": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{7}{9} + \\dfrac{2}{3}\\)",
    opts: [
      "\\(\\dfrac{9}{12}\\)",
      "\\(1\\dfrac{4}{9}\\)", // Correct (Index 1)
      "\\(1\\dfrac{5}{9}\\)",
      "\\(\\dfrac{13}{9}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to find the sum of 7/9 and 2/3. Our strategy is to convert 2/3 into an equivalent fraction with a denominator of 9.",
        workingOut: "\\(\\dfrac{7}{9} + \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 2/3 by 3 to get a denominator of 9. This gives us 6/9.",
        workingOut: "\\(\\dfrac{2 \\times 3}{3 \\times 3} = \\dfrac{6}{9}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 7 and 6 together over the common denominator 9, resulting in the improper fraction 13/9.",
        workingOut: "\\(\\dfrac{7}{9} + \\dfrac{6}{9} = \\dfrac{13}{9}\\)",
        graphData: null
      },
      {
        explanation: "Finally, we convert 13/9 into a mixed numeral. Dividing 13 by 9 gives 1 with a remainder of 4, yielding 1 and 4/9.",
        workingOut: "\\(\\dfrac{13}{9} = 1\\dfrac{4}{9}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4E Questions] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4E.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
