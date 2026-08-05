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

function updateQ(id, correctOpt, distractors, solutionSteps, answerIdx = 0, questionText = null) {
  const q = questions.find(q => q.id === id);
  if (!q) return;
  q.type = "multiple_choice";
  if (questionText) q.question = questionText;
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

// q11a
updateQ('y11a-7c-q11a', "\\( A(3, 0), B(0, 4) \\)", ["\\( A(4, 0), B(0, 3) \\)", "\\( A(-3, 0), B(0, -4) \\)", "\\( A(-4, 0), B(0, -3) \\)"], [
  { explanation: "To find the x-intercept \\(A\\), set \\(y = 0\\).", workingOut: "\\( 4x + 3(0) - 12 = 0 \\implies 4x = 12 \\implies x = 3 \\)", graphData: null },
  { explanation: "To find the y-intercept \\(B\\), set \\(x = 0\\).", workingOut: "\\( 4(0) + 3y - 12 = 0 \\implies 3y = 12 \\implies y = 4 \\)", graphData: null },
  { explanation: "The points are \\(A(3, 0)\\) and \\(B(0, 4)\\).", workingOut: "\\( A(3, 0), B(0, 4) \\)", graphData: null }
], 0, "Find the points \\(A\\) (x-intercept) and \\(B\\) (y-intercept) where the line \\(4x + 3y - 12 = 0\\) crosses the x-axis and y-axis respectively.");

// q11b
updateQ('y11a-7c-q11b', "\\( A(-3, 0), B(0, 9) \\)", ["\\( A(3, 0), B(0, -9) \\)", "\\( A(-9, 0), B(0, 3) \\)", "\\( A(9, 0), B(0, -3) \\)"], [
  { explanation: "To find the x-intercept \\(A\\), set \\(y = 0\\).", workingOut: "\\( 3x - 0 + 9 = 0 \\implies 3x = -9 \\implies x = -3 \\)", graphData: null },
  { explanation: "To find the y-intercept \\(B\\), set \\(x = 0\\).", workingOut: "\\( 3(0) - y + 9 = 0 \\implies y = 9 \\)", graphData: null },
  { explanation: "The points are \\(A(-3, 0)\\) and \\(B(0, 9)\\).", workingOut: "\\( A(-3, 0), B(0, 9) \\)", graphData: null }
], 0, "Find the points \\(A\\) (x-intercept) and \\(B\\) (y-intercept) where the line \\(3x - y + 9 = 0\\) crosses the x-axis and y-axis respectively.");

// q11c
updateQ('y11a-7c-q11c', "\\( A(-5, 0), B(0, 2) \\)", ["\\( A(5, 0), B(0, -2) \\)", "\\( A(-2, 0), B(0, 5) \\)", "\\( A(2, 0), B(0, -5) \\)"], [
  { explanation: "To find the x-intercept \\(A\\), set \\(y = 0\\).", workingOut: "\\( 2x - 5(0) + 10 = 0 \\implies 2x = -10 \\implies x = -5 \\)", graphData: null },
  { explanation: "To find the y-intercept \\(B\\), set \\(x = 0\\).", workingOut: "\\( 2(0) - 5y + 10 = 0 \\implies 5y = 10 \\implies y = 2 \\)", graphData: null },
  { explanation: "The points are \\(A(-5, 0)\\) and \\(B(0, 2)\\).", workingOut: "\\( A(-5, 0), B(0, 2) \\)", graphData: null }
], 0, "Find the points \\(A\\) (x-intercept) and \\(B\\) (y-intercept) where the line \\(2x - 5y + 10 = 0\\) crosses the x-axis and y-axis respectively.");

// q12a-grad
updateQ('y11a-7c-q12a-grad', "\\( 2 \\)", ["\\( 3 \\)", "\\( -2 \\)", "\\( 1 \\)"], [
  { explanation: "Use the gradient formula \\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\).", workingOut: "\\( m = \\frac{9 - 3}{3 - 0} \\)", graphData: null },
  { explanation: "Simplify the fraction.", workingOut: "\\( m = \\frac{6}{3} = 2 \\)", graphData: null }
]);

// q12a-eq
updateQ('y11a-7c-q12a-eq', "\\( 2x - y + 3 = 0 \\)", ["\\( 2x + y + 3 = 0 \\)", "\\( x - 2y + 3 = 0 \\)", "\\( 2x - y - 3 = 0 \\)"], [
  { explanation: "The gradient is \\(m = 2\\) and the y-intercept is \\(b = 3\\) (from point A).", workingOut: "\\( y = 2x + 3 \\)", graphData: null },
  { explanation: "Rearrange to general form \\(Ax + By + C = 0\\) with \\(A > 0\\).", workingOut: "\\( 2x - y + 3 = 0 \\)", graphData: null }
]);

// q12b-grad
updateQ('y11a-7c-q12b-grad', "\\( -2 \\)", ["\\( 2 \\)", "\\( -\\frac{1}{2} \\)", "\\( \\frac{1}{2} \\)"], [
  { explanation: "Use the gradient formula.", workingOut: "\\( m = \\frac{-2 - 0}{1 - 0} \\)", graphData: null },
  { explanation: "Simplify.", workingOut: "\\( m = -2 \\)", graphData: null }
]);

// q12b-eq
updateQ('y11a-7c-q12b-eq', "\\( 2x + y = 0 \\)", ["\\( 2x - y = 0 \\)", "\\( x + 2y = 0 \\)", "\\( x - 2y = 0 \\)"], [
  { explanation: "The gradient is \\(m = -2\\) and the y-intercept is \\(b = 0\\) (from point A).", workingOut: "\\( y = -2x \\)", graphData: null },
  { explanation: "Rearrange to general form.", workingOut: "\\( 2x + y = 0 \\)", graphData: null }
]);

// q12c-grad
updateQ('y11a-7c-q12c-grad', "\\( -\\frac{1}{3} \\)", ["\\( \\frac{1}{3} \\)", "\\( -3 \\)", "\\( 3 \\)"], [
  { explanation: "Use the gradient formula.", workingOut: "\\( m = \\frac{-3 - (-1)}{0 - (-6)} \\)", graphData: null },
  { explanation: "Simplify.", workingOut: "\\( m = \\frac{-2}{6} = -\\frac{1}{3} \\)", graphData: null }
]);

// q12c-eq
updateQ('y11a-7c-q12c-eq', "\\( x + 3y + 9 = 0 \\)", ["\\( x - 3y - 9 = 0 \\)", "\\( 3x + y + 9 = 0 \\)", "\\( x + 3y - 9 = 0 \\)"], [
  { explanation: "The gradient is \\(m = -\\frac{1}{3}\\) and the y-intercept is \\(b = -3\\) (from point B).", workingOut: "\\( y = -\\frac{1}{3}x - 3 \\)", graphData: null },
  { explanation: "Multiply by 3.", workingOut: "\\( 3y = -x - 9 \\)", graphData: null },
  { explanation: "Rearrange to general form with \\(A > 0\\).", workingOut: "\\( x + 3y + 9 = 0 \\)", graphData: null }
]);

// q13a-par
updateQ('y11a-7c-q13a-par', "\\( y = -3x + 4 \\)", ["\\( y = 3x + 4 \\)", "\\( y = -3x - 4 \\)", "\\( y = \\frac{1}{3}x + 4 \\)"], [
  { explanation: "Find the gradient of the given line.", workingOut: "\\( y = -3x - 2 \\implies m = -3 \\)", graphData: null },
  { explanation: "A parallel line has the same gradient.", workingOut: "\\( m = -3 \\)", graphData: null },
  { explanation: "The y-intercept of the new line is given by point A as 4.", workingOut: "\\( y = -3x + 4 \\)", graphData: null }
]);

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 7 (10 questions).');
