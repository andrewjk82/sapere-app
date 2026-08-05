import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../../backup_seeds/seedYear9Ch7Questions.js');
const seedContent = fs.readFileSync(seedPath, 'utf8');
const jsonStr = seedContent.replace(/export\s+const\s+\w+\s*=\s*/, '').replace(/;\s*$/, '');
const seedData = JSON.parse(jsonStr);

const seedMap = {};
seedData.forEach(q => {
  if (q.id && q.graphData && q.graphData.geometry) {
    if (q.id.startsWith('y9-7a-q2a') || q.id.startsWith('y9-7a-q2b') || q.id.startsWith('y9-7a-q2c')) {
      if (q.graphData.geometry.points && q.graphData.geometry.points.D) {
        q.graphData.geometry.points.D = [2.5, 0];
      }
    }
    
    // Fix sector mapping for q2b variants by reordering labels
    if (q.id.startsWith('y9-7a-q2b')) {
      const angles = q.graphData.geometry.angles;
      if (angles && angles.length === 3) {
         q.graphData.geometry.angles = [
           angles.find(a => a.label === 'α') || angles[0],
           angles.find(a => a.label === 'β') || angles[2],
           angles.find(a => a.label === '120°') || angles[1]
         ];
      }
    }
    
    seedMap[q.id] = q.graphData.geometry;
  }
});

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function generateSteps(qData, rawAnsNum, rawAnsStr) {
  const solText = (qData.solution || "").toLowerCase();
  let strategy = "We use general angle properties to solve this.";
  let what = "Apply angle rules.";
  let mistake = "Be careful not to mix up complementary and supplementary angles.";
  let calc = `\\\\(\\theta = ${rawAnsStr}\\\\)`;
  
  if (solText.includes("obtuse") || solText.includes("acute") || solText.includes("reflex")) {
    strategy = "We classify the angle by comparing its measure to standard reference points (\\(90^\\circ, 180^\\circ, 360^\\circ\\)).";
    what = "Recall the definitions of acute, right, obtuse, straight, and reflex angles.";
    mistake = "A common mistake is confusing obtuse (between 90 and 180) with reflex (greater than 180).";
    calc = `\\\\(\\\\text{Classification: } ${rawAnsStr}\\\\)`;
  } else if (solText.includes("complement")) {
    strategy = "The complement of an angle is the amount needed to make a right angle (\\(90^\\circ\\)).";
    what = "We use the complementary angle formula: \\(90^\\circ - x\\).";
    mistake = "Be careful not to confuse complementary (\\(90^\\circ\\)) with supplementary (\\(180^\\circ\\)).";
    calc = `\\\\(90^\\circ - \\\\text{given} = ${rawAnsStr}^\\circ\\\\)`;
  } else if (solText.includes("supplement") || solText.includes("straight") || solText.includes("line")) {
    strategy = "Angles on a straight line add to \\(180^\\circ\\).";
    what = "We use the supplementary angle formula: \\(180^\\circ - x\\).";
    mistake = "Be careful not to confuse supplementary (\\(180^\\circ\\)) with complementary (\\(90^\\circ\\)).";
    calc = `\\\\(180^\\circ - \\\\text{given} = ${rawAnsStr}^\\circ\\\\)`;
  } else if (solText.includes("point") || solText.includes("revolution")) {
    strategy = "Angles around a point complete a full circle, adding up to \\(360^\\circ\\).";
    what = "We set the sum of all given angles around the point equal to \\(360^\\circ\\).";
    mistake = "A common mistake is assuming they add to \\(180^\\circ\\), but a full revolution is \\(360^\\circ\\).";
    calc = `\\\\(360^\\circ - \\\\text{sum of others} = ${rawAnsStr}^\\circ\\\\)`;
  } else if (solText.includes("opposite")) {
    strategy = "Vertically opposite angles are equal.";
    what = "When two lines intersect, the angles opposite each other are equal.";
    mistake = "Ensure the lines are straight before assuming opposite angles are equal.";
    calc = `\\\\(\\\\text{Unknown angle} = \\\\text{Opposite angle} = ${rawAnsStr}^\\circ\\\\)`;
  } else if (solText.includes("co-interior") || solText.includes("cointerior")) {
    strategy = "Co-interior angles between parallel lines add up to \\(180^\\circ\\).";
    what = "We set up an equation where the sum of the two co-interior angles is \\(180^\\circ\\).";
    mistake = "A common error is assuming co-interior angles are equal, but they are actually supplementary.";
    calc = `\\\\(180^\\circ - \\\\text{given} = ${rawAnsStr}^\\circ\\\\)`;
  } else if (solText.includes("alternate")) {
    strategy = "Alternate interior angles between parallel lines are equal.";
    what = "We equate the unknown angle to the corresponding alternate interior angle.";
    mistake = "Ensure the lines are actually marked parallel before assuming alternate angles are equal.";
    calc = `\\\\(\\theta = ${rawAnsStr}^\\circ\\\\)`;
  }

  if (isNaN(rawAnsNum)) {
    calc = calc.replace('^\\circ', '');
  }

  let finalAnswerStr = `\\\\(\\\\text{Final answer: } ${isNaN(rawAnsNum) ? rawAnsStr : rawAnsStr + '^\\circ'}\\\\)`;

  return [
    {
      explanation: "Given the geometric setup, we first need to identify the relevant angle property. " + strategy,
      workingOut: "\\\\(\\\\text{Goal: Find the unknown angle.}\\\\)",
      graphData: null
    },
    {
      explanation: "Next, we set up the equation based on this geometric property. " + what + " " + mistake + " This setup allows us to solve for the unknown.",
      workingOut: "\\\\(\\\\text{Setup the equation}\\\\)",
      graphData: null
    },
    {
      explanation: "Now we solve the equation by performing the subtraction or division required.",
      workingOut: calc.replace(/\\\^\\circ/g, '^\\circ').replace(/\^\^\\circ/g, '^\\circ'),
      graphData: null
    },
    {
      explanation: "The final step is to state the answer clearly. The calculated angle satisfies the geometric conditions.",
      workingOut: finalAnswerStr,
      graphData: null
    }
  ];
}

