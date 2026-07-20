import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Build mathematically perfect Pappus Theorem SVG
const pappusHtml = `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Main Lines L1 (DEF) and L2 (UVW) -->
  <line x1="50" y1="65" x2="350" y2="95" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="235" x2="350" y2="205" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Dashed Line representing Pappus Collinearity Line -->
  <line x1="50" y1="150" x2="350" y2="150" stroke="#6366f1" stroke-dasharray="4" stroke-width="1.8"/>
  
  <!-- Cross Intersections (DV, UE, EW, VF, FU, WD) -->
  <line x1="100" y1="70" x2="200" y2="220" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="100" y1="230" x2="200" y2="80" stroke="#94a3b8" stroke-width="1.2"/>
  
  <line x1="200" y1="80" x2="300" y2="210" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="200" y1="220" x2="300" y2="90" stroke="#94a3b8" stroke-width="1.2"/>
  
  <line x1="300" y1="90" x2="100" y2="230" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="300" y1="210" x2="100" y2="70" stroke="#94a3b8" stroke-width="1.2"/>
  
  <!-- Outer Collinear points (DEF) -->
  <circle cx="100" cy="70" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.8"/>
  <circle cx="200" cy="80" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.8"/>
  <circle cx="300" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.8"/>
  
  <!-- Outer Collinear points (UVW) -->
  <circle cx="100" cy="230" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.8"/>
  <circle cx="200" cy="220" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.8"/>
  <circle cx="300" cy="210" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.8"/>
  
  <!-- Intersections X, Y, Z (Strictly collinear on y=150) -->
  <circle cx="153.3" cy="150" r="5.5" fill="#f43f5e" stroke="#fff" stroke-width="1.8"/>
  <circle cx="214.3" cy="150" r="5.5" fill="#f43f5e" stroke="#fff" stroke-width="1.8"/>
  <circle cx="253.8" cy="150" r="5.5" fill="#f43f5e" stroke="#fff" stroke-width="1.8"/>
  
  <!-- Labels -->
  <text x="100" y="54" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  <text x="200" y="64" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">E</text>
  <text x="300" y="74" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">F</text>
  
  <text x="100" y="248" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">U</text>
  <text x="200" y="238" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  <text x="300" y="228" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">W</text>
  
  <text x="153.3" y="135" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">X</text>
  <text x="214.3" y="135" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">Z</text>
  <text x="253.8" y="170" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">Y</text>
</svg>`;

// We also write standard solutionSteps for cR3Rwod6nxnPELv16cIx
const subQuestions = [
  {
    id: "q5a",
    question: "According to Pappus' Theorem, what special mathematical property is shared by points $X, Y,$ and $Z$?",
    type: "multiple_choice",
    isManual: true,
    options: [
      "They are collinear (they lie on a single straight line)",
      "They are concurrent (lines pass through them)",
      "They form an equilateral triangle",
      "They are perpendicular to each other"
    ],
    answer: 0,
    solutionSteps: [
      {
        explanation: "We start by identifying the three cross-intersection points in the diagram: Point \\\\(X\\\\) (intersection of \\\\(DV\\\\) and \\\\(UE\\\\)), Point \\\\(Y\\\\) (intersection of \\\\(EW\\\\) and \\\\(VF\\\\)), and Point \\\\(Z\\\\) (intersection of \\\\(FU\\\\) and \\\\(WD\\\\)).",
        workingOut: "\\\\( X = DV \\\\cap UE, \\\\; Y = EW \\\\cap VF, \\\\; Z = FU \\\\cap WD \\\\)"
      },
      {
        explanation: "Next, we observe the blue dashed line passing horizontally through the center of the figure. Point \\\\(X\\\\), Point \\\\(Z\\\\), and Point \\\\(Y\\\\) all lie directly on this single straight line.",
        workingOut: "\\\\( \\text{Dashed line: } y = 150 \\\\)"
      },
      {
        explanation: "Finally, we recall that the geometric property of points lying on a single straight line is called collinearity. Therefore, according to Pappus' Theorem, points \\\\(X\\\\), \\\\(Y\\\\), and \\\\(Z\\\\) are collinear.",
        workingOut: "\\\\( \\text{Collinear points: } X, \\; Y, \\; Z \\\\)"
      }
    ]
  }
];

async function run() {
  console.log('Updating Pappus Theorem question...');
  await db.collection('questions').doc('cR3Rwod6nxnPELv16cIx').update({
    'graphData.html': pappusHtml,
    subQuestions,
    solution: null,
    isNew: true
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Done!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
