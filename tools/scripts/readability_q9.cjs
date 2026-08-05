const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const qIndex = questions.findIndex(x => x.id === 'y10-13a-q9');
let q = questions[qIndex];

// Adjust offsets to fix cutoffs and overlaps
let pO = q.graphData.jsxGraph.elements.find(e => e.id === 'O');
if (pO) pO.label.offset = [-25, -20];

let pA = q.graphData.jsxGraph.elements.find(e => e.id === 'A');
if (pA) pA.label.offset = [-15, -15];

let pH = q.graphData.jsxGraph.elements.find(e => e.id === 'H');
if (pH) pH.label.offset = [0, 15];

let pP = q.graphData.jsxGraph.elements.find(e => e.id === 'P');
if (pP) pP.label.offset = [0, -15];

// Generate SVG
function dist(pA, pB) {
  return Math.sqrt(Math.pow(pA.sx - pB.sx, 2) + Math.pow(pA.sy - pB.sy, 2));
}

function elementsToSvg(elements) {
  let pts = {};
  let circles = {};
  
  const scale = 22; 
  const ox = 150;
  const oy = 150;
  
  elements.filter(e => e.type === 'point' && e.coords).forEach(e => {
    pts[e.id] = {
      x: e.coords[0],
      y: e.coords[1],
      name: e.name,
      id: e.id,
      sx: ox + e.coords[0] * scale,
      sy: oy - e.coords[1] * scale,
      isCenter: e.name === 'O (Centre)' || e.name === 'O'
    };
  });
  
  elements.filter(e => e.type === 'circle').forEach(e => {
    circles[e.id] = {
      center: e.center,
      radius: e.radius,
      sr: e.radius * scale
    };
  });
  
  elements.filter(e => e.type === 'point' && e.on).forEach(e => {
    let c = circles[e.on];
    if (!c) return;
    let center = pts[c.center];
    let rad = e.angle * Math.PI / 180;
    
    let mx = center.x + c.radius * Math.cos(rad);
    let my = center.y + c.radius * Math.sin(rad);
    
    pts[e.id] = {
      x: mx,
      y: my,
      name: e.name,
      id: e.id,
      sx: ox + mx * scale,
      sy: oy - my * scale,
      angleFromCenter: rad
    };
  });
  
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n" +
            "  <rect width='300' height='300' fill='#ffffff' />\n";
            
  elements.filter(e => e.type === 'polygon').forEach(e => {
    let pList = e.points.map(id => pts[id] ? `${pts[id].sx},${pts[id].sy}` : '').join(' ');
    svg += `  <polygon points='${pList}' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n`;
  });
  
  Object.values(circles).forEach(c => {
    let cp = pts[c.center];
    if(cp) svg += `  <circle cx='${cp.sx}' cy='${cp.sy}' r='${c.sr}' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n`;
  });
  
  elements.filter(e => e.type === 'segment').forEach(e => {
    let p1 = pts[e.from];
    let p2 = pts[e.to];
    if(!p1 || !p2) return;
    let dash = e.dash ? "stroke-dasharray='5 5'" : "";
    let arrow = e.lastArrow ? "marker-end='url(#arrow)'" : "";
    if (e.lastArrow) {
      svg = svg.replace("<rect width='300' height='300' fill='#ffffff' />\n", "<rect width='300' height='300' fill='#ffffff' />\n  <defs><marker id='arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#64748b' /></marker></defs>\n");
    }
    svg += `  <line x1='${p1.sx}' y1='${p1.sy}' x2='${p2.sx}' y2='${p2.sy}' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' ${dash} ${arrow}/>\n`;
  });
  
  let placedTexts = [];
  elements.filter(e => e.type === 'angle').forEach(e => {
    let p1 = pts[e.points[0]];
    let p2 = pts[e.points[1]]; 
    let p3 = pts[e.points[2]];
    if(!p1 || !p2 || !p3) return;
    
    let a1 = Math.atan2(p1.y - p2.y, p1.x - p2.x);
    let a2 = Math.atan2(p3.y - p2.y, p3.x - p2.x);
    
    if (a1 < 0) a1 += 2*Math.PI;
    if (a2 < 0) a2 += 2*Math.PI;
    
    let diff = a2 - a1;
    if (diff < -Math.PI) diff += 2*Math.PI;
    if (diff > Math.PI) diff -= 2*Math.PI;
    
    let isReflex = e.isReflex || false;
    if (e.name) {
      let numMatch = e.name.match(/\d+/);
      if (numMatch && parseInt(numMatch[0]) > 180) {
        isReflex = true;
      }
    }
    
    if (isReflex) {
      if (diff > 0) diff = diff - 2*Math.PI;
      else diff = diff + 2*Math.PI;
    }
    
    if (!isReflex) {
      if (diff > Math.PI) diff -= 2*Math.PI;
      if (diff < -Math.PI) diff += 2*Math.PI;
    }

    let r = (e.radius || 1.5) * scale;
    let d1 = dist(p2, p1);
    let d2 = dist(p2, p3);
    let minD = Math.min(d1, d2);
    if (!isReflex && r > minD * 0.4) r = minD * 0.4; 

    let largeArcFlag = Math.abs(diff) > Math.PI ? 1 : 0;
    let sweepFlag = diff > 0 ? 0 : 1; 
    
    let startA = a1;
    let endA = a1 + diff;
    
    let sx = p2.sx + r * Math.cos(startA);
    let sy = p2.sy - r * Math.sin(startA);
    let ex = p2.sx + r * Math.cos(endA);
    let ey = p2.sy - r * Math.sin(endA);
    
    svg += `  <path d='M ${sx} ${sy} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${ex} ${ey}' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n`;
    
    if (e.name) {
      let midA = a1 + diff / 2;
      let tr = r + 10; 
      if (!isReflex && tr > minD * 0.45) tr = minD * 0.45;
      
      let tx = p2.sx + tr * Math.cos(midA);
      let ty = p2.sy - tr * Math.sin(midA) + 4;
      
      for(let pt of placedTexts) {
        if (Math.abs(pt.tx - tx) < 15 && Math.abs(pt.ty - ty) < 15) {
          tr += 10;
          tx = p2.sx + tr * Math.cos(midA);
          ty = p2.sy - tr * Math.sin(midA) + 4;
        }
      }
      placedTexts.push({tx, ty});

      svg += `  <text x='${tx}' y='${ty}' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>${e.name}</text>\n`;
    }
  });
  
  elements.filter(e => e.type === 'point' && pts[e.id]).forEach(e => {
    let p = pts[e.id];
    let r = p.isCenter ? 3 : 4;
    let fill = p.isCenter ? '#94a3b8' : '#3b82f6';
    svg += `  <circle cx='${p.sx}' cy='${p.sy}' r='${r}' fill='${fill}' stroke='#ffffff' stroke-width='1.5' />\n`;
    
    if (p.name) {
      let offset = e.label && e.label.offset ? e.label.offset : [0, 0];
      let tx = p.sx + (offset[0] || -10);
      let ty = p.sy - (offset[1] || -10);
      let anchor = 'end';
      if (offset[0] > 0) anchor = 'start';
      else if (offset[0] === 0) { anchor = 'middle'; tx = p.sx; }
      
      svg += `  <text x='${tx}' y='${ty}' text-anchor='${anchor}' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>${p.name}</text>\n`;
    }
  });
  
  svg += "</svg>";
  return svg;
}

q.graphData.svg = elementsToSvg(q.graphData.jsxGraph.elements);

async function save() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y10-13a-q9').update({
    graphData: q.graphData
  });
  
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Successfully adjusted q9 offsets for readability!');
  process.exit(0);
}

save();
