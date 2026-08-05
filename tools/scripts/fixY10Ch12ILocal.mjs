import fs from 'fs';
import path from 'path';

const filepath = path.resolve('src/constants/seedYear10Ch12IQuestions.js');
let content = fs.readFileSync(filepath, 'utf8');

async function fix() {
  const { Y10_CH12I_QUESTIONS } = await import('../../src/constants/seedYear10Ch12IQuestions.js');
  
  const generateDistractors = (stem, correctAns) => {
    // correctAns might be "\(-49\)" or "\(49.0\)"
    let numStr = correctAns.replace(/[^\d.-]/g, '');
    let num = parseFloat(numStr);
    
    if (isNaN(num)) {
       return ["\\(" + correctAns + "\\)", "\\(" + correctAns + " + 1\\)", "\\(" + correctAns + " - 1\\)", "\\(" + correctAns + " + 2\\)"];
    }

    const distractors = new Set();
    const baseStr = "\\(" + numStr + "\\)";
    
    if (stem.includes('\\angle')) {
      // It's an angle
      distractors.add(`\\(${(num * 1.5).toFixed(1)}\\)`);
      distractors.add(`\\(${(180 - num).toFixed(1)}\\)`);
      distractors.add(`\\(${(num * 0.8).toFixed(1)}\\)`);
      distractors.add(`\\(${(90 - num).toFixed(1)}\\)`);
      distractors.add(`\\(${(num + 15).toFixed(1)}\\)`);
    } else if (stem.includes('area')) {
      // It's an area
      distractors.add(`\\(${(num * 2).toFixed(1)}\\)`); // forgot 1/2
      distractors.add(`\\(${(num / Math.sin(60 * Math.PI/180)).toFixed(1)}\\)`); // missed sin
      distractors.add(`\\(${(num * 1.2).toFixed(1)}\\)`);
      distractors.add(`\\(${(num * 0.5).toFixed(1)}\\)`);
      distractors.add(`\\(${(num * 1.5).toFixed(1)}\\)`);
    } else {
      // It's a length
      distractors.add(`\\(${(num * Math.sin(60 * Math.PI/180)).toFixed(1)}\\)`);
      distractors.add(`\\(${(num / Math.sin(60 * Math.PI/180)).toFixed(1)}\\)`);
      distractors.add(`\\(${(num * 1.1).toFixed(1)}\\)`);
      distractors.add(`\\(${(num * 0.9).toFixed(1)}\\)`);
      distractors.add(`\\(${(num * 2).toFixed(1)}\\)`);
    }
    
    const arr = Array.from(distractors).filter(d => !d.includes('NaN') && d !== baseStr && parseFloat(d.replace(/[^\d.-]/g, '')) > 0);
    return [baseStr, arr[0] || "\\(" + (num + 2.1).toFixed(1) + "\\)", arr[1] || "\\(" + (num + 5.2).toFixed(1) + "\\)", arr[2] || "\\(" + (num + 10.5).toFixed(1) + "\\)"];
  };

  const generateSteps = (stem, answer) => {
    let step1 = "\\text{Read the question carefully and draw a diagram of the triangle, labeling known sides and angles.}";
    let step2 = "\\text{Determine the appropriate trigonometric rule. If you know two sides and the included angle, use the Cosine Rule or Area formula. If you know a side and its opposite angle, use the Sine Rule.}";
    let step3 = "\\text{Substitute the known values into the chosen formula and solve for the unknown.}";
    
    if (stem.includes('area')) {
       step2 = "\\text{Use the area formula: } \\text{Area} = \\frac{1}{2}ab \\sin C";
    } else if (stem.includes('\\angle')) {
       step2 = "\\text{Use the Sine Rule } \\frac{\\sin A}{a} = \\frac{\\sin B}{b} \\text{ or Cosine Rule } \\cos A = \\frac{b^2 + c^2 - a^2}{2bc} \\text{ depending on the given information.}";
    } else {
       step2 = "\\text{Use the Sine Rule } \\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\text{ or Cosine Rule } a^2 = b^2 + c^2 - 2bc \\cos A \\text{ to find the side length.}";
    }

    return [
      { explanation: "Problem Analysis and Strategy", workingOut: step1, graphData: null },
      { explanation: "Apply the Appropriate Rule", workingOut: step2, graphData: null },
      { explanation: "Algebraic Simplification", workingOut: step3, graphData: null },
      { explanation: "Final Answer Verification", workingOut: `\\text{The final calculated value is } ${answer.startsWith('\\(') ? answer : '\\(' + answer + '\\)'}.`, graphData: null }
    ];
  };

  for (const q of Y10_CH12I_QUESTIONS) {
    if (q.type === 'multiple_choice') {
      q.isManual = false;
      
      let currentCorrectText = '';
      if (q.opts && q.a !== undefined && q.a !== null) {
        currentCorrectText = q.opts[q.a];
      } else if (q.opts && q.answer !== undefined) {
         currentCorrectText = q.opts[parseInt(q.answer)];
         q.a = parseInt(q.answer);
      } else if (q.options) {
         currentCorrectText = q.options[q.a].text;
      }
      
      const hasBadOpts = q.opts && q.opts.some(o => o.startsWith('\\(-') || o.includes('opposite'));
      
      if (hasBadOpts || !q.options || q.opts) {
         const newOptsText = generateDistractors(q.question, currentCorrectText);
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
      }
      if (q.opts) delete q.opts;
    }
    
    const isGenericSol = q.solutionSteps && q.solutionSteps.some(s => s.explanation && s.explanation.includes('read the full stem carefully'));
    if (isGenericSol || !q.solutionSteps) {
      let ans = '';
      if (q.type === 'multiple_choice') ans = q.options[q.a].text;
      q.solutionSteps = generateSteps(q.question, ans);
    }
  }

  const fileContent = "export const Y10_CH12I_QUESTIONS = " + JSON.stringify(Y10_CH12I_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log('Successfully repaired local seed file.');
}
fix().catch(console.error);
