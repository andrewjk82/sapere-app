import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Compact, premium 1:1 graph showing Car A (starts 30, goes to 180 at t=2.5) and Car B (starts 120, goes to 0 at t=1.5)
// No spoiler intersection point! Only the raw lines for student analysis.
const humeHighwayGraph = {
  jsxGraph: {
    width: 300,
    height: 300,
    boundingbox: [-0.5, 200, 3.0, -20],
    showAxisLabels: true,
    keepaspectratio: false,
    script: `
      board.suspendUpdate();
      board.options.point.withLabel = false;
      board.options.point.visible = false;
      
      // Draw custom vertical/horizontal axis arrows
      board.create('arrow', [[-0.2, 0], [2.8, 0]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      board.create('arrow', [[0, -10], [0, 190]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      
      // Add labels for axes
      board.create('text', [2.7, 8, '\\(t\\) (h)'], {fontSize: 9, fontFamily: '"Outfit", "Inter", sans-serif', strokeColor: '#475569', fixed: true});
      board.create('text', [0.1, 185, '\\(d\\) (km)'], {fontSize: 9, fontFamily: '"Outfit", "Inter", sans-serif', strokeColor: '#475569', fixed: true});
      
      // Draw grid ticks
      // t axis ticks (0.5, 1.0, 1.5, 2.0, 2.5)
      for (var t = 0.5; t <= 2.5; t += 0.5) {
        board.create('segment', [[t, -3], [t, 3]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
        board.create('text', [t - 0.08, -12, t.toFixed(1)], {fontSize: 8.5, fontFamily: '"Outfit", sans-serif', strokeColor: '#64748b', fixed: true});
      }
      // d axis ticks (30, 60, 90, 120, 150, 180)
      for (var d = 30; d <= 180; d += 30) {
        board.create('segment', [[-0.05, d], [0.05, d]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
        board.create('text', [-0.35, d - 3, d], {fontSize: 8.5, fontFamily: '"Outfit", sans-serif', strokeColor: '#64748b', fixed: true});
      }
      
      // Car A line: from (0, 30) to (2.5, 180) => d = 60t + 30
      var lineA = board.create('segment', [[0, 30], [2.5, 180]], {
        strokeColor: '#3b82f6', 
        strokeWidth: 2.5, 
        fixed: true
      });
      board.create('text', [1.8, 120, '\\(\\text{Car A}\\)'], {
        fontSize: 9.5,
        fontFamily: '"Outfit", sans-serif',
        strokeColor: '#3b82f6',
        fixed: true
      });
      
      // Car B line: from (0, 120) to (1.5, 0) => d = -80t + 120
      var lineB = board.create('segment', [[0, 120], [1.5, 0]], {
        strokeColor: '#ef4444', 
        strokeWidth: 2.5, 
        fixed: true
      });
      board.create('text', [0.8, 80, '\\(\\text{Car B}\\)'], {
        fontSize: 9.5,
        fontFamily: '"Outfit", sans-serif',
        strokeColor: '#ef4444',
        fixed: true
      });
      
      board.unsuspendUpdate();
    `
  }
};

(async () => {
  try {
    console.log('[Hume Highway Graph Restore] Restoring custom JSXGraph to question bodies...');
    
    // 1. Restore to y10-4g-q13 (Part 1)
    const ref1 = db.collection('questions').doc('y10-4g-q13');
    await ref1.update({
      graphData: humeHighwayGraph
    });
    console.log('  [PART 1 RESTORED]');

    // 2. Restore to y10-4g-q13_part2 (Part 2)
    const ref2 = db.collection('questions').doc('y10-4g-q13_part2');
    await ref2.update({
      graphData: humeHighwayGraph
    });
    console.log('  [PART 2 RESTORED]');

    console.log('\nGraph data restored successfully to both Hume Highway parts.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
