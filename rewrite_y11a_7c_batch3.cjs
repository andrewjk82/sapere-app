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

// Update q4a-vert
const q4av = questions.find(q => q.id === 'y11a-7c-q4a-vert');
q4av.type = "multiple_choice";
q4av.options = [ {text: "\\( x = 3 \\)", imageUrl: ""}, {text: "\\( y = 3 \\)", imageUrl: ""}, {text: "\\( x = 4 \\)", imageUrl: ""}, {text: "\\( y = 4 \\)", imageUrl: ""} ];
q4av.answer = 0;
q4av.solution = "\\( x = 3 \\)";
q4av.solutionSteps = [
  { explanation: "A vertical line has the form \\( x = a \\), where \\(a\\) is the x-coordinate of any point on the line.", workingOut: "\\( x = a \\)", graphData: null },
  { explanation: "The x-coordinate of the point \\((3, 4)\\) is 3.", workingOut: "\\( x = 3 \\)", graphData: null }
];
delete q4av.requiresManualGrading;

// Update q4a-horiz
const q4ah = questions.find(q => q.id === 'y11a-7c-q4a-horiz');
q4ah.type = "multiple_choice";
q4ah.options = [ {text: "\\( y = 4 \\)", imageUrl: ""}, {text: "\\( x = 4 \\)", imageUrl: ""}, {text: "\\( y = 3 \\)", imageUrl: ""}, {text: "\\( x = 3 \\)", imageUrl: ""} ];
q4ah.answer = 0;
q4ah.solution = "\\( y = 4 \\)";
q4ah.solutionSteps = [
  { explanation: "A horizontal line has the form \\( y = b \\), where \\(b\\) is the y-coordinate of any point on the line.", workingOut: "\\( y = b \\)", graphData: null },
  { explanation: "The y-coordinate of the point \\((3, 4)\\) is 4.", workingOut: "\\( y = 4 \\)", graphData: null }
];
delete q4ah.requiresManualGrading;

// Update q4b-vert
const q4bv = questions.find(q => q.id === 'y11a-7c-q4b-vert');
q4bv.type = "multiple_choice";
q4bv.options = [ {text: "\\( x = 0 \\)", imageUrl: ""}, {text: "\\( y = 0 \\)", imageUrl: ""}, {text: "\\( x = -2 \\)", imageUrl: ""}, {text: "\\( y = -2 \\)", imageUrl: ""} ];
q4bv.answer = 0;
q4bv.solution = "\\( x = 0 \\)";
q4bv.solutionSteps = [
  { explanation: "A vertical line has the form \\( x = a \\).", workingOut: "\\( x = a \\)", graphData: null },
  { explanation: "The x-coordinate of the point \\((0, -2)\\) is 0.", workingOut: "\\( x = 0 \\)", graphData: null }
];
delete q4bv.requiresManualGrading;

// Update q4b-horiz
const q4bh = questions.find(q => q.id === 'y11a-7c-q4b-horiz');
q4bh.type = "multiple_choice";
q4bh.options = [ {text: "\\( y = -2 \\)", imageUrl: ""}, {text: "\\( x = -2 \\)", imageUrl: ""}, {text: "\\( y = 0 \\)", imageUrl: ""}, {text: "\\( x = 0 \\)", imageUrl: ""} ];
q4bh.answer = 0;
q4bh.solution = "\\( y = -2 \\)";
q4bh.solutionSteps = [
  { explanation: "A horizontal line has the form \\( y = b \\).", workingOut: "\\( y = b \\)", graphData: null },
  { explanation: "The y-coordinate of the point \\((0, -2)\\) is -2.", workingOut: "\\( y = -2 \\)", graphData: null }
];
delete q4bh.requiresManualGrading;

// Update q4c-vert
const q4cv = questions.find(q => q.id === 'y11a-7c-q4c-vert');
q4cv.type = "multiple_choice";
q4cv.options = [ {text: "\\( x = 4 \\)", imageUrl: ""}, {text: "\\( y = 4 \\)", imageUrl: ""}, {text: "\\( x = 0 \\)", imageUrl: ""}, {text: "\\( y = 0 \\)", imageUrl: ""} ];
q4cv.answer = 0;
q4cv.solution = "\\( x = 4 \\)";
q4cv.solutionSteps = [
  { explanation: "A vertical line has the form \\( x = a \\).", workingOut: "\\( x = a \\)", graphData: null },
  { explanation: "The x-coordinate of the point \\((4, 0)\\) is 4.", workingOut: "\\( x = 4 \\)", graphData: null }
];
delete q4cv.requiresManualGrading;

