const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch5HQuestions.js');

const questions = [];

// Helper to push a question
function addQuestion(id, type, difficulty, timeLimit, question, a, opts, solution, hint, steps) {
  questions.push({
    id,
    type,
    difficulty,
    timeLimit,
    question,
    a,
    opts,
    solution,
    t: "Solving linear inequalities",
    hint,
    solutionSteps: steps,
    graphData: null
  });
}

// Q1 (easy, 30s)
addQuestion(
  "y9-5h-q1a", "short_answer", "easy", 30,
  "If \\(x < 8\\), how many different values can \\(x\\) take?",
  "Infinitely many",
  null,
  "Since there are infinitely many real numbers less than 8, \\(x\\) can take infinitely many different values.",
  "Consider decimal and fractional values as well.",
  [{ explanation: "Identify the number of real numbers satisfying the inequality.", workingOut: "\\text{Infinitely many values}" }]
);

addQuestion(
  "y9-5h-q1b", "short_answer", "easy", 30,
  "If \\(x > 12\\), how many different values can \\(x\\) take?",
  "Infinitely many",
  null,
  "Since there are infinitely many real numbers greater than 12, \\(x\\) can take infinitely many different values.",
  "Consider decimal and fractional values as well.",
  [{ explanation: "Identify the number of real numbers satisfying the inequality.", workingOut: "\\text{Infinitely many values}" }]
);

addQuestion(
  "y9-5h-q1c", "multiple_choice", "easy", 30,
  "Which of the following is a set of three integer values of \\(x\\) that satisfy \\(x > -2\\)?",
  "-1, 0, 1",
  ["-1, 0, 1", "-3, -4, -5", "-2, -3, -4", "-5, -6, -7"],
  "The values must be strictly greater than -2. Therefore, -1, 0, and 1 satisfy the inequality.",
  "Choose the set where all numbers are greater than -2.",
  [{ explanation: "Test the values against the inequality x > -2.", workingOut: "-1 > -2, 0 > -2, 1 > -2" }]
);

addQuestion(
  "y9-5h-q1d", "multiple_choice", "easy", 30,
  "Which of the following is a set of three non-whole numbers that satisfy \\(x > 3\\)?",
  "3.5, 4.2, 5.1",
  ["3.5, 4.2, 5.1", "1.5, 2.3, 2.9", "3, 4, 5", "2.5, 3.0, 3.5"],
  "Non-whole numbers are decimals/fractions. The values must be strictly greater than 3. Therefore, 3.5, 4.2, and 5.1 satisfy the inequality.",
  "Choose the decimal set where all numbers are greater than 3.",
  [{ explanation: "Check that all values are decimals greater than 3.", workingOut: "3.5 > 3, 4.2 > 3, 5.1 > 3" }]
);

// Q2 (easy, 30s)
const q2List = [
  { sub: 'a', eq: 'x + 4 \\ge 9', ans: 'x>=5', step1: 'x \\ge 9 - 4', step2: 'x \\ge 5', hint: 'Subtract 4 from both sides.' },
  { sub: 'b', eq: 'x - 5 \\le 3', ans: 'x<=8', step1: 'x \\le 3 + 5', step2: 'x \\le 8', hint: 'Add 5 to both sides.' },
  { sub: 'c', eq: 'x + 10 > 7', ans: 'x>-3', step1: 'x > 7 - 10', step2: 'x > -3', hint: 'Subtract 10 from both sides.' },
  { sub: 'd', eq: 'x - 3 < 5', ans: 'x<8', step1: 'x < 5 + 3', step2: 'x < 8', hint: 'Add 3 to both sides.' },
  { sub: 'e', eq: 'x + 5 \\ge -6', ans: 'x>=-11', step1: 'x \\ge -6 - 5', step2: 'x \\ge -11', hint: 'Subtract 5 from both sides.' },
  { sub: 'f', eq: 'x - 8 > -5', ans: 'x>3', step1: 'x > -5 + 8', step2: 'x > 3', hint: 'Add 8 to both sides.' },
  { sub: 'g', eq: 'x - 4 > -10', ans: 'x>-6', step1: 'x > -10 + 4', step2: 'x > -6', hint: 'Add 4 to both sides.' },
  { sub: 'h', eq: '3x \\ge 12', ans: 'x>=4', step1: 'x \\ge \\frac{12}{3}', step2: 'x \\ge 4', hint: 'Divide both sides by 3.' },
  { sub: 'i', eq: '4x > -20', ans: 'x>-5', step1: 'x > \\frac{-20}{4}', step2: 'x > -5', hint: 'Divide both sides by 4.' },
  { sub: 'j', eq: '\\frac{x}{4} < 6', ans: 'x<24', step1: 'x < 6 \\times 4', step2: 'x < 24', hint: 'Multiply both sides by 4.' },
  { sub: 'k', eq: '\\frac{x}{3} \\ge 8', ans: 'x>=24', step1: 'x \\ge 8 \\times 3', step2: 'x \\ge 24', hint: 'Multiply both sides by 3.' },
  { sub: 'l', eq: '\\frac{x}{4} \\le -2', ans: 'x<=-8', step1: 'x \\le -2 \\times 4', step2: 'x \\le -8', hint: 'Multiply both sides by 4.' }
];

