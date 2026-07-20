import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "5UsoIGS1D84xwmL5uUvT": {
    question: "Solve the simultaneous equations using elimination:\n\\(3x + 2y = 12\\)\n\\(2x + 3y = 13\\)",
    opts: ["x=3, y=2", "x=1, y=4.5", "x=2, y=3", "x=4, y=0"],
    a: 2,
    solutionSteps: [
      {
        explanation: "To solve using elimination, multiply the equations so that one of the variable coefficients matches.",
        workingOut: "\\text{Multiply Eq 1 by 3 and Eq 2 by 2 to align } y\\text{-coefficients:}\\\\9x + 6y = 36\\\\4x + 6y = 26",
        graphData: null
      },
      {
        explanation: "Subtract the second equation from the first to eliminate the y-term, then solve for x.",
        workingOut: "\\(5x = 10 \\;\\Rightarrow\\; x = 2\\)",
        graphData: null
      },
      {
        explanation: "Substitute the x-value back into the first original equation to solve for y.",
        workingOut: "\\(3(2) + 2y = 12 \\;\\Rightarrow\\; 6 + 2y = 12 \\;\\Rightarrow\\; 2y = 6 \\;\\Rightarrow\\; y = 3\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "b9QWPrjWQH6F3oTEjEaQ": {
    question: "Solve the simultaneous equations:\n\\(y = 2x + 1\\)\n\\(y = 3x - 4\\)",
    opts: ["x=3, y=7", "x=5, y=11", "x=5, y=9", "x=2, y=5"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Since both equations are expressed in terms of y, set the right-hand sides equal to each other.",
        workingOut: "\\(2x + 1 = 3x - 4\\)",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to isolate x on one side.",
        workingOut: "\\(3x - 2x = 1 + 4 \\;\\Rightarrow\\; x = 5\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into the first equation to calculate the y-value.",
        workingOut: "\\(y = 2(5) + 1 = 11\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "c4e7rwuRT2m0zPXwuI5P": {
    question: "Solve the simultaneous equations:\n\\(4x + 3y = 24\\)\n\\(x - y = -1\\)",
    opts: ["(2, 5)", "(4, 3)", "(3, 3)", "(3, 4)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Express x in terms of y using the second linear equation.",
        workingOut: "\\(x - y = -1 \\;\\Rightarrow\\; x = y - 1\\)",
        graphData: null
      },
      {
        explanation: "Substitute this expression for x into the first equation and expand.",
        workingOut: "\\(4(y - 1) + 3y = 24 \\;\\Rightarrow\\; 4y - 4 + 3y = 24 \\;\\Rightarrow\\; 7y = 28 \\;\\Rightarrow\\; y = 4\\)",
        graphData: null
      },
      {
        explanation: "Substitute y = 4 back to determine the value of x.",
        workingOut: "\\(x = 4 - 1 = 3\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "D3lCXwpyAucLDy537Zxw": {
    question: "Solve the simultaneous equations:\n\\(y = 4x + 1\\)\n\\(y = 2x - 5\\)",
    opts: ["(-2, -7)", "(-3, -7)", "(-3, -11)", "(3, 13)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Equate both expressions for y to set up a single equation with the variable x.",
        workingOut: "\\(4x + 1 = 2x - 5\\)",
        graphData: null
      },
      {
        explanation: "Isolate x and solve the equation.",
        workingOut: "\\(2x = -6 \\;\\Rightarrow\\; x = -3\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = -3 back into the first equation to solve for y.",
        workingOut: "\\(y = 4(-3) + 1 = -11\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "eLWvM9X9Pm9bL4zdJRmT": {
    question: "Solve simultaneously: \\(2x - y = 7\\) and \\(y = x - 3\\).",
    opts: ["(2,-1)", "(4,1)", "(1,4)", "(-4,-1)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "We substitute the expression for y from the second equation directly into the first equation.",
        workingOut: "\\(2x - (x - 3) = 7\\)",
        graphData: null
      },
      {
        explanation: "Solve the equation for the variable x.",
        workingOut: "\\(x + 3 = 7 \\;\\Rightarrow\\; x = 4\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 4 back into the second equation to determine the y-value.",
        workingOut: "\\(y = 4 - 3 = 1\\)",
        graphData: null
      }
    ]
  },
  // Q6 (Duplicate of Q2)
  "ezwUyNqnfIk4xg5TUpDp": {
    question: "Solve the simultaneous equations:\n\\(y = 2x + 1\\)\n\\(y = 3x - 4\\)",
    opts: ["x=3, y=7", "x=5, y=11", "x=5, y=9", "x=2, y=5"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Since both equations are expressed in terms of y, set the right-hand sides equal to each other.",
        workingOut: "\\(2x + 1 = 3x - 4\\)",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to isolate x on one side.",
        workingOut: "\\(3x - 2x = 1 + 4 \\;\\Rightarrow\\; x = 5\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into the first equation to calculate the y-value.",
        workingOut: "\\(y = 2(5) + 1 = 11\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "H56AcrjKFLChAIORT1dT": {
    question: "Solve the simultaneous equations:\n\\(2x + y = 7\\)\n\\(x - y = 2\\)",
    opts: ["x=3, y=1", "x=2, y=3", "x=4, y=-1", "x=5, y=-3"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Since the coefficients of the y-term are opposite (+1 and -1), we can add the two linear equations directly to eliminate y.",
        workingOut: "\\((2x + y) + (x - y) = 7 + 2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the combined terms to solve for x.",
        workingOut: "\\(3x = 9 \\;\\Rightarrow\\; x = 3\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 3 back into the second equation to solve for y.",
        workingOut: "\\(3 - y = 2 \\;\\Rightarrow\\; y = 1\\)",
        graphData: null
      }
    ]
  },
  // Q8 (Duplicate of Q1)
  "joUWJ7cB8loWZaR7rZ59": {
    question: "Solve the simultaneous equations using elimination:\n\\(3x + 2y = 12\\)\n\\(2x + 3y = 13\\)",
    opts: ["x=3, y=2", "x=1, y=4.5", "x=2, y=3", "x=4, y=0"],
    a: 2,
    solutionSteps: [
      {
        explanation: "To solve using elimination, multiply the equations so that one of the variable coefficients matches.",
        workingOut: "\\text{Multiply Eq 1 by 3 and Eq 2 by 2 to align } y\\text{-coefficients:}\\\\9x + 6y = 36\\\\4x + 6y = 26",
        graphData: null
      },
      {
        explanation: "Subtract the second equation from the first to eliminate the y-term, then solve for x.",
        workingOut: "\\(5x = 10 \\;\\Rightarrow\\; x = 2\\)",
        graphData: null
      },
      {
        explanation: "Substitute the x-value back into the first original equation to solve for y.",
        workingOut: "\\(3(2) + 2y = 12 \\;\\Rightarrow\\; 6 + 2y = 12 \\;\\Rightarrow\\; 2y = 6 \\;\\Rightarrow\\; y = 3\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "l0FNj29VVEpB7CXkYxrh": {
    question: "Solve the simultaneous equations:\n\\(6x + 2y = 26\\)\n\\(x - y = 3\\)",
    opts: ["(3, 4)", "(5, 2)", "(4, 0)", "(4, 1)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Rearrange the second equation to isolate x.",
        workingOut: "\\(x - y = 3 \\;\\Rightarrow\\; x = y + 3\\)",
        graphData: null
      },
      {
        explanation: "Substitute the expression x = y + 3 into the first equation and simplify.",
        workingOut: "\\(6(y + 3) + 2y = 26 \\;\\Rightarrow\\; 6y + 18 + 2y = 26 \\;\\Rightarrow\\; 8y = 8 \\;\\Rightarrow\\; y = 1\\)",
        graphData: null
      },
      {
        explanation: "Substitute y = 1 back into the rearranged equation to find the value of x.",
        workingOut: "\\(x = 1 + 3 = 4\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "lKTJRusCPIVI5btUWf3B": {
    question: "Solve the simultaneous equations using substitution:\n\\(y = 4x - 7\\)\n\\(2x + 3y = 21\\)",
    opts: ["x=3, y=5", "x=2, y=1", "x=4, y=9", "x=1, y=-3"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Substitute the expression for y from the first equation into the second equation.",
        workingOut: "\\(2x + 3(4x - 7) = 21\\)",
        graphData: null
      },
      {
        explanation: "Expand the bracket, group like terms, and solve for x.",
        workingOut: "\\(2x + 12x - 21 = 21 \\;\\Rightarrow\\; 14x = 42 \\;\\Rightarrow\\; x = 3\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 3 back into the first equation to calculate y.",
        workingOut: "\\(y = 4(3) - 7 = 5\\)",
        graphData: null
      }
    ]
  },
  // Q11
  "N5YaS6PUOt6jn4MxAOg1": {
    question: "Are the lines \\(y = 2x - 1\\), \\(y = x + 3\\), and \\(y = -x + 9\\) concurrent?",
    opts: ["Yes, at (4, 7)", "No"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Concurrent lines all intersect at a single point. First, find the intersection point of the first two lines.",
        workingOut: "\\(2x - 1 = x + 3 \\;\\Rightarrow\\; x = 4\\\\y = 4 + 3 = 7\\)",
        graphData: null
      },
      {
        explanation: "Test if the intersection point (4, 7) lies on the third line by substituting the coordinates.",
        workingOut: "\\(7 = -(4) + 9 \\;\\Rightarrow\\; 7 = 5 \\; (\\text{False})\\)",
        graphData: null
      },
      {
        explanation: "Since the coordinates do not satisfy the third equation, the three lines do not intersect at a common point, meaning they are not concurrent.",
        workingOut: "\\text{The lines are not concurrent.}",
        graphData: null
      }
    ]
  },
  // Q12
  "N6zqolDU1KdaB1QG1LQ7": {
    question: "Solve the simultaneous equations:\n\\(\\dfrac{x}{2} + \\dfrac{y}{4} = 2\\)\n\\(2x + 4y = 20\\)",
    opts: ["(4, 2)", "(3, 3.5)", "(2, 4)", "(1, 4.5)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Eliminate fractions by multiplying the first equation by its lowest common denominator, which is 4.",
        workingOut: "\\(2x + y = 8 \\;\\Rightarrow\\; y = 8 - 2x\\)",
        graphData: null
      },
      {
        explanation: "Substitute y = 8 - 2x into the second equation and solve for x.",
        workingOut: "\\(2x + 4(8 - 2x) = 20 \\;\\Rightarrow\\; 2x + 32 - 8x = 20 \\;\\Rightarrow\\; -6x = -12 \\;\\Rightarrow\\; x = 2\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 2 back into the expression for y.",
        workingOut: "\\(y = 8 - 2(2) = 4\\)",
        graphData: null
      }
    ]
  },
  // Q13 (Duplicate of Q2)
  "QwPVMXniTHPetDWysi2h": {
    question: "Solve the simultaneous equations:\n\\(y = 2x + 1\\)\n\\(y = 3x - 4\\)",
    opts: ["x=3, y=7", "x=5, y=11", "x=5, y=9", "x=2, y=5"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Since both equations are expressed in terms of y, set the right-hand sides equal to each other.",
        workingOut: "\\(2x + 1 = 3x - 4\\)",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to isolate x on one side.",
        workingOut: "\\(3x - 2x = 1 + 4 \\;\\Rightarrow\\; x = 5\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into the first equation to calculate the y-value.",
        workingOut: "\\(y = 2(5) + 1 = 11\\)",
        graphData: null
      }
    ]
  },
  // Q14
  "tHz4KzxbS3Bv9wvq9mQT": {
    question: "The graphs of \\(x + y = 3\\) and \\(2x - y = 0\\) intersect at which point?",
    opts: ["(3,0)", "(2,1)", "(1,2)", "(0,3)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Isolate y from the second equation: y = 2x.",
        workingOut: "\\(y = 2x\\)",
        graphData: null
      },
      {
        explanation: "Substitute y = 2x into the first equation to solve for x.",
        workingOut: "\\(x + 2x = 3 \\;\\Rightarrow\\; 3x = 3 \\;\\Rightarrow\\; x = 1\\)",
        graphData: null
      },
      {
        explanation: "Substitute x = 1 back into y = 2x to calculate the y-coordinate of the intersection point.",
        workingOut: "\\(y = 2(1) = 2\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4E Questions] Updating and dispersing all targets...');
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

    console.log(`\nSuccessfully updated and shuffed all ${success} questions for Year 10 Chapter 4E.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
