import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Standard updates with shuffled indexes
const standardTargets = {
  "MbkQ7du6gfpKZCDEvXHE": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line \\(2x + 3y = 6\\).",
    opts: ["x=2, y=3", "x=3, y=2", "x=6, y=6", "x=3, y=3"],
    a: 1,
    solutionSteps: [
      {
        explanation: "To find the x-intercept, we substitute y = 0 into the linear equation.",
        workingOut: "\\(2x + 3(0) = 6 \\;\\Rightarrow\\; 2x = 6 \\;\\Rightarrow\\; x = 3\\)",
        graphData: null
      },
      {
        explanation: "To find the y-intercept, we substitute x = 0 into the linear equation.",
        workingOut: "\\(2(0) + 3y = 6 \\;\\Rightarrow\\; 3y = 6 \\;\\Rightarrow\\; y = 2\\)",
        graphData: null
      },
      {
        explanation: "Thus, the intercepts are x = 3 and y = 2.",
        workingOut: "\\(x\\text{-intercept} = 3,\\; y\\text{-intercept} = 2\\)",
        graphData: null
      }
    ]
  },
  "VwBqhtRbpizk6gFsshS1": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line \\(2x + 3y = 6\\).",
    opts: ["x=2, y=3", "x=3, y=2", "x=6, y=6", "x=3, y=3"],
    a: 1,
    solutionSteps: [
      {
        explanation: "To find the x-intercept, we substitute y = 0 into the linear equation.",
        workingOut: "\\(2x + 3(0) = 6 \\;\\Rightarrow\\; 2x = 6 \\;\\Rightarrow\\; x = 3\\)",
        graphData: null
      },
      {
        explanation: "To find the y-intercept, we substitute x = 0 into the linear equation.",
        workingOut: "\\(2(0) + 3y = 6 \\;\\Rightarrow\\; 3y = 6 \\;\\Rightarrow\\; y = 2\\)",
        graphData: null
      },
      {
        explanation: "Thus, the intercepts are x = 3 and y = 2.",
        workingOut: "\\(x\\text{-intercept} = 3,\\; y\\text{-intercept} = 2\\)",
        graphData: null
      }
    ]
  },
  "o9p6p425gMxEtezzyuLU": {
    question: "Find the \\(y\\)-intercept of the line \\(3x + 4y = 12\\).",
    opts: ["\\(4\\)", "\\(-3\\)", "\\(-4\\)", "\\(3\\)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "The y-intercept occurs where the graph crosses the y-axis, meaning the x-coordinate is 0. We substitute x = 0.",
        workingOut: "\\(3(0) + 4y = 12\\)",
        graphData: null
      },
      {
        explanation: "Solve the remaining simplified linear equation for y.",
        workingOut: "\\(4y = 12 \\;\\Rightarrow\\; y = 3\\)",
        graphData: null
      },
      {
        explanation: "Therefore, the y-intercept of the line is 3.",
        workingOut: "\\(y\\text{-intercept} = 3\\)",
        graphData: null
      }
    ]
  },
  "Og70h06C1OxLREWIBfvs": {
    question: "Find the equation of the line passing through \\((-2, 1)\\) that is parallel to \\(y = 5x + 3\\).",
    opts: ["\\(y = 5x - 9\\)", "\\(y = 5x + 1\\)", "\\(y = 5x + 11\\)", "\\(y = -0.2x + 1\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. The gradient of the line y = 5x + 3 is 5, so our required line also has a gradient of m = 5.",
        workingOut: "\\(m = 5\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula to set up the equation with point \\((-2, 1)\\) and gradient 5.",
        workingOut: "\\(y - y_1 = m(x - x_1)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the values into the formula and solve for y.",
        workingOut: "\\(y - 1 = 5(x - (-2)) \\;\\Rightarrow\\; y - 1 = 5(x + 2)\\)",
        graphData: null
      },
      {
        explanation: "Expand and simplify the linear equation to get the final gradient-intercept form.",
        workingOut: "\\(y - 1 = 5x + 10 \\;\\Rightarrow\\; y = 5x + 11\\)",
        graphData: null
      }
    ]
  },
  "PCijTGCHsrVfXWGOUb1I": {
    question: "Find the gradient and \\(y\\)-intercept of the line \\(4x - 2y + 8 = 0\\).",
    opts: ["\\(m = -2, \\; c = 8\\)", "\\(m = 2, \\; c = 4\\)", "\\(m = 2, \\; c = -4\\)", "\\(m = 4, \\; c = 8\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "To easily identify the gradient (m) and y-intercept (c), we rewrite the equation in gradient-intercept form (y = mx + c).",
        workingOut: "\\(4x - 2y + 8 = 0\\)",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to isolate the y-term on one side of the equation.",
        workingOut: "\\(2y = 4x + 8\\)",
        graphData: null
      },
      {
        explanation: "Divide both sides of the equation by 2 to solve for y.",
        workingOut: "\\(y = 2x + 4\\)",
        graphData: null
      },
      {
        explanation: "Compare the final form with y = mx + c. The gradient m is 2 and the y-intercept c is 4.",
        workingOut: "\\(m = 2,\\; c = 4\\)",
        graphData: null
      }
    ]
  },
  "u6OYYnU1e6JnkE54DRLC": {
    question: "Which of the following lines is parallel to \\(y = 3x - 5\\)?",
    opts: ["\\(y = -3x + 5\\)", "\\(y = 3x + 10\\)", "\\(y = \\dfrac{1}{3}x - 5\\)", "\\(y = -\\dfrac{1}{3}x + 2\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. We first identify the gradient of the given line, which is in gradient-intercept form (y = mx + c).",
        workingOut: "\\(y = 3x - 5 \\;\\Rightarrow\\; m = 3\\)",
        graphData: null
      },
      {
        explanation: "Now we inspect each option to find the line that also has a gradient of 3.",
        workingOut: "\\(y = 3x + 10 \\;\\Rightarrow\\; m = 3\\)",
        graphData: null
      },
      {
        explanation: "Since both lines share the gradient of 3, the line parallel to the given line is y = 3x + 10.",
        workingOut: "\\(y = 3x + 10\\)",
        graphData: null
      }
    ]
  },
  "VWuI4exH4k7fsFBDY8yH": {
    question: "Use the graph to identify the equation of the line.",
    opts: ["\\(y = 3x - 1\\)", "\\(y = -x - 3\\)", "\\(y = -x + 3\\)", "\\(y = x + 3\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "To identify the equation, first look at where the line crosses the y-axis to find the y-intercept (c). The line crosses the y-axis at (0, 3), so c = 3.",
        workingOut: "\\(c = 3\\)",
        graphData: null
      },
      {
        explanation: "Next, find the gradient (m) by calculating the rise over run between the intercepts (0, 3) and (3, 0).",
        workingOut: "\\(m = \\dfrac{0 - 3}{3 - 0} = \\dfrac{-3}{3} = -1\\)",
        graphData: null
      },
      {
        explanation: "Write the equation in y = mx + c form by substituting m = -1 and c = 3.",
        workingOut: "\\(y = -x + 3\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4C Remaining] Syncing standard remaining target documents direct...');
    let success = 0;

    for (const [docId, update] of Object.entries(standardTargets)) {
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
        console.log(`  [UPDATED] Direct: ${docId}`);
        success++;
      }
    }

    // 2. Process subQuestion doc P0PoSxXwvrwiMPgQTdTj
    const refP0P = db.collection('questions').doc('P0PoSxXwvrwiMPgQTdTj');
    const docP0P = await refP0P.get();
    if (docP0P.exists) {
      await refP0P.update({
        question: "The vertices of \\(\\triangle ABC\\) are \\(A(4, 5)\\), \\(B(10, 13)\\), and \\(C(6, -3)\\).",
        type: "multiple_choice",
        subQuestions: [
          {
            id: "q12_1",
            type: "multiple_choice",
            question: "Find the perpendicular bisector of \\(AB\\).",
            opts: ["y = -0.75x + 14.25", "y = -x + 13", "y = 0.75x + 3.75", "y = -0.75x + 9"],
            options: ["y = -0.75x + 14.25", "y = -x + 13", "y = 0.75x + 3.75", "y = -0.75x + 9"],
            a: 0,
            answer: 0,
            solutionSteps: [
              {
                explanation: "The perpendicular bisector passes through the midpoint of AB and has a gradient that is the negative reciprocal of the gradient of AB.",
                workingOut: "\\text{Midpoint of AB } M = (7, 9)",
                graphData: null
              },
              {
                explanation: "Calculate the gradient of AB: (13 - 5)/(10 - 4) = 8/6 = 4/3. The perpendicular gradient is the negative reciprocal.",
                workingOut: "\\(m_{\\perp} = -\\dfrac{3}{4} = -0.75\\)",
                graphData: null
              },
              {
                explanation: "Use the point-gradient formula with midpoint (7, 9) and perpendicular gradient -0.75.",
                workingOut: "\\(y - 9 = -0.75(x - 7) \\;\\Rightarrow\\; y = -0.75x + 14.25\\)",
                graphData: null
              }
            ]
          },
          {
            id: "q12_2",
            type: "multiple_choice",
            question: "Find the perpendicular bisector of \\(BC\\).",
            opts: ["y = -4x + 37", "y = 0.25x + 3", "y = 0.25x + 5", "y = -0.25x + 7"],
            options: ["y = -4x + 37", "y = 0.25x + 3", "y = 0.25x + 5", "y = -0.25x + 7"],
            a: 1,
            answer: 1,
            solutionSteps: [
              {
                explanation: "Perpendicular bisector passes through the midpoint of BC. Midpoint = ((10+6)/2, (13-3)/2).",
                workingOut: "\\text{Midpoint of BC } N = (8, 5)",
                graphData: null
              },
              {
                explanation: "Calculate gradient of BC: (-3 - 13)/(6 - 10) = -16/-4 = 4. The perpendicular gradient is the negative reciprocal.",
                workingOut: "\\(m_{\\perp} = -\\dfrac{1}{4} = -0.25\\)",
                graphData: null
              },
              {
                explanation: "Find equation using midpoint (8, 5) and gradient -0.25. (Wait: -1/4 reciprocal is indeed -1/4 = -0.25. Let's solve: y-5 = -0.25(x-8) => y = -0.25x + 7. Ah, let's look at the options: Index 1 is 0.25x + 3. Let's correct index to Index 3 which is -0.25x+7. Let's make Index 3 correct: -0.25x+7)",
                workingOut: "\\(y - 5 = -0.25(x - 8) \\;\\Rightarrow\\; y = -0.25x + 7\\)",
                graphData: null
              }
            ],
            a: 3,
            answer: 3
          },
          {
            id: "q12_3",
            type: "multiple_choice",
            question: "Find the circumcentre coordinates.",
            opts: ["(9, 4)", "(12, 6)", "(10, 5)", "(14.5, 3.375)"],
            options: ["(9, 4)", "(12, 6)", "(10, 5)", "(14.5, 3.375)"],
            a: 3,
            answer: 3,
            solutionSteps: [
              {
                explanation: "The circumcentre is the intersection point of the perpendicular bisectors. We solve the two equations simultaneously.",
                workingOut: "\\(y = -0.75x + 14.25\\text{ and } y = -0.25x + 7\\)",
                graphData: null
              },
              {
                explanation: "Equate the equations to solve for x.",
                workingOut: "\\(-0.75x + 14.25 = -0.25x + 7 \\;\\Rightarrow\\; -0.5x = -7.25 \\;\\Rightarrow\\; x = 14.5\\)",
                graphData: null
              },
              {
                explanation: "Substitute x = 14.5 back into either equation to calculate y.",
                workingOut: "\\(y = -0.25(14.5) + 7 = -3.625 + 7 = 3.375\\)",
                graphData: null
              }
            ]
          }
        ],
        isNew: true
      });
      console.log('  [UPDATED] SubQuestion: P0PoSxXwvrwiMPgQTdTj');
      success++;
    }

    // 3. Process subQuestion doc p0YL5oyCqDUkQ9WG3mqL
    const refP0Y = db.collection('questions').doc('p0YL5oyCqDUkQ9WG3mqL');
    const docP0Y = await refP0Y.get();
    if (docP0Y.exists) {
      await refP0Y.update({
        question: "Consider the points \\(A(2, -1)\\), \\(B(6, 7)\\), \\(C(-2, 3)\\), and \\(D(-6, -5)\\).",
        type: "multiple_choice",
        subQuestions: [
          {
            id: "q16_1",
            type: "multiple_choice",
            question: "Which property best proves \\(ABCD\\) is a rhombus?",
            opts: ["Only the opposite sides are parallel", "All four sides are equal in length"],
            options: ["Only the opposite sides are parallel", "All four sides are equal in length"],
            a: 1,
            answer: 1,
            solutionSteps: [
              {
                explanation: "A rhombus is mathematically defined as a quadrilateral where all four sides are equal in length.",
                workingOut: "\\(AB = BC = CD = DA\\)",
                graphData: null
              },
              {
                explanation: "Calculate each side length using the distance formula. For example, AB is the distance between (2, -1) and (6, 7).",
                workingOut: "\\(AB = \\sqrt{(6-2)^2 + (7-(-1))^2} = \\sqrt{16+64} = \\sqrt{80}\\)",
                graphData: null
              },
              {
                explanation: "Since all four side lengths are equal to square root of 80, the shape is a rhombus.",
                workingOut: "\\(AB = BC = CD = DA = \\sqrt{80}\\)",
                graphData: null
              }
            ]
          },
          {
            id: "q16_2",
            type: "multiple_choice",
            question: "Find the length of diagonal \\(AC\\).",
            opts: ["8.94", "5.66", "11.31", "4.00"],
            options: ["8.94", "5.66", "11.31", "4.00"],
            a: 1,
            answer: 1,
            solutionSteps: [
              {
                explanation: "To find the diagonal length AC, we apply the distance formula between A(2, -1) and C(-2, 3).",
                workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
                graphData: null
              },
              {
                explanation: "Substitute the coordinates into the formula.",
                workingOut: "\\(AC = \\sqrt{(-2 - 2)^2 + (3 - (-1))^2} = \\sqrt{(-4)^2 + (4)^2}\\)",
                graphData: null
              },
              {
                explanation: "Calculate the sum under the square root and round to two decimal places.",
                workingOut: "\\(AC = \\sqrt{16 + 16} = \\sqrt{32} \\approx 5.66\\)",
                graphData: null
              }
            ]
          }
        ],
        isNew: true
      });
      console.log('  [UPDATED] SubQuestion: p0YL5oyCqDUkQ9WG3mqL');
      success++;
    }

    // 4. Process subQuestion doc WzpYQOqCGJNs56cvZSHi
    const refWzp = db.collection('questions').doc('WzpYQOqCGJNs56cvZSHi');
    const docWzp = await refWzp.get();
    if (docWzp.exists) {
      await refWzp.update({
        question: "The vertices of \\(\\triangle ABC\\) are \\(A(2, 5)\\), \\(B(8, 11)\\), and \\(C(4, -1)\\).",
        type: "multiple_choice",
        subQuestions: [
          {
            id: "q12_1",
            type: "multiple_choice",
            question: "Find the perpendicular bisector of \\(AB\\).",
            opts: ["y = x + 3", "y = -x + 13", "y = -0.5x + 10.5", "y = -x + 11"],
            options: ["y = x + 3", "y = -x + 13", "y = -0.5x + 10.5", "y = -x + 11"],
            a: 1,
            answer: 1,
            solutionSteps: [
              {
                explanation: "Find the midpoint of AB: ((2+8)/2, (5+11)/2) = (5, 8).",
                workingOut: "\\text{Midpoint of AB } M = (5, 8)",
                graphData: null
              },
              {
                explanation: "Calculate gradient of AB: (11 - 5)/(8 - 2) = 6/6 = 1. The perpendicular gradient is the negative reciprocal.",
                workingOut: "\\(m_{\\perp} = -1\\)",
                graphData: null
              },
              {
                explanation: "Use midpoint (5, 8) and gradient -1 to write the equation.",
                workingOut: "\\(y - 8 = -1(x - 5) \\;\\Rightarrow\\; y = -x + 13\\)",
                graphData: null
              }
            ]
          },
          {
            id: "q12_2",
            type: "multiple_choice",
            question: "Find the perpendicular bisector of \\(BC\\).",
            opts: ["y = -0.33x + 7", "y = 3x - 13", "y = -0.33x + 5", "y = 0.33x + 3"],
            options: ["y = -0.33x + 7", "y = 3x - 13", "y = -0.33x + 5", "y = 0.33x + 3"],
            a: 0,
            answer: 0,
            solutionSteps: [
              {
                explanation: "Find the midpoint of BC: ((8+4)/2, (11-1)/2) = (6, 5).",
                workingOut: "\\text{Midpoint of BC } N = (6, 5)",
                graphData: null
              },
              {
                explanation: "Calculate gradient of BC: (-1 - 11)/(4 - 8) = -12/-4 = 3. The perpendicular gradient is the negative reciprocal.",
                workingOut: "\\(m_{\\perp} = -\\dfrac{1}{3} \\approx -0.33\\)",
                graphData: null
              },
              {
                explanation: "Use midpoint (6, 5) and gradient -1/3 to write the equation.",
                workingOut: "\\(y - 5 = -\\dfrac{1}{3}(x - 6) \\;\\Rightarrow\\; y = -\\dfrac{1}{3}x + 7\\)",
                graphData: null
              }
            ]
          },
          {
            id: "q12_3",
            type: "multiple_choice",
            question: "Find the circumcentre coordinates.",
            opts: ["(8.5, 4.5)", "(10, 3)", "(9, 4)", "(9.5, 3.5)"],
            options: ["(8.5, 4.5)", "(10, 3)", "(9, 4)", "(9.5, 3.5)"],
            a: 2,
            answer: 2,
            solutionSteps: [
              {
                explanation: "The circumcentre is the point where the perpendicular bisectors intersect. Solve y = -x + 13 and y = -1/3x + 7 simultaneously.",
                workingOut: "\\(-x + 13 = -\\dfrac{1}{3}x + 7\\)",
                graphData: null
              },
              {
                explanation: "Solve the linear equation for x.",
                workingOut: "\\(-\\dfrac{2}{3}x = -6 \\;\\Rightarrow\\; x = 9\\)",
                graphData: null
              },
              {
                explanation: "Substitute x = 9 back into y = -x + 13 to solve for y.",
                workingOut: "\\(y = -9 + 13 = 4 \\;\\Rightarrow\\; (9, 4)\\)",
                graphData: null
              }
            ]
          }
        ],
        isNew: true
      });
      console.log('  [UPDATED] SubQuestion: WzpYQOqCGJNs56cvZSHi');
      success++;
    }

    console.log(`\nSuccessfully updated and shuffed all remaining ${success} questions for Year 10 Chapter 4C.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
