const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch5DQuestions.js');

const questions = [];

// Helper to push a question
function addQuestion(id, difficulty, timeLimit, question, a, solution, hint, steps) {
  questions.push({
    id,
    type: "short_answer",
    difficulty,
    timeLimit,
    question,
    a,
    solution,
    t: "Linear equations involving fractions",
    hint,
    solutionSteps: steps,
    graphData: null
  });
}

// Q1 Equations (easy, 30s)
const q1List = [
  { sub: 'a', eq: '3x - \\frac{1}{3} = \\frac{1}{6}', ans: '1/6', step1: '3x = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}', step2: 'x = \\frac{1}{6}', hint: 'Add \\frac{1}{3} to both sides first.' },
  { sub: 'b', eq: '2x + \\frac{1}{2} = \\frac{3}{4}', ans: '1/8', step1: '2x = \\frac{3}{4} - \\frac{1}{2} = \\frac{1}{4}', step2: 'x = \\frac{1}{8}', hint: 'Subtract \\frac{1}{2} from both sides first.' },
  { sub: 'c', eq: '\\frac{5}{4} - 3y = \\frac{1}{2}', ans: '1/4', step1: '3y = \\frac{5}{4} - \\frac{1}{2} = \\frac{3}{4}', step2: 'y = \\frac{1}{4}', hint: 'Rearrange the equation to isolate 3y first.' },
  { sub: 'd', eq: '\\frac{5}{2} - 2y = \\frac{3}{4}', ans: '7/8', step1: '2y = \\frac{5}{2} - \\frac{3}{4} = \\frac{7}{4}', step2: 'y = \\frac{7}{8}', hint: 'Rearrange the equation to isolate 2y first.' },
  { sub: 'e', eq: '\\frac{3}{4} + 2x = \\frac{4}{5}', ans: '1/40', step1: '2x = \\frac{4}{5} - \\frac{3}{4} = \\frac{1}{20}', step2: 'x = \\frac{1}{40}', hint: 'Subtract \\frac{3}{4} from both sides first.' },
  { sub: 'f', eq: '-\\frac{2}{3} - 4y = \\frac{1}{4}', ans: '-11/48', step1: '-4y = \\frac{1}{4} + \\frac{2}{3} = \\frac{11}{12}', step2: 'y = -\\frac{11}{48}', hint: 'Add \\frac{2}{3} to both sides first.' },
  { sub: 'g', eq: '-3x + \\frac{1}{2} = \\frac{1}{3}', ans: '1/18', step1: '-3x = \\frac{1}{3} - \\frac{1}{2} = -\\frac{1}{6}', step2: 'x = \\frac{1}{18}', hint: 'Subtract \\frac{1}{2} from both sides first.' },
  { sub: 'h', eq: '-\\frac{3}{4} + 2x = \\frac{1}{3}', ans: '13/24', step1: '2x = \\frac{1}{3} + \\frac{3}{4} = \\frac{13}{12}', step2: 'x = \\frac{13}{24}', hint: 'Add \\frac{3}{4} to both sides first.' },
  { sub: 'i', eq: '-2y - \\frac{1}{3} = \\frac{1}{5}', ans: '-4/15', step1: '-2y = \\frac{1}{5} + \\frac{1}{3} = \\frac{8}{15}', step2: 'y = -\\frac{4}{15}', hint: 'Add \\frac{1}{3} to both sides first.' }
];

q1List.forEach(q => {
  addQuestion(
    `y9-5d-q1${q.sub}`,
    "easy", 30,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the term containing the variable.", workingOut: `${q.step1}` },
      { explanation: "Divide by the coefficient to find the value of the variable.", workingOut: `${q.step2}` }
    ]
  );
});

