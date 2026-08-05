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

// Update q2b-xint
const q2bx = questions.find(q => q.id === 'y11a-7c-q2b-xint');
q2bx.type = "multiple_choice";
q2bx.options = [ {text: "\\( x = 3 \\)", imageUrl: ""}, {text: "\\( x = -3 \\)", imageUrl: ""}, {text: "\\( x = 9 \\)", imageUrl: ""}, {text: "\\( x = -9 \\)", imageUrl: ""} ];
q2bx.answer = 0;
q2bx.solution = "\\( x = 3 \\)";
q2bx.solutionSteps = [
  { explanation: "To find the x-intercept, set \\(y = 0\\).", workingOut: "\\( 0 = 3x - 9 \\)", graphData: null },
  { explanation: "Rearrange to solve for x.", workingOut: "\\( 3x = 9 \\)", graphData: null },
  { explanation: "Divide by 3.", workingOut: "\\( x = 3 \\)", graphData: null }
];
delete q2bx.requiresManualGrading;

// Update q2b-yint
const q2by = questions.find(q => q.id === 'y11a-7c-q2b-yint');
q2by.type = "multiple_choice";
q2by.options = [ {text: "\\( y = -9 \\)", imageUrl: ""}, {text: "\\( y = 9 \\)", imageUrl: ""}, {text: "\\( y = -3 \\)", imageUrl: ""}, {text: "\\( y = 3 \\)", imageUrl: ""} ];
q2by.answer = 0;
q2by.solution = "\\( y = -9 \\)";
q2by.solutionSteps = [
  { explanation: "To find the y-intercept, set \\(x = 0\\).", workingOut: "\\( y = 3(0) - 9 \\)", graphData: null },
  { explanation: "Simplify.", workingOut: "\\( y = -9 \\)", graphData: null }
];
delete q2by.requiresManualGrading;

// Update q2c-xint
const q2cx = questions.find(q => q.id === 'y11a-7c-q2c-xint');
q2cx.type = "multiple_choice";
q2cx.options = [ {text: "\\( x = 6 \\)", imageUrl: ""}, {text: "\\( x = -6 \\)", imageUrl: ""}, {text: "\\( x = 2 \\)", imageUrl: ""}, {text: "\\( x = -2 \\)", imageUrl: ""} ];
q2cx.answer = 0;
q2cx.solution = "\\( x = 6 \\)";
q2cx.solutionSteps = [
  { explanation: "To find the x-intercept, set \\(y = 0\\).", workingOut: "\\( x - 3(0) = 6 \\)", graphData: null },
  { explanation: "Simplify.", workingOut: "\\( x = 6 \\)", graphData: null }
];
delete q2cx.requiresManualGrading;

// Update q2c-yint
const q2cy = questions.find(q => q.id === 'y11a-7c-q2c-yint');
q2cy.type = "multiple_choice";
q2cy.options = [ {text: "\\( y = -2 \\)", imageUrl: ""}, {text: "\\( y = 2 \\)", imageUrl: ""}, {text: "\\( y = -6 \\)", imageUrl: ""}, {text: "\\( y = 6 \\)", imageUrl: ""} ];
q2cy.answer = 0;
q2cy.solution = "\\( y = -2 \\)";
q2cy.solutionSteps = [
  { explanation: "To find the y-intercept, set \\(x = 0\\).", workingOut: "\\( 0 - 3y = 6 \\)", graphData: null },
  { explanation: "Divide by -3.", workingOut: "\\( y = -2 \\)", graphData: null }
];
delete q2cy.requiresManualGrading;

// Update q3
const q3 = questions.find(q => q.id === 'y11a-7c-q3');
q3.type = "multiple_choice";
q3.question = "Which of the following sets contains three distinct points that all lie on the line \\(x + 2y = 12\\)?";
q3.options = [
  {text: "\\( (12, 0), (0, 6), (2, 5) \\)", imageUrl: ""},
  {text: "\\( (-12, 0), (0, -6), (-2, 5) \\)", imageUrl: ""},
  {text: "\\( (0, 12), (6, 0), (5, 2) \\)", imageUrl: ""},
  {text: "\\( (12, 0), (0, 6), (1, 10) \\)", imageUrl: ""}
];
q3.answer = 0;
q3.solution = "\\( (12, 0), (0, 6), (2, 5) \\)";
q3.solutionSteps = [
  { explanation: "Test the point \\((12, 0)\\) by substituting \\(x = 12\\) and \\(y = 0\\).", workingOut: "\\( 12 + 2(0) = 12 \\implies \\text{Valid} \\)", graphData: null },
  { explanation: "Test the point \\((0, 6)\\) by substituting \\(x = 0\\) and \\(y = 6\\).", workingOut: "\\( 0 + 2(6) = 12 \\implies \\text{Valid} \\)", graphData: null },
  { explanation: "Test the point \\((2, 5)\\) by substituting \\(x = 2\\) and \\(y = 5\\).", workingOut: "\\( 2 + 2(5) = 12 \\implies \\text{Valid} \\)", graphData: null },
  { explanation: "All three points satisfy the equation.", workingOut: "", graphData: null }
];
delete q3.requiresManualGrading;

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 2.');
