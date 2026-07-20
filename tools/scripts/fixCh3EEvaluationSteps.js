import { readFileSync, writeFileSync } from 'fs';

const seedFilePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear7Ch3EQuestions.js';

// Read seed file
const fileContent = readFileSync(seedFilePath, 'utf8');
const jsonStr = fileContent
  .replace('export const Y7_CH3E_QUESTIONS = ', '')
  .trim()
  .replace(/;$/, '');

const questions = JSON.parse(jsonStr);

// Helper to evaluate and generate exact steps based on question type
function parseAndGenerateSteps(q) {
  const text = q.question;

  // Let's identify the variables & expression structure
  // Case A: Evaluate by substituting x = 4. \n\n 3(x + 2)
  // Case B: Evaluate for p = 8 and q = 2. \n\n 5(p - q)
  // Case C: Evaluate for m = 5. \n\n (4m)^2
  
  let matchX = text.match(/substituting\s*\\\\\((\w)\s*=\s*(\d+)\\\\\)\..*?\\\\\((.*?)\\\\\)/s);
  let matchPQ = text.match(/for\s*\\\\\((\w)\s*=\s*(\d+)\\\\\)\s*and\s*\\\\\((\w)\s*=\s*(\d+)\\\\\)\..*?\\\\\((.*?)\\\\\)/s);
  let matchSingle = text.match(/for\s*\\\\\((\w)\s*=\s*(\d+)\\\\\)\..*?\\\\\((.*?)\\\\\)/s);

  let steps = [];

  if (matchPQ) {
    const v1 = matchPQ[1];
    const val1 = Number(matchPQ[2]);
    const v2 = matchPQ[3];
    const val2 = Number(matchPQ[4]);
    const expr = matchPQ[5].trim();

    // Evaluate mathematically
    // Let's write custom step calculations for known expressions in Chapter 3E
    let step1_working = `\\text{Evaluate } ${expr} \\text{ with } ${v1}=${val1}, \\; ${v2}=${val2}`;
    let step2_working = "";
    let step3_working = "";

    if (expr === "p(4 + 1)") {
      // p(4+1) = 8(5) = 40
      step2_working = `8 \\times (4 + 1) = 8 \\times 5`;
      step3_working = `40`;
    } else if (expr === "5(p - q)") {
      // 5(8-2) = 5(6) = 30
      step2_working = `5 \\times (8 - 2) = 5 \\times 6`;
      step3_working = `30`;
    } else if (expr === "4 + 3(p - q)") {
      // 4 + 3(8-2) = 4 + 3(6) = 4 + 18 = 22
      step2_working = `4 + 3 \\times (8 - 2) = 4 + 3 \\times 6`;
      step3_working = `4 + 18 = 22`;
    } else if (expr === "4(p - q) + 5") {
      // 4(8-2) + 5 = 4(6) + 5 = 24 + 5 = 29
      step2_working = `4 \\times (8 - 2) + 5 = 4 \\times 6 + 5`;
      step3_working = `24 + 5 = 29`;
    } else if (expr === "q(p - 4) + 2") {
      // 2(8-4) + 2 = 2(4) + 2 = 8 + 2 = 10
      step2_working = `2 \\times (8 - 4) + 2 = 2 \\times 4 + 2`;
      step3_working = `8 + 2 = 10`;
    } else if (expr === "3(2p - 5q) + 4q") {
      // 3(2*8 - 5*2) + 4*2 = 3(16 - 10) + 8 = 3(6) + 8 = 18 + 8 = 26
      step2_working = `3 \\times (2 \\times 8 - 5 \\times 2) + 4 \\times 2 = 3 \\times (16 - 10) + 8`;
      step3_working = `3 \\times 6 + 8 = 18 + 8 = 26`;
    }

    if (step2_working) {
      steps = [
        {
          explanation: `We begin by substituting the given values of the variables into the algebraic expression. Replace \\\\(${v1}\\\\) with \\\\(${val1}\\\\) and \\\\(${v2}\\\\) with \\\\(${val2}\\\\). This converts the variable expression into a purely numerical calculation.`,
          workingOut: `\\\\( ${step1_working} \\\\)`
        },
        {
          explanation: `Next, we compute the values inside the brackets first, according to the standard order of operations (BODMAS/PEMDAS). Once the bracketed terms are evaluated, we perform any multiplication or division before handling addition.`,
          workingOut: `\\\\( ${step2_working} \\\\)`
        },
        {
          explanation: `Finally, we complete the remaining addition or subtraction to determine the final numerical value. Double-check all calculation steps to ensure no basic arithmetic slips were made.`,
          workingOut: `\\\\( ${step3_working} \\\\)`
        }
      ];
    }
  } else if (matchX || matchSingle) {
    const m = matchX || matchSingle;
    const v = m[1];
    const val = Number(m[2]);
    const expr = m[3].trim();

    let step1_working = `\\text{Evaluate } ${expr} \\text{ with } ${v}=${val}`;
    let step2_working = "";
    let step3_working = "";

    // Parse specific expressions
    if (expr === "3(x + 2)") {
      step2_working = `3 \\times (4 + 2) = 3 \\times 6`;
      step3_working = `18`;
    } else if (expr === "3x + 2") {
      step2_working = `3 \\times 4 + 2 = 12 + 2`;
      step3_working = `14`;
    } else if (expr === "4(x - 1)") {
      step2_working = `4 \\times (4 - 1) = 4 \\times 3`;
      step3_working = `12`;
    } else if (expr === "5 + 3(x - 1)") {
      step2_working = `5 + 3 \\times (4 - 1) = 5 + 3 \\times 3`;
      step3_working = `5 + 9 = 14`;
    } else if (expr === "5 + 3(x + 1)") {
      step2_working = `5 + 3 \\times (4 + 1) = 5 + 3 \\times 5`;
      step3_working = `5 + 15 = 20`;
    } else if (expr === "(2 + 4x) - 3") {
      step2_working = `(2 + 4 \\times 4) - 3 = (2 + 16) - 3`;
      step3_working = `18 - 3 = 15`;
    } else if (expr === "3(y + 2)") {
      step2_working = `3 \\times (5 + 2) = 3 \\times 7`;
      step3_working = `21`;
    } else if (expr === "4(3y + 2)") {
      step2_working = `4 \\times (3 \\times 5 + 2) = 4 \\times (15 + 2)`;
      step3_working = `4 \\times 17 = 68`;
    } else if (expr === "5 + 3(y + 4)") {
      step2_working = `5 + 3 \\times (5 + 4) = 5 + 3 \\times 9`;
      step3_working = `5 + 27 = 32`;
    } else if (expr === "7 + 4(y - 2)") {
      step2_working = `7 + 4 \\times (5 - 2) = 7 + 4 \\times 3`;
      step3_working = `7 + 12 = 19`;
    } else if (expr === "8 + 3(y - 3)") {
      step2_working = `8 + 3 \\times (5 - 3) = 8 + 3 \\times 2`;
      step3_working = `8 + 6 = 14`;
    } else if (expr === "9 + 2(y - 1)") {
      step2_working = `9 + 2 \\times (5 - 1) = 9 + 2 \\times 4`;
      step3_working = `9 + 8 = 17`;
    } else if (expr === "4m^2") {
      step2_working = `4 \\times 5^2 = 4 \\times 25`;
      step3_working = `100`;
    } else if (expr === "(4m)^2") {
      step2_working = `(4 \\times 5)^2 = 20^2`;
      step3_working = `400`;
    } else if (expr === "2k^3") {
      step2_working = `2 \\times 3^3 = 2 \\times 27`;
      step3_working = `54`;
    } else if (expr === "(2k)^3") {
      step2_working = `(2 \\times 3)^3 = 6^3`;
      step3_working = `216`;
    } else if (expr === "(4p)^2") {
      step2_working = `(4 \\times 2)^2 = 8^2`;
      step3_working = `64`;
    } else if (expr === "(5p)^2 + 3") {
      step2_working = `(5 \\times 2)^2 + 3 = 10^2 + 3`;
      step3_working = `100 + 3 = 103`;
    } else if (expr === "3p^2 + 5") {
      step2_working = `3 \\times 2^2 + 5 = 3 \\times 4 + 5`;
      step3_working = `12 + 5 = 17`;
    }

    if (step2_working) {
      steps = [
        {
          explanation: `We begin by substituting the numerical value of \\\\(${v} = ${val}\\\\) into the algebraic expression wherever the variable \\\\(${v}\\\\) appears. This replaces variables with numbers.`,
          workingOut: `\\\\( ${step1_working} \\\\)`
        },
        {
          explanation: `Next, we carry out operations inside the brackets first, followed by exponents (powers) and multiplications according to BODMAS/PEMDAS order of operations rules.`,
          workingOut: `\\\\( ${step2_working} \\\\)`
        },
        {
          explanation: `Finally, we execute any remaining additions or subtractions to find the final simplified answer. Check the calculations to avoid arithmetic errors.`,
          workingOut: `\\\\( ${step3_working} \\\\)`
        }
      ];
    }
  }

  return steps.length > 0 ? steps : null;
}

// Map and fix the questions
let updatedCount = 0;
const updatedQuestions = questions.map(q => {
  const newSteps = parseAndGenerateSteps(q);
  if (newSteps) {
    updatedCount++;
    return {
      ...q,
      solutionSteps: newSteps,
      isNew: true
    };
  }
  return q;
});

if (updatedCount > 0) {
  const outputContent = `export const Y7_CH3E_QUESTIONS = ${JSON.stringify(updatedQuestions, null, 2)};\n`;
  writeFileSync(seedFilePath, outputContent, 'utf8');
  console.log(`Successfully updated ${updatedCount} evaluation questions with real calculation solutionSteps locally.`);
} else {
  console.log('No evaluation questions matched for updates.');
}
