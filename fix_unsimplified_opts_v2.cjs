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
      // Handle anything like y = a + b, x = a + b, a = c + d, b = c + d
      const regexMath = /([a-zA-Z])\s*=\s*(-?\d+)\s*([\+\-])\s*(\d+)/g;
      newOpt = newOpt.replace(regexMath, (match, variable, a, op, b) => {
        const valA = parseInt(a, 10);
        const valB = parseInt(b, 10);
        const res = op === '+' ? valA + valB : valA - valB;
        changes++;
        return `${variable}=${res}`;
      });
      
      // Handle -x = a or -y = a or -a = b
      const regexMinusVar = /-([a-zA-Z])\s*=\s*(-?\d+)/g;
      newOpt = newOpt.replace(regexMinusVar, (match, variable, a) => {
         const valA = parseInt(a, 10);
         changes++;
         return `${variable}=${-valA}`;
      });

      return newOpt;
    });
  }
});

console.log(`Made ${changes} string replacements in options.`);

const output = `export const Y9_CH14B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

