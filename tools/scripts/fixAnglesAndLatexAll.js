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
  } else if (solText.includes("supplement") || solText.includes("straight")) {
    strategy = "The supplement of an angle is the amount needed to make a straight angle (\\(180^\\circ\\)).";
    what = "We use the supplementary angle formula: \\(180^\\circ - x\\).";
    mistake = "Be careful not to confuse supplementary (\\(180^\\circ\\)) with complementary (\\(90^\\circ\\)).";
    calc = `\\\\(180^\\circ - \\\\text{given} = ${rawAnsStr}^\\circ\\\\)`;
  } else if (solText.includes("at a point")) {
    strategy = "Angles around a point complete a full circle, adding up to \\(360^\\circ\\).";
    what = "We set the sum of all given angles around the point equal to \\(360^\\circ\\).";
    mistake = "A common mistake is assuming they add to \\(180^\\circ\\), but a full revolution is \\(360^\\circ\\).";
    calc = `\\\\(360^\\circ - \\\\text{sum of others} = ${rawAnsStr}^\\circ\\\\)`;
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
  } else if (solText.includes("triangle")) {
    strategy = "The interior angles of any triangle always add up to \\(180^\\circ\\).";
    what = "We subtract the known angles of the triangle from \\(180^\\circ\\) to find the missing angle.";
    mistake = "Do not confuse the triangle angle sum (\\(180^\\circ\\)) with angles around a point (\\(360^\\circ\\)).";
    calc = `\\\\(180^\\circ - \\\\text{sum of others} = ${rawAnsStr}^\\circ\\\\)`;
  } else if (solText.includes("isosceles")) {
    strategy = "An isosceles triangle has two equal sides and two equal base angles.";
    what = "We use the property that base angles are equal, and all three add to \\(180^\\circ\\).";
    mistake = "Make sure you correctly identify which two angles are the equal base angles.";
    calc = `\\\\(180^\\circ - \\\\text{vertex} = 2 \\\\times \\\\text{base} \\\\implies \\\\text{base} = ${rawAnsStr}^\\circ\\\\)`;
  }

  // Fallbacks if no number
  if (isNaN(rawAnsNum)) {
    calc = calc.replace('^\\circ', '');
  }

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
      workingOut: `\\\\(\\\\text{Final answer: } ${isNaN(rawAnsNum) ? rawAnsStr : rawAnsStr + '^\\circ'}\\\\)`,
      graphData: null
    }
  ];
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
  
  const actualW = paddedSpanX * scale;
  const actualH = paddedSpanY * scale;
  const offsetX = (W - actualW) / 2;
  const offsetY = (H - actualH) / 2;
  
  const mapX = (x) => offsetX + ((x - minX) * scale);
  const mapY = (y) => offsetY + ((maxY - y) * scale);
  
  const pts = {};
  for (const k in geo.points) {
    pts[k] = [mapX(geo.points[k][0]), mapY(geo.points[k][1])];
  }
  
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="auto" style="max-width: 440px; display: block; margin: 1rem auto; background-color: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0; padding: 0.5rem;" xmlns="http://www.w3.org/2000/svg">\n`;
  
  svg += `<defs>
    <marker id="sleek-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto-start-reverse">
      <path d="M0,1 L6,3.5 L0,6" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>\n`;
  
  const adj = {};
  if (geo.segments) {
    for (const seg of geo.segments) {
      if (!adj[seg.from]) adj[seg.from] = [];
      if (!adj[seg.to]) adj[seg.to] = [];
      adj[seg.from].push(seg.to);
      adj[seg.to].push(seg.from);
    }
  }
  
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
    
    const neighbors = adj[vKey] || [];
    const rays = neighbors.map(nKey => {
      const [nx, ny] = pts[nKey];
      const dx = nx - vx;
      const dy = ny - vy;
      let angle = Math.atan2(dy, dx);
      if (angle < 0) angle += 2 * Math.PI;
      return { key: nKey, angle, dx, dy };
    });
    
    rays.sort((a, b) => a.angle - b.angle);
    
    const sectors = [];
    if (rays.length >= 2) {
      for (let i = 0; i < rays.length; i++) {
        const r1 = rays[i];
        const r2 = rays[(i + 1) % rays.length];
        let diff = r2.angle - r1.angle;
        if (diff <= 0) diff += 2 * Math.PI;
        const midAngle = r1.angle + diff / 2;
        sectors.push({
          startAngle: r1.angle,
          endAngle: r2.angle,
          diff,
          midAngle
        });
      }
    } else {
      sectors.push({ startAngle: 0, endAngle: Math.PI, diff: Math.PI, midAngle: -Math.PI/2 });
    }
    
    const angList = anglesByVertex[vKey];
    angList.forEach((angItem, idx) => {
      const sec = sectors[idx % sectors.length];
      const rArc = 24;
      const rLabel = 42;
      
      const midA = sec.midAngle;
      const lx = vx + Math.cos(midA) * rLabel;
      const ly = vy + Math.sin(midA) * rLabel;
      
      if (angItem.right) {
        // Draw a PERFECT orthogonal 90 degree square box
        // To make it look perfect, align it symmetrically on the bisector!
        const sqSize = 13;
        // The diagonals of the square are at 45 degrees to the edges
        const angleA = midA - Math.PI / 4;
        const angleB = midA + Math.PI / 4;
        
        const px1 = vx + Math.cos(angleA) * sqSize;
        const py1 = vy + Math.sin(angleA) * sqSize;
        
        const px2 = vx + Math.cos(angleB) * sqSize;
        const py2 = vy + Math.sin(angleB) * sqSize;
        
        const pxCorner = vx + Math.cos(midA) * (sqSize * Math.SQRT2);
        const pyCorner = vy + Math.sin(midA) * (sqSize * Math.SQRT2);
        
        svg += `  <path d="M ${px1},${py1} L ${pxCorner},${pyCorner} L ${px2},${py2}" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linejoin="miter" />\n`;
      } else {
        const a1 = sec.startAngle;
        const a2 = sec.endAngle;
        const ax1 = vx + Math.cos(a1) * rArc;
        const ay1 = vy + Math.sin(a1) * rArc;
        const ax2 = vx + Math.cos(a2) * rArc;
        const ay2 = vy + Math.sin(a2) * rArc;
        
        const largeArcFlag = sec.diff > Math.PI ? 1 : 0;
        svg += `  <path d="M ${ax1},${ay1} A ${rArc},${rArc} 0 ${largeArcFlag},1 ${ax2},${ay2}" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="none" />\n`;
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
      const p1 = pts[seg.from];
      const p2 = pts[seg.to];
      if (!p1 || !p2) continue;
      
      const [x1, y1] = p1;
      const [x2, y2] = p2;
      
      let markerEnd = seg.arrow ? 'marker-end="url(#sleek-arrow)"' : '';
      svg += `  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#475569" stroke-width="1.8" ${markerEnd} />\n`;
      
      if (seg.ticks) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len * 6;
        const ny = dx / len * 6;
        
        for(let i=0; i<seg.ticks; i++) {
          const offset = (i - (seg.ticks-1)/2) * 5;
          const px = mx + dx/len * offset;
          const py = my + dy/len * offset;
          svg += `  <line x1="${px - nx}" y1="${py - ny}" x2="${px + nx}" y2="${py + ny}" stroke="#334155" stroke-width="1.5" stroke-linecap="round" />\n`;
        }
      }
      
      if (seg.marks) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len * 5;
        const uy = dy / len * 5;
        const nx = -uy * 1.2;
        const ny = ux * 1.2;
        
        for(let i=0; i<seg.marks; i++) {
          const offset = (i - (seg.marks-1)/2) * 6;
          const px = mx + dx/len * offset;
          const py = my + dy/len * offset;
          svg += `  <polyline points="${px-ux-nx},${py-uy-ny} ${px},${py} ${px-ux+nx},${py-uy+ny}" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-linejoin="round" />\n`;
        }
      }
    }
  }

  for (const k in pts) {
     if (arrowTips.has(k)) continue;
     const [x, y] = pts[k];
     svg += `  <circle cx="${x}" cy="${y}" r="3" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />\n`;
  }
  
  svg += `</svg>`;
  return svg;
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
    
    // 1. FIX THE SVG
    let question = data.question;
    if (geo) {
      const beautifulSvg = geometryToSectorSvg(geo);
      question = question.replace(/<svg[\s\S]*?<\/svg>\s*/g, '');
      question = `${beautifulSvg}\n\n${question}`;
    }
    
    // 2. FIX THE OPTIONS AND ANSWER
    let options = data.options || [];
    let oldAnsIdx = parseInt(data.answer);
    if (isNaN(oldAnsIdx)) oldAnsIdx = 0;
    
    // Re-extract correct answer from options or seed data
    let originalAnswer = '';
    const originalQ = seedData.find(q => q.id === id);
    if (originalQ) {
      originalAnswer = originalQ.answer || '';
    }
    
    // Find numeric answer
    let rawStr = originalAnswer.replace(/[^0-9.]/g, '');
    let numAns = parseFloat(rawStr);
    
    if (!isNaN(numAns) && rawStr.length > 0) {
      // It's a numeric angle
      options = [
        { text: `\\\\(${numAns}^\\\\circ\\\\)` },
        { text: `\\\\(${Math.abs(numAns + 10)}^\\\\circ\\\\)` },
        { text: `\\\\(${Math.abs(180 - numAns)}^\\\\circ\\\\)` },
        { text: `\\\\(${Math.abs(90 - numAns)}^\\\\circ\\\\)` }
      ];
      // ensure unique
      const seen = new Set();
      options = options.filter(o => {
        if (seen.has(o.text)) return false;
        seen.add(o.text);
        return true;
      });
      while (options.length < 4) {
        let v = numAns + Math.floor(Math.random() * 20) + 1;
        let t = `\\\\(${v}^\\\\circ\\\\)`;
        if (!seen.has(t)) {
          options.push({ text: t });
          seen.add(t);
        }
      }
      options.sort((a,b) => a.text.localeCompare(b.text));
      oldAnsIdx = options.findIndex(o => o.text === `\\\\(${numAns}^\\\\circ\\\\)`);
    }
    
    // 3. FIX SOLUTION STEPS (LaTeX)
    const newSteps = generateSteps(originalQ || data, numAns, isNaN(numAns) ? originalAnswer : numAns.toString());
    
    batch.update(doc.ref, {
      question: question,
      options: options,
      answer: oldAnsIdx.toString(),
      solutionSteps: newSteps
    });
    
    count++;
  });
  
  console.log(`Prepared ${count} questions for SVG, Options, and LaTeX fixes.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