q2List.forEach(q => {
  addQuestion(
    `y9-5h-q2${q.sub}`,
    "short_answer", "easy", 30,
    `Solve the inequality: \\(${q.eq}\\)`,
    q.ans,
    null,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the variable term.", workingOut: `${q.step1}` },
      { explanation: "Solve for x.", workingOut: `${q.step2}` }
    ]
  );
});

// Q3 (easy, 30s)
const q3List = [
  { sub: 'a', eq: '3x + 2 \\ge 11', ans: 'x>=3', step1: '3x \\ge 9', step2: 'x \\ge 3', hint: 'Subtract 2 first, then divide by 3.' },
  { sub: 'b', eq: '2x - 5 \\le 7', ans: 'x<=6', step1: '2x \\le 12', step2: 'x \\le 6', hint: 'Add 5 first, then divide by 2.' },
  { sub: 'c', eq: '3x - 7 \\le -4', ans: 'x<=1', step1: '3x \\le 3', step2: 'x \\le 1', hint: 'Add 7 first, then divide by 3.' },
  { sub: 'd', eq: '\\frac{3x}{2} > 9', ans: 'x>6', step1: '3x > 18', step2: 'x > 6', hint: 'Multiply by 2 first.' },
  { sub: 'e', eq: '\\frac{2x}{3} \\ge 4', ans: 'x>=6', step1: '2x \\ge 12', step2: 'x \\ge 6', hint: 'Multiply by 3 first.' },
  { sub: 'f', eq: '\\frac{3x}{5} \\le -3', ans: 'x<=-5', step1: '3x \\le -15', step2: 'x \\le -5', hint: 'Multiply by 5 first.' },
  { sub: 'g', eq: '2(x + 4) \\ge 10', ans: 'x>=1', step1: 'x + 4 \\ge 5', step2: 'x \\ge 1', hint: 'Divide by 2 first.' },
  { sub: 'h', eq: '3(2x - 1) > 9', ans: 'x>2', step1: '2x - 1 > 3', step2: '2x > 4 \\implies x > 2', hint: 'Divide by 3 first.' },
  { sub: 'i', eq: '\\frac{3x}{5} \\le 6', ans: 'x<=10', step1: '3x \\le 30', step2: 'x \\le 10', hint: 'Multiply by 5 first.' },
  { sub: 'j', eq: '\\frac{x}{2} - \\frac{1}{3} \\ge 1', ans: 'x>=8/3', step1: '\\frac{x}{2} \\ge \\frac{4}{3}', step2: 'x \\ge \\frac{8}{3}', hint: 'Add \\frac{1}{3} first.' },
  { sub: 'k', eq: '\\frac{3x}{4} + \\frac{1}{2} > 5', ans: 'x>6', step1: '\\frac{3x}{4} > 4.5', step2: '3x > 18 \\implies x > 6', hint: 'Subtract \\frac{1}{2} first.' },
  { sub: 'l', eq: '3(x - 2) \\le 7', ans: 'x<=13/3', step1: '3x - 6 \\le 7', step2: '3x \\le 13 \\implies x \\le \\frac{13}{3}', hint: 'Expand the bracket first.' }
];

