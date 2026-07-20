import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const detailedSolutions = {
  // y10-4g-q9a: y = x + 2 and x + 2y = 10
  "y10-4g-q9a": [
    {
      explanation: "Set up the two simultaneous equations and label them.",
      workingOut: String.raw`\begin{aligned} y &= x + 2 \quad \text{--- (1)} \\ x + 2y &= 10 \quad \text{--- (2)} \end{aligned}`
    },
    {
      explanation: "Substitute equation (1) into equation (2) to eliminate y.",
      workingOut: String.raw`\begin{aligned} x + 2(x + 2) &= 10 \\ x + 2x + 4 &= 10 \\ 3x + 4 &= 10 \end{aligned}`
    },
    {
      explanation: "Solve for x by subtracting 4 from both sides and dividing by 3.",
      workingOut: String.raw`\begin{aligned} 3x &= 6 \\ x &= 2 \end{aligned}`
    },
    {
      explanation: "Substitute x = 2 back into equation (1) to solve for y.",
      workingOut: String.raw`\begin{aligned} y &= 2 + 2 \\ y &= 4 \end{aligned}`
    },
    {
      explanation: "State the final solution as a coordinate pair.",
      workingOut: String.raw`\text{Solution: } (x, y) = (2, 4)`
    }
  ],

  // y10-4g-q9b: y = 3x - 2 and 2x + 3y = 5
  "y10-4g-q9b": [
    {
      explanation: "Set up the simultaneous equations and label them.",
      workingOut: String.raw`\begin{aligned} y &= 3x - 2 \quad \text{--- (1)} \\ 2x + 3y &= 5 \quad \text{--- (2)} \end{aligned}`
    },
    {
      explanation: "Substitute equation (1) into equation (2) to eliminate y.",
      workingOut: String.raw`\begin{aligned} 2x + 3(3x - 2) &= 5 \\ 2x + 9x - 6 &= 5 \\ 11x - 6 &= 5 \end{aligned}`
    },
    {
      explanation: "Solve for x by adding 6 to both sides and dividing by 11.",
      workingOut: String.raw`\begin{aligned} 11x &= 11 \\ x &= 1 \end{aligned}`
    },
    {
      explanation: "Substitute x = 1 back into equation (1) to solve for y.",
      workingOut: String.raw`\begin{aligned} y &= 3(1) - 2 \\ y &= 1 \end{aligned}`
    },
    {
      explanation: "State the final solution.",
      workingOut: String.raw`\text{Solution: } (x, y) = (1, 1)`
    }
  ],

  // y10-4g-q9c: x + y = 3 and 2x + 3y = 8
  "y10-4g-q9c": [
    {
      explanation: "Set up the simultaneous equations and label them.",
      workingOut: String.raw`\begin{aligned} x + y &= 3 \quad \text{--- (1)} \\ 2x + 3y &= 8 \quad \text{--- (2)} \end{aligned}`
    },
    {
      explanation: "Rearrange equation (1) to make x the subject.",
      workingOut: String.raw`x = 3 - y \quad \text{--- (3)}`
    },
    {
      explanation: "Substitute equation (3) into equation (2) to eliminate x.",
      workingOut: String.raw`\begin{aligned} 2(3 - y) + 3y &= 8 \\ 6 - 2y + 3y &= 8 \\ 6 + y &= 8 \end{aligned}`
    },
    {
      explanation: "Solve for y by subtracting 6 from both sides.",
      workingOut: String.raw`y = 2`
    },
    {
      explanation: "Substitute y = 2 back into equation (3) to solve for x.",
      workingOut: String.raw`\begin{aligned} x &= 3 - 2 \\ x &= 1 \end{aligned}`
    },
    {
      explanation: "State the final solution.",
      workingOut: String.raw`\text{Solution: } (x, y) = (1, 2)`
    }
  ],

  // y10-4g-q9d: 3x - 2y = 1 and 4x + 4y = 8
  "y10-4g-q9d": [
    {
      explanation: "Set up the simultaneous equations and label them.",
      workingOut: String.raw`\begin{aligned} 3x - 2y &= 1 \quad \text{--- (1)} \\ 4x + 4y &= 8 \quad \text{--- (2)} \end{aligned}`
    },
    {
      explanation: "Divide equation (2) by 4 to simplify it, and make y the subject.",
      workingOut: String.raw`\begin{aligned} x + y &= 2 \\ y &= 2 - x \quad \text{--- (3)} \end{aligned}`
    },
    {
      explanation: "Substitute equation (3) into equation (1) to eliminate y.",
      workingOut: String.raw`\begin{aligned} 3x - 2(2 - x) &= 1 \\ 3x - 4 + 2x &= 1 \\ 5x - 4 &= 1 \end{aligned}`
    },
    {
      explanation: "Solve for x by transposing 4 and dividing by 5.",
      workingOut: String.raw`\begin{aligned} 5x &= 5 \\ x &= 1 \end{aligned}`
    },
    {
      explanation: "Substitute x = 1 back into equation (3) to solve for y.",
      workingOut: String.raw`\begin{aligned} y &= 2 - 1 \\ y &= 1 \end{aligned}`
    },
    {
      explanation: "State the final solution.",
      workingOut: String.raw`\text{Solution: } (x, y) = (1, 1)`
    }
  ],

  // y10-4g-q9e: 4x + 3y = 11 and 2x + y = 5
  "y10-4g-q9e": [
    {
      explanation: "Set up the simultaneous equations and label them.",
      workingOut: String.raw`\begin{aligned} 4x + 3y &= 11 \quad \text{--- (1)} \\ 2x + y &= 5 \quad \text{--- (2)} \end{aligned}`
    },
    {
      explanation: "Rearrange equation (2) to make y the subject.",
      workingOut: String.raw`y = 5 - 2x \quad \text{--- (3)}`
    },
    {
      explanation: "Substitute equation (3) into equation (1) to eliminate y.",
      workingOut: String.raw`\begin{aligned} 4x + 3(5 - 2x) &= 11 \\ 4x + 15 - 6x &= 11 \\ -2x + 15 &= 11 \end{aligned}`
    },
    {
      explanation: "Solve for x by subtracting 15 from both sides and dividing by -2.",
      workingOut: String.raw`\begin{aligned} -2x &= -4 \\ x &= 2 \end{aligned}`
    },
    {
      explanation: "Substitute x = 2 back into equation (3) to solve for y.",
      workingOut: String.raw`\begin{aligned} y &= 5 - 2(2) \\ y &= 1 \end{aligned}`
    },
    {
      explanation: "State the final solution.",
      workingOut: String.raw`\text{Solution: } (x, y) = (2, 1)`
    }
  ],

  // y10-4g-q9f: 3x - 2y = -8 and 4x + 2y = 1
  "y10-4g-q9f": [
    {
      explanation: "Set up the simultaneous equations and label them.",
      workingOut: String.raw`\begin{aligned} 3x - 2y &= -8 \quad \text{--- (1)} \\ 4x + 2y &= 1 \quad \text{--- (2)} \end{aligned}`
    },
    {
      explanation: "Add equation (1) and equation (2) to eliminate the y-term.",
      workingOut: String.raw`\begin{aligned} (3x - 2y) + (4x + 2y) &= -8 + 1 \\ 7x &= -7 \end{aligned}`
    },
    {
      explanation: "Solve for x by dividing both sides by 7.",
      workingOut: String.raw`x = -1`
    },
    {
      explanation: "Substitute x = -1 back into equation (2) to solve for y.",
      workingOut: String.raw`\begin{aligned} 4(-1) + 2y &= 1 \\ -4 + 2y &= 1 \\ 2y &= 5 \\ y &= 2.5 \end{aligned}`
    },
    {
      explanation: "State the final solution.",
      workingOut: String.raw`\text{Solution: } (x, y) = (-1, 2.5)`
    }
  ]
};

(async () => {
  try {
    console.log('[Solution Enhancer] Injecting detailed equation solving steps into Firestore...');
    for (const [id, steps] of Object.entries(detailedSolutions)) {
      const ref = db.collection('questions').doc(id);
      
      // We map the steps and ensure they are written exactly as raw values
      const solutionSteps = steps.map(step => ({
        explanation: step.explanation,
        workingOut: step.workingOut,
        graphData: null
      }));

      await ref.update({
        solutionSteps: solutionSteps,
        updatedAt: new Date()
      });
      console.log(`  [ENHANCED SOLUTION] ID: ${id}`);
    }
    console.log('\nAll simultaneous equations solution steps have been updated to the detailed style.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
