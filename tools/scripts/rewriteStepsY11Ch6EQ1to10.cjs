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
      if (qNum > 10) return q; // Only target Q1-Q10
      
      let step1, step2, step3;
      const finalAns = q.options ? q.options[q.a].text : (q.opts ? q.opts[q.a] : q.answer);

      if (qNum === 1) {
        step1 = {
          explanation: "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
          workingOut: q.solution.split(',')[0] + ".", 
          graphData: null
        };
        step2 = {
          explanation: "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
          workingOut: q.hint || "Use standard trigonometric definitions.",
          graphData: null
        };
        step3 = {
          explanation: "Substitute the values to calculate the final exact ratio.",
          workingOut: finalAns,
          graphData: null
        };
      } else if (qNum === 2) {
        step1 = {
          explanation: "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
          workingOut: q.hint || "Use Pythagoras' theorem in the given quadrant.",
          graphData: null
        };
        step2 = {
          explanation: "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
          workingOut: q.solution.split('.')[0] + ".", 
          graphData: null
        };
        step3 = {
          explanation: "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
          workingOut: finalAns,
          graphData: null
        };
      } else {
        step1 = {
          explanation: "Determine the correct quadrant based on the given signs of the trigonometric functions.",
          workingOut: q.hint || "Analyze the given signs.",
          graphData: null
        };
        step2 = {
          explanation: "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
          workingOut: q.solution.replace(/Thus,.*$/, '').trim(),
          graphData: null
        };
        step3 = {
          explanation: "Apply the correct sign for the determined quadrant to obtain the final answer.",
          workingOut: finalAns,
          graphData: null
        };
      }

      q.solutionSteps = [step1, step2, step3];
    }
    return q;
  });
  
  const newContent = `export const Y11_CH6E_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path, newContent, 'utf8');
  console.log("Updated locally.");
}
