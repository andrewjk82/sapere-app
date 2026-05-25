const fs = require('fs');

let content = fs.readFileSync('src/constants/seedYear11Ext1Ch1AQuestions.js', 'utf8');
content = content.replace('export const Y11_EXT1_CH1A_QUESTIONS =', 'module.exports =');
fs.writeFileSync('temp_1A.cjs', content);

const questions = require('./temp_1A.cjs');

questions.forEach(q => {
  const text = q.question.replace(/Expand and simplify:\\n\\n|Expand:\\n\\n|Similarly, prove the special expansion:\\n\\n|Use the special expansions to expand:\\n\\n|Subtract.*from.*|Prove the identity:\\n\\n|If.*find.*|Suppose that.*|By writing.*|Use the special expansions to find.*/, '').trim().replace(/\$/g, '');
  
  if (q.id.match(/q1[a-r]/)) {
    // Expand a(b+c) -> format: outer(inner)
    const match = text.match(/^(-?[0-9a-zA-Z]+)\((.+)\)$/);
    if (match) {
      const outer = match[1];
      const inner = match[2];
      // split inner by + or - keeping the sign
      const terms = inner.replace(/([+-])/g, '|$1').split('|').map(s=>s.trim()).filter(s=>s);
      
      const step1 = terms.map(t => {
        let sign = '';
        let val = t;
        if (t.startsWith('+') || t.startsWith('-')) {
          sign = t[0] + ' ';
          val = t.substring(1).trim();
        }
        return sign + `${outer}(${val})`;
      }).join(' ');

      q.solutionSteps = [
        { explanation: `Distribute the outer term '${outer}' to each term inside the bracket.`, workingOut: step1 },
        { explanation: `Multiply each term and determine the correct sign.`, workingOut: q.a }
      ];
    }
  } else if (q.id.match(/q2[a-r]/)) {
    // Expand and simplify
    q.solutionSteps = [
      { explanation: `First, use the distributive property to expand the brackets.`, workingOut: `\\text{Expand the brackets}` },
      { explanation: `Write down the expanded expression along with the remaining terms.`, workingOut: `\\text{Write the full expanded expression}` },
      { explanation: `Group and combine like terms to simplify the expression completely.`, workingOut: q.a }
    ];
  } else if (q.id.match(/q3[a-r]/)) {
    // (a+b)(c+d)
    const match = text.match(/^\((.+?)\)\((.+?)\)$/);
    if(match) {
      const left = match[1];
      const right = match[2];
      q.solutionSteps = [
        { explanation: `Multiply each term in the first bracket by each term in the second bracket (FOIL method).`, workingOut: `(${left}) \\times (${right})` },
        { explanation: `Expand all 4 terms.`, workingOut: `\\text{List the 4 expanded terms}` },
        { explanation: `Add or subtract the like terms in the middle to find the final simplified expression.`, workingOut: q.a }
      ];
    }
  } else if (q.id.includes('q4') || q.id.includes('q5')) {
    q.solutionSteps = [
      { explanation: `Write the given expression as a product of two binomials.`, workingOut: `(${text.split('^')[0].replace('(','')})(${text.split('^')[0].replace('(','')})` },
      { explanation: `Use the distributive property to expand all 4 terms.`, workingOut: `\\text{Expand...}` },
      { explanation: `Combine the like terms to prove the identity.`, workingOut: q.a }
    ];
  } else if (q.id.match(/q6[a-r]|q7[a-r]/)) {
    q.solutionSteps = [
      { explanation: `Recognize this as a perfect square $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ or a difference of two squares $(a-b)(a+b)=a^2-b^2$.`, workingOut: text },
      { explanation: `Substitute the terms into the appropriate expansion formula.`, workingOut: `\\text{Apply the formula}` },
      { explanation: `Calculate the constants and combine like terms for the final answer.`, workingOut: q.a }
    ];
  } else {
    q.solutionSteps = [
      { explanation: `Analyze the form of the expression and prepare to expand the brackets.`, workingOut: text },
      { explanation: `Expand the expression, paying careful attention to negative signs.`, workingOut: `\\text{Perform the expansion}` },
      { explanation: `Gather like terms (terms with the same variables and powers) and simplify the expression to its final form.`, workingOut: q.a }
    ];
  }
});

fs.writeFileSync('src/constants/seedYear11Ext1Ch1AQuestions.js', 'export const Y11_EXT1_CH1A_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n');
fs.unlinkSync('temp_1A.cjs');
