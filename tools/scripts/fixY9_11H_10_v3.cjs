const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Draw ONLY the circle and axes. Remove the square completely.
  const graphScript = `board.suspendUpdate();
board.create('axis', [[0,0], [1,0]]);
board.create('axis', [[0,0], [0,1]]);

var pCenter = board.create('point', [0,0], {visible: false});
var pRadius = board.create('point', [10,0], {visible: false});
board.create('circle', [pCenter, pRadius], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06});

board.create('text', [5, 11, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'});
board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true, withLabel: true, label: {offset: [10, 10]}});
board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-12, 12, 12, -12],
      showConstructionPoints: false,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: graphScript
    }
  };

  await db.collection('questions').doc('y9-11h-q10').update({
    graphData: baseGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Reverted graph to ONLY show the circle.");
  process.exit(0);
}

run().catch(console.error);
