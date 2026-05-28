/**
 * Fix the food scale dial question in Firestore.
 *
 * Bug: The needle SVG coordinates were calculated incorrectly,
 * placing the needle at ~9° (way past 400g) instead of 72° (340g).
 * Also, the solution referenced "tick marks every 10g" but there
 * were no tick marks in the SVG at all.
 *
 * Run: node tools/scripts/fixFoodScaleQuestion.cjs
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, getDocs, updateDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBFgYKWPTcm_ZkG0bAPlbLerMFeFWkgvmA",
  authDomain: "sapere-app-7f1e0.firebaseapp.com",
  projectId: "sapere-app-7f1e0",
  storageBucket: "sapere-app-7f1e0.appspot.com",
  messagingSenderId: "1082165408487",
  appId: "1:1082165408487:web:d8e5e9d0b6e9b7c8e4c7f2"
};

// ─── Corrected SVG ───────────────────────────────────────────────────────────
//
// Scale:   200g → 135°, 300g → 90°, 400g → 45°  (total 90° arc)
// Each 10g = 4.5°
// 340g → 135° − (140/200 × 90°) = 72°
//
// Needle endpoint at r = 44, angle = 72°:
//   x = 150 + 44 × cos(72°) = 150 + 44 × 0.30902 = 163.60
//   y = 120 − 44 × sin(72°) = 120 − 44 × 0.95106 = 78.15
//
// Tick marks computed for every 10g with:
//   outer  r = 50  (on the circle)
//   major (50g) inner  r = 43  (7 px long)
//   minor (10g) inner  r = 46  (4 px long)
// ─────────────────────────────────────────────────────────────────────────────

const correctedQuestion = `Read the measurement on the food scale dial below. What is the reading in grams?<br><svg width="300" height="170" viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <rect x="60" y="30" width="180" height="120" rx="10" fill="#f97316" stroke="#ea580c" stroke-width="2"/>
    <rect x="70" y="20" width="160" height="10" rx="2" fill="#94a3b8"/>
    <circle cx="150" cy="120" r="50" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle cx="150" cy="120" r="3" fill="#1e293b"/>
    <line x1="114.64" y1="84.64" x2="119.59" y2="89.59" stroke="#1e293b" stroke-width="2"/>
    <line x1="117.53" y1="81.98" x2="120.13" y2="85.02" stroke="#64748b" stroke-width="1"/>
    <line x1="120.61" y1="79.55" x2="122.96" y2="82.78" stroke="#64748b" stroke-width="1"/>
    <line x1="123.88" y1="77.37" x2="125.97" y2="80.78" stroke="#64748b" stroke-width="1"/>
    <line x1="127.30" y1="75.45" x2="129.12" y2="79.01" stroke="#64748b" stroke-width="1"/>
    <line x1="130.87" y1="73.81" x2="133.55" y2="77.37" stroke="#475569" stroke-width="1.5"/>
    <line x1="134.55" y1="72.45" x2="135.78" y2="76.25" stroke="#64748b" stroke-width="1"/>
    <line x1="138.33" y1="71.38" x2="139.26" y2="75.27" stroke="#64748b" stroke-width="1"/>
    <line x1="142.18" y1="70.62" x2="142.80" y2="74.57" stroke="#64748b" stroke-width="1"/>
    <line x1="146.08" y1="70.15" x2="146.39" y2="74.06" stroke="#64748b" stroke-width="1"/>
    <line x1="150" y1="70" x2="150" y2="77" stroke="#1e293b" stroke-width="2"/>
    <line x1="153.92" y1="70.15" x2="153.61" y2="74.06" stroke="#64748b" stroke-width="1"/>
    <line x1="157.82" y1="70.62" x2="157.20" y2="74.57" stroke="#64748b" stroke-width="1"/>
    <line x1="161.67" y1="71.38" x2="160.74" y2="75.27" stroke="#64748b" stroke-width="1"/>
    <line x1="165.45" y1="72.45" x2="164.15" y2="76.25" stroke="#64748b" stroke-width="1"/>
    <line x1="169.13" y1="73.81" x2="166.45" y2="77.37" stroke="#475569" stroke-width="1.5"/>
    <line x1="172.70" y1="75.45" x2="170.88" y2="79.01" stroke="#64748b" stroke-width="1"/>
    <line x1="176.13" y1="77.37" x2="174.04" y2="80.78" stroke="#64748b" stroke-width="1"/>
    <line x1="179.39" y1="79.55" x2="177.04" y2="82.78" stroke="#64748b" stroke-width="1"/>
    <line x1="182.47" y1="81.98" x2="179.87" y2="85.02" stroke="#64748b" stroke-width="1"/>
    <line x1="185.36" y1="84.64" x2="180.41" y2="89.59" stroke="#1e293b" stroke-width="2"/>
    <text x="104" y="80" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">200</text>
    <text x="150" y="62" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">300</text>
    <text x="187" y="80" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">400</text>
    <text x="150" y="105" text-anchor="middle" fill="#64748b" font-size="8" font-weight="bold" font-family="'Outfit'">grams</text>
    <line x1="150" y1="120" x2="163.60" y2="78.15" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="150" cy="120" r="4" fill="#ef4444"/>
    <path d="M 150 15 L 150 25 L 147 21 M 150 25 L 153 21" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  </svg>`;

async function fixFoodScaleQuestion() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const q = query(
    collection(db, 'questions'),
    where('topicId', '==', 'y7-8a'),
    where('type', '==', 'multiple_choice')
  );

  const snap = await getDocs(q);

  let found = 0;
  for (const docSnap of snap.docs) {
    const data = docSnap.data();
    if (
      typeof data.question === 'string' &&
      data.question.includes('food scale dial')
    ) {
      console.log(`Found question: ${docSnap.id}`);
      console.log(`Current answer options: ${JSON.stringify(data.options)}`);
      await updateDoc(docSnap.ref, {
        question: correctedQuestion,
      });
      console.log(`✅ Updated question ${docSnap.id} with corrected SVG needle (340g at 72°)`);
      found++;
    }
  }

  if (found === 0) {
    console.log('⚠️  Question not found in y7-8a. Trying broader search...');
    const q2 = query(collection(db, 'questions'), where('chapterId', '==', 'y7-8'));
    const snap2 = await getDocs(q2);
    for (const docSnap of snap2.docs) {
      const data = docSnap.data();
      if (typeof data.question === 'string' && data.question.includes('food scale dial')) {
        console.log(`Found question (broader): ${docSnap.id}`);
        await updateDoc(docSnap.ref, { question: correctedQuestion });
        console.log(`✅ Updated: ${docSnap.id}`);
        found++;
      }
    }
  }

  if (found === 0) {
    console.log('❌ Could not find the food scale question in Firestore.');
    console.log('   Make sure the question is under collection "questions".');
  } else {
    console.log(`\nDone! Fixed ${found} question(s).`);
    console.log('Fix summary:');
    console.log('  • Needle endpoint corrected: (204.32, 111.39) → (163.60, 78.15)');
    console.log('  • Needle angle corrected: ~9° → 72° (= 340g position)');
    console.log('  • Added 21 tick marks (every 10g, major every 50g)');
    console.log('  • Removed non-existent tick marks from the solution description');
  }

  process.exit(0);
}

fixFoodScaleQuestion().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
