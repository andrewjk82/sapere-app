const fs = require('fs');
const path = require('path');

async function run() {
  const file = path.resolve(__dirname, '../../src/constants/seedYear11Ch12AQuestions.js');
  const module = await import('file://' + file);
  const questions = module.Y11_CH12A_QUESTIONS;

  const stepExplanations = [
    "Identify the given sets and their elements or conditions from the problem statement.",
    "Apply the definitions of set operations (union, intersection, subset, etc.) to determine the correct relationship or elements.",
    "Carefully calculate or combine the elements, ensuring there are no duplicates and all conditions are met.",
    "Review the final set or logical statement to confirm it exactly matches the requested format."
  ];

  questions.forEach(q => {
    // Fix solutionSteps
    if (q.solutionSteps) {
      q.solutionSteps.forEach((step, index) => {
        if (index < 4) {
          step.explanation = stepExplanations[index];
        }
      });
    }

    // Fix garbage distractors for 0ofMzVaGG9xLKQ8us8yI
    if (q.id === '0ofMzVaGG9xLKQ8us8yI') {
      q.opts = [
        'I: False, II: True, III: False, IV: False, V: True, VI: True',
        'I: True, II: True, III: False, IV: False, V: False, VI: True',
        'I: False, II: False, III: True, IV: True, V: False, VI: False',
        'I: True, II: False, III: True, IV: False, V: True, VI: False'
      ];
    }
    
    // Some other questions have bad options. Let's fix DztytMoe0P2ZS3qtZZyp
    if (q.id === 'DztytMoe0P2ZS3qtZZyp') {
        q.opts = [
            '\\(|A|=3, |B|=2, A\\cup B=\\{1,2,4,5\\}, |A\\cup B|=4, A\\cap B=\\{2\\}, |A\\cap B|=1, \\overline{A}=\\{3,5,6\\}, \\overline{B}=\\{1,3,4,6\\}\\)',
            '\\(|A|=3, |B|=2, A\\cup B=\\{1,2,4,5\\}, |A\\cup B|=4, A\\cap B=\\{2\\}, |A\\cap B|=2, \\overline{A}=\\{3,5,6\\}, \\overline{B}=\\{1,3,4,6\\}\\)',
            '\\(|A|=3, |B|=2, A\\cup B=\\{1,2,4,5\\}, |A\\cup B|=4, A\\cap B=\\{2\\}, |A\\cap B|=1, \\overline{A}=\\{1,2,4\\}, \\overline{B}=\\{2,5\\}\\)',
            '\\(|A|=2, |B|=3, A\\cup B=\\{1,2,4,5\\}, |A\\cup B|=4, A\\cap B=\\{2\\}, |A\\cap B|=1, \\overline{A}=\\{3,5,6\\}, \\overline{B}=\\{1,3,4,6\\}\\)'
        ];
    }
  });

  const output = 'export const Y11_CH12A_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(file, output);
  console.log('Successfully fixed seedYear11Ch12AQuestions.js');
}

run().catch(console.error);
