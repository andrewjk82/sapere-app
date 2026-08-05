const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const batch = db.batch();

  // ----- Q6A -----
  const q6aRef = db.collection('questions').doc('y10-13a-q6a');
  batch.update(q6aRef, {
    question: "The diagram shows a circle with centre \\(O\\). The line segment \\(AB\\) is a chord and \\(M\\) is its midpoint. Prove that the line segment \\(OM\\) is perpendicular to the chord \\(AB\\).",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y10-13a-q6aa",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "What can be said about the lengths of \\(OA\\) and \\(OB\\)?",
        solutionSteps: [
          {
            explanation: "Explain why the lengths are equal.",
            workingOut: "Since \\(OA\\) and \\(OB\\) are both radii of the same circle, they must be equal in length (\\(OA = OB\\)).",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q6ab",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "What can be said about the length of \\(AM\\) and \\(MB\\)?",
        solutionSteps: [
          {
            explanation: "Explain why the lengths are equal.",
            workingOut: "Since \\(M\\) is given as the midpoint of the chord \\(AB\\), the segment is divided into two equal parts, so \\(AM = MB\\).",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q6ac",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Using the results above, which triangle congruence test can be used to prove that \\(\\triangle OAM \\cong \\triangle OBM\\)?",
        solutionSteps: [
          {
            explanation: "Identify the congruent parts.",
            workingOut: "We have \\(OA = OB\\) (radii), \\(AM = MB\\) (midpoint), and \\(OM = OM\\) (common side).",
            graphData: null
          },
          {
            explanation: "Determine the congruence test.",
            workingOut: "Since all three corresponding sides are equal, the triangles are congruent by the SSS (Side-Side-Side) congruence test.",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q6ad",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Hence, why must \\(\\angle OMA = \\angle OMB = 90^\\circ\\)?",
        solutionSteps: [
          {
            explanation: "Use congruent triangles to equate angles.",
            workingOut: "Because \\(\\triangle OAM \\cong \\triangle OBM\\), their corresponding angles are equal. Therefore, \\(\\angle OMA = \\angle OMB\\).",
            graphData: null
          },
          {
            explanation: "Apply straight line angle property.",
            workingOut: "The angles \\(\\angle OMA\\) and \\(\\angle OMB\\) lie on the straight line \\(AB\\), so they must add up to \\(180^\\circ\\).\nSince they are equal, \\(\\angle OMA = \\angle OMB = \\frac{180^\\circ}{2} = 90^\\circ\\).",
            graphData: null
          }
        ]
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----- Q6B -----
  const q6bRef = db.collection('questions').doc('y10-13a-q6b');
  batch.update(q6bRef, {
    question: "The diagram shows a circle with centre \\(O\\). The line segment \\(AB\\) is a chord and the line segment \\(OM\\) is perpendicular to \\(AB\\). Prove that \\(M\\) is the midpoint of the chord \\(AB\\).",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y10-13a-q6ba",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "What can be said about the lengths of \\(OA\\) and \\(OB\\)?",
        solutionSteps: [
          {
            explanation: "Explain why the lengths are equal.",
            workingOut: "Since \\(OA\\) and \\(OB\\) are both radii of the same circle, they must be equal in length (\\(OA = OB\\)).",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q6bb",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Which triangle congruence test can be used to prove that \\(\\triangle OAM \\cong \\triangle OBM\\)?",
        solutionSteps: [
          {
            explanation: "Identify the congruent parts.",
            workingOut: "We have \\(OA = OB\\) (hypotenuse, as they are radii), \\(OM = OM\\) (common side), and \\(\\angle OMA = \\angle OMB = 90^\\circ\\) (given, right angles).",
            graphData: null
          },
          {
            explanation: "Determine the congruence test.",
            workingOut: "Since they are right-angled triangles with an equal hypotenuse and one equal side, they are congruent by the RHS (Right angle-Hypotenuse-Side) congruence test.",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q6bc",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Hence, why must \\(AM = MB\\)?",
        solutionSteps: [
          {
            explanation: "Use congruent triangles to equate sides.",
            workingOut: "Because \\(\\triangle OAM \\cong \\triangle OBM\\), all their corresponding sides are equal.",
            graphData: null
          },
          {
            explanation: "Conclude the proof.",
            workingOut: "Therefore, \\(AM = MB\\), which means \\(M\\) is the midpoint of the chord \\(AB\\).",
            graphData: null
          }
        ]
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----- Q7A -----
  const q7aRef = db.collection('questions').doc('y10-13a-q7a');
  batch.update(q7aRef, {
    question: "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies inside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPB = \\beta\\) and \\(\\angle OPA = \\alpha\\).",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y10-13a-q7aa",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Prove that \\(\\angle APB = \\alpha + \\beta\\).",
        solutionSteps: [
          {
            explanation: "Express the angle \\(\\angle APB\\) in terms of \\(\\alpha\\) and \\(\\beta\\).",
            workingOut: "From the diagram, the angle \\(\\angle APB\\) is composed of two adjacent angles: \\(\\angle OPA\\) and \\(\\angle OPB\\).\nTherefore, \\(\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta\\).",
            graphData: null
          }
        ]
      },
      {
        id: "y10-13a-q7ab",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Prove that \\(\\angle AOB = 2(\\alpha + \\beta) = 2\\angle APB\\).",
        solutionSteps: [
          {
            explanation: "Use the exterior angle theorem on the two isosceles triangles.",
            workingOut: "In \\(\\triangle OPA\\), \\(OA = OP\\) (radii), so \\(\\angle OAP = \\alpha\\). Producing \\(PO\\) to \\(X\\) creates the exterior angle \\(\\angle AOX = \\angle OAP + \\angle OPA = 2\\alpha\\).\nSimilarly, in \\(\\triangle OPB\\), \\(OB = OP\\) (radii), so \\(\\angle OBP = \\beta\\). The exterior angle \\(\\angle BOX = \\angle OBP + \\angle OPB = 2\\beta\\).",
            graphData: null
          },
          {
            explanation: "Combine the central angles to find \\(\\angle AOB\\).",
            workingOut: "From the diagram, the central angle \\(\\angle AOB\\) is the sum of \\(\\angle AOX\\) and \\(\\angle BOX\\):\n\\(\\angle AOB = \\angle AOX + \\angle BOX\\).\nSubstituting the expressions from the previous step, \\(\\angle AOB = 2\\alpha + 2\\beta = 2(\\alpha + \\beta)\\).\nSince we know \\(\\angle APB = \\alpha + \\beta\\), we conclude that \\(\\angle AOB = 2\\angle APB\\).",
            graphData: null
          }
        ]
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully implemented real subQuestions for q6a, q6b, q7a!');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
