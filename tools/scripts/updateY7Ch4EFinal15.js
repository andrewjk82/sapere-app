import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q13
  "Rjzg82G5aOIqxsyZS0Nc": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{5}{6} - \\dfrac{2}{5}\\)",
    opts: [
      "\\(\\dfrac{3}{1}\\)",
      "\\(\\dfrac{3}{30}\\)",
      "\\(\\dfrac{13}{30}\\)", // Correct (Index 2)
      "\\(\\dfrac{7}{30}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the difference between 5/6 and 2/5. Our strategy is to find a common denominator for the denominators 6 and 5 to perform subtraction.",
        workingOut: "\\(\\dfrac{5}{6} - \\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "The least common multiple of 6 and 5 is 30. We convert both fractions to equivalent fractions with a denominator of 30 by multiplying by appropriate factors.",
        workingOut: "\\(\\dfrac{5 \\times 5}{6 \\times 5} = \\dfrac{25}{30}\\); \\;\\dfrac{2 \\times 6}{5 \\times 6} = \\dfrac{12}{30}\\)",
        graphData: null
      },
      {
        explanation: "Now we subtract the numerators over the common denominator 30.",
        workingOut: "\\(\\dfrac{25}{30} - \\dfrac{12}{30} = \\dfrac{25 - 12}{30} = \\dfrac{13}{30}\\)",
        graphData: null
      },
      {
        explanation: "Since 13 is a prime number and does not divide 30, the fraction 13/30 is in its simplest form.",
        workingOut: "\\(\\dfrac{13}{30} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q14
  "YdeAlg4xgFdHJ2EfReHN": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{9}{10} - \\dfrac{3}{5}\\)",
    opts: [
      "\\(\\dfrac{3}{10}\\)", // Correct (Index 0)
      "\\(\\dfrac{6}{10}\\)",
      "\\(\\dfrac{3}{5}\\)",
      "\\(\\dfrac{6}{5}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to calculate 9/10 minus 3/5. Our strategy is to convert 3/5 into an equivalent fraction with a denominator of 10.",
        workingOut: "\\(\\dfrac{9}{10} - \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator of 3/5 by 2 to obtain a denominator of 10. This yields 6/10.",
        workingOut: "\\(\\dfrac{3 \\times 2}{5 \\times 2} = \\dfrac{6}{10}\\)",
        graphData: null
      },
      {
        explanation: "Now we subtract the numerators over the common denominator 10.",
        workingOut: "\\(\\dfrac{9}{10} - \\dfrac{6}{10} = \\dfrac{9 - 6}{10} = \\dfrac{3}{10}\\)",
        graphData: null
      },
      {
        explanation: "The resulting fraction is 3/10. Since 3 and 10 share no common factors, it is in its simplest form.",
        workingOut: "\\(\\dfrac{3}{10} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q15
  "c9OEtue3XjakNF3PFR3t": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{3}{4} - \\dfrac{1}{8}\\)",
    opts: [
      "\\(\\dfrac{2}{4}\\)",
      "\\(\\dfrac{2}{8}\\)",
      "\\(\\dfrac{5}{8}\\)", // Correct (Index 2)
      "\\(\\dfrac{5}{4}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the difference between 3/4 and 1/8. Our strategy is to scale 3/4 to have a common denominator of 8.",
        workingOut: "\\(\\dfrac{3}{4} - \\dfrac{1}{8}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator of 3/4 by 2, which gives us 6/8.",
        workingOut: "\\(\\dfrac{3 \\times 2}{4 \\times 2} = \\dfrac{6}{8}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators 6 and 1 over the common denominator 8.",
        workingOut: "\\(\\dfrac{6}{8} - \\dfrac{1}{8} = \\dfrac{6 - 1}{8} = \\dfrac{5}{8}\\)",
        graphData: null
      },
      {
        explanation: "Since 5 is prime and does not divide 8, 5/8 is in simplest form.",
        workingOut: "\\(\\dfrac{5}{8} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q16
  "ftWwrYjArCw6fClaS2V8": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{2}{5} + \\dfrac{1}{3}\\)",
    opts: [
      "\\(\\dfrac{3}{8}\\)",
      "\\(\\dfrac{3}{15}\\)",
      "\\(\\dfrac{1}{15}\\)",
      "\\(\\dfrac{11}{15}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to calculate the sum of 2/5 and 1/3. Our strategy is to identify the lowest common multiple of the denominators 5 and 3, which is 15.",
        workingOut: "\\(\\dfrac{2}{5} + \\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "We convert both fractions to have a denominator of 15 by scaling them with appropriate factors.",
        workingOut: "\\(\\dfrac{2 \\times 3}{5 \\times 3} = \\dfrac{6}{15}\\); \\;\\dfrac{1 \\times 5}{3 \\times 5} = \\dfrac{5}{15}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators over the common denominator 15.",
        workingOut: "\\(\\dfrac{6}{15} + \\dfrac{5}{15} = \\dfrac{6 + 5}{15} = \\dfrac{11}{15}\\)",
        graphData: null
      },
      {
        explanation: "Since 11 is prime and does not divide 15, the fraction is in simplest form.",
        workingOut: "\\(\\dfrac{11}{15} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q17
  "gRve4iYJbdYrMPMTm9Wl": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{3}{4} + \\(\\dfrac{2}{5}\\)",
    opts: [
      "\\(\\dfrac{5}{9}\\)",
      "\\(\\dfrac{5}{20}\\)",
      "\\(1\\dfrac{3}{20}\\)", // Correct (Index 2)
      "\\(1\\dfrac{7}{20}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to add 3/4 and 2/5. Our strategy is to convert both fractions to a common denominator of 20.",
        workingOut: "\\(\\dfrac{3}{4} + \\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 3/4 by 5 and both parts of 2/5 by 4 to get a denominator of 20.",
        workingOut: "\\(\\dfrac{3 \\times 5}{4 \\times 5} = \\dfrac{15}{20}\\); \\;\\dfrac{2 \\times 4}{5 \\times 4} = \\dfrac{8}{20}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators together, yielding the improper fraction 23/20.",
        workingOut: "\\(\\dfrac{15}{20} + \\dfrac{8}{20} = \\dfrac{23}{20}\\)",
        graphData: null
      },
      {
        explanation: "We convert 23/20 into a mixed numeral. Dividing 23 by 20 gives 1 with a remainder of 3, resulting in 1 and 3/20.",
        workingOut: "\\(\\dfrac{23}{20} = 1\\dfrac{3}{20}\\)",
        graphData: null
      }
    ]
  },
  // Q18
  "iNUKDNLpAX7CEY4tet4t": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate in simplest form: \\(\\dfrac{29}{50} - \\dfrac{11}{50}\\)",
    opts: [
      "\\(\\dfrac{18}{50}\\)",
      "\\(\\dfrac{9}{25}\\)", // Correct (Index 1)
      "\\(\\dfrac{18}{100}\\)",
      "\\(\\dfrac{8}{25}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to find the difference between 29/50 and 11/50 in simplest form. Our strategy is to subtract the numerators directly since they share a denominator of 50, then simplify the result.",
        workingOut: "\\(\\dfrac{29}{50} - \\dfrac{11}{50}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators, keeping the denominator 50.",
        workingOut: "\\(\\dfrac{29 - 11}{50} = \\dfrac{18}{50}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 18/50 by dividing both parts by their greatest common divisor, which is 2. This reduces the fraction to 9/25.",
        workingOut: "\\(\\dfrac{18 \\div 2}{50 \\div 2} = \\dfrac{9}{25}\\)",
        graphData: null
      },
      {
        explanation: "Since 9 and 25 share no common factors, 9/25 is in its simplest form.",
        workingOut: "\\(\\dfrac{9}{25} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q19
  "piIE2QiVsfv8XqM5KVou": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate the sum: \\(\\dfrac{2}{7} + \\dfrac{4}{5}\\)",
    opts: [
      "\\(1\\dfrac{3}{35}\\)", // Correct (Index 0)
      "\\(\\dfrac{6}{12}\\)",
      "\\(\\dfrac{38}{35}\\)",
      "\\(1\\dfrac{4}{35}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to calculate the sum of 2/7 and 4/5. Our strategy is to convert them to a common denominator of 35.",
        workingOut: "\\(\\dfrac{2}{7} + \\dfrac{4}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 2/7 by 5 and both parts of 4/5 by 7.",
        workingOut: "\\(\\dfrac{2 \\times 5}{7 \\times 5} = \\dfrac{10}{35}\\); \\;\\dfrac{4 \\times 7}{5 \\times 7} = \\dfrac{28}{35}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators 10 and 28 over the common denominator 35, yielding the improper fraction 38/35.",
        workingOut: "\\(\\dfrac{10}{35} + \\dfrac{28}{35} = \\dfrac{38}{35}\\)",
        graphData: null
      },
      {
        explanation: "We convert 38/35 into a mixed numeral. Dividing 38 by 35 gives 1 with a remainder of 3, resulting in 1 and 3/35.",
        workingOut: "\\(\\dfrac{38}{35} = 1\\dfrac{3}{35}\\)",
        graphData: null
      }
    ]
  },
  // Q20
  "vKPCijs4Am7LsMmHcgG3": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{3}{4} - \\dfrac{2}{7}\\)",
    opts: [
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{1}{28}\\)",
      "\\(\\dfrac{13}{28}\\)", // Correct (Index 2)
      "\\(\\dfrac{5}{28}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to find the difference between 3/4 and 2/7. Our strategy is to convert both fractions to a common denominator of 28.",
        workingOut: "\\(\\dfrac{3}{4} - \\dfrac{2}{7}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 3/4 by 7 and both parts of 2/7 by 4.",
        workingOut: "\\(\\dfrac{3 \\times 7}{4 \\times 7} = \\dfrac{21}{28}\\); \\;\\dfrac{2 \\times 4}{7 \\times 4} = \\dfrac{8}{28}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators over 28.",
        workingOut: "\\(\\dfrac{21 - 8}{28} = \\dfrac{13}{28}\\)",
        graphData: null
      },
      {
        explanation: "Since 13 is prime and does not divide 28, 13/28 is in simplest form.",
        workingOut: "\\(\\dfrac{13}{28} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q21
  "EGWyMx3tg8fPV8EL86mT": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{4}{5} - \\dfrac{2}{5}\\)",
    opts: [
      "\\(\\dfrac{2}{5}\\)", // Correct (Index 0)
      "\\(\\dfrac{2}{10}\\)",
      "\\(\\dfrac{6}{5}\\)",
      "\\(\\dfrac{1}{5}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find the difference between 4/5 and 2/5. Our strategy is to subtract the numerators directly since they share a common denominator of 5.",
        workingOut: "\\(\\dfrac{4}{5} - \\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "We subtract 2 from 4, keeping the denominator 5 unchanged.",
        workingOut: "\\(\\dfrac{4 - 2}{5} = \\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "The resulting fraction is 2/5. Since 2 is prime and does not divide 5, it is in its simplest form.",
        workingOut: "\\(\\dfrac{2}{5} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q22
  "BA8QnLtReUhczwm2jRiK": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{6}{11} - \\dfrac{2}{11}\\)",
    opts: [
      "\\(\\dfrac{4}{22}\\)",
      "\\(\\dfrac{8}{11}\\)",
      "\\(\\dfrac{4}{11}\\)", // Correct (Index 2)
      "\\(\\dfrac{2}{11}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to subtract 2/11 from 6/11. Our strategy is to perform direct subtraction of the numerators over the common denominator 11.",
        workingOut: "\\(\\dfrac{6}{11} - \\dfrac{2}{11}\\)",
        graphData: null
      },
      {
        explanation: "We subtract 2 from 6, keeping the denominator 11.",
        workingOut: "\\(\\dfrac{6 - 2}{11} = \\dfrac{4}{11}\\)",
        graphData: null
      },
      {
        explanation: "The resulting fraction is 4/11. Since 4 and 11 share no common factors, it is in simplest form.",
        workingOut: "\\(\\dfrac{4}{11} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q23
  "3Eyjj4b2yOeFrZD3njAp": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{5}{6} - \\dfrac{1}{12}\\)",
    opts: [
      "\\(\\dfrac{4}{6}\\)",
      "\\(\\dfrac{9}{12}\\)",
      "\\(\\dfrac{3}{4}\\)", // Correct (Index 2)
      "\\(\\dfrac{4}{12}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to calculate 5/6 minus 1/12. Our strategy is to scale 5/6 to have a common denominator of 12.",
        workingOut: "\\(\\dfrac{5}{6} - \\dfrac{1}{12}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 5/6 by 2, yielding 10/12.",
        workingOut: "\\(\\dfrac{5 \\times 2}{6 \\times 2} = \\dfrac{10}{12}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators over the common denominator 12, giving 9/12.",
        workingOut: "\\(\\dfrac{10}{12} - \\dfrac{1}{12} = \\dfrac{9}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 9/12 by dividing the numerator and denominator by their greatest common divisor, which is 3. This reduces the fraction to 3/4.",
        workingOut: "\\(\\dfrac{9 \\div 3}{12 \\div 3} = \\dfrac{3}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q24
  "p8NtwlBbosfZj4KDjTRT": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{7}{8} - \\dfrac{1}{2}\\)",
    opts: [
      "\\(\\dfrac{6}{8}\\)",
      "\\(\\dfrac{3}{8}\\)", // Correct (Index 1)
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{5}{8}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to evaluate 7/8 minus 1/2. Our strategy is to scale 1/2 to have a common denominator of 8.",
        workingOut: "\\(\\dfrac{7}{8} - \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 1/2 by 4. This yields 4/8.",
        workingOut: "\\(\\dfrac{1 \\times 4}{2 \\times 4} = \\dfrac{4}{8}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators over 8.",
        workingOut: "\\(\\dfrac{7}{8} - \\dfrac{4}{8} = \\dfrac{7 - 4}{8} = \\dfrac{3}{8}\\)",
        graphData: null
      },
      {
        explanation: "Since 3 is prime and does not divide 8, 3/8 is in simplest form.",
        workingOut: "\\(\\dfrac{3}{8} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q25
  "BmEqdg4bQAdhhKCBbgDI": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{4}{5} - \\dfrac{1}{3}\\)",
    opts: [
      "\\(\\dfrac{3}{2}\\)",
      "\\(\\dfrac{3}{15}\\)",
      "\\(\\dfrac{7}{15}\\)", // Correct (Index 2)
      "\\(\\dfrac{11}{15}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the difference between 4/5 and 1/3. Our strategy is to identify the lowest common multiple of 5 and 3, which is 15.",
        workingOut: "\\(\\dfrac{4}{5} - \\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "We scale both fractions to have a denominator of 15 by multiplying by appropriate factors.",
        workingOut: "\\(\\dfrac{4 \\times 3}{5 \\times 3} = \\dfrac{12}{15}\\); \\;\\dfrac{1 \\times 5}{3 \\times 5} = \\dfrac{5}{15}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators over 15.",
        workingOut: "\\(\\dfrac{12 - 5}{15} = \\dfrac{7}{15}\\)",
        graphData: null
      },
      {
        explanation: "Since 7 is prime and does not divide 15, the fraction is in simplest form.",
        workingOut: "\\(\\dfrac{7}{15} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q26
  "7F5xuhRm5MJqtY0KzQrM": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{7}{8} - \\dfrac{2}{3}\\)",
    opts: [
      "\\(\\dfrac{5}{5}\\)",
      "\\(\\dfrac{5}{24}\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{24}\\)",
      "\\(\\dfrac{7}{24}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to subtract 2/3 from 7/8. Our strategy is to convert both fractions to a common denominator of 24.",
        workingOut: "\\(\\dfrac{7}{8} - \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 7/8 by 3 and both parts of 2/3 by 8.",
        workingOut: "\\(\\dfrac{7 \\times 3}{8 \\times 3} = \\dfrac{21}{24}\\); \\;\\dfrac{2 \\times 8}{3 \\times 8} = \\dfrac{16}{24}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators over 24.",
        workingOut: "\\(\\dfrac{21 - 16}{24} = \\dfrac{5}{24}\\)",
        graphData: null
      },
      {
        explanation: "Since 5 is prime and does not divide 24, 5/24 is in simplest form.",
        workingOut: "\\(\\dfrac{5}{24} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  },
  // Q27
  "mYqba6kHwhUgKn3ElPjP": {
    topic: "Addition and subtraction of fractions",
    question: "Evaluate: \\(\\dfrac{4}{5} - \\dfrac{1}{6}\\)",
    opts: [
      "\\(\\dfrac{3}{30}\\)",
      "\\(\\dfrac{11}{30}\\)",
      "\\(\\dfrac{19}{30}\\)", // Correct (Index 2)
      "\\(\\dfrac{23}{30}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find the difference between 4/5 and 1/6. Our strategy is to find a common denominator for 5 and 6, which is 30.",
        workingOut: "\\(\\dfrac{4}{5} - \\dfrac{1}{6}\\)",
        graphData: null
      },
      {
        explanation: "We multiply both parts of 4/5 by 6 and both parts of 1/6 by 5.",
        workingOut: "\\(\\dfrac{4 \\times 6}{5 \\times 6} = \\dfrac{24}{30}\\); \\;\\dfrac{1 \\times 5}{6 \\times 5} = \\dfrac{5}{30}\\)",
        graphData: null
      },
      {
        explanation: "We subtract the numerators over 30.",
        workingOut: "\\(\\dfrac{24 - 5}{30} = \\dfrac{19}{30}\\)",
        graphData: null
      },
      {
        explanation: "Since 19 is a prime number and does not divide 30, the fraction is in simplest form.",
        workingOut: "\\(\\dfrac{19}{30} \\text{ is in simplest form}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4E Remaining 15] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} remaining target questions for Year 7 Chapter 4E.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
