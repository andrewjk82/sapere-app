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
        if (declarator.id.name.includes('Y11_CH7C_QUESTIONS')) {
          const { start, end } = declarator.init;
          const arrSrc = code.slice(start, end);
          questions = (new Function(`return ${arrSrc}`))();
        }
      }
    }
  }
});

// Update q1a
const q1a = questions.find(q => q.id === 'y11a-7c-q1a');
q1a.type = "multiple_choice";
q1a.question = "Determine, by substitution, whether the point \\(A(2, -3)\\) lies on the line \\(y = 3x - 9\\).";
q1a.options = [ {text: "Yes", imageUrl: ""}, {text: "No", imageUrl: ""} ];
q1a.answer = 0; // "Yes"
q1a.solution = "Yes";
q1a.solutionSteps = [
  { explanation: "Substitute the coordinates of \\(A(2, -3)\\) into the right hand side (RHS) of the equation.", workingOut: "\\( \\text{RHS} = 3(2) - 9 \\)", graphData: null },
  { explanation: "Evaluate the RHS.", workingOut: "\\( \\text{RHS} = 6 - 9 = -3 \\)", graphData: null },
  { explanation: "Compare with the LHS (y-coordinate).", workingOut: "\\( \\text{LHS} = -3 \\)", graphData: null },
  { explanation: "Since LHS = RHS, the point lies on the line.", workingOut: "\\( -3 = -3 \\implies \\text{Yes} \\)", graphData: null }
];
delete q1a.requiresManualGrading;

// Update q1b
const q1b = questions.find(q => q.id === 'y11a-7c-q1b');
q1b.type = "multiple_choice";
q1b.question = "Determine, by substitution, whether the point \\(A(2, -3)\\) lies on the line \\(5x + 3y - 1 = 0\\).";
q1b.options = [ {text: "Yes", imageUrl: ""}, {text: "No", imageUrl: ""} ];
q1b.answer = 0; // "Yes"
q1b.solution = "Yes";
q1b.solutionSteps = [
  { explanation: "Substitute the coordinates of \\(A(2, -3)\\) into the left hand side (LHS) of the equation.", workingOut: "\\( \\text{LHS} = 5(2) + 3(-3) - 1 \\)", graphData: null },
  { explanation: "Evaluate the LHS.", workingOut: "\\( \\text{LHS} = 10 - 9 - 1 = 0 \\)", graphData: null },
  { explanation: "Compare with the RHS.", workingOut: "\\( \\text{RHS} = 0 \\)", graphData: null },
  { explanation: "Since LHS = RHS, the point lies on the line.", workingOut: "\\( 0 = 0 \\implies \\text{Yes} \\)", graphData: null }
];
delete q1b.requiresManualGrading;

// Update q1c
const q1c = questions.find(q => q.id === 'y11a-7c-q1c');
q1c.type = "multiple_choice";
q1c.question = "Determine, by substitution, whether the point \\(A(2, -3)\\) lies on the line \\(x = 4\\).";
q1c.options = [ {text: "Yes", imageUrl: ""}, {text: "No", imageUrl: ""} ];
q1c.answer = 1; // "No"
q1c.solution = "No";
q1c.solutionSteps = [
  { explanation: "The equation of the line is a vertical line \\(x = 4\\).", workingOut: "\\( x = 4 \\)", graphData: null },
  { explanation: "The x-coordinate of point \\(A(2, -3)\\) is 2.", workingOut: "\\( x = 2 \\)", graphData: null },
  { explanation: "Compare the x-coordinates.", workingOut: "\\( 2 \\neq 4 \\)", graphData: null },
  { explanation: "Since they are not equal, the point does not lie on the line.", workingOut: "\\( \\text{No} \\)", graphData: null }
];
delete q1c.requiresManualGrading;

// Update q2a-xint
const q2ax = questions.find(q => q.id === 'y11a-7c-q2a-xint');
q2ax.type = "multiple_choice";
q2ax.question = "Find the x-intercept of the line \\(2x + 5y = 10\\).";
q2ax.options = [ {text: "\\( x = 5 \\)", imageUrl: ""}, {text: "\\( x = 2 \\)", imageUrl: ""}, {text: "\\( x = -5 \\)", imageUrl: ""}, {text: "\\( x = -2 \\)", imageUrl: ""} ];
q2ax.answer = 0;
q2ax.solution = "\\( x = 5 \\)";
q2ax.solutionSteps = [
  { explanation: "To find the x-intercept, set \\(y = 0\\).", workingOut: "\\( 2x + 5(0) = 10 \\)", graphData: null },
  { explanation: "Simplify the equation.", workingOut: "\\( 2x = 10 \\)", graphData: null },
  { explanation: "Solve for \\(x\\).", workingOut: "\\( x = 5 \\)", graphData: null }
];
delete q2ax.requiresManualGrading;

// Update q2a-yint
const q2ay = questions.find(q => q.id === 'y11a-7c-q2a-yint');
q2ay.type = "multiple_choice";
q2ay.question = "Find the y-intercept of the line \\(2x + 5y = 10\\).";
q2ay.options = [ {text: "\\( y = 5 \\)", imageUrl: ""}, {text: "\\( y = 2 \\)", imageUrl: ""}, {text: "\\( y = -5 \\)", imageUrl: ""}, {text: "\\( y = -2 \\)", imageUrl: ""} ];
q2ay.answer = 1;
q2ay.solution = "\\( y = 2 \\)";
q2ay.solutionSteps = [
  { explanation: "To find the y-intercept, set \\(x = 0\\).", workingOut: "\\( 2(0) + 5y = 10 \\)", graphData: null },
  { explanation: "Simplify the equation.", workingOut: "\\( 5y = 10 \\)", graphData: null },
  { explanation: "Solve for \\(y\\).", workingOut: "\\( y = 2 \\)", graphData: null }
];
delete q2ay.requiresManualGrading;

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

console.log('Successfully updated the first 5 questions.');
