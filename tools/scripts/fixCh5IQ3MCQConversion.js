import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q3 subQuestions:
// 1. Convert all 5 subQuestions to multiple_choice.
// 2. Set answer as correct index string ("0").
// 3. Format workingOut with standard Unicode mathematical symbols for clean display.
const subQuestions = [
  {
    id: "y8-5i-q3a",
    type: "multiple_choice",
    question: "a) Let \\(\\angle ABC\\) be \\(\\alpha\\). Express the size of \\(\\angle AOC\\) in terms of \\(\\alpha\\).",
    options: ["2α", "α", "180° - 2α", "90° - α"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "By the angle at the centre theorem, the angle subtended by an arc at the centre is twice the angle subtended at the circumference.",
        workingOut: "∠AOC = 2 × ∠ABC = 2α"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q3b",
    type: "multiple_choice",
    question: "b) Let \\(\\angle ACB\\) be \\(\\beta\\). Express the size of \\(\\angle AOB\\) in terms of \\(\\beta\\).",
    options: ["2β", "β", "180° - 2β", "90° - β"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "By the angle at the centre theorem, the angle subtended by an arc at the centre is twice the angle subtended at the circumference.",
        workingOut: "∠AOB = 2 × ∠ACB = 2β"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q3c_proof",
    type: "multiple_choice",
    question: "c) Which of the following statements correctly proves that \\(\\triangle ABC\\) is a right-angled triangle?",
    options: [
      "The angle subtended by a diameter at the circumference (angle in a semicircle) is always 90°.",
      "The angle at the center is half the angle at the circumference, which makes it 90°.",
      "Triangle ABC is isosceles, meaning one of the angles must be 90°.",
      "Because OA = OB = OC, the triangle is automatically right-angled."
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since BC is the diameter of the circle, the angle ∠BAC subtended by the diameter at the circumference is a right angle (90°). Therefore, △ABC is a right-angled triangle.",
        workingOut: "∠BAC = 90°"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q3c_names",
    type: "multiple_choice",
    question: "c) Hence name two other right-angled triangles in the diagram.",
    options: [
      "△BDC and △DEC",
      "△AOB and △AOC",
      "△ADC and △AEB",
      "△ABD and △CDE"
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since BD is perpendicular to AC, ∠BDC = 90°, making △BDC right-angled. Since DE is perpendicular to BC, ∠DEC = 90°, making △DEC right-angled.",
        workingOut: "∠BDC = 90°, ∠DEC = 90° ⇒ △BDC, △DEC"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q3d",
    type: "multiple_choice",
    question: "d) If \\(\\angle ECD = 20^\\circ\\), find the size of \\(\\angle ABD\\).",
    options: ["70°", "20°", "50°", "60°"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "In right-angled triangle BDC (where ∠BDC = 90°), the angle ∠BCD (same as ∠ECD) is 20°. Therefore, ∠DBC = 90° - 20° = 70°.",
        workingOut: "∠DBC = 90° - 20° = 70°"
      }
    ],
    graphData: null
  }
];

async function run() {
  const batch = db.batch();

  console.log('Converting all sub-questions to MCQ, adding solutions, and fixing LaTeX in workingOut for: y8-5i-q3');
  const docRef = db.collection('questions').doc('y8-5i-q3');
  batch.update(docRef, {
    subQuestions: subQuestions
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed Q3 MCQ conversion and LaTeX fixes!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
