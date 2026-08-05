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

// q17a-grad
updateQ('y11a-7c-q17a-grad', "\\( 1 \\)", ["\\( -1 \\)", "\\( \\frac{\\sqrt{2}}{2} \\)", "\\( 0 \\)"], [
  { explanation: "Use the formula \\( m = \\tan \\alpha \\).", workingOut: "\\( m = \\tan 45^{\\circ} \\)", graphData: null },
  { explanation: "Evaluate \\( \\tan 45^{\\circ} \\).", workingOut: "\\( m = 1 \\)", graphData: null }
]);

// q17a-eq
updateQ('y11a-7c-q17a-eq', "\\( x - y + 4 = 0 \\)", ["\\( x + y - 4 = 0 \\)", "\\( x - y - 4 = 0 \\)", "\\( x + y + 4 = 0 \\)"], [
  { explanation: "Use the gradient-intercept form \\( y = mx + b \\) with \\( m = 1 \\) and \\( b = 4 \\).", workingOut: "\\( y = 1x + 4 \\)", graphData: null },
  { explanation: "Rearrange to general form \\(Ax + By + C = 0\\) with \\( A > 0 \\).", workingOut: "\\( x - y + 4 = 0 \\)", graphData: null }
]);

// q17b-grad
updateQ('y11a-7c-q17b-grad', "\\( \\sqrt{3} \\)", ["\\( -\\sqrt{3} \\)", "\\( \\frac{1}{\\sqrt{3}} \\)", "\\( -\\frac{1}{\\sqrt{3}} \\)"], [
  { explanation: "Use the formula \\( m = \\tan \\alpha \\).", workingOut: "\\( m = \\tan 60^{\\circ} \\)", graphData: null },
  { explanation: "Evaluate \\( \\tan 60^{\\circ} \\).", workingOut: "\\( m = \\sqrt{3} \\)", graphData: null }
]);

// q17b-eq
updateQ('y11a-7c-q17b-eq', "\\( \\sqrt{3}x - y - 2 = 0 \\)", ["\\( \\sqrt{3}x + y + 2 = 0 \\)", "\\( \\sqrt{3}x - y + 2 = 0 \\)", "\\( x - \\sqrt{3}y - 2 = 0 \\)"], [
  { explanation: "Use \\( y = mx + b \\) with \\( m = \\sqrt{3} \\) and \\( b = -2 \\).", workingOut: "\\( y = \\sqrt{3}x - 2 \\)", graphData: null },
  { explanation: "Rearrange to general form.", workingOut: "\\( \\sqrt{3}x - y - 2 = 0 \\)", graphData: null }
]);

// q17c-grad
updateQ('y11a-7c-q17c-grad', "\\( \\frac{1}{\\sqrt{3}} \\)", ["\\( \\sqrt{3} \\)", "\\( -\\frac{1}{\\sqrt{3}} \\)", "\\( -\\sqrt{3} \\)"], [
  { explanation: "Use the formula \\( m = \\tan \\alpha \\).", workingOut: "\\( m = \\tan 30^{\\circ} \\)", graphData: null },
  { explanation: "Evaluate \\( \\tan 30^{\\circ} \\).", workingOut: "\\( m = \\frac{1}{\\sqrt{3}} \\)", graphData: null }
]);

// q17c-eq
updateQ('y11a-7c-q17c-eq', "\\( x - \\sqrt{3}y - 3\\sqrt{3} = 0 \\)", ["\\( x + \\sqrt{3}y + 3\\sqrt{3} = 0 \\)", "\\( \\sqrt{3}x - y - 3 = 0 \\)", "\\( x - \\sqrt{3}y + 3\\sqrt{3} = 0 \\)"], [
  { explanation: "Use \\( y = mx + b \\) with \\( m = \\frac{1}{\\sqrt{3}} \\) and \\( b = -3 \\).", workingOut: "\\( y = \\frac{1}{\\sqrt{3}}x - 3 \\)", graphData: null },
  { explanation: "Multiply by \\( \\sqrt{3} \\) to remove the fraction.", workingOut: "\\( \\sqrt{3}y = x - 3\\sqrt{3} \\)", graphData: null },
  { explanation: "Rearrange to general form with \\( A > 0 \\).", workingOut: "\\( x - \\sqrt{3}y - 3\\sqrt{3} = 0 \\)", graphData: null }
]);

// q17d-grad
updateQ('y11a-7c-q17d-grad', "\\( -1 \\)", ["\\( 1 \\)", "\\( -\\sqrt{2} \\)", "\\( -\\frac{1}{\\sqrt{2}} \\)"], [
  { explanation: "Use the formula \\( m = \\tan \\alpha \\).", workingOut: "\\( m = \\tan 135^{\\circ} \\)", graphData: null },
  { explanation: "Evaluate \\( \\tan 135^{\\circ} \\).", workingOut: "\\( m = -1 \\)", graphData: null }
]);