// Q2 Equations (easy, 30s)
const q2List = [
  { sub: 'a', eq: '\\frac{a}{4} + 6 = 2', ans: '-16', step1: '\\frac{a}{4} = -4', step2: 'a = -16', hint: 'Subtract 6 from both sides first.' },
  { sub: 'b', eq: '\\frac{2a}{3} - \\frac{3}{4} = \\frac{1}{2}', ans: '15/8', step1: '\\frac{2a}{3} = \\frac{5}{4}', step2: '2a = \\frac{15}{4} \\implies a = \\frac{15}{8}', hint: 'Add \\frac{3}{4} to both sides first.' },
  { sub: 'c', eq: '\\frac{b}{5} - 4 = 2', ans: '30', step1: '\\frac{b}{5} = 6', step2: 'b = 30', hint: 'Add 4 to both sides first.' },
  { sub: 'd', eq: '\\frac{2b}{5} + 8 = 4', ans: '-10', step1: '\\frac{2b}{5} = -4', step2: '2b = -20 \\implies b = -10', hint: 'Subtract 8 from both sides first.' },
  { sub: 'e', eq: '3 - \\frac{x}{4} = 6', ans: '-12', step1: '-\\frac{x}{4} = 3', step2: 'x = -12', hint: 'Subtract 3 from both sides first.' },
  { sub: 'f', eq: '4 - \\frac{2x}{3} = 8', ans: '-6', step1: '-\\frac{2x}{3} = 4', step2: '-2x = 12 \\implies x = -6', hint: 'Subtract 4 from both sides first.' },
  { sub: 'g', eq: '\\frac{3}{4}(m - 4) = 3', ans: '8', step1: 'm - 4 = 4', step2: 'm = 8', hint: 'Multiply both sides by 4/3 first.' },
  { sub: 'h', eq: '2\\left(\\frac{m}{4} + 3\\right) = 5', ans: '-2', step1: '\\frac{m}{4} + 3 = 2.5', step2: '\\frac{m}{4} = -0.5 \\implies m = -2', hint: 'Divide both sides by 2 first.' },
  { sub: 'i', eq: '-2\\left(\\frac{x}{5} + 2\\right) = 3', ans: '-17.5', step1: '\\frac{x}{5} + 2 = -1.5', step2: '\\frac{x}{5} = -3.5 \\implies x = -17.5', hint: 'Divide both sides by -2 first.' }
];

q2List.forEach(q => {
  addQuestion(
    `y9-5d-q2${q.sub}`,
    "easy", 30,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the fractional term.", workingOut: `${q.step1}` },
      { explanation: "Solve for the variable.", workingOut: `${q.step2}` }
    ]
  );
});

// Q3 Equations (easy, 30s)
const q3List = [
  { sub: 'a', eq: '\\frac{3y + 2}{2} + 5 = 9', ans: '2', step1: '\\frac{3y + 2}{2} = 4', step2: '3y + 2 = 8 \\implies 3y = 6 \\implies y = 2', hint: 'Subtract 5 first.' },
  { sub: 'b', eq: '\\frac{3x + 4}{2} = 8', ans: '4', step1: '3x + 4 = 16', step2: '3x = 12 \\implies x = 4', hint: 'Multiply both sides by 2 first.' },
  { sub: 'c', eq: '\\frac{4p - 3}{5} - 2 = 3', ans: '7', step1: '\\frac{4p - 3}{5} = 5', step2: '4p - 3 = 25 \\implies 4p = 28 \\implies p = 7', hint: 'Add 2 first.' },
  { sub: 'd', eq: '\\frac{2y - 3}{4} + 3 = 7', ans: '9.5', step1: '\\frac{2y - 3}{4} = 4', step2: '2y - 3 = 16 \\implies 2y = 19 \\implies y = 9.5', hint: 'Subtract 3 first.' },
  { sub: 'e', eq: '\\frac{3x - 2}{4} = 4', ans: '6', step1: '3x - 2 = 16', step2: '3x = 18 \\implies x = 6', hint: 'Multiply both sides by 4 first.' },
  { sub: 'f', eq: '\\frac{3a + 5}{4} - 3 = 2', ans: '5', step1: '\\frac{3a + 5}{4} = 5', step2: '3a + 5 = 20 \\implies 3a = 15 \\implies a = 5', hint: 'Add 3 first.' },
  { sub: 'g', eq: '3 + \\frac{3x - 1}{4} = 8', ans: '7', step1: '\\frac{3x - 1}{4} = 5', step2: '3x - 1 = 20 \\implies 3x = 21 \\implies x = 7', hint: 'Subtract 3 first.' },
  { sub: 'h', eq: '15 - \\frac{5x + 3}{2} = 6', ans: '3', step1: '\\frac{5x + 3}{2} = 9', step2: '5x + 3 = 18 \\implies 5x = 15 \\implies x = 3', hint: 'Rearrange to isolate the fractional term.' },
  { sub: 'i', eq: '2 - \\frac{4y - 2}{3} = -4', ans: '5', step1: '\\frac{4y - 2}{3} = 6', step2: '4y - 2 = 18 \\implies 4y = 20 \\implies y = 5', hint: 'Rearrange to isolate the fractional term.' }
];

