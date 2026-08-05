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
  // NEW q2f-alpha
  //
  // Problem: Line PQ // Line RS. Point T is between the two parallel lines.
  // Triangle PTU is formed where U lies on RS.
  // Angle TPQ = 48°, Angle TUQ' = 73° (at U on RS).
  // Find α = ∠PTU (interior angle of triangle at T).
  //
  // Solution:
  //   Since PQ // RS, let's use alternate interior angles.
  //   Draw a line through T parallel to PQ (and RS).
  //   Let the line through T parallel to PQ meet the angle at T.
  //   ∠TPQ = 48° → alternate angle at T (left side) = 48°
  //   ∠TUP = 73° (given at base U on RS) → alternate angle at T (right side) = 73°
  //   Therefore α = ∠PTU = 48° + 73° = 121°
  //
  // Diagram: Two horizontal parallel lines. P on top-left, Q on top-right.
  //          R on bottom-left, S on bottom-right.
  //          T is a point floating between the lines.
  //          Lines drawn from P to T, and from T to U (on RS).
  //          48° marked at P. 73° marked at U. α marked at T (angle PTU).
  // ─────────────────────────────────────────────────────────────────────────────

  // Coordinates:
  // P=(40,60), Q=(200,60) — top line
  // R=(20,160), S=(210,160) — bottom line
  // T=(110,110) — between the lines
  // U=(155,160) — on RS
  // Lines: P→T, T→U

  const SVG_ALPHA = `<svg viewBox="-20 20 270 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Top parallel line PQ -->
  <line x1="30" y1="65" x2="210" y2="65" stroke="#000" stroke-width="${SW}"/>
  <!-- Bottom parallel line RS -->
  <line x1="20" y1="155" x2="210" y2="155" stroke="#000" stroke-width="${SW}"/>
  <!-- Line from P to T -->
  <line x1="50" y1="65" x2="110" y2="110" stroke="#000" stroke-width="${SW}"/>
  <!-- Line from T to U -->
  <line x1="110" y1="110" x2="155" y2="155" stroke="#000" stroke-width="${SW}"/>

  <!-- Parallel tick marks on lines -->
  <line x1="115" y1="60" x2="115" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="120" y1="60" x2="120" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="115" y1="150" x2="115" y2="160" stroke="#000" stroke-width="${SW}"/>
  <line x1="120" y1="150" x2="120" y2="160" stroke="#000" stroke-width="${SW}"/>

  <!-- Vertices -->
  <circle cx="50" cy="65" r="${R}" fill="#000"/>
  <circle cx="110" cy="110" r="${R}" fill="#000"/>
  <circle cx="155" cy="155" r="${R}" fill="#000"/>

  <!-- Labels -->
  <text x="22" y="68" ${PF}>P</text>
  <text x="200" y="68" ${PF}>Q</text>
  <text x="10" y="158" ${PF}>R</text>
  <text x="200" y="158" ${PF}>S</text>
  <text x="112" y="105" ${PF}>T</text>
  <text x="158" y="168" ${PF}>U</text>

  <!-- 48° at P -->
  <path d="M 65 65 A 12 12 0 0 1 57 71" fill="none" stroke="#000" stroke-width="0.8"/>
  <text x="68" y="78" ${VF}>48°</text>

  <!-- 73° at U -->
  <path d="M 143 155 A 12 12 0 0 1 148 145" fill="none" stroke="#000" stroke-width="0.8"/>
  <text x="125" y="150" ${VF}>73°</text>

  <!-- α at T -->
  <text x="94" y="118" ${PF}>α</text>
</svg>`;

  // ─────────────────────────────────────────────────────────────────────────────
  // NEW q2f-beta
  //
  // Problem: In the figure, AB // CD. EF is a transversal cutting AB at G
  // and CD at H. An isosceles triangle GKH is formed inside, where GK = GH.
  // Angle KGH = 36°, and angle GHF = 118°. Find β = ∠GKH.
  //
  // Solution:
  //   Step 1: At H, angles on a straight line → ∠GHC = 180° − 118° = 62°
  //   Step 2: AB // CD, so ∠AGB and ∠GHC are co-interior (same-side interior):
  //           ∠AGH + ∠GHC = 180°
  //           But we need ∠KGH. Since EF cuts AB at G with ∠EGB = given,
  //           Let's re-frame:
  //
  // Actually let me use a cleaner problem:
  //
  // Problem: AB // CD. Point E is between the two lines.
  // Angle BAE = 65° (at A on line AB), Angle DCE = 42° (at C on line CD).
  // AE = CE (isosceles). Find β = ∠AEC.
  //
  // Solution:
  //   Draw EF // AB through E.
  //   ∠AEF = ∠BAE = 65° (alternate interior angles, EF // AB)
  //   ∠CEF = ∠DCE = 42° (alternate interior angles, EF // CD)
  //   ∠AEC = ∠AEF + ∠CEF = 65° + 42° = 107°
  //
  // Correct answer: β = 107°
  //
  // Diagram: Two horizontal parallel lines, A top-left, B top-right, C bottom-right, D bottom-left
  //          E is between the lines in the middle
  //          Lines from A to E and from C to E
  //          65° at A, 42° at C, β at E
  // ─────────────────────────────────────────────────────────────────────────────

  // Coordinates:
  // A=(50,60), B=(210,60) — top line
  // D=(20,160), C=(180,160) — bottom line (reversed so C is on right near E)
  // E=(120, 110) — between lines

  const SVG_BETA = `<svg viewBox="-20 20 270 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Top parallel line AB -->
  <line x1="30" y1="65" x2="215" y2="65" stroke="#000" stroke-width="${SW}"/>
  <!-- Bottom parallel line DC -->
  <line x1="15" y1="155" x2="205" y2="155" stroke="#000" stroke-width="${SW}"/>
  <!-- Line from A to E -->
  <line x1="55" y1="65" x2="120" y2="110" stroke="#000" stroke-width="${SW}"/>
  <!-- Line from C to E -->
  <line x1="175" y1="155" x2="120" y2="110" stroke="#000" stroke-width="${SW}"/>

  <!-- Parallel tick marks -->
  <line x1="118" y1="60" x2="118" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="124" y1="60" x2="124" y2="70" stroke="#000" stroke-width="${SW}"/>
  <line x1="118" y1="150" x2="118" y2="160" stroke="#000" stroke-width="${SW}"/>
  <line x1="124" y1="150" x2="124" y2="160" stroke="#000" stroke-width="${SW}"/>

  <!-- Vertices -->
  <circle cx="55" cy="65" r="${R}" fill="#000"/>
  <circle cx="120" cy="110" r="${R}" fill="#000"/>
  <circle cx="175" cy="155" r="${R}" fill="#000"/>

  <!-- Labels -->
  <text x="36" y="68" ${PF}>A</text>
  <text x="205" y="68" ${PF}>B</text>
  <text x="15" y="58" ${PF}>F</text>
  <text x="10" y="158" ${PF}>D</text>
  <text x="178" y="168" ${PF}>C</text>
  <text x="205" y="158" ${PF}>G</text>
  <text x="122" y="105" ${PF}>E</text>

  <!-- 65° at A -->
  <path d="M 70 65 A 14 14 0 0 1 62 73" fill="none" stroke="#000" stroke-width="0.8"/>
  <text x="72" y="80" ${VF}>65°</text>

  <!-- 42° at C -->
  <path d="M 163 155 A 14 14 0 0 0 168 144" fill="none" stroke="#000" stroke-width="0.8"/>
  <text x="145" y="150" ${VF}>42°</text>

  <!-- β at E -->
  <text x="103" y="122" ${PF}>β</text>
</svg>`;

  // Prepare Firestore updates
  const newQ_ALPHA = {
    id: 'y10-8a-q2f-alpha',
    question: 'In the figure, line \\(PQ \\parallel\\) line \\(RS\\). Point \\(T\\) lies between the two parallel lines. Line \\(PT\\) is drawn from \\(P\\) on line \\(PQ\\), and line \\(TU\\) is drawn to point \\(U\\) on line \\(RS\\). Angle \\(TPQ = 48^\\circ\\) and angle \\(TUS = 73^\\circ\\). Find \\(\\alpha = \\angle PTU\\).',
    options: [
      { text: '\\(121\\)' },
      { text: '\\(107\\)' },
      { text: '\\(115\\)' },
      { text: '\\(132\\)' }
    ],
    answer: '0', // 121 is correct
    difficulty: 'hard',
    graphData: { svg: SVG_ALPHA },
    explanation: `**Finding α = ∠PTU**

Since line \\(PQ \\parallel\\) line \\(RS\\), draw an auxiliary line through \\(T\\) parallel to both lines.

**Step 1 — Left portion of α:**
The auxiliary line through \\(T\\) is parallel to \\(PQ\\).
By the **Alternate Interior Angles** theorem:
$$\\angle TPQ = \\angle \\text{(left part of } \\angle PTU) = 48^\\circ$$

**Step 2 — Right portion of α:**
The auxiliary line through \\(T\\) is parallel to \\(RS\\).
Since \\(\\angle TUS = 73^\\circ\\), by the **Alternate Interior Angles** theorem:
$$\\angle \\text{(right part of } \\angle PTU) = 73^\\circ$$

**Step 3 — Add both parts:**
$$\\alpha = 48^\\circ + 73^\\circ = \\boxed{121^\\circ}$$`,
    updatedAt: FieldValue.serverTimestamp()
  };

  const newQ_BETA = {
    id: 'y10-8a-q2f-beta',
    question: 'In the figure, line \\(AB \\parallel\\) line \\(DC\\). Point \\(E\\) lies between the two parallel lines. Line \\(AE\\) is drawn from \\(A\\) on line \\(AB\\), and line \\(CE\\) is drawn from \\(C\\) on line \\(DC\\). Angle \\(FAE = 65^\\circ\\) and angle \\(DCE = 42^\\circ\\). Find \\(\\beta = \\angle AEC\\).',
    options: [
      { text: '\\(107\\)' },
      { text: '\\(115\\)' },
      { text: '\\(97\\)' },
      { text: '\\(123\\)' }
    ],
    answer: '0', // 107 is correct
    difficulty: 'hard',
    graphData: { svg: SVG_BETA },
    explanation: `**Finding β = ∠AEC**

Since \\(AB \\parallel DC\\), draw an **auxiliary line** through \\(E\\) parallel to both \\(AB\\) and \\(DC\\).

**Step 1 — Find the left part of β:**
The auxiliary line through \\(E\\) is parallel to \\(AB\\).
\\(\\angle FAE = 65^\\circ\\) and by the **Alternate Interior Angles** theorem (\\(EF_{aux} \\parallel AB\\)):
$$\\angle AE\\text{(aux)} = 65^\\circ$$

**Step 2 — Find the right part of β:**
The auxiliary line through \\(E\\) is parallel to \\(DC\\).
By the **Alternate Interior Angles** theorem:
$$\\angle CE\\text{(aux)} = \\angle DCE = 42^\\circ$$

**Step 3 — Add both parts:**
$$\\beta = \\angle AEC = 65^\\circ + 42^\\circ = \\boxed{107^\\circ}$$`,
    updatedAt: FieldValue.serverTimestamp()
  };

  // Write both docs
  for (const q of [newQ_ALPHA, newQ_BETA]) {
    await db.collection('questions').doc(q.id).set(q, { merge: true });
    console.log('Written: ' + q.id);
  }

  // Update parent q2f
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
