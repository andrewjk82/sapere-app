import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1 (difference of exactly 2/3)
  "KM8RnHjwRzdGjHDaoE1X": {
    topic: "Multiplication and division of fractions",
    question: "Which pair of fractions has a difference of exactly \\(\\dfrac{2}{3}\\)?",
    opts: [
      "\\(\\dfrac{7}{8}\\) and \\(\\dfrac{1}{8}\\)",
      "\\(\\dfrac{5}{6}\\) and \\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{11}{12}\\) and \\(\\dfrac{1}{4}\\)", // Correct (Index 2)
      "\\(\\dfrac{4}{5}\\) and \\(\\dfrac{2}{15}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are looking for a pair of fractions with a difference equal to 2/3. Our strategy is to evaluate each option by finding a common denominator for the pair and subtracting them.",
        workingOut: "\\(\\text{Target Difference} = \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "We test the third option: 11/12 and 1/4. We convert 1/4 to have a denominator of 12. This yields 3/12.",
        workingOut: "\\(\\dfrac{1 \\times 3}{4 \\times 3} = \\dfrac{3}{12}\\)",
        graphData: null
      },
      {
        explanation: "Next, we subtract 3/12 from 11/12.",
        workingOut: "\\(\\dfrac{11}{12} - \\dfrac{3}{12} = \\dfrac{8}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 8/12 by dividing both parts by their greatest common divisor, which is 4. This reduces the fraction to 2/3.",
        workingOut: "\\(\\dfrac{8 \\div 4}{12 \\div 4} = \\dfrac{2}{3}\\)",
        graphData: null
      }
    ]
  },
  // Q2 (three DIFFERENT fractions that sum to exactly 1/2)
  "RkkzKW8QOXw2cMv1O6Sk": {
    topic: "Multiplication and division of fractions",
    question: "Which of the following shows three DIFFERENT fractions that sum to exactly \\(\\dfrac{1}{2}\\)?",
    opts: [
      "\\(\\dfrac{1}{6},\\; \\dfrac{1}{6},\\; \\dfrac{1}{6}\\)",
      "\\(\\dfrac{1}{6},\\; \\dfrac{1}{4},\\; \\dfrac{1}{12}\\)", // Correct (Index 1)
      "\\(\\dfrac{1}{8},\\; \\dfrac{1}{4},\\; \\dfrac{1}{8}\\)",
      "\\(\\dfrac{1}{3},\\; \\dfrac{1}{4},\\; \\dfrac{1}{6}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to find three different fractions that add up to exactly 1/2. Our strategy is to first eliminate options that contain identical fractions (since all three must be different), and then check the sum.",
        workingOut: "\\(\\text{Target Sum} = \\dfrac{1}{2},\\; \\text{Condition: All 3 fractions must be unique}\\)",
        graphData: null
      },
      {
        explanation: "We look at Option A: 1/6 is repeated. We look at Option C: 1/8 is repeated. Thus, only Options B and D consist of three different fractions.",
        workingOut: "\\(\\text{Candidates: } \\left\\{ \\dfrac{1}{6},\\; \\dfrac{1}{4},\\; \\dfrac{1}{12} \\right\\} \\text{ or } \\left\\{ \\dfrac{1}{3},\\; \\dfrac{1}{4},\\; \\dfrac{1}{6} \\right\\}\\)",
        graphData: null
      },
      {
        explanation: "We evaluate Option B. The denominators are 6, 4, and 12. Their least common multiple is 12. We convert the fractions: 1/6 becomes 2/12, and 1/4 becomes 3/12.",
        workingOut: "\\(\\dfrac{1}{6} = \\dfrac{2}{12}\\); \\;\\dfrac{1}{4} = \\dfrac{3}{12}\\)",
        graphData: null
      },
      {
        explanation: "Now we add the three fractions: 2/12 + 3/12 + 1/12.",
        workingOut: "\\(\\dfrac{2 + 3 + 1}{12} = \\dfrac{6}{12} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Since the sum is exactly 1/2 and all three fractions are different, Option B is correct.",
        workingOut: "\\(\\dfrac{1}{6} + \\dfrac{1}{4} + \\dfrac{1}{12} = \\dfrac{1}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q3 (three DIFFERENT fractions that sum to exactly 7/8)
  "bWfqpcDdWZr3eYp6BQrD": {
    topic: "Multiplication and division of fractions",
    question: "Which of the following shows three DIFFERENT fractions that sum to exactly \\(\\dfrac{7}{8}\\)?",
    opts: [
      "\\(\\dfrac{1}{2},\\; \\dfrac{1}{4},\\; \\dfrac{1}{8}\\)", // Correct (Index 0)
      "\\(\\dfrac{3}{8},\\; \\dfrac{3}{8},\\; \\dfrac{1}{8}\\)",
      "\\(\\dfrac{1}{3},\\; \\dfrac{1}{4},\\; \\dfrac{1}{8}\\)",
      "\\(\\dfrac{1}{2},\\; \\dfrac{1}{4},\\; \\dfrac{1}{4}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to find three different fractions that add up to exactly 7/8. Our strategy is to first filter out options with duplicate fractions and then verify the sum by converting them to a common denominator of 8.",
        workingOut: "\\(\\text{Target Sum} = \\dfrac{7}{8},\\; \\text{Condition: Three unique fractions}\\)",
        graphData: null
      },
      {
        explanation: "Option B has 3/8 repeated. Option D has 1/4 repeated. We analyze Option A: 1/2, 1/4, and 1/8 are all different.",
        workingOut: "\\(\\text{Candidate: } \\left\\{ \\dfrac{1}{2},\\; \\dfrac{1}{4},\\; \\dfrac{1}{8} \\right\\}\\)",
        graphData: null
      },
      {
        explanation: "We convert 1/2 and 1/4 to have a denominator of 8. This yields 4/8 and 2/8.",
        workingOut: "\\(\\dfrac{1}{2} = \\dfrac{4}{8}\\); \\;\\dfrac{1}{4} = \\dfrac{2}{8}\\)",
        graphData: null
      },
      {
        explanation: "We add the three fractions: 4/8 + 2/8 + 1/8.",
        workingOut: "\\(\\dfrac{4 + 2 + 1}{8} = \\dfrac{7}{8}\\)",
        graphData: null
      },
      {
        explanation: "The sum is exactly 7/8, and all three fractions are unique, confirming Option A is the correct answer.",
        workingOut: "\\(\\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} = \\dfrac{7}{8}\\)",
        graphData: null
      }
    ]
  },
  // Q4 (difference that is strictly a little more than 1/2)
  "c7bdCzuNdy4b11rYdTIv": {
    topic: "Multiplication and division of fractions",
    question: "Which pair of fractions has a difference that is strictly a little more than \\(\\dfrac{1}{2}\\)?",
    opts: [
      "\\(\\dfrac{5}{6}\\) and \\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{9}{10}\\) and \\(\\dfrac{2}{5}\\)",
      "\\(\\dfrac{7}{8}\\) and \\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{11}{12}\\) and \\(\\dfrac{1}{3}\\)" // Correct (Index 3)
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find a pair of fractions with a difference that is strictly greater than 1/2, but close to it. Our strategy is to convert the fractions to decimals to easily calculate the differences.",
        workingOut: "\\(\\text{Target Difference} > 0.50\\)",
        graphData: null
      },
      {
        explanation: "We test the fourth option: 11/12 and 1/3. 11/12 is approximately 0.9167, and 1/3 is approximately 0.3333.",
        workingOut: "\\(\\dfrac{11}{12} \\approx 0.9167\\); \\;\\dfrac{1}{3} \\approx 0.3333\\)",
        graphData: null
      },
      {
        explanation: "We find the difference: 11/12 minus 1/3. We convert 1/3 to 4/12 to perform the subtraction.",
        workingOut: "\\(\\dfrac{11}{12} - \\dfrac{4}{12} = \\dfrac{7}{12}\\)",
        graphData: null
      },
      {
        explanation: "We compare 7/12 to 1/2. 1/2 is equivalent to 6/12. Since 7/12 is larger than 6/12 by exactly 1/12 (approx. 0.0833), it is strictly a little more than 1/2.",
        workingOut: "\\(\\dfrac{7}{12} - \\dfrac{6}{12} = \\dfrac{1}{12} \\;\\Rightarrow\\; \\dfrac{7}{12} > \\dfrac{1}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q5 (Oliver bucket word problem)
  "kaEQiZzZfQd4dxQ3xZfc": {
    topic: "Multiplication and division of fractions",
    question: "Oliver collects \\(\\dfrac{3}{4}\\) of a bucket of berries, Sophia collects \\(1\\dfrac{1}{2}\\) buckets, and Noah collects \\(\\dfrac{1}{8}\\) of a bucket. How many buckets of berries did they collect in total?",
    opts: [
      "\\(2\\dfrac{1}{4}\\)",
      "\\(2\\dfrac{3}{8}\\)", // Correct (Index 1)
      "\\(2\\dfrac{1}{8}\\)",
      "\\(2\\dfrac{5}{8}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to find the total amount of berries collected. Our strategy is to add the three values together: 3/4, 1 and 1/2, and 1/8.",
        workingOut: "\\(\\text{Total} = \\dfrac{3}{4} + 1\\dfrac{1}{2} + \\dfrac{1}{8}\\)",
        graphData: null
      },
      {
        explanation: "We convert the mixed numeral 1 and 1/2 to an improper fraction, yielding 3/2.",
        workingOut: "\\(1\\dfrac{1}{2} = \\dfrac{3}{2}\\)",
        graphData: null
      },
      {
        explanation: "Next, we find a common denominator for 4, 2, and 8, which is 8. We scale 3/4 and 3/2 to have a denominator of 8.",
        workingOut: "\\(\\dfrac{3}{4} = \\dfrac{6}{8}\\); \\;\\dfrac{3}{2} = \\dfrac{12}{8}\\)",
        graphData: null
      },
      {
        explanation: "We add the numerators over 8.",
        workingOut: "\\(\\dfrac{6}{8} + \\dfrac{12}{8} + \\dfrac{1}{8} = \\dfrac{19}{8}\\)",
        graphData: null
      },
      {
        explanation: "Finally, we convert 19/8 back to a mixed numeral. 8 goes into 19 exactly 2 times with a remainder of 3, resulting in 2 and 3/8 buckets.",
        workingOut: "\\(\\dfrac{19}{8} = 2\\dfrac{3}{8}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4F Questions] Updating target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4F.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
