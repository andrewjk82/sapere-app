const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch5CQuestions.js');

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
    t: "Equations with brackets",
    hint,
    solutionSteps: steps,
    graphData: null
  });
}

// Q1 Equations
const q1List = [
  { sub: 'a', eq: '3(x + 2) = 15', ans: '3', step1: 'x + 2 = 5', step2: 'x = 3', hint: 'Divide both sides by 3 first.' },
  { sub: 'b', eq: '2(x - 4) = 10', ans: '9', step1: 'x - 4 = 5', step2: 'x = 9', hint: 'Divide both sides by 2 first.' },
  { sub: 'c', eq: '5(x - 1) = 20', ans: '5', step1: 'x - 1 = 4', step2: 'x = 5', hint: 'Divide both sides by 5 first.' },
  { sub: 'd', eq: '4(x + 2) = 16', ans: '2', step1: 'x + 2 = 4', step2: 'x = 2', hint: 'Divide both sides by 4 first.' },
  { sub: 'e', eq: '2(x - 5) = 12', ans: '11', step1: 'x - 5 = 6', step2: 'x = 11', hint: 'Divide both sides by 2 first.' },
  { sub: 'f', eq: '3(x + 3) = 18', ans: '3', step1: 'x + 3 = 6', step2: 'x = 3', hint: 'Divide both sides by 3 first.' },
  { sub: 'g', eq: '3(4 - x) = 6', ans: '2', step1: '4 - x = 2', step2: 'x = 2', hint: 'Divide both sides by 3 first.' },
  { sub: 'h', eq: '2(6 - x) = 8', ans: '2', step1: '6 - x = 4', step2: 'x = 2', hint: 'Divide both sides by 2 first.' },
  { sub: 'i', eq: '5(7 - x) = 25', ans: '2', step1: '7 - x = 5', step2: 'x = 2', hint: 'Divide both sides by 5 first.' },
  { sub: 'j', eq: '-3(2x - 4) = 18', ans: '-1', step1: '2x - 4 = -6', step2: '2x = -2 \\implies x = -1', hint: 'Divide both sides by -3 first.' },
  { sub: 'k', eq: '-5(2x - 7) = -15', ans: '5', step1: '2x - 7 = 3', step2: '2x = 10 \\implies x = 5', hint: 'Divide both sides by -5 first.' },
  { sub: 'l', eq: '-3(4x + 5) = 57', ans: '-6', step1: '4x + 5 = -19', step2: '4x = -24 \\implies x = -6', hint: 'Divide both sides by -3 first.' }
];

