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

let changes = 0;

questions.forEach(q => {
  if (q.opts) {
    q.opts = q.opts.map(opt => {
      let newOpt = opt;
      // Handle y = a + b or y = a - b
      const regexY = /y\s*=\s*(-?\d+)\s*([\+\-])\s*(\d+)/g;
      newOpt = newOpt.replace(regexY, (match, a, op, b) => {
        const valA = parseInt(a, 10);
        const valB = parseInt(b, 10);
        const res = op === '+' ? valA + valB : valA - valB;
        changes++;
        return `y=${res}`;
      });

      // Handle x = a + b or x = a - b
      const regexX = /x\s*=\s*(-?\d+)\s*([\+\-])\s*(\d+)/g;
      newOpt = newOpt.replace(regexX, (match, a, op, b) => {
        const valA = parseInt(a, 10);
        const valB = parseInt(b, 10);
        const res = op === '+' ? valA + valB : valA - valB;
        changes++;
        return `x=${res}`;
      });
      
      // Handle -x = a
      const regexMinusX = /-x\s*=\s*(-?\d+)/g;
      newOpt = newOpt.replace(regexMinusX, (match, a) => {
         const valA = parseInt(a, 10);
         changes++;
         return `x=${-valA}`;
      });

      return newOpt;
    });
  }
});

console.log(`Made ${changes} string replacements in options.`);

const output = `export const Y9_CH14B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

