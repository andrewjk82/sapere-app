const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

function generateScript(elements) {
  let script = "board.suspendUpdate();\n";
  
  // Points with coords
  elements.filter(e => e.type === 'point' && e.coords).forEach(e => {
    let opts = `{name: '${e.name || ''}', id: '${e.id}'`;
    if (e.color) opts += `, color: '${e.color}'`;
    if (e.label && e.label.offset) opts += `, label: {autoPosition: false, offset: [${e.label.offset.join(',')}]}`;
    opts += `}`;
    script += `var p_${e.id} = board.create('point', [${e.coords.join(',')}], ${opts});\n`;
  });
  
  // Circles
  elements.filter(e => e.type === 'circle').forEach(e => {
    script += `var c_${e.id} = board.create('circle', [p_${e.center}, ${e.radius}], {strokeColor: '#94a3b8', id: '${e.id}'});\n`;
  });
  
  // Points on circles
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
    if (e.label && e.label.offset) opts += `, label: {autoPosition: false, offset: [${e.label.offset.join(',')}]}`;
    opts += `}`;
    script += `var p_${e.id} = board.create('point', [${px.toFixed(4)}, ${py.toFixed(4)}], ${opts});\n`;
  });
  
  // Polygons
  elements.filter(e => e.type === 'polygon').forEach(e => {
    let pts = e.points.map(p => `p_${p}`).join(', ');
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
    let pts = e.points.map(p => `p_${p}`).join(', ');
    let opts = `{name: '${e.name || ''}', radius: ${e.radius || 1}, fillColor: 'rgba(251,191,36,0.3)', strokeColor: '#f59e0b'`;
    if (e.label && e.label.offset) opts += `, label: {autoPosition: false, offset: [${e.label.offset.join(',')}]}`;
    opts += `}`;
    script += `board.create('angle', [${pts}], ${opts});\n`;
  });
  
  // Right angles
  elements.filter(e => e.type === 'rightangle').forEach(e => {
    let pts = e.points.map(p => `p_${p}`).join(', ');
    script += `board.create('nonreflexangle', [${pts}], {radius: ${e.size || 1}, type: 'sq', fillColor: 'rgba(251,191,36,0.3)', strokeColor: '#f59e0b'});\n`;
  });

  script += "board.unsuspendUpdate();";
  return script;
}

let modifiedIds = [];

questions.forEach(q => {
  if (q.graphData && q.graphData.jsxGraph && q.graphData.jsxGraph.elements) {
    try {
      let script = generateScript(q.graphData.jsxGraph.elements);
      q.graphData.jsxGraph.script = script;
      delete q.graphData.jsxGraph.elements;
      modifiedIds.push(q.id);
    } catch (e) {
      console.error('Error generating script for', q.id, e);
    }
  }
});

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id of modifiedIds) {
    const q = questions.find(x => x.id === id);
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    
    if (doc.exists) {
      // Need to delete 'elements' field inside graphData in Firestore and set 'script'
      // By overwriting graphData, we achieve this
      await docRef.update({
        graphData: q.graphData
      });
      console.log('Fixed jsxGraph script for', id);
    }
  }

  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file. Total:', modifiedIds.length);
  process.exit(0);
}

run();
