import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const makeJSXGraphScript = (minX, maxX, targets) => {
  return {
    jsxGraph: {
      width: 480,
      height: 120,
      boundingbox: [minX, 2, maxX, -2],
      showAxisLabels: false,
      script: `
        board.suspendUpdate();
        board.options.point.withLabel = false;
        board.options.point.visible = false;
        
        // Draw the main line with arrows on both ends
        board.create('arrow', [[${minX} + 0.8, 0], [${maxX} - 0.8, 0]], {strokeColor: '#64748b', strokeWidth: 2, fixed: true});
        
        // Draw ticks and labels
        for (var x = ${Math.ceil(minX) + 1}; x <= ${Math.floor(maxX) - 1}; x++) {
          board.create('segment', [[x, -0.15], [x, 0.15]], {strokeColor: '#94a3b8', strokeWidth: 1.2, fixed: true});
          board.create('text', [x, -0.4, x.toString()], {
            anchorX: 'middle',
            anchorY: 'top',
            fontSize: 10,
            fontFamily: '"Outfit", "Inter", sans-serif',
            strokeColor: '#475569',
            fixed: true
          });
        }
        
        // Mark targets with premium ruby-rose color dots
        var targets = [${targets.join(', ')}];
        targets.forEach(function(val) {
          board.create('point', [val, 0], {
            color: '#f43f5e',
            strokeColor: '#fda4af',
            strokeWidth: 1.5,
            size: 4.5,
            visible: true,
            withLabel: false,
            fixed: true
          });
        });
        
        board.unsuspendUpdate();
      `
    }
  };
};

const updates = {
  "y8-4a-q2a": {
    question: "Draw a number line and mark the numbers \\(-10\\), \\(-5\\), \\(0\\) and \\(5\\) on it.",
    solutionSteps: [
      {
        explanation: "To draw a number line, start by drawing a straight horizontal line with arrows on both ends. This indicates that the numbers continue infinitely in both positive and negative directions. Mark the center point as 0.",
        workingOut: "\\text{Step 1: Draw a baseline with arrows on both ends and mark 0 in the center.}",
        graphData: null
      },
      {
        explanation: "Using a ruler, mark equal intervals to the right of 0 for positive numbers (1, 2, 3, etc.) and to the left of 0 for negative numbers (-1, -2, -3, etc.). Make sure the spacing is uniform.",
        workingOut: "\\text{Step 2: Draw evenly spaced grid markings (ticks) along the line.}",
        graphData: null
      },
      {
        explanation: "Find the values -10, -5, 0, and 5 along the markings. Place a clear dot exactly on each value to mark them. The complete number line with the marked points is shown below.",
        workingOut: "\\text{Step 3: Place distinct dots at } x = -10, \\; -5, \\; 0, \\text{ and } 5.",
        graphData: makeJSXGraphScript(-13, 8, [-10, -5, 0, 5])
      }
    ]
  },
  "y8-4a-q2b": {
    question: "Draw a number line and mark the numbers \\(-7\\), \\(-2\\), \\(3\\) and \\(6\\) on it.",
    solutionSteps: [
      {
        explanation: "Start by drawing a straight horizontal line with arrows on both ends. Place 0 as a reference point so that we can easily locate negative values to the left and positive values to the right.",
        workingOut: "\\text{Step 1: Draw a horizontal line with arrows and identify the reference point 0.}",
        graphData: null
      },
      {
        explanation: "Add evenly spaced tick marks along the line. Label these marks consecutively with integers starting from negative values on the left up to positive values on the right.",
        workingOut: "\\text{Step 2: Draw uniform interval markings and label them with integers.}",
        graphData: null
      },
      {
        explanation: "Locate the coordinates -7, -2, 3, and 6 on the line. Place a solid marker dot on each of these points to clearly indicate their locations.",
        workingOut: "\\text{Step 3: Place marked dots at } x = -7, \\; -2, \\; 3, \\text{ and } 6.",
        graphData: makeJSXGraphScript(-10, 9, [-7, -2, 3, 6])
      }
    ]
  },
  "y8-4a-q2c": {
    question: "Draw a number line and mark the integers less than \\(4\\) and greater than \\(-4\\) on it.",
    solutionSteps: [
      {
        explanation: "First, we need to find the integers that satisfy the condition: strictly less than 4 and strictly greater than -4. This can be written as the inequality -4 < x < 4. The integers in this range are -3, -2, -1, 0, 1, 2, and 3.",
        workingOut: "\\text{Target integers: } \\{-3, \\; -2, \\; -1, \\; 0, \\; 1, \\; 2, \\; 3\\}",
        graphData: null
      },
      {
        explanation: "Draw a horizontal number line with arrows on both ends and add evenly spaced tick marks from at least -5 to 5, labeling each mark with its corresponding integer.",
        workingOut: "\\text{Step 1: Draw the line with arrows and label marks from } -5 \\text{ to } 5.",
        graphData: null
      },
      {
        explanation: "Place a solid marker dot on each of the integers in our list (-3, -2, -1, 0, 1, 2, and 3) to represent them on the number line.",
        workingOut: "\\text{Step 2: Place marked dots at } x = -3, \\; -2, \\; -1, \\; 0, \\; 1, \\; 2, \\; 3.",
        graphData: makeJSXGraphScript(-6, 6, [-3, -2, -1, 0, 1, 2, 3])
      }
    ]
  },
  "y8-4a-q2d": {
    question: "Draw a number line and mark the integers less than \\(2\\) and greater than \\(-6\\) on it.",
    solutionSteps: [
      {
        explanation: "Identify the integers that satisfy the condition: strictly less than 2 and strictly greater than -6. This is written as -6 < x < 2. The integers that fit this condition are -5, -4, -3, -2, -1, 0, and 1.",
        workingOut: "\\text{Target integers: } \\{-5, \\; -4, \\; -3, \\; -2, \\; -1, \\; 0, \\; 1\\}",
        graphData: null
      },
      {
        explanation: "Draw a horizontal number line with arrows on both ends. Add evenly spaced tick marks to cover the range of interest (for example, from -7 to 3) and label each mark with its integer value.",
        workingOut: "\\text{Step 1: Draw the line with arrows and label marks from } -7 \\text{ to } 3.",
        graphData: null
      },
      {
        explanation: "Place a solid marker dot on each of the identified integers (-5, -4, -3, -2, -1, 0, and 1) to complete the drawing.",
        workingOut: "\\text{Step 2: Place marked dots at } x = -5, \\; -4, \\; -3, \\; -2, \\; -1, \\; 0, \\; 1.",
        graphData: makeJSXGraphScript(-8, 4, [-5, -4, -3, -2, -1, 0, 1])
      }
    ]
  }
};

(async () => {
  try {
    console.log('[JSXGraph Number Lines] Updating database entries...');
    for (const [id, update] of Object.entries(updates)) {
      const ref = db.collection('questions').doc(id);
      const doc = await ref.get();
      if (doc.exists) {
        await ref.update({
          question: update.question,
          solutionSteps: update.solutionSteps,
          isNew: true
        });
        console.log(`  [UPDATED] ${id}`);
      } else {
        console.log(`  [ERROR] Doc ${id} not found.`);
      }
    }
    console.log('\nAll 4 number-line questions updated successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
})();
