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
        const sqSize = 12;
        const a1 = sec.startAngle;
        const a2 = sec.endAngle;
        const px1 = vx + Math.cos(a1) * sqSize;
        const py1 = vy + Math.sin(a1) * sqSize;
        const px2 = vx + Math.cos(a2) * sqSize;
        const py2 = vy + Math.sin(a2) * sqSize;
        const pxCorner = px1 + Math.cos(a2) * sqSize;
        const pyCorner = py1 + Math.sin(a2) * sqSize;
        
        svg += `  <path d="M ${px1},${py1} L ${pxCorner},${pyCorner} L ${px2},${py2}" fill="none" stroke="#3b82f6" stroke-width="1.5" />\n`;
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

  if (geo.segments) {
    for (const seg of geo.segments) {
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
    if (geo) {
      const beautifulSvg = geometryToSectorSvg(geo);
      
      const data = doc.data();
      let question = data.question;
      // Remove any existing SVG block
      question = question.replace(/<svg[\s\S]*?<\/svg>\s*/g, '');
      
      // Inject new SVG
      question = `${beautifulSvg}\n\n${question}`;
      
      batch.update(doc.ref, {
        question: question
      });
      count++;
    }
  });
  
  console.log(`Prepared ${count} questions for Sector SVG update.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
