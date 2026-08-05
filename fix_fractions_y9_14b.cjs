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
    const correctOpt = q.opts[q.a];
    // Find variables and values in correct option, e.g., \(x=2, y=3\)
    const regex = /([a-zA-Z])\s*=\s*(-?\d+).*?([a-zA-Z])\s*=\s*(-?\d+)/;
    const match = correctOpt.match(regex);
    if (!match) {
        console.log("Could not parse correct option for", q.id, correctOpt);
        return;
    }
    const var1 = match[1];
    const val1 = parseInt(match[2], 10);
    const var2 = match[3];
    const val2 = parseInt(match[4], 10);

    q.opts = q.opts.map((opt, idx) => {
      if (idx !== q.a && (!opt.includes(',') || !opt.includes('='))) {
        // Bad option found! Generate a new one based on correct option
        // Strategy: 
        // 1. Swap values: var1=val2, var2=val1
        // 2. Negate one: var1=-val1, var2=val2
        // 3. Negate both: var1=-val1, var2=-val2
        let newOptStr = `\\(${var1}=${val2}, ${var2}=${val1}\\)`;
        if (q.opts.includes(newOptStr) || (val1 === val2)) {
            newOptStr = `\\(${var1}=${-val1}, ${var2}=${val2}\\)`;
        }
        if (q.opts.includes(newOptStr) || (-val1 === val1)) {
            newOptStr = `\\(${var1}=${val1}, ${var2}=${-val2}\\)`;
        }
        if (q.opts.includes(newOptStr)) {
            newOptStr = `\\(${var1}=${-val1}, ${var2}=${-val2}\\)`;
        }
        if (q.opts.includes(newOptStr)) {
            newOptStr = `\\(${var1}=${val1 + 1}, ${var2}=${val2 - 1}\\)`;
        }

        console.log(`Fixing ${q.id} option ${idx}: ${opt} -> ${newOptStr}`);
        changes++;
        return newOptStr;
      }
      return opt;
    });
  }
});

console.log(`Made ${changes} fraction replacements in options.`);

const output = `export const Y9_CH14B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