q3List.forEach(q => {
  addQuestion(
    `y9-5h-q3${q.sub}`,
    "short_answer", "easy", 30,
    `Solve the inequality: \\(${q.eq}\\)`,
    q.ans,
    null,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the variable term.", workingOut: `${q.step1}` },
      { explanation: "Solve for x.", workingOut: `${q.step2}` }
    ]
  );
});

// Q4 (easy, 30s)
const q4List = [
  { sub: 'a', eq: '-3x \\le 15', ans: 'x>=-5', step1: 'x \\ge \\frac{15}{-3}', step2: 'x \\ge -5', hint: 'Flip the inequality sign when dividing by a negative number.' },
  { sub: 'b', eq: '-5x \\ge 65', ans: 'x<=-13', step1: 'x \\le \\frac{65}{-5}', step2: 'x \\le -13', hint: 'Flip the inequality sign when dividing by a negative number.' },
  { sub: 'c', eq: '-8x > -28', ans: 'x<3.5', step1: 'x < \\frac{-28}{-8}', step2: 'x < 3.5', hint: 'Flip the inequality sign when dividing by a negative number.' },
  { sub: 'd', eq: '-\\frac{x}{3} \\le 4', ans: 'x>=-12', step1: 'x \\ge 4 \\times (-3)', step2: 'x \\ge -12', hint: 'Flip the inequality sign when multiplying by a negative number.' },
  { sub: 'e', eq: '-\\frac{x}{5} \\ge 6', ans: 'x<=-30', step1: 'x \\le 6 \\times (-5)', step2: 'x \\le -30', hint: 'Flip the inequality sign when multiplying by a negative number.' },
  { sub: 'f', eq: '-\\frac{x}{4} > 5', ans: 'x<-20', step1: 'x < 5 \\times (-4)', step2: 'x < -20', hint: 'Flip the inequality sign when multiplying by a negative number.' },
  { sub: 'g', eq: '-\\frac{x}{10} < 5', ans: 'x>-50', step1: 'x > 5 \\times (-10)', step2: 'x > -50', hint: 'Flip the inequality sign.' },
  { sub: 'h', eq: '-\\frac{x}{3} \\ge -5', ans: 'x<=15', step1: 'x \\le -5 \\times (-3)', step2: 'x \\le 15', hint: 'Flip the inequality sign.' },
  { sub: 'i', eq: '3 - \\frac{x}{6} > 5', ans: 'x<-12', step1: '-\\frac{x}{6} > 2', step2: 'x < -12', hint: 'Subtract 3 first, then multiply by -6 and flip the sign.' }
];

q4List.forEach(q => {
  addQuestion(
    `y9-5h-q4${q.sub}`,
    "short_answer", "easy", 30,
    `Solve the inequality: \\(${q.eq}\\)`,
    q.ans,
    null,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the fractional variable term.", workingOut: `${q.step1}` },
      { explanation: "Perform the multiplication/division and flip the inequality sign.", workingOut: `${q.step2}` }
    ]
  );
});

// Q5 (easy, 30s)
const q5List = [
  { sub: 'a', eq: '4 - 3x > 10', ans: 'x<-2', step1: '-3x > 6', step2: 'x < -2', hint: 'Subtract 4 first, then divide by -3 and flip the sign.' },
  { sub: 'b', eq: '3 - 4x \\le -9', ans: 'x>=3', step1: '-4x \\le -12', step2: 'x \\ge 3', hint: 'Subtract 3 first, then divide by -4 and flip the sign.' },
  { sub: 'c', eq: '3(5 - x) < 6', ans: 'x>3', step1: '15 - 3x < 6 \\implies -3x < -9', step2: 'x > 3', hint: 'Expand the bracket first.' },
  { sub: 'd', eq: '5 - \\frac{3x}{2} < 2', ans: 'x>2', step1: '-\\frac{3x}{2} < -3', step2: '3x > 6 \\implies x > 2', hint: 'Subtract 5 first, then multiply by -2 and flip the sign.' },
  { sub: 'e', eq: '5 - \\frac{3x}{4} \\ge 8', ans: 'x<=-4', step1: '-\\frac{3x}{4} \\ge 3', step2: '3x \\le -12 \\implies x \\le -4', hint: 'Subtract 5 first.' },
  { sub: 'f', eq: '6 - \\frac{2x}{5} \\ge 4', ans: 'x<=5', step1: '-\\frac{2x}{5} \\ge -2', step2: '2x \\le 10 \\implies x \\le 5', hint: 'Subtract 6 first.' }
];

