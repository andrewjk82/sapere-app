const fs = require('fs');

const path = './src/constants/seedYear11Ch6EQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y11_CH6E_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (arrayMatch) {
  let questions = eval(arrayMatch[1]);
  questions = questions.map(q => {
    const idMatch = q.id.match(/^y11a-6e-q([0-9]+)([a-z_]+)?/);
    if (idMatch) {
      const qNum = parseInt(idMatch[1], 10);
      if (qNum > 10) return q;
      
      const text = (q.question + " " + (q.hint || "") + " " + (q.solution || "")).toLowerCase();
      let quadrant = null;
      
      if (text.includes("quadrant iv")) quadrant = 4;
      else if (text.includes("quadrant iii")) quadrant = 3;
      else if (text.includes("quadrant ii")) quadrant = 2;
      else if (text.match(/quadrant i[^vix]/) || text.endsWith("quadrant i")) quadrant = 1;
      else {
        const ptMatch = q.question.match(/\((-?\d+),\s*(-?\d+)\)/);
        if (ptMatch) {
          const x = parseInt(ptMatch[1], 10);
          const y = parseInt(ptMatch[2], 10);
          if (x > 0 && y > 0) quadrant = 1;
          else if (x < 0 && y > 0) quadrant = 2;
          else if (x < 0 && y < 0) quadrant = 3;
          else if (x > 0 && y < 0) quadrant = 4;
        }
      }

      if (quadrant && q.solutionSteps && q.solutionSteps[0]) {
        const sx = quadrant === 1 || quadrant === 4 ? 1 : -1;
        const sy = quadrant === 1 || quadrant === 2 ? 1 : -1;
        const quadNames = ["", "I", "II", "III", "IV"];
        
        q.solutionSteps[0].graphData = {
          jsxGraph: {
            width: 300,
            height: 300,
            boundingbox: [-4, 4, 4, -4],
            boardOptions: { keepaspectratio: true, showNavigation: false, axis: true },
            elements: [],
            script: `board.suspendUpdate();
var origin = board.create('point', [0, 0], {visible: false, name: ''});
var p = board.create('point', [${sx * 2.5}, ${sy * 2.5}], {name: '', size: 3, color: 'blue'});
board.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});
var xAxis = board.create('point', [2, 0], {visible: false, name: ''});
board.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});
board.create('text', [${sx * 2.5}, ${sy * 2.5 + (sy > 0 ? 0.5 : -0.5)}, 'Quadrant ${quadNames[quadrant]}'], {fontSize: 16, color: 'blue', anchorX: 'middle'});
board.unsuspendUpdate();`
          }
        };
      }
    }
    return q;
  });
  
  const newContent = `export const Y11_CH6E_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path, newContent, 'utf8');
  console.log("Updated locally with graphs.");
}
