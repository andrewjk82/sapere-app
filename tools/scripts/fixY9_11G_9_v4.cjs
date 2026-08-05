const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const graphScript = `board.suspendUpdate();
var pA = board.create('point', [2, 3], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'A(2, 3)', withLabel: true, visible: true, label: {autoPosition: false, offset: [-50, 0]}});
var pB = board.create('point', [4, 6], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'B(4, 6)', withLabel: true, visible: true, label: {autoPosition: false, offset: [10, 15]}});
var pC = board.create('point', [8, 0], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'C(8, 0)', withLabel: true, visible: true, label: {autoPosition: false, offset: [15, -5]}});
var pD = board.create('point', [6, -3], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'D(6, -3)', withLabel: true, visible: true, label: {autoPosition: false, offset: [10, -20]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: '#bfdbfe', fillOpacity: 0.1, borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`;

  const solutionGraphScript = `board.suspendUpdate();
var pA = board.create('point', [2, 3], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'A(2, 3)', withLabel: true, visible: true, label: {autoPosition: false, offset: [-50, 0]}});
var pB = board.create('point', [4, 6], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'B(4, 6)', withLabel: true, visible: true, label: {autoPosition: false, offset: [10, 15]}});
var pC = board.create('point', [8, 0], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'C(8, 0)', withLabel: true, visible: true, label: {autoPosition: false, offset: [15, -5]}});
var pD = board.create('point', [6, -3], {size: 3, fillColor: 'black', strokeColor: 'black', name: 'D(6, -3)', withLabel: true, visible: true, label: {autoPosition: false, offset: [10, -20]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
var pM = board.create('point', [3, 4.5], {size: 3, fillColor: 'blue', strokeColor: 'blue', name: 'M(3, 4.5)', withLabel: true, visible: true, label: {autoPosition: false, offset: [-55, 10]}});
var pN = board.create('point', [6, 3], {size: 3, fillColor: 'blue', strokeColor: 'blue', name: 'N(6, 3)', withLabel: true, visible: true, label: {autoPosition: false, offset: [15, 10]}});
var pP = board.create('point', [7, -1.5], {size: 3, fillColor: 'blue', strokeColor: 'blue', name: 'P(7, -1.5)', withLabel: true, visible: true, label: {autoPosition: false, offset: [15, -5]}});
var pQ = board.create('point', [4, 0], {size: 3, fillColor: 'blue', strokeColor: 'blue', name: 'Q(4, 0)', withLabel: true, visible: true, label: {autoPosition: false, offset: [-55, -10]}});
board.create('polygon', [pM, pN, pP, pQ], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {strokeColor: 'blue', strokeWidth: 1.5}});
board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: false,
      axis: true,
      grid: true,
      script: graphScript
    }
  };

  const solutionGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: false,
      axis: true,
      grid: true,
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
        graphData: baseGraphData,
        'solutionSteps.2.graphData': solutionGraphData,
        updatedAt: FieldValue.serverTimestamp()
      });
    } else {
      batch.update(db.collection('questions').doc(id), {
        graphData: baseGraphData,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  await batch.commit();

  // Now update the parent document's subQuestions array again
  const subQuestions = [];
  for (const id of subIds) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      subQuestions.push({
        id: id,
        ...doc.data(),
      });
    }
  }
  
  await db.collection('questions').doc('y9-11g-q9').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated graphs with fixed labels and axes.");
  process.exit(0);
}

run().catch(console.error);
