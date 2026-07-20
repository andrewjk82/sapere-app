import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "y10-2g-q10": {
    question: "A square box of side 9 cm is leaning against a vertical wall. Find the height of point C above the floor in exact form.",
    opts: ["\\(3\\sqrt{2}\\)", "\\(\\sqrt{7}+\\sqrt{3}\\)", "\\(\\sqrt{7}-\\sqrt{3}\\)", "\\(4\\sqrt{2}+7\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Identify the similar right-angled triangles formed by the box corners and the wall/floor intersections.",
        workingOut: "\\triangle OBC \\sim \\triangle PDA",
        graphData: null
      },
      {
        explanation: "Apply Pythagoras theorem and coordinate ratios to express height of point C.",
        workingOut: "h_C = 3\\sqrt{2}",
        graphData: null
      }
    ]
  },
  // Q2
  "y10-2g-q11": {
    question: "Simplify the surd sequence: \\(\\dfrac{1}{\\sqrt{3} + \\sqrt{5}} + \\dfrac{1}{\\sqrt{5} + \\sqrt{7}} + \\dfrac{1}{\\sqrt{7} + \\sqrt{9}} + \\dfrac{1}{\\sqrt{9} + \\sqrt{11}}\\).",
    opts: ["\\(3\\sqrt{2}\\)", "\\(\\sqrt{7}-\\sqrt{3}\\)", "\\(\\sqrt{7}+\\sqrt{3}\\)", "\\(\\dfrac{\\sqrt{11}-\\sqrt{3}}{2}\\)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Rationalise the denominator of each individual fraction by multiplying by the conjugate.",
        workingOut: "\\dfrac{1}{\\sqrt{a} + \\sqrt{b}} = \\dfrac{\\sqrt{b} - \\sqrt{a}}{b - a}",
        graphData: null
      },
      {
        explanation: "Apply this conjugate multiplication to all four terms in the series.",
        workingOut: "\\dfrac{\\sqrt{5}-\\sqrt{3}}{2} + \\dfrac{\\sqrt{7}-\\sqrt{5}}{2} + \\dfrac{\\sqrt{9}-\\sqrt{7}}{2} + \\dfrac{\\sqrt{11}-\\sqrt{9}}{2}",
        graphData: null
      },
      {
        explanation: "Sum the terms and cancel out the intermediate values (telescoping series).",
        workingOut: "\\dfrac{\\sqrt{11} - \\sqrt{3}}{2}",
        graphData: null
      }
    ]
  },
  // Q3
  "y10-2g-q12": {
    question: "Simplify: \\(\\dfrac{\\sqrt{2} + 1}{2 + \\sqrt{6 + 4\\sqrt{2}}} - \\dfrac{\\sqrt{2} - 1}{2 + \\sqrt{6 - 4\\sqrt{2}}}\\).",
    opts: ["\\(\\sqrt{7}-\\sqrt{3}\\)", "\\(\\sqrt{7}+\\sqrt{3}\\)", "\\(\\dfrac{2}{7}\\)", "\\(3\\sqrt{2}\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Simplify the nested double radicals under the square root.",
        workingOut: "\\sqrt{6 \\pm 4\\sqrt{2}} = \\sqrt{(2 \\pm \\sqrt{2})^2} = 2 \\pm \\sqrt{2}",
        graphData: null
      },
      {
        explanation: "Substitute the simplified nested radical terms back into the original fraction.",
        workingOut: "\\dfrac{\\sqrt{2} + 1}{2 + (2 + \\sqrt{2})} - \\dfrac{\\sqrt{2} - 1}{2 + (2 - \\sqrt{2})}",
        graphData: null
      },
      {
        explanation: "Simplify the denominators and rationalise the resulting fractions to find the answer.",
        workingOut: "\\dfrac{\\sqrt{2}+1}{4+\\sqrt{2}} - \\dfrac{\\sqrt{2}-1}{4-\\sqrt{2}} = \\dfrac{2}{7}",
        graphData: null
      }
    ]
  },
  // Q4
  "y10-2g-q13a": {
    question: "Calculate the value of the series: \\(1 + [\\sqrt{2}] + [\\sqrt{3}] + 2 + ... + [\\sqrt{80}] + 9\\), where \\([x]\\) is the floor function.",
    opts: ["\\(906\\)", "\\(456\\)", "\\(453\\)", "\\(451\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Group the terms by their integer floor values. Find how many terms yield each integer.",
        workingOut: "n^2 \\le x < (n+1)^2 \\;\\Rightarrow\\; \\text{number of terms is } (n+1)^2 - n^2 = 2n + 1",
        graphData: null
      },
      {
        explanation: "Sum the counts for each integer level from 1 to 8.",
        workingOut: "\\sum_{n=1}^{8} n(2n+1) + 9",
        graphData: null
      },
      {
        explanation: "Evaluate the sum value.",
        workingOut: "444 + 9 = 453",
        graphData: null
      }
    ]
  },
  // Q5
  "y10-2g-q13b": {
    question: "Calculate the sum: \\(1 + [\\sqrt{2}] + [\\sqrt{3}] + 2 + ... + [\\sqrt{150}]\\), where \\([x]\\) is the floor function.",
    opts: ["\\(1162\\)", "\\(1160\\)", "\\(2324\\)", "\\(1165\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Group the terms by their integer values based on square numbers.",
        workingOut: "\\text{For level } n, \\text{ there are } 2n+1 \\text{ terms.}",
        graphData: null
      },
      {
        explanation: "Sum from n=1 to 11, and add the remaining terms for level 12 (from 144 to 150).",
        workingOut: "\\sum_{n=1}^{11} n(2n+1) + 12 \\times 7",
        graphData: null
      },
      {
        explanation: "Perform the final calculation.",
        workingOut: "1078 + 84 = 1162",
        graphData: null
      }
    ]
  },
  // Q6
  "y10-2g-q14ai": {
    question: "In the diagram, AHFD and HBCF are squares with common side FH of length 3. Diagonal AC is drawn and E is a point on AC such that AE = 3. G is a point on AC so that FG is parallel to DE. Find the exact length of AC.",
    opts: ["\\(\\dfrac{9\\sqrt{5}}{2}\\)", "\\(3\\sqrt{7}\\)", "\\(3\\sqrt{5}\\)", "\\(-3\\sqrt{5}\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Consider the rectangle ABDC of width 6 and height 3. Find the length of diagonal AC using Pythagoras theorem.",
        workingOut: "AC^2 = AB^2 + BC^2 = 6^2 + 3^2",
        graphData: null
      },
      {
        explanation: "Evaluate the square root to find the exact length of diagonal AC.",
        workingOut: "AC = \\sqrt{36 + 9} = \\sqrt{45} = 3\\sqrt{5}",
        graphData: null
      }
    ]
  },
  // Q7
  "y10-2g-q14aii": {
    question: "Refer to the same diagram. Find the exact length of EC.",
    opts: ["\\(\\sqrt{7}+\\sqrt{3}\\)", "\\(3\\sqrt{5}-3\\)", "\\(\\sqrt{7}-\\sqrt{3}\\)", "\\(3\\sqrt{2}\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Since AE = 3, subtract AE from the total diagonal length AC.",
        workingOut: "EC = AC - AE",
        graphData: null
      },
      {
        explanation: "Substitute the values to find the exact length of EC.",
        workingOut: "EC = 3\\sqrt{5} - 3",
        graphData: null
      }
    ]
  },
  // Q8
  "y10-2g-q14aiii": {
    question: "Refer to the same diagram. Find the exact length of EG.",
    opts: ["\\(\\sqrt{7}+\\sqrt{3}\\)", "\\(\\sqrt{7}-\\sqrt{3}\\)", "\\(\\dfrac{3\\sqrt{5}-3}{2}\\)", "\\(3\\sqrt{2}\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Use properties of parallel lines DE and FG to establish ratios between segment lengths.",
        workingOut: "\\dfrac{EG}{EC} = \\dfrac{1}{2}",
        graphData: null
      },
      {
        explanation: "Multiply the ratio to solve for the exact length of EG.",
        workingOut: "EG = \\dfrac{3\\sqrt{5}-3}{2}",
        graphData: null
      }
    ]
  },
  // Q9
  "y10-2g-q14aiv": {
    question: "Refer to the same diagram. Find the exact length of GC.",
    opts: ["\\(\\dfrac{3\\sqrt{5}-3}{2}\\)", "\\(3\\sqrt{2}\\)", "\\(\\sqrt{7}-\\sqrt{3}\\)", "\\(\\sqrt{7}+\\sqrt{3}\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Subtract segment EG from segment EC to obtain the length of GC.",
        workingOut: "GC = EC - EG",
        graphData: null
      },
      {
        explanation: "Substitute the values and simplify.",
        workingOut: "GC = (3\\sqrt{5} - 3) - \\dfrac{3\\sqrt{5}-3}{2} = \\dfrac{3\\sqrt{5}-3}{2}",
        graphData: null
      }
    ]
  },
  // Q10
  "y10-2g-q14b": {
    question: "Refer to the same diagram. Find the value of \\(EG^2 + 3EG\\).",
    opts: ["6", "Yes, by substituting \\(EG = \\dfrac{3(\\sqrt{5}-1)}{2}\\)", "9", "12"],
    a: 2, // Correct is 9
    solutionSteps: [
      {
        explanation: "Evaluate the quadratic expression using the exact value of EG.",
        workingOut: "EG = \\dfrac{3(\\sqrt{5}-1)}{2}",
        graphData: null
      },
      {
        explanation: "Substitute and expand the terms.",
        workingOut: "\\left(\\dfrac{3(\\sqrt{5}-1)}{2}\\right)^2 + 3\\left(\\dfrac{3(\\sqrt{5}-1)}{2}\\right)",
        graphData: null
      },
      {
        explanation: "Simplify the equation to find the final numerical value.",
        workingOut: "\\dfrac{9(6 - 2\\sqrt{5})}{4} + \\dfrac{9\\sqrt{5}-9}{2} = \\dfrac{54-18\\sqrt{5}}{4} + \\dfrac{18\\sqrt{5}-18}{4} = \\dfrac{36}{4} = 9",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch2G First 10] Migrating 10 questions to MCQ with dispersed answers...');
    let success = 0;

    for (const [docId, update] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();
      if (doc.exists) {
        await ref.update({
          type: "multiple_choice",
          question: update.question,
          opts: update.opts,
          options: update.opts,
          a: update.a,
          answer: update.a,
          solutionSteps: update.solutionSteps,
          isNew: true,
          solution: null
        });
        console.log(`  [MIGRATED] ${docId} -> Answer Index: ${update.a}`);
        success++;
      }
    }

    console.log(`\nSuccessfully updated and shuffed all ${success} questions for Year 10 Chapter 2G.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
