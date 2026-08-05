const fs = require('fs');

async function run() {
  const file = './src/constants/seedYear10Ch6KQuestions.js';
  const module = await import('file://' + require('path').resolve(file));
  const questions = module.Y10_CH6K_QUESTIONS;

  questions.forEach(q => {
    let cleaned = q.question.replace(/^[a-z]\)\s+/gm, '');
    cleaned = cleaned.replace(/^[ivx]+\)\s+/gm, '');
    
    // Also change "Find exact answers to these questions" to singular
    cleaned = cleaned.replace("Find exact answers to these questions (leaving \\( \\pi \\) in your answer if necessary).", "Find the exact answer (leaving \\( \\pi \\) in your answer if necessary).");
    
    q.question = cleaned;
  });

  const output = 'export const Y10_CH6K_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(file, output);
  console.log('Successfully cleaned subquestion labels from question texts.');
}

run().catch(console.error);