q1List.forEach(q => {
  addQuestion(
    `y9-5c-q1${q.sub}`,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2 || ''}\\)`,
    q.hint,
    [
      {
        explanation: "Divide both sides by the constant outside the bracket.",
        workingOut: `${q.step1}`
      },
      {
        explanation: "Solve the remaining one-step or two-step equation.",
        workingOut: `${q.step2 || q.ans}`
      }
    ]
  );
});

// Q2 Equations
const q2List = [
  { sub: 'a', eq: '3(x + 2) = 14', ans: '8/3', step1: '3x + 6 = 14', step2: '3x = 8 \\implies x = 8/3', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'b', eq: '4(x - 3) = 15', ans: '27/4', step1: '4x - 12 = 15', step2: '4x = 27 \\implies x = 27/4', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'c', eq: '6(2 - x) = 15', ans: '-0.5', step1: '12 - 6x = 15', step2: '-6x = 3 \\implies x = -0.5', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'd', eq: '5(5 - x) = 8', ans: '3.4', step1: '25 - 5x = 8', step2: '-5x = -17 \\implies x = 3.4', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'e', eq: '-3(x - 4) = 8', ans: '4/3', step1: '-3x + 12 = 8', step2: '-3x = -4 \\implies x = 4/3', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'f', eq: '-2(3x - 1) = 5', ans: '-1/2', step1: '-6x + 2 = 5', step2: '-6x = 3 \\implies x = -1/2', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'g', eq: '4(x - 2) = \\frac{1}{3}', ans: '25/12', step1: '4x - 8 = 1/3', step2: '4x = 25/3 \\implies x = 25/12', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'h', eq: '3(2x - 5) = \\frac{2}{5}', ans: '77/30', step1: '6x - 15 = 2/5', step2: '6x = 77/5 \\implies x = 77/30', hint: 'Expand the bracket first, then isolate x.' },
  { sub: 'i', eq: '-2(4x + 3) = \\frac{1}{5}', ans: '-31/40', step1: '-8x - 6 = 1/5', step2: '-8x = 31/5 \\implies x = -31/40', hint: 'Expand the bracket first, then isolate x.' }
];

q2List.forEach(q => {
  addQuestion(
    `y9-5c-q2${q.sub}`,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      {
        explanation: "Expand the bracket.",
        workingOut: `${q.step1}`
      },
      {
        explanation: "Isolate and solve for x.",
        workingOut: `${q.step2}`
      }
    ]
  );
});

// Q3 Equations
const q3List = [
  { sub: 'a', eq: '3(a + 2) + 2(a + 3) = 22', ans: '2', step1: '3a + 6 + 2a + 6 = 22', step2: '5a + 12 = 22 \\implies 5a = 10 \\implies a = 2', hint: 'Expand both brackets and collect like terms.' },
  { sub: 'b', eq: '3(b - 2) + 4(b + 1) = 26', ans: '4', step1: '3b - 6 + 4b + 4 = 26', step2: '7b - 2 = 26 \\implies 7b = 28 \\implies b = 4', hint: 'Expand both brackets and collect like terms.' },
  { sub: 'c', eq: '4(c + 3) - 3(c + 1) = 16', ans: '7', step1: '4c + 12 - 3c - 3 = 16', step2: 'c + 9 = 16 \\implies c = 7', hint: 'Be careful with the negative sign when expanding the second bracket.' },
  { sub: 'd', eq: '3(3d + 1) - 4(d - 2) = 21', ans: '2', step1: '9d + 3 - 4d + 8 = 21', step2: '5d + 11 = 21 \\implies 5d = 10 \\implies d = 2', hint: 'Be careful expanding -4(d - 2).' },
  { sub: 'e', eq: '3(x + 2) - 2(x - 5) = 24', ans: '8', step1: '3x + 6 - 2x + 10 = 24', step2: 'x + 16 = 24 \\implies x = 8', hint: 'Expand brackets and combine like terms.' },
  { sub: 'f', eq: '4(y - 2) - 2(y - 6) = 18', ans: '7', step1: '4y - 8 - 2y + 12 = 18', step2: '2y + 4 = 18 \\implies 2y = 14 \\implies y = 7', hint: 'Collect y terms and solve.' },
  { sub: 'g', eq: '4(a + 1) = 3(a + 3)', ans: '5', step1: '4a + 4 = 3a + 9', step2: 'a = 5', hint: 'Expand brackets on both sides, then collect terms.' },
  { sub: 'h', eq: '4(a + 2) = 2(3a + 1)', ans: '3', step1: '4a + 8 = 6a + 2', step2: '2a = 6 \\implies a = 3', hint: 'Expand both sides first.' },
  { sub: 'i', eq: '3(a + 5) = 6(a + 6)', ans: '-7', step1: '3a + 15 = 6a + 36', step2: '3a = -21 \\implies a = -7', hint: 'Expand both sides first.' },
  { sub: 'j', eq: '4(2a - 1) = 3(2a + 2)', ans: '5', step1: '8a - 4 = 6a + 6', step2: '2a = 10 \\implies a = 5', hint: 'Expand and solve.' },
  { sub: 'k', eq: '-3(x + 2) + 4(x - 1) = 12', ans: '22', step1: '-3x - 6 + 4x - 4 = 12', step2: 'x - 10 = 12 \\implies x = 22', hint: 'Keep track of negative signs during expansion.' },
  { sub: 'l', eq: '-4(x + 2) - 3(x + 1) = 17', ans: '-4', step1: '-4x - 8 - 3x - 3 = 17', step2: '-7x - 11 = 17 \\implies -7x = 28 \\implies x = -4', hint: 'Expand and collect like terms.' },
  { sub: 'm', eq: '\\frac{1}{2}(4x + 6) + 5(x - 1) = 8\\frac{1}{2}', ans: '1.5', step1: '2x + 3 + 5x - 5 = 8.5', step2: '7x - 2 = 8.5 \\implies 7x = 10.5 \\implies x = 1.5', hint: 'Distribute the fraction first.' },
  { sub: 'n', eq: '\\frac{1}{2}(2x + 4) + 3(x - 3) = 11', ans: '4.5', step1: 'x + 2 + 3x - 9 = 11', step2: '4x - 7 = 11 \\implies 4x = 18 \\implies x = 4.5', hint: 'Distribute the fraction first.' }
];

q3List.forEach(q => {
  addQuestion(
    `y9-5c-q3${q.sub}`,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      {
        explanation: "Expand all brackets.",
        workingOut: `${q.step1}`
      },
      {
        explanation: "Group terms and solve for the variable.",
        workingOut: `${q.step2}`
      }
    ]
  );
});

// Write to file
const fileContent = `export const Y9_CH5C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch5CQuestions.js!");
