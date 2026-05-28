const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch5FQuestions.js');

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
    t: "Literal equations",
    hint,
    solutionSteps: steps,
    graphData: null
  });
}

// Q1 List (easy, 30s)
const q1List = [
  { sub: 'a', eq: 'x + a = d', ans: 'd - a', step1: 'x = d - a', hint: 'Subtract a from both sides.' },
  { sub: 'b', eq: 'x - c = f', ans: 'f + c', step1: 'x = f + c', hint: 'Add c to both sides.' },
  { sub: 'c', eq: 'm - x = n', ans: 'm - n', step1: '-x = n - m', step2: 'x = m - n', hint: 'Isolate x by subtracting m and then multiplying by -1.' },
  { sub: 'd', eq: '-x + p = q', ans: 'p - q', step1: '-x = q - p', step2: 'x = p - q', hint: 'Subtract p then multiply by -1.' },
  { sub: 'e', eq: 'ax = d', ans: '\\frac{d}{a}', step1: 'x = \\frac{d}{a}', hint: 'Divide both sides by a.' },
  { sub: 'f', eq: 'd - ax = f', ans: '\\frac{d - f}{a}', step1: '-ax = f - d', step2: 'ax = d - f \\implies x = \\frac{d - f}{a}', hint: 'Subtract d then divide by -a.' },
  { sub: 'g', eq: 'p(x + q) = r', ans: '\\frac{r - pq}{p}', step1: 'x + q = \\frac{r}{p}', step2: 'x = \\frac{r}{p} - q = \\frac{r - pq}{p}', hint: 'Divide by p first, then subtract q.' },
  { sub: 'h', eq: 'a(bx + c) = d', ans: '\\frac{d - ac}{ab}', step1: 'bx + c = \\frac{d}{a}', step2: 'bx = \\frac{d}{a} - c \\implies x = \\frac{d - ac}{ab}', hint: 'Divide by a first, then subtract c and divide by b.' },
  { sub: 'i', eq: '\\frac{x}{m} = n', ans: 'mn', step1: 'x = mn', hint: 'Multiply both sides by m.' },
  { sub: 'j', eq: '\\frac{x + p}{q} = r', ans: 'qr - p', step1: 'x + p = qr', step2: 'x = qr - p', hint: 'Multiply by q first, then subtract p.' },
  { sub: 'k', eq: '\\frac{x}{p} + q = r', ans: 'p(r - q)', step1: '\\frac{x}{p} = r - q', step2: 'x = p(r - q)', hint: 'Subtract q first, then multiply by p.' },
  { sub: 'l', eq: '\\frac{ax}{b} = c', ans: '\\frac{bc}{a}', step1: 'ax = bc', step2: 'x = \\frac{bc}{a}', hint: 'Multiply by b, then divide by a.' },
  { sub: 'm', eq: '\\frac{px}{q} + r = s', ans: '\\frac{q(s - r)}{p}', step1: '\\frac{px}{q} = s - r', step2: 'px = q(s - r) \\implies x = \\frac{q(s - r)}{p}', hint: 'Subtract r first, then multiply by q and divide by p.' },
  { sub: 'n', eq: '\\frac{mx + n}{p} = q', ans: '\\frac{pq - n}{m}', step1: 'mx + n = pq', step2: 'mx = pq - n \\implies x = \\frac{pq - n}{m}', hint: 'Multiply by p, then subtract n and divide by m.' },
  { sub: 'o', eq: '\\frac{ax - b}{b} = a', ans: '\\frac{ab + b}{a}', step1: 'ax - b = ab', step2: 'ax = ab + b \\implies x = \\frac{ab + b}{a}', hint: 'Multiply by b, then add b and divide by a.' },
  { sub: 'p', eq: '\\frac{x}{a} + \\frac{b}{c} = d', ans: '\\frac{a(cd - b)}{c}', step1: '\\frac{x}{a} = d - \\frac{b}{c}', step2: 'x = a\\left(d - \\frac{b}{c}\\right) = \\frac{a(cd - b)}{c}', hint: 'Subtract \\frac{b}{c} first, then multiply by a.' },
  { sub: 'q', eq: '\\frac{x}{p} - \\frac{p}{q} = q', ans: '\\frac{p(q^2 + p)}{q}', step1: '\\frac{x}{p} = q + \\frac{p}{q}', step2: 'x = p\\left(q + \\frac{p}{q}\\right) = \\frac{p(q^2 + p)}{q}', hint: 'Add \\frac{p}{q} first, then multiply by p.' },
  { sub: 'r', eq: '\\frac{x}{a} - a = \\frac{b}{a}', ans: 'a^2 + b', step1: '\\frac{x}{a} = a + \\frac{b}{a}', step2: 'x = a\\left(a + \\frac{b}{a}\\right) = a^2 + b', hint: 'Add a first, then multiply by a.' }
];

q1List.forEach(q => {
  const steps = [
    { explanation: "Isolate the variable term.", workingOut: `${q.step1}` }
  ];
  if (q.step2) {
    steps.push({ explanation: "Solve for x.", workingOut: `${q.step2}` });
  }

  addQuestion(
    `y9-5f-q1${q.sub}`,
    `Solve the equation for \\(x\\): \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      (q.step2 ? `\\(${q.step2}\\)` : ''),
    q.hint,
    steps
  );
});

// Q2 List (easy, 30s)
const q2List = [
  { sub: 'a', eq: 'px + q = rx + s', ans: '\\frac{s - q}{p - r}', step1: 'px - rx = s - q', step2: 'x(p - r) = s - q \\implies x = \\frac{s - q}{p - r}', hint: 'Group terms with x on one side and other terms on the other side.' },
  { sub: 'b', eq: 'ax + b = bx - a', ans: '\\frac{a + b}{b - a}', step1: 'ax - bx = -a - b', step2: 'x(a - b) = -(a + b) \\implies x = \\frac{a + b}{b - a}', hint: 'Group x terms on one side, factorise, and solve.' },
  { sub: 'c', eq: 'p(x + q) = rx + s', ans: '\\frac{s - pq}{p - r}', step1: 'px + pq = rx + s', step2: 'px - rx = s - pq \\implies x(p - r) = s - pq \\implies x = \\frac{s - pq}{p - r}', hint: 'Expand the bracket first, then group the x terms.' },
  { sub: 'd', eq: 'p(x - q) = r(x - s)', ans: '\\frac{pq - rs}{p - r}', step1: 'px - pq = rx - rs', step2: 'px - rx = pq - rs \\implies x(p - r) = pq - rs \\implies x = \\frac{pq - rs}{p - r}', hint: 'Expand the brackets on both sides, then group the x terms.' }
];

q2List.forEach(q => {
  addQuestion(
    `y9-5f-q2${q.sub}`,
    `Solve the equation for \\(x\\): \\(${q.eq}\\)`,
    q.ans,
    `Solve \\(${q.eq}\\):\n` +
      `\\(${q.step1}\\)\n` +
      `\\(${q.step2}\\)`,
    q.hint,
    [
      { explanation: "Expand brackets (if any) and group the terms with x on one side.", workingOut: `${q.step1}` },
      { explanation: "Factor out x and divide by its coefficient.", workingOut: `${q.step2}` }
    ]
  );
});

// Write to file
const fileContent = `export const Y9_CH5F_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch5FQuestions.js!");
