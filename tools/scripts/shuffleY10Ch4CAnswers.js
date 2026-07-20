import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Shuffles an array and returns the new array along with the index of the original first element (the correct answer).
function shuffleOptions(correctAnswer, distractors) {
  const options = [correctAnswer, ...distractors];
  // Fisher-Yates Shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  const correctIndex = options.indexOf(correctAnswer);
  return { options, correctIndex };
}

const targets = {
  // Q1 & Q3: Convert the equation y = 3x - 4 into general form ax + by + c = 0
  "3nfoUmpPlW1JyBj7Be7x": {
    correct: "\\(3x - y - 4 = 0\\)",
    distractors: ["\\(3x + y - 4 = 0\\)", "\\(x - 3y + 4 = 0\\)", "\\(3x - y + 4 = 0\\)"],
    solutionSteps: [
      {
        explanation: "The general form of a linear equation is represented as ax + by + c = 0, where a, b, and c are integers, and a is usually positive.",
        workingOut: "y = 3x - 4"
      },
      {
        explanation: "To rearrange the equation into this form, subtract y from both sides to group all terms on the right-hand side.",
        workingOut: "0 = 3x - y - 4"
      },
      {
        explanation: "Rewrite the expression with the variables on the left to obtain the standard general form.",
        workingOut: "3x - y - 4 = 0"
      }
    ]
  },
  "6p2RrfZC3fd2p8MV0Sgy": {
    correct: "\\(3x - y - 4 = 0\\)",
    distractors: ["\\(3x + y - 4 = 0\\)", "\\(3x - y + 4 = 0\\)", "\\(x - 3y + 4 = 0\\)"],
    solutionSteps: [
      {
        explanation: "The general form of a linear equation is represented as ax + by + c = 0, where a, b, and c are integers, and a is usually positive.",
        workingOut: "y = 3x - 4"
      },
      {
        explanation: "To rearrange the equation into this form, subtract y from both sides to group all terms on the right-hand side.",
        workingOut: "0 = 3x - y - 4"
      },
      {
        explanation: "Rewrite the expression with the variables on the left to obtain the standard general form.",
        workingOut: "3x - y - 4 = 0"
      }
    ]
  },
  // Q2: vertices of right-angled triangle
  "6ADiAbVnmHpor7amzQcz": {
    correct: "Yes, because \\(m_1 \\times m_2 = -1\\)",
    distractors: ["No, all gradients are positive", "Yes, because all sides are equal", "No, they are collinear"],
    solutionSteps: [
      {
        explanation: "To determine if the points form a right-angled triangle, we check if any two sides are perpendicular. This happens if the product of their gradients is equal to -1.",
        workingOut: "m_1 \\times m_2 = -1"
      },
      {
        explanation: "Calculate the gradient of side AB and side AC using the gradient formula.",
        workingOut: "m_{AB} = \\dfrac{0 - 5}{-3 - 2} = 1\\text{ and } m_{AC} = \\dfrac{4 - 5}{3 - 2} = -1"
      },
      {
        explanation: "Multiply the two gradients together to test for perpendicularity.",
        workingOut: "m_{AB} \\times m_{AC} = 1 \\times (-1) = -1"
      },
      {
        explanation: "Since the product is -1, side AB is perpendicular to side AC, confirming the triangle has a right angle at vertex A.",
        workingOut: "AB \\perp AC"
      }
    ]
  },
  // Q4 & Q16: Find the x-intercept of the line 2x - 5y = 10
  "8zrCEdpwd8E2wBP7I5bL": {
    correct: "\\(5\\)",
    distractors: ["\\(-2\\)", "\\(2\\)", "\\(-5\\)"],
    solutionSteps: [
      {
        explanation: "The x-intercept is the point where the line crosses the x-axis. Since any point on the x-axis has a y-coordinate of 0, we substitute y = 0 into the equation.",
        workingOut: "2x - 5(0) = 10"
      },
      {
        explanation: "Solve the remaining simplified equation for x.",
        workingOut: "2x = 10 \\;\\Rightarrow\\; x = 5"
      },
      {
        explanation: "Therefore, the x-intercept of the line is 5.",
        workingOut: "x\\text{-intercept} = 5"
      }
    ]
  },
  "ks60Yc8Cio70KjkmekRT": {
    correct: "\\(5\\)",
    distractors: ["\\(-2\\)", "\\(2\\)", "\\(-5\\)"],
    solutionSteps: [
      {
        explanation: "The x-intercept is the point where the line crosses the x-axis. Since any point on the x-axis has a y-coordinate of 0, we substitute y = 0 into the equation.",
        workingOut: "2x - 5(0) = 10"
      },
      {
        explanation: "Solve the remaining simplified equation for x.",
        workingOut: "2x = 10 \\;\\Rightarrow\\; x = 5"
      },
      {
        explanation: "Therefore, the x-intercept of the line is 5.",
        workingOut: "x\\text{-intercept} = 5"
      }
    ]
  },
  // Q5 & Q20: Which of the following lines is parallel to y = 3x - 5?
  "ABNklZMxAYL9nXsRq4zD": {
    correct: "\\(y = 3x + 10\\)",
    distractors: ["\\(y = -3x + 5\\)", "\\(y = \\dfrac{1}{3}x - 5\\)", "\\(y = -\\dfrac{1}{3}x + 2\\)"],
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. We first identify the gradient of the given line, which is in gradient-intercept form (y = mx + c).",
        workingOut: "y = 3x - 5 \\;\\Rightarrow\\; m = 3"
      },
      {
        explanation: "Now we inspect each option to find the line that also has a gradient of 3.",
        workingOut: "y = 3x + 10 \\;\\Rightarrow\\; m = 3"
      },
      {
        explanation: "Since both lines share the gradient of 3, the line parallel to the given line is y = 3x + 10.",
        workingOut: "y = 3x + 10"
      }
    ]
  },
  "u6OYYnU1e6JnkE54DRLC": {
    correct: "\\(y = 3x + 10\\)",
    distractors: ["\\(y = -3x + 5\\)", "\\(y = \\dfrac{1}{3}x - 5\\)", "\\(y = -\\dfrac{1}{3}x + 2\\)"],
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. We first identify the gradient of the given line, which is in gradient-intercept form (y = mx + c).",
        workingOut: "y = 3x - 5 \\;\\Rightarrow\\; m = 3"
      },
      {
        explanation: "Now we inspect each option to find the line that also has a gradient of 3.",
        workingOut: "y = 3x + 10 \\;\\Rightarrow\\; m = 3"
      },
      {
        explanation: "Since both lines share the gradient of 3, the line parallel to the given line is y = 3x + 10.",
        workingOut: "y = 3x + 10"
      }
    ]
  },
  // Q6 & Q18: Find the y-intercept of the line 3x + 4y = 12
  "ANaWm3nkE3M8LPrsLWkY": {
    correct: "\\(3\\)",
    distractors: ["\\(4\\)", "\\(-3\\)", "\\(-4\\)"],
    solutionSteps: [
      {
        explanation: "The y-intercept occurs where the graph crosses the y-axis, meaning the x-coordinate is 0. We substitute x = 0.",
        workingOut: "3(0) + 4y = 12"
      },
      {
        explanation: "Solve the remaining simplified linear equation for y.",
        workingOut: "4y = 12 \\;\\Rightarrow\\; y = 3"
      },
      {
        explanation: "Therefore, the y-intercept of the line is 3.",
        workingOut: "y\\text{-intercept} = 3"
      }
    ]
  },
  "o9p6p425gMxEtezzyuLU": {
    correct: "\\(3\\)",
    distractors: ["\\(4\\)", "\\(-3\\)", "\\(-4\\)"],
    solutionSteps: [
      {
        explanation: "The y-intercept occurs where the graph crosses the y-axis, meaning the x-coordinate is 0. We substitute x = 0.",
        workingOut: "3(0) + 4y = 12"
      },
      {
        explanation: "Solve the remaining simplified linear equation for y.",
        workingOut: "4y = 12 \\;\\Rightarrow\\; y = 3"
      },
      {
        explanation: "Therefore, the y-intercept of the line is 3.",
        workingOut: "y\\text{-intercept} = 3"
      }
    ]
  },
  // Q7: y-intercept of 2x + 3y = 6
  "FHbdlEmIH8yTLrEpDr7N": {
    correct: "\\(2\\)",
    distractors: ["\\(-2\\)", "\\(6\\)", "\\(3\\)"],
    solutionSteps: [
      {
        explanation: "To find the y-intercept of the line from the equation, we substitute x = 0 because the y-intercept occurs where the graph crosses the y-axis.",
        workingOut: "2(0) + 3y = 6"
      },
      {
        explanation: "Solve the simplified equation for y.",
        workingOut: "3y = 6 \\;\\Rightarrow\\; y = 2"
      },
      {
        explanation: "Thus, the y-intercept is 2.",
        workingOut: "y\\text{-intercept} = 2"
      }
    ]
  },
  // Q8 & Q12: Find the gradient and y-intercept of the line 4x - 2y + 8 = 0
  "Idp5v5rvGtfvm9yJu7Le": {
    correct: "\\(m = 2, \\; c = 4\\)",
    distractors: ["\\(m = -2, \\; c = 8\\)", "\\(m = 2, \\; c = -4\\)", "\\(m = 4, \\; c = 8\\)"],
    solutionSteps: [
      {
        explanation: "To easily identify the gradient (m) and y-intercept (c), we rewrite the equation in gradient-intercept form (y = mx + c).",
        workingOut: "4x - 2y + 8 = 0"
      },
      {
        explanation: "Rearrange the terms to isolate the y-term on one side of the equation.",
        workingOut: "2y = 4x + 8"
      },
      {
        explanation: "Divide both sides of the equation by 2 to solve for y.",
        workingOut: "y = 2x + 4"
      },
      {
        explanation: "Compare the final form with y = mx + c. The gradient m is 2 and the y-intercept c is 4.",
        workingOut: "m = 2,\\; c = 4"
      }
    ]
  },
  "PCijTGCHsrVfXWGOUb1I": {
    correct: "\\(m = 2, \\; c = 4\\)",
    distractors: ["\\(m = -2, \\; c = 8\\)", "\\(m = 2, \\; c = -4\\)", "\\(m = 4, \\; c = 8\\)"],
    solutionSteps: [
      {
        explanation: "To easily identify the gradient (m) and y-intercept (c), we rewrite the equation in gradient-intercept form (y = mx + c).",
        workingOut: "4x - 2y + 8 = 0"
      },
      {
        explanation: "Rearrange the terms to isolate the y-term on one side of the equation.",
        workingOut: "2y = 4x + 8"
      },
      {
        explanation: "Divide both sides of the equation by 2 to solve for y.",
        workingOut: "y = 2x + 4"
      },
      {
        explanation: "Compare the final form with y = mx + c. The gradient m is 2 and the y-intercept c is 4.",
        workingOut: "m = 2,\\; c = 4"
      }
    ]
  },
  // Q9 & Q14: Find the x and y intercepts of the line 2x + 3y = 6
  "MbkQ7du6gfpKZCDEvXHE": {
    correct: "x=3, y=2",
    distractors: ["x=2, y=3", "x=6, y=6", "x=3, y=3"],
    solutionSteps: [
      {
        explanation: "To find the x-intercept, we substitute y = 0 into the linear equation.",
        workingOut: "2x + 3(0) = 6 \\;\\Rightarrow\\; 2x = 6 \\;\\Rightarrow\\; x = 3"
      },
      {
        explanation: "To find the y-intercept, we substitute x = 0 into the linear equation.",
        workingOut: "2(0) + 3y = 6 \\;\\Rightarrow\\; 3y = 6 \\;\\Rightarrow\\; y = 2"
      },
      {
        explanation: "Thus, the intercepts are x = 3 and y = 2.",
        workingOut: "x\\text{-intercept} = 3,\\; y\\text{-intercept} = 2"
      }
    ]
  },
  "VwBqhtRbpizk6gFsshS1": {
    correct: "x=3, y=2",
    distractors: ["x=2, y=3", "x=6, y=6", "x=3, y=3"],
    solutionSteps: [
      {
        explanation: "To find the x-intercept, we substitute y = 0 into the linear equation.",
        workingOut: "2x + 3(0) = 6 \\;\\Rightarrow\\; 2x = 6 \\;\\Rightarrow\\; x = 3"
      },
      {
        explanation: "To find the y-intercept, we substitute x = 0 into the linear equation.",
        workingOut: "2(0) + 3y = 6 \\;\\Rightarrow\\; 3y = 6 \\;\\Rightarrow\\; y = 2"
      },
      {
        explanation: "Thus, the intercepts are x = 3 and y = 2.",
        workingOut: "x\\text{-intercept} = 3,\\; y\\text{-intercept} = 2"
      }
    ]
  },
  // Q10 & Q17: Find parallel line passing through (-2, 1) parallel to y = 5x + 3
  "Og70h06C1OxLREWIBfvs": {
    correct: "\\(y = 5x + 11\\)",
    distractors: ["\\(y = 5x - 9\\)", "\\(y = 5x + 1\\)", "\\(y = -0.2x + 1\\)"],
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. The gradient of the line y = 5x + 3 is 5, so our required line also has a gradient of m = 5.",
        workingOut: "m = 5"
      },
      {
        explanation: "Use the point-gradient formula to set up the equation with point \\((-2, 1)\\) and gradient 5.",
        workingOut: "y - y_1 = m(x - x_1)"
      },
      {
        explanation: "Substitute the values into the formula and solve for y.",
        workingOut: "y - 1 = 5(x - (-2)) \\;\\Rightarrow\\; y - 1 = 5(x + 2)"
      },
      {
        explanation: "Expand and simplify the linear equation to get the final gradient-intercept form.",
        workingOut: "y - 1 = 5x + 10 \\;\\Rightarrow\\; y = 5x + 11"
      }
    ]
  },
  "mbjPxygU2TFsL9y85cT2": {
    correct: "\\(y = 5x + 11\\)",
    distractors: ["\\(y = 5x - 9\\)", "\\(y = 5x + 1\\)", "\\(y = -0.2x + 1\\)"],
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. The gradient of the line y = 5x + 3 is 5, so our required line also has a gradient of m = 5.",
        workingOut: "m = 5"
      },
      {
        explanation: "Use the point-gradient formula to set up the equation with point \\((-2, 1)\\) and gradient 5.",
        workingOut: "y - y_1 = m(x - x_1)"
      },
      {
        explanation: "Substitute the values into the formula and solve for y.",
        workingOut: "y - 1 = 5(x - (-2)) \\;\\Rightarrow\\; y - 1 = 5(x + 2)"
      },
      {
        explanation: "Expand and simplify the linear equation to get the final gradient-intercept form.",
        workingOut: "y - 1 = 5x + 10 \\;\\Rightarrow\\; y = 5x + 11"
      }
    ]
  },
  // Q13: identify line from graph
  "VWuI4exH4k7fsFBDY8yH": {
    correct: "\\(y = -x + 3\\)",
    distractors: ["\\(y = 3x - 1\\)", "\\(y = -x - 3\\)", "\\(y = x + 3\\)"],
    solutionSteps: [
      {
        explanation: "To identify the equation, first look at where the line crosses the y-axis to find the y-intercept (c). The line crosses the y-axis at (0, 3), so c = 3.",
        workingOut: "c = 3"
      },
      {
        explanation: "Next, find the gradient (m) by calculating the rise over run between the intercepts (0, 3) and (3, 0).",
        workingOut: "m = \\dfrac{0 - 3}{3 - 0} = \\dfrac{-3}{3} = -1"
      },
      {
        explanation: "Write the equation in y = mx + c form by substituting m = -1 and c = 3.",
        workingOut: "y = -x + 3"
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Shuffle & Format] Updating standard targets...');
    for (const [id, target] of Object.entries(targets)) {
      const { options, correctIndex } = shuffleOptions(target.correct, target.distractors);
      
      const ref = db.collection('questions').doc(id);
      await ref.update({
        type: "multiple_choice",
        opts: options,
        options: options,
        a: correctIndex,
        answer: correctIndex,
        solutionSteps: target.solutionSteps.map(step => ({
          explanation: step.explanation,
          workingOut: step.workingOut,
          graphData: null
        })),
        isNew: true
      });
      console.log(`  [OK] Shuffled & Updated ID: ${id} -> Correct Index: ${correctIndex}`);
    }

    // Now update sub-questions for Rhombus (p0YL5oyCqDUkQ9WG3mqL) and Triangle Circumcentres (P0PoSxXwvrwiMPgQTdTj, WzpYQOqCGJNs56cvZSHi)
    console.log('[Shuffle & Format] Updating sub-question targets...');

    // 1. P0PoSxXwvrwiMPgQTdTj
    const refP0P = db.collection('questions').doc('P0PoSxXwvrwiMPgQTdTj');
    const p1_q1 = shuffleOptions("y = -0.75x + 14.25", ["y = -x + 13", "y = 0.75x + 3.75", "y = -0.75x + 9"]);
    const p1_q2 = shuffleOptions("y = -0.25x + 7", ["y = -4x + 37", "y = 0.25x + 3", "y = 0.25x + 5"]);
    const p1_q3 = shuffleOptions("(14.5, 3.375)", ["(9, 4)", "(12, 6)", "(10, 5)"]);
    await refP0P.update({
      type: "multiple_choice",
      isNew: true,
      subQuestions: [
        {
          id: "q12_1",
          type: "multiple_choice",
          question: "Find the perpendicular bisector of \\(AB\\).",
          opts: p1_q1.options,
          options: p1_q1.options,
          a: p1_q1.correctIndex,
          answer: p1_q1.correctIndex,
          solutionSteps: [
            {
              explanation: "The perpendicular bisector passes through the midpoint of AB and has a gradient that is the negative reciprocal of the gradient of AB.",
              workingOut: "\\text{Midpoint of AB } M = (7, 9)"
            },
            {
              explanation: "Calculate the gradient of AB: (13 - 5)/(10 - 4) = 8/6 = 4/3. The perpendicular gradient is the negative reciprocal.",
              workingOut: "m_{\\perp} = -\\dfrac{3}{4} = -0.75"
            },
            {
              explanation: "Use the point-gradient formula with midpoint (7, 9) and perpendicular gradient -0.75.",
              workingOut: "y - 9 = -0.75(x - 7) \\;\\Rightarrow\\; y = -0.75x + 14.25"
            }
          ]
        },
        {
          id: "q12_2",
          type: "multiple_choice",
          question: "Find the perpendicular bisector of \\(BC\\).",
          opts: p1_q2.options,
          options: p1_q2.options,
          a: p1_q2.correctIndex,
          answer: p1_q2.correctIndex,
          solutionSteps: [
            {
              explanation: "Perpendicular bisector passes through the midpoint of BC. Midpoint = ((10+6)/2, (13-3)/2).",
              workingOut: "\\text{Midpoint of BC } N = (8, 5)"
            },
            {
              explanation: "Calculate gradient of BC: (-3 - 13)/(6 - 10) = -16/-4 = 4. The perpendicular gradient is the negative reciprocal.",
              workingOut: "m_{\\perp} = -\\dfrac{1}{4} = -0.25"
            },
            {
              explanation: "Find equation using midpoint (8, 5) and gradient -0.25.",
              workingOut: "y - 5 = -0.25(x - 8) \\;\\Rightarrow\\; y = -0.25x + 7"
            }
          ]
        },
        {
          id: "q12_3",
          type: "multiple_choice",
          question: "Find the circumcentre coordinates.",
          opts: p1_q3.options,
          options: p1_q3.options,
          a: p1_q3.correctIndex,
          answer: p1_q3.correctIndex,
          solutionSteps: [
            {
              explanation: "The circumcentre is the intersection point of the perpendicular bisectors. We solve the two equations simultaneously.",
              workingOut: "y = -0.75x + 14.25\\text{ and } y = -0.25x + 7"
            },
            {
              explanation: "Equate the equations to solve for x.",
              workingOut: "-0.75x + 14.25 = -0.25x + 7 \\;\\Rightarrow\\; -0.5x = -7.25 \\;\\Rightarrow\\; x = 14.5"
            },
            {
              explanation: "Substitute x = 14.5 back into either equation to calculate y.",
              workingOut: "y = -0.25(14.5) + 7 = -3.625 + 7 = 3.375"
            }
          ]
        }
      ]
    });
    console.log('  [OK] Shuffled P0PoSxXwvrwiMPgQTdTj');

    // 2. WzpYQOqCGJNs56cvZSHi
    const refWzp = db.collection('questions').doc('WzpYQOqCGJNs56cvZSHi');
    const p2_q1 = shuffleOptions("y = -x + 13", ["y = x + 3", "y = -0.5x + 10.5", "y = -x + 11"]);
    const p2_q2 = shuffleOptions("y = -0.33x + 7", ["y = 3x - 13", "y = -0.33x + 5", "y = 0.33x + 3"]);
    const p2_q3 = shuffleOptions("(9, 4)", ["(8.5, 4.5)", "(10, 3)", "(9.5, 3.5)"]);
    await refWzp.update({
      type: "multiple_choice",
      isNew: true,
      subQuestions: [
        {
          id: "q12_1",
          type: "multiple_choice",
          question: "Find the perpendicular bisector of \\(AB\\).",
          opts: p2_q1.options,
          options: p2_q1.options,
          a: p2_q1.correctIndex,
          answer: p2_q1.correctIndex,
          solutionSteps: [
            {
              explanation: "Find the midpoint of AB: ((2+8)/2, (5+11)/2) = (5, 8).",
              workingOut: "\\text{Midpoint of AB } M = (5, 8)"
            },
            {
              explanation: "Calculate gradient of AB: (11 - 5)/(8 - 2) = 6/6 = 1. The perpendicular gradient is the negative reciprocal.",
              workingOut: "m_{\\perp} = -1"
            },
            {
              explanation: "Use midpoint (5, 8) and gradient -1 to write the equation.",
              workingOut: "y - 8 = -1(x - 5) \\;\\Rightarrow\\; y = -x + 13"
            }
          ]
        },
        {
          id: "q12_2",
          type: "multiple_choice",
          question: "Find the perpendicular bisector of \\(BC\\).",
          opts: p2_q2.options,
          options: p2_q2.options,
          a: p2_q2.correctIndex,
          answer: p2_q2.correctIndex,
          solutionSteps: [
            {
              explanation: "Find the midpoint of BC: ((8+4)/2, (11-1)/2) = (6, 5).",
              workingOut: "\\text{Midpoint of BC } N = (6, 5)"
            },
            {
              explanation: "Calculate gradient of BC: (-1 - 11)/(4 - 8) = -12/-4 = 3. The perpendicular gradient is the negative reciprocal.",
              workingOut: "m_{\\perp} = -\\dfrac{1}{3} \\approx -0.33"
            },
            {
              explanation: "Use midpoint (6, 5) and gradient -1/3 to write the equation.",
              workingOut: "y - 5 = -\\dfrac{1}{3}(x - 6) \\;\\Rightarrow\\; y = -\\dfrac{1}{3}x + 7"
            }
          ]
        },
        {
          id: "q12_3",
          type: "multiple_choice",
          question: "Find the circumcentre coordinates.",
          opts: p2_q3.options,
          options: p2_q3.options,
          a: p2_q3.correctIndex,
          answer: p2_q3.correctIndex,
          solutionSteps: [
            {
              explanation: "The circumcentre is the point where the perpendicular bisectors intersect. Solve y = -x + 13 and y = -1/3x + 7 simultaneously.",
              workingOut: "-x + 13 = -\\dfrac{1}{3}x + 7"
            },
            {
              explanation: "Solve the linear equation for x.",
              workingOut: "-\\dfrac{2}{3}x = -6 \\;\\Rightarrow\\; x = 9"
            },
            {
              explanation: "Substitute x = 9 back into y = -x + 13 to solve for y.",
              workingOut: "y = -9 + 13 = 4 \\;\\Rightarrow\\; (9, 4)"
            }
          ]
        }
      ]
    });
    console.log('  [OK] Shuffled WzpYQOqCGJNs56cvZSHi');

    // 3. p0YL5oyCqDUkQ9WG3mqL
    const refP0Y = db.collection('questions').doc('p0YL5oyCqDUkQ9WG3mqL');
    const p3_q1 = shuffleOptions("All four sides are equal in length", ["Only the opposite sides are parallel"]);
    const p3_q2 = shuffleOptions("5.66", ["8.94", "11.31", "4.00"]);
    await refP0Y.update({
      type: "multiple_choice",
      isNew: true,
      subQuestions: [
        {
          id: "q16_1",
          type: "multiple_choice",
          question: "Which property best proves \\(ABCD\\) is a rhombus?",
          opts: p3_q1.options,
          options: p3_q1.options,
          a: p3_q1.correctIndex,
          answer: p3_q1.correctIndex,
          solutionSteps: [
            {
              explanation: "A rhombus is mathematically defined as a quadrilateral where all four sides are equal in length.",
              workingOut: "AB = BC = CD = DA"
            },
            {
              explanation: "Calculate each side length using the distance formula. For example, AB is the distance between (2, -1) and (6, 7).",
              workingOut: "AB = \\sqrt{(6-2)^2 + (7-(-1))^2} = \\sqrt{16+64} = \\sqrt{80}"
            },
            {
              explanation: "Since all four side lengths are equal to square root of 80, the shape is a rhombus.",
              workingOut: "AB = BC = CD = DA = \\sqrt{80}"
            }
          ]
        },
        {
          id: "q16_2",
          type: "multiple_choice",
          question: "Find the length of diagonal \\(AC\\).",
          opts: p3_q2.options,
          options: p3_q2.options,
          a: p3_q2.correctIndex,
          answer: p3_q2.correctIndex,
          solutionSteps: [
            {
              explanation: "To find the diagonal length AC, we apply the distance formula between A(2, -1) and C(-2, 3).",
              workingOut: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"
            },
            {
              explanation: "Substitute the coordinates into the formula.",
              workingOut: "AC = \\sqrt{(-2 - 2)^2 + (3 - (-1))^2} = \\sqrt{(-4)^2 + (4)^2}"
            },
            {
              explanation: "Calculate the sum under the square root and round to two decimal places.",
              workingOut: "AC = \\sqrt{16 + 16} = \\sqrt{32} \\approx 5.66"
            }
          ]
        }
      ]
    });
    console.log('  [OK] Shuffled p0YL5oyCqDUkQ9WG3mqL');

    console.log('\nAll Year 10 Chapter 4C targets updated and randomly shuffled.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
