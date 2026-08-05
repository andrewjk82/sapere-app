import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

function generatePlausibleDistractors(ansStr, isRatio = false) {
  if (isRatio) {
    // If answer is like "1:3", return reasonable ratio distractors
    const parts = ansStr.match(/(\d+)\s*:\s*(\d+)/);
    if (parts) {
      const a = parseInt(parts[1]);
      const b = parseInt(parts[2]);
      return [
        `\\(${b}:${a}\\)`,
        `\\(${a}:${b+1}\\)`,
        `\\(${a+1}:${b}\\)`,
        `\\(${a * 2}:${b * 3}\\)`
      ];
    }
  }

  const numMatch = ansStr.match(/(\d+(\.\d+)?)/);
  if (numMatch) {
    const val = parseFloat(numMatch[1]);
    const prefix = ansStr.substring(0, numMatch.index);
    const suffix = ansStr.substring(numMatch.index + numMatch[0].length);
    
    // Generate realistic mathematical errors (wrong operations, displaced decimals)
    const err1 = val * 2;
    const err2 = val / 2;
    const err3 = val * 10;
    let err4 = val * 1.5;

    // Format them exactly like the answer
    const d1 = `${prefix}${err1.toFixed(val % 1 === 0 ? 0 : 1)}${suffix}`;
    const d2 = `${prefix}${err2.toFixed(val % 1 === 0 ? 0 : 1)}${suffix}`;
    const d3 = `${prefix}${err3.toFixed(val % 1 === 0 ? 0 : 1)}${suffix}`;
    const d4 = `${prefix}${err4.toFixed(val % 1 === 0 ? 0 : 1)}${suffix}`;

    return [d1, d2, d3, d4];
  }
  return [];
}

async function run() {
  const filepath = path.resolve('src/constants/seedYear8Ch10GQuestions.js');
  const { Y8_CH10G_QUESTIONS } = await import('../../src/constants/seedYear8Ch10GQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let count = 0;
  for (let q of Y8_CH10G_QUESTIONS) {
    const idNumStr = q.id.split('-q')[1];
    const qNum = parseInt(idNumStr, 10);
    
    // Determine the type of explanations to apply
    let exp1 = "Identify the given information and state the goal.";
    let exp2 = "Apply the relevant formula or mathematical rule.";
    let exp3 = "Substitute the values and perform the calculation.";
    let exp4 = "State the final answer with correct units or in simplest form.";

    if (qNum === 1) {
      exp1 = "Identify the multiplier or divisor between the given equivalent terms.";
      exp2 = "Apply the same multiplier or divisor to the other term.";
      exp3 = "Calculate the result.";
      exp4 = "State the final missing number.";
    } else if (qNum === 2 || qNum === 11 || qNum === 12 || qNum === 14) {
      exp1 = "Find the Highest Common Factor (HCF) of the terms in the ratio.";
      exp2 = "Divide each term in the ratio by the HCF.";
      exp3 = "Write the resulting simplified ratio.";
      exp4 = "State the final simplified ratio.";
    } else if (qNum >= 4 && qNum <= 6) {
      exp1 = "Calculate the total number of parts by adding the terms of the ratio.";
      exp2 = "Divide the total quantity by the total number of parts to find the value of one part.";
      exp3 = "Multiply the value of one part by each term in the ratio to find the individual shares.";
      exp4 = "State the final shares.";
    } else if (qNum >= 7 && qNum <= 10) {
      exp1 = "Determine the unit rate by dividing the given quantity by the base number of units.";
      exp2 = "Multiply the unit rate by the target number of units to find the required quantity.";
      exp3 = "Perform the calculation.";
      exp4 = "State the final answer in context.";
    } else if (qNum >= 16 && qNum <= 18) {
      exp1 = "Identify the given measurement and the scale ratio.";
      exp2 = "Convert the units if necessary so both sides use the same measurement unit.";
      exp3 = "Multiply or divide by the scale factor to find the target distance.";
      exp4 = "State the final measurement with the correct units.";
    } else if (qNum >= 19 && qNum <= 25) {
      exp1 = "Identify the given variables (Distance, Speed, or Time).";
      exp2 = "Select the appropriate formula: \\(D = S \\times T\\), \\(S = \\frac{D}{T}\\), or \\(T = \\frac{D}{S}\\).";
      exp3 = "Substitute the known values into the formula and calculate.";
      exp4 = "State the final answer with correct units.";
    }

    if (q.solutionSteps && q.solutionSteps.length === 4) {
      q.solutionSteps[0].explanation = exp1;
      q.solutionSteps[1].explanation = exp2;
      q.solutionSteps[2].explanation = exp3;
      q.solutionSteps[3].explanation = exp4;

      // Ensure no raw quad exists in workingOut
      q.solutionSteps.forEach(s => {
        if (s.workingOut) s.workingOut = s.workingOut.replace(/quad/g, '\\quad');
      });
    }

    // Fix options and distractors if not manual
    if (q.type === 'multiple_choice' || (q.opts && q.opts.length > 0)) {
      q.isManual = false;
      q.type = 'multiple_choice';
      
      let answerText = "";
      if (q.opts && q.opts[parseInt(q.a || 0)]) {
        answerText = q.opts[parseInt(q.a || 0)];
      }

      // Generate distractors
      const isRatio = answerText.includes(':');
      let newDistractors = generatePlausibleDistractors(answerText, isRatio);
      
      // If generation fails, provide safe fallback distractors
      if (newDistractors.length < 4) {
        newDistractors = [
           `\\(1.5 \\times \\text{value}\\)`,
           `\\(2 \\times \\text{value}\\)`,
           `\\(0.5 \\times \\text{value}\\)`,
           `\\(10 \\times \\text{value}\\)`
        ];
      }

      // Rebuild options array
      const correctIdx = Math.floor(Math.random() * 4);
      q.options = [];
      let dIdx = 0;
      for (let i = 0; i < 4; i++) {
        if (i === correctIdx) {
          q.options.push({ text: answerText, imageUrl: '' });
        } else {
          // ensure distractor isn't identical to answer
          let text = newDistractors[dIdx];
          if (text === answerText) text += " (approx)";
          q.options.push({ text: text, imageUrl: '' });
          dIdx++;
        }
      }
      q.a = correctIdx;
      q.answer = correctIdx.toString();
      if (q.opts) delete q.opts;
    } else {
      q.isManual = true; // explicitly mark teacher_review as manual
    }

    // Push to Firestore
    const updateData = {
      solutionSteps: q.solutionSteps,
      isManual: q.isManual,
      type: q.type,
      updatedAt: FieldValue.serverTimestamp()
    };
    if (q.options) {
      updateData.options = q.options;
      updateData.a = q.a;
      updateData.answer = q.answer;
      updateData.opts = FieldValue.delete();
    }

    await db.collection('questions').doc(q.id).update(updateData);
    count++;
  }

  const fileContent = "export const Y8_CH10G_QUESTIONS = " + JSON.stringify(Y8_CH10G_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully updated ${count} custom solutionSteps and options for Y8-10G locally and pushed to Firestore.`);
}
run().catch(console.error);
