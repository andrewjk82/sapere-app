import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Build Desargues perspective triangle configuration SVG
const desarguesHtml = `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Large Triangle PQR (dashed blue lines) -->
  <polygon points="200,50 80,240 320,240" fill="none" stroke="#6366f1" stroke-width="1.8" stroke-dasharray="3"/>
  
  <!-- Small Triangle UVW (dashed purple lines) -->
  <polygon points="200,176.7 140,145 260,145" fill="rgba(99, 102, 241, 0.05)" stroke="#a78bfa" stroke-width="1.8" stroke-dasharray="3"/>
  
  <!-- Solid perspective lines PV, QW, RU meeting at O(200, 176.7) -->
  <!-- PV (Vertical line) -->
  <line x1="200" y1="50" x2="200" y2="240" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- QW (Slanted line) -->
  <line x1="80" y1="240" x2="260" y2="145" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- RU (Slanted line) -->
  <line x1="320" y1="240" x2="140" y2="145" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- Vertices of Large Triangle (P, Q, R) -->
  <circle cx="200" cy="50" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="80" cy="240" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="320" cy="240" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Vertices of Small Triangle / Intersections (U, V, W) -->
  <!-- V is at (200, 240) which is on QR, wait. In Desargues, V is at (200, 176.7) - let's make it the center intersection point! -->
  <circle cx="140" cy="145" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="260" cy="145" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="200" cy="240" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Concurrency point O (200, 176.7) -->
  <circle cx="200" cy="176.7" r="5.5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>

  <!-- Labels -->
  <text x="200" y="35" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="65" y="245" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="335" y="245" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="120" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">U</text>
  <text x="200" y="258" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  <text x="280" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">W</text>
  <text x="215" y="182" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
</svg>`;

async function run() {
  const docRef = db.collection('questions').doc('tqGERhwsvzIcDZpfNHwn');

  const subQuestions = [
    {
      id: "q4a",
      question: "Identify three collinear points in the diagram.",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Points $P, U,$ and $Q$",
        "Points $P, V,$ and $R$",
        "Points $Q, W,$ and $P$",
        "Points $U, V,$ and $W$"
      ],
      answer: 0, // Option A: P, U, Q
      solutionSteps: [
        {
          explanation: "We start by reviewing the definition of collinear points. Collinear points are three or more points that lie on a single straight line.",
          workingOut: "\\text{Collinear} = \\text{lie on a single straight line}"
        },
        {
          explanation: "Next, we observe the left boundary of the large triangle. The points P, U, and Q all lie along this single straight line segment.",
          workingOut: "\\text{Line PQ contains: } P, \\; U, \\; Q"
        },
        {
          explanation: "Finally, we conclude that Points P, U, and Q are collinear. This corresponds to Option A.",
          workingOut: "\\text{Final Answer: Option A}"
        }
      ]
    },
    {
      id: "q4b",
      question: "What is the relationship between lines $PV$, $QW$, and $RU$?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "They are concurrent",
        "They are parallel",
        "They are collinear",
        "They do not intersect"
      ],
      answer: 0, // Option A: Concurrent
      solutionSteps: [
        {
          explanation: "We begin by locating the three lines described in the question: Line \\(PV\\), Line \\(QW\\), and Line \\(RU\\) in the diagram.",
          workingOut: "\\text{Identify lines: } PV, \\; QW, \\; RU"
        },
        {
          explanation: "Next, we trace all three solid lines to find where they cross. They all intersect at the single central point labeled O.",
          workingOut: "PV \\cap QW \\cap RU = Point \\; O"
        },
        {
          explanation: "Finally, we recall that lines that intersect at a single common point are called concurrent. Thus, the three lines are concurrent.",
          workingOut: "\\text{Final Answer: Option A}"
        }
      ]
    }
  ];

  console.log('Updating Desargues perspective question...');
  await docRef.update({
    'graphData.html': desarguesHtml,
    subQuestions,
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
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
