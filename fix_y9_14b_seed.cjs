const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

const filepath = 'src/constants/seedYear9Ch14BQuestions.js';
const code = fs.readFileSync(filepath, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

let questions = null;
traverse(ast, {
  ExportNamedDeclaration(path) {
    const decl = path.node.declaration;
    if (decl && decl.type === 'VariableDeclaration') {
      for (const declarator of decl.declarations) {
        if (declarator.id.name === 'Y9_CH14B_QUESTIONS') {
          const { start, end } = declarator.init;
          const arrSrc = code.slice(start, end);
          questions = (new Function(`return ${arrSrc}`))();
        }
      }
    }
  }
});

questions.forEach(q => {
  if (q.solution) {
    const lines = q.solution.split('\n').filter(l => l.trim().length > 0);
    q.solutionSteps = lines.map(line => {
      // Basic heuristic: if the line contains a lot of math, it goes to workingOut
      if (line.includes('\\(') || line.includes('=')) {
        return { explanation: '', workingOut: line, graphData: null };
      }
      return { explanation: line, workingOut: '', graphData: null };
    });
  }
});

const output = `export const Y9_CH14B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Fixed seedYear9Ch14BQuestions.js placeholders!');