q3List.forEach(q => {
  addQuestion(
    `y9-5d-q3${q.sub}`,
    "easy", 30,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the fractional term on one side.", workingOut: `${q.step1}` },
      { explanation: "Eliminate the denominator and solve for the variable.", workingOut: `${q.step2}` }
    ]
  );
});

// Q4 Equations (easy, 30s)
const q4List = [
  { sub: 'a', eq: 'e + 2.4 = 5.7', ans: '3.3', step1: 'e = 5.7 - 2.4', step2: 'e = 3.3', hint: 'Subtract 2.4 from both sides.' },
  { sub: 'b', eq: 'f + 4.8 = 9.2', ans: '4.4', step1: 'f = 9.2 - 4.8', step2: 'f = 4.4', hint: 'Subtract 4.8 from both sides.' },
  { sub: 'c', eq: 'g - 3.5 = 4.7', ans: '8.2', step1: 'g = 4.7 + 3.5', step2: 'g = 8.2', hint: 'Add 3.5 to both sides.' },
  { sub: 'd', eq: 'h - 2.4 = 7.9', ans: '10.3', step1: 'h = 7.9 + 2.4', step2: 'h = 10.3', hint: 'Add 2.4 to both sides.' },
  { sub: 'e', eq: '1.5u = 18.0', ans: '12', step1: 'u = 18.0 / 1.5', step2: 'u = 12', hint: 'Divide both sides by 1.5.' },
  { sub: 'f', eq: '2.5r = 8', ans: '3.2', step1: 'r = 8 / 2.5', step2: 'r = 3.2', hint: 'Divide both sides by 2.5.' },
  { sub: 'g', eq: '-3.6x = 28.8', ans: '-8', step1: 'x = 28.8 / -3.6', step2: 'x = -8', hint: 'Divide both sides by -3.6.' },
  { sub: 'h', eq: '-4.5y = 31.5', ans: '-7', step1: 'y = 31.5 / -4.5', step2: 'y = -7', hint: 'Divide both sides by -4.5.' },
  { sub: 'i', eq: '1.5x + 3 = 12', ans: '6', step1: '1.5x = 9', step2: 'x = 6', hint: 'Subtract 3 first, then divide by 1.5.' },
  { sub: 'j', eq: '2.4x - 5 = 9.4', ans: '6', step1: '2.4x = 14.4', step2: 'x = 6', hint: 'Add 5 first, then divide by 2.4.' },
  { sub: 'k', eq: '3.5x - 1.5 = 23', ans: '7', step1: '3.5x = 24.5', step2: 'x = 7', hint: 'Add 1.5 first, then divide by 3.5.' },
  { sub: 'l', eq: '6.4x - 38.2 = 51.4', ans: '14', step1: '6.4x = 89.6', step2: 'x = 14', hint: 'Add 38.2 first, then divide by 6.4.' }
];

q4List.forEach(q => {
  addQuestion(
    `y9-5d-q4${q.sub}`,
    "easy", 30,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the variable term.", workingOut: `${q.step1}` },
      { explanation: "Solve for the variable.", workingOut: `${q.step2}` }
    ]
  );
});

