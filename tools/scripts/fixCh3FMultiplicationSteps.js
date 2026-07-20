import { readFileSync, writeFileSync } from 'fs';

const seedFilePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear7Ch3FQuestions.js';

// Read seed file
const fileContent = readFileSync(seedFilePath, 'utf8');
const jsonStr = fileContent
  .replace('export const Y7_CH3F_QUESTIONS = ', '')
  .trim()
  .replace(/;$/, '');

const questions = JSON.parse(jsonStr);

// Helper to evaluate and generate exact steps based on question type
function parseAndGenerateSteps(q) {
  const text = q.question;

  // Let's identify the correct answer
  const correctOptionObj = q.options[q.answer];
  const correctText = correctOptionObj.text.replace(/\\\\\(/g, '').replace(/\\\\\)/g, '').trim();

  // Pattern 1: Simplify: \\n\\n \\\\( ... \\\\)
  let m1 = text.match(/Simplify:\\n\\n\\\\\((.*?)\\\\\)/s);
  // Pattern 2: Rewrite the expression without brackets.\\n\\n\\\\((.*?)\\\\\)/s
  let m2 = text.match(/without\s+brackets\.\\n\\n\\\\\((.*?)\\\\\)/s);

  const match = m1 || m2;
  if (!match) return null;

  const rawExpr = match[1].trim(); // e.g. "4 \\times 5m" or "(4m)^2" or "3a \\times 2b"

  let step1_working = `\\text{Simplify: } ${rawExpr}`;
  let step2_working = "";
  let step3_working = `${correctText}`;

  // Let's analyze expression for step 2 details
  const pBracketSquare = rawExpr.match(/^\((\d+)([a-z])\)\^2$/); // (4m)^2
  const pMultiply1 = rawExpr.match(/^(\d+)\s*\\times\s*(\d+)([a-z])$/); // 4 \times 5m
  const pMultiply2 = rawExpr.match(/^(\d+)([a-z])\s*\\times\s*(\d+)$/); // 5m \times 4
  const pMultiply3 = rawExpr.match(/^(\d+)([a-z])\s*\\times\s*(\d+)([a-z])$/); // 3a \times 2b
  const pMultiply4 = rawExpr.match(/^(\d+)([a-z])\s*\\times\s*([a-z])$/); // 5a \times b
  const pMultiply5 = rawExpr.match(/^([a-z])\s*\\times\s*(\d+)([a-z])$/); // a \times 5b

  if (pBracketSquare) {
    const num = Number(pBracketSquare[1]);
    const v = pBracketSquare[2];
    step2_working = `${num}^2 \\times ${v}^2 = ${num * num} \\times ${v}^2`;
  } else if (pMultiply1) {
    const num1 = Number(pMultiply1[1]);
    const num2 = Number(pMultiply1[2]);
    const v1 = pMultiply1[3];
    step2_working = `(${num1} \\times ${num2}) \\times ${v1} = ${num1 * num2} \\times ${v1}`;
  } else if (pMultiply2) {
    const num1 = Number(pMultiply2[1]);
    const v1 = pMultiply2[2];
    const num2 = Number(pMultiply2[3]);
    step2_working = `(${num1} \\times ${num2}) \\times ${v1} = ${num1 * num2} \\times ${v1}`;
  } else if (pMultiply3) {
    const num1 = Number(pMultiply3[1]);
    const v1 = pMultiply3[2];
    const num2 = Number(pMultiply3[3]);
    const v2 = pMultiply3[4];
    if (v1 === v2) {
      step2_working = `(${num1} \\times ${num2}) \\times (${v1} \\times ${v2}) = ${num1 * num2} \\times ${v1}^2`;
    } else {
      step2_working = `(${num1} \\times ${num2}) \\times (${v1} \\times ${v2}) = ${num1 * num2} \\times ${v1}${v2}`;
    }
  } else if (pMultiply4) {
    const num1 = Number(pMultiply4[1]);
    const v1 = pMultiply4[2];
    const v2 = pMultiply4[3];
    if (v1 === v2) {
      step2_working = `${num1} \\times (${v1} \\times ${v2}) = ${num1} \\times ${v1}^2`;
    } else {
      step2_working = `${num1} \\times (${v1} \\times ${v2}) = ${num1}${v1}${v2}`;
    }
  } else if (pMultiply5) {
    const v1 = pMultiply5[1];
    const num2 = Number(pMultiply5[2]);
    const v2 = pMultiply5[3];
    if (v1 === v2) {
      step2_working = `${num2} \\times (${v1} \\times ${v2}) = ${num2} \\times ${v1}^2`;
    } else {
      step2_working = `${num2} \\times (${v1} \\times ${v2}) = ${num2}${v1}${v2}`;
    }
  } else {
    // Basic fallback parsing of simple letters (e.g. m * m * m)
    const cleanExpr = rawExpr.replace(/\\times/g, '*').replace(/\s+/g, '');
    const parts = cleanExpr.split('*');
    const numbers = [];
    const vars = {};
    for (const p of parts) {
      const numMatch = p.match(/^(\d+)/);
      const varMatch = p.match(/([a-z]+)/);
      if (numMatch) numbers.push(Number(numMatch[1]));
      if (varMatch) {
        const vChar = varMatch[1];
        vars[vChar] = (vars[vChar] || 0) + 1;
      }
    }
    const finalN = numbers.reduce((a, b) => a * b, 1);
    let vStr = Object.keys(vars).sort().map(vk => vars[vk] > 1 ? `${vk}^${vars[vk]}` : vk).join('');
    step2_working = `\\text{Group numbers: } ${numbers.join(' \\times ')} \\text{ and variables: } ${Object.keys(vars).map(vk => Array(vars[vk]).fill(vk).join(' \\times ')).join(' \\times ')}`;
  }

  const steps = [
    {
      explanation: `We begin by identifying the algebraic terms to be multiplied from the question: \\\\(${rawExpr}\\\\). Our goal is to simplify this product by separating the numeric coefficients from the variable parts.`,
      workingOut: `\\\\( ${step1_working} \\\\)`
    },
    {
      explanation: `Next, we group the numbers together and group the variables together. We perform the coefficient multiplication and collect the variable factors. If the variables are identical, we add their power indices; if they are different, we list them alphabetically.`,
      workingOut: `\\\\( ${step2_working} \\\\)`
    },
    {
      explanation: `Finally, we combine the computed coefficient and the simplified variables into a single algebraic term. This yields the final simplified expression \\\\(${correctText}\\\\).`,
      workingOut: `\\\\( ${step3_working} \\\\)`
    }
  ];

  return steps;
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
  const outputContent = `export const Y7_CH3F_QUESTIONS = ${JSON.stringify(updatedQuestions, null, 2)};\n`;
  writeFileSync(seedFilePath, outputContent, 'utf8');
  console.log(`Successfully updated ${updatedCount} multiplication/bracket questions with real calculation solutionSteps locally.`);
} else {
  console.log('No multiplication questions matched for updates.');
}
