const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const P_FONT = 'font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000"';
  const V_FONT = 'font-family="serif" font-size="14" fill="#000"';
  const SW = '1';
  const SW_ARC = '0.8';

  const SVG_Q2D_ALPHA = `<svg viewBox="-20 40 260 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="80,70 40,140 120,140" fill="none" stroke="#000" stroke-width="${SW}"/>
  <line x1="120" y1="140" x2="200" y2="140" stroke="#000" stroke-width="${SW}"/>
  <line x1="80" y1="70" x2="200" y2="140" stroke="#000" stroke-width="${SW}"/>
  <circle cx="80" cy="70" r="1.2" fill="#000"/>
  <circle cx="40" cy="140" r="1.2" fill="#000"/>
  <circle cx="120" cy="140" r="1.2" fill="#000"/>
  <circle cx="200" cy="140" r="1.2" fill="#000"/>
  <text x="75" y="60" ${P_FONT}>L</text>
  <text x="25" y="145" ${P_FONT}>N</text>
  <text x="115" y="155" ${P_FONT}>Q</text>
  <text x="205" y="145" ${P_FONT}>M</text>
  <line x1="56" y1="103" x2="64" y2="108" stroke="#000" stroke-width="${SW}"/>
  <line x1="96" y1="108" x2="104" y2="103" stroke="#000" stroke-width="${SW}"/>
  <line x1="80" y1="136" x2="80" y2="144" stroke="#000" stroke-width="${SW}"/>
  <line x1="160" y1="136" x2="160" y2="144" stroke="#000" stroke-width="${SW}"/>
  <path d="M 50 140 A 10 10 0 0 0 55 125" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="58" y="135" ${P_FONT}>α</text>
</svg>`;

  const SVG_Q2D_BETA = SVG_Q2D_ALPHA.replace(
    '<path d="M 50 140 A 10 10 0 0 0 55 125" fill="none" stroke="#000" stroke-width="0.8"/>\n  <text x="58" y="135" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">α</text>',
    `<path d="M 185 140 A 15 15 0 0 1 180 128" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="165" y="135" ${P_FONT}>β</text>`
  );

  const SVG_Q2D_Y = SVG_Q2D_ALPHA.replace(
    '<path d="M 50 140 A 10 10 0 0 0 55 125" fill="none" stroke="#000" stroke-width="0.8"/>\n  <text x="58" y="135" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">α</text>',
    `<text x="115" y="170" ${P_FONT}>y</text>
  <text x="50" y="100" ${V_FONT}>5</text>`
  );

  const SVG_Q2E = `<svg viewBox="10 40 210 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="150" x2="200" y2="150" stroke="#000" stroke-width="${SW}"/>
  <polygon points="80,93 40,150 120,150" fill="none" stroke="#000" stroke-width="${SW}"/>
  <line x1="70" y1="164" x2="140" y2="65" stroke="#000" stroke-width="${SW}"/>
  <line x1="26" y1="170" x2="100" y2="64.5" stroke="#000" stroke-width="${SW}"/>
  <line x1="66" y1="73" x2="140" y2="178.5" stroke="#000" stroke-width="${SW}"/>
  <g transform="translate(60, 121.5) rotate(-55)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <g transform="translate(105, 114) rotate(-55)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <circle cx="40" cy="150" r="1.2" fill="#000"/>
  <circle cx="120" cy="150" r="1.2" fill="#000"/>
  <circle cx="80" cy="93" r="1.2" fill="#000"/>
  <circle cx="100" cy="121.5" r="1.2" fill="#000"/>
  <text x="35" y="145" ${P_FONT}>C</text>
  <text x="115" y="145" ${P_FONT}>D</text>
  <text x="75" y="85" ${P_FONT}>A</text>
  <text x="105" y="125" ${P_FONT}>G</text>
  <text x="60" y="160" ${P_FONT}>H</text>
  <text x="145" y="70" ${P_FONT}>J</text>
  <text x="175" y="145" ${P_FONT}>E</text>
  <line x1="66" y1="105" x2="74" y2="109" stroke="#000" stroke-width="${SW}"/>
  <line x1="86" y1="109" x2="94" y2="105" stroke="#000" stroke-width="${SW}"/>
  <path d="M 55 150 A 15 15 0 0 0 49 137" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="56" y="145" ${V_FONT}>55°</text>`;

  const SVG_Q2E_ALPHA = SVG_Q2E + `
  <path d="M 112 105 A 20 20 0 0 1 112 138" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="116" y="125" ${P_FONT}>α</text>
</svg>`;

  const SVG_Q2E_THETA = SVG_Q2E + `
  <path d="M 135 150 A 15 15 0 0 0 129 137" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="136" y="145" ${P_FONT}>θ</text>
</svg>`;

  const SVG_Q2F = `<svg viewBox="10 40 210 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="150" x2="200" y2="150" stroke="#000" stroke-width="${SW}"/>
  <polygon points="100,93 60,150 140,150" fill="none" stroke="#000" stroke-width="${SW}"/>
  <line x1="100" y1="93" x2="160" y2="53" stroke="#000" stroke-width="${SW}"/>
  <line x1="20" y1="176" x2="100" y2="123" stroke="#000" stroke-width="${SW}"/>
  <g transform="translate(130, 73) rotate(-33)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <g transform="translate(60, 150) rotate(-33)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <circle cx="60" cy="150" r="1.2" fill="#000"/>
  <circle cx="140" cy="150" r="1.2" fill="#000"/>
  <circle cx="100" cy="93" r="1.2" fill="#000"/>
  <text x="50" y="145" ${P_FONT}>G</text>
  <text x="135" y="145" ${P_FONT}>C</text>
  <text x="95" y="85" ${P_FONT}>D</text>
  <text x="165" y="55" ${P_FONT}>B</text>
  <text x="15" y="185" ${P_FONT}>E</text>
  <text x="105" y="125" ${P_FONT}>F</text>
  <text x="10" y="145" ${P_FONT}>H</text>
  <text x="190" y="145" ${P_FONT}>A</text>
  <line x1="75" y1="125" x2="83" y2="119" stroke="#000" stroke-width="${SW}"/>
  <line x1="117" y1="119" x2="125" y2="125" stroke="#000" stroke-width="${SW}"/>
  <path d="M 125 150 A 15 15 0 0 1 131 137" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="110" y="145" ${V_FONT}>55°</text>`;

  const SVG_Q2F_ALPHA = SVG_Q2F + `
  <path d="M 75 150 A 15 15 0 0 0 69 137" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="76" y="145" ${P_FONT}>α</text>
</svg>`;

  const SVG_Q2F_BETA = SVG_Q2F + `
  <path d="M 45 150 A 15 15 0 0 1 51 137" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="35" y="140" ${P_FONT}>β</text>
</svg>`;

  const updates = {
    'y10-8a-q2d-alpha': {
      options: [{text: '\\(60\\)'}, {text: '\\(120\\)'}, {text: '\\(30\\)'}, {text: '\\(90\\)'}], answer: '0',
      graphData: { svg: SVG_Q2D_ALPHA },
      solutionSteps: [
        { explanation: "Identify the properties of the equilateral triangle.", workingOut: "Triangle \\(LNQ\\) is equilateral, meaning all interior angles are \\(60^\\circ\\)." },
        { explanation: "Determine angle \\(\\alpha\\).", workingOut: "Angle \\(N\\) in the equilateral triangle \\(LNQ\\) corresponds to \\(\\angle LNQ\\), which is exactly \\(60^\\circ\\). Thus, \\(\\alpha = 60^\\circ\\)." }
      ]
    },
    'y10-8a-q2d-beta': {
      options: [{text: '\\(60\\)'}, {text: '\\(120\\)'}, {text: '\\(30\\)'}, {text: '\\(45\\)'}], answer: '2',
      graphData: { svg: SVG_Q2D_BETA },
      solutionSteps: [
        { explanation: "Identify the properties of the equilateral triangle.", workingOut: "Triangle \\(LNQ\\) is equilateral, so \\(LN = NQ = LQ\\) and \\(\\angle LQN = 60^\\circ\\)." },
        { explanation: "Find the length relationships in the new triangle.", workingOut: "We are given that \\(M\\) lies on the extension of \\(NQ\\) and \\(NQ = QM\\). Since \\(LQ = NQ\\), it follows that \\(LQ = QM\\)." },
        { explanation: "Calculate the angles of triangle \\(LQM\\).", workingOut: "Triangle \\(LQM\\) is isosceles because \\(LQ = QM\\). The angle \\(\\angle LQM\\) and \\(\\angle LQN\\) are supplementary, so \\(\\angle LQM = 180^\\circ - 60^\\circ = 120^\\circ\\)." },
        { explanation: "Solve for \\(\\beta\\).", workingOut: "The sum of angles in isosceles triangle \\(LQM\\) is \\(180^\\circ\\). Therefore, \\(\\beta = \\angle M = \\frac{180^\\circ - 120^\\circ}{2} = 30^\\circ\\)." }
      ]
    },
    'y10-8a-q2d-y': {
      options: [{text: '\\(10\\)'}, {text: '\\(5\\)'}, {text: '\\(15\\)'}, {text: '\\(2.5\\)'}], answer: '0',
      graphData: { svg: SVG_Q2D_Y },
      solutionSteps: [
        { explanation: "Identify the given lengths.", workingOut: "Triangle \\(LNQ\\) is an equilateral triangle with side length 5, so \\(NQ = 5\\)." },
        { explanation: "Use the given condition to find \\(QM\\).", workingOut: "We are given that \\(NQ = QM\\). Therefore, \\(QM = 5\\)." },
        { explanation: "Calculate the total length \\(y\\).", workingOut: "Since \\(M\\) is on the extension of \\(NQ\\), the total length \\(NM\\) is the sum of \\(NQ\\) and \\(QM\\). Thus, \\(y = NM = 5 + 5 = 10\\)." }
      ]
    },
    'y10-8a-q2e-alpha': {
      options: [{text: '\\(70\\)'}, {text: '\\(125\\)'}, {text: '\\(55\\)'}, {text: '\\(110\\)'}], answer: '3',
      graphData: { svg: SVG_Q2E_ALPHA },
      solutionSteps: [
        { explanation: "Identify the properties of the isosceles triangle.", workingOut: "In triangle \\(ACD\\), we are given \\(AC = AD\\), making it an isosceles triangle. Thus, the base angles are equal: \\(\\angle ADC = \\angle ACD = 55^\\circ\\)." },
        { explanation: "Find the third angle of the triangle.", workingOut: "The sum of angles in \\(ACD\\) is \\(180^\\circ\\). Therefore, \\(\\angle CAD = 180^\\circ - 55^\\circ - 55^\\circ = 70^\\circ\\)." },
        { explanation: "Use the properties of parallel lines.", workingOut: "Line \\(CA\\) is parallel to Line \\(HJ\\), with transversal line \\(AD\\). The alternate interior angle to \\(\\angle CAD\\) at intersection \\(G\\) is also \\(70^\\circ\\)." },
        { explanation: "Calculate the obtuse angle \\(\\alpha\\).", workingOut: "The obtuse angle \\(\\alpha\\) at intersection \\(G\\) is supplementary to the acute angle \\(70^\\circ\\). Thus, \\(\\alpha = 180^\\circ - 70^\\circ = 110^\\circ\\)." }
      ]
    },
    'y10-8a-q2e-theta': {
      options: [{text: '\\(110\\)'}, {text: '\\(125\\)'}, {text: '\\(70\\)'}, {text: '\\(55\\)'}], answer: '1',
      graphData: { svg: SVG_Q2E_THETA },
      solutionSteps: [
        { explanation: "Identify the properties of the isosceles triangle.", workingOut: "In triangle \\(ACD\\), we are given \\(AC = AD\\), making it an isosceles triangle. Thus, the base angles are equal: \\(\\angle ADC = \\angle ACD = 55^\\circ\\)." },
        { explanation: "Use the property of collinear points.", workingOut: "Points \\(C, D, F, E\\) are collinear, meaning they lie on a straight line. Thus, \\(\\angle CDE\\) forms a straight line of \\(180^\\circ\\)." },
        { explanation: "Calculate \\(\\theta\\).", workingOut: "Angle \\(\\theta\\) (which is \\(\\angle ADE\\)) is supplementary to \\(\\angle ADC\\). Therefore, \\(\\theta = 180^\\circ - 55^\\circ = 125^\\circ\\)." }
      ]
    },
    'y10-8a-q2f-alpha': {
      options: [{text: '\\(125\\)'}, {text: '\\(70\\)'}, {text: '\\(55\\)'}, {text: '\\(110\\)'}], answer: '2',
      graphData: { svg: SVG_Q2F_ALPHA },
      solutionSteps: [
        { explanation: "Identify the properties of the given triangle.", workingOut: "In triangle \\(DGC\\), we are given \\(DG = DC\\), which means it is an isosceles triangle with base \\(GC\\)." },
        { explanation: "Use the isosceles triangle theorem.", workingOut: "In an isosceles triangle, the angles opposite the equal sides are also equal. Therefore, \\(\\angle DGC = \\angle DCG\\)." },
        { explanation: "Calculate \\(\\alpha\\).", workingOut: "Since \\(\\angle DCG = 55^\\circ\\), it directly follows that \\(\\alpha = \\angle DGC = 55^\\circ\\)." }
      ]
    },
    'y10-8a-q2f-beta': {
      options: [{text: '\\(125\\)'}, {text: '\\(55\\)'}, {text: '\\(110\\)'}, {text: '\\(70\\)'}], answer: '0',
      graphData: { svg: SVG_Q2F_BETA },
      solutionSteps: [
        { explanation: "Identify the straight line.", workingOut: "Points \\(H, G, C, A\\) are collinear, which means they form a straight horizontal line." },
        { explanation: "Use supplementary angles.", workingOut: "Angles on a straight line add up to \\(180^\\circ\\). Angle \\(\\beta\\) (which is \\(\\angle HGD\\)) and \\(\\angle DGC\\) are supplementary angles on this line." },
        { explanation: "Calculate \\(\\beta\\).", workingOut: "From the properties of the isosceles triangle, we know \\(\\angle DGC = 55^\\circ\\). Therefore, \\(\\beta = 180^\\circ - 55^\\circ = 125^\\circ\\)." }
      ]
    }
  };

  const parentSet = new Set();
  for (const [id, updateData] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    await docRef.update({
      ...updateData,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log("Updated " + id);
    
    let parentId = id;
    if (id.includes('-')) {
       let parts = id.split('-');
       if (parts.length > 3) {
          parentId = parts.slice(0, 3).join('-');
       } else {
          parentId = id.replace(/[a-z]$/, '');
       }
    }
    parentSet.add(parentId);
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer, solutionSteps: cSnap.data().solutionSteps, graphData: cSnap.data().graphData } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Finished updating next batch of questions');
  process.exit(0);
}

run().catch(console.error);