// Q5 Equations (medium, 90s)
const q5List = [
  { sub: 'a', eq: '\\frac{5x}{6} - 2 = \\frac{x}{3} + 3', ans: '10', step1: '5x - 12 = 2x + 18', step2: '3x = 30 \\implies x = 10', hint: 'Multiply all terms by the LCD (6) to clear fractions.' },
  { sub: 'b', eq: '\\frac{x}{4} + 3 = \\frac{5x}{4} + 1', ans: '2', step1: 'x + 12 = 5x + 4', step2: '4x = 8 \\implies x = 2', hint: 'Multiply all terms by 4 to clear fractions.' },
  { sub: 'c', eq: '\\frac{3x}{4} + 5 = \\frac{5x}{8} - 2', ans: '-56', step1: '6x + 40 = 5x - 16', step2: 'x = -56', hint: 'Multiply all terms by the LCD (8) to clear fractions.' },
  { sub: 'd', eq: '\\frac{4x}{5} - 5 = \\frac{7x}{10} + 2', ans: '70', step1: '8x - 50 = 7x + 20', step2: 'x = 70', hint: 'Multiply all terms by the LCD (10) to clear fractions.' },
  { sub: 'e', eq: '\\frac{3x}{4} - 4 = 8 - \\frac{x}{2}', ans: '9.6', step1: '3x - 16 = 32 - 2x', step2: '5x = 48 \\implies x = 9.6', hint: 'Multiply all terms by 4 to clear fractions.' },
  { sub: 'f', eq: '\\frac{x}{2} - 3 = 5 - \\frac{3x}{4}', ans: '6.4', step1: '2x - 12 = 20 - 3x', step2: '5x = 32 \\implies x = 6.4', hint: 'Multiply all terms by 4 to clear fractions.' },
  { sub: 'g', eq: '\\frac{7}{4} - \\frac{x}{3} = \\frac{5x}{6} + \\frac{11}{12}', ans: '5/7', step1: '21 - 4x = 10x + 11', step2: '14x = 10 \\implies x = 5/7', hint: 'Multiply all terms by the LCD (12) to clear fractions.' },
  { sub: 'h', eq: '\\frac{7}{10} - \\frac{3x}{5} = \\frac{x}{2} - \\frac{1}{2}', ans: '12/11', step1: '7 - 6x = 5x - 5', step2: '11x = 12 \\implies x = 12/11', hint: 'Multiply all terms by the LCD (10) to clear fractions.' }
];

q5List.forEach(q => {
  addQuestion(
    `y9-5d-q5${q.sub}`,
    "medium", 90,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Multiply both sides by the LCD to eliminate denominators.", workingOut: `${q.step1}` },
      { explanation: "Group like terms and solve for x.", workingOut: `${q.step2}` }
    ]
  );
});

// Q6 Equations (medium, 90s)
const q6List = [
  { sub: 'a', eq: '2.4x + 15 = 1.6x + 19', ans: '5', step1: '0.8x = 4', step2: 'x = 5', hint: 'Subtract 1.6x and 15 from both sides.' },
  { sub: 'b', eq: '4.8x - 9 = 1.3x + 26', ans: '10', step1: '3.5x = 35', step2: 'x = 10', hint: 'Subtract 1.3x and add 9 to both sides.' },
  { sub: 'c', eq: '6.4x + 18 = 54 - 2.6x', ans: '4', step1: '9x = 36', step2: 'x = 4', hint: 'Add 2.6x and subtract 18 from both sides.' },
  { sub: 'd', eq: '3.5 - 2.4x = 14 + 1.1x', ans: '-3', step1: '-3.5x = 10.5', step2: 'x = -3', hint: 'Subtract 1.1x and 3.5 from both sides.' },
  { sub: 'e', eq: '2.5x + 4.8 = 9.3 - 0.5x', ans: '1.5', step1: '3x = 4.5', step2: 'x = 1.5', hint: 'Add 0.5x and subtract 4.8 from both sides.' },
  { sub: 'f', eq: '8.7x + 5.4 = 47.4 - 1.8x', ans: '4', step1: '10.5x = 42', step2: 'x = 4', hint: 'Add 1.8x and subtract 5.4 from both sides.' }
];

