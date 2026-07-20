import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q2:
// Shuffling correct options away from index 0 (A) and cleaning up parent solution steps
const q2_parent_solutionSteps = [
  {
    "explanation": "Since triangle \\(ABC\\) is isosceles with \\(AB = AC\\), the base angles must be equal: \\(\\angle ACB = \\angle ABC = 50^\\circ\\).",
    "workingOut": "∠ACB = 50°"
  },
  {
    "explanation": "The sum of angles in a triangle is \\(180^\\circ\\), so we find \\(\\angle BAC\\).",
    "workingOut": "∠BAC = 180° - 50° - 50° = 80°"
  }
];

const q2_subQuestions = [
  {
    id: "y8-5i-q2a_bac",
    type: "multiple_choice",
    question: "a) Find the size of \\(\\angle BAC\\).",
    options: ["50°", "80°", "100°", "60°"],
    answer: "1", // B
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
    options: ["80°", "65°", "50°", "40°"],
    answer: "2", // C
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
    answer: "0", // A
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
      "\\(\\angle IFC = \\angle FIC = 50^\\circ\\), which means \\(FI = FC\\).",
      "\\(\\angle FIC = \\angle FCI = 80^\\circ\\).",
      "\\(\\angle FIC = \\angle FCI = 50^\\circ\\), which means the base angles are equal, so \\(FI = FC\\).",
      "\\(FI = IC\\) because \\(FI \\parallel BC\\)."
    ],
    answer: "2", // C
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
      "Since \\(DI = DB\\) by definition.",
      "Since \\(DI \\parallel AC\\), the corresponding angles \\(\\angle DIB\\) and \\(\\angle ACB\\) are equal to \\(50^\\circ\\). Since \\(\\angle DIB = \\angle DBI = 50^\\circ\\), \\(\\triangle DIB\\) is isosceles, so \\(DB = DI\\).",
      "Since \\(DI \\parallel AC\\), \\(\\angle DIB = \\angle BAC = 80^\\circ\\), so it is isosceles.",
      "Since \\(DI \\parallel AB\\), \\(DB = DI\\)."
    ],
    answer: "1", // B
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
    options: ["36°", "108°", "72°", "54°"],
    answer: "2", // C
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
    options: ["72°", "108°", "144°", "90°"],
    answer: "1", // B
    solutionSteps: [
      {
        explanation: "Using the interior angles and the parallel line properties of \\(EG \\parallel FI\\), the consecutive interior angles sum to \\(180^\\circ\\), which yields \\(\\angle EFG = 180^\\circ - 72^\\circ = 108^\\circ\\).",
        workingOut: "∠EFG = 108°"
      }
    ],
    graphData: null
  }
];

// y8-5i-q3:
// Shuffling correct options away from index 0 (A) and cleaning up parent solution steps
const q3_parent_solutionSteps = [
  {
    "explanation": "According to the angle at the centre theorem, the angle subtended by an arc at the centre is twice the angle subtended by it at any point on the circumference.",
    "workingOut": "∠AOC = 2 × ∠ABC = 2α"
  }
];

const q3_subQuestions = [
  {
    id: "y8-5i-q3a",
    type: "multiple_choice",
    question: "a) Let \\(\\angle ABC\\) be \\(\\alpha\\). Express the size of \\(\\angle AOC\\) in terms of \\(\\alpha\\).",
    options: ["α", "2α", "180° - 2α", "90° - α"],
    answer: "1", // B
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
    answer: "0", // A
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
      "The angle at the center is half the angle at the circumference, which makes it 90°.",
      "Triangle ABC is isosceles, meaning one of the angles must be 90°.",
      "The angle subtended by a diameter at the circumference (angle in a semicircle) is always 90°.",
      "Because OA = OB = OC, the triangle is automatically right-angled."
    ],
    answer: "2", // C
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
      "△AOB and △AOC",
      "△BDC and △DEC",
      "△ADC and △AEB",
      "△ABD and △CDE"
    ],
    answer: "1", // B
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
    options: ["20°", "50°", "60°", "70°"],
    answer: "3", // D
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

  console.log('Shuffling MCQ options and fixing parent solution LaTeX for y8-5i-q2 & y8-5i-q3');
  
  const q2Ref = db.collection('questions').doc('y8-5i-q2');
  batch.update(q2Ref, {
    solutionSteps: q2_parent_solutionSteps,
    subQuestions: q2_subQuestions
  });

  const q3Ref = db.collection('questions').doc('y8-5i-q3');
  batch.update(q3Ref, {
    solutionSteps: q3_parent_solutionSteps,
    subQuestions: q3_subQuestions
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
  console.log('Successfully shuffled choices and fixed parent solution LaTeX!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
