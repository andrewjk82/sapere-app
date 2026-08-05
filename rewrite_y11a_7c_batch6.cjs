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

// q9d-grad
updateQ('y11a-7c-q9d-grad', "\\( -\\frac{2}{5} \\)", ["\\( \\frac{2}{5} \\)", "\\( -\\frac{5}{2} \\)", "\\( \\frac{4}{5} \\)"], [
  { explanation: "Solve the equation \\(2x + 5y = 4\\) for \\(y\\).", workingOut: "\\( 5y = -2x + 4 \\)", graphData: null },
  { explanation: "Divide by 5.", workingOut: "\\( y = -\\frac{2}{5}x + \\frac{4}{5} \\)", graphData: null },
  { explanation: "Identify the gradient \\(m\\) from \\(y = mx + b\\).", workingOut: "\\( m = -\\frac{2}{5} \\)", graphData: null }
]);

// q9d-yint
updateQ('y11a-7c-q9d-yint', "\\( \\frac{4}{5} \\)", ["\\( -\\frac{4}{5} \\)", "\\( \\frac{5}{4} \\)", "\\( -\\frac{2}{5} \\)"], [
  { explanation: "Solve the equation \\(2x + 5y = 4\\) for \\(y\\).", workingOut: "\\( 5y = -2x + 4 \\implies y = -\\frac{2}{5}x + \\frac{4}{5} \\)", graphData: null },
  { explanation: "Identify the y-intercept \\(b\\) from \\(y = mx + b\\).", workingOut: "\\( b = \\frac{4}{5} \\)", graphData: null }
]);

// q10a-grad
updateQ('y11a-7c-q10a-grad', "\\( 1 \\)", ["\\( 0 \\)", "\\( -1 \\)", "\\( 5 \\)"], [
  { explanation: "The equation is in the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = 1x + 5 \\)", graphData: null },
  { explanation: "The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = 1 \\)", graphData: null }
]);

// q10a-angle
updateQ('y11a-7c-q10a-angle', "\\( 45^\\circ \\)", ["\\( 90^\\circ \\)", "\\( -45^\\circ \\)", "\\( 135^\\circ \\)"], [
  { explanation: "Use the formula \\( \\tan \\alpha = m \\).", workingOut: "\\( \\tan \\alpha = 1 \\)", graphData: null },
  { explanation: "Find the acute angle \\(\\alpha\\).", workingOut: "\\( \\alpha = 45^\\circ \\)", graphData: null }
]);

// q10b-grad
updateQ('y11a-7c-q10b-grad', "\\( -1 \\)", ["\\( 1 \\)", "\\( -12 \\)", "\\( 0 \\)"], [
  { explanation: "The equation is in the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = -1x - 12 \\)", graphData: null },
  { explanation: "The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = -1 \\)", graphData: null }
]);

// q10b-angle
updateQ('y11a-7c-q10b-angle', "\\( 135^\\circ \\)", ["\\( -45^\\circ \\)", "\\( 45^\\circ \\)", "\\( -135^\\circ \\)"], [
  { explanation: "Use the formula \\( \\tan \\alpha = m \\).", workingOut: "\\( \\tan \\alpha = -1 \\)", graphData: null },
  { explanation: "Since the gradient is negative, the angle is obtuse.", workingOut: "\\( \\alpha = 180^\\circ - 45^\\circ = 135^\\circ \\)", graphData: null }
]);

// q10c-grad
updateQ('y11a-7c-q10c-grad', "\\( 3 \\)", ["\\( \\frac{1}{3} \\)", "\\( -3 \\)", "\\( 0 \\)"], [
  { explanation: "The equation is \\( y = 3x \\). The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = 3 \\)", graphData: null }
]);

// q10c-angle
updateQ('y11a-7c-q10c-angle', "\\( 72^\\circ \\)", ["\\( 71^\\circ \\)", "\\( -72^\\circ \\)", "\\( 108^\\circ \\)"], [
  { explanation: "Use the formula \\( \\tan \\alpha = m \\).", workingOut: "\\( \\tan \\alpha = 3 \\)", graphData: null },
  { explanation: "Use a calculator to find \\(\\alpha\\).", workingOut: "\\( \\alpha \\approx 71.565^\\circ \\)", graphData: null },
  { explanation: "Round to the nearest degree.", workingOut: "\\( \\alpha \\approx 72^\\circ \\)", graphData: null }
]);

// q10d-grad
updateQ('y11a-7c-q10d-grad', "\\( -\\frac{1}{2} \\)", ["\\( \\frac{1}{2} \\)", "\\( -2 \\)", "\\( 2 \\)"], [
  { explanation: "The equation is \\( y = -\\frac{1}{2}x \\). The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = -\\frac{1}{2} \\)", graphData: null }
]);

// q10d-angle
updateQ('y11a-7c-q10d-angle', "\\( 153^\\circ \\)", ["\\( -27^\\circ \\)", "\\( 27^\\circ \\)", "\\( -153^\\circ \\)"], [
  { explanation: "Use the formula \\( \\tan \\alpha = m \\).", workingOut: "\\( \\tan \\alpha = -0.5 \\)", graphData: null },
  { explanation: "Use a calculator to find the principal angle.", workingOut: "\\( \\tan^{-1}(-0.5) \\approx -26.565^\\circ \\)", graphData: null },
  { explanation: "Since the angle of inclination must be between \\(0^\\circ\\) and \\(180^\\circ\\), add \\(180^\\circ\\).", workingOut: "\\( \\alpha \\approx 180^\\circ - 26.565^\\circ = 153.435^\\circ \\)", graphData: null },
  { explanation: "Round to the nearest degree.", workingOut: "\\( \\alpha \\approx 153^\\circ \\)", graphData: null }
]);

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 6 (10 questions).');