q6List.forEach(q => {
  addQuestion(
    `y9-5d-q6${q.sub}`,
    "medium", 90,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Group x terms on one side and constant terms on the other side.", workingOut: `${q.step1}` },
      { explanation: "Divide to find the value of x.", workingOut: `${q.step2}` }
    ]
  );
});

// Q7 Equations (medium, 90s)
const q7List = [
  { sub: 'a', eq: '\\frac{a + 4}{3} = \\frac{a + 1}{4}', ans: '-13', step1: '4(a + 4) = 3(a + 1)', step2: '4a + 16 = 3a + 3 \\implies a = -13', hint: 'Cross-multiply to clear the denominators.' },
  { sub: 'b', eq: '\\frac{a + 2}{4} = \\frac{2a - 3}{9}', ans: '-30', step1: '9(a + 2) = 4(2a - 3)', step2: '9a + 18 = 8a - 12 \\implies a = -30', hint: 'Cross-multiply to clear the denominators.' },
  { sub: 'c', eq: '\\frac{2a + 3}{5} = \\frac{3a + 2}{7}', ans: '11', step1: '7(2a + 3) = 5(3a + 2)', step2: '14a + 21 = 15a + 10 \\implies a = 11', hint: 'Cross-multiply to clear the denominators.' },
  { sub: 'd', eq: '\\frac{a + 2}{3} + 1 = \\frac{a - 2}{4}', ans: '-26', step1: '4(a + 2) + 12 = 3(a - 2)', step2: '4a + 8 + 12 = 3a - 6 \\implies a = -26', hint: 'Multiply all terms by the LCD (12).' },
  { sub: 'e', eq: '\\frac{2a + 3}{5} + 3 = a', ans: '6', step1: '2a + 3 + 15 = 5a', step2: '18 = 3a \\implies a = 6', hint: 'Multiply all terms by 5.' },
  { sub: 'f', eq: '\\frac{2a + 3}{4} + \\frac{a}{2} = 6', ans: '21/4', step1: '2a + 3 + 2a = 24', step2: '4a + 3 = 24 \\implies 4a = 21 \\implies a = 21/4', hint: 'Multiply all terms by the LCD (4).' },
  { sub: 'g', eq: '\\frac{3a - 4}{6} = \\frac{a - 3}{3}', ans: '-2', step1: '3a - 4 = 2(a - 3)', step2: '3a - 4 = 2a - 6 \\implies a = -2', hint: 'Multiply both sides by 6.' },
  { sub: 'h', eq: '\\frac{2a - 3}{2} - 3 = \\frac{a + 1}{3}', ans: '29/4', step1: '3(2a - 3) - 18 = 2(a + 1)', step2: '6a - 9 - 18 = 2a + 2 \\implies 4a = 29 \\implies a = 29/4', hint: 'Multiply all terms by the LCD (6).' },
  { sub: 'i', eq: '\\frac{3a - 2}{4} + a = 3', ans: '2', step1: '3a - 2 + 4a = 12', step2: '7a = 14 \\implies a = 2', hint: 'Multiply all terms by 4.' },
  { sub: 'j', eq: '\\frac{a}{3} + \\frac{a - 2}{4} = \\frac{a + 2}{6}', ans: '2', step1: '4a + 3(a - 2) = 2(a + 2)', step2: '7a - 6 = 2a + 4 \\implies 5a = 10 \\implies a = 2', hint: 'Multiply all terms by the LCD (12).' }
];

