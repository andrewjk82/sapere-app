const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

function elementsToSvg(elements) {
  let pts = {};
  let circles = {};
  
  const scale = 22; // Slightly larger scale
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
      angleFromCenter: -rad // y is inverted in SVG
    };
  });
  
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
            "  <!-- Background -->\\n" +
            "  <rect width='300' height='300' fill='#ffffff' />\\n";
            
  // Draw Polygons
  elements.filter(e => e.type === 'polygon').forEach(e => {
    let pList = e.points.map(id => `${pts[id].sx},${pts[id].sy}`).join(' ');
    // Sleek polygon styling
    svg += `  <polygon points='${pList}' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\\n`;
  });
  
  // Draw Circles
  Object.values(circles).forEach(c => {
    let cp = pts[c.center];
    svg += `  <circle cx='${cp.sx}' cy='${cp.sy}' r='${c.sr}' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\\n`;
  });
  
  // Draw Segments
  elements.filter(e => e.type === 'segment').forEach(e => {
    let p1 = pts[e.from];
    let p2 = pts[e.to];
    let dash = e.dash ? `stroke-dasharray='4 4'` : '';
    svg += `  <line x1='${p1.sx}' y1='${p1.sy}' x2='${p2.sx}' y2='${p2.sy}' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' ${dash} />\\n`;
  });
  
  // Helper to draw clean arcs
  function drawArc(cx, cy, r, a1, a2) {
    let x1 = cx + r * Math.cos(a1);
    let y1 = cy + r * Math.sin(a1);
    let x2 = cx + r * Math.cos(a2);
    let y2 = cy + r * Math.sin(a2);
    
    let diff = a2 - a1;
    if (diff < -Math.PI) diff += 2*Math.PI;
    if (diff > Math.PI) diff -= 2*Math.PI;
    
    let largeArcFlag = Math.abs(diff) > Math.PI ? 1 : 0;
    let sweepFlag = diff > 0 ? 1 : 0;
    
    return `<path d='M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2} Z' fill='rgba(245, 158, 11, 0.1)' stroke='none' />\\n` +
           `<path d='M ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\\n`;
  }
  
  // Draw Angles
  elements.filter(e => e.type === 'angle').forEach(e => {
    let p1 = pts[e.points[0]];
    let p2 = pts[e.points[1]]; 
    let p3 = pts[e.points[2]];
    
    let a1 = Math.atan2(p1.sy - p2.sy, p1.sx - p2.sx);
    let a2 = Math.atan2(p3.sy - p2.sy, p3.sx - p2.sx);
    
    if (a1 < 0) a1 += 2*Math.PI;
    if (a2 < 0) a2 += 2*Math.PI;
    
    let diff = a2 - a1;
    if (diff < -Math.PI) diff += 2*Math.PI;
    if (diff > Math.PI) diff -= 2*Math.PI;
    
    let r = e.radius ? e.radius * scale : 18;
    
    svg += drawArc(p2.sx, p2.sy, r, a1, a1 + diff);
    
    if (e.name) {
      let midA = a1 + diff / 2;
      let tr = r + 10;
      let tx = p2.sx + tr * Math.cos(midA);
      let ty = p2.sy + tr * Math.sin(midA);
      
      // Vertical align middle
      ty += 4;
      
      // Nice typography for angle labels
      svg += `  <text x='${tx}' y='${ty}' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>${e.name}</text>\\n`;
    }
  });
  
  // Right angles
  elements.filter(e => e.type === 'rightangle').forEach(e => {
    let p1 = pts[e.points[0]];
    let p2 = pts[e.points[1]]; 
    let p3 = pts[e.points[2]];
    
    let a1 = Math.atan2(p1.sy - p2.sy, p1.sx - p2.sx);
    let a2 = Math.atan2(p3.sy - p2.sy, p3.sx - p2.sx);
    
    let diff = a2 - a1;
    if (diff < -Math.PI) diff += 2*Math.PI;
    if (diff > Math.PI) diff -= 2*Math.PI;
    
    let sign = Math.sign(diff);
    let r = 10;
    
    let p1x = p2.sx + r * Math.cos(a1);
    let p1y = p2.sy + r * Math.sin(a1);
    
    let p3x = p2.sx + r * Math.cos(a1 + sign * Math.PI/2);
    let p3y = p2.sy + r * Math.sin(a1 + sign * Math.PI/2);
    
    let px = p2.sx + r * Math.cos(a1) + r * Math.cos(a1 + sign * Math.PI/2);
    let py = p2.sy + r * Math.sin(a1) + r * Math.sin(a1 + sign * Math.PI/2);
    
    svg += `  <path d='M ${p2.sx} ${p2.sy} L ${p1x} ${p1y} L ${px} ${py} L ${p3x} ${p3y} Z' fill='rgba(245, 158, 11, 0.1)' stroke='none' />\\n`;
    svg += `  <path d='M ${p1x} ${p1y} L ${px} ${py} L ${p3x} ${p3y}' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linejoin='round' />\\n`;
  });
  
  // Draw Points and clean Labels
  Object.values(pts).forEach(p => {
    if (p.isCenter) {
      svg += `  <circle cx='${p.sx}' cy='${p.sy}' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\\n`;
    } else {
      svg += `  <circle cx='${p.sx}' cy='${p.sy}' r='4.5' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\\n`;
    }
    
    if (p.name) {
      let tx, ty;
      let anchor = 'middle';
      
      // Calculate elegant offset based on position relative to center
      if (p.angleFromCenter !== undefined) {
        let dist = 14;
        tx = p.sx + dist * Math.cos(p.angleFromCenter);
        ty = p.sy + dist * Math.sin(p.angleFromCenter);
        
        // Adjust alignment based on angle
        if (Math.cos(p.angleFromCenter) > 0.5) anchor = 'start';
        else if (Math.cos(p.angleFromCenter) < -0.5) anchor = 'end';
        
        // Y adjustment
        if (Math.sin(p.angleFromCenter) > 0.5) ty += 8;
        else if (Math.sin(p.angleFromCenter) < -0.5) ty -= 4;
        else ty += 4; // middle
        
      } else {
        // Fallback for center point O
        tx = p.sx + 10;
        ty = p.sy + 10;
        anchor = 'start';
      }
      
      svg += `  <text x='${tx}' y='${ty}' text-anchor='${anchor}' font-family='sans-serif' font-size='13' font-weight='600' fill='#334155'>${p.name}</text>\\n`;
    }
  });

  svg += "</svg>";
  return svg;
}

let modifiedIds = [];

questions.forEach(q => {
  // Wait, I already overwrote graphData.jsxGraph!
  // I need to use the reverted file, but I already checked it out!
  // Oh, wait, in my previous step I checked out the file, but I then RAN fix_y10_13a_to_svg.cjs which OVERWROTE graphData to { svg: ... } 
  // Let's re-checkout the file to get the elements back so we can regenerate!
});
