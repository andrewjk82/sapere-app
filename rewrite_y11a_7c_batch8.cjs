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

// q13a-perp
updateQ('y11a-7c-q13a-perp', "\\( y = \\frac{1}{3}x + 4 \\)", ["\\( y = -\\frac{1}{3}x + 4 \\)", "\\( y = 3x + 4 \\)", "\\( y = -3x + 4 \\)"], [
  { explanation: "Find the gradient of the given line.", workingOut: "\\( y = -3x - 2 \\implies m_1 = -3 \\)", graphData: null },
  { explanation: "A perpendicular line has gradient \\(m_2\\) such that \\(m_1 m_2 = -1\\).", workingOut: "\\( m_2 = \\frac{1}{3} \\)", graphData: null },
  { explanation: "Substitute the gradient and the y-intercept (from point A) into \\(y = mx + b\\).", workingOut: "\\( y = \\frac{1}{3}x + 4 \\)", graphData: null }
]);

// q13b-par
updateQ('y11a-7c-q13b-par', "\\( y = \\frac{4}{3}x + 4 \\)", ["\\( y = -\\frac{4}{3}x + 4 \\)", "\\( y = \\frac{3}{4}x + 4 \\)", "\\( y = -\\frac{3}{4}x + 4 \\)"], [
  { explanation: "Find the gradient of the given line by rearranging into \\(y = mx + b\\).", workingOut: "\\( 3y = 4x - 2 \\implies y = \\frac{4}{3}x - \\frac{2}{3} \\implies m = \\frac{4}{3} \\)", graphData: null },
  { explanation: "A parallel line has the same gradient.", workingOut: "\\( m = \\frac{4}{3} \\)", graphData: null },
  { explanation: "Substitute into \\(y = mx + b\\) with \\(b = 4\\).", workingOut: "\\( y = \\frac{4}{3}x + 4 \\)", graphData: null }
]);

// q13b-perp
updateQ('y11a-7c-q13b-perp', "\\( y = -\\frac{3}{4}x + 4 \\)", ["\\( y = \\frac{3}{4}x + 4 \\)", "\\( y = -\\frac{4}{3}x + 4 \\)", "\\( y = \\frac{4}{3}x + 4 \\)"], [
  { explanation: "Find the gradient of the given line.", workingOut: "\\( y = \\frac{4}{3}x - \\frac{2}{3} \\implies m_1 = \\frac{4}{3} \\)", graphData: null },
  { explanation: "A perpendicular line has the negative reciprocal gradient.", workingOut: "\\( m_2 = -\\frac{3}{4} \\)", graphData: null },
  { explanation: "Substitute into \\(y = mx + b\\) with \\(b = 4\\).", workingOut: "\\( y = -\\frac{3}{4}x + 4 \\)", graphData: null }
]);

// q13c-par
updateQ('y11a-7c-q13c-par', "\\( y = -\\frac{2}{5}x + 4 \\)", ["\\( y = \\frac{2}{5}x + 4 \\)", "\\( y = \\frac{5}{2}x + 4 \\)", "\\( y = -\\frac{5}{2}x + 4 \\)"], [
  { explanation: "Find the gradient of the given line.", workingOut: "\\( 5y = -2x + 3 \\implies y = -\\frac{2}{5}x + \\frac{3}{5} \\implies m = -\\frac{2}{5} \\)", graphData: null },
  { explanation: "A parallel line has the same gradient.", workingOut: "\\( m = -\\frac{2}{5} \\)", graphData: null },
  { explanation: "Substitute into \\(y = mx + b\\) with \\(b = 4\\).", workingOut: "\\( y = -\\frac{2}{5}x + 4 \\)", graphData: null }
]);

// q13c-perp
updateQ('y11a-7c-q13c-perp', "\\( y = \\frac{5}{2}x + 4 \\)", ["\\( y = -\\frac{5}{2}x + 4 \\)", "\\( y = \\frac{2}{5}x + 4 \\)", "\\( y = -\\frac{2}{5}x + 4 \\)"], [
  { explanation: "Find the gradient of the given line.", workingOut: "\\( m_1 = -\\frac{2}{5} \\)", graphData: null },
  { explanation: "A perpendicular line has the negative reciprocal gradient.", workingOut: "\\( m_2 = \\frac{5}{2} \\)", graphData: null },
  { explanation: "Substitute into \\(y = mx + b\\) with \\(b = 4\\).", workingOut: "\\( y = \\frac{5}{2}x + 4 \\)", graphData: null }
]);

// q14a
updateQ('y11a-7c-q14a', "Parallelogram", ["Rectangle", "Rhombus", "Square"], [
  { explanation: "Find the gradients of the four lines.", workingOut: "\\( m_1 = -2, \\; m_2 = \\frac{1}{3}, \\; m_3 = -2, \\; m_4 = \\frac{1}{3} \\)", graphData: null },
  { explanation: "Since the opposite sides have equal gradients, they are parallel.", workingOut: "\\( m_1 = m_3 \\) and \\( m_2 = m_4 \\)", graphData: null },
  { explanation: "Check if adjacent sides are perpendicular.", workingOut: "\\( -2 \\times \\frac{1}{3} \\neq -1 \\)", graphData: null },
  { explanation: "Therefore, the quadrilateral is a parallelogram but not a rectangle.", workingOut: "\\text{Parallelogram}", graphData: null }
]);

