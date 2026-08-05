const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

const filepath = 'src/constants/seedYear9Ch16DQuestions.js';
const code = fs.readFileSync(filepath, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

let questions = null;
traverse(ast, {
  ExportNamedDeclaration(path) {
    const decl = path.node.declaration;
    if (decl && decl.type === 'VariableDeclaration') {
      for (const declarator of decl.declarations) {
        if (declarator.id.name === 'Y9_CH16D_QUESTIONS') {
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

// Q1a
updateQ('y9-16d-q1a', "\\( 168 \\text{ cm}^3 \\)", ["\\( 34 \\text{ cm}^3 \\)", "\\( 84 \\text{ cm}^3 \\)", "\\( 1008 \\text{ cm}^3 \\)"], [
  { explanation: "Identify the formula for the volume of a prism.", workingOut: "\\( V = A \\times h \\)", graphData: null },
  { explanation: "Substitute the given area \\( A = 28 \\) and height \\( h = 6 \\).", workingOut: "\\( V = 28 \\times 6 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 168 \\text{ cm}^3 \\)", graphData: null }
]);

// Q1b
updateQ('y9-16d-q1b', "\\( 315 \\text{ cm}^3 \\)", ["\\( 44 \\text{ cm}^3 \\)", "\\( 157.5 \\text{ cm}^3 \\)", "\\( 2835 \\text{ cm}^3 \\)"], [
  { explanation: "Identify the formula for the volume of a prism.", workingOut: "\\( V = A \\times d \\)", graphData: null },
  { explanation: "Substitute the given area \\( A = 35 \\) and depth \\( d = 9 \\).", workingOut: "\\( V = 35 \\times 9 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 315 \\text{ cm}^3 \\)", graphData: null }
]);

// Q1c
updateQ('y9-16d-q1c', "\\( 264 \\text{ cm}^3 \\)", ["\\( 132 \\text{ cm}^3 \\)", "\\( 34 \\text{ cm}^3 \\)", "\\( 3168 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of any prism is its cross-sectional area multiplied by its length.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "Substitute the area of the triangular face \\( A = 22 \\) and length \\( l = 12 \\).", workingOut: "\\( V = 22 \\times 12 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 264 \\text{ cm}^3 \\)", graphData: null }
]);

// Q1d
updateQ('y9-16d-q1d', "\\( 280 \\text{ cm}^3 \\)", ["\\( 34 \\text{ cm}^3 \\)", "\\( 140 \\text{ cm}^3 \\)", "\\( 560 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a solid with a uniform cross-section is the area times the length.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "Substitute the given area \\( A = 14 \\) and length \\( l = 20 \\).", workingOut: "\\( V = 14 \\times 20 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 280 \\text{ cm}^3 \\)", graphData: null }
]);

// Q1e
updateQ('y9-16d-q1e', "\\( 680 \\text{ cm}^3 \\)", ["\\( 93 \\text{ cm}^3 \\)", "\\( 340 \\text{ cm}^3 \\)", "\\( 5440 \\text{ cm}^3 \\)"], [
  { explanation: "A cylinder is a prism with a circular cross-section. Use the volume formula.", workingOut: "\\( V = A \\times h \\)", graphData: null },
  { explanation: "Substitute the area of the circular face \\( A = 85 \\) and height \\( h = 8 \\).", workingOut: "\\( V = 85 \\times 8 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 680 \\text{ cm}^3 \\)", graphData: null }
]);

// Q1f
updateQ('y9-16d-q1f', "\\( 480 \\text{ cm}^3 \\)", ["\\( 240 \\text{ cm}^3 \\)", "\\( 46 \\text{ cm}^3 \\)", "\\( 960 \\text{ cm}^3 \\)"], [
  { explanation: "Even for a half-cylinder, the volume is the cross-sectional area times the length.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "Substitute the area of the semi-circular face \\( A = 30 \\) and length \\( l = 16 \\).", workingOut: "\\( V = 30 \\times 16 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 480 \\text{ cm}^3 \\)", graphData: null }
]);

// Q2a
updateQ('y9-16d-q2a', "\\( a^3 \\)", ["\\( 3a \\)", "\\( 6a^2 \\)", "\\( a^2 \\)"], [
  { explanation: "The volume of a rectangular prism is length \\(\\times\\) width \\(\\times\\) height.", workingOut: "\\( V = l \\times w \\times h \\)", graphData: null },
  { explanation: "For a cube, all sides are equal. Substitute \\( a \\) for all dimensions.", workingOut: "\\( V = a \\times a \\times a \\)", graphData: null },
  { explanation: "Simplify the expression.", workingOut: "\\( V = a^3 \\)", graphData: null }
]);

// Q2b
updateQ('y9-16d-q2b', "\\( abc \\)", ["\\( a + b + c \\)", "\\( 2(ab + bc + ca) \\)", "\\( a^2bc \\)"], [
  { explanation: "The volume of a rectangular prism is the product of its length, width, and height.", workingOut: "\\( V = l \\times w \\times h \\)", graphData: null },
  { explanation: "Substitute the pronumerals \\( a \\), \\( b \\), and \\( c \\).", workingOut: "\\( V = a \\times b \\times c \\)", graphData: null },
  { explanation: "Write the algebraic expression.", workingOut: "\\( V = abc \\)", graphData: null }
]);

// Q2c
updateQ('y9-16d-q2c', "\\( \\pi a^2 b \\)", ["\\( 2\\pi a b \\)", "\\( \\pi a b^2 \\)", "\\( 2\\pi a^2 b \\)"], [
  { explanation: "The volume of a cylinder is the area of its circular base times its height.", workingOut: "\\( V = A \\times h \\)", graphData: null },
  { explanation: "The area of a circle with radius \\( a \\) is \\( \\pi a^2 \\).", workingOut: "\\( A = \\pi a^2 \\)", graphData: null },
  { explanation: "Substitute the area and the height \\( b \\) into the volume formula.", workingOut: "\\( V = \\pi a^2 \\times b = \\pi a^2 b \\)", graphData: null }
]);

// Q3a
updateQ('y9-16d-q3a', "\\( 840 \\text{ cm}^3 \\)", ["\\( 29 \\text{ cm}^3 \\)", "\\( 120 \\text{ cm}^3 \\)", "\\( 548 \\text{ cm}^3 \\)"], [
  { explanation: "Identify the formula for the volume of a rectangular prism.", workingOut: "\\( V = l \\times w \\times h \\)", graphData: null },
  { explanation: "Substitute the given dimensions.", workingOut: "\\( V = 12 \\times 10 \\times 7 \\)", graphData: null },
  { explanation: "Calculate the volume.", workingOut: "\\( V = 840 \\text{ cm}^3 \\)", graphData: null }
]);

// Q3b
updateQ('y9-16d-q3b', "\\( 512 \\text{ cm}^3 \\)", ["\\( 24 \\text{ cm}^3 \\)", "\\( 384 \\text{ cm}^3 \\)", "\\( 64 \\text{ cm}^3 \\)"], [
  { explanation: "Identify the formula for the volume of a cube.", workingOut: "\\( V = s^3 \\)", graphData: null },
  { explanation: "Substitute the side length \\( s = 8 \\).", workingOut: "\\( V = 8^3 \\)", graphData: null },
  { explanation: "Calculate the volume.", workingOut: "\\( V = 8 \\times 8 \\times 8 = 512 \\text{ cm}^3 \\)", graphData: null }
]);

// Q3c
updateQ('y9-16d-q3c', "\\( 288 \\text{ cm}^3 \\)", ["\\( 576 \\text{ cm}^3 \\)", "\\( 144 \\text{ cm}^3 \\)", "\\( 26 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a triangular prism is the area of the triangular base multiplied by the length of the prism.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "First, calculate the area of the triangular cross-section.", workingOut: "\\( A = \\frac{1}{2} \\times b \\times h = \\frac{1}{2} \\times 8 \\times 6 = 24 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Now, multiply the area by the length of the prism (12 cm).", workingOut: "\\( V = 24 \\times 12 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 288 \\text{ cm}^3 \\)", graphData: null }
]);


const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Successfully updated batch 1 in local file.');