q7List.forEach(q => {
  addQuestion(
    `y9-5d-q7${q.sub}`,
    "medium", 90,
    `Solve the equation for \\(a\\): \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Multiply all terms by the LCD to eliminate denominators.", workingOut: `${q.step1}` },
      { explanation: "Expand, group like terms, and solve.", workingOut: `${q.step2}` }
    ]
  );
});

// Q8 Equations (medium, 90s)
const q8List = [
  { sub: 'a', eq: '4a + 7 = 23', ans: '4', step1: '4a = 16', step2: 'a = 4', hint: 'Subtract 7 then divide by 4.' },
  { sub: 'b', eq: '5b - 8 = 37', ans: '9', step1: '5b = 45', step2: 'b = 9', hint: 'Add 8 then divide by 5.' },
  { sub: 'c', eq: '\\frac{c}{4} - 3 = 5', ans: '32', step1: '\\frac{c}{4} = 8', step2: 'c = 32', hint: 'Add 3 then multiply by 4.' },
  { sub: 'd', eq: '\\frac{d}{3} + 5 = 2', ans: '-9', step1: '\\frac{d}{3} = -3', step2: 'd = -9', hint: 'Subtract 5 then multiply by 3.' },
  { sub: 'e', eq: '\\frac{3e}{2} + \\frac{1}{3} = 3', ans: '16/9', step1: '9e + 2 = 18', step2: '9e = 16 \\implies e = 16/9', hint: 'Multiply all terms by the LCD (6).' },
  { sub: 'f', eq: '\\frac{3f}{4} - 2 = \\frac{2}{5}', ans: '16/5', step1: '15f - 40 = 8', step2: '15f = 48 \\implies f = 16/5', hint: 'Multiply all terms by the LCD (20).' },
  { sub: 'g', eq: '3g + 4 = 8g - 11', ans: '3', step1: '15 = 5g', step2: 'g = 3', hint: 'Subtract 3g and add 11 to both sides.' },
  { sub: 'h', eq: '5h - 3 = 7 - 5h', ans: '1', step1: '10h = 10', step2: 'h = 1', hint: 'Add 5h and add 3 to both sides.' },
  { sub: 'i', eq: '3(i - 2) = 4(i + 5)', ans: '-26', step1: '3i - 6 = 4i + 20', step2: 'i = -26', hint: 'Expand brackets on both sides.' },
  { sub: 'j', eq: '4(j + 3) = 3(2j - 1)', ans: '7.5', step1: '4j + 12 = 6j - 3', step2: '2j = 15 \\implies j = 7.5', hint: 'Expand brackets on both sides.' },
  { sub: 'k', eq: '3(k + 2) - 4(k - 1) = 8', ans: '2', step1: '3k + 6 - 4k + 4 = 8', step2: '-k + 10 = 8 \\implies k = 2', hint: 'Expand brackets and combine like terms.' },
  { sub: 'l', eq: '3(\\ell - 2) + 2(\\ell + 3) = 15', ans: '3', step1: '3\\ell - 6 + 2\\ell + 6 = 15', step2: '5\\ell = 15 \\implies \\ell = 3', hint: 'Expand brackets and combine like terms.' },
  { sub: 'm', eq: '\\frac{m + 2}{4} = \\frac{m - 3}{6}', ans: '-12', step1: '6(m + 2) = 4(m - 3)', step2: '6m + 12 = 4m - 12 \\implies 2m = -24 \\implies m = -12', hint: 'Cross-multiply to solve.' },
  { sub: 'n', eq: '\\frac{2n - 3}{4} = \\frac{3n + 1}{5}', ans: '-19/2', step1: '5(2n - 3) = 4(3n + 1)', step2: '10n - 15 = 12n + 4 \\implies 2n = -19 \\implies n = -19/2', hint: 'Cross-multiply to solve.' },
  { sub: 'o', eq: '\\frac{3q - 3}{4} + 2 = 3q', ans: '5/9', step1: '3q - 3 + 8 = 12q', step2: '5 = 9q \\implies q = 5/9', hint: 'Multiply all terms by 4.' },
  { sub: 'p', eq: '\\frac{2r + 3}{5} + 1 = \\frac{3r - 2}{6}', ans: '58/3', step1: '6(2r + 3) + 30 = 5(3r - 2)', step2: '12r + 18 + 30 = 15r - 10 \\implies 3r = 58 \\implies r = 58/3', hint: 'Multiply all terms by the LCD (30).' }
];

q8List.forEach(q => {
  addQuestion(
    `y9-5d-q8${q.sub}`,
    "medium", 90,
    `Solve the equation: \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Simplify the equation by expanding brackets or clearing fractions.", workingOut: `${q.step1}` },
      { explanation: "Isolate the variable and solve.", workingOut: `${q.step2}` }
    ]
  );
});

// Write to file
const fileContent = `export const Y9_CH5D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch5DQuestions.js!");