// q17d-eq
updateQ('y11a-7c-q17d-eq', "\\( x + y - 2 = 0 \\)", ["\\( x - y - 2 = 0 \\)", "\\( x + y + 2 = 0 \\)", "\\( x - y + 2 = 0 \\)"], [
  { explanation: "Use \\( y = mx + b \\) with \\( m = -1 \\) and \\( b = 2 \\).", workingOut: "\\( y = -1x + 2 \\)", graphData: null },
  { explanation: "Rearrange to general form with \\( A > 0 \\).", workingOut: "\\( x + y - 2 = 0 \\)", graphData: null }
]);

// q18a
updateQ('y11a-7c-q18a', "\\( 53^{\\circ}, 127^{\\circ} \\)", ["\\( 37^{\\circ}, 143^{\\circ} \\)", "\\( 37^{\\circ}, 127^{\\circ} \\)", "\\( 53^{\\circ}, 143^{\\circ} \\)"], [
  { explanation: "Find the gradient of the first line \\( 3y = 4x \\).", workingOut: "\\( y = \\frac{4}{3}x \\implies m_1 = \\frac{4}{3} \\)", graphData: null },
  { explanation: "Calculate its angle of inclination.", workingOut: "\\( \\tan \\alpha_1 = \\frac{4}{3} \\implies \\alpha_1 \\approx 53.13^{\\circ} \\approx 53^{\\circ} \\)", graphData: null },
  { explanation: "Find the gradient of the second line \\( 3y + 4x = 24 \\).", workingOut: "\\( 3y = -4x + 24 \\implies m_2 = -\\frac{4}{3} \\)", graphData: null },
  { explanation: "Calculate its angle of inclination.", workingOut: "\\( \\tan \\alpha_2 = -\\frac{4}{3} \\implies \\alpha_2 \\approx 180^{\\circ} - 53.13^{\\circ} \\approx 127^{\\circ} \\)", graphData: null }
]);

// q18b
updateQ('y11a-7c-q18b', "Isosceles", ["Equilateral", "Scalene", "Right-angled"], [
  { explanation: "The angles of inclination are \\( 53^{\\circ} \\) and \\( 127^{\\circ} \\).", workingOut: "\\( \\alpha_1 = 53^{\\circ}, \\alpha_2 = 127^{\\circ} \\)", graphData: null },
  { explanation: "The base of the triangle is the x-axis. The interior angles at the base are the acute angles made with the x-axis.", workingOut: "Interior angles: \\( 53^{\\circ} \\) and \\( 180^{\\circ} - 127^{\\circ} = 53^{\\circ} \\)", graphData: null },
  { explanation: "Since two base angles are equal, the triangle is isosceles.", workingOut: "\\text{Isosceles}", graphData: null }
]);

// q19a
updateQ('y11a-7c-q19a', "\\( -\\frac{1}{2} \\)", ["\\( \\frac{1}{2} \\)", "\\( 2 \\)", "\\( -2 \\)"], [
  { explanation: "Find the gradient of \\( \\ell_1: 2x - y + 5 = 0 \\).", workingOut: "\\( y = 2x + 5 \\implies m_1 = 2 \\)", graphData: null },
  { explanation: "Find the gradient of \\( \\ell_2: x + ky + c = 0 \\).", workingOut: "\\( ky = -x - c \\implies y = -\\frac{1}{k}x - \\frac{c}{k} \\implies m_2 = -\\frac{1}{k} \\)", graphData: null },
  { explanation: "If parallel, the gradients are equal.", workingOut: "\\( m_1 = m_2 \\implies 2 = -\\frac{1}{k} \\implies k = -\\frac{1}{2} \\)", graphData: null }
]);

// q19b
updateQ('y11a-7c-q19b', "\\( 2 \\)", ["\\( -2 \\)", "\\( \\frac{1}{2} \\)", "\\( -\\frac{1}{2} \\)"], [
  { explanation: "The gradients are \\( m_1 = 2 \\) and \\( m_2 = -\\frac{1}{k} \\).", workingOut: "\\( m_1 = 2, \\; m_2 = -\\frac{1}{k} \\)", graphData: null },
  { explanation: "If perpendicular, the product of the gradients is -1.", workingOut: "\\( m_1 m_2 = -1 \\implies 2 \\left(-\\frac{1}{k}\\right) = -1 \\)", graphData: null },
  { explanation: "Solve for \\(k\\).", workingOut: "\\( -\\frac{2}{k} = -1 \\implies k = 2 \\)", graphData: null }
]);

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 9 (12 questions).');
