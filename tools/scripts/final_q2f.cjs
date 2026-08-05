const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const PF = 'font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000"';
  const VF = 'font-family="serif" font-size="12" fill="#000"';
  const SW = '1';
  const R = '1.2';

  // ─────────────────────────────────────────────────────────────────────────────
  // q2f-alpha: SAME PROBLEM — just remove arcs. Keep question/answer unchanged.
  //
  // Line PQ // RS. T between lines.
  // ∠TPQ = 48°, ∠TUS = 73°, find α = ∠PTU = 48+73 = 121°
  //
  // Coordinates verified:
  //   P=(50,65), T=(94,124), U=(84,155)
  //   ∠TPQ at P: PT=(44,59). atan(59/44)≈53°... let me recalc below.
  //
  // For ∠TPQ=48°: PT direction 48° below horizontal from P(50,65).
  //   T = (50 + cos48°·t, 65 + sin48°·t) = (50+0.669t, 65+0.743t)
  // For ∠TUS=73°: UT direction 73° above horizontal from U to T (T is upper-right of U).
  //   T = U + s·(cos73°, -sin73°) = (ux+0.292s, uy-0.956s) in SVG coords
  //   On RS (y=155): uy=155, so T_y = 155 - 0.956s
  //
  // With t=80:
  //   T = (50+53.5, 65+59.4) = (103.5, 124.4) ≈ (104, 124)
  //   0.956s = 155 - 124.4 = 30.6 → s=32
  //   ux = 104 - 0.292·32 = 104 - 9.3 = 94.7 ≈ 95
  //   U = (95, 155)
  //
  // So: P=(50,65), T=(104,124), U=(95,155)
  // α = 48+73 = 121°  ✓
  // ─────────────────────────────────────────────────────────────────────────────

  const SVG_ALPHA = `<svg viewBox="-20 20 270 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="65" x2="210" y2="65" stroke="#000" stroke-width="${SW}"/>
  <line x1="20" y1="155" x2="210" y2="155" stroke="#000" stroke-width="${SW}"/>
  <line x1="50" y1="65" x2="104" y2="124" stroke="#000" stroke-width="${SW}"/>
  <line x1="104" y1="124" x2="95" y2="155" stroke="#000" stroke-width="${SW}"/>
  <line x1="113" y1="60" x2="113" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="119" y1="60" x2="119" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="113" y1="150" x2="113" y2="160" stroke="#000" stroke-width="${SW}"/>
  <line x1="119" y1="150" x2="119" y2="160" stroke="#000" stroke-width="${SW}"/>
  <circle cx="50" cy="65" r="${R}" fill="#000"/>
  <circle cx="104" cy="124" r="${R}" fill="#000"/>
  <circle cx="95" cy="155" r="${R}" fill="#000"/>
  <text x="22" y="60" ${PF}>P</text>
  <text x="200" y="60" ${PF}>Q</text>
  <text x="20" y="168" ${PF}>R</text>
  <text x="198" y="168" ${PF}>S</text>
  <text x="107" y="120" ${PF}>T</text>
  <text x="88" y="170" ${PF}>U</text>
  <text x="60" y="82" ${VF}>48°</text>
  <text x="109" y="152" ${VF}>73°</text>
  <text x="85" y="130" ${PF}>α</text>
</svg>`;

  // ─────────────────────────────────────────────────────────────────────────────
  // q2f-beta: BRAND NEW HARD PROBLEM
  //
  // Problem: Line EF // Line GH.
  //   A is on line EF (top), C is on line GH (bottom).
  //   K is a point between the parallel lines.
  //   Lines AK and KC are drawn.
  //   ∠KAE = 130°  (exterior angle at A on the left side)
  //   ∠KCG = 125°  (exterior angle at C on the left side)
  //   Find β = ∠AKC.
  //
  // Solution (auxiliary line method):
  //   Draw a line through K parallel to EF and GH.
  //   ∠KAF = 180° − 130° = 50°  (supplementary)
  //   By alternate interior angles (auxiliary // EF):
  //     angle at K (right of AK) = ∠KAF = 50°
  //   ∠KCH = 180° − 125° = 55°  (supplementary)
  //   By alternate interior angles (auxiliary // GH):
  //     angle at K (right of KC) = ∠KCH = 55°
  //   β = 50° + 55° = 105°
  //
  // Coordinates (verified):
  //   A=(60,65), K=(111,126), C=(84,165)  [viewBox "-20 20 270 200"]
  //   ∠KAE=130°: AK=(51,61) SVG → real (51,-61) → angle from leftward AE = 130° ✓
  //   ∠KCG=125°: CK=(27,-39) SVG → real (27,39) → angle from leftward CG = 125° ✓
  //   β=∠AKC: rays KA and KC → angle 105.4° ≈ 105° ✓
  // ─────────────────────────────────────────────────────────────────────────────

  const SVG_BETA = `<svg viewBox="-20 20 270 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="65" x2="220" y2="65" stroke="#000" stroke-width="${SW}"/>
  <line x1="20" y1="165" x2="220" y2="165" stroke="#000" stroke-width="${SW}"/>
  <line x1="60" y1="65" x2="111" y2="126" stroke="#000" stroke-width="${SW}"/>
  <line x1="111" y1="126" x2="84" y2="165" stroke="#000" stroke-width="${SW}"/>
  <line x1="128" y1="60" x2="128" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="134" y1="60" x2="134" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="128" y1="160" x2="128" y2="170" stroke="#000" stroke-width="${SW}"/>
  <line x1="134" y1="160" x2="134" y2="170" stroke="#000" stroke-width="${SW}"/>
  <circle cx="60" cy="65" r="${R}" fill="#000"/>
  <circle cx="111" cy="126" r="${R}" fill="#000"/>
  <circle cx="84" cy="165" r="${R}" fill="#000"/>
  <text x="20" y="60" ${PF}>E</text>
  <text x="207" y="60" ${PF}>F</text>
  <text x="20" y="178" ${PF}>G</text>
  <text x="207" y="178" ${PF}>H</text>
  <text x="46" y="60" ${PF}>A</text>
  <text x="115" y="123" ${PF}>K</text>
  <text x="79" y="180" ${PF}>C</text>
  <text x="23" y="84" ${VF}>130°</text>
  <text x="23" y="157" ${VF}>125°</text>
  <text x="93" y="138" ${PF}>β</text>
</svg>`;

  // ───────────── Write to Firestore ─────────────

  // q2f-alpha: only update the SVG (no arcs), keep everything else
  await db.collection('questions').doc('y10-8a-q2f-alpha').update({
    graphData: { svg: SVG_ALPHA },
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated q2f-alpha (arcs removed)');

  // q2f-beta: completely new problem
  const newBeta = {
    id: 'y10-8a-q2f-beta',
    question: 'In the figure, line \\(EF \\parallel\\) line \\(GH\\). \\(A\\) is a point on line \\(EF\\) and \\(C\\) is a point on line \\(GH\\). \\(K\\) is a point between the two parallel lines. Lines \\(AK\\) and \\(KC\\) are drawn. Given that \\(\\angle KAE = 130^\\circ\\) and \\(\\angle KCG = 125^\\circ\\), find \\(\\beta = \\angle AKC\\).',
    options: [
      { text: '\\(75\\)' },
      { text: '\\(105\\)' },
      { text: '\\(115\\)' },
      { text: '\\(95\\)' }
    ],
    answer: '1', // 105° is correct (index 1)
    difficulty: 'hard',
    graphData: { svg: SVG_BETA },
    explanation: `**Finding β = ∠AKC**

**Key Concept:** Draw an auxiliary line through \\(K\\) parallel to both \\(EF\\) and \\(GH\\).

**Step 1 — Find the interior angle at \\(A\\):**
Since \\(\\angle KAE = 130°\\), and \\(EAF\\) is a straight line:
$$\\angle KAF = 180° - 130° = 50°$$

**Step 2 — Apply Alternate Interior Angles at \\(K\\) (upper part):**
The auxiliary line through \\(K\\) is parallel to \\(EF\\). Transversal \\(AK\\) cuts them.
By the **Alternate Interior Angles Theorem**:
$$\\angle_{\\text{upper}} = \\angle KAF = 50°$$

**Step 3 — Find the interior angle at \\(C\\):**
Since \\(\\angle KCG = 125°\\), and \\(GCH\\) is a straight line:
$$\\angle KCH = 180° - 125° = 55°$$

**Step 4 — Apply Alternate Interior Angles at \\(K\\) (lower part):**
The auxiliary line through \\(K\\) is parallel to \\(GH\\). Transversal \\(KC\\) cuts them.
By the **Alternate Interior Angles Theorem**:
$$\\angle_{\\text{lower}} = \\angle KCH = 55°$$

**Step 5 — Add both parts:**
$$\\beta = \\angle AKC = 50° + 55° = \\boxed{105°}$$`,
    updatedAt: FieldValue.serverTimestamp()
  };

  await db.collection('questions').doc('y10-8a-q2f-beta').set(newBeta, { merge: true });
  console.log('Created new q2f-beta');

  // Update parent document
  const parentSnap = await db.collection('questions').doc('y10-8a-q2f').get();
  if (parentSnap.exists && parentSnap.data().subQuestions) {
    const newSubQs = await Promise.all(parentSnap.data().subQuestions.map(async sq => {
      const cSnap = await db.collection('questions').doc(sq.id).get();
      if (!cSnap.exists) return sq;
      const d = cSnap.data();
      return { ...sq, question: d.question, options: d.options, answer: d.answer, difficulty: d.difficulty, graphData: d.graphData };
    }));
    await parentSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log('Updated parent y10-8a-q2f');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