q5List.forEach(q => {
  addQuestion(
    `y9-5h-q5${q.sub}`,
    "short_answer", "easy", 30,
    `Solve the inequality: \\(${q.eq}\\)`,
    q.ans,
    null,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the variable term.", workingOut: `${q.step1}` },
      { explanation: "Divide or multiply by the coefficient and reverse the inequality sign.", workingOut: `${q.step2}` }
    ]
  );
});

// Q6 (medium, 90s)
const q6List = [
  { sub: 'a', eq: '\\frac{x + 4}{3} \\le \\frac{6 - x}{3}', ans: 'x<=1', step1: 'x + 4 \\le 6 - x', step2: '2x \\le 2 \\implies x \\le 1', hint: 'Multiply both sides by 3 to clear denominators.' },
  { sub: 'b', eq: '\\frac{3x - 1}{2} - \\frac{2x + 3}{3} > 2', ans: 'x>4.2', step1: '3(3x - 1) - 2(2x + 3) > 12', step2: '9x - 3 - 4x - 6 > 12 \\implies 5x - 9 > 12 \\implies 5x > 21 \\implies x > 4.2', hint: 'Multiply all terms by the LCD (6) to clear fractions.' }
];

q6List.forEach(q => {
  addQuestion(
    `y9-5h-q6${q.sub}`,
    "short_answer", "medium", 90,
    `Solve the inequality: \\(${q.eq}\\)`,
    q.ans,
    null,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Multiply both sides by the LCD to eliminate denominators.", workingOut: `${q.step1}` },
      { explanation: "Expand, collect like terms, and solve for x.", workingOut: `${q.step2}` }
    ]
  );
});

// Q7 (medium, 90s)
const q7List = [
  { sub: 'a', eq: '1.5x + 4.5 \\le 12.0', ans: 'x<=5', step1: '1.5x \\le 7.5', step2: 'x \\le 5', hint: 'Subtract 4.5 first.' },
  { sub: 'b', eq: '2.5x - 3.5 > 11.5', ans: 'x>6', step1: '2.5x > 15', step2: 'x > 6', hint: 'Add 3.5 first.' },
  { sub: 'c', eq: '4.8 - 1.5x > 13.8', ans: 'x<-6', step1: '-1.5x > 9', step2: 'x < -6', hint: 'Subtract 4.8, then divide by -1.5 and flip the sign.' },
  { sub: 'd', eq: '3.5 - 1.2x \\le 11.9', ans: 'x>=-7', step1: '-1.2x \\le 8.4', step2: 'x \\ge -7', hint: 'Subtract 3.5, then divide by -1.2 and flip the sign.' },
  { sub: 'e', eq: '2.5(x + 4) \\le 1.5(x - 2)', ans: 'x<=-13', step1: '2.5x + 10 \\le 1.5x - 3', step2: 'x \\le -13', hint: 'Expand brackets on both sides first.' },
  { sub: 'f', eq: '3.5(x - 2) > 1.5(x + 2)', ans: 'x>5', step1: '3.5x - 7 > 1.5x + 3', step2: '2x > 10 \\implies x > 5', hint: 'Expand brackets on both sides first.' }
];

q7List.forEach(q => {
  addQuestion(
    `y9-5h-q7${q.sub}`,
    "short_answer", "medium", 90,
    `Solve the inequality: \\(${q.eq}\\)`,
    q.ans,
    null,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Isolate the variable terms.", workingOut: `${q.step1}` },
      { explanation: "Divide by the coefficient (remembering to reverse the sign if it is negative).", workingOut: `${q.step2}` }
    ]
  );
});

