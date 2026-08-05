const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

// 1. Fix the data for y10-13a-q2b
const q2b = questions.find(q => q.id === 'y10-13a-q2b');

// Move theta to Q (points: P, Q, T)
const thetaAngle = q2b.graphData.jsxGraph.elements.find(e => e.name === 'θ');
if (thetaAngle) {
  thetaAngle.points = ['P', 'Q', 'T'];
}

// Update multiple choice options
q2b.opts = ['\\\\(25^\\\\circ\\\\)', '\\\\(65^\\\\circ\\\\)', '\\\\(90^\\\\circ\\\\)', '\\\\(115^\\\\circ\\\\)'];
if (q2b.options) {
  q2b.options = [
    { text: '\\\\(25^\\\\circ\\\\)', imageUrl: '' },
    { text: '\\\\(65^\\\\circ\\\\)', imageUrl: '' },
    { text: '\\\\(90^\\\\circ\\\\)', imageUrl: '' },
    { text: '\\\\(115^\\\\circ\\\\)', imageUrl: '' }
  ];
}
q2b.answer = '1 1';

// Provide a mathematical step-by-step solution
q2b.solutionSteps = [
  {
    explanation: "Identify the angle in a semicircle.",
    workingOut: "The triangle \\(PTQ\\) is inscribed in a semicircle because \\(PQ\\) passes through the center \\(O\\), making it a diameter. According to Thales' theorem, the angle subtended by a diameter at the circumference is always a right angle. Therefore, \\(\\angle PTQ = 90^\\circ\\).",
    graphData: null
  },
  {
    explanation: "Determine the value of \\(\\theta\\).",
    workingOut: "The sum of angles in a triangle is always \\(180^\\circ\\). In \\(\\Delta PTQ\\), we know \\(\\angle TPQ = 65^\\circ\\) and \\(\\angle PTQ = 90^\\circ\\). \\n\\nTherefore, the remaining angle is: \\n\\(\\theta = 180^\\circ - 90^\\circ - 65^\\circ = 25^\\circ\\).",
    graphData: null
  }
];

