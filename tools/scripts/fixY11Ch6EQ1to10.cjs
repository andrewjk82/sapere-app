const fs = require('fs');

const path = './src/constants/seedYear11Ch6EQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y11_CH6E_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (arrayMatch) {
  let questions = eval(arrayMatch[1]);
  questions = questions.map(q => {
    const idMatch = q.id.match(/^y11a-6e-q([1-9]|10)([a-z_]+)?/);
    if (idMatch) {
      if (q.opts) {
        q.opts = q.opts.map(str => {
          if (!str) return str;
          // Strip existing \( and \)
          let s = str.replace(/\\\\\(/g, '').replace(/\\\\\)/g, '').replace(/\\\(/g, '').replace(/\\\)/g, '');
          s = s.replace(/sqrt\(([^)]+)\)/g, '\\\\sqrt{$1}');
          s = s.replace(/(-?\d+)\/(\d+|\\\\sqrt\{\d+\})/g, '\\\\frac{$1}{$2}');
          s = s.replace(/(-?\d+)\s*\/\s*\(([^)]+)\)/g, '\\\\frac{$1}{$2}');
          // If it was modified and doesn't have wrapper, add it back.
          if (!s.includes('\\\\(')) {
             s = `\\\\(${s}\\\\)`;
          }
          return s;
        });
        if (q.options) {
          q.options = q.opts.map(text => ({ text, imageUrl: null }));
        }
      }
      
      const step1 = {
        explanation: "Identify the given information and what needs to be found from the problem description.",
        workingOut: q.hint ? q.hint : "Identify knowns and unknowns.",
        graphData: null
      };
      
      const step2 = {
        explanation: "Set up the appropriate mathematical or trigonometric equations based on the definitions.",
        workingOut: "Apply standard identities and definitions.",
        graphData: null
      };
      
      let finalWorkingOut = (q.opts && q.opts[q.a]) ? q.opts[q.a] : (q.answer || "");
      const step3 = {
        explanation: "Substitute the known values into the equation, simplify, and evaluate the final result.",
        workingOut: finalWorkingOut,
        graphData: null
      };
      
      q.solutionSteps = [step1, step2, step3];
    }
    return q;
  });
  
  const newContent = `export const Y11_CH6E_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path, newContent, 'utf8');
  console.log("Updated locally.");
} else {
  console.log("Could not find the array.");
}
