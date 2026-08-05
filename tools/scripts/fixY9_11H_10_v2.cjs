const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Create points and segments explicitly using raw coordinates to avoid any object-reference issues in JSXGraph
  const graphScript = `board.suspendUpdate();
board.create('axis', [[0,0], [1,0]]);
board.create('axis', [[0,0], [0,1]]);

// Draw circle safely using point objects
var pCenter = board.create('point', [0,0], {visible: false});
var pRadius = board.create('point', [10,0], {visible: false});
board.create('circle', [pCenter, pRadius], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06});

board.create('text', [5, 11, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'});
board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true, withLabel: true, label: {offset: [10, 10]}});

// Draw points explicitly
board.create('point', [8, -6], {size: 3, color: 'black', name: 'A(8, -6)', withLabel: true, label: {autoPosition: false, offset: [15, -10]}});
board.create('point', [6, 8], {size: 3, color: 'black', name: 'B(6, 8)', withLabel: true, label: {autoPosition: false, offset: [15, 10]}});
board.create('point', [-8, 6], {size: 3, color: 'black', name: 'C(-8, 6)', withLabel: true, label: {autoPosition: false, offset: [-65, 10]}});
board.create('point', [-6, -8], {size: 3, color: 'black', name: 'D(-6, -8)', withLabel: true, label: {autoPosition: false, offset: [-70, -10]}});

// Fill area with polygon using raw coordinates
board.create('polygon', [[8,-6], [6,8], [-8,6], [-6,-8]], {fillColor: '#bfdbfe', fillOpacity: 0.1, borders: {strokeWidth: 0}});

// Draw explicit segments using raw coordinates to guarantee lines are drawn
board.create('segment', [[8,-6], [6,8]], {strokeColor: 'black', strokeWidth: 1.5});
board.create('segment', [[6,8], [-8,6]], {strokeColor: 'black', strokeWidth: 1.5});
board.create('segment', [[-8,6], [-6,-8]], {strokeColor: 'black', strokeWidth: 1.5});
board.create('segment', [[-6,-8], [8,-6]], {strokeColor: 'black', strokeWidth: 1.5});

board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-12, 12, 12, -12],
      showConstructionPoints: true,
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

  console.log("Updated graph to ensure circle and segments render.");
  process.exit(0);
}

run().catch(console.error);
