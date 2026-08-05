const fs = require('fs');

async function run() {
  const file = './src/constants/seedYear10Ch6KQuestions.js';
  const module = await import('file://' + require('path').resolve(file));
  const questions = module.Y10_CH6K_QUESTIONS;

  questions.forEach(q => {
    if (q.id === 'y10-6k-q6b') {
      q.question = "Find exact answers to these questions (leaving \\( \\pi \\) in your answer if necessary).\na) A square-based pyramid has base side length \\( 14 \\) cm and perpendicular height \\( 24 \\) cm.\nii) Calculate the volume";
    }
    if (q.id === 'y10-6k-q6d') {
      q.question = "Find exact answers to these questions (leaving \\( \\pi \\) in your answer if necessary).\nb) A cone has a radius of \\( 5 \\) cm and a slant height of \\( 13 \\) cm.\nii) Calculate the exact volume";
    }
  });

  const output = 'export const Y10_CH6K_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(file, output);
  console.log('Successfully updated question texts for q6b and q6d in seedYear10Ch6KQuestions.js');
}

run().catch(console.error);
