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
    const seen = new Set();
    q.opts = q.opts.map((opt, idx) => {
      let newOpt = opt;
      while (seen.has(newOpt)) {
         // modify it slightly
         const regex = /([a-zA-Z])\s*=\s*(-?\d+).*?([a-zA-Z])\s*=\s*(-?\d+)/;
         const match = newOpt.match(regex);
         if (match) {
             const var1 = match[1];
             const val1 = parseInt(match[2], 10);
             const var2 = match[3];
             const val2 = parseInt(match[4], 10);
             newOpt = `\\(${var1}=${val1 + 1}, ${var2}=${val2 - 1}\\)`;
         } else {
             newOpt = newOpt + ' '; // just pad with space if regex fails
         }
         console.log(`Fixing duplicate in ${q.id}: ${opt} -> ${newOpt}`);
         changes++;
      }
      seen.add(newOpt);
      return newOpt;
    });
  }
});

if (changes > 0) {
  const output = `export const Y9_CH14B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log(`Fixed ${changes} duplicates.`);
} else {
  console.log('No duplicates found.');
}
