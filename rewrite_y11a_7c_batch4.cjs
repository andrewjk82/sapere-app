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

// Helper
function updateQ(id, correctOpt, distractors, solutionSteps, answerIdx = 0) {
  const q = questions.find(q => q.id === id);
  if (!q) return;
  q.type = "multiple_choice";
  const opts = [];
  distractors.forEach((d, i) => {
    if (i === answerIdx) opts.push({text: correctOpt, imageUrl: ""});
    opts.push({text: d, imageUrl: ""});
  });
  if (opts.length === distractors.length) opts.push({text: correctOpt, imageUrl: ""}); // if answerIdx is at the end
  q.options = opts.slice(0, 4); // ensure exactly 4
  q.answer = answerIdx;
  q.solution = correctOpt;
  q.solutionSteps = solutionSteps;
  delete q.opts;
  delete q.requiresManualGrading;
}

// Update q5c-grad
updateQ('y11a-7c-q5c-grad', "\\( -1 \\)", ["\\( 1 \\)", "\\( 5 \\)", "\\( -5 \\)"], [
  { explanation: "Rewrite the equation in the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = -x + 5 \\)", graphData: null },
  { explanation: "The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = -1 \\)", graphData: null }
]);

// Update q5c-yint
updateQ('y11a-7c-q5c-yint', "\\( 5 \\)", ["\\( -5 \\)", "\\( 1 \\)", "\\( -1 \\)"], [
  { explanation: "The equation is \\( y = 5 - x \\). The y-intercept is the constant term.", workingOut: "\\( b = 5 \\)", graphData: null }
]);

// Update q5d-grad
updateQ('y11a-7c-q5d-grad', "\\( -\\frac{3}{8} \\)", ["\\( \\frac{3}{8} \\)", "\\( \\frac{8}{3} \\)", "\\( -\\frac{8}{3} \\)"], [
  { explanation: "The equation is \\( y = -\\frac{3}{8}x \\). The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = -\\frac{3}{8} \\)", graphData: null }
]);

// Update q5d-yint
updateQ('y11a-7c-q5d-yint', "\\( 0 \\)", ["\\( -\\frac{3}{8} \\)", "\\( \\frac{3}{8} \\)", "\\( 1 \\)"], [
  { explanation: "The equation is \\( y = -\\frac{3}{8}x \\), which can be written as \\( y = -\\frac{3}{8}x + 0 \\).", workingOut: "\\( y = mx + 0 \\)", graphData: null },
  { explanation: "The constant term is 0.", workingOut: "\\( b = 0 \\)", graphData: null }
]);

// Update q6a
updateQ('y11a-7c-q6a', "\\( y = -4x + 6 \\)", ["\\( y = 4x + 6 \\)", "\\( y = -4x - 6 \\)", "\\( y = 6x - 4 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "Substitute the gradient \\(m = -4\\) and y-intercept \\(b = 6\\).", workingOut: "\\( y = -4x + 6 \\)", graphData: null }
]);

// Update q6b
updateQ('y11a-7c-q6b', "\\( y = -4x - \\frac{3}{5} \\)", ["\\( y = -4x + \\frac{3}{5} \\)", "\\( y = 4x - \\frac{3}{5} \\)", "\\( y = -\\frac{3}{5}x - 4 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "Substitute \\(m = -4\\) and \\(b = -\\frac{3}{5}\\).", workingOut: "\\( y = -4x - \\frac{3}{5} \\)", graphData: null }
]);

// Update q6c
updateQ('y11a-7c-q6c', "\\( y = -4x \\)", ["\\( y = 4x \\)", "\\( y = -4x + 1 \\)", "\\( x = -4y \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "Substitute \\(m = -4\\) and \\(b = 0\\).", workingOut: "\\( y = -4x + 0 \\implies y = -4x \\)", graphData: null }
]);

// Update q7a
updateQ('y11a-7c-q7a', "\\( y = 6x - 5 \\)", ["\\( y = -5x + 6 \\)", "\\( y = 6x + 5 \\)", "\\( y = -5x - 6 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "Here, gradient \\(m = 6\\) and y-intercept \\(b = -5\\). Substitute them into the formula.", workingOut: "\\( y = 6x - 5 \\)", graphData: null }
]);

// Update q7b
updateQ('y11a-7c-q7b', "\\( y = -\\frac{3}{4}x - 5 \\)", ["\\( y = -\\frac{3}{4}x + 5 \\)", "\\( y = \\frac{3}{4}x - 5 \\)", "\\( y = -5x - \\frac{3}{4} \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "Substitute \\(m = -\\frac{3}{4}\\) and \\(b = -5\\).", workingOut: "\\( y = -\\frac{3}{4}x - 5 \\)", graphData: null }
]);

// Update q7c
updateQ('y11a-7c-q7c', "\\( y = -5 \\)", ["\\( x = -5 \\)", "\\( y = -5x \\)", "\\( y = 5 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "Substitute \\(m = 0\\) and \\(b = -5\\).", workingOut: "\\( y = 0x - 5 \\implies y = -5 \\)", graphData: null }
]);

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 4 (10 questions).');