// 2. SVG Generator Function (Final robust version)
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
      isCenter: e.name === 'O'
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
  
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
            "  <rect width='300' height='300' fill='#ffffff' />\\n";
            
  elements.filter(e => e.type === 'polygon').forEach(e => {
    let pList = e.points.map(id => `${pts[id].sx},${pts[id].sy}`).join(' ');
    svg += `  <polygon points='${pList}' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\\n`;
  });
  
  Object.values(circles).forEach(c => {
    let cp = pts[c.center];
    svg += `  <circle cx='${cp.sx}' cy='${cp.sy}' r='${c.sr}' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\\n`;
  });
  
  elements.filter(e => e.type === 'segment').forEach(e => {
    let p1 = pts[e.from];
    let p2 = pts[e.to];
    let stroke = e.color || '#64748b';
    let dash = e.dash ? `stroke-dasharray='5 5'` : '';
    svg += `  <line x1='${p1.sx}' y1='${p1.sy}' x2='${p2.sx}' y2='${p2.sy}' stroke='${stroke}' stroke-width='1.5' stroke-linecap='round' ${dash} />\\n`;
  });
  
  elements.filter(e => e.type === 'angle').forEach(e => {
    let p1 = pts[e.points[0]];
    let p2 = pts[e.points[1]]; 
    let p3 = pts[e.points[2]];
    
    let a1 = Math.atan2(p1.y - p2.y, p1.x - p2.x);
    let a2 = Math.atan2(p3.y - p2.y, p3.x - p2.x);
    
    if (a1 < 0) a1 += 2*Math.PI;
    if (a2 < 0) a2 += 2*Math.PI;
    
    let diff = a2 - a1;
    if (diff < -Math.PI) diff += 2*Math.PI;
    if (diff > Math.PI) diff -= 2*Math.PI;
    
    let isReflex = false;
    if (e.name) {
      let numMatch = e.name.match(/\\d+/);
      if (numMatch && parseInt(numMatch[0]) > 180) {
        isReflex = true;
      }
    }
    
    if (isReflex) {
      if (diff > 0) diff -= 2*Math.PI;
      else diff += 2*Math.PI;
    }
    
    let r = e.radius ? e.radius * scale : 18;
    
    let x1 = p2.sx + r * Math.cos(a1);
    let y1 = p2.sy - r * Math.sin(a1); 
    
    let endA = a1 + diff;
    let x2 = p2.sx + r * Math.cos(endA);
    let y2 = p2.sy - r * Math.sin(endA);
    
    let largeArcFlag = Math.abs(diff) > Math.PI ? 1 : 0;
    let sweepFlag = diff > 0 ? 0 : 1; 
    
    svg += `  <path d='M ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\\n`;
    
    if (e.name) {
      let midA = a1 + diff / 2;
      let tr = r + 14; 
      let tx = p2.sx + tr * Math.cos(midA);
      let ty = p2.sy - tr * Math.sin(midA) + 4;
      
      svg += `  <text x='${tx}' y='${ty}' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>${e.name}</text>\\n`;
    }
  });
  
  elements.filter(e => e.type === 'rightangle').forEach(e => {
    let p1 = pts[e.points[0]];
    let p2 = pts[e.points[1]]; 
    let p3 = pts[e.points[2]];
    
    let a1 = Math.atan2(p1.y - p2.y, p1.x - p2.x);
    let a2 = Math.atan2(p3.y - p2.y, p3.x - p2.x);
    
    if (a1 < 0) a1 += 2*Math.PI;
    if (a2 < 0) a2 += 2*Math.PI;
    
    let diff = a2 - a1;
    if (diff < -Math.PI) diff += 2*Math.PI;
    if (diff > Math.PI) diff -= 2*Math.PI;
    
    let sign = Math.sign(diff); 
    let r = 10;
    
    let p1x = p2.sx + r * Math.cos(a1);
    let p1y = p2.sy - r * Math.sin(a1);
    
    let p3x = p2.sx + r * Math.cos(a1 + sign * Math.PI/2);
    let p3y = p2.sy - r * Math.sin(a1 + sign * Math.PI/2);
    
    let px = p2.sx + r * Math.cos(a1) + r * Math.cos(a1 + sign * Math.PI/2);
    let py = p2.sy - r * Math.sin(a1) - r * Math.sin(a1 + sign * Math.PI/2);
    
    svg += `  <path d='M ${p1x} ${p1y} L ${px} ${py} L ${p3x} ${p3y}' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linejoin='round' />\\n`;
  });

  elements.filter(e => e.type === 'tick').forEach(e => {
    let seg = elements.find(el => el.id === e.segment);
    if (!seg) return;
    let p1 = pts[seg.from];
    let p2 = pts[seg.to];
    
    let mx = (p1.sx + p2.sx) / 2;
    let my = (p1.sy + p2.sy) / 2;
    
    let a = Math.atan2(p2.sy - p1.sy, p2.sx - p1.sx);
    let perpA = a + Math.PI/2;
    
    let tickLen = 6;
    let offset = e.count === 2 ? 3 : 0;
    
    if (e.count === 1) {
      let t1x = mx + tickLen * Math.cos(perpA);
      let t1y = my + tickLen * Math.sin(perpA);
      let t2x = mx - tickLen * Math.cos(perpA);
      let t2y = my - tickLen * Math.sin(perpA);
      svg += `  <line x1='${t1x}' y1='${t1y}' x2='${t2x}' y2='${t2y}' stroke='#475569' stroke-width='1.5' stroke-linecap='round' />\\n`;
    } else {
      for(let i=-1; i<=1; i+=2) {
        let omx = mx + i*offset * Math.cos(a);
        let omy = my + i*offset * Math.sin(a);
        let t1x = omx + tickLen * Math.cos(perpA);
        let t1y = omy + tickLen * Math.sin(perpA);
        let t2x = omx - tickLen * Math.cos(perpA);
        let t2y = omy - tickLen * Math.sin(perpA);
        svg += `  <line x1='${t1x}' y1='${t1y}' x2='${t2x}' y2='${t2y}' stroke='#475569' stroke-width='1.5' stroke-linecap='round' />\\n`;
      }
    }
  });
  
  Object.values(pts).forEach(p => {
    if (p.isCenter) {
      svg += `  <circle cx='${p.sx}' cy='${p.sy}' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\\n`;
    } else {
      svg += `  <circle cx='${p.sx}' cy='${p.sy}' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\\n`;
    }
    
    if (p.name) {
      let tx, ty;
      let anchor = 'middle';
      
      if (p.angleFromCenter !== undefined) {
        let dist = 16; 
        tx = p.sx + dist * Math.cos(p.angleFromCenter);
        ty = p.sy - dist * Math.sin(p.angleFromCenter);
        
        if (Math.cos(p.angleFromCenter) > 0.4) anchor = 'start';
        else if (Math.cos(p.angleFromCenter) < -0.4) anchor = 'end';
        
        if (Math.sin(p.angleFromCenter) < -0.4) ty += 12; 
        else if (Math.sin(p.angleFromCenter) > 0.4) ty -= 4; 
        else ty += 4; 
      } else if (p.isCenter) {
        tx = p.sx - 8;
        ty = p.sy - 12;
        anchor = 'end';
      } else {
        tx = p.sx + 10;
        ty = p.sy + 10;
        anchor = 'start';
      }
      
      svg += `  <text x='${tx}' y='${ty}' text-anchor='${anchor}' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>${p.name}</text>\\n`;
    }
  });

  svg += "</svg>";
  return svg;
}

// 3. Generate SVGs and Save
async function run() {
  let modifiedIds = [];

  questions.forEach(q => {
    if (q.graphData && q.graphData.jsxGraph && q.graphData.jsxGraph.elements) {
      try {
        let svg = elementsToSvg(q.graphData.jsxGraph.elements);
        q.graphData = { svg: svg };
        modifiedIds.push(q.id);
      } catch (e) {
        console.error('Error generating SVG for', q.id, e);
      }
    }
  });

  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // We only really need to update q2b in DB since others didn't change data
  const docRef = db.collection('questions').doc('y10-13a-q2b');
  await docRef.update({
    opts: q2b.opts,
    options: q2b.options,
    answer: q2b.answer,
    solutionSteps: q2b.solutionSteps,
    graphData: q2b.graphData
  });
  console.log('Fixed mathematically incorrect question y10-13a-q2b');

  // Also update SVG for all others in DB to be safe just in case the checkout reverted them
  for (const id of modifiedIds) {
    if (id !== 'y10-13a-q2b') {
      const doc = await db.collection('questions').doc(id).get();
      if (doc.exists) {
        await db.collection('questions').doc(id).update({
          graphData: questions.find(x => x.id === id).graphData
        });
      }
    }
  }

  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file. Total SVGs generated:', modifiedIds.length);
  process.exit(0);
}

run();
