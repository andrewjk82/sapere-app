import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Compact, premium aligned 1:1 graph showing the intersection of x+y=3 and 2x-y=0 at (1,2)
const intersectionGraph = {
  jsxGraph: {
    width: 300,
    height: 300,
    boundingbox: [-4, 5, 5, -4],
    showAxisLabels: true,
    keepaspectratio: false,
    script: `
      board.suspendUpdate();
      board.options.point.withLabel = false;
      board.options.point.visible = false;
      
      // Draw standard axes
      board.create('arrow', [[-3.5, 0], [4.5, 0]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      board.create('arrow', [[0, -3.5], [0, 4.5]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      
      // Ticks
      for (var i = -3; i <= 4; i++) {
        if (i !== 0) {
          board.create('segment', [[i, -0.12], [i, 0.12]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
          board.create('segment', [[-0.12, i], [0.12, i]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
        }
      }
      
      // Line 1: x + y = 3 => y = -x + 3
      board.create('functiongraph', [function(x){ return -x + 3; }, -4, 5], {
        strokeColor: '#3b82f6', 
        strokeWidth: 2, 
        fixed: true
      });
      board.create('text', [-2.2, 4.5, '\\(x + y = 3\\)'], {
        fontSize: 9.5,
        fontFamily: '"Outfit", "Inter", sans-serif',
        strokeColor: '#3b82f6',
        fixed: true
      });
      
      // Line 2: 2x - y = 0 => y = 2x
      board.create('functiongraph', [function(x){ return 2*x; }, -4, 5], {
        strokeColor: '#ef4444', 
        strokeWidth: 2, 
        fixed: true
      });
      board.create('text', [1.5, 3.8, '\\(2x - y = 0\\)'], {
        fontSize: 9.5,
        fontFamily: '"Outfit", "Inter", sans-serif',
        strokeColor: '#ef4444',
        fixed: true
      });
      
      // Intersection Point: (1, 2)
      board.create('point', [1, 2], {
        name: 'Intersection (1, 2)',
        color: '#f43f5e',
        strokeColor: '#fda4af',
        strokeWidth: 1.5,
        size: 4.5,
        visible: true,
        withLabel: true,
        fixed: true,
        label: {
          fontSize: 9.5,
          fontFamily: '"Outfit", "Inter", sans-serif',
          strokeColor: '#1e293b',
          offset: [10, 10]
        }
      });
      
      board.unsuspendUpdate();
    `
  }
};

const updatedSteps = [
  {
    explanation: "Label the given equations as (1) and (2). Rearrange equation (2) to express y in terms of x.",
    workingOut: "\\begin{aligned} x + y &= 3 \\quad \\text{--- (1)} \\\\ 2x - y &= 0 \\quad \\text{--- (2)} \\\\ y &= 2x \\quad \\text{--- (3)} \\end{aligned}",
    graphData: null
  },
  {
    explanation: "Substitute equation (3) into equation (1) to solve for x.",
    workingOut: "\\begin{aligned} x + 2x &= 3 \\\\ 3x &= 3 \\\\ x &= 1 \\end{aligned}",
    graphData: null
  },
  {
    explanation: "Substitute x = 1 back into equation (3) to find y. The intersection of these two graphs is shown in the coordinate plane below.",
    workingOut: "\\begin{aligned} y &= 2(1) = 2 \\\\ (x, y) &= (1, 2) \\end{aligned}",
    graphData: intersectionGraph
  }
];

(async () => {
  try {
    console.log('[JSXGraph Move Intersect Graph] Removing graph from question body and placing it in solutions steps...');
    const ref = db.collection('questions').doc('tHz4KzxbS3Bv9wvq9mQT');
    const doc = await ref.get();
    if (doc.exists) {
      await ref.update({
        graphData: null, // Clear from question body!
        solutionSteps: updatedSteps
      });
      console.log('  [SUCCESS] Successfully moved graph to solution steps for tHz4KzxbS3Bv9wvq9mQT.');
    } else {
      console.log('  [ERROR] Document not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
