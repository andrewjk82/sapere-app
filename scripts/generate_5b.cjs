const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch5BQuestions.js');

const questions = [];

// Helper to push a question
function addQuestion(id, question, a, solution, hint, steps) {
  questions.push({
    id,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question,
    a,
    solution,
    t: "Solving simple linear equations",
    hint,
    solutionSteps: steps,
    graphData: null
  });
}

// Q1 Equations
const q1List = [
  { sub: 'a', eq: 'a + 3 = 8', ans: '5', step1: 'a = 8 - 3', hint: 'Subtract 3 from both sides.' },
  { sub: 'b', eq: 'b + 5 = 18', ans: '13', step1: 'b = 18 - 5', hint: 'Subtract 5 from both sides.' },
  { sub: 'c', eq: 'c - 4 = 12', ans: '16', step1: 'c = 12 + 4', hint: 'Add 4 to both sides.' },
  { sub: 'd', eq: 'd - 12 = 7', ans: '19', step1: 'd = 7 + 12', hint: 'Add 12 to both sides.' },
  { sub: 'e', eq: '3a = 15', ans: '5', step1: 'a = 15 / 3', hint: 'Divide both sides by 3.' },
  { sub: 'f', eq: '4b = 16', ans: '4', step1: 'b = 16 / 4', hint: 'Divide both sides by 4.' },
  { sub: 'g', eq: '6c = 48', ans: '8', step1: 'c = 48 / 6', hint: 'Divide both sides by 6.' },
  { sub: 'h', eq: '7d = 35', ans: '5', step1: 'd = 35 / 7', hint: 'Divide both sides by 7.' },
  { sub: 'i', eq: '-4m = 12', ans: '-3', step1: 'm = 12 / -4', hint: 'Divide both sides by -4.' },
  { sub: 'j', eq: '-3n = 15', ans: '-5', step1: 'n = 15 / -3', hint: 'Divide both sides by -3.' },
  { sub: 'k', eq: '6p = -18', ans: '-3', step1: 'p = -18 / 6', hint: 'Divide both sides by 6.' },
  { sub: 'l', eq: '8q = -32', ans: '-4', step1: 'q = -32 / 8', hint: 'Divide both sides by 8.' },
  { sub: 'm', eq: 'b + 6 = 25\\frac{1}{2}', ans: '19.5', step1: 'b = 25.5 - 6', hint: 'Subtract 6 from both sides.' },
  { sub: 'n', eq: 'a + 4 = 12\\frac{1}{4}', ans: '8.25', step1: 'a = 12.25 - 4', hint: 'Subtract 4 from both sides.' },
  { sub: 'o', eq: '4a = \\frac{2}{5}', ans: '1/10', step1: 'a = 2/20', hint: 'Divide both sides by 4 (multiply the denominator by 4).' },
  { sub: 'p', eq: 'x - 5 = 6\\frac{1}{3}', ans: '11 1/3', step1: 'x = 6 1/3 + 5', hint: 'Add 5 to both sides.' },
  { sub: 'q', eq: '-3y = \\frac{6}{7}', ans: '-2/7', step1: 'y = 6 / (7 * -3)', hint: 'Divide both sides by -3.' },
  { sub: 'r', eq: '3x = -\\frac{4}{5}', ans: '-4/15', step1: 'x = -4 / (5 * 3)', hint: 'Divide both sides by 3.' }
];

