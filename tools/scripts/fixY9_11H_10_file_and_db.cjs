const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const seedFilePath = path.join(__dirname, '../../src/constants/seedYear9Ch11HQuestions.js');
  let seedText = fs.readFileSync(seedFilePath, 'utf8');

  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [10.12, -4.025, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'});

var pO = board.create('point', [0,0], {name:'O', size:3, color:'#64748b', fixed:true});

var pA = board.create('point', [8, -6], {name:'A(8, -6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, -15]}});
var pB = board.create('point', [6, 8], {name:'B(6, 8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, 10]}});
var pC = board.create('point', [-8, 6], {name:'C(-8, 6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-65, 10]}});
var pD = board.create('point', [-6, -8], {name:'D(-6, -8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-70, -10]}});

board.create('circle', [pO, pB], {strokeColor:'#4f46e5', strokeWidth:3, fillColor:'#6366f1', fillOpacity:0.08});
board.create('text', [5.2, 7.8, 'x² + y² = 100'], {fontSize:13, color:'#4f46e5', fontWeight:'bold'});

board.create('segment', [pA, pB], {strokeColor: '#1e293b', strokeWidth: 2});
board.create('segment', [pB, pC], {strokeColor: '#1e293b', strokeWidth: 2});
board.create('segment', [pC, pD], {strokeColor: '#1e293b', strokeWidth: 2});
board.create('segment', [pD, pA], {strokeColor: '#1e293b', strokeWidth: 2});

board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 340,
      height: 340,
      boundingbox: [-11.5, 11.5, 11.5, -11.5],
      showConstructionPoints: true,
      script: graphScript
    }
  };

  // 1. Initialize Firestore
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // 2. Update parent document in Firestore
  await db.collection('questions').doc('y9-11h-q10').set({
    id: 'y9-11h-q10',
    title: 'The circle shown below has equation \\(x^2 + y^2 = 100\\). A square \\(ABCD\\) is inscribed in the circle with vertices \\(A(8, -6)\\), \\(B(6, 8)\\), \\(C(-8, 6)\\), and \\(D(-6, -8)\\). Answer the following sub-questions.',
    question: 'The circle shown below has equation \\(x^2 + y^2 = 100\\). A square \\(ABCD\\) is inscribed in the circle with vertices \\(A(8, -6)\\), \\(B(6, 8)\\), \\(C(-8, 6)\\), and \\(D(-6, -8)\\). Answer the following sub-questions.',
    solution: "",
    graphData: baseGraphData,
    type: 'parent',
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  const updateSubQ = async (id, options, answerIdx, cleanQuestion, steps, hint) => {
    const data = {
      id: id,
      question: cleanQuestion,
      options: options.map(opt => ({ text: opt, imageUrl: '' })),
      answer: answerIdx.toString(),
      solutionSteps: steps,
      hint: hint,
      graphData: null,
      type: 'multiple_choice',
      updatedAt: FieldValue.serverTimestamp()
    };
    await db.collection('questions').doc(id).set(data, { merge: true });
    return data;
  };

  // 10a
  const q10aData = await updateSubQ('y9-11h-q10a', [
    '\\(-6\\)',
    '\\(7\\)',
    '\\(-7\\)', // correct
    '\\(-8\\)'
  ], 2, "a) Find the gradient of \\(AB\\).", [
    { explanation: "Identify the coordinates of points \\(A\\) and \\(B\\) from the given vertices.", workingOut: "A(8, -6), \\quad B(6, 8)", graphData: null },
    { explanation: "Apply the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\) using these points.", workingOut: "m_{AB} = \\frac{8 - (-6)}{6 - 8}", graphData: null },
    { explanation: "Simplify the numerator and the denominator.", workingOut: "m_{AB} = \\frac{14}{-2}", graphData: null },
    { explanation: "Calculate the final value of the gradient.", workingOut: "-7", graphData: null }
  ], "Use the gradient formula with points A and B.");

  // 10b
  const q10bData = await updateSubQ('y9-11h-q10b', [
    '\\(y = 7x + 50\\)',
    '\\(y = -7x + 50\\)', // correct
    '\\(y = -7x - 50\\)',
    '\\(y = 7x - 50\\)'
  ], 1, "b) Find the equation of the line \\(AB\\).", [
    { explanation: "Use the point-gradient formula \\(y - y_1 = m(x - x_1)\\). We know the gradient \\(m = -7\\) from the previous part.", workingOut: "m = -7", graphData: null },
    { explanation: "Substitute the gradient and the coordinates of point \\(B(6, 8)\\) (or point A) into the formula.", workingOut: "y - 8 = -7(x - 6)", graphData: null },
    { explanation: "Expand the bracket.", workingOut: "y - 8 = -7x + 42", graphData: null },
    { explanation: "Rearrange to make \\(y\\) the subject.", workingOut: "y = -7x + 50", graphData: null }
  ], "Use the point-gradient form y - y1 = m(x - x1).");

  // 10c
  const q10cData = await updateSubQ('y9-11h-q10c', [
    '\\(10\\sqrt{3}\\)',
    '\\(-10\\sqrt{2}\\)',
    '\\(10\\sqrt{2}\\)', // correct
    '\\(100\\sqrt{2}\\)'
  ], 2, "c) Find the distance \\(AB\\).", [
    { explanation: "Recall the coordinates of points \\(A(8, -6)\\) and \\(B(6, 8)\\).", workingOut: "A(8, -6), \\quad B(6, 8)", graphData: null },
    { explanation: "Apply the distance formula \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).", workingOut: "AB = \\sqrt{(6 - 8)^2 + (8 - (-6))^2}", graphData: null },
    { explanation: "Simplify the terms inside the square root.", workingOut: "AB = \\sqrt{(-2)^2 + (14)^2} = \\sqrt{4 + 196}", graphData: null },
    { explanation: "Calculate the sum and express it in simplest surd form.", workingOut: "AB = \\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}", graphData: null }
  ], "Use the distance formula to find the length of the interval AB.");

  // 10d
  const q10dData = await updateSubQ('y9-11h-q10d', [
    '\\(200\\)', // correct
    '\\(100\\)',
    '\\(400\\)',
    '\\(199\\)'
  ], 0, "d) Find the area of the square \\(ABCD\\).", [
    { explanation: "The area of a square is equal to the side length squared. The side length is the distance \\(AB\\) we calculated in the previous part.", workingOut: "Area = AB^2", graphData: null },
    { explanation: "Substitute the side length \\(10\\sqrt{2}\\) (or use the unsimplified \\(\\sqrt{200}\\)).", workingOut: "Area = (10\\sqrt{2})^2 = (\\sqrt{200})^2", graphData: null },
    { explanation: "Square the value to find the final area.", workingOut: "Area = 200", graphData: null }
  ], "The area of a square is its side length squared.");

  // Sync subQuestions array on parent in Firestore
  const subIds = ['y9-11h-q10a', 'y9-11h-q10b', 'y9-11h-q10c', 'y9-11h-q10d'];
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

  await db.collection('questions').doc('y9-11h-q10').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Successfully updated Firestore DB (parent + subquestions).");
  process.exit(0);
}

run().catch(console.error);
