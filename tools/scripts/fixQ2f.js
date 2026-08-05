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

function geometryToSectorSvg(geo, id) {
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
      if (!ang || !ang.at) continue;
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
      if (!angItem.label && !angItem.right) return; // Skip padded empty objects
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
    
    if (id === 'y9-7a-q2f' && vKey === 'O') {
       const sqSize = 13;
       const a1 = 1.5 * Math.PI; // UP in SVG
       const a2 = 0; // RIGHT in SVG
       const pxCorner = vx + Math.cos(a1)*sqSize + Math.cos(a2)*sqSize;
       const pyCorner = vy + Math.sin(a1)*sqSize + Math.sin(a2)*sqSize;
       svg += `  <path d="M ${vx + Math.cos(a1)*sqSize},${vy + Math.sin(a1)*sqSize} L ${pxCorner},${pyCorner} L ${vx + Math.cos(a2)*sqSize},${vy + Math.sin(a2)*sqSize}" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-linejoin="miter" />\n`;
    }
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
  const docRef = db.collection('questions').doc('y9-7a-q2f');
  const doc = await docRef.get();
  
  const originalQ = seedData.find(q => q.id === 'y9-7a-q2f');
  if (originalQ) {
    const g = originalQ.graphData.geometry;
    g.points.P = [0, 2];
    g.points.Q = [2 * Math.cos(60 * Math.PI/180), 2 * Math.sin(60 * Math.PI/180)];
    g.points.R = [2 * Math.cos(40 * Math.PI/180), 2 * Math.sin(40 * Math.PI/180)];
    g.points.S = [2, 0];
    
    const a = g.angles;
    // VERY IMPORTANT: PAD SECTOR 0 (270 degrees) so 3α, 2α, 4α go to Sectors 1, 2, 3!
    g.angles = [{ at: 'O' }, a[1], a[2], a[3]];
    
    const beautifulSvg = geometryToSectorSvg(g, 'y9-7a-q2f');
    let question = doc.data().question;
    question = question.replace(/<svg[\s\S]*?<\/svg>\s*/g, '');
    question = `${beautifulSvg}\n\n${question}`;
    
    await docRef.update({ question });
    console.log('Successfully fixed y9-7a-q2f mapping and SVG padding!');
  }
}

run().catch(console.error);
