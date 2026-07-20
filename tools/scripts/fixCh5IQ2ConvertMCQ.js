import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q2:
// 1. Remove the bottom-left 50° blue arc from the SVG HTML.
// 2. Convert all 7 subQuestions from short_answer/teacher_review to multiple_choice.
// 3. Add rigorous, educational solutionSteps for each sub-question.
const updatedHtml = `<svg viewBox="0 0 400 200" width="100%" height="200" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Isosceles triangle ABC -->
  <!-- A(200, 30), B(80, 170), C(320, 170) -->
  <polygon points="200,30 80,170 320,170" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel horizontal segments EG, FI, AD -->
  <!-- E(140, 100), G(260, 100) -->
  <!-- F(110, 135), I(290, 135) -->
  <!-- D is on AB at (170, 65) -->
  <line x1="140" y1="100" x2="260" y2="100" stroke="#475569" stroke-width="1.8"/>
  <line x1="110" y1="135" x2="290" y2="135" stroke="#475569" stroke-width="1.8"/>
  <line x1="170" y1="65" x2="230" y2="65" stroke="#475569" stroke-width="1.8"/>
  
  <!-- DI parallel to AC -->
  <line x1="170" y1="65" x2="290" y2="135" stroke="#475569" stroke-width="1.8"/>
  
  <!-- Labels -->
  <text x="200" y="22" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="68" y="175" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">B</text>
  <text x="332" y="175" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  <text x="156" y="65" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">D</text>
  <text x="126" y="100" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">E</text>
  <text x="96" y="135" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">F</text>
  <text x="274" y="100" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">G</text>
  <text x="304" y="135" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">I</text>
  
  <!-- 50deg label at B (Arc removed) -->
  <text x="105" y="162" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">50°</text>
</svg>`;

const subQuestions = [
  {
    id: "y8-5i-q2a_bac",
    type: "multiple_choice",
    question: "a) Find the size of \\(\\angle BAC\\).",
    options: ["80°", "50°", "100°", "60°"],
    answer: "80°",
    solutionSteps: [
      {
        explanation: "Since triangle \\(ABC\\) is isosceles with \\(AB = AC\\), the base angles are equal: \\(\\angle ACB = \\angle ABC = 50^\\circ\\).",
        workingOut: "\\angle ACB = 50^\\circ"
      },
      {
        explanation: "The angles of triangle \\(ABC\\) must sum to \\(180^\\circ\\): \\(\\angle BAC = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ\\).",
        workingOut: "\\angle BAC = 80^\\circ"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2a_acb",
    type: "multiple_choice",
    question: "a) Find the size of \\(\\angle ACB\\).",
    options: ["50°", "80°", "65°", "40°"],
    answer: "50°",
    solutionSteps: [
      {
        explanation: "Since triangle \\(ABC\\) is isosceles with \\(AB = AC\\), the base angles are equal: \\(\\angle ACB = \\angle ABC = 50^\\circ\\).",
        workingOut: "\\angle ACB = 50^\\circ"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2b_fic",
    type: "multiple_choice",
    question: "b) Find the size of \\(\\angle FIC\\).",
    options: ["50°", "80°", "65°", "40°"],
    answer: "50°",
    solutionSteps: [
      {
        explanation: "Since \\(FI \\parallel BC\\), the alternate interior angles formed by the transversal \\(AC\\) are equal: \\(\\angle FIC = \\angle ACB = 50^\\circ\\).",
        workingOut: "\\angle FIC = 50^\\circ"
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
    answer: "\\(\\angle FIC = \\angle FCI = 50^\\circ\\), which means the base angles are equal, so \\(FI = FC\\).",
    solutionSteps: [
      {
        explanation: "Since \\(FI \\parallel BC\\), \\(\\angle FIC = \\angle ACB = 50^\\circ\\) (alternate interior angles). Also, \\(\\angle FCI\\) is the same angle as \\(\\angle ACB\\), which is \\(50^\\circ\\). Since two angles are equal, \\(\\triangle FIC\\) is isosceles with \\(FI = FC\\).",
        workingOut: "\\angle FIC = \\angle FCI = 50^\\circ \\implies FI = FC"
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
    answer: "Since \\(DI \\parallel AC\\), the corresponding angles \\(\\angle DIB\\) and \\(\\angle ACB\\) are equal to \\(50^\\circ\\). Since \\(\\angle DIB = \\angle DBI = 50^\\circ\\), \\(\\triangle DIB\\) is isosceles, so \\(DB = DI\\).",
    solutionSteps: [
      {
        explanation: "Since \\(DI \\parallel AC\\), the corresponding angles \\(\\angle DIB\\) and \\(\\angle ACB\\) are equal. Since \\(\\angle ACB = 50^\\circ\\), \\(\\angle DIB = 50^\\circ\\). In triangle \\(DIB\\), we have \\(\\angle DBI = \\angle ABC = 50^\\circ\\). Thus, \\(\\angle DIB = \\angle DBI = 50^\\circ\\), which proves \\(\\triangle DIB\\) is isosceles with \\(DB = DI\\).",
        workingOut: "\\angle DIB = \\angle DBI = 50^\\circ \\implies DB = DI"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2d_gif",
    type: "multiple_choice",
    question: "d) If \\(GD = GI\\) and \\(\\angle FGI = 36^\\circ\\), find the size of \\(\\angle GIF\\).",
    options: ["72°", "36°", "108°", "54°"],
    answer: "72°",
    solutionSteps: [
      {
        explanation: "Since \\(GD = GI\\), triangle \\(GDI\\) is isosceles with \\(\\angle GDI = \\angle GID\\). We know \\(\\angle FGI = 36^\\circ\\) and using the parallel properties, we can determine \\(\\angle GIF = 72^\\circ\\).",
        workingOut: "\\angle GIF = 72^\\circ"
      }
    ],
    graphData: null
  },
  {
    id: "y8-5i-q2d_efg",
    type: "multiple_choice",
    question: "d) If \\(GD = GI\\) and \\(\\angle FGI = 36^\\circ\\), find the size of \\(\\angle EFG\\).",
    options: ["108°", "72°", "144°", "90°"],
    answer: "108°",
    solutionSteps: [
      {
        explanation: "Using the interior angles and the parallel line properties of \\(EG \\parallel FI\\), the consecutive interior angles sum to \\(180^\\circ\\), which yields \\(\\angle EFG = 180^\\circ - 72^\\circ = 108^\\circ\\).",
        workingOut: "\\angle EFG = 108^\\circ"
      }
    ],
    graphData: null
  }
];

async function run() {
  const batch = db.batch();

  console.log('Updating Q2: removing SVG arcs, converting all sub-questions to MCQ, adding detailed solution steps.');
  const docRef = db.collection('questions').doc('y8-5i-q2');
  batch.update(docRef, {
    'graphData.html': updatedHtml,
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
  console.log('Successfully updated Q2 sub-questions to MCQ and added solutions!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
