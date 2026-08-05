const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

const filepath = 'src/constants/seedYear11Ch7CQuestions.js';
const code = fs.readFileSync(filepath, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

let questions = null;
traverse(ast, {
  ExportNamedDeclaration(path) {
    const decl = path.node.declaration;
    if (decl && decl.type === 'VariableDeclaration') {
      for (const declarator of decl.declarations) {
        if (declarator.id.name === 'Y11_CH7C_QUESTIONS') {
          const { start, end } = declarator.init;
          const arrSrc = code.slice(start, end);
          questions = (new Function(`return ${arrSrc}`))();
        }
      }
    }
  }
});

function updateQ(id, correctOpt, distractors, solutionSteps, answerIdx = 0) {
  const q = questions.find(q => q.id === id);
  if (!q) return;
  q.type = "multiple_choice";
  const opts = [];
  distractors.forEach((d, i) => {
    if (i === answerIdx) opts.push({text: correctOpt, imageUrl: ""});
    opts.push({text: d, imageUrl: ""});
  });
  if (opts.length === distractors.length) opts.push({text: correctOpt, imageUrl: ""});
  q.options = opts.slice(0, 4);
  q.answer = answerIdx;
  q.solution = correctOpt;
  q.solutionSteps = solutionSteps;
  delete q.opts;
  delete q.requiresManualGrading;
}

// q8a
updateQ('y11a-7c-q8a', "\\( x - y + 4 = 0 \\)", ["\\( x + y + 4 = 0 \\)", "\\( x - y - 4 = 0 \\)", "\\( y - x + 4 = 0 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\) with \\(m = 1\\) and \\(b = 4\\).", workingOut: "\\( y = 1x + 4 \\)", graphData: null },
  { explanation: "Rearrange the equation so that all terms are on one side, and the coefficient of \\(x\\) is positive.", workingOut: "\\( x - y + 4 = 0 \\)", graphData: null }
]);

// q8b
updateQ('y11a-7c-q8b', "\\( 3x + y - 6 = 0 \\)", ["\\( 3x - y - 6 = 0 \\)", "\\( 3x + y + 6 = 0 \\)", "\\( x + 3y - 6 = 0 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\) with \\(m = -3\\) and \\(b = 6\\).", workingOut: "\\( y = -3x + 6 \\)", graphData: null },
  { explanation: "Rearrange the equation so the coefficient of \\(x\\) is positive \\( (A > 0) \\).", workingOut: "\\( 3x + y - 6 = 0 \\)", graphData: null }
]);

// q8c
updateQ('y11a-7c-q8c', "\\( x - 4y - 8 = 0 \\)", ["\\( x + 4y - 8 = 0 \\)", "\\( x - 4y + 8 = 0 \\)", "\\( 4x - y - 8 = 0 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\) with \\(m = \\frac{1}{4}\\) and \\(b = -2\\).", workingOut: "\\( y = \\frac{1}{4}x - 2 \\)", graphData: null },
  { explanation: "Multiply the entire equation by 4 to remove the fraction.", workingOut: "\\( 4y = x - 8 \\)", graphData: null },
  { explanation: "Rearrange into general form \\(Ax + By + C = 0\\) with \\(A > 0\\).", workingOut: "\\( x - 4y - 8 = 0 \\)", graphData: null }
]);

// q8d
updateQ('y11a-7c-q8d', "\\( x + 3y - 6 = 0 \\)", ["\\( x - 3y - 6 = 0 \\)", "\\( x + 3y + 6 = 0 \\)", "\\( 3x + y - 6 = 0 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\) with \\(m = -\\frac{1}{3}\\) and \\(b = 2\\).", workingOut: "\\( y = -\\frac{1}{3}x + 2 \\)", graphData: null },
  { explanation: "Multiply the entire equation by 3.", workingOut: "\\( 3y = -x + 6 \\)", graphData: null },
  { explanation: "Rearrange into general form with \\(A > 0\\).", workingOut: "\\( x + 3y - 6 = 0 \\)", graphData: null }
]);

// q9a-grad
updateQ('y11a-7c-q9a-grad', "\\( 1 \\)", ["\\( -1 \\)", "\\( 4 \\)", "\\( -4 \\)"], [
  { explanation: "Solve the equation \\(x - y + 4 = 0\\) for \\(y\\).", workingOut: "\\( y = x + 4 \\)", graphData: null },
  { explanation: "Identify the gradient \\(m\\) from \\(y = mx + b\\).", workingOut: "\\( m = 1 \\)", graphData: null }
]);

// q9a-yint
updateQ('y11a-7c-q9a-yint', "\\( 4 \\)", ["\\( -4 \\)", "\\( 1 \\)", "\\( -1 \\)"], [
  { explanation: "Solve the equation \\(x - y + 4 = 0\\) for \\(y\\).", workingOut: "\\( y = x + 4 \\)", graphData: null },
  { explanation: "Identify the y-intercept \\(b\\) from \\(y = mx + b\\).", workingOut: "\\( b = 4 \\)", graphData: null }
]);

// q9b-grad
updateQ('y11a-7c-q9b-grad', "\\( -1 \\)", ["\\( 1 \\)", "\\( 3 \\)", "\\( -3 \\)"], [
  { explanation: "Solve the equation \\(y + x - 3 = 0\\) for \\(y\\).", workingOut: "\\( y = -x + 3 \\)", graphData: null },
  { explanation: "Identify the gradient \\(m\\) from \\(y = mx + b\\).", workingOut: "\\( m = -1 \\)", graphData: null }
]);

// q9b-yint
updateQ('y11a-7c-q9b-yint', "\\( 3 \\)", ["\\( -3 \\)", "\\( 1 \\)", "\\( -1 \\)"], [
  { explanation: "Solve the equation \\(y + x - 3 = 0\\) for \\(y\\).", workingOut: "\\( y = -x + 3 \\)", graphData: null },
  { explanation: "Identify the y-intercept \\(b\\) from \\(y = mx + b\\).", workingOut: "\\( b = 3 \\)", graphData: null }
]);

// q9c-grad
updateQ('y11a-7c-q9c-grad', "\\( \\frac{1}{2} \\)", ["\\( -\\frac{1}{2} \\)", "\\( 2 \\)", "\\( -2 \\)"], [
  { explanation: "Solve the equation \\(x - 2y = 0\\) for \\(y\\).", workingOut: "\\( 2y = x \\implies y = \\frac{1}{2}x \\)", graphData: null },
  { explanation: "Identify the gradient \\(m\\) from \\(y = mx + b\\).", workingOut: "\\( m = \\frac{1}{2} \\)", graphData: null }
]);

// q9c-yint
updateQ('y11a-7c-q9c-yint', "\\( 0 \\)", ["\\( 1 \\)", "\\( 2 \\)", "\\( -2 \\)"], [
  { explanation: "Solve the equation \\(x - 2y = 0\\) for \\(y\\).", workingOut: "\\( 2y = x \\implies y = \\frac{1}{2}x + 0 \\)", graphData: null },
  { explanation: "Identify the y-intercept \\(b\\).", workingOut: "\\( b = 0 \\)", graphData: null }
]);

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 5 (10 questions).');
