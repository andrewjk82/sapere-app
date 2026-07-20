import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "3FVOttEX3vqLP9y56ro8": {
    question: "Find the equation of the line passing through \\((6, 7)\\) and \\((-3, 16)\\) in \\(y = mx + c\\) form.",
    opts: ["y = -x + 11", "y = x + 1", "y = -x + 13", "y = -2x + 19"],
    a: 2,
    solutionSteps: [
      {
        explanation: "To find the equation of the line passing through two coordinates, we first determine its gradient.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the given points \\((6, 7)\\) and \\((-3, 16)\\) into the gradient formula.",
        workingOut: "\\(m = \\dfrac{16 - 7}{-3 - 6} = \\dfrac{9}{-9} = -1\\)",
        graphData: null
      },
      {
        explanation: "Now apply the point-gradient formula using the point \\((6, 7)\\) and the gradient \\(-1\\), then simplify.",
        workingOut: "\\(y - 7 = -1(x - 6) \\;\\Rightarrow\\; y - 7 = -x + 6 \\;\\Rightarrow\\; y = -x + 13\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "812ZqdonrelA508apsgB": {
    question: "Find the equation of the line that passes through the point \\((2, 3)\\) with a gradient of \\(4\\). Write in gradient-intercept form.",
    opts: ["y = 4x + 3", "y = 4x - 5", "y = 2x + 4", "y = 4x - 11"],
    a: 1,
    solutionSteps: [
      {
        explanation: "We use the point-gradient formula to establish the equation of a line given its gradient (m) and a point it passes through.",
        workingOut: "\\(y - y_1 = m(x - x_1)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the gradient \\(m = 4\\) and coordinates \\((2, 3)\\) into the formula.",
        workingOut: "\\(y - 3 = 4(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the bracket and isolate y to obtain the standard gradient-intercept form.",
        workingOut: "\\(y - 3 = 4x - 8 \\;\\Rightarrow\\; y = 4x - 5\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "bevzkk3ZByBTEizTkw20": {
    question: "Find the equation of the line passing through \\((5, 6)\\) and \\((-1, 12)\\) in \\(y = mx + c\\) form.",
    opts: ["y = 2x - 4", "y = -x + 6", "y = -2x + 16", "y = -x + 11"],
    a: 3,
    solutionSteps: [
      {
        explanation: "First, determine the gradient (m) of the line using the two given coordinates.",
        workingOut: "\\(m = \\dfrac{12 - 6}{-1 - 5} = \\dfrac{6}{-6} = -1\\)",
        graphData: null
      },
      {
        explanation: "Next, use the point-gradient formula with the gradient \\(-1\\) and the point \\((5, 6)\\).",
        workingOut: "\\(y - 6 = -1(x - 5)\\)",
        graphData: null
      },
      {
        explanation: "Expand the right side and solve for y to write the final equation.",
        workingOut: "\\(y - 6 = -x + 5 \\;\\Rightarrow\\; y = -x + 11\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "BJJGDa6cTxtaoqkhXEuA": {
    question: "Find the equation of the line passing through \\((-1, 4)\\) and \\((2, 10)\\). Write in gradient-intercept form.",
    opts: ["y = 2x + 4", "y = 3x + 7", "y = 2x + 6", "y = 2x + 8"],
    a: 2,
    solutionSteps: [
      {
        explanation: "First, calculate the gradient (slope) of the line passing through the two coordinates.",
        workingOut: "\\(m = \\dfrac{10 - 4}{2 - (-1)} = \\dfrac{6}{3} = 2\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula with gradient \\(2\\) and point \\((2, 10)\\) to set up the equation.",
        workingOut: "\\(y - 10 = 2(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the right side and simplify to get the final gradient-intercept form.",
        workingOut: "\\(y - 10 = 2x - 4 \\;\\Rightarrow\\; y = 2x + 6\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "gAuI0LwaCn2Mx9jcfUJY": {
    question: "Find the equation of the line passing through \\((4, 5)\\) and \\((-2, 17)\\) in \\(y = mx + c\\) form.",
    opts: ["y = -2x + 9", "y = -2x + 13", "y = 2x - 3", "y = -x + 9"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Start by finding the gradient of the line using the two coordinate endpoints.",
        workingOut: "\\(m = \\dfrac{17 - 5}{-2 - 4} = \\dfrac{12}{-6} = -2\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula with the gradient \\(-2\\) and the point \\((4, 5)\\).",
        workingOut: "\\(y - 5 = -2(x - 4)\\)",
        graphData: null
      },
      {
        explanation: "Expand the bracket and solve for y to get the final equation.",
        workingOut: "\\(y - 5 = -2x + 8 \\;\\Rightarrow\\; y = -2x + 13\\)",
        graphData: null
      }
    ]
  },
  // Q6 (Duplicate of Q2)
  "Iu6qpGYu1QgxUTI9D8JP": {
    question: "Find the equation of the line that passes through the point \\((2, 3)\\) with a gradient of \\(4\\). Write in gradient-intercept form.",
    opts: ["y = 4x + 3", "y = 4x - 5", "y = 2x + 4", "y = 4x - 11"],
    a: 1,
    solutionSteps: [
      {
        explanation: "We use the point-gradient formula to establish the equation of a line given its gradient (m) and a point it passes through.",
        workingOut: "\\(y - y_1 = m(x - x_1)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the gradient \\(m = 4\\) and coordinates \\((2, 3)\\) into the formula.",
        workingOut: "\\(y - 3 = 4(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the bracket and isolate y to obtain the standard gradient-intercept form.",
        workingOut: "\\(y - 3 = 4x - 8 \\;\\Rightarrow\\; y = 4x - 5\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "jpyuVlIwIjb8vf9eI25J": {
    question: "Find the equation of the line passing through \\((-4, 5)\\) and \\((2, 17)\\) in \\(y = mx + c\\) form.",
    opts: ["y = 2x + 13", "y = 2x + 9", "y = -2x + 13", "y = x + 9"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Determine the gradient (slope) of the line from the two coordinates.",
        workingOut: "\\(m = \\dfrac{17 - 5}{2 - (-4)} = \\dfrac{12}{6} = 2\\)",
        graphData: null
      },
      {
        explanation: "Set up the point-gradient equation using the gradient \\(2\\) and the point \\((2, 17)\\).",
        workingOut: "\\(y - 17 = 2(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the equation into gradient-intercept form.",
        workingOut: "\\(y - 17 = 2x - 4 \\;\\Rightarrow\\; y = 2x + 13\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "kyjavxvoShr6h9xtMdei": {
    question: "Find the equation of the line passing through \\((4, 7)\\) and \\((-2, 16)\\) in \\(y = mx + c\\) form.",
    opts: ["y = -1.5x + 11", "y = 1.5x + 1", "y = -2x + 15", "y = -1.5x + 13"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Find the gradient (m) using the two coordinates.",
        workingOut: "\\(m = \\dfrac{16 - 7}{-2 - 4} = \\dfrac{9}{-6} = -1.5\\)",
        graphData: null
      },
      {
        explanation: "Substitute the gradient \\(-1.5\\) and coordinate point \\((4, 7)\\) into the point-gradient formula.",
        workingOut: "\\(y - 7 = -1.5(x - 4)\\)",
        graphData: null
      },
      {
        explanation: "Expand the bracket and solve for y to get the final equation.",
        workingOut: "\\(y - 7 = -1.5x + 6 \\;\\Rightarrow\\; y = -1.5x + 13\\)",
        graphData: null
      }
    ]
  },
  // Q9 (Duplicate of Q4)
  "LFrnnZSzJVQ4G7pyKSAm": {
    question: "Find the equation of the line passing through \\((-1, 4)\\) and \\((2, 10)\\). Write in gradient-intercept form.",
    opts: ["y = 2x + 4", "y = 3x + 7", "y = 2x + 6", "y = 2x + 8"],
    a: 2,
    solutionSteps: [
      {
        explanation: "First, calculate the gradient (slope) of the line passing through the two coordinates.",
        workingOut: "\\(m = \\dfrac{10 - 4}{2 - (-1)} = \\dfrac{6}{3} = 2\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula with gradient \\(2\\) and point \\((2, 10)\\) to set up the equation.",
        workingOut: "\\(y - 10 = 2(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the right side and simplify to get the final gradient-intercept form.",
        workingOut: "\\(y - 10 = 2x - 4 \\;\\Rightarrow\\; y = 2x + 6\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "neqQrxHYvtq5tBDkl0dV": {
    question: "Find the equation of the line passing through \\((5, -2)\\) with gradient \\(m = -3\\). Write in general form \\(ax + by + c = 0\\).",
    opts: ["3x - y - 17 = 0", "3x + y - 13 = 0", "x + 3y + 1 = 0", "3x + y + 13 = 0"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Use the point-gradient formula to set up the equation using the given gradient \\(-3\\) and point \\((5, -2)\\).",
        workingOut: "\\(y - y_1 = m(x - x_1)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the values into the formula.",
        workingOut: "\\(y - (-2) = -3(x - 5) \\;\\Rightarrow\\; y + 2 = -3x + 15\\)",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to set the equation to zero in standard general form.",
        workingOut: "\\(3x + y - 13 = 0\\)",
        graphData: null
      }
    ]
  },
  // Q11 (Duplicate of Q10)
  "NPgm4yhbeHp3sHzgZI1n": {
    question: "Find the equation of the line passing through \\((5, -2)\\) with gradient \\(m = -3\\). Write in general form \\(ax + by + c = 0\\).",
    opts: ["3x - y - 17 = 0", "3x + y - 13 = 0", "x + 3y + 1 = 0", "3x + y + 13 = 0"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Use the point-gradient formula to set up the equation using the given gradient \\(-3\\) and point \\((5, -2)\\).",
        workingOut: "\\(y - y_1 = m(x - x_1)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the values into the formula.",
        workingOut: "\\(y - (-2) = -3(x - 5) \\;\\Rightarrow\\; y + 2 = -3x + 15\\)",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to set the equation to zero in standard general form.",
        workingOut: "\\(3x + y - 13 = 0\\)",
        graphData: null
      }
    ]
  },
  // Q12
  "OHlvxJv00ZqrRWwl0ozt": {
    question: "Find the equation of the line passing through \\((4, -3)\\) that is perpendicular to \\(y = 2x - 1\\).",
    opts: ["y = -0.5x + 1", "y = 2x - 11", "y = -0.5x - 1", "y = 0.5x - 5"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Perpendicular lines have gradients that multiply to -1. The gradient of the given line is 2, so the required gradient is the negative reciprocal.",
        workingOut: "\\(m_{\\perp} = -\\dfrac{1}{2} = -0.5\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula with gradient \\(-0.5\\) and point \\((4, -3)\\).",
        workingOut: "\\(y - (-3) = -0.5(x - 4)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the equation to write it in gradient-intercept form.",
        workingOut: "\\(y + 3 = -0.5x + 2 \\;\\Rightarrow\\; y = -0.5x - 1\\)",
        graphData: null
      }
    ]
  },
  // Q13
  "QCtbUsju20Nvho9kJxec": {
    question: "Find the equation of the line passing through \\((-3, 7)\\) and \\((2, 12)\\) in \\(y = mx + c\\) form.",
    opts: ["y = -x + 4", "y = x + 4", "y = -x + 10", "y = x + 10"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Calculate the gradient (slope) from the two coordinate points.",
        workingOut: "\\(m = \\dfrac{12 - 7}{2 - (-3)} = \\dfrac{5}{5} = 1\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula with gradient \\(1\\) and point \\((2, 12)\\).",
        workingOut: "\\(y - 12 = 1(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the terms to get the final equation.",
        workingOut: "\\(y - 12 = x - 2 \\;\\Rightarrow\\; y = x + 10\\)",
        graphData: null
      }
    ]
  },
  // Q14
  "qMhtIjv6KKVqG50Lm76l": {
    question: "Find the equation of the line passing through \\((0, 2)\\) and \\((1, -2)\\).",
    opts: ["y = -4x + 2", "y = x - 2", "y = 4x + 2", "y = -2x + 4"],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are given the y-intercept directly as (0, 2), so c = 2. Now calculate the gradient.",
        workingOut: "\\(m = \\dfrac{-2 - 2}{1 - 0} = \\dfrac{-4}{1} = -4\\)",
        graphData: null
      },
      {
        explanation: "Substitute the gradient m = -4 and y-intercept c = 2 into y = mx + c.",
        workingOut: "\\(y = -4x + 2\\)",
        graphData: null
      }
    ]
  },
  // Q15 (Duplicate of Q12)
  "tSLfrUXelZdaBT9Aiopa": {
    question: "Find the equation of the line passing through \\((4, -3)\\) that is perpendicular to \\(y = 2x - 1\\).",
    opts: ["y = -0.5x + 1", "y = 2x - 11", "y = -0.5x - 1", "y = 0.5x - 5"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Perpendicular lines have gradients that multiply to -1. The gradient of the given line is 2, so the required gradient is the negative reciprocal.",
        workingOut: "\\(m_{\\perp} = -\\dfrac{1}{2} = -0.5\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula with gradient \\(-0.5\\) and point \\((4, -3)\\).",
        workingOut: "\\(y - (-3) = -0.5(x - 4)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the equation to write it in gradient-intercept form.",
        workingOut: "\\(y + 3 = -0.5x + 2 \\;\\Rightarrow\\; y = -0.5x - 1\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4D Questions] Syncing and shuffling target documents direct by ID...');
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
        console.log(`  [SHUFFLED & UPDATED] ${docId}`);
        success++;
      }
    }

    console.log(`\nSuccessfully updated and shuffed all ${success} questions for Year 10 Chapter 4D.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
