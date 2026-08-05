const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const batch = db.batch();

  // ----- Q8 -----
  const q8Ref = db.collection('questions').doc('y10-13a-q8');
  batch.update(q8Ref, {
    question: "The converse of Thales' theorem is established by proving the following result: *The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices of the triangle*.\n\nLet \\(\\triangle ABP\\) be right-angled at \\(P\\), and let \\(O\\) be the midpoint of the hypotenuse \\(AB\\). Draw \\(PO\\) and produce it to \\(Q\\) so that \\(PO = OQ\\). Draw \\(AQ\\) and \\(BQ\\).",
    solutionSteps: [], // Clear parent solution steps
    subQuestions: [
      {
        id: "y10-13a-q8a",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Explain why \\(APBQ\\) is a parallelogram.",
        solutionSteps: [
          {
            explanation: "Identify the properties of the diagonals.",
            workingOut: "The diagonals of the quadrilateral \\(APBQ\\) are \\(AB\\) and \\(PQ\\).\nWe are given that \\(O\\) is the midpoint of \\(AB\\), so \\(AO = OB\\).\nBy construction, \\(PO\\) is produced to \\(Q\\) such that \\(PO = OQ\\).\nSince the diagonals \\(AB\\) and \\(PQ\\) bisect each other at \\(O\\), the quadrilateral \\(APBQ\\) must be a parallelogram.",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q8b",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Hence, explain why \\(APBQ\\) is a rectangle.",
        solutionSteps: [
          {
            explanation: "Use the property of a parallelogram with a right angle.",
            workingOut: "From part a), \\(APBQ\\) is a parallelogram. A parallelogram with at least one right angle is a rectangle.\nWe are given that \\(\\triangle ABP\\) is right-angled at \\(P\\), meaning \\(\\angle APB = 90^\\circ\\).\nTherefore, the parallelogram \\(APBQ\\) is a rectangle.",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q8c",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Hence, explain why \\(AO = BO = PO\\) and why the circle with diameter \\(AB\\) passes through \\(P\\).",
        solutionSteps: [
          {
            explanation: "Use the properties of a rectangle's diagonals.",
            workingOut: "The diagonals of a rectangle are equal in length and bisect each other.\nTherefore, the diagonals \\(AB\\) and \\(PQ\\) are equal (\\(AB = PQ\\)), and their halves are all equal, so \\(AO = BO = PO = OQ\\).\nSince \\(O\\) is equidistant from \\(A\\), \\(B\\), and \\(P\\) (\\(OA = OB = OP\\)), a circle centered at \\(O\\) with radius \\(OA\\) will pass through \\(A\\), \\(B\\), and \\(P\\).\nBecause the line segment \\(AB\\) passes through the center \\(O\\), \\(AB\\) is a diameter of this circle.",
            graphData: null
          }
        ]
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----- Q7B -----
  const q7bRef = db.collection('questions').doc('y10-13a-q7b');
  batch.update(q7bRef, {
    question: "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies outside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPA = \\alpha\\) and \\(\\angle OPB = \\beta\\).",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y10-13a-q7ba",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Prove that \\(\\angle APB = \\beta - \\alpha\\).",
        solutionSteps: [
          {
            explanation: "Express the angle \\(\\angle APB\\) in terms of \\(\\alpha\\) and \\(\\beta\\).",
            workingOut: "From the diagram, the angle \\(\\angle OPB\\) is composed of two adjacent angles: \\(\\angle OPA\\) and \\(\\angle APB\\).\nTherefore, \\(\\angle OPB = \\angle OPA + \\angle APB\\).\nRearranging this gives \\(\\angle APB = \\angle OPB - \\angle OPA = \\beta - \\alpha\\).",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q7bb",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Prove that \\(\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB\\).",
        solutionSteps: [
          {
            explanation: "Use the exterior angle theorem on the two isosceles triangles.",
            workingOut: "In \\(\\triangle OPA\\), \\(OA = OP\\) (radii), so \\(\\angle OAP = \\alpha\\). Producing \\(PO\\) to \\(X\\) creates the exterior angle \\(\\angle AOX = \\angle OAP + \\angle OPA = 2\\alpha\\).\nSimilarly, in \\(\\triangle OPB\\), \\(OB = OP\\) (radii), so \\(\\angle OBP = \\beta\\). The exterior angle \\(\\angle BOX = \\angle OBP + \\angle OPB = 2\\beta\\).",
            graphData: null
          },
          {
            explanation: "Combine the central angles to find \\(\\angle AOB\\).",
            workingOut: "From the diagram, the central angle \\(\\angle AOB\\) is the difference between \\(\\angle BOX\\) and \\(\\angle AOX\\):\n\\(\\angle AOB = \\angle BOX - \\angle AOX\\).\nSubstituting the expressions from the previous step, \\(\\angle AOB = 2\\beta - 2\\alpha = 2(\\beta - \\alpha)\\).\nSince we know \\(\\angle APB = \\beta - \\alpha\\), we conclude that \\(\\angle AOB = 2\\angle APB\\).",
            graphData: null
          }
        ]
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully implemented real subQuestions for q8 and q7b!');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
