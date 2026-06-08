import fs from 'fs';

async function main() {
  const { Y10_CH13A_QUESTIONS } = await import('./src/constants/seedYear10Ch13AQuestions.js');
  
  const data = Y10_CH13A_QUESTIONS;

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
    }
  });

  const output = 'export const Y10_CH13A_QUESTIONS = ' + JSON.stringify(data, null, 2) + ';\n';
  fs.writeFileSync('src/constants/seedYear10Ch13AQuestions.js', output, 'utf8');
  console.log('Update complete.');
}

main().catch(console.error);