// Q8 (medium, 90s)
const q8List = [
  { sub: 'a', eq: '3x - 12 \\le 9', ans: 'x<=7', step1: '3x \\le 21', step2: 'x \\le 7', hint: 'Add 12 first.' },
  { sub: 'b', eq: '-4x + 5 \\ge 57', ans: 'x<=-13', step1: '-4x \\ge 52', step2: 'x \\le -13', hint: 'Subtract 5 first, then divide by -4 and flip the sign.' },
  { sub: 'c', eq: '\\frac{3x + 2}{4} > -4', ans: 'x>-6', step1: '3x + 2 > -16', step2: '3x > -18 \\implies x > -6', hint: 'Multiply both sides by 4 first.' },
  { sub: 'd', eq: '-\\frac{x + 3}{2} \\le 5', ans: 'x>=-13', step1: 'x + 3 \\ge -10', step2: 'x \\ge -13', hint: 'Multiply by -2 and reverse the inequality sign.' },
  { sub: 'e', eq: '\\frac{x - 6}{3} - \\frac{3x}{4} \\ge 2', ans: 'x<=-9.6', step1: '4(x - 6) - 9x \\ge 24', step2: '-5x \\ge 48 \\implies x \\le -9.6', hint: 'Multiply all terms by the LCD (12).' },
  { sub: 'f', eq: '\\frac{x}{3} > \\frac{x + 8}{4}', ans: 'x>24', step1: '4x > 3(x + 8)', step2: '4x > 3x + 24 \\implies x > 24', hint: 'Multiply both sides by 12 to clear fractions.' }
];

q8List.forEach(q => {
  addQuestion(
    `y9-5h-q8${q.sub}`,
    "short_answer", "medium", 90,
    `Solve the inequality: \\(${q.eq}\\)`,
    q.ans,
    null,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Eliminate fractions or group variable terms.", workingOut: `${q.step1}` },
      { explanation: "Solve for x.", workingOut: `${q.step2}` }
    ]
  );
});

// Q9 (medium, 90s)
addQuestion(
  "y9-5h-q9", "short_answer", "medium", 90,
  "When 7 is added to three times \\(p\\), the result is greater than 25. What values can \\(p\\) take?",
  "p>6",
  null,
  "\\(3p + 7 > 25\\)\n\\(3p > 18\\)\n\\(p > 6\\)",
  "Form the inequality \\(3p + 7 > 25\\).",
  [
    { explanation: "Formulate the inequality.", workingOut: "3p + 7 > 25" },
    { explanation: "Subtract 7 and divide by 3.", workingOut: "3p > 18 \\implies p > 6" }
  ]
);

// Q10 (medium, 90s)
addQuestion(
  "y9-5h-q10", "short_answer", "medium", 90,
  "When 12 is subtracted from half of \\(q\\), the result is less than 15. What values can \\(q\\) take?",
  "q<54",
  null,
  "\\(\\frac{q}{2} - 12 < 15\\)\n\\(\\frac{q}{2} < 27\\)\n\\(q < 54\\)",
  "Form the inequality \\(\\frac{q}{2} - 12 < 15\\).",
  [
    { explanation: "Formulate the inequality.", workingOut: "\\frac{q}{2} - 12 < 15" },
    { explanation: "Add 12 and multiply by 2.", workingOut: "\\frac{q}{2} < 27 \\implies q < 54" }
  ]
);

// Q11 (hard, 120s)
addQuestion(
  "y9-5h-q11", "short_answer", "hard", 120,
  "When \\(3p\\) is subtracted from 15, the result is greater than or equal to 6. What values can \\(p\\) take?",
  "p<=3",
  null,
  "\\(15 - 3p \\ge 6\\)\n\\(-3p \\ge -9\\)\n\\(p \\le 3\\)",
  "Form the inequality \\(15 - 3p \\ge 6\\) and reverse the inequality sign when dividing by -3.",
  [
    { explanation: "Formulate the inequality.", workingOut: "15 - 3p \\ge 6" },
    { explanation: "Isolate the variable term.", workingOut: "-3p \\ge -9" },
    { explanation: "Divide by -3 and flip the inequality sign.", workingOut: "p \\le 3" }
  ]
);

