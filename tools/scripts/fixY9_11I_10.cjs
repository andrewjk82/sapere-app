const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG: Generic triangle with medians drawn
  const svgTriangle = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="340" height="280" viewBox="-2 -1 14 12" xmlns="http://www.w3.org/2000/svg">
  <!-- Background grid lines (light) -->
  <rect x="-2" y="-1" width="14" height="12" fill="#f8fafc"/>

  <!-- Triangle sides -->
  <polygon points="0,10 12,10 3,1" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.12"/>

  <!-- Midpoints: M_AB=(6,10), M_BC=(7.5,5.5), M_AC=(1.5,5.5) -->

  <!-- Median from C(3,1) to midpoint of AB (6,10) -->
  <line x1="3" y1="1" x2="6" y2="10" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.3,0.2"/>
  <!-- Median from A(0,10) to midpoint of BC (7.5,5.5) -->
  <line x1="0" y1="10" x2="7.5" y2="5.5" stroke="#10b981" stroke-width="0.1" stroke-dasharray="0.3,0.2"/>
  <!-- Median from B(12,10) to midpoint of AC (1.5,5.5) -->
  <line x1="12" y1="10" x2="1.5" y2="5.5" stroke="#f59e0b" stroke-width="0.1" stroke-dasharray="0.3,0.2"/>

  <!-- Midpoint dots -->
  <circle cx="6" cy="10" r="0.18" fill="#94a3b8"/>
  <circle cx="7.5" cy="5.5" r="0.18" fill="#94a3b8"/>
  <circle cx="1.5" cy="5.5" r="0.18" fill="#94a3b8"/>

  <!-- Centroid G ≈ (5, 7) -->
  <circle cx="5" cy="7" r="0.25" fill="#6366f1"/>

  <!-- Vertices -->
  <circle cx="0" cy="10" r="0.22" fill="#4f46e5"/>
  <circle cx="12" cy="10" r="0.22" fill="#4f46e5"/>
  <circle cx="3" cy="1" r="0.22" fill="#4f46e5"/>

  <!-- Labels -->
  <text x="-1.2" y="10.1" font-size="0.85" font-family="sans-serif" fill="#4f46e5">A(0, 0)</text>
  <text x="12.2" y="10.1" font-size="0.85" font-family="sans-serif" fill="#4f46e5">B(6a, 0)</text>
  <text x="3.2" y="0.8" font-size="0.85" font-family="sans-serif" fill="#4f46e5">C(6u, 6v)</text>
  <text x="5.2" y="6.7" font-size="0.85" font-family="sans-serif" fill="#6366f1">G</text>
  <text x="5.5" y="10.1" font-size="0.7" font-family="sans-serif" fill="#94a3b8">M₁</text>
  <text x="7.7" y="5.6" font-size="0.7" font-family="sans-serif" fill="#94a3b8">M₂</text>
  <text x="-0.5" y="5.6" font-size="0.7" font-family="sans-serif" fill="#94a3b8">M₃</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "Assign general coordinates to the three vertices. To avoid fractions, use multiples of 6: let \\(A = (0, 0)\\), \\(B = (6a, 0)\\), and \\(C = (6u, 6v)\\), where \\(a, u, v\\) are any real numbers with \\(v \\neq 0\\).",
      workingOut: "\\(A = (0,\\ 0), \\quad B = (6a,\\ 0), \\quad C = (6u,\\ 6v)\\)",
      graphData: { html: svgTriangle }
    },
    {
      explanation: "Find the midpoint of each side using the midpoint formula \\(M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)\\).",
      workingOut: [
        "\\(M_1 = \\text{mid}(AB) = \\left(\\frac{0+6a}{2},\\ \\frac{0+0}{2}\\right) = (3a,\\ 0)\\)",
        "\\(M_2 = \\text{mid}(BC) = \\left(\\frac{6a+6u}{2},\\ \\frac{0+6v}{2}\\right) = (3a+3u,\\ 3v)\\)",
        "\\(M_3 = \\text{mid}(AC) = \\left(\\frac{0+6u}{2},\\ \\frac{0+6v}{2}\\right) = (3u,\\ 3v)\\)"
      ].join("\n")
    },
    {
      explanation: "The three medians are: \\(CM_1\\) (from \\(C\\) to midpoint of \\(AB\\)), \\(AM_2\\) (from \\(A\\) to midpoint of \\(BC\\)), and \\(BM_3\\) (from \\(B\\) to midpoint of \\(AC\\)). Find the point that divides each median in ratio \\(2:1\\) from the vertex using the section formula: \\(P = \\left(\\frac{mx_2+nx_1}{m+n}, \\frac{my_2+ny_1}{m+n}\\right)\\).",
      workingOut: "\\(\\text{Section formula with } m:n = 2:1\\)"
    },
    {
      explanation: "Apply the section formula to median \\(CM_1\\): the point \\(2/3\\) of the way from \\(C(6u, 6v)\\) to \\(M_1(3a, 0)\\).",
      workingOut: [
        "\\(G_1 = \\left(\\frac{2(3a) + 1(6u)}{3},\\ \\frac{2(0) + 1(6v)}{3}\\right)\\)",
        "\\(G_1 = \\left(\\frac{6a + 6u}{3},\\ \\frac{6v}{3}\\right) = (2a + 2u,\\ 2v)\\)"
      ].join("\n")
    },
    {
      explanation: "Apply the section formula to median \\(AM_2\\): the point \\(2/3\\) of the way from \\(A(0, 0)\\) to \\(M_2(3a+3u, 3v)\\).",
      workingOut: [
        "\\(G_2 = \\left(\\frac{2(3a+3u) + 1(0)}{3},\\ \\frac{2(3v) + 1(0)}{3}\\right)\\)",
        "\\(G_2 = \\left(\\frac{6a+6u}{3},\\ \\frac{6v}{3}\\right) = (2a + 2u,\\ 2v)\\)"
      ].join("\n")
    },
    {
      explanation: "Apply the section formula to median \\(BM_3\\): the point \\(2/3\\) of the way from \\(B(6a, 0)\\) to \\(M_3(3u, 3v)\\).",
      workingOut: [
        "\\(G_3 = \\left(\\frac{2(3u) + 1(6a)}{3},\\ \\frac{2(3v) + 1(0)}{3}\\right)\\)",
        "\\(G_3 = \\left(\\frac{6u + 6a}{3},\\ \\frac{6v}{3}\\right) = (2a + 2u,\\ 2v)\\)"
      ].join("\n")
    },
    {
      explanation: "Since \\(G_1 = G_2 = G_3 = (2a+2u,\\ 2v)\\), all three medians pass through the same point \\(G\\). This proves that the medians of any triangle are concurrent. The point \\(G = (2a+2u,\\ 2v)\\) is called the centroid.",
      workingOut: "\\(\\therefore\\ G = (2a + 2u,\\ 2v) \\quad \\text{(centroid — all three medians meet here)} \\quad \\blacksquare\\)"
    }
  ];

  await db.collection('questions').doc('y9-11i-q10').update({
    solution: "",
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11i-q10");
  process.exit(0);
}

run().catch(console.error);