// q14b
updateQ('y11a-7c-q14b', "Rectangle", ["Parallelogram", "Rhombus", "Kite"], [
  { explanation: "Find the gradients of the four lines.", workingOut: "\\( m_1 = \\frac{3}{2}, \\; m_2 = -\\frac{2}{3}, \\; m_3 = \\frac{3}{2}, \\; m_4 = -\\frac{2}{3} \\)", graphData: null },
  { explanation: "Since the opposite sides have equal gradients, it is a parallelogram.", workingOut: "\\( m_1 = m_3 \\) and \\( m_2 = m_4 \\)", graphData: null },
  { explanation: "Check if adjacent sides are perpendicular.", workingOut: "\\( \\frac{3}{2} \\times \\left(-\\frac{2}{3}\\right) = -1 \\)", graphData: null },
  { explanation: "Therefore, it is a rectangle.", workingOut: "\\text{Rectangle}", graphData: null }
]);

// q15
updateQ('y11a-7c-q15', "\\( 3x - 4y + 6 = 0 \\) and \\( 4x + 3y + 1 = 0 \\)", [
  "\\( 3x - 4y + 6 = 0 \\) and \\( 2x - 5y + 8 = 0 \\)", 
  "\\( 2x - 5y + 8 = 0 \\) and \\( 4x + 3y + 1 = 0 \\)", 
  "None of the lines are perpendicular."
], [
  { explanation: "Find the gradients of all three lines.", workingOut: "\\( m_1 = \\frac{3}{4}, \\; m_2 = \\frac{2}{5}, \\; m_3 = -\\frac{4}{3} \\)", graphData: null },
  { explanation: "Check for perpendicular pairs by checking if \\( m_a m_b = -1 \\).", workingOut: "\\( \\frac{3}{4} \\times \\left(-\\frac{4}{3}\\right) = -1 \\)", graphData: null },
  { explanation: "Since two lines are perpendicular, they enclose a right-angled triangle.", workingOut: "\\text{The lines are } 3x - 4y + 6 = 0 \\text{ and } 4x + 3y + 1 = 0.", graphData: null }
], 0, "Find the gradients of the three lines \\(3x - 4y + 6 = 0\\), \\(2x - 5y + 8 = 0\\), and \\(4x + 3y + 1 = 0\\). Which pair of lines are perpendicular, showing they enclose a right-angled triangle?");

// q16a
updateQ('y11a-7c-q16a', "\\( x = 1, \\; x = 4, \\; y = -5, \\; y = -1 \\)", [
  "\\( x = -5, \\; x = -1, \\; y = 1, \\; y = 4 \\)",
  "\\( x = -1, \\; x = 4, \\; y = 1, \\; y = 5 \\)",
  "\\( x = 1, \\; x = 5, \\; y = -4, \\; y = -1 \\)"
], [
  { explanation: "Identify the horizontal lines by looking at points with the same y-coordinates.", workingOut: "\\( P(4, -5) \\) and \\( Q(1, -5) \\implies y = -5 \\)", graphData: null },
  { explanation: "Identify the other horizontal line.", workingOut: "\\( R(1, -1) \\) and \\( S(4, -1) \\implies y = -1 \\)", graphData: null },
  { explanation: "Identify the vertical lines by looking at points with the same x-coordinates.", workingOut: "\\( Q(1, -5) \\) and \\( R(1, -1) \\implies x = 1 \\)", graphData: null },
  { explanation: "Identify the other vertical line.", workingOut: "\\( S(4, -1) \\) and \\( P(4, -5) \\implies x = 4 \\)", graphData: null }
], 0, "Which of the following sets of equations describes the sides of the rectangle with vertices \\(P(4, -5)\\), \\(Q(1, -5)\\), \\(R(1, -1)\\), and \\(S(4, -1)\\)?");

// q16b
updateQ('y11a-7c-q16b', "\\( y = 0, \\; 2x + y - 8 = 0, \\; x - y + 8 = 0 \\)", [
  "\\( x = 0, \\; x + 2y - 8 = 0, \\; x - y + 8 = 0 \\)",
  "\\( y = 0, \\; 2x - y - 8 = 0, \\; x + y + 8 = 0 \\)",
  "\\( y = 0, \\; 2x + y + 8 = 0, \\; x - y - 8 = 0 \\)"
], [
  { explanation: "Find the equation of the side \\(FG\\). The points \\(F(4, 0)\\) and \\(G(-8, 0)\\) lie on the x-axis.", workingOut: "\\( y = 0 \\)", graphData: null },
  { explanation: "Find the equation of \\(FH\\). The gradient \\(m = \\frac{8 - 0}{0 - 4} = -2\\) and y-intercept is 8.", workingOut: "\\( y = -2x + 8 \\implies 2x + y - 8 = 0 \\)", graphData: null },
  { explanation: "Find the equation of \\(GH\\). The gradient \\(m = \\frac{8 - 0}{0 - (-8)} = 1\\) and y-intercept is 8.", workingOut: "\\( y = 1x + 8 \\implies x - y + 8 = 0 \\)", graphData: null }
], 0, "Find the general form equations of the sides of the triangle with vertices \\(F(4, 0)\\), \\(G(-8, 0)\\), and \\(H(0, 8)\\).");

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 8 (10 questions).');
