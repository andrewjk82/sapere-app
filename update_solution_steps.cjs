const fs = require('fs');

const content = fs.readFileSync('src/constants/seedYear10Ch13AQuestions.js', 'utf8');
const jsonStr = content.replace('export const Y10_CH13A_QUESTIONS = ', '').replace(/;\s*$/, '');
let data = JSON.parse(jsonStr);

data.forEach(q => {
  // If the question has a solution string but no solutionSteps (or empty),
  // generate solutionSteps by splitting the solution string by newline.
  if (q.solution && (!q.solutionSteps || q.solutionSteps.length === 0)) {
    const lines = q.solution.split('\n').filter(line => line.trim().length > 0);
    q.solutionSteps = lines.map(line => ({
      explanation: line.trim(),
      workingOut: "",
      graphData: null
    }));
    // We can also remove or keep the original solution string.
    // Keeping it might be fine, but the UI prefers solutionSteps.
  }
});

const output = 'export const Y10_CH13A_QUESTIONS = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('src/constants/seedYear10Ch13AQuestions.js', output, 'utf8');
console.log('Update complete.');
