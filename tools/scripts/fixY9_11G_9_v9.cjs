const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Draw the points, polygon (for fill), AND explicit segments to guarantee lines show up
  const graphScript = `board.suspendUpdate();
board.create('axis', [[0,0], [1,0]]);
board.create('axis', [[0,0], [0,1]]);

var pA = board.create('point', [2, 3], {size: 3, color: 'black', name: 'A(2, 3)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});
var pB = board.create('point', [4, 6], {size: 3, color: 'black', name: 'B(4, 6)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});
var pC = board.create('point', [8, 0], {size: 3, color: 'black', name: 'C(8, 0)', withLabel: true, label: {autoPosition: false, offset: [15, -10]}});
var pD = board.create('point', [6, -3], {size: 3, color: 'black', name: 'D(6, -3)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});

board.create('polygon', [pA, pB, pC, pD], {fillColor: '#bfdbfe', fillOpacity: 0.1, borders: {strokeWidth: 0}});
board.create('segment', [pA, pB], {strokeColor: 'black', strokeWidth: 1.5});
board.create('segment', [pB, pC], {strokeColor: 'black', strokeWidth: 1.5});
board.create('segment', [pC, pD], {strokeColor: 'black', strokeWidth: 1.5});
board.create('segment', [pD, pA], {strokeColor: 'black', strokeWidth: 1.5});

board.unsuspendUpdate();`;

  const solutionGraphScript = `board.suspendUpdate();
board.create('axis', [[0,0], [1,0]]);
board.create('axis', [[0,0], [0,1]]);

var pA = board.create('point', [2, 3], {size: 3, color: 'black', name: 'A(2, 3)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});
var pB = board.create('point', [4, 6], {size: 3, color: 'black', name: 'B(4, 6)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});
var pC = board.create('point', [8, 0], {size: 3, color: 'black', name: 'C(8, 0)', withLabel: true, label: {autoPosition: false, offset: [15, -10]}});
var pD = board.create('point', [6, -3], {size: 3, color: 'black', name: 'D(6, -3)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});

board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeWidth: 0}});
board.create('segment', [pA, pB], {strokeColor: 'black', strokeWidth: 1});
board.create('segment', [pB, pC], {strokeColor: 'black', strokeWidth: 1});
board.create('segment', [pC, pD], {strokeColor: 'black', strokeWidth: 1});
board.create('segment', [pD, pA], {strokeColor: 'black', strokeWidth: 1});

var pM = board.create('point', [3, 4.5], {size: 3, color: 'blue', name: 'M(3, 4.5)', withLabel: true, label: {autoPosition: false, offset: [-50, 10]}});
var pN = board.create('point', [6, 3], {size: 3, color: 'blue', name: 'N(6, 3)', withLabel: true, label: {autoPosition: false, offset: [15, 10]}});
var pP = board.create('point', [7, -1.5], {size: 3, color: 'blue', name: 'P(7, -1.5)', withLabel: true, label: {autoPosition: false, offset: [15, -10]}});
var pQ = board.create('point', [4, 0], {size: 3, color: 'blue', name: 'Q(4, 0)', withLabel: true, label: {autoPosition: false, offset: [-50, -10]}});

board.create('polygon', [pM, pN, pP, pQ], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {strokeWidth: 0}});
board.create('segment', [pM, pN], {strokeColor: 'blue', strokeWidth: 1.5});
board.create('segment', [pN, pP], {strokeColor: 'blue', strokeWidth: 1.5});
board.create('segment', [pP, pQ], {strokeColor: 'blue', strokeWidth: 1.5});
board.create('segment', [pQ, pM], {strokeColor: 'blue', strokeWidth: 1.5});

board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: graphScript
    }
  };

  const solutionGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: solutionGraphScript
    }
  };

  batch.update(db.collection('questions').doc('y9-11g-q9'), {
    graphData: baseGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  const subIds = ['y9-11g-q9a', 'y9-11g-q9b', 'y9-11g-q9c', 'y9-11g-q9d', 'y9-11g-q9e', 'y9-11g-q9f', 'y9-11g-q9g'];
  
  for (const id of subIds) {
    if (id === 'y9-11g-q9g') {
      batch.update(db.collection('questions').doc(id), {
        'solutionSteps.2.graphData': solutionGraphData,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  await batch.commit();
  console.log("Updated graph with explicit segments to guarantee lines.");
  process.exit(0);
}

run().catch(console.error);