// Q12 (hard, 120s)
addQuestion(
  "y9-5h-q12", "short_answer", "hard", 120,
  "The sum of \\(5d\\) and 8 is greater than the sum of \\(3d\\) and 20. What values can \\(d\\) take?",
  "d>6",
  null,
  "\\(5d + 8 > 3d + 20\\)\n\\(2d > 12\\)\n\\(d > 6\\)",
  "Form the inequality \\(5d + 8 > 3d + 20\\).",
  [
    { explanation: "Formulate the inequality.", workingOut: "5d + 8 > 3d + 20" },
    { explanation: "Subtract 3d and 8 from both sides.", workingOut: "2d > 12" },
    { explanation: "Divide by 2.", workingOut: "d > 6" }
  ]
);

// Q13 (hard, 120s)
addQuestion(
  "y9-5h-q13", "short_answer", "hard", 120,
  "A number \\(a\\) is increased by 5 and this amount is then tripled. If the result of this is greater than \\(a\\), what values can \\(a\\) take?",
  "a>-7.5",
  null,
  "\\(3(a + 5) > a\\)\n\\(3a + 15 > a\\)\n\\(2a > -15 \\implies a > -7.5\\)",
  "Form the inequality \\(3(a + 5) > a\\).",
  [
    { explanation: "Formulate the inequality.", workingOut: "3(a + 5) > a" },
    { explanation: "Expand the bracket.", workingOut: "3a + 15 > a" },
    { explanation: "Gather variable terms and solve.", workingOut: "2a > -15 \\implies a > -7.5" }
  ]
);

// Q14 (hard, 120s)
addQuestion(
  "y9-5h-q14ai", "short_answer", "hard", 120,
  "GoCar hire firm offers a deal: \\(\\$30\\) plus 5 cents per km. If a client is to drive \\(x\\text{ km}\\), express the cost of hiring in terms of \\(x\\) (in dollars).",
  "30+0.05x",
  null,
  "The fixed cost is \\(\\$30\\). The variable cost is 5 cents (\\(\\$0.05\\)) per km. Total cost = \\(30 + 0.05x\\).",
  "Convert cents to dollars: 5 cents = \\(\\$0.05\\).",
  [{ explanation: "Formulate the expression.", workingOut: "30 + 0.05x" }]
);

addQuestion(
  "y9-5h-q14aii", "short_answer", "hard", 120,
  "DriveSafe hire firm offers a deal: \\(\\$25\\) plus 7 cents per km. If a client is to drive \\(x\\text{ km}\\), express the cost of hiring in terms of \\(x\\) (in dollars).",
  "25+0.07x",
  null,
  "The fixed cost is \\(\\$25\\). The variable cost is 7 cents (\\(\\$0.07\\)) per km. Total cost = \\(25 + 0.07x\\).",
  "Convert cents to dollars: 7 cents = \\(\\$0.07\\).",
  [{ explanation: "Formulate the expression.", workingOut: "25 + 0.07x" }]
);

addQuestion(
  "y9-5h-q14b", "short_answer", "hard", 120,
  "GoCar offers a deal of \\(\\$30 + 0.05x\\) and DriveSafe offers \\(\\$25 + 0.07x\\). For what distances in km (written as an inequality, e.g., \\(x > c\\)) does GoCar offer the better deal (cheaper)?",
  "x>250",
  null,
  "GoCar is cheaper when:\n\\(30 + 0.05x < 25 + 0.07x\\)\n\\(5 < 0.02x\\)\n\\(x > 250\\text{ km}\\).",
  "Set up the inequality: GoCar cost < DriveSafe cost.",
  [
    { explanation: "Set up the inequality.", workingOut: "30 + 0.05x < 25 + 0.07x" },
    { explanation: "Isolate the variable terms.", workingOut: "5 < 0.02x" },
    { explanation: "Solve for x.", workingOut: "x > 250" }
  ]
);

// Write to file
const fileContent = `export const Y9_CH5H_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch5HQuestions.js!");
