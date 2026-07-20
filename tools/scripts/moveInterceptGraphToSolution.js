import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Standard premium JSXGraph to plot 2x + 3y = 6 and highlight intercepts
const interceptGraph = {
  jsxGraph: {
    width: 300,
    height: 300,
    boundingbox: [-4, 6, 6, -4],
    showAxisLabels: true,
    keepaspectratio: false,
    script: `
      board.suspendUpdate();
      board.options.point.withLabel = false;
      board.options.point.visible = false;
      
      // Draw standard axes
      board.create('arrow', [[-3.5, 0], [5.5, 0]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      board.create('arrow', [[0, -3.5], [0, 5.5]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      
      // Draw ticks
      for (var i = -3; i <= 5; i++) {
        if (i !== 0) {
          board.create('segment', [[i, -0.15], [i, 0.15]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
          board.create('segment', [[-0.15, i], [0.15, i]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
        }
      }
      
      // Draw the line: 2x + 3y = 6 => y = -2/3x + 2
      board.create('functiongraph', [function(x){ return -2/3*x + 2; }, -4, 6], {
        strokeColor: '#3b82f6', 
        strokeWidth: 2, 
        fixed: true
      });
      
      // Highlight x-intercept: (3, 0)
      board.create('point', [3, 0], {
        name: 'x-intercept (3, 0)',
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
      
      // Highlight y-intercept: (0, 2)
      board.create('point', [0, 2], {
        name: 'y-intercept (0, 2)',
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
      
      // Add equation text
      board.create('text', [1.5, 3.5, '\\(y = -\\dfrac{2}{3}x + 2\\)'], {
        fontSize: 10,
        fontFamily: '"Outfit", "Inter", sans-serif',
        strokeColor: '#475569',
        fixed: true
      });
      
      board.unsuspendUpdate();
    `
  }
};

const updates = {
  "VwBqhtRbpizk6gFsshS1": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line \\(2x + 3y = 6\\).",
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
        explanation: "Thus, the intercepts are x = 3 and y = 2. The plotted line showing both the x-intercept at (3, 0) and the y-intercept at (0, 2) is shown below.",
        workingOut: "\\(x\\text{-intercept} = 3,\\; y\\text{-intercept} = 2\\)",
        graphData: interceptGraph
      }
    ]
  },
  "MbkQ7du6gfpKZCDEvXHE": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line \\(2x + 3y = 6\\).",
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
        explanation: "Thus, the intercepts are x = 3 and y = 2. The plotted line showing both the x-intercept at (3, 0) and the y-intercept at (0, 2) is shown below.",
        workingOut: "\\(x\\text{-intercept} = 3,\\; y\\text{-intercept} = 2\\)",
        graphData: interceptGraph
      }
    ]
  }
};

(async () => {
  try {
    console.log('[JSXGraph Move Graph] Moving diagram from question to solutions steps...');
    for (const [docId, update] of Object.entries(updates)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();
      if (doc.exists) {
        await ref.update({
          question: update.question,
          graphData: null, // Clear from question body!
          solutionSteps: update.solutionSteps
        });
        console.log(`  [MOVED & SYNCED] ${docId}`);
      }
    }
    console.log('\nGraph successfully moved to solution steps.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during migration:', err);
    process.exit(1);
  }
})();
