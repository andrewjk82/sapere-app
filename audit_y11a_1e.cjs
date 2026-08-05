const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

const filepath = 'src/constants/seedYear11Ch1EQuestions.js';
const code = fs.readFileSync(filepath, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

let questions = null;
traverse(ast, {
  ExportNamedDeclaration(path) {
    const decl = path.node.declaration;
    if (decl && decl.type === 'VariableDeclaration') {
      for (const declarator of decl.declarations) {
        if (declarator.id.name === 'Y11_CH1E_QUESTIONS') {
          const { start, end } = declarator.init;
          const arrSrc = code.slice(start, end);
          questions = (new Function(`return ${arrSrc}`))();
        }
      }
    }
  }
});

let failedAudit = [];

questions.forEach(q => {
  try {
    const qText = q.question.replace(/\\n/g, ' ').replace(/\\\\\\\(/g, '').replace(/\\\\\\\)/g, '').replace(/\\\\/g, '');
    
    // Look for equations
    const eqRegex = /([a-zA-Z0-9\+\-\*\/\^\s\(\)]+)\s*=\s*([a-zA-Z0-9\+\-\*\/\^\s\(\)]+)/g;
    const matches = [...qText.matchAll(eqRegex)];
    
    if (matches.length === 0) return;
    
    let answerIdx = parseInt(q.answer);
    if (isNaN(answerIdx) && q.a !== undefined) answerIdx = parseInt(q.a);
    if (isNaN(answerIdx)) return;
    
    const optionsArr = q.options || q.opts;
    if (!optionsArr) return;
    
    let correctOpt = optionsArr[answerIdx];
    if (typeof correctOpt === 'object') correctOpt = correctOpt.text;
    
    // We only try to audit if the correct option has "var = val" format
    const varRegex = /([a-zA-Z])\s*=\s*(-?\d+\.?\d*)/g;
    const varMatches = [...correctOpt.matchAll(varRegex)];
    
    if (varMatches.length === 0) return;
    
    let vars = {};
    varMatches.forEach(m => {
      vars[m[1]] = parseFloat(m[2]);
    });
    
    // Check equations
    let allEqsValid = true;
    for (const match of matches) {
      let lhsStr = match[1].trim();
      let rhsStr = match[2].trim();
      
      // extremely simple variable substitution
      lhsStr = lhsStr.replace(/([a-zA-Z])/g, (m) => `(${vars[m] || 0})`);
      lhsStr = lhsStr.replace(/\^/g, '**');
      lhsStr = lhsStr.replace(/(\d)\(/g, '$1*('); // 2(x) -> 2*(x)
      
      rhsStr = rhsStr.replace(/([a-zA-Z])/g, (m) => `(${vars[m] || 0})`);
      rhsStr = rhsStr.replace(/\^/g, '**');
      rhsStr = rhsStr.replace(/(\d)\(/g, '$1*(');
      
      try {
        const lhsVal = eval(lhsStr);
        const rhsVal = eval(rhsStr);
        if (Math.abs(lhsVal - rhsVal) > 0.01) {
           allEqsValid = false;
        }
      } catch(e) {
      }
    }
    
    if (!allEqsValid) {
       failedAudit.push({ id: q.id, question: q.question, answer: correctOpt });
    }
  } catch(e) {
  }
});

console.log(`Audited ${questions.length} questions. Failed mathematically: ${failedAudit.length}`);
if (failedAudit.length > 0) {
  console.log('Sample of failed:');
  console.log(failedAudit.slice(0, 10));
}
