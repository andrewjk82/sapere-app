import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const detailedUpdates = {
  // Q1 / Q8 (Elimination)
  "5UsoIGS1D84xwmL5uUvT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2). We will solve these using the elimination method.",
        workingOut: "\\begin{aligned} 3x + 2y &= 12 \\quad \\text{--- (1)} \\\\ 2x + 3y &= 13 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "To eliminate the y-term, we first make the coefficients of y equal in both equations. Multiply equation (1) by 3 and equation (2) by 2.",
        workingOut: "\\begin{aligned} 3 \\times (3x + 2y) = 3 \\times 12 \\;\\Rightarrow\\; 9x + 6y &= 36 \\quad \\text{--- (3)} \\\\ 2 \\times (2x + 3y) = 2 \\times 13 \\;\\Rightarrow\\; 4x + 6y &= 26 \\quad \\text{--- (4)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Subtract equation (4) from equation (3) side-by-side to eliminate y, and solve for x.",
        workingOut: "\\begin{aligned} (9x + 6y) - (4x + 6y) &= 36 - 26 \\\\ 9x - 4x + 6y - 6y &= 10 \\\\ 5x &= 10 \\\\ x &= 2 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute the value of x = 2 into the original equation (1) to solve for y.",
        workingOut: "\\begin{aligned} 3(2) + 2y &= 12 \\\\ 6 + 2y &= 12 \\\\ 2y &= 12 - 6 \\\\ 2y &= 6 \\\\ y &= 3 \\end{aligned}",
        graphData: null
      }
    ]
  },
  "joUWJ7cB8loWZaR7rZ59": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2). We will solve these using the elimination method.",
        workingOut: "\\begin{aligned} 3x + 2y &= 12 \\quad \\text{--- (1)} \\\\ 2x + 3y &= 13 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "To eliminate the y-term, we first make the coefficients of y equal in both equations. Multiply equation (1) by 3 and equation (2) by 2.",
        workingOut: "\\begin{aligned} 3 \\times (3x + 2y) = 3 \\times 12 \\;\\Rightarrow\\; 9x + 6y &= 36 \\quad \\text{--- (3)} \\\\ 2 \\times (2x + 3y) = 2 \\times 13 \\;\\Rightarrow\\; 4x + 6y &= 26 \\quad \\text{--- (4)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Subtract equation (4) from equation (3) side-by-side to eliminate y, and solve for x.",
        workingOut: "\\begin{aligned} (9x + 6y) - (4x + 6y) &= 36 - 26 \\\\ 9x - 4x + 6y - 6y &= 10 \\\\ 5x &= 10 \\\\ x &= 2 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute the value of x = 2 into the original equation (1) to solve for y.",
        workingOut: "\\begin{aligned} 3(2) + 2y &= 12 \\\\ 6 + 2y &= 12 \\\\ 2y &= 12 - 6 \\\\ 2y &= 6 \\\\ y &= 3 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q2 / Q6 / Q13 (Equating / Substitution)
  "b9QWPrjWQH6F3oTEjEaQ": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both express y directly in terms of x, we solve by substituting equation (1) into equation (2).",
        workingOut: "\\begin{aligned} y &= 2x + 1 \\quad \\text{--- (1)} \\\\ y &= 3x - 4 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to set up an equation in terms of x, and solve for x.",
        workingOut: "\\begin{aligned} 2x + 1 &= 3x - 4 \\\\ 1 + 4 &= 3x - 2x \\\\ 5 &= x \\\\ x &= 5 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into equation (1) to find y.",
        workingOut: "\\begin{aligned} y &= 2(5) + 1 \\\\ y &= 10 + 1 \\\\ y &= 11 \\end{aligned}",
        graphData: null
      }
    ]
  },
  "ezwUyNqnfIk4xg5TUpDp": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both express y directly in terms of x, we solve by substituting equation (1) into equation (2).",
        workingOut: "\\begin{aligned} y &= 2x + 1 \\quad \\text{--- (1)} \\\\ y &= 3x - 4 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to set up an equation in terms of x, and solve for x.",
        workingOut: "\\begin{aligned} 2x + 1 &= 3x - 4 \\\\ 1 + 4 &= 3x - 2x \\\\ 5 &= x \\\\ x &= 5 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into equation (1) to find y.",
        workingOut: "\\begin{aligned} y &= 2(5) + 1 \\\\ y &= 10 + 1 \\\\ y &= 11 \\end{aligned}",
        graphData: null
      }
    ]
  },
  "QwPVMXniTHPetDWysi2h": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both express y directly in terms of x, we solve by substituting equation (1) into equation (2).",
        workingOut: "\\begin{aligned} y &= 2x + 1 \\quad \\text{--- (1)} \\\\ y &= 3x - 4 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) to set up an equation in terms of x, and solve for x.",
        workingOut: "\\begin{aligned} 2x + 1 &= 3x - 4 \\\\ 1 + 4 &= 3x - 2x \\\\ 5 &= x \\\\ x &= 5 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 into equation (1) to find y.",
        workingOut: "\\begin{aligned} y &= 2(5) + 1 \\\\ y &= 10 + 1 \\\\ y &= 11 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q3 (Substitution)
  "c4e7rwuRT2m0zPXwuI5P": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). We will solve these using substitution.",
        workingOut: "\\begin{aligned} 4x + 3y &= 24 \\quad \\text{--- (1)} \\\\ x - y &= -1 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Rearrange equation (2) to express x in terms of y. Label this as equation (3).",
        workingOut: "x = y - 1 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (3) into equation (1) to eliminate x, and expand.",
        workingOut: "\\begin{aligned} 4(y - 1) + 3y &= 24 \\\\ 4y - 4 + 3y &= 24 \\\\ 7y - 4 &= 24 \\\\ 7y &= 24 + 4 \\\\ 7y &= 28 \\\\ y &= 4 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute the value of y = 4 back into equation (3) to solve for x.",
        workingOut: "\\begin{aligned} x &= 4 - 1 \\\\ x &= 3 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q4 (Substitution)
  "D3lCXwpyAucLDy537Zxw": {
    solutionSteps: [
      {
        explanation: "Label the equations as (1) and (2). Since both express y, we set them equal by substituting equation (1) into equation (2).",
        workingOut: "\\begin{aligned} y &= 4x + 1 \\quad \\text{--- (1)} \\\\ y &= 2x - 5 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Solve the equated system for the variable x.",
        workingOut: "\\begin{aligned} 4x + 1 &= 2x - 5 \\\\ 4x - 2x &= -5 - 1 \\\\ 2x &= -6 \\\\ x &= -3 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = -3 into equation (1) to calculate y.",
        workingOut: "\\begin{aligned} y &= 4(-3) + 1 \\\\ y &= -12 + 1 \\\\ y &= -11 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q5 (Substitution)
  "eLWvM9X9Pm9bL4zdJRmT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "\\begin{aligned} 2x - y &= 7 \\quad \\text{--- (1)} \\\\ y &= x - 3 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute the expression for y from equation (2) into equation (1). Make sure to expand the brackets carefully.",
        workingOut: "\\begin{aligned} 2x - (x - 3) &= 7 \\\\ 2x - x + 3 &= 7 \\\\ x + 3 &= 7 \\\\ x &= 4 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 4 back into equation (2) to find y.",
        workingOut: "\\begin{aligned} y &= 4 - 3 \\\\ y &= 1 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q7 (Elimination by addition)
  "H56AcrjKFLChAIORT1dT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2). We will solve these using elimination.",
        workingOut: "\\begin{aligned} 2x + y &= 7 \\quad \\text{--- (1)} \\\\ x - y &= 2 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Add equation (1) and equation (2) side-by-side to eliminate y, then solve for x.",
        workingOut: "\\begin{aligned} (2x + y) + (x - y) &= 7 + 2 \\\\ 2x + x + y - y &= 9 \\\\ 3x &= 9 \\\\ x &= 3 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 3 back into equation (2) to solve for y.",
        workingOut: "\\begin{aligned} 3 - y &= 2 \\\\ -y &= 2 - 3 \\\\ -y &= -1 \\\\ y &= 1 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q9 (Substitution)
  "l0FNj29VVEpB7CXkYxrh": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "\\begin{aligned} 6x + 2y &= 26 \\quad \\text{--- (1)} \\\\ x - y &= 3 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Rearrange equation (2) to express x in terms of y. Label this as equation (3).",
        workingOut: "x = y + 3 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (3) into equation (1) to eliminate x, then expand the brackets and solve for y.",
        workingOut: "\\begin{aligned} 6(y + 3) + 2y &= 26 \\\\ 6y + 18 + 2y &= 26 \\\\ 8y + 18 &= 26 \\\\ 8y &= 26 - 18 \\\\ 8y &= 8 \\\\ y &= 1 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute y = 1 back into equation (3) to find the value of x.",
        workingOut: "\\begin{aligned} x &= 1 + 3 \\\\ x &= 4 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q10 (Substitution)
  "lKTJRusCPIVI5btUWf3B": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "\\begin{aligned} y &= 4x - 7 \\quad \\text{--- (1)} \\\\ 2x + 3y &= 21 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute equation (1) into equation (2) and expand the brackets.",
        workingOut: "\\begin{aligned} 2x + 3(4x - 7) &= 21 \\\\ 2x + 12x - 21 &= 21 \\\\ 14x - 21 &= 21 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Group the x terms together and solve for x.",
        workingOut: "\\begin{aligned} 14x &= 21 + 21 \\\\ 14x &= 42 \\\\ x &= 3 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 3 back into equation (1) to find y.",
        workingOut: "\\begin{aligned} y &= 4(3) - 7 \\\\ y &= 12 - 7 \\\\ y &= 5 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q12 (Substitution with fraction removal)
  "N6zqolDU1KdaB1QG1LQ7": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "\\begin{aligned} \\dfrac{x}{2} + \\dfrac{y}{4} &= 2 \\quad \\text{--- (1)} \\\\ 2x + 4y &= 20 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 4 to remove the fraction denominators. Label this new equation as (3), then isolate y.",
        workingOut: "\\begin{aligned} 4 \\times \\left( \\dfrac{x}{2} + \\dfrac{y}{4} \\right) &= 4 \\times 2 \\\\ 2x + y &= 8 \\quad \\text{--- (3)} \\\\ y &= 8 - 2x \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute the expression y = 8 - 2x into equation (2) and expand the brackets to solve for x.",
        workingOut: "\\begin{aligned} 2x + 4(8 - 2x) &= 20 \\\\ 2x + 32 - 8x &= 20 \\\\ -6x + 32 &= 20 \\\\ -6x &= 20 - 32 \\\\ -6x &= -12 \\\\ x &= 2 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 2 back into the expression for y to calculate the y-value.",
        workingOut: "\\begin{aligned} y &= 8 - 2(2) \\\\ y &= 8 - 4 \\\\ y &= 4 \\end{aligned}",
        graphData: null
      }
    ]
  },

  // Q14 (Substitution)
  "tHz4KzxbS3Bv9wvq9mQT": {
    solutionSteps: [
      {
        explanation: "Label the given equations as (1) and (2).",
        workingOut: "\\begin{aligned} x + y &= 3 \\quad \\text{--- (1)} \\\\ 2x - y &= 0 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Rearrange equation (2) to express y in terms of x. Label this as equation (3).",
        workingOut: "y = 2x \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Substitute equation (3) into equation (1) to solve for x.",
        workingOut: "\\begin{aligned} x + 2x &= 3 \\\\ 3x &= 3 \\\\ x &= 1 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 1 back into equation (3) to find y.",
        workingOut: "\\begin{aligned} y &= 2(1) \\\\ y &= 2 \\end{aligned}",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[JSXGraph Math Steps Enhancement] Upgrading solutions steps to fully detailed calculations...');
    for (const [docId, update] of Object.entries(detailedUpdates)) {
      const ref = db.collection('questions').doc(docId);
      await ref.update({
        solutionSteps: update.solutionSteps
      });
    }
    console.log('\nAll 13 simultaneous equations updated with maximum detail.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
