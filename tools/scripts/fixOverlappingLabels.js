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
    if (q.id.startsWith('y9-7a-q2a') || q.id.startsWith('y9-7a-q2b-a') || q.id.startsWith('y9-7a-q2c')) {
      if (q.graphData.geometry.points && q.graphData.geometry.points.D) {
        q.graphData.geometry.points.D = [2.5, 0];
      }
    }
    seedMap[q.id] = q.graphData.geometry;
  }
});

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

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
    
    // Compute rays based on segment intersection to support points lying ON segments
    const rawRays = [];
    if (geo.segments) {
      for (const seg of geo.segments) {
        const fromPt = pts[seg.from];
        const toPt = pts[seg.to];
        if (!fromPt || !toPt) continue;
        
        if (seg.from === vKey) {
          rawRays.push(seg.to);
        } else if (seg.to === vKey) {
          rawRays.push(seg.from);
        } else {
          // check if vKey is on the segment
          if (pointOnSegment(vPts, fromPt, toPt)) {
            rawRays.push(seg.from);
            rawRays.push(seg.to);
          }
        }
      }
    }
    
    const rays = [];
    for (const nKey of rawRays) {
      const nx = pts[nKey][0];
      const ny = pts[nKey][1];
      if (Math.abs(nx - vx) < 1e-4 && Math.abs(ny - vy) < 1e-4) continue;
      
      let angle = Math.atan2(ny - vy, nx - vx);
      if (angle < 0) angle += 2 * Math.PI;
      
      const exists = rays.some(r => {
        let d = Math.abs(r.angle - angle);
        if (d > Math.PI) d = 2 * Math.PI - d;
        return d < 1e-4;
      });
      if (!exists) {
        rays.push({ key: nKey, angle, dx: nx - vx, dy: ny - vy });
      }
    }
    
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
      // Map angles to sectors
      // If there are exactly 2 intersecting lines, we get 4 rays and 4 sectors.
      // If angList has 3 items, maybe the 4th sector was omitted.
      // We will just map them sequentially.
      const sec = sectors[idx % sectors.length];
      
      const rArc = 24;
      const rLabel = 42;
      
      const midA = sec.midAngle;
      const lx = vx + Math.cos(midA) * rLabel;
      const ly = vy + Math.sin(midA) * rLabel;
      
      if (angItem.right) {
        const sqSize = 13;
        const a1 = sec.startAngle;
        const a2 = sec.endAngle;
        const px1 = vx + Math.cos(a1) * sqSize;
        const py1 = vy + Math.sin(a1) * sqSize;
        const px2 = vx + Math.cos(a2) * sqSize;
        const py2 = vy + Math.sin(a2) * sqSize;
        const pxCorner = vx + Math.cos(a1)*sqSize + Math.cos(a2)*sqSize;
        const pyCorner = vy + Math.sin(a1)*sqSize + Math.sin(a2)*sqSize;
        
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
    
    if (geo) {
      const beautifulSvg = geometryToSectorSvg(geo);
      let question = data.question;
      question = question.replace(/<svg[\s\S]*?<\/svg>\s*/g, '');
      question = `${beautifulSvg}\n\n${question}`;
      
      batch.update(doc.ref, { question });
      count++;
    }
  });
  
  console.log(`Prepared ${count} questions for overlapping labels fixes.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
