const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="100%" height="100%">
  <!-- Definitions for textures/gradients -->
  <defs>
    <linearGradient id="wood" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#a1662f"/>
      <stop offset="50%" stop-color="#8b5a2b"/>
      <stop offset="100%" stop-color="#6e4420"/>
    </linearGradient>
    <linearGradient id="soil" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#5c4033"/>
      <stop offset="100%" stop-color="#4a3225"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background (grass/ground hint) -->
  <rect x="0" y="0" width="500" height="300" fill="#e8f5e9" rx="10"/>

  <!-- Main Garden Bed Group -->
  <g transform="translate(50, 50)" filter="url(#shadow)">
    <!-- Soil background for the 3 partitions -->
    <!-- Partition 1 -->
    <rect x="10" y="10" width="120" height="180" fill="url(#soil)" rx="2"/>
    <!-- Partition 2 -->
    <rect x="140" y="10" width="120" height="180" fill="url(#soil)" rx="2"/>
    <!-- Partition 3 -->
    <rect x="270" y="10" width="120" height="180" fill="url(#soil)" rx="2"/>

    <!-- Wooden Borders & Dividers -->
    <!-- Top Border -->
    <rect x="0" y="0" width="400" height="10" fill="url(#wood)" rx="3"/>
    <!-- Bottom Border -->
    <rect x="0" y="190" width="400" height="10" fill="url(#wood)" rx="3"/>
    
    <!-- Left Border (x) -->
    <rect x="0" y="0" width="10" height="200" fill="url(#wood)" rx="3"/>
    <!-- Divider 1 (x) -->
    <rect x="130" y="0" width="10" height="200" fill="url(#wood)" rx="3"/>
    <!-- Divider 2 (x) -->
    <rect x="260" y="0" width="10" height="200" fill="url(#wood)" rx="3"/>
    <!-- Right Border (x) -->
    <rect x="390" y="0" width="10" height="200" fill="url(#wood)" rx="3"/>

    <!-- Greenery/Plants (Decorative) -->
    <g fill="#4ade80" opacity="0.8">
      <circle cx="50" cy="50" r="15"/>
      <circle cx="80" cy="120" r="18"/>
      <circle cx="180" cy="80" r="16"/>
      <circle cx="210" cy="150" r="14"/>
      <circle cx="310" cy="60" r="17"/>
      <circle cx="340" cy="130" r="15"/>
    </g>
    <g fill="#22c55e" opacity="0.9">
      <circle cx="70" cy="70" r="12"/>
      <circle cx="100" cy="140" r="15"/>
      <circle cx="160" cy="100" r="12"/>
      <circle cx="200" cy="170" r="14"/>
      <circle cx="330" cy="80" r="12"/>
      <circle cx="320" cy="160" r="13"/>
    </g>
  </g>

  <!-- Labels -->
  <!-- Top Length Label (y) -->
  <path d="M 50 30 L 450 30" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <line x1="50" y1="25" x2="50" y2="35" stroke="#64748b" stroke-width="2"/>
  <line x1="450" y1="25" x2="450" y2="35" stroke="#64748b" stroke-width="2"/>
  <text x="250" y="20" font-family="sans-serif" font-size="16" font-weight="bold" fill="#334155" text-anchor="middle">Total Length (y)</text>

  <!-- Side Width Label (x) -->
  <path d="M 30 50 L 30 250" stroke="#64748b" stroke-width="2"/>
  <line x1="25" y1="50" x2="35" y2="50" stroke="#64748b" stroke-width="2"/>
  <line x1="25" y1="250" x2="35" y2="250" stroke="#64748b" stroke-width="2"/>
  <text x="20" y="150" font-family="sans-serif" font-size="16" font-weight="bold" fill="#334155" text-anchor="end" dominant-baseline="middle">x m</text>

  <!-- Point out that all vertical borders are x -->
  <text x="250" y="280" font-family="sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Note: 4 vertical wood segments of length x, and 2 horizontal segments.</text>
</svg>`;

  const pRef = db.collection('questions').doc('y10-7h-q8');
  await pRef.update({
    graphData: { svg: svg },
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Added nice SVG garden graphic to y10-7h-q8 parent document");
  process.exit(0);
}

run().catch(console.error);
