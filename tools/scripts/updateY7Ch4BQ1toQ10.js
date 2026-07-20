import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Define targets with updated English content and correct index positioning
const targets = {
  // Q1
  "8EoZNAf5DgleRu2dC6Q8": {
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{6}{12}\\)?",
    opts: [
      "\\(\\dfrac{1}{3}\\) and \\(\\dfrac{6}{18}\\)",
      "\\(\\dfrac{2}{3}\\) and \\(\\dfrac{4}{6}\\)",
      "\\(\\dfrac{1}{2}\\) and \\(\\dfrac{5}{10}\\)", // Correct (Index 2)
      "\\(\\dfrac{1}{2}\\) and \\(\\dfrac{3}{4}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to identify the option that lists two fractions equivalent to 6/12. Our strategy is to simplify the given fraction 6/12 to its simplest form to establish a baseline for comparison.",
        workingOut: "\\(\\text{Given: } \\dfrac{6}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 6/12 by dividing the numerator and the denominator by their greatest common divisor, which is 6. This simplifies the fraction to 1/2.",
        workingOut: "\\(\\dfrac{6 \\div 6}{12 \\div 6} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Now we check each option. The first fraction in the target option is already 1/2. We simplify the second fraction, 5/10, by dividing both its numerator and denominator by 5, which also yields 1/2.",
        workingOut: "\\(\\dfrac{5 \\div 5}{10 \\div 5} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Since both 1/2 and 5/10 are equivalent to 1/2, they are both equivalent to the original fraction 6/12. Other options simplify to different values like 1/3 or 2/3.",
        workingOut: "\\(\\dfrac{1}{2} = \\dfrac{5}{10} = \\dfrac{6}{12}\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "RRIxc5eRiGJ6KL6niwV6": {
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{5}{20}\\)?",
    opts: [
      "\\(\\dfrac{1}{4}\\) and \\(\\dfrac{10}{40}\\)", // Correct (Index 0)
      "\\(\\dfrac{1}{2}\\) and \\(\\dfrac{5}{10}\\)",
      "\\(\\dfrac{1}{5}\\) and \\(\\dfrac{2}{10}\\)",
      "\\(\\dfrac{1}{4}\\) and \\(\\dfrac{3}{8}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find the option where both fractions are equivalent to 5/20. Our strategy is to reduce 5/20 to its simplest form and compare it with the simplified options.",
        workingOut: "\\(\\text{Given: } \\dfrac{5}{20}\\)",
        graphData: null
      },
      {
        explanation: "To simplify 5/20, we divide both the numerator and denominator by their greatest common divisor, which is 5. This yields 1/4.",
        workingOut: "\\(\\dfrac{5 \\div 5}{20 \\div 5} = \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We test the first option. The first fraction is 1/4, which is already in simplest form. For the second fraction, 10/40, we divide both parts by 10, which reduces to 1/4.",
        workingOut: "\\(\\dfrac{10 \\div 10}{40 \\div 10} = \\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "Since both 1/4 and 10/40 simplify to 1/4, they are both equivalent to 5/20.",
        workingOut: "\\(\\dfrac{1}{4} = \\dfrac{10}{40} = \\dfrac{5}{20}\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "0W8A9z8irIaI5DYjhHvk": {
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{18}{48}\\)?",
    opts: [
      "\\(\\dfrac{3}{8}\\) and \\(\\dfrac{6}{12}\\)",
      "\\(\\dfrac{1}{4}\\) and \\(\\dfrac{5}{20}\\)",
      "\\(\\dfrac{3}{4}\\) and \\(\\dfrac{6}{8}\\)",
      "\\(\\dfrac{3}{8}\\) and \\(\\dfrac{9}{24}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the option listing two fractions equivalent to 18/48. Our strategy is to simplify 18/48 and evaluate the options accordingly.",
        workingOut: "\\(\\text{Given: } \\dfrac{18}{48}\\)",
        graphData: null
      },
      {
        explanation: "We divide the numerator and denominator of 18/48 by their greatest common divisor, which is 6. This simplifies the fraction to 3/8.",
        workingOut: "\\(\\dfrac{18 \\div 6}{48 \\div 6} = \\dfrac{3}{8}\\)",
        graphData: null
      },
      {
        explanation: "Now we evaluate the target option. The first fraction is 3/8. The second fraction is 9/24. Dividing the numerator and denominator of 9/24 by 3 simplifies it to 3/8.",
        workingOut: "\\(\\dfrac{9 \\div 3}{24 \\div 3} = \\dfrac{3}{8}\\)",
        graphData: null
      },
      {
        explanation: "Since both 3/8 and 9/24 simplify to 3/8, they are both equivalent to 18/48.",
        workingOut: "\\(\\dfrac{3}{8} = \\dfrac{9}{24} = \\dfrac{18}{48}\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "KxXFAUh4Fhteumc5k9Co": {
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{4}{5}\\)?",
    opts: [
      "\\(\\dfrac{8}{10}\\) and \\(\\dfrac{10}{12}\\)",
      "\\(\\dfrac{8}{10}\\) and \\(\\dfrac{12}{15}\\)", // Correct (Index 1)
      "\\(\\dfrac{6}{8}\\) and \\(\\dfrac{9}{12}\\)",
      "\\(\\dfrac{4}{5}\\) and \\(\\dfrac{5}{4}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to identify two fractions equivalent to 4/5. Our strategy is to apply positive integer multipliers to the numerator and denominator of 4/5.",
        workingOut: "\\(\\text{Given fraction: } \\dfrac{4}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator by 2. This gives us 8/10, which is equivalent to 4/5.",
        workingOut: "\\(\\dfrac{4 \\times 2}{5 \\times 2} = \\dfrac{8}{10}\\)",
        graphData: null
      },
      {
        explanation: "Next, we multiply the numerator and denominator by 3. This gives us 12/15, which is also equivalent to 4/5.",
        workingOut: "\\(\\dfrac{4 \\times 3}{5 \\times 3} = \\dfrac{12}{15}\\)",
        graphData: null
      },
      {
        explanation: "Thus, the two equivalent fractions are 8/10 and 12/15.",
        workingOut: "\\(\\dfrac{8}{10} = \\dfrac{12}{15} = \\dfrac{4}{5}\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "EybX38i8ePAA6dgjKgsN": {
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{9}{10}\\)?",
    opts: [
      "\\(\\dfrac{18}{20}\\) and \\(\\dfrac{19}{20}\\)",
      "\\(\\dfrac{9}{10}\\) and \\(\\dfrac{10}{9}\\)",
      "\\(\\dfrac{18}{20}\\) and \\(\\dfrac{27}{30}\\)", // Correct (Index 2)
      "\\(\\dfrac{15}{20}\\) and \\(\\dfrac{25}{30}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We want to find two fractions equivalent to 9/10. Our strategy is to multiply the numerator and denominator of 9/10 by the same integer factors.",
        workingOut: "\\(\\text{Given fraction: } \\dfrac{9}{10}\\)",
        graphData: null
      },
      {
        explanation: "First, we multiply by a scale factor of 2. This yields 18/20, which is equivalent to 9/10.",
        workingOut: "\\(\\dfrac{9 \\times 2}{10 \\times 2} = \\dfrac{18}{20}\\)",
        graphData: null
      },
      {
        explanation: "Second, we multiply by a scale factor of 3. This yields 27/30, which is also equivalent to 9/10.",
        workingOut: "\\(\\dfrac{9 \\times 3}{10 \\times 3} = \\dfrac{27}{30}\\)",
        graphData: null
      },
      {
        explanation: "Therefore, 18/20 and 27/30 are both equivalent to 9/10.",
        workingOut: "\\(\\dfrac{18}{20} = \\dfrac{27}{30} = \\dfrac{9}{10}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "gLzCZIpyasgSqRyxRtNV": {
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{7}{9}\\)?",
    opts: [
      "\\(\\dfrac{14}{18}\\) and \\(\\dfrac{21}{27}\\)", // Correct (Index 0)
      "\\(\\dfrac{14}{18}\\) and \\(\\dfrac{15}{18}\\)",
      "\\(\\dfrac{7}{9}\\) and \\(\\dfrac{9}{7}\\)",
      "\\(\\dfrac{28}{36}\\) and \\(\\dfrac{35}{40}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to identify two fractions equivalent to 7/9. Our strategy is to scale the fraction 7/9 using integer multipliers.",
        workingOut: "\\(\\text{Given fraction: } \\dfrac{7}{9}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator by 2. This gives us 14/18, which is equivalent to 7/9.",
        workingOut: "\\(\\dfrac{7 \\times 2}{9 \\times 2} = \\dfrac{14}{18}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator by 3. This gives us 21/27, which is also equivalent to 7/9.",
        workingOut: "\\(\\dfrac{7 \\times 3}{9 \\times 3} = \\dfrac{21}{27}\\)",
        graphData: null
      },
      {
        explanation: "Thus, the equivalent fractions are 14/18 and 21/27.",
        workingOut: "\\(\\dfrac{14}{18} = \\dfrac{21}{27} = \\dfrac{7}{9}\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "Z94PZAEXoJYhbexIBQ9y": {
    topic: "Equivalent fractions",
    question: "Which option lists two mixed numbers or fractions that are BOTH equivalent to \\(2\\dfrac{1}{3}\\)?",
    opts: [
      "\\(2\\dfrac{2}{6}\\) and \\(2\\dfrac{3}{12}\\)",
      "\\(\\dfrac{7}{3}\\) and \\(\\dfrac{21}{6}\\)",
      "\\(2\\dfrac{1}{3}\\) and \\(\\dfrac{8}{3}\\)",
      "\\(\\dfrac{7}{3}\\) and \\(\\dfrac{14}{6}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find two representations equivalent to the mixed number 2 and 1/3. Our strategy is to first convert the mixed number into an improper fraction.",
        workingOut: "\\(\\text{Given: } 2\\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "We convert 2 and 1/3 by multiplying the integer part 2 by the denominator 3, and then adding the numerator 1. This gives us 7/3.",
        workingOut: "\\(2\\dfrac{1}{3} = \\dfrac{2 \\times 3 + 1}{3} = \\dfrac{7}{3}\\)",
        graphData: null
      },
      {
        explanation: "Now we scale this improper fraction by multiplying the numerator and denominator by 2. This yields 14/6, which is equivalent to 7/3.",
        workingOut: "\\(\\dfrac{7 \\times 2}{3 \\times 2} = \\dfrac{14}{6}\\)",
        graphData: null
      },
      {
        explanation: "Therefore, both 7/3 and 14/6 are equivalent to 2 and 1/3.",
        workingOut: "\\(\\dfrac{7}{3} = \\dfrac{14}{6} = 2\\dfrac{1}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "cgLJVSQVMJeSvWfQS6qs": {
    topic: "Equivalent fractions",
    question: "Which option lists two mixed numbers or fractions that are BOTH equivalent to \\(3\\dfrac{1}{4}\\)?",
    opts: [
      "\\(3\\dfrac{2}{8}\\) and \\(3\\dfrac{3}{8}\\)",
      "\\(\\dfrac{13}{4}\\) and \\(\\dfrac{26}{8}\\)", // Correct (Index 1)
      "\\(\\dfrac{13}{4}\\) and \\(\\dfrac{39}{8}\\)",
      "\\(3\\dfrac{1}{4}\\) and \\(\\dfrac{15}{4}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to find two representations equivalent to the mixed number 3 and 1/4. Our strategy is to convert the mixed number to an improper fraction first.",
        workingOut: "\\(\\text{Given: } 3\\dfrac{1}{4}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the whole number 3 by the denominator 4 and add the numerator 1, placing the result over 4. This gives us 13/4.",
        workingOut: "\\(3\\dfrac{1}{4} = \\dfrac{3 \\times 4 + 1}{4} = \\dfrac{13}{4}\\)",
        graphData: null
      },
      {
        explanation: "We scale the fraction by multiplying both the numerator and denominator by 2. This yields 26/8.",
        workingOut: "\\(\\dfrac{13 \\times 2}{4 \\times 2} = \\dots = \\dfrac{26}{8}\\)",
        graphData: null
      },
      {
        explanation: "Thus, both 13/4 and 26/8 are equivalent to 3 and 1/4.",
        workingOut: "\\(\\dfrac{13}{4} = \\dfrac{26}{8} = 3\\dfrac{1}{4}\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "kyqlQlHoP9nx1fKHRFJ7": {
    topic: "Equivalent fractions",
    question: "Which option lists two mixed numbers or fractions that are BOTH equivalent to \\(2\\dfrac{4}{5}\\)?",
    opts: [
      "\\(2\\dfrac{8}{10}\\) and \\(2\\dfrac{10}{15}\\)",
      "\\(\\dfrac{14}{5}\\) and \\(\\dfrac{42}{10}\\)",
      "\\(\\dfrac{14}{5}\\) and \\(\\dfrac{28}{10}\\)", // Correct (Index 2)
      "\\(2\\dfrac{4}{5}\\) and \\(\\dfrac{12}{5}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We want to find two representations equivalent to 2 and 4/5. Our strategy is to convert the mixed number to an improper fraction.",
        workingOut: "\\(\\text{Given: } 2\\dfrac{4}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the whole number 2 by the denominator 5, then add the numerator 4. This gives us 14/5.",
        workingOut: "\\(2\\dfrac{4}{5} = \\dfrac{2 \\times 5 + 4}{5} = \\dfrac{14}{5}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator of 14/5 by 2 to find an equivalent fraction. This yields 28/10.",
        workingOut: "\\(\\dfrac{14 \\times 2}{5 \\times 2} = \\dfrac{28}{10}\\)",
        graphData: null
      },
      {
        explanation: "Therefore, 14/5 and 28/10 are equivalent to 2 and 4/5.",
        workingOut: "\\(\\dfrac{14}{5} = \\dfrac{28}{10} = 2\\dfrac{4}{5}\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "aGLAgEZtTcTF5noxYiWN": {
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{5}{18}\\)?",
    opts: [
      "\\(\\dfrac{10}{36}\\) and \\(\\dfrac{15}{54}\\)", // Correct (Index 0)
      "\\(\\dfrac{10}{36}\\) and \\(\\dfrac{20}{54}\\)",
      "\\(\\dfrac{5}{18}\\) and \\(\\dfrac{18}{5}\\)",
      "\\(\\dfrac{15}{36}\\) and \\(\\dfrac{25}{54}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find two fractions equivalent to 5/18. Our strategy is to multiply the numerator and denominator of 5/18 by the same integer factors.",
        workingOut: "\\(\\text{Given fraction: } \\dfrac{5}{18}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator by 2. This yields 10/36.",
        workingOut: "\\(\\dfrac{5 \\times 2}{18 \\times 2} = \\dfrac{10}{36}\\)",
        graphData: null
      },
      {
        explanation: "We multiply the numerator and denominator by 3. This yields 15/54.",
        workingOut: "\\(\\dfrac{5 \\times 3}{18 \\times 3} = \\dfrac{15}{54}\\)",
        graphData: null
      },
      {
        explanation: "Therefore, 10/36 and 15/54 are both equivalent to 5/18.",
        workingOut: "\\(\\dfrac{10}{36} = \\dots = \\dfrac{15}{54}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4B Q1~Q10] Fetching target documents from Firestore...');
    let updatedCount = 0;

    for (const [docId, updateData] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();

      if (doc.exists) {
        const currentData = doc.data();

        // Build the cleaned updated payload matching both options/opts and answer/a fields
        const updatedPayload = {
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
        const correctTextInOpts = updateData.opts[expectedIndex];
        const correctTextInOptions = updatedPayload.options[expectedIndex];
        
        if (correctTextInOpts !== correctTextInOptions) {
          throw new Error(`Self-Verification Failed: Options/Opts mismatch for doc ${docId}`);
        }
        
        // Ensure no Index reference in the last step workingOut
        const lastStepWorkingOut = updateData.solutionSteps[updateData.solutionSteps.length - 1].workingOut;
        if (lastStepWorkingOut.toLowerCase().includes("index") || lastStepWorkingOut.toLowerCase().includes("option")) {
          throw new Error(`Self-Verification Failed: Last step workingOut contains forbidden index references in doc ${docId}`);
        }

        await ref.set(updatedPayload);
        console.log(`  [UPDATED] Doc ID: ${docId} -> Synced successfully.`);
        updatedCount++;
      } else {
        console.log(`  [WARNING] Doc ID: ${docId} not found in Firestore.`);
      }
    }

    console.log(`\nSuccessfully updated and verified ${updatedCount} target questions for Year 7 Chapter 4B.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
