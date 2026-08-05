const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="100%" height="100%">
  <!-- Two squares AHFD and HBCF -->
  <rect x="40" y="40" width="120" height="120" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <rect x="160" y="40" width="120" height="120" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  
  <!-- Diagonal AC -->
  <line x1="40" y1="160" x2="280" y2="40" stroke="#334155" stroke-width="2" />
  
  <!-- Line DE -->
  <line x1="40" y1="40" x2="147.3" y2="106.3" stroke="#3b82f6" stroke-width="2" />
  
  <!-- Line FG -->
  <line x1="160" y1="40" x2="213.7" y2="73.2" stroke="#3b82f6" stroke-width="2" />
  
  <!-- Points A, B, C, D, H, F -->
  <text x="30" y="175" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">A</text>
  <text x="285" y="175" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">B</text>
  <text x="285" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">C</text>
  <text x="30" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">D</text>
  <text x="155" y="175" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">H</text>
  <text x="155" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">F</text>
  
  <!-- Points E, G -->
  <!-- E is (147.3, 106.3) -->
  <circle cx="147.3" cy="106.3" r="3" fill="#ef4444" />
  <text x="140" y="125" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ef4444">E</text>
  
  <!-- G is (213.7, 73.2) -->
  <circle cx="213.7" cy="73.2" r="3" fill="#ef4444" />
  <text x="215" y="90" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ef4444">G</text>

  <!-- Labels for lengths -->
  <text x="100" y="175" font-family="sans-serif" font-size="14" fill="#0f172a">3</text>
  <text x="220" y="175" font-family="sans-serif" font-size="14" fill="#0f172a">3</text>
  <text x="20" y="100" font-family="sans-serif" font-size="14" fill="#0f172a">3</text>
</svg>`;

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const ids = [
    'y10-2g-q14ai',
    'y10-2g-q14aii',
    'y10-2g-q14aiii',
    'y10-2g-q14aiv',
    'y10-2g-q14b' // checking if it needs it too
  ];
  
  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      await docRef.update({
        graphData: { svg }
      });
      console.log('Updated ' + id + ' in Firestore');
    } else {
      console.log(id + ' not found in Firestore');
    }
  }
  
  process.exit(0);
}

run().catch(console.error);
