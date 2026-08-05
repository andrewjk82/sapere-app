import fs from 'fs';
import path from 'path';

const filepath = path.resolve('src/constants/seedYear11Ch6FQuestions.js');
let content = fs.readFileSync(filepath, 'utf8');

// We will parse the file using our standard approach: import it, mutate the objects, then write it back
// But to write it back properly formatted, we'll stringify the array and construct the file content.

async function fix() {
  const { Y11_CH6F_QUESTIONS } = await import('../../src/constants/seedYear11Ch6FQuestions.js');
  
  const generateDistractors = (stem, correctAns) => {
    // Basic distractor logic for Trig Identities
    const distractors = new Set();
    const ops = ['\\sin', '\\cos', '\\tan', '\\csc', '\\sec', '\\cot'];
    
    // Add variations like negative sign, squared, etc.
    let base = correctAns;
    if (!base.startsWith('\\(')) base = `\\(${base}\\)`; // Ensure LaTeX wrapper
    
    if (correctAns.includes('^2')) {
       // It's a squared answer
       const match = correctAns.match(/([a-z]+)\\^2\\s*([a-zA-Z\\theta]+)/);
       if (match) {
         const [, func, arg] = match;
         if (func === 'sin') { distractors.add(`\\(\\cos^2 ${arg}\\)`); distractors.add(`\\(\\sec^2 ${arg}\\)`); }
         if (func === 'cos') { distractors.add(`\\(\\sin^2 ${arg}\\)`); distractors.add(`\\(\\csc^2 ${arg}\\)`); }
         if (func === 'tan') { distractors.add(`\\(\\cot^2 ${arg}\\)`); distractors.add(`\\(\\sec^2 ${arg}\\)`); }
         if (func === 'cot') { distractors.add(`\\(\\tan^2 ${arg}\\)`); distractors.add(`\\(\\csc^2 ${arg}\\)`); }
         if (func === 'sec') { distractors.add(`\\(\\csc^2 ${arg}\\)`); distractors.add(`\\(\\tan^2 ${arg}\\)`); }
         if (func === 'csc') { distractors.add(`\\(\\sec^2 ${arg}\\)`); distractors.add(`\\(\\cot^2 ${arg}\\)`); }
       }
    } else {
       // Linear answer
       const match = correctAns.match(/([a-z]+)\\s*([a-zA-Z\\theta]+)/);
       if (match) {
         const [, func, arg] = match;
         distractors.add(`\\(-\\${func} ${arg}\\)`);
         if (func === 'sin') { distractors.add(`\\(\\cos ${arg}\\)`); distractors.add(`\\(\\csc ${arg}\\)`); }
         if (func === 'cos') { distractors.add(`\\(\\sin ${arg}\\)`); distractors.add(`\\(\\sec ${arg}\\)`); }
         if (func === 'tan') { distractors.add(`\\(\\cot ${arg}\\)`); distractors.add(`\\(-\\cot ${arg}\\)`); }
         if (func === 'cot') { distractors.add(`\\(\\tan ${arg}\\)`); distractors.add(`\\(-\\tan ${arg}\\)`); }
       }
    }
    
    // Fallbacks if we don't have enough
    const all = ['\\(\\sin x\\)', '\\(\\cos x\\)', '\\(\\tan x\\)', '\\(\\sec^2 x\\)', '\\(\\csc^2 x\\)', '\\(1\\)'];
    for (const a of all) distractors.add(a);
    
    const arr = Array.from(distractors).filter(d => d !== base && d !== correctAns);
    return [base, arr[0], arr[1], arr[2]];
  };

  const generateSteps = (stem, answer) => {
    let step1 = "\\text{First, identify the trigonometric expressions involved and recall the relevant identities.}";
    let step2 = "\\text{Apply the appropriate reciprocal, ratio, or Pythagorean identity.}";
    let step3 = "\\text{Simplify the resulting expression algebraically.}";
    
    if (stem.includes('complementary')) {
       step1 = "\\text{Identify the complementary angle structure } (90^{\\circ} - \\theta).";
       step2 = "\\text{Recall the complementary identities: } \\sin(90^{\\circ} - \\theta) = \\cos \\theta \\text{, etc.}";
       step3 = "\\text{Substitute the complementary identity to find the simplified form.}";
    } else if (stem.includes('Pythagorean')) {
       step1 = "\\text{Identify the Pythagorean structure, looking for squared trigonometric terms.}";
       step2 = "\\text{Recall the relevant Pythagorean identity, such as } \\sin^2 \\theta + \\cos^2 \\theta = 1.";
       step3 = "\\text{Rearrange or substitute the identity to simplify the given expression.}";
    } else if (stem.includes('reciprocal and ratio')) {
       step1 = "\\text{Convert all terms to their sine and cosine equivalents using reciprocal and ratio identities.}";
       step2 = "\\text{For example, use } \\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} \\text{ and } \\sec \\theta = \\frac{1}{\\cos \\theta}.";
       step3 = "\\text{Simplify the resulting algebraic fraction.}";
    }

    return [
      {
        explanation: "Problem Analysis and Strategy",
        workingOut: step1,
        graphData: null
      },
      {
        explanation: "Apply Identities",
        workingOut: step2,
        graphData: null
      },
      {
        explanation: "Algebraic Simplification",
        workingOut: step3,
        graphData: null
      },
      {
        explanation: "Final Answer Verification",
        workingOut: `\\text{The simplified expression is } ${answer.startsWith('\\(') ? answer : '\\(' + answer + '\\)'}.`,
        graphData: null
      }
    ];
  };


  for (const q of Y11_CH6F_QUESTIONS) {
    // Fix isManual
    if (q.type === 'multiple_choice') {
      q.isManual = false;
    }
    
    // Fix options & a for multiple choice
    if (q.type === 'multiple_choice') {
      let currentCorrectText = '';
      if (q.opts && q.a !== undefined && q.a !== null) {
        currentCorrectText = q.opts[q.a];
      } else if (q.opts && q.answer !== undefined) {
         currentCorrectText = q.opts[parseInt(q.answer)];
         q.a = parseInt(q.answer);
      }
      
      // If we still don't have it, try to find the one that doesn't look like placeholder
      if (!currentCorrectText && q.opts) {
        currentCorrectText = q.opts.find(o => !o.includes('opposite') && !o.includes('linear') && !o.includes('positive values'));
      }
      
      // Check if current options are bad
      const hasBadOpts = q.opts && q.opts.some(o => o.includes('opposite') || o.includes('linear') || o.includes('positive values') || o.includes('x + 3'));
      
      if (hasBadOpts || !q.options) {
         const newOptsText = generateDistractors(q.question, currentCorrectText);
         // Shuffle (put correct answer in a random spot)
         const correctIndex = Math.floor(Math.random() * 4);
         const options = [];
         let distractorIdx = 1;
         for (let i = 0; i < 4; i++) {
           if (i === correctIndex) {
             options.push({ text: newOptsText[0], imageUrl: "" });
           } else {
             options.push({ text: newOptsText[distractorIdx++], imageUrl: "" });
           }
         }
         q.options = options;
         q.a = correctIndex;
         q.answer = correctIndex.toString();
      } else if (q.opts) {
         // Convert opts to options
         q.options = q.opts.map(o => ({ text: o, imageUrl: "" }));
         // Keep q.a as is
      }
      
      delete q.opts;
    } else {
      // For teacher_review, just ensure options is an empty array and opts is deleted
      if (q.opts) delete q.opts;
      q.options = [];
    }
    
    // Check solutions
    const isGenericSol = q.solutionSteps && q.solutionSteps.some(s => s.explanation.includes('read the full stem carefully'));
    if (isGenericSol || !q.solutionSteps) {
      let ans = '';
      if (q.type === 'multiple_choice') ans = q.options[q.a].text;
      else if (q.solution) ans = q.solution;
      q.solutionSteps = generateSteps(q.question, ans);
    }
  }

  // Write back to file
  const fileContent = "export const Y11_CH6F_QUESTIONS = " + JSON.stringify(Y11_CH6F_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log('Successfully repaired local seed file.');
}
fix().catch(console.error);
