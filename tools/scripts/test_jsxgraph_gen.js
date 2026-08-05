const fs = require('fs');

const elements = [
  { "type": "circle", "id": "c1", "center": "O", "radius": 5 },
  { "type": "point", "id": "O", "coords": [0,0], "name": "O", "color": "red" },
  { "type": "point", "id": "J", "on": "c1", "angle": 135, "name": "J" },
  { "type": "polygon", "points": ["J","K","L","M"] },
  { "type": "angle", "points": ["O","J","K"], "name": "α" }
];

function generateScript(elements) {
  let script = "board.suspendUpdate();\n";
  
  // Points with coords
  elements.filter(e => e.type === 'point' && e.coords).forEach(e => {
    let opts = `{name: '${e.name || ''}', id: '${e.id}'`;
    if (e.color) opts += `, color: '${e.color}'`;
    if (e.label && e.label.offset) opts += `, label: {offset: [${e.label.offset.join(',')}]}`;
    opts += `}`;
    script += `var p_${e.id} = board.create('point', [${e.coords.join(',')}], ${opts});\n`;
  });
  
  // Circles
  elements.filter(e => e.type === 'circle').forEach(e => {
    script += `var c_${e.id} = board.create('circle', [p_${e.center}, ${e.radius}], {strokeColor: '#94a3b8', id: '${e.id}'});\n`;
  });
  
  // Points on circles
  // We can manually calculate coords since JSXGraph point on circle with angle is tricky
  elements.filter(e => e.type === 'point' && e.on).forEach(e => {
    let circle = elements.find(c => c.id === e.on);
    let center = elements.find(p => p.id === circle.center);
    let cx = center.coords[0];
    let cy = center.coords[1];
    let r = circle.radius;
    let rad = e.angle * Math.PI / 180;
    let px = cx + r * Math.cos(rad);
    let py = cy + r * Math.sin(rad);
    
    let opts = `{name: '${e.name || ''}', id: '${e.id}', size: 3`;
    if (e.color) opts += `, color: '${e.color}'`;
    if (e.label && e.label.offset) opts += `, label: {offset: [${e.label.offset.join(',')}]}`;
    opts += `}`;
    script += `var p_${e.id} = board.create('point', [${px}, ${py}], ${opts});\n`;
  });
  
  // Polygons
  elements.filter(e => e.type === 'polygon').forEach(e => {
    let pts = e.points.map(p => `p_${p}`).join(',');
    script += `board.create('polygon', [${pts}], {fillColor: 'rgba(99,102,241,0.1)', borders: {strokeColor: '#6366f1'}});\n`;
  });
  
  // Segments
  elements.filter(e => e.type === 'segment').forEach(e => {
    let opts = `{strokeColor: '${e.color || '#1e293b'}', strokeWidth: 2`;
    if (e.dash) opts += `, dash: ${e.dash}`;
    if (e.lastArrow) opts += `, lastArrow: true`;
    if (e.id) opts += `, id: '${e.id}'`;
    opts += `}`;
    script += `board.create('segment', [p_${e.from}, p_${e.to}], ${opts});\n`;
  });
  
  // Ticks
  elements.filter(e => e.type === 'tick').forEach(e => {
    script += `board.create('ticks', [board.elements['${e.segment}']], {ticksDistance: 2, majorHeight: 15, insertTicks: false, type: '${e.count === 2 ? '||' : '|'}'});\n`;
  });
  
  // Angles
  elements.filter(e => e.type === 'angle').forEach(e => {
    let pts = e.points.map(p => `p_${p}`).join(',');
    let opts = `{name: '${e.name || ''}', radius: ${e.radius || 1}, fillColor: 'rgba(251,191,36,0.3)', strokeColor: '#f59e0b'`;
    if (e.label && e.label.offset) opts += `, label: {offset: [${e.label.offset.join(',')}]}`;
    opts += `}`;
    script += `board.create('angle', [${pts}], ${opts});\n`;
  });
  
  // Right angles
  elements.filter(e => e.type === 'rightangle').forEach(e => {
    let pts = e.points.map(p => `p_${p}`).join(',');
    script += `board.create('nonreflexangle', [${pts}], {radius: ${e.size || 1}, type: 'sectdot', fillColor: 'rgba(251,191,36,0.3)', strokeColor: '#f59e0b'});\n`;
    // Alternatively, draw a square? type:'sq' is often used in JSXGraph. Let's use type:'sq'.
  });

  script += "board.unsuspendUpdate();";
  return script;
}

console.log(generateScript(elements));
