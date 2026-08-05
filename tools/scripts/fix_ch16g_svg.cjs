const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const svgs = {
  'y9-16g-q10': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <rect x="70" y="50" width="160" height="140" fill="#f8fafc" stroke="none" />
  <path d="M 70,190 A 80,30 0 0,0 230,190" fill="none" stroke="#334155" stroke-width="2" />
  <path d="M 70,190 A 80,30 0 0,1 230,190" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="70" y1="50" x2="70" y2="190" stroke="#334155" stroke-width="2" />
  <line x1="230" y1="50" x2="230" y2="190" stroke="#334155" stroke-width="2" />
  <ellipse cx="150" cy="50" rx="80" ry="30" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <line x1="150" y1="50" x2="230" y2="50" stroke="#334155" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="190" y="45" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">5 cm</text>
  <line x1="245" y1="50" x2="245" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="50" x2="250" y2="50" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="190" x2="250" y2="190" stroke="#334155" stroke-width="1" />
  <text x="255" y="125" font-family="sans-serif" font-size="14" fill="#0f172a">10 cm</text>
</svg>`,

  'y9-16g-q11a': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <line x1="50" y1="200" x2="130" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="130" y1="150" x2="230" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="130" y1="150" x2="130" y2="50" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <polygon points="50,100 130,50 230,50 150,100" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="150,100 230,50 230,150 150,200" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="50,100 150,100 150,200 50,200" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <text x="100" y="220" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="middle">5 m</text>
  <text x="25" y="155" font-family="sans-serif" font-size="15" fill="#0f172a">1.5 m</text>
  <text x="200" y="190" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="middle">3 m</text>
</svg>`,

  'y9-16g-q11b': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <line x1="50" y1="200" x2="90" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="90" y1="170" x2="240" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="90" y1="170" x2="90" y2="20" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <polygon points="50,50 90,20 140,20 100,50" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="100,150 140,120 240,120 200,150" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="100,50 140,20 140,120 100,150" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="200,150 240,120 240,170 200,200" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="50,50 100,50 100,150 200,150 200,200 50,200" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <text x="95" y="130" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">Area = 30 cm²</text>
  <text x="225" y="195" font-family="sans-serif" font-size="15" fill="#0f172a">2.6 cm</text>
</svg>`,

  'y9-16g-q11c': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <ellipse cx="230" cy="120" rx="30" ry="70" fill="#f8fafc" />
  <rect x="50" y="50" width="180" height="140" fill="#f8fafc" stroke="none" />
  <path d="M 230,50 A 30,70 0 0,0 230,190" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <path d="M 230,50 A 30,70 0 0,1 230,190" fill="none" stroke="#334155" stroke-width="2" />
  <line x1="50" y1="50" x2="230" y2="50" stroke="#334155" stroke-width="2" />
  <line x1="50" y1="190" x2="230" y2="190" stroke="#334155" stroke-width="2" />
  <ellipse cx="50" cy="120" rx="30" ry="70" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <line x1="50" y1="120" x2="50" y2="50" stroke="#334155" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="35" y="85" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">2.6</text>
  <line x1="50" y1="210" x2="230" y2="210" stroke="#334155" stroke-width="1" />
  <line x1="50" y1="205" x2="50" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="230" y1="205" x2="230" y2="215" stroke="#334155" stroke-width="1" />
  <text x="140" y="230" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">11.2 cm</text>
</svg>`,

  'y9-16g-q11d': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <line x1="50" y1="150" x2="130" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="130" y1="120" x2="230" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="130" y1="120" x2="180" y2="20" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <polygon points="100,50 180,20 230,120 150,150" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="50,150 150,150 100,50" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="100" y1="50" x2="100" y2="150" stroke="#334155" stroke-width="1.5" stroke-dasharray="4,4" />
  <rect x="100" y="140" width="10" height="10" fill="none" stroke="#334155" stroke-width="1" />
  <text x="85" y="110" font-family="sans-serif" font-size="15" fill="#0f172a">6</text>
  <text x="100" y="170" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="middle">7 cm</text>
  <text x="195" y="150" font-family="sans-serif" font-size="15" fill="#0f172a">25 cm</text>
</svg>`
};

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefix = 'export const Y9_CH16G_QUESTIONS = ';
  if (!content.startsWith(prefix)) {
    console.error('File does not start with expected prefix.');
    process.exit(1);
  }
  
  const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
  let questions = JSON.parse(arrayString);
  
  let updatedCount = 0;
  for (let q of questions) {
    if (svgs[q.id]) {
      q.graphData = { svg: svgs[q.id] };
      
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { 
        graphData: q.graphData,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  await batch.commit();
  console.log(`Successfully updated ${updatedCount} questions in Firestore with SVG graphics.`);
  
  await touchChapterIndex(db, 'y9-16g');

  const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  console.log('Successfully updated seedYear9Ch16GQuestions.js locally.');

  process.exit(0);
}

run().catch(console.error);
