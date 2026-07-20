import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Build a beautiful 4x2 grid of all 8 configurations: A, B, C, D, E, F, G, H
const cleanHtml8 = `<svg viewBox="0 0 540 300" width="100%" height="250" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Row 1: A, B, C, D -->
  <!-- Configuration A: 4 Parallel Lines -->
  <g transform="translate(10, 10)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="25" x2="100" y2="25" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="40" x2="100" y2="40" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="55" x2="100" y2="55" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="70" x2="100" y2="70" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config A</text>
  </g>
  
  <!-- Configuration B: 3 Parallel + Slanted Transversal -->
  <g transform="translate(140, 10)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="30" x2="100" y2="30" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="50" x2="100" y2="50" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="70" x2="100" y2="70" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="30" y1="85" x2="85" y2="15" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config B</text>
  </g>

  <!-- Configuration C: 3 Parallel + Perpendicular Transversal -->
  <g transform="translate(270, 10)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="30" x2="100" y2="30" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="50" x2="100" y2="50" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="70" x2="100" y2="70" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="57" y1="85" x2="57" y2="15" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config C</text>
  </g>

  <!-- Configuration D: Parallelogram (2 Parallel + 2 Parallel) -->
  <g transform="translate(400, 10)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="35" x2="100" y2="35" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="65" x2="100" y2="65" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="30" y1="75" x2="60" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="55" y1="75" x2="85" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config D</text>
  </g>

  <!-- Row 2: E, F, G, H -->
  <!-- Configuration E: 2 Parallel + 2 Intersecting -->
  <g transform="translate(10, 140)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="35" x2="100" y2="35" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="65" x2="100" y2="65" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="25" y1="75" x2="55" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="85" y1="75" x2="55" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config E</text>
  </g>

  <!-- Configuration F: 4 Concurrent Lines -->
  <g transform="translate(140, 140)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="50" x2="100" y2="50" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="57" y1="15" x2="57" y2="85" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="25" y1="20" x2="90" y2="80" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="25" y1="80" x2="90" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="57" cy="50" r="3.5" fill="#f43f5e"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config F</text>
  </g>

  <!-- Configuration G: 3 Concurrent + 1 Transversal -->
  <g transform="translate(270, 140)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="50" x2="100" y2="50" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="25" y1="20" x2="90" y2="80" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="25" y1="80" x2="90" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="75" x2="100" y2="75" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="575" cy="50" r="3.5" fill="#f43f5e"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config G</text>
  </g>

  <!-- Configuration H: General Quadrilateral -->
  <g transform="translate(400, 140)">
    <rect width="115" height="110" fill="#fff" rx="12" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="15" y1="35" x2="100" y2="45" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="15" y1="75" x2="100" y2="65" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="25" y1="85" x2="45" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="90" y1="85" x2="75" y2="20" stroke="#475569" stroke-width="1.8" stroke-linecap="round"/>
    <polygon points="35,50 78,55 70,70 30,73" fill="rgba(99, 102, 241, 0.08)"/>
    <text x="57" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="900" font-family="'Outfit'">Config H</text>
  </g>
</svg>`;

async function run() {
  const docRef = db.collection('questions').doc('pYtSRZEFCiIiLlRcj0SE');
  
  const subQuestions = [
    {
      id: "q9a",
      question: "How many of the eight configurations involve exactly three parallel lines?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "1 configuration",
        "2 configurations",
        "3 configurations",
        "4 configurations"
      ],
      answer: 1, // 2 configurations (Config B and Config C)
      solutionSteps: [
        {
          explanation: "We start by analyzing all eight possible configurations for four straight lines in a single plane, labeled Config A to Config H in the diagram.",
          workingOut: "\\text{Analyze each configuration: A to H}"
        },
        {
          explanation: "Next, we search for configurations that have exactly three lines parallel to each other. Config B shows 3 parallel lines cut by a slanted transversal. Config C shows 3 parallel lines cut by a perpendicular transversal.",
          workingOut: "\\text{Exactly 3 parallel lines: Config B and Config C}"
        },
        {
          explanation: "Finally, we sum these configurations up, giving a total count of 2. This matches option B.",
          workingOut: "\\text{Total count} = 2"
        }
      ]
    },
    {
      id: "q9b",
      question: "Which of the following configurations is NOT mathematically possible for four lines in a plane?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Three parallel lines and one concurrent line",
        "Four parallel lines",
        "Four concurrent lines",
        "Three parallel lines cut by a transversal"
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We start by reviewing the definitions of parallel and concurrent lines. Parallel lines never meet, whereas concurrent lines are three or more lines that intersect at a single point.",
          workingOut: "\\text{Parallel} = \\text{no intersection}, \\; \\text{Concurrent} = \\text{intersect at 1 point}"
        },
        {
          explanation: "Next, we analyze the statement 'Three parallel lines and one concurrent line'. For a line to be 'concurrent', there must be at least three lines that meet at a point. But since three of the lines are parallel, they can never meet at a point, making this configuration mathematically impossible.",
          workingOut: "\\text{Parallel lines cannot meet } \\Rightarrow \\text{Cannot be concurrent}"
        },
        {
          explanation: "Finally, we verify that four parallel lines (Config A), four concurrent lines (Config F), and three parallel lines cut by a transversal (Config B) are all valid and possible configurations. Thus, Option A is the correct answer.",
          workingOut: "\\text{Final Answer: Option A}"
        }
      ]
    }
  ];

  console.log('Updating pYtSRZEFCiIiLlRcj0SE in Firestore...');
  await docRef.update({
    'graphData.html': cleanHtml8,
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
