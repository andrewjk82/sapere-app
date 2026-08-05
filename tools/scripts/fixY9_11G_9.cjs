const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const script = `board.suspendUpdate();
board.create('point', [2, 3], {size: 3, color: 'black', name: 'A(2, 3)', withLabel: true, label: {autoPosition: false, offset: [-15, 10]}});
board.create('point', [4, 6], {size: 3, color: 'black', name: 'B(4, 6)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});
board.create('point', [8, 0], {size: 3, color: 'black', name: 'C(8, 0)', withLabel: true, label: {autoPosition: false, offset: [10, -10]}});
board.create('point', [6, -3], {size: 3, color: 'black', name: 'D(6, -3)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});
board.create('polygon', [[2,3], [4,6], [8,0], [6,-3]], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
board.create('point', [3, 4.5], {size: 3, color: 'blue', name: 'M(3, 4.5)', withLabel: true, label: {autoPosition: false, offset: [-20, 10]}});
board.create('point', [6, 3], {size: 3, color: 'blue', name: 'N(6, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});
board.create('point', [7, -1.5], {size: 3, color: 'blue', name: 'P(7, -1.5)', withLabel: true, label: {autoPosition: false, offset: [10, -5]}});
board.create('point', [4, 0], {size: 3, color: 'blue', name: 'Q(4, 0)', withLabel: true, label: {autoPosition: false, offset: [-20, -10]}});
board.create('polygon', [[3,4.5], [6,3], [7,-1.5], [4,0]], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {strokeColor: 'blue', strokeWidth: 1.5}});
board.unsuspendUpdate();`;

  const newGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: true,
      boardOptions: { axis: true, grid: true },
      script: script
    }
  };

  batch.update(db.collection('questions').doc('y9-11g-q9'), {
    graphData: newGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  const updateQ = (id, options, answerIdx, steps) => {
    batch.update(db.collection('questions').doc(id), {
      options: options,
      answer: answerIdx.toString(),
      solutionSteps: steps.map(s => ({ ...s, graphData: null })),
      graphData: null,
      updatedAt: FieldValue.serverTimestamp()
    });
  };

  // 9a
  updateQ('y9-11g-q9a', [
    { text: '\\((3, 4.5)\\)', imageUrl: '' },
    { text: '\\((2.5, 4)\\)', imageUrl: '' },
    { text: '\\((3.5, 5)\\)', imageUrl: '' },
    { text: '\\((4, 3.5)\\)', imageUrl: '' }
  ], 0, [
    { explanation: 'Use the midpoint formula for points $A(2, 3)$ and $B(4, 6)$.', workingOut: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)' },
    { explanation: 'Substitute the coordinates.', workingOut: 'M = \\left(\\frac{2+4}{2}, \\frac{3+6}{2}\\right)' },
    { explanation: 'Simplify.', workingOut: 'M = (3, 4.5)' }
  ]);

  // 9b
  updateQ('y9-11g-q9b', [
    { text: '\\((5, 2)\\)', imageUrl: '' },
    { text: '\\((6, 3)\\)', imageUrl: '' },
    { text: '\\((7, 3.5)\\)', imageUrl: '' },
    { text: '\\((6.5, 2.5)\\)', imageUrl: '' }
  ], 1, [
    { explanation: 'Use the midpoint formula for points $B(4, 6)$ and $C(8, 0)$.', workingOut: 'N = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)' },
    { explanation: 'Substitute the coordinates.', workingOut: 'N = \\left(\\frac{4+8}{2}, \\frac{6+0}{2}\\right)' },
    { explanation: 'Simplify.', workingOut: 'N = (6, 3)' }
  ]);

  // 9c
  updateQ('y9-11g-q9c', [
    { text: '\\(-0.5\\)', imageUrl: '' },
    { text: '\\(-2\\)', imageUrl: '' },
    { text: '\\(0.5\\)', imageUrl: '' },
    { text: '\\(2\\)', imageUrl: '' }
  ], 0, [
    { explanation: 'Use the gradient formula for $M(3, 4.5)$ and $N(6, 3)$.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
    { explanation: 'Substitute the coordinates.', workingOut: 'm = \\frac{3 - 4.5}{6 - 3}' },
    { explanation: 'Simplify.', workingOut: 'm = \\frac{-1.5}{3} = -0.5' }
  ]);

  // 9d
  updateQ('y9-11g-q9d', [
    { text: '\\(-0.5\\)', imageUrl: '' },
    { text: '\\(0.5\\)', imageUrl: '' },
    { text: '\\(-2\\)', imageUrl: '' },
    { text: '\\(2\\)', imageUrl: '' }
  ], 0, [
    { explanation: 'First, find midpoint $P$ of $C(8, 0)$ and $D(6, -3)$.', workingOut: 'P = \\left(\\frac{8+6}{2}, \\frac{0-3}{2}\\right) = (7, -1.5)' },
    { explanation: 'Find midpoint $Q$ of $D(6, -3)$ and $A(2, 3)$.', workingOut: 'Q = \\left(\\frac{6+2}{2}, \\frac{-3+3}{2}\\right) = (4, 0)' },
    { explanation: 'Calculate gradient of $PQ$.', workingOut: 'm = \\frac{0 - (-1.5)}{4 - 7} = \\frac{1.5}{-3} = -0.5' }
  ]);

  // 9e
  updateQ('y9-11g-q9e', [
    { text: 'They are parallel', imageUrl: '' },
    { text: 'They are perpendicular', imageUrl: '' },
    { text: 'They intersect but are not perpendicular', imageUrl: '' },
    { text: 'They are the same line', imageUrl: '' }
  ], 0, [
    { explanation: 'Compare the gradients of $MN$ and $PQ$.', workingOut: 'm_{MN} = -0.5 \\quad \\text{and} \\quad m_{PQ} = -0.5' },
    { explanation: 'State the conclusion.', workingOut: 'm_{MN} = m_{PQ} \\implies MN \\parallel PQ' }
  ]);

  // 9f
  updateQ('y9-11g-q9f', [
    { text: '\\(-4, -4\\)', imageUrl: '' },
    { text: '\\(-5, -5\\)', imageUrl: '' },
    { text: '\\(-4.5, -4.5\\)', imageUrl: '' },
    { text: '\\(4.5, 4.5\\)', imageUrl: '' }
  ], 2, [
    { explanation: 'Use the gradient formula for $Q(4, 0)$ and $M(3, 4.5)$.', workingOut: 'm_{QM} = \\frac{4.5 - 0}{3 - 4} = \\frac{4.5}{-1} = -4.5' },
    { explanation: 'Use the gradient formula for $P(7, -1.5)$ and $N(6, 3)$.', workingOut: 'm_{PN} = \\frac{3 - (-1.5)}{6 - 7} = \\frac{4.5}{-1} = -4.5' }
  ]);

  // 9g
  updateQ('y9-11g-q9g', [
    { text: 'Rectangle', imageUrl: '' },
    { text: 'Rhombus', imageUrl: '' },
    { text: 'Kite', imageUrl: '' },
    { text: 'Parallelogram', imageUrl: '' }
  ], 3, [
    { explanation: 'Analyze the sides of $MNPQ$.', workingOut: 'MN \\parallel PQ \\text{ and } QM \\parallel PN' },
    { explanation: 'State the conclusion.', workingOut: 'Since both pairs of opposite sides are parallel, MNPQ is a parallelogram.' }
  ]);

  await batch.commit();
  console.log("Updated q9 graph, options, and steps successfully.");
  process.exit(0);
}

run().catch(console.error);