// Update q4c-horiz
const q4ch = questions.find(q => q.id === 'y11a-7c-q4c-horiz');
q4ch.type = "multiple_choice";
q4ch.options = [ {text: "\\( y = 0 \\)", imageUrl: ""}, {text: "\\( x = 0 \\)", imageUrl: ""}, {text: "\\( y = 4 \\)", imageUrl: ""}, {text: "\\( x = 4 \\)", imageUrl: ""} ];
q4ch.answer = 0;
q4ch.solution = "\\( y = 0 \\)";
q4ch.solutionSteps = [
  { explanation: "A horizontal line has the form \\( y = b \\).", workingOut: "\\( y = b \\)", graphData: null },
  { explanation: "The y-coordinate of the point \\((4, 0)\\) is 0.", workingOut: "\\( y = 0 \\)", graphData: null }
];
delete q4ch.requiresManualGrading;

// Update q5a-grad
const q5ag = questions.find(q => q.id === 'y11a-7c-q5a-grad');
q5ag.type = "multiple_choice";
q5ag.options = [ {text: "\\( 3 \\)", imageUrl: ""}, {text: "\\( -5 \\)", imageUrl: ""}, {text: "\\( -3 \\)", imageUrl: ""}, {text: "\\( 5 \\)", imageUrl: ""} ];
q5ag.answer = 0;
q5ag.solution = "\\( 3 \\)";
q5ag.solutionSteps = [
  { explanation: "The equation is in the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = 3 \\)", graphData: null }
];
delete q5ag.requiresManualGrading;

// Update q5a-yint
const q5ay = questions.find(q => q.id === 'y11a-7c-q5a-yint');
q5ay.type = "multiple_choice";
q5ay.options = [ {text: "\\( -5 \\)", imageUrl: ""}, {text: "\\( 3 \\)", imageUrl: ""}, {text: "\\( 5 \\)", imageUrl: ""}, {text: "\\( -3 \\)", imageUrl: ""} ];
q5ay.answer = 0;
q5ay.solution = "\\( -5 \\)";
q5ay.solutionSteps = [
  { explanation: "The equation is in the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "The y-intercept \\(b\\) is the constant term.", workingOut: "\\( b = -5 \\)", graphData: null }
];
delete q5ay.requiresManualGrading;

// Update q5b-grad
const q5bg = questions.find(q => q.id === 'y11a-7c-q5b-grad');
q5bg.type = "multiple_choice";
q5bg.options = [ {text: "\\( \\frac{1}{4} \\)", imageUrl: ""}, {text: "\\( -2 \\)", imageUrl: ""}, {text: "\\( -\\frac{1}{4} \\)", imageUrl: ""}, {text: "\\( 2 \\)", imageUrl: ""} ];
q5bg.answer = 0;
q5bg.solution = "\\( \\frac{1}{4} \\)";
q5bg.solutionSteps = [
  { explanation: "The equation is in the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "The gradient \\(m\\) is the coefficient of \\(x\\).", workingOut: "\\( m = \\frac{1}{4} \\)", graphData: null }
];
delete q5bg.requiresManualGrading;

// Update q5b-yint
const q5by = questions.find(q => q.id === 'y11a-7c-q5b-yint');
q5by.type = "multiple_choice";
q5by.options = [ {text: "\\( -2 \\)", imageUrl: ""}, {text: "\\( \\frac{1}{4} \\)", imageUrl: ""}, {text: "\\( 2 \\)", imageUrl: ""}, {text: "\\( -\\frac{1}{4} \\)", imageUrl: ""} ];
q5by.answer = 0;
q5by.solution = "\\( -2 \\)";
q5by.solutionSteps = [
  { explanation: "The equation is in the gradient-intercept form \\( y = mx + b \\).", workingOut: "\\( y = mx + b \\)", graphData: null },
  { explanation: "The y-intercept \\(b\\) is the constant term.", workingOut: "\\( b = -2 \\)", graphData: null }
];
delete q5by.requiresManualGrading;

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated batch 3 (10 questions).');
