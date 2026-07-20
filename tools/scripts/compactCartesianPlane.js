import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[JSXGraph Compact Cartesian Plane] Adjusting bounding box and disabling aspect ratio padding...');
    const ref = db.collection('questions').doc('y8-4h-q4');
    const doc = await ref.get();

    if (doc.exists) {
      const data = doc.data();
      
      // We set keepaspectratio: false and adjust height/width to ensure the box fills the container perfectly without top/bottom empty gaps.
      data.solutionSteps[4].graphData = {
        jsxGraph: {
          width: 300,
          height: 300,
          boundingbox: [-10, 10, 10, -10],
          showAxisLabels: true,
          keepaspectratio: false, // Prevent JSXGraph from introducing extra margins
          script: `
            board.suspendUpdate();
            board.options.point.withLabel = false;
            board.options.point.visible = false;
            
            // Draw x and y axes
            board.create('arrow', [[-9.5, 0], [9.5, 0]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
            board.create('arrow', [[0, -9.5], [0, 9.5]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
            
            // Draw coordinate tick marks
            for (var i = -9; i <= 9; i++) {
              if (i !== 0) {
                board.create('segment', [[i, -0.2], [i, 0.2]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
                board.create('segment', [[-0.2, i], [0.2, i]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
              }
            }
            
            // Plot points A, B, C, D
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
      };

      await ref.update({
        solutionSteps: data.solutionSteps
      });
      console.log('  [COMPACTED] Successfully compacted Cartesian plane diagram for y8-4h-q4.');
    } else {
      console.log('  [ERROR] Doc y8-4h-q4 not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during compacting:', err);
    process.exit(1);
  }
})();