function pointOnSegment(V, A, B) {
  const cross = (B[0] - A[0]) * (V[1] - A[1]) - (B[1] - A[1]) * (V[0] - A[0]);
  if (Math.abs(cross) > 1e-4) return false;
  const dot = (V[0] - A[0]) * (B[0] - A[0]) + (V[1] - A[1]) * (B[1] - A[1]);
  if (dot < 0) return false;
  const sqLen = (B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2;
  if (dot > sqLen) return false;
  return true;
}

function geometryToSectorSvg(geo) {
  if (!geo || !geo.points) return '';
  const W = 360;
  const H = 260;
  
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const k in geo.points) {
    const [x, y] = geo.points[k];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  
  if (minX === maxX) { minX -= 1; maxX += 1; }
  if (minY === maxY) { minY -= 1; maxY += 1; }

  const spanX = maxX - minX;
  const spanY = maxY - minY;
  
  const padPercent = 0.25;
  const paddingX = spanX * padPercent;
  const paddingY = spanY * padPercent;
  
  minX -= paddingX; maxX += paddingX;
  minY -= paddingY; maxY += paddingY;
  
  const paddedSpanX = maxX - minX;
  const paddedSpanY = maxY - minY;
  
  const scale = Math.min(W / paddedSpanX, H / paddedSpanY);
  const offsetX = (W - (paddedSpanX * scale)) / 2;
  const offsetY = (H - (paddedSpanY * scale)) / 2;
  
  const pts = {};
  for (const k in geo.points) {
    pts[k] = [offsetX + ((geo.points[k][0] - minX) * scale), offsetY + ((maxY - geo.points[k][1]) * scale)];
  }
  
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="auto" style="max-width: 440px; display: block; margin: 1rem auto; background-color: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0; padding: 0.5rem;" xmlns="http://www.w3.org/2000/svg">\n`;
  svg += `<defs><marker id="sleek-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto-start-reverse"><path d="M0,1 L6,3.5 L0,6" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>\n`;
  
  const anglesByVertex = {};
  if (geo.angles) {
    for (const ang of geo.angles) {
      if (!anglesByVertex[ang.at]) anglesByVertex[ang.at] = [];
      anglesByVertex[ang.at].push(ang);
    }
  }
  
  for (const vKey in anglesByVertex) {
    const vPts = pts[vKey];
    if (!vPts) continue;
    const [vx, vy] = vPts;
    
    const rawRays = [];
    if (geo.segments) {
      for (const seg of geo.segments) {
        const fromPt = pts[seg.from], toPt = pts[seg.to];
        if (!fromPt || !toPt) continue;
        if (seg.from === vKey) rawRays.push(seg.to);
        else if (seg.to === vKey) rawRays.push(seg.from);
        else if (pointOnSegment(vPts, fromPt, toPt)) {
          rawRays.push(seg.from);
          rawRays.push(seg.to);
        }
      }
    }
    
    const rays = [];
    for (const nKey of rawRays) {
      const nx = pts[nKey][0], ny = pts[nKey][1];
      if (Math.abs(nx - vx) < 1e-4 && Math.abs(ny - vy) < 1e-4) continue;
      let angle = Math.atan2(ny - vy, nx - vx);
      if (angle < 0) angle += 2 * Math.PI;
      if (!rays.some(r => { let d = Math.abs(r.angle - angle); if (d > Math.PI) d = 2 * Math.PI - d; return d < 1e-4; })) {
        rays.push({ key: nKey, angle, dx: nx - vx, dy: ny - vy });
      }
    }
    rays.sort((a, b) => a.angle - b.angle);
    
    const sectors = [];
    if (rays.length >= 2) {
      for (let i = 0; i < rays.length; i++) {
        const r1 = rays[i], r2 = rays[(i + 1) % rays.length];
        let diff = r2.angle - r1.angle;
        if (diff <= 0) diff += 2 * Math.PI;
        sectors.push({ startAngle: r1.angle, endAngle: r2.angle, diff, midAngle: r1.angle + diff / 2 });
      }
    } else {
      sectors.push({ startAngle: 0, endAngle: Math.PI, diff: Math.PI, midAngle: -Math.PI/2 });
    }
    
    anglesByVertex[vKey].forEach((angItem, idx) => {
      const sec = sectors[idx % sectors.length];
      const rArc = 24, rLabel = 42;
      const lx = vx + Math.cos(sec.midAngle) * rLabel, ly = vy + Math.sin(sec.midAngle) * rLabel;
      
      if (angItem.right) {
        const sqSize = 13, a1 = sec.startAngle, a2 = sec.endAngle;
        const pxCorner = vx + Math.cos(a1)*sqSize + Math.cos(a2)*sqSize;
        const pyCorner = vy + Math.sin(a1)*sqSize + Math.sin(a2)*sqSize;
        svg += `  <path d="M ${vx + Math.cos(a1)*sqSize},${vy + Math.sin(a1)*sqSize} L ${pxCorner},${pyCorner} L ${vx + Math.cos(a2)*sqSize},${vy + Math.sin(a2)*sqSize}" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linejoin="miter" />\n`;
      } else {
        const largeArcFlag = sec.diff > Math.PI ? 1 : 0;
        svg += `  <path d="M ${vx + Math.cos(sec.startAngle)*rArc},${vy + Math.sin(sec.startAngle)*rArc} A ${rArc},${rArc} 0 ${largeArcFlag},1 ${vx + Math.cos(sec.endAngle)*rArc},${vy + Math.sin(sec.endAngle)*rArc}" fill="none" stroke="#3b82f6" stroke-width="1.5" />\n`;
      }
      if (angItem.label) {
        svg += `  <text x="${lx}" y="${ly}" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">${angItem.label}</text>\n`;
      }
    });
  }

  const arrowTips = new Set();
  if (geo.segments) {
    for (const seg of geo.segments) {
      if (seg.arrow) arrowTips.add(seg.to);
      const p1 = pts[seg.from], p2 = pts[seg.to];
      if (p1 && p2) svg += `  <line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="#475569" stroke-width="1.8" ${seg.arrow ? 'marker-end="url(#sleek-arrow)"' : ''} />\n`;
    }
  }
  for (const k in pts) {
     if (arrowTips.has(k)) continue;
     svg += `  <circle cx="${pts[k][0]}" cy="${pts[k][1]}" r="3" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />\n`;
  }
  
  return svg + `</svg>`;
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y9-7a').get();
  
  let count = 0;
  const batch = db.batch();
  
  snapshot.forEach(doc => {
    const id = doc.id;
    const match = id.match(/^y9-7a-q(\d+)/);
    if (!match || parseInt(match[1]) > 10) return;
    
    const geo = seedMap[id];
    const data = doc.data();
    
    // 1. FIX SVG
    let question = data.question;
    if (geo) {
      const beautifulSvg = geometryToSectorSvg(geo);
      question = question.replace(/<svg[\s\S]*?<\/svg>\s*/g, '');
      question = `${beautifulSvg}\n\n${question}`;
    }
    
    // 2. FIX OPTIONS AND LaTeX STEPS
    let options = data.options || [];
    let oldAnsIdx = parseInt(data.answer);
    if (isNaN(oldAnsIdx)) oldAnsIdx = 0;
    
    let originalAnswer = '';
    const originalQ = seedData.find(q => q.id === id);
    if (originalQ) {
      // **CRITICAL FIX**: It was using q.answer, but it should be q.a!
      originalAnswer = originalQ.a || originalQ.answer || '';
    }
    
    let rawStr = originalAnswer.replace(/[^0-9.]/g, '');
    let numAns = parseFloat(rawStr);
    
    if (!isNaN(numAns) && rawStr.length > 0) {
      options = [
        { text: `\\\\(${numAns}^\\\\circ\\\\)` },
        { text: `\\\\(${Math.abs(numAns + 10)}^\\\\circ\\\\)` },
        { text: `\\\\(${Math.abs(180 - numAns)}^\\\\circ\\\\)` },
        { text: `\\\\(${Math.abs(90 - numAns)}^\\\\circ\\\\)` }
      ];
      const seen = new Set();
      options = options.filter(o => {
        if (seen.has(o.text)) return false;
        seen.add(o.text); return true;
      });
      while (options.length < 4) {
        let v = numAns + Math.floor(Math.random() * 20) + 1;
        let t = `\\\\(${v}^\\\\circ\\\\)`;
        if (!seen.has(t)) { options.push({ text: t }); seen.add(t); }
      }
      options.sort((a,b) => parseFloat(a.text.replace(/[^0-9.]/g, '')) - parseFloat(b.text.replace(/[^0-9.]/g, '')));
      oldAnsIdx = options.findIndex(o => o.text === `\\\\(${numAns}^\\\\circ\\\\)`);
    }
    
    const newSteps = generateSteps(originalQ || data, numAns, isNaN(numAns) ? originalAnswer : numAns.toString());
    
    batch.update(doc.ref, {
      question: question,
      options: options,
      answer: oldAnsIdx.toString(),
      solutionSteps: newSteps
    });
    
    count++;
  });
  
  console.log(`Prepared ${count} questions for massive LaTeX & Map fixes.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
