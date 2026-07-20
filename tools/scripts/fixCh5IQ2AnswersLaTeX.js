import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q2 subQuestions:
// 1. Change all `answer` fields to the correct index string ("0").
// 2. Format `workingOut` blocks with standard Unicode mathematical symbols for clean display.
const subQuestions = [
  {
    id: "y8-5i-q2a_bac",
    type: "multiple_choice",
    question: "a) Find the size of \\(\\angle BAC\\).",
    options: ["80°", "50°", "100°", "60°"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since triangle \\(ABC\\) is isosceles with \\(AB = AC\\), the base angles are equal: \\(\\angle ACB = \\angle ABC = 50^\\circ\\).",
        workingOut: "∠ACB = 50°"
      },
      {
        explanation: "The angles of triangle \\(ABC\\) must sum to \\(180^\\circ\\): \\(\\angle BAC = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ\\).",
        workingOut: "∠BAC = 80°"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2a_acb",
    type: "multiple_choice",
    question: "a) Find the size of \\(\\angle ACB\\).",
    options: ["50°", "80°", "65°", "40°"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since triangle \\(ABC\\) is isosceles with \\(AB = AC\\), the base angles are equal: \\(\\angle ACB = \\angle ABC = 50^\\circ\\).",
        workingOut: "∠ACB = 50°"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2b_fic",
    type: "multiple_choice",
    question: "b) Find the size of \\(\\angle FIC\\).",
    options: ["50°", "80°", "65°", "40°"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since \\(FI \\parallel BC\\), the alternate interior angles formed by the transversal \\(AC\\) are equal: \\(\\angle FIC = \\angle ACB = 50^\\circ\\).",
        workingOut: "∠FIC = 50°"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2b_proof",
    type: "multiple_choice",
    question: "b) Which of the following statements correctly proves that \\(\\triangle FIC\\) is isosceles?",
    options: [
      "\\(\\angle FIC = \\angle FCI = 50^\\circ\\), which means the base angles are equal, so \\(FI = FC\\).",
      "\\(\\angle IFC = \\angle FIC = 50^\\circ\\), which means \\(FI = FC\\).",
      "\\(\\angle FIC = 80^\\circ\\) and \\(\\angle FCI = 50^\\circ\\).",
      "\\(FI = IC\\) because \\(FI \\parallel BC\\)."
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since \\(FI \\parallel BC\\), \\(\\angle FIC = \\angle ACB = 50^\\circ\\) (alternate interior angles). Also, \\(\\angle FCI\\) is the same angle as \\(\\angle ACB\\), which is \\(50^\\circ\\). Since two angles are equal, \\(\\triangle FIC\\) is isosceles with \\(FI = FC\\).",
        workingOut: "∠FIC = ∠FCI = 50° ⇒ FI = FC"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2c",
    type: "multiple_choice",
    question: "c) Which statement correctly proves that \\(DB = DI\\)?",
    options: [
      "Since \\(DI \\parallel AC\\), the corresponding angles \\(\\angle DIB\\) and \\(\\angle ACB\\) are equal to \\(50^\\circ\\). Since \\(\\angle DIB = \\angle DBI = 50^\\circ\\), \\(\\triangle DIB\\) is isosceles, so \\(DB = DI\\).",
      "Since \\(DI = DB\\) by definition.",
      "Since \\(DI \\parallel AC\\), \\(\\angle DIB = \\angle BAC = 80^\\circ\\), so it is isosceles.",
      "Since \\(DI \\parallel AB\\), \\(DB = DI\\)."
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since \\(DI \\parallel AC\\), the corresponding angles \\(\\angle DIB\\) and \\(\\angle ACB\\) are equal. Since \\(\\angle ACB = 50^\\circ\\), \\(\\angle DIB = 50^\\circ\\). In triangle \\(DIB\\), we have \\(\\angle DBI = \\angle ABC = 50^\\circ\\). Thus, \\(\\angle DIB = \\angle DBI = 50^\\circ\\), which proves \\(\\triangle DIB\\) is isosceles with \\(DB = DI\\).",
        workingOut: "∠DIB = ∠DBI = 50° ⇒ DB = DI"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2d_gif",
    type: "multiple_choice",
    question: "d) If \\(GD = GI\\) and \\(\\angle FGI = 36^\\circ\\), find the size of \\(\\angle GIF\\).",
    options: ["72°", "36°", "108°", "54°"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Since \\(GD = GI\\), triangle \\(GDI\\) is isosceles with \\(\\angle GDI = \\angle GID\\). We know \\(\\angle FGI = 36^\\circ\\) and using the parallel properties, we can determine \\(\\angle GIF = 72^\\circ\\).",
        workingOut: "∠GIF = 72°"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2d_efg",
    type: "multiple_choice",
    question: "d) If \\(GD = GI\\) and \\(\\angle FGI = 36^\\circ\\), find the size of \\(\\angle EFG\\).",
    options: ["108°", "72°", "144°", "90°"],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Using the interior angles and the parallel line properties of \\(EG \\parallel FI\\), the consecutive interior angles sum to \\(180^\\circ\\), which yields \\(\\angle EFG = 180^\\circ - 72^\\circ = 108^\\circ\\).",
        workingOut: "∠EFG = 108°"
      }
    ],
    graphData: null
  }
];

async function run() {
  const batch = db.batch();

  console.log('Fixing MCQ indexes and broken LaTeX in workingOut for: y8-5i-q2');
  const docRef = db.collection('questions').doc('y8-5i-q2');
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
  console.log('Successfully completed Q2 MCQ index and LaTeX fixes!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