q1List.forEach(q => {
  addQuestion(
    `y9-5b-q1${q.sub}`,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(x = ${q.ans}\\)`,
    q.hint,
    [
      {
        explanation: "Perform the inverse operation to isolate the variable.",
        workingOut: `${q.step1} \\implies ${q.ans}`
      }
    ]
  );
});

// Q2 Equations
const q2List = [
  { sub: 'a', eq: '3a + 4 = 10', ans: '2', step1: '3a = 6', step2: 'a = 2', hint: 'Subtract 4 first, then divide by 3.' },
  { sub: 'b', eq: '2b + 5 = 17', ans: '6', step1: '2b = 12', step2: 'b = 6', hint: 'Subtract 5 first, then divide by 2.' },
  { sub: 'c', eq: '4c - 3 = 21', ans: '6', step1: '4c = 24', step2: 'c = 6', hint: 'Add 3 first, then divide by 4.' },
  { sub: 'd', eq: '6d - 5 = 25', ans: '5', step1: '6d = 30', step2: 'd = 5', hint: 'Add 5 first, then divide by 6.' },
  { sub: 'e', eq: '4e - 1 = 19', ans: '5', step1: '4e = 20', step2: 'e = 5', hint: 'Add 1 first, then divide by 4.' },
  { sub: 'f', eq: '5f - 2 = 18', ans: '4', step1: '5f = 20', step2: 'f = 4', hint: 'Add 2 first, then divide by 5.' },
  { sub: 'g', eq: '2g + 15 = 7', ans: '-4', step1: '2g = -8', step2: 'g = -4', hint: 'Subtract 15 first, then divide by 2.' },
  { sub: 'h', eq: '4h + 23 = 11', ans: '-3', step1: '4h = -12', step2: 'h = -3', hint: 'Subtract 23 first, then divide by 4.' },
  { sub: 'i', eq: '5a + 19 = -1', ans: '-4', step1: '5a = -20', step2: 'a = -4', hint: 'Subtract 19 first, then divide by 5.' },
  { sub: 'j', eq: '3a + 25 = -8', ans: '-11', step1: '3a = -33', step2: 'a = -11', hint: 'Subtract 25 first, then divide by 3.' },
  { sub: 'k', eq: '4a - 11 = -27', ans: '-4', step1: '4a = -16', step2: 'a = -4', hint: 'Add 11 first, then divide by 4.' },
  { sub: 'l', eq: '6b - 13 = -55', ans: '-7', step1: '6b = -42', step2: 'b = -7', hint: 'Add 13 first, then divide by 6.' },
  { sub: 'm', eq: '2b + 3 = 8\\frac{1}{2}', ans: '2.75', step1: '2b = 5.5', step2: 'b = 2.75', hint: 'Subtract 3 first, then divide by 2.' },
  { sub: 'n', eq: '2x + 9 = 5\\frac{1}{4}', ans: '-1.875', step1: '2x = -3.75', step2: 'x = -1.875', hint: 'Subtract 9 first, then divide by 2.' },
  { sub: 'o', eq: '2x - 11 = 4\\frac{2}{3}', ans: '7 5/6', step1: '2x = 15 2/3', step2: 'x = 47/6', hint: 'Add 11 first, then divide by 2.' },
  { sub: 'p', eq: '3a + 5 = -7\\frac{1}{2}', ans: '-25/6', step1: '3a = -12.5', step2: 'a = -25/6', hint: 'Subtract 5 first, then divide by 3.' },
  { sub: 'q', eq: '5m - 8 = -11\\frac{3}{5}', ans: '-18/25', step1: '5m = -3.6', step2: 'm = -18/25', hint: 'Add 8 first, then divide by 5.' },
  { sub: 'r', eq: '-3b + 5 = 11\\frac{1}{4}', ans: '-25/12', step1: '-3b = 6.25', step2: 'b = -25/12', hint: 'Subtract 5 first, then divide by -3.' }
];

q2List.forEach(q => {
  addQuestion(
    `y9-5b-q2${q.sub}`,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      {
        explanation: "Isolate the variable term.",
        workingOut: `${q.step1}`
      },
      {
        explanation: "Solve for the variable.",
        workingOut: `${q.step2}`
      }
    ]
  );
});

// Q3 Equations
const q3List = [
  { sub: 'a', eq: '3 - 2a = 9', ans: '-3', step1: '-2a = 6', step2: 'a = -3', hint: 'Subtract 3 from both sides, then divide by -2.' },
  { sub: 'b', eq: '4 - 3b = 19', ans: '-5', step1: '-3b = 15', step2: 'b = -5', hint: 'Subtract 4 from both sides, then divide by -3.' },
  { sub: 'c', eq: '6 - 3c = -12', ans: '6', step1: '-3c = -18', step2: 'c = 6', hint: 'Subtract 6 from both sides, then divide by -3.' },
  { sub: 'd', eq: '2 - 4d = -22', ans: '6', step1: '-4d = -24', step2: 'd = 6', hint: 'Subtract 2 from both sides, then divide by -4.' },
  { sub: 'e', eq: '-5 - 6e = 13', ans: '-3', step1: '-6e = 18', step2: 'e = -3', hint: 'Add 5 to both sides, then divide by -6.' },
  { sub: 'f', eq: '-3 - 4f = 17', ans: '-5', step1: '-4f = 20', step2: 'f = -5', hint: 'Add 3 to both sides, then divide by -4.' }
];

q3List.forEach(q => {
  addQuestion(
    `y9-5b-q3${q.sub}`,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      {
        explanation: "Isolate the variable term.",
        workingOut: `${q.step1}`
      },
      {
        explanation: "Solve for the variable.",
        workingOut: `${q.step2}`
      }
    ]
  );
});

// Q4 Equations
const q4List = [
  { sub: 'a', eq: '6x + 7 = 4x + 3', ans: '-2', step1: '2x + 7 = 3', step2: '2x = -4 \\implies x = -2', hint: 'Collect x terms on one side and numbers on the other.' },
  { sub: 'b', eq: '6x + 14 = 3x + 20', ans: '2', step1: '3x + 14 = 20', step2: '3x = 6 \\implies x = 2', hint: 'Subtract 3x from both sides first.' },
  { sub: 'c', eq: '7x + 4 = 3x + 24', ans: '5', step1: '4x + 4 = 24', step2: '4x = 20 \\implies x = 5', hint: 'Subtract 3x from both sides first.' },
  { sub: 'd', eq: '8x - 5 = 5x + 7', ans: '4', step1: '3x - 5 = 7', step2: '3x = 12 \\implies x = 4', hint: 'Subtract 5x from both sides first.' },
  { sub: 'e', eq: '6x - 7 = x - 2', ans: '1', step1: '5x - 7 = -2', step2: '5x = 5 \\implies x = 1', hint: 'Subtract x from both sides first.' },
  { sub: 'f', eq: '5x + 8 = x - 4', ans: '-3', step1: '4x + 8 = -4', step2: '4x = -12 \\implies x = -3', hint: 'Subtract x from both sides first.' },
  { sub: 'g', eq: '4x + 2 = 11 - x', ans: '1.8', step1: '5x + 2 = 11', step2: '5x = 9 \\implies x = 1.8', hint: 'Add x to both sides first.' },
  { sub: 'h', eq: '5x - 4 = 17 - 2x', ans: '3', step1: '7x - 4 = 17', step2: '7x = 21 \\implies x = 3', hint: 'Add 2x to both sides first.' },
  { sub: 'i', eq: '3x - 5 = 7 - x', ans: '3', step1: '4x - 5 = 7', step2: '4x = 12 \\implies x = 3', hint: 'Add x to both sides first.' },
  { sub: 'j', eq: '9 - 2x = 3x - 6', ans: '3', step1: '9 = 5x - 6', step2: '15 = 5x \\implies x = 3', hint: 'Add 2x to both sides first.' },
  { sub: 'k', eq: '4x - 2 = 7 - x', ans: '1.8', step1: '5x - 2 = 7', step2: '5x = 9 \\implies x = 1.8', hint: 'Add x to both sides first.' },
  { sub: 'l', eq: '3x + 8 = 13 - 2x', ans: '1', step1: '5x + 8 = 13', step2: '5x = 5 \\implies x = 1', hint: 'Add 2x to both sides first.' }
];

q4List.forEach(q => {
  addQuestion(
    `y9-5b-q4${q.sub}`,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      {
        explanation: "Collect variables on one side.",
        workingOut: `${q.step1}`
      },
      {
        explanation: "Solve for the variable.",
        workingOut: `${q.step2}`
      }
    ]
  );
});

// Write to file
const fileContent = `export const Y9_CH5B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch5Questions.js!");
