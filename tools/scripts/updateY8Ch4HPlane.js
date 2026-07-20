import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[JSXGraph Cartesian Plane] Updating y8-4h-q4 solution steps...');
    const ref = db.collection('questions').doc('y8-4h-q4');
    const doc = await ref.get();

    if (doc.exists) {
      const data = doc.data();

      // Clean LaTeX in the main question body to modern standards
      const cleanedQuestion = "Plot these points on the Cartesian plane. Once completed, compare your plot with the correct positions.\n\n\\(A(-5, 3), B(4, -8), C(7, 6), D(-6, 0)\\)";

      const updatedSteps = [
        {
          explanation: "Identify the coordinates of point A(-5, 3). The x-coordinate is -5 (move 5 units left along the x-axis) and the y-coordinate is 3 (move 3 units up along the y-axis). Place a dot at this position.",
          workingOut: "A(-5, 3) \\text{ is in the second quadrant (top-left).}",
          graphData: null
        },
        {
          explanation: "Identify the coordinates of point B(4, -8). The x-coordinate is 4 (move 4 units right along the x-axis) and the y-coordinate is -8 (move 8 units down along the y-axis). Place a dot at this position.",
          workingOut: "B(4, -8) \\text{ is in the fourth quadrant (bottom-right).}",
          graphData: null
        },
        {
          explanation: "Identify the coordinates of point C(7, 6). The x-coordinate is 7 (move 7 units right along the x-axis) and the y-coordinate is 6 (move 6 units up along the y-axis). Place a dot at this position.",
          workingOut: "C(7, 6) \\text{ is in the first quadrant (top-right).}",
          graphData: null
        },
        {
          explanation: "Identify the coordinates of point D(-6, 0). The x-coordinate is -6 (move 6 units left along the x-axis) and the y-coordinate is 0 (stay on the x-axis). Place a dot at this position.",
          workingOut: "D(-6, 0) \\text{ lies directly on the negative x-axis.}",
          graphData: null
        },
        {
          explanation: "The complete plot showing all four points A, B, C, and D on the Cartesian plane is presented below. Verify your markings against this diagram.",
          workingOut: "\\text{Final plotted Cartesian plane:}",
          graphData: {
            jsxGraph: {
              width: 320,
              height: 320,
              boundingbox: [-10, 10, 10, -10],
              showAxisLabels: true, // We want x, y, O labels on coordinates!
              script: `
                board.suspendUpdate();
                board.options.point.withLabel = false;
                board.options.point.visible = false;
                
                // Draw standard x and y axes
                board.create('arrow', [[-9.5, 0], [9.5, 0]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
                board.create('arrow', [[0, -9.5], [0, 9.5]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
                
                // Draw coordinate tick marks on both axes
                for (var i = -9; i <= 9; i++) {
                  if (i !== 0) {
                    board.create('segment', [[i, -0.2], [i, 0.2]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
                    board.create('segment', [[-0.2, i], [0.2, i]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
                  }
                }
                
                // Plot the points with labeled names
                var points = [
                  { name: 'A(-5, 3)', coords: [-5, 3] },
                  { name: 'B(4, -8)', coords: [4, -8] },
                  { name: 'C(7, 6)', coords: [7, 6] },
                  { name: 'D(-6, 0)', coords: [-6, 0] }
                ];
                
                points.forEach(function(pt) {
                  board.create('point', pt.coords, {
                    name: pt.name,
                    color: '#f43f5e',
                    strokeColor: '#fda4af',
                    strokeWidth: 1.5,
                    size: 4.5,
                    visible: true,
                    withLabel: true,
                    fixed: true,
                    label: {
                      fontSize: 10,
                      fontFamily: '"Outfit", "Inter", sans-serif',
                      strokeColor: '#1e293b',
                      offset: [10, 10]
                    }
                  });
                });
                
                board.unsuspendUpdate();
              `
            }
          }
        }
      ];

      await ref.update({
        question: cleanedQuestion,
        solutionSteps: updatedSteps,
        isNew: true
      });
      console.log('  [UPDATED] y8-4h-q4 with premium Cartesian plane diagram.');
    } else {
      console.log('  [ERROR] Doc y8-4h-q4 not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
})();
