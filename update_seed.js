const fs = require('fs');

const content = fs.readFileSync('src/constants/seedYear10Ch13AQuestions.js', 'utf8');
const jsonStr = content.replace('export const Y10_CH13A_QUESTIONS = ', '').replace(/;\s*$/, '');
let data = JSON.parse(jsonStr);

function makeElements(q) {
  // Common circle and O point
  const O = { "type": "point", "id": "O", "coords": [0,0], "name": "O", "color": "red", "label": { "offset": [8, 8] } };
  const c1 = { "type": "circle", "id": "c1", "center": "O", "radius": 5 };

  // Helper to get offset based on angle
  function getOffset(angle) {
    let a = angle % 360;
    if (a < 0) a += 360;
    if (a === 0) return [12, 0];
    if (a === 30) return [10, 6];
    if (a === 45) return [8, 8];
    if (a === 60) return [6, 12];
    if (a === 90) return [0, 12];
    if (a === 110) return [-4, 12];
    if (a === 120) return [-6, 12];
    if (a === 130) return [-8, 10];
    if (a === 135) return [-8, 8];
    if (a === 140) return [-10, 8];
    if (a === 150) return [-12, 6];
    if (a === 160) return [-12, 4];
    if (a === 170) return [-14, 2];
    if (a === 180) return [-14, 0];
    if (a === 190) return [-14, -2];
    if (a === 200) return [-12, -6];
    if (a === 210) return [-10, -8];
    if (a === 220) return [-8, -10];
    if (a === 225) return [-8, -8];
    if (a === 230) return [-8, -12];
    if (a === 240) return [-6, -12];
    if (a === 250) return [-4, -12];
    if (a === 260) return [-2, -12];
    if (a === 270) return [0, -12];
    if (a === 280) return [2, -12];
    if (a === 290) return [4, -10];
    if (a === 300) return [6, -12];
    if (a === 310) return [8, -10];
    if (a === 315) return [8, -8];
    if (a === 320) return [10, -10];
    if (a === 330) return [10, -8];
    if (a === 340) return [12, -6];
    if (a === 350) return [12, -4];
    return [10, 10]; // fallback
  }

  function pt(id, angle) {
    return { "type": "point", "id": id, "on": "c1", "angle": angle, "name": id, "label": { "offset": getOffset(angle) } };
  }
  function seg(from, to, opts={}) { return { "type": "segment", "from": from, "to": to, ...opts }; }
  function poly(pts) { return { "type": "polygon", "points": pts }; }
  function ang(pts, name, radius) { return { "type": "angle", "points": pts, "name": name, "radius": radius, "label": { "offset": [0,0] } }; }

  const els = [c1, O];

  if (q.id === 'y10-13a-q2a') {
    els.push(pt('A', 240), pt('B', 60), pt('P', 120), seg('A', 'B'), poly(['A', 'P', 'B']), ang(['P', 'A', 'B'], '15°', 1.5), ang(['A', 'P', 'B'], 'α', 1), ang(['P', 'B', 'A'], 'β', 1));
  } else if (q.id === 'y10-13a-q2b') {
    els.push(pt('P', 180), pt('Q', 0), pt('T', 220), seg('P', 'Q'), poly(['P', 'T', 'Q']), ang(['T', 'P', 'Q'], '65°', 1.5), ang(['P', 'T', 'Q'], 'θ', 1.2));
  } else if (q.id === 'y10-13a-q2c') {
    els.push(pt('J', 90), pt('K', 270), pt('L', 60), seg('J', 'K'), poly(['J', 'L', 'K']), ang(['K', 'J', 'L'], '80°', 1.5), ang(['J', 'K', 'L'], 'θ', 1.2));
  } else if (q.id === 'y10-13a-q2d') {
    els.push(pt('R', 110), pt('S', 290), pt('T', 250), seg('R', 'S'), poly(['R', 'T', 'S']), seg('O', 'T'), ang(['O', 'S', 'T'], '70°', 1.5), ang(['T', 'O', 'S'], 'α', 1), ang(['R', 'T', 'O'], 'β', 1), ang(['O', 'T', 'S'], 'γ', 1.5), ang(['R', 'O', 'T'], 'θ', 1));
  } else if (q.id === 'y10-13a-q2e') {
    els.push(pt('X', 210), pt('Y', 30), pt('Z', 100), seg('X', 'Y'), poly(['X', 'Z', 'Y']), seg('O', 'Z'), ang(['Z', 'O', 'Y'], '70°', 1), ang(['X', 'Z', 'Y'], 'α', 1), ang(['Z', 'X', 'Y'], 'β', 1));
  } else if (q.id === 'y10-13a-q2f') {
    els.push(pt('A', 170), pt('B', 350), pt('C', 190), seg('A', 'B'), poly(['A', 'C', 'O']), seg('O', 'C'), ang(['C', 'O', 'B'], '160°', 1), ang(['O', 'A', 'C'], 'θ', 0.6));
  } else if (q.id === 'y10-13a-q3a') {
    els.push(pt('A', 90), pt('B', 210), pt('C', 330), poly(['A', 'B', 'C']), seg('O', 'B'), seg('O', 'C'), ang(['C', 'O', 'B'], '55°', 1.5), ang(['C', 'A', 'B'], 'α', 1));
  } else if (q.id === 'y10-13a-q3b') {
    els.push(pt('A', 140), pt('B', 40), pt('C', 270), poly(['A', 'B', 'C']), seg('O', 'A'), seg('O', 'B'), ang(['B', 'O', 'A'], '88°', 1), ang(['B', 'C', 'A'], 'γ', 1));
  } else if (q.id === 'y10-13a-q3c') {
    els.push(pt('A', 190), pt('B', 350), pt('C', 90), poly(['A', 'B', 'C']), seg('O', 'A'), seg('O', 'B'), ang(['A', 'C', 'B'], '95°', 1.5), ang(['A', 'O', 'B'], 'α', 1.2));
  } else if (q.id === 'y10-13a-q3d') {
    els.push(pt('A', 260), pt('B', 90), pt('C', 30), poly(['A', 'B', 'C']), seg('O', 'A'), seg('O', 'B'), ang(['B', 'O', 'A'], '200°', 1.5), ang(['A', 'C', 'B'], 'γ', 1.5));
  } else if (q.id === 'y10-13a-q3e') {
    els.push(pt('J', 170), pt('M', 280), pt('K', 210), poly(['J', 'K', 'M']), seg('O', 'J'), seg('O', 'M'), ang(['M', 'O', 'J'], '258°', 1.2), ang(['J', 'K', 'M'], 'θ', 1.5));
  } else if (q.id === 'y10-13a-q3f') {
    els.push(pt('A', 210), pt('B', 310), pt('P', 30), poly(['A', 'P', 'B']), seg('O', 'A'), seg('O', 'B'), ang(['B', 'O', 'A'], '80°', 1.2), ang(['A', 'P', 'B'], 'α', 1.5));
  } else if (q.id === 'y10-13a-q3g') {
    els.push(pt('X', 130), pt('Q', 60), pt('P', 0), poly(['X', 'Q', 'P']), seg('O', 'X'), seg('O', 'P'), ang(['P', 'O', 'X'], '60°', 1.5), ang(['P', 'Q', 'X'], 'β', 1));
  } else if (q.id === 'y10-13a-q3h') {
    els.push(pt('K', 160), pt('L', 100), pt('J', 0), poly(['K', 'L', 'J']), seg('O', 'K'), seg('O', 'J'), ang(['J', 'L', 'K'], '50°', 1), ang(['J', 'O', 'K'], 'γ', 1.5));
  } else if (q.id === 'y10-13a-q3i') {
    els.push(pt('R', 210), pt('S', 260), pt('T', 0), poly(['R', 'S', 'T']), seg('O', 'R'), seg('O', 'T'), ang(['T', 'S', 'R'], '12°', 1.5), ang(['T', 'O', 'R'], 'θ', 1));
  } else if (q.id === 'y10-13a-q4a') {
    els.push(pt('A', 210), pt('B', 330), pt('P', 90), poly(['A', 'P', 'B']), seg('O', 'A'), seg('O', 'B'), ang(['A', 'O', 'B'], 'α', 1), ang(['B', 'O', 'A'], '240°', 1.5), ang(['A', 'P', 'B'], 'β', 1));
  } else if (q.id === 'y10-13a-q4b') {
    els.push(pt('P', 180), pt('B', 60), pt('A', 110), poly(['P', 'A', 'B']), seg('O', 'P'), seg('O', 'B'), ang(['B', 'O', 'P'], '300°', 1.5), ang(['B', 'A', 'P'], 'θ', 1));
  } else if (q.id === 'y10-13a-q4c') {
    els.push(pt('T', 200), pt('S', 60), pt('R', 280), poly(['T', 'S', 'R']), seg('O', 'S'), seg('O', 'R'), ang(['S', 'T', 'R'], '70°', 1.5), ang(['S', 'O', 'R'], 'θ', 1));
  } else if (q.id === 'y10-13a-q4d') {
    els.push(pt('P', 110), pt('Q', 10), pt('F', 230), pt('G', 310), poly(['F', 'P', 'G']), poly(['F', 'Q', 'G']), seg('O', 'F'), seg('O', 'G'), ang(['G', 'O', 'F'], '80°', 1.5), ang(['F', 'P', 'G'], 'α', 1), ang(['F', 'Q', 'G'], 'β', 1));
  } else if (q.id === 'y10-13a-q4e') {
    els.push(pt('P', 160), pt('Q', 30), pt('S', 240), pt('R', 300), poly(['P', 'Q', 'R']), poly(['P', 'S', 'R']), seg('O', 'P'), seg('O', 'R'), ang(['P', 'S', 'R'], '20°', 1.5), ang(['P', 'Q', 'R'], 'α', 1), ang(['R', 'O', 'P'], 'θ', 1));
  } else if (q.id === 'y10-13a-q4f') {
    els.push(pt('P', 90), pt('Q', 330), pt('R', 210), poly(['P', 'R', 'Q']), seg('O', 'P'), seg('O', 'Q'), seg('O', 'R'), ang(['Q', 'O', 'P'], '120°', 1.5), ang(['O', 'R', 'Q'], '40°', 1), ang(['R', 'O', 'Q'], 'α', 1), ang(['O', 'P', 'R'], 'β', 1), ang(['R', 'P', 'Q'], 'γ', 1));
  } else if (q.id === 'y10-13a-q4g') {
    els.push(pt('P', 90), pt('A', 350), pt('Q', 260), pt('B', 150), poly(['P', 'A', 'Q', 'B']), seg('A', 'B', {dash: 2}), seg('O', 'A'), seg('O', 'B'), ang(['A', 'O', 'B'], '160°', 1.2), ang(['B', 'O', 'A'], 'β', 1.5), ang(['B', 'Q', 'A'], 'α', 1), ang(['A', 'P', 'B'], 'γ', 1));
  } else if (q.id === 'y10-13a-q4h') {
    els.push(pt('A', 45), pt('B', 315), pt('C', 225), pt('D', 135), poly(['A', 'B', 'C', 'D']), seg('A', 'C'), seg('B', 'D'), ang(['D', 'A', 'C'], '30°', 1.2), ang(['C', 'A', 'B'], 'α', 1), ang(['A', 'B', 'D'], 'β', 1.2), ang(['C', 'O', 'B'], 'γ', 1));
  } else if (q.id === 'y10-13a-q4i') {
    els.push(pt('J', 135), pt('K', 45), pt('L', 315), pt('M', 225), poly(['J', 'K', 'L', 'M']), seg('J', 'L'), seg('K', 'M'), ang(['O', 'J', 'K'], 'α', 1), ang(['O', 'K', 'L'], 'β', 1), { "type": "rightangle", "points": ["K", "O", "J"], "size": 0.4 });
  } else if (q.id === 'y10-13a-q5b') {
    els.push(pt('A', 240), pt('B', 60), pt('P', 0), seg('A', 'B'), seg('O', 'A', {id: 'seg_OA'}), seg('A', 'P', {id: 'seg_AP'}), seg('O', 'P'), seg('B', 'P'), {"type":"tick","segment":"seg_OA"},{"type":"tick","segment":"seg_AP"}, ang(['A', 'O', 'P'], 'α', 1), ang(['O', 'B', 'P'], 'β', 1.5));
  } else if (q.id === 'y10-13a-q5c') {
    els.push(pt('P', 150), pt('Q', 250), pt('R', 290), seg('O', 'P'), seg('O', 'R', {lastArrow:true}), poly(['P', 'Q', 'R']), seg('P', 'Q', {lastArrow:true}), ang(['O', 'R', 'P'], '20°', 1.5), ang(['O', 'P', 'Q'], 'α', 1.2), ang(['P', 'Q', 'R'], 'β', 1), ang(['P', 'O', 'R'], 'γ', 1));
  } else if (q.id === 'y10-13a-q5d') {
    els.push(pt('A', 190), pt('B', 50), pt('C', 310), poly(['A', 'B', 'C']), seg('O', 'A'), seg('O', 'B'), seg('O', 'C'), ang(['A', 'O', 'B'], '140°', 1), ang(['C', 'A', 'B'], '50°', 1), ang(['A', 'O', 'C'], 'α', 1), ang(['A', 'B', 'C'], 'β', 1), ang(['A', 'C', 'B'], 'γ', 1));
  } else if (q.id === 'y10-13a-q5e') {
    els.push(pt('P', 160), pt('Q', 0), pt('R', 20), seg('O', 'P'), seg('O', 'Q', {lastArrow:true}), seg('O', 'R'), seg('P', 'R', {lastArrow:true}), seg('Q', 'R'), ang(['Q', 'O', 'P'], '160°', 1), ang(['R', 'O', 'P'], 'α', 0.8), ang(['O', 'Q', 'R'], 'β', 1), ang(['O', 'R', 'P'], 'γ', 1.5));
  } else if (q.id === 'y10-13a-q5f') {
    els.push(pt('A', 170), pt('B', 70), pt('C', 330), seg('O', 'A'), seg('O', 'B'), seg('O', 'C'), seg('A', 'B', {id: 'seg_AB'}), seg('B', 'C', {id: 'seg_BC'}), seg('A', 'C'), {"type":"tick","segment":"seg_AB"},{"type":"tick","segment":"seg_BC"}, ang(['C', 'O', 'A'], '200°', 1), ang(['O', 'A', 'B'], 'α', 1), ang(['O', 'B', 'C'], 'β', 1), ang(['O', 'C', 'A'], 'γ', 1.5));
  } else if (q.id === 'y10-13a-q8') {
    return [
      {"type":"point","id":"P","coords":[0,0],"name":"P","color":"#64748b","label":{"offset":[0,-12]}},
      {"type":"point","id":"A","coords":[5,0],"name":"A","color":"#64748b","label":{"offset":[0,-12]}},
      {"type":"point","id":"B","coords":[0,4],"name":"B","color":"#64748b","label":{"offset":[0,12]}},
      {"type":"point","id":"Q","coords":[5,4],"name":"Q","color":"#64748b","label":{"offset":[0,12]}},
      {"type":"point","id":"O","coords":[2.5,2],"name":"O","color":"red","label":{"offset":[0,12]}},
      {"type":"segment","from":"A","to":"B"},
      {"type":"segment","from":"P","to":"Q","dash":2,"color":"red"},
      {"type":"segment","from":"P","to":"A"},
      {"type":"segment","from":"P","to":"B"},
      {"type":"segment","from":"A","to":"Q","dash":2,"color":"red"},
      {"type":"segment","from":"B","to":"Q","dash":2,"color":"red"},
      {"type":"rightangle","points":["B","P","A"],"size":0.3},
      {"type":"segment","id":"ao","from":"A","to":"O","color":"none"},
      {"type":"segment","id":"ob","from":"O","to":"B","color":"none"},
      {"type":"segment","id":"po","from":"P","to":"O","color":"none"},
      {"type":"segment","id":"oq","from":"O","to":"Q","color":"none"},
      {"type":"tick","segment":"ao"},{"type":"tick","segment":"ob"},
      {"type":"tick","segment":"po","count":2},{"type":"tick","segment":"oq","count":2}
    ];
  } else if (q.id === 'y10-13a-q9') {
    return [
      {"type":"point","id":"O","coords":[0,0],"name":"O (Centre)","color":"red","label":{"offset":[8,8]}},
      {"type":"circle","id":"c1","center":"O","radius":5},
      {"type":"point","id":"P","on":"c1","angle":270,"name":"P (Punter)","color":"#64748b","label":{"offset":[0,-12]}},
      {"type":"point","id":"A","on":"c1","angle":0,"name":"A (Start)","color":"#64748b","label":{"offset":[12,0]}},
      {"type":"point","id":"H","on":"c1","angle":60,"name":"H (Horse)","color":"#10b981","label":{"offset":[6,12]}},
      {"type":"segment","from":"O","to":"A","dash":2,"color":"#9ca3af"},
      {"type":"segment","from":"O","to":"H","dash":2,"color":"#9ca3af"},
      {"type":"segment","from":"P","to":"A","dash":2,"color":"#9ca3af"},
      {"type":"segment","from":"P","to":"H","lastArrow":true},
      {"type":"angle","points":["A","O","H"],"name":"2θ","radius":1,"label":{"offset":[0,0]}},
      {"type":"angle","points":["A","P","H"],"name":"θ","radius":1.5,"label":{"offset":[0,0]}}
    ];
  } else {
    return null; // Don't change this one
  }
  return els;
}

data.forEach(q => {
  if (q.graphData && q.graphData.jsxGraph) {
    const els = makeElements(q);
    if (els) {
      delete q.graphData.jsxGraph.script;
      q.graphData.jsxGraph.elements = els;
      if (q.id === 'y10-13a-q8') {
        q.graphData.jsxGraph.boundingbox = [-1, 6, 6, -1];
      }
    }
  }
});

const output = 'export const Y10_CH13A_QUESTIONS = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('src/constants/seedYear10Ch13AQuestions.js', output, 'utf8');

console.log('Update complete.');
