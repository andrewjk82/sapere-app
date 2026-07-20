import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Use quadruple backslashes (\\\\) in JavaScript strings so it saves as double backslashes (\\) in Firestore
const updates = {
  // Q1 / Q8
  "5UsoIGS1D84xwmL5uUvT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2). To solve using elimination, we multiply the equations by suitable constants to make the coefficients of one variable equal.",
        workingOut: "3x + 2y = 12 \\quad \\text{--- (1)}\\\\2x + 3y = 13 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 3 and equation (2) by 2 to align the y-coefficients. Label these new equations as (3) and (4).",
        workingOut: "9x + 6y = 36 \\quad \\text{--- (3)}\\\\4x + 6y = 26 \\quad \\text{--- (4)}",
        graphData: null
      },
      {
        explanation: "Subtract equation (4) from equation (3) to eliminate the y-term, then solve for x.",
        workingOut: "(9x - 4x) + (6y - 6y) = 36 - 26 \\;\\Rightarrow\\; 5x = 10 \\;\\Rightarrow\\; x = 2",
        graphData: null
      },
      {
        explanation: "Substitute x = 2 into equation (1) to solve for y.",
        workingOut: "3(2) + 2y = 12 \\;\\Rightarrow\\; 6 + 2y = 12 \\;\\Rightarrow\\; 2y = 6 \\;\\Rightarrow\\; y = 3",
        graphData: null
      }
    ]
  },
  "joUWJ7cB8loWZaR7rZ59": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2). To solve using elimination, we multiply the equations by suitable constants to make the coefficients of one variable equal.",
        workingOut: "3x + 2y = 12 \\quad \\text{--- (1)}\\\\2x + 3y = 13 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 3 and equation (2) by 2 to align the y-coefficients. Label these new equations as (3) and (4).",
        workingOut: "9x + 6y = 36 \\quad \\text{--- (3)}\\\\4x + 6y = 26 \\quad \\text{--- (4)}",
        graphData: null
      },
      {
        explanation: "Subtract equation (4) from equation (3) to eliminate the y-term, then solve for x.",
        workingOut: "(9x - 4x) + (6y - 6y) = 36 - 26 \\;\\Rightarrow\\; 5x = 10 \\;\\Rightarrow\\; x = 2",
        graphData: null
      },
      {
        explanation: "Substitute x = 2 into equation (1) to solve for y.",
        workingOut: "3(2) + 2y = 12 \\;\\Rightarrow\\; 6 + 2y = 12 \\;\\Rightarrow\\; 2y = 6 \\;\\Rightarrow\\; y = 3",
        graphData: null
      }
    ]
  },

  // Q2 / Q6 / Q13
  "b9QWPrjWQH6F3oTEjEaQ": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both equations express y directly in terms of x, we can set them equal to each other (equating method).",
        workingOut: "y = 2x + 1 \\quad \\text{--- (1)}\\\\y = 3x - 4 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to eliminate y, then solve for x.",
        workingOut: "2x + 1 = 3x - 4 \\;\\Rightarrow\\; 3x - 2x = 1 + 4 \\;\\Rightarrow\\; x = 5",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into equation (1) to calculate y.",
        workingOut: "y = 2(5) + 1 = 11",
        graphData: null
      }
    ]
  },
  "ezwUyNqnfIk4xg5TUpDp": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both equations express y directly in terms of x, we can set them equal to each other (equating method).",
        workingOut: "y = 2x + 1 \\quad \\text{--- (1)}\\\\y = 3x - 4 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to eliminate y, then solve for x.",
        workingOut: "2x + 1 = 3x - 4 \\;\\Rightarrow\\; 3x - 2x = 1 + 4 \\;\\Rightarrow\\; x = 5",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into equation (1) to calculate y.",
        workingOut: "y = 2(5) + 1 = 11",
        graphData: null
      }
    ]
  },
  "QwPVMXniTHPetDWysi2h": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both equations express y directly in terms of x, we can set them equal to each other (equating method).",
        workingOut: "y = 2x + 1 \\quad \\text{--- (1)}\\\\y = 3x - 4 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to eliminate y, then solve for x.",
        workingOut: "2x + 1 = 3x - 4 \\;\\Rightarrow\\; 3x - 2x = 1 + 4 \\;\\Rightarrow\\; x = 5",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into equation (1) to calculate y.",
        workingOut: "y = 2(5) + 1 = 11",
        graphData: null
      }
    ]
  },

  // Q3
  "c4e7rwuRT2m0zPXwuI5P": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "4x + 3y = 24 \\quad \\text{--- (1)}\\\\x - y = -1 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Rearrange equation (2) to express x in terms of y. Label this as equation (3).",
        workingOut: "x = y - 1 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (3) into equation (1) to solve for y.",
        workingOut: "4(y - 1) + 3y = 24 \\;\\Rightarrow\\; 4y - 4 + 3y = 24 \\;\\Rightarrow\\; 7y = 28 \\;\\Rightarrow\\; y = 4",
        graphData: null
      },
      {
        explanation: "Substitute y = 4 back into equation (3) to find the value of x.",
        workingOut: "x = 4 - 1 = 3",
        graphData: null
      }
    ]
  },

  // Q4
  "D3lCXwpyAucLDy537Zxw": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both represent y, set them equal to each other.",
        workingOut: "y = 4x + 1 \\quad \\text{--- (1)}\\\\y = 2x - 5 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to solve for x.",
        workingOut: "4x + 1 = 2x - 5 \\;\\Rightarrow\\; 2x = -6 \\;\\Rightarrow\\; x = -3",
        graphData: null
      },
      {
        explanation: "Substitute x = -3 into equation (1) to solve for y.",
        workingOut: "y = 4(-3) + 1 = -11",
        graphData: null
      }
    ]
  },

  // Q5
  "eLWvM9X9Pm9bL4zdJRmT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "2x - y = 7 \\quad \\text{--- (1)}\\\\y = x - 3 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (2) into equation (1) to eliminate y, then solve for x.",
        workingOut: "2x - (x - 3) = 7 \\;\\Rightarrow\\; x + 3 = 7 \\;\\Rightarrow\\; x = 4",
        graphData: null
      },
      {
        explanation: "Substitute x = 4 back into equation (2) to calculate y.",
        workingOut: "y = 4 - 3 = 1",
        graphData: null
      }
    ]
  },

  // Q7
  "H56AcrjKFLChAIORT1dT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "2x + y = 7 \\quad \\text{--- (1)}\\\\x - y = 2 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Add equation (1) and equation (2) directly to eliminate the y-term.",
        workingOut: "(2x + y) + (x - y) = 7 + 2 \\;\\Rightarrow\\; 3x = 9 \\;\\Rightarrow\\; x = 3",
        graphData: null
      },
      {
        explanation: "Substitute x = 3 into equation (2) to solve for y.",
        workingOut: "3 - y = 2 \\;\\Rightarrow\\; y = 1",
        graphData: null
      }
    ]
  },

  // Q9
  "l0FNj29VVEpB7CXkYxrh": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "6x + 2y = 26 \\quad \\text{--- (1)}\\\\x - y = 3 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Rearrange equation (2) to express x in terms of y. Label this as equation (3).",
        workingOut: "x = y + 3 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (3) into equation (1) to solve for y.",
        workingOut: "6(y + 3) + 2y = 26 \\;\\Rightarrow\\; 6y + 18 + 2y = 26 \\;\\Rightarrow\\; 8y = 8 \\;\\Rightarrow\\; y = 1",
        graphData: null
      },
      {
        explanation: "Substitute y = 1 back into equation (3) to find the value of x.",
        workingOut: "x = 1 + 3 = 4",
        graphData: null
      }
    ]
  },

  // Q10
  "lKTJRusCPIVI5btUWf3B": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "y = 4x - 7 \\quad \\text{--- (1)}\\\\2x + 3y = 21 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to eliminate y.",
        workingOut: "2x + 3(4x - 7) = 21 \\;\\Rightarrow\\; 2x + 12x - 21 = 21",
        graphData: null
      },
      {
        explanation: "Group the like terms and solve the simplified linear equation for x.",
        workingOut: "14x = 42 \\;\\Rightarrow\\; x = 3",
        graphData: null
      },
      {
        explanation: "Substitute x = 3 back into equation (1) to calculate y.",
        workingOut: "y = 4(3) - 7 = 5",
        graphData: null
      }
    ]
  },

  // Q12
  "N6zqolDU1KdaB1QG1LQ7": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "\\dfrac{x}{2} + \\dfrac{y}{4} = 2 \\quad \\text{--- (1)}\\\\2x + 4y = 20 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 4 to remove the fractional denominators. Label this as equation (3).",
        workingOut: "2x + y = 8 \\quad \\text{--- (3)} \\;\\Rightarrow\\; y = 8 - 2x",
        graphData: null
      },
      {
        explanation: "Substitute the expression for y into equation (2) and solve for x.",
        workingOut: "2x + 4(8 - 2x) = 20 \\;\\Rightarrow\\; 2x + 32 - 8x = 20 \\;\\Rightarrow\\; -6x = -12 \\;\\Rightarrow\\; x = 2",
        graphData: null
      },
      {
        explanation: "Substitute x = 2 back into the expression for y to calculate the y-value.",
        workingOut: "y = 8 - 2(2) = 4",
        graphData: null
      }
    ]
  },

  // Q14
  "tHz4KzxbS3Bv9wvq9mQT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "x + y = 3 \\quad \\text{--- (1)}\\\\2x - y = 0 \\quad \\text{--- (2)}",
        graphData: null
      },
      {
        explanation: "Rearrange equation (2) to express y in terms of x.",
        workingOut: "y = 2x \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (3) into equation (1) to solve for x.",
        workingOut: "x + 2x = 3 \\;\\Rightarrow\\; 3x = 3 \\;\\Rightarrow\\; x = 1",
        graphData: null
      },
      {
        explanation: "Substitute x = 1 back into equation (3) to calculate y.",
        workingOut: "y = 2(1) = 2",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Backslash Fix] Writing quadruple backslashes to DB...');
    let count = 0;
    for (const [docId, update] of Object.entries(updates)) {
      const ref = db.collection('questions').doc(docId);
      await ref.update({
        solutionSteps: update.solutionSteps
      });
      console.log(`  [FIXED BACKSLASHES] ${docId}`);
      count++;
    }
    console.log(`\nSuccessfully applied double backslashes in database for all ${count} equations.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
